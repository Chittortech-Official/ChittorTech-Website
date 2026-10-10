"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function FourWeekSaaSMVPPage() {
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [includeAi, setIncludeAi] = useState(true);
  const [includeMobile, setIncludeMobile] = useState(false);

  // MVP Cost Comparison
  // Agency traditional build: $45,000+ & 4-6 months
  // ChittorTech 28-day sprint: $7,500 base + add-ons
  const baseCost = 7500;
  const aiAddon = includeAi ? 2000 : 0;
  const mobileAddon = includeMobile ? 3500 : 0;
  const totalMvpCost = baseCost + aiAddon + mobileAddon;
  const agencyCost = 45000 + (includeAi ? 15000 : 0) + (includeMobile ? 20000 : 0);
  const totalSavings = agencyCost - totalMvpCost;

  const formatUSD = (val) => {
    return `$${val.toLocaleString()}`;
  };

  const weeks = [
    {
      week: "Week 1",
      title: "Architecture, Wireframes & Database Schema",
      badge: "Days 1 - 7",
      icon: "fa-solid fa-compass-drafting",
      description: "We lock down user stories, finalize high-converting Figma UI/UX wireframes, design normalized PostgreSQL database schemas, and configure repository environments.",
      milestones: [
        "Interactive clickable Figma prototype reviewed and approved",
        "PostgreSQL database schema architecture designed in Supabase or Prisma",
        "Next.js 15 repository initialized with Tailwind CSS and ESLint",
        "Authentication workflow architecture (Email/Password, Google OAuth, Magic Links)",
        "Stripe customer portal and subscription webhook architecture planned"
      ]
    },
    {
      week: "Week 2",
      title: "Core Feature Engineering & Authentication",
      badge: "Days 8 - 14",
      icon: "fa-solid fa-code",
      description: "We build the core application features, implement user authentication, configure state management, and connect database queries via type-safe Server Actions.",
      milestones: [
        "Complete user authentication system live with role-based access control (RBAC)",
        "Core SaaS workflow and user dashboard views fully functional",
        "Dynamic database queries executed via Next.js Server Actions and React Server Components",
        "Client and server-side form validation using Zod schemas",
        "Daily reviewed pull requests committed directly to your private GitHub repo"
      ]
    },
    {
      week: "Week 3",
      title: "Stripe Billing, AI Integrations & APIs",
      badge: "Days 15 - 21",
      icon: "fa-solid fa-credit-card",
      description: "We implement Stripe Checkout and billing portals, connect external third-party APIs, and wire up low-latency AI agents or vector search if required.",
      milestones: [
        "Stripe billing live with recurring subscription plans, free trials, and invoices",
        "Webhook handlers processing upgrade, downgrade, and cancellation events safely",
        "Autonomous Groq/OpenAI conversational AI or vector RAG integration (if selected)",
        "Transactional email workflows integrated via Resend or SendGrid",
        "End-to-end user checkout flow tested with simulated card transactions"
      ]
    },
    {
      week: "Week 4",
      title: "Testing, Edge Deployment & Public Launch",
      badge: "Days 22 - 28",
      icon: "fa-solid fa-rocket",
      description: "We run end-to-end regression tests, optimize Core Web Vitals to 100/100, connect your custom domain, set up GA4 analytics, and push to production.",
      milestones: [
        "Automated end-to-end smoke testing with Playwright ensuring zero critical bugs",
        "Sub-second page rendering and perfect Core Web Vitals optimization on Vercel or Cloudflare",
        "Custom domain connected with automated SSL/TLS certificates",
        "Google Analytics 4 and PostHog conversion tracking configured",
        "100% intellectual property, code repositories, and credentials handed over"
      ]
    }
  ];

  const faqs = [
    {
      q: "Can a production-ready SaaS really be built in 4 weeks?",
      a: "Yes. By utilizing modern engineering standards (Next.js 15 App Router, Supabase, Tailwind CSS, and Stripe Billing) and adhering to a strictly defined, locked sprint scope, we eliminate technical bloat. You get a production-ready, beautifully designed product ready to accept paying customers on Day 28."
    },
    {
      q: "What is included in the core 4-week build?",
      a: "The core build includes user authentication (OAuth + Email), high-converting landing page, interactive dashboard, database schema, core product feature set, Stripe recurring billing, transactional emails, and production deployment on Vercel or Cloudflare with full source code ownership."
    },
    {
      q: "Can we add conversational AI or mobile apps to the MVP?",
      a: "Yes! We offer pre-architected modules for low-latency Groq/OpenAI conversational AI agents, custom vector RAG search, and companion iOS/Android mobile apps built with React Native and Expo."
    },
    {
      q: "Who owns the code and intellectual property?",
      a: "You own 100% of everything. All code is written directly in your private GitHub repository, and all accounts (Supabase, Stripe, Vercel) are registered under your business name. There are zero licensing fees or ongoing dependencies on us."
    },
    {
      q: "What happens after the 4-week sprint concludes?",
      a: "Once launched, you have three flexible options: (1) take the clean, documented codebase in-house, (2) transition to our ongoing dedicated engineering pod model for continuous feature delivery, or (3) hire us on an hourly retainer for maintenance."
    },
    {
      q: "What is your refund policy if deadlines are not met?",
      a: "We operate on guaranteed milestones. If we fail to deliver the agreed-upon sprint scope within the 28-day window due to reasons on our end, we continue working at zero additional cost until your launch requirements are satisfied."
    }
  ];

  return (
    <div className="mvp-page" style={{
      backgroundColor: "#060b18",
      color: "#f8fafc",
      minHeight: "100vh",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      
      {/* ─── High-Contrast Overrides ─── */}
      <style>{`
        .mvp-page h1, .mvp-page h2, .mvp-page h3, .mvp-page h4, .mvp-page h5 {
          color: #ffffff !important;
          font-weight: 800;
        }
        .mvp-page p {
          color: #94a3b8 !important;
        }
        .purple-gradient-text {
          background: linear-gradient(135deg, #a855f7 0%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .emerald-gradient-text {
          background: linear-gradient(135deg, #34d399 0%, #059669 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .mvp-card {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mvp-card:hover {
          border-color: rgba(168, 85, 247, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
        }
      `}</style>

      {/* ─── Hero Section ─── */}
      <section style={{
        position: "relative",
        padding: "110px 20px 85px",
        background: "radial-gradient(circle at 50% 15%, rgba(147, 51, 234, 0.25) 0%, rgba(6, 11, 24, 1) 75%)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        overflow: "hidden"
      }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(168, 85, 247, 0.4)",
            padding: "8px 22px",
            borderRadius: "9999px",
            fontSize: "14px",
            fontWeight: 700,
            color: "#c084fc",
            marginBottom: "28px"
          }}>
            <span style={{ fontSize: "18px" }}>🚀</span>
            <span>28-DAY FIXED-SCOPE SPRINT</span>
            <span style={{ color: "#64748b" }}>•</span>
            <span style={{ color: "#34d399" }}>Napkin to Live Production SaaS</span>
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
            Launch Your Production SaaS in <span className="purple-gradient-text">28 Days Flat</span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            color: "#cbd5e1 !important",
            maxWidth: "880px",
            margin: "0 auto 40px"
          }}>
            Stop spending 6 months and $50k+ with sluggish agencies. We architect, design, build, and deploy your production-ready SaaS application using Next.js 15, Supabase, and Stripe Billing in 4 intensive weeks.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#9333ea",
                color: "#ffffff",
                padding: "18px 40px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 28px -6px rgba(147, 51, 234, 0.6)"
              }}
            >
              <span>Schedule Scope Consultation</span>
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
              <i className="fa-solid fa-laptop-code" style={{ color: "#c084fc" }}></i>
              <span>View Past SaaS Launches</span>
            </Link>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
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
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#34d399" }}>28 Days</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Guaranteed Delivery Time</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#c084fc" }}>$7,500</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Transparent Fixed Pricing</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#fde047" }}>Stripe Ready</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Subscriptions &amp; Customer Portal</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#38bdf8" }}>100%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Your Code &amp; IP</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Interactive MVP Cost & Scope Calculator ─── */}
      <section style={{ padding: "80px 20px", maxWidth: "1140px", margin: "0 auto" }}>
        <div className="mvp-card" style={{ padding: "40px 32px", border: "1px solid rgba(168, 85, 247, 0.25)" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span style={{ color: "#c084fc", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              TRANSPARENT SPRINT PRICING
            </span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", marginTop: "8px", color: "#ffffff" }}>
              Compare Agency Quotes vs ChittorTech 4-Week Sprint
            </h2>
            <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "15px" }}>
              Traditional agencies quote $45,000+ with 5-6 month delivery cycles. We build and deploy the same scope in 28 days flat.
            </p>
          </div>

          <div className="hub-calc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", alignItems: "center" }}>
            
            {/* Options */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ padding: "18px", background: "rgba(30, 41, 59, 0.5)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                  <div>
                    <h3 style={{ fontSize: "16px", color: "#ffffff", margin: 0 }}>Core Next.js 15 SaaS MVP</h3>
                    <div style={{ fontSize: "13px", color: "#94a3b8", marginTop: "4px" }}>Auth, Dashboard, DB, Stripe, Vercel Deploy</div>
                  </div>
                  <span style={{ color: "#34d399", fontWeight: 800, fontSize: "16px" }}>$7,500</span>
                </div>
              </div>

              <div
                onClick={() => setIncludeAi(!includeAi)}
                style={{
                  padding: "18px",
                  background: includeAi ? "rgba(147, 51, 234, 0.15)" : "rgba(30, 41, 59, 0.3)",
                  borderRadius: "12px",
                  border: includeAi ? "1px solid #c084fc" : "1px solid rgba(255, 255, 255, 0.08)",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <input type="checkbox" checked={includeAi} onChange={() => {}} style={{ accentColor: "#a855f7", width: "18px", height: "18px" }} />
                    <div>
                      <h3 style={{ fontSize: "15px", color: "#ffffff", margin: 0 }}>Add AI Agent / Vector RAG Module</h3>
                      <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "2px" }}>Groq sub-500ms inference, LangChain, Pinecone</div>
                    </div>
                  </div>
                  <span style={{ color: "#c084fc", fontWeight: 700, fontSize: "15px" }}>+$2,000</span>
                </div>
              </div>

              <div
                onClick={() => setIncludeMobile(!includeMobile)}
                style={{
                  padding: "18px",
                  background: includeMobile ? "rgba(147, 51, 234, 0.15)" : "rgba(30, 41, 59, 0.3)",
                  borderRadius: "12px",
                  border: includeMobile ? "1px solid #c084fc" : "1px solid rgba(255, 255, 255, 0.08)",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <input type="checkbox" checked={includeMobile} onChange={() => {}} style={{ accentColor: "#a855f7", width: "18px", height: "18px" }} />
                    <div>
                      <h3 style={{ fontSize: "15px", color: "#ffffff", margin: 0 }}>Add Companion Mobile App</h3>
                      <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "2px" }}>React Native / Expo for iOS &amp; Android</div>
                    </div>
                  </div>
                  <span style={{ color: "#c084fc", fontWeight: 700, fontSize: "15px" }}>+$3,500</span>
                </div>
              </div>
            </div>

            {/* Price Box */}
            <div className="hub-calc-summary" style={{
              background: "rgba(30, 41, 59, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "16px",
              padding: "28px"
            }}>
              <div className="hub-calc-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px", fontSize: "14px", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ color: "#94a3b8" }}>Traditional Agency Quote:</span>
                <span style={{ color: "#f87171", fontWeight: 700, textDecoration: "line-through" }}>{formatUSD(agencyCost)}</span>
              </div>
              <div className="hub-calc-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px", fontSize: "14px", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ color: "#94a3b8" }}>ChittorTech 28-Day Sprint:</span>
                <span style={{ color: "#34d399", fontWeight: 700 }}>{formatUSD(totalMvpCost)}</span>
              </div>
              <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.1)", margin: "16px 0" }} />
              <div>
                <div style={{ fontSize: "13px", color: "#c084fc", textTransform: "uppercase", fontWeight: 800 }}>
                  Total Estimated Capital Saved:
                </div>
                <div style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 900, color: "#ffffff", marginTop: "4px" }}>
                  {formatUSD(totalSavings)}
                </div>
                <div style={{ display: "inline-block", background: "rgba(52, 211, 153, 0.15)", color: "#34d399", padding: "4px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: 800, marginTop: "8px" }}>
                  Launch in 4 Weeks instead of 6 Months
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 4-Week Roadmap Timeline ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ color: "#c084fc", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            PRECISION EXECUTION PLAYBOOK
          </span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", marginTop: "8px", color: "#ffffff" }}>
            The 28-Day SaaS Engineering Roadmap
          </h2>
          <p style={{ maxWidth: "720px", margin: "12px auto 0", fontSize: "16px" }}>
            Every week has clearly defined deliverables, automated tests, and client review checkpoints.
          </p>
        </div>

        {/* Week Selector Tabs */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "36px" }}>
          {weeks.map((w, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedWeek(idx)}
              style={{
                background: selectedWeek === idx ? "#9333ea" : "rgba(15, 23, 42, 0.8)",
                color: selectedWeek === idx ? "#ffffff" : "#94a3b8",
                border: selectedWeek === idx ? "1px solid #c084fc" : "1px solid rgba(255, 255, 255, 0.1)",
                padding: "12px 24px",
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
              <i className={w.icon} style={{ color: selectedWeek === idx ? "#ffffff" : "#c084fc" }}></i>
              <span>{w.week}</span>
            </button>
          ))}
        </div>

        {/* Selected Week Card */}
        <div className="mvp-card" style={{ padding: "40px", border: "1px solid rgba(168, 85, 247, 0.3)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
            <div>
              <span style={{
                background: "rgba(168, 85, 247, 0.15)",
                color: "#c084fc",
                padding: "4px 14px",
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: 800,
                textTransform: "uppercase"
              }}>
                {weeks[selectedWeek].badge}
              </span>
              <h3 style={{ fontSize: "28px", marginTop: "12px", color: "#ffffff" }}>
                {weeks[selectedWeek].week}: {weeks[selectedWeek].title}
              </h3>
            </div>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#9333ea",
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
              <span>Lock In Your Sprint Slot</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <p style={{ fontSize: "16px", lineHeight: 1.7, marginBottom: "28px" }}>
            {weeks[selectedWeek].description}
          </p>

          <h4 style={{ fontSize: "16px", color: "#ffffff", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Week Deliverables &amp; Milestones:
          </h4>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px" }}>
            {weeks[selectedWeek].milestones.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <i className="fa-solid fa-circle-check" style={{ color: "#34d399", marginTop: "4px", fontSize: "15px" }}></i>
                <span style={{ fontSize: "14px", color: "#cbd5e1" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Founders Choose Our 4-Week Sprint ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", color: "#ffffff" }}>
            Engineered for Speed to First Paying Customer
          </h2>
          <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "16px" }}>
            Stop over-engineering before validation. Launch, test real market demand, and iterate.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          
          <div className="mvp-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(168, 85, 247, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-calendar-check" style={{ color: "#c084fc", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>Strict 28-Day Fixed Scope</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              Scope creep is the #1 killer of startups. We define an airtight sprint roadmap in Week 1, lock features, and execute relentlessly to ensure your SaaS goes live on Day 28 without delays.
            </p>
          </div>

          <div className="mvp-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(52, 211, 153, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-credit-card" style={{ color: "#34d399", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>Day-1 Monetization</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              Your MVP launches with production Stripe billing already wired up. Collect payments, manage subscriptions, and generate revenue from your very first batch of users.
            </p>
          </div>

          <div className="mvp-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(245, 158, 11, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-shield-halved" style={{ color: "#f59e0b", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>Clean, Investor-Ready Code</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              We write clean TypeScript, well-structured Next.js 15 App Router code, and comprehensive documentation. When you are ready to pitch VC investors or hire an in-house team, your codebase is ready.
            </p>
          </div>

        </div>
      </section>

      {/* ─── Executive FAQs ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "980px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", color: "#ffffff" }}>
            Frequently Asked Questions by SaaS Founders
          </h2>
          <p style={{ fontSize: "15px", marginTop: "8px" }}>
            Answers regarding sprint scoping, tech stack, and IP ownership.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="mvp-card"
              style={{
                padding: "24px",
                cursor: "pointer",
                border: openFaq === idx ? "1px solid rgba(168, 85, 247, 0.5)" : "1px solid rgba(255, 255, 255, 0.08)"
              }}
              onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                <h3 style={{ fontSize: "17px", color: "#ffffff", margin: 0 }}>
                  {faq.q}
                </h3>
                <i
                  className={`fa-solid ${openFaq === idx ? "fa-chevron-up" : "fa-chevron-down"}`}
                  style={{ color: "#c084fc", fontSize: "14px" }}
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
        background: "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.25) 0%, rgba(6, 11, 24, 1) 75%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4.5vw, 44px)", color: "#ffffff", marginBottom: "18px" }}>
            Ready to Launch Your SaaS in 28 Days?
          </h2>
          <p style={{ fontSize: "17px", color: "#cbd5e1 !important", maxWidth: "680px", margin: "0 auto 36px", lineHeight: 1.65 }}>
            Book a 30-minute scope consultation. We review your concept, define the 28-day sprint backlog, sign bilateral NDAs, and lock in your development slot.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#9333ea",
                color: "#ffffff",
                padding: "18px 42px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 28px -6px rgba(147, 51, 234, 0.6)"
              }}
            >
              <span>Schedule Scope Consultation</span>
              <span>&rarr;</span>
            </Link>

            <a
              href="https://wa.me/919929828456?text=Hello%20ChittorTech%2C%20I%20have%20a%20SaaS%20idea%20and%20want%20to%20launch%20it%20in%20a%204-week%20sprint."
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
