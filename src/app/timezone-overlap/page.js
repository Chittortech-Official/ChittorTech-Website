"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export default function TimezoneOverlapPage() {
  const [selectedZone, setSelectedZone] = useState(0);
  const [teamSize, setTeamSize] = useState(3);
  const [durationMonths, setDurationMonths] = useState(6);
  const [openFaq, setOpenFaq] = useState(0);

  // Global Benchmark Rates
  const hoursPerMonth = 160;
  const localRatePerHour = 150;
  const ctRatePerHour = 38;

  const localTotal = useMemo(() => {
    return teamSize * durationMonths * hoursPerMonth * localRatePerHour;
  }, [teamSize, durationMonths]);

  const ctTotal = useMemo(() => {
    return teamSize * durationMonths * hoursPerMonth * ctRatePerHour;
  }, [teamSize, durationMonths]);

  const savingsTotal = localTotal - ctTotal;
  const savingsPercent = Math.round((savingsTotal / localTotal) * 100);

  const formatUSD = (val) => {
    return `$${val.toLocaleString()}`;
  };

  const zones = [
    {
      tabLabel: "North America (EST/PST)",
      region: "North America (EST & PST)",
      cities: "New York, Austin, San Francisco, Toronto, Miami",
      overlapHours: "4 - 5 Hours Daily Live Sync",
      loopType: "Follow-The-Sun Overnight Sprints",
      icon: "fa-solid fa-sun",
      badge: "8:30 AM - 1:00 PM EST Overlap",
      summary: "Participate in live morning standups, coordinate sprint planning, and assign backlog tickets. While North America sleeps, our engineering team executes, delivering tested PRs ready for review when you wake up.",
      details: [
        "Live morning standups and Slack huddles between 8:30 AM and 1:00 PM EST",
        "Overnight sprint execution turning ticket assignments into tested pull requests while you sleep",
        "Continuous 24-hour development velocity shortening feature release cycles by 50%",
        "Direct integration into Linear, Jira, Slack, and GitHub workflows",
        "Zero scheduling friction with designated North America sprint leads"
      ]
    },
    {
      tabLabel: "UK & Europe (BST/CET)",
      region: "United Kingdom & Europe (BST & CET)",
      cities: "London, Manchester, Berlin, Amsterdam, Paris",
      overlapHours: "4.5 - 5 Hours Daily Live Sync",
      loopType: "Direct Afternoon Alignment",
      icon: "fa-solid fa-clock",
      badge: "9:00 AM - 2:00 PM BST / CET Overlap",
      summary: "India is only 3.5 to 5.5 hours ahead of the UK and Europe. Your active morning coincides directly with our active afternoon, providing nearly half of your working day in direct synchronous collaboration.",
      details: [
        "Synchronous sprint collaboration during your active morning hours (9:00 AM - 2:00 PM)",
        "Instant Slack communication, paired programming, and live code reviews",
        "Same-day bug fixes and hotfix deployment within European business hours",
        "100% compliance with UK GDPR and EU data protection standards",
        "Direct billing in GBP (£) or EUR (€) with zero currency conversion fees"
      ]
    },
    {
      tabLabel: "Middle East (GST/AST)",
      region: "Middle East (GST & AST)",
      cities: "Dubai, Abu Dhabi, Riyadh, Jeddah, Doha",
      overlapHours: "6.5 - 7 Hours Synchronous Sync",
      icon: "fa-solid fa-globe",
      badge: "Near-Identical 7-Hour Working Day",
      summary: "With only a 1.5 to 2.5 hour time difference, our pods operate on virtually identical business hours to UAE and Saudi enterprises. Enjoy real-time sprint execution from 9:00 AM to 5:00 PM local time.",
      details: [
        "Virtually identical working hours (only 1.5 hours difference with UAE, 2.5 with KSA)",
        "Real-time daily collaboration across Slack, Microsoft Teams, and WhatsApp",
        "Immediate sprint response times with zero off-hours latency",
        "Bilingual Arabic RTL and English engineering capabilities",
        "Sovereign Middle East cloud deployment on AWS UAE and regional edge nodes"
      ]
    },
    {
      tabLabel: "Australia (AEST)",
      region: "Australia & New Zealand (AEST)",
      cities: "Sydney, Melbourne, Brisbane, Auckland",
      overlapHours: "Overnight Follow-The-Sun Sprints",
      icon: "fa-solid fa-bolt",
      badge: "24-Hour Continuous Sprints",
      summary: "India's workday starts just as Australian teams wrap up their day. Hand over sprint backlog items at 5:00 PM AEST, and when you open your laptop at 9:00 AM next morning, tested pull requests are ready in GitHub for review.",
      details: [
        "24-hour development cycle accelerating feature delivery velocity by 2x",
        "Handover meetings at 4:30 PM AEST bridging directly into our active day",
        "Overnight bug fixes and hotfix deployments with zero downtime for Aussie users",
        "Complete Australian Privacy Principles (APP) compliance with AWS Sydney hosting",
        "Dedicated sprint lead ensuring seamless task continuation every morning"
      ]
    },
    {
      tabLabel: "Asia Pacific (SGT)",
      region: "Asia Pacific & ASEAN (SGT & HKT)",
      cities: "Singapore, Hong Kong, Tokyo",
      overlapHours: "6 - 7 Hours Same-Day Overlap",
      icon: "fa-solid fa-compass",
      badge: "Real-Time ASEAN Alignment",
      summary: "With a minimal 2.5-hour time difference, collaborate synchronously with our senior engineers throughout your entire afternoon. Instant responses on Slack, paired programming sessions, and rapid turnaround.",
      details: [
        "6 to 7 hours of direct synchronous overlap with Singapore and Hong Kong time",
        "Real-time pair programming and code reviews across your entire afternoon",
        "MAS and PDPA data compliance alignment with AWS Singapore hosting",
        "Rapid turnaround for urgent production incidents and deployment rollouts",
        "Direct billing in SGD or USD with multi-currency banking support"
      ]
    }
  ];

  const faqs = [
    {
      q: "How does the Follow-the-Sun engineering model actually work?",
      a: "The Follow-the-Sun model creates a continuous 24-hour software delivery engine. During your live overlap hours (e.g., 4-5 hours in the morning for US/UK/EU), your product managers and our engineers collaborate synchronously in standups, Slack, and code reviews. When your business day ends, our engineers continue building throughout the night, delivering fully tested pull requests into your GitHub repository before your next morning begins."
    },
    {
      q: "What tools do you use for synchronous and asynchronous collaboration?",
      a: "We integrate directly into your existing toolchain. For synchronous communication, we use Slack, Microsoft Teams, and Google Meet. For asynchronous tracking and project management, we use Linear, Jira, GitHub Projects, Loom video walkthroughs, and Notion documentation."
    },
    {
      q: "Can our engineers pair-program with your team in real time?",
      a: "Yes! During your regional synchronous overlap window, our senior developers participate in live screen shares, VS Code Live Share paired programming, and rapid pull request reviews to ensure complete architectural alignment."
    },
    {
      q: "How do you handle emergency production hotfixes outside overlap hours?",
      a: "We maintain dedicated on-call escalation rotations for production incidents. In the rare event of a high-severity outage or critical bug, your designated on-call architect can be paged immediately via PagerDuty or WhatsApp."
    },
    {
      q: "Can we test this workflow before signing a long-term contract?",
      a: "Yes. We offer a 2-Week Risk-Free Technical Pilot. Assign real sprint tasks to a dedicated pod and experience our daily standup rhythm, overlap communication, and delivery speed first-hand. If not completely satisfied, you pay nothing."
    },
    {
      q: "Are all 100% of IP rights and code transferred to our company?",
      a: "Yes. All contracts include comprehensive work-for-hire assignment clauses transferring complete intellectual property, code repositories, and documentation to your legal entity."
    }
  ];

  return (
    <div className="timezone-page" style={{
      backgroundColor: "#060b18",
      color: "#f8fafc",
      minHeight: "100vh",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      
      {/* ─── High-Contrast Overrides ─── */}
      <style>{`
        .timezone-page h1, .timezone-page h2, .timezone-page h3, .timezone-page h4, .timezone-page h5 {
          color: #ffffff !important;
          font-weight: 800;
        }
        .timezone-page p {
          color: #94a3b8 !important;
        }
        .blue-gradient-text {
          background: linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .emerald-gradient-text {
          background: linear-gradient(135deg, #34d399 0%, #059669 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .tz-card {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .tz-card:hover {
          border-color: rgba(56, 189, 248, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
        }
      `}</style>

      {/* ─── Hero Section ─── */}
      <section style={{
        position: "relative",
        padding: "110px 20px 85px",
        background: "radial-gradient(circle at 50% 15%, rgba(37, 99, 235, 0.25) 0%, rgba(6, 11, 24, 1) 75%)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        overflow: "hidden"
      }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(56, 189, 248, 0.4)",
            padding: "8px 22px",
            borderRadius: "9999px",
            fontSize: "14px",
            fontWeight: 700,
            color: "#38bdf8",
            marginBottom: "28px"
          }}>
            <span style={{ fontSize: "18px" }}>🌐</span>
            <span>FOLLOW-THE-SUN GLOBAL ENGINEERING</span>
            <span style={{ color: "#64748b" }}>•</span>
            <span style={{ color: "#34d399" }}>4-7h Daily Live Overlap Across All Hubs</span>
          </div>

          <h1 style={{
            fontSize: "clamp(34px, 5.2vw, 56px)",
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            maxWidth: "1020px",
            margin: "0 auto 24px",
            color: "#ffffff"
          }}>
            Synchronous Collaboration Meets <span className="blue-gradient-text">24/7 Overnight Sprint Velocity</span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            color: "#cbd5e1 !important",
            maxWidth: "880px",
            margin: "0 auto 40px"
          }}>
            Eliminate communication lag. Experience 4 to 7 hours of daily live synchronous overlap across the US, UK, Europe, UAE, and APAC—coupled with an overnight development engine that turns your sprint tickets into tested pull requests while you sleep.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
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
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 28px -6px rgba(37, 99, 235, 0.6)"
              }}
            >
              <span>Schedule Timezone Consultation</span>
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
              <i className="fa-solid fa-laptop-code" style={{ color: "#38bdf8" }}></i>
              <span>Request 2-Week Risk-Free Pilot</span>
            </Link>
          </div>

          <div className="hub-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "18px",
            maxWidth: "1060px",
            margin: "0 auto",
            padding: "24px",
            background: "rgba(15, 23, 42, 0.85)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            backdropFilter: "blur(12px)"
          }}>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#34d399" }}>4 - 7 Hours</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Daily Synchronous Overlap</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#38bdf8" }}>24 Hours</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Follow-The-Sun Sprint Cycle</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#fde047" }}>72 Hours</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Pod Deployment Time</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#a855f7" }}>75%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Average Payroll Saved</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Regional Timezone Breakdown Cards ─── */}
      <section style={{ padding: "80px 20px", maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ color: "#38bdf8", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            SYNCHRONOUS COVERAGE ACROSS ALL TIMEZONES
          </span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", marginTop: "8px", color: "#ffffff" }}>
            How ChittorTech Overlaps with Your Business Hours
          </h2>
          <p style={{ maxWidth: "720px", margin: "12px auto 0", fontSize: "16px" }}>
            Select your region below to see exact synchronous working windows and sprint rhythm details.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="hub-tabs-wrap" style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "36px" }}>
          {zones.map((z, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedZone(idx)}
              style={{
                background: selectedZone === idx ? "#2563eb" : "rgba(15, 23, 42, 0.8)",
                color: selectedZone === idx ? "#ffffff" : "#94a3b8",
                border: selectedZone === idx ? "1px solid #38bdf8" : "1px solid rgba(255, 255, 255, 0.1)",
                padding: "12px 20px",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.2s ease"
              }}
            >
              <i className={z.icon} style={{ color: selectedZone === idx ? "#ffffff" : "#38bdf8" }}></i>
              <span>{z.tabLabel || z.region}</span>
            </button>
          ))}
        </div>

        {/* Selected Zone Card */}
        <div className="tz-card" style={{ padding: "40px", border: "1px solid rgba(56, 189, 248, 0.3)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
            <div>
              <span style={{
                background: "rgba(56, 189, 248, 0.15)",
                color: "#38bdf8",
                padding: "4px 14px",
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: 800,
                textTransform: "uppercase"
              }}>
                {zones[selectedZone].badge}
              </span>
              <h3 style={{ fontSize: "28px", marginTop: "12px", color: "#ffffff" }}>
                {zones[selectedZone].region}
              </h3>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>
                Key Cities: <strong>{zones[selectedZone].cities}</strong>
              </div>
            </div>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                padding: "12px 26px",
                borderRadius: "10px",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <span>Consult an Architect</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <p style={{ fontSize: "16px", lineHeight: 1.7, marginBottom: "28px" }}>
            {zones[selectedZone].summary}
          </p>

          <h4 style={{ fontSize: "16px", color: "#ffffff", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Workflow &amp; Collaboration Mechanics:
          </h4>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px" }}>
            {zones[selectedZone].details.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <i className="fa-solid fa-circle-check" style={{ color: "#34d399", marginTop: "4px", fontSize: "15px" }}></i>
                <span style={{ fontSize: "14px", color: "#cbd5e1" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Interactive ROI Calculator ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "1140px", margin: "0 auto" }}>
        <div className="tz-card" style={{ padding: "40px 32px", border: "1px solid rgba(56, 189, 248, 0.25)" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span style={{ color: "#38bdf8", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              DISTRIBUTED TEAM ECONOMIC CALCULATOR
            </span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", marginTop: "8px", color: "#ffffff" }}>
              Calculate Your 24/7 Engineering Leverage
            </h2>
            <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "15px" }}>
              Benchmark based on standard Western senior engineer rates of <strong>$150/hr</strong> vs ChittorTech’s dedicated pod rate of <strong>$38/hr</strong>.
            </p>
          </div>

          <div className="hub-calc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", alignItems: "center" }}>
            
            {/* Sliders */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div>
                <div className="hub-slider-label-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontWeight: 700, flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ color: "#ffffff" }}>Number of Full-Time Engineers:</span>
                  <span style={{ color: "#38bdf8", fontSize: "18px" }}>{teamSize} {teamSize === 1 ? "Developer" : "Developers"}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value) || 1)}
                  style={{ width: "100%", accentColor: "#38bdf8", cursor: "pointer", touchAction: "pan-y" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#64748b", marginTop: "4px" }}>
                  <span>1 Dev</span>
                  <span>5 Devs</span>
                  <span>10 Devs</span>
                </div>
              </div>

              <div>
                <div className="hub-slider-label-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontWeight: 700, flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ color: "#ffffff" }}>Engagement Duration:</span>
                  <span style={{ color: "#38bdf8", fontSize: "18px" }}>{durationMonths} Months</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value) || 1)}
                  style={{ width: "100%", accentColor: "#38bdf8", cursor: "pointer", touchAction: "pan-y" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#64748b", marginTop: "4px" }}>
                  <span>1 Month</span>
                  <span>6 Months</span>
                  <span>12 Months</span>
                </div>
              </div>
            </div>

            {/* Calculations Box */}
            <div className="hub-calc-summary" style={{ background: "rgba(30, 41, 59, 0.5)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "16px", padding: "28px" }}>
              <div className="hub-calc-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px", fontSize: "14px", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ color: "#94a3b8" }}>Standard In-House Payroll:</span>
                <span style={{ color: "#f87171", fontWeight: 700, textDecoration: "line-through" }}>{formatUSD(localTotal)}</span>
              </div>
              <div className="hub-calc-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px", fontSize: "14px", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ color: "#94a3b8" }}>ChittorTech Dedicated Pod:</span>
                <span style={{ color: "#34d399", fontWeight: 700 }}>{formatUSD(ctTotal)}</span>
              </div>
              <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.1)", margin: "16px 0" }} />
              <div>
                <div style={{ fontSize: "13px", color: "#38bdf8", textTransform: "uppercase", fontWeight: 800 }}>
                  Total Estimated Capital Saved:
                </div>
                <div style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 900, color: "#ffffff", marginTop: "4px" }}>
                  {formatUSD(savingsTotal)}
                </div>
                <div style={{ display: "inline-block", background: "rgba(52, 211, 153, 0.15)", color: "#34d399", padding: "4px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: 800, marginTop: "8px" }}>
                  {savingsPercent}% Reinvestable Capital Preserved
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Executive FAQs ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "980px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", color: "#ffffff" }}>
            Frequently Asked Questions by Global Leaders
          </h2>
          <p style={{ fontSize: "15px", marginTop: "8px" }}>
            Answers regarding sprint overlap, paired programming, and communication tools.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="tz-card"
              style={{
                padding: "24px",
                cursor: "pointer",
                border: openFaq === idx ? "1px solid rgba(56, 189, 248, 0.5)" : "1px solid rgba(255, 255, 255, 0.08)"
              }}
              onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                <h3 style={{ fontSize: "17px", color: "#ffffff", margin: 0 }}>
                  {faq.q}
                </h3>
                <i
                  className={`fa-solid ${openFaq === idx ? "fa-chevron-up" : "fa-chevron-down"}`}
                  style={{ color: "#38bdf8", fontSize: "14px" }}
                />
              </div>
              {openFaq === idx && (
                <p style={{ fontSize: "14px", lineHeight: 1.7, marginTop: "16px", color: "#cbd5e1" }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section style={{
        padding: "80px 20px 100px",
        background: "radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.25) 0%, rgba(6, 11, 24, 1) 75%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4.5vw, 44px)", color: "#ffffff", marginBottom: "18px" }}>
            Ready to Accelerate Your Global Sprint Engine?
          </h2>
          <p style={{ fontSize: "17px", color: "#cbd5e1 !important", maxWidth: "680px", margin: "0 auto 36px", lineHeight: 1.65 }}>
            Book an introductory technical architecture call with our leadership. We execute bilateral NDAs within 2 hours and can deploy your dedicated pod in under 72 hours.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                padding: "18px 42px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 28px -6px rgba(37, 99, 235, 0.6)"
              }}
            >
              <span>Schedule Architecture Consultation</span>
              <span>&rarr;</span>
            </Link>

            <a
              href="https://wa.me/919929828456?text=Hello%20ChittorTech%2C%20we%20are%20interested%20in%20learning%20more%20about%20your%20follow-the-sun%20engineering%20model."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#25D366",
                color: "#ffffff",
                padding: "18px 34px",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 10px 24px -5px rgba(37, 211, 102, 0.4)"
              }}
            >
              <i className="fa-brands fa-whatsapp" style={{ fontSize: "20px" }}></i>
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
