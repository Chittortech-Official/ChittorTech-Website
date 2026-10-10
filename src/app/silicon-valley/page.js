"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export default function SiliconValleyPage() {
  const [teamSize, setTeamSize] = useState(3);
  const [durationMonths, setDurationMonths] = useState(6);
  const [selectedService, setSelectedService] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // Bay Area Benchmark Rates:
  // San Francisco / Palo Alto Senior Dev: ~$185/hr ($240k+ base + equity + payroll)
  // ChittorTech Senior Developer / Specialist: ~$38/hr
  const hoursPerMonth = 160;
  const localRatePerHour = 185;
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
    "id": "modern-web",
    "tabLabel": "YC Sprint Web",
    "name": "High-Velocity Next.js 15 & React 19 Engineering",
    "badge": "App Router, Server Actions & Supabase",
    "icon": "fa-solid fa-code",
    "description": "Ship your product at YC sprint speed. Modern, reactive web applications and SaaS platforms engineered with Next.js 15, React Server Components, and Tailwind CSS.",
    "deliverables": [
      "Rapid 2-week agile sprint delivery with daily reviewed pull requests in GitHub",
      "Sub-second page rendering and perfect Core Web Vitals optimization on Vercel and Cloudflare",
      "Type-safe architecture with TypeScript, Zod validation, and Prisma / Supabase ORM",
      "Automated end-to-end testing with Playwright and Jest ensuring zero regression bugs",
      "Zero technical debt and clean modular architecture ready for Series A due diligence"
    ],
    "techSpecs": "Next.js 15, React 19, TypeScript, Tailwind CSS, Supabase, Vercel Edge, Playwright"
  },
  {
    "id": "ai-agents",
    "tabLabel": "GenAI & LLMs",
    "name": "Autonomous AI Agents & Low-Latency LLMs",
    "badge": "Groq LPUs, LangChain & Vector RAG",
    "icon": "fa-solid fa-brain",
    "description": "Move beyond ChatGPT wrappers. Engineer ultra-fast autonomous AI agents, voice interfaces, and custom RAG retrieval pipelines with sub-500ms response times.",
    "deliverables": [
      "Sub-500ms inference speeds powered by Groq LPU hardware and streaming WebSockets",
      "Hybrid RAG architectures using Pinecone / Qdrant with zero hallucination verification",
      "Custom function calling and autonomous tool-use workflows connecting to your APIs",
      "Multi-modal AI applications integrating Whisper voice transcription and computer vision",
      "Strict enterprise data privacy guarantees with zero model training on your proprietary IP"
    ],
    "techSpecs": "Groq LPU, LangChain, LlamaIndex, Pinecone, OpenAI / Claude API, Python FastAPI"
  },
  {
    "id": "mobile-apps",
    "tabLabel": "Mobile Apps",
    "name": "Native & Cross-Platform Mobile Applications",
    "badge": "React Native & Expo",
    "icon": "fa-solid fa-mobile-screen-button",
    "description": "Vibrant consumer and B2B mobile applications built with React Native and Expo, featuring 60fps animations, biometric authentication, and offline synchronization.",
    "deliverables": [
      "Single clean TypeScript codebase deployed simultaneously to iOS and Android",
      "Apple StoreKit & Google Play in-app purchase and subscription billing architecture",
      "Real-time event streaming and push notifications via Firebase Cloud Messaging",
      "Fast-track publishing and App Store Review guidelines compliance",
      "Seamless integration with your existing Next.js web application backend"
    ],
    "techSpecs": "React Native, Expo, TypeScript, Firebase Auth, RevenueCat, Apple Pay"
  },
  {
    "id": "cloud-scaling",
    "tabLabel": "Viral Scale Cloud",
    "name": "Cloud Infrastructure, Networking & Software Scaling",
    "badge": "Cloudflare Edge, AWS & Microservices",
    "icon": "fa-solid fa-server",
    "description": "Architecting cloud native backends, database scaling, API gateways, and edge caching designed to absorb Hacker News or Product Hunt viral surges effortlessly.",
    "deliverables": [
      "Cloudflare Workers edge logic delivering dynamic content with 0ms cold starts",
      "PostgreSQL connection pooling, read replicas, and Redis cache optimization",
      "Docker containerization and automated CI/CD deployment pipelines on AWS or GCP",
      "DDoS protection, rate limiting, and automated security vulnerability scanning",
      "Real-time distributed tracing and observability via Datadog or OpenTelemetry"
    ],
    "techSpecs": "Cloudflare Workers, AWS ECS / Fargate, Docker, PostgreSQL, Redis, Terraform"
  },
  {
    "id": "technical-seo",
    "tabLabel": "SEO & Growth",
    "name": "Technical SEO, GA4 Analytics & Growth Loops",
    "badge": "Organic Search & Product Analytics",
    "icon": "fa-solid fa-magnifying-glass-chart",
    "description": "Engineered programmatic SEO, automated sitemaps, Google Search Console indexing, and Google Analytics 4 conversion tracking to scale organic user acquisition.",
    "deliverables": [
      "Programmatic SEO architecture generating thousands of indexable high-converting landing pages",
      "Automated XML sitemaps, canonical tags, and structured JSON-LD schema integration",
      "Google Analytics 4 event tracking monitoring user onboarding, retention, and churn funnels",
      "Sub-second Core Web Vitals performance directly driving higher Google organic search rankings",
      "A/B testing infrastructure designed to optimize user sign-up and checkout conversion rates"
    ],
    "techSpecs": "Google Search Console, Google Analytics 4, Schema.org, Next.js Metadata API, Mixpanel"
  }
];

  const faqs = [
    {
      q: "How do follow-the-sun sprints work for Bay Area startups?",
      a: "You participate in live morning standups during the PST overlap window (8:00 AM - 11:30 AM PST), assign sprint tickets in Linear or Jira, and our engineers execute throughout your night. When you wake up at 8:00 AM PST, tested pull requests are ready in GitHub for review. Your startup ships features 24 hours a day."
    },
    {
      q: "Do we have to give away equity or stock options?",
      a: "Zero equity. We operate on a pure cash-for-services arrangement without any stock option expectations or cap table dilution. You retain 100% of your company's equity."
    },
    {
      q: "How experienced are your engineers with modern AI and Next.js stacks?",
      a: "Our senior developers specialize in Next.js 15 App Router, React 19, Python FastAPI, Groq ultra-low latency inference, LangChain, Pinecone, and custom RAG architectures. We build production-ready systems, not basic prototype wrappers."
    },
    {
      q: "Can we transition to an in-house team after our Series A round?",
      a: "Yes! We write clean, documented TypeScript and Python code adhering to strict linting, architecture, and test coverage standards. When you are ready to hire internal developers post-Series A, the codebase transitions seamlessly."
    },
    {
      q: "What is your IP and non-disclosure policy?",
      a: "We execute comprehensive mutual NDAs within 2 hours of inquiry. All master service agreements include airtight work-for-hire clauses transferring 100% intellectual property rights to your US entity."
    },
    {
      q: "Can we test your team before signing a contract?",
      a: "Yes. We provide a 2-Week Risk-Free Technical Pilot. Assign real sprint tickets and evaluate our code quality directly in your repository. If not completely satisfied, you pay nothing."
    }
  ];

  return (
    <div className="sv-page" style={{
      backgroundColor: "#060b18",
      color: "#f8fafc",
      minHeight: "100vh",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      
      {/* ─── High-Contrast Overrides ─── */}
      <style>{`
        .sv-page h1, .sv-page h2, .sv-page h3, .sv-page h4, .sv-page h5 {
          color: #ffffff !important;
          font-weight: 800;
        }
        .sv-page p {
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
        .sv-card {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sv-card:hover {
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
            <span style={{ fontSize: "18px" }}>⚡</span>
            <span>SILICON VALLEY RUNWAY MULTIPLIER</span>
            <span style={{ color: "#64748b" }}>•</span>
            <span style={{ color: "#34d399" }}>Next.js 15, AI Agents &amp; Cloud Pods</span>
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
            High-Velocity Software Engineering for <span className="cyan-gradient-text">Silicon Valley AI &amp; Tech Startups</span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            color: "#cbd5e1 !important",
            maxWidth: "880px",
            margin: "0 auto 40px"
          }}>
            Extend your venture capital runway by 3.5x. Deploy senior Next.js full-stack developers, conversational AI engineers, and cloud architects who move at YC sprint velocity without Bay Area salary inflation or equity dilution.
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
              <span>Schedule Technical Consultation</span>
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
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#34d399" }}>3.5x</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Runway Extension Factor</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#38bdf8" }}>24/7 Sprints</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Follow-the-Sun Delivery Loop</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#fde047" }}>0% Equity</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Preserve Your Cap Table</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#a855f7" }}>&lt; 500ms</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Groq AI Inference Speeds</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── The 5 Core Solutions ─── */}
      <section style={{ padding: "85px 20px", maxWidth: "1160px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span style={{ fontSize: "13px", fontWeight: 800, color: "#38bdf8", textTransform: "uppercase", letterSpacing: "1.5px" }}>
            Silicon Valley Specialized Pods
          </span>
          <h2 style={{ fontSize: "34px", fontWeight: 900, marginTop: "8px", color: "#ffffff" }}>
            Full-Stack Engineering &amp; AI Architectures Built for Startups
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

      {/* ─── Interactive Cost & Savings Calculator ─── */}
      <section style={{ padding: "85px 20px", background: "#0b1222", borderTop: "1px solid rgba(255, 255, 255, 0.06)", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ fontSize: "13px", fontWeight: 800, color: "#34d399", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              Runway Extension Engine
            </span>
            <h2 style={{ fontSize: "34px", fontWeight: 900, marginTop: "8px", color: "#ffffff" }}>
              San Francisco In-House Hiring vs ChittorTech Dedicated Pod
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "16px", maxWidth: "700px", margin: "10px auto 0" }}>
              Calculate how many months of additional runway your startup unlocks by augmenting with our senior engineering pods.
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
                    <label style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>Senior Dedicated Engineers</label>
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
                    <label style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>Sprint Duration</label>
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
                    <span>1 Month (MVP Sprint)</span>
                    <span>6 Months (Seed Growth)</span>
                    <span>12 Months (Series A Prep)</span>
                  </div>
                </div>

                <div style={{ marginTop: "28px", padding: "16px", background: "rgba(6, 11, 24, 0.8)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)", fontSize: "13px", color: "#94a3b8" }}>
                  <i className="fa-solid fa-circle-info" style={{ color: "#38bdf8", marginRight: "8px" }}></i>
                  Calculated against Bay Area rates: <strong>$185/hr</strong> (SF Senior Developer Total Cost) vs <strong>$38/hr</strong> (ChittorTech Dedicated Pod).
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
                  Save {savingsPercent}% compared to Bay Area domestic hiring
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", textAlign: "left", marginBottom: "24px" }}>
                  <div style={{ padding: "14px", background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.25)", borderRadius: "12px" }}>
                    <div style={{ fontSize: "11px", color: "#f87171", textTransform: "uppercase", fontWeight: 700 }}>Bay Area In-House</div>
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
            Founder Clarity
          </span>
          <h2 style={{ fontSize: "34px", fontWeight: 900, marginTop: "8px", color: "#ffffff" }}>
            Frequently Asked Questions (Silicon Valley)
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
            Ready to Accelerate Your Startup Velocity in Silicon Valley?
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
              href="https://wa.me/919929828456?text=Hi%20ChittorTech,%20we%20are%20a%20Bay%20Area%20startup%20exploring%20software%20engineering%20pods."
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
            Guaranteed Response Time: &lt; 15 minutes • No Recruitment Fees • Direct USD Invoicing &amp; W-8BEN Compliance
          </div>
        </div>
      </section>

    </div>
  );
}
