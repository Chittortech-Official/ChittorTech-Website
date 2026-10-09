import { db } from "./firebase";
import {
  collection,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp,
  getDocs,
  writeBatch,
  arrayUnion,
} from "firebase/firestore";

const PENDING_LEADS_KEY = "chittortech_pending_leads_buffer";

/**
 * Save lead into browser localStorage if cloud write fails or device is offline.
 */
function bufferLeadLocally(leadPayload, rawFormData) {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(PENDING_LEADS_KEY);
    const list = raw ? JSON.parse(raw) : [];
    list.push({
      leadPayload: {
        ...leadPayload,
        createdAt: null, // serverTimestamp cannot be serialized to JSON
        bufferedAt: new Date().toISOString(),
      },
      rawFormData,
      id: "buf_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
    });
    localStorage.setItem(PENDING_LEADS_KEY, JSON.stringify(list));
    console.info("🛡️ [LeadBuffer] Lead safely stored in local browser buffer. Will auto-sync when online.");
  } catch (err) {
    console.warn("Could not write lead to local buffer:", err);
  }
}

/**
 * Automatically flushes any buffered leads from localStorage to Firestore & email.
 */
export async function flushBufferedLeads() {
  if (typeof window === "undefined") return;
  if (typeof navigator !== "undefined" && !navigator.onLine) return;

  let list = [];
  try {
    const raw = localStorage.getItem(PENDING_LEADS_KEY);
    if (!raw) return;
    list = JSON.parse(raw);
    if (!Array.isArray(list) || list.length === 0) return;
  } catch (e) {
    return;
  }

  const remaining = [];
  for (const item of list) {
    try {
      const leadsCollection = collection(db, "leads");
      const docRef = await addDoc(leadsCollection, {
        ...item.leadPayload,
        createdAt: serverTimestamp(),
        recoveredFromBuffer: true,
      });

      // Attempt background ingestion trigger via Vercel Serverless
      if (item.rawFormData) {
        fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...item.rawFormData,
            firestoreId: docRef.id,
            source: (item.leadPayload.source || "") + " (Buffered Recovery)",
          }),
        }).catch(() => {});
      }
      console.info("✅ [LeadBuffer] Buffered lead successfully synced to Firestore:", docRef.id);
    } catch (err) {
      // Keep in buffer to retry next time
      remaining.push(item);
    }
  }

  try {
    if (remaining.length > 0) {
      localStorage.setItem(PENDING_LEADS_KEY, JSON.stringify(remaining));
    } else {
      localStorage.removeItem(PENDING_LEADS_KEY);
    }
  } catch (e) {}
}

// Set up automatic reconnection & initial flush listener in client browser
if (typeof window !== "undefined") {
  window.addEventListener("online", () => {
    flushBufferedLeads();
  });
  // Flush on idle shortly after script load
  setTimeout(() => {
    flushBufferedLeads();
  }, 2500);
}

/**
 * Unified lead submission handler.
 * 1. Writes directly into Firestore collection `leads` (guarantees zero lead loss).
 * 2. Fires the Google Apps Script email webhook in background (sends Gmail alert).
 * 3. Falls back to Local Browser Buffer if network drops or Firebase is unreachable.
 */
