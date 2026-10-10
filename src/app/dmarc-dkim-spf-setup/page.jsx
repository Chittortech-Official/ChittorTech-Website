"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function DmarcSetupPage() {
  const [currency, setCurrency] = useState("USD"); // "USD" | "INR"
  const [openFaq, setOpenFaq] = useState(0);

  const whatsappUrl =
    "https://wa.me/917597451057?text=Hi%20ChittorTech%2C%20I%20need%20an%20urgent%20SPF%2C%20DKIM%20%26%20DMARC%20audit%20and%20compliance%20setup%20for%20my%20domain.";

  const comparisonData = [
    {
      prop: "Primary Purpose",
      spf: "Authorize sending IP infrastructure",
      dkim: "Cryptographically sign & tamper-proof emails",
      dmarc: "Enforce domain alignment & anti-spoofing policy",
    },
    {
      prop: "RFC Standard",
      spf: "RFC 7208",
      dkim: "RFC 6376",
      dmarc: "RFC 7489",
    },
    {
      prop: "Main Identity Verified",
      spf: "SMTP Envelope MAIL FROM domain",
      dkim: "d= domain in cryptographic header",
      dmarc: "Visible From: header shown to recipients",
    },
    {
      prop: "DNS Record Type",
      spf: "TXT record (v=spf1)",
      dkim: "TXT or CNAME (selector._domainkey)",
      dmarc: "TXT record (_dmarc.domain.com)",
    },
    {
      prop: "Cryptographic Security",
      spf: "No (IP list check only)",
      dkim: "Yes (2048-bit RSA private/public keys)",
      dmarc: "No (Alignment evaluation & policy enforcement)",
    },
    {
      prop: "Anti-Spoofing Protection",
      spf: "Limited (does not protect visible From:)",
      dkim: "Yes (for signed headers and body hash)",
      dmarc: "Strongest (enforces p=reject on spoofed mail)",
    },
    {
      prop: "Native Reporting",
      spf: "None",
      dkim: "None",
      dmarc: "Yes (RUA aggregate XML & RUF forensic)",
    },
    {
      prop: "Common Failure Mode",
      spf: "SPF PermError (>10 lookup limit exceeded)",
      dkim: "DKIM Fail (Signature missing or altered)",
      dmarc: "DMARC Fail (Unaligned or unauthorized source)",
    },
  ];

  const packageCapabilities = [
    { name: "Domain Scope", t1: "Single Domain", t2: "Single Domain", t3: "Up to 5 Domains" },
    { name: "SPF Dependency & Lookup Audit", t1: "✓ Included", t2: "✓ Full Flattening", t3: "✓ Multi-Domain Fleet" },
    { name: "2048-bit DKIM Key Setup", t1: "✓ Yes", t2: "✓ With Rotation", t3: "✓ Multi-Selector Fleet" },
    { name: "DMARC Record Setup", t1: "✓ Basic", t2: "✓ p=none / quarantine", t3: "✓ Fleet Architecture" },
    { name: "Domain Alignment Analysis", t1: "Basic", t2: "Advanced (aspf/adkim)", t3: "Enterprise Fleet" },
    { name: "RUA Aggregate Reporting Setup", t1: "—", t2: "✓ 30-Day Analysis", t3: "✓ Centralized Fleet" },
    { name: "Progressive p=quarantine/reject Roadmap", t1: "—", t2: "✓ pct=25→50→100", t3: "✓ Custom Staged SOP" },
    { name: "Google Postmaster Tools Setup", t1: "—", t2: "✓ Included", t3: "✓ Multi-Domain Suite" },
    { name: "Third-Party SaaS Sender Discovery", t1: "—", t2: "✓ CRM, ERP & APIs", t3: "✓ Subcontractor Audits" },
    { name: "Implementation Warranty & Support", t1: "7 Days", t2: "14 Days", t3: "30 Days Dedicated" },
  ];

  const faqs = [
    {
      q: "1. What happens if I jump directly from p=none to p=reject?",
      a: "p=reject instructs participating receiving mail systems to drop any email failing DMARC. If third-party senders like your CRM (Salesforce/HubSpot), ERP, automated invoice platforms, or transactional APIs have not been mapped and aligned, critical business emails will be rejected. ChittorTech always establishes discovery and monitoring (p=none) before advancing to enforcement.",
    },
    {
      q: "2. Can I have multiple SPF records on the same domain?",
      a: "No. RFC 7208 explicitly specifies that a domain must publish only a single SPF TXT record. Publishing multiple records (e.g., one for Google and another for SendGrid) results in an automatic 'SPF PermError', causing mailbox providers to treat authentication as failed. All authorized sources must be consolidated into one valid SPF record.",
    },
    {
      q: "3. Why is my DKIM selector not resolving?",
      a: "Common causes include typos in the selector name, missing `_domainkey` in the DNS hostname, incorrect CNAME targets, or DNS propagation delays. Another common issue is inspecting `default._domainkey` when the provider actually signs with `google._domainkey` or a custom selector. ChittorTech extracts the exact signing selector from message headers to confirm verification.",
    },
    {
      q: "4. How do I check whether my DKIM is aligned with DMARC?",
      a: "DMARC alignment checks whether the domain in the visible `From:` header matches the signing domain (`d=`) in the DKIM-Signature header. In relaxed mode (`adkim=r`), subdomains (e.g. `mail.example.com`) align with the root domain (`example.com`). In strict mode (`adkim=s`), both domains must match identically.",
    },
    {
      q: "5. What is the difference between p=quarantine and p=reject?",
      a: "`p=quarantine` instructs receiving servers to treat DMARC-failing messages as suspicious and divert them to the Spam/Junk folder. `p=reject` instructs receiving servers to block and drop failing messages at the SMTP connection stage, offering total domain spoofing immunity.",
    },
    {
      q: "6. Does DMARC stop phishing completely?",
      a: "DMARC protects your exact domain against direct unauthorized spoofing. It does not stop attackers from registering lookalike domains (e.g., `company-security.com`), display-name spoofing, or compromised employee accounts. This is why DMARC is an essential foundational layer of broader email security.",
    },
    {
      q: "7. Does DMARC p=reject guarantee that my emails reach the inbox?",
      a: "No single DNS record guarantees inbox placement. DMARC guarantees authentication, domain alignment, and spoof protection. Inbox delivery also relies on sender reputation, low spam complaint rates (<0.1%), list hygiene, and content quality. However, without valid DMARC, reaching inboxes at Google and Yahoo is virtually impossible.",
    },
    {
      q: "8. Why should I configure Google Postmaster Tools?",
      a: "Google Postmaster Tools provides official telemetry on how Gmail rates your sending domain: domain reputation, IP reputation, authentication pass rate, and user-reported spam rates. It provides empirical data that DNS testing alone cannot reveal.",
    },
  ];

  return (
    <>
      <style>{`
        /* ChittorTech DMARC & Authentication Design System */
        .deliv-wrapper {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: #0f172a;
          background-color: #f8fafc;
          overflow-x: hidden !important;
          width: 100% !important;
          max-width: 100vw !important;
        }
        .deliv-hero {
          background: radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.18) 0%, transparent 50%),
                      radial-gradient(circle at 10% 80%, rgba(14, 165, 233, 0.15) 0%, transparent 45%),
                      linear-gradient(135deg, #0b0f19 0%, #0f172a 50%, #1e1b4b 100%);
          color: #ffffff;
          position: relative;
          overflow: hidden;
          padding: 90px 0 70px;
        }
        .deliv-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(12px);
          padding: 8px 18px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #38bdf8;
          margin-bottom: 24px;
        }
        .deliv-h1 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.85rem, 4.5vw, 3.6rem);
          font-weight: 900;
          line-height: 1.18;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin-bottom: 22px;
        }
        .deliv-h1 span {
          background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .deliv-hero-p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #cbd5e1;
          max-width: 700px;
          margin-bottom: 32px;
        }
        .deliv-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: #ffffff !important;
          font-weight: 700;
          font-size: 0.98rem;
          padding: 13px 26px;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.45);
          transition: all 0.25s ease;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .deliv-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 32px -6px rgba(37, 99, 235, 0.6);
        }
        .deliv-btn-wa {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #25d366;
          color: #ffffff !important;
          font-weight: 700;
          font-size: 0.98rem;
          padding: 13px 26px;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 10px 25px -5px rgba(37, 211, 102, 0.4);
          transition: all 0.25s ease;
        }
        .deliv-btn-wa:hover {
          transform: translateY(-2px);
          background: #22c35e;
          box-shadow: 0 16px 32px -6px rgba(37, 211, 102, 0.55);
        }
        .deliv-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff !important;
          font-weight: 700;
          font-size: 0.98rem;
          padding: 13px 26px;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.25s ease;
          backdrop-filter: blur(10px);
        }
        .deliv-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }
        .deliv-stat-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 11px 16px;
          border-radius: 12px;
          font-size: 0.88rem;
          color: #f1f5f9;
        }
        .deliv-stat-pill i {
          color: #38bdf8;
          font-size: 1.05rem;
        }

        /* Card Styles */
        .deliv-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 28px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          height: 100%;
          position: relative;
        }
        .deliv-card:hover {
          transform: translateY(-4px);
          border-color: #cbd5e1;
          box-shadow: 0 20px 35px -10px rgba(15, 23, 42, 0.08);
        }
        .deliv-card-icon {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          margin-bottom: 18px;
          background: #eff6ff;
          color: #2563eb;
        }

        /* Error Pills */
        .error-tag {
          font-family: 'JetBrains Mono', monospace, Courier;
          font-size: 0.82rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          display: inline-block;
          margin-bottom: 12px;
        }
        .error-tag-red {
          background: #fee2e2;
          color: #b91c1c;
          border: 1px solid #fecaca;
        }
        .error-tag-orange {
          background: #ffedd5;
          color: #c2410c;
          border: 1px solid #fed7aa;
        }

        /* Currency Switch & Pricing Card */
        .currency-switch {
          display: inline-flex;
          background: #e2e8f0;
          padding: 5px;
          border-radius: 9999px;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
        }
        .currency-btn {
          padding: 8px 24px;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 0.88rem;
          border: none;
          background: transparent;
          color: #64748b;
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .currency-btn.active {
          background: #ffffff;
          color: #1e1b4b;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.12);
        }
        .price-card {
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          border-radius: 18px;
          padding: 26px 22px;
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
        }
        .price-card:hover {
          border-color: #94a3b8;
          box-shadow: 0 15px 30px -10px rgba(15, 23, 42, 0.08);
        }
        .price-card.featured {
          border: 2px solid #2563eb;
          box-shadow: 0 16px 36px -10px rgba(37, 99, 235, 0.16);
          background: #ffffff;
        }

        /* Table */
        .deliv-table-wrap {
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }
        .deliv-table {
          width: 100%;
          min-width: 620px;
          margin-bottom: 0;
          border-collapse: collapse;
        }
        .deliv-table th {
          background: #f1f5f9;
          font-weight: 700;
          font-size: 0.88rem;
          color: #334155;
          padding: 14px 18px;
          border-bottom: 1px solid #e2e8f0;
        }
        .deliv-table td {
          padding: 14px 18px;
          font-size: 0.9rem;
          color: #475569;
          border-bottom: 1px solid #f1f5f9;
          vertical-align: middle;
        }
        .deliv-table tr:last-child td {
          border-bottom: none;
        }

        /* Mobile Card System for Tables */
        .deliv-mobile-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 16px;
          margin-bottom: 12px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }

        /* ─── MOBILE RESPONSIVENESS OVERRIDES (@media <= 768px) ─── */
        @media (max-width: 768px) {
          .deliv-hero {
            padding: 50px 0 45px !important;
          }
          .deliv-badge-pill {
            font-size: 0.72rem !important;
            padding: 6px 14px !important;
            margin-bottom: 18px !important;
            white-space: normal !important;
            line-height: 1.3 !important;
          }
          .deliv-h1 {
            font-size: 1.85rem !important;
            line-height: 1.25 !important;
          }
          .deliv-hero-p {
            font-size: 0.98rem !important;
            margin-bottom: 24px !important;
          }
          .hero-terminal-mockup {
            padding: 16px 14px !important;
            margin-top: 24px !important;
          }
          .hero-terminal-header {
            gap: 8px !important;
          }
          .hero-terminal-header .log-name {
            max-width: 140px !important;
            font-size: 0.72rem !important;
          }
          .hero-terminal-header .badge {
            font-size: 0.62rem !important;
          }
          .deliv-btn-wa, .deliv-btn-secondary, .deliv-btn-primary {
            width: 100% !important;
            padding: 13px 18px !important;
            font-size: 0.92rem !important;
            text-align: center !important;
          }
          .price-card {
            padding: 22px 18px !important;
          }
          .cta-h2 {
            font-size: 1.75rem !important;
            line-height: 1.25 !important;
          }
          .cta-badge {
            font-size: 0.7rem !important;
            white-space: normal !important;
            line-height: 1.4 !important;
            padding: 6px 12px !important;
          }
          .bottom-cta-section {
            padding-bottom: 90px !important;
          }
        }
      `}</style>

      <div className="deliv-wrapper">
        {/* ─── 1. HERO SECTION ─── */}
        <section className="deliv-hero">
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <div className="deliv-badge-pill">
                  <i className="fa-solid fa-shield-virus"></i> Enterprise Email Security Architecture
                </div>
                <h1 className="deliv-h1">
                  Stop Domain Spoofing Before Someone Uses Your Brand <br />
                  <span>To Send Fraudulent Email.</span>
                </h1>
                <p className="deliv-hero-p">
                  DMARC, DKIM & SPF Setup for businesses that cannot afford authentication failures.
                  Protect your corporate domain against unauthorized email, spoofing, and phishing while implementing
                  a controlled roadmap toward strict <code>p=reject</code> across Google Workspace, Microsoft 365, AWS SES,
                  SendGrid, and Zoho.
                </p>

                {/* 4 Technical Trust Badges */}
                <div className="row g-2 mb-4">
                  <div className="col-sm-6">
                    <div className="deliv-stat-pill">
                      <i className="fa-solid fa-check-double text-cyan-400"></i>
                      <span><strong>Google & Yahoo Ready</strong> Mandate Aligned</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="deliv-stat-pill">
                      <i className="fa-solid fa-key text-cyan-400"></i>
                      <span><strong>2048-bit DKIM</strong> Cryptographic Signing</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="deliv-stat-pill">
                      <i className="fa-solid fa-shield-halved text-cyan-400"></i>
                      <span><strong>p=reject Roadmap</strong> Controlled 3 Phases</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="deliv-stat-pill">
                      <i className="fa-solid fa-server text-cyan-400"></i>
                      <span><strong>Zero-Downtime</strong> Implementation Plan</span>
                    </div>
                  </div>
                </div>

                {/* Hero CTAs */}
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="deliv-btn-wa"
                  >
                    <i className="fa-brands fa-whatsapp" style={{ fontSize: "1.25rem" }}></i>
                    Fix My SPF, DKIM & DMARC Now — WhatsApp
                  </a>
                  <button
                    className="deliv-btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#trialModal"
                  >
                    <i className="fa-solid fa-calendar-check"></i>
                    Book 30-Min Consultation
                  </button>
                </div>

                <div className="text-slate-400" style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
                  <i className="fa-solid fa-earth-americas me-2 text-cyan-400"></i>
                  Supporting businesses across: <strong>USA · UK · UAE · Canada · Australia · India</strong>
                </div>
              </div>

              {/* Hero Right Visual (Live Architecture Inspector Mockup) */}
              <div className="col-lg-5">
                <div
                  className="hero-terminal-mockup"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "18px",
                    padding: "24px",
                    backdropFilter: "blur(14px)",
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                    overflow: "hidden",
                  }}
                >
                  <div className="hero-terminal-header d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom border-secondary border-opacity-25">
                    <div className="d-flex align-items-center gap-2 overflow-hidden">
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444", flexShrink: 0 }}></span>
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b", flexShrink: 0 }}></span>
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981", flexShrink: 0 }}></span>
                      <span className="ms-1 font-monospace text-truncate log-name" style={{ fontSize: "0.78rem", color: "#94a3b8" }}>
                        dmarc_alignment_inspector.sh
                      </span>
                    </div>
                    <span className="badge bg-primary text-uppercase px-2 py-1 flex-shrink-0" style={{ fontSize: "0.68rem" }}>
                      Triad Diagnostic
                    </span>
                  </div>

                  <div className="font-monospace" style={{ fontSize: "0.8rem", lineHeight: "1.7", color: "#e2e8f0", wordBreak: "break-word" }}>
                    <div className="text-info mb-1">
                      <i className="fa-solid fa-terminal me-1"></i> Running RFC 7489 Alignment Diagnostics:
                    </div>
                    <div style={{ color: "#94a3b8" }}>
                      &gt; SPF [RFC 7208]: <span className="text-success">PASS</span> (MAIL FROM: bounce.company.com)
                    </div>
                    <div style={{ color: "#94a3b8" }}>
                      &gt; SPF Alignment (aspf=r): <span className="text-warning">ALIGNMENT MISMATCH</span> (From != MAIL FROM)
                    </div>
                    <div style={{ color: "#94a3b8" }}>
                      &gt; DKIM [RFC 6376]: <span className="text-success">PASS (2048-bit RSA)</span> (d=company.com)
                    </div>
                    <div style={{ color: "#94a3b8" }}>
                      &gt; DKIM Alignment (adkim=r): <span className="text-success">ALIGNED</span>
                    </div>
                    <div style={{ color: "#94a3b8" }}>
                      &gt; DMARC Policy: <span className="text-cyan-300">p=quarantine; pct=100; rua=...</span>
                    </div>
                    <div className="mt-3 p-3 rounded" style={{ background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.25)" }}>
                      <div className="d-flex justify-content-between align-items-center text-cyan-300 fw-bold flex-wrap gap-1">
                        <span>ChittorTech Safe Progression</span>
                        <span className="badge bg-success">p=reject Ready</span>
                      </div>
                      <small style={{ color: "#cbd5e1", fontSize: "0.76rem" }}>
                        All legitimate SaaS senders verified. Zero risk of business invoice blocking.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. THE AUTHENTICATION TRIAD (DEEP TECHNICAL BREAKDOWN) ─── */}
        <section className="py-5 bg-white border-bottom">
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Core Infrastructure Pillars
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                The Authentication Triad: Three Protocols, Three Different Jobs
              </h2>
              <p className="text-muted">
                Your email authentication architecture is not a single DNS record. SPF authorizes sending infrastructure.
                DKIM cryptographically signs outgoing messages. DMARC aligns them and instructs receiving servers on how to handle failures.
              </p>
            </div>

            <div className="row g-4 mb-5">
              {/* Protocol 1: SPF */}
              <div className="col-lg-4">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-network-wired"></i>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 className="fw-bold mb-0" style={{ color: "#1e1b4b" }}>SPF Protocol</h4>
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle">RFC 7208</span>
                  </div>
                  <p className="text-muted small mb-3">
                    Authorizes sending IP infrastructure via DNS TXT records evaluated against the SMTP envelope sender (<code>MAIL FROM</code>).
                  </p>

                  <div className="p-2 px-3 rounded bg-light border font-monospace small mb-3 text-secondary" style={{ fontSize: "0.72rem", wordBreak: "break-all", whiteSpace: "pre-wrap", lineHeight: "1.4" }}>
                    v=spf1 include:_spf.google.com include:sendgrid.net -all
                  </div>

                  <h6 className="fw-bold text-dark small text-uppercase mb-2">Technical Standards:</h6>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.86rem", color: "#475569" }}>
                    <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> <strong>10-DNS-Lookup Limit:</strong> Evaluates mechanisms strictly up to 10 queries; avoids catastrophic <code>SPF PermError</code>.</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> <strong>Enforcement Mechanism:</strong> Safely transitioning from permissive <code>~all</code> (SoftFail) to strictly enforced <code>-all</code> (HardFail).</li>
                    <li><i className="fa-solid fa-check text-primary me-2"></i> <strong>Subdomain Mapping:</strong> Dedicated SPF records for <code>bounce.</code> and <code>mail.</code> subdomains.</li>
                  </ul>
                </div>
              </div>

              {/* Protocol 2: DKIM */}
              <div className="col-lg-4">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-key"></i>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 className="fw-bold mb-0" style={{ color: "#1e1b4b" }}>DKIM Signing</h4>
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle">RFC 6376</span>
                  </div>
                  <p className="text-muted small mb-3">
                    Asymmetric cryptographic verification ensuring message headers and body have not been altered in transit.
                  </p>

                  <div className="p-2 px-3 rounded bg-light border font-monospace small mb-3 text-secondary" style={{ fontSize: "0.72rem", wordBreak: "break-all", whiteSpace: "pre-wrap", lineHeight: "1.4" }}>
                    selector1._domainkey.example.com TXT "v=DKIM1; k=rsa; p=..."
                  </div>

                  <h6 className="fw-bold text-dark small text-uppercase mb-2">Technical Standards:</h6>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.86rem", color: "#475569" }}>
                    <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> <strong>2048-bit RSA Keys:</strong> Maximum cryptographic strength replacing vulnerable legacy 1024-bit keys.</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> <strong>Canonicalization:</strong> Tuning <code>c=relaxed/relaxed</code> to prevent message modification breaks during forwarding.</li>
                    <li><i className="fa-solid fa-check text-primary me-2"></i> <strong>Key Rotation:</strong> Staging primary and standby selectors for seamless key rotation without mail bounce.</li>
                  </ul>
                </div>
              </div>

              {/* Protocol 3: DMARC */}
              <div className="col-lg-4">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 className="fw-bold mb-0" style={{ color: "#1e1b4b" }}>DMARC Policy</h4>
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle">RFC 7489</span>
                  </div>
                  <p className="text-muted small mb-3">
                    Ties SPF and DKIM directly to the visible <code>From:</code> header, enforcing anti-spoofing policies and generating telemetry.
                  </p>

                  <div className="p-2 px-3 rounded bg-light border font-monospace small mb-3 text-secondary" style={{ fontSize: "0.72rem", wordBreak: "break-all", whiteSpace: "pre-wrap", lineHeight: "1.4" }}>
                    _dmarc.example.com TXT "v=DMARC1; p=reject; pct=100; rua=..."
                  </div>

                  <h6 className="fw-bold text-dark small text-uppercase mb-2">Technical Standards:</h6>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.86rem", color: "#475569" }}>
                    <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> <strong>Domain Alignment:</strong> Evaluates relaxed (<code>r</code>) vs strict (<code>s</code>) alignment for SPF (<code>aspf</code>) & DKIM (<code>adkim</code>).</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> <strong>Policy Progression:</strong> Safe staging from <code>p=none</code> → <code>p=quarantine</code> → <code>p=reject</code>.</li>
                    <li><i className="fa-solid fa-check text-primary me-2"></i> <strong>Telemetry Ingestion:</strong> Parsing structured XML aggregate reports (<code>rua</code>) & forensic failure alerts (<code>ruf</code>).</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Protocol Technical Comparison Table: DESKTOP VIEW (d-none d-md-block) */}
            <div className="d-none d-md-block deliv-table-wrap mb-4">
              <div className="p-3 bg-light border-bottom fw-bold text-dark d-flex justify-content-between align-items-center">
                <span>Technical Comparison: SPF vs DKIM vs DMARC</span>
                <span className="badge bg-primary">IETF Standards</span>
              </div>
              <div className="table-responsive">
                <table className="deliv-table">
                  <thead>
                    <tr>
                      <th style={{ width: "22%" }}>Architectural Parameter</th>
                      <th style={{ width: "26%" }}>SPF (RFC 7208)</th>
                      <th style={{ width: "26%" }}>DKIM (RFC 6376)</th>
                      <th style={{ width: "26%" }}>DMARC (RFC 7489)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, idx) => (
                      <tr key={idx}>
                        <td><strong>{row.prop}</strong></td>
                        <td>{row.spf}</td>
                        <td>{row.dkim}</td>
                        <td className="text-primary fw-medium">{row.dmarc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Protocol Technical Comparison Table: MOBILE VIEW (d-block d-md-none) */}
            <div className="d-block d-md-none mb-4">
              <div className="p-3 bg-light border rounded-3 mb-3 fw-bold text-dark text-center" style={{ fontSize: "0.9rem" }}>
                SPF vs DKIM vs DMARC Comparison
              </div>
              {comparisonData.map((row, idx) => (
                <div key={idx} className="deliv-mobile-card mb-3 p-3">
                  <div className="fw-bold text-dark mb-2 pb-2 border-bottom" style={{ fontSize: "0.98rem" }}>
                    {row.prop}
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <div className="p-2 rounded bg-light border-start border-3 border-secondary">
                      <div className="text-muted fw-bold mb-1" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                        SPF (RFC 7208)
                      </div>
                      <div className="text-dark small fw-medium" style={{ lineHeight: "1.45" }}>
                        {row.spf}
                      </div>
                    </div>
                    <div className="p-2 rounded bg-light border-start border-3 border-secondary">
                      <div className="text-muted fw-bold mb-1" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                        DKIM (RFC 6376)
                      </div>
                      <div className="text-dark small fw-medium" style={{ lineHeight: "1.45" }}>
                        {row.dkim}
                      </div>
                    </div>
                    <div className="p-2 rounded bg-primary-subtle border-start border-3 border-primary">
                      <div className="text-primary fw-bold mb-1" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                        DMARC (RFC 7489)
                      </div>
                      <div className="text-primary small fw-semibold" style={{ lineHeight: "1.45" }}>
                        {row.dmarc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 3. GOOGLE & YAHOO 2025-2026 ENFORCEMENT & BUSINESS RISKS ─── */}
        <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Mandatory Compliance & Vulnerabilities
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                SPF Alone Is Not a Modern Email Authentication Strategy
              </h2>
              <p className="text-muted">
                Google and Yahoo mandate that bulk and corporate senders publish aligned SPF and DKIM, enforce DMARC,
                support TLS, and maintain user-reported spam rates strictly under 0.1% (never exceeding 0.3%).
              </p>
            </div>

            {/* Why SPF Alone Fails */}
            <div className="p-4 rounded-4 bg-white border mb-5 shadow-sm">
              <div className="row align-items-center g-4">
                <div className="col-lg-8">
                  <span className="badge bg-danger-subtle text-danger border border-danger-subtle mb-2 px-3 py-1 fw-bold">
                    The Impersonation Vulnerability
                  </span>
                  <h4 className="fw-bold" style={{ color: "#1e1b4b" }}>
                    Why SPF Alone Cannot Stop Fraudsters From Spoofing Your CEO
                  </h4>
                  <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                    SPF only validates the <code>MAIL FROM</code> (Return-Path) address in the SMTP envelope. An attacker can set up their
                    own authorized server, pass SPF under their own domain, and forge your visible <code>From: CEO &lt;ceo@yourcompany.com&gt;</code> in
                    the email header! The recipient sees your real executive's name and email. <strong>Only DMARC alignment evaluates the visible From: domain and stops this impersonation.</strong>
                  </p>
                </div>
                <div className="col-lg-4 text-center">
                  <div className="p-3 rounded-3 bg-light border font-monospace text-start" style={{ fontSize: "0.8rem" }}>
                    <div className="text-danger">From: CEO &lt;ceo@yourbrand.com&gt;</div>
                    <div className="text-muted">Return-Path: spoof@hacker-server.com</div>
                    <div className="text-success mt-2">SPF Result: PASS (for hacker domain)</div>
                    <div className="text-danger fw-bold">DMARC Result: FAIL (Unaligned)</div>
                    <div className="badge bg-danger mt-2">DMARC p=reject Action: DROPPED</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Error Codes Grid */}
            <div className="mb-4">
              <h4 className="fw-bold mb-2" style={{ color: "#1e1b4b" }}>
                SMTP Rejection Codes Indicating Broken Authentication
              </h4>
              <p className="text-muted">Receiving servers reject non-compliant business traffic with these status codes:</p>
            </div>

            <div className="row g-4 mb-5">
              <div className="col-md-3 col-sm-6">
                <div className="deliv-card">
                  <span className="error-tag error-tag-red">550 5.7.26</span>
                  <h5 className="fw-bold mb-1">Gmail Auth Rejection</h5>
                  <p className="text-muted small mb-0">Message fails SPF/DKIM or DMARC alignment required by Google.</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="deliv-card">
                  <span className="error-tag error-tag-red">550 5.7.1</span>
                  <h5 className="fw-bold mb-1">Policy Rejection</h5>
                  <p className="text-muted small mb-0">Target mailbox provider rejected mail due to strict anti-spoofing policy.</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="deliv-card">
                  <span className="error-tag error-tag-orange">554 Relay Denied</span>
                  <h5 className="fw-bold mb-1">Connector Failure</h5>
                  <p className="text-muted small mb-0">Exchange Online or relay connector rejected unauthorized outbound mail.</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="deliv-card">
                  <span className="error-tag error-tag-orange">421 / 451</span>
                  <h5 className="fw-bold mb-1">Temporary Throttling</h5>
                  <p className="text-muted small mb-0">Yahoo or Gmail deferring delivery due to compliance violations.</p>
                </div>
              </div>
            </div>

            {/* 3 Common Misconceptions */}
            <h4 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>
              Three Dangerous Email Authentication Misconceptions
            </h4>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="deliv-card">
                  <span className="badge bg-danger-subtle text-danger px-2 py-1 mb-2 fw-bold" style={{ fontSize: "0.72rem" }}>
                    MISCONCEPTION #1
                  </span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>"We have SPF, so nobody can spoof our domain."</h5>
                  <p className="text-muted small mb-0">
                    False. SPF only evaluates the hidden envelope sender. Without DMARC alignment, anyone can still display your executive email in the recipient's inbox.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="deliv-card">
                  <span className="badge bg-danger-subtle text-danger px-2 py-1 mb-2 fw-bold" style={{ fontSize: "0.72rem" }}>
                    MISCONCEPTION #2
                  </span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>"Publishing p=none means we are fully protected."</h5>
                  <p className="text-muted small mb-0">
                    False. <code>p=none</code> is purely diagnostic monitoring; it instructs servers to take zero protective action against spoofed messages.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="deliv-card">
                  <span className="badge bg-danger-subtle text-danger px-2 py-1 mb-2 fw-bold" style={{ fontSize: "0.72rem" }}>
                    MISCONCEPTION #3
                  </span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>"I can simply switch our DMARC to p=reject today."</h5>
                  <p className="text-muted small mb-0">
                    Dangerous! Immediate rejection without auditing unmapped CRM alerts, ERP invoices, and transactional SaaS will cause critical business emails to be blocked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. STEP-BY-STEP DMARC ENFORCEMENT ROADMAP ─── */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Zero-Downtime Safe Transition
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Our 3-Phase DMARC Enforcement Roadmap
              </h2>
              <p className="text-muted">
                We safely navigate your domain to full <code>p=reject</code> immunity while protecting legitimate business mail,
                customer invoices, and CRM notifications from ever being blocked.
              </p>
            </div>

            <div className="row g-4 mb-5">
              {/* Phase 1 */}
              <div className="col-lg-4">
                <div className="deliv-card border-top border-4 border-info">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-info-subtle text-info fw-bold">PHASE 1</span>
                    <span className="font-monospace text-muted small">p=none</span>
                  </div>
                  <h4 className="fw-bold" style={{ color: "#1e1b4b" }}>Audit, Discovery & Monitoring</h4>
                  <p className="text-muted small mb-3">
                    Discover before enforcing. We map every legitimate sending source, configure aggregate XML reporting (<code>rua</code>), and establish baseline telemetry.
                  </p>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.86rem", color: "#475569" }}>
                    <li className="mb-2"><i className="fa-solid fa-check text-info me-2"></i> Inventory all SaaS tools (Salesforce, Zendesk, Mailchimp).</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-info me-2"></i> Ingest daily DMARC aggregate XML reports.</li>
                    <li><i className="fa-solid fa-check text-info me-2"></i> Identify unaligned third-party bounce domains.</li>
                  </ul>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="col-lg-4">
                <div className="deliv-card border-top border-4 border-warning">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-warning-subtle text-warning fw-bold">PHASE 2</span>
                    <span className="font-monospace text-muted small">p=quarantine</span>
                  </div>
                  <h4 className="fw-bold" style={{ color: "#1e1b4b" }}>Source Alignment & Quarantine</h4>
                  <p className="text-muted small mb-3">
                    Controlled percentage rollout. We instruct receiving systems to divert suspicious messages to Spam while progressively increasing enforcement.
                  </p>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.86rem", color: "#475569" }}>
                    <li className="mb-2"><i className="fa-solid fa-check text-warning me-2"></i> Progressive staging: <code>pct=25</code> → <code>50</code> → <code>100</code>.</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-warning me-2"></i> Fix DKIM public/private keys for legitimate sending APIs.</li>
                    <li><i className="fa-solid fa-check text-warning me-2"></i> Verify SPF Pass + DKIM Pass + DMARC Alignment.</li>
                  </ul>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="col-lg-4">
                <div className="deliv-card border-top border-4 border-success">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-success-subtle text-success fw-bold">PHASE 3</span>
                    <span className="font-monospace text-muted small">p=reject</span>
                  </div>
                  <h4 className="fw-bold" style={{ color: "#1e1b4b" }}>Full Rejection & Domain Immunity</h4>
                  <p className="text-muted small mb-3">
                    Total spoofing immunity. Participating mail servers drop any unauthorized email impersonating your brand before it reaches the recipient.
                  </p>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.86rem", color: "#475569" }}>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Full enforcement: <code>p=reject; pct=100</code>.</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Subdomain security: <code>sp=reject</code> where appropriate.</li>
                    <li><i className="fa-solid fa-check text-success me-2"></i> Ongoing forensic alerts (<code>ruf</code>) and reputation monitoring.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Legitimate-Mail Safety Protocol */}
            <div className="p-4 rounded-4 bg-light border">
              <h4 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>
                ChittorTech’s Legitimate-Mail Safety Protocol
              </h4>
              <p className="text-muted mb-3" style={{ fontSize: "0.95rem" }}>
                We never activate <code>p=reject</code> until every critical business workflow is validated:
              </p>
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="p-3 bg-white rounded-3 border">
                    <h6 className="fw-bold mb-1"><i className="fa-solid fa-file-invoice text-primary me-2"></i> Invoices & Accounting</h6>
                    <small className="text-muted">ERP, QuickBooks, Zoho Books, Stripe billing authenticated with custom MAIL FROM.</small>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3 bg-white rounded-3 border">
                    <h6 className="fw-bold mb-1"><i className="fa-solid fa-users text-primary me-2"></i> CRM & Sales Alerts</h6>
                    <small className="text-muted">Salesforce, HubSpot, Apollo outbound aligned with 2048-bit DKIM selectors.</small>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3 bg-white rounded-3 border">
                    <h6 className="fw-bold mb-1"><i className="fa-solid fa-bell text-primary me-2"></i> Transactional APIs</h6>
                    <small className="text-muted">AWS SES, SendGrid, Postmark password resets & OTPs fully aligned and isolated.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. SUPPORTED EMAIL SYSTEMS & DNS HOSTS ─── */}
        <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Universal Stack Integration
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Supported Email Systems & DNS Infrastructure
              </h2>
              <p className="text-muted">
                One unified authentication architecture across your corporate inboxes, transactional gateways, and DNS managers.
              </p>
            </div>

            {/* Email Platforms */}
            <h5 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>Supported Email Providers</h5>
            <div className="row g-3 mb-5">
              <div className="col-md-3 col-sm-6">
                <div className="p-3 rounded-3 bg-white border">
                  <div className="fw-bold"><i className="fa-brands fa-google text-danger me-2"></i> Google Workspace</div>
                  <small className="text-muted">Admin DKIM, SPF include, Postmaster Tools</small>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="p-3 rounded-3 bg-white border">
                  <div className="fw-bold"><i className="fa-brands fa-microsoft text-primary me-2"></i> Microsoft 365</div>
                  <small className="text-muted">Exchange Online, CNAME DKIM, mail flow</small>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="p-3 rounded-3 bg-white border">
                  <div className="fw-bold"><i className="fa-solid fa-envelope-open-text text-warning me-2"></i> Zoho Mail</div>
                  <small className="text-muted">Zoho Workplace & CRM custom selectors</small>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="p-3 rounded-3 bg-white border">
                  <div className="fw-bold"><i className="fa-brands fa-aws text-warning me-2"></i> Amazon SES</div>
                  <small className="text-muted">Easy DKIM, custom MAIL FROM, SNS alerts</small>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="p-3 rounded-3 bg-white border">
                  <div className="fw-bold"><i className="fa-solid fa-paper-plane text-info me-2"></i> SendGrid</div>
                  <small className="text-muted">Automated security, branded return-path</small>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="p-3 rounded-3 bg-white border">
                  <div className="fw-bold"><i className="fa-solid fa-envelope-circle-check text-danger me-2"></i> Mailgun</div>
                  <small className="text-muted">Sending subdomains, tracking DNS</small>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="p-3 rounded-3 bg-white border">
                  <div className="fw-bold"><i className="fa-solid fa-stamp text-warning me-2"></i> Postmark</div>
                  <small className="text-muted">Message streams, transactional DKIM</small>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="p-3 rounded-3 bg-white border">
                  <div className="fw-bold"><i className="fa-solid fa-lock text-purple me-2"></i> Proton Mail</div>
                  <small className="text-muted">Custom-domain zero-access encryption</small>
                </div>
              </div>
            </div>

            {/* DNS Infrastructure */}
            <h5 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>Supported DNS Infrastructure</h5>
            <div className="row g-2">
              {["Cloudflare (DNSSEC-aware)", "AWS Route 53", "GoDaddy", "Namecheap", "Google Domains / Squarespace", "Hostinger", "Bluehost", "cPanel / BIND9"].map((dns, idx) => (
                <div key={idx} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="p-2 px-3 rounded-3 bg-white border small fw-medium text-secondary d-flex align-items-center gap-2">
                    <i className="fa-solid fa-server text-primary"></i> {dns}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-3">
              <small className="text-muted">*All implementation is performed via delegated admin or guided screen-share. We never ask for domain master passwords.</small>
            </div>
          </div>
        </section>

        {/* ─── 6. TRANSPARENT PRICING TIERS ─── */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Predictable Fixed Pricing
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Professional SPF, DKIM & DMARC Implementation
              </h2>
              <p className="text-muted">
                Transparent rates with defined technical deliverables. Choose the tier suited to your domain setup.
              </p>

              {/* Segmented Currency Switch */}
              <div className="mt-3">
                <div className="currency-switch">
                  <button
                    type="button"
                    onClick={() => setCurrency("USD")}
                    className={`currency-btn ${currency === "USD" ? "active" : ""}`}
                  >
                    🇺🇸 USD ($ Global)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrency("INR")}
                    className={`currency-btn ${currency === "INR" ? "active" : ""}`}
                  >
                    🇮🇳 INR (₹ India)
                  </button>
                </div>
                <div className="text-muted small mt-2" style={{ fontSize: "0.8rem" }}>
                  {currency === "USD"
                    ? "Fixed flat-rate pricing for US, UK, UAE, Canada & Global businesses"
                    : "Domestic pricing with Indian business GST invoicing available"}
                </div>
              </div>
            </div>

            {/* Clean Pricing Cards with Bottom CTA Buttons */}
            <div className="row g-4 align-items-stretch mb-5">
              {/* Tier 1: Express */}
              <div className="col-lg-4">
                <div className="price-card">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-light text-secondary border px-2 py-1" style={{ fontSize: "0.72rem" }}>
                      Tier 1 Standard
                    </span>
                    <span className="badge bg-light text-secondary border px-2 py-1" style={{ fontSize: "0.72rem" }}>
                      Single Domain
                    </span>
                  </div>
                  <h4 className="fw-bold mb-2 text-dark" style={{ fontSize: "1.3rem" }}>
                    Express Authentication Fix
                  </h4>
                  <p className="text-muted small mb-3">
                    For businesses experiencing immediate authentication errors needing rapid compliance.
                  </p>

                  <div className="p-3 rounded-3 bg-light mb-3 border">
                    <div className="d-flex align-items-baseline gap-1">
                      <span style={{ fontSize: "2rem", fontWeight: 900, color: "#0f172a", lineHeight: 1 }}>
                        {currency === "USD" ? "$79" : "₹5,999"}
                      </span>
                      <span className="text-muted small fw-medium">/ domain</span>
                    </div>
                    <div className="small fw-semibold text-success mt-1">
                      <i className="fa-solid fa-bolt me-1"></i> Target: 24-Hour Turnaround
                    </div>
                  </div>

                  <div className="flex-grow-1 mb-4">
                    <div className="fw-bold small text-uppercase text-secondary mb-2" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                      Included Deliverables:
                    </div>
                    <ul className="list-unstyled mb-0" style={{ fontSize: "0.85rem", color: "#334155" }}>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> SPF audit & lookup limit review</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> Provider 2048-bit DKIM configuration</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> DMARC policy record creation</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> Basic alignment verification</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> 1 Representative test-email check</li>
                      <li><i className="fa-solid fa-circle-check text-primary me-2"></i> 7-Day implementation support</li>
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/917597451057?text=Hi%20ChittorTech%2C%20I%20want%20to%20order%20the%20Express%20Authentication%20Fix%20package%20(${currency === "USD" ? "$79" : "₹5,999"}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary w-100 fw-bold py-2 rounded-3 mt-auto"
                  >
                    Fix My Authentication — WhatsApp
                  </a>
                </div>
              </div>

              {/* Tier 2: Complete Suite (Featured) */}
              <div className="col-lg-4">
                <div className="price-card featured">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge" style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)", color: "#fff", fontSize: "0.72rem", padding: "4px 10px", borderRadius: "9999px" }}>
                      ★ Recommended
                    </span>
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-2 py-1" style={{ fontSize: "0.72rem" }}>
                      Single Domain
                    </span>
                  </div>
                  <h4 className="fw-bold mb-2 text-primary" style={{ fontSize: "1.3rem" }}>
                    DMARC Enforcement Suite
                  </h4>
                  <p className="text-muted small mb-3">
                    Complete authentication architecture, 30-day XML telemetry, and controlled p=reject transition.
                  </p>

                  <div className="p-3 rounded-3 bg-primary-subtle border border-primary-subtle mb-3">
                    <div className="d-flex align-items-baseline gap-1">
                      <span style={{ fontSize: "2rem", fontWeight: 900, color: "#1d4ed8", lineHeight: 1 }}>
                        {currency === "USD" ? "$149" : "₹11,999"}
                      </span>
                      <span className="text-muted small fw-medium">/ domain</span>
                    </div>
                    <div className="small fw-semibold text-primary mt-1">
                      <i className="fa-solid fa-calendar-check me-1"></i> Full 3-Phase Rollout + 30-Day Analysis
                    </div>
                  </div>

                  <div className="flex-grow-1 mb-4">
                    <div className="fw-bold small text-uppercase text-primary mb-2" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                      Everything in Express, Plus:
                    </div>
                    <ul className="list-unstyled mb-0" style={{ fontSize: "0.85rem", color: "#334155" }}>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> Comprehensive SPF dependency flattening</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> 2048-bit DKIM setup with selector rotation</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> RUA aggregate XML reporting setup</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> 30-Day DMARC XML report analysis</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> Controlled p=quarantine (pct=25→50→100)</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> Google Postmaster Tools integration</li>
                      <li><i className="fa-solid fa-circle-check text-success me-2"></i> Final p=reject roadmap recommendation</li>
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/917597451057?text=Hi%20ChittorTech%2C%20I%20want%20to%20order%20the%20Complete%20DMARC%20Enforcement%20Suite%20(${currency === "USD" ? "$149" : "₹11,999"}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-100 fw-bold py-2 rounded-3 mt-auto shadow-sm"
                  >
                    Start DMARC Enforcement
                  </a>
                </div>
              </div>

              {/* Tier 3: Enterprise Fleet */}
              <div className="col-lg-4">
                <div className="price-card">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-dark text-white px-2 py-1" style={{ fontSize: "0.72rem" }}>
                      Tier 3 Enterprise
                    </span>
                    <span className="badge bg-dark text-white px-2 py-1" style={{ fontSize: "0.72rem" }}>
                      Up to 5 Domains
                    </span>
                  </div>
                  <h4 className="fw-bold mb-2 text-dark" style={{ fontSize: "1.3rem" }}>
                    Enterprise Fleet Architecture
                  </h4>
                  <p className="text-muted small mb-3">
                    Multi-domain architecture for agencies, SaaS fleets, and complex CRM routing stacks.
                  </p>

                  <div className="p-3 rounded-3 bg-light mb-3 border">
                    <div className="d-flex align-items-baseline gap-1">
                      <span style={{ fontSize: "2rem", fontWeight: 900, color: "#0f172a", lineHeight: 1 }}>
                        {currency === "USD" ? "$349+" : "₹27,999+"}
                      </span>
                      <span className="text-muted small fw-medium">/ 5 domains</span>
                    </div>
                    <div className="small fw-semibold text-info mt-1">
                      <i className="fa-solid fa-layer-group me-1"></i> Multi-Domain Fleet Architecture
                    </div>
                  </div>

                  <div className="flex-grow-1 mb-4">
                    <div className="fw-bold small text-uppercase text-secondary mb-2" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                      Enterprise Scope:
                    </div>
                    <ul className="list-unstyled mb-0" style={{ fontSize: "0.85rem", color: "#334155" }}>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> Up to 5 sending domains audited & aligned</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> Third-party CRM & transactional SaaS audits</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> Subcontractor & custom MAIL FROM review</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> CNAME delegation & DNS architecture SOP</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> Agency client onboarding infrastructure templates</li>
                      <li><i className="fa-solid fa-circle-check text-primary me-2"></i> 30-Day dedicated implementation support</li>
                    </ul>
                  </div>

                  <button
                    className="btn btn-outline-dark w-100 fw-bold py-2 rounded-3 mt-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#trialModal"
                    style={{ whiteSpace: "normal", fontSize: "0.92rem", minHeight: "44px" }}
                  >
                    Request Enterprise Scope
                  </button>
                </div>
              </div>
            </div>

            {/* Feature Comparison Matrix: DESKTOP VIEW (d-none d-md-block) */}
            <div className="d-none d-md-block deliv-table-wrap">
              <div className="p-3 bg-light border-bottom fw-bold text-dark">
                Package Capability Comparison Matrix
              </div>
              <div className="table-responsive">
                <table className="deliv-table">
                  <thead>
                    <tr>
                      <th style={{ width: "40%" }}>Capability / Technical Feature</th>
                      <th className="text-center" style={{ width: "20%" }}>{currency === "USD" ? "$79 (Express)" : "₹5,999"}</th>
                      <th className="text-center" style={{ width: "20%" }}>{currency === "USD" ? "$149 (Suite)" : "₹11,999"}</th>
                      <th className="text-center" style={{ width: "20%" }}>{currency === "USD" ? "$349+ (Fleet)" : "₹27,999+"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {packageCapabilities.map((row, idx) => (
                      <tr key={idx}>
                        <td>{row.name}</td>
                        <td className="text-center">
                          {row.t1 === "—" ? <span className="text-muted"><i className="fa-solid fa-minus me-1"></i> Not Included</span> : row.t1}
                        </td>
                        <td className="text-center text-primary fw-bold">
                          {row.t2 === "—" ? <span className="text-muted fw-normal"><i className="fa-solid fa-minus me-1"></i> Not Included</span> : row.t2}
                        </td>
                        <td className="text-center text-success fw-bold">
                          {row.t3 === "—" ? <span className="text-muted fw-normal"><i className="fa-solid fa-minus me-1"></i> Not Included</span> : row.t3}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Feature Comparison Matrix: MOBILE VIEW (d-block d-md-none) */}
            <div className="d-block d-md-none">
              <div className="p-3 bg-light border rounded-3 mb-3 fw-bold text-dark text-center" style={{ fontSize: "0.92rem" }}>
                <i className="fa-solid fa-list-check text-primary me-2"></i> Capability & Deliverable Matrix
              </div>
              {packageCapabilities.map((row, idx) => (
                <div key={idx} className="deliv-mobile-card mb-3 p-3 shadow-sm border">
                  <div className="fw-bold text-dark mb-3 pb-2 border-bottom" style={{ fontSize: "0.98rem" }}>
                    {row.name}
                  </div>
                  <div className="d-flex flex-column gap-2">
                    {/* Express Tier */}
                    <div className="p-2 px-3 rounded bg-light border">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="badge bg-secondary-subtle text-secondary" style={{ fontSize: "0.7rem" }}>Express</span>
                        <span className="text-muted fw-bold" style={{ fontSize: "0.75rem" }}>{currency === "USD" ? "$79" : "₹5,999"}</span>
                      </div>
                      <div style={{ fontSize: "0.88rem" }}>
                        {row.t1 === "—" ? (
                          <span className="text-muted"><i className="fa-solid fa-minus text-secondary me-1"></i> Not Included</span>
                        ) : row.t1.includes("✓") ? (
                          <span className="text-success fw-bold">{row.t1}</span>
                        ) : (
                          <span className="text-dark fw-medium">{row.t1}</span>
                        )}
                      </div>
                    </div>

                    {/* Suite Tier (Featured) */}
                    <div className="p-2 px-3 rounded bg-primary-subtle border border-primary-subtle">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="badge bg-primary text-white" style={{ fontSize: "0.7rem" }}>Suite ★ Recommended</span>
                        <span className="text-primary fw-bold" style={{ fontSize: "0.75rem" }}>{currency === "USD" ? "$149" : "₹11,999"}</span>
                      </div>
                      <div style={{ fontSize: "0.88rem" }}>
                        {row.t2 === "—" ? (
                          <span className="text-muted"><i className="fa-solid fa-minus text-secondary me-1"></i> Not Included</span>
                        ) : (
                          <span className="text-primary fw-bold">{row.t2}</span>
                        )}
                      </div>
                    </div>

                    {/* Enterprise Tier */}
                    <div className="p-2 px-3 rounded bg-dark text-white border border-dark">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="badge bg-white text-dark" style={{ fontSize: "0.7rem" }}>Enterprise</span>
                        <span className="text-white-50 fw-bold" style={{ fontSize: "0.75rem" }}>{currency === "USD" ? "$349+" : "₹27,999+"}</span>
                      </div>
                      <div style={{ fontSize: "0.88rem" }}>
                        {row.t3 === "—" ? (
                          <span className="text-white-50"><i className="fa-solid fa-minus text-white-50 me-1"></i> Not Included</span>
                        ) : (
                          <span className="text-success fw-bold">{row.t3}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 7. TECHNICAL FREQUENTLY ASKED QUESTIONS (FAQ) ─── */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Deep Technical Answers
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Frequently Asked Questions
              </h2>
              <p className="text-muted">
                Authoritative guidance on DNS record configuration, key rotation, and mandate enforcement.
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="d-flex flex-column gap-3">
                  {faqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="border rounded-4 overflow-hidden bg-white shadow-sm transition-all"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-100 p-4 text-start bg-white border-0 d-flex justify-content-between align-items-center"
                          style={{ cursor: "pointer" }}
                        >
                          <span className="fw-bold text-dark pe-3" style={{ fontSize: "1.02rem" }}>
                            {faq.q}
                          </span>
                          <i
                            className={`fa-solid fa-chevron-down text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                            style={{
                              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform 0.25s ease",
                            }}
                          ></i>
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-muted border-top pt-3 bg-light-subtle" style={{ fontSize: "0.93rem", lineHeight: 1.75 }}>
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 8. FINAL TRUST CTA ─── */}
        <section
          className="bottom-cta-section py-5 text-white position-relative"
          style={{
            background: "linear-gradient(135deg, #0b0f19 0%, #1e1b4b 50%, #0e7490 100%)",
            overflow: "hidden",
          }}
        >
          <div className="container py-5 text-center position-relative" style={{ zIndex: 2 }}>
            <span className="badge bg-danger text-uppercase px-3 py-2 fw-bold mb-3 cta-badge">
              Don’t Wait For Your First Spoofing Incident
            </span>
            <h2 className="fw-bold mb-3 text-white cta-h2" style={{ fontSize: "2.8rem" }}>
              Secure Your Domain. Move Safely Toward p=reject.
            </h2>
            <p className="lead mx-auto mb-4" style={{ maxWidth: "700px", color: "#cbd5e1", fontSize: "1.05rem" }}>
              SPF authorizes. DKIM signs. DMARC aligns and enforces. ChittorTech audits the complete architecture connecting
              all three to ensure your business emails pass Google & Yahoo verification every single time.
            </p>

            <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="deliv-btn-wa"
              >
                <i className="fa-brands fa-whatsapp" style={{ fontSize: "1.3rem" }}></i>
                Emergency WhatsApp Support (+91 75974 51057)
              </a>
              <button
                className="deliv-btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#trialModal"
              >
                <i className="fa-solid fa-calendar-check"></i>
                Book DMARC Consultation
              </button>
            </div>

            <div className="text-slate-400 small" style={{ color: "#94a3b8" }}>
              <i className="fa-solid fa-lock me-1 text-cyan-400"></i> No sensitive passwords required · Screen-shared or delegated DNS setup · 100% Confidential
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
