"use client";

import React from "react";
import Link from "next/link";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "sabarimala-mandir",
      badge: "Spiritual Trust ERP",
      badgeColor: "#ea580c",
      badgeBg: "#fff7ed",
      badgeBorder: "#ffedd5",
      title: "Sabari Mala Mandir (Hubli) - 80G Billing ERP",
      subtitle: "Offline-first thermal donation billing with automated 80G tax certificates & cloud trustee ledger.",
      metrics: [
        { val: "< 1 Sec", lbl: "Print" },
        { val: "100%", lbl: "80G Tax" },
        { val: "0 Halts", lbl: "Offline" },
        { val: "Live Cloud", lbl: "Audit" },
      ],
      tags: ["80G Exemption", "Offline POS", "Trustee Audit"],
      link: "/shabari-mata-temple-hubli-invoice-system",
      ctaText: "Read Case Study",
      icon: "fa-gopuram",
    },
    {
      id: "visit-chittorgarh",
      badge: "Tourism & AI Search",
      badgeColor: "#0284c7",
      badgeBg: "#f0f9ff",
      badgeBorder: "#e0f2fe",
      title: "VisitChittorgarh.in - UNESCO Tourism & Booking",
      subtitle: "Capturing global tourist demand across 576 AI overviews with sub-second Next.js PWA & WhatsApp cabs.",
      metrics: [
        { val: "5,600+", lbl: "Searches" },
        { val: "576", lbl: "AI Citations" },
        { val: "Global", lbl: "US/UK/DE" },
        { val: "Direct", lbl: "WhatsApp" },
      ],
      tags: ["Next.js PWA", "GEO / AEO", "Direct Booking"],
      link: "/visit-chittorgarh-app-tourism",
      ctaText: "Read Case Study",
      icon: "fa-monument",
    },
    {
      id: "google-play",
      badge: "Play Store Release",
      badgeColor: "#16a34a",
      badgeBg: "#f0fdf4",
      badgeBorder: "#dcfce7",
      title: "Google Play 12-Tester Compliance & D-U-N-S",
      subtitle: "Instant direct production publishing under ChittorTech verified org console, bypassing tester delays.",
      metrics: [
        { val: "Direct Live", lbl: "No Wait" },
        { val: "100%", lbl: "Approval" },
        { val: "D-U-N-S", lbl: "Verified Org" },
        { val: "Zero", lbl: "Suspensions" },
      ],
      tags: ["D-U-N-S Org", "Target SDK 34/35", "Zero Testing"],
      link: "/google-play-publishing",
      ctaText: "Explore Play Store",
      icon: "fa-brands fa-google-play",
    },
    {
      id: "dmarc-deliverability",
      badge: "Email Security",
      badgeColor: "#7c3aed",
      badgeBg: "#faf5ff",
      badgeBorder: "#f3e8ff",
      title: "Enterprise DMARC, DKIM & SPF Compliance",
      subtitle: "Controlled p=reject enforcement protecting corporate domains & ensuring 99%+ Google/Yahoo inbox placement.",
      metrics: [
        { val: "24 Hours", lbl: "Setup" },
        { val: "2048-bit", lbl: "DKIM" },
        { val: "p=reject", lbl: "Immunity" },
        { val: "99%+", lbl: "Inbox Rate" },
      ],
      tags: ["p=reject", "SPF Flattening", "BIMI Branding"],
      link: "/dmarc-dkim-spf-setup",
      ctaText: "Explore Deliverability",
      icon: "fa-shield-halved",
    },
  ];

  return (
    <div style={{ background: "#f8fafc", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
      <style>{`
        .cs-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 55%, #1e3a8a 100%);
          padding: 80px 0 60px;
          color: #ffffff !important;
          position: relative;
          overflow: hidden;
        }
        .cs-hero h1, .cs-hero h1 * {
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }
        .cs-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          position: relative;
          box-shadow: 0 4px 15px rgba(15, 23, 42, 0.03);
        }
        .cs-card:hover {
          transform: translateY(-4px);
          border-color: #cbd5e1;
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08);
        }
        .cs-card-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.16rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 8px;
          line-height: 1.32;
          min-height: 52px;
          display: flex;
          align-items: center;
        }
        .cs-card-desc {
          font-size: 0.86rem;
          color: #475569;
          line-height: 1.55;
          margin-bottom: 16px;
          min-height: 44px;
        }
        .cs-metrics-row {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }
        .cs-metric-chip {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 6px 4px;
          text-align: center;
          flex: 1;
          min-width: 0;
          height: 54px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .cs-metric-chip strong {
          display: block;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
        }
        .cs-metric-chip span {
          display: block;
          font-size: 0.65rem;
          color: #64748b;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          margin-top: 3px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
        }
        .cs-tags-row {
          display: flex;
          flex-wrap: nowrap;
          gap: 6px;
          margin-bottom: 16px;
          height: 28px;
          overflow: hidden;
          align-items: center;
        }
        .cs-tag {
          background: #f1f5f9;
          color: #475569;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 3px 9px;
          border-radius: 6px;
          white-space: nowrap;
          line-height: 1.2;
        }
        .cs-card-footer {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .cs-grid-section {
          padding: 50px 0 120px;
        }
        @media (max-width: 768px) {
          .cs-hero {
            padding: 60px 0 45px;
          }
          .cs-card {
            padding: 18px 16px !important;
            border-radius: 14px !important;
          }
          .cs-card-title {
            font-size: 1.05rem !important;
            min-height: auto !important;
            margin-bottom: 6px !important;
          }
          .cs-card-desc {
            font-size: 0.82rem !important;
            min-height: auto !important;
            margin-bottom: 12px !important;
            line-height: 1.45 !important;
          }
          .cs-metric-chip {
            padding: 4px 2px !important;
            height: 48px !important;
          }
          .cs-metric-chip strong {
            font-size: 0.85rem !important;
          }
          .cs-metric-chip span {
            font-size: 0.58rem !important;
          }
          .cs-tags-row {
            height: auto !important;
            flex-wrap: wrap !important;
          }
          .cs-card-footer {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 10px !important;
          }
          .cs-card-footer .cs-btn-cta {
            width: 100% !important;
            padding: 9px 12px !important;
            font-size: 0.86rem !important;
            text-align: center !important;
          }
          .cs-grid-section {
            padding: 35px 0 140px !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="cs-hero">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="text-center" style={{ maxWidth: "750px", margin: "0 auto" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(255, 255, 255, 0.2)", color: "#38bdf8", padding: "5px 16px", borderRadius: "50px", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "14px" }}>
              <i className="fa-solid fa-trophy text-warning"></i> Proven Production Deployments
            </span>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.9rem, 4.5vw, 3rem)", fontWeight: 900, lineHeight: 1.18, marginBottom: "14px", color: "#ffffff" }}>
              Client Case Studies &amp; Production Engineering
            </h1>
            <p style={{ color: "#cbd5e1", fontSize: "1rem", lineHeight: 1.6, margin: "0 auto 22px", maxWidth: "620px" }}>
              Verified deployments across temple pilgrimage trusts, global tourism engines, mobile ecosystems, and enterprise email security.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href="https://api.whatsapp.com/send?phone=917597451057&text=Hi%20ChittorTech,%20I%20reviewed%20your%20case%20studies%20and%20want%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)", border: "none", fontWeight: 700, borderRadius: "10px", padding: "10px 22px", fontSize: "0.92rem" }}>
                <i className="fa-brands fa-whatsapp me-2"></i> Discuss on WhatsApp
              </a>
              <Link href="/contact-us" className="btn btn-outline-light" style={{ borderRadius: "10px", padding: "10px 22px", fontWeight: 700, fontSize: "0.92rem" }}>
                Request Consultation <i className="fa-solid fa-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="cs-grid-section">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="col-12 col-md-6 d-flex">
                <div className="cs-card">
                  {/* Badge */}
                  <div className="d-flex align-items-center mb-2">
                    <span style={{ background: cs.badgeBg, color: cs.badgeColor, border: `1px solid ${cs.badgeBorder}`, fontSize: "0.7rem", fontWeight: 800, padding: "3px 10px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "0.4px" }}>
                      <i className={`fa-solid ${cs.icon} me-1`}></i> {cs.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="cs-card-title">
                    {cs.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="cs-card-desc">
                    {cs.subtitle}
                  </p>

                  {/* 4 Micro Metric Chips */}
                  <div className="cs-metrics-row">
                    {cs.metrics.map((m, i) => (
                      <div key={i} className="cs-metric-chip">
                        <strong>{m.val}</strong>
                        <span>{m.lbl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="cs-tags-row">
                    {cs.tags.map((t, i) => (
                      <span key={i} className="cs-tag">{t}</span>
                    ))}
                  </div>

                  {/* Card Footer */}
                  <div className="cs-card-footer">
                    <Link href={cs.link} className="btn btn-outline-primary btn-sm fw-bold px-3 py-1 cs-btn-cta" style={{ borderRadius: "8px", fontSize: "0.82rem" }}>
                      {cs.ctaText} <i className="fa-solid fa-arrow-right ms-1"></i>
                    </Link>
                    <a href="https://api.whatsapp.com/send?phone=917597451057&text=Hi%20ChittorTech,%20I%20am%20interested%20in%20a%20solution%20similar%20to%20your%20case%20study." target="_blank" rel="noopener noreferrer" className="text-secondary small text-decoration-none fw-semibold" style={{ fontSize: "0.78rem" }}>
                      <i className="fa-brands fa-whatsapp text-success me-1"></i> Quick WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section style={{ padding: "60px 0 80px", background: "#ffffff", borderTop: "1px solid #e2e8f0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <div style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #2563eb 60%, #0e7490 100%)", borderRadius: "20px", padding: "45px 30px", textAlign: "center", color: "#ffffff" }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 900, marginBottom: "10px" }}>
              Ready to Build Your Next Milestone?
            </h2>
            <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: "550px", margin: "0 auto 20px" }}>
              Get a turnkey production system tailored for your trust, startup, or enterprise.
            </p>
            <div className="d-flex justify-content-center gap-2 flex-wrap">
              <a href="https://api.whatsapp.com/send?phone=917597451057&text=Hi%20ChittorTech,%20I%20want%20to%20discuss%20a%20custom%20software%20project." target="_blank" rel="noopener noreferrer" className="btn btn-success fw-bold px-4 py-2" style={{ borderRadius: "10px", fontSize: "0.9rem" }}>
                <i className="fa-brands fa-whatsapp me-2"></i> WhatsApp Consultation
              </a>
              <Link href="/contact-us" className="btn btn-outline-light fw-bold px-4 py-2" style={{ borderRadius: "10px", fontSize: "0.9rem" }}>
                Request Free Blueprint
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
