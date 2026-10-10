"use client";
import React, { useState } from "react";
import "../../../public/assets/css/premium-products.css";

export default function Page() {
  const [resortBooking, setResortBooking] = useState({ name: "", phone: "", cottageType: "Private Pool Villa", checkIn: "", duration: "2 Nights" });
  const [resortAlert, setResortAlert] = useState(null);
  
  // Dynamic pricing state
  const [selectedPackagePrice, setSelectedPackagePrice] = useState(6500);
  const [addons, setAddons] = useState({ safari: false, yoga: false, spa: false });

  const calculateTotalPrice = () => {
    let total = selectedPackagePrice;
    if (addons.safari) total += 1500;
    if (addons.yoga) total += 500;
    if (addons.spa) total += 1200;
    return total;
  };

  const handleResortBooking = (e) => {
    e.preventDefault();
    setResortAlert({ 
      ...resortBooking, 
      id: "RST-" + Math.floor(1000 + Math.random() * 9000), 
      status: "Pending Manager Approval",
      totalCost: calculateTotalPrice(),
      addonsList: Object.keys(addons).filter(k => addons[k]).join(", ") || "None"
    });
  };

  return (
    <>
      <style>{`
        body { background-color: #f0fdf4; font-family: 'Inter', sans-serif !important; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Plus Jakarta Sans', sans-serif !important; color: #064e3b; }

        /* Scenic Split Screen Hero */
        .rst-nature-hero {
          background: radial-gradient(circle at 90% 10%, rgba(16, 185, 129, 0.15) 0%, transparent 40%),
                      linear-gradient(135deg, #064e3b 0%, #065f46 50%, #0d9488 100%);
          padding: 120px 0 100px;
          color: #fffbeb;
          position: relative;
          overflow: hidden;
          border-bottom: 6px solid #10b981;
        }
        .rst-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fffbeb;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          padding: 6px 18px;
          border-radius: 50px;
          margin-bottom: 20px;
        }
        .rst-decor-box {
          width: 250px;
          height: 250px;
          border-radius: 40px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 7rem;
          color: rgba(255,255,255,0.2);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          position: relative;
        }
        .rst-decor-box i {
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.2));
        }

        /* Package Selector Widgets */
        .rst-package-card {
          background: #fff;
          border: 2px solid #e2e8f0;
          border-radius: 20px;
          padding: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .rst-package-card.active {
          border-color: #10b981;
          background: #f0fdf4;
          box-shadow: 0 10px 25px rgba(16,185,129,0.1);
        }
        
        /* Addon Checkboxes */
        .addon-checkbox-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 14px 20px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.25s;
        }
        .addon-checkbox-label.active {
          border-color: #10b981;
          background: #f0fdf4;
          color: #064e3b;
        }

        /* Resort Admin View Villa Grid */
        .rst-admin-box {
          background: #064e3b;
          color: #fffbeb;
          border-radius: 24px;
          padding: 36px;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 20px 45px rgba(6,78,59,0.25);
        }
        .villa-status-tile {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 16px;
          font-size: 0.85rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .villa-status-occupied { color: #f59e0b; font-weight: 800; }
        .villa-status-vacant { color: #10b981; font-weight: 800; }
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
      <section className="rst-nature-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="rst-badge">
                <i className="fa-solid fa-tree"></i> Eco-Hospitality &amp; Spa Tech
              </span>
              <h1 style={{ fontSize: "clamp(2.3rem, 4.5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "22px", color: "#fff" }}>
                Resort &amp; Guest House Management Software
              </h1>
              <p style={{ fontSize: "1.1rem", color: "#d1fae5", lineHeight: 1.8, maxWidth: "680px", marginBottom: "36px" }}>
                Streamline cottage check-ins, lakeside villa availability grids, poolside beverage ticketing, and outdoor safari schedules. Link adventure activity packages directly to guest invoices with multi-currency checkout folios.
              </p>
              <div className="cta-btn-group" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="#resort-live-demo" className="ct-btn ct-btn-lg" style={{ background: "#10b981", color: "#fff", border: "none", fontWeight: 700 }}>
                  <i className="fa-solid fa-hotel me-2"></i> Launch Villa Booking Demo
                </a>
                <button className="ct-btn ct-btn-ghost ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal" style={{ borderColor: "#a7f3d0", color: "#fffbeb" }}>
                  <i className="fa-solid fa-person-hiking me-2"></i> Request Spa &amp; Safari Specs
                </button>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-flex justify-content-center">
              <div className="rst-decor-box">
                <i className="fa-solid fa-tents"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco Metrics Section */}
      <section style={{ background: "#fffbeb", padding: "45px 0", borderBottom: "1px solid #fef3c7" }}>
        <div className="container">
          <div className="row g-4 text-center">
            {[
              { val: "420+", lbl: "Retreats &amp; Eco-Lodges", icon: "fa-tree" },
              { val: "₹1,400+", lbl: "Average Activity Up-sell", icon: "fa-person-hiking" },
              { val: "100%", lbl: "Foreign Guest C-Form Sync", icon: "fa-file-shield" },
              { val: "Zero", lbl: "OTA Commission Booking System", icon: "fa-hand-holding-dollar" }
            ].map((stat) => (
              <div key={stat.lbl} className="col-6 col-md-3">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontSize: "1.3rem", color: "#10b981", marginBottom: "8px" }}><i className={`fa-solid ${stat.icon}`}></i></div>
                  <div style={{ fontSize: "2.1rem", fontWeight: 900, color: "#064e3b", fontFamily: "'Plus Jakarta Sans', sans-serif" }} dangerouslySetInnerHTML={{ __html: stat.val }}></div>
                  <div style={{ fontSize: "0.85rem", color: "#047857", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }} dangerouslySetInnerHTML={{ __html: stat.lbl }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Package Slider & Up-Selling Section */}
      <section style={{ background: "#f0fdf4", padding: "90px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ background: "#d1fae5", color: "#065f46", fontSize: "0.8rem", fontWeight: 800, padding: "6px 18px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Dynamic Package Configurator
            </span>
            <h2 style={{ fontSize: "2.3rem", fontWeight: 900, color: "#064e3b", marginTop: "14px" }}>
              Activity Package Up-Selling Configurator
            </h2>
            <p style={{ color: "#065f46", maxWidth: "600px", margin: "10px auto 0" }}>
              Explore how our software enables guests to add spa sessions or guided wilderness safari tours directly during room booking.
            </p>
          </div>

          <div className="row g-4 align-items-center">
            {/* Step A: Select Package base */}
            <div className="col-lg-7">
              <h4 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "18px", color: "#064e3b" }}>1. SELECT BASE VILLA STAYS</h4>
              <div className="row g-3 mb-4">
                {[
                  { name: "Private Pool Villa Stay", price: 9500, desc: "Secluded pool villa with floating breakfast" },
                  { name: "Lakeside Eco Cottage Stay", price: 6500, desc: "Scenic balcony with organic garden views" },
                  { name: "Luxury Safari Tent Stay", price: 4200, desc: "Canvas glamping with open-sky campfire access" }
                ].map(p => (
                  <div key={p.name} className="col-12">
                    <div className={`rst-package-card ${selectedPackagePrice === p.price ? "active" : ""}`} onClick={() => setSelectedPackagePrice(p.price)}>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h5 style={{ fontSize: "0.95rem", fontWeight: 800, margin: "0 0 4px", color: "#064e3b" }}>{p.name}</h5>
                          <span style={{ fontSize: "0.8rem", color: "#047857" }}>{p.desc}</span>
                        </div>
                        <span style={{ fontSize: "1.2rem", fontWeight: 900, color: "#10b981" }}>₹{p.price}/night</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h4 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "18px", color: "#064e3b" }}>2. ATTACH ADVENTURE / WELLNESS ACTIVITIES</h4>
              <div className="row g-2">
                <div className="col-md-4">
                  <div className={`addon-checkbox-label ${addons.safari ? "active" : ""}`} onClick={() => setAddons({...addons, safari: !addons.safari})}>
                    <span>Eco-Safari (+₹1.5k)</span>
                    <i className={addons.safari ? "fa-solid fa-circle-check" : "fa-regular fa-circle"}></i>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`addon-checkbox-label ${addons.yoga ? "active" : ""}`} onClick={() => setAddons({...addons, yoga: !addons.yoga})}>
                    <span>Sunrise Yoga (+₹500)</span>
                    <i className={addons.yoga ? "fa-solid fa-circle-check" : "fa-regular fa-circle"}></i>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`addon-checkbox-label ${addons.spa ? "active" : ""}`} onClick={() => setAddons({...addons, spa: !addons.spa})}>
                    <span>Forest Spa (+₹1.2k)</span>
                    <i className={addons.spa ? "fa-solid fa-circle-check" : "fa-regular fa-circle"}></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic visual calculator box */}
            <div className="col-lg-5">
              <div style={{ background: "#fffbeb", border: "2px solid #fef3c7", borderRadius: "24px", padding: "40px", boxShadow: "0 15px 35px rgba(6,78,59,0.03)" }}>
                <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#064e3b", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <i className="fa-solid fa-calculator text-success"></i> Real-Time Quote Calculator
                </h4>
                <div style={{ background: "#fff", borderRadius: "12px", padding: "20px", border: "1px solid #fef3c7" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontSize: "0.9rem" }}>
                    <span>Selected Base Stay:</span>
                    <span className="fw-bold">₹{selectedPackagePrice}</span>
                  </div>
                  <div style={{ borderBottom: "1px dashed #e2e8f0", paddingBottom: "10px", marginBottom: "10px" }}>
                    <span style={{ fontSize: "0.8rem", color: "#047857" }}>Add-on Activities:</span>
                    <div style={{ display: "grid", gap: "4px", marginTop: "6px", fontSize: "0.8rem" }}>
                      {addons.safari && <div className="d-flex justify-content-between"><span>- Eco Wilderness Safari</span><span>₹1,500</span></div>}
                      {addons.yoga && <div className="d-flex justify-content-between"><span>- Guided Sunrise Yoga</span><span>₹500</span></div>}
                      {addons.spa && <div className="d-flex justify-content-between"><span>- Ayurvedic Forest Spa</span><span>₹1,200</span></div>}
                      {!addons.safari && !addons.yoga && !addons.spa && <span className="text-muted italic">No activities selected</span>}
                    </div>
                  </div>
                  <div style={{ display: "flex", justifycontent: "space-between", alignItems: "center", paddingTop: "6px" }}>
                    <span style={{ fontSize: "1rem", fontWeight: 800 }}>Estimated Cost:</span>
                    <span style={{ fontSize: "1.4rem", fontWeight: 900, color: "#10b981" }}>₹{calculateTotalPrice()}</span>
                  </div>
                </div>
                <a href="#resort-live-demo" onClick={() => setResortBooking({...resortBooking, cottageType: selectedPackagePrice === 9500 ? "Private Pool Villa" : selectedPackagePrice === 6500 ? "Lake View Cottage" : "Luxury Safari Tent"})} className="w-100 btn btn-success fw-bold py-2 mt-4 text-white" style={{ background: "#10b981", border: "none" }}><i className="fa-solid fa-chevron-right me-2"></i> Book with Selected Options</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Resort Villa Booking & Admin Demo */}
      <section id="resort-live-demo" style={{ background: "#fff", padding: "90px 0", borderTop: "1px solid #d1fae5" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ background: "#d1fae5", color: "#065f46", fontSize: "0.8rem", fontWeight: 800, padding: "6px 18px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              Live Workflow Demo
            </span>
            <h2 style={{ fontSize: "2.3rem", fontWeight: 900, color: "#064e3b", marginTop: "14px" }}>
              Cottage Booking Form &amp; Resort Admin Grid
            </h2>
            <p style={{ color: "#047857", maxWidth: "600px", margin: "10px auto 0" }}>
              Simulate villa check-ins and watch status flags toggle automatically inside the Resort front-desk database dashboard.
            </p>
          </div>

          <div className="row g-5 align-items-stretch">
            {/* Left: Resort Booking Form */}
            <div className="col-lg-5">
              <div style={{ background: "#f0fdf4", border: "2px solid #cbd5e1", borderRadius: "24px", padding: "36px", borderColor: "#a7f3d0", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#065f46", color: "#fff", display: "flex", alignItems: "center", justifycontent: "center", fontWeight: 800 }}>1</div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#064e3b", margin: 0 }}>Cottage/Villa Reservation</h4>
                </div>
                
                <form onSubmit={handleResortBooking}>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted" style={{ letterSpacing: "0.5px" }}>GUEST FULL NAME</label>
                    <input type="text" className="form-control" style={{ background: "#fff", borderColor: "#a7f3d0" }} placeholder="e.g. Radhika Merchant" required value={resortBooking.name} onChange={(e) => setResortBooking({ ...resortBooking, name: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted" style={{ letterSpacing: "0.5px" }}>MOBILE NUMBER</label>
                    <input type="text" className="form-control" style={{ background: "#fff", borderColor: "#a7f3d0" }} placeholder="+91 9414XXXXXX" required value={resortBooking.phone} onChange={(e) => setResortBooking({ ...resortBooking, phone: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted" style={{ letterSpacing: "0.5px" }}>SELECTED COTTAGE</label>
                    <select className="form-select" style={{ background: "#fff", borderColor: "#a7f3d0" }} value={resortBooking.cottageType} onChange={(e) => setResortBooking({ ...resortBooking, cottageType: e.target.value })}>
                      <option value="Private Pool Villa">Private Pool Villa</option>
                      <option value="Lake View Cottage">Lake View Cottage</option>
                      <option value="Luxury Safari Tent">Luxury Safari Tent</option>
                    </select>
                  </div>
                  <div className="row g-2 mb-4">
                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-bold text-muted" style={{ letterSpacing: "0.5px" }}>CHECK-IN DATE</label>
                      <input type="date" className="form-control" style={{ background: "#fff", borderColor: "#a7f3d0" }} required value={resortBooking.checkIn} onChange={(e) => setResortBooking({ ...resortBooking, checkIn: e.target.value })} />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-bold text-muted" style={{ letterSpacing: "0.5px" }}>PACKAGE DURATION</label>
                      <select className="form-select" style={{ background: "#fff", borderColor: "#a7f3d0" }} value={resortBooking.duration} onChange={(e) => setResortBooking({ ...resortBooking, duration: e.target.value })}>
                        <option value="2 Nights">2 Nights Package</option>
                        <option value="3 Nights">3 Nights Package</option>
                        <option value="5 Nights">5 Nights Stay</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="w-100 justify-content-center btn btn-success fw-bold text-white py-3" style={{ background: "#065f46", border: "none" }}>
                    <i className="fa-solid fa-feather-pointed me-2"></i> Book Resort Villa Online
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Resort Admin Grid */}
            <div className="col-lg-7">
              <div className="rst-admin-box h-100 d-flex flex-column justify-content-between">
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}>
                    <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#fffbeb", margin: 0, display: "flex", alignItems: "center", gap: "10px" }}>
                      <i className="fa-solid fa-hotel text-success"></i> RESORT FRONT-DESK BOARD
                    </h4>
                    <span style={{ fontSize: "0.75rem", background: "rgba(16, 185, 129, 0.2)", color: "#10b981", padding: "4px 10px", borderRadius: "50px", border: "1px solid rgba(16, 185, 129, 0.4)", fontWeight: 700 }}>
                      SYSTEM ONLINE
                    </span>
                  </div>

                  <div className="d-flex flex-column gap-3">
                    {/* Villa 1 */}
                    <div className="villa-status-tile">
                      <div>
                        <strong>Villa A101 (Private Pool Villa)</strong>
                        <div style={{ fontSize: "0.75rem", color: "#a7f3d0" }}>Occupied by Dr. Mehra</div>
                      </div>
                      <span className="villa-status-occupied"><i className="fa-solid fa-lock me-1"></i> RESERVED</span>
                    </div>

                    {/* Villa 2 */}
                    <div className="villa-status-tile">
                      <div>
                        <strong>Villa A102 (Lake View Cottage)</strong>
                        {resortAlert && resortAlert.status === "Villa Reserved" ? (
                          <div style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: 700 }}>Occupancy Allocated: {resortAlert.name}</div>
                        ) : (
                          <div style={{ fontSize: "0.75rem", color: "#a7f3d0" }}>Available</div>
                        )}
                      </div>
                      {resortAlert && resortAlert.status === "Villa Reserved" ? (
                        <span className="villa-status-occupied" style={{ color: "#10b981" }}><i className="fa-solid fa-circle-check me-1"></i> ASSIGNED</span>
                      ) : (
                        <span className="villa-status-vacant"><i className="fa-solid fa-lock-open me-1"></i> VACANT</span>
                      )}
                    </div>

                    {/* Villa 3 */}
                    <div className="villa-status-tile">
                      <div>
                        <strong>Villa A103 (Luxury Safari Tent)</strong>
                        <div style={{ fontSize: "0.75rem", color: "#a7f3d0" }}>Housekeeping cleanup check</div>
                      </div>
                      <span className="villa-status-occupied" style={{ color: "#ef4444" }}><i className="fa-solid fa-broom me-1"></i> DIRTY</span>
                    </div>
                  </div>

                  {/* Active Notification Alert overlay */}
                  {resortAlert && resortAlert.status !== "Villa Reserved" && (
                    <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid #10b981", borderRadius: "16px", padding: "20px", marginTop: "24px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px", borderBottom: "1px dashed rgba(255,255,255,0.15)", paddingBottom: "8px" }}>
                        <div>
                          <span style={{ fontSize: "0.7rem", color: "#10b981", fontWeight: 800, textTransform: "uppercase" }}>New Booking Alert</span>
                          <h5 style={{ margin: "4px 0 0", color: "#fffbeb", fontWeight: 800 }}>Token: {resortAlert.id}</h5>
                        </div>
                        <span style={{ background: "#f59e0b", color: "#000", fontSize: "0.72rem", fontWeight: 800, padding: "2px 10px", borderRadius: "50px" }}>{resortAlert.status}</span>
                      </div>
                      <p style={{ fontSize: "0.85rem", color: "#d1fae5", margin: "0 0 16px" }}>
                        Guest <strong>{resortAlert.name}</strong> requested {resortAlert.cottageType} for {resortAlert.duration}. Total cost: <strong>₹{resortAlert.totalCost}</strong>. Addons: <strong>{resortAlert.addonsList}</strong>.
                      </p>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <button
                          onClick={() => setResortAlert({ ...resortAlert, status: "Villa Reserved" })}
                          className="btn btn-success btn-sm fw-bold px-3 flex-grow-1"
                          style={{ background: "#10b981", border: "none" }}
                        >
                          Approve Villa Assignment
                        </button>
                        <button onClick={() => setResortAlert(null)} className="btn btn-outline-light btn-sm px-3">
                          Dismiss
                        </button>
                      </div>
                    </div>
                  )}

                </div>

                <div style={{ background: "rgba(0,0,0,0.15)", borderRadius: "12px", padding: "16px", marginTop: "24px", fontSize: "0.8rem", color: "#a7f3d0" }}>
                  <i className="fa-solid fa-circle-info me-1"></i> Resort software syncs check-in allocations with maid schedules and poolside dining folios.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "#f0fdf4" }}>
        <div className="container">
          <div style={{ background: "linear-gradient(135deg, #064e3b 0%, #065f46 60%, #0d9488 100%)", borderRadius: "24px", padding: "clamp(35px, 8vw, 60px) clamp(15px, 5vw, 40px)", textAlign: "center", color: "#fffbeb" }}>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(1.6rem, 5vw, 2.3rem)", marginBottom: "14px" }}>Upgrade Your Resort Software Today</h2>
            <p style={{ color: "#d1fae5", maxWidth: "600px", margin: "0 auto 28px" }}>
              Drive 0% commission direct website room bookings and automate guest spa, adventure activities, and front-desk approval notifications.
            </p>
            <div className="cta-btn-group" style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <button className="ct-btn ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal" style={{ background: "#10b981", color: "#064e3b", fontWeight: 800, border: "none" }}>
                <i className="fa-solid fa-calendar-check me-2"></i> Book Free Resort Demo Session
              </button>
              <a href="tel:+917597451057" className="ct-btn ct-btn-ghost ct-btn-lg" style={{ color: "#fffbeb", borderColor: "#a7f3d0" }}>
                <i className="fa-solid fa-phone me-2"></i> Support: +91 7597451057
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
