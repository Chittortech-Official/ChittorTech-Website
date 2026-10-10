"use client";
import React, { useState } from "react";
import { submitLead } from "@/lib/leadService";
import "../../../public/assets/css/premium-products.css";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    industry: "", // Service Required
    location: "",
    remark: "", // Project Details / Requirements
  });
  const [submitting, setSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "danger"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMsg("");

    // Validate required fields
    if (!formData.name || !formData.email || !formData.mobile || !formData.location || !formData.industry) {
      setStatusType("danger");
      setStatusMsg("Please fill in all required fields.");
      setSubmitting(false);
      return;
    }

    const submissionPayload = {
      name: formData.name,
      email: formData.email,
      contact: formData.mobile,
      location: formData.location,
      industry: formData.industry,
      message: formData.remark,
      company: "N/A",
      firm: "N/A",
    };

    // Instant feedback to user
    setStatusType("success");
    setStatusMsg("Thank you! Your message has been sent successfully. Our engineering team will get back to you shortly.");
    
    // Clear form
    setFormData({
      name: "",
      mobile: "",
      email: "",
      industry: "",
      location: "",
      remark: "",
    });

    // Send payload into Firestore and trigger email
    submitLead(submissionPayload).catch((err) => {
      console.error("Lead submission error:", err);
    });

    setSubmitting(false);
  };

  return (
    <>
      <style>{`
        /* ChittorTech Design System — Inner Page Overrides */
        body { font-family: 'Inter', 'Segoe UI', sans-serif !important; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Plus Jakarta Sans', 'Inter', sans-serif !important; }
        
        section { position: relative; }
        
        .schedule-btn, .btn-hero-primary, a.schedule-btn {
          display: inline-flex !important;
          align-items: center !important;
          gap: 8px !important;
          padding: 12px 28px !important;
          background: linear-gradient(135deg, #291fbc, #3b82f6) !important;
          color: #fff !important;
          border-radius: 10px !important;
          font-weight: 700 !important;
          font-family: 'Inter', sans-serif !important;
          font-size: 0.95rem !important;
          border: none !important;
          text-decoration: none !important;
          transition: all 0.25s ease !important;
          box-shadow: 0 4px 16px rgba(41,31,188,0.3) !important;
        }
        .schedule-btn:hover, a.schedule-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 24px rgba(41,31,188,0.4) !important;
          color: #fff !important;
        }

        .section-title, .main-title, .sec-title {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-weight: 800 !important;
          color: #1e1b4b !important;
        }

        .feature-card, .item-wrap, .why-item, .benfit-item {
          transition: all 0.3s ease !important;
          border-radius: 16px !important;
        }
        .feature-card:hover, .item-wrap:hover, .why-item:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 20px 50px rgba(41,31,188,0.1) !important;
        }

        .cta-sec, .cta-section {
          background: linear-gradient(135deg, #1e1b4b 0%, #291fbc 60%, #0e7490 100%) !important;
        }
        
        .breadcrumb-item.active { color: #06b6d4 !important; }
        
        .accordion-button:not(.collapsed) {
          color: #291fbc !important;
          background-color: rgba(41,31,188,0.05) !important;
          box-shadow: none !important;
        }
        .accordion-button:focus { box-shadow: 0 0 0 3px rgba(41,31,188,0.2) !important; }
        
        .nav-tabs .nav-link.active {
          color: #291fbc !important;
          border-bottom-color: #291fbc !important;
        }

        .info-card {
          background: white;
          padding: 30px 24px;
          border-radius: 18px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 10px 30px rgba(41,31,188,0.06);
          border: 1px solid #e2e8f0;
          transition: 0.3s ease;
        }
        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(41,31,188,0.12);
        }
        .info-icon {
          width: 55px;
          height: 55px;
          background: linear-gradient(135deg, #291fbc, #3b82f6);
          color: white;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }
        .info-content h5 {
          font-size: 1.05rem;
          font-weight: 800;
          color: #1e1b4b;
          margin-bottom: 4px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .info-content a, .info-content p {
          color: #64748b;
          text-decoration: none;
          font-size: 0.92rem;
          line-height: 1.6;
        }
        .premium-input-group {
          margin-bottom: 8px;
        }
        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-with-icon i {
          position: absolute;
          left: 16px;
          color: #94a3b8;
          font-size: 0.9rem;
          pointer-events: none;
          z-index: 10;
        }
        .input-with-icon .form-control,
        .input-with-icon .form-select {
          padding-left: 42px !important;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          padding-top: 10px;
          padding-bottom: 10px;
          font-size: 0.9rem;
          color: #1e293b;
          background-color: #f8fafc;
          transition: all 0.25s ease;
          width: 100%;
        }
        .input-with-icon .form-control:focus,
        .input-with-icon .form-select:focus {
          border-color: #291fbc;
          box-shadow: 0 0 0 3px rgba(41,31,188,0.15);
          background-color: #fff;
        }
      `}</style>

      {/* ── Modern Inner Page Hero ── */}
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #291fbc 55%, #0e7490 100%)', padding: '90px 0 70px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)', top: '-200px', right: '-100px', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', padding: '6px 16px', borderRadius: '50px', marginBottom: '20px' }}>
                <i className="fa-solid fa-envelope"></i> Contact Us
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Get in Touch with ChittorTech
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Have questions or need custom AI/IT solutions? Book a free consultation or send us a message — our engineering team responds within 2 hours.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button className="ct-btn ct-btn-primary ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal">
                  <i className="fa-solid fa-calendar-check"></i> Book Free Demo
                </button>
                <a href="tel:+917597451057" className="ct-btn ct-btn-ghost">
                  <i className="fa-solid fa-phone"></i> Call Engineering Team
                </a>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-flex justify-content-center">
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', color: 'rgba(255,255,255,0.4)' }}>
                <i className="fa-solid fa-envelope"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section-new" style={{ paddingTop: "60px", paddingBottom: "80px", background: "#f8fafc" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              {/* Contact Form */}
              <div className="contact-form-premium mb-5" style={{ boxShadow: "0 15px 35px rgba(41,31,188,0.06)", background: "#fff", padding: "40px", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
                <div className="form-header mb-4 text-center">
                  <h3 className="fw-bold mb-1" style={{ color: "#1e1b4b", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Send a Message</h3>
                  <p className="text-muted small">Fill out the form below and our engineering team will get back to you shortly.</p>
                </div>
                
                {statusMsg && (
                  <div className={`alert alert-${statusType === "success" ? "success" : "danger"} mb-4`} role="alert" style={{ borderRadius: "12px", fontSize: "0.9rem", fontWeight: 600 }}>
                    <i className={`fas fa-${statusType === "success" ? "check-circle" : "exclamation-triangle"} me-2`}></i>
                    {statusMsg}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="col-md-6">
                    <div className="premium-input-group">
                      <label className="form-label fw-bold small text-muted">FULL NAME*</label>
                      <div className="input-with-icon">
                        <i className="fas fa-user"></i>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="premium-input-group">
                      <label className="form-label fw-bold small text-muted">MOBILE NUMBER*</label>
                      <div className="input-with-icon">
                        <i className="fas fa-phone"></i>
                        <input
                          type="text"
                          name="mobile"
                          className="form-control"
                          placeholder="+91 7597451057"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="premium-input-group">
                      <label className="form-label fw-bold small text-muted">EMAIL ADDRESS*</label>
                      <div className="input-with-icon">
                        <i className="fas fa-envelope"></i>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="premium-input-group">
                      <label className="form-label fw-bold small text-muted">SERVICE REQUIRED*</label>
                      <div className="input-with-icon">
                        <i className="fas fa-robot"></i>
                        <select
                          name="industry"
                          className="form-select"
                          value={formData.industry}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Service</option>
                          <option value="AI Chatbots & Agents">AI Chatbots &amp; Agents</option>
                          <option value="Enterprise AI Workflows">Enterprise AI Workflows</option>
                          <option value="RAG Knowledge Base">RAG Knowledge Base</option>
                          <option value="Custom LLM Fine-Tuning">Custom LLM Fine-Tuning</option>
                          <option value="Web & SaaS Development">Web &amp; SaaS Development</option>
                          <option value="SEO & Digital Growth">SEO &amp; Digital Growth</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="premium-input-group">
                      <label className="form-label fw-bold small text-muted">CITY / LOCATION*</label>
                      <div className="input-group" style={{ borderRadius: "10px", overflow: "hidden", border: "1px solid #e2e8f0", background: "#f8fafc" }}>
                        <span className="input-group-text" style={{ background: "transparent", border: "none", paddingLeft: "15px", paddingRight: "15px", color: "#94a3b8" }}><i className="fas fa-map-marker-alt"></i></span>
                        <input
                          type="text"
                          id="contactLocation"
                          name="location"
                          className="form-control"
                          placeholder="Enter City (e.g. Chittorgarh, Jaipur, Delhi)"
                          value={formData.location}
                          onChange={handleChange}
                          required
                          style={{ border: "none", background: "transparent", height: "50px", fontSize: "0.95rem", color: "#334155", boxShadow: "none" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="premium-input-group">
                      <label className="form-label fw-bold small text-muted">PROJECT DETAILS / REQUIREMENTS</label>
                      <textarea
                        name="remark"
                        className="form-control"
                        placeholder="Tell us more about your project or AI automation requirements..."
                        value={formData.remark}
                        onChange={handleChange}
                        style={{ height: "120px", padding: "12px 16px", borderRadius: "10px", fontSize: "0.9rem" }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12 mt-3 d-flex justify-content-center">
                    <button type="submit" className="schedule-btn w-100" style={{ maxWidth: "260px", justifyContent: "center" }} disabled={submitting}>
                      {submitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          Send Message <i className="fas fa-paper-plane ms-2"></i>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Info Cards */}
              <div className="contact-info-wrap mt-5">
                <div className="row g-4 justify-content-center">
                  <div className="col-md-4">
                    <div className="info-card flex-column text-center h-100" style={{ borderTop: "5px solid #291fbc" }}>
                      <div className="info-icon mx-auto mb-3"><i className="fas fa-envelope"></i></div>
                      <div className="info-content">
                        <h5>Direct Email</h5>
                        <div className="small text-muted mb-1" style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px" }}>Business Enquiries</div>
                        <span dangerouslySetInnerHTML={{ __html: '<!--email_off--><a href="mailto:business@chittortech.in" rel="nofollow" className="fw-bold text-dark d-block">business@chittortech.in</a><!--/email_off-->' }} />
                        <div className="small text-muted mt-2 mb-1" style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px" }}>General Enquiry</div>
                        <span dangerouslySetInnerHTML={{ __html: '<!--email_off--><a href="mailto:contact@chittortech.in" rel="nofollow" className="fw-bold text-dark d-block">contact@chittortech.in</a><!--/email_off-->' }} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="info-card flex-column text-center h-100" style={{ borderTop: "5px solid #06b6d4" }}>
                      <div className="info-icon mx-auto mb-3" style={{ background: "linear-gradient(135deg, #06b6d4, #3b82f6)" }}><i className="fas fa-phone-alt"></i></div>
                      <div className="info-content">
                        <h5>Phone / WhatsApp</h5>
                        <a href="tel:+917597451057" className="fw-bold text-dark">+91 7597451057</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="info-card flex-column text-center h-100" style={{ borderTop: "5px solid #10b981" }}>
                      <div className="info-icon mx-auto mb-3" style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}><i className="fas fa-map-marker-alt"></i></div>
                      <div className="info-content">
                        <h5>Our Presence</h5>
                        <p className="mb-0 text-dark"><i className="fas fa-building me-2 text-muted"></i><strong>Headquarters:</strong><br />Chittorgarh, Rajasthan – 312001</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="map-section-new">
        <div className="container-fluid p-0">
          <div className="map-container" style={{ filter: "contrast(1.05)", borderTop: "1px solid #e2e8f0" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14545.986877478648!2d74.6225!3d24.8887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968a06706e23293%3A0x6b6c00cfd8fa6b0!2sChittorgarh%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1739851234567!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy">
            </iframe>
          </div>
        </div>
      </section>
    </>
  );
}