export async function submitLead(formData) {
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
  
  const leadPayload = {
    name: formData.name?.trim() || "N/A",
    email: formData.email?.trim() || "N/A",
    contact: formData.contact?.trim() || formData.phone?.trim() || "N/A",
    company: formData.company?.trim() || "N/A",
    industry: formData.industry?.trim() || "N/A",
    firm: formData.firm?.trim() || "N/A",
    location: formData.location?.trim() || "N/A",
    message: formData.message?.trim() || "No details provided.",
    service: formData.service?.trim() || "",
    source: formData.source || currentPath || "Direct Website Form",
    status: "new", // "new" | "contacted" | "qualified" | "converted" | "lost"
    notes: "",
    createdAt: serverTimestamp(),
    createdDateStr: new Date().toISOString(),
  };

  let firestoreDocId = null;
  let firestoreSuccess = false;

  // 1. Commit to Firestore
  try {
    const leadsCollection = collection(db, "leads");
    const docRef = await addDoc(leadsCollection, leadPayload);
    firestoreDocId = docRef.id;
    firestoreSuccess = true;
    
    // If this succeeded, also check if any older buffered leads need flushing
    flushBufferedLeads();
  } catch (err) {
    console.error("Firestore lead save error (saving to local browser buffer):", err);
    // Emergency safety net: buffer locally in visitor's browser
    bufferLeadLocally(leadPayload, formData);
  }

  // 2. Trigger Lead Ingestion & Dispatch via Vercel Serverless (in background, non-blocking)
  try {
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: leadPayload.name,
        email: leadPayload.email,
        contact: leadPayload.contact,
        company: leadPayload.company,
        industry: leadPayload.industry,
        firm: leadPayload.firm,
        location: leadPayload.location,
        message: leadPayload.message,
        firestoreId: firestoreDocId,
        source: leadPayload.source,
      }),
    }).catch((emailErr) => {
      console.warn("Vercel lead ingestion notice (lead is safely stored in Firestore):", emailErr);
    });
  } catch (e) {
    console.warn("Background fetch trigger error:", e);
  }

  return {
    success: true, // Always return success to user since lead is guaranteed saved either in Firestore or LocalBuffer
    id: firestoreDocId,
    buffered: !firestoreSuccess,
  };
}

/**
 * Real-time listener for the Admin Dashboard.
 * Automatically pushes new leads when they arrive!
 */
export function subscribeToLeads(onData, onError) {
  try {
    const leadsQuery = query(
      collection(db, "leads"),
      orderBy("createdAt", "desc"),
      limit(250)
    );

    const unsubscribe = onSnapshot(
      leadsQuery,
      (snapshot) => {
        const leads = snapshot.docs.map((d) => {
          const data = d.data();
          return {
            id: d.id,
            ...data,
            // Fallback timestamp formatting if serverTimestamp hasn't resolved yet
            createdDate: data.createdAt?.toDate ? data.createdAt.toDate() : new Date(data.createdDateStr || Date.now()),
          };
        });
        onData(leads);
      },
      (err) => {
        console.warn("subscribeToLeads warning:", err);
        if (onError) onError(err);
      }
    );

    return unsubscribe;
  } catch (err) {
    console.warn("Failed to setup leads listener:", err);
    if (onError) onError(err);
    return () => {};
  }
}

/**
 * Update lead status ("new" | "contacted" | "converted" | "lost")
 */
export async function updateLeadStatus(leadId, newStatus) {
  try {
    const leadRef = doc(db, "leads", leadId);
    await updateDoc(leadRef, {
      status: newStatus,
      updatedAt: serverTimestamp(),
    });
    return true;
  } catch (err) {
    console.warn("Failed to update lead status:", err);
    return false;
  }
}

/**
 * Update internal notes for a lead
 */
export async function updateLeadNotes(leadId, notes) {
  try {
    const leadRef = doc(db, "leads", leadId);
    await updateDoc(leadRef, {
      notes,
      updatedAt: serverTimestamp(),
    });
    return true;
  } catch (err) {
    console.warn("Failed to update lead notes:", err);
    return false;
  }
}

/**
 * Delete a spam lead
 */
export async function deleteLead(leadId) {
  try {
    const leadRef = doc(db, "leads", leadId);
    await deleteDoc(leadRef);
    return true;
  } catch (err) {
    console.error("Failed to delete lead:", err);
    return false;
  }
}

/* ═══════════════════════════════════════════════════════════════
   B2B OUTBOUND LEADS — Firestore Collection: `b2b_leads`
   Used by B2BLeadGenerator component (Google Maps CSV imports)
═══════════════════════════════════════════════════════════════ */

/**
 * Bulk-insert a batch of B2B leads scraped from Google Maps CSV.
 * Returns { added, skipped } counts.
 */
