"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";

const CF_REDIRECTS_SAMPLE = `# /public/_redirects - SPA Routing Fallback
# Ensures React Router, Vue Router, and Next.js static exports don't 404 on refresh
/*    /index.html   200

# Optional custom redirects:
/docs https://github.com/your-username/your-repo 302
/api/* https://your-backend.onrender.com/api/:splat 200`;

const CF_HEADERS_SAMPLE = `# /public/_headers - Production Edge Security & Caching
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), camera=(), microphone=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload

/assets/*
  Cache-Control: public, max-age=31536000, immutable`;

const CF_WORKER_SAMPLE = `// worker.js - 100% Free Cloudflare Edge Worker
// 0ms cold start, runs globally across 300+ edge data centers
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Handle CORS preflight for student frontends
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (url.pathname === "/api/edge-info") {
      const clientData = {
        status: "online",
        colo: request.cf?.colo || "DELHI_EDGE",
        city: request.cf?.city || "New Delhi",
        country: request.cf?.country || "IN",
        clientIP: request.headers.get("cf-connecting-ip"),
        coldStart: false,
        latencyMs: "< 15ms",
        poweredBy: "Cloudflare Workers & ChittorTech"
      };

      return new Response(JSON.stringify(clientData, null, 2), {
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*",
          "cache-control": "public, max-age=60"
        },
      });
    }

    return new Response("Cloudflare Edge Worker Active. Visit /api/edge-info", { status: 200 });
  },
};`;

const CF_WRANGLER_TOML = `# wrangler.toml - Edge Worker / Pages Project Config
name = "student-edge-api"
main = "src/worker.js"
compatibility_date = "2026-09-09"

[vars]
ENVIRONMENT = "production"
CHITTORTECH_MAINTAINER = "true"

# Free KV Database Binding (Up to 100,000 free reads/day)
# [[kv_namespaces]]
# binding = "CACHE_STORAGE"
# id = "your-kv-namespace-id"`;

