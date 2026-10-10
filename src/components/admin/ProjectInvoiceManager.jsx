"use client";

import React, { useState, useEffect, useMemo } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

export default function ProjectInvoiceManager() {
  const [activeSubTab, setActiveSubTab] = useState("projects"); // "projects" | "invoices"
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

  // Invoice Form
  const [invClientId, setInvClientId] = useState("");
  const [invProjName, setInvProjName] = useState("");
  const [invTitle, setInvTitle] = useState("");
  const [invAmount, setInvAmount] = useState("");
  const [invStatus, setInvStatus] = useState("UNPAID");
  const [invDueDate, setInvDueDate] = useState("");

  const [actionFeedback, setActionFeedback] = useState("");

  // 1. Sync Projects Live from Firestore
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

  // 2. Sync Invoices Live from Firestore
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

  // Save / Update Project
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
        setActionFeedback(`New project "${projName}" registered in Mobile App!`);
      }
      closeProjectModal();
      setTimeout(() => setActionFeedback(""), 4500);
    } catch (err) {
      alert("Error saving project: " + err.message);
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

  const handleDeleteProject = async (id, name) => {
    if (!confirm(`Are you sure you want to delete project "${name}"?`)) return;
    try {
      await deleteDoc(doc(db, "projects", id));
      setActionFeedback(`Project "${name}" removed.`);
      setTimeout(() => setActionFeedback(""), 3500);
    } catch (err) {
      alert("Error deleting project: " + err.message);
    }
  };

  // Issue Invoice
  const handleSaveInvoice = async (e) => {
    e.preventDefault();
    if (!invClientId.trim() || !invAmount) {
      alert("Please provide Client Email and Invoice Amount.");
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const invNum = `INV-2026-${randomNum}`;

    const payload = {
      invoiceId: invNum,
      clientId: invClientId.trim().toLowerCase(),
      projectId: invProjName.trim() || "ChittorTech Enterprise Sprint",
      title: invTitle.trim() || "Project Milestone Deliverable",
      amount: Number(invAmount) || 0,
      status: invStatus,
      dueDate: invDueDate || new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0],
      createdAt: serverTimestamp(),
      createdDateString: new Date().toLocaleDateString("en-IN"),
    };

    try {
      const docKey = "inv_" + Date.now().toString(36);
      await setDoc(doc(db, "invoices", docKey), payload);
      setShowInvoiceModal(false);
      setInvClientId("");
      setInvProjName("");
      setInvTitle("");
      setInvAmount("");
      setInvDueDate("");
      setActionFeedback(`Invoice ${invNum} issued! Client can view & pay in Mobile App.`);
      setTimeout(() => setActionFeedback(""), 4500);
    } catch (err) {
      alert("Error generating invoice: " + err.message);
    }
  };

  const toggleInvoiceStatus = async (inv) => {
    const newStatus = inv.status === "PAID" ? "UNPAID" : "PAID";
    try {
      await updateDoc(doc(db, "invoices", inv.id), { status: newStatus });
      setActionFeedback(`Invoice ${inv.invoiceId || ""} marked as ${newStatus}!`);
      setTimeout(() => setActionFeedback(""), 3000);
    } catch (err) {
      alert("Error updating status: " + err.message);
    }
  };

  const handleDeleteInvoice = async (id, invNum) => {
    if (!confirm(`Delete invoice ${invNum}?`)) return;
    try {
      await deleteDoc(doc(db, "invoices", id));
      setActionFeedback(`Invoice removed.`);
      setTimeout(() => setActionFeedback(""), 3000);
    } catch (err) {
      alert("Error deleting invoice: " + err.message);
    }
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
          ) : (
            <button
              onClick={() => setShowInvoiceModal(true)}
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
          )}
        </div>
      </div>

      {/* KPI Cards Row (Contextual to Projects or Invoices) */}
      {activeSubTab === "projects" ? (
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
                <i className="fas fa-badge-check"></i>
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
                      onClick={() => handleDeleteProject(p.id, p.name)}
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
                onClick={() => setShowInvoiceModal(true)}
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
                          {inv.invoiceId || "INV-2026-X"}
                        </span>
                      </td>
                      <td style={{ padding: "14px" }}>
                        <div style={{ fontWeight: 700, color: "#0f172a" }}>{inv.clientId}</div>
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
                        <div style={{ display: "inline-flex", gap: "6px" }}>
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
                            onClick={() => handleDeleteInvoice(inv.id, inv.invoiceId)}
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

      {/* INVOICE MODAL */}
      {showInvoiceModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: "20px" }}>
          <div style={{ background: "#ffffff", borderRadius: "20px", width: "100%", maxWidth: "540px", padding: "28px", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid #f1f5f9", paddingBottom: "14px" }}>
              <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 800, color: "#0f172a" }}>
                🧾 Issue New Client Invoice
              </h3>
              <button onClick={() => setShowInvoiceModal(false)} style={{ background: "transparent", border: "none", fontSize: "1.2rem", cursor: "pointer", color: "#94a3b8" }}>
                &times;
              </button>
            </div>

            <form onSubmit={handleSaveInvoice}>
              <div style={{ marginBottom: "14px" }}>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>Client Email / UID *</label>
                <input
                  type="email"
                  placeholder="client@example.com"
                  value={invClientId}
                  onChange={(e) => setInvClientId(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", boxSizing: "border-box" }}
                  required
                />
              </div>

              <div style={{ marginBottom: "14px" }}>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>Associated Project Name</label>
                <input
                  type="text"
                  placeholder="e.g. ERP Logistics System"
                  value={invProjName}
                  onChange={(e) => setInvProjName(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", boxSizing: "border-box" }}
                />
              </div>

              <div style={{ marginBottom: "14px" }}>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>Milestone / Item Description *</label>
                <input
                  type="text"
                  placeholder="e.g. Sprint 2: API Gateway & Payment Integration"
                  value={invTitle}
                  onChange={(e) => setInvTitle(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", boxSizing: "border-box" }}
                  required
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>Amount (₹ INR) *</label>
                  <input
                    type="number"
                    placeholder="e.g. 50000"
                    value={invAmount}
                    onChange={(e) => setInvAmount(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", boxSizing: "border-box" }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>Status</label>
                  <select
                    value={invStatus}
                    onChange={(e) => setInvStatus(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", background: "#ffffff", boxSizing: "border-box" }}
                  >
                    <option value="UNPAID">UNPAID</option>
                    <option value="PAID">PAID</option>
                    <option value="OVERDUE">OVERDUE</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>Due Date</label>
                <input
                  type="date"
                  value={invDueDate}
                  onChange={(e) => setInvDueDate(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", boxSizing: "border-box" }}
                />
              </div>

              <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                <button type="button" onClick={() => setShowInvoiceModal(false)} style={{ padding: "10px 18px", borderRadius: "8px", border: "1px solid #cbd5e1", background: "#f8fafc", color: "#475569", fontWeight: 700, cursor: "pointer" }}>
                  Cancel
                </button>
                <button type="submit" style={{ padding: "10px 22px", borderRadius: "8px", background: "#10b981", color: "#ffffff", border: "none", fontWeight: 700, cursor: "pointer" }}>
                  Issue Invoice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
