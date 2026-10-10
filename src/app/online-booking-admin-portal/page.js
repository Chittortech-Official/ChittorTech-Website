"use client";
import React, { useState } from "react";
import "../../../public/assets/css/premium-products.css";

export default function Page() {
  const [guestReq, setGuestReq] = useState({ name: "", phone: "", property: "Grand Heritage Resort", roomType: "Presidential Suite", date: "" });
  const [portalAlert, setPortalAlert] = useState(null);
  
  // Real-time terminal log simulator
  const [logs, setLogs] = useState([
    { time: "12:14:02", text: "WebSocket listener initialized on port :8080", type: "system" },
    { time: "12:14:03", text: "Multi-property master hub connected: 3 properties online", type: "system" },
    { time: "12:14:15", text: "Webhook receiver status: ACTIVE (0ms latency)", type: "success" }
  ]);

  const handlePortalSubmit = (e) => {
    e.preventDefault();
    const bookingId = "HUB-" + Math.floor(10000 + Math.random() * 90000);
    const newAlert = { ...guestReq, id: bookingId, status: "Pending approval" };
    setPortalAlert(newAlert);
    
    // Append logs
    setLogs(prev => [
      ...prev,
      { time: new Date().toLocaleTimeString(), text: `[WebSocket] Connection from guest client established`, type: "info" },
      { time: new Date().toLocaleTimeString(), text: `[Broadcast] Received reservation request for ${guestReq.property}`, type: "warn" },
      { time: new Date().toLocaleTimeString(), text: `[Webhook] Pushed payload to admin hub. Ref: ${bookingId}`, type: "info" }
    ]);
  };

  const handleApprove = () => {
    if (!portalAlert) return;
    setPortalAlert({ ...portalAlert, status: "Approved & Confirmed" });
    setLogs(prev => [
      ...prev,
      { time: new Date().toLocaleTimeString(), text: `[Action] Admin approved reservation Ref: ${portalAlert.id}`, type: "success" },
      { time: new Date().toLocaleTimeString(), text: `[Broadcast] WhatsApp voucher callback dispatched to ${portalAlert.phone}`, type: "info" },
      { time: new Date().toLocaleTimeString(), text: `[Database] Synchronized room inventory status: LOCKED`, type: "success" }
    ]);
  };

  return (
    <>
      <style>{`
        body { background-color: #0b0f19; color: #cbd5e1; font-family: 'Inter', sans-serif !important; }
        main h1, main h2, main h3, main h4, main h5, main h6 { font-family: 'Plus Jakarta Sans', sans-serif !important; color: #ffffff !important; }

        /* Command Center Tech Hero */
        .prt-command-hero {
          background: radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 60%),
                      linear-gradient(135deg, #0b0f19 0%, #111827 50%, #1e1b4b 100%);
          padding: 120px 0 100px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        
        /* Node Network Animation Background */
        .prt-node-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.1;
          pointer-events: none;
          background-image: radial-gradient(#8b5cf6 1.5px, transparent 1.5px);
          background-size: 32px 32px;
        }

        .prt-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(139, 92, 246, 0.15);
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #c084fc;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          padding: 8px 20px;
          border-radius: 50px;
          margin-bottom: 24px;
        }

        /* Tech Live Statistics */
        .kpi-container {
          margin-bottom: 50px;
        }
        .kpi-card {
          background: #0f172a;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          padding: 24px;
          text-align: left;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }

        /* Developer Terminal Interface */
        .terminal-box {
          background: #020617;
          border: 1px solid #1e293b;
          border-radius: 16px;
          font-family: 'Courier New', Courier, monospace;
          color: #38bdf8;
          box-shadow: 0 20px 45px rgba(0,0,0,0.4);
          overflow: hidden;
        }
        .terminal-header {
          background: #0f172a;
          padding: 12px 20px;
          border-bottom: 1px solid #1e293b;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .terminal-dots {
          display: flex;
          gap: 6px;
        }
        .terminal-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .terminal-log-area {
          padding: 24px;
          height: 280px;
          overflow-y: auto;
          font-size: 0.82rem;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .log-time { color: #64748b; margin-right: 10px; }
        .log-type-system { color: #38bdf8; }
        .log-type-success { color: #10b981; }
        .log-type-warn { color: #f59e0b; }
        .log-type-info { color: #a78bfa; }

        /* Dynamic Visual Alerts dashboard */
        .hub-admin-card {
          background: #0f172a;
          color: #f8fafc;
          border-radius: 24px;
          padding: 36px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        @media (max-width: 768px) {
          .container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
        @media (max-width: 576px) {
          .cta-btn-group {
            flex-direction: column;
            width: 100%;
          }
          .cta-btn-group .ct-btn {
            width: 100% !important;
            justify-content: center;
            white-space: normal !important;
            text-align: center;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="prt-command-hero">
        <div className="prt-node-bg"></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <span className="prt-badge">
            <i className="fa-solid fa-tower-broadcast"></i> Centralized WebSocket Engine
          </span>
          <h1 style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "22px" }}>
            Online Booking &amp; Real-Time Approval Portal
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#94a3b8", lineHeight: 1.8, maxWidth: "720px", margin: "0 auto 36px" }}>
            Unify check-in requests, guest confirmations, and manual room allocation logs across hotels, eco-resorts, and trusts. Keep a real-time WebSocket communication pipeline open on admin dashboards.
          </p>
          <div className="cta-btn-group" style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#portal-interactive-simulation" className="ct-btn ct-btn-lg" style={{ background: "#8b5cf6", color: "#fff", border: "none", fontWeight: 700 }}>
              <i className="fa-solid fa-circle-nodes me-2"></i> Launch Real-Time Simulation
            </a>
            <button className="ct-btn ct-btn-ghost ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
              <i className="fa-solid fa-server me-2"></i> Request API Endpoints Spec
            </button>
          </div>
        </div>
      </section>

      {/* Multi-Property KPI Board */}
      <section style={{ background: "#070a13", padding: "60px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container">
          <div className="kpi-container row g-3">
            {[
              { val: "3 Active", label: "Linked Properties", icon: "fa-building-circle-check", col: "#38bdf8" },
              { val: "0ms delay", label: "Webhook Callback Latency", icon: "fa-bolt", col: "#10b981" },
              { val: "88.4%", label: "Average Live Occupancy", icon: "fa-chart-simple", col: "#a78bfa" },
              { val: "₹4.8L/day", label: "Centralized Receipts Today", icon: "fa-wallet", col: "#f43f5e" }
            ].map(k => (
              <div key={k.label} className="col-12 col-md-6 col-lg-3">
                <div className="kpi-card h-100">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "16px" }}>
                    <span style={{ fontSize: "0.75rem", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", lineHeight: 1.3 }}>{k.label}</span>
                    <i className={`fa-solid ${k.icon}`} style={{ color: k.col, fontSize: "1.1rem", flexShrink: 0, marginTop: "2px" }}></i>
                  </div>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 900, margin: 0, color: "#fff" }}>{k.val}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive WebSocket Simulation Demo */}
      <section id="portal-interactive-simulation" style={{ background: "#0b0f19", padding: "90px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ background: "rgba(139, 92, 246, 0.15)", color: "#c084fc", fontSize: "0.8rem", fontWeight: 800, padding: "6px 18px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              WebSocket Sandbox Simulation
            </span>
            <h2 style={{ fontSize: "2.3rem", fontWeight: 900, color: "#fff", marginTop: "14px" }}>
              Multi-Property Console logs &amp; Admin Hub
            </h2>
            <p style={{ color: "#94a3b8", maxWidth: "600px", margin: "10px auto 0" }}>
              Simulate guest booking packets sent over real-time pipelines and watch console event logs trace automatically.
            </p>
          </div>

          <div className="row g-5 align-items-stretch">
            {/* Left: Client Booking Request */}
            <div className="col-lg-5">
              <div style={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "24px", padding: "36px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#8b5cf6", color: "#fff", display: "flex", alignItems: "center", justifycontent: "center", fontWeight: 800 }}>1</div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#fff", margin: 0 }}>Client Reservation Dispatcher</h4>
                </div>

                <form onSubmit={handlePortalSubmit}>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted" style={{ fontSize: "0.72rem" }}>GUEST NAME</label>
                    <input type="text" className="form-control" style={{ background: "#070a13", borderColor: "rgba(255,255,255,0.1)", color: "#fff" }} placeholder="e.g. Radhika Merchant" required value={guestReq.name} onChange={(e) => setGuestReq({ ...guestReq, name: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted" style={{ fontSize: "0.72rem" }}>PHONE NUMBER</label>
                    <input type="text" className="form-control" style={{ background: "#070a13", borderColor: "rgba(255,255,255,0.1)", color: "#fff" }} placeholder="+91 9414XXXXXX" required value={guestReq.phone} onChange={(e) => setGuestReq({ ...guestReq, phone: e.target.value })} />
                  </div>
                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <label className="form-label small fw-bold text-muted" style={{ fontSize: "0.72rem" }}>TARGET PROPERTY</label>
                      <select className="form-select" style={{ background: "#070a13", borderColor: "rgba(255,255,255,0.1)", color: "#fff" }} value={guestReq.property} onChange={(e) => setGuestReq({ ...guestReq, property: e.target.value })}>
                        <option value="Grand Heritage Resort">Grand Heritage Resort</option>
                        <option value="Shri Krishna Dharamshala">Shri Krishna Dharamshala</option>
                        <option value="City Center Hotel">City Center Hotel</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <label className="form-label small fw-bold text-muted" style={{ fontSize: "0.72rem" }}>ROOM TYPE</label>
                      <input type="text" className="form-control" style={{ background: "#070a13", borderColor: "rgba(255,255,255,0.1)", color: "#fff" }} required value={guestReq.roomType} onChange={(e) => setGuestReq({ ...guestReq, roomType: e.target.value })} />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label small fw-bold text-muted" style={{ fontSize: "0.72rem" }}>CHECK-IN DATE</label>
                    <input type="date" className="form-control" style={{ background: "#070a13", borderColor: "rgba(255,255,255,0.1)", color: "#fff" }} required value={guestReq.date} onChange={(e) => setGuestReq({ ...guestReq, date: e.target.value })} />
                  </div>
                  <button type="submit" className="w-100 justify-content-center btn btn-primary fw-bold text-white py-3" style={{ background: "#8b5cf6", border: "none" }}>
                    <i className="fa-solid fa-paper-plane me-2"></i> Dispatch Payload packet
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Developer Console Log Terminal */}
            <div className="col-lg-7 d-flex flex-column gap-4">
              
              {/* Terminal Box */}
              <div className="terminal-box flex-grow-1 d-flex flex-column justify-content-between">
                <div>
                  <div className="terminal-header">
                    <div className="terminal-dots">
                      <span className="terminal-dot" style={{ background: "#ef4444" }}></span>
                      <span className="terminal-dot" style={{ background: "#eab308" }}></span>
                      <span className="terminal-dot" style={{ background: "#10b981" }}></span>
                    </div>
                    <span style={{ fontSize: "0.72rem", color: "#64748b", fontWeight: "bold" }}>websocket_listener_console.log</span>
                  </div>
                  
                  <div className="terminal-log-area">
                    {logs.map((l, index) => (
                      <div key={index}>
                        <span className="log-time">[{l.time}]</span>
                        <span className={`log-type-${l.type}`}>{l.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div style={{ background: "#0f172a", borderTop: "1px solid #1e293b", padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.7rem", color: "#64748b" }}>WS status: listening</span>
                  <button onClick={() => setLogs([{ time: new Date().toLocaleTimeString(), text: "Console buffers flushed.", type: "system" }])} className="btn btn-outline-secondary btn-sm" style={{ fontSize: "0.65rem", padding: "2px 8px" }}>Clear Logs</button>
                </div>
              </div>

              {/* Master Admin notification overlay */}
              {portalAlert && (
                <div className="hub-admin-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "18px", borderBottom: "1px dashed rgba(255,255,255,0.15)", paddingBottom: "12px" }}>
                    <div>
                      <span style={{ fontSize: "0.7rem", color: "#a78bfa", fontWeight: 800, textTransform: "uppercase" }}>Real-Time Admin Action Queue</span>
                      <h5 style={{ margin: "4px 0 0", color: "#fff", fontWeight: 800 }}>Ref: {portalAlert.id}</h5>
                    </div>
                    <span style={{ background: portalAlert.status === "Approved & Confirmed" ? "#10b981" : "#f59e0b", color: "#fff", padding: "4px 12px", borderRadius: "50px", fontSize: "0.72rem", fontWeight: 800 }}>
                      {portalAlert.status}
                    </span>
                  </div>

                  <div style={{ fontSize: "0.85rem", color: "#cbd5e1", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
                    <div><strong>Target:</strong> {portalAlert.property}</div>
                    <div><strong>Guest:</strong> {portalAlert.name}</div>
                    <div><strong>Mobile:</strong> {portalAlert.phone}</div>
                    <div><strong>Room Type:</strong> {portalAlert.roomType}</div>
                  </div>

                  {portalAlert.status !== "Approved & Confirmed" ? (
                    <div style={{ display: "flex", gap: "10px" }}>
                      <button
                        onClick={handleApprove}
                        className="btn btn-success btn-sm fw-bold px-3 py-2 flex-grow-1"
                        style={{ background: "#10b981", border: "none" }}
                      >
                        Approve &amp; Dispatch WebSocket Confirmation
                      </button>
                      <button onClick={() => setPortalAlert(null)} className="btn btn-outline-light btn-sm px-3 py-2">
                        Dismiss
                      </button>
                    </div>
                  ) : (
                    <div style={{ background: "rgba(16,185,129,0.12)", border: "1px solid #10b981", color: "#10b981", borderRadius: "10px", padding: "12px", textAlign: "center", fontWeight: 700, fontSize: "0.85rem" }}>
                      <i className="fa-solid fa-circle-check me-1"></i> Sync Complete! Remote calendars and vouchers updated dynamically.
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "#0b0f19" }}>
        <div className="container">
          <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #8b5cf6 100%)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "24px", padding: "clamp(35px, 8vw, 60px) clamp(15px, 5vw, 40px)", textAlign: "center" }}>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(1.6rem, 5vw, 2.3rem)", marginBottom: "14px" }}>Build Your Unified Operations Dashboard</h2>
            <p style={{ color: "#94a3b8", maxWidth: "600px", margin: "0 auto 28px" }}>
              Hook your physical check-in lines and digital sales channels into a unified real-time websocket approval dashboard.
            </p>
            <div className="cta-btn-group" style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <button className="ct-btn ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal" style={{ background: "#8b5cf6", color: "#fff", border: "none", fontWeight: 800 }}>
                <i className="fa-solid fa-calendar-check me-2"></i> Book Centralized Demo Session
              </button>
              <a href="tel:+917597451057" className="ct-btn ct-btn-ghost ct-btn-lg" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
                <i className="fa-solid fa-phone me-2"></i> Support Helpline: +91 7597451057
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
