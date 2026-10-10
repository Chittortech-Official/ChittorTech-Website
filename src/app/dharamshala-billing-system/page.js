"use client";
import React, { useState, useRef } from "react";
import "../../../public/assets/css/premium-products.css";

export default function Page() {
  const [bookingForm, setBookingForm] = useState({ name: "", phone: "", roomType: "AC Deluxe Room", checkIn: "", checkOut: "", guests: 2 });
  const [submittedBooking, setSubmittedBooking] = useState(null);
  const videoRef = useRef(null);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const changeSpeed = (rate) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
      setPlaybackSpeed(rate);
    }
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setSubmittedBooking({ 
      ...bookingForm, 
      id: "DS-" + Math.floor(1000 + Math.random() * 9000), 
      status: "Pending Trustee Approval",
      timestamp: new Date().toLocaleTimeString()
    });
  };

  const roomsData = [
    { type: "AC Deluxe Room", price: "₹1,200/day", capacity: "2-3 Yatris", count: "3 rooms left", icon: "fa-snowflake" },
    { type: "Non-AC Standard Room", price: "₹500/day", capacity: "2 Yatris", count: "8 rooms left", icon: "fa-fan" },
    { type: "Family Hall (10 Bed)", price: "₹2,500/day", capacity: "Up to 10 Yatris", count: "2 halls left", icon: "fa-people-group" },
    { type: "Yatri Dormitory Bed", price: "₹150/bed", capacity: "Single Pilgrim", count: "14 beds left", icon: "fa-bed" }
  ];

  return (
    <>
      <style>{`
        body { background-color: #fafaf9; font-family: 'Inter', sans-serif !important; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Plus Jakarta Sans', sans-serif !important; }
        
        /* Traditional Spiritual Hero */
        .ds-premium-hero {
          background: radial-gradient(circle at 80% 20%, rgba(251, 146, 60, 0.15) 0%, transparent 50%),
                      linear-gradient(135deg, #451a03 0%, #78350f 40%, #ea580c 100%);
          padding: 70px 0 65px;
          color: #fffbeb;
          position: relative;
          overflow: hidden;
          border-bottom: 8px solid #d97706;
        }
        .ds-premium-hero::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 24px;
          background: radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.15) 0%, transparent 70%);
        }
        .ds-gopuram-shape {
          border: 4px solid #f59e0b;
          border-radius: 50% 50% 0 0;
          width: 240px;
          height: 240px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(251, 146, 60, 0.05);
          box-shadow: 0 0 50px rgba(245, 158, 11, 0.1);
        }
        .ds-gopuram-shape i {
          font-size: 5.5rem;
          color: #f59e0b;
          filter: drop-shadow(0 0 15px rgba(245, 158, 11, 0.4));
        }
        .ds-accent-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid #f59e0b;
          color: #fef3c7;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          padding: 8px 20px;
          border-radius: 50px;
          margin-bottom: 16px;
        }

        /* Room Selection Cards */
        .ds-room-card {
          background: #fff;
          border: 1px solid #fed7aa;
          border-radius: 20px;
          padding: 28px;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(120, 53, 15, 0.03);
          position: relative;
          overflow: hidden;
        }
        .ds-room-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #f59e0b, #ea580c);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .ds-room-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(120, 53, 15, 0.08);
          border-color: #f97316;
        }
        .ds-room-card:hover::before {
          opacity: 1;
        }
        .ds-room-badge {
          background: #fffbeb;
          color: #b45309;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 50px;
          border: 1px solid #fef3c7;
        }

        /* Features Split layout */
        .ds-feature-row {
          background: #fff;
          border-radius: 24px;
          border: 1px solid #f3f4f6;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
          overflow: hidden;
        }
        .ds-vertical-accent {
          border-left: 5px solid #ea580c;
        }

        /* Physical Guest Book Style Form */
        .ds-register-book {
          background: #fdf8eb;
          border: 8px double #9a3412;
          box-shadow: inset 0 0 45px rgba(154, 52, 18, 0.08), 0 15px 35px rgba(120, 53, 15, 0.08);
          border-radius: 6px;
          padding: 40px;
          position: relative;
        }
        .ds-register-book::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 1px;
          background: rgba(154, 52, 18, 0.15);
          pointer-events: none;
        }
        .ds-register-title {
          font-family: 'Plus Jakarta Sans', serif;
          font-weight: 800;
          letter-spacing: 1px;
          color: #7c2d12;
          border-bottom: 2px dashed #fed7aa;
          padding-bottom: 12px;
          margin-bottom: 30px;
          text-align: center;
        }

        /* Trustee Log Screen */
        .ds-trustee-dashboard {
          background: #2e1305;
          color: #fffbeb;
          border-radius: 24px;
          padding: 36px;
          border: 2px solid #ea580c;
          box-shadow: 0 20px 45px rgba(46, 19, 5, 0.35);
        }
        .ds-notification-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(254, 215, 170, 0.15);
          border-radius: 16px;
          transition: all 0.3s;
        }
        .ds-notification-card:hover {
          background: rgba(255,255,255,0.08);
          border-color: #ea580c;
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
      <section className="ds-premium-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="ds-accent-badge">
                <i className="fa-solid fa-gopuram"></i> Traditional Ashram &amp; Trust Automation
              </span>
              <h1 style={{ fontSize: "clamp(2.3rem, 4.5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "14px", color: "#fff" }}>
                Pilgrim-Centric Dharamshala &amp; Donation Billing System
              </h1>
              <p style={{ fontSize: "1.1rem", color: "#ffedd5", lineHeight: 1.7, maxWidth: "680px", marginBottom: "24px" }}>
                Integrate your sacred pilgrim stays with dynamic room tracking, automated police register exports, and instant 80G tax receipt generations. Enable trustees to monitor ashram inventory and donations from anywhere in the world.
              </p>
              <div className="cta-btn-group" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="#dharamshala-live-register" className="ct-btn ct-btn-lg" style={{ background: "#ea580c", color: "#fff", border: "none", fontWeight: 700 }}>
                  <i className="fa-solid fa-calendar-days me-2"></i> Open Yatri Booking Demo
                </a>
                <button className="ct-btn ct-btn-ghost ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal" style={{ borderColor: "#f59e0b", color: "#fef3c7" }}>
                  <i className="fa-solid fa-file-invoice-dollar me-2"></i> Request Trust Audit Demo
                </button>
              </div>
            </div>
            <div className="col-lg-5 col-12 d-flex justify-content-center mt-4 mt-lg-0">
              {/* Smartphone Mockup Frame (Vertical 9:16 — Zero Black Bars) */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "270px",
                  borderRadius: "36px",
                  padding: "10px 8px 12px",
                  background: "linear-gradient(135deg, #292524, #1c1917, #0c0a09)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 2px rgba(245, 158, 11, 0.5), 0 0 35px rgba(234, 88, 12, 0.25)",
                  border: "4px solid #44403c",
                }}
              >
                {/* Phone Speaker & Notch */}
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                  <div style={{ width: "36px", height: "4px", backgroundColor: "#57534e", borderRadius: "4px" }} />
                  <div style={{ width: "5px", height: "5px", backgroundColor: "#292524", borderRadius: "50%", border: "1px solid #57534e" }} />
                </div>

                {/* Video Display Container (Edge-to-Edge 9:16) */}
                <div
                  style={{
                    position: "relative",
                    borderRadius: "24px",
                    overflow: "hidden",
                    aspectRatio: "9 / 16",
                    backgroundColor: "#1c1917",
                    boxShadow: "inset 0 0 10px rgba(0,0,0,0.8)",
                  }}
                >
                  <video
                    ref={videoRef}
                    src="https://github.com/user-attachments/assets/4ba125d1-ce14-49d0-98f5-2bb0cef1ff53"
                    poster="/images/dharamshala-video-poster.jpg"
                    controls
                    controlsList="nofullscreen nodownload"
                    disablePictureInPicture
                    playsInline
                    preload="metadata"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  {/* Play Button Overlay (Eliminates Initial Black Screen) */}
                  {!isPlaying && (
                    <div
                      onClick={togglePlay}
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(0, 0, 0, 0.15)",
                        cursor: "pointer",
                        zIndex: 3,
                      }}
                    >
                      <div
                        style={{
                          width: "64px",
                          height: "64px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #f59e0b, #ea580c)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 10px 30px rgba(234, 88, 12, 0.65), 0 0 0 4px rgba(255, 255, 255, 0.35)",
                        }}
                      >
                        <i className="fa-solid fa-play" style={{ color: "#fff", fontSize: "1.5rem", marginLeft: "4px" }}></i>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Playback Speed Switcher */}
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "5px 8px",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "12px",
                    border: "1px solid rgba(254, 215, 170, 0.15)",
                  }}
                >
                  <span style={{ fontSize: "0.68rem", color: "#fdba74", fontWeight: 700 }}>
                    <i className="fa-solid fa-gauge-high me-1"></i> Speed:
                  </span>
                  <div style={{ display: "flex", gap: "4px" }}>
                    {[1, 1.25, 1.5, 2].map((rate) => (
                      <button
                        key={rate}
                        type="button"
                        onClick={() => changeSpeed(rate)}
                        style={{
                          background: playbackSpeed === rate ? "#ea580c" : "rgba(255, 255, 255, 0.12)",
                          color: "#fff",
                          border: "none",
                          borderRadius: "6px",
                          padding: "2px 7px",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          cursor: "pointer",
                          transition: "all 0.15s ease",
                        }}
                      >
                        {rate}x
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bottom Home Indicator Bar */}
                <div style={{ display: "flex", justifyContent: "center", marginTop: "8px" }}>
                  <div style={{ width: "65px", height: "3px", backgroundColor: "#78716c", borderRadius: "3px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yatri Statistics Section */}
      <section style={{ background: "#fffbeb", padding: "45px 0", borderBottom: "1px solid #fed7aa" }}>
        <div className="container">
          <div className="row g-4 text-center">
            {[
              { val: "380+", lbl: "Dharamshalas Digitized", icon: "fa-gopuram" },
              { val: "100%", lbl: "Police Yatri Compliance", icon: "fa-shield-halved" },
              { val: "₹12Cr+", lbl: "Donations Audited Today", icon: "fa-hand-holding-heart" },
              { val: "Sub-Sec", lbl: "Trustee Approval Notification", icon: "fa-bolt" }
            ].map((stat) => (
              <div key={stat.lbl} className="col-6 col-md-3">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontSize: "1.4rem", color: "#ea580c", marginBottom: "8px" }}><i className={`fa-solid ${stat.icon}`}></i></div>
                  <div style={{ fontSize: "2.1rem", fontWeight: 900, color: "#78350f", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{stat.val}</div>
                  <div style={{ fontSize: "0.85rem", color: "#9a3412", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>{stat.lbl}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Room Category Grid */}
      <section style={{ background: "#fafaf9", padding: "90px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ background: "#ffedd5", color: "#ea580c", fontSize: "0.8rem", fontWeight: 800, padding: "6px 18px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Room Category &amp; Bed Rates
            </span>
            <h2 style={{ fontSize: "2.3rem", fontWeight: 900, color: "#451a03", marginTop: "14px" }}>
              Flexible Accommodations &amp; Hall Bookings
            </h2>
            <p style={{ color: "#78350f", maxWidth: "600px", margin: "10px auto 0" }}>
              Configure separate standard rates, devotee check-in rules, and bed capacities. Updated in real-time as pilgrims register.
            </p>
          </div>

          <div className="row g-4">
            {roomsData.map((room) => (
              <div key={room.type} className="col-md-6 col-lg-3">
                <div className="ds-room-card h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div style={{ display: "flex", justifycontent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                      <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "#ffedd5", color: "#ea580c", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>
                        <i className={`fa-solid ${room.icon} m-auto`}></i>
                      </div>
                      <span className="ds-room-badge">{room.count}</span>
                    </div>
                    <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#451a03", marginBottom: "8px" }}>{room.type}</h4>
                    <p style={{ fontSize: "0.9rem", color: "#78350f" }}><i className="fa-solid fa-users me-1 text-warning"></i> Capacity: {room.capacity}</p>
                  </div>
                  <div style={{ borderTop: "1px dashed #fed7aa", paddingTop: "14px", marginTop: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "1.25rem", fontWeight: 900, color: "#ea580c" }}>{room.price}</span>
                    <a href="#dharamshala-live-register" onClick={() => setBookingForm({...bookingForm, roomType: room.type})} className="btn btn-sm btn-outline-warning fw-bold px-3 py-1">Select</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight Features split section */}
      <section style={{ background: "#fff", padding: "90px 0" }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <span style={{ color: "#d97706", fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase" }}>Security &amp; Audit Tools</span>
              <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "#451a03", margin: "10px 0 20px" }}>Secure Yatri Compliance &amp; Charitable Billing</h2>
              <p style={{ color: "#4b5563", lineHeight: 1.75, marginBottom: "30px" }}>
                Ashrams and temples require specialized registers for local administrative compliances. ChittorTech simplifies audit preparation and yatri register maintenance with built-in tools.
              </p>
              
              <div className="d-flex flex-column gap-4">
                <div className="ds-feature-row ds-vertical-accent p-4">
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#78350f" }}><i className="fa-solid fa-id-card me-2 text-warning"></i> Police Yatri Register Integration</h4>
                  <p style={{ fontSize: "0.9rem", color: "#6b7280", margin: 0 }}>Scan pilgrim IDs (Aadhaar, Voter ID, Passport) and generate automated daily log exports conforming to local administrative regulations.</p>
                </div>
                <div className="ds-feature-row ds-vertical-accent p-4" style={{ borderColor: "#d97706" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#78350f" }}><i className="fa-solid fa-hand-holding-heart me-2 text-warning"></i> Charitable 80G Receipt Engine</h4>
                  <p style={{ fontSize: "0.9rem", color: "#6b7280", margin: 0 }}>Create dynamic donation entries. The system automatically attaches tax exemption certificates and mails receipt copies directly to devotees.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div style={{ background: "#fffbeb", border: "2px solid #fed7aa", borderRadius: "24px", padding: "40px", boxShadow: "0 15px 35px rgba(120,53,15,0.04)" }}>
                <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#78350f", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <i className="fa-solid fa-stamp text-warning"></i> Simulated Exemption Receipt
                </h4>
                <div style={{ border: "1px dashed #fed7aa", background: "#fff", borderRadius: "12px", padding: "20px", fontFamily: "monospace" }}>
                  <div className="text-center" style={{ borderBottom: "1px dashed #e5e7eb", paddingBottom: "10px", marginBottom: "15px" }}>
                    <h5 style={{ fontWeight: 800, margin: 0 }}>SHRI KRISHNA TRUST</h5>
                    <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>Regd No: 80G/TRUST/DELHI/2026</span>
                  </div>
                  <div style={{ fontSize: "0.8rem", display: "grid", gap: "6px" }}>
                    <div><strong>Receipt No:</strong> SKT-9485</div>
                    <div><strong>Devotee:</strong> Rajesh Kumar Sharma</div>
                    <div><strong>Donation:</strong> ₹5,000.00 (General Fund)</div>
                    <div><strong>Tax Exemption:</strong> Eligible for 50% deduction U/S 80G</div>
                    <div style={{ textAlign: "center", marginTop: "10px", color: "#d97706", fontWeight: "bold" }}>[ TRUSTEE SIGNATURE SEAL ]</div>
                  </div>
                </div>
                <div style={{ marginTop: "24px", display: "flex", gap: "10px" }}>
                  <button className="btn btn-warning w-100 fw-bold btn-sm py-2 text-white" onClick={() => alert("Exemption receipt downloaded.")} style={{ background: "#ea580c", border: "none" }}><i className="fa-solid fa-download me-2"></i> Download PDF Receipt</button>
                  <button className="btn btn-outline-warning w-100 fw-bold btn-sm py-2" onClick={() => alert("Receipt sent on WhatsApp.")} style={{ borderColor: "#ea580c", color: "#ea580c" }}><i className="fa-brands fa-whatsapp me-2"></i> Send WhatsApp</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Yatri Register Book & Trustee Screen */}
      <section id="dharamshala-live-register" style={{ background: "#faf6f0", padding: "90px 0", borderTop: "1px solid #eedec5" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ background: "#ea580c", color: "#fff", fontSize: "0.8rem", fontWeight: 800, padding: "6px 18px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              Live Workflow Demo
            </span>
            <h2 style={{ fontSize: "2.3rem", fontWeight: 900, color: "#7c2d12", marginTop: "14px" }}>
              Devotee Register Book &amp; Trustee Admin
            </h2>
            <p style={{ color: "#9a3412", maxWidth: "600px", margin: "10px auto 0" }}>
              Submit a pilgrim entry below and watch the real-time record flow directly onto the Trustee Admin Panel.
            </p>
          </div>

          <div className="row g-5 align-items-stretch">
            {/* Left: Physical Register Book Mock */}
            <div className="col-lg-6">
              <div className="ds-register-book h-100">
                <h4 className="ds-register-title">
                  <i className="fa-solid fa-pen-nib me-2"></i> YATRI REGISTER ENTRY
                </h4>
                <form onSubmit={handleBookingSubmit}>
                  <div className="mb-3">
                    <label className="form-label small fw-bold" style={{ letterSpacing: "0.5px", color: "#7c2d12" }}>PILGRIM / YATRI NAME</label>
                    <input type="text" className="form-control" style={{ background: "#fffdf9", borderColor: "#fdba74", color: "#451a03" }} placeholder="Shri Rajesh Kumar Sharma" required value={bookingForm.name} onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold" style={{ letterSpacing: "0.5px", color: "#7c2d12" }}>CONTACT MOBILE</label>
                    <input type="text" className="form-control" style={{ background: "#fffdf9", borderColor: "#fdba74", color: "#451a03" }} placeholder="+91 9414XXXXXX" required value={bookingForm.phone} onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold" style={{ letterSpacing: "0.5px", color: "#7c2d12" }}>ACCOMMODATION TYPE</label>
                    <select className="form-select" style={{ background: "#fffdf9", borderColor: "#fdba74", color: "#451a03" }} value={bookingForm.roomType} onChange={(e) => setBookingForm({ ...bookingForm, roomType: e.target.value })}>
                      <option value="AC Deluxe Room">AC Deluxe Room</option>
                      <option value="Non-AC Standard Room">Non-AC Standard Room</option>
                      <option value="Family Hall (10 Bed)">Family Hall (10 Bed)</option>
                      <option value="Yatri Dormitory Bed">Yatri Dormitory Bed</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold" style={{ letterSpacing: "0.5px", color: "#7c2d12" }}>TOTAL YATRIS</label>
                    <input type="number" className="form-control" style={{ background: "#fffdf9", borderColor: "#fdba74", color: "#451a03" }} min="1" max="10" value={bookingForm.guests} onChange={(e) => setBookingForm({ ...bookingForm, guests: e.target.value })} />
                  </div>
                  <div className="row g-2 mb-4">
                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-bold" style={{ letterSpacing: "0.5px", color: "#7c2d12" }}>CHECK-IN DATE</label>
                      <input type="date" className="form-control" style={{ background: "#fffdf9", borderColor: "#fdba74", color: "#451a03" }} required value={bookingForm.checkIn} onChange={(e) => setBookingForm({ ...bookingForm, checkIn: e.target.value })} />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-bold" style={{ letterSpacing: "0.5px", color: "#7c2d12" }}>CHECK-OUT DATE</label>
                      <input type="date" className="form-control" style={{ background: "#fffdf9", borderColor: "#fdba74", color: "#451a03" }} required value={bookingForm.checkOut} onChange={(e) => setBookingForm({ ...bookingForm, checkOut: e.target.value })} />
                    </div>
                  </div>
                  <button type="submit" className="w-100 justify-content-center btn btn-warning fw-bold text-white py-3" style={{ background: "#ea580c", border: "none" }}>
                    <i className="fa-solid fa-feather-pointed me-2"></i> Register Pilgrim Entry
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Trustee Dashboard */}
            <div className="col-lg-6">
              <div className="ds-trustee-dashboard h-100 d-flex flex-column justify-content-between">
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#fffbeb", margin: 0, display: "flex", alignItems: "center", gap: "10px" }}>
                      <i className="fa-solid fa-circle-nodes text-warning"></i> TRUSTEE ADMIN LOG
                    </h4>
                    <span style={{ fontSize: "0.75rem", background: "rgba(245, 158, 11, 0.2)", color: "#f59e0b", padding: "4px 10px", borderRadius: "50px", border: "1px solid rgba(245, 158, 11, 0.4)", fontWeight: 700 }}>
                      Live Monitoring
                    </span>
                  </div>

                  {!submittedBooking ? (
                    <div className="text-center" style={{ padding: "60px 20px", color: "#fed7aa" }}>
                      <i className="fa-solid fa-envelope-open-text" style={{ fontSize: "3.5rem", marginBottom: "18px", color: "rgba(254, 215, 170, 0.15)", display: "block" }}></i>
                      <p style={{ fontSize: "0.95rem", margin: 0, lineHeight: 1.6 }}>No pending yatri registrations. Submit an entry on the left to trigger a Trustee notification!</p>
                    </div>
                  ) : (
                    <div className="ds-notification-card p-4">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", borderBottom: "1px dashed rgba(254, 215, 170, 0.15)", paddingBottom: "14px" }}>
                        <div>
                          <span style={{ fontSize: "0.7rem", color: "#f59e0b", fontWeight: 800, letterSpacing: "1.2px", textTransform: "uppercase" }}>New Pilgrim Registration</span>
                          <h5 style={{ color: "#fff", margin: "4px 0 0", fontWeight: 800 }}>Token: {submittedBooking.id}</h5>
                        </div>
                        <span style={{ background: submittedBooking.status === "Approved & Confirmed" ? "#10b981" : "#d97706", color: "#fff", padding: "4px 12px", borderRadius: "50px", fontSize: "0.72rem", fontWeight: 800 }}>
                          {submittedBooking.status}
                        </span>
                      </div>
                      <div style={{ fontSize: "0.9rem", color: "#ffedd5", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
                        <div><strong>Pilgrim Name:</strong> {submittedBooking.name}</div>
                        <div><strong>Mobile:</strong> {submittedBooking.phone}</div>
                        <div><strong>Room Type:</strong> {submittedBooking.roomType}</div>
                        <div><strong>Guests:</strong> {submittedBooking.guests} Person(s)</div>
                        <div><strong>Check-In:</strong> {submittedBooking.checkIn}</div>
                        <div><strong>Check-Out:</strong> {submittedBooking.checkOut}</div>
                        <div className="col-span-2"><strong>Triggered At:</strong> {submittedBooking.timestamp}</div>
                      </div>

                      {submittedBooking.status !== "Approved & Confirmed" ? (
                        <div style={{ display: "flex", gap: "10px" }}>
                          <button
                            onClick={() => setSubmittedBooking({ ...submittedBooking, status: "Approved & Confirmed" })}
                            className="btn btn-success btn-sm fw-bold px-3 py-2 flex-grow-1"
                          >
                            <i className="fa-solid fa-check-double me-1"></i> Approve &amp; Allocate Room
                          </button>
                          <button onClick={() => setSubmittedBooking(null)} className="btn btn-outline-light btn-sm px-3 py-2">
                            Dismiss
                          </button>
                        </div>
                      ) : (
                        <div style={{ background: "rgba(16,185,129,0.12)", border: "1px solid #10b981", color: "#10b981", borderRadius: "10px", padding: "12px", textAlign: "center", fontWeight: 700, fontSize: "0.85rem" }}>
                          <i className="fa-solid fa-circle-check me-1"></i> Pilgrim Entry Approved! Receipt PDF sent to {submittedBooking.phone}.
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div style={{ background: "rgba(0,0,0,0.15)", borderRadius: "12px", padding: "16px", marginTop: "24px", fontSize: "0.8rem", color: "#fed7aa" }}>
                  <i className="fa-solid fa-circle-info me-1"></i> Trustees can configure dynamic check-in approval workflows. If auto-approve is active, tokens skip this queue.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="container">
          <div style={{ background: "linear-gradient(135deg, #451a03 0%, #78350f 60%, #ea580c 100%)", borderRadius: "24px", padding: "clamp(35px, 8vw, 60px) clamp(15px, 5vw, 40px)", textAlign: "center", color: "#fffbeb" }}>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(1.6rem, 5vw, 2.3rem)", marginBottom: "14px" }}>Digitize Your Ashram &amp; Trust Management</h2>
            <p style={{ color: "#ffedd5", maxWidth: "600px", margin: "0 auto 28px" }}>
              Empower your trustees, secure pilgrim stays, and comply with all local administration reporting regulations.
            </p>
            <div className="cta-btn-group" style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <button className="ct-btn ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal" style={{ background: "#f59e0b", color: "#451a03", fontWeight: 800, border: "none" }}>
                <i className="fa-solid fa-calendar-check me-2"></i> Book Trust Demo Session
              </button>
              <a href="tel:+917597451057" className="ct-btn ct-btn-ghost ct-btn-lg" style={{ color: "#fffbeb", borderColor: "#fed7aa" }}>
                <i className="fa-solid fa-phone me-2"></i> Call Support: +91 7597451057
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
