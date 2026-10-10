"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function CloudHostingDeploymentPage() {
  const [currency, setCurrency] = useState("USD"); // "USD" | "INR"
  const [openFaq, setOpenFaq] = useState(0);

  const whatsappUrl =
    "https://wa.me/917597451057?text=Hi%20ChittorTech%2C%20I%20need%20expert%20cloud%20hosting%2C%20production%20deployment%2C%20and%20DevOps%20engineering%20for%20my%20application.";

  const capabilities = [
    { title: "Cloud Infrastructure Setup", icon: "fa-solid fa-cloud" },
    { title: "Production App Deployment", icon: "fa-solid fa-rocket" },
    { title: "AWS / Azure / GCP Config", icon: "fa-brands fa-aws" },
    { title: "Vercel & Next.js Deployment", icon: "fa-brands fa-react" },
    { title: "Docker Containerization", icon: "fa-brands fa-docker" },
    { title: "CI/CD GitHub Actions", icon: "fa-brands fa-github" },
    { title: "DNS & Domain Architecture", icon: "fa-solid fa-network-wired" },
    { title: "SSL/TLS & HSTS Security", icon: "fa-solid fa-shield-halved" },
    { title: "Environment & Secret Mgmt", icon: "fa-solid fa-key" },
    { title: "Database Connectivity & Pools", icon: "fa-solid fa-database" },
    { title: "Reverse Proxy & Nginx", icon: "fa-solid fa-server" },
    { title: "Cloudflare & CDN Edge", icon: "fa-solid fa-bolt" },
    { title: "Load Balancing (ALB/NLB)", icon: "fa-solid fa-scale-balanced" },
    { title: "Monitoring & Observability", icon: "fa-solid fa-chart-line" },
    { title: "Automated Backups & DR", icon: "fa-solid fa-clock-rotate-left" },
    { title: "Linux Server Hardening", icon: "fa-brands fa-linux" },
    { title: "Zero-Downtime Cloud Migration", icon: "fa-solid fa-right-left" },
    { title: "Deployment Troubleshooting", icon: "fa-solid fa-stethoscope" },
    { title: "502 / 503 Incident Recovery", icon: "fa-solid fa-triangle-exclamation" },
    { title: "SaaS Multi-Tenant Isolation", icon: "fa-solid fa-layer-group" },
  ];

  const deploymentChecklist = [
    { layer: "DNS", validation: "Records (A, AAAA, CNAME, TXT, MX) resolve accurately across global edge resolvers" },
    { layer: "SSL / TLS", validation: "HTTPS certificate chain validated with automated renewal and HSTS headers enforced" },
    { layer: "Domain", validation: "Production apex & subdomains point to verified production ingress targets" },
    { layer: "Application", validation: "Application starts clean without unhandled exceptions or zombie worker processes" },
    { layer: "API Endpoints", validation: "REST / GraphQL routes return expected payloads with sub-100ms response targets" },
    { layer: "Database", validation: "Connection pooling, TLS encryption, migration scripts, and read replicas verified" },
    { layer: "Environment", validation: "All required production secrets injected securely without .env source leakage" },
    { layer: "Security", validation: "Firewall rules, UFW, closed unused ports, IAM least-privilege policies verified" },
    { layer: "Production Build", validation: "Build succeeds in CI with immutable Docker tagging and minimized runtime image" },
    { layer: "Logging", validation: "Application stdout/stderr routed to structured cloud logging with error alerts" },
    { layer: "Monitoring", validation: "External health checks and uptime probes pinging /api/health every 60 seconds" },
    { layer: "Backups", validation: "Automated snapshot lifecycle policy and point-in-time recovery documented" },
    { layer: "CI/CD", validation: "GitHub Actions automated build, test, and container push pipeline functional" },
    { layer: "Rollback", validation: "Single-command or instant git-revert deployment rollback verified" },
    { layer: "Performance", validation: "Lighthouse core web vitals, gzip/brotli compression, and CDN caching active" },
    { layer: "SEO & Robots", validation: "Canonical headers, valid robots.txt, and XML sitemaps verified for search bots" },
  ];

  const packageCapabilities = [
    { name: "Deployment Target Scope", t1: "1 Application / Website", t2: "Production App or API", t3: "Multi-Service / Fleet" },
    { name: "Supported Cloud Providers", t1: "Vercel / Basic Cloud VPS", t2: "AWS / Azure / GCP / Vercel", t3: "Hybrid / Multi-Cloud Enterprise" },
    { name: "Containerization (Docker)", t1: "—", t2: "✓ Multi-Stage Dockerfile", t3: "✓ Docker / ECS / Cloud Run" },
    { name: "CI/CD Pipeline Automation", t1: "Git Push Hook", t2: "✓ GitHub Actions Pipeline", t3: "✓ Multi-Stage Staging/Prod CI/CD" },
    { name: "DNS, SSL & Custom Domains", t1: "✓ Standard DNS & SSL", t2: "✓ Edge DNS + Custom SSL", t3: "✓ Cloudflare Enterprise WAF/DNS" },
    { name: "Environment & Secret Mgmt", t1: "✓ Env Injection", t2: "✓ Scoped Secrets Audit", t3: "✓ Cloud Secret Manager / IAM" },
    { name: "Database & Cache Setup", t1: "—", t2: "✓ PostgreSQL / Mongo / Redis", t3: "✓ Managed RDS / Cluster Pools" },
    { name: "Security Hardening", t1: "Basic HTTPS", t2: "✓ Server & App Hardening", t3: "✓ Deep IAM, WAF & VPC Isolation" },
    { name: "Monitoring & Health Checks", t1: "Basic Uptime", t2: "✓ /api/health + Error Alerting", t3: "✓ Full Observability & Logging" },
    { name: "Cloud Migration Support", t1: "—", t2: "✓ Standard Host Migration", t3: "✓ Zero-Downtime Data Cutover" },
    { name: "Post-Deployment Support SLA", t1: "7-Day Verification", t2: "✓ 14-Day Priority SLA", t3: "✓ 30-Day Dedicated Engineering" },
  ];

  const faqs = [
    {
      q: "1. Can ChittorTech deploy my application to AWS?",
      a: "Yes. We configure and deploy production workloads across the full Amazon Web Services ecosystem, including EC2 virtual machines, containerized workloads on ECS or EKS, static assets on S3 with CloudFront CDN, serverless APIs on AWS Lambda, RDS PostgreSQL/MySQL database clusters with connection pooling, and secure VPC networking with private subnets.",
    },
    {
      q: "2. Can you deploy a Next.js application to Vercel or custom cloud?",
      a: "Yes. For Next.js applications, we deploy either directly to Vercel with optimized Preview/Production environments, or to custom containerized cloud infrastructure on AWS ECS, GCP Cloud Run, or Hetzner VPS using standalone Node.js Docker containers. We ensure full support for App Router, Server Components, API routes, and image optimization.",
    },
    {
      q: "3. Can you deploy Node.js, Python, or Go backend APIs?",
      a: "Yes. We deploy REST and GraphQL APIs built with Node.js/Express, Python/FastAPI, Django, Flask, or Go. We configure process managers (PM2), Docker container runtimes, Nginx reverse proxies with SSL termination, Gunicorn/Uvicorn workers, and persistent PostgreSQL/MongoDB database connections.",
    },
    {
      q: "4. Do I need to give you my primary cloud or registrar password?",
      a: "No. ChittorTech follows strict least-privilege security standards. We never ask for your primary master passwords. We work via delegated IAM users, provider team invitations (AWS IAM, Vercel Teams, Azure RBAC, GCP Service Accounts), temporary deployment tokens, or guided live screen-sharing sessions.",
    },
    {
      q: "5. Can you migrate my existing application between hosting providers?",
      a: "Yes. We execute structured, zero-downtime cloud migrations. Scenarios include VPS to AWS/GCP, cPanel/Shared hosting to modern cloud, Vercel to self-hosted AWS/GCP, and monolithic applications to Docker containerized services. We treat databases, DNS TTL reduction, environment secrets, and SSL certificates as coordinated migration dependencies.",
    },
    {
      q: "6. Can you build an automated CI/CD pipeline using GitHub Actions?",
      a: "Yes. We replace risky manual FTP or SSH deployments with automated GitHub Actions workflows. Every code push or pull request can trigger dependency installation, linting, automated unit testing, production build verification, Docker image creation, container registry publishing, and automated staging/production promotion.",
    },
    {
      q: "7. Can you troubleshoot a live production deployment that is failing?",
      a: "Yes. We offer rapid incident response for live production outages, including 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout, ERR_CONNECTION_REFUSED, SSL certificate handshake errors, container crash loops, missing environment variables, and PostgreSQL/MongoDB connection pool exhaustion.",
    },
    {
      q: "8. Does your pricing include AWS, Azure, or Google Cloud hosting bills?",
      a: "No. Cloud infrastructure costs (AWS, Azure, GCP, Vercel, domain registrars, database instances) are billed directly to your own credit card or corporate billing profile by the cloud providers. This ensures you maintain 100% ownership and control over your infrastructure assets without markups.",
    },
  ];

  return (
    <>
      <style>{`
        /* ChittorTech Cloud Hosting & Deployment Design System */
        .deliv-wrapper {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: #0f172a;
          background-color: #f8fafc;
          overflow-x: hidden !important;
          width: 100% !important;
          max-width: 100vw !important;
        }
        .deliv-hero {
          background: radial-gradient(circle at 85% 15%, rgba(14, 165, 233, 0.18) 0%, transparent 45%),
                      radial-gradient(circle at 15% 85%, rgba(99, 102, 241, 0.2) 0%, transparent 50%),
                      linear-gradient(135deg, #060913 0%, #0b1120 50%, #1e1b4b 100%);
          color: #ffffff;
          position: relative;
          overflow: hidden;
          padding: 90px 0 70px;
        }
        .deliv-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(12px);
          padding: 8px 18px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #38bdf8;
          margin-bottom: 24px;
        }
        .deliv-h1 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 2.85rem;
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.025em;
          color: #ffffff;
          margin-bottom: 20px;
        }
        .deliv-hero-p {
          font-size: 1.15rem;
          line-height: 1.65;
          color: #cbd5e1;
          margin-bottom: 32px;
          max-width: 680px;
        }
        .deliv-btn-wa {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #25d366;
          color: #ffffff !important;
          font-weight: 700;
          font-size: 1rem;
          padding: 13px 28px;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 10px 25px -5px rgba(37, 211, 102, 0.4);
          transition: all 0.25s ease;
        }
        .deliv-btn-wa:hover {
          transform: translateY(-2px);
          background: #22c35e;
          box-shadow: 0 16px 32px -6px rgba(37, 211, 102, 0.55);
        }
        .deliv-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff !important;
          font-weight: 700;
          font-size: 0.98rem;
          padding: 13px 26px;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.25s ease;
          backdrop-filter: blur(10px);
        }
        .deliv-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        /* Live Cloud Telemetry Mockup */
        .cloud-mockup-card {
          background: #090d16;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(56, 189, 248, 0.2);
          color: #f8fafc;
          font-family: 'JetBrains Mono', monospace, ui-monospace;
        }
        .cloud-status-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 9px 12px;
          border-radius: 10px;
          margin-bottom: 7px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 0.82rem;
        }

        /* Generic Card Styles */
        .deliv-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 28px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          height: 100%;
          position: relative;
        }
        .deliv-card:hover {
          transform: translateY(-4px);
          border-color: #38bdf8;
          box-shadow: 0 20px 35px -10px rgba(14, 165, 233, 0.12);
        }
        .deliv-card-icon {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          margin-bottom: 18px;
          background: #e0f2fe;
          color: #0284c7;
        }

        /* Visual Architecture Flow & Terminal System */
        .arch-flow-node {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          padding: 12px 14px;
          transition: all 0.25s ease;
          width: 100%;
        }
        .arch-flow-node:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(56, 189, 248, 0.4);
        }
        .arch-flow-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #38bdf8;
          font-size: 0.82rem;
          margin: 3px 0;
        }
        .terminal-code-box {
          background: #060913;
          border: 1px solid #1e293b;
          border-radius: 12px;
          padding: 16px;
          font-family: 'JetBrains Mono', monospace, ui-monospace;
          font-size: 0.78rem;
          line-height: 1.6;
          white-space: pre-wrap;
          word-break: break-word;
          overflow-x: hidden !important;
          max-width: 100% !important;
          color: #e2e8f0;
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        /* Currency Switch & Pricing Card */
        .currency-switch {
          display: inline-flex;
          background: #e2e8f0;
          padding: 5px;
          border-radius: 9999px;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
        }
        .currency-btn {
          padding: 8px 24px;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 0.88rem;
          border: none;
          background: transparent;
          color: #64748b;
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .currency-btn.active {
          background: #ffffff;
          color: #0f172a;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.12);
        }
        .price-card {
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          border-radius: 18px;
          padding: 26px 22px;
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
        }
        .price-card:hover {
          border-color: #0284c7;
          box-shadow: 0 15px 30px -10px rgba(14, 165, 233, 0.12);
        }
        .price-card.featured {
          border: 2px solid #0284c7;
          box-shadow: 0 16px 36px -10px rgba(2, 132, 199, 0.22);
          background: #ffffff;
        }

        /* Table */
        .deliv-table-wrap {
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }
        .deliv-table {
          width: 100%;
          min-width: 620px;
          margin-bottom: 0;
          border-collapse: collapse;
        }
        .deliv-table th {
          background: #f1f5f9;
          font-weight: 700;
          font-size: 0.88rem;
          color: #334155;
          padding: 14px 18px;
          border-bottom: 1px solid #e2e8f0;
        }
        .deliv-table td {
          padding: 14px 18px;
          border-bottom: 1px solid #f1f5f9;
          font-size: 0.9rem;
          color: #334155;
        }
        .deliv-table tr:last-child td {
          border-bottom: none;
        }

        /* Mobile Card System */
        .deliv-mobile-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 16px;
          margin-bottom: 14px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }

        /* ─── MOBILE RESPONSIVENESS OVERRIDES (@media <= 768px) ─── */
        @media (max-width: 768px) {
          .deliv-hero {
            padding: 50px 0 45px !important;
          }
          .deliv-badge-pill {
            font-size: 0.72rem !important;
            padding: 6px 14px !important;
            margin-bottom: 18px !important;
            white-space: normal !important;
            line-height: 1.3 !important;
          }
          .deliv-h1 {
            font-size: 1.85rem !important;
            line-height: 1.25 !important;
          }
          .deliv-hero-p {
            font-size: 0.98rem !important;
            margin-bottom: 24px !important;
          }
          .deliv-btn-wa, .deliv-btn-secondary {
            width: 100% !important;
            padding: 13px 18px !important;
            font-size: 0.92rem !important;
            text-align: center !important;
          }
          .cloud-mockup-card {
            padding: 16px 14px !important;
            border-radius: 16px !important;
          }
          .cloud-status-row {
            padding: 8px 10px !important;
            font-size: 0.76rem !important;
          }
          .price-card {
            padding: 20px 14px !important;
            border-radius: 16px !important;
          }
          .price-card .price-box {
            padding: 12px 12px !important;
          }
          .price-amount {
            font-size: 1.75rem !important;
          }
          .price-scope-tag {
            font-size: 0.72rem !important;
            padding: 4px 8px !important;
          }
          .cta-h2 {
            font-size: 1.75rem !important;
            line-height: 1.25 !important;
          }
          .cta-badge {
            font-size: 0.7rem !important;
            white-space: normal !important;
            line-height: 1.4 !important;
            padding: 6px 12px !important;
          }
          .bottom-cta-section {
            padding-bottom: 95px !important;
          }
          .terminal-code-box {
            padding: 12px 10px !important;
            font-size: 0.72rem !important;
            line-height: 1.5 !important;
          }
          .arch-flow-node {
            padding: 10px 12px !important;
          }
        }
      `}</style>

      <div className="deliv-wrapper">
        {/* ─── HERO SECTION ─── */}
        <section className="deliv-hero">
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <div className="deliv-badge-pill">
                  <i className="fa-solid fa-cloud"></i> Enterprise Cloud Infrastructure & DevOps
                </div>
                <h1 className="deliv-h1">
                  Cloud Hosting &amp; Production Deployment Services
                </h1>
                <p className="deliv-hero-p">
                  <strong>Deploy faster. Scale reliably. Operate with confidence.</strong> ChittorTech provides
                  expert cloud hosting, production application deployment, CI/CD pipeline automation, Docker containerization,
                  DNS, SSL/TLS, database clustering, and security hardening for AWS, Azure, Google Cloud, and Vercel.
                </p>

                <div className="d-flex flex-wrap gap-3 mb-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="deliv-btn-wa"
                  >
                    <i className="fa-brands fa-whatsapp fs-5"></i>
                    <span>Book Cloud Deployment Audit</span>
                  </a>
                  <button
                    type="button"
                    className="deliv-btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#trialModal"
                  >
                    <i className="fa-solid fa-sliders"></i>
                    <span>Get Deployment Quote</span>
                  </button>
                </div>

                <div className="pt-3 border-top border-secondary border-opacity-25 d-flex flex-wrap align-items-center gap-3 text-secondary small">
                  <span><i className="fa-solid fa-earth-americas text-info me-1"></i> Global Coverage: USA · UK · UAE · Canada · Australia · India</span>
                  <span><i className="fa-solid fa-shield-halved text-success me-1"></i> Least-Privilege IAM / No Password Sharing</span>
                </div>
              </div>

              {/* Live Cloud Deployment Telemetry Mockup */}
              <div className="col-lg-5">
                <div className="cloud-mockup-card">
                  <div className="d-flex justify-content-between align-items-center pb-3 mb-3 border-bottom border-secondary border-opacity-25">
                    <div className="d-flex align-items-center gap-2">
                      <span className="rounded-circle d-inline-block bg-danger" style={{ width: "10px", height: "10px" }}></span>
                      <span className="rounded-circle d-inline-block bg-warning" style={{ width: "10px", height: "10px" }}></span>
                      <span className="rounded-circle d-inline-block bg-success" style={{ width: "10px", height: "10px" }}></span>
                      <span className="text-secondary small ms-2">production-ci-cd-v2.8</span>
                    </div>
                    <span className="badge bg-success bg-opacity-25 text-success border border-success border-opacity-25">
                      DEPLOYED
                    </span>
                  </div>

                  <div className="cloud-status-row">
                    <span><i className="fa-brands fa-aws text-warning me-2"></i> AWS ECS Cluster</span>
                    <span className="text-success fw-bold">RUNNING (4/4 Tasks)</span>
                  </div>
                  <div className="cloud-status-row">
                    <span><i className="fa-brands fa-google text-primary me-2"></i> GCP Cloud Run</span>
                    <span className="text-success fw-bold">ACTIVE (0ms Cold Start)</span>
                  </div>
                  <div className="cloud-status-row">
                    <span><i className="fa-brands fa-microsoft text-info me-2"></i> Azure App Gateway</span>
                    <span className="text-success fw-bold">WAF ACTIVE (Rule 942)</span>
                  </div>
                  <div className="cloud-status-row">
                    <span><i className="fa-brands fa-react text-info me-2"></i> Vercel Edge Runtime</span>
                    <span className="text-success fw-bold">38 Edge Regions</span>
                  </div>
                  <div className="cloud-status-row">
                    <span><i className="fa-brands fa-docker text-primary me-2"></i> Docker Image Registry</span>
                    <span className="text-info fw-bold">node:22-alpine (84MB)</span>
                  </div>
                  <div className="cloud-status-row">
                    <span><i className="fa-solid fa-database text-warning me-2"></i> PostgreSQL Pooler</span>
                    <span className="text-success fw-bold">PgBouncer (60 Conns)</span>
                  </div>
                  <div className="cloud-status-row">
                    <span><i className="fa-solid fa-lock text-success me-2"></i> SSL/TLS Termination</span>
                    <span className="text-success fw-bold">TLS 1.3 / HSTS 2Y</span>
                  </div>

                  <div className="mt-3 p-2 rounded bg-black bg-opacity-50 text-secondary" style={{ fontSize: "0.75rem" }}>
                    <code>$ git push origin main ➔ CI Passed ➔ Deploy Verified (18s)</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHAT WE HANDLE GRID ─── */}
        <section className="py-5 bg-white border-bottom">
          <div className="container py-2">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Full-Stack Cloud Operations
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2rem" }}>
                What We Handle Across Your Production Stack
              </h2>
              <p className="text-muted small">
                From repository commit to edge CDN routing, we architect every layer of your live production environment.
              </p>
            </div>

            <div className="row g-3">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="p-3 rounded-3 bg-light border d-flex align-items-center gap-3 h-100 transition-all hover-shadow">
                    <div className="rounded-2 p-2 bg-white border text-primary" style={{ width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className={cap.icon}></i>
                    </div>
                    <span className="fw-semibold text-dark" style={{ fontSize: "0.88rem" }}>
                      {cap.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 01. WHY CLOUD DEPLOYMENT IS MORE THAN "UPLOADING A WEBSITE" ─── */}
        <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container py-4">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                  Engineering vs Uploading
                </span>
                <h2 className="fw-bold mt-2 mb-3" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                  Why Cloud Deployment Is More Than “Uploading a Website”
                </h2>
                <p className="text-muted" style={{ lineHeight: "1.7" }}>
                  A production deployment is not simply: <code>Code ➔ Server ➔ Website Live</code>.
                  A reliable production environment requires multiple infrastructure layers to work in perfect synchronization.
                  When any single layer is misconfigured, critical failures manifest immediately.
                </p>

                <div className="p-3 rounded-3 bg-white border border-danger-subtle mb-4">
                  <div className="fw-bold text-danger mb-2 small text-uppercase">
                    <i className="fa-solid fa-triangle-exclamation me-1"></i> Common Consequences of Unmanaged Deployments:
                  </div>
                  <div className="row g-2 text-secondary" style={{ fontSize: "0.84rem" }}>
                    <div className="col-sm-6">❌ 502 / 503 / 504 Gateway Timeouts</div>
                    <div className="col-sm-6">❌ Database Connection Pool Exhaustion</div>
                    <div className="col-sm-6">❌ Exposed API Keys in Git History</div>
                    <div className="col-sm-6">❌ Container Crash Loops (OOMKilled)</div>
                    <div className="col-sm-6">❌ Broken SSL/TLS Certificate Chains</div>
                    <div className="col-sm-6">❌ DNS Record TTL Misconfigurations</div>
                    <div className="col-sm-6">❌ Runaway Unoptimized Cloud Invoices</div>
                    <div className="col-sm-6">❌ Missing Automated Disaster Recovery</div>
                  </div>
                </div>

                <p className="text-secondary small mb-0">
                  ChittorTech approaches deployment as a <strong>rigorous infrastructure engineering problem</strong>,
                  not just a hosting task.
                </p>
              </div>

              <div className="col-lg-6">
                <div className="p-3 p-md-4 bg-dark rounded-4 border border-secondary border-opacity-25 shadow-lg">
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 pb-3 mb-3 border-bottom border-secondary border-opacity-25">
                    <div className="d-flex align-items-center gap-2">
                      <span className="rounded-circle bg-danger" style={{ width: "9px", height: "9px" }}></span>
                      <span className="rounded-circle bg-warning" style={{ width: "9px", height: "9px" }}></span>
                      <span className="rounded-circle bg-success" style={{ width: "9px", height: "9px" }}></span>
                      <span className="text-white-50 font-monospace small ms-2">Production Architecture Flow</span>
                    </div>
                    <span className="badge bg-primary bg-opacity-25 text-info border border-primary border-opacity-25 font-monospace" style={{ fontSize: "0.72rem" }}>
                      12-Factor Compliant
                    </span>
                  </div>

                  <div className="d-flex flex-column align-items-center gap-2">
                    {/* Node 1: End Users */}
                    <div className="arch-flow-node text-center">
                      <div className="fw-bold text-white small d-flex align-items-center justify-content-center gap-2">
                        <i className="fa-solid fa-users text-info"></i>
                        <span>Global End Users &amp; Client Traffic</span>
                      </div>
                      <div className="text-secondary" style={{ fontSize: "0.72rem" }}>Browsers, Mobile Apps, REST &amp; GraphQL Consumers</div>
                    </div>

                    <div className="arch-flow-arrow"><i className="fa-solid fa-arrow-down"></i></div>

                    {/* Node 2: DNS / CDN / WAF */}
                    <div className="arch-flow-node text-center">
                      <div className="fw-bold text-white small d-flex align-items-center justify-content-center gap-2">
                        <i className="fa-solid fa-shield-halved text-warning"></i>
                        <span>Anycast Edge DNS / Global CDN &amp; WAF</span>
                      </div>
                      <div className="text-secondary" style={{ fontSize: "0.72rem" }}>Cloudflare / AWS Route 53 / Anti-DDoS Mitigation</div>
                    </div>

                    <div className="arch-flow-arrow"><i className="fa-solid fa-arrow-down"></i></div>

                    {/* Node 3: Load Balancer / Reverse Proxy */}
                    <div className="arch-flow-node text-center">
                      <div className="fw-bold text-white small d-flex align-items-center justify-content-center gap-2">
                        <i className="fa-solid fa-scale-balanced text-primary"></i>
                        <span>Load Balancer &amp; Reverse Proxy</span>
                      </div>
                      <div className="text-secondary" style={{ fontSize: "0.72rem" }}>AWS ALB / Nginx / Traefik SSL Termination</div>
                    </div>

                    <div className="arch-flow-arrow"><i className="fa-solid fa-arrow-down"></i></div>

                    {/* Node 4: Branching Apps & APIs */}
                    <div className="row g-2 w-100">
                      <div className="col-6">
                        <div className="arch-flow-node text-center h-100" style={{ borderColor: "rgba(56, 189, 248, 0.3)", background: "rgba(56, 189, 248, 0.08)" }}>
                          <div className="fw-bold text-info" style={{ fontSize: "0.8rem" }}>
                            <i className="fa-brands fa-react me-1"></i> Web App
                          </div>
                          <div className="text-white-50" style={{ fontSize: "0.7rem" }}>Next.js / React SSR</div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="arch-flow-node text-center h-100" style={{ borderColor: "rgba(34, 197, 94, 0.3)", background: "rgba(34, 197, 94, 0.08)" }}>
                          <div className="fw-bold text-success" style={{ fontSize: "0.8rem" }}>
                            <i className="fa-brands fa-docker me-1"></i> API Service
                          </div>
                          <div className="text-white-50" style={{ fontSize: "0.7rem" }}>Node / Python / Go</div>
                        </div>
                      </div>
                    </div>

                    <div className="arch-flow-arrow"><i className="fa-solid fa-arrow-down"></i></div>

                    {/* Node 5: Database & Cache */}
                    <div className="arch-flow-node text-center">
                      <div className="fw-bold text-white small d-flex align-items-center justify-content-center gap-2">
                        <i className="fa-solid fa-database text-success"></i>
                        <span>Database Clusters &amp; In-Memory Cache</span>
                      </div>
                      <div className="text-secondary" style={{ fontSize: "0.72rem" }}>PostgreSQL (PgBouncer) · MongoDB Atlas · Redis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 02. CLOUD HOSTING CAPABILITIES (AWS, GCP, AZURE) ─── */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Hyperscale Platforms
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                AWS, Google Cloud &amp; Microsoft Azure Engineering
              </h2>
              <p className="text-muted">
                We design and configure cloud environments matched to your application's actual compute, memory, and scaling profile.
              </p>
            </div>

            <div className="row g-4">
              {/* AWS */}
              <div className="col-lg-4">
                <div className="deliv-card">
                  <div className="deliv-card-icon" style={{ background: "#fff7ed", color: "#ea580c" }}>
                    <i className="fa-brands fa-aws"></i>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: "#0f172a" }}>Amazon Web Services (AWS)</h4>
                  <p className="text-muted small mb-3">
                    Production workloads engineered with AWS Best Practices Framework across compute, network, and storage.
                  </p>
                  <ul className="list-unstyled mb-4" style={{ fontSize: "0.85rem", color: "#334155" }}>
                    <li className="mb-2"><i className="fa-solid fa-circle-check text-warning me-2"></i> <strong>EC2 &amp; ECS</strong> containerized Fargate clusters</li>
                    <li className="mb-2"><i className="fa-solid fa-circle-check text-warning me-2"></i> <strong>Route 53 &amp; CloudFront</strong> global edge CDN</li>
                    <li className="mb-2"><i className="fa-solid fa-circle-check text-warning me-2"></i> <strong>Application Load Balancers (ALB)</strong> &amp; ACM SSL</li>
                    <li className="mb-2"><i className="fa-solid fa-circle-check text-warning me-2"></i> <strong>RDS PostgreSQL / MySQL</strong> Multi-AZ failover</li>
                    <li><i className="fa-solid fa-circle-check text-warning me-2"></i> <strong>VPC Subnets</strong>, NAT Gateways &amp; Security Groups</li>
                  </ul>
                  <div className="p-2 px-3 rounded-3 bg-dark border border-secondary border-opacity-25 d-flex flex-wrap align-items-center justify-content-center gap-1 font-monospace" style={{ fontSize: "0.72rem" }}>
                    <span className="badge bg-secondary bg-opacity-25 text-white">Route 53</span>
                    <span className="text-secondary">➔</span>
                    <span className="badge bg-secondary bg-opacity-25 text-white">CloudFront</span>
                    <span className="text-secondary">➔</span>
                    <span className="badge bg-secondary bg-opacity-25 text-white">ALB</span>
                    <span className="text-secondary">➔</span>
                    <span className="badge bg-warning bg-opacity-25 text-warning">ECS Fargate</span>
                    <span className="text-secondary">➔</span>
                    <span className="badge bg-info bg-opacity-25 text-info">RDS</span>
                  </div>
                </div>
              </div>

              {/* GCP */}
              <div className="col-lg-4">
                <div className="deliv-card">
                  <div className="deliv-card-icon" style={{ background: "#eff6ff", color: "#2563eb" }}>
                    <i className="fa-brands fa-google"></i>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: "#0f172a" }}>Google Cloud Platform (GCP)</h4>
                  <p className="text-muted small mb-3">
                    Serverless container execution, managed SQL, and low-latency global network infrastructure.
                  </p>
                  <ul className="list-unstyled mb-4" style={{ fontSize: "0.85rem", color: "#334155" }}>
                    <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> <strong>Cloud Run</strong> auto-scaling serverless containers</li>
                    <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> <strong>Compute Engine</strong> VM hardening &amp; disk arrays</li>
                    <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> <strong>Cloud SQL</strong> automated backups &amp; replication</li>
                    <li className="mb-2"><i className="fa-solid fa-circle-check text-primary me-2"></i> <strong>Artifact Registry</strong> secure container image storage</li>
                    <li><i className="fa-solid fa-circle-check text-primary me-2"></i> <strong>Secret Manager &amp; Cloud Armor</strong> WAF defense</li>
                  </ul>
                  <div className="p-2 px-3 rounded-3 bg-dark border border-secondary border-opacity-25 d-flex flex-wrap align-items-center justify-content-center gap-1 font-monospace" style={{ fontSize: "0.72rem" }}>
                    <span className="badge bg-secondary bg-opacity-25 text-white">Cloud DNS</span>
                    <span className="text-secondary">➔</span>
                    <span className="badge bg-secondary bg-opacity-25 text-white">Cloud LB</span>
                    <span className="text-secondary">➔</span>
                    <span className="badge bg-primary bg-opacity-25 text-info">Cloud Run</span>
                    <span className="text-secondary">➔</span>
                    <span className="badge bg-success bg-opacity-25 text-success">Cloud SQL</span>
                  </div>
                </div>
              </div>

              {/* Azure */}
              <div className="col-lg-4">
                <div className="deliv-card">
                  <div className="deliv-card-icon" style={{ background: "#f0fdf4", color: "#16a34a" }}>
                    <i className="fa-brands fa-microsoft"></i>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: "#0f172a" }}>Microsoft Azure</h4>
                  <p className="text-muted small mb-3">
                    Enterprise application deployment leveraging managed identities, microservices, and container apps.
                  </p>
                  <ul className="list-unstyled mb-4" style={{ fontSize: "0.85rem", color: "#334155" }}>
                    <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> <strong>Azure Container Apps</strong> serverless microservices</li>
                    <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> <strong>Azure App Service</strong> Linux/Node web hosting</li>
                    <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> <strong>Application Gateway</strong> with WAF v2 protection</li>
                    <li className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i> <strong>Azure Database for PostgreSQL</strong> flexible server</li>
                    <li><i className="fa-solid fa-circle-check text-success me-2"></i> <strong>Managed Identity &amp; Key Vault</strong> secret isolation</li>
                  </ul>
                  <div className="p-2 px-3 rounded-3 bg-dark border border-secondary border-opacity-25 d-flex flex-wrap align-items-center justify-content-center gap-1 font-monospace" style={{ fontSize: "0.72rem" }}>
                    <span className="badge bg-secondary bg-opacity-25 text-white">Azure DNS</span>
                    <span className="text-secondary">➔</span>
                    <span className="badge bg-secondary bg-opacity-25 text-white">App Gateway</span>
                    <span className="text-secondary">➔</span>
                    <span className="badge bg-success bg-opacity-25 text-success">Container Apps</span>
                    <span className="text-secondary">➔</span>
                    <span className="badge bg-info bg-opacity-25 text-info">Azure DB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 03. VERCEL & NEXT.JS DEPLOYMENT ─── */}
        <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container py-4">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                  Modern Full-Stack Engineering
                </span>
                <h2 className="fw-bold mt-2 mb-3" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                  Vercel &amp; Next.js Production Architecture
                </h2>
                <p className="text-muted" style={{ lineHeight: "1.7" }}>
                  For modern Next.js applications (App Router, Server Actions, Server Components, API routes),
                  Vercel separates deployments into <strong>Local</strong>, <strong>Preview</strong>, and <strong>Production</strong> environments.
                  We configure isolated environment variables, automated PR verification, custom domains, and edge routing.
                </p>

                <div className="row g-3 mb-4">
                  <div className="col-sm-6">
                    <div className="p-3 rounded-3 bg-white border">
                      <div className="fw-bold text-dark small"><i className="fa-solid fa-code-branch text-primary me-2"></i> Preview Staging</div>
                      <p className="text-muted small mb-0 mt-1">Live isolated URL for every pull request to test functional, API, and SEO regressions before merging.</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="p-3 rounded-3 bg-white border">
                      <div className="fw-bold text-dark small"><i className="fa-solid fa-shield-halved text-success me-2"></i> Sensitive Variables</div>
                      <p className="text-muted small mb-0 mt-1">Production secrets configured with Vercel Sensitive functionality to prevent accidental leakage in logs.</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-3 bg-white border small text-secondary">
                  <i className="fa-solid fa-circle-check text-success me-2"></i>
                  <strong>Zero-Downtime Rollback:</strong> Instant instant-revert capability back to any previous deployment hash in seconds if a regression is detected.
                </div>
              </div>

              <div className="col-lg-6">
                <div className="p-3 p-md-4 bg-dark rounded-4 border border-secondary border-opacity-25 shadow-lg">
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 pb-3 mb-3 border-bottom border-secondary border-opacity-25 font-monospace">
                    <div className="d-flex align-items-center gap-2">
                      <span className="rounded-circle bg-danger" style={{ width: "9px", height: "9px" }}></span>
                      <span className="rounded-circle bg-warning" style={{ width: "9px", height: "9px" }}></span>
                      <span className="rounded-circle bg-success" style={{ width: "9px", height: "9px" }}></span>
                      <span className="text-white-50 small ms-2">Vercel GitOps Pipeline</span>
                    </div>
                    <span className="badge bg-primary bg-opacity-25 text-info border border-primary border-opacity-25 font-monospace" style={{ fontSize: "0.72rem" }}>
                      Preview-to-Production
                    </span>
                  </div>

                  <div className="d-flex flex-column align-items-center gap-2">
                    {/* Step 1: GitHub Repository & Branch */}
                    <div className="arch-flow-node">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <div className="fw-bold text-white small d-flex align-items-center gap-2">
                          <i className="fa-brands fa-github text-white"></i>
                          <span>GitHub Push &amp; Pull Request</span>
                        </div>
                        <span className="badge bg-secondary font-monospace" style={{ fontSize: "0.68rem" }}>git push</span>
                      </div>
                      <div className="text-secondary mt-1 font-monospace" style={{ fontSize: "0.72rem" }}>refs/heads/feature ➔ PR #42 Opened</div>
                    </div>

                    <div className="arch-flow-arrow"><i className="fa-solid fa-arrow-down"></i></div>

                    {/* Step 2: Vercel Preview Deployment */}
                    <div className="arch-flow-node" style={{ borderColor: "rgba(56, 189, 248, 0.35)", background: "rgba(56, 189, 248, 0.08)" }}>
                      <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                        <div className="fw-bold text-info small d-flex align-items-center gap-2">
                          <i className="fa-solid fa-flask-vial text-info"></i>
                          <span>Isolated Preview Deployment</span>
                        </div>
                        <span className="badge bg-info bg-opacity-25 text-info font-monospace" style={{ fontSize: "0.68rem" }}>pr-42.vercel.app</span>
                      </div>
                      <div className="row g-1">
                        <div className="col-6">
                          <div className="p-1 px-2 rounded bg-black bg-opacity-40 text-white-50" style={{ fontSize: "0.68rem" }}>
                            <i className="fa-solid fa-check text-success me-1"></i> Functional Tests
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-1 px-2 rounded bg-black bg-opacity-40 text-white-50" style={{ fontSize: "0.68rem" }}>
                            <i className="fa-solid fa-check text-success me-1"></i> Database Sync
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-1 px-2 rounded bg-black bg-opacity-40 text-white-50" style={{ fontSize: "0.68rem" }}>
                            <i className="fa-solid fa-check text-success me-1"></i> SEO &amp; Headers
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-1 px-2 rounded bg-black bg-opacity-40 text-white-50" style={{ fontSize: "0.68rem" }}>
                            <i className="fa-solid fa-check text-success me-1"></i> Core Web Vitals
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-column align-items-center my-1">
                      <span className="badge bg-success bg-opacity-25 text-success border border-success border-opacity-25 mb-1" style={{ fontSize: "0.68rem" }}>
                        PR Approved &amp; Merged
                      </span>
                      <div className="arch-flow-arrow"><i className="fa-solid fa-arrow-down"></i></div>
                    </div>

                    {/* Step 3: Atomic Production Promotion */}
                    <div className="arch-flow-node">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <div className="fw-bold text-white small d-flex align-items-center gap-2">
                          <i className="fa-solid fa-bolt text-warning"></i>
                          <span>Atomic Production Cutover</span>
                        </div>
                        <span className="badge bg-warning bg-opacity-25 text-warning font-monospace" style={{ fontSize: "0.68rem" }}>Zero Downtime</span>
                      </div>
                      <div className="text-secondary mt-1" style={{ fontSize: "0.72rem" }}>Instant pointer swap to immutable release build hash</div>
                    </div>

                    <div className="arch-flow-arrow"><i className="fa-solid fa-arrow-down"></i></div>

                    {/* Step 4: Authoritative Domain & Live Edge */}
                    <div className="arch-flow-node" style={{ borderColor: "rgba(34, 197, 94, 0.35)", background: "rgba(34, 197, 94, 0.08)" }}>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <div className="fw-bold text-success small d-flex align-items-center gap-2">
                          <i className="fa-solid fa-globe text-success"></i>
                          <span>Global Anycast Edge Network</span>
                        </div>
                        <span className="badge bg-success font-monospace" style={{ fontSize: "0.68rem" }}>Active</span>
                      </div>
                      <div className="text-white-50 mt-1" style={{ fontSize: "0.72rem" }}>chittortech.in · Sub-50ms Global Edge Latency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 04. DOCKER & CONTAINERIZED DEPLOYMENT ─── */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container py-4">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 order-lg-2">
                <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                  Immutable Containerization
                </span>
                <h2 className="fw-bold mt-2 mb-3" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                  Production Docker &amp; Multi-Stage Builds
                </h2>
                <p className="text-muted" style={{ lineHeight: "1.7" }}>
                  We engineer lightweight, immutable, production-hardened Docker containers.
                  Instead of bulky 1GB+ development images with root access, we build multi-stage alpine images
                  running under non-privileged users with strict health-check directives.
                </p>

                <div className="d-flex flex-column gap-2 mb-4" style={{ fontSize: "0.88rem" }}>
                  <div className="d-flex align-items-start gap-2">
                    <i className="fa-solid fa-check text-primary mt-1"></i>
                    <span><strong>Multi-Stage Builds:</strong> Build dependencies are stripped out, leaving only the compiled runtime (under 100MB).</span>
                  </div>
                  <div className="d-flex align-items-start gap-2">
                    <i className="fa-solid fa-check text-primary mt-1"></i>
                    <span><strong>Non-Root User:</strong> Processes run under <code>USER node</code> or <code>USER appuser</code> to eliminate privilege escalation risks.</span>
                  </div>
                  <div className="d-flex align-items-start gap-2">
                    <i className="fa-solid fa-check text-primary mt-1"></i>
                    <span><strong>Built-In Health Checks:</strong> Periodic probes automatically trigger container restart policies if memory leaks or hangs occur.</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 order-lg-1">
                <div className="p-3 p-md-4 bg-dark rounded-4 border border-secondary border-opacity-25 shadow-lg">
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 pb-3 mb-3 border-bottom border-secondary border-opacity-25 font-monospace">
                    <div className="d-flex align-items-center gap-2">
                      <span className="rounded-circle bg-danger" style={{ width: "9px", height: "9px" }}></span>
                      <span className="rounded-circle bg-warning" style={{ width: "9px", height: "9px" }}></span>
                      <span className="rounded-circle bg-success" style={{ width: "9px", height: "9px" }}></span>
                      <span className="text-white-50 small ms-2">Dockerfile.production</span>
                    </div>
                    <span className="badge bg-secondary font-monospace" style={{ fontSize: "0.72rem" }}>
                      Multi-Stage &middot; Node.js 22
                    </span>
                  </div>

                  <div className="terminal-code-box">
                    <div className="text-secondary">// Stage 1: Build Dependencies</div>
                    <div><span className="text-info fw-bold">FROM</span> <span className="text-light">node:22-alpine</span> <span className="text-info fw-bold">AS</span> <span className="text-warning">builder</span></div>
                    <div><span className="text-info fw-bold">WORKDIR</span> <span className="text-light">/app</span></div>
                    <div><span className="text-info fw-bold">COPY</span> <span className="text-light">package*.json ./</span></div>
                    <div><span className="text-info fw-bold">RUN</span> <span className="text-success">npm ci</span></div>
                    <div><span className="text-info fw-bold">COPY</span> <span className="text-light">. .</span></div>
                    <div><span className="text-info fw-bold">RUN</span> <span className="text-success">npm run build</span></div>
                    <div className="my-2 border-top border-secondary border-opacity-25"></div>
                    <div className="text-secondary">// Stage 2: Minimal Production Runtime</div>
                    <div><span className="text-info fw-bold">FROM</span> <span className="text-light">node:22-alpine</span> <span className="text-info fw-bold">AS</span> <span className="text-warning">runner</span></div>
                    <div><span className="text-info fw-bold">WORKDIR</span> <span className="text-light">/app</span></div>
                    <div><span className="text-info fw-bold">ENV</span> <span className="text-warning">NODE_ENV</span>=<span className="text-success">production</span></div>
                    <div><span className="text-info fw-bold">USER</span> <span className="text-light">node</span></div>
                    <div><span className="text-info fw-bold">COPY</span> <span className="text-white-50">--from=builder</span> <span className="text-light">/app/.next ./.next</span></div>
                    <div><span className="text-info fw-bold">COPY</span> <span className="text-white-50">--from=builder</span> <span className="text-light">/app/public ./public</span></div>
                    <div><span className="text-info fw-bold">COPY</span> <span className="text-white-50">--from=builder</span> <span className="text-light">/app/node_modules ./node_modules</span></div>
                    <div><span className="text-info fw-bold">COPY</span> <span className="text-white-50">--from=builder</span> <span className="text-light">/app/package*.json ./</span></div>
                    <div className="my-2 border-top border-secondary border-opacity-25"></div>
                    <div><span className="text-info fw-bold">EXPOSE</span> <span className="text-warning">3000</span></div>
                    <div><span className="text-info fw-bold">HEALTHCHECK</span> <span className="text-white-50">--interval=30s --timeout=5s</span> \</div>
                    <div className="ps-3"><span className="text-info fw-bold">CMD</span> <span className="text-light">wget --spider http://localhost:3000/api/health || exit 1</span></div>
                    <div className="mt-2"><span className="text-info fw-bold">CMD</span> [<span className="text-success">"npm"</span>, <span className="text-success">"start"</span>]</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 05. CI/CD PIPELINE ENGINEERING ─── */}
        <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                DevOps Automation
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Automated CI/CD Pipeline Engineering
              </h2>
              <p className="text-muted">
                Replace risky manual FTP or SSH deployments with auditable, automated GitHub Actions pipelines.
              </p>
            </div>

            <div className="row g-4 align-items-center">
              <div className="col-lg-7">
                <div className="p-3 p-md-4 bg-dark rounded-4 border border-secondary border-opacity-25 shadow-lg">
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 pb-3 mb-3 border-bottom border-secondary border-opacity-25 font-monospace">
                    <div className="d-flex align-items-center gap-2">
                      <span className="rounded-circle bg-danger" style={{ width: "9px", height: "9px" }}></span>
                      <span className="rounded-circle bg-warning" style={{ width: "9px", height: "9px" }}></span>
                      <span className="rounded-circle bg-success" style={{ width: "9px", height: "9px" }}></span>
                      <span className="text-white-50 small ms-2"><i className="fa-brands fa-github text-white me-1"></i> .github/workflows/deploy.yml</span>
                    </div>
                    <span className="badge bg-success bg-opacity-25 text-success border border-success border-opacity-25 font-monospace" style={{ fontSize: "0.72rem" }}>
                      <i className="fa-solid fa-check me-1"></i> Passing
                    </span>
                  </div>

                  <div className="d-flex flex-column gap-2">
                    {/* Trigger */}
                    <div className="arch-flow-node py-2 px-3">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <div className="fw-bold text-white small d-flex align-items-center gap-2">
                          <i className="fa-solid fa-code-commit text-info"></i>
                          <span>on: push (refs/heads/main)</span>
                        </div>
                        <span className="badge bg-secondary font-monospace" style={{ fontSize: "0.68rem" }}>SHA 8f2a1b</span>
                      </div>
                    </div>

                    <div className="arch-flow-arrow my-1"><i className="fa-solid fa-arrow-down"></i></div>

                    {/* CI Jobs */}
                    <div className="p-3 rounded-3 bg-black bg-opacity-40 border border-secondary border-opacity-25">
                      <div className="text-muted small font-monospace mb-2 text-uppercase" style={{ fontSize: "0.7rem", letterSpacing: "1px" }}>
                        Continuous Integration Jobs (Parallel)
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <div className="d-flex align-items-center justify-content-between p-2 rounded bg-dark border border-secondary border-opacity-25">
                          <div className="d-flex align-items-center gap-2 small text-light">
                            <i className="fa-solid fa-circle-check text-success"></i>
                            <span>1. Dependency Lockfile &amp; npm ci</span>
                          </div>
                          <span className="text-secondary font-monospace" style={{ fontSize: "0.7rem" }}>14s</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 rounded bg-dark border border-secondary border-opacity-25">
                          <div className="d-flex align-items-center gap-2 small text-light">
                            <i className="fa-solid fa-circle-check text-success"></i>
                            <span>2. Static Analysis &amp; ESLint / Typecheck</span>
                          </div>
                          <span className="text-secondary font-monospace" style={{ fontSize: "0.7rem" }}>21s</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 rounded bg-dark border border-secondary border-opacity-25">
                          <div className="d-flex align-items-center gap-2 small text-light">
                            <i className="fa-solid fa-circle-check text-success"></i>
                            <span>3. Automated Unit &amp; Integration Tests</span>
                          </div>
                          <span className="text-secondary font-monospace" style={{ fontSize: "0.7rem" }}>38s</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 rounded bg-dark border border-secondary border-opacity-25">
                          <div className="d-flex align-items-center gap-2 small text-light">
                            <i className="fa-solid fa-circle-check text-success"></i>
                            <span>4. Security Vulnerability Scan (Trivy)</span>
                          </div>
                          <span className="text-secondary font-monospace" style={{ fontSize: "0.7rem" }}>19s</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 rounded bg-dark border border-secondary border-opacity-25">
                          <div className="d-flex align-items-center gap-2 small text-light">
                            <i className="fa-solid fa-circle-check text-success"></i>
                            <span>5. Immutable Container Build &amp; ECR Push</span>
                          </div>
                          <span className="text-secondary font-monospace" style={{ fontSize: "0.7rem" }}>49s</span>
                        </div>
                      </div>
                    </div>

                    <div className="arch-flow-arrow my-1"><i className="fa-solid fa-arrow-down"></i></div>

                    {/* Promotion Target */}
                    <div className="arch-flow-node py-2 px-3" style={{ borderColor: "rgba(34, 197, 94, 0.35)", background: "rgba(34, 197, 94, 0.08)" }}>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <div className="fw-bold text-success small d-flex align-items-center gap-2">
                          <i className="fa-solid fa-rocket text-success"></i>
                          <span>Zero-Downtime Production Cutover</span>
                        </div>
                        <span className="badge bg-success font-monospace" style={{ fontSize: "0.68rem" }}>Deployed</span>
                      </div>
                      <div className="text-white-50 mt-1" style={{ fontSize: "0.72rem" }}>
                        Staging Smoke Test Verified ➔ Blue/Green ECS Service Swap Completed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="deliv-card">
                  <h5 className="fw-bold mb-3" style={{ color: "#0f172a" }}>Pipeline Capabilities Included</h5>
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2" style={{ fontSize: "0.86rem", color: "#334155" }}>
                    <li className="d-flex align-items-start gap-2">
                      <i className="fa-solid fa-circle-check text-success mt-1"></i>
                      <span><strong>GitHub Actions Workflows:</strong> YAML pipeline configurations committed directly to your repository.</span>
                    </li>
                    <li className="d-flex align-items-start gap-2">
                      <i className="fa-solid fa-circle-check text-success mt-1"></i>
                      <span><strong>Branch Protection Rules:</strong> Require passing tests and peer review before merging into <code>main</code>.</span>
                    </li>
                    <li className="d-flex align-items-start gap-2">
                      <i className="fa-solid fa-circle-check text-success mt-1"></i>
                      <span><strong>Encrypted Secrets Injection:</strong> Secure linkage between GitHub Secrets and cloud target credentials.</span>
                    </li>
                    <li className="d-flex align-items-start gap-2">
                      <i className="fa-solid fa-circle-check text-success mt-1"></i>
                      <span><strong>Rollback Automation:</strong> Instantly redeploy the previous green build if health checks fail.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 06. ENVIRONMENT & SECRET MANAGEMENT ─── */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container py-4">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                  Zero-Leakage Architecture
                </span>
                <h2 className="fw-bold mt-2 mb-3" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                  Environment &amp; Secret Management
                </h2>
                <p className="text-muted" style={{ lineHeight: "1.7" }}>
                  Hardcoding secrets or committing <code>.env</code> files to Git is the #1 cause of credential theft and unauthorized database access.
                  We establish strict environment separation between Local, Staging, and Production.
                </p>

                <div className="p-3 rounded-3 bg-light border mb-3">
                  <div className="fw-bold text-dark small mb-2">We Audit &amp; Isolate Sensitive Credentials:</div>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge bg-secondary font-monospace">DATABASE_URL</span>
                    <span className="badge bg-secondary font-monospace">JWT_SECRET</span>
                    <span className="badge bg-secondary font-monospace">STRIPE_SECRET_KEY</span>
                    <span className="badge bg-secondary font-monospace">REDIS_URL</span>
                    <span className="badge bg-secondary font-monospace">SMTP_PASSWORD</span>
                    <span className="badge bg-secondary font-monospace">AWS_SECRET_ACCESS_KEY</span>
                  </div>
                </div>

                <ul className="list-unstyled mb-0 d-flex flex-column gap-2" style={{ fontSize: "0.86rem", color: "#334155" }}>
                  <li className="d-flex align-items-start gap-2">
                    <i className="fa-solid fa-shield-halved text-primary mt-1"></i>
                    <span><strong>Git History Scrubbing:</strong> We check your git commits for accidentally committed secrets using automated scanners.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="fa-solid fa-shield-halved text-primary mt-1"></i>
                    <span><strong>Cloud Secret Managers:</strong> Integration with AWS Secrets Manager, GCP Secret Manager, or Vercel Sensitive Variables.</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <div className="p-4 rounded-4 bg-light border">
                  <h5 className="fw-bold mb-3 text-dark">Environment Isolation Tier</h5>
                  <div className="d-flex flex-column gap-3">
                    <div className="p-3 bg-white rounded-3 border">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="fw-bold text-dark">1. Development Environment</span>
                        <span className="badge bg-light text-secondary border">.env.local</span>
                      </div>
                      <p className="text-muted small mb-0">Local mock databases, test Stripe keys, and development credentials strictly ignored by git.</p>
                    </div>

                    <div className="p-3 bg-white rounded-3 border border-warning-subtle">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="fw-bold text-dark">2. Preview &amp; Staging Environment</span>
                        <span className="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle">Staging Secrets</span>
                      </div>
                      <p className="text-muted small mb-0">Sandbox APIs, staging database clusters, and automated PR verification environment.</p>
                    </div>

                    <div className="p-3 bg-white rounded-3 border border-success-subtle">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="fw-bold text-dark">3. Production Environment</span>
                        <span className="badge bg-success-subtle text-success border border-success-subtle">Encrypted Vault</span>
                      </div>
                      <p className="text-muted small mb-0">Live production database credentials, encrypted cloud vault secrets, and restricted RBAC access.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 07 & 08. DNS, DOMAIN, SSL & SECURITY HARDENING ─── */}
        <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container py-4">
            <div className="row g-4">
              {/* DNS & SSL */}
              <div className="col-lg-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-network-wired"></i>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: "#0f172a" }}>DNS, Domain &amp; SSL/TLS Configuration</h4>
                  <p className="text-muted small mb-3">
                    A production application requires rock-solid domain and SSL infrastructure. We configure:
                  </p>
                  <ul className="list-unstyled mb-4 d-flex flex-column gap-2" style={{ fontSize: "0.85rem", color: "#334155" }}>
                    <li><i className="fa-solid fa-check text-primary me-2"></i> <strong>Complete DNS Management:</strong> A, AAAA, CNAME, TXT, CAA, and SRV records.</li>
                    <li><i className="fa-solid fa-check text-primary me-2"></i> <strong>Subdomain Ingress:</strong> <code>api.domain.com</code>, <code>app.domain.com</code>, <code>cdn.domain.com</code>.</li>
                    <li><i className="fa-solid fa-check text-primary me-2"></i> <strong>Email Preservation:</strong> Protect MX, SPF, DKIM, and DMARC records during website migrations.</li>
                    <li><i className="fa-solid fa-check text-primary me-2"></i> <strong>Strict SSL/TLS:</strong> Automated Let's Encrypt / Cloudflare Edge certs with HSTS enforced.</li>
                  </ul>
                  <div className="p-2 rounded bg-light border small text-muted font-monospace">
                    example.com ➔ A / AAAA / CAA / SSL Full (Strict)
                  </div>
                </div>
              </div>

              {/* Security Hardening */}
              <div className="col-lg-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon" style={{ background: "#fee2e2", color: "#dc2626" }}>
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: "#0f172a" }}>Production Security Hardening</h4>
                  <p className="text-muted small mb-3">
                    We never treat “the website loads” as equivalent to “the production infrastructure is secure.”
                  </p>
                  <ul className="list-unstyled mb-4 d-flex flex-column gap-2" style={{ fontSize: "0.85rem", color: "#334155" }}>
                    <li><i className="fa-solid fa-shield text-danger me-2"></i> <strong>Server-Level:</strong> SSH key authentication only, disable root login, UFW firewall, fail2ban.</li>
                    <li><i className="fa-solid fa-shield text-danger me-2"></i> <strong>Application-Level:</strong> Security headers (CSP, X-Frame-Options), CORS, rate limiting.</li>
                    <li><i className="fa-solid fa-shield text-danger me-2"></i> <strong>Cloud-Level:</strong> IAM least-privilege policies, security groups, private VPC database subnets.</li>
                    <li><i className="fa-solid fa-shield text-danger me-2"></i> <strong>Zero Public DBs:</strong> Databases accessible exclusively via private subnets or SSH tunnels.</li>
                  </ul>
                  <div className="p-2 rounded bg-light border small text-muted font-monospace">
                    SSH: Port Changed + PubKey Only | UFW: Active | Root: Disabled
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 09 & 10. DATABASE, MONITORING & HEALTH CHECKS ─── */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container py-4">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                  Data &amp; Observability
                </span>
                <h2 className="fw-bold mt-2 mb-3" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                  Database Connectivity &amp; Live Observability
                </h2>
                <p className="text-muted" style={{ lineHeight: "1.7" }}>
                  Production databases require connection pooling to prevent server crashes under sudden traffic spikes.
                  We implement PgBouncer for PostgreSQL, replica sets for MongoDB, and persistent Redis caching layers.
                </p>

                <div className="p-3 rounded-3 bg-light border mb-4">
                  <h6 className="fw-bold text-dark mb-2">Supported Data Systems:</h6>
                  <div className="row g-2 text-secondary" style={{ fontSize: "0.85rem" }}>
                    <div className="col-sm-6"><i className="fa-solid fa-database text-primary me-2"></i> PostgreSQL &amp; PgBouncer</div>
                    <div className="col-sm-6"><i className="fa-brands fa-envira text-success me-2"></i> MongoDB Atlas Clusters</div>
                    <div className="col-sm-6"><i className="fa-solid fa-server text-danger me-2"></i> Redis Memory Cache</div>
                    <div className="col-sm-6"><i className="fa-solid fa-bolt text-warning me-2"></i> Supabase &amp; Firebase</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2 text-secondary small">
                  <i className="fa-solid fa-circle-check text-success"></i>
                  <span>Automated point-in-time snapshot backup lifecycle policies configured on every deployment.</span>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="p-3 p-md-4 bg-dark rounded-4 border border-secondary border-opacity-25 shadow-lg">
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 pb-3 mb-3 border-bottom border-secondary border-opacity-25 font-monospace">
                    <div className="d-flex align-items-center gap-2">
                      <span className="rounded-circle bg-danger" style={{ width: "9px", height: "9px" }}></span>
                      <span className="rounded-circle bg-warning" style={{ width: "9px", height: "9px" }}></span>
                      <span className="rounded-circle bg-success" style={{ width: "9px", height: "9px" }}></span>
                      <span className="text-white-50 small ms-2">GET /api/health</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge bg-success bg-opacity-25 text-success border border-success border-opacity-25 font-monospace" style={{ fontSize: "0.72rem" }}>
                        200 OK
                      </span>
                      <span className="text-secondary font-monospace" style={{ fontSize: "0.72rem" }}>1.8ms</span>
                    </div>
                  </div>

                  <div className="terminal-code-box">
                    <div className="text-secondary">// Live Microservices Telemetry Probe</div>
                    <div>&#123;</div>
                    <div className="ps-3"><span className="text-info">"status"</span>: <span className="text-success">"healthy"</span>,</div>
                    <div className="ps-3"><span className="text-info">"version"</span>: <span className="text-success">"v2.8.4"</span>,</div>
                    <div className="ps-3"><span className="text-info">"environment"</span>: <span className="text-success">"production"</span>,</div>
                    <div className="ps-3"><span className="text-info">"uptime_seconds"</span>: <span className="text-warning">184920</span>,</div>
                    <div className="ps-3"><span className="text-info">"services"</span>: &#123;</div>
                    <div className="ps-4"><span className="text-info">"database"</span>: &#123;</div>
                    <div className="ps-5"><span className="text-info">"status"</span>: <span className="text-success">"connected"</span>,</div>
                    <div className="ps-5"><span className="text-info">"pool_active"</span>: <span className="text-warning">14</span>,</div>
                    <div className="ps-5"><span className="text-info">"pool_idle"</span>: <span className="text-warning">46</span>,</div>
                    <div className="ps-5"><span className="text-info">"latency_ms"</span>: <span className="text-warning">2.4</span></div>
                    <div className="ps-4">&#125;,</div>
                    <div className="ps-4"><span className="text-info">"redis_cache"</span>: &#123;</div>
                    <div className="ps-5"><span className="text-info">"status"</span>: <span className="text-success">"connected"</span>,</div>
                    <div className="ps-5"><span className="text-info">"hit_rate"</span>: <span className="text-success">"98.4%"</span></div>
                    <div className="ps-4">&#125;,</div>
                    <div className="ps-4"><span className="text-info">"memory"</span>: &#123;</div>
                    <div className="ps-5"><span className="text-info">"heap_used_mb"</span>: <span className="text-warning">112</span>,</div>
                    <div className="ps-5"><span className="text-info">"heap_total_mb"</span>: <span className="text-warning">256</span></div>
                    <div className="ps-4">&#125;</div>
                    <div className="ps-3">&#125;</div>
                    <div>&#125;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 11 & 12. CLOUD MIGRATION & TROUBLESHOOTING ─── */}
        <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container py-4">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon">
                    <i className="fa-solid fa-right-left"></i>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: "#0f172a" }}>Zero-Downtime Cloud Migration</h4>
                  <p className="text-muted small mb-3">
                    Moving an existing live application between hosting providers requires methodical engineering to avoid outages.
                  </p>
                  <div className="d-flex flex-column gap-2 mb-3">
                    <div className="d-flex align-items-center gap-2 p-2 rounded-3 bg-light border">
                      <span className="badge bg-primary rounded-pill">01</span>
                      <span className="small fw-semibold text-dark">Audit Current Stack &amp; Resource Footprint</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 p-2 rounded-3 bg-light border">
                      <span className="badge bg-primary rounded-pill">02</span>
                      <span className="small fw-semibold text-dark">Provision Staged Target Cloud &amp; Networking</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 p-2 rounded-3 bg-light border">
                      <span className="badge bg-primary rounded-pill">03</span>
                      <span className="small fw-semibold text-dark">DB Replication &amp; DNS TTL Drop (300s)</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 p-2 rounded-3 bg-light border">
                      <span className="badge bg-success rounded-pill">04</span>
                      <span className="small fw-semibold text-dark">Controlled Traffic Cutover &amp; 24/7 Monitoring</span>
                    </div>
                  </div>
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2" style={{ fontSize: "0.85rem", color: "#334155" }}>
                    <li><i className="fa-solid fa-arrow-right text-primary me-2"></i> VPS / Dedicated Server ➔ AWS / Azure / GCP</li>
                    <li><i className="fa-solid fa-arrow-right text-primary me-2"></i> Shared Hosting / cPanel ➔ Modern Cloud</li>
                    <li><i className="fa-solid fa-arrow-right text-primary me-2"></i> Vercel ➔ Self-Hosted AWS ECS / Docker</li>
                    <li><i className="fa-solid fa-arrow-right text-primary me-2"></i> Monolith Architecture ➔ Containerized Microservices</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="deliv-card">
                  <div className="deliv-card-icon" style={{ background: "#fee2e2", color: "#dc2626" }}>
                    <i className="fa-solid fa-stethoscope"></i>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: "#0f172a" }}>Deployment Troubleshooting &amp; Recovery</h4>
                  <p className="text-muted small mb-3">
                    Already deployed but experiencing production downtime? We isolate the actual failure layer instead of blindly rebooting.
                  </p>
                  <div className="p-3 bg-light rounded-3 border mb-3">
                    <div className="fw-bold text-danger small mb-1">Emergency Outage Triage For:</div>
                    <div className="d-flex flex-wrap gap-1" style={{ fontSize: "0.76rem" }}>
                      <span className="badge bg-danger">502 Bad Gateway</span>
                      <span className="badge bg-danger">503 Unavailable</span>
                      <span className="badge bg-danger">504 Gateway Timeout</span>
                      <span className="badge bg-danger">CrashLoopBackOff</span>
                      <span className="badge bg-danger">SSL_ERROR</span>
                      <span className="badge bg-danger">DB Connection Timeout</span>
                      <span className="badge bg-danger">Build OOM Exit 137</span>
                      <span className="badge bg-danger">CORS Block</span>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/917597451057?text=EMERGENCY%3A%20My%20production%20deployment%20is%20down%2Ffailing.%20Please%20help%20triage."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-danger w-100 fw-bold py-2 rounded-3"
                  >
                    <i className="fa-solid fa-bolt me-1"></i> Request Emergency Outage Recovery
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 13. PRODUCTION DEPLOYMENT CHECKLIST ─── */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Rigorous Verification
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                16-Point Production Deployment Checklist
              </h2>
              <p className="text-muted">
                Every application is validated across all infrastructure layers before declaring handover complete.
              </p>
            </div>

            <div className="row g-3">
              {deploymentChecklist.map((item, idx) => (
                <div key={idx} className="col-lg-6">
                  <div className="p-3 rounded-3 bg-light border h-100 d-flex align-items-start gap-3">
                    <span className="badge bg-primary px-2 py-1 mt-1 font-monospace" style={{ fontSize: "0.75rem" }}>
                      {item.layer}
                    </span>
                    <span className="text-secondary small fw-medium" style={{ lineHeight: "1.5" }}>
                      {item.validation}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <small className="text-muted">
                *Note: Exact checks vary by application architecture. We do not mark infrastructure “production-ready” based solely on a successful homepage response.
              </small>
            </div>
          </div>
        </section>

        {/* ─── 14. SUPPORTED DEPLOYMENT STACK ─── */}
        <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Universal Compatibility
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Supported Cloud Platforms &amp; DevOps Stack
              </h2>
              <p className="text-muted">
                Comprehensive expertise across all major cloud providers, container technologies, and application frameworks.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-3 col-sm-6">
                <div className="p-4 bg-white rounded-3 border h-100">
                  <h6 className="fw-bold text-dark mb-3"><i className="fa-solid fa-cloud text-primary me-2"></i> Cloud Platforms</h6>
                  <ul className="list-unstyled mb-0 small text-secondary d-flex flex-column gap-2">
                    <li>• Amazon Web Services (AWS)</li>
                    <li>• Google Cloud Platform (GCP)</li>
                    <li>• Microsoft Azure</li>
                    <li>• Vercel &amp; Next.js</li>
                    <li>• Cloudflare Edge</li>
                    <li>• Hetzner &amp; DigitalOcean</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="p-4 bg-white rounded-3 border h-100">
                  <h6 className="fw-bold text-dark mb-3"><i className="fa-brands fa-docker text-primary me-2"></i> Container &amp; Proxy</h6>
                  <ul className="list-unstyled mb-0 small text-secondary d-flex flex-column gap-2">
                    <li>• Docker &amp; Docker Compose</li>
                    <li>• Nginx &amp; Traefik Ingress</li>
                    <li>• AWS ECS / Fargate</li>
                    <li>• GCP Cloud Run</li>
                    <li>• Azure Container Apps</li>
                    <li>• ECR / GCR / Docker Hub</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="p-4 bg-white rounded-3 border h-100">
                  <h6 className="fw-bold text-dark mb-3"><i className="fa-solid fa-code text-primary me-2"></i> Application Stacks</h6>
                  <ul className="list-unstyled mb-0 small text-secondary d-flex flex-column gap-2">
                    <li>• Next.js &amp; React (App Router)</li>
                    <li>• Node.js &amp; Express.js</li>
                    <li>• Python FastAPI &amp; Django</li>
                    <li>• REST &amp; GraphQL APIs</li>
                    <li>• Go (Golang) microservices</li>
                    <li>• Headless CMS &amp; Webhooks</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="p-4 bg-white rounded-3 border h-100">
                  <h6 className="fw-bold text-dark mb-3"><i className="fa-solid fa-gears text-primary me-2"></i> DevOps &amp; Databases</h6>
                  <ul className="list-unstyled mb-0 small text-secondary d-flex flex-column gap-2">
                    <li>• GitHub Actions CI/CD</li>
                    <li>• PostgreSQL &amp; PgBouncer</li>
                    <li>• MongoDB Atlas &amp; Redis</li>
                    <li>• AWS RDS &amp; Cloud SQL</li>
                    <li>• CloudWatch &amp; Grafana</li>
                    <li>• Terraform &amp; CloudFormation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 15. OUR DEPLOYMENT METHODOLOGY ─── */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Disciplined Execution
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Our 6-Step Deployment Methodology
              </h2>
              <p className="text-muted">
                How we take your application from local repository code to an enterprise-grade, high-availability production reality.
              </p>
            </div>

            <div className="row g-4">
              {[
                { step: "STEP 01", title: "Infrastructure Audit", desc: "Inspect application code, dependencies, environment requirements, DNS zone, and current hosting bottlenecks." },
                { step: "STEP 02", title: "Architecture Planning", desc: "Select the optimal cloud runtime (AWS, GCP, Azure, Vercel, or VPS) based on workload rather than hype." },
                { step: "STEP 03", title: "Environment Configuration", desc: "Configure secure runtime environments, inject encrypted secrets, setup database pools, and provision networking." },
                { step: "STEP 04", title: "Deployment Execution", desc: "Execute automated git deployment, build multi-stage Docker images, and establish CI/CD pipeline triggers." },
                { step: "STEP 05", title: "Validation & Testing", desc: "Execute the 16-point checklist: test APIs, database queries, SSL chains, reverse proxies, and health endpoints." },
                { step: "STEP 06", title: "Production Handover", desc: "Deliver documentation, architecture blueprints, environment inventory, rollback procedures, and priority SLA." },
              ].map((s, idx) => (
                <div key={idx} className="col-lg-4 col-md-6">
                  <div className="p-4 bg-light rounded-4 border h-100">
                    <span className="badge bg-primary text-white mb-2">{s.step}</span>
                    <h5 className="fw-bold text-dark mb-2">{s.title}</h5>
                    <p className="text-muted small mb-0">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 16. PRICING TIERS ─── */}
        <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Predictable Fixed Rates
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Cloud Hosting &amp; Deployment Packages
              </h2>
              <p className="text-muted">
                Transparent engineering rates with clear deliverables. Choose the tier suited to your workload complexity.
              </p>

              {/* Segmented Currency Switch */}
              <div className="mt-3">
                <div className="currency-switch">
                  <button
                    type="button"
                    onClick={() => setCurrency("USD")}
                    className={`currency-btn ${currency === "USD" ? "active" : ""}`}
                  >
                    🇺🇸 USD ($ Global)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrency("INR")}
                    className={`currency-btn ${currency === "INR" ? "active" : ""}`}
                  >
                    🇮🇳 INR (₹ India)
                  </button>
                </div>
                <div className="text-muted small mt-2" style={{ fontSize: "0.8rem" }}>
                  {currency === "USD"
                    ? "Fixed flat-rate pricing for US, UK, UAE, Canada & Global businesses"
                    : "Domestic pricing with Indian business GST invoicing available"}
                </div>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="row g-4 align-items-stretch mb-5">
              {/* Tier 1: Starter */}
              <div className="col-lg-4">
                <div className="price-card">
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
                    <span className="badge price-scope-tag border" style={{ fontSize: "0.72rem", backgroundColor: "#f1f5f9", color: "#475569", fontWeight: 700 }}>
                      Starter Setup
                    </span>
                    <span className="badge price-scope-tag border" style={{ fontSize: "0.72rem", backgroundColor: "#f8fafc", color: "#64748b", fontWeight: 600 }}>
                      1 App / Site
                    </span>
                  </div>
                  <h4 className="fw-bold mb-2 text-dark" style={{ fontSize: "1.25rem", lineHeight: "1.3" }}>
                    Starter Cloud Deployment
                  </h4>
                  <p className="text-muted small mb-3">
                    For small websites, landing pages, and straightforward Next.js or static frontend deployments.
                  </p>

                  <div className="p-3 rounded-3 bg-light mb-3 border price-box">
                    <div className="d-flex flex-wrap align-items-baseline gap-2">
                      <span className="price-amount" style={{ fontSize: "1.9rem", fontWeight: 900, color: "#0f172a", lineHeight: 1 }}>
                        {currency === "USD" ? "$99" : "₹7,999"}
                      </span>
                      <span className="text-muted small fw-semibold" style={{ whiteSpace: "nowrap" }}>
                        / project
                      </span>
                    </div>
                    <div className="mt-2 pt-2 border-top d-flex align-items-center gap-1 small fw-semibold text-primary" style={{ borderColor: "#e2e8f0" }}>
                      <i className="fa-solid fa-bolt flex-shrink-0 me-1"></i>
                      <span>Target: 24–48h Technical Handover</span>
                    </div>
                  </div>

                  <div className="flex-grow-1 mb-4">
                    <div className="fw-bold small text-uppercase text-secondary mb-2" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                      Included Deliverables:
                    </div>
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2" style={{ fontSize: "0.85rem", color: "#334155" }}>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0"></i>
                        <span>1 Application or website deployment</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0"></i>
                        <span>Vercel or basic cloud VPS configuration</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0"></i>
                        <span>Domain connection &amp; DNS record configuration</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0"></i>
                        <span>Automated SSL/TLS certificate setup</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0"></i>
                        <span>Environment variable secret injection</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0"></i>
                        <span>7-Day post-deployment verification support</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/917597451057?text=Hi%20ChittorTech%2C%20I%20want%20to%20order%20the%20Starter%20Cloud%20Deployment%20package%20(${currency === "USD" ? "$99" : "₹7,999"}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary w-100 fw-bold py-2 rounded-3 mt-auto d-flex align-items-center justify-content-center gap-2"
                  >
                    <i className="fa-brands fa-whatsapp fs-5 text-success"></i>
                    <span>Start Deployment on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Tier 2: Professional (Featured) */}
              <div className="col-lg-4">
                <div className="price-card featured">
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
                    <span className="badge price-scope-tag" style={{ background: "linear-gradient(135deg, #0284c7, #0369a1)", color: "#fff", fontSize: "0.72rem", padding: "5px 11px", borderRadius: "9999px", fontWeight: 700 }}>
                      ★ Recommended
                    </span>
                    <span className="badge price-scope-tag" style={{ backgroundColor: "#e0f2fe", color: "#0369a1", border: "1px solid #bae6fd", fontSize: "0.72rem", fontWeight: 700, padding: "5px 10px", borderRadius: "6px" }}>
                      App + API + Database
                    </span>
                  </div>
                  <h4 className="fw-bold mb-2 text-primary" style={{ fontSize: "1.25rem", lineHeight: "1.3" }}>
                    Professional Cloud &amp; DevOps
                  </h4>
                  <p className="text-muted small mb-3">
                    For production SaaS platforms, APIs, startups, and full-stack applications requiring containers and CI/CD.
                  </p>

                  <div className="p-3 rounded-3 border mb-3 price-box" style={{ backgroundColor: "#f0f9ff", borderColor: "#bae6fd" }}>
                    <div className="d-flex flex-wrap align-items-baseline gap-2">
                      <span className="price-amount" style={{ fontSize: "1.9rem", fontWeight: 900, color: "#0369a1", lineHeight: 1 }}>
                        {currency === "USD" ? "$199" : "₹15,999"}
                      </span>
                      <span className="text-muted small fw-semibold" style={{ whiteSpace: "nowrap" }}>
                        / project
                      </span>
                    </div>
                    <div className="mt-2 pt-2 border-top d-flex align-items-center gap-1 small fw-semibold text-primary" style={{ borderColor: "#bae6fd" }}>
                      <i className="fa-solid fa-shield-halved flex-shrink-0 me-1"></i>
                      <span>Full Container, CI/CD &amp; DB Security</span>
                    </div>
                  </div>

                  <div className="flex-grow-1 mb-4">
                    <div className="fw-bold small text-uppercase text-primary mb-2" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                      Everything in Starter, Plus:
                    </div>
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2" style={{ fontSize: "0.85rem", color: "#334155" }}>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-success mt-1 flex-shrink-0"></i>
                        <span>AWS / Azure / Google Cloud / Vercel deployment</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-success mt-1 flex-shrink-0"></i>
                        <span>Multi-stage Docker containerization</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-success mt-1 flex-shrink-0"></i>
                        <span>GitHub Actions automated CI/CD pipeline</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-success mt-1 flex-shrink-0"></i>
                        <span>PostgreSQL / MongoDB database connectivity &amp; pools</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-success mt-1 flex-shrink-0"></i>
                        <span>Server &amp; application security hardening</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-success mt-1 flex-shrink-0"></i>
                        <span>/api/health check &amp; deployment validation</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-success mt-1 flex-shrink-0"></i>
                        <span>14-Day priority technical support SLA</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/917597451057?text=Hi%20ChittorTech%2C%20I%20want%20to%20order%20the%20Professional%20Cloud%20%26%20DevOps%20package%20(${currency === "USD" ? "$199" : "₹15,999"}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-100 fw-bold py-2 rounded-3 mt-auto shadow-sm d-flex align-items-center justify-content-center gap-2"
                  >
                    <i className="fa-brands fa-whatsapp fs-5"></i>
                    <span>Deploy With DevOps Suite</span>
                  </a>
                </div>
              </div>

              {/* Tier 3: Enterprise */}
              <div className="col-lg-4">
                <div className="price-card">
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
                    <span className="badge bg-dark text-white px-2 py-1 price-scope-tag" style={{ fontSize: "0.72rem", fontWeight: 700 }}>
                      Tier 3 Enterprise
                    </span>
                    <span className="badge bg-secondary text-white px-2 py-1 price-scope-tag" style={{ fontSize: "0.72rem", fontWeight: 600 }}>
                      Multi-Service Fleet
                    </span>
                  </div>
                  <h4 className="fw-bold mb-2 text-dark" style={{ fontSize: "1.25rem", lineHeight: "1.3" }}>
                    Enterprise Fleet &amp; Migration
                  </h4>
                  <p className="text-muted small mb-3">
                    For high-traffic platforms, multi-service architectures, zero-downtime cloud migrations, and hybrid fleets.
                  </p>

                  <div className="p-3 rounded-3 bg-light mb-3 border price-box">
                    <div className="d-flex flex-wrap align-items-baseline gap-2">
                      <span className="price-amount" style={{ fontSize: "1.9rem", fontWeight: 900, color: "#0f172a", lineHeight: 1 }}>
                        {currency === "USD" ? "$449+" : "₹34,999+"}
                      </span>
                      <span className="text-muted small fw-semibold" style={{ whiteSpace: "nowrap" }}>
                        / architecture
                      </span>
                    </div>
                    <div className="mt-2 pt-2 border-top d-flex align-items-center gap-1 small fw-semibold text-primary" style={{ borderColor: "#e2e8f0" }}>
                      <i className="fa-solid fa-layer-group flex-shrink-0 me-1"></i>
                      <span>High-Availability Multi-Service Fleet</span>
                    </div>
                  </div>

                  <div className="flex-grow-1 mb-4">
                    <div className="fw-bold small text-uppercase text-secondary mb-2" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                      Enterprise Scope:
                    </div>
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2" style={{ fontSize: "0.85rem", color: "#334155" }}>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0"></i>
                        <span>Comprehensive cloud architecture design &amp; review</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0"></i>
                        <span>Multi-service Docker / ECS / Cloud Run orchestration</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0"></i>
                        <span>Zero-downtime database &amp; traffic migration</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0"></i>
                        <span>Cloudflare Enterprise WAF, CDN &amp; rate limiting</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0"></i>
                        <span>Full monitoring, logging &amp; alert notification setup</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0"></i>
                        <span>30-Day dedicated implementation &amp; SLA support</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    className="btn btn-outline-dark w-100 fw-bold py-2 rounded-3 mt-auto d-flex align-items-center justify-content-center gap-2"
                    data-bs-toggle="modal"
                    data-bs-target="#trialModal"
                    style={{ whiteSpace: "normal", fontSize: "0.92rem", minHeight: "44px" }}
                  >
                    <i className="fa-solid fa-layer-group"></i>
                    <span>Request Enterprise Scope</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-3 bg-white border text-center text-muted small max-w-2xl mx-auto">
              <i className="fa-solid fa-circle-info text-primary me-1"></i>
              Cloud provider charges (AWS, Azure, GCP, Vercel, domains, third-party databases) are billed directly to your own account by the respective providers. This keeps infrastructure billing transparent without markups.
            </div>
          </div>
        </section>

        {/* ─── 17. DESKTOP & MOBILE SERVICE CAPABILITY MATRIX ─── */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Side-by-Side Comparison
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Package Capability &amp; Deliverable Matrix
              </h2>
              <p className="text-muted">
                Compare exact engineering specifications and deliverables across each deployment tier.
              </p>
            </div>

            {/* Desktop Table */}
            <div className="d-none d-md-block deliv-table-wrap">
              <div className="p-3 bg-light border-bottom fw-bold text-dark">
                Cloud Hosting &amp; Deployment Feature Matrix
              </div>
              <div className="table-responsive">
                <table className="deliv-table">
                  <thead>
                    <tr>
                      <th style={{ width: "40%" }}>Capability / Technical Deliverable</th>
                      <th className="text-center" style={{ width: "20%" }}>{currency === "USD" ? "$99 (Starter)" : "₹7,999"}</th>
                      <th className="text-center" style={{ width: "20%" }}>{currency === "USD" ? "$199 (Professional)" : "₹15,999"}</th>
                      <th className="text-center" style={{ width: "20%" }}>{currency === "USD" ? "$449+ (Enterprise)" : "₹34,999+"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {packageCapabilities.map((row, idx) => (
                      <tr key={idx}>
                        <td>{row.name}</td>
                        <td className="text-center">
                          {row.t1 === "—" ? <span className="text-muted"><i className="fa-solid fa-minus me-1"></i> Not Included</span> : row.t1}
                        </td>
                        <td className="text-center fw-bold text-primary">
                          {row.t2 === "—" ? <span className="text-muted fw-normal"><i className="fa-solid fa-minus me-1"></i> Not Included</span> : row.t2}
                        </td>
                        <td className="text-center text-success fw-bold">
                          {row.t3 === "—" ? <span className="text-muted fw-normal"><i className="fa-solid fa-minus me-1"></i> Not Included</span> : row.t3}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Stacked Cards */}
            <div className="d-block d-md-none">
              <div className="p-3 bg-light border rounded-3 mb-3 fw-bold text-dark text-center" style={{ fontSize: "0.92rem" }}>
                <i className="fa-solid fa-list-check text-primary me-2"></i> Capability &amp; Deliverable Matrix
              </div>
              {packageCapabilities.map((row, idx) => (
                <div key={idx} className="deliv-mobile-card mb-3 p-3 shadow-sm border">
                  <div className="fw-bold text-dark mb-3 pb-2 border-bottom" style={{ fontSize: "0.98rem" }}>
                    {row.name}
                  </div>
                  <div className="d-flex flex-column gap-2">
                    {/* Tier 1 */}
                    <div className="p-2 px-3 rounded bg-light border">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="badge bg-secondary-subtle text-secondary" style={{ fontSize: "0.7rem" }}>Starter</span>
                        <span className="text-muted fw-bold" style={{ fontSize: "0.75rem" }}>{currency === "USD" ? "$99" : "₹7,999"}</span>
                      </div>
                      <div style={{ fontSize: "0.88rem" }}>
                        {row.t1 === "—" ? (
                          <span className="text-muted"><i className="fa-solid fa-minus text-secondary me-1"></i> Not Included</span>
                        ) : row.t1.includes("✓") ? (
                          <span className="text-success fw-bold">{row.t1}</span>
                        ) : (
                          <span className="text-dark fw-medium">{row.t1}</span>
                        )}
                      </div>
                    </div>

                    {/* Tier 2 */}
                    <div className="p-2 px-3 rounded border" style={{ backgroundColor: "#f0f9ff", borderColor: "#bae6fd" }}>
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="badge bg-primary text-white" style={{ fontSize: "0.7rem" }}>Professional ★ Recommended</span>
                        <span className="fw-bold text-primary" style={{ fontSize: "0.75rem" }}>{currency === "USD" ? "$199" : "₹15,999"}</span>
                      </div>
                      <div style={{ fontSize: "0.88rem" }}>
                        {row.t2 === "—" ? (
                          <span className="text-muted"><i className="fa-solid fa-minus text-secondary me-1"></i> Not Included</span>
                        ) : (
                          <span className="fw-bold text-primary">{row.t2}</span>
                        )}
                      </div>
                    </div>

                    {/* Tier 3 */}
                    <div className="p-2 px-3 rounded bg-dark text-white border border-dark">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="badge bg-white text-dark" style={{ fontSize: "0.7rem" }}>Enterprise Fleet</span>
                        <span className="text-white-50 fw-bold" style={{ fontSize: "0.75rem" }}>{currency === "USD" ? "$449+" : "₹34,999+"}</span>
                      </div>
                      <div style={{ fontSize: "0.88rem" }}>
                        {row.t3 === "—" ? (
                          <span className="text-white-50"><i className="fa-solid fa-minus text-white-50 me-1"></i> Not Included</span>
                        ) : (
                          <span className="text-success fw-bold">{row.t3}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 18. FREQUENTLY ASKED QUESTIONS ─── */}
        <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container py-4">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                Technical Transparency
              </span>
              <h2 className="fw-bold mt-2" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                Frequently Asked Questions
              </h2>
              <p className="text-muted">
                Detailed answers to common technical, architectural, and billing questions about our deployment services.
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="accordion" id="cloudFaqAccordion">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="accordion-item mb-3 border rounded-3 overflow-hidden shadow-sm">
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button fw-bold ${openFaq === idx ? "" : "collapsed"}`}
                          type="button"
                          onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                          style={{
                            backgroundColor: openFaq === idx ? "#f0f9ff" : "#ffffff",
                            color: openFaq === idx ? "#0369a1" : "#1e293b",
                            fontSize: "1rem",
                          }}
                        >
                          {faq.q}
                        </button>
                      </h2>
                      {openFaq === idx && (
                        <div className="accordion-body bg-white text-secondary" style={{ lineHeight: "1.7", fontSize: "0.95rem" }}>
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 19. WHY CHITTORTECH ─── */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container py-4">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.8rem" }}>
                  The ChittorTech Advantage
                </span>
                <h2 className="fw-bold mt-2 mb-3" style={{ color: "#0f172a", fontSize: "2.2rem" }}>
                  Engineered Around Your Workload, Not a Generic Package
                </h2>
                <p className="text-muted" style={{ lineHeight: "1.7" }}>
                  Most hosting providers treat deployment as copying files to a server.
                  ChittorTech combines <strong>Application Development + Cloud Infrastructure + DNS + Security + Deployment Automation</strong> into one unified workflow.
                </p>

                <div className="p-3 rounded-3 bg-light border mb-3">
                  <div className="fw-bold text-dark mb-1">We Connect Both Sides of the Stack:</div>
                  <div className="text-primary fw-bold font-monospace small">
                    APP + DB + API + DNS + CLOUD + CI/CD + SECURITY ➔ RELIABLE PRODUCTION SYSTEM
                  </div>
                </div>

                <p className="text-secondary small mb-0">
                  Instead of treating deployment as an isolated afterthought, we examine the complete path from Git commit ➔ build ➔ infrastructure ➔ DNS ➔ HTTPS ➔ application ➔ database ➔ end user.
                </p>
              </div>

              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="p-4 rounded-3 bg-light border h-100">
                      <div className="fs-3 text-primary mb-2"><i className="fa-solid fa-lock"></i></div>
                      <h6 className="fw-bold text-dark">Zero Master Passwords</h6>
                      <p className="text-muted small mb-0">We use delegated IAM, team invitations, or live screen-share. Your credentials stay secure.</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="p-4 rounded-3 bg-light border h-100">
                      <div className="fs-3 text-success mb-2"><i className="fa-solid fa-infinity"></i></div>
                      <h6 className="fw-bold text-dark">Automated Pipelines</h6>
                      <p className="text-muted small mb-0">Every deployment is repeatable, audited by Git history, and immune to manual human error.</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="p-4 rounded-3 bg-light border h-100">
                      <div className="fs-3 text-warning mb-2"><i className="fa-solid fa-gauge-high"></i></div>
                      <h6 className="fw-bold text-dark">Cost-Optimized</h6>
                      <p className="text-muted small mb-0">We eliminate idle oversized VMs and configure auto-scaling so you only pay for what you use.</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="p-4 rounded-3 bg-light border h-100">
                      <div className="fs-3 text-info mb-2"><i className="fa-solid fa-headset"></i></div>
                      <h6 className="fw-bold text-dark">Direct Engineer Access</h6>
                      <p className="text-muted small mb-0">Work directly with elite cloud engineers on WhatsApp or screen-share without ticket delays.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 20. BOTTOM HIGH-CONVERTING CTA SECTION ─── */}
        <section
          className="bottom-cta-section py-5 text-white position-relative"
          style={{
            background: "linear-gradient(135deg, #060913 0%, #0b1120 50%, #1e1b4b 100%)",
            overflow: "hidden",
          }}
        >
          <div className="container py-5 text-center position-relative" style={{ zIndex: 2 }}>
            <span
              className="badge cta-badge mb-3"
              style={{
                background: "rgba(56, 189, 248, 0.15)",
                color: "#38bdf8",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                padding: "8px 18px",
                borderRadius: "9999px",
                fontSize: "0.82rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              <i className="fa-solid fa-rocket me-2"></i> Stop Fighting Deployment Errors
            </span>
            <h2 className="fw-bold cta-h2 mb-3" style={{ fontSize: "2.4rem" }}>
              Ready to Deploy Your Application With Confidence?
            </h2>
            <p className="lead mx-auto mb-4 text-slate-300" style={{ maxWidth: "680px", color: "#cbd5e1", fontSize: "1.1rem" }}>
              Whether you need a Next.js setup on Vercel, a containerized Node.js API on AWS, or a complete multi-cloud infrastructure migration, ChittorTech engineers are ready to build it right.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="deliv-btn-wa"
              >
                <i className="fa-brands fa-whatsapp fs-5"></i>
                <span>Deploy Now — WhatsApp (+91 75974 51057)</span>
              </a>
              <button
                type="button"
                className="deliv-btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#trialModal"
              >
                <i className="fa-solid fa-calendar-check"></i>
                <span>Schedule Deployment Audit</span>
              </button>
            </div>

            <div className="d-flex flex-wrap justify-content-center gap-4 text-secondary small pt-3 border-top border-secondary border-opacity-25">
              <span><i className="fa-solid fa-check text-success me-1"></i> USA · UK · UAE · Canada · Australia · India</span>
              <span><i className="fa-solid fa-check text-success me-1"></i> Direct Engineering Consultation</span>
              <span><i className="fa-solid fa-check text-success me-1"></i> Documented Handover SOPs</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
