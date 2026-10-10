"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export default function GlobalHubTemplate({ hub }) {
  // Interactive ROI Calculator State
  const [devCount, setDevCount] = useState(3);
  const [durationMonths, setDurationMonths] = useState(6);
  const [activeFaq, setActiveFaq] = useState(0);

  // Calculate Savings
  const hoursPerMonth = 160;
  const localTotal = useMemo(() => {
    return devCount * durationMonths * hoursPerMonth * hub.localHourlyRate;
  }, [devCount, durationMonths, hub.localHourlyRate]);

  const ctTotal = useMemo(() => {
    return devCount * durationMonths * hoursPerMonth * hub.ctHourlyRate;
  }, [devCount, durationMonths, hub.ctHourlyRate]);

  const savingsTotal = localTotal - ctTotal;
  const formatCurrency = (val) => {
    return `${hub.currencySymbol}${val.toLocaleString()}`;
  };

  return (
    <div className="global-hub-page" style={{ backgroundColor: "#060b18", color: "#f8fafc", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      
      {/* ─── Embedded High-Contrast Overrides ─── */}
      <style>{`
        .global-hub-page h1, 
        .global-hub-page h2, 
        .global-hub-page h3, 
        .global-hub-page h4, 
        .global-hub-page h5 {
          color: #ffffff !important;
          font-weight: 800;
        }
        .global-hub-page p {
          color: #94a3b8 !important;
        }
        .gh-card {
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gh-card:hover {
          border-color: rgba(56, 189, 248, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
        }
      `}</style>

      {/* ─── Hero Section ─── */}
      <section style={{
        position: "relative",
        padding: "110px 20px 85px",
        background: "radial-gradient(circle at 50% 20%, rgba(37, 99, 235, 0.2) 0%, rgba(6, 11, 24, 1) 75%)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        overflow: "hidden"
      }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          
          {/* Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(37, 99, 235, 0.15)",
            border: "1px solid rgba(59, 130, 246, 0.4)",
            padding: "8px 20px",
            borderRadius: "9999px",
            fontSize: "14px",
            fontWeight: 700,
            color: "#60a5fa",
            marginBottom: "28px"
          }}>
            <span style={{ fontSize: "18px" }}>{hub.flag}</span>
            <span>{hub.regionLabel}</span>
            <span style={{ color: "#64748b" }}>•</span>
            <span style={{ color: "#34d399" }}>{hub.badge}</span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: "clamp(34px, 5vw, 54px)",
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: "960px",
            margin: "0 auto 24px",
            color: "#ffffff"
          }}>
            {hub.heroTitle}
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            color: "#cbd5e1 !important",
            maxWidth: "840px",
            margin: "0 auto 40px"
          }}>
            {hub.heroSubtitle}
          </p>

          {/* Dual CTAs */}
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                padding: "18px 38px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.5)",
                transition: "all 0.2s ease"
              }}
            >
              <span>Schedule Architecture Consultation</span>
              <span>&rarr;</span>
            </Link>

            <Link
              href="/demo"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                color: "#f8fafc",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                padding: "18px 34px",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <i className="fa-solid fa-laptop-code" style={{ color: "#60a5fa" }}></i>
              <span>Request 2-Week Risk-Free Pilot</span>
            </Link>
          </div>

          {/* Trust Metrics Bar */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: "18px",
            maxWidth: "960px",
            margin: "0 auto",
            padding: "24px",
            background: "rgba(15, 23, 42, 0.75)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "18px"
          }}>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#38bdf8" }}>{hub.savingsPercentage}%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Average Budget Saved</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#34d399" }}>72 Hours</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Rapid Pod Onboarding</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#a855f7" }}>100%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Client Code &amp; IP Ownership</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#f59e0b" }}>Top 3%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Vetted Senior Engineers</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Interactive Cost-Savings & ROI Calculator ─── */}
      <section style={{ padding: "85px 20px", background: "#0b1222", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
        <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ fontSize: "13px", fontWeight: 800, color: "#38bdf8", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              Economic Leverage Calculator
            </span>
            <h2 style={{ fontSize: "34px", fontWeight: 900, marginTop: "8px", color: "#ffffff" }}>
              Calculate Your Exact Development Cost Savings
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "16px", maxWidth: "700px", margin: "10px auto 0" }}>
              Compare standard domestic in-house rates in {hub.name} against ChittorTech’s dedicated senior engineering pod.
            </p>
          </div>

          <div style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(59, 130, 246, 0.25)",
            borderRadius: "22px",
            padding: "40px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)"
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px", alignItems: "center" }}>
              
              {/* Sliders Side */}
              <div>
                <div style={{ marginBottom: "32px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <label style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>Number of Full-Time Engineers</label>
                    <span style={{ fontSize: "18px", fontWeight: 900, color: "#38bdf8" }}>{devCount} Developers</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={devCount}
                    onChange={(e) => setDevCount(parseInt(e.target.value))}
                    style={{ width: "100%", accentColor: "#2563eb", cursor: "pointer", height: "8px" }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#64748b", marginTop: "6px" }}>
                    <span>1 Dev</span>
                    <span>5 Devs</span>
                    <span>10 Devs</span>
                  </div>
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <label style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>Project Engagement Duration</label>
                    <span style={{ fontSize: "18px", fontWeight: 900, color: "#38bdf8" }}>{durationMonths} Months</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={durationMonths}
                    onChange={(e) => setDurationMonths(parseInt(e.target.value))}
                    style={{ width: "100%", accentColor: "#2563eb", cursor: "pointer", height: "8px" }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#64748b", marginTop: "6px" }}>
                    <span>1 Month</span>
                    <span>6 Months</span>
                    <span>12 Months</span>
                  </div>
                </div>

                <div style={{ marginTop: "28px", padding: "16px", background: "rgba(6, 11, 24, 0.8)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)", fontSize: "13px", color: "#94a3b8" }}>
                  <i className="fa-solid fa-circle-info" style={{ color: "#38bdf8", marginRight: "8px" }}></i>
                  Based on benchmark senior rates: <strong>{formatCurrency(hub.localHourlyRate)}/hr</strong> ({hub.name}) vs <strong>{formatCurrency(hub.ctHourlyRate)}/hr</strong> (ChittorTech).
                </div>
              </div>

              {/* Cost Comparison Results Box */}
              <div style={{
                background: "linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 58, 138, 0.35) 100%)",
                border: "1px solid rgba(59, 130, 246, 0.4)",
                borderRadius: "18px",
                padding: "32px",
                textAlign: "center"
              }}>
                <div style={{ fontSize: "13px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1.5px" }}>Total Estimated Savings</div>
                <div style={{ fontSize: "44px", fontWeight: 900, color: "#34d399", margin: "10px 0" }}>
                  {formatCurrency(savingsTotal)}
                </div>
                <div style={{ fontSize: "14px", color: "#60a5fa", fontWeight: 700, marginBottom: "24px" }}>
                  You retain {hub.savingsPercentage}% of your technical budget
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", textAlign: "left", marginBottom: "24px" }}>
                  <div style={{ padding: "14px", background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.25)", borderRadius: "12px" }}>
                    <div style={{ fontSize: "11px", color: "#f87171", textTransform: "uppercase", fontWeight: 700 }}>Domestic {hub.name} Cost</div>
                    <div style={{ fontSize: "19px", fontWeight: 900, color: "#ffffff", marginTop: "4px" }}>{formatCurrency(localTotal)}</div>
                  </div>
                  <div style={{ padding: "14px", background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.25)", borderRadius: "12px" }}>
                    <div style={{ fontSize: "11px", color: "#34d399", textTransform: "uppercase", fontWeight: 700 }}>ChittorTech Pod</div>
                    <div style={{ fontSize: "19px", fontWeight: 900, color: "#ffffff", marginTop: "4px" }}>{formatCurrency(ctTotal)}</div>
                  </div>
                </div>

                <Link
                  href="/contact-us"
                  style={{
                    display: "block",
                    width: "100%",
                    backgroundColor: "#2563eb",
                    color: "#ffffff",
                    padding: "16px",
                    borderRadius: "12px",
                    fontWeight: 800,
                    fontSize: "15px",
                    textDecoration: "none",
                    textAlign: "center",
                    boxShadow: "0 8px 20px rgba(37, 99, 235, 0.5)"
                  }}
                >
                  Lock In This Pod Capacity &rarr;
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─── Regional Pain Points vs ChittorTech Solution Grid ─── */}
      <section style={{ padding: "85px 20px", maxWidth: "1140px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span style={{ fontSize: "13px", fontWeight: 800, color: "#f59e0b", textTransform: "uppercase", letterSpacing: "1.5px" }}>
            Overcoming Market Bottlenecks
          </span>
          <h2 style={{ fontSize: "34px", fontWeight: 900, marginTop: "8px", color: "#ffffff" }}>
            Why Leading Companies in {hub.name} Choose ChittorTech
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {hub.painPoints.map((p, idx) => (
            <div
              key={idx}
              className="gh-card"
              style={{ padding: "32px" }}
            >
              <div style={{ color: "#ef4444", fontSize: "18px", fontWeight: 800, marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fa-solid fa-triangle-exclamation"></i>
                <span style={{ color: "#ffffff" }}>{p.issue}</span>
              </div>
              <p style={{ color: "#94a3b8 !important", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>
                {p.impact}
              </p>
              <div style={{
                background: "rgba(37, 99, 235, 0.12)",
                border: "1px solid rgba(59, 130, 246, 0.25)",
                borderRadius: "10px",
                padding: "16px",
                color: "#60a5fa",
                fontSize: "13px",
                lineHeight: 1.5
              }}>
                <strong style={{ color: "#ffffff", display: "block", marginBottom: "6px" }}>
                  <i className="fa-solid fa-circle-check" style={{ color: "#34d399", marginRight: "8px" }}></i>
                  ChittorTech Resolution:
                </strong>
                {hub.solutions[idx] ? hub.solutions[idx].desc : "Pre-vetted senior engineering pods delivering superior velocity."}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Timezone Overlap & Synchronous Sprint Model ─── */}
      <section style={{ padding: "85px 20px", background: "#0b1222", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
        <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <span style={{ fontSize: "13px", fontWeight: 800, color: "#38bdf8", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              Timezone Synergy
            </span>
            <h2 style={{ fontSize: "34px", fontWeight: 900, marginTop: "8px", color: "#ffffff" }}>
              {hub.timezoneInfo.overlapHours}
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "16px", maxWidth: "720px", margin: "10px auto 0" }}>
              {hub.timezoneInfo.schedule}
            </p>
          </div>

          <div style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(59, 130, 246, 0.25)",
            borderRadius: "20px",
            padding: "32px"
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", textAlign: "center" }}>
              <div style={{ padding: "18px", background: "rgba(6, 11, 24, 0.8)", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <div style={{ fontSize: "12px", color: "#94a3b8", textTransform: "uppercase", fontWeight: 700 }}>Target Market Zone</div>
                <div style={{ fontSize: "19px", fontWeight: 800, color: "#60a5fa", marginTop: "6px" }}>{hub.timezoneInfo.marketTimezone}</div>
              </div>
              <div style={{ padding: "18px", background: "rgba(6, 11, 24, 0.8)", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <div style={{ fontSize: "12px", color: "#94a3b8", textTransform: "uppercase", fontWeight: 700 }}>Offset from India (IST)</div>
                <div style={{ fontSize: "19px", fontWeight: 800, color: "#f59e0b", marginTop: "6px" }}>{hub.timezoneInfo.offsetFromIST}</div>
              </div>
              <div style={{ padding: "18px", background: "rgba(6, 11, 24, 0.8)", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <div style={{ fontSize: "12px", color: "#94a3b8", textTransform: "uppercase", fontWeight: 700 }}>Sprint Standups</div>
                <div style={{ fontSize: "19px", fontWeight: 800, color: "#34d399", marginTop: "6px" }}>Live Video Daily</div>
              </div>
              <div style={{ padding: "18px", background: "rgba(6, 11, 24, 0.8)", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <div style={{ fontSize: "12px", color: "#94a3b8", textTransform: "uppercase", fontWeight: 700 }}>Slack / Teams SLA</div>
                <div style={{ fontSize: "19px", fontWeight: 800, color: "#38bdf8", marginTop: "6px" }}>&lt; 15 Mins Response</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Regional Compliance & Legal Shield ─── */}
      <section style={{ padding: "85px 20px", maxWidth: "1140px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span style={{ fontSize: "13px", fontWeight: 800, color: "#34d399", textTransform: "uppercase", letterSpacing: "1.5px" }}>
            Airtight Trust &amp; Governance
          </span>
          <h2 style={{ fontSize: "34px", fontWeight: 900, marginTop: "8px", color: "#ffffff" }}>
            Institutional Compliance &amp; Legal Framework
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "16px", marginTop: "8px" }}>
            Designed for frictionless corporate procurement, risk mitigation, and complete IP protection.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
          {hub.regionalCompliance.map((item, idx) => (
            <div
              key={idx}
              className="gh-card"
              style={{ padding: "28px" }}
            >
              <div style={{ color: "#34d399", fontSize: "24px", marginBottom: "14px" }}>
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <div style={{ fontSize: "17px", fontWeight: 800, color: "#ffffff", marginBottom: "8px" }}>
                {item.title}
              </div>
              <div style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.6 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Case Studies / Proven Outcomes ─── */}
      <section style={{ padding: "85px 20px", background: "#0b1222", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
        <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ fontSize: "13px", fontWeight: 800, color: "#38bdf8", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              Proven Track Record
            </span>
            <h2 style={{ fontSize: "34px", fontWeight: 900, marginTop: "8px", color: "#ffffff" }}>
              Measurable Outcomes Delivered
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))", gap: "28px" }}>
            {hub.caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="gh-card"
                style={{ padding: "36px" }}
              >
                <div style={{ fontSize: "32px", fontWeight: 900, color: "#34d399", marginBottom: "8px" }}>
                  {cs.metric}
                </div>
                <div style={{ fontSize: "18px", fontWeight: 800, color: "#ffffff", marginBottom: "12px" }}>
                  {cs.company}
                </div>
                <p style={{ fontSize: "14px", color: "#94a3b8 !important", lineHeight: 1.65, margin: 0 }}>
                  {cs.summary}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── Frequently Asked Questions (FAQ) ─── */}
      <section style={{ padding: "85px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span style={{ fontSize: "13px", fontWeight: 800, color: "#f59e0b", textTransform: "uppercase", letterSpacing: "1.5px" }}>
            Executive Answers
          </span>
          <h2 style={{ fontSize: "34px", fontWeight: 900, marginTop: "8px", color: "#ffffff" }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {hub.faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                style={{
                  background: "rgba(15, 23, 42, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "14px",
                  overflow: "hidden"
                }}
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                  style={{
                    width: "100%",
                    padding: "22px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    color: "#ffffff",
                    fontSize: "17px",
                    fontWeight: 700,
                    textAlign: "left",
                    cursor: "pointer"
                  }}
                >
                  <span>{faq.q}</span>
                  <i className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`} style={{ color: "#38bdf8", fontSize: "15px" }}></i>
                </button>
                {isOpen && (
                  <div style={{ padding: "0 24px 24px", color: "#cbd5e1 !important", fontSize: "15px", lineHeight: 1.7, borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "16px" }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Final High-Converting Lead Generation Banner ─── */}
      <section style={{
        padding: "90px 20px",
        background: "radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.3) 0%, rgba(6, 11, 24, 1) 100%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "38px", fontWeight: 900, color: "#ffffff", marginBottom: "16px" }}>
            Ready to Scale Your Engineering Velocity in {hub.name}?
          </h2>
          <p style={{ color: "#cbd5e1 !important", fontSize: "18px", lineHeight: 1.6, marginBottom: "40px" }}>
            Speak directly with our senior software architects. Receive an airtight NDA within 2 hours, custom tech stack evaluation, and a 2-week risk-free trial.
          </p>

          <div style={{ display: "flex", gap: "18px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                padding: "18px 40px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "16px",
                textDecoration: "none",
                boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.6)"
              }}
            >
              Book Confidential Architecture Call &rarr;
            </Link>

            <a
              href="https://wa.me/919929828456?text=Hi%20ChittorTech,%20I%20am%20interested%20in%20dedicated%20engineering%20for%20our%20project."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#059669",
                color: "#ffffff",
                padding: "18px 34px",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px"
              }}
            >
              <i className="fa-brands fa-whatsapp" style={{ fontSize: "20px" }}></i>
              <span>Instant WhatsApp Connect</span>
            </a>
          </div>

          <div style={{ fontSize: "13px", color: "#64748b", marginTop: "28px" }}>
            Average response time: &lt; 15 minutes • No recruitment fees • Bilateral NDA &amp; 100% IP Ownership
          </div>
        </div>
      </section>

    </div>
  );
}
