import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import technologies from "@/data/technologies.json";
import TechClientForm from "./TechClientForm";

export const dynamicParams = false;

export async function generateStaticParams() {
  return technologies.map((t) => ({
    tech: t.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { tech } = await params;
  const item = technologies.find((t) => t.slug === tech);

  if (!item) {
    return {
      title: "Technology Solutions | ChittorTech",
      description: "Explore ChittorTech's comprehensive enterprise technology stack, frameworks, and programming capabilities.",
    };
  }

  const title = `${item.name} Development Services & Architectural Guide | ChittorTech`;
  const description = `Discover ChittorTech's deep ${item.name} engineering capabilities: ${item.tagline}. Read our architectural analysis, runtime benchmarks, real case studies, and honest trade-offs.`;

  return {
    title,
    description,
    keywords: [
      `${item.name} development company`,
      `${item.name} agency India`,
      `${item.name} consulting services`,
      `${item.name} software engineering`,
      `${item.name} architecture pros and cons`,
      `${item.name} vs ${item.comparisonBattle?.competitor || "alternatives"}`,
      "ChittorTech technology stack"
    ].join(", "),
    alternates: {
      canonical: `https://chittortech.in/technology/${item.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://chittortech.in/technology/${item.slug}`,
      siteName: "ChittorTech",
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function TechnologyPage({ params }) {
  const { tech } = await params;
  const item = technologies.find((t) => t.slug === tech);

  if (!item) {
    notFound();
  }

  // Related technologies catalog for internal linking
  const relatedTechs = technologies
    .filter((t) => t.slug !== item.slug)
    .slice(0, 12);

  // Grouped all tech stacks for footer directory
  const allCategories = Array.from(new Set(technologies.map(t => t.category)));

  // FAQ Schema JSON-LD
  const faqSchema = item.faqList && item.faqList.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": item.faqList.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": `${item.name} Enterprise Architecture & Development Guide`,
    "description": item.executiveSummary || item.overview,
    "proficiencyLevel": "Expert",
    "author": {
      "@type": "Organization",
      "name": "ChittorTech",
      "url": "https://chittortech.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ChittorTech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chittortech.in/logo.png"
      }
    }
  };

  return (
    <main className="ct-tech-page">
      {/* Schema Markup for Search Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <style>{`
        /* ── Base & Global Box Sizing ── */
        .ct-tech-page {
          font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
          color: #1e293b;
          background: #ffffff;
          overflow-x: clip !important;
          max-width: 100vw !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }
        .ct-tech-page *, .ct-tech-page *::before, .ct-tech-page *::after {
          box-sizing: border-box !important;
        }
        .ct-tech-page h1, .ct-tech-page h2, .ct-tech-page h3, .ct-tech-page h4, .ct-tech-page h5 {
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif !important;
          overflow-wrap: break-word !important;
          word-break: break-word !important;
        }

        /* ── Hero Section ── */
        .ct-tech-hero {
          background: linear-gradient(135deg, #090e17 0%, #111827 50%, #030712 100%);
          padding: 70px 0 60px;
          position: relative;
          color: #ffffff;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          max-width: 100vw;
        }
        .ct-tech-hero::before {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, ${item.color}22 0%, transparent 70%);
          top: -150px;
          right: -80px;
          pointer-events: none;
        }

        .ct-tech-breadcrumb {
          font-size: 0.85rem;
          color: #94a3b8;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .ct-tech-breadcrumb a {
          color: #cbd5e1;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .ct-tech-breadcrumb a:hover {
          color: #38bdf8;
        }

        .ct-tech-badge-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .ct-tech-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #38bdf8;
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          padding: 6px 14px;
          border-radius: 50px;
        }
        .ct-tech-badge-prod {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34d399;
          font-size: 0.74rem;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 50px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .ct-tech-hero-icon-wrap {
          width: 74px;
          height: 74px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.45);
          font-size: 2.5rem;
          margin-bottom: 22px;
        }

        .ct-tech-hero-title {
          font-size: clamp(1.85rem, 3.8vw, 3rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.18;
          margin-bottom: 14px;
          letter-spacing: -0.5px;
          overflow-wrap: break-word;
        }
        .ct-tech-hero-tagline {
          font-size: 1.12rem;
          font-weight: 600;
          color: #38bdf8;
          margin-bottom: 18px;
          line-height: 1.5;
          overflow-wrap: break-word;
        }
        .ct-tech-hero-exec-summary {
          font-size: 1rem;
          color: #cbd5e1;
          line-height: 1.75;
          max-width: 680px;
          margin-bottom: 30px;
          overflow-wrap: break-word;
        }

        /* ── Hero Right Card (Spec Card) ── */
        .ct-spec-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          border-radius: 18px;
          padding: 26px;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }
        .ct-spec-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 18px;
        }

        /* ── Sections Common ── */
        .ct-tech-sec {
          padding: 65px 0;
          max-width: 100vw;
          overflow-x: hidden;
        }
        .ct-tech-sec-head {
          margin-bottom: 40px;
        }
        .ct-tech-sec-pill {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #2563eb;
          background: #eff6ff;
          padding: 5px 12px;
          border-radius: 6px;
          margin-bottom: 12px;
        }
        .ct-tech-sec-title {
          font-size: clamp(1.5rem, 2.6vw, 2.2rem);
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
          letter-spacing: -0.3px;
          overflow-wrap: break-word;
        }
        .ct-tech-sec-subtitle {
          font-size: 0.98rem;
          color: #64748b;
          line-height: 1.65;
          max-width: 720px;
          margin: 0;
          overflow-wrap: break-word;
        }

        /* ── Architecture Cards ── */
        .ct-arch-card {
          background: #0f172a;
          border: 1px solid #1e293b;
          border-radius: 16px;
          padding: 26px;
          color: #ffffff;
          height: 100%;
          transition: transform 0.3s ease, border-color 0.3s ease;
          box-sizing: border-box;
        }
        .ct-arch-card:hover {
          transform: translateY(-4px);
          border-color: #38bdf8;
        }
        .ct-arch-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.25);
          color: #38bdf8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          margin-bottom: 18px;
        }
        .ct-arch-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 10px;
          overflow-wrap: break-word;
        }
        .ct-arch-desc {
          font-size: 0.92rem;
          color: #94a3b8;
          line-height: 1.65;
          margin: 0;
          overflow-wrap: break-word;
        }

        /* ── Why ChittorTech Box ── */
        .ct-why-box {
          background: linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%);
          border: 1px solid #c7d2fe;
          border-left: 5px solid #4f46e5;
          border-radius: 14px;
          padding: 28px 30px;
          margin-top: 36px;
          box-sizing: border-box;
        }
        .ct-why-box h4 {
          font-size: 1.2rem;
          font-weight: 800;
          color: #1e1b4b;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .ct-why-box p {
          font-size: 0.96rem;
          color: #334155;
          line-height: 1.7;
          margin: 0;
          overflow-wrap: break-word;
        }

        /* ── Real Case Study Card ── */
        .ct-case-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          overflow: hidden;
          box-sizing: border-box;
        }
        .ct-case-header {
          background: #0f172a;
          color: #ffffff;
          padding: 22px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .ct-case-header h3 {
          font-size: 1.28rem;
          font-weight: 800;
          margin: 0;
          color: #ffffff;
          overflow-wrap: break-word;
        }
        .ct-case-badge {
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #34d399;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 50px;
          white-space: nowrap;
        }
        .ct-case-body {
          padding: 30px 28px;
        }
        .ct-case-item {
          margin-bottom: 20px;
        }
        .ct-case-label {
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #64748b;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ct-case-text {
          font-size: 0.96rem;
          color: #1e293b;
          line-height: 1.65;
          margin: 0;
          overflow-wrap: break-word;
        }
        .ct-case-metrics {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 12px;
          padding: 16px 20px;
          margin-top: 20px;
        }
        .ct-case-metrics-label {
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #15803d;
          margin-bottom: 4px;
        }
        .ct-case-metrics-val {
          font-size: 1.05rem;
          font-weight: 700;
          color: #14532d;
          margin: 0;
          overflow-wrap: break-word;
        }

        /* ── Code Terminal (Rock-solid Mobile Overflow Prevention) ── */
        .ct-terminal {
          background: #090d16;
          border: 1px solid #1e293b;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4);
          max-width: 100%;
          width: 100%;
          box-sizing: border-box;
        }
        .ct-terminal-topbar {
          background: #111827;
          border-bottom: 1px solid #1f2937;
          padding: 12px 18px;
          box-sizing: border-box;
        }
        .ct-terminal-dots {
          display: flex;
          gap: 6px;
          align-items: center;
        }
        .ct-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .ct-dot-red { background: #ef4444; }
        .ct-dot-yellow { background: #f59e0b; }
        .ct-dot-green { background: #10b981; }
        .ct-terminal-title {
          font-family: 'JetBrains Mono', monospace, Consolas;
          font-size: 0.82rem;
          color: #cbd5e1;
          margin-top: 8px;
          overflow-wrap: break-word;
          word-break: break-word;
        }
        .ct-terminal-body {
          padding: 20px;
          overflow-x: auto !important;
          -webkit-overflow-scrolling: touch;
          max-width: 100%;
          box-sizing: border-box;
        }
        .ct-terminal-body pre {
          margin: 0;
          font-family: 'JetBrains Mono', monospace, Consolas;
          font-size: 0.84rem;
          line-height: 1.65;
          color: #e2e8f0;
          white-space: pre;
        }

        /* ── Use Case Cards ── */
        .ct-tech-uc-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 24px;
          height: 100%;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          box-sizing: border-box;
        }
        .ct-tech-uc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.08);
          border-color: #cbd5e1;
        }
        .ct-tech-uc-num {
          font-size: 0.74rem;
          font-weight: 800;
          color: #2563eb;
          background: #eff6ff;
          display: inline-block;
          padding: 4px 8px;
          border-radius: 5px;
          margin-bottom: 12px;
        }
        .ct-tech-uc-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 8px;
          color: #0f172a;
          overflow-wrap: break-word;
        }
        .ct-tech-uc-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
          overflow-wrap: break-word;
        }

        /* ── Pros and Cons ── */
        .ct-tech-pro-box {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 16px;
          padding: 28px;
          height: 100%;
          box-sizing: border-box;
        }
        .ct-tech-pro-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #166534;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          overflow-wrap: break-word;
        }
        .ct-tech-con-box {
          background: #fffbeb;
          border: 1px solid #fef3c7;
          border-radius: 16px;
          padding: 28px;
          height: 100%;
          box-sizing: border-box;
        }
        .ct-tech-con-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #92400e;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          overflow-wrap: break-word;
        }
        .ct-tech-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .ct-tech-list li {
          font-size: 0.92rem;
          line-height: 1.65;
          margin-bottom: 14px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #1e293b;
          overflow-wrap: break-word;
        }
        .ct-tech-list li:last-child {
          margin-bottom: 0;
        }

        /* ── Battle Comparison ── */
        .ct-battle-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.03);
          box-sizing: border-box;
        }
        .ct-battle-header {
          background: linear-gradient(135deg, #1e293b, #0f172a);
          color: #ffffff;
          padding: 20px 26px;
        }
        .ct-battle-header h3 {
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
          overflow-wrap: break-word;
        }
        .ct-battle-body {
          padding: 26px;
        }
        .ct-battle-opt {
          padding: 18px;
          border-radius: 12px;
          height: 100%;
          box-sizing: border-box;
        }
        .ct-battle-opt-curr {
          background: #f0fdf4;
          border: 1px solid #86efac;
        }
        .ct-battle-opt-comp {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        }
        .ct-battle-opt-title {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-wrap: break-word;
        }
        .ct-battle-opt-text {
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
          color: #334155;
          overflow-wrap: break-word;
        }

        /* ── FAQs ── */
        .ct-faq-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 20px 24px;
          margin-bottom: 14px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.02);
          transition: border-color 0.2s ease;
          box-sizing: border-box;
        }
        .ct-faq-card:hover {
          border-color: #94a3b8;
        }
        .ct-faq-q {
          font-size: 1.02rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          overflow-wrap: break-word;
        }
        .ct-faq-a {
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.65;
          margin: 0;
          padding-left: 26px;
          overflow-wrap: break-word;
        }

        /* ── Form Card ── */
        .ct-tech-form-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.05);
          box-sizing: border-box;
        }

        /* ── Mobile Media Queries (Down to 280px Screen Width) ── */
        @media (max-width: 991px) {
          .ct-tech-hero {
            padding: 45px 0 35px;
          }
          .ct-tech-hero-title {
            font-size: 1.85rem !important;
          }
          .ct-tech-hero-tagline {
            font-size: 1rem;
          }
          .ct-tech-hero-exec-summary {
            font-size: 0.92rem;
          }
        }

        @media (max-width: 767px) {
          .ct-tech-sec {
            padding: 40px 0 !important;
          }
          .ct-tech-sec-head {
            margin-bottom: 25px !important;
          }
          .ct-tech-sec-title {
            font-size: 1.4rem !important;
            line-height: 1.3 !important;
          }
          .ct-tech-sec-subtitle {
            font-size: 0.88rem !important;
            line-height: 1.6 !important;
          }

          /* Buttons in Hero full width */
          .ct-hero-btn-wrap {
            flex-direction: column !important;
            width: 100% !important;
            gap: 10px !important;
          }
          .ct-hero-btn-wrap a, .ct-hero-btn-wrap button {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            text-align: center !important;
            font-size: 0.9rem !important;
            padding: 12px 14px !important;
          }

          /* Spec card */
          .ct-spec-card {
            padding: 18px 14px !important;
            border-radius: 14px !important;
          }
          .ct-spec-header h5 {
            font-size: 1.05rem !important;
          }

          /* Case Study */
          .ct-case-header {
            padding: 16px 14px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
          .ct-case-header h3 {
            font-size: 1.15rem !important;
          }
          .ct-case-body {
            padding: 18px 14px !important;
          }
          .ct-case-text {
            font-size: 0.88rem !important;
          }
          .ct-case-metrics {
            padding: 12px 14px !important;
          }
          .ct-case-metrics-val {
            font-size: 0.95rem !important;
          }

          /* Terminal */
          .ct-terminal-topbar {
            padding: 10px 14px !important;
          }
          .ct-terminal-title {
            font-size: 0.78rem !important;
          }
          .ct-terminal-body {
            padding: 14px !important;
          }
          .ct-terminal-body pre {
            font-size: 0.76rem !important;
          }

          /* Use Cases & Pros/Cons */
          .ct-tech-uc-card {
            padding: 18px 14px !important;
          }
          .ct-tech-pro-box, .ct-tech-con-box {
            padding: 18px 14px !important;
            border-radius: 14px !important;
          }
          .ct-tech-pro-title, .ct-tech-con-title {
            font-size: 1.1rem !important;
            margin-bottom: 14px !important;
          }
          .ct-tech-list li {
            font-size: 0.86rem !important;
            line-height: 1.55 !important;
            margin-bottom: 10px !important;
          }

          /* Battle */
          .ct-battle-header {
            padding: 14px 14px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 6px !important;
          }
          .ct-battle-header h3 {
            font-size: 1.15rem !important;
          }
          .ct-battle-body {
            padding: 16px 12px !important;
          }
          .ct-battle-opt {
            padding: 14px 12px !important;
          }
          .ct-battle-opt-text {
            font-size: 0.86rem !important;
          }

          /* FAQs */
          .ct-faq-card {
            padding: 14px 14px !important;
          }
          .ct-faq-q {
            font-size: 0.92rem !important;
          }
          .ct-faq-a {
            font-size: 0.85rem !important;
            padding-left: 20px !important;
          }

          /* Form */
          .ct-tech-form-card {
            padding: 18px 14px !important;
            border-radius: 14px !important;
          }
        }

        @media (max-width: 400px) {
          .ct-tech-hero-title {
            font-size: 1.55rem !important;
          }
          .ct-tech-hero-icon-wrap {
            width: 56px;
            height: 56px;
            font-size: 1.85rem;
            border-radius: 14px;
          }
          .ct-tech-badge-row {
            gap: 6px;
          }
          .ct-tech-badge {
            font-size: 0.7rem;
            padding: 4px 10px;
          }
          .ct-tech-badge-prod {
            font-size: 0.68rem;
            padding: 4px 8px;
          }
          .ct-terminal-body pre {
            font-size: 0.7rem !important;
          }
        }
      `}</style>

      {/* ── 1. HERO SECTION ── */}
      <section className="ct-tech-hero">
        <div className="container">
          <div className="ct-tech-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/web-development-services">Technologies</Link>
            <span>/</span>
            <span style={{ color: "#38bdf8" }}>{item.name}</span>
          </div>

          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="ct-tech-badge-row">
                <span className="ct-tech-badge">
                  <i className="fa-solid fa-layer-group"></i> {item.category}
                </span>
                <span className="ct-tech-badge-prod">
                  <i className="fa-solid fa-shield-halved"></i> Production Verified at ChittorTech
                </span>
              </div>

              <div className="ct-tech-hero-icon-wrap" style={{ color: item.color }}>
                <i className={item.icon}></i>
              </div>

              <h1 className="ct-tech-hero-title">
                {item.name} Enterprise Architecture & Custom Engineering
              </h1>
              <div className="ct-tech-hero-tagline">{item.tagline}</div>
              
              <p className="ct-tech-hero-exec-summary">
                {item.executiveSummary || item.overview}
              </p>

              <div className="ct-hero-btn-wrap d-flex gap-3 flex-wrap">
                <a
                  href="#inquiry"
                  className="btn btn-primary px-4 py-3 fw-bold"
                  style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)", border: "none", borderRadius: "10px" }}
                >
                  <i className="fa-solid fa-calendar-check me-2"></i> Schedule {item.name} Consultation
                </a>
                <a
                  href="#casestudy"
                  className="btn btn-outline-light px-4 py-3 fw-bold"
                  style={{ borderRadius: "10px", borderColor: "rgba(255,255,255,0.25)" }}
                >
                  <i className="fa-solid fa-diagram-project me-2"></i> View Production Case Study
                </a>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="ct-spec-card">
                <div className="ct-spec-header">
                  <h5 className="text-white fw-bold mb-0">
                    <i className="fa-solid fa-microchip text-primary me-2"></i> Engine Specifications
                  </h5>
                  <span className="badge bg-primary text-white" style={{ fontSize: "0.72rem" }}>
                    ChittorTech Certified
                  </span>
                </div>

                <div className="mb-3 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="small text-secondary text-uppercase tracking-wider fw-bold">Core Runtime / Engine</div>
                  <div className="text-light small mt-1" style={{ color: "#e2e8f0" }}>
                    {item.architectureDeepDive?.coreEngine || "Optimized runtime environment"}
                  </div>
                </div>

                <div className="mb-3 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="small text-secondary text-uppercase tracking-wider fw-bold">Typical Deliverables</div>
                  <div className="text-light small mt-1" style={{ color: "#cbd5e1" }}>
                    {item.deliverables}
                  </div>
                </div>

                <h6 className="text-white fw-semibold small text-uppercase tracking-wider mb-2" style={{ letterSpacing: "1px" }}>
                  Validated In Production Across:
                </h6>
                <ul className="list-unstyled mb-0">
                  {item.projects?.map((proj) => (
                    <li key={proj} className="d-flex align-items-center gap-2 text-light small py-1" style={{ color: "#e2e8f0" }}>
                      <i className="fa-solid fa-circle-check text-success"></i>
                      <span>{proj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. ARCHITECTURE DEEP DIVE ── */}
      {item.architectureDeepDive && (
        <section className="ct-tech-sec" style={{ background: "#0b1320" }}>
          <div className="container">
            <div className="text-center ct-tech-sec-head">
              <span className="ct-tech-sec-pill" style={{ background: "rgba(56, 189, 248, 0.15)", color: "#38bdf8" }}>
                Deep Technical Specs
              </span>
              <h2 className="ct-tech-sec-title text-white">
                Under the Hood: {item.name} Architectural Internals
              </h2>
              <p className="ct-tech-sec-subtitle mx-auto text-light" style={{ color: "#94a3b8" }}>
                Senior engineering teams choose frameworks based on runtimes, memory profiles, and concurrency limits — not marketing buzzwords.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="ct-arch-card">
                  <div className="ct-arch-icon">
                    <i className="fa-solid fa-gears"></i>
                  </div>
                  <h3 className="ct-arch-title">Core Runtime & Engine</h3>
                  <p className="ct-arch-desc">{item.architectureDeepDive.coreEngine}</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="ct-arch-card">
                  <div className="ct-arch-icon">
                    <i className="fa-solid fa-arrows-split-up-and-left"></i>
                  </div>
                  <h3 className="ct-arch-title">Concurrency & Threading</h3>
                  <p className="ct-arch-desc">{item.architectureDeepDive.concurrencyModel}</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <div className="ct-arch-card">
                  <div className="ct-arch-icon">
                    <i className="fa-solid fa-memory"></i>
                  </div>
                  <h3 className="ct-arch-title">Memory & Lifecycle</h3>
                  <p className="ct-arch-desc">{item.architectureDeepDive.memoryArchitecture}</p>
                </div>
              </div>
            </div>

            {item.whyChittorTechChoseIt && (
              <div className="ct-why-box">
                <h4>
                  <i className="fa-solid fa-compass-drafting text-primary"></i>
                  Why ChittorTech Selected {item.name} for Client Workloads
                </h4>
                <p>{item.whyChittorTechChoseIt}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── 3. REAL CHITTORTECH CASE STUDY ── */}
      {item.chittorTechCaseStudy && (
        <section id="casestudy" className="ct-tech-sec" style={{ background: "#f8fafc" }}>
          <div className="container">
            <div className="ct-tech-sec-head">
              <span className="ct-tech-sec-pill">Production Proof</span>
              <h2 className="ct-tech-sec-title">ChittorTech Real-World Case Study</h2>
              <p className="ct-tech-sec-subtitle">
                How our engineering team solved an urgent client scalability or reliability hurdle using {item.name}.
              </p>
            </div>

            <div className="ct-case-card">
              <div className="ct-case-header">
                <div>
                  <span className="small text-uppercase tracking-wider text-secondary fw-bold d-block mb-1" style={{ fontSize: "0.72rem" }}>
                    Live Client Architecture
                  </span>
                  <h3>{item.chittorTechCaseStudy.projectName}</h3>
                </div>
                <span className="ct-case-badge">
                  <i className="fa-solid fa-check-double me-1"></i> Verified In Production
                </span>
              </div>

              <div className="ct-case-body">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="ct-case-item">
                      <div className="ct-case-label">
                        <i className="fa-solid fa-triangle-exclamation text-warning"></i> The Architectural Challenge
                      </div>
                      <p className="ct-case-text">{item.chittorTechCaseStudy.challenge}</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="ct-case-item">
                      <div className="ct-case-label">
                        <i className="fa-solid fa-lightbulb text-primary"></i> The ChittorTech Solution
                      </div>
                      <p className="ct-case-text">{item.chittorTechCaseStudy.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="ct-case-metrics">
                  <div className="ct-case-metrics-label">
                    <i className="fa-solid fa-chart-line me-1"></i> Measurable Production Outcome
                  </div>
                  <p className="ct-case-metrics-val">{item.chittorTechCaseStudy.measurableResult}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 4. PRODUCTION CODE IMPLEMENTATION ── */}
      {item.codeSnippet && (
        <section className="ct-tech-sec">
          <div className="container">
            <div className="ct-tech-sec-head">
              <span className="ct-tech-sec-pill">Code Anatomy</span>
              <h2 className="ct-tech-sec-title">Production Pattern: {item.codeSnippet.title}</h2>
              <p className="ct-tech-sec-subtitle">
                A look at the production design patterns our engineers implement when deploying {item.name} systems.
              </p>
            </div>

            <div className="ct-terminal">
              <div className="ct-terminal-topbar">
                <div className="d-flex align-items-center justify-content-between w-100 gap-2 mb-2">
                  <div className="ct-terminal-dots">
                    <span className="ct-dot ct-dot-red"></span>
                    <span className="ct-dot ct-dot-yellow"></span>
                    <span className="ct-dot ct-dot-green"></span>
                  </div>
                  <span className="badge bg-dark text-secondary border border-secondary" style={{ fontSize: "0.7rem" }}>
                    ChittorTech Snippet
                  </span>
                </div>
                <div className="ct-terminal-title">
                  {item.codeSnippet.title} <span className="text-primary font-monospace">({item.codeSnippet.language})</span>
                </div>
              </div>
              <div className="ct-terminal-body">
                <pre>
                  <code>{item.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 5. USE CASES ── */}
      <section className="ct-tech-sec ct-bg-slate" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="ct-tech-sec-head">
            <span className="ct-tech-sec-pill">Enterprise Scope</span>
            <h2 className="ct-tech-sec-title">Key Commercial Use Cases for {item.name}</h2>
            <p className="ct-tech-sec-subtitle">
              How businesses leverage {item.name} with ChittorTech to streamline mission-critical operations and capture market share.
            </p>
          </div>

          <div className="row g-3 g-md-4">
            {item.useCases?.map((uc, i) => (
              <div key={uc.title} className="col-md-6 col-lg-3">
                <div className="ct-tech-uc-card">
                  <span className="ct-tech-uc-num">USE CASE 0{i + 1}</span>
                  <h3 className="ct-tech-uc-title">{uc.title}</h3>
                  <p className="ct-tech-uc-desc">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PROS & CONS (HONEST ENGINEERING ASSESSMENT) ── */}
      <section className="ct-tech-sec">
        <div className="container">
          <div className="text-center ct-tech-sec-head max-w-700 mx-auto">
            <span className="ct-tech-sec-pill">Engineering Transparency</span>
            <h2 className="ct-tech-sec-title">Architectural Assessment: Advantages vs. Trade-Offs</h2>
            <p className="ct-tech-sec-subtitle mx-auto">
              No technology is a silver bullet. We provide an honest appraisal of {item.name}&apos;s key advantages and production limitations so you make the right engineering decision.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="ct-tech-pro-box">
                <div className="ct-tech-pro-title">
                  <i className="fa-solid fa-circle-check"></i> Core Advantages & Strengths
                </div>
                <ul className="ct-tech-list">
                  {(item.inDepthPros || item.pros || []).map((p) => (
                    <li key={p}>
                      <i className="fa-solid fa-check text-success mt-1"></i>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="ct-tech-con-box">
                <div className="ct-tech-con-title">
                  <i className="fa-solid fa-triangle-exclamation"></i> Limitations & Engineering Trade-Offs
                </div>
                <ul className="ct-tech-list">
                  {(item.inDepthCons || item.cons || []).map((c) => (
                    <li key={c}>
                      <i className="fa-solid fa-exclamation text-warning mt-1"></i>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. HEAD-TO-HEAD COMPARISON BATTLE ── */}
      {item.comparisonBattle && (
        <section className="ct-tech-sec" style={{ background: "#f1f5f9" }}>
          <div className="container">
            <div className="ct-battle-card">
              <div className="ct-battle-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                <div>
                  <span className="badge bg-primary text-white mb-2" style={{ fontSize: "0.72rem" }}>Architectural Shootout</span>
                  <h3>{item.comparisonBattle.competitor}</h3>
                </div>
                <span className="text-secondary small">Decision Framework</span>
              </div>
              <div className="ct-battle-body">
                <div className="row g-3 g-md-4">
                  <div className="col-md-6">
                    <div className="ct-battle-opt ct-battle-opt-curr">
                      <div className="ct-battle-opt-title text-success">
                        <i className="fa-solid fa-circle-check"></i> When to Choose {item.name}
                      </div>
                      <p className="ct-battle-opt-text">{item.comparisonBattle.whenToPickCurrent}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="ct-battle-opt ct-battle-opt-comp">
                      <div className="ct-battle-opt-title text-primary">
                        <i className="fa-solid fa-arrows-rotate"></i> When to Consider Alternatives
                      </div>
                      <p className="ct-battle-opt-text">{item.comparisonBattle.whenToPickCompetitor}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 8. TECHNICAL FAQS ── */}
      {item.faqList && item.faqList.length > 0 && (
        <section className="ct-tech-sec">
          <div className="container">
            <div className="ct-tech-sec-head">
              <span className="ct-tech-sec-pill">Technical Answers</span>
              <h2 className="ct-tech-sec-title">Frequently Asked Technical Questions</h2>
              <p className="ct-tech-sec-subtitle">
                Clear, senior-level answers to common architectural and business queries regarding {item.name}.
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-10">
                {item.faqList.map((faq, index) => (
                  <div key={index} className="ct-faq-card">
                    <div className="ct-faq-q">
                      <i className="fa-solid fa-circle-question text-primary mt-1"></i>
                      <span>{faq.q}</span>
                    </div>
                    <p className="ct-faq-a">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 9. LEAD CONSULTATION FORM ── */}
      <section id="inquiry" className="ct-tech-sec" style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <TechClientForm techName={item.name} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. EXPLORE ALL 44 TECHNOLOGIES DIRECTORY ── */}
      <section className="ct-tech-sec" style={{ borderTop: "1px solid #e2e8f0", background: "#ffffff" }}>
        <div className="container">
          <div className="text-center mb-4 mb-md-5">
            <span className="ct-tech-sec-pill">Technology Catalog</span>
            <h3 className="fw-bold text-dark fs-3 mb-2">Explore ChittorTech&apos;s Engineering Capabilities</h3>
            <p className="text-muted small mx-auto" style={{ maxWidth: "600px" }}>
              Explore deep architectural write-ups and case studies across all 44 frameworks, runtimes, and enterprise tools in our stack.
            </p>
          </div>

          <div className="row g-3 g-md-4">
            {allCategories.map((cat) => (
              <div key={cat} className="col-md-6 col-lg-3">
                <div className="p-3 rounded-3 h-100" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                  <h6 className="fw-bold text-dark small text-uppercase tracking-wider mb-3" style={{ color: "#1e293b" }}>
                    {cat}
                  </h6>
                  <ul className="list-unstyled mb-0">
                    {technologies.filter(t => t.category === cat).map((t) => (
                      <li key={t.slug} className="mb-2">
                        <Link
                          href={`/technology/${t.slug}`}
                          className="d-flex align-items-center gap-2 text-decoration-none small"
                          style={{
                            color: t.slug === item.slug ? "#2563eb" : "#475569",
                            fontWeight: t.slug === item.slug ? "700" : "500"
                          }}
                        >
                          <i className={t.icon} style={{ color: t.color, width: "16px" }}></i>
                          <span>{t.name}</span>
                          {t.slug === item.slug && <span className="badge bg-primary ms-auto" style={{ fontSize: "0.65rem" }}>Current</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