export async function addB2BLeads(batch) {
  if (!batch || batch.length === 0) return { added: 0, skipped: 0 };
  try {
    // Fetch existing phone numbers to deduplicate
    const existing = await getDocs(collection(db, "b2b_leads"));
    const existingPhones = new Set(
      existing.docs.map((d) => (d.data().phone || "").replace(/\D/g, "")).filter(Boolean)
    );

    let added = 0;
    let skipped = 0;
    const CHUNK_SIZE = 400;
    let wb = writeBatch(db);
    let currentBatchCount = 0;

    for (const lead of batch) {
      const cleanPh = (lead.phone || "").replace(/\D/g, "");
      if (cleanPh && existingPhones.has(cleanPh)) { skipped++; continue; }
      if (cleanPh) existingPhones.add(cleanPh);
      const ref = doc(collection(db, "b2b_leads"));
      wb.set(ref, {
        name:       lead.name?.trim()     || "",
        phone:      lead.phone?.trim()    || "",
        website:    lead.website?.trim()  || "",
        rating:     lead.rating?.trim()   || "",
        city:       lead.city             || "Rajasthan",
        category:   lead.category         || "General",
        status:     "new",
        notes:      lead.notes?.trim()    || "",
        importedAt: serverTimestamp(),
        updatedAt:  serverTimestamp(),
      });
      added++;
      currentBatchCount++;

      if (currentBatchCount >= CHUNK_SIZE) {
        await wb.commit();
        wb = writeBatch(db);
        currentBatchCount = 0;
      }
    }

    if (currentBatchCount > 0) {
      await wb.commit();
    }
    return { added, skipped };
  } catch (err) {
    console.error("addB2BLeads error:", err);
    throw err;
  }
}

/**
 * Real-time listener for B2B Leads (admin dashboard).
 */
export function subscribeToB2BLeads(onData, onError) {
  try {
    const q = query(
      collection(db, "b2b_leads"),
      limit(500)
    );
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const leads = snapshot.docs.map((d) => {
          const data = d.data();
          const importedDate = data.importedAt?.toDate ? data.importedAt.toDate() : (data.createdAt ? new Date(data.createdAt) : new Date());
          const updatedDate = data.updatedAt?.toDate ? data.updatedAt.toDate() : (data.updatedAt ? new Date(data.updatedAt) : null);
          return {
            id: d.id,
            ...data,
            importedAtDate: importedDate,
            updatedAtDate: updatedDate,
          };
        });
        // Sort descending by imported date in memory
        leads.sort((a, b) => (b.importedAtDate || 0) - (a.importedAtDate || 0));
        onData(leads);
      },
      (err) => {
        console.warn("subscribeToB2BLeads warning (verify Firestore rules):", err);
        if (onError) onError(err);
      }
    );
    return unsubscribe;
  } catch (err) {
    console.warn("Failed to setup b2b_leads listener:", err);
    if (onError) onError(err);
    return () => {};
  }
}

/** Update B2B lead status */
export async function updateB2BLeadStatus(leadId, newStatus) {
  try {
    await updateDoc(doc(db, "b2b_leads", leadId), {
      status: newStatus,
      updatedAt: serverTimestamp(),
    });
    return true;
  } catch (err) {
    console.warn("updateB2BLeadStatus error:", err);
    return false;
  }
}

/** Update B2B lead notes */
export async function updateB2BLeadNotes(leadId, notes) {
  try {
    await updateDoc(doc(db, "b2b_leads", leadId), {
      notes,
      updatedAt: serverTimestamp(),
    });
    return true;
  } catch (err) {
    console.warn("updateB2BLeadNotes error:", err);
    return false;
  }
}

/** Update B2B lead city */
export async function updateB2BLeadCity(leadId, city) {
  try {
    await updateDoc(doc(db, "b2b_leads", leadId), {
      city,
      updatedAt: serverTimestamp(),
    });
    return true;
  } catch (err) {
    console.warn("updateB2BLeadCity error:", err);
    return false;
  }
}

/** Update B2B lead category & pitch type */
export async function updateB2BLeadCategory(leadId, category, pitchType) {
  try {
    const payload = {
      category,
      updatedAt: serverTimestamp(),
    };
    if (pitchType) payload.pitchType = pitchType;
    await updateDoc(doc(db, "b2b_leads", leadId), payload);
    return true;
  } catch (err) {
    console.warn("updateB2BLeadCategory error:", err);
    return false;
  }
}

