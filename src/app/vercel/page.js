"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";

const VERCEL_JSON_SAMPLE = `{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "cleanUrls": true,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}`;

const VERCEL_SERVERLESS_ROUTE = `// src/app/api/hello/route.js - Next.js 14/15 App Router Serverless API
import { NextResponse } from 'next/server';

export const runtime = 'edge'; // Zero cold start on Vercel Edge Network

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || 'Student Developer';

  return NextResponse.json({
    message: \`Hello, \${name}!\`,
    status: 'online',
    platform: 'Vercel Serverless Edge Function',
    timestamp: new Date().toISOString(),
    latency: '< 20ms',
    maintainedBy: 'ChittorTech Developer Guide'
  }, {
    status: 200,
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30'
    }
  });
}`;

const VERCEL_CLI_CHEATSHEET = `# Vercel CLI Quick Reference Cheatsheet
# 1. Install global CLI
npm install -g vercel

# 2. Authenticate with GitHub / Email
vercel login

# 3. Link current directory to existing Vercel project
vercel link

# 4. Pull remote production environment variables locally (.env.local)
vercel env pull .env.local

# 5. Deploy preview branch build
vercel

# 6. Deploy directly to 100% live production domain
vercel --prod`;

const NEXT_CONFIG_REWRITE_HACK = `// next.config.mjs - The Zero-CORS Hack for Student Projects!
// Proxies frontend API calls directly to your Render backend server
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // When frontend calls /api/users, Next.js invisibly proxies to Render
        source: '/api/:path*',
        destination: 'https://your-backend.onrender.com/api/:path*',
      },
    ];
  },
  // Emergency Deadline Hack: ignore TypeScript/ESLint errors during 'vercel build'
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;`;

