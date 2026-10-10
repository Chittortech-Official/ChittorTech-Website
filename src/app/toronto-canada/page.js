"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export default function TorontoCanadaPage() {
  const [teamSize, setTeamSize] = useState(3);
  const [durationMonths, setDurationMonths] = useState(6);
  const [selectedService, setSelectedService] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // Toronto / Canada Benchmark Rates:
  // Senior Software Engineer in Toronto / Waterloo: ~CAD $165/hr ($120 USD/hr)
  // ChittorTech Senior Developer: ~CAD $50/hr ($37 USD/hr)
  const hoursPerMonth = 160;
  const localRatePerHour = 165;
  const ctRatePerHour = 50;

  const localTotal = useMemo(() => {
    return teamSize * durationMonths * hoursPerMonth * localRatePerHour;
  }, [teamSize, durationMonths]);

  const ctTotal = useMemo(() => {
    return teamSize * durationMonths * hoursPerMonth * ctRatePerHour;
  }, [teamSize, durationMonths]);

  const savingsTotal = localTotal - ctTotal;
  const savingsPercent = Math.round((savingsTotal / localTotal) * 100);

  const formatCAD = (val) => {
    return `CAD $${val.toLocaleString()}`;
  };

  const services = [
  {
    "id": "b2b-saas-web",
    "tabLabel": "B2B SaaS Web",
    "name": "PIPEDA-Compliant Next.js 15 SaaS Platforms & Web Systems",
    "badge": "App Router, PIPEDA Compliant & Interac Ready",
    "icon": "fa-solid fa-code",
    "description": "Engineered for Toronto's Silicon Valley North scale-ups, FinTech leaders, and B2B SaaS ventures using Next.js 15, React 19, and full Canadian PIPEDA compliance.",
    "deliverables": [
      "PIPEDA data privacy compliance with sovereign Canadian cloud hosting",
      "Sub-second Core Web Vitals performance deployed across AWS Canada Central (ca-central-1)",
      "Type-safe development with TypeScript, Zod validation, and Supabase / PostgreSQL",
      "Integration with Canadian payment gateways: Interac e-Transfer, Stripe Canada, Apple Pay",
      "Automated regression test coverage with Playwright ensuring zero release bugs"
    ],
    "techSpecs": "Next.js 15, React 19, TypeScript, Tailwind CSS, Supabase, AWS ca-central-1"
  },
  {
    "id": "autonomous-ai",
    "tabLabel": "Autonomous AI",
    "name": "Private Vector RAG & Enterprise AI Automation Agents",
    "badge": "Groq LPUs, Private RAG & WhatsApp Support",
    "icon": "fa-solid fa-brain",
    "description": "Deploy private autonomous conversational AI agents and sub-second LLM workflows that handle customer support, inventory queries, and CRM lead qualification 24/7 across Canada.",
    "deliverables": [
      "Sub-500ms streaming response times powered by Groq LPU hardware and Llama 3.3",
      "Private document RAG pipelines searching Canadian corporate, legal, or financial PDFs",
      "WhatsApp Business API and web chatbot automation for instant client communication",
      "Automated Tier-1 customer support handling 75%+ of repetitive inquiries autonomously",
      "Zero LLM training on confidential client proprietary data with enterprise isolation"
    ],
    "techSpecs": "Groq LPU, LangChain, Pinecone, Llama 3.3, OpenAI API, WhatsApp Cloud API"
  },
  {
    "id": "mobile-apps",
    "tabLabel": "Mobile Apps",
    "name": "Cross-Platform iOS & Android Mobile Apps with Interac Pay",
    "badge": "React Native, Expo & Interac",
    "icon": "fa-solid fa-mobile-screen-button",
    "description": "Fluid, high-performance cross-platform mobile apps engineered with React Native and Expo, featuring Face ID security, offline SQLite caching, and native Apple Pay support.",
    "deliverables": [
      "Single clean TypeScript codebase deployed simultaneously to Apple App Store & Google Play",
      "Native Apple Pay, Google Wallet, and Interac payment integration for Canadian consumers",
      "Real-time event streaming and push notifications via Firebase Cloud Messaging",
      "Biometric Face ID / Touch ID authentication with secure on-device keychain encryption",
      "60fps gesture-driven animations and responsive Dark Mode aesthetics"
    ],
    "techSpecs": "React Native, Expo, TypeScript, Apple Pay, Stripe SDK, Firebase"
  },
  {
    "id": "canada-cloud",
    "tabLabel": "Canada Cloud",
    "name": "AWS Canada Central (ca-central-1) Sovereign Cloud",
    "badge": "AWS Canada Central & Cloudflare Edge",
    "icon": "fa-solid fa-server",
    "description": "Resilient cloud networking, automated CI/CD pipelines, and high-concurrency database connection pooling designed for Canadian scale-ups requiring 99.99% uptime.",
    "deliverables": [
      "Sovereign Canadian data residency guaranteed on AWS Canada Central (ca-central-1)",
      "Cloudflare Edge CDN caching and WAF security mitigating high-volume DDoS attacks",
      "PostgreSQL connection pooling, read replicas, and Redis in-memory acceleration",
      "Automated Docker CI/CD deployment pipelines with zero-downtime blue-green rollouts",
      "24/7 synthetic monitoring, error tracking, and automated rollback mechanisms"
    ],
    "techSpecs": "AWS ca-central-1, Cloudflare Edge, Docker, PostgreSQL, Redis, Terraform"
  },
  {
    "id": "seo-growth",
    "tabLabel": "SEO & Growth",
    "name": "Google Canada Organic Search Dominance & GA4 Analytics",
    "badge": "Organic Search Dominance & Analytics",
    "icon": "fa-solid fa-magnifying-glass-chart",
    "description": "Dominate competitive Canadian search queries with programmatic SEO architectures, automated XML sitemaps, and conversion-focused GA4 measurement.",
    "deliverables": [
      "Programmatic SEO architecture delivering hundreds of high-ranking landing pages across Canada",
      "Instant indexing API submitting new content directly to Google Search Console",
      "Schema.org JSON-LD structured data markup for Google rich snippets",
      "Google Analytics 4 setup tracking exact user acquisition funnels and checkout conversions",
      "100/100 Core Web Vitals optimization directly lifting organic search visibility"
    ],
    "techSpecs": "Google Search Console, GA4, Next.js Metadata API, Schema.org, SEMrush"
  }
];

  const faqs = [
    {
      q: "What is your working timezone overlap with Toronto (EST)?",
      a: "Toronto shares the Eastern Standard Time (EST) zone. We provide 4 to 5 hours of direct synchronous overlap with your Toronto working hours (typically 8:30 AM to 1:00 PM EST). We attend your daily standups in Slack or Teams, coordinate pull request reviews live, and run overnight execution cycles while Canada sleeps."
    },
    {
      q: "How do your costs compare to hiring software developers in Toronto or Waterloo?",
      a: "Senior software developers in Toronto command CAD $130,000 to $180,000+ base salaries plus employer taxes, healthcare, and recruiters (often totaling CAD $165+/hr contractor equivalent). ChittorTech delivers dedicated senior software engineers at CAD $50/hr—saving your company up to 70%."
    },
    {
      q: "Are your software architectures compliant with Canadian PIPEDA?",
      a: "Yes. We strictly adhere to the Personal Information Protection and Electronic Documents Act (PIPEDA) and provincial privacy standards (such as Alberta PIPA and Quebec Law 25). We provision database hosting in AWS Canada Central (ca-central-1) and implement end-to-end encryption."
    },
    {
      q: "What is your intellectual property and non-disclosure policy?",
      a: "We execute bilateral NDAs before technical discussions. Our Master Service Agreements include comprehensive work-for-hire clauses transferring 100% intellectual property, code repositories, and documentation to your Canadian entity."
    },
    {
      q: "Can we test your team before committing to a contract?",
      a: "Yes. We offer a 2-Week Risk-Free Technical Pilot. Assign real tasks from your backlog; if our code quality, speed, and communication do not exceed your standards, you pay nothing."
    },
    {
      q: "What payment currencies and invoicing structures do you support for Canadian entities?",
      a: "We invoice directly in Canadian Dollars (CAD $) or US Dollars (USD $). Payments are accepted via international wire transfer or corporate credit card with zero hidden fees."
    }
  ];

  return (
    <div className="toronto-page" style={{
      backgroundColor: "#060b18",
      color: "#f8fafc",
      minHeight: "100vh",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      
      {/* ─── High-Contrast Overrides ─── */}
      <style>{`
        .toronto-page h1, .toronto-page h2, .toronto-page h3, .toronto-page h4, .toronto-page h5 {
          color: #ffffff !important;
          font-weight: 800;
        }
        .toronto-page p {
          color: #94a3b8 !important;
        }
        .red-gradient-text {
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cyan-gradient-text {
          background: linear-gradient(135deg, #38bdf8 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .toronto-card {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .toronto-card:hover {
          border-color: rgba(239, 68, 68, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
        }
      `}</style>

      {/* ─── Hero Section ─── */}
      <section style={{
        position: "relative",
        padding: "110px 20px 85px",
        background: "radial-gradient(circle at 50% 15%, rgba(220, 38, 38, 0.25) 0%, rgba(6, 11, 24, 1) 75%)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        overflow: "hidden"
      }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(239, 68, 68, 0.4)",
            padding: "8px 22px",
            borderRadius: "9999px",
            fontSize: "14px",
            fontWeight: 700,
            color: "#ef4444",
            marginBottom: "28px"
          }}>
            <span style={{ fontSize: "18px" }}>🍁</span>
            <span>TORONTO &amp; WATERLOO TECH CORRIDOR</span>
            <span style={{ color: "#64748b" }}>•</span>
            <span style={{ color: "#34d399" }}>PIPEDA Compliant • 4-5h EST Overlap</span>
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
            Full-Stack Software Engineering for <span className="red-gradient-text">Canadian Tech Ventures</span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            color: "#cbd5e1 !important",
            maxWidth: "880px",
            margin: "0 auto 40px"
          }}>
            From King West to Waterloo, scale your engineering velocity by 3x. Deploy senior Next.js full-stack developers, low-latency AI agents, and cloud architectures with 4 to 5 hours of live EST overlap and strict PIPEDA compliance.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#dc2626",
                color: "#ffffff",
                padding: "18px 40px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 28px -6px rgba(220, 38, 38, 0.6)"
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
              <i className="fa-solid fa-laptop-code" style={{ color: "#ef4444" }}></i>
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
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#34d399" }}>70%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Canadian Budget Saved</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#ef4444" }}>4-5 Hours</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Daily EST Live Overlap</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#38bdf8" }}>PIPEDA Ready</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>AWS Canada (ca-central-1)</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#a855f7" }}>100%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Client IP &amp; Code Ownership</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Interactive Toronto Cost Calculator ─── */}
      <section style={{ padding: "80px 20px", maxWidth: "1140px", margin: "0 auto" }}>
        <div className="toronto-card" style={{ padding: "40px 32px", border: "1px solid rgba(239, 68, 68, 0.25)" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span style={{ color: "#ef4444", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              CANADIAN ECONOMIC LEVERAGE CALCULATOR
            </span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", marginTop: "8px", color: "#ffffff" }}>
              Compare Toronto Contractor Rates vs ChittorTech Dedicated Pods
            </h2>
            <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "15px" }}>
              Benchmark based on standard Toronto contractor rates of <strong>CAD $165/hr</strong> vs ChittorTech’s dedicated senior pod rate of <strong>CAD $50/hr</strong>.
            </p>
          </div>

          <div className="hub-calc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", alignItems: "center" }}>
            
            {/* Sliders */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div>
                <div className="hub-slider-label-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontWeight: 700, flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ color: "#ffffff" }}>Number of Full-Time Engineers:</span>
                  <span style={{ color: "#ef4444", fontSize: "18px" }}>{teamSize} {teamSize === 1 ? "Developer" : "Developers"}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value) || 1)}
                  style={{ width: "100%", accentColor: "#ef4444", cursor: "pointer", touchAction: "pan-y" }}
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
                  <span style={{ color: "#ef4444", fontSize: "18px" }}>{durationMonths} Months</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value) || 1)}
                  style={{ width: "100%", accentColor: "#ef4444", cursor: "pointer", touchAction: "pan-y" }}
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
                <span style={{ color: "#94a3b8" }}>Toronto Contractor Benchmark:</span>
                <span style={{ color: "#f87171", fontWeight: 700, textDecoration: "line-through" }}>{formatCAD(localTotal)}</span>
              </div>
              <div className="hub-calc-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px", fontSize: "14px", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ color: "#94a3b8" }}>ChittorTech Dedicated Pod:</span>
                <span style={{ color: "#34d399", fontWeight: 700 }}>{formatCAD(ctTotal)}</span>
              </div>
              <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.1)", margin: "16px 0" }} />
              <div>
                <div style={{ fontSize: "13px", color: "#ef4444", textTransform: "uppercase", fontWeight: 800 }}>
                  Total Estimated Capital Saved:
                </div>
                <div style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 900, color: "#ffffff", marginTop: "4px" }}>
                  {formatCAD(savingsTotal)}
                </div>
                <div style={{ display: "inline-block", background: "rgba(52, 211, 153, 0.15)", color: "#34d399", padding: "4px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: 800, marginTop: "8px" }}>
                  {savingsPercent}% Reinvestable Capital Preserved
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Core Technical Capabilities ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ color: "#ef4444", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            SPECIALIZED TECHNICAL CAPABILITIES
          </span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", marginTop: "8px", color: "#ffffff" }}>
            Software Engineering Built for Canadian Standards
          </h2>
          <p style={{ maxWidth: "720px", margin: "12px auto 0", fontSize: "16px" }}>
            From high-performance Next.js web applications to autonomous conversational AI agents, we engineer systems that deliver enterprise stability.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="hub-tabs-wrap" style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "36px" }}>
          {services.map((srv, idx) => (
            <button
              key={srv.id}
              onClick={() => setSelectedService(idx)}
              style={{
                background: selectedService === idx ? "#dc2626" : "rgba(15, 23, 42, 0.8)",
                color: selectedService === idx ? "#ffffff" : "#94a3b8",
                border: selectedService === idx ? "1px solid #ef4444" : "1px solid rgba(255, 255, 255, 0.1)",
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
              <i className={srv.icon} style={{ color: selectedService === idx ? "#ffffff" : "#ef4444" }}></i>
              <span>{srv.tabLabel || srv.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Service Card */}
        <div className="toronto-card" style={{ padding: "40px", border: "1px solid rgba(239, 68, 68, 0.3)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
            <div>
              <span style={{
                background: "rgba(239, 68, 68, 0.15)",
                color: "#ef4444",
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
                backgroundColor: "#dc2626",
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

      {/* ─── Why Canadian Startups Partner with ChittorTech ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", color: "#ffffff" }}>
            Engineered for Canadian Tech Pioneers
          </h2>
          <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "16px" }}>
            Avoid high Canadian agency markups and build with senior technical talent.
          </p>
        </div>

        <div className="hub-features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          
          <div className="toronto-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(239, 68, 68, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-clock" style={{ color: "#ef4444", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>4-5 Hours Daily EST Overlap</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              Toronto operates on Eastern Standard Time (EST). Your engineering pod aligns with your team from 8:30 AM to 1:00 PM EST daily, enabling seamless standups, sprint reviews, and instant Slack communication.
            </p>
          </div>

          <div className="toronto-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(52, 211, 153, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-shield-halved" style={{ color: "#34d399", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>PIPEDA &amp; Canadian Compliance</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              Canadian privacy laws are rigorous. We engineer platforms adhering to PIPEDA, host databases within AWS Canada Central (ca-central-1), and guarantee zero unencrypted transit of Canadian user data.
            </p>
          </div>

          <div className="toronto-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(56, 189, 248, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-dollar-sign" style={{ color: "#38bdf8", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>Direct CAD ($) Invoicing</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              No foreign exchange surprises or currency exchange rate losses. We bill directly in Canadian Dollars (CAD $) with transparent pricing and flexible 30-day rolling contracts.
            </p>
          </div>

        </div>
      </section>

      {/* ─── Executive FAQs ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "980px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", color: "#ffffff" }}>
            Frequently Asked Questions by Canadian Founders
          </h2>
          <p style={{ fontSize: "15px", marginTop: "8px" }}>
            Clear answers regarding EST timezone alignment, PIPEDA compliance, and trials.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="toronto-card"
              style={{
                padding: "24px",
                cursor: "pointer",
                border: openFaq === idx ? "1px solid rgba(239, 68, 68, 0.5)" : "1px solid rgba(255, 255, 255, 0.08)"
              }}
              onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                <h3 style={{ fontSize: "17px", color: "#ffffff", margin: 0 }}>
                  {faq.q}
                </h3>
                <i
                  className={`fa-solid ${openFaq === idx ? "fa-chevron-up" : "fa-chevron-down"}`}
                  style={{ color: "#ef4444", fontSize: "14px" }}
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
        background: "radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.25) 0%, rgba(6, 11, 24, 1) 75%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4.5vw, 44px)", color: "#ffffff", marginBottom: "18px" }}>
            Ready to Accelerate Your Canadian Engineering Roadmap?
          </h2>
          <p style={{ fontSize: "17px", color: "#cbd5e1 !important", maxWidth: "680px", margin: "0 auto 36px", lineHeight: 1.65 }}>
            Book an introductory technical architecture call with our leadership. We execute bilateral NDAs within 2 hours and can deploy a dedicated senior engineering pod within 72 hours.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#dc2626",
                color: "#ffffff",
                padding: "18px 42px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 28px -6px rgba(220, 38, 38, 0.6)"
              }}
            >
              <span>Schedule Architecture Consultation</span>
              <span>&rarr;</span>
            </Link>

            <a
              href="https://wa.me/919929828456?text=Hello%20ChittorTech%2C%20we%20are%20a%20Canadian%20business%20interested%20in%20dedicated%20engineering%20pods."
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
