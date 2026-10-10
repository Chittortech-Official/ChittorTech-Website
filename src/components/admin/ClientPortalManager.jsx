"use client";

import React, { useState, useEffect, useMemo } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import NotificationHub from "./NotificationHub";

export default function ClientPortalManager({ defaultSubTab = "clients" }) {
  // 4 Sub-Tabs requested by user
  const [activeSubTab, setActiveSubTab] = useState(defaultSubTab); // "clients" | "projects" | "invoices" | "notifications"

  // 1. Live Data from Firestore
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [loadingClients, setLoadingClients] = useState(true);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingInvoices, setLoadingInvoices] = useState(true);

  // Quick Password Change Modal
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [pwdTargetUser, setPwdTargetUser] = useState(null);
  const [newPasswordValue, setNewPasswordValue] = useState("");
  const [savingPassword, setSavingPassword] = useState(false);

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Client Modal State
  const [showClientModal, setShowClientModal] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPassword, setClientPassword] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientProject, setClientProject] = useState("");
  const [clientStatus, setClientStatus] = useState("ACTIVE");
  const [autoSendWelcomeEmail, setAutoSendWelcomeEmail] = useState(true);
  const [savingClient, setSavingClient] = useState(false);
  const [visiblePasswords, setVisiblePasswords] = useState({});

  // Project Modal State
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [projName, setProjName] = useState("");
  const [projClientId, setProjClientId] = useState("");
  const [projStatus, setProjStatus] = useState("In Progress");
  const [projPhase, setProjPhase] = useState("Core API & Cloud Backend");
  const [projProgress, setProjProgress] = useState(45);
  const [projKickoff, setProjKickoff] = useState("");
  const [projLaunch, setProjLaunch] = useState("");
  const [projDomain, setProjDomain] = useState("");
  const [projHosting, setProjHosting] = useState("AWS Cloud / Vercel");

  // Invoice Modal State
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [invClientId, setInvClientId] = useState("");
  const [invProjName, setInvProjName] = useState("");
  const [invTitle, setInvTitle] = useState("");
  const [invAmount, setInvAmount] = useState("");
  const [invStatus, setInvStatus] = useState("UNPAID");
  const [invDueDate, setInvDueDate] = useState("");

  // Feedback Toasts
  const [actionFeedback, setActionFeedback] = useState("");
  const [dispatchingEmail, setDispatchingEmail] = useState({});

  // -------------------------------------------------------------
  // FIRESTORE LISTENERS
  // -------------------------------------------------------------

  // 1. Sync `users` Collection (where role === 'client' or all registered users)
  useEffect(() => {
    try {
      const q = query(collection(db, "users"));
      const unsubscribe = onSnapshot(
        q,
        (snap) => {
          const list = [];
          snap.forEach((docSnap) => {
            const data = docSnap.data();
            list.push({
              id: docSnap.id,
              ...data,
              // Normalize field cases (e.g. Email vs email, Name vs name)
              email: data.Email || data.email || docSnap.id,
              name: data.Name || data.name || "Client",
              password: data.Password || data.password || "",
              companyName: data.companyName || data.company || "",
              phone: data.phone || "",
              role: data.role || "client",
              assignedProject: data.assignedProject || data.project || "",
              status: data.status || "ACTIVE",
            });
          });
          setClients(list);
          setLoadingClients(false);
        },
        (err) => {
          console.warn("Users sync error:", err);
          setLoadingClients(false);
        }
      );
      return () => unsubscribe();
    } catch (e) {
      console.warn("Failed to listen to users collection:", e);
      setLoadingClients(false);
    }
  }, []);

  // 2. Sync `projects` Collection
  useEffect(() => {
    try {
      const q = query(collection(db, "projects"));
      const unsubscribe = onSnapshot(
        q,
        (snap) => {
          const list = [];
          snap.forEach((docSnap) => {
            list.push({ id: docSnap.id, ...docSnap.data() });
          });
          setProjects(list);
          setLoadingProjects(false);
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

  // 3. Sync `invoices` Collection
  useEffect(() => {
    try {
      const q = query(collection(db, "invoices"));
      const unsubscribe = onSnapshot(
        q,
        (snap) => {
          const list = [];
          snap.forEach((docSnap) => {
            list.push({ id: docSnap.id, ...docSnap.data() });
          });
          setInvoices(list);
          setLoadingInvoices(false);
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

  // -------------------------------------------------------------
  // CLIENT CRUD HANDLERS
  // -------------------------------------------------------------

  const generateRandomPassword = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
    let pwd = "CT@";
    for (let i = 0; i < 6; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setClientPassword(pwd);
  };

  const openNewClientModal = () => {
    setEditingClient(null);
    setClientName("");
    setClientEmail("");
    setClientPassword("CT@" + Math.floor(1000 + Math.random() * 9000));
    setClientCompany("");
    setClientPhone("");
    setClientProject(projects.length > 0 ? projects[0].name : "");
    setClientStatus("ACTIVE");
    setAutoSendWelcomeEmail(true);
    setShowClientModal(true);
  };

  const openEditClientModal = (c) => {
    setEditingClient(c);
    setClientName(c.name || "");
    setClientEmail(c.email || "");
    setClientPassword(c.password || "");
    setClientCompany(c.companyName || "");
    setClientPhone(c.phone || "");
    setClientProject(c.assignedProject || "");
    setClientStatus(c.status || "ACTIVE");
    setAutoSendWelcomeEmail(false);
    setShowClientModal(true);
  };

  const closeClientModal = () => {
    setShowClientModal(false);
    setEditingClient(null);
  };

  const handleSaveClient = async (e) => {
    e.preventDefault();
    const cleanEmail = clientEmail.trim().toLowerCase();
    if (!cleanEmail || !clientPassword.trim()) {
      alert("Corporate Email and Password are required.");
      return;
    }

    setSavingClient(true);

    const payload = {
      Email: cleanEmail,
      Name: clientName.trim() || "Client",
      Password: clientPassword.trim(),
      companyName: clientCompany.trim() || "Enterprise Partner",
      phone: clientPhone.trim(),
      role: "client",
      assignedProject: clientProject.trim(),
      status: clientStatus,
      updatedAt: serverTimestamp(),
    };

    try {
      // Document ID in Firestore is the client's email (as seen in screenshot)
      const docRef = doc(db, "users", cleanEmail);
      if (!editingClient) {
        payload.createdAt = serverTimestamp();
      }
      await setDoc(docRef, payload, { merge: true });

      // Automatically send Welcome Email if checkbox checked
      if (autoSendWelcomeEmail) {
        triggerWelcomeEmail(cleanEmail, clientName, clientPassword, clientCompany, clientPhone, clientProject);
      }

      setActionFeedback(`Client account "${cleanEmail}" saved successfully!`);
      closeClientModal();
      setTimeout(() => setActionFeedback(""), 4500);
    } catch (err) {
      alert("Error saving client account: " + err.message);
    } finally {
      setSavingClient(false);
    }
  };

  const handleDeleteClient = async (email, name) => {
    if (!confirm(`Are you sure you want to delete client account "${name}" (${email})?`)) return;
    try {
      await deleteDoc(doc(db, "users", email));
      setActionFeedback(`Client "${email}" deleted.`);
      setTimeout(() => setActionFeedback(""), 4000);
    } catch (err) {
      alert("Error deleting client: " + err.message);
    }
  };

  const openQuickPasswordModal = (user) => {
    setPwdTargetUser(user);
    setNewPasswordValue(user.password || "");
    setShowPasswordModal(true);
  };

  const handleSaveQuickPassword = async (e) => {
    e.preventDefault();
    if (!newPasswordValue.trim() || !pwdTargetUser) {
      alert("Please provide a valid password.");
      return;
    }

    setSavingPassword(true);
    try {
      const cleanEmail = pwdTargetUser.email.trim().toLowerCase();
      await updateDoc(doc(db, "users", cleanEmail), {
        Password: newPasswordValue.trim(),
        updatedAt: serverTimestamp(),
      });
      setActionFeedback(`✓ Password updated for ${pwdTargetUser.name} (${cleanEmail})!`);
      setShowPasswordModal(false);
      setPwdTargetUser(null);
      setNewPasswordValue("");
      setTimeout(() => setActionFeedback(""), 4000);
    } catch (err) {
      alert("Error updating password: " + err.message);
    } finally {
      setSavingPassword(false);
    }
  };

  const triggerWelcomeEmail = async (email, name, password, company, phone, project) => {
    setDispatchingEmail((prev) => ({ ...prev, [email]: true }));
    try {
      const res = await fetch("/api/admin/send-client-welcome", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          password,
          companyName: company,
          phone,
          assignedProject: project,
        }),
      });
      const data = await res.json();
      if (data.status === "success") {
        setActionFeedback(`🎉 Welcome email sent to ${email} via business@chittortech.in`);
      } else {
        alert("Email notice: " + data.msg);
      }
    } catch (err) {
      console.warn("Failed to dispatch email:", err);
    } finally {
      setDispatchingEmail((prev) => ({ ...prev, [email]: false }));
      setTimeout(() => setActionFeedback(""), 4500);
    }
  };

  const togglePasswordVisibility = (email) => {
    setVisiblePasswords((prev) => ({ ...prev, [email]: !prev[email] }));
  };

  const copyToClipboard = (text, label = "Credentials") => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setActionFeedback(`✓ ${label} copied to clipboard!`);
      setTimeout(() => setActionFeedback(""), 3500);
    }
  };

  const openWhatsAppCredentials = (c) => {
    const rawPhone = (c.phone || "").replace(/[^0-9]/g, "");
    const phoneNum = rawPhone.startsWith("91") ? rawPhone : "91" + rawPhone;
    const msg = `*ChittorTech™ Client Portal Access Credentials*\n\nDear *${c.name}* (${c.companyName || "Valued Client"}),\n\nYour official Client Portal account is active for your project *${c.assignedProject || "Software Solution"}*:\n\n📧 *Corporate ID:* ${c.email}\n🔑 *Portal Password:* ${c.password}\n\n📲 Open the *ChittorTech Mobile App* ➔ *Client Portal* to view live project milestones and invoices.\n\n_Official Dispatch: ChittorTech Systems & Solutions_`;
    window.open(`https://api.whatsapp.com/send?phone=${phoneNum}&text=${encodeURIComponent(msg)}`, "_blank");
  };

  // -------------------------------------------------------------
  // PROJECT CRUD HANDLERS
  // -------------------------------------------------------------

  const handleSaveProject = async (e) => {
    e.preventDefault();
    if (!projName.trim() || !projClientId.trim()) {
      alert("Please provide Project Name and Client Email.");
      return;
    }

    const payload = {
      name: projName.trim(),
      clientId: projClientId.trim().toLowerCase(),
      status: projStatus,
      currentPhase: projPhase.trim() || "Development Sprint",
      milestoneProgress: Number(projProgress) || 0,
      buildKickoffDate: projKickoff.trim() || new Date().toISOString().split("T")[0],
      launchDate: projLaunch.trim() || "TBD",
      domain: projDomain.trim() || "Not Configured",
      hostingProvider: projHosting.trim() || "AWS Cloud",
      updatedAt: serverTimestamp(),
    };

    try {
      if (editingProject) {
        await updateDoc(doc(db, "projects", editingProject.id), payload);
        setActionFeedback(`Project "${projName}" updated successfully!`);
      } else {
        const docKey = "proj_" + Date.now().toString(36);
        payload.createdAt = serverTimestamp();
        await setDoc(doc(db, "projects", docKey), payload);
        setActionFeedback(`New project "${projName}" created!`);
      }
      setShowProjectModal(false);
      setEditingProject(null);
      setTimeout(() => setActionFeedback(""), 4500);
    } catch (err) {
      alert("Error saving project: " + err.message);
    }
  };

  const openNewProjectModal = () => {
    setEditingProject(null);
    setProjName("");
    setProjClientId(clients.length > 0 ? clients[0].email : "");
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

  const handleDeleteProject = async (id, name) => {
    if (!confirm(`Are you sure you want to delete project "${name}"?`)) return;
    try {
      await deleteDoc(doc(db, "projects", id));
      setActionFeedback(`Project "${name}" deleted.`);
      setTimeout(() => setActionFeedback(""), 4000);
    } catch (err) {
      alert("Error deleting project: " + err.message);
    }
  };

  // -------------------------------------------------------------
  // INVOICE CRUD HANDLERS
  // -------------------------------------------------------------

  const handleSaveInvoice = async (e) => {
    e.preventDefault();
    if (!invTitle.trim() || !invAmount || !invClientId.trim()) {
      alert("Please provide Invoice Title, Client Email, and Amount.");
      return;
    }

    const payload = {
      title: invTitle.trim(),
      amount: Number(invAmount) || 0,
      clientId: invClientId.trim().toLowerCase(),
      projectName: invProjName.trim() || "Custom Software Development",
      status: invStatus,
      dueDate: invDueDate.trim() || new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    try {
      const docKey = "inv_" + Date.now().toString(36);
      await setDoc(doc(db, "invoices", docKey), payload);
      setActionFeedback(`Invoice "${invTitle}" for ${invClientId} created successfully!`);
      setShowInvoiceModal(false);
      setInvTitle("");
      setInvAmount("");
      setInvClientId("");
      setInvProjName("");
      setTimeout(() => setActionFeedback(""), 4500);
    } catch (err) {
      alert("Error saving invoice: " + err.message);
    }
  };

  const handleUpdateInvoiceStatus = async (id, newStatus) => {
    try {
      await updateDoc(doc(db, "invoices", id), {
        status: newStatus,
        updatedAt: serverTimestamp(),
      });
      setActionFeedback(`Invoice status updated to ${newStatus}`);
      setTimeout(() => setActionFeedback(""), 3500);
    } catch (err) {
      alert("Error updating invoice: " + err.message);
    }
  };

  const handleDeleteInvoice = async (id, title) => {
    if (!confirm(`Are you sure you want to delete invoice "${title}"?`)) return;
    try {
      await deleteDoc(doc(db, "invoices", id));
      setActionFeedback(`Invoice "${title}" deleted.`);
      setTimeout(() => setActionFeedback(""), 4000);
    } catch (err) {
      alert("Error deleting invoice: " + err.message);
    }
  };

  // Filtered Clients
  const filteredClients = useMemo(() => {
    return clients.filter((c) => {
      const q = searchQuery.toLowerCase();
      const matchSearch =
        (c.name && c.name.toLowerCase().includes(q)) ||
        (c.email && c.email.toLowerCase().includes(q)) ||
        (c.companyName && c.companyName.toLowerCase().includes(q)) ||
        (c.phone && c.phone.includes(q)) ||
        (c.assignedProject && c.assignedProject.toLowerCase().includes(q));

      const matchStatus = statusFilter === "all" || (c.status || "ACTIVE") === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [clients, searchQuery, statusFilter]);

  return (
    <div style={{ width: "100%", animation: "fadeIn 0.25s ease-in-out" }}>
      {/* Toast Notification */}
      {actionFeedback && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            background: "linear-gradient(135deg, #0f172a, #1e293b)",
            color: "#ffffff",
            padding: "14px 22px",
            borderRadius: "14px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            fontSize: "0.88rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            zIndex: 9999,
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e" }} />
          <span>{actionFeedback}</span>
        </div>
      )}

      {/* Main Header Banner */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
          padding: "20px 24px",
          borderRadius: "16px",
          border: "1px solid #e2e8f0",
          marginBottom: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
            <span
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #0284c7, #0369a1)",
                color: "#fff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
              }}
            >
              <i className="fas fa-mobile-screen-button"></i>
            </span>
            <h1 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
              Client Portal &amp; Mobile App Management
            </h1>
          </div>
          <p style={{ margin: 0, color: "#64748b", fontSize: "0.85rem" }}>
            Central control hub to onboard mobile clients, track live project milestones, manage invoices, and broadcast push notifications.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {activeSubTab === "clients" && (
            <button
              onClick={openNewClientModal}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                color: "#ffffff",
                border: "none",
                padding: "10px 18px",
                borderRadius: "10px",
                fontSize: "0.88rem",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(2, 132, 199, 0.3)",
              }}
            >
              <i className="fas fa-user-plus"></i>
              <span>+ Onboard New Client</span>
            </button>
          )}

          {activeSubTab === "projects" && (
            <button
              onClick={openNewProjectModal}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                color: "#ffffff",
                border: "none",
                padding: "10px 18px",
                borderRadius: "10px",
                fontSize: "0.88rem",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(2, 132, 199, 0.3)",
              }}
            >
              <i className="fas fa-plus-circle"></i>
              <span>+ Register New Project</span>
            </button>
          )}

          {activeSubTab === "invoices" && (
            <button
              onClick={() => {
                setInvTitle("");
                setInvAmount("");
                setInvClientId(clients.length > 0 ? clients[0].email : "");
                setInvProjName(projects.length > 0 ? projects[0].name : "");
                setInvStatus("UNPAID");
                setInvDueDate(new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0]);
                setShowInvoiceModal(true);
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                color: "#ffffff",
                border: "none",
                padding: "10px 18px",
                borderRadius: "10px",
                fontSize: "0.88rem",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(16, 185, 129, 0.3)",
              }}
            >
              <i className="fas fa-receipt"></i>
              <span>+ Create Invoice</span>
            </button>
          )}
        </div>
      </div>

      {/* 4 SUB-TABS NAVIGATION BAR */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          background: "#ffffff",
          padding: "6px",
          borderRadius: "14px",
          border: "1.5px solid #e2e8f0",
          marginBottom: "20px",
          overflowX: "auto",
        }}
      >
        <button
          onClick={() => setActiveSubTab("clients")}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "10px 16px",
            borderRadius: "10px",
            fontSize: "0.88rem",
            fontWeight: 800,
            cursor: "pointer",
            border: "none",
            transition: "all 0.2s ease",
            background: activeSubTab === "clients" ? "linear-gradient(135deg, #0284c7, #0369a1)" : "transparent",
            color: activeSubTab === "clients" ? "#ffffff" : "#64748b",
            boxShadow: activeSubTab === "clients" ? "0 4px 12px rgba(2, 132, 199, 0.25)" : "none",
            whiteSpace: "nowrap",
          }}
        >
          <i className="fas fa-users-gear" style={{ fontSize: "14px" }}></i>
          <span>1. Client Accounts &amp; Onboarding</span>
          <span
            style={{
              fontSize: "0.72rem",
              padding: "2px 7px",
              borderRadius: "20px",
              background: activeSubTab === "clients" ? "rgba(255,255,255,0.25)" : "#e2e8f0",
              color: activeSubTab === "clients" ? "#ffffff" : "#475569",
            }}
          >
            {clients.length}
          </span>
        </button>

        <button
          onClick={() => setActiveSubTab("projects")}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "10px 16px",
            borderRadius: "10px",
            fontSize: "0.88rem",
            fontWeight: 800,
            cursor: "pointer",
            border: "none",
            transition: "all 0.2s ease",
            background: activeSubTab === "projects" ? "linear-gradient(135deg, #0284c7, #0369a1)" : "transparent",
            color: activeSubTab === "projects" ? "#ffffff" : "#64748b",
            boxShadow: activeSubTab === "projects" ? "0 4px 12px rgba(2, 132, 199, 0.25)" : "none",
            whiteSpace: "nowrap",
          }}
        >
          <i className="fas fa-diagram-project" style={{ fontSize: "14px" }}></i>
          <span>2. Live Projects</span>
          <span
            style={{
              fontSize: "0.72rem",
              padding: "2px 7px",
              borderRadius: "20px",
              background: activeSubTab === "projects" ? "rgba(255,255,255,0.25)" : "#e2e8f0",
              color: activeSubTab === "projects" ? "#ffffff" : "#475569",
            }}
          >
            {projects.length}
          </span>
        </button>

        <button
          onClick={() => setActiveSubTab("invoices")}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "10px 16px",
            borderRadius: "10px",
            fontSize: "0.88rem",
            fontWeight: 800,
            cursor: "pointer",
            border: "none",
            transition: "all 0.2s ease",
            background: activeSubTab === "invoices" ? "linear-gradient(135deg, #0284c7, #0369a1)" : "transparent",
            color: activeSubTab === "invoices" ? "#ffffff" : "#64748b",
            boxShadow: activeSubTab === "invoices" ? "0 4px 12px rgba(2, 132, 199, 0.25)" : "none",
            whiteSpace: "nowrap",
          }}
        >
          <i className="fas fa-file-invoice-dollar" style={{ fontSize: "14px" }}></i>
          <span>3. Invoices &amp; Billing</span>
          <span
            style={{
              fontSize: "0.72rem",
              padding: "2px 7px",
              borderRadius: "20px",
              background: activeSubTab === "invoices" ? "rgba(255,255,255,0.25)" : "#e2e8f0",
              color: activeSubTab === "invoices" ? "#ffffff" : "#475569",
            }}
          >
            {invoices.length}
          </span>
        </button>

        <button
          onClick={() => setActiveSubTab("notifications")}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "10px 16px",
            borderRadius: "10px",
            fontSize: "0.88rem",
            fontWeight: 800,
            cursor: "pointer",
            border: "none",
            transition: "all 0.2s ease",
            background: activeSubTab === "notifications" ? "linear-gradient(135deg, #0284c7, #0369a1)" : "transparent",
            color: activeSubTab === "notifications" ? "#ffffff" : "#64748b",
            boxShadow: activeSubTab === "notifications" ? "0 4px 12px rgba(2, 132, 199, 0.25)" : "none",
            whiteSpace: "nowrap",
          }}
        >
          <i className="fas fa-bell" style={{ fontSize: "14px" }}></i>
          <span>4. Notification Hub</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* SUB-TAB 1: CLIENT ACCOUNTS & ONBOARDING (Direct Firestore `users` collection) */}
      {/* ========================================================================= */}
      {activeSubTab === "clients" && (
        <div>
          {/* Quick Metrics Bar */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px", marginBottom: "20px" }}>
            <div style={{ background: "#ffffff", padding: "16px 18px", borderRadius: "14px", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
              <div style={{ fontSize: "0.76rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>Registered Clients</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#0f172a", marginTop: "4px" }}>{clients.length}</div>
              <div style={{ fontSize: "0.72rem", color: "#16a34a", fontWeight: 600, marginTop: "2px" }}>● Live in Firestore `users`</div>
            </div>

            <div style={{ background: "#ffffff", padding: "16px 18px", borderRadius: "14px", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
              <div style={{ fontSize: "0.76rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>Active Projects</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#0284c7", marginTop: "4px" }}>{projects.length}</div>
              <div style={{ fontSize: "0.72rem", color: "#64748b", marginTop: "2px" }}>Connected to Mobile App</div>
            </div>

            <div style={{ background: "#ffffff", padding: "16px 18px", borderRadius: "14px", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
              <div style={{ fontSize: "0.76rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>Total Invoices</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#10b981", marginTop: "4px" }}>{invoices.length}</div>
              <div style={{ fontSize: "0.72rem", color: "#64748b", marginTop: "2px" }}>Client billing records</div>
            </div>

            <div style={{ background: "#ffffff", padding: "16px 18px", borderRadius: "14px", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
              <div style={{ fontSize: "0.76rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>Email Dispatcher</div>
              <div style={{ fontSize: "1rem", fontWeight: 800, color: "#0f172a", marginTop: "8px", wordBreak: "break-all" }}>
                business@chittortech.in
              </div>
              <div style={{ fontSize: "0.72rem", color: "#2563eb", fontWeight: 600, marginTop: "2px" }}>✓ Auto-Send Credentials</div>
            </div>
          </div>

          {/* Search & Action Bar */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <div style={{ display: "flex", gap: "10px", flex: 1, minWidth: "260px" }}>
              <div style={{ position: "relative", flex: 1 }}>
                <i className="fas fa-search" style={{ position: "absolute", left: "14px", top: "12px", color: "#94a3b8", fontSize: "13px" }}></i>
                <input
                  type="text"
                  placeholder="Search client by name, corporate email, company, phone..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "9px 14px 9px 38px",
                    borderRadius: "10px",
                    border: "1.5px solid #e2e8f0",
                    fontSize: "0.85rem",
                    outline: "none",
                  }}
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                style={{
                  padding: "9px 14px",
                  borderRadius: "10px",
                  border: "1.5px solid #e2e8f0",
                  fontSize: "0.85rem",
                  background: "#ffffff",
                  color: "#334155",
                  fontWeight: 600,
                  outline: "none",
                }}
              >
                <option value="all">All Statuses</option>
                <option value="ACTIVE">Active Only</option>
                <option value="INACTIVE">Inactive Only</option>
              </select>
            </div>
          </div>

          {/* Client Accounts Table (Authentic Sober Enterprise ERP Standard) */}
          {loadingClients ? (
            <div style={{ textAlign: "center", padding: "40px", background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
              <i className="fas fa-spinner fa-spin" style={{ fontSize: "20px", color: "#0284c7" }}></i>
              <p style={{ marginTop: "10px", color: "#64748b", fontSize: "0.82rem" }}>Syncing records from Firestore `users`...</p>
            </div>
          ) : filteredClients.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 20px", background: "#ffffff", borderRadius: "12px", border: "1px dashed #cbd5e1" }}>
              <i className="fas fa-users-slash" style={{ fontSize: "28px", color: "#94a3b8", marginBottom: "10px" }}></i>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", margin: "0 0 4px 0" }}>No Client Accounts Found</h3>
              <p style={{ color: "#64748b", fontSize: "0.82rem", margin: "0 0 14px 0" }}>
                Add a new client account to provision access credentials.
              </p>
              <button
                onClick={openNewClientModal}
                style={{
                  background: "#0284c7",
                  color: "#fff",
                  border: "none",
                  padding: "7px 14px",
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  cursor: "pointer",
                }}
              >
                + Onboard Client
              </button>
            </div>
          ) : (
            <div
              style={{
                background: "#ffffff",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
                overflowX: "auto",
                width: "100%",
              }}
            >
              <table style={{ width: "100%", minWidth: "860px", borderCollapse: "collapse", tableLayout: "fixed", textAlign: "left", fontSize: "0.8rem" }}>
                <thead>
                  <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0", color: "#475569", fontWeight: 700, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    <th style={{ padding: "8px 12px", width: "19%" }}>Client / Account</th>
                    <th style={{ padding: "8px 12px", width: "21%" }}>Corporate Email &amp; Phone</th>
                    <th style={{ padding: "8px 12px", width: "12%" }}>Portal Password</th>
                    <th style={{ padding: "8px 12px", width: "14%" }}>Assigned Project</th>
                    <th style={{ padding: "8px 12px", width: "8%" }}>Status</th>
                    <th style={{ padding: "8px 12px", width: "26%", textAlign: "right" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClients.map((c) => {
                    const isPwdVisible = visiblePasswords[c.email];
                    const isSendingMail = dispatchingEmail[c.email];
                    const cleanEmail = (c.email || "").toLowerCase().trim();
                    const isKush = cleanEmail === "kushsharma.cor@gmail.com";
                    const isLav = cleanEmail === "lavsharma.cor@gmail.com";
                    const isAdmin = isKush || isLav || c.role === "admin" || c.role === "founder" || c.role === "co-founder";

                    const roleSubtitle = isKush
                      ? "Founder · ChittorTech"
                      : isLav
                      ? "Co-Founder · ChittorTech"
                      : (c.companyName ? c.companyName : "Client Account");

                    const projectLabel = isKush || isLav
                      ? "Enterprise Admin Suite"
                      : (c.assignedProject || "Default Solution Suite");

                    return (
                      <tr
                        key={c.id || c.email}
                        style={{
                          borderBottom: "1px solid #f1f5f9",
                          transition: "background 0.12s ease",
                        }}
                      >
                        {/* Column 1: Client & Company */}
                        <td style={{ padding: "8px 12px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", overflow: "hidden" }}>
                            <div
                              style={{
                                width: "28px",
                                height: "28px",
                                borderRadius: "6px",
                                background: "#f1f5f9",
                                color: "#334155",
                                border: "1px solid #e2e8f0",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: 700,
                                fontSize: "11px",
                                flexShrink: 0,
                              }}
                            >
                              {(c.name || "C").charAt(0).toUpperCase()}
                            </div>
                            <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                              <div style={{ fontWeight: 600, color: "#0f172a", fontSize: "0.8rem", overflow: "hidden", textOverflow: "ellipsis" }} title={c.name}>
                                {c.name}
                              </div>
                              <div style={{ fontSize: "0.7rem", color: "#64748b", fontWeight: 400, overflow: "hidden", textOverflow: "ellipsis", marginTop: "1px" }} title={roleSubtitle}>
                                {roleSubtitle}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Column 2: Email & Phone */}
                        <td style={{ padding: "8px 12px" }}>
                          <div style={{ fontWeight: 500, color: "#1e293b", fontFamily: "monospace", fontSize: "0.76rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} title={c.email}>
                            {c.email}
                          </div>
                          {c.phone ? (
                            <div style={{ fontSize: "0.7rem", color: "#64748b", marginTop: "2px", display: "flex", alignItems: "center", gap: "4px" }}>
                              <i className="fas fa-phone" style={{ fontSize: "8px", color: "#94a3b8" }}></i>
                              <span>{c.phone}</span>
                            </div>
                          ) : (
                            <div style={{ fontSize: "0.7rem", color: "#cbd5e1" }}>—</div>
                          )}
                        </td>

                        {/* Column 3: Portal Password (Sober Uniform Box) */}
                        <td style={{ padding: "8px 12px" }}>
                          <div
                            style={{
                              height: "25px",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "5px",
                              background: "#f8fafc",
                              border: "1px solid #e2e8f0",
                              padding: "0 7px",
                              borderRadius: "5px",
                              maxWidth: "100%",
                            }}
                          >
                            <span style={{ fontFamily: "monospace", fontWeight: 600, color: "#0f172a", fontSize: "0.76rem", letterSpacing: isPwdVisible ? "0px" : "1px" }}>
                              {isPwdVisible ? c.password : "••••••••"}
                            </span>
                            <button
                              type="button"
                              onClick={() => togglePasswordVisibility(c.email)}
                              title={isPwdVisible ? "Hide password" : "Show password"}
                              style={{ background: "transparent", border: "none", cursor: "pointer", color: "#64748b", padding: "0 1px", display: "flex", alignItems: "center" }}
                            >
                              <i className={isPwdVisible ? "fas fa-eye-slash" : "fas fa-eye"} style={{ fontSize: "10px" }}></i>
                            </button>
                            <button
                              type="button"
                              onClick={() => copyToClipboard(c.password, "Password")}
                              title="Copy password"
                              style={{ background: "transparent", border: "none", cursor: "pointer", color: "#64748b", padding: "0 1px", display: "flex", alignItems: "center" }}
                            >
                              <i className="fas fa-copy" style={{ fontSize: "10px" }}></i>
                            </button>
                          </div>
                        </td>

                        {/* Column 4: Assigned Project (Sober Uniform Box) */}
                        <td style={{ padding: "8px 12px" }}>
                          <div
                            style={{
                              height: "25px",
                              display: "inline-flex",
                              alignItems: "center",
                              background: "#f8fafc",
                              border: "1px solid #e2e8f0",
                              color: "#334155",
                              padding: "0 8px",
                              borderRadius: "5px",
                              fontSize: "0.72rem",
                              fontWeight: 500,
                              maxWidth: "100%",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                            title={projectLabel}
                          >
                            {projectLabel}
                          </div>
                        </td>

                        {/* Column 5: Status (Sober Dot Badge) */}
                        <td style={{ padding: "8px 12px" }}>
                          <span
                            style={{
                              height: "22px",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              padding: "0 6px",
                              borderRadius: "4px",
                              fontSize: "0.68rem",
                              fontWeight: 600,
                              background: c.status === "INACTIVE" ? "#fee2e2" : "#f0fdf4",
                              color: c.status === "INACTIVE" ? "#991b1b" : "#166534",
                              border: `1px solid ${c.status === "INACTIVE" ? "#fecaca" : "#bbf7d0"}`,
                            }}
                          >
                            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: c.status === "INACTIVE" ? "#ef4444" : "#22c55e" }} />
                            <span>{isAdmin ? "Admin" : (c.status || "Active")}</span>
                          </span>
                        </td>

                        {/* Column 6: Unified Actions (Identical Heights, Borders & Standard ERP CSS) */}
                        <td style={{ padding: "8px 12px", textAlign: "right", whiteSpace: "nowrap" }}>
                          <div style={{ display: "inline-flex", gap: "4px", alignItems: "center", justifyContent: "flex-end", flexWrap: "nowrap" }}>
                            
                            {/* Send Email (Only for Clients) */}
                            {!isAdmin && (
                              <button
                                onClick={() => triggerWelcomeEmail(c.email, c.name, c.password, c.companyName, c.phone, c.assignedProject)}
                                disabled={isSendingMail}
                                title="Send Welcome Email"
                                style={{
                                  height: "25px",
                                  padding: "0 7px",
                                  background: "#ffffff",
                                  border: "1px solid #cbd5e1",
                                  color: "#334155",
                                  borderRadius: "5px",
                                  fontSize: "0.7rem",
                                  fontWeight: 600,
                                  cursor: isSendingMail ? "not-allowed" : "pointer",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "4px",
                                  flexShrink: 0,
                                  boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
                                }}
                              >
                                <i className={isSendingMail ? "fas fa-spinner fa-spin" : "fas fa-envelope"} style={{ color: "#475569", fontSize: "9px" }}></i>
                                <span>{isSendingMail ? "Sending" : "Email"}</span>
                              </button>
                            )}

                            {/* WhatsApp (Only for Clients with Phone) */}
                            {!isAdmin && c.phone && (
                              <button
                                onClick={() => openWhatsAppCredentials(c)}
                                title="Share via WhatsApp"
                                style={{
                                  height: "25px",
                                  padding: "0 7px",
                                  background: "#ffffff",
                                  border: "1px solid #cbd5e1",
                                  color: "#334155",
                                  borderRadius: "5px",
                                  fontSize: "0.7rem",
                                  fontWeight: 600,
                                  cursor: "pointer",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "4px",
                                  flexShrink: 0,
                                  boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
                                }}
                              >
                                <i className="fab fa-whatsapp" style={{ color: "#16a34a", fontSize: "10px" }}></i>
                                <span>WhatsApp</span>
                              </button>
                            )}

                            {/* Change Password (Uniform Button) */}
                            <button
                              onClick={() => openQuickPasswordModal(c)}
                              title="Change Password"
                              style={{
                                height: "25px",
                                padding: "0 7px",
                                background: "#ffffff",
                                border: "1px solid #cbd5e1",
                                color: "#334155",
                                borderRadius: "5px",
                                fontSize: "0.7rem",
                                fontWeight: 600,
                                cursor: "pointer",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "4px",
                                flexShrink: 0,
                                boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
                              }}
                            >
                              <i className="fas fa-key" style={{ color: "#475569", fontSize: "9px" }}></i>
                              <span>Key</span>
                            </button>

                            {/* Edit (Uniform Button) */}
                            <button
                              onClick={() => openEditClientModal(c)}
                              title="Edit Details"
                              style={{
                                height: "25px",
                                width: "25px",
                                padding: 0,
                                background: "#ffffff",
                                border: "1px solid #cbd5e1",
                                color: "#475569",
                                borderRadius: "5px",
                                cursor: "pointer",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
                              }}
                            >
                              <i className="fas fa-pen" style={{ fontSize: "9px" }}></i>
                            </button>

                            {/* Delete (Only for Clients) */}
                            {!isAdmin && (
                              <button
                                onClick={() => handleDeleteClient(c.email, c.name)}
                                title="Delete Record"
                                style={{
                                  height: "25px",
                                  width: "25px",
                                  padding: 0,
                                  background: "#ffffff",
                                  border: "1px solid #cbd5e1",
                                  color: "#dc2626",
                                  borderRadius: "5px",
                                  cursor: "pointer",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                  boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
                                }}
                              >
                                <i className="fas fa-trash-alt" style={{ fontSize: "9px" }}></i>
                              </button>
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
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 2: LIVE PROJECTS */}
      {/* ========================================================================= */}
      {activeSubTab === "projects" && (
        <div>
          {loadingProjects ? (
            <div style={{ textAlign: "center", padding: "40px", background: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
              <i className="fas fa-spinner fa-spin" style={{ fontSize: "24px", color: "#0284c7" }}></i>
              <p style={{ marginTop: "10px", color: "#64748b", fontSize: "0.88rem" }}>Loading projects from Firestore...</p>
            </div>
          ) : projects.length === 0 ? (
            <div style={{ textAlign: "center", padding: "50px 20px", background: "#ffffff", borderRadius: "16px", border: "2px dashed #e2e8f0" }}>
              <i className="fas fa-folder-open" style={{ fontSize: "32px", color: "#94a3b8", marginBottom: "12px" }}></i>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", margin: "0 0 6px 0" }}>No Projects Found</h3>
              <p style={{ color: "#64748b", fontSize: "0.85rem", margin: "0 0 16px 0" }}>Register a project to sync live milestones with the client mobile app.</p>
              <button onClick={openNewProjectModal} style={{ background: "#0284c7", color: "#fff", border: "none", padding: "9px 18px", borderRadius: "8px", fontWeight: 700, cursor: "pointer" }}>
                + Register First Project
              </button>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
              {projects.map((p) => (
                <div
                  key={p.id}
                  style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                    border: "1px solid #e2e8f0",
                    padding: "20px",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.03)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 800,
                          padding: "3px 8px",
                          borderRadius: "6px",
                          background: p.status === "Completed" ? "#dcfce7" : "#eff6ff",
                          color: p.status === "Completed" ? "#166534" : "#1d4ed8",
                          border: `1px solid ${p.status === "Completed" ? "#bbf7d0" : "#bfdbfe"}`,
                        }}
                      >
                        {p.status || "In Progress"}
                      </span>
                      <div style={{ display: "flex", gap: "6px" }}>
                        <button onClick={() => openEditProjectModal(p)} style={{ background: "transparent", border: "none", color: "#64748b", cursor: "pointer" }}>
                          <i className="fas fa-edit"></i>
                        </button>
                        <button onClick={() => handleDeleteProject(p.id, p.name)} style={{ background: "transparent", border: "none", color: "#ef4444", cursor: "pointer" }}>
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>

                    <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", margin: "0 0 6px 0" }}>{p.name}</h3>
                    <div style={{ fontSize: "0.8rem", color: "#64748b", marginBottom: "14px" }}>
                      <i className="fas fa-user-circle" style={{ marginRight: "5px", color: "#0284c7" }}></i>
                      Client: <strong>{p.clientId}</strong>
                    </div>

                    {/* Progress Bar */}
                    <div style={{ marginBottom: "14px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontWeight: 700, color: "#475569", marginBottom: "4px" }}>
                        <span>{p.currentPhase || "Current Phase"}</span>
                        <span>{p.milestoneProgress || 0}%</span>
                      </div>
                      <div style={{ width: "100%", height: "8px", background: "#f1f5f9", borderRadius: "10px", overflow: "hidden" }}>
                        <div style={{ width: `${p.milestoneProgress || 0}%`, height: "100%", background: "linear-gradient(90deg, #0284c7, #38bdf8)", borderRadius: "10px" }}></div>
                      </div>
                    </div>

                    {/* Domain & Hosting */}
                    <div style={{ fontSize: "0.75rem", color: "#64748b", background: "#f8fafc", padding: "8px 10px", borderRadius: "8px", border: "1px solid #f1f5f9" }}>
                      <div>🌐 Domain: <strong>{p.domain || "Not Configured"}</strong></div>
                      <div style={{ marginTop: "3px" }}>☁️ Hosting: <strong>{p.hostingProvider || "AWS Cloud"}</strong></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 3: INVOICES & BILLING */}
      {/* ========================================================================= */}
      {activeSubTab === "invoices" && (
        <div>
          {loadingInvoices ? (
            <div style={{ textAlign: "center", padding: "40px", background: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
              <i className="fas fa-spinner fa-spin" style={{ fontSize: "24px", color: "#10b981" }}></i>
              <p style={{ marginTop: "10px", color: "#64748b", fontSize: "0.88rem" }}>Loading invoices from Firestore...</p>
            </div>
          ) : invoices.length === 0 ? (
            <div style={{ textAlign: "center", padding: "50px 20px", background: "#ffffff", borderRadius: "16px", border: "2px dashed #e2e8f0" }}>
              <i className="fas fa-receipt" style={{ fontSize: "32px", color: "#94a3b8", marginBottom: "12px" }}></i>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", margin: "0 0 6px 0" }}>No Invoices Generated</h3>
              <p style={{ color: "#64748b", fontSize: "0.85rem", margin: "0 0 16px 0" }}>Generate invoices for client projects. Clients will see real-time payment status in their mobile app.</p>
              <button
                onClick={() => {
                  setInvTitle("");
                  setInvAmount("");
                  setInvClientId(clients.length > 0 ? clients[0].email : "");
                  setInvProjName(projects.length > 0 ? projects[0].name : "");
                  setInvStatus("UNPAID");
                  setInvDueDate(new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0]);
                  setShowInvoiceModal(true);
                }}
                style={{ background: "#10b981", color: "#fff", border: "none", padding: "9px 18px", borderRadius: "8px", fontWeight: 700, cursor: "pointer" }}
              >
                + Create First Invoice
              </button>
            </div>
          ) : (
            <div style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.84rem" }}>
                  <thead>
                    <tr style={{ background: "#f8fafc", borderBottom: "1.5px solid #e2e8f0", color: "#475569", fontWeight: 700 }}>
                      <th style={{ padding: "12px 16px" }}>Invoice Details</th>
                      <th style={{ padding: "12px 16px" }}>Client &amp; Project</th>
                      <th style={{ padding: "12px 16px" }}>Amount (INR)</th>
                      <th style={{ padding: "12px 16px" }}>Due Date</th>
                      <th style={{ padding: "12px 16px" }}>Payment Status</th>
                      <th style={{ padding: "12px 16px", textAlign: "right" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((inv) => (
                      <tr key={inv.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                        <td style={{ padding: "14px 16px" }}>
                          <div style={{ fontWeight: 800, color: "#0f172a" }}>{inv.title}</div>
                          <div style={{ fontSize: "0.72rem", color: "#64748b", fontFamily: "monospace" }}>#{inv.id}</div>
                        </td>
                        <td style={{ padding: "14px 16px" }}>
                          <div style={{ fontWeight: 600, color: "#1e293b" }}>{inv.clientId}</div>
                          <div style={{ fontSize: "0.75rem", color: "#64748b" }}>{inv.projectName}</div>
                        </td>
                        <td style={{ padding: "14px 16px", fontSize: "1rem", fontWeight: 800, color: "#0f172a" }}>
                          ₹{Number(inv.amount || 0).toLocaleString("en-IN")}
                        </td>
                        <td style={{ padding: "14px 16px", color: "#64748b" }}>{inv.dueDate || "N/A"}</td>
                        <td style={{ padding: "14px 16px" }}>
                          <select
                            value={inv.status || "UNPAID"}
                            onChange={(e) => handleUpdateInvoiceStatus(inv.id, e.target.value)}
                            style={{
                              padding: "4px 8px",
                              borderRadius: "6px",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              background: inv.status === "PAID" ? "#dcfce7" : "#fef3c7",
                              color: inv.status === "PAID" ? "#166534" : "#92400e",
                              border: `1px solid ${inv.status === "PAID" ? "#bbf7d0" : "#fde68a"}`,
                              cursor: "pointer",
                            }}
                          >
                            <option value="UNPAID">UNPAID</option>
                            <option value="PAID">PAID</option>
                            <option value="OVERDUE">OVERDUE</option>
                          </select>
                        </td>
                        <td style={{ padding: "14px 16px", textAlign: "right" }}>
                          <button
                            onClick={() => handleDeleteInvoice(inv.id, inv.title)}
                            style={{ background: "#fef2f2", border: "1px solid #fecaca", color: "#dc2626", padding: "6px 9px", borderRadius: "8px", cursor: "pointer" }}
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-TAB 4: NOTIFICATION HUB */}
      {/* ========================================================================= */}
      {activeSubTab === "notifications" && <NotificationHub />}

      {/* ========================================================================= */}
      {/* MODAL: ONBOARD / EDIT CLIENT */}
      {/* ========================================================================= */}
      {showClientModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(15, 23, 42, 0.6)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
            padding: "16px",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              maxWidth: "520px",
              width: "100%",
              padding: "26px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
              border: "1px solid #e2e8f0",
              animation: "fadeIn 0.2s ease",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#eff6ff", color: "#0284c7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>
                  <i className="fas fa-user-plus"></i>
                </span>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                  {editingClient ? "Edit Client Account" : "Onboard New Client"}
                </h3>
              </div>
              <button onClick={closeClientModal} style={{ background: "transparent", border: "none", color: "#94a3b8", cursor: "pointer", fontSize: "18px" }}>
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveClient}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                <div>
                  <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>Client Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Akshit Bhatnagar"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem" }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>Company / Business *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Verma Logistics Pvt Ltd"
                    value={clientCompany}
                    onChange={(e) => setClientCompany(e.target.value)}
                    style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem" }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "12px" }}>
                <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>Corporate Email ID (Login ID) *</label>
                <input
                  type="email"
                  required
                  disabled={!!editingClient}
                  placeholder="e.g. chittortech@gmail.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "9px 12px",
                    borderRadius: "8px",
                    border: "1.5px solid #cbd5e1",
                    fontSize: "0.85rem",
                    background: editingClient ? "#f1f5f9" : "#ffffff",
                    cursor: editingClient ? "not-allowed" : "text",
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                    <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569" }}>Portal Password *</label>
                    <button
                      type="button"
                      onClick={generateRandomPassword}
                      style={{ background: "transparent", border: "none", color: "#0284c7", fontSize: "0.72rem", fontWeight: 700, cursor: "pointer" }}
                    >
                      ⚡ Auto-Generate
                    </button>
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Enter password..."
                    value={clientPassword}
                    onChange={(e) => setClientPassword(e.target.value)}
                    style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem", fontFamily: "monospace", fontWeight: 700 }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="e.g. 8209728964"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem" }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "14px" }}>
                <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>Assigned Project Name</label>
                <input
                  type="text"
                  placeholder="e.g. Logistics ERP & Mobile App Suite"
                  value={clientProject}
                  onChange={(e) => setClientProject(e.target.value)}
                  style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem" }}
                />
              </div>

              {/* Auto Email Checkbox */}
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "10px 12px", borderRadius: "10px", marginBottom: "18px", display: "flex", alignItems: "center", gap: "8px" }}>
                <input
                  type="checkbox"
                  id="autoSendEmail"
                  checked={autoSendWelcomeEmail}
                  onChange={(e) => setAutoSendWelcomeEmail(e.target.checked)}
                  style={{ cursor: "pointer", width: "16px", height: "16px" }}
                />
                <label htmlFor="autoSendEmail" style={{ fontSize: "0.8rem", color: "#166534", fontWeight: 600, cursor: "pointer" }}>
                  ✉️ Automatically send Branded Welcome Email with Login Credentials via `business@chittortech.in`
                </label>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button
                  type="button"
                  onClick={closeClientModal}
                  style={{ background: "#f1f5f9", border: "1px solid #cbd5e1", color: "#475569", padding: "9px 16px", borderRadius: "8px", fontWeight: 700, cursor: "pointer" }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingClient}
                  style={{
                    background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                    color: "#ffffff",
                    border: "none",
                    padding: "9px 20px",
                    borderRadius: "8px",
                    fontWeight: 700,
                    cursor: savingClient ? "not-allowed" : "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  {savingClient ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-check"></i>}
                  <span>{editingClient ? "Save Changes" : "Create & Onboard Client"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: QUICK PASSWORD CHANGE */}
      {/* ========================================================================= */}
      {showPasswordModal && pwdTargetUser && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(15, 23, 42, 0.6)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
            padding: "16px",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              maxWidth: "460px",
              width: "100%",
              padding: "26px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
              border: "1px solid #e2e8f0",
              animation: "fadeIn 0.2s ease",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#eff6ff", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>
                  <i className="fas fa-key"></i>
                </span>
                <div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                    Change Portal Password
                  </h3>
                  <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600 }}>
                    {pwdTargetUser.name} ({pwdTargetUser.email})
                  </div>
                </div>
              </div>
              <button onClick={() => setShowPasswordModal(false)} style={{ background: "transparent", border: "none", color: "#94a3b8", cursor: "pointer", fontSize: "18px" }}>
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveQuickPassword}>
              <div style={{ marginBottom: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "#334155" }}>New Password *</label>
                  <button
                    type="button"
                    onClick={() => {
                      const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
                      let pwd = "CT@";
                      for (let i = 0; i < 6; i++) {
                        pwd += chars.charAt(Math.floor(Math.random() * chars.length));
                      }
                      setNewPasswordValue(pwd);
                    }}
                    style={{ background: "transparent", border: "none", color: "#0284c7", fontSize: "0.74rem", fontWeight: 700, cursor: "pointer" }}
                  >
                    ⚡ Auto-Generate Strong Key
                  </button>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Enter new portal password..."
                  value={newPasswordValue}
                  onChange={(e) => setNewPasswordValue(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1.5px solid #cbd5e1",
                    fontSize: "0.95rem",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    color: "#1d4ed8",
                    background: "#f8fafc",
                  }}
                  autoFocus
                />
                <div style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "6px", lineHeight: "1.4" }}>
                  ℹ️ This will immediately update the credentials in Firestore `users/{pwdTargetUser.email}` for mobile app &amp; web authentication.
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  style={{ background: "#f1f5f9", border: "1px solid #cbd5e1", color: "#475569", padding: "9px 16px", borderRadius: "8px", fontWeight: 700, cursor: "pointer" }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingPassword}
                  style={{
                    background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                    color: "#ffffff",
                    border: "none",
                    padding: "9px 20px",
                    borderRadius: "8px",
                    fontWeight: 700,
                    cursor: savingPassword ? "not-allowed" : "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  {savingPassword ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-save"></i>}
                  <span>Update Password</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: REGISTER / EDIT PROJECT */}
      {/* ========================================================================= */}
      {showProjectModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(15, 23, 42, 0.6)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
            padding: "16px",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              maxWidth: "500px",
              width: "100%",
              padding: "26px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
              border: "1px solid #e2e8f0",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                {editingProject ? "Edit Project" : "Register New Project"}
              </h3>
              <button onClick={() => setShowProjectModal(false)} style={{ background: "transparent", border: "none", color: "#94a3b8", cursor: "pointer", fontSize: "18px" }}>
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveProject}>
              <div style={{ marginBottom: "12px" }}>
                <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>Project Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ERP Mobile App"
                  value={projName}
                  onChange={(e) => setProjName(e.target.value)}
                  style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem" }}
                />
              </div>

              <div style={{ marginBottom: "12px" }}>
                <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>Client Corporate Email *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. chittortech@gmail.com"
                  value={projClientId}
                  onChange={(e) => setProjClientId(e.target.value)}
                  style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                <div>
                  <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>Current Phase</label>
                  <input
                    type="text"
                    value={projPhase}
                    onChange={(e) => setProjPhase(e.target.value)}
                    style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem" }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>Progress ({projProgress}%)</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={projProgress}
                    onChange={(e) => setProjProgress(e.target.value)}
                    style={{ width: "100%", marginTop: "8px" }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "18px" }}>
                <div>
                  <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>Live Domain</label>
                  <input
                    type="text"
                    placeholder="e.g. app.client.com"
                    value={projDomain}
                    onChange={(e) => setProjDomain(e.target.value)}
                    style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem" }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>Status</label>
                  <select
                    value={projStatus}
                    onChange={(e) => setProjStatus(e.target.value)}
                    style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem", background: "#fff" }}
                  >
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="On Hold">On Hold</option>
                  </select>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button type="button" onClick={() => setShowProjectModal(false)} style={{ background: "#f1f5f9", border: "1px solid #cbd5e1", padding: "9px 16px", borderRadius: "8px", fontWeight: 700, cursor: "pointer" }}>
                  Cancel
                </button>
                <button type="submit" style={{ background: "#0284c7", color: "#fff", border: "none", padding: "9px 20px", borderRadius: "8px", fontWeight: 700, cursor: "pointer" }}>
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: CREATE INVOICE */}
      {/* ========================================================================= */}
      {showInvoiceModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(15, 23, 42, 0.6)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
            padding: "16px",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              maxWidth: "480px",
              width: "100%",
              padding: "26px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
              border: "1px solid #e2e8f0",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                Generate Client Invoice
              </h3>
              <button onClick={() => setShowInvoiceModal(false)} style={{ background: "transparent", border: "none", color: "#94a3b8", cursor: "pointer", fontSize: "18px" }}>
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveInvoice}>
              <div style={{ marginBottom: "12px" }}>
                <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>Invoice Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Milestone 2: Cloud Backend Deployment"
                  value={invTitle}
                  onChange={(e) => setInvTitle(e.target.value)}
                  style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                <div>
                  <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>Client Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. chittortech@gmail.com"
                    value={invClientId}
                    onChange={(e) => setInvClientId(e.target.value)}
                    style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem" }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>Amount (INR) *</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 45000"
                    value={invAmount}
                    onChange={(e) => setInvAmount(e.target.value)}
                    style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem" }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "18px" }}>
                <div>
                  <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>Due Date</label>
                  <input
                    type="date"
                    value={invDueDate}
                    onChange={(e) => setInvDueDate(e.target.value)}
                    style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem" }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>Initial Status</label>
                  <select
                    value={invStatus}
                    onChange={(e) => setInvStatus(e.target.value)}
                    style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.85rem", background: "#fff" }}
                  >
                    <option value="UNPAID">UNPAID</option>
                    <option value="PAID">PAID</option>
                    <option value="OVERDUE">OVERDUE</option>
                  </select>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button type="button" onClick={() => setShowInvoiceModal(false)} style={{ background: "#f1f5f9", border: "1px solid #cbd5e1", padding: "9px 16px", borderRadius: "8px", fontWeight: 700, cursor: "pointer" }}>
                  Cancel
                </button>
                <button type="submit" style={{ background: "#10b981", color: "#fff", border: "none", padding: "9px 20px", borderRadius: "8px", fontWeight: 700, cursor: "pointer" }}>
                  Generate Invoice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
