"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function DnsCloudflarePage() {
  const [currency, setCurrency] = useState("USD"); // "USD" | "INR"
  const [openFaq, setOpenFaq] = useState(0);

  const whatsappUrl =
    "https://wa.me/917597451057?text=Hi%20ChittorTech%2C%20I%20need%20expert%20DNS%20migration%20and%20Cloudflare%20management%20for%20my%20domain.";

  const dnsComparison = [
    {
      feature: "Global Resolution Latency",
      registrar: "120ms – 350ms (Unicast, regional bottlenecks)",
      cloudflare: "<30ms worldwide (Anycast across 300+ Edge cities)",
    },
    {
      feature: "DDoS Attack Mitigation",
      registrar: "Rate-limited, crashes during L3/L4/L7 floods",
      cloudflare: "Unmetered 280+ Tbps network capacity with auto-mitigation",
    },
    {
      feature: "DNSSEC Cryptographic Signing",
      registrar: "Often unsupported or requires manual complex keys",
      cloudflare: "1-Click automated DNSSEC with auto-rotated ECDSA keys",
    },
    {
      feature: "TTL Granularity",
      registrar: "Minimum 1 Hour to 24 Hours (Slow updates)",
      cloudflare: "1 Second to Auto (Instant record propagation)",
    },
    {
      feature: "Web Application Firewall (WAF)",
      registrar: "None (Zero application layer inspection)",
      cloudflare: "Custom WAF rules, OWASP core rulesets & Rate Limiting",
    },
    {
      feature: "Email Routing Protection",
      registrar: "Basic DNS table without proxy differentiation",
      cloudflare: "Strict Orange/Grey cloud routing prevents broken mail",
    },
  ];

  const packageCapabilities = [
    { name: "Domain Scope", t1: "Single Domain", t2: "Single Domain", t3: "Up to 5 Domains Fleet" },
    { name: "Authoritative Zone Audit & Cleanup", t1: "✓ Full Record Audit", t2: "✓ Complete Deep Audit", t3: "✓ Multi-Domain Fleet Audit" },
    { name: "Zero-Downtime Migration Protocol", t1: "✓ Pre-TTL Lowering", t2: "✓ Staged Dual-Resolution", t3: "✓ Enterprise Fleet SOP" },
    { name: "Orange Cloud vs Grey Cloud Mail Fix", t1: "✓ MX & SMTP Isolated", t2: "✓ Complete Mail Flow Protection", t3: "✓ Multi-Vendor Mail Routing" },
    { name: "DNSSEC Cryptographic Signing", t1: "—", t2: "✓ Registrar Key Setup", t3: "✓ Multi-Domain DNSSEC Fleet" },
    { name: "Custom WAF Firewall Rules & Rate Limit", t1: "Basic WAF", t2: "✓ Advanced Custom WAF", t3: "✓ Bespoke Security Profiles" },
    { name: "Bot Fight Mode & DDoS Shielding", t1: "Standard Shield", t2: "✓ Bot Fight Mode Armed", t3: "✓ Advanced Under-Attack SOP" },
    { name: "Edge Caching & Page/Cache Rules", t1: "Standard Caching", t2: "✓ Custom Cache Rules", t3: "✓ Dynamic CDN Optimization" },
    { name: "Terraform / IaC DNS Export", t1: "—", t2: "—", t3: "✓ Terraform HCL / Bind Export" },
    { name: "Support & Post-Migration Telemetry", t1: "7 Days", t2: "14 Days Dedicated", t3: "30 Days Dedicated SLA" },
  ];

  const faqs = [
    {
      q: "1. How does ChittorTech achieve zero downtime during a nameserver migration?",
      a: "Zero downtime is an engineering objective executed through a disciplined pre-propagation protocol: 48 hours before nameserver delegation, we lower the Time-to-Live (TTL) on all existing DNS records to 300 seconds (5 minutes). We then construct an identical mirror zone inside Cloudflare, auditing every single A, AAAA, CNAME, MX, TXT, SRV, and PTR record. When nameservers are delegated at your registrar, both old and new DNS servers resolve identical records simultaneously, ensuring continuous global resolution without a single dropped request.",
    },
    {
      q: "2. Why did my corporate email stop working when I turned on Cloudflare?",
      a: "This is the classic 'Orange Cloud' trap. Cloudflare's reverse proxy (Orange Cloud) is designed strictly for HTTP/HTTPS web traffic (ports 80 and 443). It does not proxy mail protocols like SMTP (port 25), Submission (port 587), IMAP, or POP3. If your MX record points to a proxied hostname (e.g. mail.yourdomain.com with an Orange Cloud), external mail servers cannot establish an SMTP handshake and immediately bounce emails with '550 Host Not Found' or 'Connection Refused'. ChittorTech ensures all MX, mail, autodiscover, and SPF/DKIM records are strictly 'Grey Clouded' (DNS-only) while safely proxying web assets.",
    },
    {
      q: "3. What is DNSSEC and why does my business need it?",
      a: "DNSSEC (Domain Name System Security Extensions) adds cryptographic digital signatures to your DNS records using public key cryptography. Without DNSSEC, attackers can execute DNS cache poisoning or man-in-the-middle (MitM) spoofing, redirecting your legitimate visitors or corporate email to fraudulent hacker servers. ChittorTech configures DS records at your registrar and validates RFC-compliant DNSSEC chains across global recursive resolvers.",
    },
    {
      q: "4. Do I have to transfer my domain registration to Cloudflare?",
      a: "No. You retain your domain registration at your current registrar (GoDaddy, Namecheap, Google Domains, AWS Route 53, Network Solutions, etc.). We only update the Authoritative Nameservers at your registrar to point to Cloudflare. You maintain full ownership, billing, and administrative control over your domain name.",
    },
    {
      q: "5. How does Anycast DNS make my website and web applications faster?",
      a: "Traditional registrar DNS uses Unicast, meaning every DNS lookup worldwide travels to a single physical data center, adding 150ms to 400ms of latency before the user's browser even downloads the first byte of your website. Cloudflare's Anycast DNS broadcasts your domain's IP address across 300+ cities in 100+ countries. Users resolve your DNS at the nearest internet exchange point in under 30 milliseconds, dramatically accelerating page load times and Core Web Vitals.",
    },
    {
      q: "6. Will my SSL/TLS certificates break during the migration?",
      a: "No. We audit your origin server's SSL certificate before touching nameservers. We configure Cloudflare's SSL/TLS encryption mode to 'Full (Strict)' to ensure end-to-end encryption between the visitor, Cloudflare edge, and your origin server, preventing the common 'Infinite Redirect Loop' (ERR_TOO_MANY_REDIRECTS) error.",
    },
    {
      q: "7. Do you need my master account passwords to configure Cloudflare?",
      a: "Never. Security is paramount. You can grant ChittorTech delegated administrator access via Cloudflare's Role-Based Access Control (RBAC) by inviting our engineering email, or we can conduct the entire migration over a live screen-shared session where you maintain 100% control over credentials.",
    },
    {
      q: "8. Can you manage multi-vendor email routing on the same domain?",
      a: "Yes. Many enterprise domains send human emails via Google Workspace or Microsoft 365, while simultaneously sending transactional invoices via AWS SES or SendGrid, and marketing campaigns via Klaviyo. We configure strict CNAME isolation, custom tracking domains, and aligned SPF/DKIM records in Cloudflare so multiple email vendors operate seamlessly without collision.",
    },
  ];

  return (
    <>
      <style>{`
        /* ChittorTech Enterprise DNS & Cloudflare Design System */
        .deliv-wrapper {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: #0f172a;
          background-color: #f8fafc;
          overflow-x: hidden !important;
          width: 100% !important;
          max-width: 100vw !important;
        }
        .deliv-hero {
          background: radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 10% 80%, rgba(37, 99, 235, 0.2) 0%, transparent 45%),
                      linear-gradient(135deg, #090d16 0%, #0f172a 50%, #1c1917 100%);
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
          color: #f97316;
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
          border-color: rgba(249, 115, 22, 0.35);
        }

        /* Hero Mockup Terminal */
        .dns-mockup-card {
          background: #0f172a;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #f8fafc;
          font-family: 'JetBrains Mono', monospace, ui-monospace;
        }
        .dns-status-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: 10px;
          margin-bottom: 8px;
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
          background: #fff7ed;
          color: #ea580c;
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
          border: 2px solid #ea580c;
          box-shadow: 0 16px 36px -10px rgba(234, 88, 12, 0.2);
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
          .dns-mockup-card {
            padding: 16px 14px !important;
            border-radius: 16px !important;
          }
          .dns-status-row {
            padding: 8px 10px !important;
            font-size: 0.76rem !important;
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
                  <i className="fa-solid fa-network-wired"></i> Enterprise DNS & Cloudflare Architecture
                </div>

                <h1 className="deliv-h1">
                  Speed Up Your Domain. Harden Your DNS. Never Drop An Email.
                </h1>

                <p className="deliv-hero-p">
                  Zero-downtime nameserver migrations, sub-30ms global Anycast DNS, DNSSEC cryptographic defenses,
                  and custom Cloudflare WAF firewall rules. ChittorTech configures strict Orange vs Grey Cloud routing
                  to ensure your corporate mail flows uninterrupted while web traffic accelerates globally.
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
                    WhatsApp ChittorTech: +91 75974 51057
                  </a>
                  <button
                    className="deliv-btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#trialModal"
                  >
                    <i className="fa-solid fa-calendar-check"></i>
                    Schedule DNS Migration
                  </button>
                </div>

                <div className="d-flex align-items-center gap-2 small mb-4" style={{ color: "#fdba74", fontSize: "0.85rem" }}>
                  <i className="fa-solid fa-globe"></i>
                  <span>Protecting digital infrastructure in USA · UK · UAE · Canada · Australia · India</span>
                </div>

                {/* 4 Technical Trust Badges */}
                <div className="row g-2">
                  <div className="col-sm-6">
                    <div className="trust-badge-card d-flex align-items-center gap-2">
                      <i className="fa-solid fa-bolt text-warning" style={{ color: "#f97316" }}></i>
                      <span className="small text-white fw-medium">&lt;30ms Anycast DNS Latency</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="trust-badge-card d-flex align-items-center gap-2">
                      <i className="fa-solid fa-arrows-split-up-and-left text-warning" style={{ color: "#f97316" }}></i>
                      <span className="small text-white fw-medium">Zero-Downtime Migration SOP</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="trust-badge-card d-flex align-items-center gap-2">
                      <i className="fa-solid fa-shield-halved text-warning" style={{ color: "#f97316" }}></i>
                      <span className="small text-white fw-medium">DNSSEC Cryptographic Defense</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="trust-badge-card d-flex align-items-center gap-2">
                      <i className="fa-solid fa-cloud text-warning" style={{ color: "#f97316" }}></i>
                      <span className="small text-white fw-medium">Cloudflare Certified Architecture</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* DNS Telemetry Mockup */}
              <div className="col-lg-5">
                <div className="dns-mockup-card">
                  <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom border-secondary border-opacity-25 gap-2">
                    <div className="d-flex align-items-center gap-2" style={{ minWidth: 0 }}>
                      <span className="badge bg-warning text-dark flex-shrink-0" style={{ fontSize: "0.7rem" }}>CLOUDFLARE EDGE</span>
                      <span className="small text-light text-truncate" style={{ fontSize: "0.8rem" }}>
                        authoritative.ns.cloudflare.com
                      </span>
                    </div>
                    <span className="badge bg-success-subtle text-success flex-shrink-0" style={{ fontSize: "0.7rem" }}>
                      ● 100% Uptime
                    </span>
                  </div>

                  <div className="dns-status-row">
                    <span className="text-secondary">Anycast Latency:</span>
                    <span className="text-success fw-bold">14ms (300+ Edge Nodes)</span>
                  </div>

                  <div className="dns-status-row">
                    <span className="text-secondary">DNSSEC Validation:</span>
                    <span className="text-info fw-bold">Active (ECDSA Curve-256)</span>
                  </div>

                  <div className="dns-status-row">
                    <span className="text-secondary">Web Proxy (A / CNAME):</span>
                    <span className="text-warning fw-bold">🟠 Proxied (WAF Armed)</span>
                  </div>

                  <div className="dns-status-row">
                    <span className="text-secondary">Email Routing (MX / SMTP):</span>
                    <span className="text-light fw-bold">⚪ DNS Only (Grey Cloud)</span>
                  </div>

                  <div className="dns-status-row">
                    <span className="text-secondary">DDoS Mitigation:</span>
                    <span className="text-success fw-bold">Unmetered L3/L4/L7 Active</span>
                  </div>

                  <div className="mt-3 py-2 px-3 rounded-3 bg-dark border border-secondary border-opacity-25 text-center text-secondary" style={{ fontSize: "0.72rem", lineHeight: "1.4" }}>
                    <i className="fa-solid fa-circle-check text-success me-1"></i>
                    <span>Staged Dual-Resolution · Zero Dropped Packets During Migration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. WHY DNS ARCHITECTURE IS YOUR DIGITAL FOUNDATION ─── */}
        <section className="py-5 bg-white border-bottom">
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem", color: "#ea580c !important" }}>
                Mission-Critical Infrastructure
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                When DNS Fails, Your Entire Business Goes Dark
              </h2>
              <p className="text-muted">
                DNS is the central nervous system of your digital presence. If your nameservers lag, crash, or misroute records,
                your websites, web apps, APIs, customer portals, and corporate emails fail simultaneously.
              </p>
            </div>

            {/* The Dangerous Orange Cloud Trap Callout */}
            <div className="p-4 rounded-4 mb-5 border border-danger-subtle" style={{ background: "#fff5f5" }}>
              <div className="d-flex align-items-start gap-3">
                <div className="p-3 rounded-3 bg-danger text-white fs-4 flex-shrink-0">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                </div>
                <div>
                  <h4 className="fw-bold text-danger mb-2" style={{ fontSize: "1.25rem" }}>
                    The Dangerous "Orange Cloud" Trap: Why Naive Cloudflare Setups Break Business Email
                  </h4>
                  <p className="text-dark small mb-2" style={{ lineHeight: "1.6" }}>
                    Cloudflare’s iconic <strong>Orange Cloud</strong> reverse proxy is engineered exclusively for HTTP/HTTPS web traffic on ports 80 and 443.
                    It does not proxy email protocols such as <strong>SMTP (port 25)</strong>, <strong>Submission (port 587)</strong>, IMAP, or POP3.
                  </p>
                  <p className="text-muted small mb-0" style={{ lineHeight: "1.6" }}>
                    When inexperienced teams enable Cloudflare proxy on hostnames tied to MX records (e.g. <code>mail.yourbrand.com</code>),
                    external mail servers attempting to deliver mail cannot perform an SMTP handshake. Messages bounce immediately with fatal
                    errors like <code>550 Host Not Found</code> or <code>Connection Refused</code>. ChittorTech strictly isolates web traffic into
                    Orange Cloud while keeping corporate mail flow in authoritative <strong>Grey Cloud (DNS Only)</strong> mode.
                  </p>
                </div>
              </div>
            </div>

            {/* Unicast vs Anycast Latency & DNSSEC Comparison Table */}
            <div className="d-none d-md-block deliv-table-wrap mb-4">
              <div className="p-3 bg-light border-bottom fw-bold text-dark d-flex justify-content-between align-items-center">
                <span>Technical Benchmark: Default Registrar DNS vs Enterprise Cloudflare Managed DNS</span>
                <span className="badge" style={{ backgroundColor: "#ea580c" }}>Anycast Architecture</span>
              </div>
              <div className="table-responsive">
                <table className="deliv-table">
                  <thead>
                    <tr>
                      <th style={{ width: "26%" }}>Technical Capability</th>
                      <th style={{ width: "37%" }}>Default Registrar DNS (GoDaddy / Namecheap)</th>
                      <th style={{ width: "37%" }}>Enterprise Cloudflare Managed DNS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dnsComparison.map((row, idx) => (
                      <tr key={idx}>
                        <td><strong>{row.feature}</strong></td>
                        <td className="text-muted">{row.registrar}</td>
                        <td className="fw-bold" style={{ color: "#ea580c" }}>{row.cloudflare}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile View of DNS Comparison */}
            <div className="d-block d-md-none mb-4">
              <div className="p-3 bg-light border rounded-3 mb-3 fw-bold text-dark text-center" style={{ fontSize: "0.9rem" }}>
                Registrar DNS vs Cloudflare Managed DNS
              </div>
              {dnsComparison.map((row, idx) => (
                <div key={idx} className="deliv-mobile-card mb-3 p-3">
                  <div className="fw-bold text-dark mb-2 pb-2 border-bottom" style={{ fontSize: "0.92rem" }}>
                    {row.feature}
                  </div>
                  <div className="d-flex flex-column gap-2" style={{ fontSize: "0.82rem" }}>
                    <div className="p-2 rounded bg-light border">
                      <span className="text-muted fw-bold">Default Registrar:</span>
                      <div className="text-secondary mt-1">{row.registrar}</div>
                    </div>
                    <div className="p-2 rounded border" style={{ backgroundColor: "#fff7ed", borderColor: "#fed7aa" }}>
                      <span className="fw-bold" style={{ color: "#ea580c" }}>Cloudflare Managed:</span>
                      <div className="fw-semibold mt-1" style={{ color: "#9a3412" }}>{row.cloudflare}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 3. OUR CLOUDFLARE & DNS CAPABILITIES ─── */}
        <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem", color: "#ea580c !important" }}>
                Full-Stack DNS Engineering
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Core Capabilities & Security Hardening
              </h2>
              <p className="text-muted">
                From sub-second failovers to cryptographic DNSSEC chains, we build an impenetrable DNS perimeter around your enterprise domain.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-arrows-rotate"></i>
                  </div>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Zero-Downtime Migration</h5>
                  <p className="text-muted small mb-0">
                    We execute staged dual-resolution migrations. Pre-lowered TTLs and complete dependency audits ensure your users
                    and corporate mail never experience a single second of dropped traffic.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>DNSSEC Cryptographic Signing</h5>
                  <p className="text-muted small mb-0">
                    We deploy RFC 4034 compliant DNSSEC with automated ECDSA Curve-256 keys, protecting your brand from DNS cache poisoning,
                    forged records, and man-in-the-middle hijacking.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-fire-burner"></i>
                  </div>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>WAF & DDoS Shielding</h5>
                  <p className="text-muted small mb-0">
                    We configure custom Cloudflare Web Application Firewall rules, rate-limiting policies, and automated bot defenses
                    to filter malicious scrapers, vulnerability scanners, and volumetric attacks.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-envelope-circle-check"></i>
                  </div>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Multi-Vendor Email Routing</h5>
                  <p className="text-muted small mb-0">
                    We isolate MX, SPF, DKIM, and DMARC records across Google Workspace, Microsoft 365, AWS SES, and SendGrid,
                    preventing reverse proxy collisions and preserving 100% deliverability.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-gauge-high"></i>
                  </div>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Edge Caching & Cache Rules</h5>
                  <p className="text-muted small mb-0">
                    We tune Cloudflare Cache Rules, Browser Cache TTLs, and compression (Brotli) to offload 70%+ of static asset
                    requests to Cloudflare edge nodes, slashing origin server hosting costs.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-lock"></i>
                  </div>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>SSL/TLS Full (Strict) Architecture</h5>
                  <p className="text-muted small mb-0">
                    We configure end-to-end SSL/TLS encryption between the visitor, Cloudflare Edge, and your origin server,
                    eliminating downgrade attacks and preventing <code>ERR_TOO_MANY_REDIRECTS</code> loops.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. STEP-BY-STEP ZERO-DOWNTIME DNS MIGRATION ROADMAP ─── */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem", color: "#ea580c !important" }}>
                Disciplined Engineering Workflow
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Our 6-Step Zero-Downtime Migration Protocol
              </h2>
              <p className="text-muted">
                DNS changes carry zero room for guesswork. We execute every migration using our battle-tested, pre-staged protocol.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="deliv-card border-top border-4 border-warning">
                  <span className="badge bg-warning text-dark mb-2">STEP 1</span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Authoritative Zone Audit</h5>
                  <p className="text-muted small mb-0">
                    We perform an exhaustive audit of your active DNS table. Every A, AAAA, CNAME, MX, TXT, SRV, and PTR record
                    is inventoried, cataloged, and cross-referenced with your hosting and email providers.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card border-top border-4 border-primary">
                  <span className="badge bg-primary text-white mb-2">STEP 2</span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Pre-Migration TTL Reduction</h5>
                  <p className="text-muted small mb-0">
                    48 hours prior to cutover, we lower all record TTLs to 300 seconds (5 minutes). This flushes stale global recursive
                    resolver caches, ensuring near-instant propagation when new nameservers are assigned.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card border-top border-4 border-success">
                  <span className="badge bg-success text-white mb-2">STEP 3</span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Cloudflare Mirror Zone Staging</h5>
                  <p className="text-muted small mb-0">
                    We mirror all records into Cloudflare with mathematical exactness. We apply strict Orange Cloud (proxied) to web endpoints
                    and Grey Cloud (DNS only) to mail, autodiscover, and SSH services.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card border-top border-4 border-info">
                  <span className="badge bg-info text-dark mb-2">STEP 4</span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Nameserver Delegation</h5>
                  <p className="text-muted small mb-0">
                    We delegate Authoritative Nameservers at your domain registrar (GoDaddy, Namecheap, AWS, etc.). This can be done via
                    delegated administrator access or over a live screen-share session.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card border-top border-4 border-dark">
                  <span className="badge bg-dark text-white mb-2">STEP 5</span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Global Propagation Telemetry</h5>
                  <p className="text-muted small mb-0">
                    We track live DNS propagation across 50+ recursive resolvers globally (Google 8.8.8.8, Cloudflare 1.1.1.1, OpenDNS,
                    Quad9) to ensure uninterrupted resolution from all continents.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card border-top border-4 border-danger">
                  <span className="badge bg-danger text-white mb-2">STEP 6</span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Post-Migration Handshake Audit</h5>
                  <p className="text-muted small mb-0">
                    We run live SMTP handshake verifications, SSL certificate handshake tests, WAF rule validation, and DNSSEC chain
                    authentication to certify your infrastructure is 100% operational.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. SUPPORTED REGISTRARS & CLOUD ECOSYSTEMS ─── */}
        <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem", color: "#ea580c !important" }}>
                Universal Compatibility
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Supported Domain Registrars & Cloud Providers
              </h2>
              <p className="text-muted">
                We manage DNS migrations and Cloudflare architecture across every major global registrar, cloud hyperscaler, and hosting provider.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="p-4 bg-white rounded-3 border h-100">
                  <h5 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>
                    <i className="fa-solid fa-globe text-primary me-2"></i> Domain Registrars
                  </h5>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.9rem", color: "#475569" }}>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> GoDaddy & Wild West Domains</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Namecheap & Porkbun</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Google Domains / Squarespace</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Hostinger, Bluehost & SiteGround</li>
                    <li><i className="fa-solid fa-check text-success me-2"></i> Network Solutions & Enom</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div className="p-4 bg-white rounded-3 border h-100">
                  <h5 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>
                    <i className="fa-solid fa-cloud text-warning me-2" style={{ color: "#f97316 !important" }}></i> Cloud & Hyperscalers
                  </h5>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.9rem", color: "#475569" }}>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Cloudflare Enterprise & Pro Zones</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> AWS Route 53 & CloudFront</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Google Cloud DNS & Firebase</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Microsoft Azure DNS</li>
                    <li><i className="fa-solid fa-check text-success me-2"></i> DigitalOcean & Vultr DNS</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div className="p-4 bg-white rounded-3 border h-100">
                  <h5 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>
                    <i className="fa-solid fa-envelope text-info me-2"></i> Business Email Ecosystems
                  </h5>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.9rem", color: "#475569" }}>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Google Workspace (Gmail for Business)</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Microsoft 365 & Exchange Online</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Amazon Simple Email Service (SES)</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> SendGrid, Mailgun & Postmark</li>
                    <li><i className="fa-solid fa-check text-success me-2"></i> Zoho Mail & Custom cPanel Webmail</li>
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
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem", color: "#ea580c !important" }}>
                Predictable Fixed Pricing
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Enterprise DNS & Cloudflare Packages
              </h2>
              <p className="text-muted">
                Fixed flat-rate engineering fees with transparent deliverables. Choose the package tailored to your infrastructure requirements.
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
                    ? "Fixed flat-rate pricing for US, UK, UAE, Canada & Global enterprises"
                    : "Domestic pricing with Indian business GST invoicing available"}
                </div>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="row g-4 align-items-stretch mb-5">
              {/* Tier 1: Essential DNS Audit & Cloudflare Setup */}
              <div className="col-lg-4">
                <div className="price-card">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-light text-secondary border px-2 py-1" style={{ fontSize: "0.72rem" }}>
                      Tier 1 Essential
                    </span>
                    <span className="badge bg-light text-secondary border px-2 py-1" style={{ fontSize: "0.72rem" }}>
                      Single Domain
                    </span>
                  </div>
                  <h4 className="fw-bold mb-2 text-dark" style={{ fontSize: "1.3rem" }}>
                    Essential DNS Audit & Setup
                  </h4>
                  <p className="text-muted small mb-3">
                    For businesses moving to Cloudflare or fixing broken email routing caused by proxy misconfigurations.
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
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2" style={{ color: "#ea580c !important" }}></i> Full authoritative DNS zone inventory & audit</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2" style={{ color: "#ea580c !important" }}></i> Zero-downtime Cloudflare nameserver migration</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2" style={{ color: "#ea580c !important" }}></i> Orange Cloud vs Grey Cloud mail flow isolation</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2" style={{ color: "#ea580c !important" }}></i> Google Workspace / M365 mail record preservation</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2" style={{ color: "#ea580c !important" }}></i> Basic WAF security rules activation</li>
                      <li><i className="fa-solid fa-circle-check text-primary me-2" style={{ color: "#ea580c !important" }}></i> 7-Day post-migration monitoring & support</li>
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/917597451057?text=Hi%20ChittorTech%2C%20I%20want%20to%20order%20the%20Essential%20DNS%20Audit%20%26%20Cloudflare%20Setup%20package%20(${currency === "USD" ? "$79" : "₹5,999"}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark w-100 fw-bold py-2 rounded-3 mt-auto"
                  >
                    Start DNS Setup — WhatsApp
                  </a>
                </div>
              </div>

              {/* Tier 2: Complete Cloudflare Security & Speed Suite (Featured) */}
              <div className="col-lg-4">
                <div className="price-card featured">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge" style={{ background: "linear-gradient(135deg, #ea580c, #c2410c)", color: "#fff", fontSize: "0.72rem", padding: "4px 10px", borderRadius: "9999px" }}>
                      ★ Recommended
                    </span>
                    <span className="badge" style={{ backgroundColor: "#ffedd5", color: "#9a3412", border: "1px solid #fed7aa", fontSize: "0.72rem", fontWeight: 700, padding: "4px 10px", borderRadius: "6px" }}>
                      Single Domain
                    </span>
                  </div>
                  <h4 className="fw-bold mb-2" style={{ fontSize: "1.3rem", color: "#ea580c" }}>
                    Complete Cloudflare Security Suite
                  </h4>
                  <p className="text-muted small mb-3">
                    Full zero-downtime migration, DNSSEC, custom WAF rules, edge caching, bot fight mode, and SSL Full (Strict).
                  </p>

                  <div className="p-3 rounded-3 border mb-3" style={{ backgroundColor: "#fff7ed", borderColor: "#fed7aa" }}>
                    <div className="d-flex align-items-baseline gap-1">
                      <span style={{ fontSize: "2rem", fontWeight: 900, color: "#c2410c", lineHeight: 1 }}>
                        {currency === "USD" ? "$149" : "₹11,999"}
                      </span>
                      <span className="text-muted small fw-medium">/ domain</span>
                    </div>
                    <div className="small fw-semibold mt-1" style={{ color: "#ea580c" }}>
                      <i className="fa-solid fa-shield-halved me-1"></i> Full DNSSEC & WAF Defense Suite
                    </div>
                  </div>

                  <div className="flex-grow-1 mb-4">
                    <div className="fw-bold small text-uppercase mb-2" style={{ fontSize: "0.72rem", letterSpacing: "0.5px", color: "#ea580c" }}>
                      Everything in Tier 1, Plus:
                    </div>
                    <ul className="list-unstyled mb-0" style={{ fontSize: "0.85rem", color: "#334155" }}>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> DNSSEC cryptographic signing at registrar (DS record)</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> Custom WAF firewall rules & Rate Limiting</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> Cloudflare Bot Fight Mode & DDoS tuning</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> Edge Caching & Page/Cache Rules configuration</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> SSL/TLS Full (Strict) origin verification</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> Multi-provider transactional email routing</li>
                      <li><i className="fa-solid fa-circle-check text-success me-2"></i> 14-Day dedicated implementation support</li>
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/917597451057?text=Hi%20ChittorTech%2C%20I%20want%20to%20order%20the%20Complete%20Cloudflare%20Security%20Suite%20(${currency === "USD" ? "$149" : "₹11,999"}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-100 fw-bold py-2 rounded-3 mt-auto shadow-sm text-white"
                    style={{ backgroundColor: "#ea580c" }}
                  >
                    Deploy Cloudflare Security Suite
                  </a>
                </div>
              </div>

              {/* Tier 3: Enterprise Multi-Domain / Agency Fleet */}
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
                    Multi-Domain / Agency Fleet
                  </h4>
                  <p className="text-muted small mb-3">
                    Multi-domain portfolio architecture, Terraform / IaC DNS export, custom security profiles, and agency client SOPs.
                  </p>

                  <div className="p-3 rounded-3 bg-light mb-3 border">
                    <div className="d-flex align-items-baseline gap-1">
                      <span style={{ fontSize: "2rem", fontWeight: 900, color: "#0f172a", lineHeight: 1 }}>
                        {currency === "USD" ? "$349+" : "₹27,999+"}
                      </span>
                      <span className="text-muted small fw-medium">/ 5 domains</span>
                    </div>
                    <div className="small fw-semibold text-primary mt-1">
                      <i className="fa-solid fa-layer-group me-1"></i> Multi-Zone Infrastructure Portfolio
                    </div>
                  </div>

                  <div className="flex-grow-1 mb-4">
                    <div className="fw-bold small text-uppercase text-secondary mb-2" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                      Enterprise Scope:
                    </div>
                    <ul className="list-unstyled mb-0" style={{ fontSize: "0.85rem", color: "#334155" }}>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2" style={{ color: "#ea580c !important" }}></i> Up to 5 domains migrated simultaneously</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2" style={{ color: "#ea580c !important" }}></i> Terraform HCL / Bind zone configuration export</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2" style={{ color: "#ea580c !important" }}></i> DNSSEC configuration across entire portfolio</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2" style={{ color: "#ea580c !important" }}></i> Advanced Under-Attack SOP & automated mitigations</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2" style={{ color: "#ea580c !important" }}></i> Agency deployment checklists & client handoff SOPs</li>
                      <li><i className="fa-solid fa-circle-check text-primary me-2" style={{ color: "#ea580c !important" }}></i> 30-Day dedicated implementation SLA support</li>
                    </ul>
                  </div>

                  <button
                    className="btn btn-outline-dark w-100 fw-bold py-2 rounded-3 mt-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#trialModal"
                    style={{ whiteSpace: "normal", fontSize: "0.92rem", minHeight: "44px" }}
                  >
                    Request Enterprise Fleet Scope
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
                      <th className="text-center" style={{ width: "20%" }}>{currency === "USD" ? "$79 (Essential)" : "₹5,999"}</th>
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
                        <td className="text-center fw-bold" style={{ color: "#ea580c" }}>
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
                <i className="fa-solid fa-list-check text-warning me-2" style={{ color: "#ea580c !important" }}></i> Capability & Deliverable Matrix
              </div>
              {packageCapabilities.map((row, idx) => (
                <div key={idx} className="deliv-mobile-card mb-3 p-3 shadow-sm border">
                  <div className="fw-bold text-dark mb-3 pb-2 border-bottom" style={{ fontSize: "0.98rem" }}>
                    {row.name}
                  </div>
                  <div className="d-flex flex-column gap-2">
                    {/* Tier 1: Essential */}
                    <div className="p-2 px-3 rounded bg-light border">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="badge bg-secondary-subtle text-secondary" style={{ fontSize: "0.7rem" }}>Essential</span>
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

                    {/* Tier 2: Suite (Featured) */}
                    <div className="p-2 px-3 rounded border" style={{ backgroundColor: "#fff7ed", borderColor: "#fed7aa" }}>
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="badge text-white" style={{ backgroundColor: "#ea580c", fontSize: "0.7rem" }}>Suite ★ Recommended</span>
                        <span className="fw-bold" style={{ color: "#c2410c", fontSize: "0.75rem" }}>{currency === "USD" ? "$149" : "₹11,999"}</span>
                      </div>
                      <div style={{ fontSize: "0.88rem" }}>
                        {row.t2 === "—" ? (
                          <span className="text-muted"><i className="fa-solid fa-minus text-secondary me-1"></i> Not Included</span>
                        ) : (
                          <span className="fw-bold" style={{ color: "#9a3412" }}>{row.t2}</span>
                        )}
                      </div>
                    </div>

                    {/* Tier 3: Fleet */}
                    <div className="p-2 px-3 rounded bg-dark text-white border border-dark">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="badge bg-white text-dark" style={{ fontSize: "0.7rem" }}>Enterprise Fleet</span>
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
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem", color: "#ea580c !important" }}>
                Deep Technical Guidance
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Frequently Asked DNS & Cloudflare Questions
              </h2>
              <p className="text-muted">
                Authoritative engineering answers on nameserver migrations, DNSSEC cryptography, and proxy configurations.
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
                        style={{ borderColor: isOpen ? "#ea580c" : "#e2e8f0" }}
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
                              background: isOpen ? "#fff7ed" : "#f1f5f9",
                              color: isOpen ? "#ea580c" : "#64748b",
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
            background: "linear-gradient(135deg, #090d16 0%, #1c1917 50%, #c2410c 100%)",
            overflow: "hidden",
          }}
        >
          <div className="container py-5 text-center position-relative" style={{ zIndex: 2 }}>
            <span className="badge text-uppercase px-3 py-2 fw-bold mb-3 cta-badge" style={{ backgroundColor: "#ea580c", color: "#fff" }}>
              Accelerate and Fortify Your Global DNS
            </span>
            <h2 className="fw-bold mb-3 text-white cta-h2" style={{ fontSize: "2.8rem" }}>
              Don't Wait for an Outage or DDoS Attack to Modernize Your DNS.
            </h2>
            <p className="lead mx-auto mb-4" style={{ maxWidth: "700px", color: "#cbd5e1", fontSize: "1.05rem" }}>
              Your domain deserves sub-30ms global resolution, zero-downtime migrations, and complete immunity from DNS hijacking.
              ChittorTech executes your Cloudflare deployment with absolute engineering rigor.
            </p>

            <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="deliv-btn-wa"
              >
                <i className="fa-brands fa-whatsapp" style={{ fontSize: "1.3rem" }}></i>
                WhatsApp ChittorTech (+91 75974 51057)
              </a>
              <button
                className="deliv-btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#trialModal"
              >
                <i className="fa-solid fa-calendar-check"></i>
                Schedule Zero-Downtime Migration
              </button>
            </div>

            <div className="small" style={{ color: "#fdba74" }}>
              <i className="fa-solid fa-lock me-1"></i> No master account passwords shared · Delegated access or screen-shared setup · 100% Confidential
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