export default function VercelMasterclassPage() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("route");
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

  // Framework Preset Selector
  const [selectedFramework, setSelectedFramework] = useState("nextjs");
  const frameworkPresets = {
    nextjs: {
      name: "Next.js (App / Pages Router)",
      command: "next build",
      output: ".next",
      features: "Server-Side Rendering (SSR), Static Generation (SSG), Edge Route Handlers"
    },
    vite: {
      name: "Vite + React / Vue",
      command: "vite build",
      output: "dist",
      features: "Instant HMR, Lightweight single-page application client bundle"
    },
    astro: {
      name: "Astro",
      command: "astro build",
      output: "dist",
      features: "Zero-JS by default, Content-driven websites with Islands architecture"
    },
    remix: {
      name: "Remix / Nuxt",
      command: "npm run build",
      output: ".output/public",
      features: "Fullstack web standards, nested layouts, fine-grained cache control"
    }
  };

  // Terminal Simulator
  const [simRunning, setSimRunning] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([
    "==> Running: vercel --prod",
    "==> Vercel CLI 34.2.0 (detected x64 windows)",
    "==> Linked to chittortech/student-fullstack (project id: prj_9a2f)",
    "==> Inspecting project structure... Framework: Next.js 15.1",
    "==> Running 'npm run build'...",
    "    ✓ Compiled /api/hello in 180ms",
    "    ✓ Generating static pages (SSG) [4/4]",
    "    ✓ Finalizing page optimization...",
    "==> Production: https://student-project.vercel.app [copied to clipboard]",
    "==> Aliased to custom domain: https://studentportfolio.in 🎉"
  ]);

  const runDeploymentSim = () => {
    if (simRunning) return;
    setSimRunning(true);
    setTerminalLogs([
      "==> [1/4] Running: vercel --prod (Uploading project files)...",
      "==> [2/4] Initializing build container in Washington, D.C. (iad1)..."
    ]);

    setTimeout(() => {
      setTerminalLogs((prev) => [
        ...prev,
        "==> [3/4] Auto-detected Framework: Next.js (App Router)",
        "==> [3/4] Next.js telemetry disabled. Building production bundle...",
        "==> [3/4] Route (app) /api/hello: Edge Serverless (12.4 kB)",
        "==> [3/4] Route (app) /: Static Prerender (HTML + JSON)"
      ]);
    }, 900);

    setTimeout(() => {
      setTerminalLogs((prev) => [
        ...prev,
        "==> [4/4] Deploying outputs to 18 global edge points of presence...",
        "==> Build completed in 2.89s! ✨",
        "==> Production URL: https://student-project.vercel.app 🚀",
        "==> Edge SSL Certificate issued & verified."
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
      q: "Is Vercel really 100% free for students and personal portfolios?",
      a: "Yes! Vercel's Hobby plan is completely free forever for non-commercial use, student portfolios, college assignments, and open-source projects. It includes 100GB bandwidth per month, unlimited serverless function executions (within free quotas), automated SSL, and preview branches on every git push."
    },
    {
      q: "How do I connect my custom domain to Vercel without paying extra?",
      a: "In your Vercel project, go to Settings &rarr; Domains. Enter your domain (e.g., studentname.com). Vercel will provide two records: an A record pointing to 76.76.21.21 and a CNAME record for 'www' pointing to cname.vercel-dns.com. Add these in your registrar (GoDaddy, Hostinger, Namecheap). Vercel automatically verifies DNS and generates a free SSL certificate."
    },
    {
      q: "Should I deploy on Vercel or Render for my MERN stack project?",
      a: "The ideal modern architecture is to split them! Host your frontend (React or Next.js) on Vercel for instant CDN caching, lightning-fast edge performance, and zero server management. Host your backend (Node.js/Express with MongoDB/PostgreSQL) on Render. You can use Next.js rewrites to eliminate all CORS errors effortlessly."
    },
    {
      q: "Why does my Next.js build fail on Vercel with 'Command npm run build exited with 1'?",
      a: "Vercel runs strict production builds. If your code has ESLint warnings or TypeScript type mismatches, the build will halt. You can test locally by running 'npm run build' in your terminal. For emergency assignment deadlines, you can add 'typescript: { ignoreBuildErrors: true }' and 'eslint: { ignoreDuringBuilds: true }' in next.config.mjs."
    },
    {
      q: "How do environment variables work on Vercel?",
      a: "Go to Project Settings &rarr; Environment Variables. Add keys like DATABASE_URL or NEXT_PUBLIC_API_URL. You can scope them specifically to Production, Preview, or Development. Never commit your .env.local file to GitHub!"
    },
    {
      q: "What happens if my student project exceeds the 100GB monthly bandwidth?",
      a: "On the Hobby plan, Vercel will notify you via email when you reach 80% and 100% of your limit. If exceeded, your site may be temporarily paused until the next billing cycle. To optimize bandwidth, always use next/image for automatic WebP compression and cache static assets with long max-age headers."
    },
    {
      q: "Can I use GitHub Student Developer Pack with Vercel?",
      a: "Yes! GitHub Student Pack includes free domains (.me from Namecheap, .tech) which you can connect directly to your Vercel projects at zero cost."
    },
    {
      q: "How can ChittorTech assist developers and businesses with Vercel architecture?",
      a: "ChittorTech helps developers and companies build high-converting web applications, migrate from monolithic legacy servers to Next.js on Vercel, optimize Web Vitals for #1 Google ranking, and configure enterprise serverless cloud architectures."
    }
  ];

  const filteredFaqs = useMemo(() => {
    if (!faqSearch.trim()) return faqs;
    const q = faqSearch.toLowerCase();
    return faqs.filter(f => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
  }, [faqSearch, faqs]);

  const activePreset = frameworkPresets[selectedFramework];

  return (
    <div className="vercel-master-page">
      <style>{`
        * { box-sizing: border-box; max-width: 100%; }
        .vercel-master-page {
          background-color: #000000;
          color: #ededed;
          font-family: var(--font-inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
          min-height: 100vh;
          overflow-x: hidden !important;
          padding-bottom: 120px;
        }

        .vercel-hero {
          position: relative;
          padding: 80px 20px 48px;
          text-align: center;
          background: radial-gradient(circle at 50% -20%, rgba(255, 255, 255, 0.15), transparent 60%),
                      radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08), transparent 50%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .vercel-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .vercel-triangle {
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-bottom: 10px solid #ffffff;
        }

        .vercel-title {
          font-size: clamp(30px, 5.5vw, 54px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
          background: linear-gradient(180deg, #ffffff 0%, #a1a1aa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .vercel-subtitle {
          font-size: clamp(15px, 2.5vw, 19px);
          color: #a1a1aa;
          max-width: 820px;
          margin: 0 auto 32px;
          line-height: 1.6;
        }

        .vercel-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          align-items: center;
          margin-bottom: 36px;
        }

        .vercel-btn-primary {
          background: #ffffff;
          color: #000000;
          padding: 14px 28px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.25);
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .vercel-btn-primary:hover {
          background: #e4e4e7;
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(255, 255, 255, 0.4);
        }

        .vercel-btn-secondary {
          background: rgba(24, 24, 27, 0.8);
          color: #ededed;
          padding: 14px 24px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.2s ease;
        }

        .vercel-btn-secondary:hover {
          background: rgba(39, 39, 42, 0.9);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .vercel-hero-metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 16px;
          max-width: 860px;
          margin: 0 auto;
        }

        .vercel-metric-card {
          background: rgba(18, 18, 18, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 16px;
          border-radius: 14px;
          text-align: center;
        }

        .vercel-metric-val {
          font-size: 22px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .vercel-metric-lbl {
          font-size: 12px;
          color: #a1a1aa;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .vercel-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 48px 20px;
        }

        .vercel-section-title {
          font-size: clamp(24px, 3.5vw, 36px);
          font-weight: 800;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        .vercel-section-subtitle {
          color: #a1a1aa;
          font-size: 16px;
          margin-bottom: 32px;
          line-height: 1.5;
        }

        /* Checklist Card */
        .vercel-checklist-card {
          background: rgba(18, 18, 18, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          padding: 28px;
          margin-bottom: 48px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .vercel-checklist-header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .vercel-progress-bar-bg {
          width: 100%;
          height: 8px;
          background: #27272a;
          border-radius: 9999px;
          overflow: hidden;
          margin-top: 8px;
        }

        .vercel-progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #38bdf8, #ffffff);
          transition: width 0.3s ease;
        }

        .vercel-steps-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .vercel-step-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px 18px;
          border-radius: 12px;
          background: rgba(24, 24, 27, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .vercel-step-item:hover {
          background: rgba(39, 39, 42, 0.7);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .vercel-step-item.checked {
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.04);
        }

        .vercel-custom-checkbox {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          border: 2px solid #71717a;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
          transition: all 0.2s ease;
        }

        .vercel-step-item.checked .vercel-custom-checkbox {
          background: #ffffff;
          border-color: #ffffff;
          color: black;
          font-weight: bold;
        }

        .vercel-step-text-title {
          font-weight: 700;
          font-size: 15px;
          color: #ffffff;
          margin-bottom: 3px;
        }

        .vercel-step-text-desc {
          font-size: 13px;
          color: #a1a1aa;
          line-height: 1.4;
        }

        /* Framework Preset Interactive Box */
        .vercel-framework-box {
          background: rgba(18, 18, 18, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          padding: 28px;
          margin-bottom: 48px;
        }

        .vercel-pill-group {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .vercel-pill-btn {
          padding: 8px 18px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: #18181b;
          color: #a1a1aa;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .vercel-pill-btn.active {
          background: #ffffff;
          color: #000000;
          border-color: #ffffff;
        }

        .vercel-preset-details {
          background: #09090b;
          border-radius: 12px;
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }

        .vercel-preset-field-label {
          font-size: 11px;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }

        .vercel-preset-field-val {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 14px;
          color: #38bdf8;
          font-weight: 600;
        }

        /* Terminal Simulator */
        .vercel-term-card {
          background: #050505;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 18px;
          overflow: hidden;
          margin-bottom: 48px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.7);
        }

        .vercel-term-bar {
          background: #121212;
          padding: 12px 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .vercel-term-dots {
          display: flex;
          gap: 8px;
        }

        .vercel-term-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .vercel-term-body {
          padding: 20px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 13.5px;
          line-height: 1.6;
          color: #d4d4d8;
          min-height: 220px;
          max-height: 340px;
          overflow-y: auto;
        }

        .vercel-term-line {
          margin-bottom: 4px;
          word-break: break-all;
        }

        /* Code Hub Tabs */
        .vercel-code-hub {
          background: rgba(18, 18, 18, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          overflow: hidden;
          margin-bottom: 48px;
        }

        .vercel-tab-nav {
          display: flex;
          overflow-x: auto;
          background: #09090b;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .vercel-tab-btn {
          padding: 14px 20px;
          background: transparent;
          border: none;
          color: #a1a1aa;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          white-space: nowrap;
          border-bottom: 2px solid transparent;
          transition: all 0.2s ease;
        }

        .vercel-tab-btn.active {
          color: #ffffff;
          border-bottom-color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }

        .vercel-code-wrapper {
          position: relative;
          background: #000000;
          padding: 20px;
        }

        .vercel-copy-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          background: #27272a;
          color: #ededed;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .vercel-copy-btn:hover {
          background: #ffffff;
          color: #000000;
        }

        pre code {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 13.5px;
          line-height: 1.5;
          color: #e4e4e7;
          display: block;
          overflow-x: auto;
        }

        /* Comparison Table */
        
        @media (max-width: 768px) {
          .vercel-table-scroll { display: none !important; }
          .vercel-mobile-points { display: flex !important; flex-direction: column; gap: 12px; }
        }
        @media (min-width: 769px) {
          .vercel-mobile-points { display: none !important; }
        }

        .vercel-table-card {
          background: rgba(18, 18, 18, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          overflow: hidden;
          margin-bottom: 48px;
        }

        .vercel-table-scroll {
          overflow-x: auto;
        }

        .vercel-comp-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 14px;
        }

        .vercel-comp-table th, .vercel-comp-table td {
          padding: 16px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .vercel-comp-table th {
          background: #09090b;
          color: #a1a1aa;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0.05em;
        }

        .vercel-highlight-col {
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          font-weight: 700;
        }

        /* FAQ Section */
        .vercel-faq-section {
          margin-bottom: 48px;
        }

        .vercel-search-box {
          width: 100%;
          padding: 14px 20px;
          border-radius: 12px;
          background: #09090b;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          font-size: 15px;
          margin-bottom: 24px;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .vercel-search-box:focus {
          border-color: #ffffff;
        }

        .vercel-faq-item {
          background: rgba(18, 18, 18, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          margin-bottom: 14px;
          overflow: hidden;
          transition: border-color 0.2s ease;
        }

        .vercel-faq-item:hover {
          border-color: rgba(255, 255, 255, 0.3);
        }

        .vercel-faq-header {
          padding: 18px 22px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 700;
          font-size: 15px;
          color: #ffffff;
        }

        .vercel-faq-body {
          padding: 0 22px 18px;
          color: #a1a1aa;
          font-size: 14px;
          line-height: 1.6;
        }

        /* CTA Banner */
        .vercel-cta-box {
          background: linear-gradient(180deg, rgba(24, 24, 27, 0.9), rgba(9, 9, 11, 0.95));
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 40px 24px;
          text-align: center;
          margin-top: 48px;
        }

        @media (max-width: 640px) {
          .vercel-hero { padding: 60px 16px 36px; }
          .vercel-checklist-card, .vercel-framework-box, .vercel-code-hub { padding: 20px 16px; }
          .vercel-term-body { font-size: 12px; padding: 14px; }
        }
      `}</style>

      {/* Hero Header */}
      <section className="vercel-hero">
        <div className="vercel-badge">
          <span className="vercel-triangle"></span>
          2026 Developer &amp; Student Edition • Next.js &amp; React Blueprint
        </div>
        <h1 className="vercel-title">Vercel &amp; Next.js Masterclass: Deployments, Serverless &amp; Domains</h1>
        <p className="vercel-subtitle">
          The comprehensive guide for students and developers to deploy Next.js and full-stack React applications for <strong>$0 forever</strong> with 
          instant edge CDN distribution, custom domain DNS mapping, and zero-configuration CI/CD.
        </p>

        <div className="vercel-hero-actions">
          <a href="#checklist" className="vercel-btn-primary">
            Start 5-Step Deployment Guide &rarr;
          </a>
          <a href="#code-hub" className="vercel-btn-secondary">
            Copy Configs &amp; Zero-CORS Hack
          </a>
          <a href="#simulator" className="vercel-btn-secondary">
            Interactive Vercel CLI Simulator
          </a>
        </div>

        <div className="vercel-hero-metrics">
          <div className="vercel-metric-card">
            <div className="vercel-metric-val">100 GB</div>
            <div className="vercel-metric-lbl">Free Monthly Bandwidth</div>
          </div>
          <div className="vercel-metric-card">
            <div className="vercel-metric-val">0-Config</div>
            <div className="vercel-metric-lbl">Framework Detection</div>
          </div>
          <div className="vercel-metric-card">
            <div className="vercel-metric-val">Global</div>
            <div className="vercel-metric-lbl">Anycast Edge Network</div>
          </div>
          <div className="vercel-metric-card">
            <div className="vercel-metric-val">100% Free</div>
            <div className="vercel-metric-lbl">Hobby Plan Forever</div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="vercel-container">
        
        {/* Interactive 5-Step Checklist */}
        <section id="checklist" className="vercel-checklist-card">
          <div className="vercel-checklist-header">
            <div>
              <h2 className="vercel-section-title" style={{ fontSize: "22px", marginBottom: "4px" }}>
                Interactive Deployment Roadmap (Next.js &amp; Frontend)
              </h2>
              <p style={{ color: "#a1a1aa", fontSize: "14px", margin: 0 }}>
                Follow these 5 steps to verify your application is ready for production on Vercel.
              </p>
            </div>
            <div style={{ textAlign: "right", minWidth: "140px" }}>
              <span style={{ fontSize: "14px", fontWeight: 700, color: "#38bdf8" }}>
                {completedCount} of 5 Completed ({progressPercent}%)
              </span>
              <div className="vercel-progress-bar-bg">
                <div className="vercel-progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
              </div>
            </div>
          </div>

          <div className="vercel-steps-list">
            {[
              {
                title: "1. Push Next.js / React Code to GitHub",
                desc: "Ensure your project builds locally ('npm run build') and push your repository to GitHub or GitLab."
              },
              {
                title: "2. Import Repository into Vercel Dashboard",
                desc: "Click 'Add New Project' &rarr; 'Import'. Vercel automatically detects Next.js, Vite, or Astro settings."
              },
              {
                title: "3. Configure Environment Variables (.env.production)",
                desc: "Paste your production secrets like DATABASE_URL or NEXT_PUBLIC_API_URL under the Environment Variables tab."
              },
              {
                title: "4. Map Free Custom Domain with DNS A-Record (76.76.21.21)",
                desc: "Add your domain in Settings -> Domains. Point an A record to 76.76.21.21 or CNAME to cname.vercel-dns.com."
              },
              {
                title: "5. Automatic Preview Deployments on Pull Requests",
                desc: "Every pull request gets a unique live preview URL for testing before merging to your production branch."
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className={`vercel-step-item ${checkedSteps[idx] ? "checked" : ""}`}
                onClick={() => toggleStep(idx)}
              >
                <div className="vercel-custom-checkbox">
                  {checkedSteps[idx] && <span>&#10003;</span>}
                </div>
                <div>
                  <div className="vercel-step-text-title">{step.title}</div>
                  <div className="vercel-step-text-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Framework Preset Interactive Explorer */}
        <section className="vercel-framework-box">
          <h2 className="vercel-section-title">Zero-Configuration Framework Detection</h2>
          <p className="vercel-section-subtitle">
            Click on any framework below to inspect how Vercel automatically configures build scripts, output directories, and optimizations:
          </p>

          <div className="vercel-pill-group">
            {Object.keys(frameworkPresets).map((fw) => (
              <button
                key={fw}
                className={`vercel-pill-btn ${selectedFramework === fw ? "active" : ""}`}
                onClick={() => setSelectedFramework(fw)}
              >
                {frameworkPresets[fw].name}
              </button>
            ))}
          </div>

          <div className="vercel-preset-details">
            <div>
              <div className="vercel-preset-field-label">Build Command</div>
              <div className="vercel-preset-field-val">{activePreset.command}</div>
            </div>
            <div>
              <div className="vercel-preset-field-label">Output Directory</div>
              <div className="vercel-preset-field-val">{activePreset.output}</div>
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <div className="vercel-preset-field-label">Edge &amp; Deployment Capabilities</div>
              <div style={{ fontSize: "14px", color: "#e4e4e7", lineHeight: 1.5 }}>
                {activePreset.features}
              </div>
            </div>
          </div>
        </section>

        {/* Live Terminal & CLI Simulator */}
        <section id="simulator" className="vercel-term-card">
          <div className="vercel-term-bar">
            <div className="vercel-term-dots">
              <span className="vercel-term-dot" style={{ background: "#ef4444" }}></span>
              <span className="vercel-term-dot" style={{ background: "#f59e0b" }}></span>
              <span className="vercel-term-dot" style={{ background: "#10b981" }}></span>
            </div>
            <span style={{ fontSize: "12px", color: "#a1a1aa", fontWeight: 600 }}>
              Vercel CLI Production Pipeline Simulator
            </span>
            <button
              onClick={runDeploymentSim}
              disabled={simRunning}
              style={{
                background: simRunning ? "#27272a" : "#ffffff",
                color: simRunning ? "#71717a" : "#000000",
                border: "none",
                borderRadius: "6px",
                padding: "4px 12px",
                fontSize: "12px",
                fontWeight: 700,
                cursor: simRunning ? "default" : "pointer"
              }}
            >
              {simRunning ? "Deploying..." : "Simulate Vercel Deploy"}
            </button>
          </div>

          <div className="vercel-term-body">
            {terminalLogs.map((log, i) => (
              <div key={i} className="vercel-term-line">
                <span style={{ color: log.includes("🎉") || log.includes("🚀") || log.includes("✓") ? "#38bdf8" : log.includes("Error") ? "#f87171" : "#a1a1aa" }}>
                  {log}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Code Hub */}
        <section id="code-hub" className="vercel-code-hub">
          <div className="vercel-tab-nav">
            <button
              className={`vercel-tab-btn ${activeTab === "route" ? "active" : ""}`}
              onClick={() => setActiveTab("route")}
            >
              Edge Serverless Route (Next.js)
            </button>
            <button
              className={`vercel-tab-btn ${activeTab === "rewrite" ? "active" : ""}`}
              onClick={() => setActiveTab("rewrite")}
            >
              next.config.mjs (Zero-CORS Hack)
            </button>
            <button
              className={`vercel-tab-btn ${activeTab === "config" ? "active" : ""}`}
              onClick={() => setActiveTab("config")}
            >
              vercel.json (Security Headers)
            </button>
            <button
              className={`vercel-tab-btn ${activeTab === "cli" ? "active" : ""}`}
              onClick={() => setActiveTab("cli")}
            >
              CLI Cheatsheet
            </button>
          </div>

          <div className="vercel-code-wrapper">
            <button
              className="vercel-copy-btn"
              onClick={() => {
                const codeMap = {
                  route: VERCEL_SERVERLESS_ROUTE,
                  rewrite: NEXT_CONFIG_REWRITE_HACK,
                  config: VERCEL_JSON_SAMPLE,
                  cli: VERCEL_CLI_CHEATSHEET
                };
                handleCopy(codeMap[activeTab]);
              }}
            >
              {copied ? "Copied to Clipboard!" : "Copy Code"}
            </button>

            <pre>
              <code>
                {activeTab === "route" && VERCEL_SERVERLESS_ROUTE}
                {activeTab === "rewrite" && NEXT_CONFIG_REWRITE_HACK}
                {activeTab === "config" && VERCEL_JSON_SAMPLE}
                {activeTab === "cli" && VERCEL_CLI_CHEATSHEET}
              </code>
            </pre>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="vercel-table-card">
          <div style={{ padding: "24px 24px 12px" }}>
            <h2 className="vercel-section-title" style={{ fontSize: "22px", marginBottom: "4px" }}>
              Vercel vs Render vs Netlify vs AWS Amplify
            </h2>
            <p style={{ color: "#a1a1aa", fontSize: "14px", margin: 0 }}>
              Comparing serverless speed, persistent container support, cold starts, and free quotas.
            </p>
          </div>

          <div className="vercel-table-scroll">
            <table className="vercel-comp-table">
              <thead>
                <tr>
                  <th>Platform</th>
                  <th className="vercel-highlight-col">Vercel Hobby</th>
                  <th>Render Free</th>
                  <th>Netlify Starter</th>
                  <th>AWS Amplify</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Best Use Case</td>
                  <td className="vercel-highlight-col">Next.js &amp; Frontend</td>
                  <td>Node/Python Backends</td>
                  <td>Static &amp; JAMstack</td>
                  <td>AWS Ecosystem</td>
                </tr>
                <tr>
                  <td>Continuous Server (Express)</td>
                  <td className="vercel-highlight-col">No (Serverless only)</td>
                  <td>Yes (750 free hrs/mo)</td>
                  <td>No (Serverless only)</td>
                  <td>Requires EC2/ECS</td>
                </tr>
                <tr>
                  <td>Monthly Bandwidth</td>
                  <td className="vercel-highlight-col">100 GB / mo</td>
                  <td>100 GB / mo</td>
                  <td>100 GB / mo</td>
                  <td>15 GB (12 mo free)</td>
                </tr>
                <tr>
                  <td>Cold Starts</td>
                  <td className="vercel-highlight-col">&lt; 150ms (Edge: 0ms)</td>
                  <td>~50s if asleep</td>
                  <td>~300ms - 1s</td>
                  <td>Variable (~1s)</td>
                </tr>
                <tr>
                  <td>Instant Preview Branches</td>
                  <td className="vercel-highlight-col">Unlimited Free</td>
                  <td>Paid on Web Services</td>
                  <td>Unlimited Free</td>
                  <td>Manual Setup</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="vercel-mobile-points" style={{ padding: "0 16px 20px" }}>
            <div style={{ background: "rgba(24, 24, 27, 0.8)", border: "1px solid rgba(255, 255, 255, 0.15)", borderRadius: "14px", padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ fontWeight: 800, color: "#ffffff", fontSize: "0.95rem" }}>Frontend &amp; Next.js</span>
                <span style={{ background: "rgba(56, 189, 248, 0.15)", color: "#38bdf8", padding: "3px 10px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700 }}>Best-In-Class</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: "18px", color: "#a1a1aa", fontSize: "0.84rem", lineHeight: 1.55 }}>
                <li><strong style={{ color: "#ffffff" }}>Vercel:</strong> Native zero-config support for Next.js App Router, SSR, and SSG</li>
                <li><strong>Render:</strong> Optimized for Node backends, requires manual frontend build configs</li>
                <li><strong>Netlify:</strong> Standard JAMstack support</li>
              </ul>
            </div>

            <div style={{ background: "rgba(24, 24, 27, 0.8)", border: "1px solid rgba(255, 255, 255, 0.15)", borderRadius: "14px", padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ fontWeight: 800, color: "#ffffff", fontSize: "0.95rem" }}>Preview Branches</span>
                <span style={{ background: "rgba(56, 189, 248, 0.15)", color: "#38bdf8", padding: "3px 10px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700 }}>1-Click CI/CD</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: "18px", color: "#a1a1aa", fontSize: "0.84rem", lineHeight: 1.55 }}>
                <li><strong style={{ color: "#ffffff" }}>Vercel:</strong> Automatic live preview URLs generated on every Git pull request</li>
                <li><strong>Render:</strong> Preview environments are paid features on Web Services</li>
                <li><strong>AWS Amplify:</strong> Requires complex CloudFormation setups</li>
              </ul>
            </div>

            <div style={{ background: "rgba(24, 24, 27, 0.8)", border: "1px solid rgba(255, 255, 255, 0.15)", borderRadius: "14px", padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ fontWeight: 800, color: "#ffffff", fontSize: "0.95rem" }}>Continuous Express / Backend</span>
                <span style={{ background: "rgba(255, 255, 255, 0.1)", color: "#ededed", padding: "3px 10px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700 }}>Architecture Tip</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: "18px", color: "#a1a1aa", fontSize: "0.84rem", lineHeight: 1.55 }}>
                <li><strong style={{ color: "#ffffff" }}>Vercel Recommendation:</strong> Host frontend on Vercel, host continuous Express/Socket.IO backend on Render</li>
                <li><strong>Free Quota:</strong> 100 GB monthly bandwidth on Hobby plan forever</li>
              </ul>
            </div>
          </div>

        </section>

        {/* Searchable Student FAQ */}
        <section className="vercel-faq-section">
          <h2 className="vercel-section-title">Frequently Asked Questions for Students &amp; Developers</h2>
          <p className="vercel-section-subtitle">
            Instant real-time search across the most common Vercel build problems, custom domain setups, and Next.js optimization.
          </p>

          <input
            type="text"
            className="vercel-search-box"
            placeholder="Search FAQs (e.g., build error, CORS, domain, free tier, bandwidth, env)..."
            value={faqSearch}
            onChange={(e) => setFaqSearch(e.target.value)}
          />

          {filteredFaqs.length === 0 ? (
            <div style={{ textAlign: "center", padding: "32px", color: "#a1a1aa" }}>
              No questions found matching "{faqSearch}". Try searching for "domain", "CORS", or "build".
            </div>
          ) : (
            filteredFaqs.map((faq, i) => (
              <div key={i} className="vercel-faq-item">
                <div
                  className="vercel-faq-header"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span>{faq.q}</span>
                  <span style={{ color: "#38bdf8", fontSize: "18px" }}>
                    {openFaq === i ? "−" : "+"}
                  </span>
                </div>
                {openFaq === i && (
                  <div className="vercel-faq-body">
                    {faq.a}
                  </div>
                )}
              </div>
            ))
          )}
        </section>

        {/* ChittorTech CTA Banner */}
        <section className="vercel-cta-box">
          <h2 style={{ fontSize: "26px", fontWeight: 800, margin: "0 0 12px", color: "#ffffff" }}>
            Supercharge Your Web Development Career
          </h2>
          <p style={{ color: "#a1a1aa", maxWidth: "600px", margin: "0 auto 24px", fontSize: "15px", lineHeight: 1.6 }}>
            Whether you need hands-on pair programming for your college capstone or full-stack software development for your startup, 
            ChittorTech delivers production-grade engineering.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact-us" className="vercel-btn-primary">
              Book a Free Developer Consultation &rarr;
            </Link>
            <Link href="/" className="vercel-btn-secondary">
              Explore ChittorTech Services
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
