"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export default function TurkeyEurasiaPage() {
  const [teamSize, setTeamSize] = useState(3);
  const [durationMonths, setDurationMonths] = useState(6);
  const [selectedService, setSelectedService] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // Turkey & Eurasia Benchmark Rates:
  // Senior Developer / Agency Contractor: ~$85/hr
  // ChittorTech Senior Developer: ~$35/hr
  const hoursPerMonth = 160;
  const localRatePerHour = 85;
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
    "id": "eurasian-web",
    "tabLabel": "Eurasian Web",
    "name": "Bilingual Turkish/English Next.js 15 Export & ERP Portals",
    "badge": "Next.js 15, Multi-Currency TRY/EUR/USD & Export",
    "icon": "fa-solid fa-ship",
    "description": "Engineered for Turkish export manufacturers, Istanbul trading firms, and Eurasian logistics groups. Build high-speed web platforms in Next.js 15 with multi-currency and cross-border trade workflows.",
    "deliverables": [
      "Multi-currency pricing engine supporting TRY, EUR, and USD with live exchange rates",
      "Sub-second Core Web Vitals deployed across European and Mediterranean edge CDN nodes",
      "Type-safe development with TypeScript, Zod validation, and Supabase / PostgreSQL",
      "Integration with Turkish and international payment gateways: Iyzico, Stripe, and Apple Pay",
      "Automated regression test coverage with Playwright ensuring zero release bugs"
    ],
    "techSpecs": "Next.js 15, React 19, TypeScript, Tailwind CSS, Supabase, Cloudflare Edge"
  },
  {
    "id": "autonomous-ai",
    "tabLabel": "Autonomous AI",
    "name": "Bilingual Turkish/English AI Chatbots & WhatsApp CRM",
    "badge": "Groq LPUs, Private RAG & WhatsApp Support",
    "icon": "fa-solid fa-brain",
    "description": "Deploy private autonomous conversational AI agents and sub-second LLM workflows that handle wholesale inquiries, catalog questions, and export lead qualification 24/7 in Turkish and English.",
    "deliverables": [
      "Sub-500ms streaming response times powered by Groq LPU hardware and Llama 3.3",
      "Private document RAG pipelines searching export catalogs, technical specs, and customs forms",
      "WhatsApp Business Cloud API automation for instant international buyer lead capture",
      "Automated Tier-1 customer support handling 75%+ of repetitive inquiries autonomously",
      "Zero LLM training on confidential client proprietary data with enterprise isolation"
    ],
    "techSpecs": "Groq LPU, LangChain, Pinecone, Llama 3.3, OpenAI API, WhatsApp Cloud API"
  },
  {
    "id": "mobile-apps",
    "tabLabel": "Mobile Apps",
    "name": "Native & Cross-Platform Mobile Applications for Logistics",
    "badge": "React Native, Expo & Barcode Scanning",
    "icon": "fa-solid fa-mobile-screen-button",
    "description": "Fluid iOS & Android applications engineered for warehouse logistics, dispatch tracking, and field sales teams with offline SQLite caching.",
    "deliverables": [
      "Single clean TypeScript codebase deployed simultaneously to Apple App Store & Google Play",
      "Fast QR code and barcode scanning for warehouse inventory tracking",
      "Real-time dispatch push notifications via Firebase Cloud Messaging",
      "Biometric Face ID authentication with secure on-device keychain encryption",
      "60fps gesture-driven animations and responsive Dark Mode aesthetics"
    ],
    "techSpecs": "React Native, Expo, TypeScript, Apple Pay, Stripe SDK, Firebase"
  },
  {
    "id": "eurasian-cloud",
    "tabLabel": "Eurasian Cloud",
    "name": "AWS Europe & Cloudflare Edge High-Availability Cloud",
    "badge": "Low Latency European Routing & 99.99% Uptime",
    "icon": "fa-solid fa-server",
    "description": "Resilient cloud networking, automated CI/CD pipelines, and high-concurrency database connection pooling designed for Eurasian scale-ups requiring 99.99% uptime.",
    "deliverables": [
      "Low-latency routing across Turkey, Europe, and the Middle East",
      "Cloudflare Edge CDN caching and WAF security mitigating high-volume DDoS attacks",
      "PostgreSQL connection pooling, read replicas, and Redis in-memory acceleration",
      "Automated Docker CI/CD deployment pipelines with zero-downtime blue-green rollouts",
      "24/7 synthetic monitoring, error tracking, and automated rollback mechanisms"
    ],
    "techSpecs": "AWS Europe, Cloudflare Edge, Docker, PostgreSQL, Redis, Terraform"
  },
  {
    "id": "seo-growth",
    "tabLabel": "SEO & Growth",
    "name": "Google Turkey & European Export Organic Search SEO",
    "badge": "Organic Search Dominance & Analytics",
    "icon": "fa-solid fa-magnifying-glass-chart",
    "description": "Dominate competitive Turkish and European export search queries with programmatic SEO architectures, automated XML sitemaps, and conversion-focused GA4 measurement.",
    "deliverables": [
      "Bilingual Turkish and English programmatic SEO delivering top Google rankings",
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
      q: "What is your timezone overlap with Istanbul (TRT)?",
      a: "Istanbul is only 2.5 hours behind India (TRT vs IST). This gives us 6.5 hours of direct synchronous overlap every day. Your dedicated engineering pod attends morning standups at 9:00 AM TRT, communicates instantly via Slack or Teams, and deploys updates throughout your business day."
    },
    {
      q: "Can you build multilingual platforms supporting Turkish, English, and Arabic?",
      a: "Yes. Eurasian commercial hubs require fluid multilingual capabilities. We engineer Next.js 15 applications with full internationalization (i18n), automated browser language detection, and direction-aware layout flipping for Arabic RTL and Latin scripts."
    },
    {
      q: "How do your rates compare to local Istanbul tech agencies?",
      a: "Experienced senior full-stack developers in Istanbul command $70 to $100/hr through local agencies or international consultancies. ChittorTech provides dedicated senior software engineers at $35/hr—saving you up to 59% on engineering payroll."
    },
    {
      q: "Can you integrate Turkish payment gateways like Iyzico?",
      a: "Yes. We have experience integrating Iyzico, Garanti BBVA online payment APIs, Papara, and international gateways like Stripe and Apple Pay for smooth global and domestic transactions."
    },
    {
      q: "What is your IP ownership and NDA policy?",
      a: "We execute comprehensive bilateral NDAs before technical discussions. All contracts include full work-for-hire provisions transferring 100% intellectual property, code repositories, and documentation to your company."
    },
    {
      q: "Can we test your engineers before signing a contract?",
      a: "Yes. We offer a 2-Week Risk-Free Technical Pilot. Assign real tasks from your roadmap and evaluate our velocity and code quality first-hand. If not satisfied, you pay nothing."
    }
  ];

  return (
    <div className="turkey-page" style={{
      backgroundColor: "#060b18",
      color: "#f8fafc",
      minHeight: "100vh",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      
      {/* ─── High-Contrast Overrides ─── */}
      <style>{`
        .turkey-page h1, .turkey-page h2, .turkey-page h3, .turkey-page h4, .turkey-page h5 {
          color: #ffffff !important;
          font-weight: 800;
        }
        .turkey-page p {
          color: #94a3b8 !important;
        }
        .crimson-gradient-text {
          background: linear-gradient(135deg, #f43f5e 0%, #e11d48 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cyan-gradient-text {
          background: linear-gradient(135deg, #38bdf8 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .turkey-card {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .turkey-card:hover {
          border-color: rgba(244, 63, 94, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
        }
      `}</style>

      {/* ─── Hero Section ─── */}
      <section style={{
        position: "relative",
        padding: "110px 20px 85px",
        background: "radial-gradient(circle at 50% 15%, rgba(225, 29, 72, 0.25) 0%, rgba(6, 11, 24, 1) 75%)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        overflow: "hidden"
      }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(244, 63, 94, 0.4)",
            padding: "8px 22px",
            borderRadius: "9999px",
            fontSize: "14px",
            fontWeight: 700,
            color: "#f43f5e",
            marginBottom: "28px"
          }}>
            <span style={{ fontSize: "18px" }}>🇹🇷</span>
            <span>TURKEY &amp; EURASIA TECH GATEWAY</span>
            <span style={{ color: "#64748b" }}>•</span>
            <span style={{ color: "#34d399" }}>2.5-Hour TRT Overlap</span>
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
            Cross-Border Web Platforms &amp; AI for <span className="crimson-gradient-text">Eurasian Scale-Ups</span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            color: "#cbd5e1 !important",
            maxWidth: "880px",
            margin: "0 auto 40px"
          }}>
            Bridging East and West with world-class engineering. Deploy dedicated full-stack Next.js developers, multilingual WhatsApp AI agents, and resilient cloud architectures with seamless 2.5-hour TRT alignment.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#e11d48",
                color: "#ffffff",
                padding: "18px 40px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 28px -6px rgba(225, 29, 72, 0.6)"
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
              <i className="fa-solid fa-laptop-code" style={{ color: "#f43f5e" }}></i>
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
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#34d399" }}>59%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Eurasian Budget Saved</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#f43f5e" }}>2.5 Hours</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>TRT Synchronous Sync</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#fbbf24" }}>Multilingual</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Turkish, English, Arabic, Russian</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#a855f7" }}>100%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Client IP &amp; Code Ownership</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Interactive Turkey Cost Calculator ─── */}
      <section style={{ padding: "80px 20px", maxWidth: "1140px", margin: "0 auto" }}>
        <div className="turkey-card" style={{ padding: "40px 32px", border: "1px solid rgba(244, 63, 94, 0.25)" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span style={{ color: "#f43f5e", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              ECONOMIC LEVERAGE CALCULATOR
            </span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", marginTop: "8px", color: "#ffffff" }}>
              Compare Regional Contractor Rates vs ChittorTech Dedicated Pods
            </h2>
            <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "15px" }}>
              Benchmark based on standard Eurasian contractor rates of <strong>$85/hr</strong> vs ChittorTech’s dedicated senior pod rate of <strong>$35/hr</strong>.
            </p>
          </div>

          <div className="hub-calc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", alignItems: "center" }}>
            
            {/* Sliders */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div>
                <div className="hub-slider-label-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontWeight: 700, flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ color: "#ffffff" }}>Number of Full-Time Engineers:</span>
                  <span style={{ color: "#f43f5e", fontSize: "18px" }}>{teamSize} {teamSize === 1 ? "Developer" : "Developers"}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value) || 1)}
                  style={{ width: "100%", accentColor: "#f43f5e", cursor: "pointer", touchAction: "pan-y" }}
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
                  <span style={{ color: "#f43f5e", fontSize: "18px" }}>{durationMonths} Months</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value) || 1)}
                  style={{ width: "100%", accentColor: "#f43f5e", cursor: "pointer", touchAction: "pan-y" }}
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
                <span style={{ color: "#94a3b8" }}>Regional Agency Benchmark:</span>
                <span style={{ color: "#f87171", fontWeight: 700, textDecoration: "line-through" }}>{formatUSD(localTotal)}</span>
              </div>
              <div className="hub-calc-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px", fontSize: "14px", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ color: "#94a3b8" }}>ChittorTech Dedicated Pod:</span>
                <span style={{ color: "#34d399", fontWeight: 700 }}>{formatUSD(ctTotal)}</span>
              </div>
              <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.1)", margin: "16px 0" }} />
              <div>
                <div style={{ fontSize: "13px", color: "#f43f5e", textTransform: "uppercase", fontWeight: 800 }}>
                  Total Estimated Capital Saved:
                </div>
                <div style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 900, color: "#ffffff", marginTop: "4px" }}>
                  {formatUSD(savingsTotal)}
                </div>
                <div style={{ display: "inline-block", background: "rgba(52, 211, 153, 0.15)", color: "#34d399", padding: "4px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: 800, marginTop: "8px" }}>
                  {savingsPercent}% Reinvestable Margin Preserved
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Core Technical Capabilities ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ color: "#f43f5e", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            SPECIALIZED TECHNICAL CAPABILITIES
          </span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", marginTop: "8px", color: "#ffffff" }}>
            Software Engineering Built for Eurasian Trade &amp; Scale
          </h2>
          <p style={{ maxWidth: "720px", margin: "12px auto 0", fontSize: "16px" }}>
            From cross-border web applications to automated multilingual WhatsApp AI bots, we build responsive digital platforms that convert traffic into revenue.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="hub-tabs-wrap" style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "36px" }}>
          {services.map((srv, idx) => (
            <button
              key={srv.id}
              onClick={() => setSelectedService(idx)}
              style={{
                background: selectedService === idx ? "#e11d48" : "rgba(15, 23, 42, 0.8)",
                color: selectedService === idx ? "#ffffff" : "#94a3b8",
                border: selectedService === idx ? "1px solid #f43f5e" : "1px solid rgba(255, 255, 255, 0.1)",
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
              <i className={srv.icon} style={{ color: selectedService === idx ? "#ffffff" : "#f43f5e" }}></i>
              <span>{srv.tabLabel || srv.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Service Card */}
        <div className="turkey-card" style={{ padding: "40px", border: "1px solid rgba(244, 63, 94, 0.3)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
            <div>
              <span style={{
                background: "rgba(244, 63, 94, 0.15)",
                color: "#f43f5e",
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
                backgroundColor: "#e11d48",
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

      {/* ─── Why Eurasian Businesses Partner with ChittorTech ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", color: "#ffffff" }}>
            Engineered for Regional Scale &amp; Fast Execution
          </h2>
          <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "16px" }}>
            Bypass talent shortages and build cross-border digital platforms on demand.
          </p>
        </div>

        <div className="hub-features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          
          <div className="turkey-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(244, 63, 94, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-business-time" style={{ color: "#f43f5e", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>2.5-Hour Timezone Overlap</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              India is only 2.5 hours ahead of Turkey and Eurasia. Your dedicated pod participates in daily morning standups at 9:00 AM TRT, resolving issues live and deploying code in real time.
            </p>
          </div>

          <div className="turkey-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(52, 211, 153, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-earth-europe" style={{ color: "#34d399", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>Multilingual &amp; Cross-Border</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              Eurasian markets bridge continents. We build systems that dynamically switch languages (Turkish, English, Arabic, Russian) and convert international currencies with real-time accuracy.
            </p>
          </div>

          <div className="turkey-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(245, 158, 11, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-shield-halved" style={{ color: "#f59e0b", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>100% IP &amp; Code Ownership</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              Airtight legal compliance with full work-for-hire assignment, comprehensive bilateral NDAs executed within 2 hours, and total ownership of repositories and deployment configs.
            </p>
          </div>

        </div>
      </section>

      {/* ─── Executive FAQs ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "980px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", color: "#ffffff" }}>
            Frequently Asked Questions by Eurasian Leaders
          </h2>
          <p style={{ fontSize: "15px", marginTop: "8px" }}>
            Clear details regarding timezone alignment, payment gateways, and trial sprints.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="turkey-card"
              style={{
                padding: "24px",
                cursor: "pointer",
                border: openFaq === idx ? "1px solid rgba(244, 63, 94, 0.5)" : "1px solid rgba(255, 255, 255, 0.08)"
              }}
              onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                <h3 style={{ fontSize: "17px", color: "#ffffff", margin: 0 }}>
                  {faq.q}
                </h3>
                <i
                  className={`fa-solid ${openFaq === idx ? "fa-chevron-up" : "fa-chevron-down"}`}
                  style={{ color: "#f43f5e", fontSize: "14px" }}
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
        background: "radial-gradient(circle at 50% 50%, rgba(225, 29, 72, 0.25) 0%, rgba(6, 11, 24, 1) 75%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4.5vw, 44px)", color: "#ffffff", marginBottom: "18px" }}>
            Ready to Build High-Performance Software for Eurasia?
          </h2>
          <p style={{ fontSize: "17px", color: "#cbd5e1 !important", maxWidth: "680px", margin: "0 auto 36px", lineHeight: 1.65 }}>
            Book an introductory technical architecture call with our leadership. We execute mutual NDAs within 2 hours and can deploy a dedicated senior engineering pod within 72 hours.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#e11d48",
                color: "#ffffff",
                padding: "18px 42px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 28px -6px rgba(225, 29, 72, 0.6)"
              }}
            >
              <span>Schedule Architecture Consultation</span>
              <span>&rarr;</span>
            </Link>

            <a
              href="https://wa.me/919929828456?text=Hello%20ChittorTech%2C%20we%20are%20a%20business%20in%20Turkey%2FEurasia%20interested%20in%20dedicated%20engineering%20pods."
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
