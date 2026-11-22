"use client";

import React from "react";
import Link from "next/link";

const advisors = [
  {
    id: "navneet",
    slug: "navneet-sharma",
    initials: "NS",
    name: "Navneet Sharma",
    role: "Software Engineer II",
    org: "Microsoft",
    linkedin: "https://www.linkedin.com/in/navneetsharma98/",
    accentColor: "#059669",
    lightBg: "#fafffe",
    tagBg: "#ecfdf5",
    tagBorder: "#a7f3d0",
    tagColor: "#047857",
    badgeBg: "#ecfdf5",
    badgeBorder: "#a7f3d0",
    badgeColor: "#047857",
    avatarGrad: "linear-gradient(135deg,#047857,#059669)",
    avatarShadow: "0 6px 18px rgba(5,150,105,0.25)",
    headline: "Microsoft Sentinel · AI-first Security Platform · Enterprise Scale",
    education: "IIT Mandi",
    eduSub: "B.Tech · Computer Science & Management",
    eduNote: "CGPA 8.23 · 🏆 Inter-IIT Meet Awardee",
    track: ["Microsoft", "Tata 1mg", "Optum"],
    summary: "Navneet brings 5+ years of enterprise engineering in distributed systems, agentic AI security, and large-scale cloud infrastructure. Advises on cloud-native security, low-latency microservices, and DevOps automation.",
    domains: [
      { icon: "🛡️", title: "Enterprise Security & AI", color: "#059669", desc: "Zero-Trust security, threat detection, and agentic AI platforms at Microsoft Sentinel scale." },
      { icon: "☁️", title: "Multi-Cloud Infrastructure", color: "#2563eb", desc: "Azure Data Factory, Key Vaults, Virtual Networks, and high-performance SQL/NoSQL workloads." },
      { icon: "⚡", title: "Backend Microservices", color: "#d97706", desc: "High-throughput REST APIs in Python Sanic, Java Spring Boot, and Golang; Kafka & SQS messaging." },
      { icon: "🔧", title: "DevOps & Automation", color: "#7c3aed", desc: "Kubernetes orchestration, Istio Blue-Green deployments, Terraform IaC, Jenkins CI/CD." },
    ],
    skills: ["Python", "Java Spring Boot", "Golang", "Microsoft Azure", "AWS", "Kubernetes", "Terraform", "Kafka", "Microsoft Sentinel"],
    certs: [],
  },
  {
    id: "ronak",
    slug: "ronak-sharma",
    initials: "RS",
    name: "Ronak Sharma",
    role: "Senior Transformation Analyst",
    org: "Accenture Strategy & Consulting",
    linkedin: "https://www.linkedin.com/in/ronsaa/",
    accentColor: "#0284c7",
    lightBg: "#fafcff",
    tagBg: "#e0f2fe",
    tagBorder: "#bae6fd",
    tagColor: "#0369a1",
    badgeBg: "#e0f2fe",
    badgeBorder: "#bae6fd",
    badgeColor: "#0369a1",
    avatarGrad: "linear-gradient(135deg,#0369a1,#0284c7)",
    avatarShadow: "0 6px 18px rgba(2,132,199,0.25)",
    headline: "Global Network · Cloud Architecture & FinOps · ex-Google · ex-IBM",
    education: "Rajasthan Technical University (RTU)",
    eduSub: "B.E. · Computer Science (GIT Jaipur)",
    eduNote: "📜 58+ Cloud Certifications",
    track: ["Accenture", "Google", "IBM", "TresVista"],
    summary: "Ronak brings 5+ years of enterprise cloud consulting across AWS, Azure, and GCP. Advises on multi-cloud FinOps, migration roadmaps, system resiliency, and enterprise modernization strategies.",
    domains: [
      { icon: "☁️", title: "Multi-Cloud & Migration", color: "#0284c7", desc: "Migration roadmaps across AWS, Azure, GCP; monolith-to-microservices modernization." },
      { icon: "💰", title: "FinOps & Cloud Economics", color: "#d97706", desc: "Cloud cost optimization, spend forecasting, FinOps operating models, ROI maximization." },
      { icon: "🏗️", title: "Platform Resiliency", color: "#059669", desc: "Workload resiliency assessments, disaster recovery, Jenkins/Ansible/Atlassian toolchains." },
      { icon: "🤖", title: "AI & Cloud Modernization", color: "#7c3aed", desc: "Agentic AI on AWS/Azure, IBM watsonx integrations, Docker/ECS containerization." },
    ],
    skills: ["AWS Solutions Architect Pro", "Azure Solutions Architect Expert", "Google Cloud (GCP)", "FinOps", "Cloud Migration", "Docker & ECS", "Jenkins & Ansible"],
    certs: ["AWS Pro", "Azure Expert", "GCP", "FinOps"],
  },
  {
    id: "ananya",
    slug: "ananya-sharma",
    initials: "AS",
    name: "Ananya Sharma",
    role: "Senior Software Engineer",
    org: "Visa",
    linkedin: "https://www.linkedin.com/in/ananya-sharma-16ab62120/",
    accentColor: "#7c3aed",
    lightBg: "#fdfaff",
    tagBg: "#f5f3ff",
    tagBorder: "#ddd6fe",
    tagColor: "#6d28d9",
    badgeBg: "#f5f3ff",
    badgeBorder: "#ddd6fe",
    badgeColor: "#6d28d9",
    avatarGrad: "linear-gradient(135deg,#6d28d9,#7c3aed)",
    avatarShadow: "0 6px 18px rgba(124,58,237,0.25)",
    headline: "Enterprise Platforms & Workflow Automation · Generative AI · ex-KPMG · ex-Nokia",
    education: "Chitkara University",
    eduSub: "B.E. · Computer Science",
    eduNote: "Grade: 8.2 · Udacity Full Stack Nanodegree",
    track: ["Visa", "KPMG India", "Nokia", "Net Solutions"],
    summary: "Ananya brings 8+ years of full-stack enterprise engineering at Visa. Reduced manual effort by 70% through workflow automation. Advises on Python/Django backend systems, Angular frontend, and Generative AI PoCs.",
    domains: [
      { icon: "🏗️", title: "Enterprise Full-Stack Engineering", color: "#7c3aed", desc: "Scalable backend and workflow solutions across Navigator, Vantage, and EASApp at Visa." },
      { icon: "⚡", title: "Workflow & Process Automation", color: "#d97706", desc: "Reduced manual effort by 70% via XML processing, approval orchestration, and audit tracking." },
      { icon: "🤖", title: "Generative AI & AI Agents", color: "#059669", desc: "AI-driven PoCs using GenAI technologies, evaluation frameworks, and enterprise chatbot architectures." },
      { icon: "🐍", title: "Python & Django Backend", color: "#0284c7", desc: "REST API development, database optimization, RBAC implementation, and release management." },
    ],
    skills: ["Python", "Django", "Angular", "JavaScript", "REST APIs", "Workflow Automation", "Generative AI", "AI Agents", "Full-Stack Development"],
    certs: ["Azure Developer Associate", "Azure Data Fundamentals", "Stanford CS101"],
  },
  {
    id: "ayush",
    slug: "ayush-sharma",
    initials: "AS",
    name: "Ayush Sharma",
    role: "Principal Product Manager",
    org: "BrowserStack",
    linkedin: "https://www.linkedin.com/in/ayushsharma2505/",
    accentColor: "#0891b2",
    lightBg: "#f0fbff",
    tagBg: "#ecfeff",
    tagBorder: "#a5f3fc",
    tagColor: "#0e7490",
    badgeBg: "#ecfeff",
    badgeBorder: "#a5f3fc",
    badgeColor: "#0e7490",
    avatarGrad: "linear-gradient(135deg,#0e7490,#0891b2)",
    avatarShadow: "0 6px 18px rgba(8,145,178,0.25)",
    headline: "AI Agents · Multi-Agent Systems · B2B SaaS · ex-xto10x · ex-MakeMyTrip",
    education: "NSIT Delhi",
    eduSub: "B.E. · Computer Engineering",
    eduNote: "Netaji Subhas Institute of Technology",
    track: ["BrowserStack", "xto10x", "MakeMyTrip"],
    summary: "Ayush is a 10+ year product & engineering leader. At BrowserStack: AI revenue 34%→54% QoQ, QA productivity +70%, adoption 10%→90% in 6 months, 250+ customers. Built MakeMyTrip's UPI platform & TripMoney lending.",
    domains: [
      { icon: "🤖", title: "AI Agents & Multi-Agent Systems", color: "#0891b2", desc: "Testcase Generator Agent (91% accuracy), Deduplication Agent, and enterprise agentic AI PoCs at BrowserStack." },
      { icon: "📈", title: "B2B SaaS Product Growth", color: "#059669", desc: "Scaled PeopleCues from 30→200 companies; 3x revenue growth; NPS from -21 to +33 at xto10x." },
      { icon: "💳", title: "UPI & Payments Infrastructure", color: "#d97706", desc: "Built MakeMyTrip's UPI platform (MakeMyTrip, Goibibo, RedBus) — ~10% of 1 lakh daily bookings." },
      { icon: "🏗️", title: "0-to-1 Platform Building", color: "#7c3aed", desc: "Built TripMoney lending platform (5% of total transactions) & Expense Management (30% adoption in 6 months)." },
    ],
    skills: ["AI Agents", "Generative AI", "Multi-Agent Systems", "B2B SaaS", "Product Strategy", "UPI Payments", "FinTech", "Golang", "Docker", "Product-Led Growth"],
    certs: ["🏆 Dream Project of Year", "⭐ Employee of Quarter ×2", "🚀 Impact Squad of Year"],
    certsNote: "MakeMyTrip Awards",
  },
  {
    id: "divya",
    slug: "divya-shaktawat",
    initials: "DS",
    name: "Divya Shaktawat",
    role: "Engineer",
    org: "Deutsche Bank",
    linkedin: "https://www.linkedin.com/in/divya-shaktawat-17242015a/",
    accentColor: "#e11d48",
    lightBg: "#fff1f4",
    tagBg: "#fff1f2",
    tagBorder: "#fecdd3",
    tagColor: "#be123c",
    badgeBg: "#fff1f2",
    badgeBorder: "#fecdd3",
    badgeColor: "#be123c",
    avatarGrad: "linear-gradient(135deg,#be123c,#e11d48)",
    avatarShadow: "0 6px 18px rgba(225,29,72,0.25)",
    headline: "Enterprise Banking Technology · Java Microservices · ex-PwC · ex-Accenture · ex-Infosys",
    education: "M.L.V. Textile & Engineering College",
    eduSub: "B.Tech · Information Technology, Bhilwara",
    eduNote: "🏆 Skills Star Award – Accenture",
    track: ["Deutsche Bank", "PwC India", "Accenture", "Infosys"],
    summary: "Divya brings 5+ years of enterprise Java backend engineering across Deutsche Bank, PwC, Accenture, and Infosys. Advises on microservices architecture, Kafka event-driven systems, REST API design, and AWS cloud development.",
    domains: [
      { icon: "☕", title: "Java & Spring Boot Microservices", color: "#e11d48", desc: "End-to-end microservices design and delivery with Spring Boot, JPA, REST APIs, and Agile practices." },
      { icon: "📨", title: "Kafka & Event-Driven Systems", color: "#d97706", desc: "Apache Kafka-based enterprise messaging, microservices integration, and scalable event-driven architecture." },
      { icon: "🗄️", title: "Database & SQL Engineering", color: "#059669", desc: "MySQL, PostgreSQL, JPA-based ORM integration, SQL optimization, and enterprise database engineering." },
      { icon: "☁️", title: "AWS & Cloud Development", color: "#0284c7", desc: "AWS cloud services, cloud-native development, serverless patterns, Azure Fundamentals, cloud migration." },
    ],
    skills: ["Java", "Spring Boot", "Microservices", "Apache Kafka", "JPA", "REST APIs", "MySQL", "PostgreSQL", "AWS", "Microsoft Azure", "Generative AI", "Docker", "Agile"],
    certs: ["Azure Fundamentals", "AWS Cloud (5 certs)", "Infosys Agile Dev", "Gen AI – Microsoft"],
  },
  {
    id: "bharat",
    slug: "bharat-sharma",
    initials: "BS",
    name: "Bharat Sharma",
    role: "Assistant Vice President",
    org: "Deutsche Bank",
    linkedin: "https://www.linkedin.com/in/bharat-sharma-978b801b3/",
    accentColor: "#1d4ed8",
    lightBg: "#f0f6ff",
    tagBg: "#eff6ff",
    tagBorder: "#bfdbfe",
    tagColor: "#1e40af",
    badgeBg: "#eff6ff",
    badgeBorder: "#bfdbfe",
    badgeColor: "#1e40af",
    avatarGrad: "linear-gradient(135deg,#1e3a8a,#1d4ed8)",
    avatarShadow: "0 6px 18px rgba(29,78,216,0.25)",
    headline: "Enterprise Banking Platforms · Cloud Engineering (GCP & AWS) · ex-Lead Consultant Infosys · ex-BNP Paribas",
    education: "Rajasthan Technical University (RTU)",
    eduSub: "B.Tech · Information Technology, Kota",
    eduNote: "☁️ Certified Google Cloud Associate Cloud Engineer",
    track: ["Deutsche Bank", "Infosys", "BNP Paribas", "Oracle Financial Services"],
    summary: "Bharat brings 14+ years of enterprise engineering leadership across Deutsche Bank, Infosys, BNP Paribas, and Oracle Financial Services. Google Cloud Certified Associate Cloud Engineer advising on core banking architectures, microservices, and multi-cloud delivery.",
    domains: [
      { icon: "🏦", title: "Core Banking Systems", color: "#1d4ed8", desc: "Architecture of mission-critical banking infrastructure, regulatory compliance, and transactional integrity." },
      { icon: "☕", title: "Java & Spring Ecosystem", color: "#d97706", desc: "Core Java, Spring Boot, Spring MVC, REST APIs, and scalable distributed enterprise service meshes." },
      { icon: "☁️", title: "Multi-Cloud Engineering", color: "#059669", desc: "Certified Google Cloud (GCP) and AWS infrastructure design, containerization, and platform resilience." },
      { icon: "🎯", title: "Project Delivery & Scrum", color: "#7c3aed", desc: "Technical project governance, agile pod delivery, change management, and banking SLAs." },
    ],
    skills: ["Microservices", "Java", "Spring Boot", "Spring MVC", "Google Cloud (GCP)", "AWS", "SQL", "Technical Project Leadership", "Scrum"],
    certs: ["GCP Cloud Engineer", "AWS Architecture", "Scrum Master", "Core Java & Spring"],
  },
];

