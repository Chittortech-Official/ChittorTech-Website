"use client";

import React, { useState, useMemo } from "react";

export default function SupportTicketManager({
  tickets = [],
  loadingTickets = false,
  loading = false,
  clients = [],
  projects = [],
  onUpdateTicketStatus,
  onUpdateStatus,
  setConfirmModal,
  setFloatingToast,
}) {
  const actualLoading = loadingTickets || loading;
  const updateFn = onUpdateTicketStatus || onUpdateStatus;
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [selectedTicketForResolve, setSelectedTicketForResolve] = useState(null);
  const [resolutionNoteInput, setResolutionNoteInput] = useState("");
  const [updatingTicketId, setUpdatingTicketId] = useState(null);
  const [dispatchingEmailTicketId, setDispatchingEmailTicketId] = useState(null);

  const copyToClipboard = (text, label = "Copied to clipboard!") => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (setFloatingToast) {
        setFloatingToast(label);
        setTimeout(() => setFloatingToast(""), 3000);
      }
    }
  };

  // Metrics
  const totalCount = tickets.length;
  const openCount = tickets.filter((t) => (t.status || "OPEN").toUpperCase() === "OPEN").length;
  const inProgressCount = tickets.filter((t) => (t.status || "").toUpperCase() === "IN_PROGRESS").length;
  const resolvedCount = tickets.filter((t) => (t.status || "").toUpperCase() === "RESOLVED").length;

  // Filtered tickets
  const filteredTickets = useMemo(() => {
    return tickets.filter((t) => {
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        (t.ticketId && t.ticketId.toLowerCase().includes(q)) ||
        (t.title && t.title.toLowerCase().includes(q)) ||
        (t.description && t.description.toLowerCase().includes(q)) ||
        (t.clientName && t.clientName.toLowerCase().includes(q)) ||
        (t.companyName && t.companyName.toLowerCase().includes(q)) ||
        (t.clientId && t.clientId.toLowerCase().includes(q)) ||
        (t.category && t.category.toLowerCase().includes(q));

      const tStatus = (t.status || "OPEN").toUpperCase();
      const matchStatus =
        statusFilter === "all" ||
        (statusFilter === "OPEN" && tStatus === "OPEN") ||
        (statusFilter === "IN_PROGRESS" && tStatus === "IN_PROGRESS") ||
        (statusFilter === "RESOLVED" && tStatus === "RESOLVED");

      const tPriority = (t.priority || "MEDIUM").toUpperCase();
      const matchPriority = priorityFilter === "all" || tPriority === priorityFilter.toUpperCase();

      return matchSearch && matchStatus && matchPriority;
    });
  }, [tickets, searchQuery, statusFilter, priorityFilter]);

  const handleDispatchEmailAlert = async (ticket) => {
    try {
      setDispatchingEmailTicketId(ticket.ticketId);
      const res = await fetch("/api/tickets/notify-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ticketId: ticket.ticketId,
          clientId: ticket.clientId,
          clientName: ticket.clientName,
          companyName: ticket.companyName,
          title: ticket.title,
          description: ticket.description,
          category: ticket.category,
          priority: ticket.priority,
          phone: ticket.phone || "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        if (setFloatingToast) {
          setFloatingToast("Email alert sent to Kush & Lav for #" + ticket.ticketId);
          setTimeout(() => setFloatingToast(""), 4000);
        } else {
          alert("Email alert sent to Kush & Lav for #" + ticket.ticketId);
        }
      } else {
        alert("Failed to send email alert: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      alert("Error dispatching email alert: " + (err.message || err));
    } finally {
      setDispatchingEmailTicketId(null);
    }
  };

  const handleStatusChange = async (ticket, newStatus, note = "") => {
    const fn = onUpdateTicketStatus || onUpdateStatus || updateFn;
    if (!fn) {
      console.error("SupportTicketManager: No ticket update function provided!");
      alert("Error: Ticket update handler missing.");
      return;
    }
    setUpdatingTicketId(ticket.ticketId);
    try {
      await fn(ticket, newStatus, note);
    } catch (err) {
      console.error("Error in handleStatusChange:", err);
      alert("Failed to update status: " + (err.message || err));
    } finally {
      setUpdatingTicketId(null);
    }
  };

  const openResolveModal = (ticket) => {
    setSelectedTicketForResolve(ticket);
    setResolutionNoteInput(ticket.resolutionNote || "");
  };

  const confirmResolveModal = async () => {
    if (!selectedTicketForResolve) return;
    const ticketToResolve = selectedTicketForResolve;
    const note = resolutionNoteInput;
    setSelectedTicketForResolve(null);
    handleStatusChange(ticketToResolve, "RESOLVED", note);
  };

  const formatTicketDate = (ts) => {
    if (!ts) return "Recently";
    try {
      const d = ts.toDate ? ts.toDate() : ts._seconds ? new Date(ts._seconds * 1000) : new Date(ts);
      return d.toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    } catch {
      return "Recently";
    }
  };

  const getPriorityStyle = (priority) => {
    const p = (priority || "MEDIUM").toUpperCase();
    switch (p) {
      case "URGENT":
        return { bg: "#fee2e2", color: "#dc2626", border: "#fca5a5", icon: "fa-fire" };
      case "HIGH":
        return { bg: "#ffedd5", color: "#ea580c", border: "#fed7aa", icon: "fa-triangle-exclamation" };
      case "LOW":
        return { bg: "#f1f5f9", color: "#64748b", border: "#cbd5e1", icon: "fa-arrow-down" };
      default:
        return { bg: "#e0f2fe", color: "#0284c7", border: "#bae6fd", icon: "fa-layer-group" };
    }
  };

  const getStatusStyle = (status) => {
    const s = (status || "OPEN").toUpperCase();
    switch (s) {
      case "RESOLVED":
        return { bg: "#ecfdf5", color: "#059669", border: "#a7f3d0", label: "Resolved" };
      case "IN_PROGRESS":
        return { bg: "#eff6ff", color: "#2563eb", border: "#bfdbfe", label: "In Progress" };
      default:
        return { bg: "#fef3c7", color: "#b45309", border: "#fde68a", label: "Open" };
    }
  };

  return (
    <div style={{ background: "#ffffff", borderRadius: "18px", border: "1.5px solid #e2e8f0", padding: "24px", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
      {/* Top Header & Search Bar */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "14px", marginBottom: "22px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 800, color: "#0f172a" }}>
              Support Tickets &amp; Client Helpdesk ({filteredTickets.length})
            </h3>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, background: "#f0f9ff", color: "#0284c7", padding: "2px 8px", borderRadius: "12px", border: "1px solid #bae6fd" }}>
              ● Live Sync with Android App
            </span>
            {openCount > 0 && (
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#fee2e2", color: "#dc2626", padding: "2px 8px", borderRadius: "12px", border: "1px solid #fca5a5" }}>
                {openCount} Awaiting Action
              </span>
            )}
          </div>
          <p style={{ margin: "4px 0 0 0", color: "#64748b", fontSize: "0.85rem" }}>
            Real-time client technical inquiries, bug reports, and server maintenance tickets raised via mobile app.
          </p>
        </div>

        {/* Search & Filters */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
          <div style={{ position: "relative" }}>
            <i className="fas fa-search" style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8", fontSize: "0.85rem" }}></i>
            <input
              type="text"
              placeholder="Search by ticket ID, client, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: "8px 14px 8px 34px",
                borderRadius: "10px",
                border: "1.5px solid #cbd5e1",
                fontSize: "0.85rem",
                width: "280px",
                outline: "none",
              }}
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: "10px",
              border: "1.5px solid #cbd5e1",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#334155",
              background: "#ffffff",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <option value="all">All Statuses ({totalCount})</option>
            <option value="OPEN">Open ({openCount})</option>
            <option value="IN_PROGRESS">In Progress ({inProgressCount})</option>
            <option value="RESOLVED">Resolved ({resolvedCount})</option>
          </select>

          {/* Priority Filter */}
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: "10px",
              border: "1.5px solid #cbd5e1",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#334155",
              background: "#ffffff",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <option value="all">All Priorities</option>
            <option value="URGENT">Urgent</option>
            <option value="HIGH">High</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">Low</option>
          </select>
        </div>
      </div>

      {/* Loading State */}
      {loadingTickets && (
        <div style={{ textAlign: "center", padding: "48px 20px" }}>
          <i className="fas fa-spinner fa-spin" style={{ fontSize: "1.8rem", color: "#0284c7" }}></i>
          <p style={{ marginTop: "10px", color: "#64748b", fontWeight: 600 }}>Loading client tickets from Database...</p>
        </div>
      )}

      {/* Empty State */}
      {!loadingTickets && filteredTickets.length === 0 && (
        <div style={{ textAlign: "center", padding: "48px 20px", background: "#f8fafc", borderRadius: "14px", border: "1.5px dashed #cbd5e1" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#e0f2fe", color: "#0284c7", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "12px" }}>
            <i className="fas fa-ticket-simple"></i>
          </div>
          <h4 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 800, color: "#0f172a" }}>No Tickets Found</h4>
          <p style={{ margin: "6px 0 0 0", color: "#64748b", fontSize: "0.85rem" }}>
            {searchQuery || statusFilter !== "all" || priorityFilter !== "all"
              ? "No tickets match your filter criteria."
              : "No support tickets have been submitted by clients yet."}
          </p>
        </div>
      )}

      {/* Tickets Grid */}
      {!loadingTickets && filteredTickets.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "18px" }}>
          {filteredTickets.map((ticket, idx) => {
            const pStyle = getPriorityStyle(ticket.priority);
            const sStyle = getStatusStyle(ticket.status);
            const isUpdating = updatingTicketId === ticket.ticketId;
            const clientMatch = clients.find(
              (c) => (c.email || "").toLowerCase() === (ticket.clientId || "").toLowerCase()
            );
            const clientPhone = ticket.phone || clientMatch?.phone || "";

            return (
              <div
                key={ticket.ticketId || `tkt_${idx}`}
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
                  borderLeft: `5px solid ${ticket.status === "RESOLVED" ? "#10b981" : ticket.status === "IN_PROGRESS" ? "#2563eb" : "#f59e0b"}`,
                }}
              >
                <div>
                  {/* Card Header: Ticket ID, Priority, Status */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span
                        style={{
                          fontFamily: "monospace",
                          fontSize: "0.85rem",
                          fontWeight: 800,
                          color: "#0f172a",
                          background: "#f1f5f9",
                          padding: "3px 8px",
                          borderRadius: "6px",
                          border: "1px solid #cbd5e1",
                        }}
                      >
                        #{ticket.ticketId || "TKT"}
                      </span>
                      <button
                        onClick={() => copyToClipboard(ticket.ticketId, "Ticket ID copied!")}
                        style={{ background: "transparent", border: "none", color: "#94a3b8", cursor: "pointer", fontSize: "0.78rem" }}
                        title="Copy Ticket ID"
                      >
                        <i className="fas fa-copy"></i>
                      </button>

                      {/* Priority Badge */}
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 800,
                          padding: "3px 9px",
                          borderRadius: "8px",
                          background: pStyle.bg,
                          color: pStyle.color,
                          border: `1px solid ${pStyle.border}`,
                          textTransform: "uppercase",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "5px",
                          minWidth: "78px",
                          boxSizing: "border-box",
                        }}
                      >
                        <i className={`fas ${pStyle.icon}`} style={{ fontSize: "0.65rem" }}></i>
                        {ticket.priority || "MEDIUM"}
                      </span>
                    </div>

                    {/* Status Badge */}
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        padding: "3px 9px",
                        borderRadius: "8px",
                        background: sStyle.bg,
                        color: sStyle.color,
                        border: `1px solid ${sStyle.border}`,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "78px",
                        boxSizing: "border-box",
                      }}
                    >
                      ● {sStyle.label}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div style={{ marginBottom: "10px" }}>
                    <div style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, color: "#0284c7", background: "#f0f9ff", border: "1px solid #bae6fd", padding: "1px 7px", borderRadius: "4px", marginBottom: "4px" }}>
                      {ticket.category || "General Support"}
                    </div>
                    <h4 style={{ margin: "2px 0 0 0", fontSize: "1.05rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.35 }}>
                      {ticket.title || "Support Request"}
                    </h4>
                  </div>

                  {/* Description Box */}
                  <div
                    style={{
                      background: "#f8fafc",
                      borderRadius: "10px",
                      padding: "10px 12px",
                      border: "1px solid #f1f5f9",
                      marginBottom: "12px",
                      fontSize: "0.84rem",
                      color: "#334155",
                      lineHeight: 1.45,
                      maxHeight: "100px",
                      overflowY: "auto",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {ticket.description || "No additional description provided."}
                  </div>

                  {/* Client Info Bar */}
                  <div
                    style={{
                      background: "#ffffff",
                      borderRadius: "10px",
                      padding: "8px 10px",
                      border: "1px solid #e2e8f0",
                      marginBottom: "12px",
                      fontSize: "0.78rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 800, color: "#0f172a" }}>
                        <i className="fas fa-user" style={{ marginRight: "6px", color: "#0284c7" }}></i>
                        {ticket.clientName || clientMatch?.name || "Client"}
                        {ticket.companyName && (
                          <span style={{ color: "#64748b", fontWeight: 600 }}> &middot; {ticket.companyName}</span>
                        )}
                      </div>
                      <div style={{ color: "#64748b", fontSize: "0.74rem", marginTop: "2px" }}>
                        <i className="fas fa-envelope" style={{ marginRight: "4px" }}></i>
                        {ticket.clientId}
                      </div>
                    </div>

                    {clientPhone && (
                      <a
                        href={`https://wa.me/${clientPhone.replace(/\D/g, "")}?text=${encodeURIComponent(
                          `Hello ${ticket.clientName || ""}, this is ChittorTech Technical Support regarding your ticket #${ticket.ticketId} ("${ticket.title}").`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: "#ecfdf5",
                          border: "1px solid #a7f3d0",
                          color: "#059669",
                          borderRadius: "8px",
                          padding: "5px 9px",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                        title="Chat on WhatsApp"
                      >
                        <i className="fab fa-whatsapp" style={{ fontSize: "0.85rem" }}></i>
                        <span>Reply</span>
                      </a>
                    )}
                  </div>

                  {/* Resolution Note if resolved */}
                  {ticket.resolutionNote && (
                    <div
                      style={{
                        background: "#ecfdf5",
                        border: "1px solid #a7f3d0",
                        borderRadius: "8px",
                        padding: "8px 10px",
                        marginBottom: "12px",
                        fontSize: "0.78rem",
                        color: "#065f46",
                      }}
                    >
                      <strong style={{ color: "#047857" }}>
                        <i className="fas fa-check-double" style={{ marginRight: "5px" }}></i>Resolution:
                      </strong>{" "}
                      {ticket.resolutionNote}
                    </div>
                  )}

                  {/* Timestamps */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.72rem", color: "#94a3b8", marginBottom: "12px" }}>
                    <span>
                      <i className="fas fa-clock" style={{ marginRight: "4px" }}></i>
                      Raised: {formatTicketDate(ticket.createdAt)}
                    </span>
                    {ticket.projectId && (
                      <span title="Linked Project ID">
                        <i className="fas fa-diagram-project" style={{ marginRight: "4px" }}></i>
                        {ticket.projectId}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Actions Bar */}
                <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "12px", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <button
                    onClick={() => handleDispatchEmailAlert(ticket)}
                    disabled={dispatchingEmailTicketId === ticket.ticketId}
                    title="Dispatch email alert to Kush & Lav"
                    style={{
                      padding: "8px 12px",
                      borderRadius: "8px",
                      border: "1px solid #fed7aa",
                      background: "#fff7ed",
                      color: "#c2410c",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <i className={dispatchingEmailTicketId === ticket.ticketId ? "fas fa-spinner fa-spin" : "fas fa-envelope"} style={{ fontSize: "0.75rem" }}></i>
                    <span>{dispatchingEmailTicketId === ticket.ticketId ? "Dispatching..." : "Email Kush & Lav"}</span>
                  </button>
                  {ticket.status !== "IN_PROGRESS" && ticket.status !== "RESOLVED" && (
                    <button
                      onClick={() => handleStatusChange(ticket, "IN_PROGRESS")}
                      disabled={isUpdating}
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        borderRadius: "8px",
                        border: "1px solid #bfdbfe",
                        background: "#eff6ff",
                        color: "#1d4ed8",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                      }}
                    >
                      <i className="fas fa-play" style={{ fontSize: "0.7rem" }}></i>
                      <span>Mark In Progress</span>
                    </button>
                  )}

                  {ticket.status !== "RESOLVED" ? (
                    <button
                      onClick={() => openResolveModal(ticket)}
                      disabled={isUpdating}
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        borderRadius: "8px",
                        border: "none",
                        background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                        color: "#ffffff",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        boxShadow: "0 2px 6px rgba(16, 185, 129, 0.25)",
                      }}
                    >
                      <i className="fas fa-check" style={{ fontSize: "0.75rem" }}></i>
                      <span>Resolve Ticket</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleStatusChange(ticket, "OPEN", "")}
                      disabled={isUpdating}
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        borderRadius: "8px",
                        border: "1px solid #cbd5e1",
                        background: "#f8fafc",
                        color: "#475569",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                      }}
                    >
                      <i className="fas fa-rotate-left" style={{ fontSize: "0.75rem" }}></i>
                      <span>Reopen Ticket</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Resolve Ticket Dialog Modal */}
      {selectedTicketForResolve && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(15, 23, 42, 0.65)",
            backdropFilter: "blur(4px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "18px",
              maxWidth: "520px",
              width: "100%",
              padding: "24px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              border: "1px solid #e2e8f0",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#ecfdf5", color: "#10b981", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-check-double" style={{ fontSize: "1.1rem" }}></i>
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 800, color: "#0f172a" }}>
                    Resolve Support Ticket
                  </h4>
                  <span style={{ fontSize: "0.76rem", color: "#64748b", fontFamily: "monospace" }}>
                    #{selectedTicketForResolve.ticketId} &middot; {selectedTicketForResolve.clientName}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedTicketForResolve(null)}
                style={{ background: "transparent", border: "none", color: "#94a3b8", cursor: "pointer", fontSize: "1.1rem" }}
              >
                &times;
              </button>
            </div>

            <div style={{ background: "#f8fafc", padding: "10px 12px", borderRadius: "10px", border: "1px solid #f1f5f9", marginBottom: "16px", fontSize: "0.85rem", color: "#334155" }}>
              <div style={{ fontWeight: 700, color: "#0f172a", marginBottom: "3px" }}>
                {selectedTicketForResolve.title}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#64748b" }}>
                {selectedTicketForResolve.description}
              </div>
            </div>

            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#334155", marginBottom: "6px" }}>
              Resolution Summary / Note for Client (Sent to Mobile App):
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Issue resolved: Server configuration restarted and SSL certificate renewed successfully."
              value={resolutionNoteInput}
              onChange={(e) => setResolutionNoteInput(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "10px",
                border: "1.5px solid #cbd5e1",
                fontSize: "0.85rem",
                outline: "none",
                marginBottom: "18px",
                fontFamily: "inherit",
                resize: "vertical",
              }}
            />

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button
                onClick={() => setSelectedTicketForResolve(null)}
                style={{
                  padding: "9px 16px",
                  borderRadius: "10px",
                  border: "1px solid #cbd5e1",
                  background: "#ffffff",
                  color: "#475569",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={confirmResolveModal}
                style={{
                  padding: "9px 18px",
                  borderRadius: "10px",
                  border: "none",
                  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  color: "#ffffff",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(16, 185, 129, 0.25)",
                }}
              >
                Confirm Resolution
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
