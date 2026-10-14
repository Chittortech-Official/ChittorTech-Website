"use client";

import React, { useRef, useState } from "react";

export default function ChittorTechInvoiceViewModal({ invoice, onClose }) {
  const [downloading, setDownloading] = useState(false);
  const previewRef = useRef(null);

  if (!invoice) return null;

  // Format currency in Indian numbering system
  const fmt = (num) => {
    const val = Number(num) || 0;
    return val.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const fmtDate = (raw) => {
    if (!raw) return "—";
    const d = new Date(raw);
    return isNaN(d)
      ? raw
      : d.toLocaleDateString("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
  };

  // Derive invoice fields with sensible fallbacks
  const invoiceId = invoice.invoiceId || invoice.docNumber || "CT/2026/001";
  const invoiceDate = fmtDate(invoice.invoiceDate || invoice.createdAt || invoice.createdDateString);
  const dueDate = fmtDate(invoice.dueDate);
  const status = (invoice.status || "UNPAID").toUpperCase();
  const isPaid = status === "PAID";

  const company = {
    name: invoice.companyName || "ChittorTech",
    address: invoice.companyAddress || "Chittorgarh, Rajasthan – 312001",
    phone: invoice.companyPhone || "+91 7597451057",
    email: invoice.companyEmail || "business@chittortech.in",
    website: invoice.companyWebsite || "chittortech.in",
  };

  const client = {
    name: invoice.clientName || invoice.clientId || "Valued Client",
    address: invoice.clientAddress || "Rajasthan, India",
    phone: invoice.clientPhone || "—",
    email: invoice.clientEmail || invoice.clientId || "—",
  };

  // Line items
  const items = Array.isArray(invoice.items) && invoice.items.length > 0
    ? invoice.items
    : [
        {
          id: 1,
          description: invoice.title || invoice.projectName || "Enterprise Software Engineering & Cloud Deliverable",
          qty: 1,
          rate: Number(invoice.amount) || 0,
        },
      ];

  const subtotal = items.reduce((acc, item) => acc + (Number(item.qty || 1) * Number(item.rate || 0)), 0);
  const taxPct = Number(invoice.taxPct || invoice.salesTaxPct || 0);
  const taxAmt = (subtotal * taxPct) / 100;
  const grandTotal = invoice.amount && items.length === 1 && items[0].rate === Number(invoice.amount) && taxPct === 0
    ? Number(invoice.amount)
    : subtotal + taxAmt;

  const paymentMode = invoice.paymentMode || "Bank Transfer";
  const paymentInfo = invoice.paymentInfo || "Account Name: ChittorTech\nBank: ICICI Bank / HDFC Bank\nUPI ID: chittortech@icici";

  const termsList = Array.isArray(invoice.terms) && invoice.terms.length > 0
    ? invoice.terms
    : (invoice.termsText
        ? invoice.termsText.split("\n").filter((t) => t.trim())
        : [
            "Payment is due upon receipt of this milestone invoice.",
            "Work milestone source deliverables will be released upon clearance.",
            "All payments should be remitted to official ChittorTech accounts only.",
          ]);

  // Handle high-resolution PDF download
  const handleDownloadPDF = async () => {
    if (!previewRef.current) return;
    setDownloading(true);

    try {
      // Dynamically import html2canvas and jspdf
      const html2canvas = (await import("html2canvas")).default;
      const { jsPDF } = await import("jspdf");

      const element = previewRef.current;
      const canvas = await html2canvas(element, {
        scale: 3,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
        width: element.scrollWidth,
        height: element.scrollHeight,
      });

      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfW = pdf.internal.pageSize.getWidth();
      const pdfH = pdf.internal.pageSize.getHeight();
      const ratio = canvas.height / canvas.width;
      const imgH = pdfW * ratio;

      if (imgH <= pdfH + 2) {
        pdf.addImage(imgData, "JPEG", 0, 0, pdfW, Math.min(imgH, pdfH));
      } else {
        let yPos = 0;
        let remaining = imgH;
        while (remaining > 0) {
          if (yPos > 0) pdf.addPage();
          pdf.addImage(imgData, "JPEG", 0, -yPos, pdfW, imgH);
          yPos += pdfH;
          remaining -= pdfH;
        }
      }

      const safeName = (client.name || "Client").replace(/[^a-zA-Z0-9_-]/g, "_");
      const safeId = invoiceId.replace(/[^a-zA-Z0-9_-]/g, "_");
      pdf.save(`ChittorTech_Invoice_${safeId}_${safeName}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
      // Fallback to window print
      window.print();
    } finally {
      setDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="chittortech-invoice-modal-overlay"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(11, 37, 69, 0.75)",
        backdropFilter: "blur(6px)",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "16px",
        overflowY: "auto",
      }}
    >
      {/* Top Action Bar (hidden in print) */}
      <div
        className="no-print"
        style={{
          width: "100%",
          maxWidth: "210mm",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "12px 20px",
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0B2545" }}>
            Invoice Preview
          </span>
          <span
            style={{
              padding: "3px 10px",
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: 800,
              backgroundColor: isPaid ? "#ecfdf5" : "#fffbeb",
              color: isPaid ? "#10b981" : "#d97706",
              border: `1px solid ${isPaid ? "#a7f3d0" : "#fde68a"}`,
            }}
          >
            {isPaid ? "✓ PAID" : "⏳ UNPAID / DUE"}
          </span>
        </div>

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button
            onClick={handlePrint}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "#f1f5f9",
              color: "#0f172a",
              border: "1.5px solid #cbd5e1",
              borderRadius: "8px",
              padding: "8px 16px",
              fontSize: "0.85rem",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            <i className="fas fa-print"></i> Print
          </button>

          <button
            onClick={handleDownloadPDF}
            disabled={downloading}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "#3CBFB4",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              padding: "8px 18px",
              fontSize: "0.85rem",
              fontWeight: 700,
              cursor: downloading ? "wait" : "pointer",
              boxShadow: "0 2px 6px rgba(60, 191, 180, 0.4)",
            }}
          >
            {downloading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> Generating PDF...
              </>
            ) : (
              <>
                <i className="fas fa-file-pdf"></i> Download PDF
              </>
            )}
          </button>

          <button
            onClick={onClose}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#64748b",
              fontSize: "1.3rem",
              cursor: "pointer",
              padding: "4px 8px",
              marginLeft: "6px",
            }}
            title="Close Preview"
          >
            &times;
          </button>
        </div>
      </div>

      {/* Printable Invoice Container */}
      <div id="print-area" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div
          ref={previewRef}
          id="invoice-preview"
          style={{
            fontFamily: "'Inter', 'Outfit', Arial, sans-serif",
            backgroundColor: "#ffffff",
            color: "#1A1A1A",
            width: "210mm",
            minHeight: "297mm",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            padding: "44px 34px 0 34px",
            fontSize: "12.5px",
            lineHeight: "1.55",
            position: "relative",
            boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          {/* Centered page watermark */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/chittortech_logo.png"
            alt=""
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "55%",
              opacity: 0.08,
              pointerEvents: "none",
              zIndex: 1,
              userSelect: "none",
            }}
          />

          {/* Body content wrapper */}
          <div style={{ flex: 1, position: "relative", zIndex: 2 }}>
            {/* 1. TITLE */}
            <h1
              style={{
                fontSize: "28px",
                fontWeight: 800,
                color: "#0B2545",
                margin: "0 0 11px 0",
                letterSpacing: "-0.3px",
                lineHeight: "1.1",
              }}
            >
              Invoice Service
            </h1>

            {/* 2. TOP BANNER */}
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "60px",
                marginBottom: "16px",
              }}
            >
              {/* Navy left */}
              <div
                style={{
                  backgroundColor: "#0B2545",
                  color: "#ffffff",
                  padding: "0 18px",
                  flex: "0 0 54%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "4px",
                }}
              >
                <p style={{ margin: 0, fontSize: "12px" }}>
                  <strong style={{ fontWeight: 700, marginRight: "5px" }}>Invoice Number:</strong>
                  <span>{invoiceId}</span>
                </p>
                <p style={{ margin: 0, fontSize: "12px" }}>
                  <strong style={{ fontWeight: 700, marginRight: "5px" }}>Invoice Date:</strong>
                  <span>{invoiceDate}</span>
                </p>
              </div>

              {/* Light gray right with logo & right navy bar */}
              <div
                style={{
                  backgroundColor: "#E8EDF3",
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  padding: "0 46px 0 14px",
                  gap: "11px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/chittortech_logo.png"
                  alt="ChittorTech Logo"
                  style={{ height: "48px", width: "auto", objectFit: "contain" }}
                />
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: 800,
                    color: "#0B2545",
                    margin: 0,
                    letterSpacing: "-0.5px",
                  }}
                >
                  ChittorTech
                </h2>
                {/* Navy accent bar on the right */}
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: "13px",
                    backgroundColor: "#0B2545",
                  }}
                />
              </div>
            </div>

            {/* 3. DASHED TEAL DIVIDER */}
            <hr
              style={{
                border: "none",
                borderTop: "1.5px dashed #3CBFB4",
                margin: "0 0 16px 0",
              }}
            />

            {/* 4. BILLING INFORMATION & BILL TO */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "18px",
                marginBottom: "18px",
              }}
            >
              {/* Billing Information (ChittorTech) */}
              <div>
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: 900,
                    color: "#000000",
                    margin: "0 0 7px 0",
                  }}
                >
                  Billing Information:
                </h3>
                <p style={{ margin: "0 0 3px 0", fontSize: "12px", color: "#4A4A4A" }}>
                  <strong style={{ color: "#1A1A1A", fontWeight: 600 }}>Company Name: </strong>
                  {company.name}
                </p>
                <p style={{ margin: "0 0 3px 0", fontSize: "12px", color: "#4A4A4A" }}>
                  <strong style={{ color: "#1A1A1A", fontWeight: 600 }}>Company Address: </strong>
                  {company.address}
                </p>
                <p style={{ margin: "0 0 3px 0", fontSize: "12px", color: "#4A4A4A" }}>
                  <strong style={{ color: "#1A1A1A", fontWeight: 600 }}>Phone Number: </strong>
                  {company.phone}
                </p>
                <p style={{ margin: "0 0 3px 0", fontSize: "12px", color: "#4A4A4A" }}>
                  <strong style={{ color: "#1A1A1A", fontWeight: 600 }}>Email: </strong>
                  {company.email}
                </p>
              </div>

              {/* Bill To (Client) */}
              <div>
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: 900,
                    color: "#000000",
                    margin: "0 0 7px 0",
                  }}
                >
                  Bill To:
                </h3>
                <p style={{ margin: "0 0 3px 0", fontSize: "12px", color: "#4A4A4A" }}>
                  <strong style={{ color: "#1A1A1A", fontWeight: 600 }}>Customer Name: </strong>
                  {client.name}
                </p>
                <p style={{ margin: "0 0 3px 0", fontSize: "12px", color: "#4A4A4A" }}>
                  <strong style={{ color: "#1A1A1A", fontWeight: 600 }}>Billing Address: </strong>
                  {client.address}
                </p>
                <p style={{ margin: "0 0 3px 0", fontSize: "12px", color: "#4A4A4A" }}>
                  <strong style={{ color: "#1A1A1A", fontWeight: 600 }}>Phone: </strong>
                  {client.phone}
                </p>
                <p style={{ margin: "0 0 3px 0", fontSize: "12px", color: "#4A4A4A" }}>
                  <strong style={{ color: "#1A1A1A", fontWeight: 600 }}>Email: </strong>
                  {client.email}
                </p>
              </div>
            </div>

            {/* 5. SERVICE TABLE */}
            <h2
              style={{
                fontSize: "14px",
                fontWeight: 900,
                color: "#000000",
                margin: "0 0 7px 0",
              }}
            >
              Service Details:
            </h2>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginBottom: "0px",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#3CBFB4" }}>
                  <th
                    style={{
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "11.5px",
                      padding: "8px 10px",
                      textAlign: "left",
                      width: "32px",
                    }}
                  >
                    No
                  </th>
                  <th
                    style={{
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "11.5px",
                      padding: "8px 10px",
                      textAlign: "left",
                    }}
                  >
                    Item Description
                  </th>
                  <th
                    style={{
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "11.5px",
                      padding: "8px 10px",
                      textAlign: "center",
                      width: "88px",
                    }}
                  >
                    Hours/Units
                  </th>
                  <th
                    style={{
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "11.5px",
                      padding: "8px 10px",
                      textAlign: "right",
                      width: "110px",
                    }}
                  >
                    Rate/Unit (₹)
                  </th>
                  <th
                    style={{
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "11.5px",
                      padding: "8px 10px",
                      textAlign: "right",
                      width: "100px",
                    }}
                  >
                    Total (₹)
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, idx) => {
                  const lineTotal = Number(item.qty || 1) * Number(item.rate || 0);
                  const isEven = idx % 2 === 1;
                  return (
                    <tr
                      key={item.id || idx}
                      style={{
                        backgroundColor: isEven ? "rgba(244,246,248,0.85)" : "rgba(255,255,255,0.85)",
                      }}
                    >
                      <td style={{ padding: "7px 10px", fontSize: "12px", fontWeight: 700, color: "#1A1A1A" }}>
                        {idx + 1}
                      </td>
                      <td style={{ padding: "7px 10px", fontSize: "12px", color: "#334155" }}>
                        {item.description}
                      </td>
                      <td style={{ padding: "7px 10px", fontSize: "12px", textAlign: "center", color: "#4A4A4A" }}>
                        {item.qty || 1}
                      </td>
                      <td style={{ padding: "7px 10px", fontSize: "12px", textAlign: "right", color: "#4A4A4A" }}>
                        ₹{fmt(item.rate)}
                      </td>
                      <td style={{ padding: "7px 10px", fontSize: "12px", textAlign: "right", color: "#4A4A4A" }}>
                        ₹{fmt(lineTotal)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* 6. TOTALS BOX */}
            <div
              style={{
                backgroundColor: "#0B2545",
                color: "#ffffff",
                padding: "9px 14px",
                display: "flex",
                flexDirection: "column",
                gap: "3px",
                marginBottom: "18px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                <span>Subtotal</span>
                <span>₹{fmt(subtotal)}</span>
              </div>

              {taxPct > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                  <span>Sales Tax ({taxPct}%)</span>
                  <span>₹{fmt(taxAmt)}</span>
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "13.5px",
                  fontWeight: 800,
                  borderTop: "1px solid rgba(255,255,255,0.25)",
                  paddingTop: "5px",
                  marginTop: "3px",
                }}
              >
                <span>{isPaid ? "Total Amount Paid" : "Total Amount Due"}</span>
                <span>₹{fmt(grandTotal)}</span>
              </div>
            </div>

            {/* 7. LOWER BOXED SECTION */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "18px",
                marginBottom: "18px",
              }}
            >
              {/* Billing / Payment Information Card */}
              <div
                style={{
                  border: "1.5px solid #D8DDE3",
                  borderRadius: "4px",
                  padding: "13px 15px",
                  backgroundColor: "rgba(255,255,255,0.8)",
                }}
              >
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: 900,
                    color: "#000000",
                    margin: "0 0 9px 0",
                    paddingBottom: "6px",
                    borderBottom: "1.5px solid #D8DDE3",
                  }}
                >
                  Billing Information:
                </h3>
                <p style={{ margin: "0 0 4px 0", fontSize: "12px", color: "#4A4A4A" }}>
                  <strong style={{ color: "#1A1A1A", fontWeight: 600 }}>Date: </strong>
                  {invoiceDate}
                </p>
                <p style={{ margin: "0 0 4px 0", fontSize: "12px", color: "#4A4A4A" }}>
                  <strong style={{ color: "#1A1A1A", fontWeight: 600 }}>Payment Method: </strong>
                  {paymentMode}
                </p>
                <p style={{ margin: "0 0 4px 0", fontSize: "12px", color: "#4A4A4A" }}>
                  <strong style={{ color: "#1A1A1A", fontWeight: 600 }}>Due Date: </strong>
                  {dueDate}
                </p>
                <div
                  style={{
                    marginTop: "6px",
                    whiteSpace: "pre-line",
                    fontSize: "11.5px",
                    color: "#4A4A4A",
                    lineHeight: "1.4",
                    backgroundColor: "#f8fafc",
                    padding: "6px 8px",
                    borderRadius: "4px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  {paymentInfo}
                </div>
              </div>

              {/* Terms and Conditions Card */}
              <div
                style={{
                  border: "1.5px solid #D8DDE3",
                  borderRadius: "4px",
                  padding: "13px 15px",
                  backgroundColor: "rgba(255,255,255,0.8)",
                }}
              >
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: 900,
                    color: "#000000",
                    margin: "0 0 9px 0",
                    paddingBottom: "6px",
                    borderBottom: "1.5px solid #D8DDE3",
                  }}
                >
                  Terms and Conditions:
                </h3>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "16px",
                    fontSize: "11.5px",
                    color: "#4A4A4A",
                  }}
                >
                  {termsList.map((term, tIdx) => (
                    <li key={tIdx} style={{ marginBottom: "5px", lineHeight: "1.5" }}>
                      {term}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 8. SIGNATURE / AUTHORIZED SEAL AREA */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingRight: "4px",
                marginBottom: "16px",
              }}
            >
              <div style={{ textAlign: "right", minWidth: "200px" }}>
                <div style={{ fontSize: "12px", fontWeight: 600, color: "#1A1A1A", marginBottom: "8px" }}>
                  Date: {invoiceDate}
                </div>
                <div style={{ height: "45px" }}></div>
                <div
                  style={{
                    borderTop: "1.5px solid #1A1A1A",
                    paddingTop: "5px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#1A1A1A",
                  }}
                >
                  Authorized Signatory (ChittorTech)
                </div>
              </div>
            </div>
          </div>

          {/* 9. FOOTER BAR – anchored to bottom via margin-top: auto */}
          <div
            style={{
              backgroundColor: "#0B2545",
              color: "#ffffff",
              padding: "11px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "12px",
              marginTop: "auto",
              position: "relative",
              zIndex: 2,
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <i className="fas fa-phone"></i> {company.phone}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <i className="fas fa-envelope"></i> {company.email}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <i className="fas fa-globe"></i> {company.website}
            </span>
          </div>
        </div>
      </div>

      {/* Embedded print styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
            overflow: visible !important;
            height: auto !important;
          }
          .no-print,
          header,
          footer,
          nav,
          .chittortech-invoice-modal-overlay > .no-print {
            display: none !important;
          }
          .chittortech-invoice-modal-overlay {
            position: static !important;
            background: #ffffff !important;
            padding: 0 !important;
            overflow: visible !important;
          }
          #print-area {
            display: block !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          #invoice-preview {
            width: 100% !important;
            min-height: 297mm !important;
            height: auto !important;
            padding: 14mm 16mm 0 16mm !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          tr {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
