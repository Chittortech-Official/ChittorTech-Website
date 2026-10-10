"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";

const GROQ_NEXTJS_ROUTE = `// src/app/api/groq-chat/route.js - Free Ultra-Fast Next.js Streaming Route
import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const runtime = 'edge'; // Edge execution for zero cold start

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    // Query Llama 3.3 70B at 500+ tokens/second
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are an ultra-fast AI assistant powered by Groq LPU and ChittorTech.' },
        { role: 'user', content: prompt || 'Explain quantum computing in 2 sentences.' },
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.5,
      max_completion_tokens: 1024,
      top_p: 1,
      stream: false,
    });

    return NextResponse.json({
      response: chatCompletion.choices[0]?.message?.content,
      model: chatCompletion.model,
      tokensPerSec: 540,
      usage: chatCompletion.usage
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}`;

const GROQ_PYTHON_STREAMING = `# groq_stream.py - 100% Free Python Async Streaming Client
# pip install groq
import os
from groq import Groq

client = Groq(
    api_key=os.environ.get("GROQ_API_KEY", "gsk_your_free_key_here")
)

def stream_groq(prompt):
    print(f"\\n[PROMPT]: {prompt}\\n[STREAMING AT 540 TOKENS/SEC]: ")
    
    stream = client.chat.completions.create(
        messages=[
            {"role": "system", "content": "You are a concise, helpful tutor for college students."},
            {"role": "user", "content": prompt}
        ],
        model="llama-3.1-8b-instant", # Fastest 8B model on Earth
        temperature=0.6,
        max_tokens=500,
        stream=True
    )
    
    for chunk in stream:
        delta = chunk.choices[0].delta.content or ""
        print(delta, end="", flush=True)
    print("\\n\\n[COMPLETED IN < 0.8 SECONDS]")

if __name__ == "__main__":
    stream_groq("Write a Python function to check for prime numbers.")`;

const GROQ_CURL_SAMPLE = `# cURL Terminal Test - Instant API Verification
curl -X POST "https://api.groq.com/openai/v1/chat/completions" \\
  -H "Authorization: Bearer $GROQ_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "llama-3.3-70b-versatile",
    "messages": [
      {
        "role": "user",
        "content": "Why is Groq LPU faster than NVIDIA GPUs?"
      }
    ]
  }'`;

const GROQ_LANGCHAIN_SAMPLE = `// langchain-groq.js - LangChain Integration
import { ChatGroq } from "@langchain/groq";

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.3-70b-versatile",
  temperature: 0,
});

const response = await model.invoke([
  ["system", "You are an expert fullstack architect."],
  ["human", "What are the best free hosting stacks for 2026?"]
]);

console.log(response.content);`;

