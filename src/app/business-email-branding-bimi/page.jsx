"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function BimiSetupPage() {
  const [currency, setCurrency] = useState("USD"); // "USD" | "INR"
  const [openFaq, setOpenFaq] = useState(0);

  const whatsappUrl =
    "https://wa.me/917597451057?text=Hi%20ChittorTech%2C%20I%20want%20to%20implement%20BIMI%20and%20verified%20email%20branding%20for%20my%20domain.";

  const providerComparison = [
    {
      provider: "Google Workspace / Gmail",
      bimiSupport: "Full Support",
      dmarcRequirement: "p=quarantine (pct=100) or p=reject",
      vmcRequirement: "Mandatory for Blue Checkmark",
      visualTreatment: "Official Verified Blue Checkmark + Brand Logo in Web & Mobile app",
    },
    {
      provider: "Apple Mail (iOS 16+ / macOS)",
      bimiSupport: "Full Support",
      dmarcRequirement: "p=quarantine (pct=100) or p=reject",
      vmcRequirement: "Required (VMC or CMC)",
      visualTreatment: "Authenticated Brand Logo in Email Header banner (Digitally Certified)",
    },
    {
      provider: "Yahoo Mail",
      bimiSupport: "Full Support",
      dmarcRequirement: "p=quarantine or p=reject",
      vmcRequirement: "Optional (Supports Non-VMC with reputation)",
      visualTreatment: "Brand Logo displayed in Inbox list & message view",
    },
    {
      provider: "Fastmail",
      bimiSupport: "Full Support",
      dmarcRequirement: "p=quarantine or p=reject",
      vmcRequirement: "Supported (VMC preferred)",
      visualTreatment: "Brand Logo displayed across web and mobile clients",
    },
  ];

  const packageCapabilities = [
    { name: "Domain Scope", t1: "Single Domain", t2: "Single Domain", t3: "Multi-Domain Fleet" },
    { name: "BIMI Readiness & DMARC Audit", t1: "✓ Prerequisite Check", t2: "✓ Full Alignment Audit", t3: "✓ Multi-Domain Fleet Audit" },
    { name: "SVG Tiny-PS Vector Conversion", t1: "✓ Included", t2: "✓ RFC Compliant Tiny-PS", t3: "✓ Multiple Sub-Brand Assets" },
    { name: "BIMI DNS Record Generation", t1: "✓ Standard Record", t2: "✓ Selector + Cert Path", t3: "✓ Sub-Brand Selector Fleet" },
    { name: "Secure HTTPS Hosting Guidance", t1: "✓ Configuration Guide", t2: "✓ Full Verification", t3: "✓ Multi-Domain CDN SOP" },
    { name: "VMC / CMC Certificate Coordination", t1: "—", t2: "✓ DigiCert / Entrust Setup", t3: "✓ Complete CA Portfolio Fleet" },
    { name: "Gmail Blue Checkmark Readiness", t1: "—", t2: "✓ Postmaster & Cert Audit", t3: "✓ Full Group Fleet Readiness" },
    { name: "Apple Mail & Yahoo Verification", t1: "—", t2: "✓ Multi-Client Testing", t3: "✓ Multi-Brand Inbox Matrix" },
    { name: "Trademark Portfolio Jurisdiction Review", t1: "—", t2: "✓ 1 Trademark Mapping", t3: "✓ Multi-Jurisdiction Fleet" },
    { name: "Implementation Warranty & Support", t1: "7 Days", t2: "14 Days", t3: "30 Days Dedicated" },
  ];

  const faqs = [
    {
      q: "1. Do I need a registered trademark to use BIMI?",
      a: "Not necessarily for every email provider. A brand can deploy non-certificate BIMI for mailbox providers like Yahoo Mail that support logo display without a certificate. However, to display the official Gmail verified blue checkmark and receive Apple Mail digital certification, a qualifying certificate (VMC or CMC) issued by DigiCert or Entrust based on a verified registered trademark is mandatory.",
    },
    {
      q: "2. How much does a VMC (Verified Mark Certificate) cost?",
      a: "VMC certificate fees are set and billed directly by Certificate Authorities (DigiCert or Entrust), typically ranging from $1,200 to $1,500/year per trademark. ChittorTech's fee covers technical SVG Tiny-PS conversion, DMARC enforcement auditing, DNS architecture, and CA coordination. Certificate authority fees are separate unless explicitly bundled.",
    },
    {
      q: "3. Why does my SVG fail BIMI validation even though it works on my website?",
      a: "BIMI strictly requires the SVG Tiny-PS (Portable/Secure) specification. Standard website SVGs contain external CSS, JavaScript, embedded raster URLs, unsupported namespaces, or complex Illustrator metadata, all of which are rejected by BIMI validators. ChittorTech manually strips all disallowed code, formats viewBox coordinates, embeds graphics as base64, and validates compliance against BIMI standards.",
    },
    {
      q: "4. Does Apple Mail give me the same blue checkmark as Gmail?",
      a: "No. While both Google and Apple use BIMI specifications, each mailbox provider determines its own visual UI. Gmail displays the official blue checkmark badge next to the sender's name for qualifying VMC/CMC senders, whereas Apple Mail displays the authenticated logo inside the email header with 'Digitally Certified' status, without a blue checkmark badge.",
    },
    {
      q: "5. What happens if my DMARC policy drops back to p=none?",
      a: "BIMI enforcement is inextricably linked to active DMARC protection. If your domain drops from p=reject or p=quarantine back to p=none, participating mailbox providers will immediately stop displaying your logo and revoke verified checkmark treatment.",
    },
    {
      q: "6. Can I use any image URL in my BIMI DNS record?",
      a: "No. The logo file must meet exact SVG Tiny-PS criteria, be hosted over HTTPS on a secure TLS server, return HTTP 200 without authentication barriers, and use the correct MIME type (image/svg+xml). ChittorTech audits the complete web server delivery pipeline before publishing the DNS record.",
    },
    {
      q: "7. Do I need both VMC and CMC together?",
      a: "No. They are distinct certificate pathways. A Verified Mark Certificate (VMC) is designed for registered trademarks, while a Common Mark Certificate (CMC) provides an alternative pathway for qualifying non-registered marks accepted by participating providers. We evaluate your intellectual property standing to recommend the optimal route.",
    },
    {
      q: "8. Does BIMI completely prevent phishing and domain spoofing?",
      a: "BIMI provides a powerful visual trust indicator that differentiates your legitimate emails from impostors. However, it does not stop lookalike domains (e.g. yourbrand-security.com) or compromised employee mailboxes. This is why BIMI must always be paired with strict SPF, DKIM, and DMARC enforcement.",
    },
  ];

  return (
    <>
      <style>{`
        /* ChittorTech BIMI & Verified Email Branding Design System */
        .deliv-wrapper {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: #0f172a;
          background-color: #f8fafc;
          overflow-x: hidden !important;
          width: 100% !important;
          max-width: 100vw !important;
        }
        .deliv-hero {
          background: radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.18) 0%, transparent 50%),
                      radial-gradient(circle at 10% 80%, rgba(37, 99, 235, 0.2) 0%, transparent 45%),
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
          color: #38bdf8;
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

        /* Hero Trust Badges Grid */
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
          border-color: rgba(56, 189, 248, 0.3);
        }

        /* Visual Transformation Card */
        .visual-mockup-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #0f172a;
        }
        .inbox-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 16px;
          border-radius: 12px;
          margin-bottom: 12px;
          transition: all 0.2s ease;
        }
        .inbox-row-generic {
          background: #f1f5f9;
          border: 1px dashed #cbd5e1;
        }
        .inbox-row-verified {
          background: #eff6ff;
          border: 1.5px solid #93c5fd;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.08);
        }
        .avatar-generic {
          width: 44px;
          height: 44px;
          min-width: 44px;
          border-radius: 50%;
          background: #94a3b8;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        .avatar-bimi {
          width: 44px;
          height: 44px;
          min-width: 44px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          color: #2563eb;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.2);
          flex-shrink: 0;
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
          background: #eff6ff;
          color: #0284c7;
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
          border: 2px solid #0284c7;
          box-shadow: 0 16px 36px -10px rgba(2, 132, 199, 0.16);
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
          .visual-mockup-card {
            padding: 16px 14px !important;
            border-radius: 16px !important;
          }
          .inbox-row {
            padding: 10px 12px !important;
            gap: 10px !important;
            margin-bottom: 10px !important;
          }
          .avatar-generic, .avatar-bimi {
            width: 36px !important;
            height: 36px !important;
            min-width: 36px !important;
            font-size: 0.92rem !important;
          }
          .bimi-step-card {
            padding: 10px 4px !important;
          }
          .bimi-step-card h6 {
            font-size: 0.8rem !important;
            margin-bottom: 2px !important;
          }
          .bimi-step-card small {
            font-size: 0.65rem !important;
            line-height: 1.2 !important;
            display: block !important;
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
                  <i className="fa-solid fa-certificate"></i> Verified Inbox Brand Identity
                </div>

                <h1 className="deliv-h1">
                  Make Your Brand Impossible to Ignore in the Inbox.
                </h1>

                <p className="deliv-hero-p">
                  Put your verified brand logo — and eligible Gmail blue checkmark — next to every outbound email.
                  ChittorTech implements BIMI, prepares RFC-compliant SVG Tiny-PS artwork, validates DMARC enforcement,
                  and coordinates VMC / CMC certificate requirements across Google Workspace, Apple Mail, and Yahoo.
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
                    Book BIMI Consultation
                  </button>
                </div>

                <div className="d-flex align-items-center gap-2 text-cyan-300 small mb-4" style={{ color: "#7dd3fc", fontSize: "0.85rem" }}>
                  <i className="fa-solid fa-globe"></i>
                  <span>Serving verified brands in USA · UK · UAE · Canada · Australia · India</span>
                </div>

                {/* 4 Technical Trust Badges */}
                <div className="row g-2">
                  <div className="col-sm-6">
                    <div className="trust-badge-card d-flex align-items-center gap-2">
                      <i className="fa-solid fa-circle-check text-cyan-400" style={{ color: "#38bdf8" }}></i>
                      <span className="small text-white fw-medium">Gmail Verified-Brand Ready</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="trust-badge-card d-flex align-items-center gap-2">
                      <i className="fa-solid fa-file-code text-cyan-400" style={{ color: "#38bdf8" }}></i>
                      <span className="small text-white fw-medium">RFC-Compliant SVG Tiny-PS</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="trust-badge-card d-flex align-items-center gap-2">
                      <i className="fa-solid fa-stamp text-cyan-400" style={{ color: "#38bdf8" }}></i>
                      <span className="small text-white fw-medium">DigiCert / Entrust VMC Guidance</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="trust-badge-card d-flex align-items-center gap-2">
                      <i className="fa-brands fa-apple text-cyan-400" style={{ color: "#38bdf8" }}></i>
                      <span className="small text-white fw-medium">Apple Mail + Yahoo BIMI Support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Transformation Mockup */}
              <div className="col-lg-5">
                <div className="visual-mockup-card">
                  <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom gap-2">
                    <div className="d-flex align-items-center gap-2" style={{ minWidth: 0 }}>
                      <i className="fa-solid fa-inbox text-primary flex-shrink-0"></i>
                      <span className="fw-bold small text-dark text-truncate" style={{ fontSize: "0.82rem", letterSpacing: "0.02em" }}>
                        Inbox Visual Transformation
                      </span>
                    </div>
                    <span className="badge bg-primary-subtle text-primary flex-shrink-0" style={{ fontSize: "0.72rem" }}>
                      BIMI Active
                    </span>
                  </div>

                  {/* Before: Generic */}
                  <div className="text-muted small fw-bold mb-1 text-uppercase" style={{ fontSize: "0.68rem" }}>
                    Without BIMI (Default State):
                  </div>
                  <div className="inbox-row inbox-row-generic">
                    <div className="avatar-generic">
                      <i className="fa-regular fa-user"></i>
                    </div>
                    <div className="flex-grow-1" style={{ minWidth: 0 }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-semibold text-secondary small text-truncate">John Doe</span>
                        <span className="text-muted flex-shrink-0 ms-2" style={{ fontSize: "0.7rem", whiteSpace: "nowrap" }}>10:42 AM</span>
                      </div>
                      <div className="text-muted small text-truncate" style={{ fontSize: "0.76rem" }}>
                        Q3 Financial Statement & Enterprise Invoices...
                      </div>
                    </div>
                  </div>

                  {/* Transformation Arrow */}
                  <div className="text-center my-2 text-primary">
                    <i className="fa-solid fa-arrow-down-long"></i>
                  </div>

                  {/* After: Verified BIMI */}
                  <div className="text-primary small fw-bold mb-1 text-uppercase" style={{ fontSize: "0.68rem" }}>
                    With ChittorTech BIMI + Gmail Checkmark:
                  </div>
                  <div className="inbox-row inbox-row-verified">
                    <div className="avatar-bimi">
                      <i className="fa-solid fa-shield-halved"></i>
                    </div>
                    <div className="flex-grow-1" style={{ minWidth: 0 }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-1 text-truncate" style={{ minWidth: 0, flex: "1 1 auto" }}>
                          <span className="fw-bold text-dark small text-truncate">ChittorTech Official</span>
                          <i className="fa-solid fa-circle-check text-primary flex-shrink-0" style={{ fontSize: "0.85rem" }} title="Verified Sender Checkmark"></i>
                        </div>
                        <span className="text-primary fw-semibold flex-shrink-0 ms-2" style={{ fontSize: "0.7rem", whiteSpace: "nowrap" }}>10:42 AM</span>
                      </div>
                      <div className="text-dark small fw-medium text-truncate" style={{ fontSize: "0.76rem" }}>
                        Q3 Financial Statement & Enterprise Invoices...
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 py-2 px-3 rounded-3 bg-light border text-center text-muted" style={{ fontSize: "0.72rem", lineHeight: "1.4" }}>
                    <i className="fa-solid fa-shield-halved text-success me-1"></i>
                    <span>Requires DMARC <code>p=reject</code> · Gmail & Apple Mail Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. WHAT IS BIMI & HOW IT WORKS ─── */}
        <section className="py-5 bg-white border-bottom">
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                The Visual Layer of Authentication
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                What Is BIMI & How It Works
              </h2>
              <p className="text-muted">
                BIMI (Brand Indicators for Message Identification) allows authenticated domains to specify which brand logo
                participating email providers display beside incoming messages.
              </p>
            </div>

            {/* Architecture Overview */}
            <div className="p-4 rounded-4 bg-light border mb-5">
              <h4 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>
                The Complete BIMI Architectural Chain
              </h4>
              <p className="text-muted small mb-4">
                BIMI is not a standalone graphic feature; it sits atop a strictly enforced email authentication foundation:
              </p>
              <div className="row g-2 g-md-3 text-center">
                <div className="col-4 col-md-2">
                  <div className="p-3 bg-white rounded-3 border h-100 bimi-step-card">
                    <span className="badge bg-secondary mb-2" style={{ fontSize: "0.65rem" }}>Step 1</span>
                    <h6 className="fw-bold mb-1">SPF</h6>
                    <small className="text-muted">Authorizes IP origin</small>
                  </div>
                </div>
                <div className="col-4 col-md-2">
                  <div className="p-3 bg-white rounded-3 border h-100 bimi-step-card">
                    <span className="badge bg-secondary mb-2" style={{ fontSize: "0.65rem" }}>Step 2</span>
                    <h6 className="fw-bold mb-1">DKIM</h6>
                    <small className="text-muted">Cryptographic signing</small>
                  </div>
                </div>
                <div className="col-4 col-md-2">
                  <div className="p-3 bg-white rounded-3 border h-100 bimi-step-card">
                    <span className="badge bg-primary mb-2" style={{ fontSize: "0.65rem" }}>Step 3</span>
                    <h6 className="fw-bold mb-1">DMARC</h6>
                    <small className="text-muted">Enforcement (p=reject)</small>
                  </div>
                </div>
                <div className="col-4 col-md-2">
                  <div className="p-3 bg-white rounded-3 border h-100 bimi-step-card">
                    <span className="badge bg-info text-dark mb-2" style={{ fontSize: "0.65rem" }}>Step 4</span>
                    <h6 className="fw-bold mb-1">SVG Tiny-PS</h6>
                    <small className="text-muted">Strict vector profile</small>
                  </div>
                </div>
                <div className="col-4 col-md-2">
                  <div className="p-3 bg-white rounded-3 border h-100 bimi-step-card">
                    <span className="badge bg-warning text-dark mb-2" style={{ fontSize: "0.65rem" }}>Step 5</span>
                    <h6 className="fw-bold mb-1">VMC / CMC</h6>
                    <small className="text-muted">DigiCert/Entrust Cert</small>
                  </div>
                </div>
                <div className="col-4 col-md-2">
                  <div className="p-3 bg-white rounded-3 border border-primary h-100 shadow-sm bimi-step-card">
                    <span className="badge bg-success mb-2" style={{ fontSize: "0.65rem" }}>Step 6</span>
                    <h6 className="fw-bold mb-1 text-primary">Inbox Logo</h6>
                    <small className="text-muted">Verified Checkmark</small>
                  </div>
                </div>
              </div>
            </div>

            {/* DNS Record & Code Box */}
            <div className="row g-4 mb-5">
              <div className="col-lg-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-dns"></i>
                  </div>
                  <h4 className="fw-bold" style={{ color: "#1e1b4b" }}>The BIMI DNS TXT Record</h4>
                  <p className="text-muted small mb-3">
                    Published at the <code>default._bimi.yourdomain.com</code> selector, specifying the HTTPS location
                    of your compliant SVG logo and cryptographic certificate:
                  </p>
                  <div className="p-2 px-3 rounded bg-light border font-monospace small mb-3 text-secondary" style={{ fontSize: "0.72rem", wordBreak: "break-all", whiteSpace: "pre-wrap", lineHeight: "1.4" }}>
                    default._bimi.example.com TXT "v=BIMI1; l=https://example.com/.well-known/bimi/logo.svg; a=https://example.com/.well-known/bimi/certificate.pem"
                  </div>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.86rem", color: "#475569" }}>
                    <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> <code>v=BIMI1</code>: Identifies protocol specification version.</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> <code>l=https://...</code>: Secure URI to the hosted SVG Tiny-PS file.</li>
                    <li><i className="fa-solid fa-check text-primary me-2"></i> <code>a=https://...</code>: Secure URI to the qualifying VMC or CMC PEM certificate.</li>
                  </ul>
                </div>
              </div>

              {/* SVG Tiny-PS Specifications */}
              <div className="col-lg-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-vector-square"></i>
                  </div>
                  <h4 className="fw-bold" style={{ color: "#1e1b4b" }}>Why Your Normal SVG Fails BIMI</h4>
                  <p className="text-muted small mb-3">
                    Standard website SVGs contain features explicitly prohibited by the SVG Tiny-PS (Portable/Secure) specification:
                  </p>
                  <div className="row g-2" style={{ fontSize: "0.84rem" }}>
                    <div className="col-6">
                      <div className="p-2 bg-light rounded border text-muted">
                        <i className="fa-solid fa-xmark text-danger me-1"></i> No external CSS or scripts
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="p-2 bg-light rounded border text-muted">
                        <i className="fa-solid fa-xmark text-danger me-1"></i> No raster URL dependencies
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="p-2 bg-light rounded border text-muted">
                        <i className="fa-solid fa-check text-success me-1"></i> Strict 1:1 Square aspect ratio
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="p-2 bg-light rounded border text-muted">
                        <i className="fa-solid fa-check text-success me-1"></i> Validated XML & viewBox
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 small text-muted">
                    ChittorTech reconstructs and mathematically normalizes your logo into a pristine, zero-dependency SVG Tiny-PS document.
                  </div>
                </div>
              </div>
            </div>

            {/* Provider Comparison: DESKTOP VIEW (d-none d-md-block) */}
            <div className="d-none d-md-block deliv-table-wrap mb-4">
              <div className="p-3 bg-light border-bottom fw-bold text-dark d-flex justify-content-between align-items-center">
                <span>Mailbox Provider BIMI Support & Visual Treatment Matrix</span>
                <span className="badge bg-primary">Google · Apple · Yahoo</span>
              </div>
              <div className="table-responsive">
                <table className="deliv-table">
                  <thead>
                    <tr>
                      <th style={{ width: "24%" }}>Mailbox Provider</th>
                      <th style={{ width: "16%" }}>BIMI Support</th>
                      <th style={{ width: "22%" }}>DMARC Policy</th>
                      <th style={{ width: "18%" }}>Certificate Rule</th>
                      <th style={{ width: "20%" }}>Visual UI Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    {providerComparison.map((row, idx) => (
                      <tr key={idx}>
                        <td><strong>{row.provider}</strong></td>
                        <td><span className="badge bg-success-subtle text-success">{row.bimiSupport}</span></td>
                        <td><code>{row.dmarcRequirement}</code></td>
                        <td><span className="small text-secondary">{row.vmcRequirement}</span></td>
                        <td className="text-primary small fw-semibold">{row.visualTreatment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Provider Comparison: MOBILE VIEW (d-block d-md-none) */}
            <div className="d-block d-md-none mb-4">
              <div className="p-3 bg-light border rounded-3 mb-3 fw-bold text-dark text-center" style={{ fontSize: "0.9rem" }}>
                Mailbox Provider BIMI Behavior
              </div>
              {providerComparison.map((row, idx) => (
                <div key={idx} className="deliv-mobile-card mb-3 p-3">
                  <div className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
                    <span className="fw-bold text-dark" style={{ fontSize: "0.95rem" }}>{row.provider}</span>
                    <span className="badge bg-success-subtle text-success" style={{ fontSize: "0.7rem" }}>Supported</span>
                  </div>
                  <div className="d-flex flex-column gap-2" style={{ fontSize: "0.82rem" }}>
                    <div className="p-2 rounded bg-light border">
                      <span className="text-muted fw-bold">DMARC Rule:</span>
                      <div className="font-monospace text-dark mt-1">{row.dmarcRequirement}</div>
                    </div>
                    <div className="p-2 rounded bg-light border">
                      <span className="text-muted fw-bold">Certificate Prerequisite:</span>
                      <div className="text-secondary mt-1">{row.vmcRequirement}</div>
                    </div>
                    <div className="p-2 rounded bg-primary-subtle border border-primary-subtle">
                      <span className="text-primary fw-bold">Visual UI Outcome:</span>
                      <div className="text-primary fw-semibold mt-1">{row.visualTreatment}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 3. BUSINESS IMPACT & ROI ─── */}
        <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Strategic Brand Equity
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Your Email Is Your Primary Brand Touchpoint
              </h2>
              <p className="text-muted">
                Every business email you send competes for attention against hundreds of messages.
                A verified brand identity establishes immediate trust and eliminates brand impersonation.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Instant Inbox Differentiation</h5>
                  <p className="text-muted small mb-0">
                    Replace generic initials or gray default avatars with your high-definition corporate logo.
                    Recipients recognize your brand before reading the subject line.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-shield-cat"></i>
                  </div>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Spoofing & Phishing Immunity</h5>
                  <p className="text-muted small mb-0">
                    Because BIMI strictly requires DMARC enforcement, attackers cannot display your logo.
                    Your customers can visually verify legitimate corporate communication.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-award"></i>
                  </div>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Enterprise Credibility</h5>
                  <p className="text-muted small mb-0">
                    The Gmail blue checkmark communicates world-class security posture, elevating your executive proposals,
                    invoices, and transactional receipts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. STEP-BY-STEP IMPLEMENTATION ROADMAP ─── */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Structured Engineering Workflow
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Our 6-Step BIMI Implementation Roadmap
              </h2>
              <p className="text-muted">
                From initial vector conversion to multi-client inbox verification, we engineer every layer with mathematical precision.
              </p>
            </div>

            <div className="row g-4 mb-4">
              <div className="col-lg-4 col-md-6">
                <div className="deliv-card border-top border-4 border-primary">
                  <span className="badge bg-primary text-white mb-2">STEP 1</span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>DMARC Enforcement Audit</h5>
                  <p className="text-muted small mb-0">
                    We audit your SPF, DKIM, and DMARC policy. Before publishing BIMI, we ensure your domain achieves
                    <code>p=quarantine (pct=100)</code> or <code>p=reject</code> across all legitimate sending streams.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card border-top border-4 border-info">
                  <span className="badge bg-info text-dark mb-2">STEP 2</span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Trademark Mapping</h5>
                  <p className="text-muted small mb-0">
                    We map your brand mark against recognized intellectual property registries (USPTO, UKIPO, EUIPO, CGPDTM, CIPO, IP Australia)
                    to confirm certificate qualification.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card border-top border-4 border-warning">
                  <span className="badge bg-warning text-dark mb-2">STEP 3</span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>SVG Tiny-PS Vectorization</h5>
                  <p className="text-muted small mb-0">
                    We reconstruct your brand mark into a square 1:1, script-free, CSS-isolated SVG Tiny-PS vector file,
                    validating all XML namespaces against the IETF BIMI specification.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card border-top border-4 border-success">
                  <span className="badge bg-success text-white mb-2">STEP 4</span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Certificate Authority Coordination</h5>
                  <p className="text-muted small mb-0">
                    Where VMC/CMC certificates are required for Gmail checkmarks, we coordinate identity verification
                    and technical document submission with DigiCert or Entrust.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card border-top border-4 border-dark">
                  <span className="badge bg-dark text-white mb-2">STEP 5</span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>DNS & Secure Hosting</h5>
                  <p className="text-muted small mb-0">
                    We configure secure HTTPS hosting for your SVG and certificate assets, and publish the authoritative
                    <code>default._bimi</code> DNS TXT record on your DNS manager.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="deliv-card border-top border-4 border-primary">
                  <span className="badge bg-primary text-white mb-2">STEP 6</span>
                  <h5 className="fw-bold" style={{ color: "#1e1b4b" }}>Multi-Client Inbox Verification</h5>
                  <p className="text-muted small mb-0">
                    We send test payloads and verify live logo rendering across Google Workspace, Gmail mobile/web,
                    Apple Mail iOS/macOS, and Yahoo Mail environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. SUPPORTED PROVIDERS & AUTHORITIES ─── */}
        <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Universal Compatibility
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Supported Inboxes & Recognized Trademark Registries
              </h2>
              <p className="text-muted">
                We engineer BIMI records aligned with major email clients, certificate authorities, and global patent offices.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="p-4 bg-white rounded-3 border h-100">
                  <h5 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>
                    <i className="fa-solid fa-inbox text-primary me-2"></i> Mailbox Providers
                  </h5>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.9rem", color: "#475569" }}>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Google Workspace & Gmail</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Apple Mail (iOS 16+ & macOS)</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Yahoo Mail & AOL</li>
                    <li><i className="fa-solid fa-check text-success me-2"></i> Fastmail & Webmail clients</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div className="p-4 bg-white rounded-3 border h-100">
                  <h5 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>
                    <i className="fa-solid fa-stamp text-info me-2"></i> Certificate Authorities
                  </h5>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.9rem", color: "#475569" }}>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> DigiCert Verified Mark Certificates</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Entrust VMC & CMC Authority</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> Identity validation coordination</li>
                    <li><i className="fa-solid fa-check text-success me-2"></i> PEM certificate SSL hosting setup</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div className="p-4 bg-white rounded-3 border h-100">
                  <h5 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>
                    <i className="fa-solid fa-building-columns text-warning me-2"></i> Trademark Registries
                  </h5>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.9rem", color: "#475569" }}>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> USPTO (United States)</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> UKIPO (United Kingdom)</li>
                    <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i> EUIPO (European Union)</li>
                    <li><i className="fa-solid fa-check text-success me-2"></i> CGPDTM (India Trade Marks Registry)</li>
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
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Predictable Fixed Pricing
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Professional BIMI Implementation Packages
              </h2>
              <p className="text-muted">
                Transparent technical engineering rates with clear deliverables. Choose the tier suited to your brand roadmap.
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
                    ? "Fixed flat-rate pricing for US, UK, UAE, Canada & Global brands"
                    : "Domestic pricing with Indian business GST invoicing available"}
                </div>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="row g-4 align-items-stretch mb-5">
              {/* Tier 1: SVG Tiny-PS & DNS Preparation */}
              <div className="col-lg-4">
                <div className="price-card">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-light text-secondary border px-2 py-1" style={{ fontSize: "0.72rem" }}>
                      Tier 1 Preparation
                    </span>
                    <span className="badge bg-light text-secondary border px-2 py-1" style={{ fontSize: "0.72rem" }}>
                      Single Domain
                    </span>
                  </div>
                  <h4 className="fw-bold mb-2 text-dark" style={{ fontSize: "1.3rem" }}>
                    BIMI SVG Tiny-PS & DNS Prep
                  </h4>
                  <p className="text-muted small mb-3">
                    For brands beginning BIMI or targeting supported logo-display ecosystems like Yahoo Mail.
                  </p>

                  <div className="p-3 rounded-3 bg-light mb-3 border">
                    <div className="d-flex align-items-baseline gap-1">
                      <span style={{ fontSize: "2rem", fontWeight: 900, color: "#0f172a", lineHeight: 1 }}>
                        {currency === "USD" ? "$99" : "₹7,999"}
                      </span>
                      <span className="text-muted small fw-medium">/ domain</span>
                    </div>
                    <div className="small fw-semibold text-success mt-1">
                      <i className="fa-solid fa-bolt me-1"></i> Target: 48-Hour Turnaround
                    </div>
                  </div>

                  <div className="flex-grow-1 mb-4">
                    <div className="fw-bold small text-uppercase text-secondary mb-2" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                      Included Deliverables:
                    </div>
                    <ul className="list-unstyled mb-0" style={{ fontSize: "0.85rem", color: "#334155" }}>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> BIMI readiness & DMARC prerequisite audit</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> SVG Tiny-PS vector conversion & validation</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> BIMI DNS record generation & publication</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> HTTPS logo-hosting configuration guide</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> Yahoo Mail BIMI verification check</li>
                      <li><i className="fa-solid fa-circle-check text-primary me-2"></i> 7-Day technical support</li>
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/917597451057?text=Hi%20ChittorTech%2C%20I%20want%20to%20order%20the%20BIMI%20SVG%20Tiny-PS%20package%20(${currency === "USD" ? "$99" : "₹7,999"}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary w-100 fw-bold py-2 rounded-3 mt-auto"
                  >
                    Start BIMI Setup — WhatsApp
                  </a>
                </div>
              </div>

              {/* Tier 2: Complete BIMI + Gmail Checkmark (Featured) */}
              <div className="col-lg-4">
                <div className="price-card featured">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge" style={{ background: "linear-gradient(135deg, #0284c7, #0369a1)", color: "#fff", fontSize: "0.72rem", padding: "4px 10px", borderRadius: "9999px" }}>
                      ★ Recommended
                    </span>
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-2 py-1" style={{ fontSize: "0.72rem" }}>
                      Single Domain
                    </span>
                  </div>
                  <h4 className="fw-bold mb-2 text-primary" style={{ fontSize: "1.3rem" }}>
                    BIMI + Verified Checkmark Suite
                  </h4>
                  <p className="text-muted small mb-3">
                    Full SVG Tiny-PS conversion, DMARC alignment, DigiCert / Entrust VMC coordination, and Google Postmaster testing.
                  </p>

                  <div className="p-3 rounded-3 bg-primary-subtle border border-primary-subtle mb-3">
                    <div className="d-flex align-items-baseline gap-1">
                      <span style={{ fontSize: "2rem", fontWeight: 900, color: "#0369a1", lineHeight: 1 }}>
                        {currency === "USD" ? "$199" : "₹15,999"}
                      </span>
                      <span className="text-muted small fw-medium">/ domain</span>
                    </div>
                    <div className="small fw-semibold text-primary mt-1">
                      <i className="fa-solid fa-calendar-check me-1"></i> Full VMC/CMC Path Coordination
                    </div>
                  </div>

                  <div className="flex-grow-1 mb-4">
                    <div className="fw-bold small text-uppercase text-primary mb-2" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                      Everything in Tier 1, Plus:
                    </div>
                    <ul className="list-unstyled mb-0" style={{ fontSize: "0.85rem", color: "#334155" }}>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> Full SPF/DKIM/DMARC alignment audit</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> Trademark verification mapping (USPTO/UKIPO/India)</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> DigiCert or Entrust VMC/CMC technical coordination</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> Google Postmaster Tools review & telemetry</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> Gmail blue checkmark readiness assessment</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> Apple Mail & Yahoo multi-client testing</li>
                      <li><i className="fa-solid fa-circle-check text-success me-2"></i> 14-Day dedicated implementation support</li>
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/917597451057?text=Hi%20ChittorTech%2C%20I%20want%20to%20order%20the%20Complete%20BIMI%20%2B%20Verified%20Checkmark%20Suite%20(${currency === "USD" ? "$199" : "₹15,999"}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-100 fw-bold py-2 rounded-3 mt-auto shadow-sm"
                  >
                    Deploy Verified Email Branding
                  </a>
                </div>
              </div>

              {/* Tier 3: Enterprise Multi-Brand Fleet */}
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
                    Enterprise Brand Fleet
                  </h4>
                  <p className="text-muted small mb-3">
                    Multi-domain, sub-brand BIMI selectors, and trademark portfolio mapping for agencies and SaaS groups.
                  </p>

                  <div className="p-3 rounded-3 bg-light mb-3 border">
                    <div className="d-flex align-items-baseline gap-1">
                      <span style={{ fontSize: "2rem", fontWeight: 900, color: "#0f172a", lineHeight: 1 }}>
                        {currency === "USD" ? "$449+" : "₹34,999+"}
                      </span>
                      <span className="text-muted small fw-medium">/ multi-brand</span>
                    </div>
                    <div className="small fw-semibold text-info mt-1">
                      <i className="fa-solid fa-layer-group me-1"></i> Multi-Brand Trademark Architecture
                    </div>
                  </div>

                  <div className="flex-grow-1 mb-4">
                    <div className="fw-bold small text-uppercase text-secondary mb-2" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                      Enterprise Scope:
                    </div>
                    <ul className="list-unstyled mb-0" style={{ fontSize: "0.85rem", color: "#334155" }}>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> Multiple domains & sub-brand selectors</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> Multi-jurisdiction trademark portfolio mapping</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> Multiple SVG Tiny-PS asset preparation</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> Dedicated Certificate Authority workflow management</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> Agency deployment templates & client SOPs</li>
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
                      <th className="text-center" style={{ width: "20%" }}>{currency === "USD" ? "$99 (Prep)" : "₹7,999"}</th>
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
                    {/* Tier 1: Preparation */}
                    <div className="p-2 px-3 rounded bg-light border">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="badge bg-secondary-subtle text-secondary" style={{ fontSize: "0.7rem" }}>Prep Tier</span>
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
                    <div className="p-2 px-3 rounded bg-primary-subtle border border-primary-subtle">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="badge bg-primary text-white" style={{ fontSize: "0.7rem" }}>Suite ★ Recommended</span>
                        <span className="text-primary fw-bold" style={{ fontSize: "0.75rem" }}>{currency === "USD" ? "$199" : "₹15,999"}</span>
                      </div>
                      <div style={{ fontSize: "0.88rem" }}>
                        {row.t2 === "—" ? (
                          <span className="text-muted"><i className="fa-solid fa-minus text-secondary me-1"></i> Not Included</span>
                        ) : (
                          <span className="text-primary fw-bold">{row.t2}</span>
                        )}
                      </div>
                    </div>

                    {/* Tier 3: Fleet */}
                    <div className="p-2 px-3 rounded bg-dark text-white border border-dark">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="badge bg-white text-dark" style={{ fontSize: "0.7rem" }}>Enterprise</span>
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
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Deep Technical Guidance
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Frequently Asked Questions
              </h2>
              <p className="text-muted">
                Authoritative technical answers regarding BIMI specifications, trademark requirements, and VMC workflows.
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
            background: "linear-gradient(135deg, #090d16 0%, #1e1b4b 50%, #0369a1 100%)",
            overflow: "hidden",
          }}
        >
          <div className="container py-5 text-center position-relative" style={{ zIndex: 2 }}>
            <span className="badge bg-info text-dark text-uppercase px-3 py-2 fw-bold mb-3 cta-badge">
              Turn Your Email Into a Recognizable Brand Asset
            </span>
            <h2 className="fw-bold mb-3 text-white cta-h2" style={{ fontSize: "2.8rem" }}>
              Your Competitors Are Building Brand Recognition Inside the Inbox.
            </h2>
            <p className="lead mx-auto mb-4" style={{ maxWidth: "700px", color: "#cbd5e1", fontSize: "1.05rem" }}>
              Your customers know your logo. Your website has it. Your packaging has it. Your email should have it too.
              ChittorTech coordinates the entire technical pipeline from SVG Tiny-PS vectorization to VMC certificate guidance.
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
                Book BIMI & Branding Consultation
              </button>
            </div>

            <div className="text-slate-400 small" style={{ color: "#94a3b8" }}>
              <i className="fa-solid fa-lock me-1 text-cyan-400"></i> No master passwords required · Screen-shared or delegated DNS setup · 100% Confidential
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
