"use client";
import React, { useState } from "react";
import Link from "next/link";
import "../../../public/assets/css/premium-products.css";

export default function TrustCenterPage() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "ChittorTech",
    "legalName": "KUSH SHARMA (ChittorTech)",
    "url": "https://chittortech.in",
    "logo": "https://chittortech.in/favicon.png",
    "taxID": "OTWPS1188A",
    "identifier": [
      {
        "@type": "PropertyValue",
        "name": "Importer-Exporter Code (IEC)",
        "value": "OTWPS1188A"
      },
      {
        "@type": "PropertyValue",
        "name": "DGFT File Number",
        "value": "JPRIECPAPPLY00024346AM27"
      },
      {
        "@type": "PropertyValue",
        "name": "Asian Development Bank (ADB CMS Number)",
        "value": "051187"
      },
      {
        "@type": "PropertyValue",
        "name": "Singapore Government GeBIZ Trading Partner Reference",
        "value": "Y309075"
      },
      {
        "@type": "PropertyValue",
        "name": "Singapore Government GeBIZ Partner ID",
        "value": "946298091482"
      },
      {
        "@type": "PropertyValue",
        "name": "United Nations Global Marketplace (UNGM) Vendor Entity",
        "value": "ChittorTech UNGM Vendor"
      },
      {
        "@type": "PropertyValue",
        "name": "United States SAM.gov Federal Contractor",
        "value": "ChittorTech SAM.gov Registered Entity"
      },
      {
        "@type": "PropertyValue",
        "name": "iStart Rajasthan Q-Rate Assessment",
        "value": "32 Q-Rate Score"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ncf-59, Sector-1, Madhav Nagar, Chanderia",
      "addressLocality": "Chittorgarh",
      "addressRegion": "Rajasthan",
      "postalCode": "312021",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://selfservice.adb.org/",
      "https://www.gebiz.gov.sg/",
      "https://www.ungm.org/",
      "https://sam.gov/",
      "https://www.linkedin.com/company/chittortech",
      "https://clutch.co/profile/chittortech",
      "https://www.goodfirms.co/company/chittortech",
      "https://maps.google.com/?q=ChittorTech+Chittorgarh",
      "https://istart.rajasthan.gov.in/profile/11478/startups",
      "https://www.quora.com/profile/ChittorTech",
      "https://in.pinterest.com/chittortech",
      "https://github.com/sharmakush2003",
      "https://www.startupindia.gov.in/",
      "https://www.dgft.gov.in/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7597451057",
      "contactType": "customer service",
      "email": "contact@chittortech.in",
      "areaServed": ["IN", "US", "GB", "AE", "AU", "CA", "SG"],
      "availableLanguage": ["English", "Hindi"]
    }
  };

  return (
    <div className="tc-page-wrap">
      {/* Schema Injection for Google & AI Search E-E-A-T */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <style>{`
        /* ─── Global Scoped Styles ─── */
        .tc-page-wrap {
          font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
          color: #0f172a;
          background: #f8fafc;
          overflow-x: hidden;
          padding-bottom: 40px;
        }

        /* ─── Hero Section with High-Contrast Colors ─── */
        .tc-hero {
          background: linear-gradient(135deg, #0b0f19 0%, #171c2f 50%, #0f172a 100%);
          padding: 95px 0 75px;
          position: relative;
          color: #ffffff !important;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .tc-hero::before {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.16) 0%, transparent 70%);
          top: -150px;
          right: -100px;
          pointer-events: none;
        }
        .tc-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #10b981 !important;
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          padding: 7px 18px;
          border-radius: 50px;
          margin-bottom: 20px;
        }
        .tc-pill i { font-size: 0.85rem; }
        
        .tc-hero-title {
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif !important;
          font-size: clamp(2.1rem, 4.5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 18px;
          color: #ffffff !important;
        }
        .tc-hero-title span {
          background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .tc-hero-subtitle {
          font-size: clamp(0.98rem, 1.8vw, 1.18rem);
          color: #cbd5e1 !important;
          max-width: 800px;
          margin: 0 auto 32px;
          line-height: 1.65;
        }
        /* ─── Hero Marquee Badges (Dual Rotating Rows, Clean Edge-to-Edge, Zero Side Shadow) ─── */
        .tc-hero-marquee-wrap {
          margin-top: 36px;
          width: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 6px 0;
        }
        .tc-hero-marquee-track {
          display: flex;
          gap: 12px;
          width: max-content;
        }
        .tc-hero-marquee-track.left {
          animation: tcMarqueeScrollLeft 35s linear infinite;
        }
        .tc-hero-marquee-track.right {
          animation: tcMarqueeScrollRight 40s linear infinite;
        }
        .tc-hero-marquee-wrap:hover .tc-hero-marquee-track {
          animation-play-state: paused;
        }
        @keyframes tcMarqueeScrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes tcMarqueeScrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .tc-stat-badge {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 50px;
          padding: 8px 18px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.84rem;
          font-weight: 600;
          color: #f1f5f9 !important;
          transition: all 0.25s ease;
          white-space: nowrap;
          cursor: default;
          user-select: none;
        }
        .tc-stat-badge:hover {
          transform: translateY(-2px);
          border-color: #38bdf8;
          background: rgba(255, 255, 255, 0.16);
          color: #ffffff !important;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
        }
        .tc-stat-badge i { color: #38bdf8; font-size: 0.95rem; }

        /* ─── Sections ─── */
        .tc-section {
          padding: 70px 0;
        }
        .tc-sec-head {
          text-align: center;
          max-width: 740px;
          margin: 0 auto 46px;
        }
        .tc-sec-tag {
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.6px;
          color: #2563eb;
          margin-bottom: 8px;
          display: block;
        }
        .tc-sec-title {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-size: clamp(1.8rem, 3.2vw, 2.35rem);
          font-weight: 800;
          color: #0f172a !important;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        .tc-sec-desc {
          color: #475569;
          font-size: 1rem;
          line-height: 1.6;
        }

        /* ─── Clean Responsive Cards ─── */
        .tc-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 28px 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.035);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .tc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.08);
          border-color: #2563eb;
        }
        .tc-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #2563eb, #06b6d4);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .tc-card:hover::before { opacity: 1; }

        .tc-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
          gap: 12px;
        }
        .tc-card-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.35rem;
          flex-shrink: 0;
        }
        .tc-card-icon.gov { background: #eff6ff; color: #2563eb; }
        .tc-card-icon.global { background: #f0fdf4; color: #059669; }
        .tc-card-icon.adb { background: #eff6ff; color: #1e40af; }
        .tc-card-icon.gebiz { background: #fef2f2; color: #dc2626; }
        .tc-card-icon.un { background: #f0f9ff; color: #0284c7; }
        .tc-card-icon.sam { background: #f8fafc; color: #0f172a; border: 1.5px solid #cbd5e1; }
        .tc-card-icon.clutch { background: #fef2f2; color: #ef4444; }
        .tc-card-icon.goodfirms { background: #eff6ff; color: #1d4ed8; }
        .tc-card-icon.gmb { background: #f0fdf4; color: #16a34a; }
        .tc-card-icon.linkedin { background: #eff6ff; color: #0077b5; }
        .tc-card-icon.github { background: #0f172a; color: #ffffff; }
        .tc-card-icon.pinterest { background: #fff1f2; color: #e60023; }
        .tc-card-icon.quora { background: #fff1f2; color: #b92b27; }
        .tc-card-icon.play { background: #f0fdf4; color: #059669; }
        .tc-card-icon.apple { background: #0f172a; color: #ffffff; }
        .tc-card-icon.cloud { background: #eff6ff; color: #0284c7; }
        .tc-card-icon.wa { background: #f0fdf4; color: #22c55e; }

        .tc-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .tc-status-pill.verified {
          background: #ecfdf5;
          color: #059669;
          border: 1px solid #a7f3d0;
        }
        .tc-status-pill.progress {
          background: #fffbeb;
          color: #b45309;
          border: 1px solid #fde68a;
        }
        .tc-status-pill.active {
          background: #eff6ff;
          color: #1d4ed8;
          border: 1px solid #bfdbfe;
        }

        .tc-card-title {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-size: 1.22rem;
          font-weight: 800;
          color: #0f172a !important;
          margin-bottom: 8px;
        }
        .tc-card-sub {
          font-size: 0.86rem;
          color: #475569;
          margin-bottom: 18px;
          line-height: 1.55;
        }

        /* ─── Fully Responsive Meta Box (NO squashing / wrapping bugs) ─── */
        .tc-meta-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 14px 16px;
          margin-bottom: 20px;
        }
        .tc-meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 6px 0;
        }
        .tc-meta-row:not(:last-child) {
          border-bottom: 1px dashed #e2e8f0;
        }
        .tc-meta-label {
          color: #64748b;
          font-weight: 600;
          font-size: 0.82rem;
          flex-shrink: 0;
        }
        .tc-meta-val {
          color: #0f172a;
          font-weight: 700;
          font-size: 0.86rem;
          font-family: 'JetBrains Mono', monospace;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 6px;
          text-align: right;
          word-break: break-word;
        }
        .tc-copy-btn {
          background: transparent;
          border: none;
          color: #2563eb;
          cursor: pointer;
          font-size: 0.82rem;
          padding: 2px 4px;
        }
        .tc-copy-btn:hover { color: #1d4ed8; }

        /* Mobile Adjustments for Meta Rows to prevent awkward text overlap */
        @media (max-width: 576px) {
          .tc-card { padding: 22px 18px; }
          .tc-meta-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 2px;
            padding: 8px 0;
          }
          .tc-meta-label {
            font-size: 0.76rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .tc-meta-val {
            font-size: 0.88rem;
            width: 100%;
            justify-content: space-between;
            text-align: left;
          }
        }

        .tc-btn-verify {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 9px;
          font-size: 0.86rem;
          font-weight: 700;
          text-decoration: none;
          background: #f1f5f9;
          color: #0f172a !important;
          border: 1.5px solid #cbd5e1;
          transition: all 0.25s ease;
        }
        .tc-btn-verify:hover {
          background: #2563eb;
          color: #ffffff !important;
          border-color: #2563eb;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);
        }
        .tc-btn-lead {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 9px;
          font-size: 0.86rem;
          font-weight: 700;
          text-decoration: none;
          background: #0f172a;
          color: #ffffff !important;
          border: 1.5px solid #0f172a;
          transition: all 0.25s ease;
        }
        .tc-btn-lead:hover {
          background: #2563eb;
          border-color: #2563eb;
          color: #ffffff !important;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
          transform: translateY(-1px);
        }

        /* ─── Corporate Verification Matrix (Zero Scrollbar, Fully Responsive) ─── */
        .tc-matrix-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 18px;
        }
        @media (max-width: 576px) {
          .tc-matrix-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
        .tc-matrix-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
        }
        .tc-matrix-card:hover {
          border-color: #2563eb;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.08);
          transform: translateY(-2px);
        }
        .tc-matrix-header {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 14px;
        }
        .tc-matrix-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .tc-matrix-badge-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .tc-matrix-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        .tc-matrix-title-wrap {
          display: flex;
          flex-direction: column;
        }
        .tc-matrix-title {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-size: 1rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.35;
        }
        .tc-matrix-authority {
          font-size: 0.78rem;
          color: #64748b;
          margin: 2px 0 0;
        }
        .tc-matrix-body {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 10px 12px;
          margin-bottom: 14px;
        }
        .tc-matrix-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          font-size: 0.82rem;
        }
        .tc-matrix-row:not(:last-child) {
          margin-bottom: 6px;
          padding-bottom: 6px;
          border-bottom: 1px dashed #e2e8f0;
        }
        .tc-matrix-key {
          color: #64748b;
          font-weight: 600;
          font-size: 0.78rem;
        }
        .tc-matrix-val {
          color: #0f172a;
          font-weight: 700;
          text-align: right;
          word-break: break-word;
          font-size: 0.82rem;
        }
        .tc-matrix-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 700;
          text-decoration: none;
          background: #f1f5f9;
          color: #0f172a !important;
          border: 1.5px solid #cbd5e1;
          transition: all 0.2s ease;
          width: 100%;
          text-align: center;
        }
        .tc-matrix-btn:hover {
          background: #2563eb;
          border-color: #2563eb;
          color: #ffffff !important;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
        }

        /* ─── Responsive Consultation Banner ─── */
        .tc-consult-banner {
          margin-top: 40px;
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          border-radius: 16px;
          padding: 26px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 18px;
        }
        .tc-consult-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        @media (max-width: 768px) {
          .tc-consult-banner {
            padding: 20px 16px;
            flex-direction: column;
            align-items: stretch;
            text-align: left;
          }
          .tc-consult-actions {
            width: 100%;
            flex-direction: column;
          }
          .tc-consult-actions .btn {
            width: 100%;
            text-align: center;
            justify-content: center;
          }
        }

        /* ─── CTA Box ─── */
        .tc-cta-box {
          background: linear-gradient(135deg, #0b0f19 0%, #1e1b4b 100%);
          border-radius: 20px;
          padding: 50px 24px;
          color: #ffffff !important;
          text-align: center;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .tc-cta-title {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-size: clamp(1.8rem, 3.2vw, 2.4rem);
          font-weight: 800;
          margin-bottom: 12px;
          color: #ffffff !important;
        }
        .tc-cta-sub {
          color: #cbd5e1 !important;
          max-width: 650px;
          margin: 0 auto 30px;
          font-size: 1.05rem;
          line-height: 1.6;
        }
      `}</style>

      {/* ─── Hero Section ─── */}
      {/* ─── Hero Section ─── */}
      <section className="tc-hero">
        <div className="container text-center">
          <div className="tc-pill">
            <i className="fa-solid fa-earth-americas"></i> International Accreditations &amp; Global Procurement Center
          </div>
          <h1 className="tc-hero-title">
            Global Enterprise Trust, <span>International Accreditations</span> &amp; Validated Credentials
          </h1>
          <p className="tc-hero-subtitle">
            ChittorTech operates with 100% legal transparency and regulatory compliance across international multilateral banks, global government procurement portals, and Indian statutory registries. From Asian Development Bank (ADB) and Singapore Government (GeBIZ) empanelment to DGFT IEC and state incubation, explore our verified corporate credentials.
          </p>
        </div>

        {/* Dual Dynamic Rotating Marquee Tracks (Smooth Infinite Scroll on Desktop & Mobile, Edge-to-Edge) */}
        <div className="tc-hero-marquee-wrap">
          {/* Track 1: Scrolling Left */}
          <div className="tc-hero-marquee-track left">
            {[
              { icon: "fa-solid fa-landmark", label: "ADB CMS Empaneled", val: "#051187" },
              { icon: "fa-solid fa-city", label: "SG GeBIZ Partner", val: "#Y309075" },
              { icon: "fa-solid fa-globe", label: "UNGM Supplier", val: "United Nations" },
              { icon: "fa-solid fa-flag-usa", label: "SAM.gov Contractor", val: "US Federal" },
              { icon: "fa-solid fa-building-columns", label: "DGFT IEC Code", val: "OTWPS1188A" },
            ].concat([
              { icon: "fa-solid fa-landmark", label: "ADB CMS Empaneled", val: "#051187" },
              { icon: "fa-solid fa-city", label: "SG GeBIZ Partner", val: "#Y309075" },
              { icon: "fa-solid fa-globe", label: "UNGM Supplier", val: "United Nations" },
              { icon: "fa-solid fa-flag-usa", label: "SAM.gov Contractor", val: "US Federal" },
              { icon: "fa-solid fa-building-columns", label: "DGFT IEC Code", val: "OTWPS1188A" },
            ]).concat([
              { icon: "fa-solid fa-landmark", label: "ADB CMS Empaneled", val: "#051187" },
              { icon: "fa-solid fa-city", label: "SG GeBIZ Partner", val: "#Y309075" },
              { icon: "fa-solid fa-globe", label: "UNGM Supplier", val: "United Nations" },
              { icon: "fa-solid fa-flag-usa", label: "SAM.gov Contractor", val: "US Federal" },
              { icon: "fa-solid fa-building-columns", label: "DGFT IEC Code", val: "OTWPS1188A" },
            ]).map((b, idx) => (
              <span key={idx} className="tc-stat-badge">
                <i className={b.icon}></i> {b.label}: <strong>{b.val}</strong>
              </span>
            ))}
          </div>

          {/* Track 2: Scrolling Right */}
          <div className="tc-hero-marquee-track right">
            {[
              { icon: "fa-solid fa-lightbulb", label: "Startup India", val: "DPIIT Recognized" },
              { icon: "fa-solid fa-award", label: "iStart Rajasthan", val: "32 Q-Rate Assessed" },
              { icon: "fa-solid fa-flag", label: "MSME Ministry", val: "Govt. of India" },
              { icon: "fa-brands fa-google-play", label: "Google Play Console", val: "Verified Developer" },
              { icon: "fa-brands fa-apple", label: "Apple Developer Track", val: "iOS & macOS" },
            ].concat([
              { icon: "fa-solid fa-lightbulb", label: "Startup India", val: "DPIIT Recognized" },
              { icon: "fa-solid fa-award", label: "iStart Rajasthan", val: "32 Q-Rate Assessed" },
              { icon: "fa-solid fa-flag", label: "MSME Ministry", val: "Govt. of India" },
              { icon: "fa-brands fa-google-play", label: "Google Play Console", val: "Verified Developer" },
              { icon: "fa-brands fa-apple", label: "Apple Developer Track", val: "iOS & macOS" },
            ]).concat([
              { icon: "fa-solid fa-lightbulb", label: "Startup India", val: "DPIIT Recognized" },
              { icon: "fa-solid fa-award", label: "iStart Rajasthan", val: "32 Q-Rate Assessed" },
              { icon: "fa-solid fa-flag", label: "MSME Ministry", val: "Govt. of India" },
              { icon: "fa-brands fa-google-play", label: "Google Play Console", val: "Verified Developer" },
              { icon: "fa-brands fa-apple", label: "Apple Developer Track", val: "iOS & macOS" },
            ]).map((b, idx) => (
              <span key={idx} className="tc-stat-badge">
                <i className={b.icon}></i> {b.label}: <strong>{b.val}</strong>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Premier Section: Global Government Procurement & Multilateral Tender Empanelment ─── */}
      <section className="tc-section" style={{ background: "#ffffff", borderBottom: "1.5px solid #e2e8f0" }}>
        <div className="container">
          <div className="tc-sec-head">
            <span className="tc-sec-tag" style={{ color: "#1e40af" }}>Global Procurement &amp; Multilateral Empanelment</span>
            <h2 className="tc-sec-title">International Government &amp; Multilateral Tender Registrations</h2>
            <p className="tc-sec-desc">
              ChittorTech is formally empaneled and registered across global multilateral development banks, national governments, and the United Nations procurement system for cross-border public sector IT consulting, AI implementations, and enterprise software contracts.
            </p>
          </div>

          <div className="row g-4">
            {/* Card 1: Asian Development Bank (ADB CMS) */}
            <div className="col-lg-6 col-md-12">
              <div className="tc-card" style={{ borderColor: "#bfdbfe" }}>
                <div className="tc-card-top">
                  <div className="tc-card-icon adb">
                    <i className="fa-solid fa-landmark"></i>
                  </div>
                  <span className="tc-status-pill verified" style={{ background: "#eff6ff", color: "#1d4ed8", borderColor: "#bfdbfe" }}>
                    <i className="fa-solid fa-circle-check"></i> Empaneled Consulting Entity
                  </span>
                </div>
                <h3 className="tc-card-title">Asian Development Bank (ADB CMS)</h3>
                <p className="tc-card-sub">
                  Empaneled Consulting Entity on the Asian Development Bank Consultant Management System (CMS). Eligible for multilateral sovereign and non-sovereign ICT, digital public infrastructure, AI engineering, and technical advisory tenders across 68 member economies.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">CMS Number</span>
                    <span className="tc-meta-val">
                      051187
                      <button
                        className="tc-copy-btn"
                        onClick={() => handleCopy("051187", "adb_cms")}
                        title="Copy CMS Number"
                      >
                        <i className={copiedId === "adb_cms" ? "fa-solid fa-check text-success" : "fa-regular fa-copy"}></i>
                      </button>
                    </span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Empaneled Entity</span>
                    <span className="tc-meta-val">ChittorTech</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Authorized Account</span>
                    <span className="tc-meta-val">business@chittortech.in</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Tender Jurisdiction</span>
                    <span className="tc-meta-val">Asia-Pacific (68 Member Nations)</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">HQ / Secretariat</span>
                    <span className="tc-meta-val">ADB Headquarters, Manila, PH</span>
                  </div>
                </div>
                <a
                  href="https://selfservice.adb.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-verify"
                  style={{ background: "#eff6ff", color: "#1d4ed8", borderColor: "#bfdbfe" }}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Verify on ADB CMS Portal
                </a>
              </div>
            </div>

            {/* Card 2: Singapore Government (GeBIZ) */}
            <div className="col-lg-6 col-md-12">
              <div className="tc-card" style={{ borderColor: "#fecaca" }}>
                <div className="tc-card-top">
                  <div className="tc-card-icon gebiz">
                    <i className="fa-solid fa-city"></i>
                  </div>
                  <span className="tc-status-pill verified" style={{ background: "#fef2f2", color: "#b91c1c", borderColor: "#fecaca" }}>
                    <i className="fa-solid fa-circle-check"></i> Registered Trading Partner
                  </span>
                </div>
                <h3 className="tc-card-title">Singapore Government (GeBIZ)</h3>
                <p className="tc-card-sub">
                  Officially registered Trading Partner on GeBIZ — the Republic of Singapore Government’s one-stop e-procurement portal. Qualified to participate in Singapore public sector ICT tenders, government quotations, and statutory board software engineering contracts.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Trading Partner Ref</span>
                    <span className="tc-meta-val">
                      Y309075
                      <button
                        className="tc-copy-btn"
                        onClick={() => handleCopy("Y309075", "gebiz_ref")}
                        title="Copy Ref No"
                      >
                        <i className={copiedId === "gebiz_ref" ? "fa-solid fa-check text-success" : "fa-regular fa-copy"}></i>
                      </button>
                    </span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">GeBIZ Partner ID</span>
                    <span className="tc-meta-val">
                      946298091482
                      <button
                        className="tc-copy-btn"
                        onClick={() => handleCopy("946298091482", "gebiz_id")}
                        title="Copy GeBIZ ID"
                      >
                        <i className={copiedId === "gebiz_id" ? "fa-solid fa-check text-success" : "fa-regular fa-copy"}></i>
                      </button>
                    </span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Authorised Rep</span>
                    <span className="tc-meta-val">Kush Sharma</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Registered Business Email</span>
                    <span className="tc-meta-val">contact@chittortech.in</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Jurisdiction</span>
                    <span className="tc-meta-val">Republic of Singapore (Govt ICT)</span>
                  </div>
                </div>
                <a
                  href="https://www.gebiz.gov.sg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-verify"
                  style={{ background: "#fef2f2", color: "#b91c1c", borderColor: "#fecaca" }}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Verify on Singapore GeBIZ Portal
                </a>
              </div>
            </div>

            {/* Card 3: United Nations Global Marketplace (UNGM) */}
            <div className="col-lg-6 col-md-12">
              <div className="tc-card" style={{ borderColor: "#bae6fd" }}>
                <div className="tc-card-top">
                  <div className="tc-card-icon un">
                    <i className="fa-solid fa-globe"></i>
                  </div>
                  <span className="tc-status-pill verified" style={{ background: "#f0f9ff", color: "#0284c7", borderColor: "#bae6fd" }}>
                    <i className="fa-solid fa-circle-check"></i> Registered UN Supplier
                  </span>
                </div>
                <h3 className="tc-card-title">United Nations Global Marketplace (UNGM)</h3>
                <p className="tc-card-sub">
                  Officially registered vendor on the United Nations Global Marketplace (UNGM) — the common procurement portal for the entire UN system. Eligible to bid for IT, custom software development, digital platforms, and technical consultancy across 30+ UN bodies.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Procurement Portal</span>
                    <span className="tc-meta-val">UNGM (United Nations)</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Participating Agencies</span>
                    <span className="tc-meta-val">UN Secretariat, UNDP, UNICEF, WHO</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Vendor Entity</span>
                    <span className="tc-meta-val">ChittorTech</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Procurement Category</span>
                    <span className="tc-meta-val">IT, Software &amp; Tech Consulting</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Geographic Eligibility</span>
                    <span className="tc-meta-val">193 UN Member Nations</span>
                  </div>
                </div>
                <a
                  href="https://www.ungm.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-verify"
                  style={{ background: "#f0f9ff", color: "#0284c7", borderColor: "#bae6fd" }}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Verify on UNGM Portal
                </a>
              </div>
            </div>

            {/* Card 4: United States Federal Contractor (SAM.gov & NCAGE) */}
            <div className="col-lg-6 col-md-12">
              <div className="tc-card" style={{ borderColor: "#cbd5e1" }}>
                <div className="tc-card-top">
                  <div className="tc-card-icon sam">
                    <i className="fa-solid fa-flag-usa"></i>
                  </div>
                  <span className="tc-status-pill verified" style={{ background: "#f8fafc", color: "#0f172a", borderColor: "#cbd5e1" }}>
                    <i className="fa-solid fa-circle-check"></i> US Federal Contractor
                  </span>
                </div>
                <h3 className="tc-card-title">US Federal Contractor (SAM.gov &amp; NCAGE)</h3>
                <p className="tc-card-sub">
                  Registered commercial and government entity in the United States Federal System for Award Management (SAM.gov) and NATO Commercial and Government Entity (NCAGE) catalog. Authorized for US federal government contracts, solicitations, grants, and subcontracting.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Federal Portal</span>
                    <span className="tc-meta-val">SAM.gov (US Federal Government)</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Administering Agency</span>
                    <span className="tc-meta-val">US General Services Administration (GSA)</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">International Registry</span>
                    <span className="tc-meta-val">NATO CAGE / NCAGE Entity Track</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Registered Contractor</span>
                    <span className="tc-meta-val">ChittorTech</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Contract Scope</span>
                    <span className="tc-meta-val">US Defense &amp; Civilian Tech Solicitations</span>
                  </div>
                </div>
                <a
                  href="https://sam.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-verify"
                  style={{ background: "#f8fafc", color: "#0f172a", borderColor: "#cbd5e1" }}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Verify on SAM.gov Portal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 2: Statutory Government of India & State Accreditations ─── */}
      <section className="tc-section">
        <div className="container">
          <div className="tc-sec-head">
            <span className="tc-sec-tag">Statutory &amp; National Recognition</span>
            <h2 className="tc-sec-title">Government of India &amp; State Accreditations</h2>
            <p className="tc-sec-desc">
              Direct verification records issued by the Government of India, DPIIT, and the Department of Information Technology &amp; Communication (DoIT&amp;C).
            </p>
          </div>

          <div className="row g-4">
            {/* Card 1: DGFT IEC */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card">
                <div className="tc-card-top">
                  <div className="tc-card-icon gov">
                    <i className="fa-solid fa-earth-americas"></i>
                  </div>
                  <span className="tc-status-pill verified">
                    <i className="fa-solid fa-circle-check"></i> Officially Issued
                  </span>
                </div>
                <h3 className="tc-card-title">Importer-Exporter Code (IEC)</h3>
                <p className="tc-card-sub">
                  Mandatory statutory clearance issued by DGFT, Ministry of Commerce &amp; Industry, Government of India for international software exports and foreign exchange settlements.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">IEC / PAN</span>
                    <span className="tc-meta-val">
                      OTWPS1188A
                      <button
                        className="tc-copy-btn"
                        onClick={() => handleCopy("OTWPS1188A", "iec")}
                        title="Copy IEC"
                      >
                        <i className={copiedId === "iec" ? "fa-solid fa-check text-success" : "fa-regular fa-copy"}></i>
                      </button>
                    </span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Issuing Authority</span>
                    <span className="tc-meta-val">DGFT Jaipur, GoI</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">File Number</span>
                    <span className="tc-meta-val">...346AM27</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Date of Issue</span>
                    <span className="tc-meta-val">30/09/2026</span>
                  </div>
                </div>
                <a
                  href="https://www.dgft.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-verify"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Verify on DGFT Portal
                </a>
              </div>
            </div>

            {/* Card 2: DPIIT Startup India */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card">
                <div className="tc-card-top">
                  <div className="tc-card-icon gov">
                    <i className="fa-solid fa-lightbulb"></i>
                  </div>
                  <span className="tc-status-pill verified">
                    <i className="fa-solid fa-circle-check"></i> Recognized Startup
                  </span>
                </div>
                <h3 className="tc-card-title">Startup India Recognition</h3>
                <p className="tc-card-sub">
                  Recognized under the Government of India’s flagship Startup India initiative by the Department for Promotion of Industry and Internal Trade (DPIIT).
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Initiative</span>
                    <span className="tc-meta-val">Startup India (DPIIT)</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Ministry</span>
                    <span className="tc-meta-val">Commerce &amp; Industry</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Sector</span>
                    <span className="tc-meta-val">IT &amp; AI Products</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Govt. Procurement</span>
                    <span className="tc-meta-val">Exempt &amp; Eligible</span>
                  </div>
                </div>
                <a
                  href="https://www.startupindia.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-verify"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Startup India Portal
                </a>
              </div>
            </div>

            {/* Card 3: iStart Rajasthan */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card">
                <div className="tc-card-top">
                  <div className="tc-card-icon gov">
                    <i className="fa-solid fa-award"></i>
                  </div>
                  <span className="tc-status-pill verified">
                    <i className="fa-solid fa-circle-check"></i> 32 Q-Rate Score
                  </span>
                </div>
                <h3 className="tc-card-title">iStart Rajasthan Recognition</h3>
                <p className="tc-card-sub">
                  Incubated and recognized under Rajasthan Government’s flagship startup initiative by the Department of Information Technology &amp; Communication (DoIT&amp;C).
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">State Department</span>
                    <span className="tc-meta-val">DoIT&amp;C Rajasthan</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Q-Rate Assessment</span>
                    <span className="tc-meta-val" style={{ color: "#059669" }}>32 Q-Rate Assessed</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Startup Profile ID</span>
                    <span className="tc-meta-val">11478</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Incubation Hub</span>
                    <span className="tc-meta-val">Techno Hub / iStart</span>
                  </div>
                </div>
                <a
                  href="https://istart.rajasthan.gov.in/profile/11478/startups"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-verify"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> View iStart Profile
                </a>
              </div>
            </div>

            {/* Card 4: MSME / Udyam */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card">
                <div className="tc-card-top">
                  <div className="tc-card-icon gov">
                    <i className="fa-solid fa-handshake-angle"></i>
                  </div>
                  <span className="tc-status-pill verified">
                    <i className="fa-solid fa-circle-check"></i> Active &amp; Verified
                  </span>
                </div>
                <h3 className="tc-card-title">MSME / Udyam Enterprise</h3>
                <p className="tc-card-sub">
                  Officially registered under the Ministry of Micro, Small and Medium Enterprises, Govt. of India with statutory 45-day buyer payment protection under the MSMED Act.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Ministry</span>
                    <span className="tc-meta-val">Govt. of India</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Enterprise Type</span>
                    <span className="tc-meta-val">Micro (IT Services)</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Payment Security</span>
                    <span className="tc-meta-val">45-Day Statutory Law</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Govt. IT Tenders</span>
                    <span className="tc-meta-val">Eligible</span>
                  </div>
                </div>
                <a
                  href="https://udyamregistration.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-verify"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Verify on Udyam Portal
                </a>
              </div>
            </div>

            {/* Card 5: Google Play Verified Developer */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card">
                <div className="tc-card-top">
                  <div className="tc-card-icon play">
                    <i className="fa-brands fa-google-play"></i>
                  </div>
                  <span className="tc-status-pill verified">
                    <i className="fa-solid fa-circle-check"></i> Identity Verified
                  </span>
                </div>
                <h3 className="tc-card-title">Google Play Verified Developer</h3>
                <p className="tc-card-sub">
                  Identity-verified Google Play Console developer account with verified Indian banking credentials and full compliance with Google Play's 12-tester policy.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Platform</span>
                    <span className="tc-meta-val">Google Play Console</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Account Type</span>
                    <span className="tc-meta-val">Personal (Verified)</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Testing Track</span>
                    <span className="tc-meta-val">12 Testers for 14 Days</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">App Protection</span>
                    <span className="tc-meta-val">Play Integrity API</span>
                  </div>
                </div>
                <Link href="/google-play-publishing" className="tc-btn-verify">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Explore Publishing Service
                </Link>
              </div>
            </div>

            {/* Card 6: Apple Developer Program (iOS) */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card">
                <div className="tc-card-top">
                  <div className="tc-card-icon apple">
                    <i className="fa-brands fa-apple"></i>
                  </div>
                  <span className="tc-status-pill progress">
                    <i className="fa-solid fa-clock"></i> In Progress
                  </span>
                </div>
                <h3 className="tc-card-title">Apple Developer Program (iOS)</h3>
                <p className="tc-card-sub">
                  Official Apple Developer Program enrollment currently in verification process. Authorizes native iOS, iPadOS, macOS, and watchOS enterprise distribution, TestFlight beta tracks, and App Store releases.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Ecosystem</span>
                    <span className="tc-meta-val">Apple App Store &amp; TestFlight</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Status</span>
                    <span className="tc-meta-val" style={{ color: "#b45309" }}>Verification In Progress</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Platforms</span>
                    <span className="tc-meta-val">iOS, iPadOS, macOS</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Architecture</span>
                    <span className="tc-meta-val">Swift &amp; React Native</span>
                  </div>
                </div>
                <Link href="/android-application" className="tc-btn-verify">
                  <i className="fa-solid fa-mobile-screen-button"></i> Mobile App Engineering
                </Link>
              </div>
            </div>

            {/* Card 7: D-U-N-S Number */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card">
                <div className="tc-card-top">
                  <div className="tc-card-icon global">
                    <i className="fa-solid fa-globe"></i>
                  </div>
                  <span className="tc-status-pill progress">
                    <i className="fa-solid fa-clock"></i> Coming Soon
                  </span>
                </div>
                <h3 className="tc-card-title">Dun &amp; Bradstreet (D-U-N-S®)</h3>
                <p className="tc-card-sub">
                  9-digit corporate identifier under process with Dun &amp; Bradstreet India. Mandated by Apple Developer Organization, US Fortune 500s, and European enterprise procurement.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Registry</span>
                    <span className="tc-meta-val">Dun &amp; Bradstreet</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Status</span>
                    <span className="tc-meta-val" style={{ color: "#b45309" }}>Coming Soon</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Apple Org Verified</span>
                    <span className="tc-meta-val">In Process</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Geographic Scope</span>
                    <span className="tc-meta-val">US, UK, EU, UAE, AUS</span>
                  </div>
                </div>
                <a
                  href="https://www.dnb.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-verify"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> D&amp;B India Portal
                </a>
              </div>
            </div>

            {/* Card 8: GST Compliance */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card">
                <div className="tc-card-top">
                  <div className="tc-card-icon gov">
                    <i className="fa-solid fa-file-invoice-dollar"></i>
                  </div>
                  <span className="tc-status-pill progress">
                    <i className="fa-solid fa-clock"></i> Coming Soon
                  </span>
                </div>
                <h3 className="tc-card-title">GST &amp; Financial Compliance</h3>
                <p className="tc-card-sub">
                  Statutory corporate invoicing compliance under the Central Board of Indirect Taxes and Customs (CBIC). B2B domestic clients receive full Input Tax Credit (ITC).
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Authority</span>
                    <span className="tc-meta-val">CBIC, Govt of India</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Certificate Status</span>
                    <span className="tc-meta-val" style={{ color: "#b45309" }}>Coming Soon</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">B2B Tax Credit</span>
                    <span className="tc-meta-val">ITC Pass-Through</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Export Invoicing</span>
                    <span className="tc-meta-val">GST LUT Zero-Rated</span>
                  </div>
                </div>
                <Link href="/payment-terms" className="tc-btn-verify">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Read Payment Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 2: Third-Party Verified B2B Directories & Engineering Profiles ─── */}
      <section className="tc-section" style={{ background: "#ffffff", borderTop: "1.5px solid #e2e8f0", borderBottom: "1.5px solid #e2e8f0" }}>
        <div className="container">
          <div className="tc-sec-head">
            <span className="tc-sec-tag">Developer &amp; B2B Trust Badges</span>
            <h2 className="tc-sec-title">Independent Reviews, Repositories &amp; Cloud Presence</h2>
            <p className="tc-sec-desc">
              ChittorTech’s engineering delivery, client satisfaction, and developer footprint are publicly validated across global B2B platforms, cloud infrastructure, and code repositories.
            </p>
          </div>

          <div className="row g-4">
            {/* Card 1: GoodFirms */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card">
                <div className="tc-card-top">
                  <div className="tc-card-icon goodfirms">
                    <i className="fa-solid fa-award"></i>
                  </div>
                  <span className="tc-status-pill verified">
                    <i className="fa-solid fa-circle-check"></i> Verified Profile
                  </span>
                </div>
                <h3 className="tc-card-title">GoodFirms B2B IT Directory</h3>
                <p className="tc-card-sub">
                  Recognized and verified on GoodFirms among top custom software, web, and mobile app development agencies.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Platform</span>
                    <span className="tc-meta-val">GoodFirms.co</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Listing Category</span>
                    <span className="tc-meta-val">Software &amp; Mobile</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Review Status</span>
                    <span className="tc-meta-val">Verified Client Agency</span>
                  </div>
                </div>
                <a
                  href="https://www.goodfirms.co/company/chittortech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-verify"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> View GoodFirms Profile
                </a>
              </div>
            </div>

            {/* Card 2: Clutch */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card">
                <div className="tc-card-top">
                  <div className="tc-card-icon clutch">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="tc-status-pill verified">
                    <i className="fa-solid fa-circle-check"></i> Listed Agency
                  </span>
                </div>
                <h3 className="tc-card-title">Clutch.co B2B Ratings</h3>
                <p className="tc-card-sub">
                  Global B2B IT rating platform validating software agencies through verified client reviews, project scope audits, and market presence.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Platform</span>
                    <span className="tc-meta-val">Clutch.co (Washington DC)</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Focus</span>
                    <span className="tc-meta-val">Custom Software &amp; AI</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Audience</span>
                    <span className="tc-meta-val">US, EU &amp; Global B2B</span>
                  </div>
                </div>
                <a
                  href="https://clutch.co/profile/chittortech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-verify"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> View Clutch Listing
                </a>
              </div>
            </div>

            {/* Card 3: Google Business Profile */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card">
                <div className="tc-card-top">
                  <div className="tc-card-icon gmb">
                    <i className="fa-brands fa-google"></i>
                  </div>
                  <span className="tc-status-pill verified">
                    <i className="fa-solid fa-circle-check"></i> Verified Local Entity
                  </span>
                </div>
                <h3 className="tc-card-title">Google Business Profile (GMB)</h3>
                <p className="tc-card-sub">
                  Physical presence and local corporate authority verified by Google Maps. Real-world headquarters based in Chittorgarh, Rajasthan.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Verification</span>
                    <span className="tc-meta-val">Google Maps Verified</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Headquarters</span>
                    <span className="tc-meta-val">Chittorgarh, RJ 312021</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Service Territory</span>
                    <span className="tc-meta-val">Pan-India &amp; Global</span>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=ChittorTech+Chittorgarh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-verify"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Open Google Maps Profile
                </a>
              </div>
            </div>

            {/* Card 4: LinkedIn Corporate */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card">
                <div className="tc-card-top">
                  <div className="tc-card-icon linkedin">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                  <span className="tc-status-pill active">
                    <i className="fa-solid fa-circle-check"></i> Official Organization
                  </span>
                </div>
                <h3 className="tc-card-title">LinkedIn Company Presence</h3>
                <p className="tc-card-sub">
                  Official corporate organization page on LinkedIn connecting enterprise clients, engineering leads, and technical updates.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Platform</span>
                    <span className="tc-meta-val">LinkedIn Corporation</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Network</span>
                    <span className="tc-meta-val">B2B Enterprise Leaders</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Updates</span>
                    <span className="tc-meta-val">Engineering &amp; Product</span>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/company/chittortech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-verify"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Visit LinkedIn Page
                </a>
              </div>
            </div>

            {/* Card 5: GitHub Code Organization */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card">
                <div className="tc-card-top">
                  <div className="tc-card-icon github">
                    <i className="fa-brands fa-github"></i>
                  </div>
                  <span className="tc-status-pill verified">
                    <i className="fa-solid fa-circle-check"></i> Open Source &amp; Code
                  </span>
                </div>
                <h3 className="tc-card-title">GitHub Engineering Hub</h3>
                <p className="tc-card-sub">
                  Public code repositories, enterprise architectural blueprints, and developer contribution records verifying our authentic full-stack engineering practices.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Platform</span>
                    <span className="tc-meta-val">GitHub Inc.</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Code Standards</span>
                    <span className="tc-meta-val">Next.js, Node, Python</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">IP Security</span>
                    <span className="tc-meta-val">Private Repo Handoff</span>
                  </div>
                </div>
                <a
                  href="https://github.com/sharmakush2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-verify"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Explore GitHub Profile
                </a>
              </div>
            </div>

            {/* Card 6: Vercel & Cloudflare Edge Infrastructure */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card">
                <div className="tc-card-top">
                  <div className="tc-card-icon cloud">
                    <i className="fa-solid fa-cloud"></i>
                  </div>
                  <span className="tc-status-pill verified">
                    <i className="fa-solid fa-circle-check"></i> Global Edge Live
                  </span>
                </div>
                <h3 className="tc-card-title">Cloudflare &amp; Vercel Infrastructure</h3>
                <p className="tc-card-sub">
                  Enterprise-grade hosting architecture with Cloudflare Global WAF, DNS protection, and edge acceleration delivering sub-second worldwide response times.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Edge Network</span>
                    <span className="tc-meta-val">Cloudflare Enterprise CDN</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Security Shield</span>
                    <span className="tc-meta-val">DDoS &amp; WAF Protected</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Uptime Record</span>
                    <span className="tc-meta-val">99.98% High Availability</span>
                  </div>
                </div>
                <Link href="/dns-cloudflare-management" className="tc-btn-verify">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Cloud Infrastructure
                </Link>
              </div>
            </div>

            {/* Card 7: WhatsApp Official Business */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card">
                <div className="tc-card-top">
                  <div className="tc-card-icon wa">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <span className="tc-status-pill verified">
                    <i className="fa-solid fa-circle-check"></i> Official Business
                  </span>
                </div>
                <h3 className="tc-card-title">WhatsApp Verified Business</h3>
                <p className="tc-card-sub">
                  Official registered business communication channel with 24/7 client response, instant support ticketing, and lead consultations.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Channel</span>
                    <span className="tc-meta-val">WhatsApp Business</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Business Line</span>
                    <span className="tc-meta-val">+91 75974 51057</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Response Time</span>
                    <span className="tc-meta-val">&lt; 15 Minutes</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/917597451057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-verify"
                >
                  <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Card 8: GoDaddy & Titan Corporate Email Infrastructure */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card">
                <div className="tc-card-top">
                  <div className="tc-card-icon cloud" style={{ background: "#f0fdfa", color: "#0d9488" }}>
                    <i className="fa-solid fa-envelope-circle-check"></i>
                  </div>
                  <span className="tc-status-pill verified">
                    <i className="fa-solid fa-circle-check"></i> Enterprise Email
                  </span>
                </div>
                <h3 className="tc-card-title">GoDaddy &amp; Titan Business Email</h3>
                <p className="tc-card-sub">
                  Verified corporate communication infrastructure powered by GoDaddy domains and Titan Enterprise Mail with SPF, DKIM, and TLS encryption.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Domain Registrar</span>
                    <span className="tc-meta-val">GoDaddy Corporate</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Mail Engine</span>
                    <span className="tc-meta-val">Titan Enterprise Suite</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Authentication</span>
                    <span className="tc-meta-val">SPF, DKIM &amp; DMARC</span>
                  </div>
                </div>
                <Link href="/business-email-branding-bimi" className="tc-btn-verify">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Explore Email Services
                </Link>
              </div>
            </div>

            {/* Card 9: Quora & Pinterest Content Hubs */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card">
                <div className="tc-card-top">
                  <div className="tc-card-icon quora">
                    <i className="fa-brands fa-quora"></i>
                  </div>
                  <span className="tc-status-pill active">
                    <i className="fa-solid fa-circle-check"></i> Authoritative QA
                  </span>
                </div>
                <h3 className="tc-card-title">Quora &amp; Visual Tech Hubs</h3>
                <p className="tc-card-sub">
                  Authoritative engineering answers on Quora, complemented by architectural blueprints on Pinterest.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Quora Space</span>
                    <span className="tc-meta-val">ChittorTech Official</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Pinterest Board</span>
                    <span className="tc-meta-val">chittortech (Visuals)</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Focus Area</span>
                    <span className="tc-meta-val">Tech Guides &amp; Solutions</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    href="https://www.quora.com/profile/ChittorTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tc-btn-verify"
                    style={{ flex: 1 }}
                  >
                    <i className="fa-brands fa-quora"></i> Quora
                  </a>
                  <a
                    href="https://in.pinterest.com/chittortech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tc-btn-verify"
                    style={{ flex: 1 }}
                  >
                    <i className="fa-brands fa-pinterest"></i> Pinterest
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: Startup & Corporate Accreditation Services (Lead Generation) ─── */}
      <section className="tc-section" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #eff6ff 100%)", borderBottom: "1.5px solid #e2e8f0" }}>
        <div className="container">
          <div className="tc-sec-head">
            <span className="tc-sec-tag" style={{ color: "#059669" }}>Startup &amp; Enterprise Compliance Services</span>
            <h2 className="tc-sec-title">Want These Accreditations For Your Company? We Can Help.</h2>
            <p className="tc-sec-desc">
              Navigating government portals, statutory documentation, and technical compliance is time-consuming. 
              ChittorTech provides end-to-end filing assistance, legal documentation, and advisory services for emerging Indian startups, software agencies, and digital exporters.
            </p>
          </div>

          <div className="row g-4">
            {/* Service 1: DGFT IEC Fast-Track */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card" style={{ borderColor: "#bfdbfe" }}>
                <div className="tc-card-top">
                  <div className="tc-card-icon gov">
                    <i className="fa-solid fa-plane-departure"></i>
                  </div>
                  <span className="tc-status-pill active">
                    <i className="fa-solid fa-bolt"></i> 24-48 Hr Fast-Track
                  </span>
                </div>
                <h3 className="tc-card-title">DGFT Importer-Exporter Code (IEC)</h3>
                <p className="tc-card-sub">
                  Turnkey IEC filing for software agencies, IT exporters, and SaaS founders to legally receive foreign remittances (USD, EUR, GBP) via wire transfer with bank FIRC compliance.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Turnaround</span>
                    <span className="tc-meta-val">24 to 48 Hours</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Deliverables</span>
                    <span className="tc-meta-val">Official DGFT Certificate</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Remittance</span>
                    <span className="tc-meta-val">USD / EUR / GBP Wires</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/917597451057?text=Hi%20ChittorTech,%20I%20need%20help%20with%20DGFT%20IEC%20registration%20from%20ChittorTech."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-lead"
                  style={{ background: "#2563eb", borderColor: "#2563eb" }}
                >
                  <i className="fa-brands fa-whatsapp"></i> Get IEC Assistance
                </a>
              </div>
            </div>

            {/* Service 2: DPIIT Startup India Recognition */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card" style={{ borderColor: "#bbf7d0" }}>
                <div className="tc-card-top">
                  <div className="tc-card-icon gov" style={{ background: "#f0fdf4", color: "#16a34a" }}>
                    <i className="fa-solid fa-lightbulb"></i>
                  </div>
                  <span className="tc-status-pill verified">
                    <i className="fa-solid fa-shield-check"></i> National Recognition
                  </span>
                </div>
                <h3 className="tc-card-title">DPIIT Startup India Recognition</h3>
                <p className="tc-card-sub">
                  Complete documentation and application filing for official Government of India Startup recognition. Unlocks 80% patent discounts, 50% trademark rebates, and tender exemptions.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Turnaround</span>
                    <span className="tc-meta-val">3 to 5 Business Days</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Deliverables</span>
                    <span className="tc-meta-val">DPIIT Recognition Number</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Key Perks</span>
                    <span className="tc-meta-val">Tax Holiday &amp; Rebates</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/917597451057?text=Hi%20ChittorTech,%20I%20need%20help%20with%20Startup%20India%20recognition%20from%20ChittorTech."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-lead"
                  style={{ background: "#16a34a", borderColor: "#16a34a" }}
                >
                  <i className="fa-brands fa-whatsapp"></i> Apply for Startup India
                </a>
              </div>
            </div>

            {/* Service 3: iStart Rajasthan Incubation & Q-Rate */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card" style={{ borderColor: "#fde68a" }}>
                <div className="tc-card-top">
                  <div className="tc-card-icon gov" style={{ background: "#fffbeb", color: "#d97706" }}>
                    <i className="fa-solid fa-award"></i>
                  </div>
                  <span className="tc-status-pill" style={{ background: "#fef3c7", color: "#b45309", border: "1px solid #fde68a" }}>
                    <i className="fa-solid fa-star"></i> State Incubation
                  </span>
                </div>
                <h3 className="tc-card-title">iStart Rajasthan &amp; Q-Rate Mentorship</h3>
                <p className="tc-card-sub">
                  Turnkey guidance for Rajasthan-based tech startups to onboard onto the iStart portal (DoIT&amp;C), structure pitch decks, and prepare for Q-Rate scorecard assessment (targeting 32+ score).
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Turnaround</span>
                    <span className="tc-meta-val">1 to 2 Weeks</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Deliverables</span>
                    <span className="tc-meta-val">iStart ID &amp; Q-Rate Audit</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Benefits</span>
                    <span className="tc-meta-val">State Grants &amp; Mentorship</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/917597451057?text=Hi%20ChittorTech,%20I%20need%20help%20with%20iStart%20Rajasthan%20registration%20and%20Q-Rate%20score%20from%20ChittorTech."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-lead"
                  style={{ background: "#d97706", borderColor: "#d97706" }}
                >
                  <i className="fa-brands fa-whatsapp"></i> Get iStart Guidance
                </a>
              </div>
            </div>

            {/* Service 4: MSME / Udyam Registration */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card">
                <div className="tc-card-top">
                  <div className="tc-card-icon gov">
                    <i className="fa-solid fa-handshake-angle"></i>
                  </div>
                  <span className="tc-status-pill verified">
                    <i className="fa-solid fa-check"></i> Statutory Protection
                  </span>
                </div>
                <h3 className="tc-card-title">MSME / Udyam Enterprise Filing</h3>
                <p className="tc-card-sub">
                  Hassle-free registration under the Ministry of MSME, Govt. of India. Enforce the statutory 45-day buyer payment clause (MSME Samadhaan) with 3x RBI compound interest protection.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Turnaround</span>
                    <span className="tc-meta-val">24 Hours</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Deliverables</span>
                    <span className="tc-meta-val">Official Udyam Certificate</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Legal Shield</span>
                    <span className="tc-meta-val">Delayed Payment Recovery</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/917597451057?text=Hi%20ChittorTech,%20I%20need%20help%20with%20MSME%20Udyam%20registration%20from%20ChittorTech."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-lead"
                >
                  <i className="fa-brands fa-whatsapp"></i> Register MSME
                </a>
              </div>
            </div>

            {/* Service 5: Google Play Verified Developer (Personal & Org) */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card" style={{ borderColor: "#a7f3d0" }}>
                <div className="tc-card-top">
                  <div className="tc-card-icon play">
                    <i className="fa-brands fa-google-play"></i>
                  </div>
                  <span className="tc-status-pill verified">
                    <i className="fa-solid fa-circle-check"></i> Personal &amp; Organization
                  </span>
                </div>
                <h3 className="tc-card-title">Google Play Developer (Personal &amp; Org)</h3>
                <p className="tc-card-sub">
                  Complete account setup for either Individual (Personal) or Corporate (Organization) Google Play Console. Includes 12 active Android testers for 14 continuous days and live store launch approval.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Account Types</span>
                    <span className="tc-meta-val">Personal &amp; Organization</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Policy Shield</span>
                    <span className="tc-meta-val">12 Testers / 14 Days</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Result</span>
                    <span className="tc-meta-val">Production Access Granted</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/917597451057?text=Hi%20ChittorTech,%20I%20need%20help%20setting%20up%20a%20Google%20Play%20Developer%20Account%20and%2012-tester%20compliance%20from%20ChittorTech."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-lead"
                  style={{ background: "#059669", borderColor: "#059669" }}
                >
                  <i className="fa-brands fa-whatsapp"></i> Setup Play Account
                </a>
              </div>
            </div>

            {/* Service 6: Dun & Bradstreet (D-U-N-S®) Registration */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card" style={{ borderColor: "#bfdbfe" }}>
                <div className="tc-card-top">
                  <div className="tc-card-icon gov" style={{ background: "#f0f9ff", color: "#0284c7" }}>
                    <i className="fa-solid fa-id-card-clip"></i>
                  </div>
                  <span className="tc-status-pill active">
                    <i className="fa-solid fa-globe"></i> Global Entity ID
                  </span>
                </div>
                <h3 className="tc-card-title">Dun &amp; Bradstreet (D-U-N-S®) Setup</h3>
                <p className="tc-card-sub">
                  Fast-track guidance and documentation to obtain your official 9-digit D-U-N-S® Number. Mandatory requirement for the Apple Developer Organization Program, global enterprise credit checks, and cross-border vendor onboarding.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Turnaround</span>
                    <span className="tc-meta-val">3 to 7 Days</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Deliverables</span>
                    <span className="tc-meta-val">Official D-U-N-S® Number</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Essential For</span>
                    <span className="tc-meta-val">Apple Org &amp; US/EU Contracts</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/917597451057?text=Hi%20ChittorTech,%20I%20need%20help%20with%20Dun%20%26%20Bradstreet%20DUNS%20registration%20from%20ChittorTech."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-lead"
                  style={{ background: "#0284c7", borderColor: "#0284c7" }}
                >
                  <i className="fa-brands fa-whatsapp"></i> Get D-U-N-S Number
                </a>
              </div>
            </div>

            {/* Service 7: GST Registration & Zero-Rated IT Export LUT */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card">
                <div className="tc-card-top">
                  <div className="tc-card-icon gov" style={{ background: "#f0fdf4", color: "#059669" }}>
                    <i className="fa-solid fa-file-invoice-dollar"></i>
                  </div>
                  <span className="tc-status-pill active">
                    <i className="fa-solid fa-percent"></i> 0% GST Export
                  </span>
                </div>
                <h3 className="tc-card-title">GST Setup &amp; 0% Export LUT Filing</h3>
                <p className="tc-card-sub">
                  Complete GSTIN registration and annual Letter of Undertaking (LUT) filing. Bill international clients at 0% GST legally without paying 18% IGST upfront, keeping your company’s working capital completely liquid.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Turnaround</span>
                    <span className="tc-meta-val">2 to 4 Days</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Deliverables</span>
                    <span className="tc-meta-val">GSTIN &amp; Approved LUT</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Cash Flow</span>
                    <span className="tc-meta-val">Zero Working Capital Locked</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/917597451057?text=Hi%20ChittorTech,%20I%20need%20help%20with%20GST%20registration%20and%200%25%20Export%20LUT%20filing%20from%20ChittorTech."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-lead"
                >
                  <i className="fa-brands fa-whatsapp"></i> Set Up GST &amp; LUT
                </a>
              </div>
            </div>

            {/* Service 8: GoodFirms, Clutch & Google Business Profile (GMB) */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card" style={{ borderColor: "#fecaca" }}>
                <div className="tc-card-top">
                  <div className="tc-card-icon clutch">
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </div>
                  <span className="tc-status-pill active">
                    <i className="fa-solid fa-award"></i> B2B Trust Hub
                  </span>
                </div>
                <h3 className="tc-card-title">GoodFirms, Clutch &amp; GMB Setup</h3>
                <p className="tc-card-sub">
                  End-to-end setup and verification across global B2B authority directories (GoodFirms, Clutch.co) and Google Business Profile. We craft your corporate portfolio, set up review frameworks, and verify your local map authority.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Turnaround</span>
                    <span className="tc-meta-val">3 to 5 Days</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Platforms</span>
                    <span className="tc-meta-val">Clutch, GoodFirms &amp; Maps</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Impact</span>
                    <span className="tc-meta-val">Global B2B Credibility</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/917597451057?text=Hi%20ChittorTech,%20I%20need%20help%20setting%20up%20and%20verifying%20GoodFirms,%20Clutch,%20and%20Google%20Business%20Profile%20from%20ChittorTech."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-lead"
                  style={{ background: "#dc2626", borderColor: "#dc2626" }}
                >
                  <i className="fa-brands fa-whatsapp"></i> Setup Clutch &amp; GMB
                </a>
              </div>
            </div>

            {/* Service 9: LinkedIn Corporate Company Presence */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card" style={{ borderColor: "#bfdbfe" }}>
                <div className="tc-card-top">
                  <div className="tc-card-icon linkedin">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                  <span className="tc-status-pill active">
                    <i className="fa-solid fa-briefcase"></i> Enterprise B2B
                  </span>
                </div>
                <h3 className="tc-card-title">LinkedIn Corporate Company Page</h3>
                <p className="tc-card-sub">
                  Turnkey creation and brand optimization of your official LinkedIn Company Page, executive founder profiles, showcase tabs, and brand banners. Establish institutional authority to win enterprise clients, investors, and top talent.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Turnaround</span>
                    <span className="tc-meta-val">24 to 48 Hours</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Deliverables</span>
                    <span className="tc-meta-val">Branded Page &amp; Banner Kit</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Benefit</span>
                    <span className="tc-meta-val">High-Ticket B2B Leads</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/917597451057?text=Hi%20ChittorTech,%20I%20need%20help%20setting%20up%20a%20professional%20LinkedIn%20Company%20Presence%20from%20ChittorTech."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-lead"
                  style={{ background: "#0077b5", borderColor: "#0077b5" }}
                >
                  <i className="fa-brands fa-whatsapp"></i> Create LinkedIn Page
                </a>
              </div>
            </div>

            {/* Service 10: GoDaddy & Titan Corporate Business Email Setup */}
            <div className="col-lg-4 col-md-6">
              <div className="tc-card" style={{ borderColor: "#99f6e4" }}>
                <div className="tc-card-top">
                  <div className="tc-card-icon cloud" style={{ background: "#f0fdfa", color: "#0d9488" }}>
                    <i className="fa-solid fa-envelope-circle-check"></i>
                  </div>
                  <span className="tc-status-pill verified">
                    <i className="fa-solid fa-shield-halved"></i> 100% Inbox Delivery
                  </span>
                </div>
                <h3 className="tc-card-title">GoDaddy &amp; Titan Business Email</h3>
                <p className="tc-card-sub">
                  Custom corporate business email setup (<code>you@yourcompany.com</code>) powered by GoDaddy domains and Titan Mail / Google Workspace. Complete DNS authentication configuration (SPF, DKIM, DMARC, MX) preventing spam flags.
                </p>
                <div className="tc-meta-box">
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Turnaround</span>
                    <span className="tc-meta-val">24 Hours</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Deliverables</span>
                    <span className="tc-meta-val">Custom Webmail &amp; Admin Suite</span>
                  </div>
                  <div className="tc-meta-row">
                    <span className="tc-meta-label">Security</span>
                    <span className="tc-meta-val">SPF, DKIM &amp; DMARC Set</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/917597451057?text=Hi%20ChittorTech,%20I%20need%20help%20setting%20up%20GoDaddy%20and%20Titan%20Corporate%20Business%20Emails%20from%20ChittorTech."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn-lead"
                  style={{ background: "#0d9488", borderColor: "#0d9488" }}
                >
                  <i className="fa-brands fa-whatsapp"></i> Set Up Business Email
                </a>
              </div>
            </div>
          </div>

          {/* Consultation CTA Banner */}
          <div className="tc-consult-banner">
            <div>
              <h4 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "#0f172a" }}>
                <i className="fa-solid fa-certificate text-success me-2"></i> Need Custom Advisory For Your Entity Structure?
              </h4>
              <p style={{ margin: 0, color: "#64748b", fontSize: "0.9rem" }}>
                Whether you need Sole Proprietorship, LLP, Pvt Ltd, or international banking clearances, our startup consultants guide you step-by-step.
              </p>
            </div>
            <div className="tc-consult-actions">
              <a
                href="https://wa.me/917597451057?text=Hi%20ChittorTech,%20I%20need%20custom%20compliance%20and%20registration%20advisory%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
                style={{ fontWeight: 700, padding: "10px 20px", borderRadius: "8px" }}
              >
                <i className="fa-brands fa-whatsapp me-2"></i> WhatsApp Consultation
              </a>
              <Link
                href="/contact-us"
                className="btn btn-primary"
                style={{ fontWeight: 700, padding: "10px 20px", borderRadius: "8px", background: "#2563eb", border: "none" }}
              >
                Book Compliance Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Corporate Verification Matrix (Modern Responsive Grid, Zero Horizontal Scroll) ─── */}
      <section className="tc-section">
        <div className="container">
          <div className="tc-sec-head">
            <span className="tc-sec-tag">Enterprise Procurement</span>
            <h2 className="tc-sec-title">Corporate Verification Matrix</h2>
            <p className="tc-sec-desc">
              Reference identifiers and verified statutory records for enterprise vendor onboarding, KYC compliance, and legal due diligence.
            </p>
          </div>

          <div className="tc-matrix-grid">
            {/* Record: ADB CMS */}
            <div className="tc-matrix-card">
              <div>
                <div className="tc-matrix-header">
                  <div className="tc-matrix-top-bar">
                    <div className="tc-matrix-icon adb" style={{ background: "#eff6ff", color: "#1e40af" }}>
                      <i className="fa-solid fa-landmark"></i>
                    </div>
                    <span className="tc-status-pill verified">
                      <i className="fa-solid fa-circle-check"></i> Empaneled
                    </span>
                  </div>
                  <div className="tc-matrix-title-wrap">
                    <h4 className="tc-matrix-title">Asian Development Bank</h4>
                    <p className="tc-matrix-authority">ADB Consultant Management System</p>
                  </div>
                </div>

                <div className="tc-matrix-body">
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">CMS Number</span>
                    <span className="tc-matrix-val">#051187</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Portal User</span>
                    <span className="tc-matrix-val">business@chittortech.in</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Scope</span>
                    <span className="tc-matrix-val">Asia-Pacific (68 Nations)</span>
                  </div>
                </div>
              </div>

              <a href="https://selfservice.adb.org/" target="_blank" rel="noopener noreferrer" className="tc-matrix-btn">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live ADB Portal
              </a>
            </div>

            {/* Record: Singapore GeBIZ */}
            <div className="tc-matrix-card">
              <div>
                <div className="tc-matrix-header">
                  <div className="tc-matrix-top-bar">
                    <div className="tc-matrix-icon gebiz" style={{ background: "#fef2f2", color: "#dc2626" }}>
                      <i className="fa-solid fa-city"></i>
                    </div>
                    <span className="tc-status-pill verified">
                      <i className="fa-solid fa-circle-check"></i> Registered
                    </span>
                  </div>
                  <div className="tc-matrix-title-wrap">
                    <h4 className="tc-matrix-title">Singapore Government</h4>
                    <p className="tc-matrix-authority">GeBIZ e-Procurement Portal</p>
                  </div>
                </div>

                <div className="tc-matrix-body">
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Partner Ref</span>
                    <span className="tc-matrix-val">#Y309075</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">GeBIZ ID</span>
                    <span className="tc-matrix-val">946298091482</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Authorised Rep</span>
                    <span className="tc-matrix-val">Kush Sharma</span>
                  </div>
                </div>
              </div>

              <a href="https://www.gebiz.gov.sg/" target="_blank" rel="noopener noreferrer" className="tc-matrix-btn">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live GeBIZ Portal
              </a>
            </div>

            {/* Record: UNGM */}
            <div className="tc-matrix-card">
              <div>
                <div className="tc-matrix-header">
                  <div className="tc-matrix-top-bar">
                    <div className="tc-matrix-icon un" style={{ background: "#f0f9ff", color: "#0284c7" }}>
                      <i className="fa-solid fa-globe"></i>
                    </div>
                    <span className="tc-status-pill verified">
                      <i className="fa-solid fa-circle-check"></i> UN Supplier
                    </span>
                  </div>
                  <div className="tc-matrix-title-wrap">
                    <h4 className="tc-matrix-title">United Nations (UNGM)</h4>
                    <p className="tc-matrix-authority">UN Global Marketplace</p>
                  </div>
                </div>

                <div className="tc-matrix-body">
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Category</span>
                    <span className="tc-matrix-val">IT &amp; Software Consulting</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Agencies</span>
                    <span className="tc-matrix-val">Secretariat, UNDP, UNICEF</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Scope</span>
                    <span className="tc-matrix-val">193 UN Member States</span>
                  </div>
                </div>
              </div>

              <a href="https://www.ungm.org/" target="_blank" rel="noopener noreferrer" className="tc-matrix-btn">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live UNGM Portal
              </a>
            </div>

            {/* Record: US SAM.gov */}
            <div className="tc-matrix-card">
              <div>
                <div className="tc-matrix-header">
                  <div className="tc-matrix-top-bar">
                    <div className="tc-matrix-icon sam" style={{ background: "#f8fafc", color: "#0f172a" }}>
                      <i className="fa-solid fa-flag-usa"></i>
                    </div>
                    <span className="tc-status-pill verified">
                      <i className="fa-solid fa-circle-check"></i> Contractor
                    </span>
                  </div>
                  <div className="tc-matrix-title-wrap">
                    <h4 className="tc-matrix-title">US Federal Contractor</h4>
                    <p className="tc-matrix-authority">SAM.gov &amp; NCAGE System</p>
                  </div>
                </div>

                <div className="tc-matrix-body">
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Registry</span>
                    <span className="tc-matrix-val">US GSA SAM.gov</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Entity Track</span>
                    <span className="tc-matrix-val">CAGE / NCAGE Catalog</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Eligibility</span>
                    <span className="tc-matrix-val">US Federal IT Solicitations</span>
                  </div>
                </div>
              </div>

              <a href="https://sam.gov/" target="_blank" rel="noopener noreferrer" className="tc-matrix-btn">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live SAM.gov Portal
              </a>
            </div>

            {/* Record 1: DGFT IEC */}
            <div className="tc-matrix-card">
              <div>
                <div className="tc-matrix-header">
                  <div className="tc-matrix-top-bar">
                    <div className="tc-matrix-icon gov">
                      <i className="fa-solid fa-earth-americas"></i>
                    </div>
                    <span className="tc-status-pill verified">
                      <i className="fa-solid fa-circle-check"></i> Active
                    </span>
                  </div>
                  <div className="tc-matrix-title-wrap">
                    <h4 className="tc-matrix-title">Importer-Exporter Code (IEC)</h4>
                    <p className="tc-matrix-authority">DGFT, Ministry of Commerce &amp; Industry</p>
                  </div>
                </div>

                <div className="tc-matrix-body">
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Identifier</span>
                    <span className="tc-matrix-val">OTWPS1188A</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">File Number</span>
                    <span className="tc-matrix-val">...346AM27</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Registry Date</span>
                    <span className="tc-matrix-val">30/09/2026</span>
                  </div>
                </div>
              </div>

              <a href="https://www.dgft.gov.in/" target="_blank" rel="noopener noreferrer" className="tc-matrix-btn">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live DGFT Portal
              </a>
            </div>

            {/* Record 2: Startup India */}
            <div className="tc-matrix-card">
              <div>
                <div className="tc-matrix-header">
                  <div className="tc-matrix-top-bar">
                    <div className="tc-matrix-icon gov" style={{ background: "#f0fdf4", color: "#16a34a" }}>
                      <i className="fa-solid fa-lightbulb"></i>
                    </div>
                    <span className="tc-status-pill verified">
                      <i className="fa-solid fa-circle-check"></i> Recognized
                    </span>
                  </div>
                  <div className="tc-matrix-title-wrap">
                    <h4 className="tc-matrix-title">Startup India Recognition</h4>
                    <p className="tc-matrix-authority">DPIIT, Govt. of India</p>
                  </div>
                </div>

                <div className="tc-matrix-body">
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Program</span>
                    <span className="tc-matrix-val">Startup India Hub</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Sector</span>
                    <span className="tc-matrix-val">AI &amp; Enterprise IT</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Procurement</span>
                    <span className="tc-matrix-val">Exempt &amp; Eligible</span>
                  </div>
                </div>
              </div>

              <a href="https://www.startupindia.gov.in/" target="_blank" rel="noopener noreferrer" className="tc-matrix-btn">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Startup India Portal
              </a>
            </div>

            {/* Record 3: iStart Rajasthan */}
            <div className="tc-matrix-card">
              <div>
                <div className="tc-matrix-header">
                  <div className="tc-matrix-top-bar">
                    <div className="tc-matrix-icon gov" style={{ background: "#fffbeb", color: "#d97706" }}>
                      <i className="fa-solid fa-award"></i>
                    </div>
                    <span className="tc-status-pill verified">
                      <i className="fa-solid fa-circle-check"></i> Incubated
                    </span>
                  </div>
                  <div className="tc-matrix-title-wrap">
                    <h4 className="tc-matrix-title">iStart Rajasthan Incubation</h4>
                    <p className="tc-matrix-authority">DoIT&amp;C, Govt. of Rajasthan</p>
                  </div>
                </div>

                <div className="tc-matrix-body">
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Profile ID</span>
                    <span className="tc-matrix-val">#11478</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Q-Rate Score</span>
                    <span className="tc-matrix-val">32 Assessment Score</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">State Tenders</span>
                    <span className="tc-matrix-val">Eligible Partner</span>
                  </div>
                </div>
              </div>

              <a href="https://istart.rajasthan.gov.in/profile/11478/startups" target="_blank" rel="noopener noreferrer" className="tc-matrix-btn">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> iStart Directory
              </a>
            </div>

            {/* Record 4: MSME / Udyam */}
            <div className="tc-matrix-card">
              <div>
                <div className="tc-matrix-header">
                  <div className="tc-matrix-top-bar">
                    <div className="tc-matrix-icon gov">
                      <i className="fa-solid fa-handshake-angle"></i>
                    </div>
                    <span className="tc-status-pill verified">
                      <i className="fa-solid fa-circle-check"></i> Active
                    </span>
                  </div>
                  <div className="tc-matrix-title-wrap">
                    <h4 className="tc-matrix-title">MSME / Udyam Enterprise</h4>
                    <p className="tc-matrix-authority">Ministry of MSME, Govt of India</p>
                  </div>
                </div>

                <div className="tc-matrix-body">
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Enterprise Type</span>
                    <span className="tc-matrix-val">Micro (IT Services)</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Payment Law</span>
                    <span className="tc-matrix-val">45-Day Statutory Shield</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Interest Shield</span>
                    <span className="tc-matrix-val">3x RBI Rate Penalty</span>
                  </div>
                </div>
              </div>

              <a href="https://udyamregistration.gov.in/" target="_blank" rel="noopener noreferrer" className="tc-matrix-btn">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Udyam Verification
              </a>
            </div>

            {/* Record 5: Google Play Console */}
            <div className="tc-matrix-card">
              <div>
                <div className="tc-matrix-header">
                  <div className="tc-matrix-top-bar">
                    <div className="tc-matrix-icon play">
                      <i className="fa-brands fa-google-play"></i>
                    </div>
                    <span className="tc-status-pill verified">
                      <i className="fa-solid fa-circle-check"></i> Verified
                    </span>
                  </div>
                  <div className="tc-matrix-title-wrap">
                    <h4 className="tc-matrix-title">Google Play Developer</h4>
                    <p className="tc-matrix-authority">Google LLC Developer Console</p>
                  </div>
                </div>

                <div className="tc-matrix-body">
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Account Track</span>
                    <span className="tc-matrix-val">Personal &amp; Org Verified</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Testing Rule</span>
                    <span className="tc-matrix-val">12 Testers / 14 Days</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">App Protection</span>
                    <span className="tc-matrix-val">Play Integrity API</span>
                  </div>
                </div>
              </div>

              <Link href="/google-play-publishing" className="tc-matrix-btn">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Publishing Service
              </Link>
            </div>

            {/* Record 6: Apple Developer Program */}
            <div className="tc-matrix-card">
              <div>
                <div className="tc-matrix-header">
                  <div className="tc-matrix-top-bar">
                    <div className="tc-matrix-icon apple">
                      <i className="fa-brands fa-apple"></i>
                    </div>
                    <span className="tc-status-pill progress">
                      <i className="fa-solid fa-clock"></i> In Progress
                    </span>
                  </div>
                  <div className="tc-matrix-title-wrap">
                    <h4 className="tc-matrix-title">Apple Developer (iOS)</h4>
                    <p className="tc-matrix-authority">Apple Inc. Developer Ecosystem</p>
                  </div>
                </div>

                <div className="tc-matrix-body">
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Platforms</span>
                    <span className="tc-matrix-val">iOS, iPadOS, macOS</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Distribution</span>
                    <span className="tc-matrix-val">App Store &amp; TestFlight</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Tech Stack</span>
                    <span className="tc-matrix-val">Swift &amp; React Native</span>
                  </div>
                </div>
              </div>

              <Link href="/android-application" className="tc-matrix-btn">
                <i className="fa-solid fa-mobile-screen-button"></i> Mobile Engineering
              </Link>
            </div>

            {/* Record 7: D-U-N-S® Corporate Registry */}
            <div className="tc-matrix-card">
              <div>
                <div className="tc-matrix-header">
                  <div className="tc-matrix-top-bar">
                    <div className="tc-matrix-icon global">
                      <i className="fa-solid fa-globe"></i>
                    </div>
                    <span className="tc-status-pill progress">
                      <i className="fa-solid fa-clock"></i> Coming Soon
                    </span>
                  </div>
                  <div className="tc-matrix-title-wrap">
                    <h4 className="tc-matrix-title">Dun &amp; Bradstreet (D-U-N-S®)</h4>
                    <p className="tc-matrix-authority">Dun &amp; Bradstreet Global DB</p>
                  </div>
                </div>

                <div className="tc-matrix-body">
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Corporate ID</span>
                    <span className="tc-matrix-val">9-Digit D-U-N-S®</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Apple Org Match</span>
                    <span className="tc-matrix-val">In Process</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Scope</span>
                    <span className="tc-matrix-val">US, UK, EU, UAE, AUS</span>
                  </div>
                </div>
              </div>

              <a href="https://www.dnb.co.in/" target="_blank" rel="noopener noreferrer" className="tc-matrix-btn">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> D&amp;B India Portal
              </a>
            </div>

            {/* Record 8: GST & Financial Compliance */}
            <div className="tc-matrix-card">
              <div>
                <div className="tc-matrix-header">
                  <div className="tc-matrix-top-bar">
                    <div className="tc-matrix-icon gov" style={{ background: "#f0fdf4", color: "#059669" }}>
                      <i className="fa-solid fa-file-invoice-dollar"></i>
                    </div>
                    <span className="tc-status-pill progress">
                      <i className="fa-solid fa-clock"></i> Coming Soon
                    </span>
                  </div>
                  <div className="tc-matrix-title-wrap">
                    <h4 className="tc-matrix-title">GST &amp; Tax Invoicing</h4>
                    <p className="tc-matrix-authority">CBIC, Govt of India</p>
                  </div>
                </div>

                <div className="tc-matrix-body">
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Invoicing</span>
                    <span className="tc-matrix-val">GST B2B ITC-Enabled</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Export Remittance</span>
                    <span className="tc-matrix-val">0% GST LUT Setup</span>
                  </div>
                  <div className="tc-matrix-row">
                    <span className="tc-matrix-key">Compliance Status</span>
                    <span className="tc-matrix-val">Documentation Phase</span>
                  </div>
                </div>
              </div>

              <Link href="/payment-terms" className="tc-matrix-btn">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Payment Terms
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Legal FAQ ─── */}
      <section className="tc-section" style={{ background: "#ffffff", borderTop: "1.5px solid #e2e8f0" }}>
        <div className="container">
          <div className="tc-sec-head">
            <span className="tc-sec-tag">Frequently Asked Questions</span>
            <h2 className="tc-sec-title">Enterprise Security &amp; Contract Guarantees</h2>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-5">
              <div style={{ background: "#f8fafc", padding: "26px", borderRadius: "14px", border: "1.5px solid #e2e8f0", height: "100%" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", marginBottom: "12px" }}>
                  <i className="fa-solid fa-file-signature text-primary me-2"></i> How are Non-Disclosure Agreements (NDAs) handled?
                </h4>
                <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.65, margin: 0 }}>
                  We execute bilateral, legally binding NDAs and Master Services Agreements (MSAs) before touching any proprietary code, database schema, or business workflows. All intellectual property (IP) is transferred 100% to the client upon milestone delivery.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div style={{ background: "#f8fafc", padding: "26px", borderRadius: "14px", border: "1.5px solid #e2e8f0", height: "100%" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", marginBottom: "12px" }}>
                  <i className="fa-solid fa-globe text-primary me-2"></i> Can foreign companies remit payments directly?
                </h4>
                <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.65, margin: 0 }}>
                  Yes. Backed by our DGFT Importer-Exporter Code (`OTWPS1188A`), international clients in the US, UK, UAE, Australia, and Europe can transfer wire payments in USD, EUR, GBP, or AUD with zero-rated GST export invoices and official bank Foreign Inward Remittance Certificate (FIRC) documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="tc-section" style={{ paddingBottom: "80px" }}>
        <div className="container">
          <div className="tc-cta-box">
            <h2 className="tc-cta-title">Build With a Verified Engineering Partner</h2>
            <p className="tc-cta-sub">
              Have enterprise vendor onboarding forms or require custom MSA/NDA documentation? Our legal and technical team will assist within 24 hours.
            </p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact-us"
                className="btn btn-primary btn-lg"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #06b6d4)",
                  border: "none",
                  fontWeight: 700,
                  padding: "13px 30px",
                  borderRadius: "10px",
                  fontSize: "0.95rem"
                }}
              >
                <i className="fa-solid fa-paper-plane me-2"></i> Request Vendor Onboarding
              </Link>
              <a
                href="https://wa.me/917597451057"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-lg"
                style={{
                  fontWeight: 700,
                  padding: "13px 30px",
                  borderRadius: "10px",
                  fontSize: "0.95rem"
                }}
              >
                <i className="fa-brands fa-whatsapp me-2"></i> Chat with Founders
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
