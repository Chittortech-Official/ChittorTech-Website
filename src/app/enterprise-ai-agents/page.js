"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export default function EnterpriseAIAgentsPage() {
  const [teamSize, setTeamSize] = useState(2);
  const [durationMonths, setDurationMonths] = useState(6);
  const [selectedAgent, setSelectedAgent] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // Enterprise AI Engineering Benchmark Rates:
  // US/EU AI Boutique Agency Consultant: ~$160/hr
  // ChittorTech Senior AI Specialist: ~$42/hr
  const hoursPerMonth = 160;
  const localRatePerHour = 160;
  const ctRatePerHour = 42;

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

  const agentTypes = [
    {
      id: "rag-agent",
      name: "Private Enterprise RAG & Knowledge Retrieval Agents",
      tabLabel: "Private RAG & Retrieval",
      badge: "Hybrid Vector Search, Zero Hallucination",
      icon: "fa-solid fa-database",
      description: "Index your internal documents, technical manuals, contracts, and knowledge bases into an air-gapped or private vector pipeline with citation-backed, zero-hallucination accuracy.",
      deliverables: [
        "Hybrid vector search combining dense embeddings with sparse BM25 keyword matching",
        "Sub-500ms retrieval and streaming responses powered by Groq LPU hardware",
        "Deterministic citation verification linking every AI statement back to original source files",
        "Automated PDF, Markdown, and tabular database document chunking and ingestion pipelines",
        "Complete enterprise data isolation with zero model training on proprietary corporate data"
      ],
      techSpecs: "Groq LPUs, Pinecone, Qdrant, LangChain, LlamaIndex, Python FastAPI, OpenAI Embeddings"
    },
    {
      id: "whatsapp-agent",
      name: "Omnichannel WhatsApp & Voice Conversational Agents",
      tabLabel: "WhatsApp & Voice AI",
      badge: "WhatsApp Cloud API, Real-Time Voice AI",
      icon: "fa-brands fa-whatsapp",
      description: "Autonomous customer service and sales agents operating 24/7 across WhatsApp, web chat, and voice telephony with sub-second response times and intelligent escalation.",
      deliverables: [
        "Automated 24/7 lead qualification, objection handling, and appointment booking via WhatsApp",
        "Sub-second voice agents integrating Whisper audio transcription and ultra-fast text-to-speech",
        "Intelligent human-in-the-loop escalation routing complex inquiries to human agents seamlessly",
        "Multi-language translation supporting English, Arabic, Spanish, French, and German",
        "Integration with Stripe for conversational checkout and instant invoice generation"
      ],
      techSpecs: "WhatsApp Cloud API, Whisper AI, ElevenLabs, Groq LPUs, WebSockets, Python"
    },
    {
      id: "workflow-agent",
      name: "Autonomous Task Execution & API Tool-Use Agents",
      tabLabel: "Autonomous Tool Agents",
      badge: "Function Calling, Multi-Agent Swarms",
      icon: "fa-solid fa-network-wired",
      description: "Agents that don't just chat—they act. Autonomous agents with function calling and API tool-use capabilities to execute multi-step business workflows automatically.",
      deliverables: [
        "Autonomous multi-step execution pipelines connecting directly to your internal REST/GraphQL APIs",
        "Structured JSON schema validation ensuring 100% deterministic function execution",
        "Automated error recovery and retry logic preventing agent execution loops",
        "Audit logging and trace observability monitoring every agent decision step via LangSmith",
        "Strict permission scoping preventing unauthorized database modifications"
      ],
      techSpecs: "LangGraph, CrewAI, Python, TypeScript, Docker, Redis, LangSmith Tracing"
    },
    {
      id: "fullstack-ai",
      name: "AI-Native Next.js 15 Web Dashboards & Copilots",
      tabLabel: "AI-Native Web Copilots",
      badge: "React Server Components, Streaming UI",
      icon: "fa-solid fa-laptop-code",
      description: "Embed generative copilots directly into your web applications with streaming markdown, interactive charts, and real-time generative UI components built on Next.js 15.",
      deliverables: [
        "Vercel AI SDK integration delivering instant streaming responses with zero latency flicker",
        "Generative UI rendering interactive React components directly within conversational chat feeds",
        "Role-based access control protecting proprietary enterprise prompt libraries",
        "Type-safe client-server synchronization using Next.js Server Actions",
        "Core Web Vitals optimization achieving 100/100 performance across all screen sizes"
      ],
      techSpecs: "Next.js 15, React 19, Vercel AI SDK, Tailwind CSS, TypeScript, Supabase"
    }
  ];

  const faqs = [
    {
      q: "How do you ensure enterprise data privacy and zero model training?",
      a: "We only utilize zero-data-retention enterprise API endpoints (such as OpenAI Enterprise, Claude Commercial API, and Groq Cloud). Your proprietary corporate data, PDFs, and customer transcripts are never used to train or fine-tune public foundation models."
    },
    {
      q: "How does ChittorTech achieve sub-500ms AI response speeds?",
      a: "Traditional cloud LLMs suffer from 2-4 second latency. We architect inference pipelines leveraging Groq Language Processing Units (LPUs), streaming WebSockets, and optimized vector caching, slashing time-to-first-token (TTFT) to under 200ms."
    },
    {
      q: "Can your AI agents integrate directly with our existing internal software?",
      a: "Yes. Using advanced function calling and tool-use architectures (LangGraph, CrewAI), our agents can read from and write to your internal databases, ticketing systems, calendar APIs, and cloud microservices securely."
    },
    {
      q: "How do you eliminate AI hallucinations in business applications?",
      a: "We implement hybrid RAG architectures combining dense vector similarity with sparse keyword retrieval, strict prompt guardrails, and deterministic citation verification. If the requested information does not exist in your verified knowledge base, the agent explicitly states so."
    },
    {
      q: "What is your pricing and engagement model for AI development?",
      a: "We offer dedicated AI engineering pods at flat hourly rates ($42/hr) or fixed-scope sprint deliverables. You receive full source code ownership, private model configuration files, and complete deployment architecture."
    },
    {
      q: "Can we test an AI prototype before signing a contract?",
      a: "Yes. We offer a 2-Week Risk-Free Technical Pilot. We will build a proof-of-concept RAG pipeline or WhatsApp bot using a sample of your documentation. If not completely satisfied with the speed and accuracy, you pay nothing."
    }
  ];

  return (
    <div className="ai-agents-page" style={{
      backgroundColor: "#060b18",
      color: "#f8fafc",
      minHeight: "100vh",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      
      {/* ─── High-Contrast Overrides ─── */}
      <style>{`
        .ai-agents-page h1, .ai-agents-page h2, .ai-agents-page h3, .ai-agents-page h4, .ai-agents-page h5 {
          color: #ffffff !important;
          font-weight: 800;
        }
        .ai-agents-page p {
          color: #94a3b8 !important;
        }
        .violet-gradient-text {
          background: linear-gradient(135deg, #a855f7 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cyan-gradient-text {
          background: linear-gradient(135deg, #38bdf8 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .ai-card {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .ai-card:hover {
          border-color: rgba(168, 85, 247, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
        }
      `}</style>

      {/* ─── Hero Section ─── */}
      <section style={{
        position: "relative",
        padding: "110px 20px 85px",
        background: "radial-gradient(circle at 50% 15%, rgba(124, 58, 237, 0.25) 0%, rgba(6, 11, 24, 1) 75%)",
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
            <span style={{ fontSize: "18px" }}>🧠</span>
            <span>AUTONOMOUS ENTERPRISE AI ARCHITECTURE</span>
            <span style={{ color: "#64748b" }}>•</span>
            <span style={{ color: "#34d399" }}>Groq LPUs &lt; 500ms • Private RAG</span>
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
            Custom Autonomous AI Agents &amp; <span className="violet-gradient-text">Private Low-Latency LLMs</span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            color: "#cbd5e1 !important",
            maxWidth: "880px",
            margin: "0 auto 40px"
          }}>
            Move beyond generic ChatGPT wrappers. Engineer ultra-fast autonomous AI agents, private enterprise RAG retrieval pipelines, and WhatsApp customer service bots with sub-500ms response times and zero client data retention.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#7c3aed",
                color: "#ffffff",
                padding: "18px 40px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 28px -6px rgba(124, 58, 237, 0.6)"
              }}
            >
              <span>Schedule AI Architecture Call</span>
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
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#34d399" }}>&lt; 500ms</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Groq LPU Inference Speeds</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#c084fc" }}>0% Training</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Zero Client Data Retention</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#fde047" }}>Private RAG</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Hybrid Vector Search</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#38bdf8" }}>74%</div>
              <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Savings vs US AI Agencies</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Interactive AI Cost Calculator ─── */}
      <section style={{ padding: "80px 20px", maxWidth: "1140px", margin: "0 auto" }}>
        <div className="ai-card" style={{ padding: "40px 32px", border: "1px solid rgba(168, 85, 247, 0.25)" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span style={{ color: "#c084fc", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              AI ENGINEERING LEVERAGE CALCULATOR
            </span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", marginTop: "8px", color: "#ffffff" }}>
              Compare AI Boutique Consulting Rates vs ChittorTech AI Pods
            </h2>
            <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "15px" }}>
              Benchmark based on standard Western boutique AI agency rates of <strong>$160/hr</strong> vs ChittorTech’s dedicated senior AI specialist pod rate of <strong>$42/hr</strong>.
            </p>
          </div>

          <div className="hub-calc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", alignItems: "center" }}>
            
            {/* Sliders */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div>
                <div className="hub-slider-label-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontWeight: 700, flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ color: "#ffffff" }}>Number of AI Engineers:</span>
                  <span style={{ color: "#c084fc", fontSize: "18px" }}>{teamSize} {teamSize === 1 ? "Specialist" : "Specialists"}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value) || 1)}
                  style={{ width: "100%", accentColor: "#c084fc", cursor: "pointer", touchAction: "pan-y" }}
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
                  <span style={{ color: "#c084fc", fontSize: "18px" }}>{durationMonths} Months</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value) || 1)}
                  style={{ width: "100%", accentColor: "#c084fc", cursor: "pointer", touchAction: "pan-y" }}
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
                <span style={{ color: "#94a3b8" }}>Boutique AI Agency Cost:</span>
                <span style={{ color: "#f87171", fontWeight: 700, textDecoration: "line-through" }}>{formatUSD(localTotal)}</span>
              </div>
              <div className="hub-calc-row" style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px", fontSize: "14px", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ color: "#94a3b8" }}>ChittorTech AI Specialist Pod:</span>
                <span style={{ color: "#34d399", fontWeight: 700 }}>{formatUSD(ctTotal)}</span>
              </div>
              <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.1)", margin: "16px 0" }} />
              <div>
                <div style={{ fontSize: "13px", color: "#c084fc", textTransform: "uppercase", fontWeight: 800 }}>
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

      {/* ─── Core AI Capabilities ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ color: "#c084fc", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            SPECIALIZED AI CAPABILITIES
          </span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", marginTop: "8px", color: "#ffffff" }}>
            Enterprise AI Systems Engineered for Production
          </h2>
          <p style={{ maxWidth: "720px", margin: "12px auto 0", fontSize: "16px" }}>
            From private vector RAG pipelines to autonomous API tool-use agents, we engineer production systems that deliver enterprise stability.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="hub-tabs-wrap" style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "36px" }}>
          {agentTypes.map((srv, idx) => (
            <button
              key={srv.id}
              onClick={() => setSelectedAgent(idx)}
              style={{
                background: selectedAgent === idx ? "#7c3aed" : "rgba(15, 23, 42, 0.8)",
                color: selectedAgent === idx ? "#ffffff" : "#94a3b8",
                border: selectedAgent === idx ? "1px solid #c084fc" : "1px solid rgba(255, 255, 255, 0.1)",
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
              <i className={srv.icon} style={{ color: selectedAgent === idx ? "#ffffff" : "#c084fc" }}></i>
              <span>{srv.tabLabel || srv.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Service Card */}
        <div className="ai-card" style={{ padding: "40px", border: "1px solid rgba(168, 85, 247, 0.3)" }}>
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
                {agentTypes[selectedAgent].badge}
              </span>
              <h3 style={{ fontSize: "28px", marginTop: "12px", color: "#ffffff" }}>
                {agentTypes[selectedAgent].name}
              </h3>
            </div>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#7c3aed",
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
              <span>Consult an AI Architect</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <p style={{ fontSize: "16px", lineHeight: 1.7, marginBottom: "28px" }}>
            {agentTypes[selectedAgent].description}
          </p>

          <h4 style={{ fontSize: "16px", color: "#ffffff", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            What We Deliver:
          </h4>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px", marginBottom: "32px" }}>
            {agentTypes[selectedAgent].deliverables.map((item, i) => (
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
            <strong style={{ color: "#ffffff" }}>Target Tech Stack:</strong> {agentTypes[selectedAgent].techSpecs}
          </div>
        </div>
      </section>

      {/* ─── Why Enterprises Choose ChittorTech AI ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", color: "#ffffff" }}>
            Engineered for Production Stability &amp; Strict Privacy
          </h2>
          <p style={{ maxWidth: "680px", margin: "10px auto 0", fontSize: "16px" }}>
            Avoid slow prototypes and build enterprise-grade autonomous systems that scale.
          </p>
        </div>

        <div className="hub-features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          
          <div className="ai-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(168, 85, 247, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-bolt" style={{ color: "#c084fc", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>Groq Sub-500ms Speeds</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              No more awkward multi-second waiting spinners. We deploy models on Groq LPUs delivering 500+ tokens per second, enabling natural voice conversations and instant text generation.
            </p>
          </div>

          <div className="ai-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(52, 211, 153, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-user-shield" style={{ color: "#34d399", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>Zero Client Data Training</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              Your IP and customer conversations remain strictly yours. We execute enterprise commercial agreements ensuring zero telemetry or training is performed on your proprietary data.
            </p>
          </div>

          <div className="ai-card" style={{ padding: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(245, 158, 11, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <i className="fa-solid fa-code-merge" style={{ color: "#f59e0b", fontSize: "20px" }}></i>
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>Direct API Execution</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65 }}>
              Our AI agents are autonomous workers. They connect directly to your webhooks, relational databases, and third-party APIs using LangGraph function calling to complete complex tasks autonomously.
            </p>
          </div>

        </div>
      </section>

      {/* ─── Executive FAQs ─── */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "980px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", color: "#ffffff" }}>
            Frequently Asked Questions by AI Leaders
          </h2>
          <p style={{ fontSize: "15px", marginTop: "8px" }}>
            Answers regarding latency, privacy guarantees, and pilot projects.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="ai-card"
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
        background: "radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.25) 0%, rgba(6, 11, 24, 1) 75%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4.5vw, 44px)", color: "#ffffff", marginBottom: "18px" }}>
            Ready to Deploy Autonomous AI Agents for Your Enterprise?
          </h2>
          <p style={{ fontSize: "17px", color: "#cbd5e1 !important", maxWidth: "680px", margin: "0 auto 36px", lineHeight: 1.65 }}>
            Book an introductory AI architecture consultation. We execute mutual NDAs within 2 hours and can kick off your dedicated AI pod in under 72 hours.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: "#7c3aed",
                color: "#ffffff",
                padding: "18px 42px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 28px -6px rgba(124, 58, 237, 0.6)"
              }}
            >
              <span>Schedule Architecture Consultation</span>
              <span>&rarr;</span>
            </Link>

            <a
              href="https://wa.me/919929828456?text=Hello%20ChittorTech%2C%20we%20are%20interested%20in%20building%20enterprise%20AI%20agents."
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
