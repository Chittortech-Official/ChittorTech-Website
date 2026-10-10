"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export default function DubaiPage() {
  const [teamSize, setTeamSize] = useState(3);
  const [durationMonths, setDurationMonths] = useState(6);
  const [selectedService, setSelectedService] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // Dubai Benchmark Rates:
  // Senior Developer / Agency Contractor in DIFC / DIC: ~AED 450/hr ($122/hr)
  // ChittorTech Senior Developer: ~AED 140/hr ($38/hr)
  const hoursPerMonth = 160;
  const localRatePerHour = 450;
  const ctRatePerHour = 140;

  const localTotal = useMemo(() => {
    return teamSize * durationMonths * hoursPerMonth * localRatePerHour;
  }, [teamSize, durationMonths]);

  const ctTotal = useMemo(() => {
    return teamSize * durationMonths * hoursPerMonth * ctRatePerHour;
  }, [teamSize, durationMonths]);

  const savingsTotal = localTotal - ctTotal;
  const savingsPercent = Math.round((savingsTotal / localTotal) * 100);

  const formatAED = (val) => {
    return `AED ${val.toLocaleString()}`;
  };

  const services = [
  {
    "id": "luxury-portals",
    "tabLabel": "Luxury Portals",
    "name": "Next.js 15 Luxury Portals & Bilingual Web Platforms",
    "badge": "Bilingual RTL/LTR, Corporate Tax 9% Ready",
    "icon": "fa-solid fa-gem",
    "description": "Engineered for Dubai holding companies, luxury real estate brokerages, and DIFC tech ventures. Build ultra-fast bilingual web platforms in Next.js 15 with native Arabic RTL support.",
    "deliverables": [
      "Pixel-perfect bilingual Arabic (RTL) and English typography and layout switching",
      "Sub-second Core Web Vitals deployed across Cloudflare Dubai edge nodes",
      "Full compliance with UAE Corporate Tax (9%) invoicing and FTA VAT standards",
      "Integration with UAE payment rails: Stripe UAE, Network International, and Apple Pay",
      "Automated regression testing with Playwright ensuring flawless user booking experiences"
    ],
    "techSpecs": "Next.js 15, React 19, TypeScript, Tailwind CSS, Supabase, Cloudflare Edge"
  },
  {
    "id": "whatsapp-ai",
    "tabLabel": "WhatsApp AI",
    "name": "Bilingual Arabic/English AI Chatbots & WhatsApp CRM",
    "badge": "Groq LPUs, WhatsApp Business API & Lead Gen",
    "icon": "fa-solid fa-brain",
    "description": "Deploy private bilingual Arabic and English conversational AI agents that qualify high-net-worth investors and real estate leads 24/7 directly over Web and WhatsApp.",
    "deliverables": [
      "Sub-500ms streaming responses in fluent Gulf Arabic and English via Groq LPUs",
      "WhatsApp Business Cloud API automation converting incoming WhatsApp leads into CRM contacts",
      "Private RAG pipelines indexing luxury property brochures, floor plans, and pricing matrices",
      "Automated VIP buyer qualification routing verified investors to human sales teams",
      "Zero LLM training on confidential client transactions with enterprise isolation"
    ],
    "techSpecs": "Groq LPU, LangChain, Pinecone, Llama 3.3, OpenAI API, WhatsApp Cloud API"
  },
  {
    "id": "proptech-apps",
    "tabLabel": "PropTech Apps",
    "name": "Luxury Real Estate & Tenant Mobile Applications",
    "badge": "React Native, Expo & UAE PASS Ready",
    "icon": "fa-solid fa-mobile-screen-button",
    "description": "Fluid iOS and Android applications for luxury property management, tenant amenity booking, and private investor portfolio tracking with biometric security.",
    "deliverables": [
      "Single clean TypeScript codebase deployed synchronously to Apple App Store & Google Play",
      "Native Apple Pay, Google Pay, and UAE payment gateway integration",
      "UAE PASS authentication compatibility and secure on-device biometric login",
      "Real-time push notifications for rental statements and maintenance requests",
      "60fps gesture-driven photo galleries and virtual tour interfaces"
    ],
    "techSpecs": "React Native, Expo, TypeScript, Apple Pay, Firebase Cloud Messaging"
  },
  {
    "id": "gulf-cloud",
    "tabLabel": "Gulf Cloud",
    "name": "AWS Middle East (me-central-1) & Sovereign UAE Cloud",
    "badge": "AWS UAE (me-central-1) & 99.99% Uptime",
    "icon": "fa-solid fa-server",
    "description": "Resilient cloud networking, automated CI/CD pipelines, and high-concurrency database connection pooling designed for Dubai enterprises requiring 99.99% uptime.",
    "deliverables": [
      "Sovereign UAE data residency deployment on AWS UAE (me-central-1)",
      "Cloudflare Edge CDN caching and WAF security mitigating high-volume DDoS attacks",
      "PostgreSQL connection pooling, read replicas, and Redis in-memory acceleration",
      "Automated Docker CI/CD deployment pipelines with zero-downtime blue-green rollouts",
      "24/7 synthetic monitoring, error tracking, and automated rollback mechanisms"
    ],
    "techSpecs": "AWS me-central-1, Cloudflare Edge, Docker, PostgreSQL, Redis, Terraform"
  },
  {
    "id": "seo-growth",
    "tabLabel": "SEO & Growth",
    "name": "Google UAE Bilingual SEO & High-Net-Worth Lead Funnels",
    "badge": "Bilingual Search Dominance & GA4 Analytics",
    "icon": "fa-solid fa-magnifying-glass-chart",
    "description": "Dominate competitive UAE search queries in both Arabic and English with programmatic SEO architectures, automated XML sitemaps, and conversion-focused GA4 measurement.",
    "deliverables": [
      "Bilingual Arabic and English programmatic SEO delivering top Google UAE rankings",
      "Instant indexing API submitting new content directly to Google Search Console",
      "RealEstateAgent and Organization Schema.org JSON-LD structured data markup",
      "Google Analytics 4 setup tracking exact user acquisition funnels and lead conversions",
      "100/100 Core Web Vitals optimization directly lifting organic search visibility"
    ],
    "techSpecs": "Google Search Console, GA4, Next.js Metadata API, Schema.org, SEMrush"
  }
];

  const faqs = [
    {
      q: "What is your timezone overlap with Dubai (GST)?",
      a: "Dubai is only 1.5 hours behind India (GST vs IST). This provides a virtually identical 7-hour synchronous working day. Your engineering pod attends your morning standups at 9:00 AM GST, collaborates instantly over Slack or Teams, and deploys updates in real time throughout your business day."
    },
    {
      q: "Can you build native bilingual Arabic (RTL) and English web platforms?",
      a: "Yes. High-end Dubai commercial platforms require flawless bilingual typography. We build Next.js applications with automated RTL direction flipping, tailored Arabic Google Fonts (such as Cairo and IBM Plex Arabic), and localized UX flows."
    },
    {
      q: "How do your rates compare to local Dubai and DIFC digital agencies?",
      a: "Senior software developers in Dubai command AED 35,000 to AED 50,000/month salaries, and agency contractor rates hover between AED 400 and AED 600/hr ($110-$165/hr). ChittorTech delivers dedicated senior engineering pods at AED 140/hr ($38/hr)—saving your enterprise nearly 70%."
    },
    {
      q: "How do you handle IP rights and non-disclosure agreements?",
      a: "We sign bilateral NDAs before technical discussions. Our Master Service Agreements include airtight work-for-hire clauses transferring 100% intellectual property, code repositories, and documentation to your UAE entity."
    },
    {
      q: "Can we test your team before committing to a contract?",
      a: "Yes. We offer a 2-Week Risk-Free Technical Pilot. Assign real tasks from your backlog; if our code quality, speed, and communication do not exceed your standards, you pay nothing."
    },
    {
      q: "What payment currencies and invoicing structures do you support for UAE entities?",
      a: "We invoice directly in UAE Dirhams (AED) or US Dollars (USD). Payments are accepted via international wire transfer or corporate credit card with zero hidden fees."
    }
  ];

  return (
    <div className="dubai-page" style={{
      backgroundColor: "#060b18",
      color: "#f8fafc",
      minHeight: "100vh",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      
      {/* ─── High-Contrast Overrides ─── */}
      <style>{`
        .dubai-page h1, .dubai-page h2, .dubai-page h3, .dubai-page h4, .dubai-page h5 {
          color: #ffffff !important;
          font-weight: 800;
        }
        .dubai-page p {
          color: #94a3b8 !important;
        }
        .gold-gradient-text {
          background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cyan-gradient-text {
          background: linear-gradient(135deg, #38bdf8 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .dubai-card {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dubai-card:hover {
          border-color: rgba(251, 191, 36, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
        }
      `}</style>

      {/* ─── Hero Section ─── */}
      <section style={{
        position: "relative",
        padding: "110px 20px 85px",
        background: "radial-gradient(circle at 50% 15%, rgba(217, 119, 6, 0.25) 0%, rgba(6, 11, 24, 1) 75%)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        overflow: "hidden"
      }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(251, 191, 36, 0.4)",
            padding: "8px 22px",
            borderRadius: "9999px",
            fontSize: "14px",
            fontWeight: 700,
            color: "#fbbf24",
            marginBottom: "28px"
          }}>
            <span style={{ fontSize: "18px" }}>🇦🇪</span>
            <span>DUBAI DIFC &amp; TECH ENTERPRISES</span>
            <span style={{ color: "#64748b" }}>•</span>
            <span style={{ color: "#34d399" }}>1.5-Hour GST Timezone Alignment</span>
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
            High-Performance Web Platforms &amp; AI for <span className="gold-gradient-text">Dubai Enterprises</span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            color: "#cbd5e1 !important",
            maxWidth: "880px",
            margin: "0 auto 40px"
          }}>
            From DIFC to Business Bay, scale your digital capability at enterprise quality. Deploy dedicated full-stack Next.js engineers, bilingual Arabic/English WhatsApp AI bots, and resilient cloud architectures with seamless 1.5-hour GST time sync.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#d97706",
                color: "#ffffff",
                padding: "18px 40px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 28px -6px rgba(217, 119, 6, 0.6)"
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
              <i className="fa-solid fa-laptop-code" style={{ color: "#fbbf24" }}></i>
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
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Dubai Budget Saved</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#fbbf24" }}>1.5 Hours</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>GST Direct Time Sync</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#38bdf8" }}>Arabic RTL</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Bilingual English &amp; Arabic</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#a855f7" }}>100%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Client IP &amp; Code Ownership</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Interactive Dubai Cost Calculator ─── */}
      <section style={{ padding: "80px 20px", maxWidth: "1140px", margin: "0 auto" }}>
        <div className="dubai-card" style={{ padding: "40px 32px", border: "1px solid rgba(251, 191, 36, 0.25)" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span style={{ color: "#fbbf24", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              DUBAI ECONOMIC LEVERAGE CALCULATOR
            </span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", marginTop: "8px", color: "#ffffff" }}>
              Compare Local Dubai Agency Rates vs ChittorTech Dedicated Pods
            </h2>
            <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "15px" }}>
              Benchmark based on standard Dubai agency contractor rates of <strong>AED 450/hr</strong> vs ChittorTech’s dedicated senior pod rate of <strong>AED 140/hr</strong>.
            </p>
          </div>

          <div className="hub-calc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", alignItems: "center" }}>
            
            {/* Sliders */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div>
                <div className="hub-slider-label-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontWeight: 700, flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ color: "#ffffff" }}>Number of Full-Time Engineers:</span>
                  <span style={{ color: "#fbbf24", fontSize: "18px" }}>{teamSize} {teamSize === 1 ? "Developer" : "Developers"}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value) || 1)}
                  style={{ width: "100%", accentColor: "#fbbf24", cursor: "pointer", touchAction: "pan-y" }}
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
                  <span style={{ color: "#fbbf24", fontSize: "18px" }}>{durationMonths} Months</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value) || 1)}
                  style={{ width: "100%", accentColor: "#fbbf24", cursor: "pointer", touchAction: "pan-y" }}
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
                <span style={{ color: "#94a3b8" }}>Dubai Agency Benchmark:</span>
                <span style={{ color: "#f87171", fontWeight: 700, textDecoration: "line-through" }}>{formatAED(localTotal)}</span>
              </div>
              <div className="hub-calc-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px", fontSize: "14px", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ color: "#94a3b8" }}>ChittorTech Dedicated Pod:</span>
                <span style={{ color: "#34d399", fontWeight: 700 }}>{formatAED(ctTotal)}</span>
              </div>
              <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.1)", margin: "16px 0" }} />
              <div>
                <div style={{ fontSize: "13px", color: "#fbbf24", textTransform: "uppercase", fontWeight: 800 }}>
                  Total Estimated Capital Saved:
                </div>
                <div style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 900, color: "#ffffff", marginTop: "4px" }}>
                  {formatAED(savingsTotal)}
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
          <span style={{ color: "#fbbf24", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            SPECIALIZED ENGINEERING CAPABILITIES
          </span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", marginTop: "8px", color: "#ffffff" }}>
            Software Engineering Built for Dubai Market Standards
          </h2>
          <p style={{ maxWidth: "720px", margin: "12px auto 0", fontSize: "16px" }}>
            From luxury bilingual web portals to automated WhatsApp conversational AI bots, we engineer systems that deliver enterprise stability.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="hub-tabs-wrap" style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "36px" }}>
          {services.map((srv, idx) => (
            <button
              key={srv.id}
              onClick={() => setSelectedService(idx)}
              style={{
                background: selectedService === idx ? "#d97706" : "rgba(15, 23, 42, 0.8)",
                color: selectedService === idx ? "#ffffff" : "#94a3b8",
                border: selectedService === idx ? "1px solid #fbbf24" : "1px solid rgba(255, 255, 255, 0.1)",
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
              <i className={srv.icon} style={{ color: selectedService === idx ? "#ffffff" : "#fbbf24" }}></i>
              <span>{srv.tabLabel || srv.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Service Card */}
        <div className="dubai-card" style={{ padding: "40px", border: "1px solid rgba(251, 191, 36, 0.3)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
            <div>
              <span style={{
                background: "rgba(251, 191, 36, 0.15)",
                color: "#fbbf24",
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
                backgroundColor: "#d97706",
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

      {/* ─── Why Dubai Enterprises Choose ChittorTech ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", color: "#ffffff" }}>
            Engineered for Dubai's Speed &amp; Standards
          </h2>
          <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "16px" }}>
            Bypass high Dubai agency markups and build with senior technical talent.
          </p>
        </div>

        <div className="hub-features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          
          <div className="dubai-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(251, 191, 36, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-business-time" style={{ color: "#fbbf24", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>1.5-Hour GST Overlap</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              India is only 1.5 hours ahead of the UAE. Your engineers work synchronous business hours with your team in Dubai, joining morning standups at 9:00 AM GST and executing real-time sprint changes.
            </p>
          </div>

          <div className="dubai-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(52, 211, 153, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-brands fa-whatsapp" style={{ color: "#34d399", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>WhatsApp AI Leadership</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              WhatsApp is the commercial backbone of Dubai. We engineer enterprise-grade WhatsApp Business conversational AI bots with sub-500ms response times, automated lead scoring, and instant appointment booking.
            </p>
          </div>

          <div className="dubai-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(56, 189, 248, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-shield-check" style={{ color: "#38bdf8", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>100% IP &amp; Code Ownership</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              All agreements include comprehensive NDAs and strict work-for-hire clauses transferring 100% intellectual property, code repositories, and documentation to your UAE legal entity.
            </p>
          </div>

        </div>
      </section>

      {/* ─── Executive FAQs ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "980px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", color: "#ffffff" }}>
            Frequently Asked Questions by Dubai Leaders
          </h2>
          <p style={{ fontSize: "15px", marginTop: "8px" }}>
            Answers regarding GST timezone alignment, bilingual Arabic support, and contracts.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="dubai-card"
              style={{
                padding: "24px",
                cursor: "pointer",
                border: openFaq === idx ? "1px solid rgba(251, 191, 36, 0.5)" : "1px solid rgba(255, 255, 255, 0.08)"
              }}
              onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                <h3 style={{ fontSize: "17px", color: "#ffffff", margin: 0 }}>
                  {faq.q}
                </h3>
                <i
                  className={`fa-solid ${openFaq === idx ? "fa-chevron-up" : "fa-chevron-down"}`}
                  style={{ color: "#fbbf24", fontSize: "14px" }}
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
        background: "radial-gradient(circle at 50% 50%, rgba(217, 119, 6, 0.25) 0%, rgba(6, 11, 24, 1) 75%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4.5vw, 44px)", color: "#ffffff", marginBottom: "18px" }}>
            Ready to Build Next-Generation Software for Dubai?
          </h2>
          <p style={{ fontSize: "17px", color: "#cbd5e1 !important", maxWidth: "680px", margin: "0 auto 36px", lineHeight: 1.65 }}>
            Book an introductory technical architecture call with our leadership. We execute mutual NDAs within 2 hours and can deploy a dedicated senior engineering pod within 72 hours.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#d97706",
                color: "#ffffff",
                padding: "18px 42px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 28px -6px rgba(217, 119, 6, 0.6)"
              }}
            >
              <span>Schedule Architecture Consultation</span>
              <span>&rarr;</span>
            </Link>

            <a
              href="https://wa.me/919929828456?text=Hello%20ChittorTech%2C%20we%20are%20a%20Dubai%20business%20interested%20in%20dedicated%20engineering%20pods."
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
