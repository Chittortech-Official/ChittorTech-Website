"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LegalPageLayout({
  title,
  subtitle,
  badge = "LEGAL & COMPLIANCE FRAMEWORK",
  effectiveDate = "September 10, 2026",
  version = "v2.6 Enterprise",
  jurisdiction = "India (DPDP / IT Act 2000) & International (GDPR Aligned)",
  tocItems = [],
  executiveSummary = [],
  printContract,
  children,
}) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  const docTabs = [
    {
      name: "Privacy Policy",
      href: "/privacy-policy",
      icon: "fa-solid fa-shield-halved",
      active: pathname === "/privacy-policy",
    },
    {
      name: "Terms of Service",
      href: "/terms",
      icon: "fa-solid fa-scale-balanced",
      active: pathname === "/terms",
    },
    {
      name: "Payment & Refund Terms",
      href: "/payment-terms",
      icon: "fa-solid fa-credit-card",
      active: pathname === "/payment-terms",
    },
  ];

  // IntersectionObserver for Table of Contents spy
  useEffect(() => {
    if (typeof window === "undefined" || tocItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: 0,
      }
    );

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
      setMobileTocOpen(false);
    }
  };

  return (
    <div className="ct-legal-wrapper">
      
      {/* ─── Dedicated Print Contract Document (Rendered only on Print) ─── */}
      {printContract && printContract}

      {/* ─── Screen View (Visible on Browser, 100% Hidden on Print) ─── */}
      <div className="ct-screen-view">
        
        {/* ─── Hero Header Section (Screen) ─── */}
        <section className="ct-legal-hero">
          <div className="container ct-legal-container">
            <div className="ct-legal-hero-inner">
              
              {/* Breadcrumbs */}
              <nav aria-label="breadcrumb" className="ct-legal-breadcrumbs">
                <Link href="/">Home</Link>
                <span className="crumb-sep">/</span>
                <span>Legal Center</span>
                <span className="crumb-sep">/</span>
                <span className="crumb-current">{title}</span>
              </nav>

              {/* Badge */}
              <div className="ct-legal-badge">
                <i className="fa-solid fa-shield-check"></i>
                <span>{badge}</span>
              </div>

              {/* Title & Tagline */}
              <h1 className="ct-legal-title">{title}</h1>
              <p className="ct-legal-subtitle">{subtitle}</p>

              {/* Document Metadata Bar */}
              <div className="ct-legal-meta-bar">
                <div className="ct-legal-meta-item">
                  <i className="fa-regular fa-calendar-check"></i>
                  <span><strong>Effective:</strong> {effectiveDate}</span>
                </div>
                <div className="ct-legal-meta-item">
                  <i className="fa-solid fa-code-branch"></i>
                  <span><strong>Version:</strong> {version}</span>
                </div>
                <div className="ct-legal-meta-item">
                  <i className="fa-solid fa-earth-asia"></i>
                  <span><strong>Jurisdiction:</strong> {jurisdiction}</span>
                </div>
                <div className="ct-legal-meta-item print-action">
                  <button
                    type="button"
                    onClick={() => typeof window !== "undefined" && window.print()}
                    className="ct-legal-print-btn"
                    title="Print Formal 3-Page Legal Contract (PDF)"
                  >
                    <i className="fa-solid fa-print"></i> Print Legal Contract (3 Pages)
                  </button>
                </div>
              </div>

              {/* Document Switcher Tabs (Swipeable on Mobile) */}
              <div className="ct-legal-tabs-scroll-wrap">
                <div className="ct-legal-tabs-nav">
                  {docTabs.map((tab) => (
                    <Link
                      key={tab.href}
                      href={tab.href}
                      className={`ct-legal-tab-btn ${tab.active ? "active" : ""}`}
                    >
                      <i className={tab.icon}></i>
                      <span>{tab.name}</span>
                      {tab.active && <span className="active-dot"></span>}
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── Mobile Table of Contents Accordion Toggle ─── */}
        {tocItems.length > 0 && (
          <div className="ct-mobile-toc-bar">
            <div className="container ct-legal-container">
              <button
                type="button"
                onClick={() => setMobileTocOpen(!mobileTocOpen)}
                className="ct-mobile-toc-trigger"
                aria-expanded={mobileTocOpen}
              >
                <div className="ct-mobile-toc-label">
                  <i className="fa-solid fa-list-check"></i>
                  <span>Jump to Section ({tocItems.length} Clauses)</span>
                </div>
                <i className={`fa-solid fa-chevron-${mobileTocOpen ? "up" : "down"}`}></i>
              </button>

              {mobileTocOpen && (
                <div className="ct-mobile-toc-dropdown">
                  {tocItems.map((item, idx) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={`ct-mobile-toc-item ${activeSection === item.id ? "active" : ""}`}
                    >
                      <span className="toc-idx">{String(idx + 1).padStart(2, "0")}</span>
                      <span className="toc-title">{item.title}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ─── Main Content Container ─── */}
        <section className="ct-legal-body-section">
          <div className="container ct-legal-container">
            <div className="ct-legal-grid">
              
              {/* ── Sticky Left Sidebar / TOC (Desktop & Tablets >= 992px) ── */}
              <aside className="ct-legal-sidebar">
                <div className="ct-legal-sidebar-sticky">
                  
                  <div className="ct-toc-card">
                    <div className="ct-toc-header">
                      <i className="fa-solid fa-list-check"></i>
                      <span>Table of Contents</span>
                    </div>
                    <nav className="ct-toc-list">
                      {tocItems.map((item, idx) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={(e) => scrollToSection(e, item.id)}
                          className={`ct-toc-link ${activeSection === item.id ? "is-active" : ""}`}
                        >
                          <span className="ct-toc-num">{String(idx + 1).padStart(2, "0")}</span>
                          <span className="ct-toc-text">{item.title}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Direct Legal & Support Assistance Card */}
                  <div className="ct-legal-help-card">
                    <div className="ct-help-badge">
                      <i className="fa-solid fa-headset"></i> Legal &amp; Invoicing Desk
                    </div>
                    <h4>Need assistance?</h4>
                    <p>Our compliance and corporate billing team is available for verified guidance.</p>
                    
                    <div className="ct-help-links">
                      <a href="mailto:contact@chittortech.in" className="ct-help-link">
                        <i className="fa-solid fa-envelope"></i> contact@chittortech.in
                      </a>
                      <a href="tel:+917597451057" className="ct-help-link">
                        <i className="fa-solid fa-phone"></i> +91 75974 51057
                      </a>
                      <a
                        href="https://wa.me/917597451057"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ct-help-link whatsapp"
                      >
                        <i className="fa-brands fa-whatsapp"></i> WhatsApp Dedicated Line
                      </a>
                    </div>

                    <div className="ct-help-note">
                      <i className="fa-solid fa-clock-rotate-left"></i> Typical Response: 24–48 Business Hours
                    </div>
                  </div>

                </div>
              </aside>

              {/* ── Main Document Column ── */}
              <main className="ct-legal-content">
                
                {/* Executive Summary Card (Screen only) */}
                {executiveSummary.length > 0 && (
                  <div className="ct-exec-summary-card">
                    <div className="ct-exec-header">
                      <div className="ct-exec-icon">
                        <i className="fa-solid fa-feather"></i>
                      </div>
                      <div>
                        <h3 className="ct-exec-title">Executive Summary (Plain-English Overview)</h3>
                        <p className="ct-exec-subtitle">
                          Key takeaways designed for quick reading and total transparency.
                        </p>
                      </div>
                    </div>
                    <div className="ct-exec-grid">
                      {executiveSummary.map((item, idx) => (
                        <div key={idx} className="ct-exec-item">
                          <div className="ct-exec-item-icon">
                            <i className={item.icon || "fa-solid fa-check"}></i>
                          </div>
                          <div className="ct-exec-item-content">
                            <strong>{item.title}</strong>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Document Clauses Passed as Children */}
                <div className="ct-legal-clauses">
                  {children}
                </div>

                {/* ── Formal Contract Execution, Addendum Notice & Dual Signatures Block ── */}
                <div className="ct-contract-signature-card">
                  <div className="ct-signature-card-header">
                    <i className="fa-solid fa-file-signature"></i>
                    <div>
                      <h3>Master Agreement Execution &amp; Acknowledgement</h3>
                      <p>Formal dual-signatory block and master framework binding note.</p>
                    </div>
                  </div>

                  {/* Framework Legal Note as requested by user */}
                  <div className="ct-framework-note-box">
                    <div className="ct-framework-note-title">
                      <i className="fa-solid fa-scale-balanced"></i> Master Framework Notice &amp; Project Addenda Clause
                    </div>
                    <p>
                      <strong>1. Binding Baseline Framework:</strong> This document serves as the General Master Legal Framework of <strong>ChittorTech™ (Chittor Technologies)</strong>. By executing this document, issuing a purchase order, or approving initial project milestones, the Client accepts and commits to these foundational legal, privacy, and payment terms.
                    </p>
                    <p>
                      <strong>2. Project-Specific Addenda Requirement:</strong> In addition to this general framework, prior to commencement of active engineering, a <strong>Project-Specific Addendum</strong> shall be mutually drafted, agreed, and executed for each specific engagement. Such addendum shall specify:
                    </p>
                    <ul>
                      <li>The definitive Software Requirement Specification (SRS) &amp; Technical Scope Freeze.</li>
                      <li>Project-specific data security measures, server access protocols, and sanitized testing datasets.</li>
                      <li>Detailed milestone delivery dates, pricing breakdown, and approved payment schedule.</li>
                    </ul>
                    <p style={{ margin: 0, fontWeight: "600", color: "#0f172a" }}>
                      * The Project-Specific Addendum, once executed, shall form an integral, legally enforceable schedule governed by this Master Agreement.
                    </p>
                  </div>

                  {/* Dual Signature Execution Table */}
                  <div className="ct-signature-grid">
                    
                    {/* Left Column: ChittorTech */}
                    <div className="ct-signature-box">
                      <div className="ct-sig-party-title">
                        <i className="fa-solid fa-building"></i> FOR CHITTORTECH (CHITTOR TECHNOLOGIES)
                      </div>
                      <div className="ct-sig-fields">
                        <div className="ct-sig-field">
                          <span className="sig-label">Authorized Signatory:</span>
                          <span className="sig-val">Director / Head of Engineering</span>
                        </div>
                        <div className="ct-sig-field">
                          <span className="sig-label">Entity Status:</span>
                          <span className="sig-val">ChittorTech™, Chittorgarh, Rajasthan, India</span>
                        </div>
                        <div className="ct-sig-line-wrap">
                          <span className="sig-label">Signature:</span>
                          <div className="ct-sig-line"></div>
                        </div>
                        <div className="ct-sig-field">
                          <span className="sig-label">Date of Execution:</span>
                          <div className="ct-sig-date-line"></div>
                        </div>
                        <div className="ct-sig-seal-box">
                          <span>[ Official Corporate Seal ]</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Client */}
                    <div className="ct-signature-box client">
                      <div className="ct-sig-party-title">
                        <i className="fa-solid fa-user-check"></i> FOR THE CLIENT (AUTHORIZED SIGNATORY)
                      </div>
                      <div className="ct-sig-fields">
                        <div className="ct-sig-field">
                          <span className="sig-label">Client / Corporate Entity:</span>
                          <div className="ct-sig-input-line"></div>
                        </div>
                        <div className="ct-sig-field">
                          <span className="sig-label">Authorized Name &amp; Title:</span>
                          <div className="ct-sig-input-line"></div>
                        </div>
                        <div className="ct-sig-line-wrap">
                          <span className="sig-label">Signature:</span>
                          <div className="ct-sig-line"></div>
                        </div>
                        <div className="ct-sig-field">
                          <span className="sig-label">Date &amp; Place:</span>
                          <div className="ct-sig-date-line"></div>
                        </div>
                        <div className="ct-sig-seal-box">
                          <span>[ Client Official Seal / Stamp ]</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Statutory Corporate Identity & Grievance Card */}
                <div className="ct-corporate-entity-card">
                  <div className="ct-entity-header">
                    <div className="ct-entity-logo">
                      <span>CT</span>
                    </div>
                    <div>
                      <h3 className="ct-entity-name">ChittorTech™ (Chittor Technologies)</h3>
                      <p className="ct-entity-tag">Premier IT, Mobile App &amp; Software Development Services</p>
                    </div>
                  </div>
                  
                  <div className="ct-entity-details-grid">
                    <div className="ct-entity-col">
                      <span className="ct-label">Headquarters / Registered Office</span>
                      <p className="ct-val">
                        <i className="fa-solid fa-location-dot"></i> Chittorgarh, Rajasthan – 312001, India
                      </p>
                    </div>
                    <div className="ct-entity-col">
                      <span className="ct-label">Statutory Compliance</span>
                      <p className="ct-val">
                        <i className="fa-solid fa-file-contract"></i> Indian IT Act, 2000 | DPDP Act 2023 | GST Invoicing
                      </p>
                    </div>
                    <div className="ct-entity-col">
                      <span className="ct-label">Designated Grievance &amp; Legal Desk</span>
                      <p className="ct-val">
                        <i className="fa-solid fa-user-shield"></i> <a href="mailto:contact@chittortech.in">contact@chittortech.in</a>
                      </p>
                    </div>
                    <div className="ct-entity-col">
                      <span className="ct-label">Direct Corporate Hotline</span>
                      <p className="ct-val">
                        <i className="fa-solid fa-phone"></i> <a href="tel:+917597451057">+91 75974 51057</a>
                      </p>
                    </div>
                  </div>

                  <div className="ct-entity-footer">
                    <p>
                      This document constitutes an electronic record under the Information Technology Act, 2000, and rules thereunder as applicable. Being electronically generated, it is legally enforceable upon electronic acceptance or physical countersignature.
                    </p>
                  </div>
                </div>

              </main>

            </div>
          </div>
        </section>
      </div>

      {/* ─── Stylesheet Scoped for Legal Pages (Screen + Print Optimized) ─── */}
      <style jsx>{`
        .ct-legal-wrapper {
          background-color: #f8fafc;
          min-height: 100vh;
          color: #1e293b;
          font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif;
          overflow-x: hidden;
          width: 100%;
          position: relative;
        }

        .ct-screen-view {
          width: 100%;
        }

        .ct-legal-container {
          width: 100%;
          max-width: 1140px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 16px;
          padding-right: 16px;
          box-sizing: border-box;
        }

        /* Hero Section (Screen) */
        .ct-legal-hero {
          background: radial-gradient(circle at 85% 15%, rgba(6, 182, 212, 0.18) 0%, transparent 40%),
                      radial-gradient(circle at 15% 85%, rgba(79, 70, 229, 0.22) 0%, transparent 45%),
                      linear-gradient(135deg, #0b0f19 0%, #171d32 55%, #1e1b4b 100%);
          color: #ffffff;
          padding-top: 110px;
          padding-bottom: 30px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          width: 100%;
          overflow-x: hidden;
        }

        .ct-legal-hero-inner {
          width: 100%;
        }

        .ct-legal-breadcrumbs {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: #94a3b8;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }

        .ct-legal-breadcrumbs a {
          color: #cbd5e1;
          text-decoration: none;
          transition: color 0.2s;
        }

        .ct-legal-breadcrumbs a:hover {
          color: #38bdf8;
        }

        .crumb-sep {
          color: #64748b;
          font-size: 0.75rem;
        }

        .crumb-current {
          color: #38bdf8;
          font-weight: 600;
          word-break: break-word;
        }

        .ct-legal-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: #38bdf8;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 4px 12px;
          border-radius: 9999px;
          margin-bottom: 14px;
          text-transform: uppercase;
        }

        .ct-legal-title {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin-bottom: 12px;
          word-break: break-word;
        }

        .ct-legal-subtitle {
          font-size: 1.05rem;
          color: #cbd5e1;
          max-width: 820px;
          line-height: 1.6;
          margin-bottom: 22px;
        }

        .ct-legal-meta-bar {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px 18px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 10px 16px;
          border-radius: 12px;
          font-size: 0.82rem;
          color: #cbd5e1;
          backdrop-filter: blur(10px);
          margin-bottom: 24px;
          width: 100%;
          box-sizing: border-box;
        }

        .ct-legal-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ct-legal-meta-item i {
          color: #38bdf8;
        }

        .print-action {
          margin-left: auto;
        }

        .ct-legal-print-btn {
          background: linear-gradient(135deg, #0284c7, #2563eb);
          border: 1px solid #38bdf8;
          color: #ffffff;
          padding: 7px 16px;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          transition: all 0.2s;
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);
        }

        .ct-legal-print-btn:hover {
          background: linear-gradient(135deg, #0369a1, #1d4ed8);
          transform: translateY(-1px);
        }

        /* Document Tabs */
        .ct-legal-tabs-scroll-wrap {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 6px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 18px;
        }

        .ct-legal-tabs-scroll-wrap::-webkit-scrollbar {
          height: 3px;
        }
        .ct-legal-tabs-scroll-wrap::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }

        .ct-legal-tabs-nav {
          display: flex;
          align-items: center;
          gap: 8px;
          width: max-content;
          min-width: 100%;
        }

        .ct-legal-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 9999px;
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          color: #cbd5e1;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.2s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .ct-legal-tab-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .ct-legal-tab-btn.active {
          color: #ffffff;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          border-color: #3b82f6;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
        }

        .active-dot {
          width: 6px;
          height: 6px;
          background: #38bdf8;
          border-radius: 50%;
          box-shadow: 0 0 6px #38bdf8;
        }

        /* Mobile TOC Accordion Bar */
        .ct-mobile-toc-bar {
          display: none;
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          position: sticky;
          top: 64px;
          z-index: 100;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
        }

        .ct-mobile-toc-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: none;
          border: none;
          padding: 12px 0;
          font-size: 0.88rem;
          font-weight: 700;
          color: #1e293b;
          cursor: pointer;
        }

        .ct-mobile-toc-label {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #2563eb;
        }

        .ct-mobile-toc-dropdown {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 8px;
          max-height: 280px;
          overflow-y: auto;
          margin-bottom: 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ct-mobile-toc-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          border-radius: 8px;
          font-size: 0.82rem;
          color: #475569;
          text-decoration: none;
          transition: background 0.15s;
        }

        .ct-mobile-toc-item:hover,
        .ct-mobile-toc-item.active {
          background: #eff6ff;
          color: #1d4ed8;
          font-weight: 600;
        }

        .toc-idx {
          font-family: monospace;
          font-size: 0.75rem;
          background: #e2e8f0;
          padding: 2px 5px;
          border-radius: 4px;
        }

        /* Body Section */
        .ct-legal-body-section {
          padding-top: 36px;
          padding-bottom: 140px;
          width: 100%;
          overflow-x: hidden;
        }

        .ct-legal-grid {
          display: grid;
          grid-template-columns: 280px minmax(0, 1fr);
          gap: 32px;
          align-items: start;
          width: 100%;
        }

        /* Sidebar & Sticky TOC */
        .ct-legal-sidebar {
          width: 100%;
        }

        .ct-legal-sidebar-sticky {
          position: sticky;
          top: 90px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .ct-toc-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
          overflow: hidden;
        }

        .ct-toc-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 16px;
          background: #f1f5f9;
          border-bottom: 1px solid #e2e8f0;
          font-weight: 700;
          font-size: 0.9rem;
          color: #0f172a;
        }

        .ct-toc-header i {
          color: #2563eb;
        }

        .ct-toc-list {
          padding: 10px 8px;
          max-height: 440px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .ct-toc-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          border-radius: 8px;
          font-size: 0.84rem;
          color: #475569;
          text-decoration: none;
          transition: all 0.2s ease;
          line-height: 1.35;
        }

        .ct-toc-num {
          font-family: monospace;
          font-size: 0.74rem;
          font-weight: 700;
          color: #94a3b8;
          background: #f8fafc;
          padding: 2px 5px;
          border-radius: 4px;
          border: 1px solid #e2e8f0;
          flex-shrink: 0;
        }

        .ct-toc-link:hover {
          background: #f8fafc;
          color: #2563eb;
        }

        .ct-toc-link.is-active {
          background: #eff6ff;
          color: #1d4ed8;
          font-weight: 600;
          border-left: 3px solid #2563eb;
        }

        .ct-toc-link.is-active .ct-toc-num {
          background: #2563eb;
          color: #ffffff;
          border-color: #2563eb;
        }

        /* Help Card */
        .ct-legal-help-card {
          background: linear-gradient(135deg, #1e1b4b, #172554);
          color: #ffffff;
          padding: 20px;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(30, 27, 75, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .ct-help-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #38bdf8;
          margin-bottom: 10px;
        }

        .ct-legal-help-card h4 {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .ct-legal-help-card p {
          font-size: 0.82rem;
          color: #cbd5e1;
          line-height: 1.45;
          margin-bottom: 14px;
        }

        .ct-help-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 14px;
        }

        .ct-help-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: #e2e8f0;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.06);
          padding: 7px 10px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.2s;
          word-break: break-all;
        }

        .ct-help-link:hover {
          background: rgba(255, 255, 255, 0.12);
          color: #38bdf8;
          border-color: #38bdf8;
        }

        .ct-help-link.whatsapp {
          color: #4ade80;
          border-color: rgba(74, 222, 128, 0.3);
          background: rgba(74, 222, 128, 0.08);
        }

        .ct-help-link.whatsapp:hover {
          background: rgba(74, 222, 128, 0.18);
          color: #86efac;
        }

        .ct-help-note {
          font-size: 0.72rem;
          color: #94a3b8;
          display: flex;
          align-items: center;
          gap: 5px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 10px;
        }

        /* Executive Summary */
        .ct-exec-summary-card {
          background: #ffffff;
          border: 1px solid #bfdbfe;
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 6px 24px rgba(37, 99, 235, 0.06);
          margin-bottom: 24px;
          width: 100%;
          box-sizing: border-box;
        }

        .ct-exec-header {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 18px;
        }

        .ct-exec-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #eff6ff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.15rem;
          flex-shrink: 0;
          border: 1px solid #dbeafe;
        }

        .ct-exec-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 3px 0;
          line-height: 1.25;
        }

        .ct-exec-subtitle {
          font-size: 0.85rem;
          color: #64748b;
          margin: 0;
          line-height: 1.4;
        }

        .ct-exec-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 14px;
          width: 100%;
        }

        .ct-exec-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          background: #f8fafc;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          box-sizing: border-box;
          min-width: 0;
        }

        .ct-exec-item-icon {
          width: 28px;
          height: 28px;
          border-radius: 7px;
          background: #e0e7ff;
          color: #4338ca;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.82rem;
          flex-shrink: 0;
        }

        .ct-exec-item-content {
          min-width: 0;
          flex: 1;
        }

        .ct-exec-item strong {
          display: block;
          font-size: 0.88rem;
          color: #1e293b;
          margin-bottom: 3px;
          word-break: break-word;
        }

        .ct-exec-item p {
          font-size: 0.8rem;
          color: #64748b;
          line-height: 1.4;
          margin: 0;
          word-break: break-word;
        }

        /* Clauses Wrapper */
        .ct-legal-clauses {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
          min-width: 0;
        }

        /* ── Contract Execution & Signature Card (Screen) ── */
        .ct-contract-signature-card {
          margin-top: 36px;
          background: #ffffff;
          border: 2px solid #2563eb;
          border-radius: 18px;
          padding: 26px;
          box-shadow: 0 8px 30px rgba(37, 99, 235, 0.08);
          width: 100%;
          box-sizing: border-box;
        }

        .ct-signature-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 20px;
        }

        .ct-signature-card-header i {
          font-size: 1.8rem;
          color: #2563eb;
        }

        .ct-signature-card-header h3 {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 4px 0;
        }

        .ct-signature-card-header p {
          font-size: 0.85rem;
          color: #64748b;
          margin: 0;
        }

        .ct-framework-note-box {
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          padding: 16px 18px;
          margin-bottom: 24px;
        }

        .ct-framework-note-title {
          font-size: 0.88rem;
          font-weight: 800;
          color: #1e293b;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .ct-framework-note-box p {
          font-size: 0.85rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 10px;
        }

        .ct-framework-note-box ul {
          padding-left: 20px;
          margin-bottom: 10px;
          font-size: 0.85rem;
          color: #334155;
        }

        .ct-framework-note-box ul li {
          margin-bottom: 4px;
        }

        .ct-signature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          width: 100%;
        }

        .ct-signature-box {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .ct-signature-box.client {
          border-color: #93c5fd;
          background: #f0f7ff;
        }

        .ct-sig-party-title {
          font-size: 0.82rem;
          font-weight: 800;
          color: #1e293b;
          display: flex;
          align-items: center;
          gap: 6px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 14px;
          text-transform: uppercase;
        }

        .ct-sig-party-title i {
          color: #2563eb;
        }

        .ct-sig-fields {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ct-sig-field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sig-label {
          font-size: 0.74rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
        }

        .sig-val {
          font-size: 0.88rem;
          font-weight: 700;
          color: #0f172a;
        }

        .ct-sig-input-line {
          height: 24px;
          border-bottom: 1px dashed #94a3b8;
          width: 100%;
        }

        .ct-sig-line-wrap {
          margin-top: 10px;
        }

        .ct-sig-line {
          height: 44px;
          border-bottom: 1.5px solid #0f172a;
          margin-top: 6px;
          position: relative;
        }

        .ct-sig-line::after {
          content: "(Authorized Digital or Physical Signature)";
          position: absolute;
          right: 0;
          bottom: -18px;
          font-size: 0.65rem;
          color: #94a3b8;
        }

        .ct-sig-date-line {
          height: 22px;
          border-bottom: 1px dashed #94a3b8;
          width: 60%;
          margin-top: 4px;
        }

        .ct-sig-seal-box {
          margin-top: 24px;
          height: 70px;
          border: 1px dashed #cbd5e1;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          font-size: 0.72rem;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.6);
        }

        /* Corporate Entity Card */
        .ct-corporate-entity-card {
          margin-top: 36px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0 8px 25px rgba(15, 23, 42, 0.04);
          width: 100%;
          box-sizing: border-box;
        }

        .ct-entity-header {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 18px;
        }

        .ct-entity-logo {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: linear-gradient(135deg, #1e1b4b, #2563eb);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1.15rem;
          flex-shrink: 0;
        }

        .ct-entity-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 3px 0;
          line-height: 1.25;
        }

        .ct-entity-tag {
          font-size: 0.82rem;
          color: #64748b;
          margin: 0;
        }

        .ct-entity-details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          margin-bottom: 18px;
          width: 100%;
        }

        .ct-entity-col .ct-label {
          display: block;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #94a3b8;
          margin-bottom: 4px;
        }

        .ct-entity-col .ct-val {
          font-size: 0.88rem;
          color: #1e293b;
          font-weight: 600;
          margin: 0;
          line-height: 1.35;
          word-break: break-word;
        }

        .ct-entity-col .ct-val a {
          color: #2563eb;
          text-decoration: none;
        }

        .ct-entity-col .ct-val a:hover {
          text-decoration: underline;
        }

        .ct-entity-footer {
          background: #f8fafc;
          border-radius: 8px;
          padding: 12px 14px;
          border: 1px solid #e2e8f0;
        }

        .ct-entity-footer p {
          font-size: 0.76rem;
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        /* ─── Responsive Media Queries ─── */
        @media (max-width: 991px) {
          .ct-legal-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 24px;
          }

          .ct-legal-sidebar {
            display: none;
          }

          .ct-mobile-toc-bar {
            display: block;
          }

          .ct-legal-title {
            font-size: 2rem;
          }

          .print-action {
            margin-left: 0;
            width: 100%;
          }

          .ct-signature-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .ct-legal-hero {
            padding-top: 90px;
            padding-bottom: 24px;
          }

          .ct-legal-title {
            font-size: 1.65rem;
            line-height: 1.2;
          }

          .ct-legal-subtitle {
            font-size: 0.92rem;
            line-height: 1.5;
            margin-bottom: 18px;
          }

          .ct-legal-meta-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            padding: 10px 12px;
          }

          .ct-exec-summary-card,
          .ct-contract-signature-card,
          .ct-corporate-entity-card {
            padding: 16px 14px;
            border-radius: 14px;
          }

          .ct-exec-grid {
            grid-template-columns: 1fr;
          }

          .ct-entity-details-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .ct-legal-container {
            padding-left: 12px;
            padding-right: 12px;
          }

          .ct-legal-title {
            font-size: 1.5rem;
          }

          .ct-legal-tab-btn {
            font-size: 0.8rem;
            padding: 7px 12px;
          }
        }

        /* ============================================================
           ─── FORMAL LEGAL CONTRACT PRINT STYLESHEET (@media print) ───
           ============================================================ */
        @media print {
          @page {
            margin: 10mm 10mm 10mm 10mm;
            size: A4 portrait;
          }

          /* Hide ALL screen-view content */
          .ct-screen-view {
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
            overflow: hidden !important;
          }

          /* Reset root container */
          html, body {
            background: #ffffff !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          .ct-legal-wrapper {
            background: #ffffff !important;
            padding: 0 !important;
            margin: 0 !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
