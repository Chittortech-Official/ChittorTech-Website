"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export default function SydneyAustraliaPage() {
  const [teamSize, setTeamSize] = useState(3);
  const [durationMonths, setDurationMonths] = useState(6);
  const [selectedService, setSelectedService] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // Sydney / Australia Benchmark Rates:
  // Senior Software Engineer in Sydney / Barangaroo: ~AUD $175/hr ($115 USD/hr)
  // ChittorTech Senior Developer: ~AUD $55/hr ($37 USD/hr)
  const hoursPerMonth = 160;
  const localRatePerHour = 175;
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
      id: "modern-web",
      tabLabel: "Next.js & E-Com",
      name: "High-Performance Next.js 15 & E-Commerce Marketplaces",
      badge: "App Router, Headless Commerce & Fast Checkout",
      icon: "fa-solid fa-code",
      description: "Blazing-fast headless e-commerce marketplaces and SaaS portals engineered for Sydney brands using Next.js 15, React 19, and Tailwind CSS with sub-second page loads.",
      deliverables: [
        "Headless Shopify, MedusaJS, and custom Next.js e-commerce storefronts",
        "Sub-second Core Web Vitals deployed on Australian edge nodes (ap-southeast-2)",
        "Australian Privacy Principles (APP) compliant customer data architecture",
        "Seamless integration with Australian gateways: Stripe AU, Afterpay, PayTo, and Apple Pay",
        "Automated end-to-end regression testing with Playwright ensuring 100% checkout reliability"
      ],
      techSpecs: "Next.js 15, React 19, TypeScript, Tailwind CSS, Supabase, AWS ap-southeast-2"
    },
    {
      id: "conversational-ai",
      tabLabel: "Autonomous AI",
      name: "Autonomous AI Agents, RAG & Logistics Automation",
      badge: "Groq LPUs, Private RAG & WhatsApp Support",
      icon: "fa-solid fa-brain",
      description: "Deploy private autonomous conversational AI agents and sub-second LLM workflows that handle customer support, inventory queries, and CRM lead qualification 24/7 across Australia.",
      deliverables: [
        "Sub-500ms streaming response times powered by Groq LPU hardware and Llama 3.3",
        "Private document RAG pipelines searching enterprise policy and Australian compliance PDFs",
        "WhatsApp Business Cloud API and web live-chat automation for real-time lead capture",
        "Automated Tier-1 customer support resolving 75%+ of repetitive inquiries autonomously",
        "Zero LLM training on confidential client proprietary data with enterprise isolation"
      ],
      techSpecs: "Groq LPU, LangChain, Pinecone, Llama 3.3, OpenAI API, WhatsApp Cloud API"
    },
    {
      id: "mobile-apps",
      tabLabel: "Mobile Apps",
      name: "Cross-Platform iOS & Android Mobile Applications",
      badge: "React Native, Expo & Biometrics",
      icon: "fa-solid fa-mobile-screen-button",
      description: "Fluid, high-performance cross-platform mobile apps engineered with React Native and Expo, featuring Face ID security, offline SQLite caching, and native Apple Pay support.",
      deliverables: [
        "Single clean TypeScript codebase deployed simultaneously to Apple App Store & Google Play",
        "Native Apple Pay, Google Wallet, and Afterpay integration for Australian consumers",
        "Real-time event streaming and push notifications via Firebase Cloud Messaging",
        "Biometric Face ID / Touch ID authentication with secure on-device keychain encryption",
        "60fps gesture-driven animations and responsive Dark Mode aesthetics"
      ],
      techSpecs: "React Native, Expo, TypeScript, Apple Pay, Stripe SDK, Firebase"
    },
    {
      id: "cloud-scaling",
      tabLabel: "Aussie Cloud",
      name: "Sovereign Aussie Cloud & High-Availability DevOps",
      badge: "AWS Sydney (ap-southeast-2) & Cloudflare WAF",
      icon: "fa-solid fa-server",
      description: "Resilient cloud networking, automated CI/CD pipelines, and high-concurrency database connection pooling designed for Australian scale-ups requiring 99.99% uptime.",
      deliverables: [
        "Sovereign Australian data residency guaranteed on AWS Sydney (ap-southeast-2)",
        "Cloudflare Edge CDN caching and WAF security mitigating high-volume DDoS attacks",
        "PostgreSQL connection pooling, read replicas, and Redis in-memory acceleration",
        "Automated Docker CI/CD deployment pipelines with zero-downtime blue-green rollouts",
        "24/7 synthetic monitoring, error tracking, and automated rollback mechanisms"
      ],
      techSpecs: "AWS ap-southeast-2, Cloudflare Edge, Docker, PostgreSQL, Redis, Terraform"
    },
    {
      id: "technical-seo",
      tabLabel: "SEO & Growth",
      name: "Google Australia Programmatic SEO & GA4 Funnels",
      badge: "Organic Search Dominance & Analytics",
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
      q: "How does the overnight execution advantage work for Sydney companies?",
      a: "Because India is 4.5 to 5.5 hours behind Sydney (AEST), your engineering pod continues executing sprint tasks while Sydney sleeps. You assign backlog items at the end of your day, and when you wake up at 8:30 AM AEST, tested pull requests are ready in GitHub for review. You effectively operate on a 24-hour delivery loop."
    },
    {
      q: "How do your costs compare to hiring software developers in Sydney or Barangaroo?",
      a: "Senior software developers in Sydney command AUD $140,000 to $190,000+ base salaries plus superannuation, payroll tax, and recruiter fees (costing upwards of AUD $175+/hr contractor equivalent). ChittorTech delivers dedicated senior software engineers at AUD $55/hr—saving you nearly 70%."
    },
    {
      q: "Are your platforms compliant with the Australian Privacy Principles (APP)?",
      a: "Yes. We strictly adhere to the Privacy Act 1988 and the 13 Australian Privacy Principles (APPs). We provision database hosting in AWS Sydney (ap-southeast-2) and implement rigorous encryption for all user data."
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
    <div className="sydney-page" style={{
      backgroundColor: "#060b18",
      color: "#f8fafc",
      minHeight: "100vh",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      
      {/* ─── High-Contrast Overrides ─── */}
      <style>{`
        .sydney-page h1, .sydney-page h2, .sydney-page h3, .sydney-page h4, .sydney-page h5 {
          color: #ffffff !important;
          font-weight: 800;
        }
        .sydney-page p {
          color: #94a3b8 !important;
        }
        .ocean-gradient-text {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cyan-gradient-text {
          background: linear-gradient(135deg, #38bdf8 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .sydney-card {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sydney-card:hover {
          border-color: rgba(56, 189, 248, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
        }
      `}</style>

      {/* ─── Hero Section ─── */}
      <section style={{
        position: "relative",
        padding: "110px 20px 85px",
        background: "radial-gradient(circle at 50% 15%, rgba(2, 132, 199, 0.25) 0%, rgba(6, 11, 24, 1) 75%)",
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
            <span style={{ fontSize: "18px" }}>🦘</span>
            <span>SYDNEY HARBOUR &amp; BARANGAROO TECH</span>
            <span style={{ color: "#64748b" }}>•</span>
            <span style={{ color: "#34d399" }}>Overnight Delivery Loop • AEST Sync</span>
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
            Full-Stack Software Engineering for <span className="cyan-gradient-text">Sydney Scale-Ups &amp; Enterprises</span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            color: "#cbd5e1 !important",
            maxWidth: "880px",
            margin: "0 auto 40px"
          }}>
            From Barangaroo to Surry Hills, scale your digital capability at 3x velocity. Deploy senior Next.js full-stack developers, low-latency AI agents, and cloud architectures with overnight sprint delivery and strict Australian Privacy Principles (APP) compliance.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#0284c7",
                color: "#ffffff",
                padding: "18px 40px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 28px -6px rgba(2, 132, 199, 0.6)"
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
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#34d399" }}>69%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Sydney Budget Saved</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#38bdf8" }}>24/7 Loop</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Overnight Sprint Execution</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#fde047" }}>APP Ready</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>AWS Sydney (ap-southeast-2)</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#a855f7" }}>100%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Client IP &amp; Code Ownership</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Interactive Sydney Cost Calculator ─── */}
      <section style={{ padding: "80px 20px", maxWidth: "1140px", margin: "0 auto" }}>
        <div className="sydney-card" style={{ padding: "40px 32px", border: "1px solid rgba(56, 189, 248, 0.25)" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span style={{ color: "#38bdf8", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              AUSTRALIAN ECONOMIC LEVERAGE CALCULATOR
            </span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", marginTop: "8px", color: "#ffffff" }}>
              Compare Sydney Contractor Rates vs ChittorTech Dedicated Pods
            </h2>
            <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "15px" }}>
              Benchmark based on standard Sydney contractor rates of <strong>AUD $175/hr</strong> vs ChittorTech’s dedicated senior pod rate of <strong>AUD $55/hr</strong>.
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
                <span style={{ color: "#94a3b8" }}>Sydney Contractor Benchmark:</span>
                <span style={{ color: "#f87171", fontWeight: 700, textDecoration: "line-through" }}>{formatAUD(localTotal)}</span>
              </div>
              <div className="hub-calc-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px", fontSize: "14px", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ color: "#94a3b8" }}>ChittorTech Dedicated Pod:</span>
                <span style={{ color: "#34d399", fontWeight: 700 }}>{formatAUD(ctTotal)}</span>
              </div>
              <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.1)", margin: "16px 0" }} />
              <div>
                <div style={{ fontSize: "13px", color: "#38bdf8", textTransform: "uppercase", fontWeight: 800 }}>
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
          <span style={{ color: "#38bdf8", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            SPECIALIZED TECHNICAL CAPABILITIES
          </span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", marginTop: "8px", color: "#ffffff" }}>
            Software Engineering Built for Australian Scale
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
                background: selectedService === idx ? "#0284c7" : "rgba(15, 23, 42, 0.8)",
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
        <div className="sydney-card" style={{ padding: "40px", border: "1px solid rgba(56, 189, 248, 0.3)" }}>
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
                backgroundColor: "#0284c7",
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

      {/* ─── Why Sydney Startups Partner with ChittorTech ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", color: "#ffffff" }}>
            Engineered for Australian Tech Leaders
          </h2>
          <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "16px" }}>
            Avoid high Australian agency markups and build with senior technical talent.
          </p>
        </div>

        <div className="hub-features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          
          <div className="sydney-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(56, 189, 248, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-moon" style={{ color: "#38bdf8", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>Overnight Delivery Advantage</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              India executes while Sydney sleeps. Assign tickets in Linear or Jira at 5:00 PM AEST, and wake up at 8:30 AM AEST to find completed, tested pull requests ready for deployment. Your startup operates 24/7.
            </p>
          </div>

          <div className="sydney-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(52, 211, 153, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-shield-halved" style={{ color: "#34d399", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>Australian Privacy Compliance</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              We strictly adhere to the Australian Privacy Principles (APPs). Production databases are deployed to AWS Sydney (ap-southeast-2) with encrypted backups and rigorous access management controls.
            </p>
          </div>

          <div className="sydney-card" style={{ padding: "32px" }}>
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
            Frequently Asked Questions by Sydney CTOs
          </h2>
          <p style={{ fontSize: "15px", marginTop: "8px" }}>
            Answers regarding overnight sprints, APP compliance, and trial pilots.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="sydney-card"
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
        background: "radial-gradient(circle at 50% 50%, rgba(2, 132, 199, 0.25) 0%, rgba(6, 11, 24, 1) 75%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4.5vw, 44px)", color: "#ffffff", marginBottom: "18px" }}>
            Ready to Accelerate Your Sydney Engineering Roadmap?
          </h2>
          <p style={{ fontSize: "17px", color: "#cbd5e1 !important", maxWidth: "680px", margin: "0 auto 36px", lineHeight: 1.65 }}>
            Book an introductory technical architecture call with our leadership. We execute bilateral NDAs within 2 hours and can deploy a dedicated senior engineering pod within 72 hours.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#0284c7",
                color: "#ffffff",
                padding: "18px 42px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 28px -6px rgba(2, 132, 199, 0.6)"
              }}
            >
              <span>Schedule Architecture Consultation</span>
              <span>&rarr;</span>
            </Link>

            <a
              href="https://wa.me/919929828456?text=Hello%20ChittorTech%2C%20we%20are%20a%20Sydney%20business%20interested%20in%20dedicated%20engineering%20pods."
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