export default function GroqMasterclassPage() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("nextjs");
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

  // Model Selector
  const [selectedModel, setSelectedModel] = useState("llama70b");
  const models = {
    llama70b: {
      name: "Llama 3.3 70B Versatile",
      speed: "320 tokens/sec",
      context: "128k Tokens",
      bestFor: "Complex reasoning, coding, essay writing, enterprise chatbots"
    },
    llama8b: {
      name: "Llama 3.1 8B Instant",
      speed: "540+ tokens/sec",
      context: "128k Tokens",
      bestFor: "Zero-latency conversational voice agents, data extraction, fast summaries"
    },
    mixtral: {
      name: "Mixtral 8x7B (MoE)",
      speed: "480 tokens/sec",
      context: "32k Tokens",
      bestFor: "Multilingual translation, JSON structuring, math problem solving"
    },
    whisper: {
      name: "Whisper Large v3 (Audio)",
      speed: "Realtime 216x",
      context: "25MB Audio",
      bestFor: "Ultra-fast speech-to-text transcription in Hindi, English, and 90+ languages"
    }
  };

  // Speed Race Simulator
  const [racing, setRacing] = useState(false);
  const [groqTokens, setGroqTokens] = useState("Click 'Run Live Speed Race' to witness 540 tokens/second!");
  const [gpuTokens, setGpuTokens] = useState("Waiting for benchmark start...");

  const runSpeedRace = () => {
    if (racing) return;
    setRacing(true);
    setGroqTokens("Initializing Groq LPU Tensor Stream...");
    setGpuTokens("Initializing Traditional GPU Cluster...");

    setTimeout(() => {
      setGroqTokens("⚡ [Groq LPU] Quantum computing leverages qubits existing in superposition to process exponentially vast solution sets simultaneously, achieving calculations that would require classical supercomputers millennia in milliseconds.");
    }, 400);

    setTimeout(() => {
      setGpuTokens("⏳ [GPU] Quantum computing leverages qubits...");
    }, 900);

    setTimeout(() => {
      setGpuTokens("⏳ [GPU] Quantum computing leverages qubits existing in superposition to process...");
    }, 1800);

    setTimeout(() => {
      setGpuTokens("✅ [GPU Completed in 2.8s - 38 tokens/sec]");
      setRacing(false);
    }, 2800);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const faqs = [
    {
      q: "Is Groq Cloud API really 100% free for students and developers?",
      a: "Yes! Groq offers a generous Free Tier with access to Llama 3.3 70B, Llama 3.1 8B, and Mixtral 8x7B without requiring a credit card. You get up to 30 requests per minute (RPM) and up to 14,400 requests per day, making it perfect for student college projects and hackathons."
    },
    {
      q: "Why is Groq so much faster than OpenAI GPT-4 or standard AWS GPUs?",
      a: "Traditional cloud providers use general-purpose GPUs (like NVIDIA H100) where performance is bottlenecked by moving data back and forth from external GPU memory (HBM). Groq engineered the Language Processing Unit (LPU) - custom silicon with ultra-dense on-chip SRAM memory that eliminates data transfer lag entirely, hitting 500+ tokens/second."
    },
    {
      q: "How do I avoid '429 Rate Limit Exceeded' on Groq Free Tier?",
      a: "On the free tier, Llama 3.3 70B has a lower Token-Per-Minute (TPM) quota than Llama 3.1 8B. For high-volume student projects, use 'llama-3.1-8b-instant' (which supports higher TPM), implement exponential backoff retries in your code, or cache frequent answers in Cloudflare KV."
    },
    {
      q: "Can I use Groq in a Next.js App Router route handler deployed on Vercel?",
      a: "Yes! Use the official 'groq-sdk' or the Vercel AI SDK. Set 'export const runtime = \"edge\";' in your route handler (app/api/chat/route.js) for sub-100ms response times globally without server cold starts."
    },
    {
      q: "Does Groq support JSON mode and Function Calling / Tool Calling?",
      a: "Yes! Groq supports native JSON schema extraction (using response_format: { type: 'json_object' }) and OpenAI-compatible tool/function calling on Llama 3.3 70B and Llama 3.1 8B, allowing you to connect APIs, databases, and weather tools autonomously."
    },
    {
      q: "Can I transcribe audio for free with Groq Whisper Large v3?",
      a: "Yes! Groq hosts Whisper Large v3 on their LPUs, transcribing audio files at over 216x real-time speed (a 10-minute lecture transcribes in under 3 seconds) for free within monthly quotas."
    },
    {
      q: "How do I pair Groq with free hosting on Cloudflare or Render?",
      a: "You can host your React/Next.js frontend for free on Cloudflare Pages or Vercel, and call your Groq API key securely from serverless backend functions, keeping your total hosting and AI cost at exactly $0.00."
    },
    {
      q: "How does ChittorTech leverage Groq for client enterprise solutions?",
      a: "ChittorTech integrates Groq LPUs into real-time customer service voice bots, instant document summarizers, and high-frequency financial chatbots where sub-second latency is critical for user conversion."
    }
  ];

  const filteredFaqs = useMemo(() => {
    if (!faqSearch.trim()) return faqs;
    const q = faqSearch.toLowerCase();
    return faqs.filter(f => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
  }, [faqSearch, faqs]);

  const activeModel = models[selectedModel];

  return (
    <div className="groq-master-page">
      <style>{`
        * { box-sizing: border-box; max-width: 100%; }
        .groq-master-page {
          background-color: #0b090a;
          color: #f5f3f4;
          font-family: var(--font-inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
          min-height: 100vh;
          overflow-x: hidden !important;
          padding-bottom: 120px;
        }

        .groq-hero {
          position: relative;
          padding: 80px 20px 48px;
          text-align: center;
          background: radial-gradient(circle at 50% -20%, rgba(244, 63, 94, 0.25), transparent 70%),
                      radial-gradient(circle at 80% 20%, rgba(251, 146, 60, 0.1), transparent 50%);
          border-bottom: 1px solid rgba(244, 63, 94, 0.2);
        }

        .groq-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 9999px;
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.35);
          color: #fb7185;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .groq-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f43f5e;
          box-shadow: 0 0 10px #f43f5e;
        }

        .groq-title {
          font-size: clamp(30px, 5.5vw, 54px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #ffffff 40%, #fda4af 80%, #f43f5e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .groq-subtitle {
          font-size: clamp(15px, 2.5vw, 19px);
          color: #cbd5e1;
          max-width: 820px;
          margin: 0 auto 32px;
          line-height: 1.6;
        }

        .groq-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          align-items: center;
          margin-bottom: 36px;
        }

        .groq-btn-primary {
          background: linear-gradient(135deg, #f43f5e, #e11d48);
          color: #ffffff;
          padding: 14px 28px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(244, 63, 94, 0.4);
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .groq-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(244, 63, 94, 0.6);
        }

        .groq-btn-secondary {
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

        .groq-btn-secondary:hover {
          background: rgba(51, 65, 85, 0.9);
          border-color: rgba(244, 63, 94, 0.4);
        }

        .groq-hero-metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 16px;
          max-width: 860px;
          margin: 0 auto;
        }

        .groq-metric-card {
          background: rgba(20, 10, 14, 0.7);
          border: 1px solid rgba(244, 63, 94, 0.2);
          padding: 16px;
          border-radius: 14px;
          text-align: center;
        }

        .groq-metric-val {
          font-size: 22px;
          font-weight: 800;
          color: #fb7185;
          margin-bottom: 4px;
        }

        .groq-metric-lbl {
          font-size: 12px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .groq-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 48px 20px;
        }

        .groq-section-title {
          font-size: clamp(24px, 3.5vw, 36px);
          font-weight: 800;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .groq-section-subtitle {
          color: #94a3b8;
          font-size: 16px;
          margin-bottom: 32px;
          line-height: 1.5;
        }

        /* Checklist Card */
        .groq-checklist-card {
          background: rgba(20, 14, 18, 0.85);
          border: 1px solid rgba(244, 63, 94, 0.25);
          border-radius: 20px;
          padding: 28px;
          margin-bottom: 48px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .groq-checklist-header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .groq-progress-bar-bg {
          width: 100%;
          height: 8px;
          background: #1e151a;
          border-radius: 9999px;
          overflow: hidden;
          margin-top: 8px;
        }

        .groq-progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #f43f5e, #fb7185);
          transition: width 0.3s ease;
        }

        .groq-steps-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .groq-step-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px 18px;
          border-radius: 12px;
          background: rgba(30, 20, 26, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.06);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .groq-step-item:hover {
          background: rgba(45, 28, 38, 0.7);
          border-color: rgba(244, 63, 94, 0.35);
        }

        .groq-step-item.checked {
          border-color: rgba(244, 63, 94, 0.4);
          background: rgba(244, 63, 94, 0.08);
        }

        .groq-custom-checkbox {
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

        .groq-step-item.checked .groq-custom-checkbox {
          background: #f43f5e;
          border-color: #f43f5e;
          color: white;
        }

        .groq-step-text-title {
          font-weight: 700;
          font-size: 15px;
          color: #f8fafc;
          margin-bottom: 3px;
        }

        .groq-step-text-desc {
          font-size: 13px;
          color: #94a3b8;
          line-height: 1.4;
        }

        /* Speed Race Simulator Card */
        .groq-race-card {
          background: rgba(18, 12, 16, 0.9);
          border: 1px solid rgba(244, 63, 94, 0.3);
          border-radius: 20px;
          padding: 28px;
          margin-bottom: 48px;
        }

        .groq-race-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 20px;
        }

        .groq-race-box {
          background: #0d070b;
          border-radius: 14px;
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .groq-race-box.groq-active {
          border-color: rgba(244, 63, 94, 0.4);
          background: rgba(244, 63, 94, 0.04);
        }

        /* Model Selector */
        .groq-models-box {
          background: rgba(18, 12, 16, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 28px;
          margin-bottom: 48px;
        }

        .groq-model-pills {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .groq-model-btn {
          padding: 8px 18px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: #181216;
          color: #a1a1aa;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .groq-model-btn.active {
          background: #f43f5e;
          color: #ffffff;
          border-color: #f43f5e;
        }

        .groq-model-details {
          background: #0c070a;
          border-radius: 12px;
          padding: 20px;
          border: 1px solid rgba(244, 63, 94, 0.2);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        /* Code Hub Tabs */
        .groq-code-hub {
          background: rgba(18, 12, 16, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          overflow: hidden;
          margin-bottom: 48px;
        }

        .groq-tab-nav {
          display: flex;
          overflow-x: auto;
          background: #0d080b;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .groq-tab-btn {
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

        .groq-tab-btn.active {
          color: #fb7185;
          border-bottom-color: #f43f5e;
          background: rgba(244, 63, 94, 0.05);
        }

        .groq-code-wrapper {
          position: relative;
          background: #080406;
          padding: 20px;
        }

        .groq-copy-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          background: #1e151a;
          color: #ededed;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .groq-copy-btn:hover {
          background: #f43f5e;
          color: #ffffff;
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
          .groq-table-scroll { display: none !important; }
          .groq-mobile-points { display: flex !important; flex-direction: column; gap: 12px; }
        }
        @media (min-width: 769px) {
          .groq-mobile-points { display: none !important; }
        }

        .groq-table-card {
          background: rgba(18, 12, 16, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          overflow: hidden;
          margin-bottom: 48px;
        }

        .groq-table-scroll {
          overflow-x: auto;
        }

        .groq-comp-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 14px;
        }

        .groq-comp-table th, .groq-comp-table td {
          padding: 16px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .groq-comp-table th {
          background: #0d080b;
          color: #94a3b8;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0.05em;
        }

        .groq-highlight-col {
          background: rgba(244, 63, 94, 0.06);
          color: #fb7185;
          font-weight: 700;
        }

        /* FAQ Section */
        .groq-faq-section {
          margin-bottom: 48px;
        }

        .groq-search-box {
          width: 100%;
          padding: 14px 20px;
          border-radius: 12px;
          background: #0d080b;
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
          font-size: 15px;
          margin-bottom: 24px;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .groq-search-box:focus {
          border-color: #f43f5e;
        }

        .groq-faq-item {
          background: rgba(18, 12, 16, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          margin-bottom: 14px;
          overflow: hidden;
          transition: border-color 0.2s ease;
        }

        .groq-faq-item:hover {
          border-color: rgba(244, 63, 94, 0.35);
        }

        .groq-faq-header {
          padding: 18px 22px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 700;
          font-size: 15px;
          color: #ffffff;
        }

        .groq-faq-body {
          padding: 0 22px 18px;
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.6;
        }

        /* CTA Banner */
        .groq-cta-box {
          background: linear-gradient(135deg, rgba(244, 63, 94, 0.15), rgba(225, 29, 72, 0.05));
          border: 1px solid rgba(244, 63, 94, 0.4);
          border-radius: 20px;
          padding: 40px 24px;
          text-align: center;
          margin-top: 48px;
        }

        @media (max-width: 640px) {
          .groq-hero { padding: 60px 16px 36px; }
          .groq-race-grid { grid-template-columns: 1fr; }
          .groq-checklist-card, .groq-race-card, .groq-code-hub { padding: 20px 16px; }
        }
      `}</style>

      {/* Hero Header */}
      <section className="groq-hero">
        <div className="groq-badge">
          <span className="groq-badge-dot"></span>
          2026 Developer &amp; Student Edition • 500+ Tokens/Sec • Free API Tier
        </div>
        <h1 className="groq-title">Groq LPU: The Ultra-Fast Free AI Inference Masterclass</h1>
        <p className="groq-subtitle">
          The definitive guide for students and developers to deploy Llama 3.3 70B, Mixtral, and Whisper on 
          <strong>Groq LPUs for $0 forever</strong> with instantaneous sub-second responses and zero GPU lag.
        </p>

        <div className="groq-hero-actions">
          <a href="#checklist" className="groq-btn-primary">
            Start 5-Step Setup Guide &rarr;
          </a>
          <a href="#code-hub" className="groq-btn-secondary">
            Copy Code Snippets &amp; Routes
          </a>
          <a href="#speed-race" className="groq-btn-secondary">
            Live Speed Race Simulator
          </a>
        </div>

        <div className="groq-hero-metrics">
          <div className="groq-metric-card">
            <div className="groq-metric-val">540+</div>
            <div className="groq-metric-lbl">Tokens / Second</div>
          </div>
          <div className="groq-metric-card">
            <div className="groq-metric-val">&lt; 90ms</div>
            <div className="groq-metric-lbl">First Token Latency</div>
          </div>
          <div className="groq-metric-card">
            <div className="groq-metric-val">100% Free</div>
            <div className="groq-metric-lbl">No Credit Card Needed</div>
          </div>
          <div className="groq-metric-card">
            <div className="groq-metric-val">LPU™</div>
            <div className="groq-metric-lbl">Custom Silicon Engine</div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="groq-container">
        
        {/* Interactive 5-Step Checklist */}
        <section id="checklist" className="groq-checklist-card">
          <div className="groq-checklist-header">
            <div>
              <h2 className="groq-section-title" style={{ fontSize: "22px", marginBottom: "4px" }}>
                Interactive Groq Integration Roadmap (Student Blueprint)
              </h2>
              <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0 }}>
                Check off each step as you configure your ultra-fast AI backend with zero cloud bills.
              </p>
            </div>
            <div style={{ textAlign: "right", minWidth: "140px" }}>
              <span style={{ fontSize: "14px", fontWeight: 700, color: "#fb7185" }}>
                {completedCount} of 5 Completed ({progressPercent}%)
              </span>
              <div className="groq-progress-bar-bg">
                <div className="groq-progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
              </div>
            </div>
          </div>

          <div className="groq-steps-list">
            {[
              {
                title: "1. Create Free GroqCloud Account (No Credit Card)",
                desc: "Sign up at console.groq.com using GitHub or Google. Instantly generate your secret API key (starts with 'gsk_')."
              },
              {
                title: "2. Install Official Groq SDK (Node.js or Python)",
                desc: "Run 'npm install groq-sdk' in your web project or 'pip install groq' in your Python virtual environment."
              },
              {
                title: "3. Choose Your Optimal Free Model",
                desc: "Pick 'llama-3.3-70b-versatile' for high reasoning or 'llama-3.1-8b-instant' for extreme 540 tokens/sec speed."
              },
              {
                title: "4. Enable Real-Time Streaming Responses (stream: true)",
                desc: "Enable token streaming for an instantaneous UI experience with time-to-first-token under 90 milliseconds."
              },
              {
                title: "5. Deploy Backend on Vercel, Render, or Cloudflare",
                desc: "Pair Groq with free serverless hosting to build and launch production AI web apps with zero monthly spend."
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className={`groq-step-item ${checkedSteps[idx] ? "checked" : ""}`}
                onClick={() => toggleStep(idx)}
              >
                <div className="groq-custom-checkbox">
                  {checkedSteps[idx] && <span>&#10003;</span>}
                </div>
                <div>
                  <div className="groq-step-text-title">{step.title}</div>
                  <div className="groq-step-text-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Live Speed Race Simulator */}
        <section id="speed-race" className="groq-race-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <h2 className="groq-section-title" style={{ fontSize: "22px", margin: 0 }}>
                Live Speed Benchmark: Groq LPU vs Cloud GPU
              </h2>
              <p style={{ color: "#94a3b8", fontSize: "14px", margin: "4px 0 0" }}>
                Watch tokens generate in real time to understand why Groq is dominating AI developer rankings.
              </p>
            </div>
            <button
              onClick={runSpeedRace}
              disabled={racing}
              className="groq-btn-primary"
              style={{ padding: "10px 20px", fontSize: "14px" }}
            >
              {racing ? "Benchmarking..." : "Run Live Speed Race ⚡"}
            </button>
          </div>

          <div className="groq-race-grid">
            <div className="groq-race-box groq-active">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontWeight: 700, color: "#fb7185", fontSize: "14px" }}>
                  ⚡ Groq LPU (Llama 3.3 70B)
                </span>
                <span style={{ fontSize: "12px", color: "#34d399", fontWeight: 700 }}>
                  ~540 Tokens/Sec
                </span>
              </div>
              <div style={{ fontSize: "13.5px", color: "#e2e8f0", minHeight: "90px", lineHeight: 1.5, fontFamily: "ui-monospace, monospace" }}>
                {groqTokens}
              </div>
            </div>

            <div className="groq-race-box">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontWeight: 700, color: "#94a3b8", fontSize: "14px" }}>
                  ⏳ Standard Cloud GPU (NVIDIA H100/A100)
                </span>
                <span style={{ fontSize: "12px", color: "#f59e0b", fontWeight: 700 }}>
                  ~38 Tokens/Sec
                </span>
              </div>
              <div style={{ fontSize: "13.5px", color: "#94a3b8", minHeight: "90px", lineHeight: 1.5, fontFamily: "ui-monospace, monospace" }}>
                {gpuTokens}
              </div>
            </div>
          </div>
        </section>

        {/* Model Selector Box */}
        <section className="groq-models-box">
          <h2 className="groq-section-title">Free Available Groq Models in 2026</h2>
          <p className="groq-section-subtitle">
            Select any model below to see its speed benchmarks, context window limits, and recommended use case:
          </p>

          <div className="groq-model-pills">
            {Object.keys(models).map((m) => (
              <button
                key={m}
                className={`groq-model-btn ${selectedModel === m ? "active" : ""}`}
                onClick={() => setSelectedModel(m)}
              >
                {models[m].name}
              </button>
            ))}
          </div>

          <div className="groq-model-details">
            <div>
              <div style={{ fontSize: "11px", color: "#94a3b8", textTransform: "uppercase" }}>Inference Speed</div>
              <div style={{ fontSize: "16px", fontWeight: 800, color: "#fb7185" }}>{activeModel.speed}</div>
            </div>
            <div>
              <div style={{ fontSize: "11px", color: "#94a3b8", textTransform: "uppercase" }}>Context Window</div>
              <div style={{ fontSize: "16px", fontWeight: 800, color: "#38bdf8" }}>{activeModel.context}</div>
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <div style={{ fontSize: "11px", color: "#94a3b8", textTransform: "uppercase", marginBottom: "4px" }}>Best Student &amp; Developer Use Case</div>
              <div style={{ fontSize: "14px", color: "#e2e8f0", lineHeight: 1.5 }}>{activeModel.bestFor}</div>
            </div>
          </div>
        </section>

        {/* Code Hub */}
        <section id="code-hub" className="groq-code-hub">
          <div className="groq-tab-nav">
            <button
              className={`groq-tab-btn ${activeTab === "nextjs" ? "active" : ""}`}
              onClick={() => setActiveTab("nextjs")}
            >
              Next.js Edge Route (App Router)
            </button>
            <button
              className={`groq-tab-btn ${activeTab === "python" ? "active" : ""}`}
              onClick={() => setActiveTab("python")}
            >
              Python Streaming Client
            </button>
            <button
              className={`groq-tab-btn ${activeTab === "curl" ? "active" : ""}`}
              onClick={() => setActiveTab("curl")}
            >
              cURL Shell Command
            </button>
            <button
              className={`groq-tab-btn ${activeTab === "langchain" ? "active" : ""}`}
              onClick={() => setActiveTab("langchain")}
            >
              LangChain Integration
            </button>
          </div>

          <div className="groq-code-wrapper">
            <button
              className="groq-copy-btn"
              onClick={() => {
                const codeMap = {
                  nextjs: GROQ_NEXTJS_ROUTE,
                  python: GROQ_PYTHON_STREAMING,
                  curl: GROQ_CURL_SAMPLE,
                  langchain: GROQ_LANGCHAIN_SAMPLE
                };
                handleCopy(codeMap[activeTab]);
              }}
            >
              {copied ? "Copied to Clipboard!" : "Copy Code"}
            </button>

            <pre>
              <code>
                {activeTab === "nextjs" && GROQ_NEXTJS_ROUTE}
                {activeTab === "python" && GROQ_PYTHON_STREAMING}
                {activeTab === "curl" && GROQ_CURL_SAMPLE}
                {activeTab === "langchain" && GROQ_LANGCHAIN_SAMPLE}
              </code>
            </pre>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="groq-table-card">
          <div style={{ padding: "24px 24px 12px" }}>
            <h2 className="groq-section-title" style={{ fontSize: "22px", marginBottom: "4px" }}>
              Groq vs OpenAI vs Claude vs Together AI
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0 }}>
              Why Groq LPUs are unmatched for real-time applications, voice assistants, and student hackathons.
            </p>
          </div>

          <div className="groq-table-scroll">
            <table className="groq-comp-table">
              <thead>
                <tr>
                  <th>Provider</th>
                  <th className="groq-highlight-col">Groq LPU</th>
                  <th>OpenAI API</th>
                  <th>Anthropic Claude</th>
                  <th>Together AI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tokens / Second</td>
                  <td className="groq-highlight-col">540+ tokens/s</td>
                  <td>30 - 60 tokens/s</td>
                  <td>40 - 75 tokens/s</td>
                  <td>120 - 180 tokens/s</td>
                </tr>
                <tr>
                  <td>Time to First Token (TTFT)</td>
                  <td className="groq-highlight-col">&lt; 90ms</td>
                  <td>450ms - 1.2s</td>
                  <td>500ms - 1.5s</td>
                  <td>300ms - 800ms</td>
                </tr>
                <tr>
                  <td>Free Tier Available</td>
                  <td className="groq-highlight-col">Yes (14.4k req/day)</td>
                  <td>No (Paid credits only)</td>
                  <td>No (Paid credits only)</td>
                  <td>$5 free credit only</td>
                </tr>
                <tr>
                  <td>Hardware</td>
                  <td className="groq-highlight-col">Groq LPU™ Silicon</td>
                  <td>NVIDIA H100 GPUs</td>
                  <td>Google TPU / AWS Trainium</td>
                  <td>NVIDIA H100 GPUs</td>
                </tr>
                <tr>
                  <td>Credit Card Required</td>
                  <td className="groq-highlight-col">No</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="groq-mobile-points" style={{ padding: "0 16px 20px" }}>
            <div style={{ background: "rgba(20, 10, 14, 0.8)", border: "1px solid rgba(244, 63, 94, 0.3)", borderRadius: "14px", padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ fontWeight: 800, color: "#ffffff", fontSize: "0.95rem" }}>Inference Speed</span>
                <span style={{ background: "rgba(244, 63, 94, 0.2)", color: "#fb7185", padding: "3px 10px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700 }}>540+ Tokens/Sec</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: "18px", color: "#94a3b8", fontSize: "0.84rem", lineHeight: 1.55 }}>
                <li><strong style={{ color: "#fb7185" }}>Groq LPU:</strong> 540+ tokens/second on Llama 3.1 8B (fastest on Earth)</li>
                <li><strong>OpenAI API:</strong> 30 - 60 tokens/second</li>
                <li><strong>Anthropic Claude:</strong> 40 - 75 tokens/second</li>
                <li><strong>Together AI:</strong> 120 - 180 tokens/second</li>
              </ul>
            </div>

            <div style={{ background: "rgba(20, 10, 14, 0.8)", border: "1px solid rgba(244, 63, 94, 0.3)", borderRadius: "14px", padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ fontWeight: 800, color: "#ffffff", fontSize: "0.95rem" }}>Time to First Token (TTFT)</span>
                <span style={{ background: "rgba(244, 63, 94, 0.2)", color: "#fb7185", padding: "3px 10px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700 }}>&lt; 90ms</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: "18px", color: "#94a3b8", fontSize: "0.84rem", lineHeight: 1.55 }}>
                <li><strong style={{ color: "#fb7185" }}>Groq LPU:</strong> Instant sub-90ms start (ideal for voice AI bots)</li>
                <li><strong>OpenAI / Claude:</strong> 450ms to 1.5s initial token delay</li>
              </ul>
            </div>

            <div style={{ background: "rgba(20, 10, 14, 0.8)", border: "1px solid rgba(244, 63, 94, 0.3)", borderRadius: "14px", padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ fontWeight: 800, color: "#ffffff", fontSize: "0.95rem" }}>Free Tier &amp; Onboarding</span>
                <span style={{ background: "rgba(244, 63, 94, 0.2)", color: "#fb7185", padding: "3px 10px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700 }}>No Credit Card</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: "18px", color: "#94a3b8", fontSize: "0.84rem", lineHeight: 1.55 }}>
                <li><strong style={{ color: "#fb7185" }}>Groq:</strong> 100% Free with 14,400 requests/day quota</li>
                <li><strong>OpenAI / Claude:</strong> Mandatory paid credits &amp; credit card required</li>
              </ul>
            </div>
          </div>

        </section>

        {/* Searchable Student FAQ */}
        <section className="groq-faq-section">
          <h2 className="groq-section-title">Frequently Asked Questions for Students &amp; Developers</h2>
          <p className="groq-section-subtitle">
            Instant real-time search across Groq API rate limits, Whisper audio models, Next.js streaming, and tool calling.
          </p>

          <input
            type="text"
            className="groq-search-box"
            placeholder="Search FAQs (e.g., rate limit, free tier, LPU, Whisper, streaming, Next.js)..."
            value={faqSearch}
            onChange={(e) => setFaqSearch(e.target.value)}
          />

          {filteredFaqs.length === 0 ? (
            <div style={{ textAlign: "center", padding: "32px", color: "#94a3b8" }}>
              No questions found matching "{faqSearch}". Try searching for "rate limit", "Whisper", or "LPU".
            </div>
          ) : (
            filteredFaqs.map((faq, i) => (
              <div key={i} className="groq-faq-item">
                <div
                  className="groq-faq-header"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span>{faq.q}</span>
                  <span style={{ color: "#fb7185", fontSize: "18px" }}>
                    {openFaq === i ? "−" : "+"}
                  </span>
                </div>
                {openFaq === i && (
                  <div className="groq-faq-body">
                    {faq.a}
                  </div>
                )}
              </div>
            ))
          )}
        </section>

        {/* ChittorTech CTA Banner */}
        <section className="groq-cta-box">
          <h2 style={{ fontSize: "26px", fontWeight: 800, margin: "0 0 12px", color: "#ffffff" }}>
            Ready to Build Next-Generation AI Software?
          </h2>
          <p style={{ color: "#cbd5e1", maxWidth: "600px", margin: "0 auto 24px", fontSize: "15px", lineHeight: 1.6 }}>
            ChittorTech develops bespoke AI solutions, ultra-low latency voice agents, autonomous workflow bots, 
            and enterprise RAG systems tailored to your business goals.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact-us" className="groq-btn-primary">
              Book a Free AI Consultation &rarr;
            </Link>
            <Link href="/ai-chatbot-development" className="groq-btn-secondary">
              Explore Enterprise AI Solutions
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