export default function CloudflareMasterclassPage() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("redirects");
  const [openFaq, setOpenFaq] = useState(0);
  const [faqSearch, setFaqSearch] = useState("");

  // Interactive Checklist
  const [checkedSteps, setCheckedSteps] = useState([true, true, false, false, false]);
  const toggleStep = (idx) => {
    setCheckedSteps((prev) => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  };
  const completedCount = checkedSteps.filter(Boolean).length;
  const progressPercent = Math.round((completedCount / 5) * 100);

  // Interactive DNS Proxy Switcher
  const [proxyMode, setProxyMode] = useState(true); // true = Proxied (Orange), false = DNS only (Grey)

  // Interactive Terminal Simulator
  const [simRunning, setSimRunning] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([
    "==> Initializing Cloudflare Pages edge pipeline...",
    "==> Detected Vite / React build (dist/ directory specified)",
    "==> Uploading 48 static assets to Cloudflare Global Edge Cache...",
    "==> Routing rules: _redirects and _headers parsed successfully",
    "==> Deployment complete! 🎉",
    "==> Live Preview URL: https://student-project-7c8.pages.dev",
    "==> Edge Latency: 12ms (Anycast routing active via 300+ cities)",
    "==> Press 'Simulate Edge Deploy' below to test again"
  ]);

  const runDeploymentSim = () => {
    if (simRunning) return;
    setSimRunning(true);
    setTerminalLogs([
      "==> [1/4] Triggering Cloudflare Pages build hook...",
      "==> [2/4] Cloning branch 'main' from GitHub repository..."
    ]);

    setTimeout(() => {
      setTerminalLogs((prev) => [
        ...prev,
        "==> [3/4] Running: npm run build (Bundled in 1.48s)",
        "==> [3/4] Analyzing /public/_redirects: Verified SPA fallback (/* -> /index.html)",
        "==> [3/4] Provisioning zero-cost SSL certificate (Universal Edge SSL)..."
      ]);
    }, 900);

    setTimeout(() => {
      setTerminalLogs((prev) => [
        ...prev,
        "==> [4/4] Distributing assets across 300+ Edge Data Centers globally...",
        "==> Status: 100% HEALTHY • Unlimited Bandwidth Active • DDoS Shield ON",
        "==> Production URL: https://student-project-7c8.pages.dev 🚀"
      ]);
      setSimRunning(false);
    }, 2000);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const faqs = [
    {
      q: "Is Cloudflare Pages really 100% free with unlimited bandwidth?",
      a: "Yes! Cloudflare Pages offers unlimited free bandwidth, unlimited static requests, and up to 500 builds per month on their Free Tier. Unlike Vercel (which caps free bandwidth at 100GB/mo) or AWS, Cloudflare does not charge a single rupee for static bandwidth even if your project goes viral on Reddit or Twitter."
    },
    {
      q: "How do I fix 404 errors when refreshing routes in React / Vue / Vite?",
      a: "By default, static hosts look for a physical HTML file matching the URL. When you refresh a path like '/dashboard', it returns a 404. Simply create a file named '_redirects' inside your '/public' folder containing the single line: '/* /index.html 200'. Cloudflare will route all requests to your single-page app."
    },
    {
      q: "What is the difference between Proxied (Orange Cloud) and DNS Only (Grey Cloud)?",
      a: "When the cloud is Orange (Proxied), web traffic routes through Cloudflare's edge network first. This provides free DDoS protection, CDN edge caching, SSL termination, and hides your origin server's true IP. Grey Cloud (DNS only) bypasses Cloudflare proxying and points directly to your origin server without CDN caching."
    },
    {
      q: "How do I fix the 'Error 525: SSL handshake failed' or redirect loop?",
      a: "In Cloudflare dashboard &rarr; SSL/TLS, check your encryption mode. If your origin web server (like Render, Vercel, or Apache) already has an SSL certificate, select 'Full' or 'Full (strict)'. Do not use 'Flexible' if your server already redirects HTTP to HTTPS, as that creates an infinite redirect loop."
    },
    {
      q: "Can I connect my free custom domain (.me / .tech) from GitHub Student Pack?",
      a: "Absolutely! Go to your domain registrar (Namecheap/Hostinger) and change the NameServers to the two nameservers provided by Cloudflare (e.g., ns1.cloudflare.com). Once active, go to Cloudflare Pages &rarr; Custom Domains &rarr; Add Domain. Cloudflare handles DNS CNAME flattening and automated SSL renewal with zero maintenance."
    },
    {
      q: "What is the difference between Cloudflare Pages and Cloudflare Workers?",
      a: "Cloudflare Pages is specifically optimized for hosting frontend user interfaces (HTML, React, Next.js static export, Vite, Astro). Cloudflare Workers are serverless V8 isolate microservices that run backend JavaScript/TypeScript at the edge with 0ms cold starts and 100,000 free requests per day."
    },
    {
      q: "Can I host full-stack Next.js or Node.js backends on Cloudflare Pages?",
      a: "Cloudflare Pages supports static Next.js (`output: 'export'`) and edge-rendered Next.js via the `@cloudflare/next-on-pages` adapter. However, if your app requires continuous Node.js socket servers (Socket.io) or Express background tasks, we recommend hosting your frontend on Cloudflare Pages and your backend on Render."
    },
    {
      q: "Why does ChittorTech recommend Cloudflare for student portfolios and client MVPs?",
      a: "Because it guarantees $0 hosting costs forever with enterprise-grade speeds. There is zero risk of unexpected credit card charges from bandwidth spikes, and global Anycast routing ensures the website loads in under 30ms anywhere in India or the world."
    }
  ];

  const filteredFaqs = useMemo(() => {
    if (!faqSearch.trim()) return faqs;
    const q = faqSearch.toLowerCase();
    return faqs.filter(f => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
  }, [faqSearch, faqs]);

  return (
    <div className="cf-master-page">
      <style>{`
        * { box-sizing: border-box; max-width: 100%; }
        .cf-master-page {
          background-color: #080c15;
          color: #f1f5f9;
          font-family: var(--font-inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
          min-height: 100vh;
          overflow-x: hidden !important;
          padding-bottom: 120px;
        }

        .cf-hero {
          position: relative;
          padding: 80px 20px 48px;
          text-align: center;
          background: radial-gradient(circle at 50% -20%, rgba(246, 130, 31, 0.25), transparent 70%),
                      radial-gradient(circle at 80% 20%, rgba(255, 102, 0, 0.1), transparent 50%);
          border-bottom: 1px solid rgba(246, 130, 31, 0.15);
        }

        .cf-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 9999px;
          background: rgba(246, 130, 31, 0.12);
          border: 1px solid rgba(246, 130, 31, 0.35);
          color: #f6821f;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .cf-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f6821f;
          box-shadow: 0 0 10px #f6821f;
        }

        .cf-title {
          font-size: clamp(30px, 5.5vw, 54px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #ffffff 40%, #fdba74 80%, #f6821f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cf-subtitle {
          font-size: clamp(15px, 2.5vw, 19px);
          color: #94a3b8;
          max-width: 800px;
          margin: 0 auto 32px;
          line-height: 1.6;
        }

        .cf-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          align-items: center;
          margin-bottom: 36px;
        }

        .cf-btn-primary {
          background: linear-gradient(135deg, #f6821f, #ea580c);
          color: #ffffff;
          padding: 14px 28px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(246, 130, 31, 0.4);
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .cf-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(246, 130, 31, 0.6);
        }

        .cf-btn-secondary {
          background: rgba(30, 41, 59, 0.8);
          color: #e2e8f0;
          padding: 14px 24px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.12);
          transition: all 0.2s ease;
        }

        .cf-btn-secondary:hover {
          background: rgba(51, 65, 85, 0.9);
          border-color: rgba(246, 130, 31, 0.4);
        }

        .cf-hero-metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 16px;
          max-width: 860px;
          margin: 0 auto;
        }

        .cf-metric-card {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(246, 130, 31, 0.15);
          padding: 16px;
          border-radius: 14px;
          text-align: center;
        }

        .cf-metric-val {
          font-size: 22px;
          font-weight: 800;
          color: #fb923c;
          margin-bottom: 4px;
        }

        .cf-metric-lbl {
          font-size: 12px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .cf-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 48px 20px;
        }

        .cf-section-title {
          font-size: clamp(24px, 3.5vw, 36px);
          font-weight: 800;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .cf-section-subtitle {
          color: #94a3b8;
          font-size: 16px;
          margin-bottom: 32px;
          line-height: 1.5;
        }

        /* Checklist Card */
        .cf-checklist-card {
          background: rgba(15, 23, 42, 0.85);
          border: 1px solid rgba(246, 130, 31, 0.25);
          border-radius: 20px;
          padding: 28px;
          margin-bottom: 48px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .cf-checklist-header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .cf-progress-bar-bg {
          width: 100%;
          height: 8px;
          background: #1e293b;
          border-radius: 9999px;
          overflow: hidden;
          margin-top: 8px;
        }

        .cf-progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #f6821f, #fb923c);
          transition: width 0.3s ease;
        }

        .cf-steps-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .cf-step-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px 18px;
          border-radius: 12px;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.06);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cf-step-item:hover {
          background: rgba(51, 65, 85, 0.5);
          border-color: rgba(246, 130, 31, 0.3);
        }

        .cf-step-item.checked {
          border-color: rgba(246, 130, 31, 0.4);
          background: rgba(246, 130, 31, 0.06);
        }

        .cf-custom-checkbox {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          border: 2px solid #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
          transition: all 0.2s ease;
        }

        .cf-step-item.checked .cf-custom-checkbox {
          background: #f6821f;
          border-color: #f6821f;
          color: white;
        }

        .cf-step-text-title {
          font-weight: 700;
          font-size: 15px;
          color: #f8fafc;
          margin-bottom: 3px;
        }

        .cf-step-text-desc {
          font-size: 13px;
          color: #94a3b8;
          line-height: 1.4;
        }

        /* Interactive DNS Visualizer */
        .cf-dns-card {
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 28px;
          margin-bottom: 48px;
        }

        .cf-dns-toggle-box {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 18px 0 24px;
          background: #0f172a;
          padding: 12px 18px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          flex-wrap: wrap;
        }

        .cf-cloud-btn {
          padding: 8px 18px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          border: none;
          transition: all 0.2s ease;
        }

        .cf-cloud-btn.orange {
          background: #f6821f;
          color: #ffffff;
        }

        .cf-cloud-btn.grey {
          background: #475569;
          color: #f8fafc;
        }

        .cf-dns-preview-box {
          background: #090d16;
          border-radius: 12px;
          padding: 20px;
          border: 1px solid rgba(246, 130, 31, 0.2);
        }

        /* Terminal Simulator */
        .cf-term-card {
          background: #050811;
          border: 1px solid rgba(246, 130, 31, 0.3);
          border-radius: 18px;
          overflow: hidden;
          margin-bottom: 48px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.6);
        }

        .cf-term-bar {
          background: #0d1322;
          padding: 12px 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .cf-term-dots {
          display: flex;
          gap: 8px;
        }

        .cf-term-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .cf-term-body {
          padding: 20px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 13.5px;
          line-height: 1.6;
          color: #e2e8f0;
          min-height: 220px;
          max-height: 340px;
          overflow-y: auto;
        }

        .cf-term-line {
          margin-bottom: 4px;
          word-break: break-all;
        }

        /* Code Hub Tabs */
        .cf-code-hub {
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          overflow: hidden;
          margin-bottom: 48px;
        }

        .cf-tab-nav {
          display: flex;
          overflow-x: auto;
          background: #090d16;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .cf-tab-btn {
          padding: 14px 20px;
          background: transparent;
          border: none;
          color: #94a3b8;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          white-space: nowrap;
          border-bottom: 2px solid transparent;
          transition: all 0.2s ease;
        }

        .cf-tab-btn.active {
          color: #fb923c;
          border-bottom-color: #f6821f;
          background: rgba(246, 130, 31, 0.05);
        }

        .cf-code-wrapper {
          position: relative;
          background: #070a12;
          padding: 20px;
        }

        .cf-copy-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          background: #1e293b;
          color: #e2e8f0;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cf-copy-btn:hover {
          background: #f6821f;
          color: white;
        }

        pre code {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 13.5px;
          line-height: 1.5;
          color: #cbd5e1;
          display: block;
          overflow-x: auto;
        }

        /* Comparison Table */
        
        @media (max-width: 768px) {
          .cf-table-scroll { display: none !important; }
          .cf-mobile-points { display: flex !important; flex-direction: column; gap: 12px; }
        }
        @media (min-width: 769px) {
          .cf-mobile-points { display: none !important; }
        }

        .cf-table-card {
          background: rgba(15, 23, 42, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          overflow: hidden;
          margin-bottom: 48px;
        }

        .cf-table-scroll {
          overflow-x: auto;
        }

        .cf-comp-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 14px;
        }

        .cf-comp-table th, .cf-comp-table td {
          padding: 16px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .cf-comp-table th {
          background: #090d16;
          color: #94a3b8;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0.05em;
        }

        .cf-highlight-col {
          background: rgba(246, 130, 31, 0.06);
          color: #fb923c;
          font-weight: 700;
        }

        /* FAQ Section */
        .cf-faq-section {
          margin-bottom: 48px;
        }

        .cf-search-box {
          width: 100%;
          padding: 14px 20px;
          border-radius: 12px;
          background: #090d16;
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
          font-size: 15px;
          margin-bottom: 24px;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .cf-search-box:focus {
          border-color: #f6821f;
        }

        .cf-faq-item {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          margin-bottom: 14px;
          overflow: hidden;
          transition: border-color 0.2s ease;
        }

        .cf-faq-item:hover {
          border-color: rgba(246, 130, 31, 0.3);
        }

        .cf-faq-header {
          padding: 18px 22px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 700;
          font-size: 15px;
          color: #f1f5f9;
        }

        .cf-faq-body {
          padding: 0 22px 18px;
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.6;
        }

        /* CTA Banner */
        .cf-cta-box {
          background: linear-gradient(135deg, rgba(246, 130, 31, 0.15), rgba(234, 88, 12, 0.05));
          border: 1px solid rgba(246, 130, 31, 0.4);
          border-radius: 20px;
          padding: 40px 24px;
          text-align: center;
          margin-top: 48px;
        }

        @media (max-width: 640px) {
          .cf-hero { padding: 60px 16px 36px; }
          .cf-checklist-card, .cf-dns-card, .cf-code-hub { padding: 20px 16px; }
          .cf-term-body { font-size: 12px; padding: 14px; }
        }
      `}</style>

      {/* Hero Header */}
      <section className="cf-hero">
        <div className="cf-badge">
          <span className="cf-badge-dot"></span>
          2026 Developer & Student Edition • 100% Free Forever
        </div>
        <h1 className="cf-title">Cloudflare Pages & Workers: The Zero-Cost Edge Masterclass</h1>
        <p className="cf-subtitle">
          The ultimate guide for students and developers to deploy static frontends with <strong>unlimited free bandwidth</strong>, 
          0ms cold-start edge microservices, custom domain SSL, and enterprise DDoS shielding without paying a single dollar.
        </p>

        <div className="cf-hero-actions">
          <a href="#checklist" className="cf-btn-primary">
            Start 5-Step Deployment Guide &rarr;
          </a>
          <a href="#code-hub" className="cf-btn-secondary">
            Copy Configs &amp; Workers
          </a>
          <a href="#simulator" className="cf-btn-secondary">
            Interactive DNS &amp; CLI Simulator
          </a>
        </div>

        <div className="cf-hero-metrics">
          <div className="cf-metric-card">
            <div className="cf-metric-val">Unlimited</div>
            <div className="cf-metric-lbl">Free Bandwidth</div>
          </div>
          <div className="cf-metric-card">
            <div className="cf-metric-val">0ms</div>
            <div className="cf-metric-lbl">Worker Cold Start</div>
          </div>
          <div className="cf-metric-card">
            <div className="cf-metric-val">300+</div>
            <div className="cf-metric-lbl">Global Edge Cities</div>
          </div>
          <div className="cf-metric-card">
            <div className="cf-metric-val">$0 / Mo</div>
            <div className="cf-metric-lbl">Free Tier Forever</div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="cf-container">
        
        {/* Interactive 5-Step Checklist */}
        <section id="checklist" className="cf-checklist-card">
          <div className="cf-checklist-header">
            <div>
              <h2 className="cf-section-title" style={{ fontSize: "22px", marginBottom: "4px" }}>
                Interactive Deployment Roadmap (Student Edition)
              </h2>
              <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0 }}>
                Check off each milestone to verify your project is 100% production-ready on Cloudflare.
              </p>
            </div>
            <div style={{ textAlign: "right", minWidth: "140px" }}>
              <span style={{ fontSize: "14px", fontWeight: 700, color: "#fb923c" }}>
                {completedCount} of 5 Completed ({progressPercent}%)
              </span>
              <div className="cf-progress-bar-bg">
                <div className="cf-progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
              </div>
            </div>
          </div>

          <div className="cf-steps-list">
            {[
              {
                title: "1. Push Code to GitHub / Drag & Drop dist/ folder",
                desc: "Cloudflare Pages allows 1-click continuous deployment from GitHub or direct manual drag-and-drop zip uploads."
              },
              {
                title: "2. Set Framework Build Preset (Vite / React / Astro)",
                desc: "Choose your framework. Build Command: 'npm run build', Build Output Directory: 'dist' (or 'out' for static Next.js)."
              },
              {
                title: "3. Configure SPA Routing (_redirects file in /public)",
                desc: "Add /* /index.html 200 inside public/_redirects to stop React Router 404s when refreshing sub-pages."
              },
              {
                title: "4. Connect Free Custom Domain & Automatic SSL",
                desc: "Add your domain in Pages Settings. Cloudflare assigns CNAME flattening and auto-renews Universal SSL certificates."
              },
              {
                title: "5. Enable Proxied Shield & Edge Caching (Orange Cloud)",
                desc: "Route traffic through 300+ edge data centers for instant <30ms latency and 100% DDoS attack absorption."
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className={`cf-step-item ${checkedSteps[idx] ? "checked" : ""}`}
                onClick={() => toggleStep(idx)}
              >
                <div className="cf-custom-checkbox">
                  {checkedSteps[idx] && <span>&#10003;</span>}
                </div>
                <div>
                  <div className="cf-step-text-title">{step.title}</div>
                  <div className="cf-step-text-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive DNS Visualizer */}
        <section className="cf-dns-card">
          <h2 className="cf-section-title">Interactive DNS Routing: Orange vs Grey Cloud</h2>
          <p className="cf-section-subtitle">
            Toggle between Cloudflare Proxy (Orange Cloud) and DNS Only (Grey Cloud) to understand why millions of developers proxy their domains.
          </p>

          <div className="cf-dns-toggle-box">
            <span style={{ fontWeight: 600, color: "#e2e8f0" }}>Selected Mode:</span>
            <button
              className={`cf-cloud-btn ${proxyMode ? "orange" : "grey"}`}
              onClick={() => setProxyMode(!proxyMode)}
            >
              {proxyMode ? "🟠 Proxied (Cloudflare Shield Active)" : "⚪ DNS Only (Direct to Host)"}
            </button>
            <span style={{ fontSize: "13px", color: "#94a3b8" }}>
              (Click button to toggle modes)
            </span>
          </div>

          <div className="cf-dns-preview-box">
            {proxyMode ? (
              <div>
                <h3 style={{ color: "#fb923c", marginTop: 0, fontSize: "16px" }}>
                  ✅ Active: Orange Cloud (Proxied CDN &amp; WAF)
                </h3>
                <ul style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6, paddingLeft: "20px", margin: 0 }}>
                  <li><strong>True Origin IP Hidden:</strong> Attackers cannot see your actual server IP address.</li>
                  <li><strong>Unlimited Global Caching:</strong> Images, CSS, and JS cache at 300+ edge locations for sub-15ms load times.</li>
                  <li><strong>Enterprise DDoS Shield:</strong> Automatic rate limiting and bot mitigation at layer 3, 4, and 7.</li>
                  <li><strong>Zero-Cost SSL:</strong> Cloudflare automatically issues and renews Universal Edge SSL certs.</li>
                </ul>
              </div>
            ) : (
              <div>
                <h3 style={{ color: "#cbd5e1", marginTop: 0, fontSize: "16px" }}>
                  ⚠️ Active: Grey Cloud (DNS Only)
                </h3>
                <ul style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6, paddingLeft: "20px", margin: 0 }}>
                  <li><strong>Bypasses Cloudflare CDN:</strong> Requests hit your server directly with no caching benefits.</li>
                  <li><strong>Exposed IP:</strong> Anyone who runs `dig` or `nslookup` sees your server's true IP.</li>
                  <li><strong>No Automatic DDoS Shield:</strong> If your server gets high traffic, it must absorb all requests alone.</li>
                  <li><strong>Recommended Only For:</strong> SSH, FTP, or mail protocols that cannot route over HTTP/HTTPS proxy.</li>
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Live Terminal & Edge Simulator */}
        <section id="simulator" className="cf-term-card">
          <div className="cf-term-bar">
            <div className="cf-term-dots">
              <span className="cf-term-dot" style={{ background: "#ef4444" }}></span>
              <span className="cf-term-dot" style={{ background: "#f59e0b" }}></span>
              <span className="cf-term-dot" style={{ background: "#10b981" }}></span>
            </div>
            <span style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 600 }}>
              Cloudflare Wrangler Edge Terminal
            </span>
            <button
              onClick={runDeploymentSim}
              disabled={simRunning}
              style={{
                background: simRunning ? "#334155" : "#f6821f",
                color: "#ffffff",
                border: "none",
                borderRadius: "6px",
                padding: "4px 12px",
                fontSize: "12px",
                fontWeight: 700,
                cursor: simRunning ? "default" : "pointer"
              }}
            >
              {simRunning ? "Deploying..." : "Simulate Edge Deploy"}
            </button>
          </div>

          <div className="cf-term-body">
            {terminalLogs.map((log, i) => (
              <div key={i} className="cf-term-line">
                <span style={{ color: log.includes("🎉") || log.includes("🚀") ? "#34d399" : log.includes("Error") ? "#f87171" : "#94a3b8" }}>
                  {log}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Code Hub */}
        <section id="code-hub" className="cf-code-hub">
          <div className="cf-tab-nav">
            <button
              className={`cf-tab-btn ${activeTab === "redirects" ? "active" : ""}`}
              onClick={() => setActiveTab("redirects")}
            >
              _redirects (SPA Fix)
            </button>
            <button
              className={`cf-tab-btn ${activeTab === "headers" ? "active" : ""}`}
              onClick={() => setActiveTab("headers")}
            >
              _headers (Security &amp; Caching)
            </button>
            <button
              className={`cf-tab-btn ${activeTab === "worker" ? "active" : ""}`}
              onClick={() => setActiveTab("worker")}
            >
              Free Edge Worker API
            </button>
            <button
              className={`cf-tab-btn ${activeTab === "wrangler" ? "active" : ""}`}
              onClick={() => setActiveTab("wrangler")}
            >
              wrangler.toml Config
            </button>
          </div>

          <div className="cf-code-wrapper">
            <button
              className="cf-copy-btn"
              onClick={() => {
                const codeMap = {
                  redirects: CF_REDIRECTS_SAMPLE,
                  headers: CF_HEADERS_SAMPLE,
                  worker: CF_WORKER_SAMPLE,
                  wrangler: CF_WRANGLER_TOML
                };
                handleCopy(codeMap[activeTab]);
              }}
            >
              {copied ? "Copied to Clipboard!" : "Copy Code"}
            </button>

            <pre>
              <code>
                {activeTab === "redirects" && CF_REDIRECTS_SAMPLE}
                {activeTab === "headers" && CF_HEADERS_SAMPLE}
                {activeTab === "worker" && CF_WORKER_SAMPLE}
                {activeTab === "wrangler" && CF_WRANGLER_TOML}
              </code>
            </pre>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="cf-table-card">
          <div style={{ padding: "24px 24px 12px" }}>
            <h2 className="cf-section-title" style={{ fontSize: "22px", marginBottom: "4px" }}>
              Cloudflare Pages vs Competitors (Student Cost &amp; Limits)
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0 }}>
              Why Cloudflare Pages is the gold standard for portfolio sites, client prototypes, and JAMstack apps.
            </p>
          </div>

          <div className="cf-table-scroll">
            <table className="cf-comp-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="cf-highlight-col">Cloudflare Pages</th>
                  <th>Vercel Hobby</th>
                  <th>Netlify Starter</th>
                  <th>GitHub Pages</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly Bandwidth</td>
                  <td className="cf-highlight-col">Unlimited Free</td>
                  <td>100 GB / mo</td>
                  <td>100 GB / mo</td>
                  <td>100 GB / mo</td>
                </tr>
                <tr>
                  <td>Edge Cold Starts</td>
                  <td className="cf-highlight-col">0ms (V8 Isolates)</td>
                  <td>250ms - 800ms</td>
                  <td>300ms - 1s</td>
                  <td>Static Only (N/A)</td>
                </tr>
                <tr>
                  <td>Custom Domains</td>
                  <td className="cf-highlight-col">Unlimited + Apex CNAME</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>1 per repository</td>
                </tr>
                <tr>
                  <td>DDoS Shielding</td>
                  <td className="cf-highlight-col">Enterprise Unmetered</td>
                  <td>Basic Protection</td>
                  <td>Basic Protection</td>
                  <td>None (Rate Limited)</td>
                </tr>
                <tr>
                  <td>Price Forever</td>
                  <td className="cf-highlight-col">$0.00 / mo</td>
                  <td>$0 (Non-commercial)</td>
                  <td>$0 (Non-commercial)</td>
                  <td>$0.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="cf-mobile-points" style={{ padding: "0 16px 20px" }}>
            <div style={{ background: "rgba(15, 23, 42, 0.8)", border: "1px solid rgba(246, 130, 31, 0.3)", borderRadius: "14px", padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ fontWeight: 800, color: "#ffffff", fontSize: "0.95rem" }}>Monthly Bandwidth</span>
                <span style={{ background: "rgba(246, 130, 31, 0.2)", color: "#fb923c", padding: "3px 10px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700 }}>Unlimited Free</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: "18px", color: "#94a3b8", fontSize: "0.84rem", lineHeight: 1.55 }}>
                <li><strong style={{ color: "#fb923c" }}>Cloudflare Pages:</strong> 100% Unlimited bandwidth forever with zero charges</li>
                <li><strong>Vercel Hobby:</strong> Capped at 100 GB / month</li>
                <li><strong>Netlify Starter:</strong> Capped at 100 GB / month</li>
                <li><strong>GitHub Pages:</strong> Capped at 100 GB / month</li>
              </ul>
            </div>

            <div style={{ background: "rgba(15, 23, 42, 0.8)", border: "1px solid rgba(246, 130, 31, 0.3)", borderRadius: "14px", padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ fontWeight: 800, color: "#ffffff", fontSize: "0.95rem" }}>Edge Cold Starts</span>
                <span style={{ background: "rgba(246, 130, 31, 0.2)", color: "#fb923c", padding: "3px 10px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700 }}>0ms Latency</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: "18px", color: "#94a3b8", fontSize: "0.84rem", lineHeight: 1.55 }}>
                <li><strong style={{ color: "#fb923c" }}>Cloudflare Workers:</strong> 0ms cold starts (instant V8 isolates at 300+ locations)</li>
                <li><strong>Vercel:</strong> 250ms - 800ms cold starts on serverless lambdas</li>
                <li><strong>Netlify:</strong> 300ms - 1s function spin up</li>
              </ul>
            </div>

            <div style={{ background: "rgba(15, 23, 42, 0.8)", border: "1px solid rgba(246, 130, 31, 0.3)", borderRadius: "14px", padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ fontWeight: 800, color: "#ffffff", fontSize: "0.95rem" }}>Security &amp; DDoS Shield</span>
                <span style={{ background: "rgba(246, 130, 31, 0.2)", color: "#fb923c", padding: "3px 10px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700 }}>Unmetered</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: "18px", color: "#94a3b8", fontSize: "0.84rem", lineHeight: 1.55 }}>
                <li><strong style={{ color: "#fb923c" }}>Cloudflare:</strong> Enterprise-grade Anycast DDoS absorption &amp; HTTP/3</li>
                <li><strong>Competitors:</strong> Standard rate limiting without edge WAF shield</li>
              </ul>
            </div>
          </div>

        </section>

        {/* Searchable Student FAQ */}
        <section className="cf-faq-section">
          <h2 className="cf-section-title">Frequently Asked Questions for Students &amp; Developers</h2>
          <p className="cf-section-subtitle">
            Instant real-time search across the most common Cloudflare setup problems, custom domain pitfalls, and worker tricks.
          </p>

          <input
            type="text"
            className="cf-search-box"
            placeholder="Search FAQs (e.g., bandwidth, 404, redirects, SSL, worker, domain)..."
            value={faqSearch}
            onChange={(e) => setFaqSearch(e.target.value)}
          />

          {filteredFaqs.length === 0 ? (
            <div style={{ textAlign: "center", padding: "32px", color: "#94a3b8" }}>
              No questions found matching "{faqSearch}". Try searching for "SSL", "domain", or "worker".
            </div>
          ) : (
            filteredFaqs.map((faq, i) => (
              <div key={i} className="cf-faq-item">
                <div
                  className="cf-faq-header"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span>{faq.q}</span>
                  <span style={{ color: "#fb923c", fontSize: "18px" }}>
                    {openFaq === i ? "−" : "+"}
                  </span>
                </div>
                {openFaq === i && (
                  <div className="cf-faq-body">
                    {faq.a}
                  </div>
                )}
              </div>
            ))
          )}
        </section>

        {/* ChittorTech CTA Banner */}
        <section className="cf-cta-box">
          <h2 style={{ fontSize: "26px", fontWeight: 800, margin: "0 0 12px", color: "#ffffff" }}>
            Ready to Build &amp; Scale Your Web Application?
          </h2>
          <p style={{ color: "#94a3b8", maxWidth: "600px", margin: "0 auto 24px", fontSize: "15px", lineHeight: 1.6 }}>
            Whether you are a college student developing your dream portfolio or an enterprise needing global edge architectures, 
            ChittorTech engineers your cloud deployment with unmatched performance.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact-us" className="cf-btn-primary">
              Book a Free Architecture Consultation &rarr;
            </Link>
            <Link href="/" className="cf-btn-secondary">
              Explore ChittorTech Services
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
