"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";

const SAMPLE_EXPRESS_SERVER = `// server.js - 100% Free Render-Ready Express Server
const express = require('express');
const app = express();

// IMPORTANT: Render automatically assigns process.env.PORT (defaults to 10000)
const PORT = process.env.PORT || 10000;

app.use(express.json());

// Main status endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    platform: 'Render.com Free Tier',
    serverTime: new Date().toISOString(),
    maintainedBy: 'ChittorTech Developer Guide'
  });
});

// CRITICAL: Health-check endpoint for 24/7 Keep-Alive Pings
app.get('/health', (req, res) => {
  res.status(200).send('OK - Server is Awake');
});

// Always listen on '0.0.0.0' for Render container routing
app.listen(PORT, '0.0.0.0', () => {
  console.log(\`Server actively listening on port \${PORT}\`);
});`;

const FASTAPI_PYTHON_SERVER = `# main.py - Free Render-Ready Python FastAPI Server
from fastapi import FastAPI
import os

app = FastAPI(title="Render Free FastAPI", version="1.0.0")

# Render injects PORT environment variable
PORT = int(os.environ.get("PORT", 10000))

@app.get("/")
def home():
    return {"message": "Python API running on Render Free Tier", "status": "active"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

# Command to run in Render:
# uvicorn main:app --host 0.0.0.0 --port $PORT`;

const KEEP_ALIVE_CRON = `// keep-alive.js - Free 24/7 Anti-Sleep Hack for Render
// Run this on cron-job.org or GitHub Actions every 14 minutes
const https = require('https');

const RENDER_SERVICE_URL = 'https://your-app-name.onrender.com/health';

function pingRenderServer() {
  https.get(RENDER_SERVICE_URL, (res) => {
    console.log(\`[PING] \${new Date().toLocaleTimeString()} - Status: \${res.statusCode}\`);
  }).on('error', (err) => {
    console.error('[PING ERROR]:', err.message);
  });
}

// Render sleeps after 15 minutes of inactivity. Pinging at 14m keeps it awake forever!
setInterval(pingRenderServer, 14 * 60 * 1000);
pingRenderServer();`;