function AdvisorCard({ advisor }) {
  const a = advisor;

  return (
    <div
      className="h-100 d-flex flex-column justify-content-between"
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderLeft: `4px solid ${a.accentColor}`,
        borderRadius: "14px",
        padding: "clamp(16px, 2.5vw, 22px)",
        boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
        transition: "all 0.2s ease",
      }}
    >
      <div>
        {/* ── Top Header Row (Mobile-First Stacking & Spacing) ── */}
        <div className="d-flex align-items-start gap-3">
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "13px",
              background: a.avatarGrad,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
              fontWeight: 900,
              color: "#ffffff",
              boxShadow: a.avatarShadow,
              flexShrink: 0,
            }}
          >
            {a.initials}
          </div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div className="d-flex align-items-center justify-content-between gap-2" style={{ marginBottom: "3px" }}>
              <span
                style={{
                  background: a.tagBg,
                  color: a.tagColor,
                  border: `1px solid ${a.tagBorder}`,
                  borderRadius: "20px",
                  padding: "2px 8px",
                  fontSize: "0.62rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  display: "inline-block",
                }}
              >
                Technical Advisor
              </span>

              {a.linkedin && (
                <a
                  href={a.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${a.name} on LinkedIn`}
                  style={{
                    color: "#0a66c2",
                    fontSize: "0.72rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    textDecoration: "none",
                    background: "#f0f7ff",
                    border: "1px solid #cce4f7",
                    borderRadius: "6px",
                    padding: "2px 7px",
                    fontWeight: 700,
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0a66c2";
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.borderColor = "#0a66c2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#f0f7ff";
                    e.currentTarget.style.color = "#0a66c2";
                    e.currentTarget.style.borderColor = "#cce4f7";
                  }}
                >
                  <i className="fa-brands fa-linkedin" style={{ fontSize: "0.85rem" }} />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
            <h3 style={{ fontSize: "clamp(1.05rem, 2vw, 1.2rem)", fontWeight: 800, color: "#0f172a", margin: 0, lineHeight: 1.25 }}>
              {a.name}
            </h3>
            <div style={{ fontSize: "0.82rem", color: "#475569", marginTop: "3px", lineHeight: 1.35 }}>
              <span>{a.role}</span>
              <span className="mx-1" style={{ color: "#94a3b8" }}>·</span>
              <strong style={{ color: a.accentColor }}>{a.org}</strong>
            </div>
          </div>
        </div>

        {/* ── Key Headline & Core Chips ── */}
        <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid #f1f5f9" }}>
          <p style={{ fontSize: "0.85rem", color: "#334155", margin: "0 0 10px 0", lineHeight: 1.55, fontWeight: 500 }}>
            {a.headline}
          </p>

          <div className="d-flex flex-wrap align-items-center gap-1 mb-3">
            {a.skills.slice(0, 6).map((tag) => (
              <span
                key={tag}
                style={{
                  background: "#f1f5f9",
                  color: "#1e293b",
                  border: "1px solid #e2e8f0",
                  borderRadius: "5px",
                  padding: "3px 8px",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                }}
              >
                {tag}
              </span>
            ))}
            {a.skills.length > 6 && (
              <span style={{ fontSize: "0.72rem", color: "#64748b", fontWeight: 600, marginLeft: "4px" }}>
                +{a.skills.length - 6} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ── View Full Profile & Technical Credentials Page Link ── */}
      <div style={{ marginTop: "14px" }}>
        <Link
          href={`/leadership/${a.slug}`}
          style={{
            width: "100%",
            background: "#f8fafc",
            color: "#0f172a",
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
            padding: "9px 14px",
            fontSize: "0.8rem",
            fontWeight: 700,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = a.accentColor;
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.borderColor = a.accentColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#f8fafc";
            e.currentTarget.style.color = "#0f172a";
            e.currentTarget.style.borderColor = "#cbd5e1";
          }}
        >
          <span>View Full Profile & Technical Credentials</span>
          <i className="fa-solid fa-arrow-right" style={{ fontSize: "0.72rem" }} />
        </Link>
      </div>
    </div>
  );
}

export default function LeadershipPage() {
  return (
    <div style={{ background: "#f8fafc", color: "#0f172a", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(160deg,#ffffff 0%,#f0f6ff 50%,#e8f4fd 100%)", borderBottom: "1px solid #e2e8f0", padding: "clamp(24px, 3.5vw, 52px) 0 clamp(32px, 4.5vw, 60px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px,rgba(37,99,235,0.07) 1px,transparent 0)", backgroundSize: "36px 36px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "-60px", right: "8%", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />

        <div className="container" style={{ maxWidth: "1140px", padding: "0 clamp(16px, 3vw, 24px)", position: "relative" }}>
          <div style={{ marginBottom: "14px", fontSize: "0.8rem", color: "#94a3b8" }}>
            <Link href="/" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>Home</Link>
            <span style={{ margin: "0 8px", color: "#cbd5e1" }}>/</span>
            <span style={{ color: "#0f172a", fontWeight: 600 }}>Leadership</span>
          </div>

          <div className="text-center" style={{ maxWidth: "820px", margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "100px", padding: "5px 14px", marginBottom: "12px", fontSize: "0.72rem", fontWeight: 800, color: "#2563eb", textTransform: "uppercase", letterSpacing: "0.8px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2563eb", display: "inline-block" }} />
              Governance & Engineering Leadership
            </div>
            <h1 style={{ fontSize: "clamp(1.85rem,4vw,2.9rem)", fontWeight: 900, color: "#0f172a", lineHeight: 1.15, marginBottom: "12px", letterSpacing: "-1px" }}>
              The People Behind ChittorTech
            </h1>
            <p style={{ fontSize: "clamp(0.92rem,1.6vw,1.05rem)", color: "#64748b", lineHeight: 1.65, margin: "0 auto 24px", maxWidth: "620px" }}>
              Founded and led by domain-specialist engineers. Advised by independent senior practitioners from Microsoft, Accenture, Visa, BrowserStack, and Deutsche Bank.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {[{ label: "2 Executive Founders", icon: "🏛️" }, { label: "6 Technical Advisors", icon: "🎖️" }, { label: "IIT · NSIT Alumni", icon: "🎓" }, { label: "58+ Cloud Certifications", icon: "☁️" }].map((s) => (
                <div key={s.label} style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "7px 14px", fontSize: "0.78rem", fontWeight: 600, color: "#334155", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                  {s.icon} {s.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: TECHNICAL ADVISORY BOARD (FIRST) ── */}
      <section style={{ padding: "clamp(48px,6vw,72px) 0", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container" style={{ maxWidth: "1140px", padding: "0 clamp(16px, 3vw, 20px)" }}>
          <div className="text-center mb-4">
            <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "2px" }}>── Independent Strategic Counsel ──</span>
            <h2 style={{ fontSize: "clamp(1.5rem,2.8vw,2.1rem)", fontWeight: 800, color: "#0f172a", marginTop: "10px", marginBottom: "6px" }}>Technical Advisory Board</h2>
            <p style={{ color: "#64748b", fontSize: "0.92rem", maxWidth: "660px", margin: "0 auto 20px" }}>
              Senior engineering & product leaders from global technology ecosystems — advising ChittorTech in individual personal capacity.
            </p>
          </div>

          {/* Org strip */}
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 mb-4">
            {["Microsoft", "Accenture", "Visa", "BrowserStack", "Deutsche Bank", "BNP Paribas", "Infosys", "Google", "IBM", "IIT Mandi", "NSIT Delhi", "RTU Kota"].map((org) => (
              <span key={org} style={{ fontSize: "0.76rem", fontWeight: 700, color: "#64748b", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "4px 12px" }}>{org}</span>
            ))}
          </div>

          {/* Legal notice */}
          <div className="mb-4" style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderLeft: "4px solid #6366f1", borderRadius: "10px", padding: "10px 16px" }}>
            <div className="d-flex align-items-start gap-2" style={{ fontSize: "0.78rem", color: "#64748b", lineHeight: 1.6 }}>
              <i className="fa-solid fa-circle-info" style={{ color: "#6366f1", marginTop: "2px", flexShrink: 0 }} />
              <span><strong style={{ color: "#0f172a" }}>Advisory Board Notice:</strong> All advisors contribute strictly in their personal, individual capacities. Their guidance does not represent any formal endorsement, partnership, or affiliation with their respective employers.</span>
            </div>
          </div>

          {/* Advisor cards — fully responsive 2-column grid */}
          <div className="row g-3 g-md-4">
            {advisors.map((advisor) => (
              <div key={advisor.id} className="col-12 col-lg-6">
                <AdvisorCard advisor={advisor} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: EXECUTIVE FOUNDERS ── */}
      <section style={{ padding: "clamp(50px,6vw,80px) 0 clamp(110px,14vw,150px)", background: "#ffffff" }}>
        <div className="container" style={{ maxWidth: "1140px", padding: "0 clamp(14px, 3vw, 20px)" }}>
          <div className="text-center mb-4 mb-md-5">
            <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "2px" }}>── Executive Board ──</span>
            <h2 style={{ fontSize: "clamp(1.5rem,2.8vw,2.1rem)", fontWeight: 800, color: "#0f172a", marginTop: "10px", marginBottom: "6px" }}>Executive Founders</h2>
            <p style={{ color: "#64748b", fontSize: "clamp(0.85rem, 1.8vw, 0.92rem)", margin: 0 }}>Directly accountable for every government system and enterprise engagement</p>
          </div>

          <div className="row g-3 g-md-4">
            {/* KUSH */}
            <div className="col-12 col-lg-6">
              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderTop: "3px solid #2563eb", borderRadius: "20px", padding: "clamp(18px, 3.5vw, 32px)", height: "100%", display: "flex", flexDirection: "column", boxShadow: "0 4px 24px rgba(0,0,0,0.05)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "160px", height: "160px", borderRadius: "50%", background: "radial-gradient(circle,rgba(37,99,235,0.05) 0%,transparent 70%)", pointerEvents: "none" }} />
                <div className="d-flex align-items-center gap-3 gap-sm-4 mb-3 mb-sm-4">
                  <div style={{ width: "clamp(54px, 6vw, 70px)", height: "clamp(54px, 6vw, 70px)", borderRadius: "16px", background: "linear-gradient(135deg,#1d4ed8,#2563eb)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)", fontWeight: 900, color: "#fff", boxShadow: "0 8px 24px rgba(37,99,235,0.3)", flexShrink: 0 }}>KS</div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ display: "inline-block", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "6px", padding: "2px 8px", fontSize: "0.68rem", fontWeight: 800, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "4px" }}>Founder & CGRO</div>
                    <h3 style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)", fontWeight: 800, color: "#0f172a", margin: "0 0 2px", lineHeight: 1.25 }}>Kush Sharma</h3>
                    <div style={{ fontSize: "clamp(0.78rem, 1.6vw, 0.85rem)", color: "#2563eb", fontWeight: 700, lineHeight: 1.35 }}>Chief Government Relations Officer</div>
                  </div>
                </div>
                <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.65, marginBottom: "18px" }}>Kush leads ChittorTech's public sector architecture, GFR statutory compliance, and state government relations. He architects e-governance systems for law enforcement administrations, municipal councils, and statutory public trusts across Rajasthan and India.</p>
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "clamp(14px, 2.5vw, 18px)", marginBottom: "20px", flex: 1 }}>
                  <div style={{ fontSize: "0.68rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>Live Government Deployments</div>
                  {[{ icon: "🛡️", title: "SP Chittorgarh Citizen Portal", desc: "Real-time SP/ASP Jan Sunwai status & district police helpline" }, { icon: "🏙️", title: "Nagar Parishad Complaint Portal", desc: "2-step geotagged ward grievance with auto SMS/WhatsApp alerts" }, { icon: "🏰", title: "Panch Gaurav Digital Archive", desc: "5 Pillars of Chittorgarh district pride · 10K+ monthly visitors" }].map((item) => (
                    <div key={item.title} className="d-flex align-items-start gap-3 mb-3" style={{ fontSize: "0.84rem" }}>
                      <span style={{ fontSize: "1.1rem", lineHeight: 1.4, flexShrink: 0 }}>{item.icon}</span>
                      <div style={{ minWidth: 0 }}><div style={{ color: "#0f172a", fontWeight: 700, fontSize: "0.84rem" }}>{item.title}</div><div style={{ color: "#64748b", fontSize: "0.76rem", lineHeight: 1.4 }}>{item.desc}</div></div>
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/917597451057?text=Namaste%20Kush%20Sir%2C%20I%20am%20reaching%20out%20regarding%20a%20Government%20%2F%20E-Governance%20or%20Public%20Sector%20project%20inquiry." target="_blank" rel="noopener noreferrer" className="btn w-100" style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb)", color: "#ffffff", border: "none", fontWeight: 700, padding: "12px 16px", borderRadius: "12px", fontSize: "clamp(0.82rem, 1.8vw, 0.9rem)", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", boxShadow: "0 6px 20px rgba(37,99,235,0.28)" }}>
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: "1.05rem" }} /> Talk to Kush — Govt & Public Sector
                </a>
              </div>
            </div>

            {/* LAV */}
            <div className="col-12 col-lg-6">
              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderTop: "3px solid #d97706", borderRadius: "20px", padding: "clamp(18px, 3.5vw, 32px)", height: "100%", display: "flex", flexDirection: "column", boxShadow: "0 4px 24px rgba(0,0,0,0.05)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "160px", height: "160px", borderRadius: "50%", background: "radial-gradient(circle,rgba(245,158,11,0.06) 0%,transparent 70%)", pointerEvents: "none" }} />
                <div className="d-flex align-items-center gap-3 gap-sm-4 mb-3 mb-sm-4">
                  <div style={{ width: "clamp(54px, 6vw, 70px)", height: "clamp(54px, 6vw, 70px)", borderRadius: "16px", background: "linear-gradient(135deg,#d97706,#f59e0b)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)", fontWeight: 900, color: "#fff", boxShadow: "0 8px 24px rgba(245,158,11,0.3)", flexShrink: 0 }}>LS</div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ display: "inline-block", background: "#fef3c7", border: "1px solid #fde68a", borderRadius: "6px", padding: "2px 8px", fontSize: "0.68rem", fontWeight: 800, color: "#b45309", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "4px" }}>Co-Founder & CBDO</div>
                    <h3 style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)", fontWeight: 800, color: "#0f172a", margin: "0 0 2px", lineHeight: 1.25 }}>Lav Sharma</h3>
                    <div style={{ fontSize: "clamp(0.78rem, 1.6vw, 0.85rem)", color: "#d97706", fontWeight: 700, lineHeight: 1.35 }}>Chief Business Development & Strategic Partnerships Officer</div>
                  </div>
                </div>
                <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.65, marginBottom: "18px" }}>Lav leads ChittorTech's global enterprise expansion, strategic B2B alliances, and international client acquisition across USA, UK, UAE, Saudi Arabia, Australia, Germany, and Canada. He directs dedicated developer pods, proprietary ERP/CRM implementations, and cross-border SLA engagements.</p>
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "clamp(14px, 2.5vw, 18px)", marginBottom: "20px", flex: 1 }}>
                  <div style={{ fontSize: "0.68rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>Business Domains</div>
                  {[{ icon: "🤝", title: "Enterprise Strategic Alliances", desc: "Joint venture tech, software licensing & B2B vendor partnerships" }, { icon: "🌐", title: "Global Market Footprint", desc: "Clients across 7 countries: US, UK, UAE, KSA, AU, DE, CA" }, { icon: "⚙️", title: "Dedicated Engineering Pods", desc: "Pre-vetted dev teams, 100% IP assignment, 72-hour onboarding SLA" }].map((item) => (
                    <div key={item.title} className="d-flex align-items-start gap-3 mb-3" style={{ fontSize: "0.84rem" }}>
                      <span style={{ fontSize: "1.1rem", lineHeight: 1.4, flexShrink: 0 }}>{item.icon}</span>
                      <div style={{ minWidth: 0 }}><div style={{ color: "#0f172a", fontWeight: 700, fontSize: "0.84rem" }}>{item.title}</div><div style={{ color: "#64748b", fontSize: "0.76rem", lineHeight: 1.4 }}>{item.desc}</div></div>
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/917597451057?text=Namaste%20Lav%20Sir%2C%20I%20am%20reaching%20out%20regarding%20Enterprise%20Software%2C%20Business%20Development%20or%20Strategic%20Partnerships." target="_blank" rel="noopener noreferrer" className="btn w-100" style={{ background: "linear-gradient(135deg,#d97706,#f59e0b)", color: "#ffffff", border: "none", fontWeight: 700, padding: "12px 16px", borderRadius: "12px", fontSize: "clamp(0.82rem, 1.8vw, 0.9rem)", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", boxShadow: "0 6px 20px rgba(245,158,11,0.28)" }}>
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: "1.05rem" }} /> Talk to Lav — Business & Partnerships
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
