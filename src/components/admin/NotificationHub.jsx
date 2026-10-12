"use client";

import React, { useState, useEffect, useMemo } from "react";
import { AdminConfirmModal, AdminFloatingToast } from "./AdminConfirmModal";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  limit,
  getDocs,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

export default function NotificationHub() {
  const [confirmModal, setConfirmModal] = useState(null);
  const [floatingToast, setFloatingToast] = useState("");
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

  // 1. Sync notifications live (Limited to 30 recent notifications to minimize reads)
  useEffect(() => {
    try {
      const q = query(
        collection(db, "notifications"),
        orderBy("timestamp", "desc"),
        limit(30)
      );
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

  // 2. Load clients from projects once (One-time getDocs, avoids continuous snapshot streams)
  useEffect(() => {
    let isMounted = true;
    async function fetchProjectClients() {
      try {
        const q = query(collection(db, "projects"), limit(50));
        const snap = await getDocs(q);
        if (!isMounted) return;
        const clientSet = new Set();
        snap.forEach((d) => {
          const data = d.data();
          if (data.clientId) clientSet.add(data.clientId.trim().toLowerCase());
        });
        const arr = Array.from(clientSet);
        setKnownClients(arr);
        if (arr.length > 0) {
          setTargetClientId((prev) => prev || arr[0]);
        }
      } catch (e) {
        console.warn("Could not load clients list:", e);
      }
    }
    fetchProjectClients();
    return () => {
      isMounted = false;
    };
  }, []);

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
        n.title?.toLowerCase().includes(searchFilter.toLowerCase()) ||
        n.message?.toLowerCase().includes(searchFilter.toLowerCase()) ||
        n.targetClientId?.toLowerCase().includes(searchFilter.toLowerCase());
      const matchCategory = categoryFilter === "all" || n.type === categoryFilter;
      return matchSearch && matchCategory;
    });
  }, [notifications, searchFilter, categoryFilter]);

  const handleSendNotification = async (e) => {
    e.preventDefault();
    if (!title.trim() || !message.trim()) {
      alert("Please provide both Notification Title and Message Body.");
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
          console.warn("FCM push warning:", await fcmResponse.text());
        }
      } catch (fcmErr) {
        console.error("Error calling FCM push API:", fcmErr);
      }

      setTitle("");
      setMessage("");
      setCustomClientInput("");
      setConfirmModal({
        isSuccess: true,
        title: "Notification Sent Successfully!",
        message:
          target === "SPECIFIC_CLIENT"
            ? `Push notification has been dispatched to client (${effectiveClientId}).`
            : `Broadcast notification dispatched successfully to ${target === "ALL" ? "All App Users" : target === "CLIENTS" ? "Verified Clients" : "Guest Users"}.`,
        confirmText: "Done",
      });
    } catch (err) {
      setConfirmModal({
        isSuccess: false,
        title: "Notification Send Error",
        message: err.message || "Failed to broadcast notification.",
        icon: "fas fa-exclamation-triangle",
        confirmText: "Close",
      });
    } finally {
      setSending(false);
    }
  };

  const handleDelete = (id) => {
    setConfirmModal({
      title: "Delete Notification?",
      message: "Are you sure you want to delete this notification from the live broadcast stream?",
      icon: "fas fa-trash-alt",
      iconBg: "#fee2e2",
      iconColor: "#dc2626",
      confirmText: "Yes, Delete",
      confirmBg: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      cancelText: "Cancel",
      onConfirm: async () => {
        try {
          await deleteDoc(doc(db, "notifications", id));
          setConfirmModal({
            isSuccess: true,
            title: "Notification Deleted Successfully!",
            message: "The notification has been permanently removed from the broadcast stream.",
            confirmText: "Done",
          });
        } catch (err) {
          setConfirmModal({
            isSuccess: false,
            title: "Delete Failed",
            message: err.message || "Failed to delete notification.",
            icon: "fas fa-exclamation-triangle",
            confirmText: "Close",
          });
        }
      },
    });
  };

  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto", paddingBottom: "24px" }}>
      {/* 1. Sleek Compact Command Bar Header (Zero Wasted Vertical Space) */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "14px",
          border: "1px solid #e2e8f0",
          padding: "14px 18px",
          marginBottom: "16px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "14px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
              boxShadow: "0 2px 8px rgba(2, 132, 199, 0.25)",
            }}
          >
            <i className="fas fa-tower-broadcast"></i>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <h1 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0f172a", margin: 0, letterSpacing: "-0.3px" }}>
                Mobile App Notification Hub
              </h1>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  background: "#ecfdf5",
                  border: "1px solid #a7f3d0",
                  color: "#059669",
                  padding: "2px 8px",
                  borderRadius: "12px",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                }}
              >
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 5px #10b981" }} />
                FCM Real-Time Engine
              </span>
            </div>
            <p style={{ margin: "2px 0 0 0", color: "#64748b", fontSize: "0.8rem" }}>
              Broadcast instant push alerts, milestone updates &amp; private client messages to mobile app users.
            </p>
          </div>
        </div>

        {/* Inline Compact Stat Badges (Clean 34px strip) */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              padding: "5px 10px",
              fontSize: "0.78rem",
            }}
          >
            <span style={{ color: "#64748b", fontWeight: 600 }}>Total Alerts:</span>
            <span style={{ fontWeight: 800, color: "#0f172a" }}>{totalCount}</span>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "#ecfdf5",
              border: "1px solid #d1fae5",
              borderRadius: "8px",
              padding: "5px 10px",
              fontSize: "0.78rem",
            }}
          >
            <span style={{ color: "#059669", fontWeight: 600 }}>Clients:</span>
            <span style={{ fontWeight: 800, color: "#047857" }}>{clientCount}</span>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "#fffbeb",
              border: "1px solid #fef3c7",
              borderRadius: "8px",
              padding: "5px 10px",
              fontSize: "0.78rem",
            }}
          >
            <span style={{ color: "#d97706", fontWeight: 600 }}>Guests:</span>
            <span style={{ fontWeight: 800, color: "#b45309" }}>{guestCount}</span>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "#f0f9ff",
              border: "1px solid #e0f2fe",
              borderRadius: "8px",
              padding: "5px 10px",
              fontSize: "0.78rem",
            }}
          >
            <span style={{ color: "#0284c7", fontWeight: 600 }}>Global:</span>
            <span style={{ fontWeight: 800, color: "#0369a1" }}>{everyoneCount}</span>
          </div>
        </div>
      </div>

      {actionFeedback && (
        <div
          style={{
            background: "#ecfdf5",
            border: "1px solid #10b981",
            color: "#065f46",
            padding: "10px 16px",
            borderRadius: "10px",
            marginBottom: "14px",
            fontSize: "0.85rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <i className="fas fa-check-circle" style={{ color: "#10b981", fontSize: "1rem" }}></i>
          <span>{actionFeedback}</span>
        </div>
      )}

      {/* 2. Responsive 2-Column Split: Left Composer, Right Phone Mockup (Fitted for Laptop Screens) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: "16px",
          marginBottom: "18px",
          alignItems: "start",
        }}
      >
        {/* Left Card: Form */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "14px",
            border: "1px solid #e2e8f0",
            padding: "18px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px", borderBottom: "1px solid #f1f5f9", paddingBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-paper-plane" style={{ color: "#0284c7", fontSize: "0.9rem" }}></i>
              <span style={{ fontWeight: 800, color: "#0f172a", fontSize: "0.95rem" }}>Compose Notification</span>
            </div>
            <span style={{ fontSize: "0.72rem", color: "#64748b", fontWeight: 600 }}>Live Push Engine</span>
          </div>

          {/* Quick Presets Chips */}
          <div style={{ marginBottom: "12px" }}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", marginBottom: "6px" }}>
              ⚡ 1-Click Quick Templates
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
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
                style={{
                  background: "#f8fafc",
                  border: "1px solid #cbd5e1",
                  borderRadius: "6px",
                  padding: "4px 8px",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "#334155",
                  cursor: "pointer",
                }}
              >
                🚀 New Service
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
                style={{
                  background: "#eff6ff",
                  border: "1px solid #bfdbfe",
                  borderRadius: "6px",
                  padding: "4px 8px",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "#1d4ed8",
                  cursor: "pointer",
                }}
              >
                📊 Milestone Update
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
                style={{
                  background: "#f5f3ff",
                  border: "1px solid #ddd6fe",
                  borderRadius: "6px",
                  padding: "4px 8px",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "#6d28d9",
                  cursor: "pointer",
                }}
              >
                🎯 Private Client SOW
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
                style={{
                  background: "#fffbeb",
                  border: "1px solid #fde68a",
                  borderRadius: "6px",
                  padding: "4px 8px",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "#b45309",
                  cursor: "pointer",
                }}
              >
                ⚡ Server Notice
              </button>
            </div>
          </div>

          <form onSubmit={handleSendNotification}>
            {/* Title */}
            <div style={{ marginBottom: "10px" }}>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                Notification Headline <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 🚀 Architecture Sprint 3 Completed"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  fontSize: "0.84rem",
                  color: "#0f172a",
                  outline: "none",
                  boxSizing: "border-box",
                }}
                required
              />
            </div>

            {/* Message Body */}
            <div style={{ marginBottom: "10px" }}>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                Message Body <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <textarea
                rows={2}
                placeholder="Write message appearing on user's lock screen..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  fontSize: "0.84rem",
                  color: "#0f172a",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "inherit",
                  boxSizing: "border-box",
                }}
                required
              />
            </div>

            {/* 2-Column Selectors */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "12px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                  Target Audience
                </label>
                <select
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px 10px",
                    borderRadius: "8px",
                    border: "1px solid #cbd5e1",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    background: "#ffffff",
                    color: "#0f172a",
                    boxSizing: "border-box",
                  }}
                >
                  <option value="ALL">🌐 Everyone (All Devices)</option>
                  <option value="CLIENTS">🏢 Verified Clients Only</option>
                  <option value="GUESTS">🟢 Guest Users Only</option>
                  <option value="SPECIFIC_CLIENT">🎯 Specific Individual Client</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                  Alert Badge / Category
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px 10px",
                    borderRadius: "8px",
                    border: "1px solid #cbd5e1",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    background: "#ffffff",
                    color: "#0f172a",
                    boxSizing: "border-box",
                  }}
                >
                  <option value="INFO">🔵 INFO</option>
                  <option value="UPDATE">🟢 UPDATE</option>
                  <option value="ALERT">🟠 ALERT</option>
                  <option value="OFFER">🟣 OFFER</option>
                </select>
              </div>
            </div>

            {/* Specific Client Select box */}
            {target === "SPECIFIC_CLIENT" && (
              <div style={{ background: "#f8fafc", border: "1px dashed #0284c7", borderRadius: "10px", padding: "10px 12px", marginBottom: "12px" }}>
                <div style={{ display: "grid", gridTemplateColumns: knownClients.length > 0 ? "1fr 1fr" : "1fr", gap: "8px" }}>
                  {knownClients.length > 0 && (
                    <div>
                      <label style={{ display: "block", fontSize: "0.72rem", color: "#64748b", marginBottom: "3px", fontWeight: 600 }}>
                        Select Active Client:
                      </label>
                      <select
                        value={targetClientId}
                        onChange={(e) => {
                          setTargetClientId(e.target.value);
                          setCustomClientInput("");
                        }}
                        style={{ width: "100%", padding: "7px 8px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "0.78rem", boxSizing: "border-box" }}
                      >
                        {knownClients.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label style={{ display: "block", fontSize: "0.72rem", color: "#64748b", marginBottom: "3px", fontWeight: 600 }}>
                      Or Enter Client Email:
                    </label>
                    <input
                      type="email"
                      placeholder="client@company.com"
                      value={customClientInput}
                      onChange={(e) => setCustomClientInput(e.target.value)}
                      style={{ width: "100%", padding: "7px 8px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "0.78rem", boxSizing: "border-box" }}
                    />
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              style={{
                width: "100%",
                padding: "10px",
                background: sending ? "#94a3b8" : "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                color: "#ffffff",
                border: "none",
                borderRadius: "10px",
                fontWeight: 700,
                fontSize: "0.88rem",
                cursor: sending ? "not-allowed" : "pointer",
                boxShadow: "0 2px 8px rgba(2, 132, 199, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                transition: "all 0.15s ease",
              }}
            >
              <i className="fas fa-tower-broadcast"></i>
              <span>{sending ? "Broadcasting..." : "Dispatch Push Alert Live"}</span>
            </button>
          </form>
        </div>

        {/* Right Card: High-Fidelity Responsive Smartphone Screen Mockup */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "14px",
            border: "1px solid #e2e8f0",
            padding: "16px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-mobile-screen" style={{ color: "#0284c7" }}></i>
              <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0f172a" }}>Live Smartphone Screen Simulator</span>
            </div>
            <span style={{ fontSize: "0.7rem", color: "#64748b", background: "#f1f5f9", padding: "2px 8px", borderRadius: "6px", fontWeight: 600 }}>
              Lock Screen Live View
            </span>
          </div>

          {/* Smartphone Frame (Sleek & scaled to fit laptop vh) */}
          <div
            style={{
              background: "linear-gradient(180deg, #090d16 0%, #0f172a 100%)",
              borderRadius: "20px",
              padding: "12px 14px 14px",
              boxShadow: "0 10px 25px -4px rgba(15, 23, 42, 0.3)",
              border: "3px solid #1e293b",
              color: "#ffffff",
              minHeight: "260px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Top Bar: Time + Notch */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.7rem", color: "#94a3b8", padding: "0 4px 10px 4px" }}>
                <span style={{ fontWeight: 700, color: "#e2e8f0" }}>09:41</span>
                <div style={{ width: "40px", height: "3px", background: "#334155", borderRadius: "10px" }}></div>
                <span style={{ fontWeight: 600 }}>5G • 100%</span>
              </div>

              {/* Push Card on Glass */}
              <div
                style={{
                  background: "rgba(30, 41, 59, 0.88)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "14px",
                  padding: "10px 12px",
                  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.35)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "5px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <img
                      src="/favicon.png"
                      alt="ChittorTech"
                      style={{ width: "18px", height: "18px", borderRadius: "4px" }}
                    />
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#e2e8f0" }}>ChittorTech App</span>
                    <span style={{ fontSize: "0.65rem", color: "#64748b" }}>• Just now</span>
                  </div>
                  <span
                    style={{
                      fontSize: "0.62rem",
                      fontWeight: 800,
                      padding: "1px 6px",
                      borderRadius: "4px",
                      background:
                        type === "ALERT" ? "#ef4444" : type === "UPDATE" ? "#10b981" : type === "OFFER" ? "#8b5cf6" : "#0284c7",
                      color: "#ffffff",
                    }}
                  >
                    {type}
                  </span>
                </div>

                <div style={{ fontSize: "0.82rem", fontWeight: 800, color: "#f8fafc", marginBottom: "3px" }}>
                  {title || "Notification Title Preview"}
                </div>
                <div style={{ fontSize: "0.74rem", color: "#cbd5e1", lineHeight: 1.4 }}>
                  {message || "Notification body text will render here as an instant push alert on user smartphone screen."}
                </div>

                <div style={{ marginTop: "8px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.65rem", color: "#94a3b8", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "5px" }}>
                  <span style={{ color: target === "SPECIFIC_CLIENT" ? "#38bdf8" : "#94a3b8", fontWeight: 600 }}>
                    Audience: {target === "ALL" ? "🌐 Everyone" : target === "CLIENTS" ? "🏢 Clients" : target === "GUESTS" ? "🟢 Guests" : `🎯 ${effectiveClientId || "Selected Client"}`}
                  </span>
                  <span>Swipe to open &rarr;</span>
                </div>
              </div>
            </div>

            {/* Bottom Home Indicator */}
            <div style={{ textAlign: "center", paddingTop: "10px" }}>
              <div style={{ width: "60px", height: "3px", background: "#475569", borderRadius: "10px", margin: "0 auto" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Broadcast History Stream Feed (Clean, Compact, Easy to Scan) */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "14px",
          border: "1px solid #e2e8f0",
          padding: "18px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
          <div>
            <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0f172a" }}>
              Live Broadcast Stream ({filteredNotifications.length})
            </div>
            <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Live notifications stored in Cloud Database</div>
          </div>

          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <input
              type="text"
              placeholder="Search history..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              style={{
                padding: "6px 10px",
                borderRadius: "6px",
                border: "1px solid #cbd5e1",
                fontSize: "0.78rem",
                outline: "none",
                width: "160px",
              }}
            />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              style={{
                padding: "6px 8px",
                borderRadius: "6px",
                border: "1px solid #cbd5e1",
                fontSize: "0.78rem",
                fontWeight: 600,
                background: "#ffffff",
                color: "#0f172a",
              }}
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
          <div style={{ textAlign: "center", padding: "30px", color: "#64748b", fontSize: "0.85rem" }}>
            <i className="fas fa-spinner fa-spin" style={{ fontSize: "1.2rem", color: "#0284c7", marginBottom: "6px" }}></i>
            <div>Loading live broadcasts...</div>
          </div>
        ) : filteredNotifications.length === 0 ? (
          <div style={{ textAlign: "center", padding: "30px 20px", color: "#94a3b8" }}>
            <i className="fas fa-bell-slash" style={{ fontSize: "1.6rem", marginBottom: "6px", color: "#cbd5e1" }}></i>
            <div style={{ fontWeight: 700, color: "#64748b", fontSize: "0.85rem" }}>No broadcast notifications found</div>
            <div style={{ fontSize: "0.75rem", marginTop: "2px" }}>Compose and dispatch your first push alert above.</div>
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.82rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #e2e8f0", color: "#64748b", textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: "0.5px" }}>
                  <th style={{ padding: "10px 12px" }}>Headline &amp; Message</th>
                  <th style={{ padding: "10px 12px" }}>Badge</th>
                  <th style={{ padding: "10px 12px" }}>Target Audience</th>
                  <th style={{ padding: "10px 12px" }}>Dispatched Time</th>
                  <th style={{ padding: "10px 12px", textAlign: "right" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredNotifications.map((n) => (
                  <tr key={n.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "10px 12px" }}>
                      <div style={{ fontWeight: 700, color: "#0f172a", marginBottom: "1px" }}>{n.title}</div>
                      <div style={{ color: "#64748b", fontSize: "0.76rem", maxWidth: "420px" }}>{n.message}</div>
                    </td>
                    <td style={{ padding: "10px 12px" }}>
                      <span
                        style={{
                          padding: "2px 7px",
                          borderRadius: "4px",
                          fontSize: "0.68rem",
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
                    <td style={{ padding: "10px 12px", fontWeight: 600, color: "#334155" }}>
                      {n.target === "ALL" ? (
                        <span style={{ color: "#0369a1", background: "#f0f9ff", padding: "2px 6px", borderRadius: "4px", fontSize: "0.74rem" }}>🌐 Everyone</span>
                      ) : n.target === "CLIENTS" ? (
                        <span style={{ color: "#15803d", background: "#ecfdf5", padding: "2px 6px", borderRadius: "4px", fontSize: "0.74rem" }}>🏢 Clients</span>
                      ) : n.target === "GUESTS" ? (
                        <span style={{ color: "#b45309", background: "#fffbeb", padding: "2px 6px", borderRadius: "4px", fontSize: "0.74rem" }}>🟢 Guests</span>
                      ) : (
                        <span style={{ color: "#6d28d9", background: "#f5f3ff", padding: "2px 6px", borderRadius: "4px", fontSize: "0.74rem" }}>
                          🎯 Private: {n.targetClientId || "Client"}
                        </span>
                      )}
                    </td>
                    <td style={{ padding: "10px 12px", color: "#64748b", fontSize: "0.76rem" }}>
                      {n.createdAt
                        ? new Date(n.createdAt).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : "Recent"}
                    </td>
                    <td style={{ padding: "10px 12px", textAlign: "right" }}>
                      <button
                        onClick={() => handleDelete(n.id)}
                        style={{
                          background: "#fee2e2",
                          color: "#ef4444",
                          border: "none",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                        title="Delete Broadcast"
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
      {confirmModal && <AdminConfirmModal config={confirmModal} onClose={() => setConfirmModal(null)} />}
    </div>
  );
}
