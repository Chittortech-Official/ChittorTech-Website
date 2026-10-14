"use client";

import React, { useState, useEffect, useMemo } from "react";
import { AdminConfirmModal, AdminFloatingToast } from "./AdminConfirmModal";
import ClientAccountManager from "./ClientAccountManager";
import ChittorTechInvoiceViewModal from "./ChittorTechInvoiceViewModal";
import { subscribeToClients } from "@/lib/leadService";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  query,
  limit,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

export default function ProjectInvoiceManager() {
  const [confirmModal, setConfirmModal] = useState(null);
  const [floatingToast, setFloatingToast] = useState("");
  const [activeSubTab, setActiveSubTab] = useState("clients"); // "clients" | "projects" | "invoices"
  const [clients, setClients] = useState([]);
  const [loadingClients, setLoadingClients] = useState(true);
  const [projects, setProjects] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingInvoices, setLoadingInvoices] = useState(true);

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Modal states
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [viewingInvoice, setViewingInvoice] = useState(null);
  const [editingProject, setEditingProject] = useState(null);

  // Project Form
  const [projName, setProjName] = useState("");
  const [projClientId, setProjClientId] = useState("");
  const [projStatus, setProjStatus] = useState("In Progress");
  const [projPhase, setProjPhase] = useState("Core API & Cloud Backend");
  const [projProgress, setProjProgress] = useState(45);
  const [projKickoff, setProjKickoff] = useState("");
  const [projLaunch, setProjLaunch] = useState("");
  const [projDomain, setProjDomain] = useState("");
  const [projHosting, setProjHosting] = useState("AWS Cloud / Vercel");

  // Rich Invoice Form State (Matching Bill-Generator-master)
  const [invDocNumber, setInvDocNumber] = useState("CT/2026/001");
  const [invDocDate, setInvDocDate] = useState("");
  const [invDueDate, setInvDueDate] = useState("");
  const [invClientId, setInvClientId] = useState("");
  const [invClientName, setInvClientName] = useState("");
  const [invClientAddress, setInvClientAddress] = useState("");
  const [invClientPhone, setInvClientPhone] = useState("");
  const [invProjName, setInvProjName] = useState("");
  const [invTitle, setInvTitle] = useState("");
  const [invItems, setInvItems] = useState([
    { id: 1, description: "Enterprise Cloud & Software Development", qty: 1, rate: 25000 },
  ]);
  const [invTaxPct, setInvTaxPct] = useState(0);
  const [invStatus, setInvStatus] = useState("UNPAID");
  const [invPaymentMode, setInvPaymentMode] = useState("Bank Transfer");
  const [invPaymentInfo, setInvPaymentInfo] = useState("Account Name: ChittorTech\nBank: ICICI Bank / HDFC Bank\nUPI ID: chittortech@icici");
  const [invTermsText, setInvTermsText] = useState(
    "Payment is due upon receipt of this milestone invoice.\nWork milestone deliverables will be released upon clearance.\nPlease make payments payable to ChittorTech official accounts."
  );
  const [invModalTab, setInvModalTab] = useState("form"); // "form" | "preview"

  const [actionFeedback, setActionFeedback] = useState("");

  // 1. Sync Projects Live from Firestore (Single Document Per Client Architecture)
  useEffect(() => {
    try {
      const q = query(collection(db, "projects"), limit(50));
      const unsubscribe = onSnapshot(
        q,
        async (snap) => {
          const list = [];
          const looseDocsToMigrate = [];

          snap.forEach((docSnap) => {
            const data = docSnap.data();
            const docId = docSnap.id;

            const items = Array.isArray(data.projects)
              ? data.projects
              : Array.isArray(data.list)
              ? data.list
              : null;

            if (items) {
              items.forEach((p) => {
                list.push({
                  ...p,
                  docId: docId,
                  clientId: p.clientId || data.clientId || docId,
                });
              });
            } else {
              // Legacy loose document (e.g. proj_mv557rij)
              const clientId = (data.clientId || "").trim().toLowerCase();
              list.push({
                id: docId,
                docId: docId,
                ...data,
                clientId: clientId || "unassigned",
              });
              if (clientId && clientId.includes("@") && docId !== clientId) {
                looseDocsToMigrate.push({ docId, data, clientId });
              }
            }
          });

          setProjects(list);
          setLoadingProjects(false);

          // Auto-migrate legacy loose documents into single client document
          if (looseDocsToMigrate.length > 0) {
            for (const item of looseDocsToMigrate) {
              try {
                const targetRef = doc(db, "projects", item.clientId);
                const targetSnap = await getDoc(targetRef);
                let current = [];
                if (targetSnap.exists()) {
                  const td = targetSnap.data();
                  current = Array.isArray(td.projects) ? [...td.projects] : Array.isArray(td.list) ? [...td.list] : [];
                }
                const projObj = {
                  ...item.data,
                  id: item.docId,
                  clientId: item.clientId,
                  createdAt: item.data.createdAt?.toDate ? item.data.createdAt.toDate().toISOString() : (item.data.createdAt || new Date().toISOString()),
                  updatedAt: new Date().toISOString(),
                };
                if (!current.some((p) => p.id === projObj.id || p.name === projObj.name)) {
                  current.unshift(projObj);
                }
                await setDoc(targetRef, {
                  clientId: item.clientId,
                  projects: current,
                  list: current,
                  updatedAt: serverTimestamp(),
                }, { merge: true });

                await deleteDoc(doc(db, "projects", item.docId));
                console.log(`✅ Migrated project ${item.docId} into projects/${item.clientId}`);
              } catch (migErr) {
                console.warn(`Could not migrate project ${item.docId}:`, migErr);
              }
            }
          }
        },
        (err) => {
          console.warn("Projects sync error:", err);
          setLoadingProjects(false);
        }
      );
      return () => unsubscribe();
    } catch (e) {
      console.warn("Failed to listen to projects:", e);
      setLoadingProjects(false);
    }
  }, []);

  // 2. Sync Invoices Live from Firestore (Single Document Per Client Architecture)
  useEffect(() => {
    try {
      const q = query(collection(db, "invoices"), limit(50));
      const unsubscribe = onSnapshot(
        q,
        async (snap) => {
          const list = [];
          const looseDocsToMigrate = [];

          snap.forEach((docSnap) => {
            const data = docSnap.data();
            const docId = docSnap.id;

            const items = Array.isArray(data.invoices)
              ? data.invoices
              : Array.isArray(data.list)
              ? data.list
              : null;

            if (items) {
              items.forEach((inv) => {
                list.push({
                  ...inv,
                  docId: docId,
                  clientId: inv.clientId || data.clientId || docId,
                });
              });
            } else {
              // Legacy loose document (e.g. inv_mv558t1l)
              const clientId = (data.clientId || "").trim().toLowerCase();
              list.push({
                id: docId,
                docId: docId,
                ...data,
                clientId: clientId || "unassigned",
              });
              if (clientId && clientId.includes("@") && docId !== clientId) {
                looseDocsToMigrate.push({ docId, data, clientId });
              }
            }
          });

          setInvoices(list);
          setLoadingInvoices(false);

          // Auto-migrate legacy loose documents into single client document
          if (looseDocsToMigrate.length > 0) {
            for (const item of looseDocsToMigrate) {
              try {
                const targetRef = doc(db, "invoices", item.clientId);
                const targetSnap = await getDoc(targetRef);
                let current = [];
                if (targetSnap.exists()) {
                  const td = targetSnap.data();
                  current = Array.isArray(td.invoices) ? [...td.invoices] : Array.isArray(td.list) ? [...td.list] : [];
                }
                const invObj = {
                  ...item.data,
                  id: item.docId,
                  clientId: item.clientId,
                  createdAt: item.data.createdAt?.toDate ? item.data.createdAt.toDate().toISOString() : (item.data.createdAt || new Date().toISOString()),
                  createdDateString: item.data.createdDateString || new Date().toLocaleDateString("en-IN"),
                };
                if (!current.some((i) => i.id === invObj.id || i.invoiceId === invObj.invoiceId)) {
                  current.unshift(invObj);
                }
                await setDoc(targetRef, {
                  clientId: item.clientId,
                  invoices: current,
                  list: current,
                  updatedAt: serverTimestamp(),
                }, { merge: true });

                await deleteDoc(doc(db, "invoices", item.docId));
                console.log(`✅ Migrated invoice ${item.docId} into invoices/${item.clientId}`);
              } catch (migErr) {
                console.warn(`Could not migrate invoice ${item.docId}:`, migErr);
              }
            }
          }
        },
        (err) => {
          console.warn("Invoices sync error:", err);
          setLoadingInvoices(false);
        }
      );
      return () => unsubscribe();
    } catch (e) {
      console.warn("Failed to listen to invoices:", e);
      setLoadingInvoices(false);
    }
  }, []);

  // 3. Sync Clients Live from Firestore
  useEffect(() => {
    const unsubscribe = subscribeToClients(
      (list) => {
        setClients(list);
        setLoadingClients(false);
      },
      (err) => {
        console.warn("Clients sync warning:", err);
        setLoadingClients(false);
      }
    );
    return () => unsubscribe && unsubscribe();
  }, []);

  // Save / Update Project (Stored within Client's Single Document)
  const handleSaveProject = async (e) => {
    e.preventDefault();
    if (!projName.trim() || !projClientId.trim()) {
      alert("Please provide Project Name and Client Email.");
      return;
    }

    const targetClientId = projClientId.trim().toLowerCase();
    const clientDocRef = doc(db, "projects", targetClientId);

    try {
      const snap = await getDoc(clientDocRef);
      let currentProjects = [];
      if (snap.exists()) {
        const d = snap.data();
        currentProjects = Array.isArray(d.projects) ? [...d.projects] : Array.isArray(d.list) ? [...d.list] : [];
      }

      if (editingProject) {
        const projId = editingProject.id;
        const existingIdx = currentProjects.findIndex((p) => p.id === projId);
        const updatedObj = {
          ...(existingIdx >= 0 ? currentProjects[existingIdx] : editingProject),
          name: projName.trim(),
          clientId: targetClientId,
          status: projStatus,
          currentPhase: projPhase.trim() || "Development Sprint",
          milestoneProgress: Number(projProgress) || 0,
          buildKickoffDate: projKickoff.trim() || new Date().toISOString().split("T")[0],
          launchDate: projLaunch.trim() || "TBD",
          domain: projDomain.trim() || "Not Configured",
          hostingProvider: projHosting.trim() || "AWS Cloud",
          updatedAt: new Date().toISOString(),
        };

        if (existingIdx >= 0) {
          currentProjects[existingIdx] = updatedObj;
        } else {
          currentProjects.unshift(updatedObj);
        }

        // Clean up legacy loose document if it existed
        if (editingProject.docId && editingProject.docId !== targetClientId) {
          try { await deleteDoc(doc(db, "projects", editingProject.docId)); } catch (e) {}
        }

        await setDoc(clientDocRef, {
          clientId: targetClientId,
          projects: currentProjects,
          list: currentProjects,
          updatedAt: serverTimestamp(),
        }, { merge: true });

        // Write notification record to notifications collection
        try {
          await addDoc(collection(db, "notifications"), {
            title: "🚀 Project Milestone Updated: " + projName.trim(),
            message: "Your project \"" + projName.trim() + "\" has been updated to phase: " + projPhase.trim() + " (" + (Number(projProgress) || 0) + "%)",
            category: "Project",
            targetRole: "client",
            targetEmail: targetClientId,
            timestamp: serverTimestamp(),
            type: "UPDATE",
            target: "SPECIFIC_CLIENT",
            targetClientId: targetClientId,
            createdAt: new Date().toISOString(),
            sentBy: "ChittorTech Admin Console",
            channel: "FCM_PUSH_AND_INAPP",
          });
          fetch("/api/send-fcm-push", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              title: "🚀 Project Milestone Updated: " + projName.trim(),
              message: "Your project \"" + projName.trim() + "\" has been updated to phase: " + projPhase.trim() + " (" + (Number(projProgress) || 0) + "%)",
              type: "UPDATE",
              target: "SPECIFIC_CLIENT",
              targetClientId: targetClientId,
            }),
          }).catch(() => {});
        } catch (notifErr) {
          console.warn("Failed to write project milestone notification:", notifErr);
        }

        closeProjectModal();
        setConfirmModal({
          isSuccess: true,
          title: "Project Updated Successfully!",
          message: `Project "${projName}" details have been updated in ${targetClientId}'s vault.`,
          confirmText: "Done",
          confirmBg: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        });
      } else {
        const docKey = "proj_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 6);
        const newProjectObj = {
          id: docKey,
          name: projName.trim(),
          clientId: targetClientId,
          status: projStatus,
          currentPhase: projPhase.trim() || "Development Sprint",
          milestoneProgress: Number(projProgress) || 0,
          buildKickoffDate: projKickoff.trim() || new Date().toISOString().split("T")[0],
          launchDate: projLaunch.trim() || "TBD",
          domain: projDomain.trim() || "Not Configured",
          hostingProvider: projHosting.trim() || "AWS Cloud",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        currentProjects.unshift(newProjectObj);

        await setDoc(clientDocRef, {
          clientId: targetClientId,
          projects: currentProjects,
          list: currentProjects,
          updatedAt: serverTimestamp(),
        }, { merge: true });

        // Write notification record to notifications collection
        try {
          await addDoc(collection(db, "notifications"), {
            title: "🚀 Project Configured: " + projName.trim(),
            message: "Your project \"" + projName.trim() + "\" has been updated to phase: " + (projPhase.trim() || "Development Sprint") + " (" + (Number(projProgress) || 0) + "%)",
            category: "Project",
            targetRole: "client",
            targetEmail: targetClientId,
            timestamp: serverTimestamp(),
            type: "UPDATE",
            target: "SPECIFIC_CLIENT",
            targetClientId: targetClientId,
            createdAt: new Date().toISOString(),
            sentBy: "ChittorTech Admin Console",
            channel: "FCM_PUSH_AND_INAPP",
          });
          fetch("/api/send-fcm-push", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              title: "🚀 Project Configured: " + projName.trim(),
              message: "Your project \"" + projName.trim() + "\" has been updated to phase: " + (projPhase.trim() || "Development Sprint") + " (" + (Number(projProgress) || 0) + "%)",
              type: "UPDATE",
              target: "SPECIFIC_CLIENT",
              targetClientId: targetClientId,
            }),
          }).catch(() => {});
        } catch (notifErr) {
          console.warn("Failed to write project configure notification:", notifErr);
        }

        closeProjectModal();
        setConfirmModal({
          isSuccess: true,
          title: "Project Registered Successfully!",
          message: `New client project "${projName}" has been stored into ${targetClientId}'s single document.`,
          confirmText: "Done",
          confirmBg: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        });
      }
    } catch (err) {
      setConfirmModal({
        isSuccess: false,
        title: "Project Save Error",
        message: err.message || "Failed to save project.",
        icon: "fas fa-exclamation-triangle",
        iconBg: "#fee2e2",
        iconColor: "#dc2626",
        confirmText: "Close",
        confirmBg: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      });
    }
  };

  const openNewProjectModal = () => {
    setEditingProject(null);
    setProjName("");
    setProjClientId("");
    setProjStatus("In Progress");
    setProjPhase("UI/UX & System Architecture");
    setProjProgress(30);
    setProjKickoff(new Date().toISOString().split("T")[0]);
    setProjLaunch("");
    setProjDomain("");
    setProjHosting("AWS Cloud / Vercel");
    setShowProjectModal(true);
  };

  const openEditProjectModal = (p) => {
    setEditingProject(p);
    setProjName(p.name || "");
    setProjClientId(p.clientId || "");
    setProjStatus(p.status || "In Progress");
    setProjPhase(p.currentPhase || "");
    setProjProgress(p.milestoneProgress || 0);
    setProjKickoff(p.buildKickoffDate || "");
    setProjLaunch(p.launchDate || "");
    setProjDomain(p.domain || "");
    setProjHosting(p.hostingProvider || "");
    setShowProjectModal(true);
  };

  const closeProjectModal = () => {
    setShowProjectModal(false);
    setEditingProject(null);
  };

  const handleDeleteProject = (id, name, projectObj) => {
    setConfirmModal({
      title: "Delete Project?",
      message: `Are you sure you want to delete project "${name}"? This action cannot be undone.`,
      icon: "fas fa-trash-alt",
      iconBg: "#fee2e2",
      iconColor: "#dc2626",
      confirmText: "Yes, Delete Project",
      confirmBg: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      cancelText: "Cancel",
      onConfirm: async () => {
        try {
          const clientId = (projectObj?.clientId || "").trim().toLowerCase();
          if (clientId) {
            const clientDocRef = doc(db, "projects", clientId);
            const snap = await getDoc(clientDocRef);
            if (snap.exists()) {
              const d = snap.data();
              const currentProjects = Array.isArray(d.projects) ? d.projects : Array.isArray(d.list) ? d.list : [];
              const remaining = currentProjects.filter((p) => p.id !== id);
              await setDoc(clientDocRef, {
                projects: remaining,
                list: remaining,
                updatedAt: serverTimestamp(),
              }, { merge: true });
            }
          }
          if (projectObj?.docId && projectObj.docId !== clientId) {
            await deleteDoc(doc(db, "projects", projectObj.docId));
          } else if (id && !clientId) {
            await deleteDoc(doc(db, "projects", id));
          }

          setConfirmModal({
            isSuccess: true,
            title: "Project Deleted Successfully!",
            message: `Project "${name}" has been permanently removed from the client vault.`,
            confirmText: "Done",
            confirmBg: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
          });
        } catch (err) {
          setConfirmModal({
            isSuccess: false,
            title: "Delete Failed",
            message: err.message || "Failed to delete project.",
            icon: "fas fa-exclamation-triangle",
            iconBg: "#fee2e2",
            iconColor: "#dc2626",
            confirmText: "Close",
            confirmBg: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
          });
        }
      },
    });
  };

  // Helpers for Rich Itemized Invoices
  const openNewInvoiceModal = () => {
    const year = new Date().getFullYear();
    const count = invoices.length + 1;
    const autoDocNum = `CT/${year}/${String(count).padStart(3, "0")}`;
    setInvDocNumber(autoDocNum);
    setInvDocDate(new Date().toISOString().split("T")[0]);
    setInvDueDate(new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0]);
    setInvClientId("");
    setInvClientName("");
    setInvClientAddress("");
    setInvClientPhone("");
    setInvProjName("");
    setInvTitle("Enterprise Web & Cloud Infrastructure Deliverable");
    setInvItems([
      { id: 1, description: "Premium Web & Mobile Architecture Sprint", qty: 1, rate: 25000 },
    ]);
    setInvTaxPct(0);
    setInvStatus("UNPAID");
    setInvPaymentMode("Bank Transfer");
    setInvPaymentInfo("Account Name: ChittorTech\nBank: ICICI Bank / HDFC Bank\nUPI ID: chittortech@icici");
    setInvTermsText(
      "Payment is due upon receipt of this milestone invoice.\nWork milestone deliverables will be released upon clearance.\nPlease make payments payable to ChittorTech official accounts."
    );
    setInvModalTab("form");
    setShowInvoiceModal(true);
  };

  const handleClientSelect = (email) => {
    setInvClientId(email);
    const found = clients.find((c) => (c.email || "").toLowerCase() === email.toLowerCase());
    if (found) {
      setInvClientName(found.name || "");
      setInvClientPhone(found.phone || "");
      setInvClientAddress(found.address || found.location || "Chittorgarh, Rajasthan");
    }
    // Auto-select associated project if exists for this client
    const clientProj = projects.find((p) => (p.clientId || "").toLowerCase() === email.toLowerCase());
    if (clientProj) {
      setInvProjName(clientProj.name);
    }
  };

  const addInvItem = () => {
    setInvItems([...invItems, { id: Date.now(), description: "", qty: 1, rate: 0 }]);
  };

  const removeInvItem = (id) => {
    if (invItems.length <= 1) {
      alert("At least one item is required in the invoice.");
      return;
    }
    setInvItems(invItems.filter((i) => i.id !== id));
  };

  const updateInvItem = (id, field, value) => {
    setInvItems(
      invItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [field]: field === "qty" || field === "rate" ? Number(value) || 0 : value,
          };
        }
        return item;
      })
    );
  };

  // Calculations
  const calculatedInvSubtotal = useMemo(() => {
    return invItems.reduce((acc, it) => acc + (Number(it.qty || 1) * Number(it.rate || 0)), 0);
  }, [invItems]);

  const calculatedInvTaxAmt = useMemo(() => {
    return (calculatedInvSubtotal * (Number(invTaxPct) || 0)) / 100;
  }, [calculatedInvSubtotal, invTaxPct]);

  const calculatedInvGrandTotal = useMemo(() => {
    return calculatedInvSubtotal + calculatedInvTaxAmt;
  }, [calculatedInvSubtotal, calculatedInvTaxAmt]);

  // Issue Invoice (Stored within Client's Single Document)
  const handleSaveInvoice = async (e) => {
    e.preventDefault();
    if (!invClientId.trim()) {
      alert("Please provide or select a Client Email.");
      return;
    }

    const targetClientId = invClientId.trim().toLowerCase();
    const clientDocRef = doc(db, "invoices", targetClientId);

    const year = new Date().getFullYear();
    const finalDocNum = (invDocNumber.trim() || `CT/${year}/${String(invoices.length + 1).padStart(3, "0")}`).toUpperCase();
    const newInvId = "inv_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 6);

    const termsArray = invTermsText
      .split("\n")
      .map((t) => t.trim())
      .filter(Boolean);

    const newInvoiceObj = {
      id: newInvId,
      invoiceId: finalDocNum,
      docNumber: finalDocNum,
      clientId: targetClientId,
      clientName: invClientName.trim() || targetClientId,
      clientAddress: invClientAddress.trim() || "Chittorgarh, Rajasthan – 312001",
      clientPhone: invClientPhone.trim() || "—",
      clientEmail: targetClientId,
      companyName: "ChittorTech",
      companyAddress: "Chittorgarh, Rajasthan – 312001",
      companyPhone: "+91 7597451057",
      companyEmail: "business@chittortech.in",
      companyWebsite: "chittortech.in",
      projectId: invProjName.trim() || "ChittorTech Enterprise Sprint",
      title: invTitle.trim() || (invItems[0]?.description || "Project Milestone Deliverable"),
      items: invItems.map((item, idx) => ({
        id: item.id || idx + 1,
        description: item.description.trim() || `Service Deliverable ${idx + 1}`,
        qty: Number(item.qty) || 1,
        rate: Number(item.rate) || 0,
        amount: (Number(item.qty) || 1) * (Number(item.rate) || 0),
      })),
      lineItems: invItems.map((item, idx) => ({
        description: item.description.trim() || `Service Deliverable ${idx + 1}`,
        amount: (Number(item.qty) || 1) * (Number(item.rate) || 0),
        qty: Number(item.qty) || 1,
        rate: Number(item.rate) || 0,
      })),
      subtotal: calculatedInvSubtotal,
      taxPct: Number(invTaxPct) || 0,
      taxAmt: calculatedInvTaxAmt,
      amount: calculatedInvGrandTotal,
      status: invStatus,
      invoiceDate: invDocDate || new Date().toISOString().split("T")[0],
      dueDate: invDueDate || new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0],
      paymentMode: invPaymentMode,
      paymentInfo: invPaymentInfo,
      terms: termsArray,
      termsText: invTermsText,
      createdAt: new Date().toISOString(),
      createdDateString: new Date().toLocaleDateString("en-IN"),
    };

    try {
      const snap = await getDoc(clientDocRef);
      let currentInvoices = [];
      if (snap.exists()) {
        const d = snap.data();
        currentInvoices = Array.isArray(d.invoices) ? [...d.invoices] : Array.isArray(d.list) ? [...d.list] : [];
      }

      currentInvoices.unshift(newInvoiceObj);

      await setDoc(clientDocRef, {
        clientId: targetClientId,
        invoices: currentInvoices,
        list: currentInvoices,
        updatedAt: serverTimestamp(),
      }, { merge: true });

      // Write notification record to notifications collection
      try {
        await addDoc(collection(db, "notifications"), {
          title: "📄 New Invoice Issued: " + finalDocNum,
          message: (newInvoiceObj.title) + " • ₹" + Number(calculatedInvGrandTotal).toLocaleString("en-IN") + " (" + invStatus + ")",
          category: "Billing",
          targetRole: "client",
          targetEmail: targetClientId,
          timestamp: serverTimestamp(),
          type: "UPDATE",
          target: "SPECIFIC_CLIENT",
          targetClientId: targetClientId,
          createdAt: new Date().toISOString(),
          sentBy: "ChittorTech Admin Console",
          channel: "FCM_PUSH_AND_INAPP",
        });
        fetch("/api/send-fcm-push", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: "📄 New Invoice Issued: " + finalDocNum,
            message: (newInvoiceObj.title) + " • ₹" + Number(calculatedInvGrandTotal).toLocaleString("en-IN") + " (" + invStatus + ")",
            type: "UPDATE",
            target: "SPECIFIC_CLIENT",
            targetClientId: targetClientId,
          }),
        }).catch(() => {});
      } catch (notifErr) {
        console.warn("Failed to write invoice notification:", notifErr);
      }

      setShowInvoiceModal(false);
      setConfirmModal({
        isSuccess: true,
        title: "Official Invoice Generated Successfully!",
        message: `Invoice (${finalDocNum}) has been saved for ${targetClientId}. You can now view, print, or download the A4 PDF anytime.`,
        confirmText: "Done",
        confirmBg: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      });
    } catch (err) {
      setConfirmModal({
        isSuccess: false,
        title: "Invoice Generation Error",
        message: err.message || "Failed to generate invoice.",
        icon: "fas fa-exclamation-triangle",
        iconBg: "#fee2e2",
        iconColor: "#dc2626",
        confirmText: "Close",
        confirmBg: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      });
    }
  };

  const toggleInvoiceStatus = async (inv) => {
    const newStatus = inv.status === "PAID" ? "UNPAID" : "PAID";
    const clientId = (inv.clientId || "").trim().toLowerCase();

    try {
      if (clientId) {
        const clientDocRef = doc(db, "invoices", clientId);
        const snap = await getDoc(clientDocRef);
        if (snap.exists()) {
          const d = snap.data();
          const currentInvoices = Array.isArray(d.invoices) ? [...d.invoices] : Array.isArray(d.list) ? [...d.list] : [];
          const idx = currentInvoices.findIndex((i) => i.id === inv.id || i.invoiceId === inv.invoiceId);
          if (idx >= 0) {
            currentInvoices[idx].status = newStatus;
            await setDoc(clientDocRef, {
              invoices: currentInvoices,
              list: currentInvoices,
              updatedAt: serverTimestamp(),
            }, { merge: true });
          }
        }
      }
      if (inv.docId && inv.docId !== clientId) {
        await updateDoc(doc(db, "invoices", inv.docId), { status: newStatus });
      }

      // Write notification record for invoice status update
      try {
        const invNum = inv.invoiceId || inv.id || "Invoice";
        const invTitleStr = inv.title || inv.projectName || "Milestone Deliverable";
        const invAmtNum = Number(inv.amount || 0);
        await addDoc(collection(db, "notifications"), {
          title: newStatus === "PAID" ? "✅ Invoice Payment Confirmed: " + invNum : "⏳ Invoice Marked " + newStatus + ": " + invNum,
          message: (invTitleStr || "Milestone Deliverable") + " • ₹" + invAmtNum.toLocaleString("en-IN") + " (" + newStatus + ")",
          category: "Billing",
          targetRole: "client",
          targetEmail: clientId,
          timestamp: serverTimestamp(),
          type: "UPDATE",
          target: "SPECIFIC_CLIENT",
          targetClientId: clientId,
          createdAt: new Date().toISOString(),
          sentBy: "ChittorTech Admin Console",
          channel: "FCM_PUSH_AND_INAPP",
        });
        fetch("/api/send-fcm-push", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: newStatus === "PAID" ? "✅ Invoice Payment Confirmed: " + invNum : "⏳ Invoice Marked " + newStatus + ": " + invNum,
            message: (invTitleStr || "Milestone Deliverable") + " • ₹" + invAmtNum.toLocaleString("en-IN") + " (" + newStatus + ")",
            type: "UPDATE",
            target: "SPECIFIC_CLIENT",
            targetClientId: clientId,
          }),
        }).catch(() => {});
      } catch (notifErr) {
        console.warn("Failed to write invoice status notification:", notifErr);
      }

      setActionFeedback(`Invoice ${inv.invoiceId || ""} marked as ${newStatus}!`);
      setTimeout(() => setActionFeedback(""), 3000);
    } catch (err) {
      alert("Error updating status: " + err.message);
    }
  };

  const handleDeleteInvoice = (id, invNum, invoiceObj) => {
    setConfirmModal({
      title: "Delete Invoice?",
      message: `Are you sure you want to delete invoice ${invNum}? This action cannot be undone.`,
      icon: "fas fa-trash-alt",
      iconBg: "#fee2e2",
      iconColor: "#dc2626",
      confirmText: "Yes, Delete Invoice",
      confirmBg: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      cancelText: "Cancel",
      onConfirm: async () => {
        try {
          const clientId = (invoiceObj?.clientId || "").trim().toLowerCase();
          if (clientId) {
            const clientDocRef = doc(db, "invoices", clientId);
            const snap = await getDoc(clientDocRef);
            if (snap.exists()) {
              const d = snap.data();
              const currentInvoices = Array.isArray(d.invoices) ? d.invoices : Array.isArray(d.list) ? d.list : [];
              const remaining = currentInvoices.filter((i) => i.id !== id && i.invoiceId !== invNum);
              await setDoc(clientDocRef, {
                invoices: remaining,
                list: remaining,
                updatedAt: serverTimestamp(),
              }, { merge: true });
            }
          }
          if (invoiceObj?.docId && invoiceObj.docId !== clientId) {
            await deleteDoc(doc(db, "invoices", invoiceObj.docId));
          } else if (id && !clientId) {
            await deleteDoc(doc(db, "invoices", id));
          }

          setConfirmModal({
            isSuccess: true,
            title: "Invoice Deleted Successfully!",
            message: `Invoice ${invNum || ""} has been permanently deleted from ${clientId || "the client"}'s vault.`,
            confirmText: "Done",
            confirmBg: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
          });
        } catch (err) {
          setConfirmModal({
            isSuccess: false,
            title: "Delete Failed",
            message: err.message || "Failed to delete invoice.",
            icon: "fas fa-exclamation-triangle",
            iconBg: "#fee2e2",
            iconColor: "#dc2626",
            confirmText: "Close",
            confirmBg: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
          });
        }
      },
    });
  };

  // Financial Metrics
  const totalInvoiced = invoices.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);
  const totalPaid = invoices.filter((i) => i.status === "PAID").reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);
  const totalPending = totalInvoiced - totalPaid;
  const unpaidInvoicesCount = invoices.filter((i) => i.status !== "PAID").length;

  // Filtered lists
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchSearch =
        !searchQuery ||
        (p.name && p.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.clientId && p.clientId.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.currentPhase && p.currentPhase.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchStatus = statusFilter === "all" || p.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [projects, searchQuery, statusFilter]);

  const filteredInvoices = useMemo(() => {
    return invoices.filter((i) => {
      const matchSearch =
        !searchQuery ||
        (i.invoiceId && i.invoiceId.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (i.clientId && i.clientId.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (i.projectId && i.projectId.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (i.title && i.title.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchStatus = statusFilter === "all" || i.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [invoices, searchQuery, statusFilter]);

  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto", paddingBottom: "32px" }}>
      {/* Title & Description Header */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px", marginBottom: "22px" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#f0f9ff", border: "1px solid #bae6fd", padding: "4px 10px", borderRadius: "20px", marginBottom: "8px" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#0284c7" }}></span>
            <span style={{ fontSize: "0.76rem", fontWeight: 700, color: "#0284c7", textTransform: "uppercase", letterSpacing: "0.5px" }}>Client Portal &amp; Billing Database</span>
          </div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0f172a", margin: "0 0 4px 0", letterSpacing: "-0.5px" }}>
            Projects &amp; Invoice Management
          </h1>
          <p style={{ margin: 0, color: "#64748b", fontSize: "0.9rem" }}>
            Manage client deliverables, milestone tracking, and issue billing invoices synchronized directly with the ChittorTech Mobile App.
          </p>
        </div>

        {/* Action Controls & Sub-Tab Switcher */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
          {/* Sub-Tabs Pill */}
          <div style={{ display: "inline-flex", background: "#f1f5f9", padding: "4px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
            <button
              onClick={() => {
                setActiveSubTab("clients");
                setStatusFilter("all");
              }}
              style={{
                padding: "8px 16px",
                borderRadius: "9px",
                border: "none",
                fontSize: "0.85rem",
                fontWeight: 700,
                cursor: "pointer",
                background: activeSubTab === "clients" ? "#ffffff" : "transparent",
                color: activeSubTab === "clients" ? "#0284c7" : "#64748b",
                boxShadow: activeSubTab === "clients" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <i className="fas fa-users-gear"></i>
              <span>Client Accounts ({clients.length})</span>
            </button>
            <button
              onClick={() => {
                setActiveSubTab("projects");
                setStatusFilter("all");
              }}
              style={{
                padding: "8px 16px",
                borderRadius: "9px",
                border: "none",
                fontSize: "0.85rem",
                fontWeight: 700,
                cursor: "pointer",
                background: activeSubTab === "projects" ? "#ffffff" : "transparent",
                color: activeSubTab === "projects" ? "#0284c7" : "#64748b",
                boxShadow: activeSubTab === "projects" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <i className="fas fa-cubes"></i>
              <span>Active Projects ({projects.length})</span>
            </button>
            <button
              onClick={() => {
                setActiveSubTab("invoices");
                setStatusFilter("all");
              }}
              style={{
                padding: "8px 16px",
                borderRadius: "9px",
                border: "none",
                fontSize: "0.85rem",
                fontWeight: 700,
                cursor: "pointer",
                background: activeSubTab === "invoices" ? "#ffffff" : "transparent",
                color: activeSubTab === "invoices" ? "#0284c7" : "#64748b",
                boxShadow: activeSubTab === "invoices" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <i className="fas fa-file-invoice-dollar"></i>
              <span>Invoices &amp; Billing ({invoices.length})</span>
            </button>
          </div>

          {activeSubTab === "projects" ? (
            <button
              onClick={openNewProjectModal}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 18px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #0284c7, #0369a1)",
                color: "#ffffff",
                border: "none",
                fontWeight: 700,
                fontSize: "0.88rem",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(2, 132, 199, 0.25)",
              }}
            >
              <i className="fas fa-plus"></i>
              <span>Create New Project</span>
            </button>
          ) : activeSubTab === "invoices" ? (
            <button
              onClick={openNewInvoiceModal}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 18px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #10b981, #059669)",
                color: "#ffffff",
                border: "none",
                fontWeight: 700,
                fontSize: "0.88rem",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(16, 185, 129, 0.25)",
              }}
            >
              <i className="fas fa-file-circle-plus"></i>
              <span>Issue New Invoice</span>
            </button>
          ) : null}
        </div>
      </div>

      {/* KPI Cards Row (Contextual to Clients, Projects or Invoices) */}
      {activeSubTab === "clients" ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "#ffffff", padding: "18px 20px", borderRadius: "16px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #0284c7, #38bdf8)" }}></div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase" }}>Registered Clients</span>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#f0f9ff", color: "#0284c7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-users"></i>
              </div>
            </div>
            <div style={{ fontSize: "1.9rem", fontWeight: 800, color: "#0f172a", marginTop: "8px" }}>{clients.length}</div>
            <div style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "4px" }}>Active in Cloud Firestore</div>
          </div>

          <div style={{ background: "#ffffff", padding: "18px 20px", borderRadius: "16px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #10b981, #34d399)" }}></div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase" }}>Mobile 2FA Active</span>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#ecfdf5", color: "#10b981", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-shield-halved"></i>
              </div>
            </div>
            <div style={{ fontSize: "1.9rem", fontWeight: 800, color: "#10b981", marginTop: "8px" }}>
              {clients.filter((c) => c.status !== "inactive").length}
            </div>
            <div style={{ fontSize: "0.75rem", color: "#059669", marginTop: "4px", fontWeight: 600 }}>OTP via Titan / GoDaddy</div>
          </div>

          <div style={{ background: "#ffffff", padding: "18px 20px", borderRadius: "16px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #3b82f6, #60a5fa)" }}></div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase" }}>Linked Projects</span>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#eff6ff", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-cubes"></i>
              </div>
            </div>
            <div style={{ fontSize: "1.9rem", fontWeight: 800, color: "#0f172a", marginTop: "8px" }}>
              {projects.length}
            </div>
            <div style={{ fontSize: "0.75rem", color: "#2563eb", marginTop: "4px", fontWeight: 600 }}>Active Client Sprints</div>
          </div>

          <div style={{ background: "#ffffff", padding: "18px 20px", borderRadius: "16px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #8b5cf6, #c084fc)" }}></div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase" }}>Total Documents</span>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#f5f3ff", color: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-file-lines"></i>
              </div>
            </div>
            <div style={{ fontSize: "1.9rem", fontWeight: 800, color: "#0f172a", marginTop: "8px" }}>
              {projects.length + invoices.length}
            </div>
            <div style={{ fontSize: "0.75rem", color: "#6d28d9", marginTop: "4px", fontWeight: 600 }}>Milestones &amp; Billing Invoices</div>
          </div>
        </div>
      ) : activeSubTab === "projects" ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "#ffffff", padding: "18px 20px", borderRadius: "16px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #0284c7, #38bdf8)" }}></div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase" }}>Total Projects</span>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#f0f9ff", color: "#0284c7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-cubes"></i>
              </div>
            </div>
            <div style={{ fontSize: "1.9rem", fontWeight: 800, color: "#0f172a", marginTop: "8px" }}>{projects.length}</div>
            <div style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "4px" }}>Active in Client Portal</div>
          </div>

          <div style={{ background: "#ffffff", padding: "18px 20px", borderRadius: "16px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #3b82f6, #60a5fa)" }}></div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase" }}>In Active Sprints</span>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#eff6ff", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-code-branch"></i>
              </div>
            </div>
            <div style={{ fontSize: "1.9rem", fontWeight: 800, color: "#0f172a", marginTop: "8px" }}>
              {projects.filter((p) => p.status === "In Progress" || p.status === "Code Review").length}
            </div>
            <div style={{ fontSize: "0.75rem", color: "#2563eb", marginTop: "4px", fontWeight: 600 }}>Development in Progress</div>
          </div>

          <div style={{ background: "#ffffff", padding: "18px 20px", borderRadius: "16px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #10b981, #34d399)" }}></div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase" }}>Live &amp; Active</span>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#ecfdf5", color: "#10b981", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-circle-check"></i>
              </div>
            </div>
            <div style={{ fontSize: "1.9rem", fontWeight: 800, color: "#0f172a", marginTop: "8px" }}>
              {projects.filter((p) => p.status === "Live & Active" || p.status === "Completed").length}
            </div>
            <div style={{ fontSize: "0.75rem", color: "#059669", marginTop: "4px", fontWeight: 600 }}>Deployed on Production</div>
          </div>

          <div style={{ background: "#ffffff", padding: "18px 20px", borderRadius: "16px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #8b5cf6, #c084fc)" }}></div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase" }}>Planning Phase</span>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#f5f3ff", color: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-compass-drafting"></i>
              </div>
            </div>
            <div style={{ fontSize: "1.9rem", fontWeight: 800, color: "#0f172a", marginTop: "8px" }}>
              {projects.filter((p) => p.status === "Planning").length}
            </div>
            <div style={{ fontSize: "0.75rem", color: "#6d28d9", marginTop: "4px", fontWeight: 600 }}>Architecture &amp; SOW</div>
          </div>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "#ffffff", padding: "18px 20px", borderRadius: "16px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #0284c7, #38bdf8)" }}></div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase" }}>Total Invoiced</span>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#f0f9ff", color: "#0284c7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-file-invoice"></i>
              </div>
            </div>
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#0f172a", marginTop: "8px" }}>
              ₹ {totalInvoiced.toLocaleString("en-IN")}
            </div>
            <div style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "4px" }}>{invoices.length} Total Billing Documents</div>
          </div>

          <div style={{ background: "#ffffff", padding: "18px 20px", borderRadius: "16px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #10b981, #34d399)" }}></div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase" }}>Total Collected</span>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#ecfdf5", color: "#10b981", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-check-circle"></i>
              </div>
            </div>
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#16a34a", marginTop: "8px" }}>
              ₹ {totalPaid.toLocaleString("en-IN")}
            </div>
            <div style={{ fontSize: "0.75rem", color: "#059669", marginTop: "4px", fontWeight: 600 }}>Cleared &amp; Received</div>
          </div>

          <div style={{ background: "#ffffff", padding: "18px 20px", borderRadius: "16px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #f59e0b, #fbbf24)" }}></div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase" }}>Pending Outstanding</span>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#fffbeb", color: "#d97706", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-clock"></i>
              </div>
            </div>
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#d97706", marginTop: "8px" }}>
              ₹ {totalPending.toLocaleString("en-IN")}
            </div>
            <div style={{ fontSize: "0.75rem", color: "#b45309", marginTop: "4px", fontWeight: 600 }}>Due from Clients</div>
          </div>

          <div style={{ background: "#ffffff", padding: "18px 20px", borderRadius: "16px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #ef4444, #f87171)" }}></div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase" }}>Unpaid Invoices</span>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#fef2f2", color: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-receipt"></i>
              </div>
            </div>
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#ef4444", marginTop: "8px" }}>
              {unpaidInvoicesCount}
            </div>
            <div style={{ fontSize: "0.75rem", color: "#dc2626", marginTop: "4px", fontWeight: 600 }}>Action Required</div>
          </div>
        </div>
      )}

      {actionFeedback && (
        <div style={{ background: "#ecfdf5", border: "1.5px solid #10b981", color: "#065f46", padding: "14px 20px", borderRadius: "12px", marginBottom: "20px", fontSize: "0.92rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 4px 12px rgba(16, 185, 129, 0.12)" }}>
          <i className="fas fa-check-circle" style={{ color: "#10b981", fontSize: "1.2rem" }}></i>
          <span>{actionFeedback}</span>
        </div>
      )}

      {/* SUB-TAB 0: CLIENT ACCOUNTS VIEW */}
      {activeSubTab === "clients" && (
        <ClientAccountManager
          clients={clients}
          loadingClients={loadingClients}
          projects={projects}
          invoices={invoices}
          onCreateProject={(clientEmail) => {
            setProjClientId(clientEmail);
            openNewProjectModal();
          }}
          onCreateInvoice={(clientEmail) => {
            openNewInvoiceModal();
            handleClientSelect(clientEmail);
          }}
          setConfirmModal={setConfirmModal}
          setFloatingToast={setFloatingToast}
        />
      )}

      {/* SUB-TAB 1: CLIENT PROJECTS VIEW */}
      {activeSubTab === "projects" && (
        <div style={{ background: "#ffffff", borderRadius: "18px", border: "1.5px solid #e2e8f0", padding: "24px", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div>
              <h3 style={{ margin: 0, fontSize: "1.15rem", fontWeight: 800, color: "#0f172a" }}>
                Active Client Projects ({filteredProjects.length})
              </h3>
              <p style={{ margin: 0, fontSize: "0.8rem", color: "#64748b" }}>Live deliverables synced with ChittorTech Mobile App</p>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ padding: "8px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.82rem", outline: "none", width: "180px" }}
              />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                style={{ padding: "8px 10px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.82rem", fontWeight: 600, background: "#ffffff" }}
              >
                <option value="all">All Statuses</option>
                <option value="Planning">Planning</option>
                <option value="In Progress">In Progress</option>
                <option value="Code Review">Code Review</option>
                <option value="Live & Active">Live &amp; Active</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          {loadingProjects ? (
            <div style={{ textAlign: "center", padding: "40px", color: "#64748b" }}>
              <i className="fas fa-spinner fa-spin" style={{ fontSize: "1.4rem", color: "#0284c7", marginBottom: "8px" }}></i>
              <div>Loading client projects...</div>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div style={{ textAlign: "center", padding: "48px 20px", color: "#94a3b8" }}>
              <i className="fas fa-folder-open" style={{ fontSize: "2.4rem", marginBottom: "10px", color: "#cbd5e1" }}></i>
              <p style={{ margin: 0, fontWeight: 700, color: "#64748b", fontSize: "1rem" }}>No Client Projects Found</p>
              <p style={{ margin: "4px 0 16px", fontSize: "0.85rem" }}>Create your first client project to sync with the mobile app.</p>
              <button
                onClick={openNewProjectModal}
                style={{ padding: "8px 16px", borderRadius: "8px", background: "#0284c7", color: "#ffffff", border: "none", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer" }}
              >
                + Register First Project
              </button>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "18px" }}>
              {filteredProjects.map((p) => (
                <div
                  key={p.id}
                  style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                    border: "1.5px solid #e2e8f0",
                    padding: "20px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div>
                    {/* Header: Status + Edit */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                      <span
                        style={{
                          fontSize: "0.74rem",
                          fontWeight: 700,
                          padding: "3px 10px",
                          borderRadius: "20px",
                          background:
                            p.status === "Live & Active" || p.status === "Completed"
                              ? "#ecfdf5"
                              : p.status === "In Progress"
                              ? "#eff6ff"
                              : p.status === "Code Review"
                              ? "#f5f3ff"
                              : "#fffbeb",
                          color:
                            p.status === "Live & Active" || p.status === "Completed"
                              ? "#10b981"
                              : p.status === "In Progress"
                              ? "#2563eb"
                              : p.status === "Code Review"
                              ? "#8b5cf6"
                              : "#d97706",
                          border: `1px solid ${
                            p.status === "Live & Active" || p.status === "Completed"
                              ? "#a7f3d0"
                              : p.status === "In Progress"
                              ? "#bfdbfe"
                              : "#e2e8f0"
                          }`,
                        }}
                      >
                        {p.status === "Live & Active" ? "🟢 Live & Active" : p.status === "Completed" ? "✅ Completed" : p.status === "In Progress" ? "🔵 In Progress" : p.status === "Code Review" ? "🟣 Code Review" : "🟡 Planning"}
                      </span>

                      <button
                        onClick={() => openEditProjectModal(p)}
                        style={{
                          background: "#f1f5f9",
                          border: "1px solid #cbd5e1",
                          borderRadius: "8px",
                          padding: "5px 10px",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#334155",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <i className="fas fa-pen"></i> Edit
                      </button>
                    </div>

                    {/* Project Title & Client ID */}
                    <h4 style={{ margin: "0 0 6px", fontSize: "1.1rem", fontWeight: 800, color: "#0f172a" }}>
                      {p.name}
                    </h4>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.78rem", color: "#0284c7", background: "#f0f9ff", padding: "3px 8px", borderRadius: "6px", fontWeight: 600, marginBottom: "14px" }}>
                      <i className="fas fa-user-circle"></i>
                      <span>Client ID: {p.clientId}</span>
                    </div>

                    {/* Current Phase */}
                    <div style={{ marginBottom: "12px" }}>
                      <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>Current Sprint Phase</span>
                      <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1e293b", marginTop: "2px" }}>
                        📌 {p.currentPhase || "Core Engineering Phase"}
                      </div>
                    </div>

                    {/* Progress Slider Display */}
                    <div style={{ marginBottom: "16px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                        <span style={{ fontSize: "0.72rem", color: "#64748b", fontWeight: 600 }}>Milestone Completion</span>
                        <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#0284c7" }}>{p.milestoneProgress || 0}%</span>
                      </div>
                      <div style={{ width: "100%", height: "7px", background: "#e2e8f0", borderRadius: "10px", overflow: "hidden" }}>
                        <div
                          style={{
                            width: `${Math.min(100, Math.max(0, p.milestoneProgress || 0))}%`,
                            height: "100%",
                            background: "linear-gradient(90deg, #0284c7, #10b981)",
                            borderRadius: "10px",
                            transition: "width 0.4s ease",
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Infrastructure Chips */}
                    <div style={{ background: "#f8fafc", borderRadius: "10px", padding: "10px 12px", border: "1px solid #f1f5f9", fontSize: "0.75rem", color: "#475569", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "14px" }}>
                      <div><strong>Domain:</strong> {p.domain || "TBD"}</div>
                      <div><strong>Cloud:</strong> {p.hostingProvider || "AWS"}</div>
                      <div><strong>Kickoff:</strong> {p.buildKickoffDate || "Recent"}</div>
                      <div><strong>Target:</strong> {p.launchDate || "TBD"}</div>
                    </div>
                  </div>

                  <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "12px", textAlign: "right" }}>
                    <button
                      onClick={() => handleDeleteProject(p.id, p.name, p)}
                      style={{ background: "transparent", color: "#ef4444", border: "none", fontSize: "0.75rem", fontWeight: 700, cursor: "pointer" }}
                    >
                      <i className="fas fa-trash-alt"></i> Delete Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* SUB-TAB 2: INVOICES & BILLING VIEW */}
      {activeSubTab === "invoices" && (
        <div style={{ background: "#ffffff", borderRadius: "18px", border: "1.5px solid #e2e8f0", padding: "24px", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div>
              <h3 style={{ margin: 0, fontSize: "1.15rem", fontWeight: 800, color: "#0f172a" }}>
                Client Invoices &amp; Settlements ({filteredInvoices.length})
              </h3>
              <p style={{ margin: 0, fontSize: "0.8rem", color: "#64748b" }}>Live payment tracking visible to clients in Mobile App</p>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
              <input
                type="text"
                placeholder="Search invoices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ padding: "8px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.82rem", outline: "none", width: "180px" }}
              />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                style={{ padding: "8px 10px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.82rem", fontWeight: 600, background: "#ffffff" }}
              >
                <option value="all">All Invoices</option>
                <option value="PAID">PAID</option>
                <option value="UNPAID">UNPAID</option>
                <option value="OVERDUE">OVERDUE</option>
              </select>
            </div>
          </div>

          {loadingInvoices ? (
            <div style={{ textAlign: "center", padding: "40px", color: "#64748b" }}>
              <i className="fas fa-spinner fa-spin" style={{ fontSize: "1.4rem", color: "#0284c7", marginBottom: "8px" }}></i>
              <div>Loading invoices...</div>
            </div>
          ) : filteredInvoices.length === 0 ? (
            <div style={{ textAlign: "center", padding: "48px 20px", color: "#94a3b8" }}>
              <i className="fas fa-file-invoice" style={{ fontSize: "2.4rem", marginBottom: "10px", color: "#cbd5e1" }}></i>
              <p style={{ margin: 0, fontWeight: 700, color: "#64748b", fontSize: "1rem" }}>No Invoices Issued Yet</p>
              <p style={{ margin: "4px 0 16px", fontSize: "0.85rem" }}>Issue your first milestone billing invoice.</p>
              <button
                onClick={openNewInvoiceModal}
                style={{ padding: "8px 16px", borderRadius: "8px", background: "#10b981", color: "#ffffff", border: "none", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer" }}
              >
                + Issue First Invoice
              </button>
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.85rem" }}>
                <thead>
                  <tr style={{ borderBottom: "1.5px solid #e2e8f0", color: "#64748b", textTransform: "uppercase", fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                    <th style={{ padding: "12px 14px" }}>Invoice ID</th>
                    <th style={{ padding: "12px 14px" }}>Client &amp; Project</th>
                    <th style={{ padding: "12px 14px" }}>Milestone Title</th>
                    <th style={{ padding: "12px 14px" }}>Amount (₹)</th>
                    <th style={{ padding: "12px 14px" }}>Due Date</th>
                    <th style={{ padding: "12px 14px" }}>Status</th>
                    <th style={{ padding: "12px 14px", textAlign: "right" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInvoices.map((inv) => (
                    <tr key={inv.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                      <td style={{ padding: "14px" }}>
                        <span style={{ fontWeight: 800, color: "#0f172a", background: "#f1f5f9", padding: "4px 8px", borderRadius: "6px", fontSize: "0.8rem", fontFamily: "monospace" }}>
                          {inv.invoiceId || inv.docNumber || "CT/2026/001"}
                        </span>
                      </td>
                      <td style={{ padding: "14px" }}>
                        <div style={{ fontWeight: 700, color: "#0f172a" }}>{inv.clientName || inv.clientId}</div>
                        <div style={{ color: "#64748b", fontSize: "0.76rem" }}>{inv.projectId}</div>
                      </td>
                      <td style={{ padding: "14px", color: "#334155", fontWeight: 600 }}>
                        {inv.title || "Development Milestone"}
                      </td>
                      <td style={{ padding: "14px" }}>
                        <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0f172a" }}>
                          ₹ {Number(inv.amount || 0).toLocaleString("en-IN")}
                        </span>
                      </td>
                      <td style={{ padding: "14px", color: "#64748b", fontSize: "0.8rem" }}>
                        {inv.dueDate || "Net 7 Days"}
                      </td>
                      <td style={{ padding: "14px" }}>
                        <span
                          style={{
                            padding: "4px 10px",
                            borderRadius: "20px",
                            fontSize: "0.72rem",
                            fontWeight: 800,
                            background: inv.status === "PAID" ? "#ecfdf5" : inv.status === "OVERDUE" ? "#fef2f2" : "#fffbeb",
                            color: inv.status === "PAID" ? "#10b981" : inv.status === "OVERDUE" ? "#ef4444" : "#d97706",
                            border: `1px solid ${inv.status === "PAID" ? "#a7f3d0" : inv.status === "OVERDUE" ? "#fca5a5" : "#fde68a"}`,
                          }}
                        >
                          {inv.status === "PAID" ? "✓ PAID" : inv.status === "OVERDUE" ? "⚠ OVERDUE" : "⏳ UNPAID"}
                        </span>
                      </td>
                      <td style={{ padding: "14px", textAlign: "right" }}>
                        <div style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                          <button
                            onClick={() => setViewingInvoice(inv)}
                            style={{
                              background: "#f0fdfa",
                              color: "#0d9488",
                              border: "1px solid #99f6e4",
                              padding: "5px 11px",
                              borderRadius: "6px",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              cursor: "pointer",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                            title="View, Print & Download Invoice"
                          >
                            <i className="fas fa-file-invoice"></i> View Bill
                          </button>
                          <button
                            onClick={() => toggleInvoiceStatus(inv)}
                            style={{
                              background: inv.status === "PAID" ? "#fffbeb" : "#ecfdf5",
                              color: inv.status === "PAID" ? "#d97706" : "#10b981",
                              border: `1px solid ${inv.status === "PAID" ? "#fde68a" : "#a7f3d0"}`,
                              padding: "5px 10px",
                              borderRadius: "6px",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              cursor: "pointer",
                            }}
                            title="Toggle Paid/Unpaid Status"
                          >
                            {inv.status === "PAID" ? "Mark Unpaid" : "Mark Paid ✓"}
                          </button>
                          <button
                            onClick={() => handleDeleteInvoice(inv.id, inv.invoiceId, inv)}
                            style={{ background: "#fee2e2", color: "#ef4444", border: "none", padding: "5px 10px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 700, cursor: "pointer" }}
                            title="Delete Invoice"
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* PROJECT MODAL */}
      {showProjectModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: "20px" }}>
          <div style={{ background: "#ffffff", borderRadius: "20px", width: "100%", maxWidth: "600px", padding: "28px", boxShadow: "0 20px 40px rgba(0,0,0,0.2)", maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid #f1f5f9", paddingBottom: "14px" }}>
              <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 800, color: "#0f172a" }}>
                {editingProject ? "✏️ Edit Client Project" : "➕ Register New Client Project"}
              </h3>
              <button onClick={closeProjectModal} style={{ background: "transparent", border: "none", fontSize: "1.2rem", cursor: "pointer", color: "#94a3b8" }}>
                &times;
              </button>
            </div>

            <form onSubmit={handleSaveProject}>
              <div style={{ marginBottom: "14px" }}>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>Project Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Acme Fleet ERP & Logistics App"
                  value={projName}
                  onChange={(e) => setProjName(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", boxSizing: "border-box" }}
                  required
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>Client Email / UID *</label>
                  {clients.length > 0 && (
                    <select
                      onChange={(e) => {
                        if (e.target.value) setProjClientId(e.target.value);
                      }}
                      value={clients.some((c) => c.email.toLowerCase() === projClientId.toLowerCase()) ? projClientId.toLowerCase() : ""}
                      style={{ width: "100%", padding: "7px 10px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.78rem", marginBottom: "6px", background: "#f8fafc", color: "#334155" }}
                    >
                      <option value="">-- Or Pick Registered Client ({clients.length}) --</option>
                      {clients.map((c) => (
                        <option key={c.id} value={c.email}>
                          {c.name} ({c.email})
                        </option>
                      ))}
                    </select>
                  )}
                  <input
                    type="email"
                    placeholder="client@example.com"
                    value={projClientId}
                    onChange={(e) => setProjClientId(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", boxSizing: "border-box" }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>Status</label>
                  <select
                    value={projStatus}
                    onChange={(e) => setProjStatus(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", background: "#ffffff", boxSizing: "border-box" }}
                  >
                    <option value="Planning">Planning</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Code Review">Code Review</option>
                    <option value="Live & Active">Live &amp; Active</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: "14px" }}>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>Current Milestone / Phase Description</label>
                <input
                  type="text"
                  placeholder="e.g. Phase 2: Core Cloud Backend & Database"
                  value={projPhase}
                  onChange={(e) => setProjPhase(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", boxSizing: "border-box" }}
                />
              </div>

              <div style={{ marginBottom: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1e293b" }}>Milestone Progress (%)</label>
                  <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0284c7" }}>{projProgress}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={projProgress}
                  onChange={(e) => setProjProgress(e.target.value)}
                  style={{ width: "100%", accentColor: "#0284c7", cursor: "pointer" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>Domain</label>
                  <input
                    type="text"
                    placeholder="e.g. app.acmecorp.com"
                    value={projDomain}
                    onChange={(e) => setProjDomain(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>Cloud / Hosting</label>
                  <input
                    type="text"
                    placeholder="e.g. AWS Mumbai / Vercel"
                    value={projHosting}
                    onChange={(e) => setProjHosting(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", boxSizing: "border-box" }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>Kickoff Date</label>
                  <input
                    type="date"
                    value={projKickoff}
                    onChange={(e) => setProjKickoff(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>Target Launch</label>
                  <input
                    type="date"
                    value={projLaunch}
                    onChange={(e) => setProjLaunch(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", boxSizing: "border-box" }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                <button type="button" onClick={closeProjectModal} style={{ padding: "10px 18px", borderRadius: "8px", border: "1px solid #cbd5e1", background: "#f8fafc", color: "#475569", fontWeight: 700, cursor: "pointer" }}>
                  Cancel
                </button>
                <button type="submit" style={{ padding: "10px 22px", borderRadius: "8px", background: "#0284c7", color: "#ffffff", border: "none", fontWeight: 700, cursor: "pointer" }}>
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* RICH INVOICE GENERATOR MODAL (Bill-Generator-master) */}
      {showInvoiceModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(11, 37, 69, 0.7)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "16px",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              width: "100%",
              maxWidth: invModalTab === "preview" ? "880px" : "780px",
              padding: "24px 28px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              maxHeight: "92vh",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              transition: "max-width 0.2s ease",
            }}
          >
            {/* Modal Header with Tab Selector */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "18px",
                borderBottom: "1.5px solid #f1f5f9",
                paddingBottom: "14px",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div>
                <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 800, color: "#0B2545" }}>
                  🧾 Issue ChittorTech Official Invoice
                </h3>
                <p style={{ margin: "2px 0 0", fontSize: "0.8rem", color: "#64748b" }}>
                  Generate professional A4 bills synchronized with Client Vault and Mobile App
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ display: "flex", background: "#f1f5f9", padding: "3px", borderRadius: "10px" }}>
                  <button
                    type="button"
                    onClick={() => setInvModalTab("form")}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "7px",
                      border: "none",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      background: invModalTab === "form" ? "#ffffff" : "transparent",
                      color: invModalTab === "form" ? "#0284c7" : "#64748b",
                      boxShadow: invModalTab === "form" ? "0 2px 4px rgba(0,0,0,0.06)" : "none",
                    }}
                  >
                    <i className="fas fa-pen-to-square" style={{ marginRight: "5px" }}></i>
                    Edit Bill Form
                  </button>
                  <button
                    type="button"
                    onClick={() => setInvModalTab("preview")}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "7px",
                      border: "none",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      background: invModalTab === "preview" ? "#ffffff" : "transparent",
                      color: invModalTab === "preview" ? "#0284c7" : "#64748b",
                      boxShadow: invModalTab === "preview" ? "0 2px 4px rgba(0,0,0,0.06)" : "none",
                    }}
                  >
                    <i className="fas fa-eye" style={{ marginRight: "5px" }}></i>
                    Live A4 Preview
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setShowInvoiceModal(false)}
                  style={{
                    background: "#f1f5f9",
                    border: "none",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                    color: "#64748b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  &times;
                </button>
              </div>
            </div>

            {/* TAB 1: FORM */}
            {invModalTab === "form" ? (
              <form onSubmit={handleSaveInvoice}>
                {/* 1. DOCUMENT META */}
                <div style={{ background: "#f8fafc", padding: "14px", borderRadius: "12px", border: "1px solid #e2e8f0", marginBottom: "16px" }}>
                  <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#0B2545", textTransform: "uppercase", marginBottom: "10px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <i className="fas fa-file-invoice" style={{ color: "#0284c7" }}></i>
                    Document Information
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: "10px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                        Invoice Number *
                      </label>
                      <input
                        type="text"
                        value={invDocNumber}
                        onChange={(e) => setInvDocNumber(e.target.value)}
                        placeholder="CT/2026/001"
                        style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem", boxSizing: "border-box", fontWeight: 700, color: "#0B2545" }}
                        required
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                        Invoice Date
                      </label>
                      <input
                        type="date"
                        value={invDocDate}
                        onChange={(e) => setInvDocDate(e.target.value)}
                        style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem", boxSizing: "border-box" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                        Due Date
                      </label>
                      <input
                        type="date"
                        value={invDueDate}
                        onChange={(e) => setInvDueDate(e.target.value)}
                        style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem", boxSizing: "border-box" }}
                      />
                    </div>
                  </div>
                </div>

                {/* 2. CLIENT SELECTION & DETAILS */}
                <div style={{ background: "#ffffff", padding: "14px", borderRadius: "12px", border: "1.5px solid #e2e8f0", marginBottom: "16px" }}>
                  <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#0B2545", textTransform: "uppercase", marginBottom: "10px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <i className="fas fa-user-check" style={{ color: "#10b981" }}></i>
                    Client &amp; Bill To Details
                  </div>

                  <div style={{ marginBottom: "10px" }}>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                      Select Client Account *
                    </label>
                    <select
                      value={invClientId}
                      onChange={(e) => handleClientSelect(e.target.value)}
                      style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem", background: "#f8fafc", boxSizing: "border-box", fontWeight: 600 }}
                    >
                      <option value="">-- Choose Registered Client ({clients.length}) or Enter Below --</option>
                      {clients.map((c) => (
                        <option key={c.id} value={c.email}>
                          {c.name || "Client"} — {c.email}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                        Customer / Company Name
                      </label>
                      <input
                        type="text"
                        value={invClientName}
                        onChange={(e) => setInvClientName(e.target.value)}
                        placeholder="Customer / Org Name"
                        style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem", boxSizing: "border-box" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                        Client Email *
                      </label>
                      <input
                        type="email"
                        value={invClientId}
                        onChange={(e) => setInvClientId(e.target.value)}
                        placeholder="client@example.com"
                        style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem", boxSizing: "border-box" }}
                        required
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "10px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                        Billing Address
                      </label>
                      <input
                        type="text"
                        value={invClientAddress}
                        onChange={(e) => setInvClientAddress(e.target.value)}
                        placeholder="Street, City, State – Pin Code"
                        style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem", boxSizing: "border-box" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                        Phone Number
                      </label>
                      <input
                        type="text"
                        value={invClientPhone}
                        onChange={(e) => setInvClientPhone(e.target.value)}
                        placeholder="+91 9876543210"
                        style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem", boxSizing: "border-box" }}
                      />
                    </div>
                  </div>
                </div>

                {/* 3. ASSOCIATED PROJECT & TITLE */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                      Associated Project
                    </label>
                    <input
                      type="text"
                      value={invProjName}
                      onChange={(e) => setInvProjName(e.target.value)}
                      placeholder="e.g. Mewari Achaar Mobile App"
                      style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem", boxSizing: "border-box" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                      Milestone / Document Title
                    </label>
                    <input
                      type="text"
                      value={invTitle}
                      onChange={(e) => setInvTitle(e.target.value)}
                      placeholder="e.g. UI/UX & Cloud Architecture Sprint"
                      style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem", boxSizing: "border-box" }}
                    />
                  </div>
                </div>

                {/* 4. DYNAMIC SERVICE LINE ITEMS (Bill-Generator-master) */}
                <div style={{ background: "#ffffff", padding: "14px", borderRadius: "12px", border: "1.5px solid #e2e8f0", marginBottom: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                    <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#0B2545", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "6px" }}>
                      <i className="fas fa-list-check" style={{ color: "#3CBFB4" }}></i>
                      Service Details &amp; Items ({invItems.length})
                    </div>
                    <button
                      type="button"
                      onClick={addInvItem}
                      style={{
                        background: "#3CBFB4",
                        color: "#ffffff",
                        border: "none",
                        padding: "5px 12px",
                        borderRadius: "6px",
                        fontSize: "0.76rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <i className="fas fa-plus"></i> Add Item
                    </button>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {invItems.map((item, idx) => {
                      const lineTotal = Number(item.qty || 1) * Number(item.rate || 0);
                      return (
                        <div
                          key={item.id}
                          style={{
                            display: "grid",
                            gridTemplateColumns: "30px 1fr 80px 110px 100px 32px",
                            gap: "8px",
                            alignItems: "center",
                            background: "#f8fafc",
                            padding: "8px 10px",
                            borderRadius: "8px",
                            border: "1px solid #e2e8f0",
                          }}
                        >
                          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#64748b", textAlign: "center" }}>
                            {idx + 1}
                          </span>
                          <input
                            type="text"
                            value={item.description}
                            onChange={(e) => updateInvItem(item.id, "description", e.target.value)}
                            placeholder="Item / Service Description"
                            style={{ padding: "6px 8px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "0.82rem", width: "100%", boxSizing: "border-box" }}
                            required
                          />
                          <input
                            type="number"
                            min="1"
                            value={item.qty}
                            onChange={(e) => updateInvItem(item.id, "qty", e.target.value)}
                            placeholder="Qty"
                            style={{ padding: "6px 8px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "0.82rem", textAlign: "center", width: "100%", boxSizing: "border-box" }}
                          />
                          <input
                            type="number"
                            min="0"
                            value={item.rate}
                            onChange={(e) => updateInvItem(item.id, "rate", e.target.value)}
                            placeholder="Rate (₹)"
                            style={{ padding: "6px 8px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "0.82rem", textAlign: "right", width: "100%", boxSizing: "border-box" }}
                          />
                          <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0B2545", textAlign: "right", paddingRight: "4px" }}>
                            ₹{lineTotal.toLocaleString("en-IN")}
                          </div>
                          <button
                            type="button"
                            onClick={() => removeInvItem(item.id)}
                            style={{
                              background: "transparent",
                              border: "none",
                              color: "#ef4444",
                              fontSize: "0.9rem",
                              cursor: "pointer",
                              padding: "4px",
                            }}
                            title="Remove Item"
                          >
                            <i className="fas fa-trash-can"></i>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 5. TAX, STATUS & TOTALS */}
                <div style={{ background: "#0B2545", color: "#ffffff", padding: "16px", borderRadius: "12px", marginBottom: "16px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.2fr", gap: "14px", alignItems: "center" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.75rem", color: "#94a3b8", fontWeight: 700, marginBottom: "4px" }}>
                        Sales Tax / GST (%)
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        step="0.1"
                        value={invTaxPct}
                        onChange={(e) => setInvTaxPct(e.target.value)}
                        placeholder="0"
                        style={{ width: "100%", padding: "7px 10px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.1)", color: "#ffffff", fontSize: "0.85rem", boxSizing: "border-box" }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.75rem", color: "#94a3b8", fontWeight: 700, marginBottom: "4px" }}>
                        Payment Status
                      </label>
                      <select
                        value={invStatus}
                        onChange={(e) => setInvStatus(e.target.value)}
                        style={{ width: "100%", padding: "7px 10px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.3)", background: "rgba(11, 37, 69, 0.9)", color: "#ffffff", fontSize: "0.85rem", boxSizing: "border-box" }}
                      >
                        <option value="UNPAID">⏳ UNPAID / PENDING</option>
                        <option value="PAID">✓ PAID</option>
                        <option value="OVERDUE">⚠ OVERDUE</option>
                      </select>
                    </div>

                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
                        Subtotal: ₹{calculatedInvSubtotal.toLocaleString("en-IN")}
                        {Number(invTaxPct) > 0 && ` + Tax (${invTaxPct}%): ₹${calculatedInvTaxAmt.toLocaleString("en-IN")}`}
                      </div>
                      <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "#3CBFB4", marginTop: "2px" }}>
                        ₹ {calculatedInvGrandTotal.toLocaleString("en-IN")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. PAYMENT METHOD & TERMS */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                      Payment Method
                    </label>
                    <select
                      value={invPaymentMode}
                      onChange={(e) => setInvPaymentMode(e.target.value)}
                      style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem", background: "#ffffff", boxSizing: "border-box", marginBottom: "8px" }}
                    >
                      <option value="Bank Transfer">Bank Transfer (NEFT / RTGS / IMPS)</option>
                      <option value="UPI / PhonePe / GPay">UPI / PhonePe / GPay</option>
                      <option value="Cash">Cash</option>
                      <option value="Cheque">Cheque</option>
                      <option value="Credit Card">Credit Card</option>
                    </select>

                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#64748b", marginBottom: "3px" }}>
                      Bank / UPI Account Info
                    </label>
                    <textarea
                      rows={3}
                      value={invPaymentInfo}
                      onChange={(e) => setInvPaymentInfo(e.target.value)}
                      style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.8rem", boxSizing: "border-box", fontFamily: "inherit" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                      Terms &amp; Conditions (One per line)
                    </label>
                    <textarea
                      rows={5}
                      value={invTermsText}
                      onChange={(e) => setInvTermsText(e.target.value)}
                      style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.8rem", boxSizing: "border-box", fontFamily: "inherit" }}
                    />
                  </div>
                </div>

                {/* MODAL BOTTOM BUTTONS */}
                <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end", borderTop: "1px solid #f1f5f9", paddingTop: "14px" }}>
                  <button
                    type="button"
                    onClick={() => setInvModalTab("preview")}
                    style={{
                      padding: "10px 18px",
                      borderRadius: "8px",
                      border: "1.5px solid #3CBFB4",
                      background: "#f0fdfa",
                      color: "#0d9488",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <i className="fas fa-eye"></i> Preview Bill
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowInvoiceModal(false)}
                    style={{
                      padding: "10px 18px",
                      borderRadius: "8px",
                      border: "1px solid #cbd5e1",
                      background: "#f8fafc",
                      color: "#475569",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{
                      padding: "10px 24px",
                      borderRadius: "8px",
                      background: "linear-gradient(135deg, #10b981, #059669)",
                      color: "#ffffff",
                      border: "none",
                      fontWeight: 800,
                      fontSize: "0.88rem",
                      cursor: "pointer",
                      boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <i className="fas fa-check-circle"></i> Issue &amp; Save Invoice
                  </button>
                </div>
              </form>
            ) : (
              /* TAB 2: LIVE PREVIEW */
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "100%", maxHeight: "68vh", overflowY: "auto", background: "#f1f5f9", padding: "16px", borderRadius: "12px", display: "flex", justifyContent: "center" }}>
                  {/* Inline Render of A4 Invoice for Live Preview */}
                  <div
                    style={{
                      fontFamily: "'Inter', 'Outfit', Arial, sans-serif",
                      backgroundColor: "#ffffff",
                      color: "#1A1A1A",
                      width: "210mm",
                      minHeight: "297mm",
                      display: "flex",
                      flexDirection: "column",
                      boxSizing: "border-box",
                      padding: "40px 34px 0 34px",
                      fontSize: "12.5px",
                      lineHeight: "1.55",
                      position: "relative",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                      borderRadius: "4px",
                    }}
                  >
                    {/* Watermark */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/chittortech_logo.png"
                      alt=""
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "55%",
                        opacity: 0.08,
                        pointerEvents: "none",
                        zIndex: 1,
                      }}
                    />

                    <div style={{ flex: 1, position: "relative", zIndex: 2 }}>
                      {/* Title */}
                      <h1 style={{ fontSize: "28px", fontWeight: 800, color: "#0B2545", margin: "0 0 11px 0" }}>
                        Invoice Service
                      </h1>

                      {/* Top banner */}
                      <div style={{ display: "flex", width: "100%", height: "60px", marginBottom: "16px" }}>
                        <div style={{ backgroundColor: "#0B2545", color: "#ffffff", padding: "0 18px", flex: "0 0 54%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "4px" }}>
                          <p style={{ margin: 0, fontSize: "12px" }}>
                            <strong style={{ fontWeight: 700, marginRight: "5px" }}>Invoice Number:</strong>
                            <span>{invDocNumber || "CT/2026/001"}</span>
                          </p>
                          <p style={{ margin: 0, fontSize: "12px" }}>
                            <strong style={{ fontWeight: 700, marginRight: "5px" }}>Invoice Date:</strong>
                            <span>{invDocDate || new Date().toISOString().split("T")[0]}</span>
                          </p>
                        </div>
                        <div style={{ backgroundColor: "#E8EDF3", flex: 1, display: "flex", alignItems: "center", padding: "0 46px 0 14px", gap: "11px", position: "relative", overflow: "hidden" }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="/images/chittortech_logo.png" alt="ChittorTech Logo" style={{ height: "46px", width: "auto" }} />
                          <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#0B2545", margin: 0 }}>ChittorTech</h2>
                          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "13px", backgroundColor: "#0B2545" }} />
                        </div>
                      </div>

                      <hr style={{ border: "none", borderTop: "1.5px dashed #3CBFB4", margin: "0 0 16px 0" }} />

                      {/* Billing Information */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", marginBottom: "18px" }}>
                        <div>
                          <h3 style={{ fontSize: "14px", fontWeight: 900, color: "#000000", margin: "0 0 7px 0" }}>Billing Information:</h3>
                          <p style={{ margin: "0 0 3px 0", fontSize: "12px", color: "#4A4A4A" }}><strong>Company Name: </strong>ChittorTech</p>
                          <p style={{ margin: "0 0 3px 0", fontSize: "12px", color: "#4A4A4A" }}><strong>Company Address: </strong>Chittorgarh, Rajasthan – 312001</p>
                          <p style={{ margin: "0 0 3px 0", fontSize: "12px", color: "#4A4A4A" }}><strong>Phone Number: </strong>+91 7597451057</p>
                          <p style={{ margin: "0 0 3px 0", fontSize: "12px", color: "#4A4A4A" }}><strong>Email: </strong>business@chittortech.in</p>
                        </div>
                        <div>
                          <h3 style={{ fontSize: "14px", fontWeight: 900, color: "#000000", margin: "0 0 7px 0" }}>Bill To:</h3>
                          <p style={{ margin: "0 0 3px 0", fontSize: "12px", color: "#4A4A4A" }}><strong>Customer Name: </strong>{invClientName || invClientId || "—"}</p>
                          <p style={{ margin: "0 0 3px 0", fontSize: "12px", color: "#4A4A4A" }}><strong>Billing Address: </strong>{invClientAddress || "—"}</p>
                          <p style={{ margin: "0 0 3px 0", fontSize: "12px", color: "#4A4A4A" }}><strong>Phone: </strong>{invClientPhone || "—"}</p>
                          <p style={{ margin: "0 0 3px 0", fontSize: "12px", color: "#4A4A4A" }}><strong>Email: </strong>{invClientId || "—"}</p>
                        </div>
                      </div>

                      {/* Service Table */}
                      <h2 style={{ fontSize: "14px", fontWeight: 900, color: "#000000", margin: "0 0 7px 0" }}>Service Details:</h2>
                      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "0px" }}>
                        <thead>
                          <tr style={{ backgroundColor: "#3CBFB4" }}>
                            <th style={{ color: "#ffffff", fontWeight: 700, fontSize: "11.5px", padding: "8px 10px", textAlign: "left", width: "32px" }}>No</th>
                            <th style={{ color: "#ffffff", fontWeight: 700, fontSize: "11.5px", padding: "8px 10px", textAlign: "left" }}>Item Description</th>
                            <th style={{ color: "#ffffff", fontWeight: 700, fontSize: "11.5px", padding: "8px 10px", textAlign: "center", width: "88px" }}>Hours/Units</th>
                            <th style={{ color: "#ffffff", fontWeight: 700, fontSize: "11.5px", padding: "8px 10px", textAlign: "right", width: "110px" }}>Rate/Unit (₹)</th>
                            <th style={{ color: "#ffffff", fontWeight: 700, fontSize: "11.5px", padding: "8px 10px", textAlign: "right", width: "100px" }}>Total (₹)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {invItems.map((item, idx) => {
                            const lineTotal = Number(item.qty || 1) * Number(item.rate || 0);
                            return (
                              <tr key={item.id} style={{ backgroundColor: idx % 2 === 1 ? "rgba(244,246,248,0.85)" : "rgba(255,255,255,0.85)" }}>
                                <td style={{ padding: "7px 10px", fontSize: "12px", fontWeight: 700 }}>{idx + 1}</td>
                                <td style={{ padding: "7px 10px", fontSize: "12px", color: "#334155" }}>{item.description || "Service Item"}</td>
                                <td style={{ padding: "7px 10px", fontSize: "12px", textAlign: "center" }}>{item.qty || 1}</td>
                                <td style={{ padding: "7px 10px", fontSize: "12px", textAlign: "right" }}>₹{Number(item.rate || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
                                <td style={{ padding: "7px 10px", fontSize: "12px", textAlign: "right" }}>₹{lineTotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>

                      {/* Totals Box */}
                      <div style={{ backgroundColor: "#0B2545", color: "#ffffff", padding: "9px 14px", display: "flex", flexDirection: "column", gap: "3px", marginBottom: "18px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                          <span>Subtotal</span>
                          <span>₹{calculatedInvSubtotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
                        </div>
                        {Number(invTaxPct) > 0 && (
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                            <span>Sales Tax ({invTaxPct}%)</span>
                            <span>₹{calculatedInvTaxAmt.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
                          </div>
                        )}
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13.5px", fontWeight: 800, borderTop: "1px solid rgba(255,255,255,0.25)", paddingTop: "5px", marginTop: "3px" }}>
                          <span>{invStatus === "PAID" ? "Total Amount Paid" : "Total Amount Due"}</span>
                          <span>₹{calculatedInvGrandTotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
                        </div>
                      </div>

                      {/* Lower Cards */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", marginBottom: "18px" }}>
                        <div style={{ border: "1.5px solid #D8DDE3", borderRadius: "4px", padding: "13px 15px", backgroundColor: "rgba(255,255,255,0.8)" }}>
                          <h3 style={{ fontSize: "14px", fontWeight: 900, color: "#000000", margin: "0 0 9px 0", paddingBottom: "6px", borderBottom: "1.5px solid #D8DDE3" }}>Billing Information:</h3>
                          <p style={{ margin: "0 0 4px 0", fontSize: "12px", color: "#4A4A4A" }}><strong>Date: </strong>{invDocDate || "—"}</p>
                          <p style={{ margin: "0 0 4px 0", fontSize: "12px", color: "#4A4A4A" }}><strong>Payment Method: </strong>{invPaymentMode}</p>
                          <p style={{ margin: "0 0 4px 0", fontSize: "12px", color: "#4A4A4A" }}><strong>Due Date: </strong>{invDueDate || "—"}</p>
                          <div style={{ marginTop: "6px", whiteSpace: "pre-line", fontSize: "11px", color: "#4A4A4A" }}>{invPaymentInfo}</div>
                        </div>

                        <div style={{ border: "1.5px solid #D8DDE3", borderRadius: "4px", padding: "13px 15px", backgroundColor: "rgba(255,255,255,0.8)" }}>
                          <h3 style={{ fontSize: "14px", fontWeight: 900, color: "#000000", margin: "0 0 9px 0", paddingBottom: "6px", borderBottom: "1.5px solid #D8DDE3" }}>Terms and Conditions:</h3>
                          <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "11px", color: "#4A4A4A" }}>
                            {invTermsText.split("\n").filter(Boolean).map((t, i) => (
                              <li key={i} style={{ marginBottom: "4px" }}>{t}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Signature block */}
                      <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "4px", marginBottom: "16px" }}>
                        <div style={{ textAlign: "right", minWidth: "180px" }}>
                          <div style={{ fontSize: "12px", fontWeight: 600, color: "#1A1A1A", marginBottom: "8px" }}>
                            Date: {invDocDate || new Date().toISOString().split("T")[0]}
                          </div>
                          <div style={{ height: "40px" }}></div>
                          <div style={{ borderTop: "1.5px solid #1A1A1A", paddingTop: "5px", fontSize: "12px", fontWeight: 700 }}>
                            Authorized Signatory (ChittorTech)
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer bar */}
                    <div style={{ backgroundColor: "#0B2545", color: "#ffffff", padding: "11px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12px", marginTop: "auto", position: "relative", zIndex: 2 }}>
                      <span><i className="fas fa-phone"></i> +91 7597451057</span>
                      <span><i className="fas fa-envelope"></i> business@chittortech.in</span>
                      <span><i className="fas fa-globe"></i> chittortech.in</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end", width: "100%", marginTop: "14px" }}>
                  <button
                    type="button"
                    onClick={() => setInvModalTab("form")}
                    style={{ padding: "10px 18px", borderRadius: "8px", border: "1px solid #cbd5e1", background: "#f8fafc", color: "#475569", fontWeight: 700, cursor: "pointer" }}
                  >
                    ← Back to Edit
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveInvoice}
                    style={{ padding: "10px 24px", borderRadius: "8px", background: "linear-gradient(135deg, #10b981, #059669)", color: "#ffffff", border: "none", fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)" }}
                  >
                    Issue &amp; Save Invoice ✓
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FULL VIEW & PRINT INVOICE MODAL */}
      {viewingInvoice && (
        <ChittorTechInvoiceViewModal
          invoice={viewingInvoice}
          onClose={() => setViewingInvoice(null)}
        />
      )}

      {confirmModal && <AdminConfirmModal config={confirmModal} onClose={() => setConfirmModal(null)} />}
    </div>
  );
}
