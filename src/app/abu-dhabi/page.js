"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export default function AbuDhabiInternetSolutionsPage() {
  // Interactive Calculator State
  const [teamSize, setTeamSize] = useState(3);
  const [durationMonths, setDurationMonths] = useState(6);
  const [selectedService, setSelectedService] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // Economic Calculations (in AED)
  // Local Abu Dhabi / Dubai Agency Senior Rate: ~AED 420/hr
  // ChittorTech Senior Developer / Specialist Rate: ~AED 130/hr
  const hoursPerMonth = 160;
  const localRatePerHour = 420;
  const ctRatePerHour = 130;

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
    "id": "enterprise-erp",
    "tabLabel": "Enterprise ERP",
    "name": "Bilingual Multi-License Next.js 15 Enterprise Portals",
    "badge": "ADGM & UAE Federal Tax Compliant",
    "icon": "fa-solid fa-cubes",
    "description": "Engineered for Abu Dhabi conglomerates, government entities, and KIZAD industrial logistics groups. Build high-security web portals aligned with ADGM and UAE Sovereign Cloud standards.",
    "deliverables": [
      "Consolidated multi-license P&L reconciliation and automated UAE VAT 201 filing",
      "Sub-second Core Web Vitals deployed on sovereign UAE cloud infrastructure",
      "Native Arabic (RTL) and English bilingual interface with UAE PASS SSO authentication",
      "National In-Country Value (ICV) tender scoring optimization and Tawteen payroll tracking",
      "Playwright automated end-to-end testing ensuring 100% regulatory reporting accuracy"
    ],
    "techSpecs": "Next.js 15, React 19, TypeScript, Tailwind CSS, PostgreSQL, AWS UAE"
  },
  {
    "id": "executive-ai",
    "tabLabel": "Executive AI",
    "name": "Bilingual Arabic/English Autonomous AI Agents",
    "badge": "Groq LPUs, Sovereign UAE Cloud & Private RAG",
    "icon": "fa-solid fa-brain",
    "description": "Deploy private autonomous conversational AI agents and sub-second LLM workflows that handle procurement inquiries, tender parsing, and executive decision support in Arabic and English.",
    "deliverables": [
      "Sub-500ms streaming responses in fluent Arabic and English via Groq LPU hardware",
      "Private document RAG pipelines searching GCC legal decrees, tenders, and contracts",
      "WhatsApp Business API automation for instant executive communication and alerts",
      "Automated procurement and supplier screening handling 75%+ of initial inquiries",
      "Strict data sovereignty guarantees with zero model training on confidential UAE data"
    ],
    "techSpecs": "Groq LPU, LangChain, Pinecone, Llama 3.3, OpenAI API, WhatsApp Cloud API"
  },
  {
    "id": "mobile-apps",
    "tabLabel": "Mobile Apps",
    "name": "Enterprise Asset & Field Workforce Mobile Applications",
    "badge": "React Native, Expo & Biometrics",
    "icon": "fa-solid fa-mobile-screen-button",
    "description": "Fluid iOS and Android applications for industrial warehouse management, asset tracking, and executive dashboards with biometric Face ID security.",
    "deliverables": [
      "Single clean TypeScript codebase deployed synchronously to Apple App Store & Google Play",
      "Native Apple Pay and UAE payment gateway integration",
      "Real-time push notifications for asset alerts and approval workflows",
      "Biometric Face ID / Touch ID authentication with secure on-device keychain encryption",
      "60fps gesture-driven animations and responsive Dark Mode aesthetics"
    ],
    "techSpecs": "React Native, Expo, TypeScript, Apple Pay, Stripe SDK, Firebase"
  },
  {
    "id": "sovereign-cloud",
    "tabLabel": "Sovereign Cloud",
    "name": "UAE In-Country Sovereign Cloud & ICV Compliance",
    "badge": "Federal Decree-Law No. 45/2021 Data Residency",
    "icon": "fa-solid fa-server",
    "description": "Resilient cloud networking, automated CI/CD pipelines, and high-concurrency database connection pooling designed for Abu Dhabi holding groups requiring 99.99% uptime.",
    "deliverables": [
      "Sovereign UAE in-country data residency guaranteed on AWS UAE (me-central-1)",
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
    "name": "GCC Enterprise SEO, Google Indexing & GA4 Governance",
    "badge": "Bilingual GCC Search Dominance & GA4",
    "icon": "fa-solid fa-magnifying-glass-chart",
    "description": "Dominate competitive GCC search queries with bilingual Arabic/English programmatic SEO architectures, automated XML sitemaps, and conversion-focused GA4 measurement.",
    "deliverables": [
      "Programmatic SEO architecture delivering top Google rankings across Abu Dhabi and the GCC",
      "Instant indexing API submitting new content directly to Google Search Console",
      "Schema.org JSON-LD structured data markup for Google rich snippets",
      "Google Analytics 4 setup tracking exact user acquisition funnels and enterprise inquiries",
      "100/100 Core Web Vitals optimization directly lifting organic search visibility"
    ],
    "techSpecs": "Google Search Console, GA4, Next.js Metadata API, Schema.org, SEMrush"
  }
];

  const faqs = [
    {
      q: "What digital and internet solutions does ChittorTech provide in Abu Dhabi?",
      a: "ChittorTech provides complete end-to-end internet and software engineering solutions: custom web development (Next.js), mobile applications (iOS & Android), bilingual AI chatbots (Web & WhatsApp), cloud infrastructure and networking (Cloudflare & AWS), software scaling, technical SEO, and Google Analytics (GA4) setup."
    },
    {
      q: "Can your AI chatbots speak both Arabic and English?",
      a: "Yes! Our conversational AI chatbots are engineered with native bidirectional language models. They automatically detect whether a customer writes in Arabic or English, respond with culturally appropriate phrasing, and seamlessly connect to WhatsApp or your website."
    },
    {
      q: "How does ChittorTech ensure our web applications load at top speed?",
      a: "We engineer all websites using modern Next.js 15 App Router architecture combined with Cloudflare's global edge network (including Dubai and Abu Dhabi edge data centers). This ensures your web pages achieve 95+ Google PageSpeed scores, instant mobile rendering, and optimal Core Web Vitals for search rankings."
    },
    {
      q: "How does the timezone overlap work between Abu Dhabi (GST) and India (IST)?",
      a: "There is only a 1.5-hour timezone difference between Abu Dhabi (Gulf Standard Time) and India (IST). Our workdays overlap 100% in real time. When your Abu Dhabi team starts at 9:00 AM GST, our engineers are fully active. We conduct daily morning video standups and provide instant Slack/Teams responses in under 15 minutes."
    },
    {
      q: "How does your pricing compare to local Abu Dhabi and Dubai digital agencies?",
      a: "Local agencies in Abu Dhabi and Dubai charge between AED 380 to AED 550 per hour for senior full-stack developers and often deliver generic templates. ChittorTech provides dedicated senior developers and AI engineers starting at AED 110–140/hour—saving your business over 65% in development costs while delivering world-class code quality."
    },
    {
      q: "Do you assist with Google Search Console indexing and technical SEO?",
      a: "Yes. Every website we build comes with production-grade technical SEO: automated XML sitemaps, clean canonical URLs, structured JSON-LD schemas, robots.txt optimization, and direct Google Search Console verification to ensure fast and accurate indexing."
    },
    {
      q: "Who owns the intellectual property and code of our website or app?",
      a: "You retain 100% legal ownership of your source code, designs, domains, and data from day one. All code is committed directly into your private GitHub or GitLab account under strict bilateral non-disclosure agreements (NDAs)."
    },
    {
      q: "How can we start a project with ChittorTech from Abu Dhabi?",
      a: "Simply reach out via our contact form or send us a direct message on WhatsApp. We schedule a confidential architecture call within 24 hours, provide an airtight NDA, and deliver a detailed scope and delivery roadmap."
    }
  ];

  return (
    <div className="abu-dhabi-page" style={{
      backgroundColor: "#060b18",
      color: "#f8fafc",
      minHeight: "100vh",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      
      {/* ─── High-Contrast Overrides ─── */}
      <style>{`
        .abu-dhabi-page h1, 
        .abu-dhabi-page h2, 
        .abu-dhabi-page h3, 
        .abu-dhabi-page h4, 
        .abu-dhabi-page h5 {
          color: #ffffff !important;
          font-weight: 800;
        }
        .abu-dhabi-page p {
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
        .ad-card {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .ad-card:hover {
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
          
          {/* Regional Badge */}
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
            marginBottom: "28px",
            boxShadow: "0 0 25px rgba(234, 179, 8, 0.15)"
          }}>
            <span style={{ fontSize: "18px" }}>🇦🇪</span>
            <span>ABU DHABI &amp; GCC INTERNET SOLUTIONS HUB</span>
            <span style={{ color: "#64748b" }}>•</span>
            <span style={{ color: "#38bdf8" }}>Web, Apps, AI Chatbots &amp; Cloud</span>
          </div>

          {/* Master Heading */}
          <h1 style={{
            fontSize: "clamp(34px, 5.2vw, 56px)",
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            maxWidth: "1020px",
            margin: "0 auto 24px",
            color: "#ffffff"
          }}>
            High-Performance Web Development, AI Chatbots &amp; Cloud Infrastructure for <span className="gold-gradient-text">Abu Dhabi &amp; GCC</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            color: "#cbd5e1 !important",
            maxWidth: "880px",
            margin: "0 auto 40px"
          }}>
            Engineering custom Next.js websites, native mobile applications, 24/7 bilingual AI chatbots, high-speed Cloudflare edge networks, and data-driven SEO for businesses in Abu Dhabi, Dubai, and across the UAE at <strong>69% lower cost</strong> with real-time 1.5-hour timezone synchronicity.
          </p>

          {/* Dual High-Intent CTAs */}
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
              <span>Book Architecture Consultation</span>
              <span>&rarr;</span>
            </Link>

            <a
              href="https://wa.me/919929828456?text=Hi%20ChittorTech,%20we%20are%20in%20Abu%20Dhabi%20and%20looking%20for%20web%20development/AI%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                color: "#34d399",
                border: "1px solid rgba(16, 185, 129, 0.4)",
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
              <span>Instant WhatsApp Connect (UAE)</span>
            </a>
          </div>

          {/* Key Strategic Metrics Bar */}
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
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#34d399" }}>69% Saved</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>AED 130/hr vs AED 420/hr Local</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#38bdf8" }}>1.5 Hours</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Full Daily Workday Sync</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#fde047" }}>Sub-Second</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Edge Caching &amp; AI Speed</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#a855f7" }}>100% Code IP</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Full GitHub Repository Transfer</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── The 5 Core Internet & Software Solutions ─── */}
      <section style={{ padding: "85px 20px", maxWidth: "1160px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span style={{ fontSize: "13px", fontWeight: 800, color: "#38bdf8", textTransform: "uppercase", letterSpacing: "1.5px" }}>
            Our Core Competencies
          </span>
          <h2 style={{ fontSize: "34px", fontWeight: 900, marginTop: "8px", color: "#ffffff" }}>
            Comprehensive Internet &amp; Digital Solutions for UAE Businesses
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "16px", maxWidth: "780px", margin: "10px auto 0" }}>
            From high-speed web apps and mobile interfaces to conversational AI chatbots and cloud scaling, we deliver engineering that drives real commercial growth.
          </p>
        </div>

        {/* Service Selector Tabs */}
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

        {/* Selected Service Detail Box */}
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
              <strong style={{ color: "#ffffff" }}>Technology Stack:</strong> {services[selectedService].techSpecs}
            </div>
          </div>

        </div>
      </section>

      {/* ─── Interactive Cost & Savings Calculator ─── */}
      <section style={{ padding: "85px 20px", background: "#0b1222", borderTop: "1px solid rgba(255, 255, 255, 0.06)", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ fontSize: "13px", fontWeight: 800, color: "#34d399", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              Commercial Efficiency
            </span>
            <h2 style={{ fontSize: "34px", fontWeight: 900, marginTop: "8px", color: "#ffffff" }}>
              Abu Dhabi Agency Rates vs ChittorTech Dedicated Pod
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "16px", maxWidth: "700px", margin: "10px auto 0" }}>
              Calculate how much your business saves by engaging our senior web developers, app engineers, and AI specialists.
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
              
              {/* Sliders */}
              <div>
                <div style={{ marginBottom: "32px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <label style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>Dedicated Developers / Engineers</label>
                    <span style={{ fontSize: "18px", fontWeight: 900, color: "#38bdf8" }}>{teamSize} Specialists</span>
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
                    <span>1 Month (Sprint)</span>
                    <span>6 Months (Project)</span>
                    <span>12 Months (Annual)</span>
                  </div>
                </div>

                <div style={{ marginTop: "28px", padding: "16px", background: "rgba(6, 11, 24, 0.8)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)", fontSize: "13px", color: "#94a3b8" }}>
                  <i className="fa-solid fa-circle-info" style={{ color: "#38bdf8", marginRight: "8px" }}></i>
                  Calculated against benchmark UAE agency rates: <strong>AED 420/hr</strong> (Local Agency Average) vs <strong>AED 130/hr</strong> (ChittorTech Dedicated Pod).
                </div>
              </div>

              {/* Financial Display Box */}
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
                  {formatAED(savingsTotal)}
                </div>
                <div style={{ fontSize: "14px", color: "#60a5fa", fontWeight: 700, marginBottom: "24px" }}>
                  Save {savingsPercent}% compared to local agency retainers
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", textAlign: "left", marginBottom: "24px" }}>
                  <div style={{ padding: "14px", background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.25)", borderRadius: "12px" }}>
                    <div style={{ fontSize: "11px", color: "#f87171", textTransform: "uppercase", fontWeight: 700 }}>Abu Dhabi Agency</div>
                    <div style={{ fontSize: "19px", fontWeight: 900, color: "#ffffff", marginTop: "4px" }}>{formatAED(localTotal)}</div>
                  </div>
                  <div style={{ padding: "14px", background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.25)", borderRadius: "12px" }}>
                    <div style={{ fontSize: "11px", color: "#34d399", textTransform: "uppercase", fontWeight: 700 }}>ChittorTech Pod</div>
                    <div style={{ fontSize: "19px", fontWeight: 900, color: "#ffffff", marginTop: "4px" }}>{formatAED(ctTotal)}</div>
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
                  Engage {teamSize} Dedicated Developers &rarr;
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
            Direct Answers
          </span>
          <h2 style={{ fontSize: "34px", fontWeight: 900, marginTop: "8px", color: "#ffffff" }}>
            Frequently Asked Questions (Abu Dhabi &amp; GCC)
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

      {/* ─── Final High-Converting Lead Banner ─── */}
      <section style={{
        padding: "90px 20px",
        background: "radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.4) 0%, rgba(6, 11, 24, 1) 100%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "38px", fontWeight: 900, color: "#ffffff", marginBottom: "16px" }}>
            Ready to Build Your Web Application or AI Chatbot in Abu Dhabi?
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
              Book Confidential Architecture Consultation &rarr;
            </Link>

            <a
              href="https://wa.me/919929828456?text=Hi%20ChittorTech,%20we%20want%20to%20discuss%20web%20development%20or%20AI%20solutions%20in%20Abu%20Dhabi."
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
            Guaranteed Response Time: &lt; 15 minutes • No Recruitment Fees • Direct AED Invoicing &amp; 100% IP Ownership
          </div>
        </div>
      </section>

    </div>
  );
}
