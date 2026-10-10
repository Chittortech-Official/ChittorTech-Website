"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export default function MiamiFloridaPage() {
  const [teamSize, setTeamSize] = useState(3);
  const [durationMonths, setDurationMonths] = useState(6);
  const [selectedService, setSelectedService] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // Miami / South Florida Benchmark Rates:
  // Senior Developer / Agency Rate: ~$145/hr
  // ChittorTech Senior Developer: ~$38/hr
  const hoursPerMonth = 160;
  const localRatePerHour = 145;
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
    "id": "proptech-web",
    "tabLabel": "PropTech & Web",
    "name": "High-Conversion Real Estate Portals & Next.js 15 Web Apps",
    "badge": "App Router, MLS/IDX Sync & Interactive 3D",
    "icon": "fa-solid fa-building",
    "description": "Engineered for Miami real estate brokerages, luxury developers, and PropTech innovators with MLS/IDX live synchronization, interactive maps, and sub-second page loads.",
    "deliverables": [
      "Direct integration with Florida MLS & IDX data feeds with automated property updates",
      "Sub-second Core Web Vitals deployed on Cloudflare Miami edge nodes",
      "High-conversion lead capture funnels integrated with Salesforce and HubSpot",
      "Stripe, Wire, and Escrow payment integrations for reservation deposits",
      "Interactive map search and 3D architectural rendering viewer support"
    ],
    "techSpecs": "Next.js 15, React 19, TypeScript, Tailwind CSS, Supabase, Cloudflare Edge"
  },
  {
    "id": "multilingual-ai",
    "tabLabel": "Bilingual AI",
    "name": "Bilingual English/Spanish Autonomous AI Agents",
    "badge": "Groq LPUs, Bilingual RAG & WhatsApp CRM",
    "icon": "fa-solid fa-brain",
    "description": "Deploy private bilingual English and Spanish conversational AI agents that qualify Latin American and domestic property buyers 24/7 over Web and WhatsApp.",
    "deliverables": [
      "Sub-500ms streaming responses in fluent English and Spanish via Groq LPU hardware",
      "Private RAG pipelines searching property brochures, HOA bylaws, and floor plans",
      "WhatsApp Business Cloud API automation capturing international buyer leads instantly",
      "Automated VIP buyer qualification routing hot leads to Florida sales agents",
      "Zero LLM training on confidential client transactions with enterprise isolation"
    ],
    "techSpecs": "Groq LPU, LangChain, Pinecone, Llama 3.3, OpenAI API, WhatsApp Cloud API"
  },
  {
    "id": "mobile-apps",
    "tabLabel": "Mobile Apps",
    "name": "Cross-Platform Tenant, Investor & PropTech Mobile Apps",
    "badge": "React Native, Expo & Biometrics",
    "icon": "fa-solid fa-mobile-screen-button",
    "description": "Fluid iOS and Android applications for luxury property management, tenant amenity booking, and private investor portfolio tracking.",
    "deliverables": [
      "Single clean TypeScript codebase deployed synchronously to App Store & Google Play",
      "Native Apple Pay, Google Wallet, and international payment processing",
      "Real-time push notifications for price adjustments and amenity reservations",
      "Biometric Face ID / Touch ID login with secure on-device credential storage",
      "60fps gesture-driven photo galleries and virtual tour interfaces"
    ],
    "techSpecs": "React Native, Expo, TypeScript, Stripe SDK, Firebase Cloud Messaging"
  },
  {
    "id": "resilient-cloud",
    "tabLabel": "Cloud & DevOps",
    "name": "AWS us-east-1 & Cloudflare Disaster Recovery Cloud",
    "badge": "Cloudflare Miami Edge & 99.99% Uptime",
    "icon": "fa-solid fa-server",
    "description": "Disaster-resilient cloud networking and database scaling engineered for Florida enterprises with automated multi-region backup and failover.",
    "deliverables": [
      "Low-latency edge caching deployed directly in Cloudflare's Miami data center",
      "Automated multi-region database backups ensuring zero data loss during regional outages",
      "PostgreSQL connection pooling, read replicas, and Redis cache optimization",
      "Automated Docker CI/CD deployment pipelines with zero-downtime rollouts",
      "Cloudflare WAF security protecting against high-volume DDoS attacks"
    ],
    "techSpecs": "AWS us-east-1, Cloudflare Miami Edge, Docker, PostgreSQL, Redis, Terraform"
  },
  {
    "id": "seo-growth",
    "tabLabel": "SEO & Growth",
    "name": "Bilingual Florida & LATAM Real Estate Organic Search",
    "badge": "Organic Search Dominance & GA4 Conversion Funnels",
    "icon": "fa-solid fa-magnifying-glass-chart",
    "description": "Dominate luxury real estate and B2B search terms across South Florida and Latin America with bilingual programmatic SEO architectures.",
    "deliverables": [
      "Bilingual English and Spanish programmatic SEO capturing international high-intent traffic",
      "Real estate Schema.org JSON-LD structured data markup for Google rich snippets",
      "Instant indexing API submitting new listings directly to Google Search Console",
      "Google Analytics 4 setup tracking exact user acquisition funnels and lead submissions",
      "100/100 Core Web Vitals optimization directly lifting organic search visibility"
    ],
    "techSpecs": "Google Search Console, GA4, Next.js Metadata API, Schema.org, SEMrush"
  }
];

  const faqs = [
    {
      q: "How does ChittorTech align with Miami and Eastern Standard Time (EST)?",
      a: "Our dedicated developers provide 4 to 5 hours of direct synchronous overlap with Miami working hours (8:30 AM to 1:00 PM EST). We attend your daily standups in Slack, collaborate in real time on Figma designs and GitHub PRs, and push completed code while you sleep."
    },
    {
      q: "Can you build bilingual English and Spanish web and mobile applications?",
      a: "Yes! South Florida and Latin American markets require seamless bilingual execution. We engineer Next.js and React Native applications with robust internationalization (i18n), automated language detection, and bilingual conversational AI agents."
    },
    {
      q: "How do your rates compare to local Miami and South Florida tech agencies?",
      a: "Miami tech agencies charge between $130 and $180/hr, driven by rising South Florida office rents and talent competition. ChittorTech provides equivalent senior software engineers at $38/hr—saving you up to 74% without compromising code quality."
    },
    {
      q: "What is your IP ownership and NDA policy?",
      a: "We execute mutual US-compliant non-disclosure agreements before technical discovery. Every contract includes full work-for-hire provisions transferring 100% intellectual property, code repositories, and documentation to your company."
    },
    {
      q: "Can we test your engineers before signing a contract?",
      a: "Yes. We offer a 2-Week Risk-Free Technical Pilot. Assign real tasks from your roadmap and evaluate our velocity and code quality first-hand. If not satisfied, you pay nothing."
    },
    {
      q: "How do you handle payments and taxes for Florida entities?",
      a: "We issue compliant USD invoices payable via US domestic wire, ACH, or credit card. We provide signed W-8BEN forms so your corporate accounting and 1099 compliance are completely streamlined."
    }
  ];

  return (
    <div className="miami-page" style={{
      backgroundColor: "#060b18",
      color: "#f8fafc",
      minHeight: "100vh",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      
      {/* ─── High-Contrast Overrides ─── */}
      <style>{`
        .miami-page h1, .miami-page h2, .miami-page h3, .miami-page h4, .miami-page h5 {
          color: #ffffff !important;
          font-weight: 800;
        }
        .miami-page p {
          color: #94a3b8 !important;
        }
        .cyan-gradient-text {
          background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .sunset-gradient-text {
          background: linear-gradient(135deg, #f43f5e 0%, #fb923c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .miami-card {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .miami-card:hover {
          border-color: rgba(6, 182, 212, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
        }
      `}</style>

      {/* ─── Hero Section ─── */}
      <section style={{
        position: "relative",
        padding: "110px 20px 85px",
        background: "radial-gradient(circle at 50% 15%, rgba(6, 182, 212, 0.25) 0%, rgba(6, 11, 24, 1) 75%)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        overflow: "hidden"
      }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(6, 182, 212, 0.4)",
            padding: "8px 22px",
            borderRadius: "9999px",
            fontSize: "14px",
            fontWeight: 700,
            color: "#06b6d4",
            marginBottom: "28px"
          }}>
            <span style={{ fontSize: "18px" }}>🌴</span>
            <span>MIAMI &amp; SOUTH FLORIDA TECH PARTNER</span>
            <span style={{ color: "#64748b" }}>•</span>
            <span style={{ color: "#34d399" }}>EST Overlap &amp; LatAm Gateway</span>
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
            Next-Gen Web Apps &amp; AI Engineering for <span className="cyan-gradient-text">Miami Startups &amp; Enterprises</span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            color: "#cbd5e1 !important",
            maxWidth: "880px",
            margin: "0 auto 40px"
          }}>
            Fuel your venture velocity from Brickell to Wynwood. Deploy dedicated senior Next.js engineers, bilingual conversational AI bots, and resilient cloud architectures with zero Florida agency markups and live EST overlap.
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
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#34d399" }}>74%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Miami Payroll Saved</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#38bdf8" }}>4-5 Hours</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Daily EST Live Overlap</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#fde047" }}>Bilingual</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>English &amp; Spanish Ready</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#a855f7" }}>100%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Client IP &amp; Code Ownership</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Interactive Miami Cost Calculator ─── */}
      <section style={{ padding: "80px 20px", maxWidth: "1140px", margin: "0 auto" }}>
        <div className="miami-card" style={{ padding: "40px 32px", border: "1px solid rgba(6, 182, 212, 0.25)" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span style={{ color: "#06b6d4", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              ECONOMIC LEVERAGE CALCULATOR
            </span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", marginTop: "8px", color: "#ffffff" }}>
              Compare Miami Tech Agency Rates vs ChittorTech Dedicated Pods
            </h2>
            <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "15px" }}>
              Benchmark based on standard South Florida agency rates of <strong>$145/hr</strong> vs ChittorTech’s dedicated senior pod rate of <strong>$38/hr</strong>.
            </p>
          </div>

          <div className="hub-calc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", alignItems: "center" }}>
            
            {/* Sliders */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div>
                <div className="hub-slider-label-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontWeight: 700, flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ color: "#ffffff" }}>Number of Full-Time Engineers:</span>
                  <span style={{ color: "#06b6d4", fontSize: "18px" }}>{teamSize} {teamSize === 1 ? "Developer" : "Developers"}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value) || 1)}
                  style={{ width: "100%", accentColor: "#06b6d4", cursor: "pointer", touchAction: "pan-y" }}
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
                  <span style={{ color: "#06b6d4", fontSize: "18px" }}>{durationMonths} Months</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value) || 1)}
                  style={{ width: "100%", accentColor: "#06b6d4", cursor: "pointer", touchAction: "pan-y" }}
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
                <span style={{ color: "#94a3b8" }}>Miami Agency Benchmark:</span>
                <span style={{ color: "#f87171", fontWeight: 700, textDecoration: "line-through" }}>{formatUSD(localTotal)}</span>
              </div>
              <div className="hub-calc-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px", fontSize: "14px", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ color: "#94a3b8" }}>ChittorTech Dedicated Pod:</span>
                <span style={{ color: "#34d399", fontWeight: 700 }}>{formatUSD(ctTotal)}</span>
              </div>
              <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.1)", margin: "16px 0" }} />
              <div>
                <div style={{ fontSize: "13px", color: "#06b6d4", textTransform: "uppercase", fontWeight: 800 }}>
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

      {/* ─── Core Technical Capabilities ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ color: "#06b6d4", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            HIGH-CONVERTING TECHNICAL SOLUTIONS
          </span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", marginTop: "8px", color: "#ffffff" }}>
            Software Engineering Built for South Florida Businesses
          </h2>
          <p style={{ maxWidth: "720px", margin: "12px auto 0", fontSize: "16px" }}>
            From bilingual web applications to automated WhatsApp AI bots, we build responsive digital platforms that convert traffic into revenue.
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
                border: selectedService === idx ? "1px solid #06b6d4" : "1px solid rgba(255, 255, 255, 0.1)",
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
              <i className={srv.icon} style={{ color: selectedService === idx ? "#ffffff" : "#06b6d4" }}></i>
              <span>{srv.tabLabel || srv.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Service Card */}
        <div className="miami-card" style={{ padding: "40px", border: "1px solid rgba(6, 182, 212, 0.3)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
            <div>
              <span style={{
                background: "rgba(6, 182, 212, 0.15)",
                color: "#06b6d4",
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

      {/* ─── Why Miami Businesses Partner with ChittorTech ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", color: "#ffffff" }}>
            Engineered for Florida Growth &amp; LatAm Expansion
          </h2>
          <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "16px" }}>
            Eliminate high local agency overhead and scale your technical capability on demand.
          </p>
        </div>

        <div className="hub-features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          
          <div className="miami-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(6, 182, 212, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-earth-americas" style={{ color: "#06b6d4", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>Bilingual Execution</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              Miami is the capital of Latin American business. We engineer native bilingual web apps, automated Spanish WhatsApp chatbots, and localized checkout workflows that convert cross-border traffic effortlessly.
            </p>
          </div>

          <div className="miami-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(52, 211, 153, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-business-time" style={{ color: "#34d399", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>Live EST Daily Overlap</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              Enjoy 4-5 hours of direct synchronous overlap with your Miami team (8:30 AM - 1:00 PM EST). Run daily morning standups, review live pull requests, and wake up to tested commits shipped overnight.
            </p>
          </div>

          <div className="miami-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(245, 158, 11, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-file-shield" style={{ color: "#f59e0b", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>US Corporate NDAs &amp; W-8BEN</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              Airtight legal compliance with full work-for-hire assignment, comprehensive mutual NDAs executed within 2 hours, and standard W-8BEN tax forms for frictionless US accounting.
            </p>
          </div>

        </div>
      </section>

      {/* ─── Executive FAQs ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "980px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", color: "#ffffff" }}>
            Frequently Asked Questions by Florida Founders
          </h2>
          <p style={{ fontSize: "15px", marginTop: "8px" }}>
            Transparent details about timezone overlap, bilingual support, and contracts.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="miami-card"
              style={{
                padding: "24px",
                cursor: "pointer",
                border: openFaq === idx ? "1px solid rgba(6, 182, 212, 0.5)" : "1px solid rgba(255, 255, 255, 0.08)"
              }}
              onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                <h3 style={{ fontSize: "17px", color: "#ffffff", margin: 0 }}>
                  {faq.q}
                </h3>
                <i
                  className={`fa-solid ${openFaq === idx ? "fa-chevron-up" : "fa-chevron-down"}`}
                  style={{ color: "#06b6d4", fontSize: "14px" }}
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
            Ready to Build Next-Gen Software for Miami &amp; Beyond?
          </h2>
          <p style={{ fontSize: "17px", color: "#cbd5e1 !important", maxWidth: "680px", margin: "0 auto 36px", lineHeight: 1.65 }}>
            Schedule an architectural consultation with our technical team. We sign mutual NDAs within 2 hours and can kick off your dedicated pod in under 72 hours.
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
              href="https://wa.me/919929828456?text=Hello%20ChittorTech%2C%20we%20are%20a%20Miami%20business%20interested%20in%20dedicated%20engineering%20pods."
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
