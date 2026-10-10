"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export default function UnitedStatesPage() {
  const [teamSize, setTeamSize] = useState(3);
  const [durationMonths, setDurationMonths] = useState(6);
  const [selectedService, setSelectedService] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // US Benchmark Economic Rates:
  // US Domestic Senior Full-Stack / AI Dev: ~$165/hr ($220k+ base + 30% taxes/benefits)
  // ChittorTech Senior Developer / Specialist: ~$35/hr
  const hoursPerMonth = 160;
  const localRatePerHour = 165;
  const ctRatePerHour = 35;

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
    "id": "enterprise-web",
    "tabLabel": "Enterprise Web",
    "name": "High-Performance Next.js 15 Enterprise Platforms",
    "badge": "App Router, W-8BEN Compliant & Delaware Law",
    "icon": "fa-solid fa-code",
    "description": "High-velocity web applications and enterprise platforms engineered for US companies using Next.js 15, TypeScript, and clean architecture with 4–6 hours daily EST/PST overlap.",
    "deliverables": [
      "Delaware-compatible contracts with complete 100% intellectual property assignment",
      "Seamless US corporate accounting with W-8BEN and W-8BEN-E tax compliance",
      "Sub-second Core Web Vitals deployed on AWS US multi-region infrastructure",
      "Stripe, Plaid, and ACH payment integrations for automated billing",
      "Automated regression testing with Playwright ensuring zero production bugs"
    ],
    "techSpecs": "Next.js 15, React 19, TypeScript, Tailwind CSS, PostgreSQL, AWS us-east-1"
  },
  {
    "id": "ai-agents",
    "tabLabel": "Autonomous AI",
    "name": "Private Enterprise AI Agents & Sub-Second LLM Systems",
    "badge": "Groq LPUs, Private RAG & Tool Calling",
    "icon": "fa-solid fa-brain",
    "description": "Deploy private autonomous conversational AI agents and sub-second LLM workflows that integrate directly with your Jira, GitHub, and corporate databases with zero data leakage.",
    "deliverables": [
      "Sub-500ms streaming response times powered by Groq LPU hardware and Llama 3.3",
      "Private document RAG pipelines searching enterprise policy and technical documentation",
      "Autonomous tool-calling agents executing workflows across your internal APIs",
      "Automated Tier-1 customer support handling 75%+ of repetitive inquiries autonomously",
      "Zero LLM training on confidential client proprietary data with enterprise isolation"
    ],
    "techSpecs": "Groq LPU, LangChain, Pinecone, Llama 3.3, OpenAI API, Python FastAPI"
  },
  {
    "id": "mobile-apps",
    "tabLabel": "Mobile Apps",
    "name": "Cross-Platform React Native iOS & Android Apps",
    "badge": "React Native, Expo & Biometrics",
    "icon": "fa-solid fa-mobile-screen-button",
    "description": "Fluid, high-performance cross-platform mobile apps built with React Native and Expo, featuring Face ID security, offline SQLite caching, and native Apple Pay support.",
    "deliverables": [
      "Single clean TypeScript codebase deployed simultaneously to Apple App Store & Google Play",
      "Native Apple Pay and Google Wallet payment processing",
      "Real-time event streaming and push notifications via Firebase Cloud Messaging",
      "Biometric Face ID / Touch ID authentication with secure on-device keychain encryption",
      "60fps gesture-driven animations and responsive Dark Mode aesthetics"
    ],
    "techSpecs": "React Native, Expo, TypeScript, Apple Pay, Stripe SDK, Firebase"
  },
  {
    "id": "us-cloud",
    "tabLabel": "US Cloud & DevOps",
    "name": "AWS US Multi-Region & Cloudflare Edge Infrastructure",
    "badge": "AWS US Multi-Region, Cloudflare & 99.99% Uptime",
    "icon": "fa-solid fa-server",
    "description": "Resilient cloud networking, automated CI/CD pipelines, and high-concurrency database connection pooling designed for US scale-ups requiring 99.99% uptime.",
    "deliverables": [
      "Sovereign US data residency guaranteed on AWS us-east-1 and us-west-2",
      "Cloudflare Edge CDN caching and WAF security mitigating high-volume DDoS attacks",
      "PostgreSQL connection pooling, read replicas, and Redis in-memory acceleration",
      "Automated Docker CI/CD deployment pipelines with zero-downtime blue-green rollouts",
      "24/7 synthetic monitoring, error tracking, and automated rollback mechanisms"
    ],
    "techSpecs": "AWS us-east-1 / us-west-2, Cloudflare Edge, Docker, PostgreSQL, Redis, Terraform"
  },
  {
    "id": "seo-growth",
    "tabLabel": "SEO & Growth",
    "name": "US National Organic Search Dominance & GA4 Tracking",
    "badge": "Organic Search Dominance & GA4 Funnels",
    "icon": "fa-solid fa-magnifying-glass-chart",
    "description": "Dominate competitive US national search queries with programmatic SEO architectures, automated XML sitemaps, and conversion-focused GA4 measurement.",
    "deliverables": [
      "Programmatic SEO architecture delivering hundreds of high-ranking landing pages across the US",
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
      q: "How does US contracting and tax compliance work (W-8BEN / W-8BEN-E)?",
      a: "We make hiring seamless for US accounting departments. We provide completed W-8BEN / W-8BEN-E tax forms confirming foreign contractor status so there is zero US withholding tax. All master service agreements include standard US Delaware legal provisions and 100% intellectual property assignment."
    },
    {
      q: "How do our teams collaborate across timezones with US offices?",
      a: "Our US-dedicated engineering pods operate on shifted working hours providing 4 to 6 hours of direct synchronous overlap with EST (Eastern Time) and morning PST (Pacific Time). We join your daily standups via Zoom/Google Meet and communicate in real time on Slack."
    },
    {
      q: "Who owns the code and intellectual property (IP)?",
      a: "You own 100% of all intellectual property, source code, designs, and data from day one. All code is developed directly within your private GitHub or GitLab repository under strict work-for-hire clauses and airtight bilateral NDAs."
    },
    {
      q: "How do invoicing and payments work in US Dollars (USD)?",
      a: "We invoice transparently in US Dollars (USD). Payments can be settled via domestic US bank ACH transfer, international wire transfer, Mercury, Wise, or corporate credit card via Stripe Invoicing."
    },
    {
      q: "Can we trial an engineering pod before making a long-term commitment?",
      a: "Yes! We offer a 2-Week Risk-Free Technical Pilot. You can onboard our senior engineers to your repository, assign real sprint tickets, and review our commit velocity. If you are not completely satisfied, you pay nothing."
    },
    {
      q: "What is your typical onboarding timeline for dedicated developers?",
      a: "We can deploy pre-vetted senior software engineers into your Slack and GitHub environments in under 72 hours, eliminating the traditional 60+ day domestic recruiting cycle."
    }
  ];

  return (
    <div className="us-page" style={{
      backgroundColor: "#060b18",
      color: "#f8fafc",
      minHeight: "100vh",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      
      {/* ─── High-Contrast Overrides ─── */}
      <style>{`
        .us-page h1, .us-page h2, .us-page h3, .us-page h4, .us-page h5 {
          color: #ffffff !important;
          font-weight: 800;
        }
        .us-page p {
          color: #94a3b8 !important;
        }
        .gold-gradient-text {
          background: linear-gradient(135deg, #fde047 0%, #ca8a04 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .blue-gradient-text {
          background: linear-gradient(135deg, #60a5fa 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .us-card {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .us-card:hover {
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
            border: "1px solid rgba(59, 130, 246, 0.4)",
            padding: "8px 22px",
            borderRadius: "9999px",
            fontSize: "14px",
            fontWeight: 700,
            color: "#60a5fa",
            marginBottom: "28px"
          }}>
            <span style={{ fontSize: "18px" }}>🇺🇸</span>
            <span>UNITED STATES TECH POD CORRIDOR</span>
            <span style={{ color: "#64748b" }}>•</span>
            <span style={{ color: "#34d399" }}>W-8BEN &amp; Delaware Compatible</span>
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
            Elite Web Development, AI Chatbots &amp; Cloud Pods for <span className="blue-gradient-text">US Enterprises &amp; Startups</span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            color: "#cbd5e1 !important",
            maxWidth: "880px",
            margin: "0 auto 40px"
          }}>
            Deploy pre-vetted senior software engineers in Next.js, mobile apps, conversational AI, and cloud infrastructure at <strong>79% lower burn rate</strong>. Enjoy 4–6 hours of daily EST/PST live standup overlap, W-8BEN compliance, and guaranteed 100% source code ownership.
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
              <span>Schedule Architecture Call (2-Hr NDA)</span>
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
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#34d399" }}>79% Saved</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>$35/hr vs $165/hr US Domestic</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#38bdf8" }}>4-6 Hours</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Daily Synchronous EST/PST Overlap</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#fde047" }}>72 Hours</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Rapid Pod Deployment SLA</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#a855f7" }}>100% IP</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Delaware Law Compatible Contracts</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── The 5 Core Solutions ─── */}
      <section style={{ padding: "85px 20px", maxWidth: "1160px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span style={{ fontSize: "13px", fontWeight: 800, color: "#38bdf8", textTransform: "uppercase", letterSpacing: "1.5px" }}>
            Engineered For Scale
          </span>
          <h2 style={{ fontSize: "34px", fontWeight: 900, marginTop: "8px", color: "#ffffff" }}>
            Full-Spectrum Digital &amp; Internet Solutions for US Companies
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "16px", maxWidth: "780px", margin: "10px auto 0" }}>
            From high-speed web apps and mobile interfaces to conversational AI chatbots and cloud scaling, we deliver engineering that drives real commercial growth.
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "36px" }}>
          {services.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setSelectedService(idx)}
              style={{
                backgroundColor: selectedService === idx ? "#2563eb" : "rgba(30, 41, 59, 0.6)",
                color: selectedService === idx ? "#ffffff" : "#cbd5e1",
                border: selectedService === idx ? "1px solid #3b82f6" : "1px solid rgba(255, 255, 255, 0.1)",
                padding: "14px 22px",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: "14px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                transition: "all 0.2s ease"
              }}
            >
              <i className={s.icon}></i>
              <span>{s.tabLabel || s.name}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Panel */}
        <div style={{
          background: "rgba(15, 23, 42, 0.9)",
          border: "1px solid rgba(59, 130, 246, 0.3)",
          borderRadius: "22px",
          padding: "40px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
            <div>
              <span style={{
                background: "rgba(37, 99, 235, 0.2)",
                color: "#60a5fa",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                padding: "6px 14px",
                borderRadius: "9999px",
                fontSize: "12px",
                fontWeight: 700
              }}>
                {services[selectedService].badge}
              </span>
              <h3 style={{ fontSize: "28px", fontWeight: 800, color: "#ffffff", marginTop: "12px" }}>
                {services[selectedService].name}
              </h3>
            </div>

            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                padding: "12px 24px",
                borderRadius: "10px",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none"
              }}
            >
              Get a Proposal for This Solution &rarr;
            </Link>
          </div>

          <p style={{ color: "#94a3b8", fontSize: "16px", lineHeight: 1.6, marginBottom: "28px" }}>
            {services[selectedService].description}
          </p>

          <div style={{ marginBottom: "28px" }}>
            <div style={{ fontSize: "14px", fontWeight: 800, color: "#ffffff", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "14px" }}>
              Key Technical Features &amp; Deliverables:
            </div>
            <div className="hub-features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "14px" }}>
              {services[selectedService].deliverables.map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <i className="fa-solid fa-circle-check" style={{ color: "#34d399", marginTop: "4px", fontSize: "15px" }}></i>
                  <span style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: "16px 20px", background: "rgba(6, 11, 24, 0.8)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.06)", display: "flex", alignItems: "center", gap: "12px" }}>
            <i className="fa-solid fa-layer-group" style={{ color: "#38bdf8", fontSize: "18px" }}></i>
            <div style={{ fontSize: "13px", color: "#94a3b8" }}>
              <strong style={{ color: "#ffffff" }}>Core Tech Architecture:</strong> {services[selectedService].techSpecs}
            </div>
          </div>

        </div>
      </section>

      {/* ─── Interactive US Cost & Savings Calculator ─── */}
      <section style={{ padding: "85px 20px", background: "#0b1222", borderTop: "1px solid rgba(255, 255, 255, 0.06)", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ fontSize: "13px", fontWeight: 800, color: "#34d399", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              Runway Extension Engine
            </span>
            <h2 style={{ fontSize: "34px", fontWeight: 900, marginTop: "8px", color: "#ffffff" }}>
              US In-House Hiring vs ChittorTech Dedicated Pod
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "16px", maxWidth: "700px", margin: "10px auto 0" }}>
              Calculate how much development budget your company saves each month by augmenting with our senior engineering pods.
            </p>
          </div>

          <div style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(59, 130, 246, 0.25)",
            borderRadius: "22px",
            padding: "40px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)"
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "center" }}>
              
              <div>
                <div style={{ marginBottom: "32px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <label style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>Dedicated Full-Time Developers</label>
                    <span style={{ fontSize: "18px", fontWeight: 900, color: "#38bdf8" }}>{teamSize} Engineers</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value) || 1)}
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
                    <label style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>Engagement Duration</label>
                    <span style={{ fontSize: "18px", fontWeight: 900, color: "#38bdf8" }}>{durationMonths} Months</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={durationMonths}
                    onChange={(e) => setDurationMonths(Number(e.target.value) || 1)}
                    style={{ width: "100%", accentColor: "#2563eb", cursor: "pointer", height: "8px" }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#64748b", marginTop: "6px" }}>
                    <span>1 Month (Pilot)</span>
                    <span>6 Months (Project)</span>
                    <span>12 Months (Annual)</span>
                  </div>
                </div>

                <div style={{ marginTop: "28px", padding: "16px", background: "rgba(6, 11, 24, 0.8)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)", fontSize: "13px", color: "#94a3b8" }}>
                  <i className="fa-solid fa-circle-info" style={{ color: "#38bdf8", marginRight: "8px" }}></i>
                  Calculated against benchmark US rates: <strong>$165/hr</strong> (Domestic Senior Average) vs <strong>$35/hr</strong> (ChittorTech Dedicated Pod).
                </div>
              </div>

              <div style={{
                background: "linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 58, 138, 0.35) 100%)",
                border: "1px solid rgba(59, 130, 246, 0.4)",
                borderRadius: "18px",
                padding: "32px",
                textAlign: "center"
              }}>
                <div style={{ fontSize: "13px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                  Total Estimated Capital Saved
                </div>
                <div style={{ fontSize: "44px", fontWeight: 900, color: "#34d399", margin: "10px 0" }}>
                  {formatUSD(savingsTotal)}
                </div>
                <div style={{ fontSize: "14px", color: "#60a5fa", fontWeight: 700, marginBottom: "24px" }}>
                  Save {savingsPercent}% compared to domestic US hiring
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", textAlign: "left", marginBottom: "24px" }}>
                  <div style={{ padding: "14px", background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.25)", borderRadius: "12px" }}>
                    <div style={{ fontSize: "11px", color: "#f87171", textTransform: "uppercase", fontWeight: 700 }}>US In-House Cost</div>
                    <div style={{ fontSize: "19px", fontWeight: 900, color: "#ffffff", marginTop: "4px" }}>{formatUSD(localTotal)}</div>
                  </div>
                  <div style={{ padding: "14px", background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.25)", borderRadius: "12px" }}>
                    <div style={{ fontSize: "11px", color: "#34d399", textTransform: "uppercase", fontWeight: 700 }}>ChittorTech Pod</div>
                    <div style={{ fontSize: "19px", fontWeight: 900, color: "#ffffff", marginTop: "4px" }}>{formatUSD(ctTotal)}</div>
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
                  Lock In Pod for {teamSize} Developers &rarr;
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions ─── */}
      <section style={{ padding: "85px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ fontSize: "13px", fontWeight: 800, color: "#fde047", textTransform: "uppercase", letterSpacing: "1.5px" }}>
            US Client Clarity
          </span>
          <h2 style={{ fontSize: "34px", fontWeight: 900, marginTop: "8px", color: "#ffffff" }}>
            Frequently Asked Questions (United States)
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
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
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
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
                  <div style={{ padding: "0 24px 24px", color: "#cbd5e1 !important", fontSize: "15px", lineHeight: 1.7, borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "18px" }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Final CTA Banner ─── */}
      <section style={{
        padding: "90px 20px",
        background: "radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.4) 0%, rgba(6, 11, 24, 1) 100%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "38px", fontWeight: 900, color: "#ffffff", marginBottom: "16px" }}>
            Ready to Scale Your Engineering Velocity in the US?
          </h2>
          <p style={{ color: "#cbd5e1 !important", fontSize: "18px", lineHeight: 1.6, marginBottom: "40px" }}>
            Speak directly with our senior software architects. Receive an airtight bilateral NDA within 2 hours, custom technical architecture proposal, and a 2-week risk-free trial.
          </p>

          <div style={{ display: "flex", gap: "18px", justifyContent: "center", flexWrap: "wrap" }}>
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
                boxShadow: "0 12px 28px -6px rgba(37, 99, 235, 0.6)"
              }}
            >
              Book Architecture Consultation &rarr;
            </Link>

            <a
              href="https://wa.me/919929828456?text=Hi%20ChittorTech,%20we%20are%20a%20US%20business%20looking%20for%20dedicated%20software%20engineering."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#059669",
                color: "#ffffff",
                padding: "18px 36px",
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
            Guaranteed Response Time: &lt; 15 minutes • No Recruitment Fees • Direct USD ACH &amp; W-8BEN Compliance
          </div>
        </div>
      </section>

    </div>
  );
}
