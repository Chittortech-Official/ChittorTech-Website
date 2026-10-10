"use client";
import React, { useState } from "react";
import "../../../public/assets/css/premium-products.css";

export default function Page() {
  const [bookingStep, setBookingStep] = useState(1);
  const [guestBooking, setGuestBooking] = useState({ name: "", phone: "", roomType: "Premier Sea/City View Suite", checkIn: "", nights: 2 });
  const [bookingAlert, setBookingAlert] = useState(null);

  const roomsList = [
    { name: "Premier Sea/City View Suite", rating: "4.9 Superb", reviews: 148, price: 3500, amenities: ["Ocean View", "AC", "WiFi", "BathTub"], imageIcon: "fa-water" },
    { name: "Executive AC Room", rating: "4.7 Excellent", reviews: 92, price: 1800, amenities: ["AC", "WiFi", "Work Desk", "MiniBar"], imageIcon: "fa-briefcase" },
    { name: "Deluxe Family Suite", rating: "4.8 Superb", reviews: 110, price: 2800, amenities: ["Kitchenette", "AC", "WiFi", "2 Beds"], imageIcon: "fa-people-roof" }
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    setBookingAlert({ 
      ...guestBooking, 
      id: "RBE-" + Math.floor(1000 + Math.random() * 9000), 
      status: "Real-Time Admin Alert Sent" 
    });
    setBookingStep(3);
  };

  return (
    <>
      <style>{`
        body { background-color: #0c0a21; color: #cbd5e1; font-family: 'Inter', sans-serif !important; }
        main h1, main h2, main h3, main h4, main h5, main h6 { font-family: 'Plus Jakarta Sans', sans-serif !important; color: #ffffff !important; }

        /* Search Centric Travel Portal Hero */
        .rbe-portal-hero {
          background: radial-gradient(circle at 10% 10%, rgba(99, 102, 241, 0.15) 0%, transparent 40%),
                      linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #4338ca 100%);
          padding: 110px 0 120px;
          color: #fff;
          position: relative;
        }
        .rbe-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          padding: 6px 18px;
          border-radius: 50px;
          margin-bottom: 20px;
        }
        .rbe-search-card {
          background: #15123d;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
          color: #f8fafc;
          margin-top: -50px;
          position: relative;
          z-index: 10;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        /* Showcase Cards */
        .room-showcase-card {
          background: #15123d;
          border: 1px solid rgba(99, 102, 241, 0.15);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .room-showcase-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 30px rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.4);
        }
        .room-icon-banner {
          height: 140px;
          background: linear-gradient(135deg, rgba(30, 27, 75, 0.5) 0%, rgba(67, 56, 202, 0.3) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
          color: #6366f1;
        }
        .room-rating {
          font-size: 0.78rem;
          font-weight: 800;
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          padding: 4px 10px;
          border-radius: 50px;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        /* Multi-Step Tab Wizard style */
        .wizard-step-node {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.85rem;
          border: 2px solid #312e81;
          background: #0c0a21;
          color: #94a3b8;
          transition: all 0.3s;
        }
        .wizard-step-node.active {
          border-color: #6366f1;
          background: #6366f1;
          color: #fff;
          box-shadow: 0 0 10px rgba(99,102,241,0.5);
        }
        .wizard-step-node.completed {
          border-color: #10b981;
          background: #10b981;
          color: #fff;
        }

        /* Admin alert box */
        .rbe-admin-box {
          background: #15123d;
          color: #f8fafc;
          border-radius: 24px;
          padding: 36px;
          border: 1px solid rgba(99, 102, 241, 0.2);
          box-shadow: 0 20px 45px rgba(0,0,0,0.3);
        }
        @media (max-width: 768px) {
          .container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .rbe-search-card {
            margin-top: 20px !important;
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
      <section className="rbe-portal-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8">
              <span className="rbe-badge">
                <i className="fa-solid fa-bolt"></i> High-Conversion Guest Portal
              </span>
              <h1 style={{ fontSize: "clamp(2.3rem, 4.5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "22px", color: "#fff" }}>
                Commission-Free Direct Room Booking Engine
              </h1>
              <p style={{ fontSize: "1.1rem", color: "#cbd5e1", lineHeight: 1.8, maxWidth: "680px", marginBottom: "36px" }}>
                Integrate a beautiful, seamless room booking wizard into your existing website. Avoid the 18-25% commissions charged by online travel agents (OTAs) with dynamic season pricing, automated voucher deliveries, and live channel sync locks.
              </p>
            </div>
            <div className="col-lg-4 d-none d-lg-flex justify-content-center">
              <div style={{ width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifycontent: "center", fontSize: "6rem", color: "rgba(255,255,255,0.3)" }}>
                <i className="fa-solid fa-bed"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Search Widget Card */}
      <section style={{ padding: "0 !important", background: "transparent" }}>
        <div className="container">
          <div className="rbe-search-card">
            <div className="row g-3 align-items-end">
              <div className="col-md-3">
                <label className="form-label small fw-bold" style={{ color: "#a5b4fc", letterSpacing: "0.5px" }}>DESTINATION / HOTEL</label>
                <div className="input-group">
                  <span className="input-group-text" style={{ background: "#0c0a21", borderColor: "rgba(99, 102, 241, 0.35)", color: "#818cf8" }}><i className="fa-solid fa-location-dot"></i></span>
                  <input type="text" className="form-control" style={{ background: "#0c0a21", borderColor: "rgba(99, 102, 241, 0.35)", color: "#ffffff" }} placeholder="e.g. Udaipur Retreat" defaultValue="ChittorTech Premium Stays" readOnly />
                </div>
              </div>
              <div className="col-md-3">
                <label className="form-label small fw-bold" style={{ color: "#a5b4fc", letterSpacing: "0.5px" }}>CHECK-IN &amp; CHECK-OUT</label>
                <div className="input-group">
                  <span className="input-group-text" style={{ background: "#0c0a21", borderColor: "rgba(99, 102, 241, 0.35)", color: "#818cf8" }}><i className="fa-solid fa-calendar"></i></span>
                  <input type="text" className="form-control" style={{ background: "#0c0a21", borderColor: "rgba(99, 102, 241, 0.35)", color: "#ffffff" }} placeholder="08 Aug - 10 Aug" defaultValue="08 Aug - 10 Aug" readOnly />
                </div>
              </div>
              <div className="col-md-3">
                <label className="form-label small fw-bold" style={{ color: "#a5b4fc", letterSpacing: "0.5px" }}>GUESTS &amp; ROOMS</label>
                <div className="input-group">
                  <span className="input-group-text" style={{ background: "#0c0a21", borderColor: "rgba(99, 102, 241, 0.35)", color: "#818cf8" }}><i className="fa-solid fa-user"></i></span>
                  <input type="text" className="form-control" style={{ background: "#0c0a21", borderColor: "rgba(99, 102, 241, 0.35)", color: "#ffffff" }} placeholder="2 Adults, 1 Room" defaultValue="2 Adults, 1 Room" readOnly />
                </div>
              </div>
              <div className="col-md-3">
                <a href="#rbe-interactive-wizard" className="w-100 btn btn-primary fw-bold py-2 justify-content-center" style={{ background: "linear-gradient(90deg, #4f46e5, #06b6d4)", border: "none" }}>
                  <i className="fa-solid fa-magnifying-glass me-2"></i> Search Best Rates
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Cards Grid */}
      <section style={{ background: "#0c0a21", padding: "90px 0 60px" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ background: "rgba(99, 102, 241, 0.15)", color: "#818cf8", fontSize: "0.8rem", fontWeight: 800, padding: "6px 18px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Room Showcase
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "#fff", marginTop: "14px" }}>
              Designed to Engage and Convert Visitors
            </h2>
          </div>

          <div className="row g-4">
            {roomsList.map((room) => (
              <div key={room.name} className="col-md-4">
                <div className="room-showcase-card h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="room-icon-banner">
                      <i className={`fa-solid ${room.imageIcon}`}></i>
                    </div>
                    <div className="p-4">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                        <span className="room-rating"><i className="fa-solid fa-star text-warning me-1"></i>{room.rating}</span>
                        <span style={{ fontSize: "0.8rem", color: "#64748b" }}>({room.reviews} reviews)</span>
                      </div>
                      <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#1e293b", marginBottom: "12px" }}>{room.name}</h4>
                      
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "15px" }}>
                        {room.amenities.map(a => (
                          <span key={a} style={{ fontSize: "0.72rem", background: "rgba(255, 255, 255, 0.05)", padding: "3px 8px", borderRadius: "4px", color: "#cbd5e1", fontWeight: 600 }}>{a}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-4 pt-0" style={{ borderTop: "1px dashed rgba(99, 102, 241, 0.25)", paddingTop: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <span style={{ fontSize: "1.3rem", fontWeight: 900, color: "#6366f1" }}>₹{room.price}</span>
                      <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>/night</span>
                    </div>
                    <a href="#rbe-interactive-wizard" onClick={() => {
                      setGuestBooking({...guestBooking, roomType: room.name});
                      setBookingStep(2);
                    }} className="btn btn-primary btn-sm fw-bold px-3 py-2" style={{ background: "linear-gradient(90deg, #4f46e5, #06b6d4)", border: "none" }}>Book Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Booking Wizard Demo */}
      <section id="rbe-interactive-wizard" style={{ background: "#0c0a21", padding: "90px 0", borderTop: "1px solid rgba(99, 102, 241, 0.2)" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ background: "rgba(99, 102, 241, 0.15)", color: "#818cf8", fontSize: "0.8rem", fontWeight: 800, padding: "6px 18px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              Live Wizard Simulator
            </span>
            <h2 style={{ fontSize: "2.3rem", fontWeight: 900, color: "#fff", marginTop: "14px" }}>
              3-Step Guest Booking &amp; Admin Panel Syncer
            </h2>
            <p style={{ color: "#94a3b8", maxWidth: "600px", margin: "10px auto 0" }}>
              Fill out the reservation wizard to see how the client-side engine syncs data and sends push updates in real-time.
            </p>
          </div>

          <div className="row g-5 align-items-stretch">
            {/* Left: 3-Step Wizard Form */}
            <div className="col-lg-6">
              <div style={{ background: "#15123d", border: "1px solid rgba(99, 102, 241, 0.2)", borderRadius: "24px", padding: "40px", boxShadow: "0 10px 30px rgba(0,0,0,0.25)" }}>
                
                {/* Wizard Steps Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "35px", position: "relative" }}>
                  <div style={{ position: "absolute", top: "16px", left: "10px", right: "10px", height: "2px", background: "#cbd5e1", zIndex: 1 }}></div>
                  <div className={`wizard-step-node ${bookingStep >= 1 ? "active" : ""} ${bookingStep > 1 ? "completed" : ""}`} style={{ position: "relative", zIndex: 2 }}>
                    {bookingStep > 1 ? <i className="fa-solid fa-check"></i> : "1"}
                  </div>
                  <div className={`wizard-step-node ${bookingStep >= 2 ? "active" : ""} ${bookingStep > 2 ? "completed" : ""}`} style={{ position: "relative", zIndex: 2 }}>
                    {bookingStep > 2 ? <i className="fa-solid fa-check"></i> : "2"}
                  </div>
                  <div className={`wizard-step-node ${bookingStep >= 3 ? "active" : ""}`} style={{ position: "relative", zIndex: 2 }}>
                    3
                  </div>
                </div>

                {/* Step 1: Select Room Category */}
                {bookingStep === 1 && (
                  <div>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "18px" }}>Select Room Category</h4>
                    <div className="d-flex flex-column gap-3 mb-4">
                      {roomsList.map(r => (
                        <div key={r.name} onClick={() => setGuestBooking({...guestBooking, roomType: r.name})} style={{ background: "#0c0a21", border: guestBooking.roomType === r.name ? "2px solid #6366f1" : "1px solid rgba(99, 102, 241, 0.2)", borderRadius: "12px", padding: "16px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div>
                            <h5 style={{ fontSize: "0.95rem", fontWeight: 800, margin: "0 0 4px", color: "#fff" }}>{r.name}</h5>
                            <span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>⭐ {r.rating}</span>
                          </div>
                          <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#6366f1" }}>₹{r.price}</span>
                        </div>
                      ))}
                    </div>
                    <button onClick={() => setBookingStep(2)} className="w-100 btn btn-primary fw-bold py-3" style={{ background: "linear-gradient(90deg, #4f46e5, #06b6d4)", border: "none" }}>Next: Guest Information</button>
                  </div>
                )}

                {/* Step 2: Guest Details */}
                {bookingStep === 2 && (
                  <div>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "18px" }}>Guest Details &amp; Check-In</h4>
                    <form onSubmit={handleBooking}>
                      <div className="mb-3">
                        <label className="form-label small fw-bold text-muted">FULL GUEST NAME</label>
                        <input type="text" className="form-control" style={{ background: "#0c0a21", borderColor: "rgba(99, 102, 241, 0.25)", color: "#fff" }} placeholder="Siddharth Verma" required value={guestBooking.name} onChange={(e) => setGuestBooking({ ...guestBooking, name: e.target.value })} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label small fw-bold text-muted">MOBILE NUMBER</label>
                        <input type="text" className="form-control" style={{ background: "#0c0a21", borderColor: "rgba(99, 102, 241, 0.25)", color: "#fff" }} placeholder="+91 958XXXXXXX" required value={guestBooking.phone} onChange={(e) => setGuestBooking({ ...guestBooking, phone: e.target.value })} />
                      </div>
                      <div className="row g-2 mb-4">
                        <div className="col-12 col-sm-6">
                          <label className="form-label small fw-bold text-muted">CHECK-IN DATE</label>
                          <input type="date" className="form-control" style={{ background: "#0c0a21", borderColor: "rgba(99, 102, 241, 0.25)", color: "#fff" }} required value={guestBooking.checkIn} onChange={(e) => setGuestBooking({ ...guestBooking, checkIn: e.target.value })} />
                        </div>
                        <div className="col-12 col-sm-6">
                          <label className="form-label small fw-bold text-muted">DURATION</label>
                          <select className="form-select" style={{ background: "#0c0a21", borderColor: "rgba(99, 102, 241, 0.25)", color: "#fff" }} value={guestBooking.nights} onChange={(e) => setGuestBooking({ ...guestBooking, nights: e.target.value })}>
                            <option value="1">1 Night</option>
                            <option value="2">2 Nights</option>
                            <option value="3">3 Nights</option>
                            <option value="5">5 Nights</option>
                          </select>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <button type="button" onClick={() => setBookingStep(1)} className="btn btn-outline-light w-50 py-3" style={{ borderColor: "rgba(255,255,255,0.15)", color: "#cbd5e1" }}>Back</button>
                        <button type="submit" className="btn btn-primary w-50 py-3" style={{ background: "linear-gradient(90deg, #4f46e5, #06b6d4)", border: "none" }}>Book Direct</button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Step 3: Success Confirmation */}
                {bookingStep === 3 && (
                  <div className="text-center py-4">
                    <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.15)", color: "#10b981", display: "flex", alignItems: "center", justifycontent: "center", fontSize: "2rem", margin: "0 auto 20px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                      <i className="fa-solid fa-circle-check m-auto"></i>
                    </div>
                    <h4 style={{ fontWeight: 800, color: "#fff", marginBottom: "8px" }}>Booking Voucher Confirmed!</h4>
                    <p style={{ fontSize: "0.9rem", color: "#94a3b8", maxWidth: "320px", margin: "0 auto 24px" }}>
                      Your room has been locked on all platforms. Voucher details and google directions have been dispatched to {guestBooking.phone}.
                    </p>
                    <div style={{ background: "#0c0a21", border: "1px dashed rgba(99, 102, 241, 0.25)", borderRadius: "12px", padding: "16px", textAlign: "left", fontSize: "0.85rem", marginBottom: "24px", color: "#f8fafc" }}>
                      <div><strong>Voucher ID:</strong> {bookingAlert?.id}</div>
                      <div><strong>Room type:</strong> {bookingAlert?.roomType}</div>
                      <div><strong>Duration:</strong> {bookingAlert?.nights} night(s)</div>
                    </div>
                    <button onClick={() => { setBookingStep(1); setBookingAlert(null); }} className="btn btn-outline-light fw-bold btn-sm px-4" style={{ borderColor: "rgba(255,255,255,0.2)", color: "#cbd5e1" }}>New Booking</button>
                  </div>
                )}

              </div>
            </div>

            {/* Right: Admin Sync Feed */}
            <div className="col-lg-6">
              <div className="rbe-admin-box h-100 d-flex flex-column justify-content-between">
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}>
                    <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#fff", margin: 0, display: "flex", alignItems: "center", gap: "10px" }}>
                      <i className="fa-solid fa-server text-info"></i> OTA CHANNEL MANAGER SYNC
                    </h4>
                    <span style={{ fontSize: "0.72rem", background: "rgba(16,185,129,0.15)", color: "#10b981", border: "1px solid rgba(16,185,129,0.2)", padding: "4px 10px", borderRadius: "50px", fontWeight: 700 }}>
                      CONNECTED
                    </span>
                  </div>

                  {!bookingAlert ? (
                    <div className="text-center" style={{ padding: "60px 20px", color: "#94a3b8" }}>
                      <i className="fa-solid fa-network-wired" style={{ fontSize: "3.5rem", marginBottom: "18px", color: "rgba(255,255,255,0.06)", display: "block" }}></i>
                      <p style={{ fontSize: "0.95rem", margin: 0, lineHeight: 1.6 }}>Waiting for guest booking input. Complete Step 2 on the booking engine to witness real-time inventory distribution syncs.</p>
                    </div>
                  ) : (
                    <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(37,99,235,0.3)", borderRadius: "18px", padding: "24px" }}>
                      <div style={{ borderBottom: "1px dashed rgba(255,255,255,0.1)", paddingBottom: "14px", marginBottom: "18px" }}>
                        <span style={{ fontSize: "0.7rem", color: "#2563eb", fontWeight: 800, textTransform: "uppercase" }}>2-Way Distribution Sync Log</span>
                        <h5 style={{ color: "#fff", margin: "4px 0 0", fontWeight: 800 }}>ID: {bookingAlert.id}</h5>
                      </div>
                      
                      <div style={{ fontSize: "0.85rem", display: "grid", gap: "12px", color: "#cbd5e1" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span>Direct Hotel Engine:</span>
                          <span style={{ color: "#10b981", fontWeight: 700 }}><i className="fa-solid fa-check-double me-1"></i> Confirmed &amp; Locked</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span>Booking.com API:</span>
                          <span style={{ color: "#10b981", fontWeight: 700 }}><i className="fa-solid fa-check-double me-1"></i> Inventory Deducted (-1)</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span>Expedia Sync:</span>
                          <span style={{ color: "#10b981", fontWeight: 700 }}><i className="fa-solid fa-check-double me-1"></i> Calendar Updated</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span>Agoda API:</span>
                          <span style={{ color: "#10b981", fontWeight: 700 }}><i className="fa-solid fa-check-double me-1"></i> Rates Recalculated</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: "12px", padding: "16px", marginTop: "24px", fontSize: "0.8rem", color: "#64748b" }}>
                  <i className="fa-solid fa-circle-info me-1"></i> Our engine triggers an instant webhook that tells all linked OTA channels to freeze inventory, preventing accidental double-bookings.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "#f8fafc" }}>
        <div className="container">
          <div style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #4338ca 100%)", borderRadius: "24px", padding: "clamp(35px, 8vw, 60px) clamp(15px, 5vw, 40px)", textAlign: "center" }}>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(1.6rem, 5vw, 2.3rem)", marginBottom: "14px", color: "#fff" }}>Unleash Direct Sales Growth</h2>
            <p style={{ color: "#cbd5e1", maxWidth: "600px", margin: "0 auto 28px" }}>
              Embed our booking wizard widget directly in your website in less than 5 minutes and stop paying OTA commissions.
            </p>
            <div className="cta-btn-group" style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <button className="ct-btn ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal" style={{ background: "#fff", color: "#4338ca", fontWeight: 800, border: "none" }}>
                <i className="fa-solid fa-calendar-check me-2"></i> Book Free Technical Demo
              </button>
              <a href="tel:+917597451057" className="ct-btn ct-btn-ghost ct-btn-lg" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
                <i className="fa-solid fa-phone me-2"></i> Support: +91 7597451057
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
