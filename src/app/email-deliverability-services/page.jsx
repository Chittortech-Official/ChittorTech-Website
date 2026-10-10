"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function EmailDeliverabilityPage() {
  const [currency, setCurrency] = useState("USD"); // "USD" | "INR"
  const [auditDomain, setAuditDomain] = useState("");
  const [auditLoading, setAuditLoading] = useState(false);
  const [auditResult, setAuditResult] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const whatsappUrl =
    "https://wa.me/917597451057?text=Hi%20ChittorTech%2C%20my%20business%20emails%20are%20going%20to%20Spam.%20I%20need%20an%20urgent%20deliverability%20audit%20and%20fix%20for%20my%20domain.";

  const handleSimulateAudit = (e) => {
    e.preventDefault();
    if (!auditDomain.trim()) return;

    setAuditLoading(true);
    setAuditResult(null);

    setTimeout(() => {
      setAuditLoading(false);
      const clean = auditDomain.replace(/^(https?:\/\/)?(www\.)?/, "").split("/")[0].toLowerCase();
      setAuditResult({
        domain: clean,
        score: "4.5/10",
        status: "At Risk (Critical Deliverability Action Needed)",
        checks: [
          { name: "SPF Record", status: "Lookup Limit Warning (High Includes)", pass: false },
          { name: "DKIM 2048-bit Key", status: "Selector Missing or Unverified", pass: false },
          { name: "DMARC Policy", status: "p=none (No Google/Yahoo Enforcement)", pass: false },
          { name: "Reverse DNS (PTR)", status: "Forward-Confirmed Check Required", pass: true },
          { name: "Spamhaus / Blocklist", status: "Clean Public Listing", pass: true },
        ],
      });
    }, 1200);
  };

  const complianceList = [
    {
      req: "SPF (RFC 7208)",
      standard: "Authorize legitimate sending infrastructure",
      impact: "Triggers SPF PermError if lookups > 10; causes immediate Google rejection.",
      badge: "RFC 7208",
    },
    {
      req: "DKIM (RFC 6376)",
      standard: "Cryptographically sign outgoing messages with 2048-bit keys",
      impact: "Missing cryptographic signature triggers anti-spoofing flags in Outlook & Gmail.",
      badge: "RFC 6376",
    },
    {
      req: "DMARC (RFC 7489)",
      standard: "Publish a valid policy and satisfy strict domain alignment",
      impact: "Emails without DMARC alignment are automatically filtered to Spam or rejected (550).",
      badge: "RFC 7489",
    },
    {
      req: "Forward / Reverse DNS",
      standard: "Maintain valid forward and reverse DNS (PTR & HELO)",
      impact: "Servers without matching rDNS/PTR are flagged as untrusted open relays.",
      badge: "FCrDNS",
    },
    {
      req: "TLS Encryption",
      standard: "Encrypt transmission via modern TLS 1.2+",
      impact: "Unencrypted plaintext transmissions are heavily penalized by Yahoo & Gmail.",
      badge: "TLS 1.2+",
    },
    {
      req: "Spam Complaints",
      standard: "Stay below 0.3%; target strictly below 0.1%",
      impact: "Exceeding 0.3% spam rate leads to domain-wide throttling and permanent blacklist.",
      badge: "<0.1% Goal",
    },
    {
      req: "One-Click Unsubscribe",
      standard: "Support RFC 8058 one-click list-unsubscribe header",
      impact: "Marketing and bulk outreach without one-click unsubscribe is outright rejected.",
      badge: "RFC 8058",
    },
  ];

  const beforeAfterMetrics = [
    {
      metric: "Mail-Tester Score",
      before: "3.2 / 10",
      target: "10.0 / 10 Target",
      impact: "Clean MIME structure, zero SPF/DKIM penalties, valid headers.",
    },
    {
      metric: "Seed-Test Inbox Placement",
      before: "55.0%",
      target: "99.4% Target",
      impact: "Diverts messages from Junk/Spam into primary recipient inboxes.",
    },
    {
      metric: "SPF Evaluation",
      before: "PermError (>10 lookups)",
      target: "Strict Pass (-all)",
      impact: "Eliminates automated Google & Yahoo bounce rejections.",
    },
    {
      metric: "DKIM Authentication",
      before: "Fail (Unsigned / Mismatched)",
      target: "Pass (2048-bit Key)",
      impact: "Cryptographic tamper-proofing and sender verification.",
    },
    {
      metric: "DMARC Alignment",
      before: "Missing / p=none",
      target: "Enforced (p=quarantine / reject)",
      impact: "100% compliance with Google/Yahoo Feb 2024 mandates.",
    },
  ];

  const packageCapabilities = [
    { name: "Preliminary Domain & DNS Audit", t1: "✓ Yes", t2: "✓ Yes", t3: "✓ Yes" },
    { name: "SPF & DMARC DNS Review", t1: "✓ Yes", t2: "✓ Yes", t3: "✓ Yes" },
    { name: "Comprehensive 2048-bit DKIM Key Setup", t1: "—", t2: "✓ Yes", t3: "✓ Yes" },
    { name: "DMARC Aggregate Reporting (RUA/RUF)", t1: "—", t2: "✓ Yes", t3: "✓ Yes" },
    { name: "Google Postmaster & Yahoo Hub Verification", t1: "—", t2: "✓ Yes", t3: "✓ Yes" },
    { name: "Custom Branded Tracking Domain (SSL CNAME)", t1: "—", t2: "1 Domain", t3: "Fleet / Multi" },
    { name: "Multi-Domain Fleet Management", t1: "—", t2: "—", t3: "✓ Yes" },
    { name: "Dedicated IP Warmup & FCrDNS Mapping", t1: "—", t2: "—", t3: "✓ Yes" },
    { name: "Diagnostic Remediation Report", t1: "Basic Summary", t2: "Full Evidence Report", t3: "Enterprise Audit + SOP" },
    { name: "Implementation Support Period", t1: "7 Days", t2: "14 Days", t3: "30 Days" },
  ];

  const faqs = [
    {
      q: "Why did my business emails suddenly start going to Spam in 2025–2026?",
      a: "Google and Yahoo enacted stringent sender protections. If your sending domain lacks cryptographic DKIM signing, publishes an invalid SPF record (or exceeds the 10-lookup limit), or has no aligned DMARC policy, incoming mail servers treat your emails as suspicious or outright reject them with SMTP 550 codes. Maintaining a user complaint rate under 0.1% (never exceeding 0.3%) is now mathematically enforced.",
    },
    {
      q: "What is the SPF 10-lookup limit and how do you resolve SPF PermError?",
      a: "The RFC 7208 specification strictly caps the number of DNS-querying mechanisms (include, a, mx, ptr, redirect) at 10 during SPF evaluation. If your domain authorizes Google Workspace, Zendesk, Mailchimp, and Hubspot, nested includes frequently push you to 11+ queries, throwing an automatic 'SPF PermError'. ChittorTech audits every sending stream, eliminates redundant authorizations, segments subdomains, and applies controlled SPF flattening.",
    },
    {
      q: "Does ChittorTech need our email account passwords or private keys?",
      a: "No! Security is our top priority. We never ask for your email mailbox passwords or private cryptographic keys over WhatsApp or unsecured forms. We operate entirely via DNS records (TXT, CNAME, MX), admin delegating invitations in Google Workspace / M365, or guided screen-shares for private key generation.",
    },
    {
      q: "What is the difference between DMARC p=none, p=quarantine, and p=reject?",
      a: "DMARC policy 'p=none' is purely diagnostic monitoring; it allows unauthenticated spoofed mail through while sending aggregate XML reports. 'p=quarantine' instructs receiving servers (Gmail, Outlook) to divert failing emails into the Spam folder. 'p=reject' is the gold standard of domain immunity—any email claiming to come from your domain that fails cryptographic authentication is dropped outright before reaching the recipient.",
    },
    {
      q: "Can you fix cold outbound platforms like Smartlead, Instantly, and Lemlist?",
      a: "Yes. In fact, cold email infrastructure is one of our deepest specialties. We configure secondary domain fleets, custom branded tracking domains (SSL-secured CNAMEs), forward-confirmed reverse DNS, SPF/DKIM isolation, and gradual mailbox ramp protocols so outbound sales campaigns maintain high inbox placement.",
    },
    {
      q: "How fast can you fix our emergency email delivery problem?",
      a: "Our Emergency Spam Fix package operates on an agreed 24-hour technical turnaround once required DNS and account access are confirmed. Complete multi-phase authentication suites (with progressive DMARC staging and Postmaster setup) typically take 2 to 5 business days.",
    },
  ];

  return (
    <>
      <style>{`
        /* ChittorTech Email Deliverability Design System */
        .deliv-wrapper {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: #0f172a;
          background-color: #f8fafc;
          overflow-x: hidden !important;
          width: 100% !important;
          max-width: 100vw !important;
        }
        .deliv-hero {
          background: radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.18) 0%, transparent 50%),
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
          font-size: clamp(1.85rem, 4.5vw, 3.8rem);
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
          max-width: 680px;
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
          color: #ffffff !important;
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
          color: #ffffff !important;
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
          color: #ffffff !important;
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

        /* Pricing Architecture */
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

        /* Interactive Simulator */
        .audit-box {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
          border-radius: 20px;
          padding: 34px;
          color: #ffffff;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 40px -10px rgba(15, 23, 42, 0.35);
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
            padding: 24px 18px !important;
          }
          .audit-box {
            padding: 20px 16px !important;
            border-radius: 16px !important;
          }
          .audit-box h4 {
            font-size: 1.25rem !important;
          }
          .audit-input-stack {
            display: flex !important;
            flex-direction: column !important;
            gap: 10px !important;
          }
          .audit-input-stack input {
            border-radius: 10px !important;
            width: 100% !important;
            padding: 12px 14px !important;
          }
          .audit-input-stack button {
            border-radius: 10px !important;
            width: 100% !important;
            padding: 12px !important;
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
                  <i className="fa-solid fa-shield-halved"></i> Global Email Deliverability Specialists
                </div>
                <h1 className="deliv-h1">
                  Your Business Emails Are Going to Spam. <br />
                  <span>Let’s Fix the Infrastructure Behind It.</span>
                </h1>
                <p className="deliv-hero-p">
                  Stop losing qualified leads, client proposals, and revenue because your emails never reach the inbox.
                  ChittorTech diagnoses and repairs email authentication, domain reputation, and sending infrastructure for
                  global enterprises and fast-growing agencies.
                </p>

                {/* Stat badges */}
                <div className="row g-2 mb-4">
                  <div className="col-sm-6">
                    <div className="deliv-stat-pill">
                      <i className="fa-solid fa-circle-check"></i>
                      <span><strong>10/10 Target</strong> Mail-Tester Goal</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="deliv-stat-pill">
                      <i className="fa-solid fa-bolt"></i>
                      <span><strong>24-Hour</strong> Emergency Fix Option</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="deliv-stat-pill">
                      <i className="fa-solid fa-lock"></i>
                      <span><strong>100% Compliance</strong> Google & Yahoo Audit</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="deliv-stat-pill">
                      <i className="fa-solid fa-fingerprint"></i>
                      <span><strong>SPF, DKIM & DMARC</strong> Specialists</span>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="deliv-btn-wa"
                  >
                    <i className="fa-brands fa-whatsapp" style={{ fontSize: "1.25rem" }}></i>
                    Get My Emergency Spam Fix on WhatsApp
                  </a>
                  <button
                    className="deliv-btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#trialModal"
                  >
                    <i className="fa-solid fa-calendar-check"></i>
                    Book Consultation
                  </button>
                </div>

                <div className="text-slate-400" style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
                  <i className="fa-solid fa-earth-americas me-2 text-cyan-400"></i>
                  Supporting businesses across: <strong>USA · UK · UAE · Canada · Australia · India</strong>
                </div>
              </div>

              {/* Hero Right Visual (Live Diagnostic Mockup - Fully Mobile Responsive) */}
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
                        smtp_auth_inspector.log
                      </span>
                    </div>
                    <span className="badge bg-danger text-uppercase px-2 py-1 flex-shrink-0" style={{ fontSize: "0.68rem" }}>
                      Critical Fail
                    </span>
                  </div>

                  <div className="font-monospace" style={{ fontSize: "0.8rem", lineHeight: "1.7", color: "#e2e8f0", wordBreak: "break-word" }}>
                    <div className="text-danger mb-1">
                      <i className="fa-solid fa-triangle-exclamation me-1"></i>
                      550 5.7.26 This message does not pass authentication checks.
                    </div>
                    <div style={{ color: "#94a3b8" }}>
                      &gt; Checking SPF lookup depth: 14/10 <span className="text-warning">[SPF PermError]</span>
                    </div>
                    <div style={{ color: "#94a3b8" }}>
                      &gt; DKIM selector 'google': <span className="text-danger">[Signature Missing / Invalid]</span>
                    </div>
                    <div style={{ color: "#94a3b8" }}>
                      &gt; DMARC policy: <span className="text-warning">p=none (No Google/Yahoo enforcement)</span>
                    </div>
                    <div style={{ color: "#94a3b8" }}>
                      &gt; Spamhaus ZEN DBL check: <span className="text-success">[CLEAN]</span>
                    </div>
                    <div className="mt-3 p-3 rounded" style={{ background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.25)" }}>
                      <div className="d-flex justify-content-between align-items-center text-cyan-300 fw-bold flex-wrap gap-1">
                        <span>ChittorTech Recovery Plan</span>
                        <span className="badge bg-primary">Target: 10/10</span>
                      </div>
                      <small style={{ color: "#cbd5e1", fontSize: "0.76rem" }}>
                        Architecture flattening + 2048-bit DKIM rotation + p=reject progression in 24 hrs.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── HERO SUPPORTING COPY ─── */}
        <section className="py-5 bg-white border-bottom">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-9">
                <h3 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>
                  Your emails deserve more than a successful "Send" button.
                </h3>
                <p className="text-muted" style={{ fontSize: "1.02rem", lineHeight: 1.8 }}>
                  An email can leave your server successfully, pass basic DNS verification, and still land in Spam. A technically
                  valid DNS configuration is only one piece of email deliverability. ChittorTech investigates the entire delivery chain:
                  sending domain, DNS architecture, SMTP authentication, mailbox-provider reputation signals, and spam filters.
                  Whether your Google Workspace emails are rejected, your Microsoft 365 messages land in Junk, or your Smartlead outbound
                  is declining—our approach starts with evidence rather than guesswork.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. THE CRISIS (2025-2026 MANDATE) ─── */}
        <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Active Market Threat
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                The Email Deliverability Crisis Is an Infrastructure Problem
              </h2>
              <p className="text-muted">
                Email authentication is no longer an optional configuration for serious businesses. Google and Yahoo introduced strict
                sender requirements in February 2024, followed by aggressive enforcement with temporary and permanent SMTP rejections.
              </p>
            </div>

            {/* Compliance Table: DESKTOP VIEW (d-none d-md-block) */}
            <div className="d-none d-md-block deliv-table-wrap mb-5">
              <div className="p-3 bg-light border-bottom fw-bold text-dark d-flex align-items-center justify-content-between">
                <span>Google & Yahoo Mandatory Sender Compliance Checklist</span>
                <span className="badge bg-primary">RFC & Provider Standards</span>
              </div>
              <div className="table-responsive">
                <table className="deliv-table">
                  <thead>
                    <tr>
                      <th style={{ width: "22%" }}>Requirement</th>
                      <th style={{ width: "35%" }}>Technical Standard</th>
                      <th style={{ width: "43%" }}>Business Impact If Misconfigured</th>
                    </tr>
                  </thead>
                  <tbody>
                    {complianceList.map((item, idx) => (
                      <tr key={idx}>
                        <td><strong>{item.req}</strong></td>
                        <td>{item.standard}</td>
                        <td>{item.impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Compliance Table: MOBILE VIEW (d-block d-md-none) - CLEAN STACKED CARDS */}
            <div className="d-block d-md-none mb-5">
              <div className="p-3 bg-light border rounded-3 mb-3 fw-bold text-dark d-flex align-items-center justify-content-between">
                <span style={{ fontSize: "0.9rem" }}>Google & Yahoo Compliance Checklist</span>
                <span className="badge bg-primary" style={{ fontSize: "0.68rem" }}>Mandatory</span>
              </div>
              {complianceList.map((item, idx) => (
                <div key={idx} className="deliv-mobile-card">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fw-bold text-dark" style={{ fontSize: "0.95rem" }}>
                      {item.req}
                    </span>
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle" style={{ fontSize: "0.68rem" }}>
                      {item.badge}
                    </span>
                  </div>
                  <div className="small text-muted mb-2">
                    <strong className="text-secondary">Standard:</strong> {item.standard}
                  </div>
                  <div className="small p-2 rounded bg-danger-subtle text-danger border border-danger-subtle" style={{ fontSize: "0.82rem" }}>
                    <strong>Impact:</strong> {item.impact}
                  </div>
                </div>
              ))}
            </div>

            {/* Error Code Cards */}
            <div className="mb-4">
              <h4 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>
                Common SMTP Delivery Failures Indicating Broken Infrastructure
              </h4>
              <p className="text-muted mb-4">
                If your sales team or email tools are receiving these delivery non-delivery reports (NDRs), your domain requires
                immediate technical remediation:
              </p>
            </div>

            <div className="row g-4 mb-5">
              <div className="col-md-4">
                <div className="deliv-card">
                  <span className="error-tag error-tag-red">550 5.7.26</span>
                  <h5 className="fw-bold">Authentication Failure</h5>
                  <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                    Gmail and Yahoo authentication-related rejection. Indicates SPF/DKIM failure or missing DMARC alignment.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="deliv-card">
                  <span className="error-tag error-tag-red">554 5.7.1</span>
                  <h5 className="fw-bold">Relay Access Denied</h5>
                  <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                    SMTP relay authorization, connector, or server misconfiguration. The recipient server refused to forward mail.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="deliv-card">
                  <span className="error-tag error-tag-orange">421 / 4.7.x</span>
                  <h5 className="fw-bold">Temporary Deferral / Throttling</h5>
                  <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                    Mailbox provider is actively throttling your IP/domain due to sudden volume spikes or poor sender reputation.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="deliv-card">
                  <span className="error-tag error-tag-red">550 5.7.1</span>
                  <h5 className="fw-bold">Policy Rejection / Blacklist</h5>
                  <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                    Sender domain or IP is listed on Spamhaus, Barracuda, or flagged by Microsoft Defender SmartScreen.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="deliv-card">
                  <span className="error-tag error-tag-orange">SPF PermError</span>
                  <h5 className="fw-bold">Evaluation Lookup Overflow</h5>
                  <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                    Your SPF record contains &gt;10 DNS lookups. RFC 7208 marks the evaluation as permanently invalid.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="deliv-card text-white" style={{ background: "linear-gradient(135deg, #1e1b4b, #2563eb)" }}>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <i className="fa-solid fa-shield-virus" style={{ fontSize: "1.5rem" }}></i>
                    <h5 className="fw-bold mb-0 text-white">ChittorTech Solution</h5>
                  </div>
                  <p style={{ fontSize: "0.88rem", color: "#e2e8f0" }}>
                    We do not guess. We trace the exact SMTP response logs, reconstruct your DNS records, and restore clean delivery.
                  </p>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-sm fw-bold">
                    Fix My Errors Now
                  </a>
                </div>
              </div>
            </div>

            {/* Why Adding DNS Records Isn't Enough */}
            <div className="p-4 rounded-4 bg-white border">
              <h4 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>
                Why Just Adding 3 DNS Records Isn't Enough
              </h4>
              <p className="text-muted">
                Most agencies copy-paste basic SPF/DKIM strings from Google and assume the job is done. In reality, modern deliverability
                fails due to hidden architectural flaws:
              </p>
              <div className="row g-3">
                <div className="col-md-6">
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.92rem", color: "#475569" }}>
                    <li className="mb-2"><i className="fa-solid fa-xmark text-danger me-2"></i> <strong>Return-Path Misalignment:</strong> SPF passes on a third-party bounce domain but fails visible From alignment.</li>
                    <li className="mb-2"><i className="fa-solid fa-xmark text-danger me-2"></i> <strong>DKIM Selector Conflicts:</strong> Public key in DNS doesn't match the actual signing server key.</li>
                    <li className="mb-2"><i className="fa-solid fa-xmark text-danger me-2"></i> <strong>Premature DMARC p=reject:</strong> Rejecting legitimate automated invoices or CRM notifications.</li>
                    <li className="mb-2"><i className="fa-solid fa-xmark text-danger me-2"></i> <strong>Shared Tracking Domains:</strong> Using provider-shared tracking links that other spammers have burned.</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.92rem", color: "#475569" }}>
                    <li className="mb-2"><i className="fa-solid fa-xmark text-danger me-2"></i> <strong>Missing PTR / rDNS:</strong> Self-hosted or SMTP relays failing forward-confirmed reverse lookup.</li>
                    <li className="mb-2"><i className="fa-solid fa-xmark text-danger me-2"></i> <strong>Domain Reputation Drag:</strong> Historic spam complaints pulling down new business mailboxes.</li>
                    <li className="mb-2"><i className="fa-solid fa-xmark text-danger me-2"></i> <strong>Sending-Stream Contamination:</strong> Marketing newsletters sharing the exact same IP/domain as CEO proposals.</li>
                    <li className="mb-2"><i className="fa-solid fa-xmark text-danger me-2"></i> <strong>Mail-Tester &lt;10/10:</strong> Hidden syntax flaws causing silent spam folder placement.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. WHAT WE FIX (8 TECHNICAL WORKSTREAMS) ─── */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Complete Technical Scope
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                What We Fix: End-to-End Infrastructure Remediation
              </h2>
              <p className="text-muted">
                Our deliverability service covers eight interconnected technical workstreams to build an impenetrable sender reputation.
              </p>
            </div>

            <div className="row g-4">
              {/* Workstream 1 */}
              <div className="col-lg-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-network-wired"></i>
                  </div>
                  <h4 className="fw-bold" style={{ color: "#1e1b4b" }}>1. SPF Architecture, Optimization & Flattening</h4>
                  <p className="text-muted" style={{ fontSize: "0.92rem" }}>
                    We audit your existing SPF records (RFC 7208) and map every authorized sending service (Google, M365, Mailgun, Zendesk, etc.).
                  </p>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.88rem", color: "#475569" }}>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> Eliminate duplicate and conflicting TXT records.</li>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> Resolve SPF PermError (&gt;10 lookup limit) using subdomain delegation and intelligent flattening.</li>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> Evaluate separate MAIL FROM subdomains and custom bounce domains.</li>
                    <li><i className="fa-solid fa-check text-success me-2"></i> Transition from permissive ~all to strictly enforced -all policies safely.</li>
                  </ul>
                </div>
              </div>

              {/* Workstream 2 */}
              <div className="col-lg-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-key"></i>
                  </div>
                  <h4 className="fw-bold" style={{ color: "#1e1b4b" }}>2. DKIM Authentication & 2048-Bit Key Management</h4>
                  <p className="text-muted" style={{ fontSize: "0.92rem" }}>
                    A DKIM DNS record is useless unless outgoing messages are actually signed and the cryptographic signatures verify 100%.
                  </p>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.88rem", color: "#475569" }}>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> Configure provider-supported 2048-bit RSA DKIM keys.</li>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> Validate selector alignment with the visible From domain.</li>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> Inspect DKIM-Signature headers and canonicalization rules.</li>
                    <li><i className="fa-solid fa-check text-success me-2"></i> <em>Security protocol:</em> Private keys always remain inside authorized infrastructure.</li>
                  </ul>
                </div>
              </div>

              {/* Workstream 3 */}
              <div className="col-lg-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <h4 className="fw-bold" style={{ color: "#1e1b4b" }}>3. DMARC Progressive Implementation & Alignment</h4>
                  <p className="text-muted" style={{ fontSize: "0.92rem" }}>
                    We follow a strict 3-phase deployment to protect your domain from spoofing without interrupting legitimate business email:
                  </p>
                  <div className="d-flex flex-column gap-2 mt-2" style={{ fontSize: "0.88rem" }}>
                    <div className="p-2 rounded bg-light border">
                      <strong>Phase 1: Monitoring (p=none)</strong> — Publish record, configure aggregate RUA/RUF reports, audit legitimate sources.
                    </div>
                    <div className="p-2 rounded bg-light border">
                      <strong>Phase 2: Partial Enforcement (p=quarantine)</strong> — Divert unauthorized mail to spam as confidence increases.
                    </div>
                    <div className="p-2 rounded bg-light border">
                      <strong>Phase 3: Full Rejection (p=reject)</strong> — Full spoofing immunity; unauthorized senders are dropped permanently.
                    </div>
                  </div>
                </div>
              </div>

              {/* Workstream 4 */}
              <div className="col-lg-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <h4 className="fw-bold" style={{ color: "#1e1b4b" }}>4. Google Postmaster Tools & Yahoo Sender Hub</h4>
                  <p className="text-muted" style={{ fontSize: "0.92rem" }}>
                    Direct telemetry into how Google and Yahoo view your sending domain.
                  </p>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.88rem", color: "#475569" }}>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> Google Postmaster DNS TXT domain verification.</li>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> Real-time tracking of User-Reported Spam Rate (must stay &lt;0.1%).</li>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> IP and Domain Reputation grading (Bad / Low / Medium / High).</li>
                    <li><i className="fa-solid fa-check text-success me-2"></i> Yahoo Sender Hub enrollment & Complaint Feedback Loop (CFL) setup.</li>
                  </ul>
                </div>
              </div>

              {/* Workstream 5 */}
              <div className="col-lg-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-link"></i>
                  </div>
                  <h4 className="fw-bold" style={{ color: "#1e1b4b" }}>5. Custom Branded Tracking Domains (CNAME)</h4>
                  <p className="text-muted" style={{ fontSize: "0.92rem" }}>
                    Shared tracking links in tools like Smartlead or Instantly ruin deliverability when other users spam.
                  </p>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.88rem", color: "#475569" }}>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> Configure branded tracking (e.g. <code>click.yourbrand.com</code>).</li>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> Automatic SSL/TLS certificate provisioning on tracking CNAME.</li>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> Eliminate provider shared-domain reputation contamination.</li>
                    <li><i className="fa-solid fa-check text-success me-2"></i> Open & click tracking audit to maximize inbox delivery.</li>
                  </ul>
                </div>
              </div>

              {/* Workstream 6 */}
              <div className="col-lg-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-server"></i>
                  </div>
                  <h4 className="fw-bold" style={{ color: "#1e1b4b" }}>6. Reverse DNS (PTR), SMTP & HELO/EHLO Alignment</h4>
                  <p className="text-muted" style={{ fontSize: "0.92rem" }}>
                    Essential for self-managed VPS, dedicated IP pools, and specialized mail servers.
                  </p>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.88rem", color: "#475569" }}>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> Forward-Confirmed Reverse DNS (FCrDNS) mapping.</li>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> PTR record to A/AAAA hostname correspondence.</li>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> HELO/EHLO greeting string matching valid FQDN.</li>
                    <li><i className="fa-solid fa-check text-success me-2"></i> TLS 1.3 cryptographic handshake validation.</li>
                  </ul>
                </div>
              </div>

              {/* Workstream 7 */}
              <div className="col-lg-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-ban"></i>
                  </div>
                  <h4 className="fw-bold" style={{ color: "#1e1b4b" }}>7. Reputation Recovery & Blocklist Delisting</h4>
                  <p className="text-muted" style={{ fontSize: "0.92rem" }}>
                    If your domain or IP is listed on Spamhaus, Barracuda, or SpamCop, we identify the root cause and handle remediation.
                  </p>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.88rem", color: "#475569" }}>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> Audit listings across 80+ public DNSBLs (Spamhaus ZEN, DBL, Barracuda).</li>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> Identify compromised mailboxes or malicious sending scripts.</li>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> Prepare and submit evidence-backed delisting requests to operators.</li>
                    <li><i className="fa-solid fa-check text-success me-2"></i> Rebuild domain reputation through controlled sending volume ramps.</li>
                  </ul>
                </div>
              </div>

              {/* Workstream 8 */}
              <div className="col-lg-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-fire-burner"></i>
                  </div>
                  <h4 className="fw-bold" style={{ color: "#1e1b4b" }}>8. Mailbox Warming & Sending Recovery Protocols</h4>
                  <p className="text-muted" style={{ fontSize: "0.92rem" }}>
                    Technical fixes must be paired with disciplined sending behavior to restore provider trust.
                  </p>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.88rem", color: "#475569" }}>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> Documented volume ramp schedules based on observed provider feedback.</li>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> Hard bounce suppression and list hygiene procedures.</li>
                    <li className="mb-1"><i className="fa-solid fa-check text-success me-2"></i> Zero fake bot activity: we advocate legitimate permission-based delivery.</li>
                    <li><i className="fa-solid fa-check text-success me-2"></i> Detailed technical handover log and ongoing monitoring guidance.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. PLATFORMS & ECOSYSTEMS WE SUPPORT ─── */}
        <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Multi-Stack Compatibility
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                One Deliverability Partner for Your Entire Email Stack
              </h2>
              <p className="text-muted">
                Different email systems have unique routing rules, authentication mechanisms, and connector settings.
                Our remediation is platform-specific.
              </p>
            </div>

            <div className="row g-4 mb-4">
              {/* Google Workspace */}
              <div className="col-lg-4 col-md-6">
                <div className="deliv-card">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <i className="fa-brands fa-google text-danger" style={{ fontSize: "2rem" }}></i>
                    <div>
                      <h5 className="fw-bold mb-0">Google Workspace</h5>
                      <small className="text-muted">Gmail for Business</small>
                    </div>
                  </div>
                  <p className="text-muted" style={{ fontSize: "0.88rem" }}>
                    Configure Google Admin DKIM 2048-bit keys, custom SPF include alignment, DMARC records, Postmaster Tools verification, and investigate SMTP 550 rejection codes.
                  </p>
                </div>
              </div>

              {/* Microsoft 365 */}
              <div className="col-lg-4 col-md-6">
                <div className="deliv-card">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <i className="fa-brands fa-microsoft text-primary" style={{ fontSize: "2rem" }}></i>
                    <div>
                      <h5 className="fw-bold mb-0">Microsoft 365</h5>
                      <small className="text-muted">Exchange Online / Outlook</small>
                    </div>
                  </div>
                  <p className="text-muted" style={{ fontSize: "0.88rem" }}>
                    Exchange Online SPF & DKIM CNAME records, outbound connector diagnostics, Microsoft Defender Anti-Spam outbound policy tuning, and Outlook junk folder recovery.
                  </p>
                </div>
              </div>

              {/* Zoho Mail */}
              <div className="col-lg-4 col-md-6">
                <div className="deliv-card">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <i className="fa-solid fa-envelope-open-text text-warning" style={{ fontSize: "2rem" }}></i>
                    <div>
                      <h5 className="fw-bold mb-0">Zoho Workplace</h5>
                      <small className="text-muted">Zoho Mail & CRM</small>
                    </div>
                  </div>
                  <p className="text-muted" style={{ fontSize: "0.88rem" }}>
                    Zoho domain verification, custom DKIM selector setup, SPF lookup limit management, DMARC reporting, and seamless routing diagnostics for sales teams.
                  </p>
                </div>
              </div>

              {/* Cold Outbound Platforms */}
              <div className="col-lg-4 col-md-6">
                <div className="deliv-card">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <i className="fa-solid fa-bullseye text-info" style={{ fontSize: "2rem" }}></i>
                    <div>
                      <h5 className="fw-bold mb-0">Cold Outbound Stack</h5>
                      <small className="text-muted">Smartlead · Instantly · Apollo</small>
                    </div>
                  </div>
                  <p className="text-muted" style={{ fontSize: "0.88rem" }}>
                    Multi-domain architecture, custom branded tracking domains (CNAME), mailbox connection authentication, ramp planning, and agency client onboarding templates.
                  </p>
                </div>
              </div>

              {/* Transactional Email */}
              <div className="col-lg-4 col-md-6">
                <div className="deliv-card">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <i className="fa-brands fa-aws text-warning" style={{ fontSize: "2rem" }}></i>
                    <div>
                      <h5 className="fw-bold mb-0">Transactional SMTP</h5>
                      <small className="text-muted">Amazon SES · SendGrid · Postmark</small>
                    </div>
                  </div>
                  <p className="text-muted" style={{ fontSize: "0.88rem" }}>
                    Verified identities, Easy DKIM, custom MAIL FROM subdomains, dedicated IP warming, bounce/complaint SNS handling, and transactional stream isolation.
                  </p>
                </div>
              </div>

              {/* E-Commerce Marketing */}
              <div className="col-lg-4 col-md-6">
                <div className="deliv-card">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <i className="fa-solid fa-bag-shopping text-success" style={{ fontSize: "2rem" }}></i>
                    <div>
                      <h5 className="fw-bold mb-0">E-Commerce Marketing</h5>
                      <small className="text-muted">Klaviyo · ActiveCampaign · Brevo</small>
                    </div>
                  </div>
                  <p className="text-muted" style={{ fontSize: "0.88rem" }}>
                    Branded dedicated sending domains, Shopify/Klaviyo authentication alignment, list hygiene suppression, and RFC 8058 one-click unsubscribe compliance.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <small className="text-muted">
                *Platform names are for compatibility identification. ChittorTech is an independent technical engineering firm.
              </small>
            </div>
          </div>
        </section>

        {/* ─── 5. LIVE AUDIT & DIAGNOSTIC FRAMEWORK ─── */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container py-4">
            <div className="row align-items-center g-4 mb-5">
              <div className="col-lg-6">
                <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                  Evidence-Based Methodology
                </span>
                <h2 className="fw-bold mt-2 mb-3" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                  Discover What Is Wrong With Your Email Infrastructure Before Paying for a Fix
                </h2>
                <p className="text-muted" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                  A domain's public DNS records reveal crucial configuration errors without requiring access to your private inboxes.
                  Our preliminary audit scans public MX, SPF, DKIM, and DMARC parameters in 60 seconds to detect lookup overflows,
                  alignment mismatches, and compliance vulnerabilities.
                </p>

                <div className="d-flex flex-column gap-3 mt-4">
                  <div className="d-flex align-items-start gap-3">
                    <div className="p-2 rounded bg-primary text-white"><i className="fa-solid fa-magnifying-glass"></i></div>
                    <div>
                      <strong>Domain & MX Discovery:</strong> Identify active mail hosts and routing architecture.
                    </div>
                  </div>
                  <div className="d-flex align-items-start gap-3">
                    <div className="p-2 rounded bg-primary text-white"><i className="fa-solid fa-code"></i></div>
                    <div>
                      <strong>SPF & Lookup Depth Audit:</strong> Detect syntax errors, multiple TXT records, and lookup limit risks.
                    </div>
                  </div>
                  <div className="d-flex align-items-start gap-3">
                    <div className="p-2 rounded bg-primary text-white"><i className="fa-solid fa-shield"></i></div>
                    <div>
                      <strong>DMARC & DKIM Alignment:</strong> Verify policy enforcement status (none vs quarantine vs reject).
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive 60-Second Audit Simulator (With Disclaimer) */}
              <div className="col-lg-6">
                <div className="audit-box">
                  <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                    <h4 className="fw-bold text-white mb-0">Free 60-Second Email Audit</h4>
                    <span className="badge bg-info text-dark fw-bold">Instant Preview</span>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "#cbd5e1" }}>
                    Enter your sending domain (e.g. <code>yourcompany.com</code>) to preview public DNS authentication health:
                  </p>

                  <form onSubmit={handleSimulateAudit} className="mb-3">
                    <div className="audit-input-stack input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="yourcompany.com"
                        value={auditDomain}
                        onChange={(e) => setAuditDomain(e.target.value)}
                        style={{ padding: "12px 16px", border: "none" }}
                      />
                      <button
                        type="submit"
                        className="btn btn-primary fw-bold px-4"
                        disabled={auditLoading}
                      >
                        {auditLoading ? (
                          <>
                            <i className="fa-solid fa-spinner fa-spin me-2"></i> Scanning...
                          </>
                        ) : (
                          <>
                            <i className="fa-solid fa-bolt me-2"></i> Scan DNS
                          </>
                        )}
                      </button>
                    </div>
                  </form>

                  {/* Audit Results Simulation */}
                  {auditResult && (
                    <div className="p-3 rounded-3 mt-3" style={{ background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                      <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-1">
                        <span className="font-monospace text-cyan-300 fw-bold">{auditResult.domain}</span>
                        <span className="badge bg-danger">{auditResult.score}</span>
                      </div>
                      <div className="small text-warning mb-3">
                        <i className="fa-solid fa-triangle-exclamation me-1"></i> {auditResult.status}
                      </div>
                      <div className="d-flex flex-column gap-1">
                        {auditResult.checks.map((chk, idx) => (
                          <div key={idx} className="d-flex justify-content-between align-items-center font-monospace flex-wrap gap-1" style={{ fontSize: "0.78rem" }}>
                            <span style={{ color: "#cbd5e1" }}>{chk.name}:</span>
                            <span className={chk.pass ? "text-success" : "text-danger"}>
                              {chk.pass ? "✓ PASS" : "✕ " + chk.status}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-top border-slate-700 text-center">
                        <a
                          href={`https://wa.me/917597451057?text=Hi%20ChittorTech%2C%20I%20scanned%20${encodeURIComponent(auditResult.domain)}%20on%20your%20website%20and%20got%20a%20warning.%20Can%20you%20fix%20it%3F`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-success btn-sm w-100 fw-bold py-2"
                        >
                          <i className="fa-brands fa-whatsapp me-2"></i> Fix This Domain With ChittorTech
                        </a>
                      </div>
                      <div className="text-center mt-2 pt-2 border-top border-slate-700" style={{ fontSize: "0.74rem", color: "#94a3b8" }}>
                        * For approximation & diagnostic preview only. Final verification is conducted via live SMTP handshake & Mail-Tester diagnostics.
                      </div>
                    </div>
                  )}

                  {!auditResult && !auditLoading && (
                    <div className="text-center py-2" style={{ color: "#94a3b8", fontSize: "0.8rem" }}>
                      <i className="fa-solid fa-shield-halved me-1 text-cyan-400"></i> No passwords or mailbox access needed · For approximation & diagnostic preview only.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Testing Tools & Framework */}
            <div className="row g-3 mb-5">
              <div className="col-md-4">
                <div className="p-3 rounded-3 bg-light border text-center">
                  <h6 className="fw-bold mb-1">Mail-Tester Standard</h6>
                  <p className="small text-muted mb-0">Target: 10/10 score on representative outgoing test emails.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 rounded-3 bg-light border text-center">
                  <h6 className="fw-bold mb-1">GlockApps Seed Testing</h6>
                  <p className="small text-muted mb-0">Controlled inbox placement testing across Gmail, Outlook & Yahoo.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 rounded-3 bg-light border text-center">
                  <h6 className="fw-bold mb-1">Google Postmaster & Spamhaus</h6>
                  <p className="small text-muted mb-0">Reputation metrics, spam-rate tracking, and blocklist delisting.</p>
                </div>
              </div>
            </div>

            {/* Before-and-After Deliverability Scenario: DESKTOP VIEW (d-none d-md-block) */}
            <div className="d-none d-md-block">
              <h4 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>
                Illustrative Deliverability Recovery Scenario
              </h4>
              <div className="deliv-table-wrap">
                <table className="deliv-table">
                  <thead>
                    <tr>
                      <th style={{ width: "25%" }}>Deliverability Metric</th>
                      <th style={{ width: "20%" }}>Before Remediation (Client Baseline)</th>
                      <th style={{ width: "22%" }}>Target Post-Remediation (ChittorTech Standard)</th>
                      <th style={{ width: "33%" }}>Technical Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {beforeAfterMetrics.map((m, idx) => (
                      <tr key={idx}>
                        <td><strong>{m.metric}</strong></td>
                        <td><span className="badge bg-danger">{m.before}</span></td>
                        <td><span className="badge bg-success">{m.target}</span></td>
                        <td>{m.impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Before-and-After Deliverability Scenario: MOBILE VIEW (d-block d-md-none) */}
            <div className="d-block d-md-none">
              <h4 className="fw-bold mb-3" style={{ color: "#1e1b4b", fontSize: "1.3rem" }}>
                Illustrative Deliverability Recovery
              </h4>
              {beforeAfterMetrics.map((m, idx) => (
                <div key={idx} className="deliv-mobile-card">
                  <div className="fw-bold text-dark mb-2" style={{ fontSize: "0.95rem" }}>
                    {m.metric}
                  </div>
                  <div className="p-2 rounded bg-light mb-2">
                    <div className="d-flex align-items-center justify-content-between mb-2 flex-wrap gap-1">
                      <span className="text-muted small fw-medium">Before Remediation:</span>
                      <span className="badge bg-danger text-wrap text-end" style={{ fontSize: "0.78rem" }}>
                        {m.before}
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 border-top pt-2">
                      <span className="text-muted small fw-medium">ChittorTech Target:</span>
                      <span className="badge bg-success text-wrap text-end" style={{ fontSize: "0.78rem" }}>
                        {m.target}
                      </span>
                    </div>
                  </div>
                  <div className="small text-muted" style={{ fontSize: "0.82rem", lineHeight: 1.5 }}>
                    <strong className="text-secondary">Impact:</strong> {m.impact}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 text-muted" style={{ fontSize: "0.8rem" }}>
              *Illustrative scenario based on representative testing targets. External mailbox outcomes depend on sending content, list quality, and provider discretion.
            </div>
          </div>
        </section>

        {/* ─── 6. TRANSPARENT GLOBAL PRICING TIERS (REFINED DESKTOP & MOBILE UX) ─── */}
        <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Predictable Fixed Pricing
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Professional Email Deliverability Services. Transparent Rates.
              </h2>
              <p className="text-muted">
                No hidden remediation charges or confusing scopes. Choose the tier that matches your domain infrastructure.
              </p>

              {/* Modern Segmented Currency Switch */}
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
                    ? "Fixed flat-rate pricing for US, UK, UAE, Canada & Global clients"
                    : "Transparent domestic pricing with Indian business invoicing"}
                </div>
              </div>
            </div>

            {/* Clean, Balanced, Industry-Standard Pricing Cards */}
            <div className="row g-4 align-items-stretch mb-5">
              {/* Tier 1: Emergency */}
              <div className="col-lg-4">
                <div className="price-card">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 className="fw-bold mb-0 text-dark" style={{ fontSize: "1.25rem" }}>Emergency Fix</h4>
                    <span className="badge bg-light text-secondary border px-2 py-1" style={{ fontSize: "0.72rem" }}>
                      Single Domain
                    </span>
                  </div>
                  <p className="text-muted small mb-3">
                    For a business experiencing an urgent, identifiable email authentication failure.
                  </p>

                  <div className="p-3 rounded-3 bg-light mb-3 border">
                    <div className="d-flex align-items-baseline gap-2">
                      <span style={{ fontSize: "2.2rem", fontWeight: 900, color: "#0f172a", lineHeight: 1 }}>
                        {currency === "USD" ? "$99" : "₹7,999"}
                      </span>
                      <span className="text-muted small">/ one-time</span>
                    </div>
                    <div className="small fw-semibold text-success mt-1">
                      <i className="fa-solid fa-bolt me-1"></i> Target: 24-Hour Turnaround
                    </div>
                  </div>

                  <div className="flex-grow-1 mb-4">
                    <div className="fw-bold small text-uppercase text-secondary mb-2" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                      What's Included:
                    </div>
                    <ul className="list-unstyled mb-0" style={{ fontSize: "0.85rem", color: "#334155" }}>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> 1 Sending-domain assessment</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> SPF & DMARC DNS audit</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> Applicable DKIM verification</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> Remediation of 1 core authentication failure</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> DNS propagation & verification test</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> Representative test-message check</li>
                      <li><i className="fa-solid fa-circle-check text-primary me-2"></i> 7-Day implementation warranty</li>
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/917597451057?text=Hi%20ChittorTech%2C%20I%20want%20to%20order%20the%20Emergency%20Spam%20Fix%20package%20(${currency === "USD" ? "$99" : "₹7,999"}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary w-100 fw-bold py-2 rounded-3 mt-auto"
                  >
                    Request Emergency Fix
                  </a>
                </div>
              </div>

              {/* Tier 2: Complete Suite (Featured) */}
              <div className="col-lg-4">
                <div className="price-card featured">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge" style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)", color: "#fff", fontSize: "0.72rem", padding: "5px 12px", borderRadius: "9999px" }}>
                      ★ Most Popular & Recommended
                    </span>
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-2 py-1" style={{ fontSize: "0.72rem" }}>
                      Single Domain
                    </span>
                  </div>
                  <h4 className="fw-bold mb-2 text-primary" style={{ fontSize: "1.3rem" }}>
                    Complete Deliverability Suite
                  </h4>
                  <p className="text-muted small mb-3">
                    Full authentication, SPF flattening, and ongoing domain reputation setup.
                  </p>

                  <div className="p-3 rounded-3 bg-primary-subtle border border-primary-subtle mb-3">
                    <div className="d-flex align-items-baseline gap-1">
                      <span style={{ fontSize: "2rem", fontWeight: 900, color: "#1d4ed8", lineHeight: 1 }}>
                        {currency === "USD" ? "$199" : "₹14,999"}
                      </span>
                      <span className="text-muted small fw-medium">/ domain</span>
                    </div>
                    <div className="small fw-semibold text-primary mt-1">
                      <i className="fa-solid fa-calendar-check me-1"></i> Target: 2–5 Business Days Multi-Phase
                    </div>
                  </div>

                  <div className="flex-grow-1 mb-4">
                    <div className="fw-bold small text-uppercase text-primary mb-2" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                      Everything in Emergency, Plus:
                    </div>
                    <ul className="list-unstyled mb-0" style={{ fontSize: "0.85rem", color: "#334155" }}>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> Comprehensive SPF architecture & flattening</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> Provider-supported 2048-bit DKIM key setup</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> DMARC policy deployment + reporting (RUA)</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> Google Postmaster Tools & Yahoo Hub setup</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> 1 Custom branded tracking domain (SSL CNAME)</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> Mail-Tester 10/10 target evaluation</li>
                      <li><i className="fa-solid fa-circle-check text-success me-2"></i> 14-Day configuration support & monitoring</li>
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/917597451057?text=Hi%20ChittorTech%2C%20I%20want%20to%20order%20the%20Complete%20Deliverability%20Suite%20(${currency === "USD" ? "$199" : "₹14,999"}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-100 fw-bold py-2 rounded-3 mt-auto shadow-sm"
                  >
                    Get Complete Suite Setup
                  </a>
                </div>
              </div>

              {/* Tier 3: Enterprise & Fleet */}
              <div className="col-lg-4">
                <div className="price-card">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-dark text-white px-2 py-1" style={{ fontSize: "0.72rem" }}>
                      Tier 3 Enterprise
                    </span>
                    <span className="badge bg-dark text-white px-2 py-1" style={{ fontSize: "0.72rem" }}>
                      Multi-Domain
                    </span>
                  </div>
                  <h4 className="fw-bold mb-2 text-dark" style={{ fontSize: "1.3rem" }}>
                    Agency Outbound Fleet
                  </h4>
                  <p className="text-muted small mb-3">
                    For cold outbound agencies (Smartlead/Instantly) and multi-domain fleets.
                  </p>

                  <div className="p-3 rounded-3 bg-light mb-3 border">
                    <div className="d-flex align-items-baseline gap-1">
                      <span style={{ fontSize: "2rem", fontWeight: 900, color: "#0f172a", lineHeight: 1 }}>
                        {currency === "USD" ? "$499+" : "₹39,999+"}
                      </span>
                      <span className="text-muted small fw-medium">/ multi-domain</span>
                    </div>
                    <div className="small fw-semibold text-info mt-1">
                      <i className="fa-solid fa-layer-group me-1"></i> Tailored Fleet & Domain Ramp
                    </div>
                  </div>

                  <div className="flex-grow-1 mb-4">
                    <div className="fw-bold small text-uppercase text-secondary mb-2" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                      Enterprise Scope:
                    </div>
                    <ul className="list-unstyled mb-0" style={{ fontSize: "0.85rem", color: "#334155" }}>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> Multi-domain email infrastructure audit</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> Sending-stream & subdomain isolation</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> Bulk SPF/DKIM/DMARC remediation across domains</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> Dedicated IP ramp & warmup protocol</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> Custom tracking domain fleet architecture</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> FCrDNS / PTR server alignment</li>
                      <li><i className="fa-solid fa-circle-check text-primary me-2"></i> 30-Day dedicated implementation support</li>
                    </ul>
                  </div>

                  <button
                    className="btn btn-outline-dark w-100 fw-bold py-2 rounded-3 mt-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#trialModal"
                    style={{ whiteSpace: "normal", fontSize: "0.92rem", minHeight: "44px" }}
                  >
                    Request Enterprise Quote
                  </button>
                </div>
              </div>
            </div>

            {/* Package Comparison Table: DESKTOP VIEW (d-none d-md-block) */}
            <div className="d-none d-md-block deliv-table-wrap">
              <div className="p-3 bg-light border-bottom fw-bold text-dark">
                Package Capability Comparison Matrix
              </div>
              <div className="table-responsive">
                <table className="deliv-table">
                  <thead>
                    <tr>
                      <th style={{ width: "40%" }}>Capability / Deliverable</th>
                      <th className="text-center" style={{ width: "20%" }}>{currency === "USD" ? "$99 (Essential)" : "₹7,999"}</th>
                      <th className="text-center" style={{ width: "20%" }}>{currency === "USD" ? "$199 (Complete)" : "₹14,999"}</th>
                      <th className="text-center" style={{ width: "20%" }}>{currency === "USD" ? "$499+ (Fleet)" : "₹39,999+"}</th>
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

            {/* Package Comparison: MOBILE VIEW (d-block d-md-none) */}
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
                    {/* Essential Tier */}
                    <div className="p-2 px-3 rounded bg-light border">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="badge bg-secondary-subtle text-secondary" style={{ fontSize: "0.7rem" }}>Essential</span>
                        <span className="text-muted fw-bold" style={{ fontSize: "0.75rem" }}>{currency === "USD" ? "$99" : "₹7,999"}</span>
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

                    {/* Complete Tier (Featured) */}
                    <div className="p-2 px-3 rounded bg-primary-subtle border border-primary-subtle">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="badge bg-primary text-white" style={{ fontSize: "0.7rem" }}>Complete ★ Recommended</span>
                        <span className="text-primary fw-bold" style={{ fontSize: "0.75rem" }}>{currency === "USD" ? "$199" : "₹14,999"}</span>
                      </div>
                      <div style={{ fontSize: "0.88rem" }}>
                        {row.t2 === "—" ? (
                          <span className="text-muted"><i className="fa-solid fa-minus text-secondary me-1"></i> Not Included</span>
                        ) : (
                          <span className="text-primary fw-bold">{row.t2}</span>
                        )}
                      </div>
                    </div>

                    {/* Fleet Tier */}
                    <div className="p-2 px-3 rounded bg-dark text-white border border-dark">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="badge bg-white text-dark" style={{ fontSize: "0.7rem" }}>Fleet</span>
                        <span className="text-white-50 fw-bold" style={{ fontSize: "0.75rem" }}>{currency === "USD" ? "$499+" : "₹39,999+"}</span>
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

        {/* ─── 7. FREQUENTLY ASKED QUESTIONS (FAQ) ─── */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Technical Clarifications
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Frequently Asked Questions
              </h2>
              <p className="text-muted">
                Clear, transparent answers on email deliverability, DNS engineering, and security protocols.
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

        {/* ─── 8. FINAL EMERGENCY CTA & WHATSAPP (Fully Mobile Responsive) ─── */}
        <section
          className="bottom-cta-section py-5 text-white position-relative"
          style={{
            background: "linear-gradient(135deg, #0b0f19 0%, #1e1b4b 50%, #0e7490 100%)",
            overflow: "hidden",
          }}
        >
          <div className="container py-5 text-center position-relative" style={{ zIndex: 2 }}>
            <span className="badge bg-danger text-uppercase px-3 py-2 fw-bold mb-3 cta-badge">
              Don’t Let Another Deal Land In Spam
            </span>
            <h2 className="fw-bold mb-3 text-white cta-h2" style={{ fontSize: "2.8rem" }}>
              Ready to Restore Your Email Inbox Placement?
            </h2>
            <p className="lead mx-auto mb-4" style={{ maxWidth: "680px", color: "#cbd5e1", fontSize: "1.05rem" }}>
              Get your domain analyzed by ChittorTech's deliverability engineers. We audit your DNS, fix your authentication,
              and get your emails reaching the decision-makers who matter.
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
                Schedule Strategy Call
              </button>
            </div>

            <div className="text-slate-400 small" style={{ color: "#94a3b8" }}>
              <i className="fa-solid fa-lock me-1 text-cyan-400"></i> No sensitive passwords required · 100% Confidential · Global response within 1 hour
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
