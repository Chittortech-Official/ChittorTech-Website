"use client";

import React from "react";

export default function PrintContractView({
  documentType = "terms",
  title = "MASTER SERVICE AGREEMENT & TERMS OF SERVICE",
  refCode = "CT-MSA-2026",
  effectiveDate = "September 10, 2026",
  version = "v2.6 Enterprise",
  jurisdiction = "Republic of India (Chittorgarh, Rajasthan Jurisdiction)",
  page1Articles = [],
  page2Articles = [],
  page3Articles = [],
  frameworkNote,
}) {
  const defaultFrameworkNote =
    frameworkNote ||
    "This document represents the General Master Legal Framework of ChittorTech™ (Chittor Technologies). Execution or electronic acceptance of this document legally binds the Client to these baseline operational and governance standards. In addition to this General Agreement, a Project-Specific Addendum (incorporating the definitive Software Requirement Specification [SRS], custom data protection schedules, and project milestone payment schedules) shall be executed separately for each project engagement and shall form an integral, enforceable component of this contract.";

  return (
    <div className="ct-print-contract-root">
      
      {/* ════════════════════ PAGE 1 OF 3 ════════════════════ */}
      <section className="ct-contract-page page-1">
        {/* Top Corporate Letterhead */}
        <div className="ct-letterhead-header">
          <div className="ct-letterhead-left">
            <h1 className="ct-letterhead-title">CHITTORTECH™</h1>
            <span className="ct-letterhead-sub">CHITTOR TECHNOLOGIES • ENTERPRISE SOFTWARE ENGINEERING</span>
          </div>
          <div className="ct-letterhead-right">
            <p><strong>Registered HQ:</strong> Chittorgarh, Rajasthan – 312001, India</p>
            <p><strong>Corporate Email:</strong> contact@chittortech.in | business@chittortech.in</p>
            <p><strong>Hotline:</strong> +91 75974 51057 | <strong>Web:</strong> https://chittortech.in</p>
          </div>
        </div>

        <div className="ct-letterhead-rule"></div>

        {/* Contract Title & Metadata */}
        <div className="ct-contract-meta-strip">
          <div className="meta-left">
            <h2 className="ct-contract-title">{title}</h2>
            <span className="ct-contract-badge">OFFICIAL BINDING MASTER CONTRACT</span>
          </div>
          <div className="meta-right">
            <p><strong>Contract Ref:</strong> {refCode}</p>
            <p><strong>Effective Date:</strong> {effectiveDate}</p>
            <p><strong>Version:</strong> {version}</p>
            <p><strong>Jurisdiction:</strong> {jurisdiction}</p>
          </div>
        </div>

        {/* Page 1 Articles */}
        <div className="ct-articles-flow">
          {page1Articles.map((art, idx) => (
            <article key={idx} className="ct-contract-article">
              <h3 className="ct-article-title">{art.title}</h3>
              <div className="ct-article-content">{art.content}</div>
            </article>
          ))}
        </div>

        {/* Running Footer Page 1 */}
        <div className="ct-page-running-footer">
          <span>ChittorTech™ Master Framework Agreement • {refCode}</span>
          <span className="page-number">Page 1 of 3</span>
        </div>
      </section>

      {/* ════════════════════ PAGE 2 OF 3 ════════════════════ */}
      <section className="ct-contract-page page-2">
        {/* Compact Running Header */}
        <div className="ct-page-running-header">
          <span>CHITTORTECH™ (CHITTOR TECHNOLOGIES) • {title}</span>
          <span>REF: {refCode}</span>
        </div>

        {/* Page 2 Articles */}
        <div className="ct-articles-flow">
          {page2Articles.map((art, idx) => (
            <article key={idx} className="ct-contract-article">
              <h3 className="ct-article-title">{art.title}</h3>
              <div className="ct-article-content">{art.content}</div>
            </article>
          ))}
        </div>

        {/* Running Footer Page 2 */}
        <div className="ct-page-running-footer">
          <span>ChittorTech™ Master Framework Agreement • {refCode}</span>
          <span className="page-number">Page 2 of 3</span>
        </div>
      </section>

      {/* ════════════════════ PAGE 3 OF 3 ════════════════════ */}
      <section className="ct-contract-page page-3">
        {/* Compact Running Header */}
        <div className="ct-page-running-header">
          <span>CHITTORTECH™ (CHITTOR TECHNOLOGIES) • {title}</span>
          <span>REF: {refCode}</span>
        </div>

        {/* Page 3 Articles */}
        <div className="ct-articles-flow">
          {page3Articles.map((art, idx) => (
            <article key={idx} className="ct-contract-article">
              <h3 className="ct-article-title">{art.title}</h3>
              <div className="ct-article-content">{art.content}</div>
            </article>
          ))}
        </div>

        {/* Master Framework Notice (Statutory Box as requested) */}
        <div className="ct-master-framework-notice">
          <div className="notice-header">
            <i className="fa-solid fa-scale-balanced"></i> MASTER LEGAL FRAMEWORK NOTICE &amp; PROJECT ADDENDA MANDATE
          </div>
          <p>{defaultFrameworkNote}</p>
        </div>

        {/* Dual Sign-off & Seal Execution Block */}
        <div className="ct-execution-signatures">
          <div className="execution-header">
            <span>IN WITNESS WHEREOF, THE PARTIES HERETO EXECUTE THIS MASTER AGREEMENT:</span>
          </div>
          
          <div className="signature-columns">
            {/* ChittorTech Signatory */}
            <div className="sig-column provider">
              <div className="sig-party-heading">FOR CHITTORTECH (CHITTOR TECHNOLOGIES)</div>
              <div className="sig-row">
                <span className="sig-lbl">Authorized Signatory:</span>
                <span className="sig-txt">Director / Head of Engineering</span>
              </div>
              <div className="sig-row">
                <span className="sig-lbl">Entity:</span>
                <span className="sig-txt">ChittorTech™, Rajasthan, India</span>
              </div>
              <div className="sig-line-container">
                <span className="sig-lbl">Signature:</span>
                <div className="sig-draw-line"></div>
              </div>
              <div className="sig-row-date">
                <span className="sig-lbl">Date:</span>
                <div className="sig-date-line"></div>
              </div>
              <div className="sig-stamp-box">[ Corporate Seal ]</div>
            </div>

            {/* Client Signatory */}
            <div className="sig-column client">
              <div className="sig-party-heading">FOR THE CLIENT (AUTHORIZED SIGNATORY)</div>
              <div className="sig-row">
                <span className="sig-lbl">Client Entity Name:</span>
                <div className="sig-fill-line"></div>
              </div>
              <div className="sig-row">
                <span className="sig-lbl">Signatory Name &amp; Title:</span>
                <div className="sig-fill-line"></div>
              </div>
              <div className="sig-line-container">
                <span className="sig-lbl">Signature:</span>
                <div className="sig-draw-line"></div>
              </div>
              <div className="sig-row-date">
                <span className="sig-lbl">Date &amp; Place:</span>
                <div className="sig-date-line"></div>
              </div>
              <div className="sig-stamp-box">[ Client Corporate Stamp / Seal ]</div>
            </div>
          </div>
        </div>

        {/* Running Footer Page 3 */}
        <div className="ct-page-running-footer">
          <span>ChittorTech™ Master Framework Agreement • End of Execution Document</span>
          <span className="page-number">Page 3 of 3</span>
        </div>
      </section>

      <style jsx>{`
        /* ─── Hidden on Screen, Activated ONLY on Print ─── */
        .ct-print-contract-root {
          display: none;
        }

        @media print {
          .ct-print-contract-root {
            display: block !important;
            font-family: 'Times New Roman', Times, serif, 'Plus Jakarta Sans', sans-serif !important;
            color: #000000 !important;
            background: #ffffff !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          /* ── Individual Pages (Strict 3-Page Enforcement) ── */
          .ct-contract-page {
            box-sizing: border-box !important;
            width: 100% !important;
            min-height: 275mm !important;
            max-height: 285mm !important;
            padding: 4mm 2mm !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            page-break-after: always !important;
            break-after: page !important;
            overflow: hidden !important;
          }

          .ct-contract-page.page-3 {
            page-break-after: auto !important;
            break-after: auto !important;
          }

          /* Letterhead Header */
          .ct-letterhead-header {
            display: flex !important;
            justify-content: space-between !important;
            align-items: flex-start !important;
            padding-bottom: 3px !important;
          }

          .ct-letterhead-title {
            font-size: 16pt !important;
            font-weight: 900 !important;
            color: #0f172a !important;
            margin: 0 0 1px 0 !important;
            letter-spacing: -0.02em !important;
          }

          .ct-letterhead-sub {
            font-size: 7.5pt !important;
            font-weight: 700 !important;
            color: #475569 !important;
            display: block !important;
          }

          .ct-letterhead-right {
            text-align: right !important;
            font-size: 7.5pt !important;
            color: #334155 !important;
            line-height: 1.3 !important;
          }

          .ct-letterhead-right p {
            margin: 0 !important;
          }

          .ct-letterhead-rule {
            height: 1.5px !important;
            background: #0f172a !important;
            margin: 4px 0 6px 0 !important;
          }

          /* Title & Meta */
          .ct-contract-meta-strip {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            background: #f8fafc !important;
            border: 1px solid #cbd5e1 !important;
            padding: 5px 8px !important;
            margin-bottom: 8px !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .ct-contract-title {
            font-size: 11pt !important;
            font-weight: 900 !important;
            color: #0f172a !important;
            margin: 0 !important;
            letter-spacing: 0.01em !important;
          }

          .ct-contract-badge {
            font-size: 6.5pt !important;
            font-weight: 700 !important;
            color: #1e40af !important;
            display: block !important;
            text-transform: uppercase !important;
          }

          .meta-right {
            text-align: right !important;
            font-size: 7.5pt !important;
            color: #1e293b !important;
            line-height: 1.25 !important;
          }

          .meta-right p {
            margin: 0 !important;
          }

          /* Running Header on Page 2 & 3 */
          .ct-page-running-header {
            display: flex !important;
            justify-content: space-between !important;
            font-size: 7pt !important;
            font-weight: 700 !important;
            color: #64748b !important;
            border-bottom: 1px solid #cbd5e1 !important;
            padding-bottom: 3px !important;
            margin-bottom: 6px !important;
            text-transform: uppercase !important;
          }

          /* Articles Flow */
          .ct-articles-flow {
            display: flex !important;
            flex-direction: column !important;
            gap: 6px !important;
            flex: 1 !important;
          }

          .ct-contract-article {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          .ct-article-title {
            font-size: 9pt !important;
            font-weight: 800 !important;
            color: #0f172a !important;
            margin: 0 0 2px 0 !important;
            border-bottom: 0.5px solid #e2e8f0 !important;
            padding-bottom: 1px !important;
          }

          .ct-article-content {
            font-size: 7.8pt !important;
            color: #1e293b !important;
            line-height: 1.35 !important;
          }

          .ct-article-content :global(p) {
            margin: 0 0 3px 0 !important;
          }

          .ct-article-content :global(ul) {
            margin: 0 0 3px 0 !important;
            padding-left: 14px !important;
          }

          .ct-article-content :global(ul li) {
            margin-bottom: 1.5px !important;
          }

          .ct-article-content :global(table) {
            width: 100% !important;
            border-collapse: collapse !important;
            font-size: 7.2pt !important;
            margin: 3px 0 !important;
          }

          .ct-article-content :global(th) {
            background: #f1f5f9 !important;
            font-weight: 700 !important;
            border: 0.5px solid #94a3b8 !important;
            padding: 2px 4px !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .ct-article-content :global(td) {
            border: 0.5px solid #cbd5e1 !important;
            padding: 2px 4px !important;
          }

          /* Framework Notice Box on Page 3 */
          .ct-master-framework-notice {
            background: #f8fafc !important;
            border: 1px solid #0f172a !important;
            border-left: 3px solid #0f172a !important;
            padding: 5px 8px !important;
            margin: 6px 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .notice-header {
            font-size: 7.5pt !important;
            font-weight: 900 !important;
            color: #0f172a !important;
            margin-bottom: 2px !important;
          }

          .ct-master-framework-notice p {
            font-size: 7.2pt !important;
            color: #334155 !important;
            line-height: 1.35 !important;
            margin: 0 !important;
          }

          /* Dual Signature Execution Block */
          .ct-execution-signatures {
            border: 1px solid #0f172a !important;
            padding: 6px 8px !important;
            margin-top: 4px !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            background: #ffffff !important;
          }

          .execution-header {
            font-size: 7.2pt !important;
            font-weight: 900 !important;
            color: #0f172a !important;
            border-bottom: 1px solid #0f172a !important;
            padding-bottom: 3px !important;
            margin-bottom: 6px !important;
            text-align: center !important;
            letter-spacing: 0.02em !important;
          }

          .signature-columns {
            display: flex !important;
            justify-content: space-between !important;
            gap: 16px !important;
          }

          .sig-column {
            flex: 1 !important;
            border: 0.5px solid #94a3b8 !important;
            padding: 6px !important;
            background: #ffffff !important;
          }

          .sig-party-heading {
            font-size: 7.5pt !important;
            font-weight: 800 !important;
            color: #0f172a !important;
            border-bottom: 0.5px solid #cbd5e1 !important;
            padding-bottom: 3px !important;
            margin-bottom: 4px !important;
            text-transform: uppercase !important;
          }

          .sig-row {
            display: flex !important;
            align-items: center !important;
            gap: 4px !important;
            font-size: 7pt !important;
            margin-bottom: 3px !important;
          }

          .sig-lbl {
            font-weight: 700 !important;
            color: #334155 !important;
            font-size: 6.8pt !important;
          }

          .sig-txt {
            font-weight: 600 !important;
            color: #0f172a !important;
          }

          .sig-fill-line {
            flex: 1 !important;
            border-bottom: 0.5px dotted #64748b !important;
            height: 12px !important;
          }

          .sig-line-container {
            margin-top: 4px !important;
          }

          .sig-draw-line {
            border-bottom: 1px solid #0f172a !important;
            height: 22px !important;
            margin-top: 2px !important;
          }

          .sig-row-date {
            display: flex !important;
            align-items: center !important;
            gap: 4px !important;
            margin-top: 4px !important;
          }

          .sig-date-line {
            width: 80px !important;
            border-bottom: 0.5px dotted #64748b !important;
            height: 12px !important;
          }

          .sig-stamp-box {
            border: 0.5px dashed #94a3b8 !important;
            height: 30px !important;
            margin-top: 6px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            font-size: 6.5pt !important;
            color: #64748b !important;
            text-transform: uppercase !important;
          }

          /* Running Footer */
          .ct-page-running-footer {
            display: flex !important;
            justify-content: space-between !important;
            font-size: 6.8pt !important;
            color: #64748b !important;
            border-top: 0.5px solid #cbd5e1 !important;
            padding-top: 2px !important;
            margin-top: 4px !important;
          }

          .page-number {
            font-weight: 700 !important;
            color: #0f172a !important;
          }
        }
      `}</style>
    </div>
  );
}
