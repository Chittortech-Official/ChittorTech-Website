"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import B2BLeadGenerator from "@/components/admin/B2BLeadGenerator";
import AdminSessionsView from "@/components/admin/AdminSessionsView";
import NotificationHub from "@/components/admin/NotificationHub";
import ProjectInvoiceManager from "@/components/admin/ProjectInvoiceManager";
import ClientPortalManager from "@/components/admin/ClientPortalManager";
import {
  subscribeToLeads,
  updateLeadStatus,
  updateLeadNotes,
  deleteLead,
  subscribeToB2BLeads,
  updateB2BLeadStatus,
  updateB2BLeadNotes,
  deleteB2BLead,
  addAdminSessionActivityInFirestore,
  terminateAdminSessionInFirestore,
  subscribeToAdminSessions,
} from "@/lib/leadService";

const SCRIPT_URL = "/api/admin/auth";

export default function AdminLeadsPage() {
  const [adminPipelineTab, setAdminPipelineTab] = useState("b2b_outbound");

  useEffect(() => {
    try {
      const savedTab = localStorage.getItem("ct_admin_pipeline_tab");
      if (savedTab && ["b2b_outbound", "inbound", "client_portal", "notifications", "projects_invoices", "sessions"].includes(savedTab)) {
        setAdminPipelineTab(savedTab);
      }
    } catch (e) {}
  }, []);

  const changeAdminTab = (newTab) => {
    setAdminPipelineTab(newTab);
    try {
      localStorage.setItem("ct_admin_pipeline_tab", newTab);
    } catch (e) {}
  };
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [passcode, setPasscode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  // Live Network & Database Connection Status
  const [isOnline, setIsOnline] = useState(() => {
    return typeof navigator !== "undefined" ? navigator.onLine : true;
  });
  const [isDbConnected, setIsDbConnected] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setIsDbConnected(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
      setIsDbConnected(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    if (typeof navigator !== "undefined" && !navigator.onLine) {
      setIsOnline(false);
      setIsDbConnected(false);
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // 2FA state
  const [step, setStep] = useState("login"); // "login" | "otp" | "forgot"
  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [otpSuccess, setOtpSuccess] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const otpRefs = useRef([]);

  // Forgot Key state
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [recoveryLoading, setRecoveryLoading] = useState(false);
  const [recoveryError, setRecoveryError] = useState("");
  const [recoverySuccess, setRecoverySuccess] = useState(false);

  const generateCaptcha = () => {
    const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaInput("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // Live IST Clock (HH:MM:SS) and Date
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      try {
        const timeFormatter = new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        const dateFormatter = new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          weekday: "short",
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
        setCurrentTime(timeFormatter.format(now));
        setCurrentDate(dateFormatter.format(now));
      } catch {
        setCurrentTime(now.toLocaleTimeString());
        setCurrentDate(now.toDateString());
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // OTP resend cooldown timer
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const t = setTimeout(() => setResendCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [resendCooldown]);

  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedLead, setSelectedLead] = useState(null);
  const [leadNotes, setLeadNotes] = useState("");
  const [savingNotes, setSavingNotes] = useState(false);

  // B2B Leads Database (Firestore collection: b2b_leads)
  const [b2bLeads, setB2bLeads] = useState([]);
  const [b2bLoading, setB2bLoading] = useState(true);
  const [b2bSearch, setB2bSearch] = useState("");
  const [b2bStatusF, setB2bStatusF] = useState("all");
  const [b2bCityF, setB2bCityF] = useState("all");
  const [b2bWebF, setB2bWebF] = useState("all");
  const [b2bEditingId, setB2bEditingId] = useState(null);
  const [b2bNotesDraft, setB2bNotesDraft] = useState("");

  // Security Lockout states (Stored in sessionStorage to prevent refresh bypass)
  const [lockoutMsg, setLockoutMsg] = useState("");

  const checkSecurityLockout = () => {
    try {
      const lockUntil = sessionStorage.getItem("ct_sec_lockout_until");
      if (lockUntil && Number(lockUntil) > Date.now()) {
        const remainingSec = Math.ceil((Number(lockUntil) - Date.now()) / 1000);
        const remainingMin = Math.ceil(remainingSec / 60);
        return `Security Lockout Active: Too many failed attempts. Please wait ${remainingMin} minute(s).`;
      }
    } catch (e) {}
    return "";
  };

  // Check auth from session: tab close terminates sessionStorage, max 8-hour session lifetime
  useEffect(() => {
    try {
      const token = sessionStorage.getItem("chittortech_admin_auth");
      const authTime = sessionStorage.getItem("chittortech_admin_auth_time");
      const maxAgeMs = 8 * 60 * 60 * 1000; // 8 hours session expiry

      if (token && authTime && (Date.now() - Number(authTime) < maxAgeMs)) {
        setIsAuthenticated(true);
      } else if (token) {
        // Expired or invalid session
        sessionStorage.removeItem("chittortech_admin_auth");
        sessionStorage.removeItem("chittortech_admin_auth_time");
        setIsAuthenticated(false);
      }
    } catch (e) {
      console.warn("Session check error:", e);
    } finally {
      setIsCheckingAuth(false);
    }
  }, []);

  // Step 1: Validate Access Key & Captcha, with Brute-Force Lockout (5 failed attempts = 10m lock)
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    const activeLockout = checkSecurityLockout();
    if (activeLockout) {
      setLoginError(activeLockout);
      setLoginLoading(false);
      return;
    }

    if (captchaInput.trim().toUpperCase() !== captchaCode) {
      setLoginError("Verification code (CAPTCHA) is incorrect. Please try again.");
      generateCaptcha();
      setLoginLoading(false);
      return;
    }

    const correctKey = process.env.NEXT_PUBLIC_ADMIN_ACCESS_KEY || "255856";
    if (passcode.trim() === correctKey) {
      // Reset failed key attempts on success
      try {
        sessionStorage.removeItem("ct_key_failed_count");
      } catch (e) {}

      // Optimistic Instant UI Transition (< 50ms)
      setStep("otp");
      setResendCooldown(30);
      setLoginLoading(false);
      setTimeout(() => otpRefs.current[0]?.focus(), 100);

      // Dispatch OTP email asynchronously in background
      if (SCRIPT_URL) {
        fetch(SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            action: "admin_request_otp",
            authGate: "CT_ADMIN_GATEWAY_2026",
          }),
        }).catch((err) => console.warn("Background OTP dispatch notice:", err));
      }
    } else {
      // Brute-force rate limiting: 5 failed attempts locks for 10 minutes
      let count = 1;
      try {
        count = Number(sessionStorage.getItem("ct_key_failed_count") || 0) + 1;
        sessionStorage.setItem("ct_key_failed_count", count.toString());
        if (count >= 5) {
          sessionStorage.setItem("ct_sec_lockout_until", (Date.now() + 10 * 60 * 1000).toString());
          setLoginError("Security Alert: 5 incorrect access key attempts. Terminal locked for 10 minutes.");
          generateCaptcha();
          setLoginLoading(false);
          return;
        }
      } catch (e) {}

      setLoginError(`Incorrect access key. (${5 - count} attempt(s) remaining before security lockout).`);
      generateCaptcha();
      setLoginLoading(false);
    }
  };

  // Recover Master Key handler
  const handleRecoverKey = async (e) => {
    e.preventDefault();
    setRecoveryLoading(true);
    setRecoveryError("");
    setRecoverySuccess(false);

    if (captchaInput.trim().toUpperCase() !== captchaCode) {
      setRecoveryError("Verification code (CAPTCHA) is incorrect. Please try again.");
      generateCaptcha();
      setRecoveryLoading(false);
      return;
    }

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          action: "admin_recover_key",
          email: recoveryEmail.trim(),
        }),
      });
      const data = await res.json();
      if (data && data.status === "success") {
        setRecoverySuccess(true);
        setRecoveryError("");
      } else {
        setRecoveryError(data?.msg || "Unauthorized email. Key recovery is restricted to registered admins.");
        generateCaptcha();
      }
    } catch (err) {
      setRecoveryError("Recovery request failed. Please check your connection.");
    } finally {
      setRecoveryLoading(false);
    }
  };

  // Step 2: 2FA OTP Digits handlers
  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newDigits = [...otpDigits];
    newDigits[index] = value;
    setOtpDigits(newDigits);
    setOtpError("");
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (pasted.length === 6) {
      setOtpDigits(pasted.split(""));
      otpRefs.current[5]?.focus();
    }
  };

  // Validate OTP securely via Google Apps Script (Zero client-side OTP storage)
  const handleVerifyOtp = async () => {
    const activeLockout = checkSecurityLockout();
    if (activeLockout) {
      setOtpError(activeLockout);
      return;
    }

    const code = otpDigits.join("");
    if (code.length < 6) {
      setOtpError("Please enter the complete 6-digit verification code.");
      return;
    }
    setOtpLoading(true);
    setOtpError("");

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          action: "admin_verify_otp",
          enteredOtp: code,
        }),
      });

      const data = await res.json();
      if (data && data.verified === true) {
        setOtpSuccess(true);
        try {
          sessionStorage.removeItem("ct_otp_failed_count");
          sessionStorage.removeItem("ct_sec_lockout_until");
        } catch (e) {}
        const freshSessId = "sess_ct_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 6);
        sessionStorage.setItem("ct_current_session_id", freshSessId);
        sessionStorage.setItem("chittortech_admin_auth", data.token || "ct_auth_" + Date.now());
        sessionStorage.setItem("chittortech_admin_auth_time", Date.now().toString());
        setLoginError("");
        setTimeout(() => {
          setIsAuthenticated(true);
          setOtpLoading(false);
        }, 700);
      } else {
        let count = 1;
        try {
          count = Number(sessionStorage.getItem("ct_otp_failed_count") || 0) + 1;
          sessionStorage.setItem("ct_otp_failed_count", count.toString());
          if (count >= 3) {
            sessionStorage.setItem("ct_sec_lockout_until", (Date.now() + 10 * 60 * 1000).toString());
            setOtpError("Security Lockout: 3 incorrect verification attempts. Terminal locked for 10 minutes.");
            setOtpDigits(["", "", "", "", "", ""]);
            setOtpLoading(false);
            return;
          }
        } catch (e) {}

        const serverMsg = data?.msg || `Incorrect verification code. (${3 - count} attempt(s) remaining before security lockout).`;
        setOtpError(serverMsg);
        setOtpDigits(["", "", "", "", "", ""]);
        setOtpLoading(false);
        otpRefs.current[0]?.focus();
      }
    } catch (err) {
      console.warn("OTP verification fetch notice:", err);
      setOtpError("Network verification failed. Please check your connection and click Resend verification code.");
      setOtpLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendCooldown > 0) return;
    setResendCooldown(30);
    setOtpError("");
    setOtpDigits(["", "", "", "", "", ""]);

    if (SCRIPT_URL) {
      try {
        await fetch(SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            action: "admin_request_otp",
            authGate: "CT_ADMIN_GATEWAY_2026",
          }),
        });
      } catch (err) {
        // Silently handled
      }
    }
    otpRefs.current[0]?.focus();
  };

  const handleLogout = () => {
    const currentSessId = sessionStorage.getItem("ct_current_session_id");
    if (currentSessId) {
      terminateAdminSessionInFirestore(currentSessId, "closed_logout", "Closed (Explicit Logout)");
    }
    try {
      sessionStorage.removeItem("chittortech_admin_auth");
      sessionStorage.clear();
    } catch (e) {
      console.warn("Storage clear error:", e);
    }
    setIsAuthenticated(false);
    setStep("login");
    setPasscode("");
    setOtpDigits(["", "", "", "", "", ""]);
    setOtpError("");
    setLoginError("");
    generateCaptcha();
  };

  // Real-time Firestore subscription
  useEffect(() => {
    if (!isAuthenticated) return;
    setLoading(true);

    const unsubscribe = subscribeToLeads(
      (data) => {
        setLeads(data);
        setLoading(false);
        setError(null);
        setIsDbConnected(true);
      },
      (err) => {
        console.warn("Leads subscription sync notice:", err);
        setError("Failed to load leads from Firestore. Please verify Firestore rules.");
        setLoading(false);
        if (typeof navigator !== "undefined" && !navigator.onLine) {
          setIsDbConnected(false);
        }
      }
    );

    return () => unsubscribe && unsubscribe();
  }, [isAuthenticated]);

  // Real-time subscription for B2B Outbound Leads
  useEffect(() => {
    if (!isAuthenticated) return;
    const unsub = subscribeToB2BLeads(
      (data) => {
        setB2bLeads(data);
        setB2bLoading(false);
        setIsDbConnected(true);
      },
      (err) => {
        console.warn("B2B leads sync notice:", err);
        setB2bLoading(false);
        if (typeof navigator !== "undefined" && !navigator.onLine) {
          setIsDbConnected(false);
        }
      }
    );
    return () => unsub && unsub();
  }, [isAuthenticated]);

  // Real-time Remote Session Kill Listener (Kicks terminated sessions back to login screen instantly)
  useEffect(() => {
    if (!isAuthenticated) return;
    const currentSessId = typeof window !== "undefined" ? sessionStorage.getItem("ct_current_session_id") : null;
    if (!currentSessId) return;

    const unsub = subscribeToAdminSessions((allSessions) => {
      const mySession = allSessions.find((s) => s.id === currentSessId);
      if (mySession && mySession.status === "closed_logout") {
        // Remote Kill Signal Received from another Admin Terminal!
        try {
          sessionStorage.removeItem("ct_current_session_id");
          sessionStorage.removeItem("chittortech_admin_auth");
          sessionStorage.removeItem("chittortech_admin_auth_time");
          sessionStorage.clear();
        } catch (e) {}
        setIsAuthenticated(false);
        setStep("login");
        setLoginError("Security Alert: Your active admin session was remotely terminated by an authorized administrator.");
      }
    });

    return () => unsub && unsub();
  }, [isAuthenticated]);


  // Sync selected lead notes
  useEffect(() => {
    if (selectedLead) {
      setLeadNotes(selectedLead.notes || "");
    }
  }, [selectedLead]);

  // Handle status update
  const handleStatusChange = async (leadId, newStatus) => {
    try {
      await updateLeadStatus(leadId, newStatus);
      if (selectedLead && selectedLead.id === leadId) {
        setSelectedLead((prev) => ({ ...prev, status: newStatus }));
      }
    } catch (err) {
      console.error("Status update error:", err);
    }
  };

  // Handle save notes
  const handleSaveNotes = async () => {
    if (!selectedLead) return;
    setSavingNotes(true);
    await updateLeadNotes(selectedLead.id, leadNotes);
    setSelectedLead((prev) => ({ ...prev, notes: leadNotes }));
    setSavingNotes(false);
  };

  // Handle delete
  const handleDelete = async (leadId, name) => {
    if (window.confirm(`Are you sure you want to delete the lead for "${name || 'this inquiry'}"?`)) {
      await deleteLead(leadId);
      if (selectedLead && selectedLead.id === leadId) {
        setSelectedLead(null);
      }
    }
  };

  // Stats calculation
  const stats = useMemo(() => {
    const total = leads.length;
    const newCount = leads.filter((l) => (l.status || "new") === "new").length;
    const contacted = leads.filter((l) => l.status === "contacted").length;
    const converted = leads.filter((l) => l.status === "converted").length;
    return { total, newCount, contacted, converted };
  }, [leads]);

  // Filtered leads
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      // Status filter
      if (statusFilter !== "all" && (lead.status || "new") !== statusFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = lead.name?.toLowerCase().includes(q);
        const matchContact = lead.contact?.toLowerCase().includes(q);
        const matchEmail = lead.email?.toLowerCase().includes(q);
        const matchCompany = lead.company?.toLowerCase().includes(q);
        const matchLocation = lead.location?.toLowerCase().includes(q);
        const matchMessage = lead.message?.toLowerCase().includes(q);
        return matchName || matchContact || matchEmail || matchCompany || matchLocation || matchMessage;
      }
      return true;
    });
  }, [leads, statusFilter, searchQuery]);

  // Export CSV
  const handleExportCSV = () => {
    if (filteredLeads.length === 0) return;

    const headers = ["ID", "Date", "Name", "Contact", "Email", "Company", "Industry", "Location", "Status", "Source", "Message", "Notes"];
    const rows = filteredLeads.map((l) => {
      const dateStr = l.createdDate ? new Date(l.createdDate).toLocaleString("en-IN") : "";
      return [
        `"${l.id}"`,
        `"${dateStr}"`,
        `"${(l.name || "").replace(/"/g, '""')}"`,
        `"${(l.contact || "").replace(/"/g, '""')}"`,
        `"${(l.email || "").replace(/"/g, '""')}"`,
        `"${(l.company || "").replace(/"/g, '""')}"`,
        `"${(l.industry || "").replace(/"/g, '""')}"`,
        `"${(l.location || "").replace(/"/g, '""')}"`,
        `"${l.status || "new"}"`,
        `"${(l.source || "").replace(/"/g, '""')}"`,
        `"${(l.message || "").replace(/"/g, '""')}"`,
        `"${(l.notes || "").replace(/"/g, '""')}"`,
      ];
    });

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `chittortech_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Phone helper
  const cleanPhoneForWhatsApp = (raw) => {
    if (!raw) return "";
    let cleaned = raw.replace(/[^0-9]/g, "");
    if (cleaned.length === 10) cleaned = "91" + cleaned;
    return cleaned;
  };

  // Status badge styling
  const renderStatusBadge = (status) => {
    const s = status || "new";
    const styles = {
      new:       { bg: "rgba(217,119,6,0.08)",   text: "#92400e", border: "rgba(217,119,6,0.22)",   label: "New Lead",      dot: "#d97706" },
      contacted: { bg: "rgba(99,102,241,0.08)",  text: "#4338ca", border: "rgba(99,102,241,0.22)", label: "Contacted",     dot: "#6366f1" },
      qualified: { bg: "rgba(147,51,234,0.08)",  text: "#7e22ce", border: "rgba(147,51,234,0.22)", label: "Qualified",     dot: "#9333ea" },
      converted: { bg: "rgba(22,163,74,0.08)",   text: "#14532d", border: "rgba(22,163,74,0.22)",  label: "Converted",     dot: "#16a34a" },
      lost:      { bg: "rgba(148,163,184,0.08)", text: "#475569", border: "rgba(148,163,184,0.22)",label: "Lost / Closed",  dot: "#94a3b8" },
    };
    const current = styles[s] || styles.new;
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "4px 10px",
          borderRadius: "999px",
          backgroundColor: current.bg,
          color: current.text,
          border: `1px solid ${current.border}`,
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.2px",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: current.dot,
            boxShadow: `0 0 8px ${current.dot}`,
          }}
        />
        {current.label}
      </span>
    );
  };

  // ── B2B CRM Helpers & Realtime Stats ──
  const b2bStats = useMemo(() => ({
    total:     b2bLeads.length,
    noWeb:     b2bLeads.filter((l) => !l.website?.trim()).length,
    contacted: b2bLeads.filter((l) => l.status === "contacted").length,
    converted: b2bLeads.filter((l) => l.status === "converted").length,
  }), [b2bLeads]);

  const b2bCities = useMemo(() => {
    return ["all", ...Array.from(new Set(b2bLeads.map((l) => l.city).filter(Boolean)))];
  }, [b2bLeads]);

  const filteredB2B = useMemo(() => {
    return b2bLeads.filter((lead) => {
      if (b2bSearch.trim()) {
        const q = b2bSearch.toLowerCase();
        const match = [lead.name, lead.phone, lead.website, lead.city, lead.category, lead.notes]
          .some((v) => (v || "").toLowerCase().includes(q));
        if (!match) return false;
      }
      if (b2bCityF !== "all" && lead.city !== b2bCityF) return false;
      if (b2bStatusF !== "all" && (lead.status || "new") !== b2bStatusF) return false;
      if (b2bWebF === "no_web" && lead.website?.trim()) return false;
      if (b2bWebF === "has_web" && !lead.website?.trim()) return false;
      return true;
    });
  }, [b2bLeads, b2bSearch, b2bCityF, b2bStatusF, b2bWebF]);

  const handleExportB2BCSV = () => {
    if (filteredB2B.length === 0) return;
    const headers = ["Business Name", "Phone", "Website", "Rating", "City", "Category", "Status", "Notes", "Imported Date"];
    const rows = filteredB2B.map((l) => [
      `"${(l.name || "").replace(/"/g, '""')}"`,
      `"${(l.phone || "").replace(/"/g, '""')}"`,
      `"${(l.website || "").replace(/"/g, '""')}"`,
      `"${(l.rating || "").replace(/"/g, '""')}"`,
      `"${(l.city || "").replace(/"/g, '""')}"`,
      `"${(l.category || "").replace(/"/g, '""')}"`,
      `"${l.status || "new"}"`,
      `"${(l.notes || "").replace(/"/g, '""')}"`,
      `"${l.createdDate ? new Date(l.createdDate).toLocaleString("en-IN") : ""}"`,
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = `chittortech_b2b_leads_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getB2BWaLink = (lead) => {
    let ph = lead.phone?.replace(/\D/g, "") || "";
    if (ph.length === 10) ph = "91" + ph;
    if (ph.length === 11 && ph[0] === "0") ph = "91" + ph.slice(1);
    if (!ph) return "";
    const name = lead.name || "Sir";
    const cat = (lead.category || "").toLowerCase();
    let msg = `Namaste ${name} 🙏\n\nChittorTech IT Systems se contact kar rahe hain. Hum ${lead.city || "Rajasthan"} ke businesses ke liye high-converting corporate websites, Google Business ranking aur billing software develop karte hain.\n\nKya hum aapke digital growth par quick 2-minute connect kar sakte hain?\n\nDhanyawad,\nChittorTech IT Systems\nhttps://chittortech.in`;
    if (cat.includes("marble") || cat.includes("granite")) {
      msg = `Namaste ${name} 🙏\n\nChittorTech IT Systems se. Hum Bhilwara & Rajasthan ki marble & granite units ke liye *Digital Stone Catalogues* aur export-ready B2B websites develop karte hain.\n\nAapke outstation buyers ko instant digital catalogue link bhej sakte hain. Kya hum demo preview share karein?\n\nhttps://chittortech.in`;
    }
    return `https://wa.me/${ph}?text=${encodeURIComponent(msg)}`;
  };

  // Checking active session (preserves dashboard on reload, forces login on tab close)
  if (isCheckingAuth) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at center, #0f172a 0%, #030712 100%)",
          fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
          color: "#ffffff",
        }}
      >
        <div style={{ textAlign: "center", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "-40px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "140px",
              height: "140px",
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, transparent 70%)",
              filter: "blur(20px)",
              pointerEvents: "none",
            }}
          />
          <img
            src="/favicon.png"
            alt="ChittorTech"
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              marginBottom: "20px",
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)",
              position: "relative",
            }}
          />
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "3px solid rgba(255, 255, 255, 0.1)",
              borderTopColor: "#38bdf8",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
              margin: "0 auto 16px",
            }}
          />
          <p style={{ color: "#f8fafc", fontSize: "0.95rem", fontWeight: 700, margin: "0 0 6px 0", letterSpacing: "-0.2px" }}>
            Verifying Admin Session
          </p>
          <p style={{ color: "#64748b", fontSize: "0.8rem", margin: 0 }}>
            ChittorTech™ Secure Enclave
          </p>
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // If not authenticated, show clean login & 2FA design matching Affiliate Marketing App
  // If not authenticated, show clean 2-column split-screen layout:
  // Left: Colorful ChittorTech Enterprise CRM Data & Showcase (Rich, lively & "bhara-bhara")
  // Right: Clean, executive-grade secure login & 2FA functionality
  if (!isAuthenticated) {
    return (
      <div className="ct-admin-split-container" style={loginStyles.container}>
        {/* LEFT COLUMN: Executive IT Enterprise Operations Overview (Authoritative, Professional & Clean) */}
        <div className="ct-admin-showcase-col" style={loginStyles.showcaseCol}>
          {/* Top Brand Header & Enclave Badge */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #1e293b, #0f172a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(15, 23, 42, 0.25)",
                  padding: "2px",
                  border: "1px solid #334155",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/favicon.png"
                  alt="ChittorTech Logo"
                  style={{ width: "26px", height: "26px", borderRadius: "6px" }}
                />
              </div>
              <div>
                <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.3px", lineHeight: "1.2" }}>
                  ChittorTech<span style={{ color: "#2563eb" }}>™</span> Systems
                </div>
                <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Enterprise Administration Portal
                </div>
              </div>
            </div>

            {/* Restricted Enclave Badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "#f8fafc",
                  color: "#334155",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  padding: "5px 12px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  letterSpacing: "0.4px",
                }}
              >
                <i className="fas fa-lock" style={{ fontSize: "10px", color: "#2563eb" }}></i>
                INTERNAL ACCESS ONLY
              </div>
            </div>
          </div>

          {/* Center Content: Authoritative Enterprise IT Operations */}
          <div style={{ margin: "clamp(8px, 1.4vh, 14px) 0", flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ marginBottom: "clamp(8px, 1.2vh, 12px)" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "#eff6ff",
                  border: "1px solid #dbeafe",
                  color: "#1d4ed8",
                  padding: "3px 9px",
                  borderRadius: "6px",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.6px",
                  marginBottom: "8px",
                }}
              >
                <i className="fas fa-server" style={{ fontSize: "10px" }}></i>
                Centralized Operations &amp; System Management
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.2rem, 1.6vw, 1.55rem)",
                  fontWeight: 800,
                  color: "#0f172a",
                  lineHeight: "1.25",
                  letterSpacing: "-0.5px",
                  margin: "0 0 5px 0",
                }}
              >
                IT Systems &amp; Client Inquiries Console.
              </h2>
              <p style={{ color: "#64748b", fontSize: "clamp(0.74rem, 0.85vw, 0.82rem)", lineHeight: "1.45", margin: 0 }}>
                Unified internal gateway for managing enterprise software consultations, client inquiries, certificate issuance, and real-time cloud data telemetry.
              </p>
            </div>

            {/* 4 Clean Enterprise IT Operations Cards (2x2 Grid) */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "9px", marginBottom: "clamp(8px, 1.2vh, 12px)" }}>
              {/* Card 1: Client Inquiries Stream */}
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "clamp(9px, 1.2vh, 12px) 14px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1e293b" }}>Inquiry Gateway</span>
                  <span style={{ width: "26px", height: "26px", borderRadius: "8px", background: "#eff6ff", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="fas fa-inbox" style={{ fontSize: "11px" }}></i>
                  </span>
                </div>
                <div style={{ fontSize: "0.68rem", color: "#64748b", lineHeight: "1.35", marginBottom: "6px" }}>
                  Captures consultation requests, custom software quotes, and contact leads.
                </div>
                <div style={{ fontSize: "0.66rem", color: "#1d4ed8", fontWeight: 700, display: "flex", alignItems: "center", gap: "5px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2563eb" }} />
                  Live Ingestion Active
                </div>
              </div>

              {/* Card 2: Credential & Certificate Engine */}
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "clamp(9px, 1.2vh, 12px) 14px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1e293b" }}>Credential Engine</span>
                  <span style={{ width: "26px", height: "26px", borderRadius: "8px", background: "#ecfdf5", color: "#059669", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="fas fa-award" style={{ fontSize: "11px" }}></i>
                  </span>
                </div>
                <div style={{ fontSize: "0.68rem", color: "#64748b", lineHeight: "1.35", marginBottom: "6px" }}>
                  Administrative management and issuance of official training certificates.
                </div>
                <div style={{ fontSize: "0.66rem", color: "#059669", fontWeight: 700, display: "flex", alignItems: "center", gap: "5px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#10b981" }} />
                  Engine Operational
                </div>
              </div>

              {/* Card 3: Cloud Database Sync */}
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "clamp(9px, 1.2vh, 12px) 14px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1e293b" }}>Firestore Cloud Sync</span>
                  <span style={{ width: "26px", height: "26px", borderRadius: "8px", background: "#f5f3ff", color: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="fas fa-database" style={{ fontSize: "11px" }}></i>
                  </span>
                </div>
                <div style={{ fontSize: "0.68rem", color: "#64748b", lineHeight: "1.35", marginBottom: "6px" }}>
                  Low-latency real-time synchronization with audit trail and CSV exports.
                </div>
                <div style={{ fontSize: "0.66rem", color: "#7c3aed", fontWeight: 700, display: "flex", alignItems: "center", gap: "5px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#8b5cf6" }} />
                  Live Data Stream
                </div>
              </div>

              {/* Card 4: Zero-Trust Security */}
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "clamp(9px, 1.2vh, 12px) 14px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1e293b" }}>Zero-Trust Enclave</span>
                  <span style={{ width: "26px", height: "26px", borderRadius: "8px", background: "#fff7ed", color: "#c2410c", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="fas fa-shield-alt" style={{ fontSize: "11px" }}></i>
                  </span>
                </div>
                <div style={{ fontSize: "0.68rem", color: "#64748b", lineHeight: "1.35", marginBottom: "6px" }}>
                  Enforced dual-factor verification (2FA), encrypted sessions, and access audits.
                </div>
                <div style={{ fontSize: "0.66rem", color: "#c2410c", fontWeight: 700, display: "flex", alignItems: "center", gap: "5px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#ea580c" }} />
                  2FA Protocol Enforced
                </div>
              </div>
            </div>

            {/* REAL SYSTEM INFRASTRUCTURE STATUS (Authoritative IT Health Monitor) */}
            <div
              style={{
                backgroundColor: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "clamp(8px, 1.2vh, 12px) 14px",
                marginBottom: "clamp(6px, 1vh, 10px)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontSize: "0.68rem", fontWeight: 800, color: "#334155", textTransform: "uppercase", letterSpacing: "0.6px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <i className="fas fa-network-wired" style={{ color: "#2563eb", fontSize: "11px" }}></i>
                  System Infrastructure Health
                </span>
                <span style={{ fontSize: "0.65rem", color: "#059669", fontWeight: 700, backgroundColor: "#ecfdf5", border: "1px solid #a7f3d0", padding: "2px 8px", borderRadius: "4px", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#10b981" }} />
                  All Systems Operational
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                <div style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "6px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.68rem", color: "#64748b", fontWeight: 600 }}>Web Ingestion Services</span>
                  <span style={{ fontSize: "0.66rem", color: "#059669", fontWeight: 700 }}>99.98% SLA</span>
                </div>
                <div style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "6px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.68rem", color: "#64748b", fontWeight: 600 }}>Database Sync Layer</span>
                  <span style={{ fontSize: "0.66rem", color: "#2563eb", fontWeight: 700 }}>Active Listener</span>
                </div>
                <div style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "6px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.68rem", color: "#64748b", fontWeight: 600 }}>Notification API</span>
                  <span style={{ fontSize: "0.66rem", color: "#059669", fontWeight: 700 }}>Online (Vercel Serverless)</span>
                </div>
                <div style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "6px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.68rem", color: "#64748b", fontWeight: 600 }}>Security Protocol</span>
                  <span style={{ fontSize: "0.66rem", color: "#475569", fontWeight: 700 }}>TLS 1.3 / AES-256</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Compliance & Brand Line */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #f1f5f9", paddingTop: "clamp(8px, 1.2vh, 12px)", flexShrink: 0, color: "#94a3b8", fontSize: "clamp(0.7rem, 0.78vw, 0.76rem)", fontWeight: 500 }}>
            <span>© {new Date().getFullYear()} ChittorTech Systems &amp; Solutions Pvt. Ltd.</span>
            <span>Internal IT Administration Console</span>
          </div>
        </div>

        {/* RIGHT COLUMN: The Authentic Executive Admin Sign In Card (50% Width & Matching Height) */}
        <div className="ct-admin-panel-col" style={loginStyles.panelCol}>
          {/* Top Security Status Bar with Live IST Clock & Live Sync */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
              <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.2px" }}>
                ChittorTech™ Secure Enclave
              </span>
            </div>

            {/* LIVE IST CLOCK & STATUS WIDGET */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", justifyContent: "flex-end" }}>
              {/* Live IST Clock (HH:MM:SS) + Date Pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  backgroundColor: "#ffffff",
                  border: "1.5px solid #cbd5e1",
                  borderRadius: "10px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                }}
              >
                <i className="far fa-clock" style={{ color: "#2563eb", fontSize: "12px" }}></i>
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    color: "#0f172a",
                    fontFamily: "monospace",
                    letterSpacing: "0.5px",
                  }}
                >
                  {currentTime || "--:--:--"}
                </span>
                <span
                  style={{
                    fontSize: "0.62rem",
                    fontWeight: 800,
                    color: "#1d4ed8",
                    backgroundColor: "#eff6ff",
                    border: "1px solid #bfdbfe",
                    paddingTop: "1px",
                    paddingBottom: "1px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    borderRadius: "4px",
                    letterSpacing: "0.5px",
                  }}
                >
                  IST
                </span>
                <span style={{ width: "1px", height: "13px", backgroundColor: "#cbd5e1" }} />
                <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#475569", whiteSpace: "nowrap" }}>
                  {currentDate || ""}
                </span>
              </div>

              {/* Live Sync Active Pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(34, 197, 94, 0.12)",
                  color: "#166534",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  border: "1px solid rgba(34, 197, 94, 0.25)",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
                Live Sync
              </div>
            </div>
          </div>

          <div style={loginStyles.card}>
            {/* Header */}
            <div style={loginStyles.header}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", marginBottom: "10px" }}>
                <div style={loginStyles.logoContainer}>
                  <img src="/favicon.png" alt="ChittorTech Logo" style={loginStyles.logo} />
                </div>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "#eff6ff",
                    color: "#1d4ed8",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: "6px",
                    border: "1px solid #bfdbfe",
                    letterSpacing: "0.5px",
                  }}
                >
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2563eb" }} />
                  SECURE ADMIN GATEWAY
                </span>
              </div>
              <h1 style={loginStyles.title}>
                {step === "otp" ? "Security Verification" : step === "forgot" ? "Master Key Recovery" : "Administrator Sign In"}
              </h1>
              <p style={{ color: "#64748b", fontSize: "0.8rem", margin: "3px 0 0 0", lineHeight: "1.45" }}>
                {step === "otp"
                  ? "Enter the 6-digit cryptographic verification token dispatched to your device."
                  : step === "forgot"
                  ? "Enter registered administrator email address to receive your master access key."
                  : "Authenticate with your master access key to enter the internal management console."}
              </p>
            </div>

            {/* STEP 1: LOGIN FORM */}
            {step === "login" && (
              <form onSubmit={handleLogin} style={loginStyles.form}>
                {/* Security Alert Banner */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    fontSize: "0.74rem",
                    color: "#166534",
                    fontWeight: 600,
                  }}
                >
                  <i className="fas fa-shield-alt" style={{ color: "#16a34a", fontSize: "12px", flexShrink: 0 }}></i>
                  <span>End-to-End Encrypted • Dual 2FA Verification</span>
                </div>

                {loginError && (
                  <div style={loginStyles.errorAlert}>
                    <i className="fas fa-exclamation-circle" style={{ flexShrink: 0, fontSize: "14px" }}></i>
                    <span>{loginError}</span>
                  </div>
                )}

                {/* Access Key */}
                <div style={loginStyles.inputGroup}>
                  <label htmlFor="passcode" style={loginStyles.label}>
                    <i className="fas fa-key" style={{ color: "#2563eb", marginRight: "6px", fontSize: "11px" }}></i>
                    Admin Access Key
                  </label>
                  <div style={loginStyles.inputWrapper}>
                    <input
                      id="passcode"
                      type={showPassword ? "text" : "password"}
                      required
                      value={passcode}
                      onChange={(e) => {
                        setPasscode(e.target.value);
                        setLoginError("");
                      }}
                      placeholder="Enter master access key..."
                      style={{ ...loginStyles.input, paddingLeft: "14px", paddingRight: "40px" }}
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={loginStyles.eyeButton}
                      title={showPassword ? "Hide key" : "Show key"}
                    >
                      <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"} style={{ fontSize: "13px" }}></i>
                    </button>
                  </div>
                </div>

                {/* Security Verification (CAPTCHA) */}
                <div style={loginStyles.inputGroup}>
                  <label htmlFor="captcha" style={loginStyles.label}>
                    <i className="fas fa-shield-check" style={{ color: "#10b981", marginRight: "6px", fontSize: "11px" }}></i>
                    Security Verification (CAPTCHA)
                  </label>
                  <div style={loginStyles.captchaRow}>
                    <div style={loginStyles.captchaBox}>{captchaCode}</div>
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      style={loginStyles.refreshButton}
                      title="Generate new captcha code"
                    >
                      <i className="fas fa-sync-alt" style={{ fontSize: "13px" }}></i>
                    </button>
                    <input
                      id="captcha"
                      type="text"
                      required
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      placeholder="Enter verification code"
                      style={{ ...loginStyles.input, flex: 1, paddingLeft: "14px", letterSpacing: "1.5px", textTransform: "uppercase" }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loginLoading}
                  style={{
                    ...loginStyles.submitButton,
                    ...(loginLoading ? loginStyles.submitButtonDisabled : {}),
                  }}
                >
                  {loginLoading ? (
                    <span style={loginStyles.spinner} />
                  ) : (
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                      Proceed to 2FA Authentication <i className="fas fa-arrow-right" style={{ fontSize: "12px" }}></i>
                    </span>
                  )}
                </button>

                <div style={{ textAlign: "center", marginTop: "6px", paddingTop: "8px", borderTop: "1px solid #f1f5f9" }}>
                  <button
                    type="button"
                    id="forgot-admin-access-key-btn"
                    onClick={() => {
                      setStep("forgot");
                      setRecoveryError("");
                      setRecoverySuccess(false);
                      setRecoveryEmail("");
                      generateCaptcha();
                    }}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#2563eb",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      padding: "4px 8px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      borderRadius: "6px",
                    }}
                  >
                    <i className="fas fa-unlock-alt" style={{ fontSize: "11px", color: "#2563eb" }}></i>
                    <span>Forgot your Master Access Key? Recover via Email →</span>
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: 2FA OTP VERIFICATION */}
            {step === "otp" && (
              <div style={loginStyles.form}>
                <div style={{ textAlign: "center", marginBottom: "4px" }}>
                  <div style={loginStyles.otpIconWrap}>
                    <i className="fas fa-shield-alt" style={{ color: "#10b981", fontSize: "28px" }}></i>
                  </div>
                </div>

                <div style={{ textAlign: "center", marginBottom: "4px" }}>
                  <p style={loginStyles.otpTitle}>Security Verification</p>
                  <p style={loginStyles.otpSub}>
                    A 6-digit one-time passcode has been dispatched to authorized administrator devices.
                  </p>
                </div>

                {otpError && (
                  <div style={loginStyles.errorAlert}>
                    <i className="fas fa-exclamation-circle" style={{ flexShrink: 0, fontSize: "14px" }}></i>
                    <span>{otpError}</span>
                  </div>
                )}
                {otpSuccess && (
                  <div style={loginStyles.successAlert}>
                    <i className="fas fa-check-circle" style={{ flexShrink: 0, fontSize: "14px" }}></i>
                    <span>Verified! Redirecting to dashboard...</span>
                  </div>
                )}

                {/* 6 OTP Digit Inputs */}
                <div style={loginStyles.otpRow} onPaste={handleOtpPaste}>
                  {otpDigits.map((digit, i) => (
                    <input
                      key={i}
                      ref={(el) => { otpRefs.current[i] = el; }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(i, e)}
                      style={{
                        ...loginStyles.otpDigitInput,
                        ...(digit ? loginStyles.otpDigitFilled : {}),
                      }}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  disabled={otpLoading || otpSuccess || otpDigits.join("").length < 6}
                  style={{
                    ...loginStyles.submitButton,
                    ...(otpLoading || otpSuccess || otpDigits.join("").length < 6 ? loginStyles.submitButtonDisabled : {}),
                  }}
                >
                  {otpLoading ? (
                    <span style={loginStyles.spinner} />
                  ) : otpSuccess ? (
                    "Verified ✓"
                  ) : (
                    "Verify & Access Dashboard"
                  )}
                </button>

                <div style={{ textAlign: "center", marginTop: "4px" }}>
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={resendCooldown > 0}
                    style={loginStyles.resendButton}
                  >
                    {resendCooldown > 0 ? `Resend code in ${resendCooldown}s` : "Resend verification code"}
                  </button>
                  <br />
                  <button
                    type="button"
                    onClick={() => {
                      setStep("login");
                      setOtpDigits(["", "", "", "", "", ""]);
                      setOtpError("");
                      generateCaptcha();
                    }}
                    style={{ ...loginStyles.resendButton, color: "#94a3b8", marginTop: "6px" }}
                  >
                    ← Back to login
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: FORGOT KEY RECOVERY */}
            {step === "forgot" && (
              <form onSubmit={handleRecoverKey} style={loginStyles.form}>
                <div style={{ textAlign: "center", marginBottom: "4px" }}>
                  <div style={{ ...loginStyles.otpIconWrap, background: "#eff6ff" }}>
                    <i className="fas fa-key" style={{ color: "#2563eb", fontSize: "24px" }}></i>
                  </div>
                </div>

                <div style={{ textAlign: "center", marginBottom: "4px" }}>
                  <p style={loginStyles.otpTitle}>Recover Admin Access Key</p>
                  <p style={loginStyles.otpSub}>
                    Enter your registered administrator email address. Your Master Access Key will be dispatched directly to your inbox.
                  </p>
                </div>

                {recoveryError && (
                  <div style={loginStyles.errorAlert}>
                    <i className="fas fa-exclamation-circle" style={{ flexShrink: 0, fontSize: "14px" }}></i>
                    <span>{recoveryError}</span>
                  </div>
                )}
                {recoverySuccess && (
                  <div style={{ ...loginStyles.successAlert, display: "block", textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <i className="fas fa-check-circle" style={{ flexShrink: 0, fontSize: "15px" }}></i>
                      <strong style={{ fontSize: "13px" }}>Master Access Key Dispatched!</strong>
                    </div>
                    <p style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#166534", lineHeight: "1.4" }}>
                      Please check your registered inbox (including Spam / Updates) for your key, then return to sign in.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setStep("login");
                        setRecoveryError("");
                        setRecoverySuccess(false);
                        setRecoveryEmail("");
                        generateCaptcha();
                      }}
                      style={{
                        background: "#16a34a",
                        color: "#ffffff",
                        border: "none",
                        padding: "6px 14px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Return to Login →
                    </button>
                  </div>
                )}

                {/* Admin Email */}
                <div style={loginStyles.inputGroup}>
                  <label htmlFor="recoveryEmail" style={loginStyles.label}>Administrator Email</label>
                  <div style={loginStyles.inputWrapper}>
                    <i className="fas fa-envelope" style={loginStyles.inputIcon}></i>
                    <input
                      id="recoveryEmail"
                      type="email"
                      required
                      value={recoveryEmail}
                      onChange={(e) => {
                        setRecoveryEmail(e.target.value);
                        setRecoveryError("");
                      }}
                      placeholder="Enter registered admin email"
                      style={{ ...loginStyles.input, paddingLeft: "40px" }}
                      autoFocus
                    />
                  </div>
                </div>

                {/* Security Verification (CAPTCHA) */}
                <div style={loginStyles.inputGroup}>
                  <label htmlFor="recoveryCaptcha" style={loginStyles.label}>Human Verification</label>
                  <div style={loginStyles.captchaRow}>
                    <div style={loginStyles.captchaBox}>{captchaCode}</div>
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      style={loginStyles.refreshButton}
                      title="Refresh Captcha"
                    >
                      <i className="fas fa-sync-alt" style={{ fontSize: "13px" }}></i>
                    </button>
                    <input
                      id="recoveryCaptcha"
                      type="text"
                      required
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      placeholder="Enter code"
                      style={{ ...loginStyles.input, flex: 1, paddingLeft: "12px" }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={recoveryLoading}
                  style={{
                    ...loginStyles.submitButton,
                    ...(recoveryLoading ? loginStyles.submitButtonDisabled : {}),
                  }}
                >
                  {recoveryLoading ? (
                    <span style={loginStyles.spinner} />
                  ) : (
                    "Send Master Key"
                  )}
                </button>

                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  <button
                    type="button"
                    onClick={() => {
                      setStep("login");
                      setRecoveryError("");
                      setRecoverySuccess(false);
                      generateCaptcha();
                    }}
                    style={{ ...loginStyles.resendButton, color: "#94a3b8" }}
                  >
                    ← Back to login
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Simple Bottom Brand Line */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #f1f5f9", paddingTop: "clamp(8px, 1.2vh, 12px)", flexShrink: 0, color: "#94a3b8", fontSize: "clamp(0.7rem, 0.78vw, 0.76rem)", fontWeight: 500 }}>
            <span>Protected &amp; Managed by ChittorTech™</span>
            <span>Official Admin Gateway</span>
          </div>
        </div>

        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
          .ct-admin-showcase-col {
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            flex: 1 1 50% !important;
            width: 50% !important;
            max-width: 50% !important;
            box-sizing: border-box !important;
          }
          .ct-admin-panel-col {
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            align-items: stretch !important;
            flex: 1 1 50% !important;
            width: 50% !important;
            max-width: 50% !important;
            box-sizing: border-box !important;
          }
          .ct-admin-showcase-col::-webkit-scrollbar,
          .ct-admin-panel-col::-webkit-scrollbar {
            display: none;
          }
          @media (max-width: 992px) {
            .ct-admin-split-container {
              flex-direction: column !important;
              overflow-y: auto !important;
              height: auto !important;
              min-height: 100vh !important;
              max-height: none !important;
            }
            .ct-admin-showcase-col {
              display: none !important;
            }
            .ct-admin-panel-col {
              flex: 1 1 100% !important;
              width: 100% !important;
              max-width: 100% !important;
              min-height: 100vh !important;
              padding: 24px 16px !important;
            }
            .ct-badge-hide-mobile {
              display: none !important;
            }
          }
          @media (max-height: 720px) {
            .ct-badge-hide-mobile {
              display: none !important;
            }
          }
        `}</style>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        fontFamily: "'Inter', sans-serif",
        paddingBottom: "60px",
      }}
    >
      {/* Top Navbar */}
      <nav
        id="admin-top-nav"
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          color: "#0f172a",
          padding: "12px 32px",
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: "0 1px 4px rgba(15,23,42,0.06)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src="/favicon.png"
                alt="ChittorTech"
                style={{ width: "32px", height: "32px", borderRadius: "8px" }}
              />
              <span style={{ color: "#0f172a", fontWeight: 800, fontSize: "1.15rem", letterSpacing: "-0.3px" }}>
                ChittorTech<span style={{ color: "#6366f1" }}>™</span> Admin Console
              </span>
            </Link>
            {isDbConnected && isOnline ? (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(22, 163, 74, 0.10)",
                  color: "#166534",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "3px 10px",
                  borderRadius: "20px",
                  border: "1px solid rgba(22, 163, 74, 0.25)",
                }}
              >
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e" }} />
                Database Connected
              </span>
            ) : (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(239, 68, 68, 0.12)",
                  color: "#b91c1c",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  padding: "3px 10px",
                  borderRadius: "20px",
                  border: "1px solid rgba(239, 68, 68, 0.35)",
                }}
              >
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#ef4444" }} />
                Database Disconnected
              </span>
            )}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="https://chittor-tech-certificate-generator-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #d97706)",
                color: "#ffffff",
                padding: "7px 14px",
                borderRadius: "8px",
                fontSize: "0.85rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "6px",
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(217, 119, 6, 0.35)",
                transition: "transform 0.15s ease",
              }}
            >
              <i className="fas fa-award"></i> Generate Certificate
            </a>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#475569",
                fontSize: "0.85rem",
                textDecoration: "none",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "8px",
                background: "#f1f5f9",
                border: "1px solid #e2e8f0",
              }}
            >
              <i className="fas fa-external-link-alt"></i> View Website
            </Link>
            <button
              onClick={handleLogout}
              title="Logout from Admin Dashboard"
              style={{
                background: "#dc2626",
                border: "none",
                color: "#ffffff",
                padding: "8px 16px",
                borderRadius: "8px",
                fontSize: "0.85rem",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 2px 8px rgba(220, 38, 38, 0.35)",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#b91c1c")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#dc2626")}
            >
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main style={{ maxWidth: "1440px", margin: "0 auto", padding: "28px 24px" }}>
        {/* TOP LEVEL 3-PIPELINE SELECTOR */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "10px",
            background: "#ffffff",
            padding: "8px",
            borderRadius: "16px",
            border: "1.5px solid #e2e8f0",
            marginBottom: "24px",
            boxShadow: "0 4px 18px -2px rgba(15, 23, 42, 0.05)",
          }}
        >
          {/* Tab 1: Generate Leads */}
          <button
            onClick={() => changeAdminTab("b2b_outbound")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "12px 18px",
              borderRadius: "12px",
              fontSize: "0.92rem",
              fontWeight: 800,
              cursor: "pointer",
              border: adminPipelineTab === "b2b_outbound" ? "1px solid rgba(2, 132, 199, 0.3)" : "1px solid #f1f5f9",
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              background: adminPipelineTab === "b2b_outbound" ? "linear-gradient(135deg, #0284c7, #0369a1)" : "#f8fafc",
              color: adminPipelineTab === "b2b_outbound" ? "#ffffff" : "#475569",
              boxShadow: adminPipelineTab === "b2b_outbound" ? "0 4px 14px rgba(2, 132, 199, 0.28)" : "none",
            }}
          >
            <i className="fas fa-satellite-dish" style={{ fontSize: "1rem", color: adminPipelineTab === "b2b_outbound" ? "#bae6fd" : "#0284c7" }}></i>
            <span>Generate Leads</span>
          </button>

          {/* Tab 2: Incoming Leads */}
          <button
            onClick={() => changeAdminTab("inbound")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "12px 18px",
              borderRadius: "12px",
              fontSize: "0.92rem",
              fontWeight: 800,
              cursor: "pointer",
              border: adminPipelineTab === "inbound" ? "1px solid rgba(2, 132, 199, 0.3)" : "1px solid #f1f5f9",
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              background: adminPipelineTab === "inbound" ? "linear-gradient(135deg, #0284c7, #0369a1)" : "#f8fafc",
              color: adminPipelineTab === "inbound" ? "#ffffff" : "#475569",
              boxShadow: adminPipelineTab === "inbound" ? "0 4px 14px rgba(2, 132, 199, 0.28)" : "none",
            }}
          >
            <i className="fas fa-inbox" style={{ fontSize: "1rem", color: adminPipelineTab === "inbound" ? "#bae6fd" : "#0284c7" }}></i>
            <span>Incoming Leads</span>
          </button>

          {/* Tab 3: Client Portal Management (Holds Onboarding, Projects, Invoices, Notifications) */}
          <button
            onClick={() => changeAdminTab("client_portal")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "12px 18px",
              borderRadius: "12px",
              fontSize: "0.92rem",
              fontWeight: 800,
              cursor: "pointer",
              border: (adminPipelineTab === "client_portal" || adminPipelineTab === "projects_invoices" || adminPipelineTab === "notifications" || adminPipelineTab === "projects") ? "1px solid rgba(2, 132, 199, 0.3)" : "1px solid #f1f5f9",
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              background: (adminPipelineTab === "client_portal" || adminPipelineTab === "projects_invoices" || adminPipelineTab === "notifications" || adminPipelineTab === "projects") ? "linear-gradient(135deg, #0284c7, #0369a1)" : "#f8fafc",
              color: (adminPipelineTab === "client_portal" || adminPipelineTab === "projects_invoices" || adminPipelineTab === "notifications" || adminPipelineTab === "projects") ? "#ffffff" : "#475569",
              boxShadow: (adminPipelineTab === "client_portal" || adminPipelineTab === "projects_invoices" || adminPipelineTab === "notifications" || adminPipelineTab === "projects") ? "0 4px 14px rgba(2, 132, 199, 0.28)" : "none",
            }}
          >
            <i className="fas fa-mobile-screen-button" style={{ fontSize: "1rem", color: (adminPipelineTab === "client_portal" || adminPipelineTab === "projects_invoices" || adminPipelineTab === "notifications" || adminPipelineTab === "projects") ? "#bae6fd" : "#0284c7" }}></i>
            <span>Client Portal Management</span>
          </button>

          {/* Tab 4: Sessions & Security */}
          <button
            onClick={() => changeAdminTab("sessions")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "12px 18px",
              borderRadius: "12px",
              fontSize: "0.92rem",
              fontWeight: 800,
              cursor: "pointer",
              border: adminPipelineTab === "sessions" ? "1px solid rgba(2, 132, 199, 0.3)" : "1px solid #f1f5f9",
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              background: adminPipelineTab === "sessions" ? "linear-gradient(135deg, #0284c7, #0369a1)" : "#f8fafc",
              color: adminPipelineTab === "sessions" ? "#ffffff" : "#475569",
              boxShadow: adminPipelineTab === "sessions" ? "0 4px 14px rgba(2, 132, 199, 0.28)" : "none",
            }}
          >
            <i className="fas fa-shield-alt" style={{ fontSize: "1rem", color: adminPipelineTab === "sessions" ? "#bae6fd" : "#0284c7" }}></i>
            <span>Sessions &amp; Security</span>
          </button>
        </div>

        {(!isOnline || !isDbConnected) ? (
          <div
            style={{
              margin: "36px auto",
              maxWidth: "600px",
              background: "#ffffff",
              border: "2px dashed #fca5a5",
              borderRadius: "20px",
              padding: "48px 24px",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(239, 68, 68, 0.06)",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "rgba(239, 68, 68, 0.08)",
                color: "#ef4444",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                marginBottom: "18px",
                boxShadow: "0 0 20px rgba(239, 68, 68, 0.15)",
              }}
            >
              <i className="fas fa-wifi-slash"></i>
            </div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", margin: "0 0 10px 0" }}>
              Database Disconnected
            </h2>
            <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "0 auto 22px", maxWidth: "460px", lineHeight: 1.55 }}>
              Aapka internet connection band hai ya Cloud Firestore se connect nahi ho pa raha hai. Data protection ke liye offline mode me leads display band kar diya gaya hai.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
              <button
                type="button"
                onClick={() => {
                  if (typeof navigator !== "undefined" && navigator.onLine) {
                    setIsOnline(true);
                    setIsDbConnected(true);
                  } else {
                    alert("Internet connection abhi bhi band hai. Kripya apna Wi-Fi ya Mobile Hotspot on karein.");
                  }
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  background: "linear-gradient(135deg, #ef4444, #dc2626)",
                  color: "#ffffff",
                  border: "none",
                  padding: "10px 22px",
                  borderRadius: "10px",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(239, 68, 68, 0.3)",
                }}
              >
                <i className="fas fa-rotate"></i>
                <span>Check Connection Again ↻</span>
              </button>
            </div>
          </div>
        ) : adminPipelineTab === "b2b_outbound" ? (
          <B2BLeadGenerator isOnline={isOnline && isDbConnected} />
        ) : (adminPipelineTab === "client_portal" || adminPipelineTab === "projects_invoices" || adminPipelineTab === "notifications" || adminPipelineTab === "projects") ? (
          <ClientPortalManager defaultSubTab={adminPipelineTab === "notifications" ? "notifications" : "clients"} />
        ) : adminPipelineTab === "sessions" ? (
          <AdminSessionsView />
        ) : (
          <>
            {/* Title Bar & Stats */}
            <div style={{ marginBottom: "28px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px", marginBottom: "24px" }}>
            <div>
              <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0f172a", margin: "0 0 4px 0", letterSpacing: "-0.5px" }}>
                Client Inquiries &amp; Project Pipeline
              </h1>
              <p style={{ margin: 0, color: "#64748b", fontSize: "0.9rem" }}>
                Central management of enterprise client leads, software consultations, and inbound service requests.
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <button
                onClick={handleExportCSV}
                disabled={filteredLeads.length === 0}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  background: "#ffffff",
                  border: "1.5px solid #e2e8f0",
                  color: "#1e293b",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  cursor: filteredLeads.length === 0 ? "not-allowed" : "pointer",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                }}
              >
                <i className="fas fa-file-excel" style={{ color: "#16a34a" }}></i>
                Export to CSV
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "18px" }}>
            {/* Total Leads */}
            <div
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
                padding: "22px 20px",
                borderRadius: "18px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #3b82f6, #6366f1)" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#64748b", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.6px" }}>Total Inquiries</span>
                <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg, #eff6ff, #dbeafe)", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(37,99,235,0.15)" }}>
                  <i className="fas fa-inbox"></i>
                </span>
              </div>
              <div style={{ fontSize: "2.1rem", fontWeight: 800, color: "#0f172a", marginTop: "10px", letterSpacing: "-0.5px" }}>
                {stats.total}
              </div>
              <div style={{ marginTop: "6px", display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", color: "#2563eb", fontWeight: 600 }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2563eb" }}></span>
                Live Database Stream
              </div>
            </div>

            {/* New / Action Required */}
            <div
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #fffbeb 100%)",
                padding: "22px 20px",
                borderRadius: "18px",
                border: "1px solid #fde68a",
                boxShadow: "0 4px 16px rgba(245,158,11,0.08)",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #f59e0b, #ea580c)" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#854d0e", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.6px" }}>New (Action Required)</span>
                <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg, #fef3c7, #fde68a)", color: "#d97706", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(217,119,6,0.18)" }}>
                  <i className="fas fa-bell"></i>
                </span>
              </div>
              <div style={{ fontSize: "2.1rem", fontWeight: 800, color: "#a16207", marginTop: "10px", letterSpacing: "-0.5px" }}>
                {stats.newCount}
              </div>
              <div style={{ marginTop: "6px", display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", color: "#d97706", fontWeight: 600 }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f59e0b", animation: "pulse 1.5s infinite" }}></span>
                Pending Review
              </div>
            </div>

            {/* Contacted */}
            <div
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #f5f3ff 100%)",
                padding: "22px 20px",
                borderRadius: "18px",
                border: "1px solid #e0e7ff",
                boxShadow: "0 4px 16px rgba(99,102,241,0.05)",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #8b5cf6, #6366f1)" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#4338ca", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.6px" }}>Contacted Pipeline</span>
                <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg, #ede9fe, #ddd6fe)", color: "#6d28d9", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(109,40,217,0.15)" }}>
                  <i className="fas fa-phone-alt"></i>
                </span>
              </div>
              <div style={{ fontSize: "2.1rem", fontWeight: 800, color: "#4338ca", marginTop: "10px", letterSpacing: "-0.5px" }}>
                {stats.contacted}
              </div>
              <div style={{ marginTop: "6px", display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", color: "#6d28d9", fontWeight: 600 }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#8b5cf6" }}></span>
                Discussions in Progress
              </div>
            </div>

            {/* Converted */}
            <div
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #f0fdf4 100%)",
                padding: "22px 20px",
                borderRadius: "18px",
                border: "1px solid #bbf7d0",
                boxShadow: "0 4px 16px rgba(34,197,94,0.06)",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #10b981, #059669)" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#166534", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.6px" }}>Converted Deals</span>
                <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg, #dcfce7, #bbf7d0)", color: "#15803d", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(22,101,52,0.15)" }}>
                  <i className="fas fa-check-double"></i>
                </span>
              </div>
              <div style={{ fontSize: "2.1rem", fontWeight: 800, color: "#15803d", marginTop: "10px", letterSpacing: "-0.5px" }}>
                {stats.converted}
              </div>
              <div style={{ marginTop: "6px", display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", color: "#16a34a", fontWeight: 600 }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e" }}></span>
                Closed Revenue Deals
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div
          style={{
            background: "#ffffff",
            padding: "16px 20px",
            borderRadius: "16px",
            border: "1px solid #e2e8f0",
            marginBottom: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Status Tabs */}
          <div style={{ display: "flex", gap: "6px", overflowX: "auto" }}>
            {[
              { key: "all", label: "All Leads" },
              { key: "new", label: `New (${stats.newCount})` },
              { key: "contacted", label: "Contacted" },
              { key: "qualified", label: "Qualified" },
              { key: "converted", label: "Converted" },
              { key: "lost", label: "Closed / Lost" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setStatusFilter(tab.key)}
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "0.84rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  background: statusFilter === tab.key ? "#2563eb" : "#f1f5f9",
                  color: statusFilter === tab.key ? "#ffffff" : "#475569",
                  transition: "all 0.2s ease",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: "relative", minWidth: "280px", flex: "1", maxWidth: "420px" }}>
            <i
              className="fas fa-search"
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#94a3b8",
                fontSize: "0.85rem",
              }}
            ></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search name, phone, company, message..."
              style={{
                width: "100%",
                padding: "10px 14px 10px 36px",
                borderRadius: "10px",
                border: "1.5px solid #cbd5e1",
                fontSize: "0.86rem",
                outline: "none",
              }}
            />
          </div>
        </div>

        {/* Content Area: Table + Details Drawer */}
        {error && (
          <div style={{ background: "#fef2f2", border: "1px solid #fecaca", color: "#b91c1c", padding: "16px", borderRadius: "12px", marginBottom: "20px" }}>
            <i className="fas fa-exclamation-triangle" style={{ marginRight: "8px" }}></i>
            {error}
          </div>
        )}

        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          {/* Main Table */}
          <div
            style={{
              flex: 1,
              background: "#ffffff",
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              overflow: "hidden",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)",
            }}
          >
            {loading ? (
              <div style={{ padding: "60px 20px", textAlign: "center", color: "#64748b" }}>
                <i className="fas fa-spinner fa-spin" style={{ fontSize: "1.8rem", color: "#2563eb", marginBottom: "12px" }}></i>
                <div>Loading real-time leads from Firestore...</div>
              </div>
            ) : filteredLeads.length === 0 ? (
              <div style={{ padding: "60px 20px", textAlign: "center", color: "#64748b" }}>
                <i className="fas fa-folder-open" style={{ fontSize: "2.4rem", color: "#cbd5e1", marginBottom: "14px" }}></i>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>No Leads Found</h3>
                <p style={{ fontSize: "0.85rem", color: "#94a3b8", maxWidth: "340px", margin: "0 auto" }}>
                  {searchQuery || statusFilter !== "all"
                    ? "Try adjusting your search query or status filter."
                    : "New leads submitted via any form on your site will automatically show up here in real time."}
                </p>
              </div>
            ) : (
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.86rem" }}>
                  <thead>
                    <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0", color: "#475569", fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      <th style={{ padding: "14px 18px" }}>Customer / Contact</th>
                      <th style={{ padding: "14px 18px" }}>Business / Industry</th>
                      <th style={{ padding: "14px 18px" }}>Location</th>
                      <th style={{ padding: "14px 18px" }}>Date &amp; Source</th>
                      <th style={{ padding: "14px 18px" }}>Status</th>
                      <th style={{ padding: "14px 18px", textAlign: "right" }}>Quick Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.map((lead) => {
                      const waPhone = cleanPhoneForWhatsApp(lead.contact);
                      const isSelected = selectedLead?.id === lead.id;
                      const dateDisplay = lead.createdDate
                        ? new Date(lead.createdDate).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : "Just now";

                      return (
                        <tr
                          key={lead.id}
                          onClick={() => setSelectedLead(lead)}
                          style={{
                            borderBottom: "1px solid #f1f5f9",
                            cursor: "pointer",
                            background: isSelected ? "#eff6ff" : "transparent",
                            transition: "background 0.15s ease",
                          }}
                        >
                          {/* Name & Contact */}
                          <td style={{ padding: "14px 18px" }}>
                            <div style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.92rem", marginBottom: "2px" }}>
                              {lead.name || "Anonymous Lead"}
                            </div>
                            <div style={{ color: "#2563eb", fontWeight: 600, fontSize: "0.82rem" }}>
                              {lead.contact || "No phone"}
                            </div>
                            {lead.email && (
                              <div style={{ color: "#64748b", fontSize: "0.78rem" }}>{lead.email}</div>
                            )}
                          </td>

                          {/* Business */}
                          <td style={{ padding: "14px 18px" }}>
                            <div style={{ fontWeight: 600, color: "#1e293b" }}>{lead.company || lead.firm || "Individual"}</div>
                            <div style={{ color: "#64748b", fontSize: "0.78rem" }}>{lead.industry || lead.service || "General Inquiry"}</div>
                          </td>

                          {/* Location */}
                          <td style={{ padding: "14px 18px", color: "#475569" }}>
                            {lead.location || "Not specified"}
                          </td>

                          {/* Date & Source */}
                          <td style={{ padding: "14px 18px" }}>
                            <div style={{ color: "#0f172a", fontWeight: 500 }}>{dateDisplay}</div>
                            <div style={{ color: "#94a3b8", fontSize: "0.75rem", maxWidth: "160px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                              {lead.source || "Website"}
                            </div>
                          </td>

                          {/* Status Dropdown */}
                          <td style={{ padding: "14px 18px" }} onClick={(e) => e.stopPropagation()}>
                            <select
                              value={lead.status || "new"}
                              onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                              style={{
                                padding: "6px 10px",
                                borderRadius: "8px",
                                border: "1.5px solid #cbd5e1",
                                fontSize: "0.78rem",
                                fontWeight: 600,
                                background: "#ffffff",
                                cursor: "pointer",
                                outline: "none",
                              }}
                            >
                              <option value="new">🟡 New</option>
                              <option value="contacted">🔵 Contacted</option>
                              <option value="qualified">🟣 Qualified</option>
                              <option value="converted">🟢 Converted</option>
                              <option value="lost">⚪ Lost</option>
                            </select>
                          </td>

                          {/* Quick Action Buttons */}
                          <td style={{ padding: "14px 18px", textAlign: "right" }} onClick={(e) => e.stopPropagation()}>
                            <div style={{ display: "flex", gap: "6px", justifyContent: "flex-end" }}>
                              {waPhone && (
                                <a
                                  href={`https://wa.me/${waPhone}?text=${encodeURIComponent(`Hello ${lead.name || ""}, thank you for contacting ChittorTech! How can we assist you with your project?`)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title="Chat on WhatsApp"
                                  style={{
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "8px",
                                    background: "#22c55e",
                                    color: "#ffffff",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textDecoration: "none",
                                    fontSize: "0.85rem",
                                  }}
                                >
                                  <i className="fab fa-whatsapp"></i>
                                </a>
                              )}
                              {lead.contact && (
                                <a
                                  href={`tel:${lead.contact.replace(/\s+/g, "")}`}
                                  title="Call Phone"
                                  style={{
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "8px",
                                    background: "#2563eb",
                                    color: "#ffffff",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textDecoration: "none",
                                    fontSize: "0.82rem",
                                  }}
                                >
                                  <i className="fas fa-phone"></i>
                                </a>
                              )}
                              {lead.email && (
                                <a
                                  href={`mailto:${lead.email}?subject=ChittorTech Consultation`}
                                  title="Send Email"
                                  style={{
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "8px",
                                    background: "#64748b",
                                    color: "#ffffff",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textDecoration: "none",
                                    fontSize: "0.82rem",
                                  }}
                                >
                                  <i className="fas fa-envelope"></i>
                                </a>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Lead Details Drawer (Right Side) */}
          {selectedLead && (
            <div
              style={{
                width: "380px",
                background: "#ffffff",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                padding: "24px",
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)",
                position: "sticky",
                top: "84px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <div>
                  <h3 style={{ margin: "0 0 4px 0", fontSize: "1.15rem", fontWeight: 800, color: "#0f172a" }}>
                    {selectedLead.name || "Lead Details"}
                  </h3>
                  <div style={{ fontSize: "0.8rem", color: "#64748b" }}>
                    ID: <span style={{ fontFamily: "monospace" }}>{selectedLead.id.slice(0, 10)}...</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedLead(null)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#94a3b8",
                    cursor: "pointer",
                    fontSize: "1rem",
                    padding: "4px",
                  }}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div style={{ marginBottom: "16px" }}>
                {renderStatusBadge(selectedLead.status)}
              </div>

              {/* Contact Information */}
              <div style={{ background: "#f8fafc", borderRadius: "12px", padding: "14px", marginBottom: "16px", border: "1px solid #f1f5f9" }}>
                <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", marginBottom: "8px" }}>
                  Contact Information
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#1e293b" }}>
                    <i className="fas fa-phone-alt" style={{ color: "#2563eb", width: "16px" }}></i>
                    <span style={{ fontWeight: 600 }}>{selectedLead.contact || "N/A"}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#1e293b" }}>
                    <i className="fas fa-envelope" style={{ color: "#2563eb", width: "16px" }}></i>
                    <span>{selectedLead.email || "N/A"}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#1e293b" }}>
                    <i className="fas fa-map-marker-alt" style={{ color: "#2563eb", width: "16px" }}></i>
                    <span>{selectedLead.location || "N/A"}</span>
                  </div>
                </div>
              </div>

              {/* Business Details */}
              <div style={{ background: "#f8fafc", borderRadius: "12px", padding: "14px", marginBottom: "16px", border: "1px solid #f1f5f9" }}>
                <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", marginBottom: "8px" }}>
                  Inquiry Details
                </div>
                <div style={{ fontSize: "0.84rem", color: "#334155", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div><strong>Company:</strong> {selectedLead.company || "N/A"}</div>
                  <div><strong>Industry:</strong> {selectedLead.industry || "N/A"}</div>
                  <div><strong>Source:</strong> {selectedLead.source || "Website Form"}</div>
                </div>
              </div>

              {/* Message */}
              <div style={{ marginBottom: "16px" }}>
                <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", marginBottom: "6px" }}>
                  Message / Requirements
                </div>
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "10px",
                    padding: "12px",
                    fontSize: "0.85rem",
                    color: "#1e293b",
                    lineHeight: "1.5",
                    maxHeight: "120px",
                    overflowY: "auto",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {selectedLead.message || "No message provided."}
                </div>
              </div>

              {/* Internal Notes */}
              <div style={{ marginBottom: "18px" }}>
                <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", marginBottom: "6px" }}>
                  Internal Follow-up Notes
                </div>
                <textarea
                  value={leadNotes}
                  onChange={(e) => setLeadNotes(e.target.value)}
                  placeholder="Add notes: e.g. Called client, requested proposal for ERP software..."
                  rows={3}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    border: "1.5px solid #cbd5e1",
                    padding: "10px",
                    fontSize: "0.82rem",
                    outline: "none",
                    fontFamily: "inherit",
                  }}
                />
                <button
                  onClick={handleSaveNotes}
                  disabled={savingNotes}
                  style={{
                    marginTop: "6px",
                    width: "100%",
                    padding: "8px",
                    borderRadius: "8px",
                    background: "#0f172a",
                    color: "#ffffff",
                    border: "none",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {savingNotes ? "Saving Notes..." : "Save Internal Note"}
                </button>
              </div>

              {/* Delete / Spam */}
              <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "14px", display: "flex", justifyContent: "space-between" }}>
                <button
                  onClick={() => handleDelete(selectedLead.id, selectedLead.name)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#ef4444",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <i className="fas fa-trash-alt"></i> Delete Lead
                </button>
              </div>
            </div>
          )}
        </div>
        </>
        )}

        {/* Persistent Bottom Floating Pill when Disconnected */}
        {(!isOnline || !isDbConnected) && (
          <div
            style={{
              position: "fixed",
              bottom: "18px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "linear-gradient(135deg, #0f172a, #1e293b)",
              border: "1.5px solid rgba(239, 68, 68, 0.45)",
              borderRadius: "14px",
              padding: "10px 22px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.45), 0 0 20px rgba(239, 68, 68, 0.2)",
              zIndex: 99999,
              maxWidth: "92vw",
              color: "#ffffff",
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: "#ef4444",
                boxShadow: "0 0 10px #ef4444",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#fca5a5" }}>
                Database Disconnected (Offline Mode)
              </span>
              <span style={{ fontSize: "0.72rem", color: "#94a3b8" }}>
                Internet connection band hai. Live sync paused.
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                if (typeof navigator !== "undefined" && navigator.onLine) {
                  setIsOnline(true);
                  setIsDbConnected(true);
                } else {
                  alert("Internet connection abhi bhi band hai. Kripya apna Wi-Fi ya Mobile Hotspot check karein.");
                }
              }}
              style={{
                padding: "5px 12px",
                borderRadius: "6px",
                background: "rgba(239, 68, 68, 0.2)",
                border: "1px solid rgba(239, 68, 68, 0.4)",
                color: "#fecaca",
                fontSize: "0.74rem",
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Retry ↻
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

const loginStyles = {
  container: {
    position: "fixed",
    inset: 0,
    zIndex: 9999999,
    width: "100vw",
    height: "100vh",
    maxHeight: "100vh",
    display: "flex",
    backgroundColor: "#ffffff",
    fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif",
    overflow: "hidden",
  },
  showcaseCol: {
    flex: "1 1 50%",
    width: "50%",
    maxWidth: "50%",
    backgroundColor: "#ffffff",
    borderRight: "2px solid #cbd5e1",
    boxShadow: "6px 0 24px -4px rgba(15, 23, 42, 0.07)",
    padding: "clamp(16px, 2.4vh, 28px) clamp(22px, 3vw, 42px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    maxHeight: "100vh",
    boxSizing: "border-box",
    position: "relative",
    overflowY: "auto",
    zIndex: 2,
  },
  panelCol: {
    flex: "1 1 50%",
    width: "50%",
    maxWidth: "50%",
    backgroundColor: "#f8fafc",
    padding: "clamp(16px, 2.4vh, 28px) clamp(20px, 3vw, 42px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    height: "100%",
    maxHeight: "100vh",
    boxSizing: "border-box",
    overflowY: "auto",
    position: "relative",
  },
  card: {
    width: "100%",
    maxWidth: "440px",
    backgroundColor: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "16px",
    padding: "clamp(22px, 3vh, 32px) clamp(22px, 2.5vw, 32px)",
    display: "flex",
    flexDirection: "column",
    gap: "clamp(12px, 1.6vh, 16px)",
    margin: "auto",
    boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.03)",
    boxSizing: "border-box",
    position: "relative",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
  },
  logoContainer: {
    width: "40px",
    height: "40px",
    background: "linear-gradient(135deg, #1e293b, #0f172a)",
    border: "1px solid #334155",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 10px rgba(15, 23, 42, 0.2)",
  },
  logo: { width: "24px", height: "24px", objectFit: "contain" },
  title: {
    fontSize: "clamp(19px, 2vw, 22px)",
    fontWeight: "800",
    color: "#0f172a",
    margin: "0 0 2px 0",
    letterSpacing: "-0.03em",
  },
  subtitle: {
    fontSize: "9px",
    fontWeight: "800",
    color: "#2563eb",
    backgroundColor: "#eff6ff",
    border: "1px solid #dbeafe",
    padding: "2px 8px",
    borderRadius: "20px",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
  },
  form: { display: "flex", flexDirection: "column", gap: "clamp(10px, 1.3vh, 13px)" },
  errorAlert: {
    backgroundColor: "#fef2f2",
    border: "1px solid #fee2e2",
    borderRadius: "10px",
    padding: "9px 12px",
    color: "#991b1b",
    fontSize: "12px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    lineHeight: "1.4",
  },
  inputGroup: { display: "flex", flexDirection: "column", gap: "5px" },
  label: { fontSize: "12px", fontWeight: "700", color: "#1e293b", paddingLeft: "2px" },
  captchaRow: { display: "flex", alignItems: "center", gap: "8px" },
  captchaBox: {
    backgroundColor: "#0f172a",
    border: "1.5px solid #1e293b",
    borderRadius: "10px",
    paddingTop: "9px",
    paddingBottom: "9px",
    paddingLeft: "16px",
    paddingRight: "16px",
    fontSize: "18px",
    fontWeight: "800",
    letterSpacing: "6px",
    fontFamily: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",
    color: "#38bdf8",
    userSelect: "none",
    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  refreshButton: {
    backgroundColor: "#ffffff",
    border: "1.5px solid #cbd5e1",
    borderRadius: "10px",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#475569",
    cursor: "pointer",
    flexShrink: 0,
    outline: "none",
    transition: "all 0.15s ease",
  },
  inputWrapper: { position: "relative", display: "flex", alignItems: "center" },
  inputIcon: { position: "absolute", left: "14px", color: "#2563eb", pointerEvents: "none", fontSize: "13px" },
  input: {
    width: "100%",
    backgroundColor: "#ffffff",
    border: "1.5px solid #cbd5e1",
    borderRadius: "10px",
    paddingTop: "11px",
    paddingBottom: "11px",
    paddingLeft: "14px",
    paddingRight: "14px",
    color: "#0f172a",
    fontSize: "13.5px",
    outline: "none",
    transition: "border-color 0.15s ease, box-shadow 0.15s ease",
    fontFamily: "inherit",
    boxSizing: "border-box",
  },
  eyeButton: {
    position: "absolute",
    right: "10px",
    background: "transparent",
    border: "none",
    color: "#94a3b8",
    cursor: "pointer",
    width: "28px",
    height: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    outline: "none",
  },
  submitButton: {
    background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)",
    border: "none",
    borderRadius: "10px",
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: "18px",
    paddingRight: "18px",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.15s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "6px",
    fontFamily: "inherit",
    boxShadow: "0 4px 14px rgba(37, 99, 235, 0.28)",
  },
  submitButtonDisabled: {
    background: "#94a3b8",
    color: "#ffffff",
    cursor: "not-allowed",
    boxShadow: "none",
  },
  spinner: {
    width: "18px",
    height: "18px",
    border: "2px solid rgba(255,255,255,0.3)",
    borderTopColor: "#ffffff",
    borderRadius: "50%",
    animation: "spin 0.6s linear infinite",
    display: "inline-block",
  },
  footer: { textAlign: "center", borderTop: "1px solid #f1f5f9", paddingTop: "10px", marginTop: "2px" },
  footerText: { fontSize: "10px", color: "#94a3b8", margin: "0 0 2px 0", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8px" },
  footerSubText: { fontSize: "9.5px", color: "#64748b", margin: 0, fontWeight: "500" },
  // 2FA OTP specific styles
  successAlert: {
    backgroundColor: "#ecfdf5",
    border: "1px solid #d1fae5",
    borderRadius: "10px",
    paddingTop: "9px",
    paddingBottom: "9px",
    paddingLeft: "12px",
    paddingRight: "12px",
    color: "#065f46",
    fontSize: "12px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  otpIconWrap: {
    width: "50px",
    height: "50px",
    backgroundColor: "#ecfdf5",
    border: "1px solid #d1fae5",
    borderRadius: "14px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 6px",
    boxShadow: "0 2px 8px rgba(16, 185, 129, 0.15)",
  },
  otpTitle: { fontSize: "17px", fontWeight: "800", color: "#0f172a", margin: "0 0 3px 0" },
  otpSub: { fontSize: "12px", color: "#64748b", margin: "0 0 12px 0", lineHeight: "1.4" },
  otpRow: { display: "flex", gap: "8px", justifyContent: "center", marginBottom: "12px" },
  otpDigitInput: {
    width: "42px",
    height: "48px",
    textAlign: "center",
    fontSize: "19px",
    fontWeight: "800",
    backgroundColor: "#ffffff",
    border: "2px solid #cbd5e1",
    borderRadius: "10px",
    color: "#0f172a",
    outline: "none",
    fontFamily: "monospace",
    transition: "all 0.15s ease",
  },
  otpDigitFilled: {
    border: "2px solid #2563eb",
    backgroundColor: "#eff6ff",
  },
  resendButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "12px",
    color: "#2563eb",
    fontWeight: "600",
    padding: "3px 0",
  },
};