export default function RenderMasterclassPage() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("express");
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

  // Terminal Simulator
  const [simRunning, setSimRunning] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([
    "==> Cloning repository from github.com/developer/render-backend...",
    "==> Checking out commit 4f982bc...",
    "==> Using Node.js version 20.x (detected package.json)",
    "==> Running build command: 'npm install'...",
    "    added 142 packages in 3.4s",
    "==> Uploading build cache...",
    "==> Build successful 🎉",
    "==> Starting service with: 'npm start'...",
    "    Server actively listening on port 10000",
    "==> Your service is live at: https://my-backend.onrender.com 🚀"
  ]);

  const runSimulation = () => {
    setSimRunning(true);
    setTerminalLogs(["==> Initiating Render deployment pipeline..."]);
    const lines = [
      "==> Cloning repository from github.com/developer/render-backend...",
      "==> Checking out commit 4f982bc...",
      "==> Using Node.js version 20.x (detected package.json)",
      "==> Running build command: 'npm install'...",
      "    added 142 packages in 3.4s",
      "==> Uploading build cache...",
      "==> Build successful 🎉",
      "==> Starting service with: 'npm start'...",
      "    Server actively listening on port 10000",
      "==> Your service is live at: https://my-backend.onrender.com 🚀"
    ];

    lines.forEach((line, i) => {
      setTimeout(() => {
        setTerminalLogs((prev) => [...prev, line]);
        if (i === lines.length - 1) setSimRunning(false);
      }, (i + 1) * 180);
    });
  };

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const allFaqs = [
    {
      q: "Does Render have a 100% free tier in 2026 for students?",
      a: "Yes! Render offers 750 free instance hours every calendar month. Since a month has 720 to 744 hours, 750 hours is enough to keep 1 full-stack Web Service running continuously 24/7 without entering any credit card.",
      tags: ["free", "pricing", "credit card", "student", "hours"]
    },
    {
      q: "How do I stop Render from sleeping / spin-down after 15 minutes?",
      a: "Render free tier puts instances into hibernation after 15 minutes of zero traffic. When someone visits, it takes 30-50 seconds to wake up (cold start). Solution: Add a GET /health endpoint in your server, and set up a free monitor on UptimeRobot.com or cron-job.org to ping that URL every 14 minutes. Your app will stay awake 24/7 permanently!",
      tags: ["sleep", "cold start", "spin down", "awake", "uptimerobot", "cron"]
    },
    {
      q: "Why does my Node.js server fail with 'Port must be bound to 0.0.0.0'?",
      a: "Render assigns a dynamic internal PORT environment variable (usually 10000). You must use process.env.PORT in your server and pass '0.0.0.0' as the host: app.listen(process.env.PORT || 10000, '0.0.0.0'). If you hardcode 3000 or localhost, Render's proxy cannot route traffic to your app.",
      tags: ["port", "0.0.0.0", "localhost", "error", "listen"]
    },
    {
      q: "Can I host a free PostgreSQL database on Render?",
      a: "Yes! Render offers a free PostgreSQL database tier with 1GB storage and 97 connections. Free databases expire after 30 days unless upgraded or recreated, making it ideal for student project submissions, Hackathons, and testing.",
      tags: ["postgres", "database", "sql", "free"]
    },
    {
      q: "How to connect a free custom domain to Render with SSL?",
      a: "In your Render Dashboard, click your Service -> Settings -> Custom Domains. Enter your domain (e.g. api.yourdomain.com). Render will provide a CNAME target. Add that CNAME in Cloudflare or GoDaddy DNS. Render automatically generates and renews Let's Encrypt SSL certificates for free.",
      tags: ["custom domain", "ssl", "dns", "cloudflare", "godaddy"]
    }
  ];

  const filteredFaqs = useMemo(() => {
    if (!faqSearch.trim()) return allFaqs;
    const s = faqSearch.toLowerCase();
    return allFaqs.filter(
      (f) =>
        f.q.toLowerCase().includes(s) ||
        f.a.toLowerCase().includes(s) ||
        f.tags.some((t) => t.includes(s))
    );
  }, [faqSearch]);

  return (
    <div className="ag-render-master">
      <style>{`
        * { box-sizing: border-box; max-width: 100%; }
        .ag-render-master {
          background-color: #060913;
          background-image: 
            radial-gradient(circle at 50% 0%, rgba(70, 227, 183, 0.22) 0%, transparent 65%),
            radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 100% 100%, 28px 28px;
          color: #f8fafc;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          min-height: 100vh;
          overflow-x: hidden !important;
          padding-bottom: 120px;
        }
        .wrap-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 16px;
        }
        .nav-crumbs {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
          padding: 16px 0 10px;
          font-size: 0.8rem;
          color: #94a3b8;
        }
        .nav-crumbs a { color: #cbd5e1; text-decoration: none; }
        .nav-crumbs a:hover { color: #46e3b7; }
        .hero-box {
          padding: 35px 0 25px;
          text-align: center;
        }
        .glow-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(70, 227, 183, 0.14);
          border: 1px solid rgba(70, 227, 183, 0.35);
          padding: 6px 16px;
          border-radius: 9999px;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #46e3b7;
          margin-bottom: 18px;
        }
        .hero-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.7rem, 5.5vw, 3.8rem);
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #ffffff 30%, #a7f3d0 70%, #46e3b7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-sub {
          font-size: clamp(0.95rem, 2vw, 1.25rem);
          color: #94a3b8;
          max-width: 800px;
          margin: 0 auto 30px;
          line-height: 1.65;
        }
        .metric-grid-4 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 12px;
          margin-bottom: 40px;
        }
        .metric-card {
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(148, 163, 184, 0.15);
          border-radius: 14px;
          padding: 14px;
          text-align: center;
        }
        .metric-card .num {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: #46e3b7;
        }
        .metric-card .lbl {
          font-size: 0.75rem;
          color: #94a3b8;
          text-transform: uppercase;
          margin-top: 2px;
          font-weight: 600;
        }
        .interactive-card {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(70, 227, 183, 0.3);
          border-radius: 20px;
          padding: 24px 18px;
          margin-bottom: 45px;
        }
        .progress-bar-track {
          width: 100%;
          height: 8px;
          background: rgba(148, 163, 184, 0.15);
          border-radius: 9999px;
          overflow: hidden;
          margin: 14px 0 24px;
        }
        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #46e3b7, #3b82f6);
          border-radius: 9999px;
          transition: width 0.4s ease;
        }
        .step-tile-item {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(148, 163, 184, 0.15);
          border-radius: 14px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .step-tile-item:hover {
          border-color: rgba(70, 227, 183, 0.5);
        }
        .step-tile-item.done {
          border-color: rgba(70, 227, 183, 0.5);
          background: rgba(70, 227, 183, 0.05);
        }
        .step-circle-badge {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 2px solid #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          flex-shrink: 0;
        }
        .step-tile-item.done .step-circle-badge {
          border-color: #46e3b7;
          background: #46e3b7;
          color: #042f2e;
        }
        .term-box {
          background: #060913;
          border: 1px solid rgba(70, 227, 183, 0.35);
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 45px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
        }
        .term-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: #0f172a;
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
        }
        .term-screen-out {
          padding: 16px;
          background: #030712;
          font-family: 'Consolas', monospace;
          font-size: 0.82rem;
          line-height: 1.6;
          min-height: 220px;
          max-height: 340px;
          overflow-y: auto;
          color: #4ade80;
          word-break: break-all;
        }
        .code-hub-container {
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(70, 227, 183, 0.3);
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 45px;
        }
        .code-hub-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: rgba(30, 41, 59, 0.6);
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
          flex-wrap: wrap;
          gap: 8px;
        }
        .matrix-container {
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(148, 163, 184, 0.15);
          border-radius: 20px;
          padding: 20px 16px;
          margin-bottom: 45px;
          overflow-x: auto;
        }
        
        @media (max-width: 768px) {
          .matrix-table { display: none !important; }
          .matrix-mobile-points { display: flex !important; flex-direction: column; gap: 12px; }
        }
        @media (min-width: 769px) {
          .matrix-mobile-points { display: none !important; }
        }

        .matrix-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.88rem;
        }
        .matrix-table th {
          padding: 12px 14px;
          color: #f1f5f9;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          border-bottom: 1px solid rgba(148, 163, 184, 0.15);
          text-align: left;
        }
        .matrix-table td {
          padding: 14px;
          color: #cbd5e1;
          border-bottom: 1px solid rgba(148, 163, 184, 0.08);
        }
        .faq-accordion-item {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(148, 163, 184, 0.12);
          border-radius: 14px;
          margin-bottom: 12px;
          overflow: hidden;
        }
        .faq-accordion-btn {
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
          padding: 16px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #ffffff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(0.95rem, 3vw, 1.05rem);
          font-weight: 700;
          cursor: pointer;
          gap: 10px;
        }
        .faq-accordion-body {
          padding: 0 18px 16px;
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .banner-grand {
          background: linear-gradient(135deg, rgba(70, 227, 183, 0.25) 0%, rgba(59, 130, 246, 0.2) 100%);
          border: 1px solid rgba(70, 227, 183, 0.4);
          border-radius: 24px;
          padding: 40px 20px;
          text-align: center;
          margin-bottom: 40px;
        }
      `}</style>

      <div className="wrap-container">
        {/* BREADCRUMB */}
        <div className="nav-crumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Cloud & Hosting</span>
          <span>/</span>
          <span style={{ color: "#46e3b7" }}>Render Free Hosting</span>
        </div>

        {/* HERO */}
        <div className="hero-box">
          <div className="glow-tag">
            <i className="fa-solid fa-server" />
            <span>2026 Developer Guide &bull; Heroku Free Alternative</span>
          </div>

          <h1 className="hero-title">
            Free Node.js & Full-Stack Hosting on Render: <br />
            The Definitive Developer Masterclass
          </h1>

          <p className="hero-sub">
            Deploy Node.js, Express, Python FastAPI, and Docker on Render for free. 
            Learn how to maximize your 750 free monthly hours, bypass inactivity spin-downs, and connect custom domains with zero cost.
          </p>

          <div className="metric-grid-4">
            <div className="metric-card">
              <div className="num">750 Hrs</div>
              <div className="lbl">Free / Month</div>
            </div>
            <div className="metric-card">
              <div className="num">512 MB</div>
              <div className="lbl">Free RAM</div>
            </div>
            <div className="metric-card">
              <div className="num">24/7</div>
              <div className="lbl">Keep-Alive Fix</div>
            </div>
            <div className="metric-card">
              <div className="num">Free SSL</div>
              <div className="lbl">Custom Domain</div>
            </div>
          </div>
        </div>

        {/* 5-STEP INTERACTIVE CHECKLIST */}
        <div className="interactive-card">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
            <div>
              <div style={{ color: "#46e3b7", fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase" }}>Interactive Blueprint</div>
              <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 1.6rem)", fontWeight: 800, color: "#ffffff", margin: "4px 0 0" }}>
                5-Step Deployment & Zero-Sleep Formula
              </h2>
            </div>
            <div style={{ background: "rgba(70, 227, 183, 0.15)", border: "1px solid rgba(70, 227, 183, 0.3)", borderRadius: "10px", padding: "6px 12px", color: "#46e3b7", fontWeight: 700, fontSize: "0.85rem" }}>
              Progress: {completedCount}/5 ({progressPercent}%)
            </div>
          </div>

          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }} />
          </div>

          <div>
            {[
              {
                num: 1,
                title: "1. Prepare Repository for Render",
                desc: "In package.json, make sure you have 'start': 'node server.js' and your server binds to process.env.PORT or 10000 on host '0.0.0.0'."
              },
              {
                num: 2,
                title: "2. Create Web Service on Render",
                desc: "Go to Render.com -> Click 'New +' -> Select 'Web Service' -> Connect your GitHub repository."
              },
              {
                num: 3,
                title: "3. Set Build & Start Commands",
                desc: "Set Build Command: 'npm install' and Start Command: 'npm start'. Select the Free Instance tier (512MB RAM)."
              },
              {
                num: 4,
                title: "4. Prevent Spin-Down Sleep (Crucial)",
                desc: "Add a GET /health route and set up a free 14-minute HTTP monitor on UptimeRobot.com to keep your backend awake 24/7!",
                warn: "Render free instances sleep after 15 minutes of silence without this ping!"
              },
              {
                num: 5,
                title: "5. Connect Custom Domain with Free SSL",
                desc: "Go to Service Settings -> Custom Domains -> Add your domain and map the CNAME in Cloudflare/GoDaddy."
              }
            ].map((st, i) => (
              <div
                key={i}
                className={`step-tile-item ${checkedSteps[i] ? "done" : ""}`}
                onClick={() => toggleStep(i)}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div className="step-circle-badge">
                      {checkedSteps[i] ? <i className="fa-solid fa-check" /> : st.num}
                    </div>
                    <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1rem", fontWeight: 700, color: "#ffffff" }}>
                      {st.title}
                    </span>
                  </div>
                  <span style={{ fontSize: "0.72rem", color: checkedSteps[i] ? "#46e3b7" : "#64748b", fontWeight: 700 }}>
                    {checkedSteps[i] ? "COMPLETED" : "TAP TO CHECK"}
                  </span>
                </div>
                <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: 1.55, margin: "4px 0 0 36px" }}>
                  {st.desc}
                </p>
                {st.warn && (
                  <div style={{ background: "rgba(239, 68, 68, 0.15)", border: "1px solid rgba(239, 68, 68, 0.3)", borderRadius: "8px", padding: "6px 10px", margin: "8px 0 0 36px", fontSize: "0.78rem", color: "#fca5a5" }}>
                    <i className="fa-solid fa-triangle-exclamation me-1" /> {st.warn}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* LIVE TERMINAL DEPLOY SIMULATOR */}
        <div className="term-box">
          <div className="term-bar">
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#eab308" }} />
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
              <span style={{ fontFamily: "Consolas, monospace", fontSize: "0.78rem", color: "#94a3b8", marginLeft: "6px" }}>
                Render Cloud Build Logs &mdash; Node.js Web Service
              </span>
            </div>
            <button
              onClick={runSimulation}
              disabled={simRunning}
              style={{
                background: "rgba(70, 227, 183, 0.2)",
                border: "1px solid rgba(70, 227, 183, 0.4)",
                color: "#46e3b7",
                borderRadius: "8px",
                padding: "4px 12px",
                fontSize: "0.75rem",
                fontWeight: 700,
                cursor: "pointer"
              }}
            >
              <i className="fa-solid fa-play me-1" /> {simRunning ? "Deploying..." : "Replay Deploy"}
            </button>
          </div>
          <div className="term-screen-out">
            {terminalLogs.map((l, i) => (
              <div key={i} style={{ color: l.includes("🎉") || l.includes("🚀") ? "#4ade80" : l.includes("==") ? "#38bdf8" : "#94a3b8" }}>
                {l}
              </div>
            ))}
          </div>
        </div>

        {/* COMPARISON MATRIX */}
        <div className="matrix-container">
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <div style={{ color: "#46e3b7", fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase" }}>Hosting Comparison</div>
            <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 1.7rem)", fontWeight: 800, color: "#ffffff" }}>
              Render vs. Heroku vs. Vercel
            </h2>
          </div>

          <table className="matrix-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th style={{ color: "#46e3b7" }}>Render (Free Tier)</th>
                <th style={{ color: "#f87171" }}>Heroku (Current)</th>
                <th style={{ color: "#38bdf8" }}>Vercel (Hobby)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Free Web Services</strong></td>
                <td><span style={{ color: "#4ade80", fontWeight: 700 }}>Yes (750 Hours/mo)</span></td>
                <td><span style={{ color: "#f87171" }}>No (Removed Free Tier)</span></td>
                <td>Serverless Only (No Express)</td>
              </tr>
              <tr>
                <td><strong>Custom Domain & SSL</strong></td>
                <td>Free Auto-SSL</td>
                <td>Paid Dyno Required</td>
                <td>Free Auto-SSL</td>
              </tr>
              <tr>
                <td><strong>Background / Long Running</strong></td>
                <td>Full Express & Python Support</td>
                <td>Paid</td>
                <td>10-15s Timeout Max</td>
              </tr>
              <tr>
                <td><strong>Free Database</strong></td>
                <td>PostgreSQL (1GB Free)</td>
                <td>Paid Only</td>
                <td>Paid Marketplace</td>
              </tr>
            </tbody>
          </table>

          <div className="matrix-mobile-points">
            <div style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(70, 227, 183, 0.3)", borderRadius: "14px", padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ fontWeight: 800, color: "#ffffff", fontSize: "0.95rem" }}>Free Web Services</span>
                <span style={{ background: "rgba(74, 222, 128, 0.15)", color: "#4ade80", padding: "3px 10px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700 }}>750 Hrs Free</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: "18px", color: "#94a3b8", fontSize: "0.84rem", lineHeight: 1.55 }}>
                <li><strong style={{ color: "#46e3b7" }}>Render:</strong> 100% Free full-stack web service (Node/Python/Docker)</li>
                <li><strong style={{ color: "#f87171" }}>Heroku:</strong> Removed free tier completely (requires paid dyno)</li>
                <li><strong style={{ color: "#38bdf8" }}>Vercel:</strong> Serverless functions only (no continuous Express)</li>
              </ul>
            </div>

            <div style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(70, 227, 183, 0.3)", borderRadius: "14px", padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ fontWeight: 800, color: "#ffffff", fontSize: "0.95rem" }}>Custom Domains &amp; SSL</span>
                <span style={{ background: "rgba(74, 222, 128, 0.15)", color: "#4ade80", padding: "3px 10px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700 }}>Auto-SSL Free</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: "18px", color: "#94a3b8", fontSize: "0.84rem", lineHeight: 1.55 }}>
                <li><strong style={{ color: "#46e3b7" }}>Render:</strong> Free automated Let's Encrypt SSL on custom domains</li>
                <li><strong style={{ color: "#f87171" }}>Heroku:</strong> Requires paid plan for custom domain certificate</li>
                <li><strong style={{ color: "#38bdf8" }}>Vercel:</strong> Free automated SSL certificates</li>
              </ul>
            </div>

            <div style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(70, 227, 183, 0.3)", borderRadius: "14px", padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ fontWeight: 800, color: "#ffffff", fontSize: "0.95rem" }}>Process &amp; Database</span>
                <span style={{ background: "rgba(74, 222, 128, 0.15)", color: "#4ade80", padding: "3px 10px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700 }}>Continuous Server</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: "18px", color: "#94a3b8", fontSize: "0.84rem", lineHeight: 1.55 }}>
                <li><strong style={{ color: "#46e3b7" }}>Render:</strong> Full background workers &amp; 1GB Free PostgreSQL database</li>
                <li><strong style={{ color: "#f87171" }}>Heroku:</strong> Database and server require paid subscriptions</li>
                <li><strong style={{ color: "#38bdf8" }}>Vercel:</strong> Strict 10-15s serverless function timeout</li>
              </ul>
            </div>
          </div>

        </div>

        {/* CODE HUB */}
        <div className="code-hub-container">
          <div className="code-hub-nav">
            <div style={{ display: "flex", gap: "6px" }}>
              <button
                onClick={() => setActiveTab("express")}
                style={{
                  background: activeTab === "express" ? "#059669" : "transparent",
                  color: "#ffffff",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  cursor: "pointer"
                }}
              >
                Express (Node.js)
              </button>
              <button
                onClick={() => setActiveTab("fastapi")}
                style={{
                  background: activeTab === "fastapi" ? "#059669" : "transparent",
                  color: "#ffffff",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  cursor: "pointer"
                }}
              >
                FastAPI (Python)
              </button>
              <button
                onClick={() => setActiveTab("cron")}
                style={{
                  background: activeTab === "cron" ? "#059669" : "transparent",
                  color: "#ffffff",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  cursor: "pointer"
                }}
              >
                24/7 Keep-Alive Hack
              </button>
            </div>

            <button
              onClick={() => handleCopy(activeTab === "express" ? SAMPLE_EXPRESS_SERVER : activeTab === "fastapi" ? FASTAPI_PYTHON_SERVER : KEEP_ALIVE_CRON)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(70, 227, 183, 0.15)",
                color: "#46e3b7",
                border: "1px solid rgba(70, 227, 183, 0.35)",
                borderRadius: "8px",
                padding: "6px 12px",
                fontWeight: 700,
                fontSize: "0.78rem",
                cursor: "pointer"
              }}
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <pre style={{ padding: "16px", margin: 0, background: "#030712", overflowX: "auto", fontFamily: "Consolas, monospace", fontSize: "0.82rem", lineHeight: 1.55, color: "#38bdf8" }}>
            <code>{activeTab === "express" ? SAMPLE_EXPRESS_SERVER : activeTab === "fastapi" ? FASTAPI_PYTHON_SERVER : KEEP_ALIVE_CRON}</code>
          </pre>
        </div>

        {/* SEARCHABLE FAQ */}
        <div style={{ maxWidth: "800px", margin: "0 auto 45px" }}>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <div style={{ color: "#46e3b7", fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase" }}>Instant Answers</div>
            <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 1.7rem)", fontWeight: 800, color: "#ffffff", margin: "4px 0 14px" }}>
              Frequently Asked Questions
            </h2>
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search Render fixes: sleep, port, free tier, database..."
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "rgba(15, 23, 42, 0.8)",
                border: "1px solid rgba(70, 227, 183, 0.3)",
                borderRadius: "10px",
                color: "#f1f5f9",
                fontSize: "0.9rem",
                outline: "none"
              }}
            />
          </div>

          {filteredFaqs.map((f, idx) => (
            <div key={idx} className="faq-accordion-item">
              <button className="faq-accordion-btn" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                <span>{f.q}</span>
                <i className="fa-solid fa-chevron-down" style={{ transform: openFaq === idx ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", color: "#46e3b7" }} />
              </button>
              {openFaq === idx && <div className="faq-accordion-body">{f.a}</div>}
            </div>
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="banner-grand">
          <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", fontWeight: 800, color: "#ffffff", marginBottom: "12px" }}>
            Need Scalable Backend or Database Architecture?
          </h2>
          <p style={{ color: "#cbd5e1", fontSize: "0.95rem", maxWidth: "600px", margin: "0 auto 24px", lineHeight: 1.6 }}>
            ChittorTech architects high-concurrency microservices, auto-scaling clusters, and production database backups.
          </p>
          <Link
            href="/contact-us"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#46e3b7",
              color: "#042f2e",
              fontWeight: 800,
              padding: "14px 28px",
              borderRadius: "12px",
              textDecoration: "none"
            }}
          >
            Consult ChittorTech Cloud Engineers <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}