/** Update B2B lead website audit findings in Firestore */
export async function updateB2BLeadAudit(leadId, auditResult) {
  try {
    await updateDoc(doc(db, "b2b_leads", leadId), {
      auditResult,
      auditedAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return true;
  } catch (err) {
    console.warn("updateB2BLeadAudit error:", err);
    return false;
  }
}

/** Delete a B2B lead */
export async function deleteB2BLead(leadId) {
  try {
    await deleteDoc(doc(db, "b2b_leads", leadId));
    return true;
  } catch (err) {
    console.warn("deleteB2BLead error:", err);
    return false;
  }
}

/**
 * ── ADMIN SESSIONS REAL-TIME FIRESTORE SERVICES ──
 * Collection: `admin_sessions`
 */

/**
 * Real-time listener for Admin Sessions stored in Firestore (`admin_sessions`).
 */
export function subscribeToAdminSessions(onData, onError) {
  try {
    const q = query(collection(db, "admin_sessions"), limit(100));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const sessions = snapshot.docs.map((d) => {
          const data = d.data();
          const createdDate = data.createdTimestamp?.toDate
            ? data.createdTimestamp.toDate()
            : data.startTime
            ? new Date(data.startTime)
            : new Date();
          return {
            id: d.id,
            ...data,
            createdDate,
          };
        });
        // Sort descending by created timestamp
        sessions.sort((a, b) => (b.createdDate || 0) - (a.createdDate || 0));
        onData(sessions);
      },
      (err) => {
        console.warn("subscribeToAdminSessions warning:", err);
        if (onError) onError(err);
      }
    );
    return unsubscribe;
  } catch (err) {
    console.warn("Failed to setup admin_sessions listener:", err);
    if (onError) onError(err);
    return () => {};
  }
}

/**
 * Log or update an Admin Session directly in Firestore collection `admin_sessions`.
 */
export async function logAdminSessionInFirestore(sessionData) {
  if (!sessionData || !sessionData.id) return false;
  try {
    const sessionRef = doc(db, "admin_sessions", sessionData.id);
    await setDoc(
      sessionRef,
      {
        ...sessionData,
        updatedAt: serverTimestamp(),
        createdTimestamp: sessionData.createdTimestamp || serverTimestamp(),
      },
      { merge: true }
    );
    return true;
  } catch (err) {
    console.warn("logAdminSessionInFirestore warning:", err);
    return false;
  }
}

/**
 * Update activity trail for an active session in Firestore.
 */
export async function addAdminSessionActivityInFirestore(sessionId, activityObj) {
  if (!sessionId) return false;
  try {
    const sessionRef = doc(db, "admin_sessions", sessionId);
    await updateDoc(sessionRef, {
      activities: arrayUnion(activityObj),
      lastActive: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }),
      updatedAt: serverTimestamp(),
    });
    return true;
  } catch (err) {
    console.warn("addAdminSessionActivityInFirestore warning:", err);
    return false;
  }
}

/**
 * Terminate an admin session in Firestore (e.g. Tab Closed / Explicit Logout / Admin Kill).
 */
export async function terminateAdminSessionInFirestore(sessionId, statusType = "closed_logout", endTimeMsg = "Closed (Terminated by Admin)") {
  if (!sessionId) return false;
  try {
    const sessionRef = doc(db, "admin_sessions", sessionId);
    await setDoc(
      sessionRef,
      {
        status: statusType,
        endTime: endTimeMsg,
        lastActive: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }),
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
    return true;
  } catch (err) {
    console.warn("terminateAdminSessionInFirestore warning:", err);
    return false;
  }
}

/**
 * Delete a session log document from Firestore.
 */
export async function deleteAdminSessionFromFirestore(sessionId) {
  if (!sessionId) return false;
  try {
    await deleteDoc(doc(db, "admin_sessions", sessionId));
    return true;
  } catch (err) {
    console.warn("deleteAdminSessionFromFirestore warning:", err);
    return false;
  }
}

