"use client";

import React, { useState, useEffect, useMemo } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

export default function NotificationHub() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [knownClients, setKnownClients] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Form state
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("INFO"); // INFO | UPDATE | ALERT | OFFER
  const [target, setTarget] = useState("ALL"); // ALL | CLIENTS | GUESTS | SPECIFIC_CLIENT
  const [targetClientId, setTargetClientId] = useState("");
  const [customClientInput, setCustomClientInput] = useState("");
  const [sending, setSending] = useState(false);
  const [actionFeedback, setActionFeedback] = useState("");

  const applyTemplate = (tmplTitle, tmplMsg, tmplType, tmplTarget, tmplClientId = "") => {
    setTitle(tmplTitle);
    setMessage(tmplMsg);
    setType(tmplType);
    setTarget(tmplTarget);
    if (tmplClientId) {
      setTargetClientId(tmplClientId);
      setCustomClientInput("");
    }
  };

  // 1. Sync notifications live
  useEffect(() => {
    try {
      const q = query(collection(db, "notifications"), orderBy("timestamp", "desc"));
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const items = [];
          snapshot.forEach((docSnap) => {
            items.push({ id: docSnap.id, ...docSnap.data() });
          });
          setNotifications(items);
          setLoading(false);
        },
        (err) => {
          console.warn("Notifications listener error:", err);
          setLoading(false);
        }
      );
      return () => unsubscribe();
    } catch (e) {
      console.warn("Failed to attach notification listener:", e);
      setLoading(false);
    }
  }, []);

  // 2. Load clients from projects
  useEffect(() => {
    try {
      const q = query(collection(db, "projects"));
      const unsub = onSnapshot(q, (snap) => {
        const clientSet = new Set();
        snap.forEach((d) => {
          const data = d.data();
          if (data.clientId) clientSet.add(data.clientId.trim().toLowerCase());
        });
        const arr = Array.from(clientSet);
        setKnownClients(arr);
        if (arr.length > 0 && !targetClientId) {
          setTargetClientId(arr[0]);
        }
      });
      return () => unsub();
    } catch (e) {
      console.warn("Could not load clients list:", e);
    }
  }, [targetClientId]);

  const effectiveClientId = (customClientInput.trim() || targetClientId || "").trim().toLowerCase();

  // Metrics
  const totalCount = notifications.length;
  const clientCount = notifications.filter((n) => n.target === "CLIENTS" || n.target === "SPECIFIC_CLIENT").length;
  const guestCount = notifications.filter((n) => n.target === "GUESTS").length;
  const everyoneCount = notifications.filter((n) => n.target === "ALL").length;

  const filteredNotifications = useMemo(() => {
    return notifications.filter((n) => {
      const matchSearch =
        !searchFilter ||
        (n.title && n.title.toLowerCase().includes(searchFilter.toLowerCase())) ||
        (n.message && n.message.toLowerCase().includes(searchFilter.toLowerCase())) ||
        (n.targetClientId && n.targetClientId.toLowerCase().includes(searchFilter.toLowerCase()));
      const matchCat = categoryFilter === "all" || n.type === categoryFilter;
      return matchSearch && matchCat;
    });
  }, [notifications, searchFilter, categoryFilter]);

  const handleSendNotification = async (e) => {
    e.preventDefault();
    if (!title.trim() || !message.trim()) {
      alert("Please enter both a Notification Title and Message.");
      return;
    }

    if (target === "SPECIFIC_CLIENT" && !effectiveClientId) {
      alert("Please select or type the specific Client Email.");
      return;
    }

    setSending(true);
    setActionFeedback("");
    try {
      const payload = {
        title: title.trim(),
        message: message.trim(),
        type: type,
        target: target,
        targetClientId: target === "SPECIFIC_CLIENT" ? effectiveClientId : null,
        timestamp: serverTimestamp(),
        createdAt: new Date().toISOString(),
        sentBy: "ChittorTech Admin Console",
        channel: "FCM_PUSH_AND_INAPP",
      };

      await addDoc(collection(db, "notifications"), payload);

      // Trigger FCM Push via API route
      try {
        const fcmResponse = await fetch("/api/send-fcm-push", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title.trim(),
            message: message.trim(),
            type,
            target,
            targetClientId: target === "SPECIFIC_CLIENT" ? effectiveClientId : null,
          }),
        });
        
        if (!fcmResponse.ok) {
          console.warn("FCM push failed or admin SDK not configured.", await fcmResponse.text());
        }
      } catch (fcmErr) {
        console.error("Error calling FCM push API:", fcmErr);
      }

      setTitle("");
      setMessage("");
      setCustomClientInput("");
      setActionFeedback(
        target === "SPECIFIC_CLIENT"
          ? `Push Notification sent privately to ${effectiveClientId}!`
          : `Broadcast dispatched successfully to ${target === "ALL" ? "All App Users" : target === "CLIENTS" ? "Verified Clients" : "Guest Users"}!`
      );
      setTimeout(() => setActionFeedback(""), 5000);
    } catch (err) {
      alert("Failed to broadcast notification: " + err.message);
    } finally {
      setSending(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this notification from live stream?")) return;
    try {
      await deleteDoc(doc(db, "notifications", id));
    } catch (err) {
      alert("Error deleting notification: " + err.message);
    }
  };

  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto", paddingBottom: "32px" }}>
      {/* Title & Description Header */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px", marginBottom: "22px" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#f0f9ff", border: "1px solid #bae6fd", padding: "4px 10px", borderRadius: "20px", marginBottom: "8px" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#0284c7" }}></span>
            <span style={{ fontSize: "0.76rem", fontWeight: 700, color: "#0284c7", textTransform: "uppercase", letterSpacing: "0.5px" }}>FCM Cloud Messaging &amp; In-App Engine</span>
          </div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0f172a", margin: "0 0 4px 0", letterSpacing: "-0.5px" }}>
            Mobile App Notification Hub
          </h1>
          <p style={{ margin: 0, color: "#64748b", fontSize: "0.9rem" }}>
            Broadcast real-time push alerts, milestone updates, and personalized client messages directly to Android mobile app users.
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", borderRadius: "10px", background: "#ffffff", border: "1.5px solid #e2e8f0", fontSize: "0.85rem", fontWeight: 700, color: "#0f172a" }}>
            <i className="fas fa-tower-broadcast" style={{ color: "#0284c7" }}></i>
            <span>Real-time Stream: <strong style={{ color: "#16a34a" }}>Active</strong></span>
          </div>
        </div>
      </div>

      {/* 4 Top KPI Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "24px" }}>
        {/* Card 1 */}
        <div style={{ background: "#ffffff", padding: "18px 20px", borderRadius: "16px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #0284c7, #38bdf8)" }}></div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase" }}>Total Broadcasts</span>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#f0f9ff", color: "#0284c7", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className="fas fa-bell"></i>
            </div>
          </div>
          <div style={{ fontSize: "1.9rem", fontWeight: 800, color: "#0f172a", marginTop: "8px" }}>{totalCount}</div>
          <div style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "4px" }}>Firestore Stored Alerts</div>
        </div>

        {/* Card 2 */}
        <div style={{ background: "#ffffff", padding: "18px 20px", borderRadius: "16px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #10b981, #34d399)" }}></div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase" }}>Client Targeted</span>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#ecfdf5", color: "#10b981", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className="fas fa-user-shield"></i>
            </div>
          </div>
          <div style={{ fontSize: "1.9rem", fontWeight: 800, color: "#0f172a", marginTop: "8px" }}>{clientCount}</div>
          <div style={{ fontSize: "0.75rem", color: "#059669", marginTop: "4px", fontWeight: 600 }}>Clients &amp; Specific Projects</div>
        </div>

        {/* Card 3 */}
        <div style={{ background: "#ffffff", padding: "18px 20px", borderRadius: "16px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #f59e0b, #fbbf24)" }}></div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase" }}>Guest Audience</span>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#fffbeb", color: "#d97706", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className="fas fa-users"></i>
            </div>
          </div>
          <div style={{ fontSize: "1.9rem", fontWeight: 800, color: "#0f172a", marginTop: "8px" }}>{guestCount}</div>
          <div style={{ fontSize: "0.75rem", color: "#b45309", marginTop: "4px", fontWeight: 600 }}>Unauthenticated Explorers</div>
        </div>

        {/* Card 4 */}
        <div style={{ background: "#ffffff", padding: "18px 20px", borderRadius: "16px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #8b5cf6, #c084fc)" }}></div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase" }}>Public Broadcasts</span>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#f5f3ff", color: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className="fas fa-globe"></i>
            </div>
          </div>
          <div style={{ fontSize: "1.9rem", fontWeight: 800, color: "#0f172a", marginTop: "8px" }}>{everyoneCount}</div>
          <div style={{ fontSize: "0.75rem", color: "#6d28d9", marginTop: "4px", fontWeight: 600 }}>All Devices Globally</div>
        </div>
      </div>

      {actionFeedback && (
        <div style={{ background: "#ecfdf5", border: "1.5px solid #10b981", color: "#065f46", padding: "14px 20px", borderRadius: "12px", marginBottom: "20px", fontSize: "0.92rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 4px 12px rgba(16, 185, 129, 0.12)" }}>
          <i className="fas fa-check-circle" style={{ color: "#10b981", fontSize: "1.2rem" }}></i>
          <span>{actionFeedback}</span>
        </div>
      )}

      {/* Main Content Grid: Left Composer, Right Phone Simulator */}
      <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: "24px", marginBottom: "30px", alignItems: "start" }}>
        
        {/* Left: Compose Form */}
        <div style={{ background: "#ffffff", borderRadius: "18px", border: "1.5px solid #e2e8f0", padding: "24px", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px", paddingBottom: "14px", borderBottom: "1px solid #f1f5f9" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "linear-gradient(135deg, #0284c7, #0369a1)", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.95rem" }}>
                <i className="fas fa-paper-plane"></i>
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 800, color: "#0f172a" }}>Dispatch Notification</h3>
                <p style={{ margin: 0, fontSize: "0.8rem", color: "#64748b" }}>Target specific audiences or broadcast system alerts</p>
              </div>
            </div>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#0284c7", background: "#f0f9ff", border: "1px solid #bae6fd", padding: "3px 9px", borderRadius: "8px" }}>
              LIVE COMPOSE
            </span>
          </div>

          {/* Quick Preset Templates */}
          <div style={{ marginBottom: "18px" }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#475569", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              ⚡ 1-Click Quick Templates
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <button
                type="button"
                onClick={() =>
                  applyTemplate(
                    "🚀 New Cloud Architecture Service Launched!",
                    "Deploy serverless apps, AI microservices, and auto-scaling APIs with ChittorTech Enterprise.",
                    "OFFER",
                    "ALL"
                  )
                }
                style={{ background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: "8px", padding: "6px 12px", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer", color: "#334155", display: "flex", alignItems: "center", gap: "6px" }}
              >
                <span>🚀</span> New Service (All)
              </button>
              <button
                type="button"
                onClick={() =>
                  applyTemplate(
                    "📊 Project Milestone 2 Completed!",
                    "Backend APIs and database replication are complete. Review your build demo in the Client Portal.",
                    "UPDATE",
                    "CLIENTS"
                  )
                }
                style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "8px", padding: "6px 12px", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer", color: "#1d4ed8", display: "flex", alignItems: "center", gap: "6px" }}
              >
                <span>📊</span> Milestone Update (Clients)
              </button>
              <button
                type="button"
                onClick={() =>
                  applyTemplate(
                    "🔒 Project SOW & Invoice Generated",
                    "Your sprint invoice and security architecture documents are updated in your Client Portal.",
                    "UPDATE",
                    "SPECIFIC_CLIENT",
                    knownClients[0] || "business@chittortech.in"
                  )
                }
                style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: "8px", padding: "6px 12px", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer", color: "#6d28d9", display: "flex", alignItems: "center", gap: "6px" }}
              >
                <span>🎯</span> Private Client SOW
              </button>
              <button
                type="button"
                onClick={() =>
                  applyTemplate(
                    "⚡ Scheduled Cloud Maintenance Notice",
                    "Server maintenance scheduled for Sunday 02:00 AM IST. All production backups are securely snapshot.",
                    "ALERT",
                    "ALL"
                  )
                }
                style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "8px", padding: "6px 12px", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer", color: "#b45309", display: "flex", alignItems: "center", gap: "6px" }}
              >
                <span>⚡</span> Server Notice
              </button>
            </div>
          </div>

          <form onSubmit={handleSendNotification}>
            {/* Title */}
            <div style={{ marginBottom: "14px" }}>
              <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>
                Notification Title / Headline <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 🚀 Architecture Sprint 3 Completed"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", color: "#0f172a", outline: "none", boxSizing: "border-box", transition: "border 0.2s" }}
                required
              />
            </div>

            {/* Message Body */}
            <div style={{ marginBottom: "14px" }}>
              <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>
                Notification Message Body <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <textarea
                rows={3}
                placeholder="Write the message that appears on smartphones lock screen..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", color: "#0f172a", outline: "none", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }}
                required
              />
            </div>

            {/* 2-Column Selectors */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>
                  Target Audience
                </label>
                <select
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem", fontWeight: 600, background: "#ffffff", color: "#0f172a", cursor: "pointer", boxSizing: "border-box" }}
                >
                  <option value="ALL">🌐 Everyone (All App Users &amp; Guests)</option>
                  <option value="CLIENTS">🏢 Verified Clients Only</option>
                  <option value="GUESTS">🟢 Guest Explorers Only</option>
                  <option value="SPECIFIC_CLIENT">🎯 Specific Individual Client</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>
                  Alert Category / Badge
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem", fontWeight: 600, background: "#ffffff", color: "#0f172a", cursor: "pointer", boxSizing: "border-box" }}
                >
                  <option value="INFO">🔵 INFO (Standard)</option>
                  <option value="UPDATE">🟢 UPDATE (Progress / Milestone)</option>
                  <option value="ALERT">🟠 ALERT (Urgent Notice)</option>
                  <option value="OFFER">🟣 OFFER (Special Discount / Deal)</option>
                </select>
              </div>
            </div>

            {/* Specific Client Select box */}
            {target === "SPECIFIC_CLIENT" && (
              <div style={{ background: "#f8fafc", border: "1.5px dashed #0284c7", borderRadius: "12px", padding: "14px 16px", marginBottom: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <i className="fas fa-bullseye" style={{ color: "#0284c7" }}></i>
                  <span style={{ fontSize: "0.84rem", fontWeight: 700, color: "#0f172a" }}>Target Individual Client</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: knownClients.length > 0 ? "1fr 1fr" : "1fr", gap: "10px" }}>
                  {knownClients.length > 0 && (
                    <div>
                      <label style={{ display: "block", fontSize: "0.74rem", color: "#64748b", marginBottom: "4px", fontWeight: 600 }}>
                        Select Active Client:
                      </label>
                      <select
                        value={targetClientId}
                        onChange={(e) => {
                          setTargetClientId(e.target.value);
                          setCustomClientInput("");
                        }}
                        style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.82rem", fontWeight: 600, background: "#ffffff", color: "#0f172a", boxSizing: "border-box" }}
                      >
                        {knownClients.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label style={{ display: "block", fontSize: "0.74rem", color: "#64748b", marginBottom: "4px", fontWeight: 600 }}>
                      Or Enter Custom Client Email:
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. client@company.com"
                      value={customClientInput}
                      onChange={(e) => setCustomClientInput(e.target.value)}
                      style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.82rem", color: "#0f172a", boxSizing: "border-box" }}
                    />
                  </div>
                </div>
                <div style={{ marginTop: "6px", fontSize: "0.76rem", color: "#0284c7", fontWeight: 600 }}>
                  Active Recipient: <span style={{ textDecoration: "underline" }}>{effectiveClientId || "No client selected"}</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              style={{
                width: "100%",
                padding: "12px",
                background: sending ? "#94a3b8" : "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                color: "#ffffff",
                border: "none",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: "0.92rem",
                cursor: sending ? "not-allowed" : "pointer",
                boxShadow: "0 4px 14px rgba(2, 132, 199, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                transition: "all 0.2s ease",
              }}
            >
              <i className="fas fa-tower-broadcast"></i>
              <span>{sending ? "Broadcasting Push Alert..." : "Dispatch Push Notification Live"}</span>
            </button>
          </form>
        </div>

        {/* Right: High-Fidelity Phone Notification Simulator */}
        <div style={{ background: "#ffffff", borderRadius: "18px", border: "1.5px solid #e2e8f0", padding: "20px", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-mobile-screen" style={{ color: "#0284c7" }}></i>
              <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#0f172a" }}>Live Smartphone Screen Simulator</span>
            </div>
            <span style={{ fontSize: "0.72rem", color: "#64748b", background: "#f1f5f9", padding: "2px 8px", borderRadius: "6px", fontWeight: 600 }}>
              Lock Screen View
            </span>
          </div>

          {/* Smartphone Frame */}
          <div
            style={{
              background: "linear-gradient(180deg, #090d16 0%, #0f172a 100%)",
              borderRadius: "28px",
              padding: "16px 14px",
              boxShadow: "0 15px 35px -5px rgba(15, 23, 42, 0.35)",
              border: "4px solid #1e293b",
              color: "#ffffff",
              minHeight: "360px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Top Bar: Time + Notch */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.72rem", color: "#cbd5e1", padding: "0 6px 14px 6px" }}>
                <span style={{ fontWeight: 700 }}>09:41</span>
                <div style={{ width: "50px", height: "4px", background: "#334155", borderRadius: "10px" }}></div>
                <span style={{ fontWeight: 600 }}>5G • 100%</span>
              </div>

              {/* Push Card on Glass */}
              <div
                style={{
                  background: "rgba(30, 41, 59, 0.85)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "16px",
                  padding: "12px 14px",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "20px", height: "20px", borderRadius: "5px", background: "#0284c7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", fontWeight: 800, color: "#ffffff" }}>
                      CT
                    </div>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#f1f5f9" }}>ChittorTech</span>
                    <span style={{ fontSize: "0.65rem", color: "#94a3b8" }}>• now</span>
                  </div>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      padding: "2px 6px",
                      borderRadius: "6px",
                      background:
                        type === "ALERT"
                          ? "rgba(239, 68, 68, 0.25)"
                          : type === "UPDATE"
                          ? "rgba(16, 185, 129, 0.25)"
                          : type === "OFFER"
                          ? "rgba(168, 85, 247, 0.25)"
                          : "rgba(56, 189, 248, 0.25)",
                      color:
                        type === "ALERT"
                          ? "#f87171"
                          : type === "UPDATE"
                          ? "#34d399"
                          : type === "OFFER"
                          ? "#c084fc"
                          : "#38bdf8",
                    }}
                  >
                    {type}
                  </span>
                </div>

                <div style={{ fontSize: "0.86rem", fontWeight: 700, color: "#ffffff", marginBottom: "3px" }}>
                  {title.trim() || "Notification Title Preview"}
                </div>
                <div style={{ fontSize: "0.78rem", color: "#cbd5e1", lineHeight: 1.4 }}>
                  {message.trim() || "Notification body text will render here as an instant push alert on user smartphone screen."}
                </div>

                <div style={{ marginTop: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.68rem", color: "#94a3b8", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "6px" }}>
                  <span style={{ color: target === "SPECIFIC_CLIENT" ? "#38bdf8" : "#94a3b8", fontWeight: 600 }}>
                    Audience: {target === "ALL" ? "🌐 Everyone" : target === "CLIENTS" ? "🏢 Clients" : target === "GUESTS" ? "🟢 Guests" : `🎯 ${effectiveClientId || "Selected Client"}`}
                  </span>
                  <span>Swipe to open &rarr;</span>
                </div>
              </div>
            </div>

            {/* Bottom Home Indicator */}
            <div style={{ textAlign: "center", paddingTop: "14px" }}>
              <div style={{ width: "80px", height: "3px", background: "#475569", borderRadius: "10px", margin: "0 auto" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Broadcast History Table */}
      <div style={{ background: "#ffffff", borderRadius: "18px", border: "1.5px solid #e2e8f0", padding: "24px", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
          <div>
            <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 800, color: "#0f172a" }}>
              Broadcast History ({filteredNotifications.length})
            </h3>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "#64748b" }}>Live notifications stored in Firestore</p>
          </div>

          <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
            <input
              type="text"
              placeholder="Search history..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              style={{ padding: "8px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.82rem", outline: "none", width: "180px" }}
            />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              style={{ padding: "8px 10px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.82rem", fontWeight: 600, background: "#ffffff" }}
            >
              <option value="all">All Categories</option>
              <option value="INFO">INFO</option>
              <option value="UPDATE">UPDATE</option>
              <option value="ALERT">ALERT</option>
              <option value="OFFER">OFFER</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div style={{ textAlign: "center", padding: "40px", color: "#64748b" }}>
            <i className="fas fa-spinner fa-spin" style={{ fontSize: "1.4rem", color: "#0284c7", marginBottom: "8px" }}></i>
            <div>Loading live broadcasts...</div>
          </div>
        ) : filteredNotifications.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px 20px", color: "#94a3b8" }}>
            <i className="fas fa-bell-slash" style={{ fontSize: "2rem", marginBottom: "8px", color: "#cbd5e1" }}></i>
            <p style={{ margin: 0, fontWeight: 700, color: "#64748b" }}>No broadcast notifications found</p>
            <p style={{ margin: "4px 0 0", fontSize: "0.82rem" }}>Compose and dispatch your first message above.</p>
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.85rem" }}>
              <thead>
                <tr style={{ borderBottom: "1.5px solid #e2e8f0", color: "#64748b", textTransform: "uppercase", fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                  <th style={{ padding: "12px 14px" }}>Headline &amp; Message</th>
                  <th style={{ padding: "12px 14px" }}>Badge</th>
                  <th style={{ padding: "12px 14px" }}>Target Audience</th>
                  <th style={{ padding: "12px 14px" }}>Dispatched Time</th>
                  <th style={{ padding: "12px 14px", textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredNotifications.map((n) => (
                  <tr key={n.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "14px" }}>
                      <div style={{ fontWeight: 700, color: "#0f172a", marginBottom: "2px" }}>{n.title}</div>
                      <div style={{ color: "#64748b", fontSize: "0.8rem", maxWidth: "480px" }}>{n.message}</div>
                    </td>
                    <td style={{ padding: "14px" }}>
                      <span
                        style={{
                          padding: "3px 8px",
                          borderRadius: "6px",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          background:
                            n.type === "ALERT"
                              ? "#fef2f2"
                              : n.type === "UPDATE"
                              ? "#ecfdf5"
                              : n.type === "OFFER"
                              ? "#f5f3ff"
                              : "#f0f9ff",
                          color:
                            n.type === "ALERT"
                              ? "#ef4444"
                              : n.type === "UPDATE"
                              ? "#10b981"
                              : n.type === "OFFER"
                              ? "#8b5cf6"
                              : "#0284c7",
                        }}
                      >
                        {n.type || "INFO"}
                      </span>
                    </td>
                    <td style={{ padding: "14px", fontWeight: 600, color: "#334155" }}>
                      {n.target === "ALL" ? (
                        <span style={{ color: "#0369a1", background: "#f0f9ff", padding: "3px 8px", borderRadius: "6px", fontSize: "0.78rem" }}>🌐 Everyone</span>
                      ) : n.target === "CLIENTS" ? (
                        <span style={{ color: "#15803d", background: "#ecfdf5", padding: "3px 8px", borderRadius: "6px", fontSize: "0.78rem" }}>🏢 Verified Clients</span>
                      ) : n.target === "GUESTS" ? (
                        <span style={{ color: "#b45309", background: "#fffbeb", padding: "3px 8px", borderRadius: "6px", fontSize: "0.78rem" }}>🟢 Guests Only</span>
                      ) : (
                        <span style={{ color: "#6d28d9", background: "#f5f3ff", padding: "3px 8px", borderRadius: "6px", fontSize: "0.78rem" }}>
                          🎯 Private: {n.targetClientId || "Client"}
                        </span>
                      )}
                    </td>
                    <td style={{ padding: "14px", color: "#64748b", fontSize: "0.8rem" }}>
                      {n.createdAt
                        ? new Date(n.createdAt).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : "Recent"}
                    </td>
                    <td style={{ padding: "14px", textAlign: "right" }}>
                      <button
                        onClick={() => handleDelete(n.id)}
                        style={{
                          background: "#fee2e2",
                          color: "#ef4444",
                          border: "none",
                          padding: "6px 12px",
                          borderRadius: "8px",
                          fontSize: "0.76rem",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                        title="Delete Notification"
                      >
                        <i className="fas fa-trash-alt"></i> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
