"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function GovernmentSolutionsPage() {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      q: "Can government departments and municipal bodies procure directly under GFR / GeM rules?",
      a: "Yes. ChittorTech is an officially recognized startup under DPIIT (Govt. of India), incubated under iStart Rajasthan (DoIT&C, Govt. of Rajasthan with verified 32 Q-Rate score), and registered under Ministry of MSME (Udyam: UDYAM-RJ-09-0027731). Departments can engage us via direct procurement within GFR limits (Rule 149 / 154 / 155), proprietary startup mechanisms, or competitive e-procurement tenders."
    },
    {
      q: "Where is citizen data stored, and what security standards are followed?",
      a: "100% of data remains within Indian geographical boundaries. Platforms can be deployed either on MeitY-empaneled Indian cloud data centers (AWS India, Azure Central India, or NxtGen/CtrlS) or directly on government on-premise servers. All software complies with CERT-In guidelines, OWASP Top 10 vulnerabilities mitigation, role-based access control (RBAC), and 256-bit TLS encryption in transit and at rest."
    },
    {
      q: "Who owns the source code and database upon project delivery?",
      a: "The procuring government department, municipal council, or trust has 100% ownership of the custom source code, database architecture, and intellectual property upon project handover. ChittorTech provides complete code documentation, administrative manuals, and hands-on staff training."
    },
    {
      q: "Do you provide post-launch Annual Maintenance Contracts (AMC) and bug fixes?",
      a: "Yes. Every government deployment includes an initial 30-day dedicated warranty support. Post-launch, we offer flexible 1-year to 3-year SLA-backed Annual Maintenance Contracts (AMC) covering server security patches, zero-day threat containment, database backups, and emergency feature enhancements."
    }
  ];

  return (
    <div style={{ background: "#f8fafc", color: "#0f172a", minHeight: "100vh", overflowX: "hidden" }}>
      {/* ── Top Tricolor Border Strip ── */}
      <div
        style={{
          height: "4px",
          background: "linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)",
        }}
      />

      {/* ── Breadcrumb Bar (Mobile-safe) ── */}
      <div style={{ background: "#ffffff", borderBottom: "1px solid #e2e8f0", padding: "10px 0" }}>
        <div className="container" style={{ maxWidth: "1140px", padding: "0 16px" }}>
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div style={{ fontSize: "0.82rem", color: "#64748b" }}>
              <Link href="/" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>Home</Link>
              <span className="mx-2">/</span>
              <span>Industries</span>
              <span className="mx-2">/</span>
              <span style={{ fontWeight: 700, color: "#0f172a" }}>E-Governance</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <span style={{ background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe", padding: "4px 10px", borderRadius: "20px", fontSize: "0.72rem", fontWeight: 700 }}>
                <i className="fa-solid fa-shield-halved me-1 text-primary"></i> iStart Q-Rate 32
              </span>
              <span style={{ background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0", padding: "4px 10px", borderRadius: "20px", fontSize: "0.72rem", fontWeight: 700 }}>
                <i className="fa-solid fa-certificate me-1 text-success"></i> GFR & GeM Ready
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section style={{ padding: "clamp(36px, 5vw, 64px) 0", background: "radial-gradient(circle at 80% 20%, #eff6ff 0%, #ffffff 80%)", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container" style={{ maxWidth: "1140px", padding: "0 16px" }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#f1f5f9",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  border: "1px solid #cbd5e1",
                  marginBottom: "16px",
                }}
              >
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#16a34a" }}></span>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#334155", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                  Public Sector & E-Governance Engineering Desk
                </span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(1.65rem, 3.2vw, 2.75rem)",
                  fontWeight: 900,
                  lineHeight: 1.25,
                  color: "#0f172a",
                  marginBottom: "16px",
                  letterSpacing: "-0.5px",
                }}
              >
                Websites, portals and complaint management systems for government departments and municipal bodies.
              </h1>

              <p
                style={{
                  fontSize: "clamp(0.92rem, 1.8vw, 1.05rem)",
                  lineHeight: 1.6,
                  color: "#475569",
                  marginBottom: "24px",
                  maxWidth: "600px",
                }}
              >
                Purpose-built digital infrastructure engineered for District Police Administrations, Municipal Councils (Nagar Parishads), and Public Sector Trusts. Zero paper backlogs, real-time civic grievance escalation, and 100% GFR-compliant architecture.
              </p>

              {/* CTA */}
              <div className="mb-4">
                <a
                  href="https://wa.me/917597451057?text=Namaste%20Kush%20Sir%2C%20I%20am%20reaching%20out%20from%20%5BDepartment%2FOrganization%5D%20regarding%20an%20E-Governance%2FGovernment%20portal%20requirement."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                    color: "#ffffff",
                    fontWeight: 700,
                    padding: "12px 24px",
                    borderRadius: "10px",
                    fontSize: "0.94rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 6px 18px -4px rgba(37, 99, 235, 0.4)",
                  }}
                >
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: "1.1rem" }}></i>
                  Chat on WhatsApp (Direct CGRO Desk)
                </a>
              </div>

              {/* Accreditations Row */}
              <div className="pt-3 border-top" style={{ borderColor: "#e2e8f0" }}>
                <div style={{ fontSize: "0.74rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>
                  Verified Accreditations & Procurement Readiness:
                </div>
                <div className="d-flex align-items-center flex-wrap gap-2">
                  <span style={{ background: "#ffffff", border: "1px solid #cbd5e1", padding: "4px 10px", borderRadius: "6px", fontSize: "0.78rem", color: "#1e293b" }}>
                    🏛️ <strong>GeBIZ Singapore</strong> (#Y309075)
                  </span>
                  <span style={{ background: "#ffffff", border: "1px solid #cbd5e1", padding: "4px 10px", borderRadius: "6px", fontSize: "0.78rem", color: "#1e293b" }}>
                    🇺🇸 <strong>US SAM.gov</strong> (#11145293)
                  </span>
                  <span style={{ background: "#ffffff", border: "1px solid #cbd5e1", padding: "4px 10px", borderRadius: "6px", fontSize: "0.78rem", color: "#1e293b" }}>
                    🌏 <strong>ADB</strong> (CMS #045233)
                  </span>
                  <span style={{ background: "#ffffff", border: "1px solid #cbd5e1", padding: "4px 10px", borderRadius: "6px", fontSize: "0.78rem", color: "#1e293b" }}>
                    🇮🇳 <strong>MSME / Udyam</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Mockup Card (Desktop Only, Hidden on Mobile) */}
            <div className="col-lg-5 d-none d-lg-block">
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  border: "1px solid #cbd5e1",
                  boxShadow: "0 18px 36px -12px rgba(15, 23, 42, 0.1)",
                  overflow: "hidden",
                }}
              >
                {/* Clean Light Titlebar */}
                <div style={{ background: "#f8fafc", padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #e2e8f0" }}>
                  <div style={{ display: "flex", gap: "6px" }}>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#cbd5e1" }}></span>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#cbd5e1" }}></span>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#cbd5e1" }}></span>
                  </div>
                  <div style={{ fontSize: "0.74rem", color: "#64748b", background: "#ffffff", border: "1px solid #e2e8f0", padding: "3px 14px", borderRadius: "6px", fontWeight: 600 }}>
                    🔒 https://egov.chittortech.in
                  </div>
                  <span style={{ fontSize: "0.7rem", color: "#16a34a", fontWeight: 700 }}>● SECURE</span>
                </div>

                <div style={{ padding: "20px" }}>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "#eff6ff", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>
                      <i className="fa-solid fa-landmark"></i>
                    </div>
                    <div>
                      <h6 style={{ margin: 0, fontWeight: 800, color: "#0f172a", fontSize: "0.98rem" }}>Public Sector IT Architecture</h6>
                      <small style={{ color: "#64748b", fontSize: "0.78rem" }}>Designed for District & Municipal Governance</small>
                    </div>
                  </div>

                  <div className="d-flex flex-column gap-2 mb-3">
                    <div style={{ background: "#f8fafc", padding: "10px 12px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                      <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#0f172a", display: "flex", alignItems: "center", gap: "6px" }}>
                        <i className="fa-solid fa-check text-primary"></i> GIGW & WCAG 2.1 AA Compliance
                      </div>
                      <small style={{ color: "#64748b", fontSize: "0.75rem", display: "block", marginTop: "2px" }}>
                        Bilingual (Hindi/English), screen-reader ready, and low-bandwidth optimized.
                      </small>
                    </div>

                    <div style={{ background: "#f8fafc", padding: "10px 12px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                      <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#0f172a", display: "flex", alignItems: "center", gap: "6px" }}>
                        <i className="fa-solid fa-check text-primary"></i> CERT-In & OWASP Hardened
                      </div>
                      <small style={{ color: "#64748b", fontSize: "0.75rem", display: "block", marginTop: "2px" }}>
                        Role-based access control (RBAC), TLS 1.3, and MeitY-empaneled Indian cloud hosting.
                      </small>
                    </div>

                    <div style={{ background: "#f8fafc", padding: "10px 12px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                      <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#0f172a", display: "flex", alignItems: "center", gap: "6px" }}>
                        <i className="fa-solid fa-check text-primary"></i> 100% Source Code Ownership
                      </div>
                      <small style={{ color: "#64748b", fontSize: "0.75rem", display: "block", marginTop: "2px" }}>
                        Full IP transfer to the procuring department upon milestone handover.
                      </small>
                    </div>
                  </div>

                  <a
                    href="#lead-form"
                    className="btn w-100"
                    style={{ background: "#eff6ff", color: "#1d4ed8", fontWeight: 700, fontSize: "0.84rem", border: "1px solid #bfdbfe", borderRadius: "8px", padding: "9px" }}
                  >
                    Request Technical DPR & Scope Demo →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE 3 CORE CASE STUDIES (CLEAN CORPORATE ENTERPRISE CARDS) ── */}
      <section style={{ padding: "clamp(45px, 6vw, 75px) 0 clamp(80px, 10vw, 110px) 0", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container" style={{ maxWidth: "1160px", padding: "0 16px" }}>
          <div className="text-center mb-4 mb-md-5">
            <span style={{ background: "#eff6ff", color: "#2563eb", padding: "5px 14px", borderRadius: "20px", fontWeight: 800, fontSize: "0.78rem", letterSpacing: "0.5px", textTransform: "uppercase" }}>
              DEPLOYED CASE STUDIES & PROOF OF ARCHITECTURE
            </span>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)", fontWeight: 800, color: "#0f172a", marginTop: "10px", marginBottom: "8px" }}>
              High-Impact Public Systems Engineered by ChittorTech
            </h2>
            <p style={{ color: "#64748b", maxWidth: "660px", margin: "0 auto", fontSize: "0.95rem" }}>
              Battle-tested digital infrastructure engineered for District Police Administrations, Municipal Councils, and District Collectors.
            </p>
          </div>

          <div className="row g-4">
            {/* ── CARD 1: SP CHITTORGARH CITIZEN PORTAL ── */}
            <div className="col-lg-4 col-md-6 mb-3 mb-lg-0">
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  borderTop: "4px solid #dc2626",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  padding: "clamp(20px, 3vw, 26px)",
                  boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                {/* Header Tag */}
                <div className="mb-2">
                  <span style={{ background: "#fef2f2", color: "#b91c1c", fontWeight: 800, fontSize: "0.72rem", padding: "4px 10px", borderRadius: "6px", textTransform: "uppercase", letterSpacing: "0.4px", display: "inline-block" }}>
                    <i className="fa-solid fa-shield-halved me-1"></i> Law Enforcement
                  </span>
                </div>

                <h3 style={{ fontSize: "clamp(1.15rem, 1.8vw, 1.3rem)", fontWeight: 800, color: "#0f172a", marginBottom: "4px" }}>
                  SP Chittorgarh Citizen Portal
                </h3>
                <div style={{ color: "#64748b", fontSize: "0.82rem", marginBottom: "16px", fontWeight: 500 }}>
                  Chittorgarh Police • District Police Administration
                </div>

                {/* Hero Feature Highlight: Jan Sunwai Status */}
                <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "12px 14px", marginBottom: "16px" }}>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#16a34a", display: "inline-block", boxShadow: "0 0 6px #16a34a" }}></span>
                    <strong style={{ fontSize: "0.84rem", color: "#166534" }}>Live SP & ASP Jan Sunwai Status</strong>
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#15803d", lineHeight: 1.45 }}>
                    Real-time chamber availability so villagers traveling 30–50 km know if the SP/ASP is in-office before visiting.
                  </div>
                </div>

                {/* Features List */}
                <div className="d-flex flex-column gap-2 mb-4" style={{ fontSize: "0.85rem", color: "#334155" }}>
                  <div className="d-flex align-items-start gap-2">
                    <i className="fa-solid fa-check text-primary mt-1" style={{ fontSize: "0.8rem" }}></i>
                    <span><strong>Thana Directory:</strong> Direct telephone directory for every police station across the district.</span>
                  </div>
                  <div className="d-flex align-items-start gap-2">
                    <i className="fa-solid fa-check text-primary mt-1" style={{ fontSize: "0.8rem" }}></i>
                    <span><strong>FIR & Safety Cards:</strong> Bilingual legal advisory, women helpline (1090), and 112 quick dial.</span>
                  </div>
                  <div className="d-flex align-items-start gap-2">
                    <i className="fa-solid fa-check text-primary mt-1" style={{ fontSize: "0.8rem" }}></i>
                    <span><strong>Edge Security:</strong> Cloudflare Edge WAF hardened with 100% verified uptime.</span>
                  </div>
                </div>

                {/* Footer Metrics & CTA */}
                <div className="mt-auto pt-3 border-top" style={{ borderColor: "#f1f5f9" }}>
                  <div className="d-flex align-items-center justify-content-between mb-3" style={{ fontSize: "0.78rem" }}>
                    <span style={{ color: "#16a34a", fontWeight: 700 }}><i className="fa-solid fa-circle-check me-1"></i> Deployed System</span>
                    <span style={{ color: "#64748b" }}>Bilingual (Hindi/Eng)</span>
                  </div>
                  <a
                    href="https://wa.me/917597451057?text=Namaste%20Kush%20Sir%2C%20I%20am%20interested%20in%20a%20Police%20Citizen%20Portal%20or%20Law%20Enforcement%20system."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-100"
                    style={{ background: "#f8fafc", color: "#0f172a", border: "1.5px solid #cbd5e1", borderRadius: "8px", fontWeight: 700, fontSize: "0.84rem", padding: "9px" }}
                  >
                    Inquire About Police Portals →
                  </a>
                </div>
              </div>
            </div>

            {/* ── CARD 2: NAGAR PARISHAD COMPLAINT PORTAL ── */}
            <div className="col-lg-4 col-md-6 mb-3 mb-lg-0">
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  borderTop: "4px solid #2563eb",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  padding: "clamp(20px, 3vw, 26px)",
                  boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                {/* Header Tag */}
                <div className="mb-2">
                  <span style={{ background: "#eff6ff", color: "#1d4ed8", fontWeight: 800, fontSize: "0.72rem", padding: "4px 10px", borderRadius: "6px", textTransform: "uppercase", letterSpacing: "0.4px", display: "inline-block" }}>
                    <i className="fa-solid fa-city me-1"></i> Civic E-Governance
                  </span>
                </div>

                <h3 style={{ fontSize: "clamp(1.15rem, 1.8vw, 1.3rem)", fontWeight: 800, color: "#0f172a", marginBottom: "4px" }}>
                  Nagar Parishad Complaint Portal
                </h3>
                <div style={{ color: "#64748b", fontSize: "0.82rem", marginBottom: "16px", fontWeight: 500 }}>
                  Municipal Council Chittorgarh • Ward Redressal
                </div>

                {/* Hero Feature Highlight: 2-Step Grievance */}
                <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "10px", padding: "12px 14px", marginBottom: "16px" }}>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <strong style={{ fontSize: "0.84rem", color: "#1e40af" }}>⚡ 2-Step Geotagged Ward Grievance Engine</strong>
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#1d4ed8", lineHeight: 1.45 }}>
                    Photo upload, automated SMS/WhatsApp alerts, and Sanitary Inspector SLA timers across 60+ wards.
                  </div>
                </div>

                {/* Features List */}
                <div className="d-flex flex-column gap-2 mb-4" style={{ fontSize: "0.85rem", color: "#334155" }}>
                  <div className="d-flex align-items-start gap-2">
                    <i className="fa-solid fa-check text-primary mt-1" style={{ fontSize: "0.8rem" }}></i>
                    <span><strong>No Paper Queues:</strong> Eliminates physical visits for streetlights, drainage, and sanitation.</span>
                  </div>
                  <div className="d-flex align-items-start gap-2">
                    <i className="fa-solid fa-check text-primary mt-1" style={{ fontSize: "0.8rem" }}></i>
                    <span><strong>65% Faster Resolution:</strong> Real-time ticket escalation to designated ward engineers.</span>
                  </div>
                  <div className="d-flex align-items-start gap-2">
                    <i className="fa-solid fa-check text-primary mt-1" style={{ fontSize: "0.8rem" }}></i>
                    <span><strong>Executive Heatmap:</strong> Ward analytics dashboard for Municipal Commissioner and Councilors.</span>
                  </div>
                </div>

                {/* Footer Metrics & CTA */}
                <div className="mt-auto pt-3 border-top" style={{ borderColor: "#f1f5f9" }}>
                  <div className="d-flex align-items-center justify-content-between mb-3" style={{ fontSize: "0.78rem" }}>
                    <span style={{ color: "#2563eb", fontWeight: 700 }}><i className="fa-solid fa-circle-check me-1"></i> 60+ Wards Live</span>
                    <span style={{ color: "#64748b" }}>Automated Alerts</span>
                  </div>
                  <a
                    href="https://wa.me/917597451057?text=Namaste%20Kush%20Sir%2C%20I%20am%20interested%20in%20a%20Municipal%20Council%20Grievance%20Portal."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-100"
                    style={{ background: "#f8fafc", color: "#0f172a", border: "1.5px solid #cbd5e1", borderRadius: "8px", fontWeight: 700, fontSize: "0.84rem", padding: "9px" }}
                  >
                    Inquire About Civic Systems →
                  </a>
                </div>
              </div>
            </div>

            {/* ── CARD 3: PANCH GAURAV INITIATIVE PORTAL ── */}
            <div className="col-lg-4 col-md-6 mb-3 mb-lg-0">
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  borderTop: "4px solid #059669",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  padding: "clamp(20px, 3vw, 26px)",
                  boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                {/* Header Tag */}
                <div className="mb-2">
                  <span style={{ background: "#ecfdf5", color: "#047857", fontWeight: 800, fontSize: "0.72rem", padding: "4px 10px", borderRadius: "6px", textTransform: "uppercase", letterSpacing: "0.4px", display: "inline-block" }}>
                    <i className="fa-solid fa-monument me-1"></i> Heritage & Tourism
                  </span>
                </div>

                <h3 style={{ fontSize: "clamp(1.15rem, 1.8vw, 1.3rem)", fontWeight: 800, color: "#0f172a", marginBottom: "4px" }}>
                  Panch Gaurav Initiative Portal
                </h3>
                <div style={{ color: "#64748b", fontSize: "0.82rem", marginBottom: "16px", fontWeight: 500 }}>
                  District Administration Chittorgarh • Heritage Wing
                </div>

                {/* Hero Feature Highlight: 5 Pillars */}
                <div style={{ background: "#ecfdf5", border: "1px solid #a7f3d0", borderRadius: "10px", padding: "12px 14px", marginBottom: "16px" }}>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <strong style={{ fontSize: "0.84rem", color: "#065f46" }}>🏛️ 5 Pillars of Chittorgarh Pride Platform</strong>
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#047857", lineHeight: 1.45 }}>
                    Digital storytelling platform documenting Fort history, Johar Smriti, agriculture, and industry.
                  </div>
                </div>

                {/* Features List */}
                <div className="d-flex flex-column gap-2 mb-4" style={{ fontSize: "0.85rem", color: "#334155" }}>
                  <div className="d-flex align-items-start gap-2">
                    <i className="fa-solid fa-check text-primary mt-1" style={{ fontSize: "0.8rem" }}></i>
                    <span><strong>Digital Pride Archive:</strong> Preserves verified district monuments, heroes, and industrial growth.</span>
                  </div>
                  <div className="d-flex align-items-start gap-2">
                    <i className="fa-solid fa-check text-primary mt-1" style={{ fontSize: "0.8rem" }}></i>
                    <span><strong>10,000+ Reach:</strong> Serves tourists, students, and citizens with mobile-first interactive maps.</span>
                  </div>
                  <div className="d-flex align-items-start gap-2">
                    <i className="fa-solid fa-check text-primary mt-1" style={{ fontSize: "0.8rem" }}></i>
                    <span><strong>State Integration:</strong> Aligned with Rajasthan State tourism and district administration initiatives.</span>
                  </div>
                </div>

                {/* Footer Metrics & CTA */}
                <div className="mt-auto pt-3 border-top" style={{ borderColor: "#f1f5f9" }}>
                  <div className="d-flex align-items-center justify-content-between mb-3" style={{ fontSize: "0.78rem" }}>
                    <span style={{ color: "#059669", fontWeight: 700 }}><i className="fa-solid fa-circle-check me-1"></i> 10,000+ Monthly Visitors</span>
                    <span style={{ color: "#64748b" }}>State Aligned</span>
                  </div>
                  <a
                    href="https://wa.me/917597451057?text=Namaste%20Kush%20Sir%2C%20I%20am%20interested%20in%20a%20District%20Heritage%20or%20Tourism%20Portal."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-100"
                    style={{ background: "#f8fafc", color: "#0f172a", border: "1.5px solid #cbd5e1", borderRadius: "8px", fontWeight: 700, fontSize: "0.84rem", padding: "9px" }}
                  >
                    Inquire About Heritage Portals →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: DIRECT CGRO DESK (KUSH SHARMA) ── */}
      <section style={{ padding: "clamp(35px, 5vw, 55px) 0", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container" style={{ maxWidth: "1140px", padding: "0 16px" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
              borderRadius: "16px",
              padding: "clamp(24px, 4vw, 36px)",
              color: "#ffffff",
              boxShadow: "0 15px 30px -10px rgba(15, 23, 42, 0.2)",
            }}
          >
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <span style={{ background: "#ea580c", color: "#ffffff", fontWeight: 800, padding: "4px 10px", borderRadius: "20px", fontSize: "0.72rem", textTransform: "uppercase" }}>
                  DIRECT PUBLIC SECTOR PROTOCOL
                </span>
                <h3 style={{ fontWeight: 800, color: "#ffffff", margin: "10px 0 4px", fontSize: "clamp(1.25rem, 2.2vw, 1.8rem)" }}>
                  Direct Engagement with Kush Sharma
                </h3>
                <h6 style={{ color: "#fb923c", fontWeight: 700, marginBottom: "12px", fontSize: "0.92rem" }}>
                  Founder & Chief Government Relations Officer (CGRO) | ChittorTech
                </h6>
                <p style={{ color: "#cbd5e1", fontSize: "0.9rem", lineHeight: 1.6, margin: 0, maxWidth: "620px" }}>
                  For District Collectors, Municipal Commissioners, Police Superintendents, and Nodal Officers seeking technical advisory, DPR formulation, or pre-procurement demonstrations:
                </p>
                <div className="d-flex align-items-center flex-wrap gap-3 mt-3" style={{ fontSize: "0.85rem" }}>
                  <div>
                    <span style={{ color: "#94a3b8", display: "block", fontSize: "0.72rem", textTransform: "uppercase" }}>WhatsApp:</span>
                    <strong style={{ color: "#38bdf8" }}>+91 75974 51057</strong>
                  </div>
                  <div>
                    <span style={{ color: "#94a3b8", display: "block", fontSize: "0.72rem", textTransform: "uppercase" }}>Official Email:</span>
                    <strong style={{ color: "#38bdf8" }}>business@chittortech.in</strong>
                  </div>
                  <div>
                    <span style={{ color: "#94a3b8", display: "block", fontSize: "0.72rem", textTransform: "uppercase" }}>Office:</span>
                    <strong style={{ color: "#ffffff" }}>Collectorate Circle, Chittorgarh</strong>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 text-lg-end">
                <a
                  href="https://wa.me/917597451057?text=Namaste%20Kush%20Sir%2C%20I%20am%20reaching%20out%20from%20%5BDepartment%2FOrganization%5D%20regarding%20an%20E-Governance%2FGovernment%20portal%20requirement."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b, #ea580c)",
                    border: "none",
                    fontWeight: 800,
                    color: "#ffffff",
                    padding: "12px 24px",
                    borderRadius: "10px",
                    fontSize: "0.92rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <i className="fa-brands fa-whatsapp"></i> Message Kush Sharma
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: FAQS (CLEAN ACCORDION) ── */}
      <section style={{ padding: "clamp(40px, 5vw, 65px) 0 clamp(90px, 12vw, 130px) 0", background: "#f8fafc" }}>
        <div className="container" style={{ maxWidth: "760px", padding: "0 16px" }}>
          <div className="text-center mb-4">
            <span style={{ background: "#e2e8f0", color: "#334155", padding: "4px 12px", borderRadius: "20px", fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase" }}>
              PROCUREMENT & COMPLIANCE FAQS
            </span>
            <h2 style={{ fontSize: "clamp(1.35rem, 2.2vw, 1.9rem)", fontWeight: 800, color: "#0f172a", marginTop: "8px" }}>
              Frequently Asked Questions by Government Officers
            </h2>
          </div>

          <div className="d-flex flex-column gap-2">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: "#ffffff",
                  borderRadius: "10px",
                  border: "1px solid #e2e8f0",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    background: activeFaq === idx ? "#eff6ff" : "#ffffff",
                    border: "none",
                    textAlign: "left",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    color: activeFaq === idx ? "#1d4ed8" : "#0f172a",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <span>{faq.q}</span>
                  <i className={`fa-solid ${activeFaq === idx ? "fa-minus text-primary" : "fa-plus text-muted"}`} style={{ fontSize: "0.85rem" }}></i>
                </button>
                {activeFaq === idx && (
                  <div style={{ padding: "14px 18px", color: "#475569", fontSize: "0.88rem", lineHeight: 1.6, borderTop: "1px solid #e2e8f0" }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
