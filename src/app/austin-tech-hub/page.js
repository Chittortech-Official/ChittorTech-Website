"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export default function AustinTechHubPage() {
  const [teamSize, setTeamSize] = useState(3);
  const [durationMonths, setDurationMonths] = useState(6);
  const [selectedService, setSelectedService] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // Austin Benchmark Rates:
  // Austin / Texas Senior Developer: ~$155/hr
  // ChittorTech Senior Developer / Specialist: ~$35/hr
  const hoursPerMonth = 160;
  const localRatePerHour = 155;
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
    "id": "b2b-saas-web",
    "tabLabel": "B2B SaaS Web",
    "name": "Enterprise B2B SaaS Platforms & Next.js 15 Web Systems",
    "badge": "App Router, Multi-Tenant RBAC & Stripe Billing",
    "icon": "fa-solid fa-code",
    "description": "Engineered for Austin scale-ups and Silicon Hills B2B SaaS companies. Build high-velocity, scalable platforms with Next.js 15, TypeScript, and clean modular architecture.",
    "deliverables": [
      "Multi-tenant database isolation with role-based access control (RBAC)",
      "Stripe Billing integration supporting usage-based pricing, subscriptions, and invoicing",
      "Sub-second page rendering and perfect Core Web Vitals on AWS and Cloudflare",
      "Comprehensive API documentation with Swagger / OpenAPI standards",
      "Playwright end-to-end testing suite ensuring enterprise-grade stability"
    ],
    "techSpecs": "Next.js 15, React 19, TypeScript, Tailwind CSS, PostgreSQL, Stripe Billing"
  },
  {
    "id": "enterprise-ai",
    "tabLabel": "Enterprise AI",
    "name": "Private Corporate Knowledge RAG & Workflow AI Agents",
    "badge": "Groq LPUs, Private RAG & Autonomous Tool Calling",
    "icon": "fa-solid fa-brain",
    "description": "Empower your Austin B2B company with autonomous AI agents that automate customer onboarding, ticket routing, and private knowledge retrieval with sub-500ms speed.",
    "deliverables": [
      "Sub-500ms streaming inference powered by Groq LPU hardware and Llama 3.3",
      "Private vector RAG indexing internal Notion, Confluence, and corporate PDFs",
      "Autonomous tool-calling agents executing actions across your internal APIs",
      "Automated Tier-1 customer support handling 70%+ of customer service inquiries",
      "Strict data privacy guarantees with zero model training on your proprietary data"
    ],
    "techSpecs": "Groq LPU, LangChain, Pinecone, Llama 3.3, OpenAI API, Python FastAPI"
  },
  {
    "id": "mobile-apps",
    "tabLabel": "Mobile Apps",
    "name": "Native & Cross-Platform Field & Enterprise Mobile Apps",
    "badge": "React Native & Expo",
    "icon": "fa-solid fa-mobile-screen-button",
    "description": "Fluid cross-platform mobile apps for field operations, sales teams, and customer portals built with React Native, Expo, and offline SQLite synchronization.",
    "deliverables": [
      "Single clean TypeScript codebase deployed to Apple App Store & Google Play",
      "Offline-first architecture with automatic background database synchronization",
      "Biometric Face ID authentication and secure hardware keychain storage",
      "Push notifications and real-time alerts via Firebase Cloud Messaging",
      "60fps gesture-driven UI with responsive Dark Mode aesthetics"
    ],
    "techSpecs": "React Native, Expo, TypeScript, SQLite, Firebase, Apple Pay"
  },
  {
    "id": "texas-cloud",
    "tabLabel": "Cloud & DevOps",
    "name": "AWS us-east-2 & Cloudflare High-Availability DevOps",
    "badge": "AWS, Cloudflare Edge & Zero-Downtime CI/CD",
    "icon": "fa-solid fa-server",
    "description": "Resilient cloud networking, automated CI/CD pipelines, and high-concurrency database connection pooling designed for Austin scale-ups requiring 99.99% uptime.",
    "deliverables": [
      "Sovereign US data hosting in AWS us-east-2 with multi-AZ failover and backup",
      "Cloudflare Edge CDN caching and WAF security mitigating high-volume DDoS attacks",
      "PostgreSQL connection pooling, read replicas, and Redis in-memory acceleration",
      "Automated Docker CI/CD deployment pipelines with zero-downtime blue-green rollouts",
      "24/7 synthetic monitoring, error tracking, and automated rollback mechanisms"
    ],
    "techSpecs": "AWS us-east-2, Cloudflare Edge, Docker, PostgreSQL, Redis, Terraform"
  },
  {
    "id": "seo-growth",
    "tabLabel": "SEO & Growth",
    "name": "B2B SaaS High-Intent Keyword Dominance & GA4 Pipelines",
    "badge": "Organic Search Dominance & Product Analytics",
    "icon": "fa-solid fa-magnifying-glass-chart",
    "description": "Dominate competitive B2B software queries in Austin and across the US with programmatic SEO architectures, automated XML sitemaps, and GA4 analytics.",
    "deliverables": [
      "Programmatic SEO architecture capturing high-value commercial software queries",
      "Instant indexing API submitting new content directly to Google Search Console",
      "SoftwareApplication Schema.org structured data markup for Google rich snippets",
      "Google Analytics 4 setup tracking exact user acquisition funnels and signups",
      "100/100 Core Web Vitals optimization directly lifting organic search visibility"
    ],
    "techSpecs": "Google Search Console, GA4, Next.js Metadata API, Schema.org, SEMrush"
  }
];

  const faqs = [
    {
      q: "How well do your hours align with Austin (Central Standard Time)?",
      a: "We guarantee 4 to 5 hours of daily synchronous overlap during Austin's morning business hours (8:00 AM - 1:00 PM CST). We participate in your live morning standups via Zoom/Google Meet and collaborate continuously on Slack."
    },
    {
      q: "How does US tax compliance work for our accounting department?",
      a: "We provide completed W-8BEN / W-8BEN-E forms confirming our foreign contractor status with zero withholding tax complications. We invoice in USD payable via domestic US ACH, Wire, or Stripe."
    },
    {
      q: "Who owns the code and intellectual property?",
      a: "You retain 100% legal ownership of all code, designs, and data. Everything is committed directly into your private GitHub or GitLab repository under strict bilateral NDAs and work-for-hire clauses."
    },
    {
      q: "Can we start with a risk-free trial?",
      a: "Yes! We offer a 2-Week Risk-Free Technical Pilot. Onboard our senior developers, assign real sprint tickets, and evaluate our velocity before making any financial commitment."
    }
  ];

  return (
    <div className="austin-page" style={{
      backgroundColor: "#060b18",
      color: "#f8fafc",
      minHeight: "100vh",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      
      {/* ─── High-Contrast Overrides ─── */}
      <style>{`
        .austin-page h1, .austin-page h2, .austin-page h3, .austin-page h4, .austin-page h5 {
          color: #ffffff !important;
          font-weight: 800;
        }
        .austin-page p {
          color: #94a3b8 !important;
        }
        .gold-gradient-text {
          background: linear-gradient(135deg, #fde047 0%, #ca8a04 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cyan-gradient-text {
          background: linear-gradient(135deg, #38bdf8 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .at-card {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .at-card:hover {
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
            border: "1px solid rgba(234, 179, 8, 0.4)",
            padding: "8px 22px",
            borderRadius: "9999px",
            fontSize: "14px",
            fontWeight: 700,
            color: "#fde047",
            marginBottom: "28px"
          }}>
            <span style={{ fontSize: "18px" }}>🤠</span>
            <span>AUSTIN SILICON HILLS CORRIDOR</span>
            <span style={{ color: "#64748b" }}>•</span>
            <span style={{ color: "#38bdf8" }}>Central Time (CST) Morning Sync</span>
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
            Dedicated Web Development, AI Chatbots &amp; Cloud Pods for <span className="gold-gradient-text">Austin Tech Leaders</span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            color: "#cbd5e1 !important",
            maxWidth: "880px",
            margin: "0 auto 40px"
          }}>
            Scale your B2B SaaS, mobile app, and cloud infrastructure with Austin-aligned dedicated engineering pods. Save <strong>77% on development expenses</strong> while maintaining daily Central Time standup synchronicity and 100% IP ownership.
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
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#34d399" }}>77% Saved</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>$35/hr vs $155/hr Texas Domestic</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#38bdf8" }}>4-5 Hours</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Daily CST Morning Overlap</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#fde047" }}>72 Hours</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Rapid Pod Onboarding SLA</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#a855f7" }}>100% IP</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Full Private GitHub Transfer</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── The 5 Core Solutions ─── */}
      <section style={{ padding: "85px 20px", maxWidth: "1160px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span style={{ fontSize: "13px", fontWeight: 800, color: "#38bdf8", textTransform: "uppercase", letterSpacing: "1.5px" }}>
            Silicon Hills Capabilities
          </span>
          <h2 style={{ fontSize: "34px", fontWeight: 900, marginTop: "8px", color: "#ffffff" }}>
            Full-Spectrum Digital &amp; Cloud Solutions for Austin Companies
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "16px", maxWidth: "780px", margin: "10px auto 0" }}>
            From high-speed web apps and mobile interfaces to conversational AI chatbots and cloud scaling, we deliver engineering that drives real commercial growth.
          </p>
        </div>

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
              Request Pod Architecture &rarr;
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

      {/* ─── Interactive Austin Cost Calculator ─── */}
      <section style={{ padding: "85px 20px", background: "#0b1222", borderTop: "1px solid rgba(255, 255, 255, 0.06)", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ fontSize: "13px", fontWeight: 800, color: "#34d399", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              Runway Extension Engine
            </span>
            <h2 style={{ fontSize: "34px", fontWeight: 900, marginTop: "8px", color: "#ffffff" }}>
              Austin In-House Hiring vs ChittorTech Dedicated Pod
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "16px", maxWidth: "700px", margin: "10px auto 0" }}>
              Calculate how much development budget your business saves each month by augmenting with our senior engineering pods.
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
                    <label style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>Dedicated Developers</label>
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
                    <label style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>Engagement Horizon</label>
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
                  Calculated against Texas rates: <strong>$155/hr</strong> (Austin Senior Average) vs <strong>$35/hr</strong> (ChittorTech Dedicated Pod).
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
                  Save {savingsPercent}% compared to Austin domestic hiring
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", textAlign: "left", marginBottom: "24px" }}>
                  <div style={{ padding: "14px", background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.25)", borderRadius: "12px" }}>
                    <div style={{ fontSize: "11px", color: "#f87171", textTransform: "uppercase", fontWeight: 700 }}>Austin In-House</div>
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
            Texas Tech Clarity
          </span>
          <h2 style={{ fontSize: "34px", fontWeight: 900, marginTop: "8px", color: "#ffffff" }}>
            Frequently Asked Questions (Austin &amp; Texas)
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
            Ready to Scale Your Engineering Velocity in Austin?
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
              href="https://wa.me/919929828456?text=Hi%20ChittorTech,%20we%20are%20an%20Austin/Texas%20company%20looking%20for%20software%20engineering."
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
