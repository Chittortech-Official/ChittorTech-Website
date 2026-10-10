"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export default function DedicatedTechTeamsPage() {
  const [teamSize, setTeamSize] = useState(3);
  const [durationMonths, setDurationMonths] = useState(6);
  const [selectedService, setSelectedService] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // Global Staff Augmentation Benchmark:
  // US/EU/UK In-House Senior Engineer: ~$150/hr ($200k+ base + recruiter + benefits)
  // ChittorTech Senior Developer Pod: ~$38/hr
  const hoursPerMonth = 160;
  const localRatePerHour = 150;
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
    "id": "nextjs-pods",
    "tabLabel": "Next.js Pods",
    "name": "Senior Full-Stack Next.js 15 & React 19 Dedicated Pods",
    "badge": "Top 3% Engineers, Full-Time Dedicated",
    "icon": "fa-solid fa-code",
    "description": "Deploy dedicated senior full-stack engineers in Next.js 15, TypeScript, and React Server Components who seamlessly integrate into your GitHub, Jira, and Slack within 72 hours.",
    "deliverables": [
      "Pre-vetted senior software engineers with 5+ years production Next.js & React experience",
      "Direct integration into your daily standups, sprint planning, and pull request reviews",
      "100% daily synchronous overlap during your primary core engineering hours",
      "Strict non-disclosure agreements (NDA) and 100% intellectual property assignment",
      "2-week risk-free trial: evaluate your dedicated pod with zero financial risk"
    ],
    "techSpecs": "Next.js 15, React 19, TypeScript, Tailwind CSS, Supabase, PostgreSQL, GitHub"
  },
  {
    "id": "ai-data-pods",
    "tabLabel": "AI Specialists",
    "name": "Generative AI, Python & Autonomous LLM Specialists",
    "badge": "Groq LPUs, LangChain & Vector RAG",
    "icon": "fa-solid fa-brain",
    "description": "Hire specialized AI engineers who architect private RAG pipelines, fine-tune open-source models, and integrate Groq LPU low-latency inference directly into your products.",
    "deliverables": [
      "Senior Python, PyTorch, and LangChain engineers with proven LLM production deployments",
      "Vector database architecture: Pinecone, Weaviate, Qdrant, and pgvector optimization",
      "Custom function calling and autonomous agent workflows with sub-second response times",
      "Zero proprietary training data leakage with enterprise private VPC isolation",
      "Daily reviewed PRs and comprehensive unit test coverage with pytest"
    ],
    "techSpecs": "Python, FastAPI, PyTorch, LangChain, Pinecone, Groq LPUs, Llama 3.3"
  },
  {
    "id": "mobile-pods",
    "tabLabel": "Mobile Pods",
    "name": "React Native & Mobile App Development Engineers",
    "badge": "React Native, Expo & Biometrics",
    "icon": "fa-solid fa-mobile-screen-button",
    "description": "Deploy dedicated mobile app engineers who build fluid, 60fps consumer and enterprise apps for iOS and Android with single clean TypeScript codebases.",
    "deliverables": [
      "Senior React Native and Expo specialists with published apps in App Store and Google Play",
      "Native payment gateway integration: Apple Pay, Google Pay, and Stripe SDKs",
      "Biometric authentication, secure hardware keychain storage, and offline SQLite caching",
      "End-to-end automated mobile testing with Maestro and Detox",
      "Fast-track publishing and App Store guidelines compliance management"
    ],
    "techSpecs": "React Native, Expo, TypeScript, iOS Swift Bridge, Android Kotlin, Firebase"
  },
  {
    "id": "devops-pods",
    "tabLabel": "Cloud & DevOps",
    "name": "DevOps, Cloudflare & Cloud Infrastructure Architects",
    "badge": "AWS, Docker, Kubernetes & Terraform",
    "icon": "fa-solid fa-server",
    "description": "Senior DevOps and cloud architects who automate your CI/CD pipelines, containerize microservices, optimize cloud bills, and maintain 99.99% system availability.",
    "deliverables": [
      "Infrastructure as Code (IaC) using Terraform for repeatable, automated cloud deployments",
      "Automated Docker CI/CD deployment pipelines on GitHub Actions with zero-downtime rollouts",
      "PostgreSQL connection pooling, read replicas, and Redis in-memory acceleration",
      "Cloudflare Edge WAF, CDN caching, and DDoS mitigation rules",
      "24/7 synthetic monitoring, Datadog observability, and automated incident alert paging"
    ],
    "techSpecs": "AWS, GCP, Cloudflare Edge, Docker, Kubernetes, Terraform, Datadog"
  },
  {
    "id": "qa-pods",
    "tabLabel": "QA & Testing",
    "name": "Automated QA, Playwright & Regression Testing Pods",
    "badge": "Playwright, Jest & 100% CI Coverage",
    "icon": "fa-solid fa-vial-circle-check",
    "description": "Senior QA automation engineers who build robust end-to-end testing suites, eliminating manual QA bottlenecks and ensuring every release is production-ready.",
    "deliverables": [
      "Automated end-to-end regression test suites with Playwright running on every pull request",
      "API contract testing and load testing with k6 validating thousands of concurrent users",
      "Cross-browser and mobile responsive test matrices ensuring flawless device compatibility",
      "Zero-defect releases with automated pull request blocking on test failure",
      "Detailed test coverage reports integrated directly into your GitHub Actions pipeline"
    ],
    "techSpecs": "Playwright, Jest, k6, Postman, GitHub Actions, TypeScript"
  }
];

  const faqs = [
    {
      q: "How quickly can ChittorTech deploy a dedicated engineering pod?",
      a: "We can onboard and deploy a vetted, dedicated engineering pod within 72 hours. We match pre-evaluated senior engineers to your exact tech stack requirements (Next.js 15, React Native, AI, Cloudflare/AWS), sign mutual NDAs, and initiate sprint onboarding immediately."
    },
    {
      q: "How does the 2-Week Risk-Free Trial work?",
      a: "We provide a 2-Week Risk-Free Technical Pilot. Assign real tasks and pull requests from your sprint backlog. If you are not 100% satisfied with our code quality, communication, and delivery speed, you can walk away paying zero."
    },
    {
      q: "How do your dedicated teams integrate with our internal developers?",
      a: "Our engineers become a seamless extension of your team. They join your Slack channels, attend daily standups, manage tickets in Jira or Linear, and submit PRs directly to your GitHub or GitLab repositories under your code review standards."
    },
    {
      q: "What is your policy on intellectual property and code ownership?",
      a: "You retain 100% ownership of all source code, architecture, and intellectual property. All Master Service Agreements include comprehensive work-for-hire assignment clauses signed before work begins."
    },
    {
      q: "Can we scale team size up or down as our needs change?",
      a: "Yes. Our agreements operate on flexible 30-day rolling terms. You can scale your dedicated pod from 1 to 10+ engineers as your roadmap accelerates, without recruiting fees, severance, or long-term lock-in."
    },
    {
      q: "How do your rates compare to traditional tech recruiting agencies?",
      a: "Traditional recruiting agencies charge 20-30% placement fees upfront, and contractor brokers take massive margins. ChittorTech provides direct access to dedicated senior engineering pods at transparent flat rates of $38/hr—saving you up to 75% on engineering payroll."
    }
  ];

  return (
    <div className="dedicated-page" style={{
      backgroundColor: "#060b18",
      color: "#f8fafc",
      minHeight: "100vh",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      
      {/* ─── High-Contrast Overrides ─── */}
      <style>{`
        .dedicated-page h1, .dedicated-page h2, .dedicated-page h3, .dedicated-page h4, .dedicated-page h5 {
          color: #ffffff !important;
          font-weight: 800;
        }
        .dedicated-page p {
          color: #94a3b8 !important;
        }
        .indigo-gradient-text {
          background: linear-gradient(135deg, #818cf8 0%, #4f46e5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cyan-gradient-text {
          background: linear-gradient(135deg, #38bdf8 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .dedicated-card {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dedicated-card:hover {
          border-color: rgba(129, 140, 248, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
        }
      `}</style>

      {/* ─── Hero Section ─── */}
      <section style={{
        position: "relative",
        padding: "110px 20px 85px",
        background: "radial-gradient(circle at 50% 15%, rgba(79, 70, 229, 0.25) 0%, rgba(6, 11, 24, 1) 75%)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        overflow: "hidden"
      }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(129, 140, 248, 0.4)",
            padding: "8px 22px",
            borderRadius: "9999px",
            fontSize: "14px",
            fontWeight: 700,
            color: "#818cf8",
            marginBottom: "28px"
          }}>
            <span style={{ fontSize: "18px" }}>⚡</span>
            <span>DEDICATED SENIOR ENGINEERING PODS</span>
            <span style={{ color: "#64748b" }}>•</span>
            <span style={{ color: "#34d399" }}>72-Hour Deployment • 2-Week Risk-Free Trial</span>
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
            Scale Your Engineering Output with <span className="indigo-gradient-text">Dedicated Senior Tech Pods</span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            color: "#cbd5e1 !important",
            maxWidth: "880px",
            margin: "0 auto 40px"
          }}>
            Bypass recruiting bottlenecks, recruiter commissions, and payroll taxes. Deploy dedicated senior Next.js full-stack developers, mobile engineers, and AI architects who integrate directly into your sprint workflows within 72 hours.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#4f46e5",
                color: "#ffffff",
                padding: "18px 40px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 28px -6px rgba(79, 70, 229, 0.6)"
              }}
            >
              <span>Schedule Team Consultation</span>
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
              <i className="fa-solid fa-laptop-code" style={{ color: "#818cf8" }}></i>
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
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#34d399" }}>75%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Average Payroll Saved</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#818cf8" }}>72 Hours</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Pod Deployment Time</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#fde047" }}>2-Week Pilot</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>100% Risk-Free Guarantee</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#a855f7" }}>100%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Client IP &amp; Code Ownership</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Interactive Dedicated Pod Cost Calculator ─── */}
      <section style={{ padding: "80px 20px", maxWidth: "1140px", margin: "0 auto" }}>
        <div className="dedicated-card" style={{ padding: "40px 32px", border: "1px solid rgba(129, 140, 248, 0.25)" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span style={{ color: "#818cf8", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              STAFF AUGMENTATION ROI CALCULATOR
            </span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", marginTop: "8px", color: "#ffffff" }}>
              Compare In-House US/EU Hiring vs ChittorTech Dedicated Pods
            </h2>
            <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "15px" }}>
              Benchmark based on standard Western senior engineer costs of <strong>$150/hr</strong> (inclusive of salary, recruiter fees, healthcare, taxes, benefits) vs ChittorTech’s dedicated senior pod rate of <strong>$38/hr</strong>.
            </p>
          </div>

          <div className="hub-calc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", alignItems: "center" }}>
            
            {/* Sliders */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div>
                <div className="hub-slider-label-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontWeight: 700, flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ color: "#ffffff" }}>Number of Dedicated Engineers:</span>
                  <span style={{ color: "#818cf8", fontSize: "18px" }}>{teamSize} {teamSize === 1 ? "Developer" : "Developers"}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value) || 1)}
                  style={{ width: "100%", accentColor: "#818cf8", cursor: "pointer", touchAction: "pan-y" }}
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
                  <span style={{ color: "#818cf8", fontSize: "18px" }}>{durationMonths} Months</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value) || 1)}
                  style={{ width: "100%", accentColor: "#818cf8", cursor: "pointer", touchAction: "pan-y" }}
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
                <span style={{ color: "#94a3b8" }}>In-House Hiring Cost:</span>
                <span style={{ color: "#f87171", fontWeight: 700, textDecoration: "line-through" }}>{formatUSD(localTotal)}</span>
              </div>
              <div className="hub-calc-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px", fontSize: "14px", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ color: "#94a3b8" }}>ChittorTech Dedicated Pod:</span>
                <span style={{ color: "#34d399", fontWeight: 700 }}>{formatUSD(ctTotal)}</span>
              </div>
              <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.1)", margin: "16px 0" }} />
              <div>
                <div style={{ fontSize: "13px", color: "#818cf8", textTransform: "uppercase", fontWeight: 800 }}>
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
          <span style={{ color: "#818cf8", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            SPECIALIZED ENGINEERING ROLES
          </span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", marginTop: "8px", color: "#ffffff" }}>
            Autonomous Engineering Pods Ready to Plug into Your Sprints
          </h2>
          <p style={{ maxWidth: "720px", margin: "12px auto 0", fontSize: "16px" }}>
            From full-stack Next.js developers to low-latency AI specialists, we deploy pre-vetted senior talent ready to commit code from day one.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="hub-tabs-wrap" style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "36px" }}>
          {services.map((srv, idx) => (
            <button
              key={srv.id}
              onClick={() => setSelectedService(idx)}
              style={{
                background: selectedService === idx ? "#4f46e5" : "rgba(15, 23, 42, 0.8)",
                color: selectedService === idx ? "#ffffff" : "#94a3b8",
                border: selectedService === idx ? "1px solid #818cf8" : "1px solid rgba(255, 255, 255, 0.1)",
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
              <i className={srv.icon} style={{ color: selectedService === idx ? "#ffffff" : "#818cf8" }}></i>
              <span>{srv.tabLabel || srv.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Service Card */}
        <div className="dedicated-card" style={{ padding: "40px", border: "1px solid rgba(129, 140, 248, 0.3)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
            <div>
              <span style={{
                background: "rgba(129, 140, 248, 0.15)",
                color: "#818cf8",
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
                backgroundColor: "#4f46e5",
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

      {/* ─── Why Tech Leaders Choose ChittorTech Dedicated Pods ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", color: "#ffffff" }}>
            Engineered for CTOs Who Need Rapid Velocity
          </h2>
          <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "16px" }}>
            Eliminate endless recruitment screening, agency markups, and long-term HR commitments.
          </p>
        </div>

        <div className="hub-features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          
          <div className="dedicated-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(129, 140, 248, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-bolt" style={{ color: "#818cf8", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>72-Hour Rapid Onboarding</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              No 3-month hiring delays. We match pre-vetted senior developers to your exact requirements, grant repository access, and have them pushing pull requests within 72 hours of contract execution.
            </p>
          </div>

          <div className="dedicated-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(52, 211, 153, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-shield-halved" style={{ color: "#34d399", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>2-Week Risk-Free Trial</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              Evaluate code quality and velocity first-hand in your active repositories. If your dedicated pod does not exceed your engineering expectations within 14 days, you owe nothing.
            </p>
          </div>

          <div className="dedicated-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(245, 158, 11, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-file-contract" style={{ color: "#f59e0b", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>Zero Recruiter Fees or Equity</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              No recruiter placement fees, no stock option dilution, and no severance liabilities. Transparent flat hourly billing on simple 30-day rolling terms.
            </p>
          </div>

        </div>
      </section>

      {/* ─── Executive FAQs ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "980px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", color: "#ffffff" }}>
            Frequently Asked Questions by Engineering Leaders
          </h2>
          <p style={{ fontSize: "15px", marginTop: "8px" }}>
            Clear details regarding onboarding, trial sprints, and team management.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="dedicated-card"
              style={{
                padding: "24px",
                cursor: "pointer",
                border: openFaq === idx ? "1px solid rgba(129, 140, 248, 0.5)" : "1px solid rgba(255, 255, 255, 0.08)"
              }}
              onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                <h3 style={{ fontSize: "17px", color: "#ffffff", margin: 0 }}>
                  {faq.q}
                </h3>
                <i
                  className={`fa-solid ${openFaq === idx ? "fa-chevron-up" : "fa-chevron-down"}`}
                  style={{ color: "#818cf8", fontSize: "14px" }}
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
        background: "radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.25) 0%, rgba(6, 11, 24, 1) 75%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4.5vw, 44px)", color: "#ffffff", marginBottom: "18px" }}>
            Ready to Deploy Your Dedicated Tech Pod in 72 Hours?
          </h2>
          <p style={{ fontSize: "17px", color: "#cbd5e1 !important", maxWidth: "680px", margin: "0 auto 36px", lineHeight: 1.65 }}>
            Book an introductory technical consultation with our engineering leadership. We execute bilateral NDAs within 2 hours and can deploy your dedicated pod in under 72 hours.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#4f46e5",
                color: "#ffffff",
                padding: "18px 42px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 28px -6px rgba(79, 70, 229, 0.6)"
              }}
            >
              <span>Schedule Architecture Consultation</span>
              <span>&rarr;</span>
            </Link>

            <a
              href="https://wa.me/919929828456?text=Hello%20ChittorTech%2C%20we%20are%20interested%20in%20deploying%20a%20dedicated%20engineering%20pod."
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
