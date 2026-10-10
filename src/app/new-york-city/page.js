"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export default function NewYorkCityPage() {
  const [teamSize, setTeamSize] = useState(3);
  const [durationMonths, setDurationMonths] = useState(6);
  const [selectedService, setSelectedService] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // New York City Benchmark Rates:
  // NYC Senior Software Engineer: ~$170/hr ($220k+ base + NYC taxes + benefits + overhead)
  // ChittorTech Senior Developer: ~$38/hr
  const hoursPerMonth = 160;
  const localRatePerHour = 170;
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

  const services = [
  {
    "id": "fintech-web",
    "tabLabel": "FinTech & Web",
    "name": "Ultra-Low-Latency Next.js 15 FinTech Portals & SaaS",
    "badge": "Next.js 15, WebSockets & SEC/SOC2 Ready",
    "icon": "fa-solid fa-chart-line",
    "description": "Engineered for NYC financial institutions, hedge funds, and Wall Street scale-ups requiring sub-second response times, real-time market data streaming, and bulletproof security.",
    "deliverables": [
      "Sub-second market data visualization using WebSockets and React Server Components",
      "SOC2 and SEC regulatory compliance readiness with full audit trail logging",
      "Type-safe TypeScript architecture with PostgreSQL, Redis, and high-concurrency connection pooling",
      "Plaid, Stripe, and institutional banking API integrations",
      "Automated regression testing with Playwright ensuring zero financial transaction defects"
    ],
    "techSpecs": "Next.js 15, React 19, TypeScript, WebSockets, PostgreSQL, Redis, AWS us-east-1"
  },
  {
    "id": "quantitative-ai",
    "tabLabel": "Financial AI",
    "name": "Autonomous Financial AI Agents & Risk Analytics RAG",
    "badge": "Groq LPUs, Private RAG & Financial LLMs",
    "icon": "fa-solid fa-brain",
    "description": "Deploy private autonomous conversational AI agents and sub-second LLM workflows that parse 10-K/10-Q filings, automate investment memos, and qualify high-value institutional leads.",
    "deliverables": [
      "Sub-500ms streaming responses powered by Groq LPU hardware and Llama 3.3 models",
      "Private RAG pipelines searching thousands of pages of financial disclosures without hallucination",
      "Automated financial document parsing extracting balance sheet line items into structured JSON",
      "Zero proprietary financial data leakage with isolated enterprise VPC architecture",
      "Custom function calling connecting directly to internal pricing and risk APIs"
    ],
    "techSpecs": "Groq LPU, LangChain, Pinecone, Llama 3.3, OpenAI API, Python FastAPI"
  },
  {
    "id": "institutional-apps",
    "tabLabel": "Mobile Apps",
    "name": "Biometric Institutional Mobile Apps & Wealth Tech",
    "badge": "React Native, Expo & Face ID",
    "icon": "fa-solid fa-mobile-screen-button",
    "description": "Native-grade iOS & Android applications engineered for high-net-worth investors and financial advisors with Face ID security and biometric multi-factor authentication.",
    "deliverables": [
      "Single clean TypeScript codebase deployed to Apple App Store & Google Play",
      "Biometric Face ID / Touch ID authentication with secure on-device keychain encryption",
      "Interactive financial charting with 60fps smooth gesture interactions",
      "Real-time market price push notifications via Firebase Cloud Messaging",
      "Offline cached portfolio views with automatic background synchronization"
    ],
    "techSpecs": "React Native, Expo, TypeScript, Plaid SDK, Firebase Auth, Apple Pay"
  },
  {
    "id": "cloud-security",
    "tabLabel": "Cloud & DevOps",
    "name": "SOC2 & Zero-Trust AWS/Cloudflare High-Scale Architecture",
    "badge": "AWS us-east-1 (N. Virginia), Cloudflare WAF & 99.99% Uptime",
    "icon": "fa-solid fa-shield-halved",
    "description": "Mission-critical cloud infrastructure designed to survive extreme market volatility events and absorb massive traffic surges with zero downtime.",
    "deliverables": [
      "Sovereign US data hosting in AWS us-east-1 (N. Virginia) with multi-AZ failover",
      "Cloudflare Edge WAF mitigating sophisticated DDoS attacks and malicious bots",
      "Automated Docker CI/CD deployment pipelines with zero-downtime canary rollouts",
      "PostgreSQL read replicas with pgvector and Redis in-memory acceleration",
      "24/7 synthetic monitoring with automated incident response and rollback alerts"
    ],
    "techSpecs": "AWS us-east-1, Cloudflare Edge, Docker, Terraform, PostgreSQL, Redis"
  },
  {
    "id": "seo-growth",
    "tabLabel": "SEO & Growth",
    "name": "High-Intent Financial & B2B Organic Lead Capture",
    "badge": "Organic Search Dominance & GA4 Conversion Tracking",
    "icon": "fa-solid fa-magnifying-glass-chart",
    "description": "Dominate hyper-competitive New York B2B and financial search queries with programmatic SEO architectures, automated XML sitemaps, and conversion-focused GA4 measurement.",
    "deliverables": [
      "Programmatic SEO architecture capturing high-value commercial search intent in NYC",
      "Instant indexing API submitting new pages directly to Google Search Console",
      "Financial service Schema.org JSON-LD structured data markup for Google rich snippets",
      "Google Analytics 4 setup tracking exact corporate lead acquisition funnels",
      "100/100 Core Web Vitals optimization directly lifting organic search visibility"
    ],
    "techSpecs": "Google Search Console, GA4, Next.js Metadata API, Schema.org, SEMrush"
  }
];

  const faqs = [
    {
      q: "How does ChittorTech handle Eastern Standard Time (EST) overlap for NYC teams?",
      a: "Our dedicated engineering pods provide 4 to 5 hours of direct synchronous overlap with New York business hours (typically 8:30 AM to 1:00 PM EST). We attend your daily standups in Slack or Teams, coordinate pull request reviews, and run overnight execution cycles while Manhattan sleeps."
    },
    {
      q: "How does ChittorTech compare to hiring engineers in Manhattan or Brooklyn?",
      a: "Senior software developers in New York command $170,000 to $230,000+ base salaries plus city payroll taxes, healthcare, recruiters, and office overhead—costing upwards of $170/hr. ChittorTech provides equivalent senior full-stack talent at $38/hr with zero recruiting delays, zero equity dilution, and complete flexibility."
    },
    {
      q: "Do you have experience with FinTech and high-throughput data applications?",
      a: "Yes. We engineer responsive web applications featuring live WebSockets, real-time chart updates, strict data isolation, and API latency optimizations suitable for modern financial analytics and SaaS platforms."
    },
    {
      q: "How do you protect intellectual property and confidential client data?",
      a: "All engagements operate under bilateral US NDAs signed prior to technical discussions. Our Master Service Agreements include ironclad work-for-hire clauses transferring 100% intellectual property, code repositories, and credentials to your US corporate entity."
    },
    {
      q: "Can we test your team before committing to a long-term engagement?",
      a: "Yes. We offer a 2-Week Risk-Free Technical Pilot. Assign real tasks from your sprint backlog; if our code quality, speed, and communication do not exceed your standards, you owe nothing."
    },
    {
      q: "What payment and invoicing structures do you support for US companies?",
      a: "We support direct USD wire transfers, ACH, and Stripe payments. We provide compliant W-8BEN forms making tax reporting straightforward for your US accounting team."
    }
  ];

  return (
    <div className="nyc-page" style={{
      backgroundColor: "#060b18",
      color: "#f8fafc",
      minHeight: "100vh",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      
      {/* ─── High-Contrast Overrides ─── */}
      <style>{`
        .nyc-page h1, .nyc-page h2, .nyc-page h3, .nyc-page h4, .nyc-page h5 {
          color: #ffffff !important;
          font-weight: 800;
        }
        .nyc-page p {
          color: #94a3b8 !important;
        }
        .cyan-gradient-text {
          background: linear-gradient(135deg, #38bdf8 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .emerald-gradient-text {
          background: linear-gradient(135deg, #34d399 0%, #059669 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nyc-card {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nyc-card:hover {
          border-color: rgba(56, 189, 248, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
        }
      `}</style>

      {/* ─── Hero Section ─── */}
      <section style={{
        position: "relative",
        padding: "110px 20px 85px",
        background: "radial-gradient(circle at 50% 15%, rgba(30, 58, 138, 0.35) 0%, rgba(6, 11, 24, 1) 75%)",
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
            <span style={{ fontSize: "18px" }}>🗽</span>
            <span>NEW YORK CITY ENTERPRISE TECH PODS</span>
            <span style={{ color: "#64748b" }}>•</span>
            <span style={{ color: "#34d399" }}>EST Synchronous Overlap</span>
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
            FinTech-Grade Software Engineering for <span className="cyan-gradient-text">New York Enterprises &amp; Startups</span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            color: "#cbd5e1 !important",
            maxWidth: "880px",
            margin: "0 auto 40px"
          }}>
            Accelerate your product delivery by 3x while cutting engineering payroll by 75%. Deploy elite full-stack Next.js engineers, low-latency AI agents, and resilient cloud architectures with 4+ hours of live daily EST collaboration.
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
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#34d399" }}>78%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>NYC Payroll Savings</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#38bdf8" }}>4-5 Hours</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Daily EST Live Overlap</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#fde047" }}>72 Hours</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Pod Deployment Time</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#a855f7" }}>100%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Client IP &amp; Code Ownership</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Interactive NYC Cost Calculator ─── */}
      <section style={{ padding: "80px 20px", maxWidth: "1140px", margin: "0 auto" }}>
        <div className="nyc-card" style={{ padding: "40px 32px", border: "1px solid rgba(56, 189, 248, 0.25)" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span style={{ color: "#38bdf8", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              FINANCIAL LEVERAGE CALCULATOR
            </span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", marginTop: "8px", color: "#ffffff" }}>
              Calculate Your Savings vs Manhattan In-House Hiring
            </h2>
            <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "15px" }}>
              Benchmark based on standard NYC senior developer rates of <strong>$170/hr</strong> (inclusive of salary, payroll tax, NYC taxes, benefits, recruiter fees) vs ChittorTech’s dedicated senior pod rate of <strong>$38/hr</strong>.
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
                <span style={{ color: "#94a3b8" }}>NYC In-House Cost:</span>
                <span style={{ color: "#f87171", fontWeight: 700, textDecoration: "line-through" }}>{formatUSD(localTotal)}</span>
              </div>
              <div className="hub-calc-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px", fontSize: "14px", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ color: "#94a3b8" }}>ChittorTech Dedicated Pod:</span>
                <span style={{ color: "#34d399", fontWeight: 700 }}>{formatUSD(ctTotal)}</span>
              </div>
              <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.1)", margin: "16px 0" }} />
              <div>
                <div style={{ fontSize: "13px", color: "#38bdf8", textTransform: "uppercase", fontWeight: 800 }}>
                  Total Estimated Capital Retained:
                </div>
                <div style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 900, color: "#ffffff", marginTop: "4px" }}>
                  {formatUSD(savingsTotal)}
                </div>
                <div style={{ display: "inline-block", background: "rgba(52, 211, 153, 0.15)", color: "#34d399", padding: "4px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: 800, marginTop: "8px" }}>
                  {savingsPercent}% Reinvestable Capital Saved
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Core Technical Capabilities ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ color: "#38bdf8", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            SPECIALIZED TECHNICAL CAPABILITIES
          </span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", marginTop: "8px", color: "#ffffff" }}>
            Full-Stack Software Engineering for New York Leaders
          </h2>
          <p style={{ maxWidth: "720px", margin: "12px auto 0", fontSize: "16px" }}>
            From high-frequency financial dashboards to autonomous AI agents, we engineer production systems that deliver enterprise stability and sub-second performance.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="hub-tabs-wrap" style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "36px" }}>
          {services.map((srv, idx) => (
            <button
              key={srv.id}
              onClick={() => setSelectedService(idx)}
              style={{
                background: selectedService === idx ? "#2563eb" : "rgba(15, 23, 42, 0.8)",
                color: selectedService === idx ? "#ffffff" : "#94a3b8",
                border: selectedService === idx ? "1px solid #38bdf8" : "1px solid rgba(255, 255, 255, 0.1)",
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
              <i className={srv.icon} style={{ color: selectedService === idx ? "#ffffff" : "#38bdf8" }}></i>
              <span>{srv.tabLabel || srv.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Service Card */}
        <div className="nyc-card" style={{ padding: "40px", border: "1px solid rgba(56, 189, 248, 0.3)" }}>
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
                {services[selectedService].badge}
              </span>
              <h3 style={{ fontSize: "28px", marginTop: "12px", color: "#ffffff" }}>
                {services[selectedService].name}
              </h3>
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
            {services[selectedService].description}
          </p>

          <h4 style={{ fontSize: "16px", color: "#ffffff", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            What We Deliver:
          </h4>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px", marginBottom: "32px" }}>
            {services[selectedService].deliverables.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <i className="fa-solid fa-circle-check" style={{ color: "#34d399", marginTop: "4px", fontSize: "15px" }}></i>
                <span style={{ fontSize: "14px", color: "#cbd5e1" }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{
            background: "rgba(30, 41, 59, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "10px",
            padding: "14px 20px",
            fontSize: "13px",
            color: "#94a3b8"
          }}>
            <strong style={{ color: "#ffffff" }}>Target Tech Stack:</strong> {services[selectedService].techSpecs}
          </div>
        </div>
      </section>

      {/* ─── Why NYC Tech Companies Choose ChittorTech ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", color: "#ffffff" }}>
            Engineered for Fast-Paced Manhattan Standards
          </h2>
          <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "16px" }}>
            Overcome high city overhead, fierce local hiring competition, and endless recruitment delays.
          </p>
        </div>

        <div className="hub-features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          
          <div className="nyc-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(56, 189, 248, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-clock-rotate-left" style={{ color: "#38bdf8", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>Direct EST Business Overlap</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              No 12-hour timezone disconnects. Our team aligns directly with NYC working hours from 8:30 AM to 1:00 PM EST, allowing your product managers to run live standups, resolve sprint blockers, and review pull requests in real time.
            </p>
          </div>

          <div className="nyc-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(52, 211, 153, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-shield-halved" style={{ color: "#34d399", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>US Corporate Legal &amp; IP Protection</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              All contracts include comprehensive bilateral NDAs, W-8BEN compliance, and complete work-for-hire assignment clauses that grant your US entity 100% ownership of source code, architectural documentation, and production assets.
            </p>
          </div>

          <div className="nyc-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(245, 158, 11, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-rocket" style={{ color: "#f59e0b", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>Zero Equity Dilution</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              Keep your cap table clean for institutional investors and future funding rounds. We work strictly on transparent monthly or sprint-based invoices without asking for equity, stock options, or board representation.
            </p>
          </div>

        </div>
      </section>

      {/* ─── Executive FAQs ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "980px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", color: "#ffffff" }}>
            Frequently Asked Questions by NYC Executives
          </h2>
          <p style={{ fontSize: "15px", marginTop: "8px" }}>
            Clear answers regarding timezone alignment, security, IP rights, and onboarding.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="nyc-card"
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

      {/* ─── Final High-Converting CTA ─── */}
      <section style={{
        padding: "80px 20px 100px",
        background: "radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.25) 0%, rgba(6, 11, 24, 1) 75%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4.5vw, 44px)", color: "#ffffff", marginBottom: "18px" }}>
            Ready to Accelerate Your New York Engineering Roadmap?
          </h2>
          <p style={{ fontSize: "17px", color: "#cbd5e1 !important", maxWidth: "680px", margin: "0 auto 36px", lineHeight: 1.65 }}>
            Book an introductory technical architecture call with our leadership. We execute mutual NDAs within 2 hours and can deploy a dedicated senior engineering pod within 72 hours.
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
              href="https://wa.me/919929828456?text=Hello%20ChittorTech%2C%20we%20are%20a%20New%20York%20business%20interested%20in%20dedicated%20engineering%20pods."
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
