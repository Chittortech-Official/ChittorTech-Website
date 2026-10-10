"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function EmailBlacklistRemovalPage() {
  const [currency, setCurrency] = useState("USD"); // "USD" | "INR"
  const [openFaq, setOpenFaq] = useState(0);

  const whatsappUrl =
    "https://wa.me/917597451057?text=Hi%20ChittorTech%2C%20my%20email%20infrastructure%20is%20blocked%2Flisted.%20Please%20perform%20an%20emergency%20blacklist%20and%20reputation%20audit.";

  const ipVsDomainComparison = [
    {
      factor: "Primary Focus",
      ip: "Identifies sending server infrastructure & IP address",
      domain: "Identifies brand domain, envelope FROM, & message body URLs",
    },
    {
      factor: "Inspection Stage",
      ip: "Checked during initial SMTP TCP connection handshake",
      domain: "Evaluated during content scanning, body link parsing, & DKIM checks",
    },
    {
      factor: "Impact of Changing Server",
      ip: "New clean IP may temporarily bypass IP-based blocklists",
      domain: "Reputation listing follows the domain across every server & ESP",
    },
    {
      factor: "Key Technical Triggers",
      ip: "Outbound spam volume spikes, dictionary attacks, open relays, PTR mismatch",
      domain: "Spam trap hits, recipient spam complaints, phishing, deceptive link URLs",
    },
    {
      factor: "Major Representative Lists",
      ip: "Spamhaus SBL/CSS/XBL, Barracuda BRBL, SpamCop, Invaluement ivmSIP",
      domain: "Spamhaus DBL, Invaluement ivmURI, SURBL, URIBL, Google Postmaster",
    },
  ];

  const packageCapabilities = [
    { name: "Infrastructure Scope", t1: "Single IP or Domain", t2: "Single IP + Domain Suite", t3: "Up to 5 Domains or /28 Subnet" },
    { name: "Multi-RBL Diagnostic & Triage", t1: "✓ 1 Major Blacklist Focus", t2: "✓ Multi-RBL Comprehensive", t3: "✓ Enterprise Fleet Audit" },
    { name: "Root-Cause Forensic Log Analysis", t1: "✓ Core Diagnostics", t2: "✓ Deep SMTP & Auth Forensics", t3: "✓ Multi-Server Log Forensics" },
    { name: "Compromised Mailbox & Script Audit", t1: "—", t2: "✓ Mailbox & Script Lockdown", t3: "✓ Multi-Account Cloud Audit" },
    { name: "FCrDNS & Reverse PTR Alignment", t1: "✓ Verification Check", t2: "✓ Complete Alignment Guide", t3: "✓ Fleet Subnet PTR Setup" },
    { name: "Technical Delisting Dossier Prep", t1: "✓ Standard Dossier", t2: "✓ Evidence-Backed Dossier", t3: "✓ Bespoke Enterprise Dossier" },
    { name: "Official RBL Authority Escalation", t1: "✓ 1 Formal Escalation", t2: "✓ Multi-Authority Escalation", t3: "✓ Dedicated Multi-Gatekeeper SLA" },
    { name: "Microsoft SNDS / JMRP Remediation", t1: "—", t2: "✓ SNDS & 550 5.7.1 Triage", t3: "✓ Complete Microsoft Escalation" },
    { name: "Google Postmaster Reputation Strategy", t1: "—", t2: "✓ Bad/Low Recovery SOP", t3: "✓ Multi-Domain Postmaster SOP" },
    { name: "Post-Delisting Warmup & Monitoring", t1: "Post-Submission Check", t2: "✓ 14-Day Monitoring & Ramp", t3: "✓ 30-Day Dedicated Support SLA" },
  ];

  const faqs = [
    {
      q: "1. How long does email blacklist removal take?",
      a: "Turnaround depends on which specific list has flagged your infrastructure, whether the underlying abuse has been terminated, and whether the network provider or end-user controls the IP. Barracuda states that valid BRBL removal requests are typically investigated within 12 hours. Spamhaus controls its own removal procedures and evaluates evidence on a case-by-case basis. ChittorTech provides an emergency 24–48h technical remediation and escalation target, but no legitimate consultant can dictate an independent operator's final timeline.",
    },
    {
      q: "2. What is the difference between Spamhaus CSS and SBL?",
      a: "Spamhaus CSS (Composite Snowshoe List) identifies IP addresses exhibiting snowshoe or heuristic spam sending patterns. CSS listings generally expire after sending anomalies cease, but ongoing abuse causes immediate re-listing. In contrast, Spamhaus SBL (Spamhaus Block List) is an authoritative database of verified spam operations, compromised sources, and bulletproof hosting. SBL listings frequently require the upstream ISP, cloud provider, or network owner to intervene and demonstrate permanent remediation.",
    },
    {
      q: "3. Why does my delisting request keep getting rejected?",
      a: "Delisting requests are routinely rejected when the underlying source of abuse is still active. If a compromised employee mailbox, an infected WordPress PHP mailer, or an unauthenticated API key continues to send spam while you submit a removal request, automated sensor traps will immediately flag the traffic again. Submitting requests without documented evidence of containment can also result in extended administrative cooling-off periods.",
    },
    {
      q: "4. Why is Microsoft returning '550 5.7.1 Service unavailable Client host blocked'?",
      a: "A '550 5.7.1' response indicates that Microsoft's inbound mail servers have rejected your connection due to sender reputation, high user complaint rates, spam trap hits, or missing authentication. We analyze your sending IP, reverse DNS (PTR), Microsoft SNDS telemetry, JMRP complaint feedback loops, and NDR bounce codes to isolate the exact cause before opening an escalation ticket with Microsoft's deliverability engineering team.",
    },
    {
      q: "5. My Google Postmaster reputation says 'Bad'. Can you instantly change it to 'High'?",
      a: "No consultant can directly modify Google Postmaster Tools metrics. Postmaster reputation is mathematically computed by Google based on user spam complaints, authentication pass rates, SPF/DKIM alignment, and delivery error rates over a rolling multi-week window. Our recovery roadmap stops abusive sending, hardens DMARC enforcement, cleans dormant recipient lists, and implements a controlled volume ramp to organically rebuild Google reputation back to High.",
    },
    {
      q: "6. Can you remove a blacklist if my sending IP is shared?",
      a: "If you send through a shared IP pool (e.g. Mailchimp, SendGrid, or shared hosting), your reputation is co-mingled with other tenants. If a neighboring customer sends spam, the entire shared IP can be listed. We audit whether the listing is at the IP level or domain level (DBL/URIBL). If the shared IP is poisoned, we guide you through sending-stream isolation, dedicated IP migration, or provider reassignment.",
    },
    {
      q: "7. What about UCEPROTECT Level 2 or Level 3 listings?",
      a: "UCEPROTECT Level 2 and Level 3 listings target entire hosting subnets (/24) or autonomous system numbers (ASNs) rather than individual senders. They penalize clean senders because of abusive neighbors hosted in the same data center. Most major enterprise mailbox providers (Google, Microsoft) ignore UCEPROTECT Level 2/3 due to collateral damage. ChittorTech audits whether your actual receiving destinations use this list and strongly advises against paying extortionate 'delisting fees'.",
    },
    {
      q: "8. Can poor list hygiene really cause blacklist listings?",
      a: "Absolutely. Sending repeatedly to invalid addresses, abandoned mailboxes, or purchased lists inevitably triggers pristine and recycled spam traps maintained by anti-spam organizations. When a sender consistently hits spam traps, RBL algorithms automatically classify the infrastructure as an unmanaged spam source. Rigorous list hygiene and suppression filtering are mandatory elements of permanent reputation recovery.",
    },
  ];

  return (
    <>
      <style>{`
        /* ChittorTech Blacklist Removal & Reputation Recovery Design System */
        .deliv-wrapper {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: #0f172a;
          background-color: #f8fafc;
          overflow-x: hidden !important;
          width: 100% !important;
          max-width: 100vw !important;
        }
        .deliv-hero {
          background: radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 10% 80%, rgba(37, 99, 235, 0.18) 0%, transparent 45%),
                      linear-gradient(135deg, #090d16 0%, #0f172a 50%, #1e1b4b 100%);
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
          color: #f87171;
          margin-bottom: 24px;
        }
        .deliv-h1 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 2.85rem;
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.025em;
          color: #ffffff;
          margin-bottom: 20px;
        }
        .deliv-hero-p {
          font-size: 1.15rem;
          line-height: 1.65;
          color: #cbd5e1;
          margin-bottom: 32px;
          max-width: 680px;
        }
        .deliv-btn-wa {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #25d366;
          color: #ffffff !important;
          font-weight: 700;
          font-size: 1rem;
          padding: 13px 28px;
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

        /* Hero Trust Badges */
        .trust-badge-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 14px 18px;
          backdrop-filter: blur(8px);
          transition: all 0.25s ease;
        }
        .trust-badge-card:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(248, 113, 113, 0.35);
        }

        /* Diagnostic Terminal Mockup */
        .diag-mockup-card {
          background: #090d16;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #f8fafc;
          font-family: 'JetBrains Mono', monospace, ui-monospace;
        }
        .diag-status-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 9px 12px;
          border-radius: 10px;
          margin-bottom: 7px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 0.82rem;
        }

        /* Generic Card Styles */
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
          background: #fef2f2;
          color: #dc2626;
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
          color: #0f172a;
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
          border: 2px solid #dc2626;
          box-shadow: 0 16px 36px -10px rgba(220, 38, 38, 0.2);
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
          border-bottom: 1px solid #f1f5f9;
          font-size: 0.9rem;
          color: #334155;
        }
        .deliv-table tr:last-child td {
          border-bottom: none;
        }

        /* Mobile Card System */
        .deliv-mobile-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 16px;
          margin-bottom: 14px;
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
          .deliv-btn-wa, .deliv-btn-secondary {
            width: 100% !important;
            padding: 13px 18px !important;
            font-size: 0.92rem !important;
            text-align: center !important;
          }
          .trust-badge-card {
            padding: 9px 12px !important;
            font-size: 0.82rem !important;
          }
          .diag-mockup-card {
            padding: 16px 14px !important;
            border-radius: 16px !important;
          }
          .diag-status-row {
            padding: 8px 10px !important;
            font-size: 0.76rem !important;
          }
          .price-card {
            padding: 20px 14px !important;
            border-radius: 16px !important;
          }
          .price-card .price-box {
            padding: 12px 12px !important;
          }
          .price-amount {
            font-size: 1.75rem !important;
          }
          .price-scope-tag {
            font-size: 0.72rem !important;
            padding: 4px 8px !important;
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
            padding-bottom: 95px !important;
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
                  <i className="fa-solid fa-triangle-exclamation"></i> Emergency Blacklist Remediation & Delisting
                </div>

                <h1 className="deliv-h1">
                  Your Emails Are Being Blocked. Your Sales Pipeline Is Paying the Price.
                </h1>

                <p className="deliv-hero-p">
                  Find the actual reason you're listed. Stop the abuse. Build the remediation evidence. Execute the
                  documented delisting process. Then rebuild your sending reputation across Spamhaus, Barracuda,
                  Microsoft SNDS, Google Postmaster, and major global mailbox providers.
                </p>

                {/* CTAs */}
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="deliv-btn-wa"
                  >
                    <i className="fa-brands fa-whatsapp" style={{ fontSize: "1.25rem" }}></i>
                    WhatsApp Emergency Blacklist Expert: +91 75974 51057
                  </a>
                  <button
                    className="deliv-btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#trialModal"
                  >
                    <i className="fa-solid fa-calendar-check"></i>
                    Book Reputation Consultation
                  </button>
                </div>

                <div className="d-flex align-items-center gap-2 small mb-4" style={{ color: "#fca5a5", fontSize: "0.85rem" }}>
                  <i className="fa-solid fa-globe"></i>
                  <span>Remediating sender reputation across USA · UK · UAE · Canada · Australia · India</span>
                </div>

                {/* 4 Technical Trust Badges */}
                <div className="row g-2">
                  <div className="col-sm-6">
                    <div className="trust-badge-card d-flex align-items-center gap-2">
                      <i className="fa-solid fa-shield-halved text-danger" style={{ color: "#f87171" }}></i>
                      <span className="small text-white fw-medium">Spamhaus, Barracuda & SNDS Experts</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="trust-badge-card d-flex align-items-center gap-2">
                      <i className="fa-solid fa-microscope text-danger" style={{ color: "#f87171" }}></i>
                      <span className="small text-white fw-medium">Forensic Spam-Trap & Account Audit</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="trust-badge-card d-flex align-items-center gap-2">
                      <i className="fa-solid fa-bolt text-danger" style={{ color: "#f87171" }}></i>
                      <span className="small text-white fw-medium">24–48h Emergency Escalation Target</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="trust-badge-card d-flex align-items-center gap-2">
                      <i className="fa-solid fa-chart-line text-danger" style={{ color: "#f87171" }}></i>
                      <span className="small text-white fw-medium">Post-Delisting Reputation Healing SOP</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Diagnostic Terminal Mockup */}
              <div className="col-lg-5">
                <div className="diag-mockup-card">
                  <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom border-secondary border-opacity-25 gap-2">
                    <div className="d-flex align-items-center gap-2" style={{ minWidth: 0 }}>
                      <span className="badge bg-danger text-white flex-shrink-0" style={{ fontSize: "0.7rem" }}>CHITTORTECH RBL</span>
                      <span className="small text-light text-truncate" style={{ fontSize: "0.8rem" }}>
                        diagnostic.rbl-telemetry.in
                      </span>
                    </div>
                    <span className="badge bg-warning text-dark flex-shrink-0" style={{ fontSize: "0.7rem" }}>
                      ⚠ Sample Preview
                    </span>
                  </div>

                  <div className="diag-status-row">
                    <span className="text-secondary">Target IP / Domain:</span>
                    <span className="text-light fw-bold font-monospace">203.0.113.42 · example.com</span>
                  </div>

                  <div className="diag-status-row">
                    <span className="text-secondary">PTR & FCrDNS:</span>
                    <span className="text-success fw-bold">✓ mail.example.com (PASS)</span>
                  </div>

                  <div className="diag-status-row">
                    <span className="text-secondary">Spamhaus ZEN (SBL/CSS):</span>
                    <span className="badge bg-danger text-white" style={{ fontSize: "0.7rem" }}>LISTED (CSS)</span>
                  </div>

                  <div className="diag-status-row">
                    <span className="text-secondary">Barracuda BRBL:</span>
                    <span className="badge bg-warning text-dark" style={{ fontSize: "0.7rem" }}>REVIEW REQUIRED</span>
                  </div>

                  <div className="diag-status-row">
                    <span className="text-secondary">Microsoft SNDS:</span>
                    <span className="badge bg-danger text-white" style={{ fontSize: "0.7rem" }}>BLOCKED (550 5.7.1)</span>
                  </div>

                  <div className="diag-status-row">
                    <span className="text-secondary">Google Postmaster:</span>
                    <span className="badge bg-warning text-dark" style={{ fontSize: "0.7rem" }}>LOW REPUTATION</span>
                  </div>

                  <div className="mt-3 py-2 px-3 rounded-3 bg-dark border border-danger border-opacity-50 text-center text-danger-emphasis" style={{ fontSize: "0.74rem", lineHeight: "1.4" }}>
                    <i className="fa-solid fa-triangle-exclamation text-danger me-1"></i>
                    <span className="text-light">Remediation: Terminate abuse before submitting removal request</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. WHY BLACKLISTS KILL BUSINESS REVENUE ─── */}
        <section className="py-5 bg-white border-bottom">
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem", color: "#dc2626 !important" }}>
                Commercial Revenue Impact
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                One Reputation Incident Can Cripple Your Entire Operation
              </h2>
              <p className="text-muted">
                A blacklist listing is not merely a technical warning. When your IP or domain is listed, sales outreach drops dead,
                transactional password resets bounce, invoices vanish, and critical executive communication fails silently.
              </p>
            </div>

            {/* Impact Grid */}
            <div className="row g-3 mb-5 text-center">
              <div className="col-md-3 col-6">
                <div className="p-3 bg-light rounded-3 border h-100">
                  <i className="fa-solid fa-handshake-slash text-danger fs-4 mb-2"></i>
                  <h6 className="fw-bold mb-1">Sales Outreach</h6>
                  <small className="text-muted">Cold pipelines frozen overnight</small>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="p-3 bg-light rounded-3 border h-100">
                  <i className="fa-solid fa-receipt text-danger fs-4 mb-2"></i>
                  <h6 className="fw-bold mb-1">Customer Invoices</h6>
                  <small className="text-muted">Billing receipts bounced</small>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="p-3 bg-light rounded-3 border h-100">
                  <i className="fa-solid fa-key text-danger fs-4 mb-2"></i>
                  <h6 className="fw-bold mb-1">Password Resets</h6>
                  <small className="text-muted">Transactional users locked out</small>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="p-3 bg-light rounded-3 border h-100">
                  <i className="fa-solid fa-robot text-danger fs-4 mb-2"></i>
                  <h6 className="fw-bold mb-1">CRM Automation</h6>
                  <small className="text-muted">HubSpot & Salesforce alerts lost</small>
                </div>
              </div>
            </div>

            {/* IP Blacklist vs Domain Blacklist Comparison */}
            <div className="p-4 rounded-4 mb-5 border" style={{ backgroundColor: "#f8fafc" }}>
              <h4 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>
                The Critical Distinction: IP Blacklists vs. Domain Blacklists
              </h4>
              <p className="text-muted small mb-4">
                Understanding whether you are suffering an <strong>IP-level listing</strong> or a <strong>Domain-level listing</strong> is
                vital. Changing your SMTP server IP will never solve a domain reputation problem, because domain listings follow your brand
                across every sending platform.
              </p>

              <div className="d-none d-md-block deliv-table-wrap">
                <table className="deliv-table">
                  <thead>
                    <tr>
                      <th style={{ width: "25%" }}>Technical Factor</th>
                      <th style={{ width: "37%" }}>IP Reputation (DNSBL / RBL)</th>
                      <th style={{ width: "38%" }}>Domain Reputation (DBL / URIBL / SURBL)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ipVsDomainComparison.map((row, idx) => (
                      <tr key={idx}>
                        <td><strong>{row.factor}</strong></td>
                        <td>{row.ip}</td>
                        <td className="text-danger fw-medium">{row.domain}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile View */}
              <div className="d-block d-md-none">
                {ipVsDomainComparison.map((row, idx) => (
                  <div key={idx} className="deliv-mobile-card mb-3 p-3">
                    <div className="fw-bold text-dark mb-2 pb-1 border-bottom" style={{ fontSize: "0.92rem" }}>
                      {row.factor}
                    </div>
                    <div className="d-flex flex-column gap-2" style={{ fontSize: "0.82rem" }}>
                      <div className="p-2 rounded bg-light border">
                        <span className="text-muted fw-bold">IP Listing:</span>
                        <div className="text-secondary mt-1">{row.ip}</div>
                      </div>
                      <div className="p-2 rounded bg-danger-subtle border border-danger-subtle">
                        <span className="text-danger fw-bold">Domain Listing:</span>
                        <div className="text-danger-emphasis mt-1">{row.domain}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Root-Cause Trap Callout */}
            <div className="p-4 rounded-4 mb-4 border border-danger-subtle" style={{ background: "#fff5f5" }}>
              <div className="d-flex align-items-start gap-3">
                <div className="p-3 rounded-3 bg-danger text-white fs-4 flex-shrink-0">
                  <i className="fa-solid fa-arrows-spin"></i>
                </div>
                <div>
                  <h4 className="fw-bold text-danger mb-2" style={{ fontSize: "1.25rem" }}>
                    The "Root-Cause Trap": Why Delisting Buttons Cause Permanent Re-Listings
                  </h4>
                  <p className="text-dark small mb-2" style={{ lineHeight: "1.6" }}>
                    When server administrators blindly press "Request Removal" on Spamhaus or Barracuda without fixing the source,
                    an endless loop occurs: the IP is delisted, the compromised script sends another 5,000 spam payloads, and within hours,
                    the IP is permanently re-listed with escalated penalties.
                  </p>
                  <p className="text-muted small mb-0" style={{ lineHeight: "1.6" }}>
                    Spamhaus explicitly states that the underlying problem must be identified and corrected before delisting.
                    ChittorTech executes a strict <strong>Forensic Quarantine ➔ Root-Cause Containment ➔ Evidence Dossier ➔ Formal Escalation</strong> protocol
                    to ensure your removal is permanent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. OUR BLACKLIST REMEDIATION CAPABILITIES ─── */}
        <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem", color: "#dc2626 !important" }}>
                Deep Technical Forensics
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                We Fix the Cause Behind the Listing
              </h2>
              <p className="text-muted">
                We investigate your mail servers, authentication logs, web scripts, and recipient lists with mathematical precision.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-file-waveform"></i>
                  </div>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Forensic SMTP Log Analysis</h5>
                  <p className="text-muted small mb-0">
                    We reconstruct the outbound spam event using SMTP AUTH logs, envelope senders, Return-Path headers,
                    and bounce codes to detect dictionary attacks, backscatter, and unauthorized relaying.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-user-lock"></i>
                  </div>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Compromised Mailbox Triage</h5>
                  <p className="text-muted small mb-0">
                    We detect hijacked user accounts, leaked SMTP credentials, suspicious forwarding rules, and rogue OAuth tokens.
                    We enforce session revocation, credential rotation, and MFA policies.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-code"></i>
                  </div>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Malicious PHP Mailer Cleanup</h5>
                  <p className="text-muted small mb-0">
                    We inspect web server access logs, compromised WordPress/CMS plugins, and hidden cron jobs generating
                    unauthorized local MTA injection, terminating malicious scripts at the root.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-filter-circle-xmark"></i>
                  </div>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Spam-Trap & List Scrubbing</h5>
                  <p className="text-muted small mb-0">
                    We identify pristine and recycled spam-trap hits, analyze hard-bounce histories, filter invalid syntax,
                    and apply strict suppression rules to isolate damaged recipient lists.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-network-wired"></i>
                  </div>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>FCrDNS & Reverse PTR Alignment</h5>
                  <p className="text-muted small mb-0">
                    We verify Forward-Confirmed Reverse DNS (FCrDNS), ensuring your outbound IP resolves to an authoritative hostname
                    whose A record matches the IP, aligning HELO/EHLO banners with RFC standards.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-brands fa-microsoft"></i>
                  </div>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Microsoft SNDS & Google Postmaster</h5>
                  <p className="text-muted small mb-0">
                    We remediate Microsoft Outlook <code>550 5.7.1</code> client blocks via SNDS/JMRP escalation and execute
                    reputation recovery roadmaps for Google Postmaster domains stuck in "Bad" or "Low" status.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. STEP-BY-STEP BLACKLIST DELISTING & REPUTATION ROADMAP ─── */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem", color: "#dc2626 !important" }}>
                Disciplined Remediation Workflow
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Our 6-Step Delisting & Reputation Healing Protocol
              </h2>
              <p className="text-muted">
                From initial multi-RBL audit to controlled post-delisting warmup, we follow the exact evidence-based workflow
                required by independent blocklist gatekeepers.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="deliv-card border-top border-4 border-danger">
                  <span className="badge bg-danger text-white mb-2">STEP 1</span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Multi-RBL Diagnostic Audit</h5>
                  <p className="text-muted small mb-0">
                    We identify all sending IPs, sending domains, tracking subdomains, and body links. We query major public reputation
                    sources (Spamhaus, Barracuda, Invaluement, SpamCop) to map every active listing.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card border-top border-4 border-warning">
                  <span className="badge bg-warning text-dark mb-2">STEP 2</span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Root-Cause Forensic Triage</h5>
                  <p className="text-muted small mb-0">
                    We reconstruct the exact timeline: when did listings trigger? What changed? Which user or script authenticated?
                    We analyze SMTP 4xx/5xx responses, bounce rates, and queue depth.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card border-top border-4 border-primary">
                  <span className="badge bg-primary text-white mb-2">STEP 3</span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Infrastructure Hardening</h5>
                  <p className="text-muted small mb-0">
                    We close open relays, terminate malicious scripts, rotate compromised credentials, enforce strict SPF/DKIM/DMARC
                    policies, and suppress invalid recipients and hard bounces.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card border-top border-4 border-info">
                  <span className="badge bg-info text-dark mb-2">STEP 4</span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Remediation Dossier Submission</h5>
                  <p className="text-muted small mb-0">
                    We compile a professional technical dossier documenting root-cause discovery, containment actions, credential rotation,
                    and current sending controls, submitting through official operator channels.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card border-top border-4 border-success">
                  <span className="badge bg-success text-white mb-2">STEP 5</span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Delisting Verification</h5>
                  <p className="text-muted small mb-0">
                    Once the authority approves removal, we verify global DNSBL zone propagation across multiple recursive resolvers
                    and conduct live SMTP handshake tests with major mailbox providers.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card border-top border-4 border-dark">
                  <span className="badge bg-dark text-white mb-2">STEP 6</span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Post-Delisting Quarantine & Ramp</h5>
                  <p className="text-muted small mb-0">
                    We enforce a conservative sending ramp: low volume to highly engaged recipients, strict complaint monitoring,
                    and Google Postmaster telemetry review to permanently secure your sender reputation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. SUPPORTED BLACKLIST AUTHORITIES ─── */}
        <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem", color: "#dc2626 !important" }}>
                Industry Authority Coverage
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Reputation Systems & Gatekeepers We Work With
              </h2>
              <p className="text-muted">
                We prepare evidence-backed remediation for all primary reputation databases, DNSBLs, and mailbox provider telemetry systems.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="p-4 bg-white rounded-3 border h-100">
                  <h5 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>
                    <i className="fa-solid fa-shield-virus text-danger me-2"></i> The Spamhaus Project
                  </h5>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.9rem", color: "#475569" }}>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Spamhaus SBL (Spamhaus Block List)</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Spamhaus CSS (Snowshoe & Heuristics)</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Spamhaus DBL (Domain Block List)</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Spamhaus XBL & PBL Guidance</li>
                    <li><i className="fa-solid fa-check text-success me-2"></i> ISP / Network Owner SBL Coordination</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div className="p-4 bg-white rounded-3 border h-100">
                  <h5 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>
                    <i className="fa-solid fa-server text-warning me-2"></i> Major DNSBL Networks
                  </h5>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.9rem", color: "#475569" }}>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Barracuda Reputation Block List (BRBL)</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Invaluement (ivmURI, ivmSIP, ivm24)</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> SpamCop Blocking List (SCBL)</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> SURBL & URIBL Domain Systems</li>
                    <li><i className="fa-solid fa-check text-success me-2"></i> Active DNSBL verification filtering</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div className="p-4 bg-white rounded-3 border h-100">
                  <h5 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>
                    <i className="fa-brands fa-microsoft text-primary me-2"></i> Mailbox Provider Dashboards
                  </h5>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.9rem", color: "#475569" }}>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Microsoft SNDS & JMRP Feedback Loop</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Microsoft Outlook 550 5.7.1 Escalation</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Google Postmaster Tools Telemetry</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Yahoo Complaint Feedback Loop (CFL)</li>
                    <li><i className="fa-solid fa-check text-success me-2"></i> Mail-Tester 10/10 Score Diagnostics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6. TRANSPARENT PRICING TIERS ─── */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem", color: "#dc2626 !important" }}>
                Predictable Fixed Pricing
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Professional Blacklist Remediation Packages
              </h2>
              <p className="text-muted">
                Transparent flat-rate engineering fees with documented deliverables. Choose the tier aligned with your infrastructure.
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

            {/* Pricing Cards */}
            <div className="row g-4 align-items-stretch mb-5">
              {/* Tier 1: Emergency Blacklist Delisting */}
              <div className="col-lg-4">
                <div className="price-card">
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
                    <span className="badge price-scope-tag border" style={{ fontSize: "0.72rem", backgroundColor: "#f1f5f9", color: "#475569", fontWeight: 700 }}>
                      Tier 1 Emergency
                    </span>
                    <span className="badge price-scope-tag border" style={{ fontSize: "0.72rem", backgroundColor: "#f8fafc", color: "#64748b", fontWeight: 600 }}>
                      1 IP or Domain
                    </span>
                  </div>
                  <h4 className="fw-bold mb-2 text-dark" style={{ fontSize: "1.25rem", lineHeight: "1.3" }}>
                    Emergency Blacklist Delisting
                  </h4>
                  <p className="text-muted small mb-3">
                    Fast triage for businesses hit by an urgent, identifiable listing on Spamhaus, Barracuda, or SpamCop.
                  </p>

                  <div className="p-3 rounded-3 bg-light mb-3 border price-box">
                    <div className="d-flex flex-wrap align-items-baseline gap-2">
                      <span className="price-amount" style={{ fontSize: "1.9rem", fontWeight: 900, color: "#0f172a", lineHeight: 1 }}>
                        {currency === "USD" ? "$99" : "₹7,999"}
                      </span>
                      <span className="text-muted small fw-semibold" style={{ whiteSpace: "nowrap" }}>
                        / IP or domain
                      </span>
                    </div>
                    <div className="mt-2 pt-2 border-top d-flex align-items-center gap-1 small fw-semibold text-danger" style={{ borderColor: "#e2e8f0" }}>
                      <i className="fa-solid fa-bolt flex-shrink-0 me-1"></i>
                      <span>Target: 24–48h Technical Escalation</span>
                    </div>
                  </div>

                  <div className="flex-grow-1 mb-4">
                    <div className="fw-bold small text-uppercase text-secondary mb-2" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                      Included Deliverables:
                    </div>
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2" style={{ fontSize: "0.85rem", color: "#334155" }}>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-danger mt-1 flex-shrink-0"></i>
                        <span>Emergency multi-RBL reputation diagnostic</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-danger mt-1 flex-shrink-0"></i>
                        <span>1 Major blacklist investigation (Spamhaus/Barracuda/SpamCop)</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-danger mt-1 flex-shrink-0"></i>
                        <span>Root-cause identification &amp; containment guide</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-danger mt-1 flex-shrink-0"></i>
                        <span>PTR / FCrDNS &amp; authentication verification</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-danger mt-1 flex-shrink-0"></i>
                        <span>Official delisting dossier preparation &amp; submission</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-danger mt-1 flex-shrink-0"></i>
                        <span>Post-submission verification check</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/917597451057?text=Hi%20ChittorTech%2C%20I%20want%20to%20order%20the%20Emergency%20Blacklist%20Delisting%20package%20(${currency === "USD" ? "$99" : "₹7,999"}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-danger w-100 fw-bold py-2 rounded-3 mt-auto d-flex align-items-center justify-content-center gap-2"
                  >
                    <i className="fa-brands fa-whatsapp fs-5 text-success"></i>
                    <span>Start Emergency Delisting</span>
                  </a>
                </div>
              </div>

              {/* Tier 2: Complete Domain & IP Reputation Recovery (Featured) */}
              <div className="col-lg-4">
                <div className="price-card featured">
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
                    <span className="badge price-scope-tag" style={{ background: "linear-gradient(135deg, #dc2626, #b91c1c)", color: "#fff", fontSize: "0.72rem", padding: "5px 11px", borderRadius: "9999px", fontWeight: 700 }}>
                      ★ Recommended
                    </span>
                    <span className="badge price-scope-tag" style={{ backgroundColor: "#fee2e2", color: "#991b1b", border: "1px solid #fecaca", fontSize: "0.72rem", fontWeight: 700, padding: "5px 10px", borderRadius: "6px" }}>
                      1 IP + Domain
                    </span>
                  </div>
                  <h4 className="fw-bold mb-2 text-danger" style={{ fontSize: "1.25rem", lineHeight: "1.3" }}>
                    Complete Reputation Recovery Suite
                  </h4>
                  <p className="text-muted small mb-3">
                    Comprehensive multi-RBL cleanup, compromised mailbox audit, Microsoft SNDS &amp; Google Postmaster remediation.
                  </p>

                  <div className="p-3 rounded-3 border mb-3 price-box" style={{ backgroundColor: "#fef2f2", borderColor: "#fecaca" }}>
                    <div className="d-flex flex-wrap align-items-baseline gap-2">
                      <span className="price-amount" style={{ fontSize: "1.9rem", fontWeight: 900, color: "#b91c1c", lineHeight: 1 }}>
                        {currency === "USD" ? "$199" : "₹15,999"}
                      </span>
                      <span className="text-muted small fw-semibold" style={{ whiteSpace: "nowrap" }}>
                        / IP + domain
                      </span>
                    </div>
                    <div className="mt-2 pt-2 border-top d-flex align-items-center gap-1 small fw-semibold text-danger" style={{ borderColor: "#fecaca" }}>
                      <i className="fa-solid fa-shield-halved flex-shrink-0 me-1"></i>
                      <span>Full Forensic Remediation &amp; Warmup</span>
                    </div>
                  </div>

                  <div className="flex-grow-1 mb-4">
                    <div className="fw-bold small text-uppercase text-danger mb-2" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                      Everything in Tier 1, Plus:
                    </div>
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2" style={{ fontSize: "0.85rem", color: "#334155" }}>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-success mt-1 flex-shrink-0"></i>
                        <span>Comprehensive multi-RBL investigation</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-success mt-1 flex-shrink-0"></i>
                        <span>Compromised mailbox &amp; rogue script audit</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-success mt-1 flex-shrink-0"></i>
                        <span>Spam-trap &amp; list hygiene remediation</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-success mt-1 flex-shrink-0"></i>
                        <span>Microsoft SNDS / JMRP 550 5.7.1 triage</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-success mt-1 flex-shrink-0"></i>
                        <span>Google Postmaster Bad/Low reputation strategy</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-success mt-1 flex-shrink-0"></i>
                        <span>Post-delisting controlled warmup ramp</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-success mt-1 flex-shrink-0"></i>
                        <span>14-Day dedicated monitoring &amp; final report</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/917597451057?text=Hi%20ChittorTech%2C%20I%20want%20to%20order%20the%20Complete%20Reputation%20Recovery%20Suite%20(${currency === "USD" ? "$199" : "₹15,999"}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-danger w-100 fw-bold py-2 rounded-3 mt-auto shadow-sm d-flex align-items-center justify-content-center gap-2"
                  >
                    <i className="fa-brands fa-whatsapp fs-5"></i>
                    <span>Recover Email Reputation</span>
                  </a>
                </div>
              </div>

              {/* Tier 3: Enterprise Fleet & SaaS IP Range Recovery */}
              <div className="col-lg-4">
                <div className="price-card">
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
                    <span className="badge bg-dark text-white px-2 py-1 price-scope-tag" style={{ fontSize: "0.72rem", fontWeight: 700 }}>
                      Tier 3 Enterprise
                    </span>
                    <span className="badge bg-secondary text-white px-2 py-1 price-scope-tag" style={{ fontSize: "0.72rem", fontWeight: 600 }}>
                      5 Domains / Subnet
                    </span>
                  </div>
                  <h4 className="fw-bold mb-2 text-dark" style={{ fontSize: "1.25rem", lineHeight: "1.3" }}>
                    Enterprise Fleet &amp; SaaS Subnet
                  </h4>
                  <p className="text-muted small mb-3">
                    Multi-domain fleets, /28 IPv4 dedicated subnets, agency client SOPs, and multi-stream transactional isolation.
                  </p>

                  <div className="p-3 rounded-3 bg-light mb-3 border price-box">
                    <div className="d-flex flex-wrap align-items-baseline gap-2">
                      <span className="price-amount" style={{ fontSize: "1.9rem", fontWeight: 900, color: "#0f172a", lineHeight: 1 }}>
                        {currency === "USD" ? "$449+" : "₹34,999+"}
                      </span>
                      <span className="text-muted small fw-semibold" style={{ whiteSpace: "nowrap" }}>
                        / fleet
                      </span>
                    </div>
                    <div className="mt-2 pt-2 border-top d-flex align-items-center gap-1 small fw-semibold text-primary" style={{ borderColor: "#e2e8f0" }}>
                      <i className="fa-solid fa-layer-group flex-shrink-0 me-1"></i>
                      <span>Multi-Vendor Fleet Architecture</span>
                    </div>
                  </div>

                  <div className="flex-grow-1 mb-4">
                    <div className="fw-bold small text-uppercase text-secondary mb-2" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                      Enterprise Scope:
                    </div>
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2" style={{ fontSize: "0.85rem", color: "#334155" }}>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0" style={{ color: "#dc2626 !important" }}></i>
                        <span>Up to 5 domains or /28 IPv4 subnet scope</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0" style={{ color: "#dc2626 !important" }}></i>
                        <span>Transactional vs marketing stream isolation</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0" style={{ color: "#dc2626 !important" }}></i>
                        <span>Multi-authority formal escalation management</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0" style={{ color: "#dc2626 !important" }}></i>
                        <span>Subcontractor &amp; custom MAIL FROM reviews</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0" style={{ color: "#dc2626 !important" }}></i>
                        <span>Agency deployment checklists &amp; onboarding SOPs</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0" style={{ color: "#dc2626 !important" }}></i>
                        <span>30-Day dedicated implementation SLA support</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    className="btn btn-outline-dark w-100 fw-bold py-2 rounded-3 mt-auto d-flex align-items-center justify-content-center gap-2"
                    data-bs-toggle="modal"
                    data-bs-target="#trialModal"
                    style={{ whiteSpace: "normal", fontSize: "0.92rem", minHeight: "44px" }}
                  >
                    <i className="fa-solid fa-layer-group"></i>
                    <span>Request Enterprise Scope</span>
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
                      <th style={{ width: "40%" }}>Capability / Technical Deliverable</th>
                      <th className="text-center" style={{ width: "20%" }}>{currency === "USD" ? "$99 (Emergency)" : "₹7,999"}</th>
                      <th className="text-center" style={{ width: "20%" }}>{currency === "USD" ? "$199 (Suite)" : "₹15,999"}</th>
                      <th className="text-center" style={{ width: "20%" }}>{currency === "USD" ? "$449+ (Fleet)" : "₹34,999+"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {packageCapabilities.map((row, idx) => (
                      <tr key={idx}>
                        <td>{row.name}</td>
                        <td className="text-center">
                          {row.t1 === "—" ? <span className="text-muted"><i className="fa-solid fa-minus me-1"></i> Not Included</span> : row.t1}
                        </td>
                        <td className="text-center fw-bold text-danger">
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
                <i className="fa-solid fa-list-check text-danger me-2"></i> Capability & Deliverable Matrix
              </div>
              {packageCapabilities.map((row, idx) => (
                <div key={idx} className="deliv-mobile-card mb-3 p-3 shadow-sm border">
                  <div className="fw-bold text-dark mb-3 pb-2 border-bottom" style={{ fontSize: "0.98rem" }}>
                    {row.name}
                  </div>
                  <div className="d-flex flex-column gap-2">
                    {/* Tier 1: Emergency */}
                    <div className="p-2 px-3 rounded bg-light border">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="badge bg-secondary-subtle text-secondary" style={{ fontSize: "0.7rem" }}>Emergency</span>
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

                    {/* Tier 2: Suite (Featured) */}
                    <div className="p-2 px-3 rounded border" style={{ backgroundColor: "#fef2f2", borderColor: "#fecaca" }}>
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="badge text-white" style={{ backgroundColor: "#dc2626", fontSize: "0.7rem" }}>Suite ★ Recommended</span>
                        <span className="fw-bold text-danger" style={{ fontSize: "0.75rem" }}>{currency === "USD" ? "$199" : "₹15,999"}</span>
                      </div>
                      <div style={{ fontSize: "0.88rem" }}>
                        {row.t2 === "—" ? (
                          <span className="text-muted"><i className="fa-solid fa-minus text-secondary me-1"></i> Not Included</span>
                        ) : (
                          <span className="fw-bold text-danger">{row.t2}</span>
                        )}
                      </div>
                    </div>

                    {/* Tier 3: Fleet */}
                    <div className="p-2 px-3 rounded bg-dark text-white border border-dark">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="badge bg-white text-dark" style={{ fontSize: "0.7rem" }}>Enterprise Fleet</span>
                        <span className="text-white-50 fw-bold" style={{ fontSize: "0.75rem" }}>{currency === "USD" ? "$449+" : "₹34,999+"}</span>
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
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem", color: "#dc2626 !important" }}>
                Deep Technical Guidance
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Frequently Asked Blacklist & Reputation Questions
              </h2>
              <p className="text-muted">
                Authoritative engineering answers on delisting procedures, blocklist heuristics, and sender reputation recovery.
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
                        className="border rounded-4 bg-white overflow-hidden transition-all shadow-sm"
                        style={{ borderColor: isOpen ? "#dc2626" : "#e2e8f0" }}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                          className="w-100 p-4 text-start d-flex justify-content-between align-items-center gap-3 bg-transparent border-0"
                          style={{ cursor: "pointer" }}
                        >
                          <span className="fw-bold text-dark" style={{ fontSize: "1.05rem" }}>
                            {faq.q}
                          </span>
                          <span
                            className="p-2 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                            style={{
                              width: "32px",
                              height: "32px",
                              background: isOpen ? "#fee2e2" : "#f1f5f9",
                              color: isOpen ? "#dc2626" : "#64748b",
                              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform 0.2s ease",
                            }}
                          >
                            <i className="fa-solid fa-chevron-down" style={{ fontSize: "0.8rem" }}></i>
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-muted small border-top pt-3" style={{ fontSize: "0.92rem", lineHeight: "1.65" }}>
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
            background: "linear-gradient(135deg, #090d16 0%, #1e1b4b 50%, #991b1b 100%)",
            overflow: "hidden",
          }}
        >
          <div className="container py-5 text-center position-relative" style={{ zIndex: 2 }}>
            <span className="badge text-uppercase px-3 py-2 fw-bold mb-3 cta-badge" style={{ backgroundColor: "#dc2626", color: "#fff" }}>
              Stop the Drain on Your Sales Pipeline
            </span>
            <h2 className="fw-bold mb-3 text-white cta-h2" style={{ fontSize: "2.8rem" }}>
              Every Hour Your Domain Is Listed Costs Real Customer Revenue.
            </h2>
            <p className="lead mx-auto mb-4" style={{ maxWidth: "700px", color: "#cbd5e1", fontSize: "1.05rem" }}>
              A blacklist is not fixed by repeatedly pressing "Remove." It's fixed by finding the source, terminating the abuse,
              documenting the remediation, and executing the official delisting workflow. Let's fix your infrastructure today.
            </p>

            <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="deliv-btn-wa"
              >
                <i className="fa-brands fa-whatsapp" style={{ fontSize: "1.3rem" }}></i>
                WhatsApp Blacklist Specialist (+91 75974 51057)
              </a>
              <button
                className="deliv-btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#trialModal"
              >
                <i className="fa-solid fa-calendar-check"></i>
                Book Emergency Consultation
              </button>
            </div>

            <div className="small" style={{ color: "#fca5a5" }}>
              <i className="fa-solid fa-lock me-1"></i> No master account passwords shared · Delegated access or screen-shared setup · 100% Confidential
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
