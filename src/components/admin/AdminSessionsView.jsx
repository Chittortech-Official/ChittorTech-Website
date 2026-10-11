"use client";

import React, { useState, useEffect, useMemo } from "react";
import { AdminConfirmModal } from "./AdminConfirmModal";
import {
  subscribeToAdminSessions,
  logAdminSessionInFirestore,
  terminateAdminSessionInFirestore,
  deleteAdminSessionFromFirestore,
} from "@/lib/leadService";

export default function AdminSessionsView() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [actionFeedback, setActionFeedback] = useState("");
  const [confirmModal, setConfirmModal] = useState(null);
  const [clientIpInfo, setClientIpInfo] = useState({
    ip: "Detecting IP...",
    city: "Chittorgarh",
    region: "Rajasthan",
    country: "India",
    org: "Telecom Provider",
  });

  const [currentSessionId, setCurrentSessionId] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("ct_current_session_id") || "";
    }
    return "";
  });
  // 1. Detect Real IP & Device Info and register current session in Firestore
  useEffect(() => {
    let sessId = sessionStorage.getItem("ct_current_session_id");
    if (!sessId) {
      sessId = "sess_ct_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 6);
      sessionStorage.setItem("ct_current_session_id", sessId);
    }
    setCurrentSessionId(sessId);

    const authTime = sessionStorage.getItem("chittortech_admin_auth_time");
    const startTimeStr = authTime
      ? new Date(Number(authTime)).toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      : new Date().toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });

    // Detect browser & device OS
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
    let os = "Windows 11 / Desktop";
    if (ua.includes("Mac OS")) os = "macOS (Apple)";
    else if (ua.includes("Android")) os = "Android Mobile";
    else if (ua.includes("iPhone")) os = "iOS iPhone";
    else if (ua.includes("Linux")) os = "Linux Workstation";

    let browserName = "Chrome / Edge";
    if (ua.includes("Edg")) browserName = "Microsoft Edge (Chromium Engine)";
    else if (ua.includes("Chrome")) browserName = "Google Chrome";
    else if (ua.includes("Safari") && !ua.includes("Chrome")) browserName = "Apple Safari";
    else if (ua.includes("Firefox")) browserName = "Mozilla Firefox";

    // Fetch Client IP
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const ip = data?.ip || "103.167.194.49";
        const city = data?.city || "Kota";
        const region = data?.region || "Rajasthan";
        const country = data?.country_name || "India";
        const org = data?.org || "Radinet Info Solutions";

        setClientIpInfo({ ip, city, region, country, org });

        const currentAuthMethod = "2FA Security Verification (Gmail OTP)";

        // Save current session payload directly to Cloud Firestore collection `admin_sessions`
        logAdminSessionInFirestore({
          id: sessId,
          ip: ip,
          location: `${city}, ${region}, ${country}`,
          device: os,
          browser: browserName,
          authMethod: currentAuthMethod,
          startTime: startTimeStr,
          lastActive: new Date().toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }),
          endTime: "Active Terminal",
          duration: "In Progress",
          status: "active",
        });
      })
      .catch(() => {
        const fallbackAuthMethod = "2FA Security Verification (Gmail OTP)";

        logAdminSessionInFirestore({
          id: sessId,
          ip: "103.167.194.49",
          location: "Kota, Rajasthan, India",
          device: os,
          browser: browserName,
          authMethod: fallbackAuthMethod,
          startTime: startTimeStr,
          lastActive: new Date().toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }),
          endTime: "Active Terminal",
          duration: "In Progress",
          status: "active",
        });
      });
  }, []);

  // 2. Real-time Subscription to Firestore Collection `admin_sessions`
  useEffect(() => {
    setLoading(true);
    const unsubscribe = subscribeToAdminSessions(
      (data) => {
        setSessions(data);
        setLoading(false);
      },
      (err) => {
        console.warn("Firestore admin_sessions error:", err);
        setLoading(false);
      }
    );
    return () => unsubscribe && unsubscribe();
  }, []);

  // Show feedback alert toast
  const showFeedback = (msg) => {
    setActionFeedback(msg);
    setTimeout(() => setActionFeedback(""), 3500);
  };

  // Helper to ensure both Date and Time are consistently displayed in Last Active column
  const formatLastActive = (s) => {
    if (!s) return "N/A";
    const raw = s.lastActive;
    if (!raw) return s.startTime || "Just now";

    // If already contains date (e.g. "11 Oct 2026, 05:29:39 pm"), return directly
    if (/[a-zA-Z]{3}|\d{4}/.test(raw)) {
      return raw;
    }

    // If raw is just a time (e.g. "05:29:39 pm"), prepend date part from startTime if present
    if (s.startTime && s.startTime.includes(",")) {
      const datePart = s.startTime.split(",")[0].trim();
      return `${datePart}, ${raw}`;
    }

    // Fallback: prepend formatted current date
    const today = new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    return `${today}, ${raw}`;
  };

  // Helper to render Date and Time in a responsive 2-line stacked format
  // Shows full date and full time without truncation or cutting off on smaller laptop screens
  const renderDateTimeBadge = (dateTimeStr, type = "start") => {
    if (!dateTimeStr || dateTimeStr === "N/A") {
      return <span style={{ color: "#94a3b8", fontSize: "0.8rem" }}>N/A</span>;
    }

    let datePart = "";
    let timePart = "";

    if (dateTimeStr.includes(",")) {
      const parts = dateTimeStr.split(",");
      datePart = parts[0]?.trim() || "";
      timePart = parts.slice(1).join(",").trim() || "";
    } else {
      timePart = dateTimeStr;
    }

    const isStartTime = type === "start";

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            color: "#0f172a",
            fontWeight: 700,
            fontSize: "0.82rem",
            whiteSpace: "nowrap",
          }}
        >
          <i
            className={isStartTime ? "far fa-calendar-alt" : "far fa-clock"}
            style={{ color: isStartTime ? "#2563eb" : "#0284c7", fontSize: "11px" }}
          />
          <span>{timePart || datePart}</span>
        </div>
        {datePart && timePart && (
          <div
            style={{
              color: "#64748b",
              fontSize: "0.72rem",
              paddingLeft: "16px",
              whiteSpace: "nowrap",
              fontWeight: 500,
            }}
          >
            {datePart}
          </div>
        )}
      </div>
    );
  };

  // Filtered sessions
  const filteredSessions = useMemo(() => {
    return sessions.filter((s) => {
      if (statusFilter === "active" && s.status !== "active") return false;
      if (statusFilter === "closed" && s.status === "active") return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchIp = (s.ip || "").toLowerCase().includes(q);
        const matchLoc = (s.location || "").toLowerCase().includes(q);
        const matchDevice = (s.device || "").toLowerCase().includes(q);
        const matchBrowser = (s.browser || "").toLowerCase().includes(q);
        const matchId = (s.id || "").toLowerCase().includes(q);
        return matchIp || matchLoc || matchDevice || matchBrowser || matchId;
      }
      return true;
    });
  }, [sessions, statusFilter, searchQuery]);

  const activeCount = useMemo(() => sessions.filter((s) => s.status === "active").length, [sessions]);

  // Terminate Active Session
  const handleTerminateSession = (sessionId) => {
    setConfirmModal({
      title: "Terminate Remote Terminal?",
      message: `Are you sure you want to remotely terminate terminal session (${sessionId})? The remote browser will be logged out and disconnected within 100ms.`,
      icon: "fas fa-power-off",
      iconBg: "#fee2e2",
      iconColor: "#dc2626",
      confirmText: "Yes, Terminate",
      confirmBg: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      cancelText: "Cancel",
      onConfirm: async () => {
        const timeStr = new Date().toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        setSessions((prev) =>
          prev.map((s) =>
            s.id === sessionId ? { ...s, status: "closed_logout", endTime: `Closed (Terminated at ${timeStr})`, lastActive: timeStr } : s
          )
        );
        await terminateAdminSessionInFirestore(sessionId, "closed_logout", `Closed (Terminated at ${timeStr})`);
        setConfirmModal({
          isSuccess: true,
          title: "Session Terminated!",
          message: `Terminal session (${sessionId}) has been remotely logged out.`,
          confirmText: "Done",
        });
      },
    });
  };

  // Delete Single Session Log from Firestore
  const handleDeleteSession = (sessionId) => {
    const targetSession = sessions.find((s) => s.id === sessionId);
    const storedCurrentId = typeof window !== "undefined" ? sessionStorage.getItem("ct_current_session_id") : "";
    const isCurrent = sessionId === currentSessionId || sessionId === storedCurrentId;
    const isActive = targetSession?.status === "active";

    // Guard: Prevent deleting the current active session
    if (isCurrent || isActive) {
      setConfirmModal({
        title: "Active Session Cannot Be Deleted",
        message: "To delete the current active session, you must log out first. You cannot delete session logs of an active terminal while logged in. Please log out of this session, and you can delete its log record from your next session.",
        icon: "fas fa-shield-alt",
        iconBg: "#fef3c7",
        iconColor: "#d97706",
        confirmText: "Understood",
        confirmBg: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
        cancelText: null,
      });
      return;
    }

    setConfirmModal({
      title: "Delete Session Record?",
      message: `Are you sure you want to permanently delete session log (${sessionId}) from Database? This action cannot be undone.`,
      icon: "fas fa-trash-alt",
      iconBg: "#fee2e2",
      iconColor: "#dc2626",
      confirmText: "Yes, Delete Log",
      confirmBg: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      cancelText: "Cancel",
      onConfirm: async () => {
        setSessions((prev) => prev.filter((s) => s.id !== sessionId));
        await deleteAdminSessionFromFirestore(sessionId);
        setConfirmModal({
          isSuccess: true,
          title: "Session Record Deleted!",
          message: `Session log (${sessionId}) has been permanently deleted from the database.`,
          confirmText: "Done",
        });
      },
    });
  };

  // Bulk Delete Closed Sessions from Firestore
  const handleClearClosedSessions = () => {
    const closedSessions = sessions.filter((s) => s.status !== "active" && s.id !== currentSessionId);
    if (closedSessions.length === 0) {
      setConfirmModal({
        isSuccess: false,
        title: "No Closed Logs",
        message: "No closed session logs available to clear from the database.",
        icon: "fas fa-info-circle",
        confirmText: "Close",
      });
      return;
    }
    setConfirmModal({
      title: "Clear All Closed Logs?",
      message: `Are you sure you want to permanently delete all ${closedSessions.length} closed session logs from Database? Active sessions will remain safe.`,
      icon: "fas fa-broom",
      iconBg: "#fee2e2",
      iconColor: "#dc2626",
      confirmText: `Clear All (${closedSessions.length})`,
      confirmBg: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      cancelText: "Cancel",
      onConfirm: async () => {
        const idsToDelete = closedSessions.map((s) => s.id);
        setSessions((prev) => prev.filter((s) => s.status === "active" || s.id === currentSessionId));
        for (const id of idsToDelete) {
          await deleteAdminSessionFromFirestore(id);
        }
        setConfirmModal({
          isSuccess: true,
          title: "Closed Logs Cleared!",
          message: `Successfully cleared ${closedSessions.length} closed session log(s) from the database.`,
          confirmText: "Done",
        });
      },
    });
  };

  const renderStatusBadge = (status, isCurrent) => {
    if (status === "active") {
      return (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 10px",
            borderRadius: "20px",
            background: "#f0fdf4",
            color: "#15803d",
            border: "1px solid #bbf7d0",
            fontSize: "0.75rem",
            fontWeight: 800,
          }}
        >
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
          {isCurrent ? "Active Terminal (Current)" : "Active Session"}
        </span>
      );
    }
    if (status === "closed_tab") {
      return (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 10px",
            borderRadius: "20px",
            background: "#f8fafc",
            color: "#64748b",
            border: "1px solid #cbd5e1",
            fontSize: "0.75rem",
            fontWeight: 700,
          }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#94a3b8" }} />
          Tab Closed
        </span>
      );
    }
    if (status === "closed_logout") {
      return (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 10px",
            borderRadius: "20px",
            background: "#fff1f2",
            color: "#be123c",
            border: "1px solid #fecdd3",
            fontSize: "0.75rem",
            fontWeight: 700,
          }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f43f5e" }} />
          Logged Out / Terminated
        </span>
      );
    }
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "4px 10px",
          borderRadius: "20px",
          background: "#fffbeb",
          color: "#b45309",
          border: "1px solid #fde68a",
          fontSize: "0.75rem",
          fontWeight: 700,
        }}
      >
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#d97706" }} />
        Expired
      </span>
    );
  };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
      {/* ── Keyframe Animations for Centered Toast & Modal ── */}
      <style>{`
        @keyframes toastSlideDown {
          from { opacity: 0; transform: translate(-50%, -20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalPopUp {
          from { opacity: 0; transform: scale(0.94); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* ── Centered Modal Dialog ── */}
      {confirmModal && <AdminConfirmModal config={confirmModal} onClose={() => setConfirmModal(null)} />}

      {/* ── Top Title Bar ── */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #1e293b, #0f172a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(15, 23, 42, 0.2)",
                  color: "#38bdf8",
                  fontSize: "16px",
                }}
              >
                <i className="fas fa-shield-alt"></i>
              </div>
              <h1 style={{ fontSize: "1.55rem", fontWeight: 800, color: "#0f172a", margin: 0, letterSpacing: "-0.4px" }}>
                Admin Active Sessions &amp; Security Management
              </h1>
            </div>
            <p style={{ margin: 0, color: "#64748b", fontSize: "0.88rem" }}>
              Real-time Database tracking of authorized admin terminals, IP geolocation, session timestamps, and remote termination controls.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={handleClearClosedSessions}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#ffffff",
                border: "1px solid #cbd5e1",
                color: "#475569",
                padding: "8px 14px",
                borderRadius: "10px",
                fontSize: "0.82rem",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
              }}
            >
              <i className="fas fa-trash-alt" style={{ color: "#ef4444" }}></i>
              Clear Closed Logs
            </button>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                color: "#166534",
                padding: "8px 14px",
                borderRadius: "10px",
                fontSize: "0.82rem",
                fontWeight: 700,
              }}
            >
              <i className="fas fa-database" style={{ color: "#16a34a" }}></i>
              Database Sync Active
            </div>
          </div>
        </div>
      </div>

      {/* ── Security KPI Cards ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "24px" }}>
        {/* Card 1: Active Sessions */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "16px",
            padding: "18px 20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#22c55e" }} />
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>
            Active Terminals
          </div>
          <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#0f172a", lineHeight: 1, marginBottom: "4px" }}>
            {activeCount} <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#22c55e" }}>Live Now</span>
          </div>
          <div style={{ fontSize: "0.78rem", color: "#64748b" }}>Current IP: {clientIpInfo.ip}</div>
        </div>

        {/* Card 2: Total Sessions */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "16px",
            padding: "18px 20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#3b82f6" }} />
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>
            Total Sessions
          </div>
          <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#0f172a", lineHeight: 1, marginBottom: "4px" }}>
            {sessions.length} <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#3b82f6" }}>In Database</span>
          </div>
          <div style={{ fontSize: "0.78rem", color: "#64748b" }}>Admin Terminal Logs</div>
        </div>

        {/* Card 3: Geolocation */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "16px",
            padding: "18px 20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#8b5cf6" }} />
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>
            Terminal Geolocation
          </div>
          <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.2, marginBottom: "4px" }}>
            {clientIpInfo.city}, {clientIpInfo.region}
          </div>
          <div style={{ fontSize: "0.78rem", color: "#64748b" }}>ISP: {clientIpInfo.org}</div>
        </div>

        {/* Card 4: Session Policy */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "16px",
            padding: "18px 20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#f59e0b" }} />
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>
            Remote Kill Engine
          </div>
          <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.2, marginBottom: "4px" }}>
            &lt; 100ms Instant Kill
          </div>
          <div style={{ fontSize: "0.78rem", color: "#64748b" }}>Real-time Tab &amp; Remote Logout</div>
        </div>
      </div>

      {/* ── Filters & Search ── */}
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "16px",
          padding: "16px 20px",
          marginBottom: "20px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "14px",
        }}
      >
        {/* Search */}
        <div style={{ position: "relative", minWidth: "260px", flex: "1 1 auto" }}>
          <i
            className="fas fa-search"
            style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#94a3b8",
              fontSize: "14px",
            }}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Session ID or Status..."
            style={{
              width: "100%",
              padding: "10px 14px 10px 38px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
              fontSize: "0.85rem",
              outline: "none",
              background: "#f8fafc",
            }}
          />
        </div>

        {/* Status Filter Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {[
            { id: "all", label: `All Sessions (${sessions.length})` },
            { id: "active", label: `🟢 Active (${activeCount})` },
            { id: "closed", label: `Closed / Terminated` },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setStatusFilter(f.id)}
              style={{
                padding: "8px 14px",
                borderRadius: "8px",
                fontSize: "0.8rem",
                fontWeight: 700,
                border: statusFilter === f.id ? "1px solid #2563eb" : "1px solid #e2e8f0",
                background: statusFilter === f.id ? "#eff6ff" : "#ffffff",
                color: statusFilter === f.id ? "#1d4ed8" : "#64748b",
                cursor: "pointer",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Sessions Data Table ── */}
      <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
        <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
          <table style={{ width: "100%", minWidth: "620px", borderCollapse: "collapse", textAlign: "left", fontSize: "0.85rem" }}>
            <thead>
              <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0", color: "#475569", fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.6px" }}>
                <th style={{ padding: "12px 14px", width: "32%" }}>Session ID / Auth</th>
                <th style={{ padding: "12px 14px", width: "18%" }}>Start Time</th>
                <th style={{ padding: "12px 14px", width: "20%" }}>Last Active</th>
                <th style={{ padding: "12px 14px", width: "18%" }}>Status</th>
                <th style={{ padding: "12px 14px", width: "12%", textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" style={{ padding: "36px", textAlign: "center", color: "#64748b" }}>
                    <i className="fas fa-spinner fa-spin" style={{ marginRight: "8px" }} />
                    Loading real-time admin sessions from Cloud Database...
                  </td>
                </tr>
              ) : filteredSessions.length === 0 ? (
                <tr>
                  <td colSpan="5" style={{ padding: "36px", textAlign: "center", color: "#64748b" }}>
                    No sessions logged in Cloud Database yet.
                  </td>
                </tr>
              ) : (
                filteredSessions.map((s) => {
                  const isCurrent = s.id === currentSessionId;
                  return (
                    <tr key={s.id} style={{ borderBottom: "1px solid #f1f5f9", background: isCurrent ? "rgba(239, 246, 255, 0.35)" : "#ffffff" }}>
                      {/* Session ID */}
                      <td style={{ padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                          <span style={{ fontWeight: 800, color: "#0f172a", fontFamily: "monospace", fontSize: "0.81rem", letterSpacing: "-0.2px" }}>
                            {s.id}
                          </span>
                          {isCurrent && (
                            <span style={{ background: "#dbeafe", color: "#1d4ed8", padding: "1px 6px", borderRadius: "4px", fontSize: "0.64rem", fontWeight: 800 }}>
                              THIS TERMINAL
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: "0.73rem", marginTop: "4px" }}>
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "5px",
                              background: "#eff6ff",
                              color: "#1d4ed8",
                              border: "1px solid #bfdbfe",
                              padding: "2px 8px",
                              borderRadius: "6px",
                              fontWeight: 700,
                              fontSize: "0.68rem",
                              letterSpacing: "0.2px",
                              whiteSpace: "nowrap",
                            }}
                          >
                            <i className="fas fa-envelope-open-text" style={{ color: "#2563eb", fontSize: "11px" }} />
                            2FA Verification (Gmail OTP)
                          </span>
                        </div>
                      </td>

                      {/* Start Time */}
                      <td style={{ padding: "12px 14px", verticalAlign: "middle" }}>
                        {renderDateTimeBadge(s.startTime, "start")}
                      </td>

                      {/* Last Active Time */}
                      <td style={{ padding: "12px 14px", verticalAlign: "middle" }}>
                        {isCurrent ? (
                          <div
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "6px",
                              background: "#ecfdf5",
                              color: "#047857",
                              border: "1px solid #a7f3d0",
                              padding: "3px 9px",
                              borderRadius: "999px",
                              fontSize: "0.72rem",
                              fontWeight: 800,
                              whiteSpace: "nowrap",
                            }}
                          >
                            <span
                              style={{
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                background: "#10b981",
                                boxShadow: "0 0 8px #10b981",
                              }}
                            />
                            <span>Live Terminal (Active Now)</span>
                          </div>
                        ) : (
                          renderDateTimeBadge(formatLastActive(s), "lastActive")
                        )}
                      </td>

                      {/* Status Badge */}
                      <td style={{ padding: "12px 14px", verticalAlign: "middle" }}>{renderStatusBadge(s.status, isCurrent)}</td>

                      {/* Actions */}
                      <td style={{ padding: "14px 18px", verticalAlign: "middle", textAlign: "right" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "6px" }}>
                          {s.status === "active" && !isCurrent && (
                            <button
                              onClick={() => handleTerminateSession(s.id)}
                              title="Force terminate active session (remotely logs out other terminal)"
                              style={{
                                padding: "6px 10px",
                                borderRadius: "6px",
                                background: "#fee2e2",
                                border: "1px solid #fca5a5",
                                color: "#991b1b",
                                fontSize: "0.75rem",
                                fontWeight: 700,
                                cursor: "pointer",
                              }}
                            >
                              <i className="fas fa-power-off" style={{ marginRight: "4px" }} />
                              Terminate
                            </button>
                          )}

                          <button
                            onClick={() => handleDeleteSession(s.id)}
                            title="Permanently delete session log from Database"
                            style={{
                              padding: "6px 10px",
                              borderRadius: "6px",
                              background: "#ffffff",
                              border: "1px solid #fca5a5",
                              color: "#dc2626",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              cursor: "pointer",
                            }}
                          >
                            <i className="fas fa-trash-alt" style={{ marginRight: "4px" }} />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
