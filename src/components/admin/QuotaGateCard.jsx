"use client";

import React from "react";

export default function QuotaGateCard({
  icon = "fa-shield-halved",
  badge = "Enterprise Security Shield",
  title = "Protected Admin Module",
  subtitle = "Live telemetry stream is kept on secure standby in accordance with enterprise zero-trust standards.",
  description = "Click below only when you need to access this module.",
  buttonLabel = "Load Module",
  buttonColor = "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
  buttonShadow = "rgba(2, 132, 199, 0.3)",
  onConfirm,
}) {
  return (
    <div
      style={{
        maxWidth: "680px",
        margin: "60px auto",
        padding: "44px 36px",
        background: "#ffffff",
        borderRadius: "24px",
        border: "1.5px solid #e2e8f0",
        boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.08)",
        textAlign: "center",
      }}
    >
      <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <img
          src="/favicon.png"
          alt="ChittorTech"
          style={{ width: "40px", height: "40px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.08)" }}
        />
        <div style={{ textAlign: "left" }}>
          <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.1 }}>
            ChittorTech<span style={{ color: "#0284c7" }}>™</span> Console
          </div>
          <div style={{ fontSize: "0.72rem", color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>
            Enterprise Security Protocol
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "#f0fdf4",
            color: "#15803d",
            border: "1px solid #bbf7d0",
            fontSize: "0.75rem",
            fontWeight: 800,
            padding: "4px 12px",
            borderRadius: "20px",
            letterSpacing: "0.4px",
          }}
        >
          <i className="fas fa-shield-halved" style={{ fontSize: "0.75rem" }}></i>
          {badge}
        </span>
      </div>

      <h2 style={{ fontSize: "1.55rem", fontWeight: 800, color: "#0f172a", margin: "0 0 10px 0", letterSpacing: "-0.4px" }}>
        {title}
      </h2>

      <p style={{ fontSize: "0.92rem", color: "#64748b", margin: "0 0 20px 0", lineHeight: 1.55 }}>
        {subtitle}
      </p>

      <div
        style={{
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: "14px",
          padding: "16px 20px",
          marginBottom: "28px",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              background: "#e0f2fe",
              color: "#0284c7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              fontSize: "1rem",
            }}
          >
            <i className={`fas ${icon}`}></i>
          </div>
          <div>
            <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0f172a", marginBottom: "3px" }}>
              Enterprise Session Authorization Required
            </div>
            <div style={{ fontSize: "0.82rem", color: "#475569", lineHeight: 1.5 }}>
              {description}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onConfirm}
        style={{
          background: buttonColor,
          color: "#ffffff",
          border: "none",
          padding: "13px 32px",
          borderRadius: "12px",
          fontSize: "0.95rem",
          fontWeight: 800,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          boxShadow: `0 8px 20px ${buttonShadow}`,
          transition: "transform 0.15s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        <i className="fas fa-play" style={{ fontSize: "0.8rem" }}></i>
        <span>{buttonLabel}</span>
      </button>

      <div style={{ marginTop: "18px", fontSize: "0.78rem", color: "#94a3b8", fontWeight: 500 }}>
        🔒 Protected by ChittorTech Enterprise Zero-Trust Multi-Layer Security Architecture.
      </div>
    </div>
  );
}
