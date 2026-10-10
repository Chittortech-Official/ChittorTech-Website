"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export default function MelbourneAustraliaPage() {
  const [teamSize, setTeamSize] = useState(3);
  const [durationMonths, setDurationMonths] = useState(6);
  const [selectedService, setSelectedService] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // Melbourne / Australia Benchmark Rates:
  // Senior Software Engineer in Melbourne / Cremorne: ~AUD $165/hr
  // ChittorTech Senior Developer: ~AUD $55/hr
  const hoursPerMonth = 160;
  const localRatePerHour = 165;
  const ctRatePerHour = 55;

  const localTotal = useMemo(() => {
    return teamSize * durationMonths * hoursPerMonth * localRatePerHour;
  }, [teamSize, durationMonths]);

  const ctTotal = useMemo(() => {
    return teamSize * durationMonths * hoursPerMonth * ctRatePerHour;
  }, [teamSize, durationMonths]);

  const savingsTotal = localTotal - ctTotal;
  const savingsPercent = Math.round((savingsTotal / localTotal) * 100);

  const formatAUD = (val) => {
    return `AUD $${val.toLocaleString()}`;
  };

  const services = [
    {
      id: "design-web",
      tabLabel: "Design & Next.js",
      name: "Design-Forward Next.js 15 & Digital Web Applications",
      badge: "App Router, 60fps Micro-Interactions & Next.js 15",
      icon: "fa-solid fa-code",
      description: "Fast, design-forward web applications and SaaS platforms engineered for Melbourne scale-ups, design studios, and innovators using Next.js 15, React 19, and Tailwind CSS.",
      deliverables: [
        "Pixel-perfect translation of Figma designs into clean, responsive Next.js 15 components",
        "Sub-second Core Web Vitals performance deployed across Australian edge CDN nodes",
        "Type-safe architecture with TypeScript, Zod validation, and Supabase / PostgreSQL",
        "Integration with Australian payment gateways (Stripe AU, PayTo, BPAY, Apple Pay)",
        "Automated regression test coverage with Playwright ensuring zero release bugs"
      ],
      techSpecs: "Next.js 15, React 19, TypeScript, Tailwind CSS, Supabase, Cloudflare Edge"
    },
    {
      id: "conversational-ai",
      tabLabel: "Creative AI",
      name: "Creative & Generative AI Agents & RAG Workflows",
      badge: "Groq LPUs, Private RAG & Multi-Modal AI",
      icon: "fa-solid fa-brain",
      description: "Replace generic bots with private autonomous conversational AI agents and low-latency LLMs that answer queries, qualify leads, and integrate directly with your Victorian business systems.",
      deliverables: [
        "Sub-500ms response latency powered by Groq LPU hardware and streaming APIs",
        "Private document RAG pipelines searching Australian corporate, legal, or financial documents",
        "WhatsApp Business API and web chatbot automation for instant client communication",
        "24/7 Tier-1 customer support automation handling 75%+ of repetitive inquiries",
        "Zero LLM training on confidential client data with strict enterprise API safeguards"
      ],
      techSpecs: "Groq LPU, LangChain, Pinecone, Llama 3.3, OpenAI API, WhatsApp Cloud API"
    },
    {
      id: "mobile-apps",
      tabLabel: "Mobile Apps",
      name: "Fluid React Native Mobile Apps with 60fps UX",
      badge: "React Native & Expo",
      icon: "fa-solid fa-mobile-screen-button",
      description: "Fluid, high-performance mobile applications built with React Native and Expo, featuring biometric Face ID authentication, offline data caching, and native Apple Pay support.",
      deliverables: [
        "Single clean TypeScript codebase deployed synchronously to Apple App Store & Google Play",
        "Native Apple Pay and Google Pay integration tailored for Australian consumers",
        "Real-time event streaming and push notifications via Firebase Cloud Messaging",
        "Biometric Face ID / Touch ID authentication and secure on-device keychain storage",
        "60fps gesture-driven navigation and elegant dark-mode aesthetics"
      ],
      techSpecs: "React Native, Expo, TypeScript, Apple Pay, Stripe SDK, Firebase"
    },
    {
      id: "cloud-scaling",
      tabLabel: "Aussie Cloud",
      name: "AWS Melbourne (ap-southeast-4) Sovereign Cloud",
      badge: "AWS Melbourne & Cloudflare Edge",
      icon: "fa-solid fa-server",
      description: "Resilient cloud networking, automated CI/CD pipelines, and high-concurrency database connection pooling designed for Victorian scale-ups requiring 99.99% uptime.",
      deliverables: [
        "Sovereign Australian data residency deployment on AWS Melbourne (ap-southeast-4)",
        "Cloudflare Edge CDN caching and WAF security mitigating high-volume DDoS attacks",
        "PostgreSQL connection pooling, read replicas, and Redis in-memory acceleration",
        "Automated Docker CI/CD deployment pipelines with zero-downtime blue-green rollouts",
        "24/7 synthetic monitoring, error tracking, and automated rollback mechanisms"
      ],
      techSpecs: "AWS ap-southeast-4, Cloudflare Edge, Docker, PostgreSQL, Redis, Terraform"
    },
    {
      id: "technical-seo",
      tabLabel: "SEO & Growth",
      name: "Google Australia Technical SEO & Brand Visibility",
      badge: "Organic Search & Conversion Analytics",
      icon: "fa-solid fa-magnifying-glass-chart",
      description: "Dominate competitive Australian search queries with programmatic SEO architectures, automated XML sitemaps, and conversion-focused GA4 measurement.",
      deliverables: [
        "Programmatic SEO architecture delivering hundreds of high-ranking landing pages across Australia",
        "Instant indexing API submitting new content directly to Google Search Console",
        "Schema.org JSON-LD structured data markup for Google rich snippets",
        "Google Analytics 4 setup tracking exact user acquisition funnels and checkout conversions",
        "100/100 Core Web Vitals optimization directly lifting organic search visibility"
      ],
      techSpecs: "Google Search Console, GA4, Next.js Metadata API, Schema.org, SEMrush"
    }
  ];

  const faqs = [
    {
      q: "How does the overnight execution advantage work for Melbourne businesses?",
      a: "Melbourne is 4.5 to 5.5 hours ahead of India (AEST). When your team finishes at 5:00 PM AEST and logs tickets in Jira or Linear, our engineers execute throughout your evening and night. When you arrive at 8:30 AM AEST, tested pull requests are ready in GitHub for review."
    },
    {
      q: "How do your costs compare to hiring developers in Cremorne or Southbank?",
      a: "Senior software developers in Melbourne cost upwards of AUD $135,000+ base salary plus superannuation, payroll tax, and recruitment fees (equaling AUD $165+/hr as contractors). ChittorTech delivers dedicated senior software engineers at AUD $55/hr—saving you 67%."
    },
    {
      q: "Are your platforms compliant with the Australian Privacy Principles (APP)?",
      a: "Yes. We strictly adhere to the Privacy Act 1988 and the 13 Australian Privacy Principles (APPs). We provision database hosting in AWS Melbourne (ap-southeast-4) or AWS Sydney and implement rigorous encryption for all user data."
    },
    {
      q: "What is your intellectual property and non-disclosure policy?",
      a: "We execute mutual non-disclosure agreements before technical discussions. All contracts include comprehensive work-for-hire clauses transferring 100% intellectual property, code repositories, and documentation to your Australian entity."
    },
    {
      q: "Can we test your team before committing to a contract?",
      a: "Yes. We offer a 2-Week Risk-Free Technical Pilot. Assign real tasks from your backlog; if our code quality, speed, and communication do not exceed your standards, you pay nothing."
    },
    {
      q: "What payment currencies and invoicing structures do you support for Australian companies?",
      a: "We invoice directly in Australian Dollars (AUD $) with zero exchange rate friction. Payments are accepted via international wire transfer or corporate card with predictable monthly billing."
    }
  ];

  return (
    <div className="melbourne-page" style={{
      backgroundColor: "#060b18",
      color: "#f8fafc",
      minHeight: "100vh",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      
      {/* ─── High-Contrast Overrides ─── */}
      <style>{`
        .melbourne-page h1, .melbourne-page h2, .melbourne-page h3, .melbourne-page h4, .melbourne-page h5 {
          color: #ffffff !important;
          font-weight: 800;
        }
        .melbourne-page p {
          color: #94a3b8 !important;
        }
        .teal-gradient-text {
          background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cyan-gradient-text {
          background: linear-gradient(135deg, #38bdf8 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .melbourne-card {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .melbourne-card:hover {
          border-color: rgba(20, 184, 166, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
        }
      `}</style>

      {/* ─── Hero Section ─── */}
      <section style={{
        position: "relative",
        padding: "110px 20px 85px",
        background: "radial-gradient(circle at 50% 15%, rgba(20, 184, 166, 0.25) 0%, rgba(6, 11, 24, 1) 75%)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        overflow: "hidden"
      }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(20, 184, 166, 0.4)",
            padding: "8px 22px",
            borderRadius: "9999px",
            fontSize: "14px",
            fontWeight: 700,
            color: "#14b8a6",
            marginBottom: "28px"
          }}>
            <span style={{ fontSize: "18px" }}>☕</span>
            <span>MELBOURNE &amp; CREMORNE TECH PRECINCT</span>
            <span style={{ color: "#64748b" }}>•</span>
            <span style={{ color: "#34d399" }}>Overnight Sprint Execution • AEST Sync</span>
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
            Design-Led Software Engineering for <span className="teal-gradient-text">Melbourne Tech Innovators</span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            color: "#cbd5e1 !important",
            maxWidth: "880px",
            margin: "0 auto 40px"
          }}>
            From Cremorne to Southbank, bridge design excellence with rock-solid engineering. Deploy dedicated full-stack Next.js engineers, low-latency AI agents, and cloud architectures with overnight delivery and strict Australian Privacy Principles (APP) compliance.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#0d9488",
                color: "#ffffff",
                padding: "18px 40px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 28px -6px rgba(13, 148, 136, 0.6)"
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
              <i className="fa-solid fa-laptop-code" style={{ color: "#14b8a6" }}></i>
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
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#34d399" }}>67%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Melbourne Budget Saved</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#14b8a6" }}>24/7 Loop</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Overnight Sprint Velocity</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#38bdf8" }}>APP Ready</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>AWS Melbourne (ap-southeast-4)</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#a855f7" }}>100%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Client IP &amp; Code Ownership</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Interactive Melbourne Cost Calculator ─── */}
      <section style={{ padding: "80px 20px", maxWidth: "1140px", margin: "0 auto" }}>
        <div className="melbourne-card" style={{ padding: "40px 32px", border: "1px solid rgba(20, 184, 166, 0.25)" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span style={{ color: "#14b8a6", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              VICTORIAN ECONOMIC LEVERAGE CALCULATOR
            </span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", marginTop: "8px", color: "#ffffff" }}>
              Compare Melbourne Contractor Rates vs ChittorTech Dedicated Pods
            </h2>
            <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "15px" }}>
              Benchmark based on standard Melbourne contractor rates of <strong>AUD $165/hr</strong> vs ChittorTech’s dedicated senior pod rate of <strong>AUD $55/hr</strong>.
            </p>
          </div>

          <div className="hub-calc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", alignItems: "center" }}>
            
            {/* Sliders */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div>
                <div className="hub-slider-label-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontWeight: 700, flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ color: "#ffffff" }}>Number of Full-Time Engineers:</span>
                  <span style={{ color: "#14b8a6", fontSize: "18px" }}>{teamSize} {teamSize === 1 ? "Developer" : "Developers"}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value) || 1)}
                  style={{ width: "100%", accentColor: "#14b8a6", cursor: "pointer", touchAction: "pan-y" }}
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
                  <span style={{ color: "#14b8a6", fontSize: "18px" }}>{durationMonths} Months</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value) || 1)}
                  style={{ width: "100%", accentColor: "#14b8a6", cursor: "pointer", touchAction: "pan-y" }}
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
                <span style={{ color: "#94a3b8" }}>Melbourne Contractor Benchmark:</span>
                <span style={{ color: "#f87171", fontWeight: 700, textDecoration: "line-through" }}>{formatAUD(localTotal)}</span>
              </div>
              <div className="hub-calc-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px", fontSize: "14px", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ color: "#94a3b8" }}>ChittorTech Dedicated Pod:</span>
                <span style={{ color: "#34d399", fontWeight: 700 }}>{formatAUD(ctTotal)}</span>
              </div>
              <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.1)", margin: "16px 0" }} />
              <div>
                <div style={{ fontSize: "13px", color: "#14b8a6", textTransform: "uppercase", fontWeight: 800 }}>
                  Total Estimated Capital Saved:
                </div>
                <div style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 900, color: "#ffffff", marginTop: "4px" }}>
                  {formatAUD(savingsTotal)}
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
          <span style={{ color: "#14b8a6", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            SPECIALIZED TECHNICAL CAPABILITIES
          </span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", marginTop: "8px", color: "#ffffff" }}>
            Software Engineering Built for Melbourne Digital Pioneers
          </h2>
          <p style={{ maxWidth: "720px", margin: "12px auto 0", fontSize: "16px" }}>
            From design-forward Next.js web applications to autonomous conversational AI agents, we engineer systems that deliver enterprise stability.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="hub-tabs-wrap" style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "36px" }}>
          {services.map((srv, idx) => (
            <button
              key={srv.id}
              onClick={() => setSelectedService(idx)}
              style={{
                background: selectedService === idx ? "#0d9488" : "rgba(15, 23, 42, 0.8)",
                color: selectedService === idx ? "#ffffff" : "#94a3b8",
                border: selectedService === idx ? "1px solid #14b8a6" : "1px solid rgba(255, 255, 255, 0.1)",
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
              <i className={srv.icon} style={{ color: selectedService === idx ? "#ffffff" : "#14b8a6" }}></i>
              <span>{srv.tabLabel || srv.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Service Card */}
        <div className="melbourne-card" style={{ padding: "40px", border: "1px solid rgba(20, 184, 166, 0.3)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
            <div>
              <span style={{
                background: "rgba(20, 184, 166, 0.15)",
                color: "#14b8a6",
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
                backgroundColor: "#0d9488",
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

      {/* ─── Why Melbourne Startups Partner with ChittorTech ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", color: "#ffffff" }}>
            Engineered for Victorian Innovators
          </h2>
          <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "16px" }}>
            Avoid high Melbourne contractor rates and build with senior technical talent.
          </p>
        </div>

        <div className="hub-features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          
          <div className="melbourne-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(20, 184, 166, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-moon" style={{ color: "#14b8a6", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>Overnight Delivery Advantage</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              India executes while Melbourne rests. Assign tickets in Linear or Jira at 5:00 PM AEST, and wake up at 8:30 AM AEST to find completed, tested pull requests ready for deployment. Your business operates around the clock.
            </p>
          </div>

          <div className="melbourne-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(52, 211, 153, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-shield-halved" style={{ color: "#34d399", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>Australian Privacy Compliance</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              We strictly adhere to the Australian Privacy Principles (APPs). Production databases are deployed to AWS Melbourne (ap-southeast-4) with encrypted backups and rigorous access management controls.
            </p>
          </div>

          <div className="melbourne-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(245, 158, 11, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-dollar-sign" style={{ color: "#f59e0b", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>Direct AUD ($) Invoicing</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              No foreign exchange surprises or bank fee losses. We invoice transparently in Australian Dollars (AUD $) with predictable billing cycles and 30-day flexible rolling terms.
            </p>
          </div>

        </div>
      </section>

      {/* ─── Executive FAQs ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "980px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", color: "#ffffff" }}>
            Frequently Asked Questions by Melbourne Leaders
          </h2>
          <p style={{ fontSize: "15px", marginTop: "8px" }}>
            Answers regarding overnight sprints, APP compliance, and trial pilots.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="melbourne-card"
              style={{
                padding: "24px",
                cursor: "pointer",
                border: openFaq === idx ? "1px solid rgba(20, 184, 166, 0.5)" : "1px solid rgba(255, 255, 255, 0.08)"
              }}
              onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                <h3 style={{ fontSize: "17px", color: "#ffffff", margin: 0 }}>
                  {faq.q}
                </h3>
                <i
                  className={`fa-solid ${openFaq === idx ? "fa-chevron-up" : "fa-chevron-down"}`}
                  style={{ color: "#14b8a6", fontSize: "14px" }}
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
        background: "radial-gradient(circle at 50% 50%, rgba(13, 148, 136, 0.25) 0%, rgba(6, 11, 24, 1) 75%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4.5vw, 44px)", color: "#ffffff", marginBottom: "18px" }}>
            Ready to Accelerate Your Melbourne Engineering Roadmap?
          </h2>
          <p style={{ fontSize: "17px", color: "#cbd5e1 !important", maxWidth: "680px", margin: "0 auto 36px", lineHeight: 1.65 }}>
            Book an introductory technical architecture call with our leadership. We execute bilateral NDAs within 2 hours and can deploy a dedicated senior engineering pod within 72 hours.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#0d9488",
                color: "#ffffff",
                padding: "18px 42px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 28px -6px rgba(13, 148, 136, 0.6)"
              }}
            >
              <span>Schedule Architecture Consultation</span>
              <span>&rarr;</span>
            </Link>

            <a
              href="https://wa.me/919929828456?text=Hello%20ChittorTech%2C%20we%20are%20a%20Melbourne%20business%20interested%20in%20dedicated%20engineering%20pods."
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
