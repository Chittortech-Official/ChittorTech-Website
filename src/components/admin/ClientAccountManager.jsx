"use client";

import React, { useState, useMemo } from "react";
import {
  createClientAccount,
  resendClientWelcomeEmail,
  deleteClientAccount,
} from "@/lib/leadService";

function generateSecurePassword() {
  const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%&*";
  let pass = "";
  for (let i = 0; i < 10; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass;
}

export default function ClientAccountManager({
  clients = [],
  loadingClients = false,
  projects = [],
  invoices = [],
  onCreateProject,
  onCreateInvoice,
  setConfirmModal,
  setFloatingToast,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showClientModal, setShowClientModal] = useState(false);
  const [editingClient, setEditingClient] = useState(null);

  // Form states
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPassword, setClientPassword] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [sendWelcomeEmail, setSendWelcomeEmail] = useState(true);
  const [showFormPassword, setShowFormPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Card-level password visibility toggles
  const [visiblePasswords, setVisiblePasswords] = useState({});
  const [resendingEmailId, setResendingEmailId] = useState(null);

  const togglePasswordVisibility = (clientId) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [clientId]: !prev[clientId],
    }));
  };

  const copyToClipboard = (text, label = "Copied to clipboard!") => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (setFloatingToast) {
        setFloatingToast(label);
        setTimeout(() => setFloatingToast(""), 3000);
      }
    }
  };

  const openAddClientModal = () => {
    setEditingClient(null);
    setClientName("");
    setClientEmail("");
    setClientPassword(generateSecurePassword());
    setClientCompany("");
    setClientPhone("");
    setSendWelcomeEmail(true);
    setShowFormPassword(true);
    setShowClientModal(true);
  };

  const openEditClientModal = (c) => {
    setEditingClient(c);
    setClientName(c.name || "");
    setClientEmail(c.email || "");
    setClientPassword(c.password || "");
    setClientCompany(c.companyName || "");
    setClientPhone(c.phone || "");
    setSendWelcomeEmail(false);
    setShowFormPassword(true);
    setShowClientModal(true);
  };

  const closeClientModal = () => {
    setShowClientModal(false);
    setEditingClient(null);
  };

  const handleSaveClient = async (e) => {
    e.preventDefault();
    if (!clientEmail.trim() || !clientEmail.includes("@")) {
      alert("Please enter a valid corporate email address.");
      return;
    }
    if (!clientName.trim()) {
      alert("Please enter client full name.");
      return;
    }
    if (!clientPassword.trim()) {
      alert("Please provide or generate an account password.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await createClientAccount({
        isUpdate: !!editingClient,
        email: clientEmail.trim().toLowerCase(),
        name: clientName.trim(),
        password: clientPassword.trim(),
        companyName: clientCompany.trim(),
        phone: clientPhone.trim(),
        sendWelcomeEmail: sendWelcomeEmail,
      });

      setSubmitting(false);

      if (res && res.status === "success") {
        closeClientModal();
        if (setConfirmModal) {
          setConfirmModal({
            isSuccess: true,
            title: editingClient ? "Client Details Updated!" : "Client Registered Successfully!",
            message: `${res.msg} ${
              res.emailDispatched
                ? "Branded welcome email with login credentials has been dispatched to " + clientEmail + "."
                : ""
            }`,
            confirmText: "Done",
          });
        }
      } else {
        alert(res?.msg || "Failed to save client account.");
      }
    } catch (err) {
      setSubmitting(false);
      alert("Error saving client: " + err.message);
    }
  };

  const handleResendWelcome = async (client) => {
    setResendingEmailId(client.id);
    try {
      const res = await resendClientWelcomeEmail(client.email);
      setResendingEmailId(null);
      if (res && res.status === "success") {
        if (setFloatingToast) {
          setFloatingToast(`Welcome email resent to ${client.email}!`);
          setTimeout(() => setFloatingToast(""), 3500);
        }
      } else {
        alert(res?.msg || "Failed to resend welcome email.");
      }
    } catch (err) {
      setResendingEmailId(null);
      alert("Error resending email: " + err.message);
    }
  };

  const handleDeleteClient = (client) => {
    if (!setConfirmModal) return;
    setConfirmModal({
      title: "Delete Client Account?",
      message: `Are you sure you want to delete the account for "${client.name}" (${client.email})? They will no longer be able to log in to the ChittorTech Mobile App. This action cannot be undone.`,
      icon: "fas fa-user-slash",
      iconBg: "#fee2e2",
      iconColor: "#dc2626",
      confirmText: "Yes, Delete Client",
      confirmBg: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      cancelText: "Cancel",
      onConfirm: async () => {
        try {
          const res = await deleteClientAccount(client.email);
          if (res && res.status === "success") {
            if (setFloatingToast) {
              setFloatingToast(`Client "${client.name}" removed from database.`);
              setTimeout(() => setFloatingToast(""), 3500);
            }
          } else {
            alert(res?.msg || "Failed to delete client.");
          }
        } catch (err) {
          alert("Error deleting client: " + err.message);
        }
      },
    });
  };

  // Filter clients
  const filteredClients = useMemo(() => {
    return clients.filter((c) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        (c.name && c.name.toLowerCase().includes(q)) ||
        (c.email && c.email.toLowerCase().includes(q)) ||
        (c.companyName && c.companyName.toLowerCase().includes(q)) ||
        (c.phone && c.phone.toLowerCase().includes(q))
      );
    });
  }, [clients, searchQuery]);

  return (
    <div style={{ background: "#ffffff", borderRadius: "18px", border: "1.5px solid #e2e8f0", padding: "24px", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
      {/* Top Header & Search */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "14px", marginBottom: "22px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 800, color: "#0f172a" }}>
              Corporate Client Accounts &amp; Credential Vault ({filteredClients.length})
            </h3>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, background: "#ecfdf5", color: "#059669", padding: "2px 8px", borderRadius: "12px", border: "1px solid #a7f3d0" }}>
              ● Live Sync with Android App
            </span>
          </div>
          <p style={{ margin: "4px 0 0", fontSize: "0.82rem", color: "#64748b" }}>
            Add client accounts with email &amp; password. A welcome email is automatically dispatched from <strong>business@chittortech.in</strong> so clients can log in immediately.
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ position: "relative" }}>
            <i className="fas fa-search" style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8", fontSize: "0.78rem" }}></i>
            <input
              type="text"
              placeholder="Search clients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ padding: "8px 12px 8px 30px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.82rem", outline: "none", width: "200px" }}
            />
          </div>

          <button
            onClick={openAddClientModal}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "9px 18px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #0284c7, #0369a1)",
              color: "#ffffff",
              border: "none",
              fontWeight: 700,
              fontSize: "0.85rem",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(2, 132, 199, 0.25)",
            }}
          >
            <i className="fas fa-user-plus"></i>
            <span>Add New Client</span>
          </button>
        </div>
      </div>

      {/* Loading state */}
      {loadingClients ? (
        <div style={{ textAlign: "center", padding: "40px", color: "#64748b" }}>
          <i className="fas fa-spinner fa-spin" style={{ fontSize: "1.5rem", color: "#0284c7", marginBottom: "8px" }}></i>
          <div>Synchronizing client database...</div>
        </div>
      ) : filteredClients.length === 0 ? (
        <div style={{ textAlign: "center", padding: "48px 20px", color: "#94a3b8" }}>
          <i className="fas fa-users" style={{ fontSize: "2.6rem", marginBottom: "12px", color: "#cbd5e1" }}></i>
          <p style={{ margin: 0, fontWeight: 700, color: "#64748b", fontSize: "1.05rem" }}>No Client Accounts Found</p>
          <p style={{ margin: "4px 0 16px", fontSize: "0.85rem" }}>Add your first corporate client to enable their mobile app portal access.</p>
          <button
            onClick={openAddClientModal}
            style={{ padding: "9px 18px", borderRadius: "8px", background: "#0284c7", color: "#ffffff", border: "none", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer" }}
          >
            + Register First Client
          </button>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(390px, 1fr))", gap: "18px" }}>
          {filteredClients.map((client) => {
            const clientProjects = projects.filter(
              (p) => (p.clientId || "").toLowerCase() === client.email.toLowerCase()
            );
            const clientInvoices = invoices.filter(
              (i) => (i.clientId || "").toLowerCase() === client.email.toLowerCase()
            );
            const isPassVisible = !!visiblePasswords[client.id];
            const isResending = resendingEmailId === client.id;

            return (
              <div
                key={client.id}
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  border: "1.5px solid #e2e8f0",
                  padding: "20px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.2s ease",
                }}
              >
                <div>
                  {/* Top card row: Name, Avatar, Status */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "12px",
                          background: "linear-gradient(135deg, #0284c7, #0369a1)",
                          color: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 800,
                          fontSize: "1.1rem",
                          boxShadow: "0 4px 10px rgba(2, 132, 199, 0.25)",
                        }}
                      >
                        {client.name ? client.name.charAt(0).toUpperCase() : "C"}
                      </div>
                      <div>
                        <h4 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 800, color: "#0f172a" }}>
                          {client.name}
                        </h4>
                        <div style={{ color: "#0284c7", fontSize: "0.78rem", fontWeight: 600 }}>
                          {client.companyName || "Corporate Client"}
                        </div>
                      </div>
                    </div>

                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        padding: "3px 8px",
                        borderRadius: "20px",
                        background: "#ecfdf5",
                        color: "#059669",
                        border: "1px solid #a7f3d0",
                      }}
                    >
                      ● App Active
                    </span>
                  </div>

                  {/* Email & Phone Details */}
                  <div style={{ background: "#f8fafc", borderRadius: "10px", padding: "10px 12px", border: "1px solid #f1f5f9", marginBottom: "12px", fontSize: "0.8rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                      <span style={{ color: "#64748b", fontWeight: 600 }}>
                        <i className="fas fa-envelope" style={{ marginRight: "6px", color: "#0284c7" }}></i>Email:
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ fontWeight: 700, color: "#0f172a" }}>{client.email}</span>
                        <button
                          onClick={() => copyToClipboard(client.email, "Email copied!")}
                          style={{ background: "transparent", border: "none", color: "#94a3b8", cursor: "pointer", fontSize: "0.75rem" }}
                          title="Copy Email"
                        >
                          <i className="fas fa-copy"></i>
                        </button>
                      </div>
                    </div>

                    {client.phone && (
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ color: "#64748b", fontWeight: 600 }}>
                          <i className="fas fa-phone" style={{ marginRight: "6px", color: "#10b981" }}></i>Phone:
                        </span>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span style={{ fontWeight: 600, color: "#334155" }}>{client.phone}</span>
                          <a
                            href={`https://wa.me/${client.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
                              `Hello ${client.name}, this is ChittorTech IT Systems regarding your Client Portal credentials and project updates.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#10b981", fontSize: "0.85rem" }}
                            title="Open WhatsApp"
                          >
                            <i className="fab fa-whatsapp"></i>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Password & Security Credentials Box */}
                  <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "10px", padding: "10px 12px", marginBottom: "14px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <i className="fas fa-key" style={{ color: "#0284c7", fontSize: "0.8rem" }}></i>
                        <span style={{ fontSize: "0.76rem", fontWeight: 700, color: "#1e3a8a", textTransform: "uppercase" }}>Portal Password</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontFamily: "monospace", fontSize: "0.88rem", fontWeight: 800, color: "#0f172a" }}>
                          {isPassVisible ? client.password : "••••••••••••"}
                        </span>
                        <button
                          onClick={() => togglePasswordVisibility(client.id)}
                          style={{ background: "transparent", border: "none", color: "#0284c7", cursor: "pointer", fontSize: "0.8rem" }}
                          title={isPassVisible ? "Hide Password" : "Show Password"}
                        >
                          <i className={`fas ${isPassVisible ? "fa-eye-slash" : "fa-eye"}`}></i>
                        </button>
                        <button
                          onClick={() => copyToClipboard(client.password, "Password copied!")}
                          style={{ background: "transparent", border: "none", color: "#0284c7", cursor: "pointer", fontSize: "0.8rem" }}
                          title="Copy Password"
                        >
                          <i className="fas fa-copy"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Linked Project / Invoice Badges */}
                  <div style={{ display: "flex", gap: "8px", marginBottom: "14px" }}>
                    <div style={{ flex: 1, background: "#f1f5f9", borderRadius: "8px", padding: "6px 10px", textAlign: "center" }}>
                      <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>Projects</div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0f172a" }}>{clientProjects.length}</div>
                    </div>
                    <div style={{ flex: 1, background: "#f1f5f9", borderRadius: "8px", padding: "6px 10px", textAlign: "center" }}>
                      <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>Invoices</div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0f172a" }}>{clientInvoices.length}</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Action Bar */}
                <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
                  <button
                    onClick={() => handleResendWelcome(client)}
                    disabled={isResending}
                    style={{
                      background: "#f0f9ff",
                      color: "#0284c7",
                      border: "1px solid #bae6fd",
                      borderRadius: "6px",
                      padding: "5px 10px",
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      cursor: isResending ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                    title="Resend official welcome credentials email"
                  >
                    <i className={`fas ${isResending ? "fa-spinner fa-spin" : "fa-paper-plane"}`}></i>
                    <span>{isResending ? "Resending..." : "Resend Email"}</span>
                  </button>

                  <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                    {onCreateProject && (
                      <button
                        onClick={() => onCreateProject(client.email)}
                        style={{
                          background: "#eff6ff",
                          color: "#2563eb",
                          border: "1px solid #bfdbfe",
                          borderRadius: "6px",
                          padding: "5px 8px",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                        title="Create Project for this client"
                      >
                        + Project
                      </button>
                    )}

                    {onCreateInvoice && (
                      <button
                        onClick={() => onCreateInvoice(client.email)}
                        style={{
                          background: "#ecfdf5",
                          color: "#059669",
                          border: "1px solid #a7f3d0",
                          borderRadius: "6px",
                          padding: "5px 8px",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                        title="Issue Invoice for this client"
                      >
                        + Invoice
                      </button>
                    )}

                    <button
                      onClick={() => openEditClientModal(client)}
                      style={{
                        background: "#f1f5f9",
                        color: "#334155",
                        border: "1px solid #cbd5e1",
                        borderRadius: "6px",
                        padding: "5px 8px",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                      title="Edit Client"
                    >
                      <i className="fas fa-pen"></i>
                    </button>

                    <button
                      onClick={() => handleDeleteClient(client)}
                      style={{
                        background: "#fee2e2",
                        color: "#ef4444",
                        border: "none",
                        borderRadius: "6px",
                        padding: "5px 8px",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                      title="Delete Client"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ADD / EDIT CLIENT MODAL */}
      {showClientModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: "20px" }}>
          <div style={{ background: "#ffffff", borderRadius: "20px", width: "100%", maxWidth: "560px", padding: "28px", boxShadow: "0 20px 40px rgba(0,0,0,0.2)", maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", borderBottom: "1px solid #f1f5f9", paddingBottom: "12px" }}>
              <div>
                <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 800, color: "#0f172a" }}>
                  {editingClient ? "✏️ Edit Client Credentials" : "➕ Register Corporate Client"}
                </h3>
                <p style={{ margin: "2px 0 0", fontSize: "0.78rem", color: "#64748b" }}>
                  Credentials will sync with Firestore and the Android mobile app in real-time.
                </p>
              </div>
              <button onClick={closeClientModal} style={{ background: "transparent", border: "none", fontSize: "1.2rem", cursor: "pointer", color: "#94a3b8" }}>
                &times;
              </button>
            </div>

            <form onSubmit={handleSaveClient}>
              <div style={{ marginBottom: "14px" }}>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>Client Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Vikramaditya Rathore"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", boxSizing: "border-box" }}
                  required
                />
              </div>

              <div style={{ marginBottom: "14px" }}>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>Corporate Email *</label>
                <input
                  type="email"
                  placeholder="e.g. vikram@rathorelogistics.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  disabled={!!editingClient}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", boxSizing: "border-box", background: editingClient ? "#f8fafc" : "#ffffff" }}
                  required
                />
                {editingClient && (
                  <span style={{ fontSize: "0.72rem", color: "#64748b" }}>Email cannot be changed once registered (serves as unique Firestore document ID).</span>
                )}
              </div>

              {/* Password with generator */}
              <div style={{ marginBottom: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1e293b" }}>Portal Password *</label>
                  <button
                    type="button"
                    onClick={() => setClientPassword(generateSecurePassword())}
                    style={{ background: "#f0f9ff", border: "1px solid #bae6fd", color: "#0284c7", borderRadius: "6px", padding: "2px 8px", fontSize: "0.72rem", fontWeight: 700, cursor: "pointer" }}
                  >
                    🎲 Generate Password
                  </button>
                </div>
                <div style={{ position: "relative" }}>
                  <input
                    type={showFormPassword ? "text" : "password"}
                    placeholder="Enter or generate password"
                    value={clientPassword}
                    onChange={(e) => setClientPassword(e.target.value)}
                    style={{ width: "100%", padding: "10px 40px 10px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", fontFamily: "monospace", boxSizing: "border-box" }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowFormPassword(!showFormPassword)}
                    style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "transparent", border: "none", color: "#94a3b8", cursor: "pointer" }}
                  >
                    <i className={`fas ${showFormPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                  </button>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>Company / Organization</label>
                  <input
                    type="text"
                    placeholder="e.g. Rathore Logistics Pvt Ltd"
                    value={clientCompany}
                    onChange={(e) => setClientCompany(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>Phone / WhatsApp</label>
                  <input
                    type="text"
                    placeholder="e.g. +91 98290 12345"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "0.88rem", boxSizing: "border-box" }}
                  />
                </div>
              </div>

              {/* Welcome Email Checkbox */}
              <div style={{ background: "#f0fdf4", border: "1.5px solid #bbf7d0", borderRadius: "10px", padding: "12px 14px", marginBottom: "20px" }}>
                <label style={{ display: "flex", alignItems: "flex-start", gap: "10px", cursor: "pointer", fontSize: "0.82rem", color: "#166534", fontWeight: 600 }}>
                  <input
                    type="checkbox"
                    checked={sendWelcomeEmail}
                    onChange={(e) => setSendWelcomeEmail(e.target.checked)}
                    style={{ marginTop: "2px", accentColor: "#16a34a", width: "16px", height: "16px" }}
                  />
                  <div>
                    <strong>Dispatch Branded Welcome Email with Login Credentials</strong>
                    <div style={{ fontSize: "0.74rem", color: "#15803d", marginTop: "2px", fontWeight: 500 }}>
                      Sends official welcome message with Portal ID, Password &amp; mobile app login guide from <code>business@chittortech.in</code>.
                    </div>
                  </div>
                </label>
              </div>

              <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                <button
                  type="button"
                  onClick={closeClientModal}
                  style={{ padding: "10px 18px", borderRadius: "8px", border: "1px solid #cbd5e1", background: "#f8fafc", color: "#475569", fontWeight: 700, cursor: "pointer" }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    padding: "10px 22px",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #0284c7, #0369a1)",
                    color: "#ffffff",
                    border: "none",
                    fontWeight: 700,
                    cursor: submitting ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  {submitting && <i className="fas fa-spinner fa-spin"></i>}
                  <span>{submitting ? "Saving & Sending..." : editingClient ? "Update Client" : "Register & Dispatch Email"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
