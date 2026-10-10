"use client";
import React, { useState } from "react";
import "../../../public/assets/css/premium-products.css";

export default function Page() {
  const [hotelBooking, setHotelBooking] = useState({ guestName: "", phone: "", roomType: "Executive Deluxe Suite", checkIn: "", checkOut: "" });
  const [adminAlert, setAdminAlert] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  const handleHotelBooking = (e) => {
    e.preventDefault();
    setAdminAlert({ 
      ...hotelBooking, 
      id: "HTL-" + Math.floor(10000 + Math.random() * 90000), 
      status: "Pending Approval",
      roomNumber: "102"
    });
  };

  return (
    <>
      <style>{`
        body { background-color: #030712; color: #f3f4f6; font-family: 'Inter', sans-serif !important; }
        main h1, main h2, main h3, main h4, main h5, main h6 { font-family: 'Plus Jakarta Sans', sans-serif !important; color: #ffffff !important; }

        /* Dark Mode Glowing Hero */
        .htl-dark-hero {
          background: radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 40%),
                      radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.12) 0%, transparent 40%),
                      linear-gradient(135deg, #030712 0%, #090d16 50%, #0b0f19 100%);
          padding: 130px 0 100px;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .htl-hero-glow-orb {
          position: absolute;
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #6366f1, #06b6d4);
          filter: blur(140px);
          opacity: 0.15;
          pointer-events: none;
          z-index: 1;
        }
        .htl-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #6366f1;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          padding: 8px 18px;
          border-radius: 50px;
          margin-bottom: 24px;
        }


        .htl-bento-card {
          background: #0f172a;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 24px;
          padding: 36px;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .htl-bento-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(6, 182, 212, 0.05));
          opacity: 0;
          transition: opacity 0.3s;
        }
        .htl-bento-card:hover {
          transform: translateY(-5px);
          border-color: rgba(99, 102, 241, 0.3);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        .htl-bento-card:hover::before {
          opacity: 1;
        }

        .htl-bento-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: rgba(99, 102, 241, 0.1);
          color: #818cf8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          margin-bottom: 24px;
        }

        /* Interactive Timeline PMS Grid */
        .htl-timeline-container {
          background: linear-gradient(135deg, #090d16 0%, #111827 100%);
          border: 1px solid rgba(99, 102, 241, 0.15);
          border-radius: 24px;
          padding: 30px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          color: #cbd5e1;
        }
        .htl-timeline-grid {
          display: grid;
          grid-template-columns: 140px 1fr 1fr 1fr;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .htl-timeline-cell {
          padding: 16px;
          border-right: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          font-size: 0.85rem;
          color: #f8fafc;
        }
        .htl-timeline-header {
          font-weight: 700;
          color: #94a3b8;
          background: rgba(255,255,255,0.04);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.75rem;
        }
        .htl-capsule {
          background: linear-gradient(90deg, #4f46e5, #0891b2);
          color: #fff;
          border-radius: 8px;
          padding: 8px 12px;
          font-weight: 600;
          font-size: 0.8rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
        }

        /* Housekeeping status badges */
        .hk-badge-clean { background: #10b981; color: #ffffff !important; padding: 4px 10px; border-radius: 50px; font-size: 0.72rem; font-weight: 700; border: none; }
        .hk-badge-dirty { background: #ef4444; color: #ffffff !important; padding: 4px 10px; border-radius: 50px; font-size: 0.72rem; font-weight: 700; border: none; }
        @media (max-width: 768px) {
          .container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .ct-float-contact {
            display: none !important;
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
      <section className="htl-dark-hero">
        <div className="htl-hero-glow-orb" style={{ top: "10%", left: "5%" }}></div>
        <div className="htl-hero-glow-orb" style={{ bottom: "10%", right: "5%" }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-8">
              <span className="htl-pill">
                <i className="fa-solid fa-hotel"></i> Luxury PMS &amp; Cloud ERP Suite
              </span>
              <h1 style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "22px" }}>
                Live PMS & Hotel Room Management System
              </h1>
              <p style={{ fontSize: "1.1rem", color: "#94a3b8", lineHeight: 1.8, maxWidth: "680px", marginBottom: "36px" }}>
                Enterprise Cloud Live PMS & all-in-one hotel room management system. Keep front-office bookings, guest check-ins, housekeeping assignments, restaurant KOTs, and global OTA channels perfectly synchronized in real time.
              </p>
              <div className="cta-btn-group" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="#hotel-live-timeline" className="ct-btn ct-btn-lg" style={{ background: "linear-gradient(90deg, #4f46e5, #0891b2)", color: "#fff", border: "none", fontWeight: 700 }}>
                  <i className="fa-solid fa-calendar-check me-2"></i> Launch Live PMS Demo
                </a>
                <button className="ct-btn ct-btn-ghost ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
                  <i className="fa-solid fa-desktop me-2"></i> Request Full Technical Demo
                </button>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-flex justify-content-center">
              <div style={{ width: "220px", height: "220px", borderRadius: "24px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifycontent: "center", fontSize: "7rem", color: "rgba(255,255,255,0.25)", boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}>
                <i className="fa-solid fa-hotel"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section style={{ background: "#090d16", padding: "45px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container">
          <div className="row g-4 text-center">
            {[
              { val: "620+", lbl: "Luxury Hotels Automated" },
              { val: "22ms", lbl: "OTA Sync Delay Time" },
              { val: "+34%", lbl: "Direct Channel Revenue Increase" },
              { val: "100%", lbl: "Housekeeping Efficiency" }
            ].map((stat) => (
              <div key={stat.lbl} className="col-6 col-md-3">
                <div style={{ fontSize: "2.1rem", fontWeight: 900, color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", background: "linear-gradient(135deg, #a5b4fc, #818cf8)", webkitBackgroundClip: "text", webkitTextFillColor: "transparent" }}>{stat.val}</div>
                <div style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", marginTop: "4px" }}>{stat.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section style={{ background: "#030712", padding: "90px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ background: "rgba(99, 102, 241, 0.1)", color: "#818cf8", fontSize: "0.8rem", fontWeight: 800, padding: "6px 18px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Comprehensive ERP Features
            </span>
            <h2 style={{ fontSize: "2.3rem", fontWeight: 900, color: "#fff", marginTop: "14px" }}>
              Intelligent Management Architecture
            </h2>
          </div>

          <div className="row g-4">
            {/* Box 1 (PMS Calendar - Large) */}
            <div className="col-12 col-lg-8">
              <div className="htl-bento-card h-100">
                <div className="htl-bento-icon"><i className="fa-solid fa-calendar-days"></i></div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "12px" }}>Unified Front Desk Board</h4>
                <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                  Control all reservations, room blocks, guest profiles, check-ins, and checkout invoices from one visual grid layout. Updates dynamically as OTA or web bookings arrive.
                </p>
              </div>
            </div>

            {/* Box 2 (KOT - Medium) */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="htl-bento-card h-100">
                <div className="htl-bento-icon" style={{ color: "#f43f5e", background: "rgba(244,63,94,0.1)" }}><i className="fa-solid fa-utensils"></i></div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "12px" }}>Integrated Restaurant (KOT)</h4>
                <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                  Send kitchen order tickets immediately from tables or room service, posting dining charges straight to the guest folio.
                </p>
              </div>
            </div>

            {/* Box 3 (Housekeeping - Small) */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="htl-bento-card h-100">
                <div className="htl-bento-icon" style={{ color: "#10b981", background: "rgba(16,185,129,0.1)" }}><i className="fa-solid fa-broom"></i></div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "12px" }}>Housekeeping Timeline</h4>
                <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                  Color-coded occupancy status keeps maid staff informed on clean, dirty, or inspector approval rooms in real-time.
                </p>
              </div>
            </div>

            {/* Box 4 (Channel Sync - Small) */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="htl-bento-card h-100">
                <div className="htl-bento-icon" style={{ color: "#06b6d4", background: "rgba(6,182,212,0.1)" }}><i className="fa-solid fa-rotate"></i></div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "12px" }}>2-Way Channel Sync</h4>
                <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                  Instantly distribute dynamic room pricing and inventory availability across Booking.com, Agoda, and Expedia.
                </p>
              </div>
            </div>

            {/* Box 5 (Night Audit - Small) */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="htl-bento-card h-100">
                <div className="htl-bento-icon" style={{ color: "#eab308", background: "rgba(234,179,8,0.1)" }}><i className="fa-solid fa-chart-pie"></i></div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "12px" }}>Night Audit Reports</h4>
                <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                  Automate guest ledger audits, balance matching, GST collection reports, and RevPAR indicators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Hotel Booking & Timeline PMS Demo */}
      <section id="hotel-live-timeline" style={{ background: "#0b0f19", padding: "90px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ background: "rgba(6,182,212,0.15)", color: "#06b6d4", fontSize: "0.8rem", fontWeight: 800, padding: "6px 18px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              Live System Demonstration
            </span>
            <h2 style={{ fontSize: "2.3rem", fontWeight: 900, color: "#fff", marginTop: "14px" }}>
              Direct Reservation &amp; Live PMS Timeline Board
            </h2>
            <p style={{ color: "#94a3b8", maxWidth: "600px", margin: "10px auto 0" }}>
              Simulate a booking submission and see how the reservation instantly materializes on the Front Desk manager calendar board.
            </p>
          </div>

          <div className="row g-5 align-items-stretch">
            {/* Left: Guest Booking Form */}
            <div className="col-lg-5">
              <div style={{ background: "linear-gradient(135deg, #090d16 0%, #111827 100%)", border: "1px solid rgba(99, 102, 241, 0.15)", borderRadius: "24px", padding: "36px", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#4f46e5", color: "#fff", display: "flex", alignItems: "center", justifycontent: "center", fontWeight: 800, fontSize: "0.95rem" }}>1</div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#fff", margin: 0 }}>Direct Guest Booking Engine</h4>
                </div>
                
                <form onSubmit={handleHotelBooking}>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>GUEST FULL NAME</label>
                    <input type="text" className="form-control" style={{ background: "#070a13", borderColor: "rgba(255,255,255,0.1)", color: "#fff" }} placeholder="e.g. Vikramaditya Singh" required value={hotelBooking.guestName} onChange={(e) => setHotelBooking({ ...hotelBooking, guestName: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>MOBILE PHONE</label>
                    <input type="text" className="form-control" style={{ background: "#070a13", borderColor: "rgba(255,255,255,0.1)", color: "#fff" }} placeholder="+91 9599XXXXXX" required value={hotelBooking.phone} onChange={(e) => setHotelBooking({ ...hotelBooking, phone: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>SUITE CATEGORY</label>
                    <select className="form-select" style={{ background: "#070a13", borderColor: "rgba(255,255,255,0.1)", color: "#fff" }} value={hotelBooking.roomType} onChange={(e) => setHotelBooking({ ...hotelBooking, roomType: e.target.value })}>
                      <option value="Executive Deluxe Suite">Executive Deluxe Suite</option>
                      <option value="Presidential Suite">Presidential Suite</option>
                      <option value="Royal Heritage Room">Royal Heritage Room</option>
                      <option value="Standard Twin Bed Room">Standard Twin Bed Room</option>
                    </select>
                  </div>
                  <div className="row g-2 mb-4">
                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-bold text-muted" style={{ fontSize: "0.72rem" }}>CHECK-IN</label>
                      <input type="date" className="form-control" style={{ background: "#070a13", borderColor: "rgba(255,255,255,0.1)", color: "#fff" }} required value={hotelBooking.checkIn} onChange={(e) => setHotelBooking({ ...hotelBooking, checkIn: e.target.value })} />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-bold text-muted" style={{ fontSize: "0.72rem" }}>CHECK-OUT</label>
                      <input type="date" className="form-control" style={{ background: "#070a13", borderColor: "rgba(255,255,255,0.1)", color: "#fff" }} required value={hotelBooking.checkOut} onChange={(e) => setHotelBooking({ ...hotelBooking, checkOut: e.target.value })} />
                    </div>
                  </div>
                  <button type="submit" className="w-100 justify-content-center btn btn-primary fw-bold text-white py-3" style={{ background: "linear-gradient(90deg, #4f46e5, #0891b2)", border: "none" }}>
                    <i className="fa-solid fa-paper-plane me-2"></i> Submit Reservation
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Live Room Board Calendar */}
            <div className="col-lg-7 d-none d-lg-block">
              <div className="htl-timeline-container h-100 d-flex flex-column justify-content-between">
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}>
                    <h4 style={{ fontSize: "1.15rem", fontWeight: 800, margin: 0, display: "flex", alignItems: "center", gap: "10px" }}>
                      <i className="fa-solid fa-desktop text-info"></i> PMS CALENDAR BOARD
                    </h4>
                    <span style={{ fontSize: "0.72rem", background: "rgba(16,185,129,0.1)", color: "#10b981", border: "1px solid rgba(16,185,129,0.2)", padding: "4px 10px", borderRadius: "50px", fontWeight: 700 }}>
                      SYSTEM ONLINE
                    </span>
                  </div>

                  {/* Header Row */}
                  <div className="htl-timeline-grid">
                    <div className="htl-timeline-cell htl-timeline-header">ROOM</div>
                    <div className="htl-timeline-cell htl-timeline-header">TODAY</div>
                    <div className="htl-timeline-cell htl-timeline-header">TOMORROW</div>
                    <div className="htl-timeline-cell htl-timeline-header">08 AUG</div>
                  </div>

                  {/* Room 101 */}
                  <div className="htl-timeline-grid">
                    <div className="htl-timeline-cell fw-bold">101 Exec AC</div>
                    <div className="htl-timeline-cell" style={{ gridColumn: "span 2", padding: "8px" }}>
                      <div className="htl-capsule">
                        <span>Mr. Adit V.</span>
                        <span className="hk-badge-clean">Clean</span>
                      </div>
                    </div>
                    <div className="htl-timeline-cell"></div>
                  </div>

                  {/* Room 102 */}
                  <div className="htl-timeline-grid">
                    <div className="htl-timeline-cell fw-bold">102 Royal</div>
                    <div className="htl-timeline-cell"></div>
                    <div className="htl-timeline-cell" style={{ gridColumn: "span 2", padding: "8px" }}>
                      {adminAlert && adminAlert.status === "Approved" ? (
                        <div className="htl-capsule" style={{ background: "linear-gradient(90deg, #10b981, #059669)" }}>
                          <span>{adminAlert.guestName.split(" ")[0]}</span>
                          <i className="fa-solid fa-circle-check"></i>
                        </div>
                      ) : (
                        <span style={{ fontSize: "0.80rem", color: "#10b981", fontWeight: "700" }}>
                          <i className="fa-solid fa-circle-check me-1"></i> Vacant
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Room 103 */}
                  <div className="htl-timeline-grid">
                    <div className="htl-timeline-cell fw-bold">103 Twin Bed</div>
                    <div className="htl-timeline-cell"></div>
                    <div className="htl-timeline-cell" style={{ padding: "8px" }}>
                      <div className="htl-capsule" style={{ background: "linear-gradient(90deg, #f59e0b, #d97706)" }}>
                        <span>Miss Radhika</span>
                        <span className="hk-badge-dirty">Dirty</span>
                      </div>
                    </div>
                    <div className="htl-timeline-cell"></div>
                  </div>

                  {/* Pending Alert overlay/notification card */}
                  {adminAlert && adminAlert.status !== "Approved" && (
                    <div style={{ background: "#090d16", border: "1px solid #4f46e5", borderRadius: "16px", padding: "20px", marginTop: "24px", boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                        <span style={{ fontSize: "0.75rem", color: "#818cf8", fontWeight: 800, textTransform: "uppercase" }}>Pending Approval Request</span>
                        <span style={{ background: "#f59e0b", color: "#000", fontSize: "0.7rem", fontWeight: 900, padding: "2px 8px", borderRadius: "50px" }}>Alert</span>
                      </div>
                      <p style={{ fontSize: "0.85rem", color: "#cbd5e1", margin: "0 0 16px" }}>
                        Guest <strong>{adminAlert.guestName}</strong> requested {adminAlert.roomType} for Room 102. Check-In: {adminAlert.checkIn || "Today"}.
                      </p>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <button
                          onClick={() => setAdminAlert({ ...adminAlert, status: "Approved" })}
                          className="btn btn-success btn-sm fw-bold px-3"
                          style={{ background: "#10b981", border: "none" }}
                        >
                          Approve and Lock Room
                        </button>
                        <button onClick={() => setAdminAlert(null)} className="btn btn-outline-light btn-sm px-3">
                          Decline
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: "12px", padding: "16px", marginTop: "24px", fontSize: "0.8rem", color: "#64748b" }}>
                  <i className="fa-solid fa-circle-info me-1"></i> Front desk managers can drag-and-drop timeline tiles to change room assignments or extend checkout periods.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "#030712" }}>
        <div className="container">
          <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #4f46e5 100%)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "24px", padding: "clamp(35px, 8vw, 60px) clamp(15px, 5vw, 40px)", textAlign: "center" }}>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(1.6rem, 5vw, 2.3rem)", marginBottom: "14px" }}>Elevate Your Hotel Operations</h2>
            <p style={{ color: "#94a3b8", maxWidth: "600px", margin: "0 auto 28px" }}>
              Automate room service billing, housekeeping registers, and direct web channels with ChittorTech software solutions.
            </p>
            <div className="cta-btn-group" style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <button className="ct-btn ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal" style={{ background: "#4f46e5", color: "#fff", border: "none", fontWeight: 800 }}>
                <i className="fa-solid fa-calendar-plus me-2"></i> Book Free Demo Session
              </button>
              <a href="tel:+917597451057" className="ct-btn ct-btn-ghost ct-btn-lg" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
                <i className="fa-solid fa-phone me-2"></i> Call Sales: +91 7597451057
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
