"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import technologies from "@/data/technologies.json";

// Cleaned Tech Stack Marquee (No Vercel, No Google Cloud)
const cleanTechnologies = technologies.filter(t => t.slug !== 'vercel' && t.slug !== 'google-cloud');

const TECH_ROW_1 = [
  { slug: "antigravity", name: "Antigravity IDE", icon: "fa-solid fa-bolt", color: "#a855f7", href: "/antigravity" },
  { slug: "render", name: "Render Cloud", icon: "fa-solid fa-server", color: "#46e3b7", href: "/render" },
  { slug: "groq", name: "Groq LPU", icon: "fa-solid fa-microchip", color: "#f43f5e", href: "/groq" },
  { slug: "ga4", name: "Google Analytics 4", icon: "fa-solid fa-chart-pie", color: "#f59e0b", href: "/web-development-services" },
  ...cleanTechnologies.slice(0, 20)
];

const TECH_ROW_2 = [
  { slug: "cloudflare", name: "Cloudflare Pages", icon: "fa-brands fa-cloudflare", color: "#f6821f", href: "/cloudflare" },
  { slug: "claude-ai", name: "Claude AI", icon: "fa-solid fa-brain", color: "#d97706", href: "/ai-solutions" },
  ...cleanTechnologies.slice(20)
];

const FEATURES = [
  {
    icon: "fa-robot",
    title: "AI Chatbots & Support Agents",
    desc: "Intelligent 24/7 conversational AI agents for automated customer support, lead qualification, and instant booking.",
    href: "/pos",
    color: "#8b5cf6",
    bgColor: "rgba(139, 92, 246, 0.06)",
    borderColor: "rgba(139, 92, 246, 0.18)",
  },
  {
    icon: "fa-diagram-project",
    title: "Autonomous AI Workflows",
    desc: "Automate complex enterprise business processes, multi-step operations, and data pipelines with self-learning AI.",
    href: "/ai-solutions",
    color: "#4f46e5",
    bgColor: "rgba(79, 70, 229, 0.06)",
    borderColor: "rgba(79, 70, 229, 0.18)",
  },
  {
    icon: "fa-brain",
    title: "RAG & Document Intelligence",
    desc: "Transform unstructured business documents, PDFs, and internal manuals into instantly searchable vector AI systems.",
    href: "/ai-knowledge",
    color: "#06b6d4",
    bgColor: "rgba(6, 182, 212, 0.06)",
    borderColor: "rgba(6, 182, 212, 0.18)",
  },
  {
    icon: "fa-microchip",
    title: "Custom LLM Fine-Tuning",
    desc: "Domain-specific AI model training on your proprietary enterprise data for maximum precision and strict privacy.",
    href: "/inventory",
    color: "#d946ef",
    bgColor: "rgba(217, 70, 239, 0.06)",
    borderColor: "rgba(217, 70, 239, 0.18)",
  },
  {
    icon: "fa-laptop-code",
    title: "Full-Stack Web & SaaS Dev",
    desc: "Ultra-fast Next.js/React web applications, enterprise portals, and scalable cloud SaaS infrastructure.",
    href: "/web-development-services",
    color: "#10b981",
    bgColor: "rgba(16, 185, 129, 0.06)",
    borderColor: "rgba(16, 185, 129, 0.18)",
  },
  {
    icon: "fa-magnifying-glass-chart",
    title: "SEO & Performance Growth",
    desc: "Data-driven SEO strategies, technical audits, and performance marketing to dominate search results and acquire qualified B2B leads.",
    href: "/search-engine-optimization",
    color: "#f59e0b",
    bgColor: "rgba(245, 158, 11, 0.06)",
    borderColor: "rgba(245, 158, 11, 0.18)",
  },
];

const INDUSTRIES = [
  { icon: "fa-cart-shopping", label: "Supermarkets & Retail", href: "/supermarket", color: "#8b5cf6" },
  { icon: "fa-shirt", label: "Apparel & Garments", href: "/garments", color: "#ec4899" },
  { icon: "fa-hospital", label: "Hospitals & Healthcare", href: "/hospitals", color: "#06b6d4" },
  { icon: "fa-pills", label: "Pharma & Life Sciences", href: "/pharma", color: "#10b981" },
  { icon: "fa-graduation-cap", label: "Education & EdTech", href: "/schools-educational-institutions", color: "#f59e0b" },
  { icon: "fa-industry", label: "Smart Manufacturing", href: "/ai-manufacturing", color: "#6366f1" },
  { icon: "fa-mobile-screen", label: "Electronics & Hardware", href: "/electronics-smartphones", color: "#3b82f6" },
  { icon: "fa-shoe-prints", label: "Footwear & Fashion", href: "/footwear-store", color: "#14b8a6" },
  { icon: "fa-store", label: "Kirana & FMCG", href: "/kirana-store", color: "#84cc16" },
  { icon: "fa-truck-fast", label: "Logistics & Supply", href: "/logistics", color: "#f97316" },
  { icon: "fa-building", label: "B2B Enterprise", href: "/industrial-products", color: "#a855f7" },
  { icon: "fa-book-open", label: "Publishing & Media", href: "/book-store", color: "#0284c7" },
];

/* ── Dynamic Technology Stack Tabs Data ── */
const TABS = [
  {
    key: "chatbots",
    label: "AI Support Agents",
    icon: "fa-robot",
    headline: "24/7 Intelligent Support & Conversational Agents",
    desc: "Deploy custom conversational AI trained on your website, products, and internal knowledge base. Answer queries, capture leads, and resolve support tickets autonomously.",
    bullets: [
      "Multi-lingual support (English, Hindi, regional dialects)",
      "Instant System & AI Knowledge Base synchronization",
      "Omnichannel deployment: Web, WhatsApp & Mobile Apps",
      "Autonomous workflow triggers & zero maintenance"
    ],
    href: "/pos",
    accent: "#8b5cf6",
    metrics: [
      { val: "70%", lbl: "Ticket Deflection" },
      { val: "< 2s", lbl: "Response Latency" },
      { val: "99.4%", lbl: "Accuracy Score" },
      { val: "24/7", lbl: "Uptime Active" }
    ],
    previewTitle: "AI Support Engine Active",
    previewSubtitle: "Conversational Agent • Online"
  },
  {
    key: "llm",
    label: "Custom LLMs",
    icon: "fa-microchip",
    headline: "Fine-Tuned Enterprise AI Models",
    desc: "Train open-source or proprietary LLMs specifically on your company's proprietary data, operational guidelines, and domain terminology.",
    bullets: [
      "100% data privacy & local/private cloud hosting",
      "Specialized fine-tuning for industry terminology",
      "High accuracy with minimized hallucination",
      "Seamless REST/gRPC API integration with internal stack"
    ],
    href: "/inventory",
    accent: "#d946ef",
    metrics: [
      { val: "100%", lbl: "Data Privacy" },
      { val: "4.8x", lbl: "Domain Precision" },
      { val: "0%", lbl: "Public Data Leakage" },
      { val: "Owned", lbl: "Model Weights" }
    ],
    previewTitle: "Custom LLaMA / Mistral Weights",
    previewSubtitle: "Private Model Engine • Encrypted"
  },
  {
    key: "rag",
    label: "RAG & Vector Search",
    icon: "fa-brain",
    headline: "Enterprise Knowledge Search Systems",
    desc: "Convert millions of internal documents, PDFs, technical specs, and database tables into an interactive, instant AI search engine.",
    bullets: [
      "Sub-second semantic vector search across thousands of files",
      "Role-based access control & enterprise security",
      "Exact citation links and source attribution",
      "Supports PDF, DOCX, CSV, SQL, & Live Webhooks"
    ],
    href: "/ai-knowledge",
    accent: "#06b6d4",
    metrics: [
      { val: "< 80ms", lbl: "Vector Latency" },
      { val: "1M+", lbl: "Docs Indexed" },
      { val: "100%", lbl: "Citation Accuracy" },
      { val: "RBAC", lbl: "Role Access Active" }
    ],
    previewTitle: "Pinecone Vector Intelligence",
    previewSubtitle: "RAG Document Pipeline • Syncing"
  },
  {
    key: "web",
    label: "Web & SaaS Engineering",
    icon: "fa-laptop-code",
    headline: "High-Performance Cloud Web Apps",
    desc: "Custom enterprise portals, web platforms, and scalable cloud SaaS products engineered with Next.js, React, Node.js, and cloud-native architecture.",
    bullets: [
      "Sub-second page loading speed & core web vitals",
      "Scalable cloud infrastructure (AWS / Vercel / GCP)",
      "Modern, responsive UI/UX with rich animations",
      "Robust REST/GraphQL API design & microservices"
    ],
    href: "/web-development-services",
    accent: "#10b981",
    metrics: [
      { val: "100", lbl: "Lighthouse Score" },
      { val: "< 0.4s", lbl: "Page Load Speed" },
      { val: "99.99%", lbl: "SLA Uptime" },
      { val: "Sub-sec", lbl: "API Response" }
    ],
    previewTitle: "Next.js 16 Cloud Architecture",
    previewSubtitle: "Vercel Edge Cluster • Active"
  }
];

/* ── 6 Real Verified Google Reviews ── */
const TESTIMONIALS = [
  {
    name: "Vijay Laxmi Sharma",
    role: "Founder, Mewari Achaar",
    initials: "V",
    avatarBg: "linear-gradient(135deg, #2563eb, #3b82f6)",
    rating: 5,
    text: "ChittorTech has developed the app and website system for Mewari Achaar with a modern and professional digital experience. Their services are best-in-class, highly supportive for local vendors and businesses, and delivered at very reasonable pricing.",
  },
  {
    name: "Kush",
    role: "Founder, Shaadi Sutra",
    initials: "K",
    avatarBg: "linear-gradient(135deg, #2563eb, #3b82f6)",
    rating: 5,
    text: "ChittorTech developed the website and application system for Shaadi Sutra with a smooth and modern user experience. The platform includes wedding planning tools, vendor management, budget tracking, event coordination, and management features that make wedding organization simple and efficient.",
  },
  {
    name: "Ayush Sharma",
    role: "AI Product Manager, BrowserStack",
    initials: "A",
    avatarBg: "linear-gradient(135deg, #2563eb, #3b82f6)",
    rating: 5,
    text: "Really happy to see ChittorTech growing and achieving great things. The team has always been supportive, helpful, and inspiring, and their guidance and dedication towards technology and innovation are truly commendable. Wishing the entire ChittorTech team lots of success, growth, and many more achievements in the future ahead!",
  },
  {
    name: "Nisha Singh",
    role: "",
    initials: "N",
    avatarBg: "linear-gradient(135deg, #2563eb, #3b82f6)",
    rating: 5,
    text: "As an elder sister, I feel truly proud to see my brother building something so meaningful through ChittorTech. His dedication, determination, and passion for creating innovative digital solutions are really inspiring. Watching him grow and work towards his dreams brings immense happiness to our family. Wishing him and the entire team great success, positivity, and many more achievements ahead! ☀️",
  },
  {
    name: "Muskan Falwaria",
    role: "",
    initials: "M",
    avatarBg: "linear-gradient(135deg, #2563eb, #3b82f6)",
    rating: 5,
    text: "It's amazing to see classmates building something so impactful through ChittorTech. Their creativity, consistency, and modern approach towards technology truly make them stand out. Wishing the team more growth, success, and recognition in the coming years! 🚀",
  },
  {
    name: "Priyanka Vyas",
    role: "",
    initials: "P",
    avatarBg: "linear-gradient(135deg, #2563eb, #3b82f6)",
    rating: 5,
    text: "Honestly, it feels really good to see your growth and how far you've come. Watching a friend work hard, improve, and achieve new things is something that truly makes me happy. You've been putting in great effort, and it's inspiring to see you growing with confidence. Wishing you even more success ahead — keep shining and keep growing! ❤️ 🚀",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "AI Audit & Discovery", desc: "We analyze operational workflows to pinpoint high-ROI AI targets.", color: "#8b5cf6" },
  { num: "02", title: "Architecture & Design", desc: "Our engineers architect custom LLM models and security blueprints.", color: "#06b6d4" },
  { num: "03", title: "Development & Training", desc: "Agile build sprints and proprietary model fine-tuning on your data.", color: "#10b981" },
  { num: "04", title: "Deployment & Scaling", desc: "Seamless launch on enterprise cloud infra with 24/7 monitoring.", color: "#f59e0b" },
];

/* ── 7 High-Converting Hero Slider Banners ── */
const HERO_SLIDES = [
  {
    id: 1,
    badge: "Web & Mobile Engineering",
    badgeIcon: "fa-mobile-screen-button",
    badgeColor: "#38bdf8",
    title: "Next-Gen Web & Mobile Apps Built for Scale",
    sub: "High-converting Web Applications, React Native & Native Android/iOS Apps engineered with sub-second speed.",
    ctaPrimary: { text: "Explore Apps & Web Dev", href: "/web-development-services", icon: "fa-arrow-right" },
    ctaSecondary: { text: "Free Consultation", targetModal: true, icon: "fa-calendar-check" },
    pills: ["Next.js 16", "React Native", "Android & iOS", "Cloudflare Edge"],
    image: "/assets/images/hero-slider/banner1-web-mobile.jpg",
    alt: "ChittorTech Enterprise Web and Mobile App Development"
  },
  {
    id: 2,
    badge: "Enterprise AI & Automation",
    badgeIcon: "fa-brain",
    badgeColor: "#a855f7",
    title: "Autonomous AI Agents & Intelligent Customer Support",
    sub: "Deploy 24/7 bilingual AI chatbots, RAG vector search, and custom LLM workflows for automated growth.",
    ctaPrimary: { text: "Request AI Demo", href: "/crm", icon: "fa-robot" },
    ctaSecondary: { text: "Explore AI Solutions", href: "/erp", icon: "fa-microchip" },
    pills: ["AI Chatbots", "RAG Vector Search", "Custom LLMs", "Groq LPU Speed"],
    image: "/assets/images/hero-slider/banner2-ai-agents.jpg",
    alt: "ChittorTech AI Support Chatbots and LLM Workflows"
  },
  {
    id: 3,
    badge: "Mobile App Publishing",
    badgeIcon: "fa-google-play",
    badgeColor: "#34d399",
    title: "Google Play Store Publishing & Policy Compliance",
    sub: "14-day 12-tester testing verification, policy compliance audit & hassle-free Google Play Store launch.",
    ctaPrimary: { text: "Publish App Now", href: "/google-play-publishing", icon: "fa-upload" },
    ctaSecondary: { text: "Free App Audit", targetModal: true, icon: "fa-circle-check" },
    pills: ["12-Tester Closed Track", "Policy Audit", "Console Setup", "Fast Launch"],
    image: "/assets/images/hero-slider/banner3-play-store.jpg",
    alt: "ChittorTech Google Play Store Publishing Service"
  },
  {
    id: 4,
    badge: "Hospitality ERP Software",
    badgeIcon: "fa-torii-gate",
    badgeColor: "#f59e0b",
    title: "All-in-One Dharamshala & Pilgrimage Trust ERP",
    sub: "Automate online room booking, receipt printing, GST billing & temple trust guest management smoothly.",
    ctaPrimary: { text: "View Dharamshala Demo", href: "/dharamshala-billing-system", icon: "fa-building-columns" },
    ctaSecondary: { text: "Call +91 75974 51057", href: "tel:+917597451057", icon: "fa-phone" },
    pills: ["Room Allocation", "GST Billing", "Temple Receipts", "Cloud Sync"],
    image: "/assets/images/hero-slider/banner4-dharamshala.jpg",
    alt: "ChittorTech Dharamshala Management System and Room Booking"
  },
  {
    id: 5,
    badge: "Sales & Lead Automation",
    badgeIcon: "fa-location-dot",
    badgeColor: "#ec4899",
    title: "Automated B2B Google Maps Lead Generation Engine",
    sub: "Extract targeted B2B contact info, phone numbers & verified email databases with 99% accuracy.",
    ctaPrimary: { text: "Start Lead Extraction", href: "/b2b-lead-generation-services", icon: "fa-bullseye" },
    ctaSecondary: { text: "View Features", href: "/lead-management", icon: "fa-filter" },
    pills: ["Google Maps Extraction", "Verified B2B Emails", "CSV Export", "Instant Setup"],
    image: "/assets/images/hero-slider/banner5-lead-gen.jpg",
    alt: "ChittorTech B2B Google Maps Lead Generation Software"
  },
  {
    id: 6,
    badge: "Direct Booking Engine",
    badgeIcon: "fa-hotel",
    badgeColor: "#10b981",
    title: "0% OTA Commission Direct Hotel & Resort Booking Engine",
    sub: "Keep 100% of your room revenues with instant UPI & card payment gateway integrations.",
    ctaPrimary: { text: "Explore Hotel Engine", href: "/hotel-room-booking-system", icon: "fa-bed" },
    ctaSecondary: { text: "See Live Demo", href: "/hotel-management-system", icon: "fa-laptop" },
    pills: ["0% OTA Commission", "Direct Payments", "Mobile Friendly", "Instant Confirmation"],
    image: "/assets/images/hero-slider/banner6-hotel-booking.jpg",
    alt: "ChittorTech Hotel Room Booking Engine with 0% OTA Commission"
  },
  {
    id: 7,
    badge: "Cloud & SaaS Architecture",
    badgeIcon: "fa-cloud-arrow-up",
    badgeColor: "#6366f1",
    title: "Scalable Next.js 16 & Enterprise Cloud Infrastructure",
    sub: "High-performance microservices, serverless APIs & modern SaaS products built for growth.",
    ctaPrimary: { text: "Build SaaS MVP", href: "/4-week-saas-mvp", icon: "fa-rocket" },
    ctaSecondary: { text: "Talk to Architect", href: "/contact-us", icon: "fa-comments" },
    pills: ["Sub-second Speed", "Render & Cloudflare", "Firebase Realtime", "Custom SaaS"],
    image: "/assets/images/hero-slider/banner7-cloud-saas.jpg",
    alt: "ChittorTech Custom SaaS Development and Cloud Architecture"
  }
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("chatbots");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const tab = TABS.find((t) => t.key === activeTab) || TABS[0];
  const slide = HERO_SLIDES[currentSlide];

  // Auto-play slider loop (6 seconds per slide)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      // Swipe left -> Next slide
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    } else if (distance < -50) {
      // Swipe right -> Prev slide
      setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    }
    setTouchStart(null);
    setTouchEnd(null);
  };



  return (
    <>
      <style>{`
        /* ── Modern White Hero Section (Desktop & Mobile) ── */
        .ct-hp-hero {
          background: #ffffff;
          position: relative;
          overflow: hidden;
          padding: 48px 0 42px;
          color: #0f172a;
          border-bottom: 1px solid #e2e8f0;
        }
        .ct-hp-hero-glow-1, .ct-hp-hero-glow-2, .ct-hp-hero-grid {
          display: none;
        }
        .ct-hp-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          color: #1e293b;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.4px;
          padding: 5px 15px;
          border-radius: 50px;
          margin-bottom: 16px;
        }
        .ct-hp-hero h1 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.18;
          margin-bottom: 14px;
          letter-spacing: -0.4px;
        }
        .ct-hp-hero h1 .gradient-text {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ct-hp-hero-sub {
          font-size: 0.96rem;
          color: #475569;
          line-height: 1.65;
          max-width: 520px;
          margin-bottom: 22px;
        }
        .ct-hp-hero-pills {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .ct-hp-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #334155;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 5px 14px;
          border-radius: 50px;
        }
        .ct-hp-hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* Hero Right Preview Frame */
        .ct-hero-card-wrap {
          position: relative;
          z-index: 2;
        }
        .ct-hero-glass-card {
          background: rgba(15, 23, 42, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(16px);
          border-radius: 16px;
          padding: 10px;
          box-shadow: 0 18px 45px -10px rgba(0, 0, 0, 0.6), 0 0 35px rgba(139, 92, 246, 0.14);
          max-height: 335px;
          overflow: hidden;
        }
        .ct-hero-card-img {
          width: 100%;
          border-radius: 12px;
          display: block;
          object-fit: cover;
          object-position: top;
          max-height: 315px;
        }

        /* ── Floating Stats Bar ── */
        .ct-stats-bar {
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.02);
          position: relative;
          z-index: 5;
        }
        .ct-stats-bar-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .ct-stat-item {
          padding: 18px 14px;
          text-align: center;
          border-right: 1px solid #f1f5f9;
        }
        .ct-stat-item:last-child {
          border-right: none;
        }
        .ct-stat-num {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          line-height: 1.1;
        }
        .ct-stat-lbl {
          font-size: 0.8rem;
          color: #64748b;
          font-weight: 600;
          margin-top: 3px;
        }

        /* ── Dual-Line Smooth Marquee Section ── */
        .ct-tech-marquee-sec {
          background: #ffffff;
          padding: 32px 0 28px;
          border-bottom: 1px solid #f1f5f9;
          overflow: hidden;
        }
        .ct-tech-marquee-title {
          text-align: center;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #475569;
          margin-bottom: 20px;
        }
        .ct-tech-marquee-container {
          overflow: hidden;
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
        .ct-tech-marquee-track-left {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: ct-scroll-left 70s linear infinite;
        }
        .ct-tech-marquee-track-right {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: ct-scroll-right 75s linear infinite;
        }
        .ct-tech-marquee-container:hover .ct-tech-marquee-track-left,
        .ct-tech-marquee-container:hover .ct-tech-marquee-track-right {
          animation-play-state: paused;
        }
        @keyframes ct-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ct-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .ct-tech-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 7px 15px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.84rem;
          font-weight: 700;
          color: #1e293b !important;
          white-space: nowrap;
          transition: all 0.2s ease;
          text-decoration: none !important;
          cursor: pointer;
        }
        .ct-tech-chip:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
          border-color: #3b82f6;
          background: #ffffff;
          color: #2563eb !important;
        }
        .ct-tech-disclaimer {
          text-align: center;
          font-size: 0.72rem;
          color: #94a3b8;
          font-style: italic;
          margin-top: 18px;
        }

        /* ── Section Header Typography ── */
        .ct-section-head {
          text-align: center;
          margin-bottom: 40px;
        }
        .ct-section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(139, 92, 246, 0.08);
          border: 1px solid rgba(139, 92, 246, 0.18);
          color: #7c3aed;
          font-size: 0.74rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          padding: 5px 13px;
          border-radius: 50px;
          margin-bottom: 10px;
        }
        .ct-section-h2 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.65rem, 2.9vw, 2.3rem);
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 10px;
          line-height: 1.2;
          letter-spacing: -0.3px;
        }
        .ct-section-p {
          font-size: 0.96rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* ── Core Capabilities Grid ── */
        .ct-feat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .ct-feat-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 24px;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .ct-feat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -10px rgba(15, 23, 42, 0.08);
          border-color: rgba(124, 58, 237, 0.3);
          color: inherit;
          text-decoration: none;
        }
        .ct-feat-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          margin-bottom: 14px;
        }
        .ct-feat-h3 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.02rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .ct-feat-p {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
          flex-grow: 1;
        }
        .ct-feat-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #7c3aed;
          margin-top: 14px;
        }

        /* ── Dynamic Product & Tech Stack Tabs ── */
        .ct-tabs-wrap {
          display: flex;
          gap: 6px;
          background: #f1f5f9;
          border-radius: 12px;
          padding: 5px;
          flex-wrap: wrap;
          margin-bottom: 28px;
          justify-content: center;
        }
        .ct-tab-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 8px;
          border: none;
          background: transparent;
          font-family: 'Inter', sans-serif;
          font-size: 0.84rem;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .ct-tab-pill.active {
          background: #ffffff;
          color: #0f172a;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);
        }
        .ct-tab-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: center;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.02);
          transition: all 0.3s ease;
        }
        .ct-tab-content > div {
          min-width: 0;
        }
        .ct-tab-headline {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
          line-height: 1.25;
        }
        .ct-tab-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.65;
          margin-bottom: 18px;
        }
        .ct-tab-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 20px;
        }
        .ct-tab-bullets li {
          display: grid;
          grid-template-columns: 26px 1fr;
          align-items: start;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #334155;
          padding: 6px 0;
          border-bottom: 1px solid #f1f5f9;
          min-width: 0;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .ct-tab-bullets li::before {
          content: '✓';
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #10b981;
          color: #fff;
          font-size: 0.65rem;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .ct-tab-visual {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border-radius: 14px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 250px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .ct-tab-visual-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 16px;
          z-index: 2;
          gap: 8px;
          flex-wrap: wrap;
        }
        .ct-tab-visual-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          word-break: break-word;
          overflow-wrap: break-word;
          max-width: calc(100% - 60px);
        }
        .ct-tab-visual-sub {
          font-size: 0.72rem;
          color: #94a3b8;
          word-break: break-word;
        }
        .ct-tab-icon-big {
          font-size: 4.5rem;
          color: rgba(255, 255, 255, 0.06);
          position: absolute;
          bottom: 10px;
          right: 15px;
        }
        .ct-tab-feature-cards {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 12px;
          position: relative;
          z-index: 2;
          width: 100%;
        }
        .ct-tab-mini-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);
          border-radius: 10px;
          padding: 14px;
          text-align: center;
        }
        .ct-tab-mini-card .val {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.35rem;
          font-weight: 800;
          color: #fff;
        }
        .ct-tab-mini-card .lbl {
          font-size: 0.7rem;
          color: #94a3b8;
          font-weight: 500;
          margin-top: 2px;
        }

        /* ── Industry Grid ── */
        .ct-ind-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }
        .ct-ind-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px 12px;
          text-align: center;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.2s ease;
        }
        .ct-ind-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
          border-color: #cbd5e1;
          color: inherit;
          text-decoration: none;
        }
        .ct-ind-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          margin-bottom: 8px;
        }
        .ct-ind-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #334155;
        }

        /* ── 4-Step Process ── */
        .ct-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .ct-proc-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 22px 16px;
          text-align: center;
          position: relative;
          transition: all 0.25s ease;
        }
        .ct-proc-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.05);
        }
        .ct-proc-num {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          margin: 0 auto 14px;
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        }
        .ct-proc-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.92rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
        }
        .ct-proc-desc {
          font-size: 0.8rem;
          color: #64748b;
          line-height: 1.55;
          margin: 0;
        }

        /* ── Real Google Testimonials Grid ── */
        .ct-testi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .ct-testi-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          transition: all 0.25s ease;
        }
        .ct-testi-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(15, 23, 42, 0.06);
          border-color: #cbd5e1;
        }
        .ct-stars {
          color: #f59e0b;
          font-size: 0.85rem;
          letter-spacing: 2px;
        }
        .ct-testi-text {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.7;
          flex: 1;
          margin-bottom: 16px;
          font-style: italic;
        }
        .ct-testi-author {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ct-testi-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          color: #fff;
          font-weight: 800;
          font-size: 0.82rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ct-testi-name {
          font-weight: 700;
          font-size: 0.84rem;
          color: #0f172a;
        }
        .ct-testi-role {
          font-size: 0.74rem;
          color: #94a3b8;
        }

        /* ── Google Reviews Custom Button ── */
        .ct-btn-google {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border-radius: 50px;
          padding: 12px 28px;
          border: 1px solid #cbd5e1;
          background: #ffffff;
          color: #0f172a !important;
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
          text-decoration: none !important;
          transition: all 0.25s ease;
        }
        .ct-btn-google:hover {
          background: #f8fafc;
          border-color: #94a3b8;
          transform: translateY(-2px);
          color: #0f172a !important;
        }

        /* ── CTA Banner ── */
        .ct-cta-banner {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
          border-radius: 16px;
          padding: 38px 28px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
        }
        .ct-cta-banner h2 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.4rem, 2.5vw, 2.1rem);
          font-weight: 800;
          color: #fff;
          margin-bottom: 10px;
        }
        .ct-cta-banner p {
          font-size: 0.95rem;
          color: #cbd5e1;
          margin-bottom: 22px;
        }
        .ct-cta-banner-btns {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .ct-bg-white { background: #ffffff; }
        .ct-bg-slate { background: #f8fafc; }

        @media (max-width: 1023px) {
          .ct-feat-grid, .ct-process-grid, .ct-testi-grid { grid-template-columns: repeat(2, 1fr); }
          .ct-ind-grid { grid-template-columns: repeat(3, 1fr); }
          .ct-stats-bar-inner { grid-template-columns: repeat(2, 1fr); }
          .ct-tab-content { grid-template-columns: 1fr; gap: 24px; padding: 24px; }
        }
        @media (max-width: 767px) {
          /* Word break for all text elements */
          .ct-tab-bullets li, .ct-tab-desc, .ct-tab-headline,
          .ct-section-h2, .ct-hp-hero h1, .ct-section-p { 
            word-break: break-word; 
            overflow-wrap: break-word;
          }
          /* Tab visual — constrain width */
          .ct-tab-visual { 
            width: 100%; 
            max-width: 100%; 
            min-height: auto !important;
            padding: 18px 14px !important;
            overflow: hidden;
          }
          .ct-tab-feature-cards { 
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            gap: 8px;
          }
          .ct-tab-mini-card { padding: 10px 8px; }
          .ct-tab-mini-card .val { font-size: 1.1rem; }
          .ct-tab-icon-big { font-size: 3rem; }
        }
        @media (max-width: 640px) {
          /* Prevent ALL horizontal overflow */
          html, body, .ct-hp-hero, section, .container, .container-fluid { 
            overflow-x: hidden !important; 
            max-width: 100% !important;
          }
          /* Hero */
          .ct-hp-hero { padding: 32px 0 24px; }
          .ct-hp-hero h1 { font-size: 1.75rem !important; line-height: 1.2; word-break: break-word; }
          .ct-hp-hero-sub { font-size: 0.88rem; max-width: 100% !important; }
          .ct-hp-hero-pills { gap: 6px; }
          .ct-hp-pill { font-size: 0.72rem; padding: 4px 10px; }
          .ct-hp-hero-ctas { flex-direction: column; width: 100%; }
          .ct-hp-hero-ctas a, .ct-hp-hero-ctas button { width: 100% !important; justify-content: center; box-sizing: border-box; }
          .ct-hero-glass-card { margin-top: 20px; max-height: 220px; }
          /* Grids */
          .ct-feat-grid { grid-template-columns: 1fr; gap: 14px; }
          .ct-ind-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .ct-process-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .ct-testi-grid { grid-template-columns: 1fr; }
          .ct-stats-bar-inner { grid-template-columns: repeat(2, 1fr); }
          /* Tabs */
          .ct-tabs-wrap { flex-direction: column; gap: 4px; border-radius: 10px; }
          .ct-tab-pill { width: 100%; justify-content: center; font-size: 0.82rem; padding: 8px 12px; }
          .ct-tab-content { padding: 16px 14px; gap: 18px; }
          .ct-tab-headline { font-size: 1.15rem; word-break: break-word; }
          .ct-tab-desc { font-size: 0.85rem; word-break: break-word; overflow-wrap: break-word; }
          .ct-tab-bullets li { font-size: 0.82rem; }
          .ct-tab-feature-cards { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 8px; }
          .ct-tab-visual { padding: 16px 12px !important; min-height: auto !important; }
          .ct-tab-content a.ct-btn, .ct-tab-content button.ct-btn {
            display: flex !important;
            width: 100% !important;
            justify-content: center !important;
            box-sizing: border-box !important;
            white-space: normal !important;
            text-align: center;
          }
          /* CTA */
          .ct-cta-banner { padding: 24px 14px; border-radius: 12px; }
          .ct-cta-banner h2 { font-size: 1.4rem !important; word-break: break-word; }
          .ct-cta-banner-btns { flex-direction: column; align-items: stretch; }
          .ct-cta-banner-btns a, .ct-cta-banner-btns button { width: 100%; justify-content: center; }
          /* Section header */
          .ct-section-h2 { font-size: 1.4rem !important; word-break: break-word; }
          .ct-section-p { font-size: 0.88rem; }
          /* Marquee section */
          .ct-tech-marquee-sec { padding: 22px 0 18px; }
          .ct-tech-chip { font-size: 0.78rem; padding: 5px 11px; }
        }
        @media (max-width: 420px) {
          .ct-hp-hero h1 { font-size: 1.45rem !important; }
          .ct-ind-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
          .ct-process-grid { grid-template-columns: 1fr; gap: 10px; }
          .ct-tab-mini-card .val { font-size: 1rem; }
          .ct-tab-mini-card .lbl { font-size: 0.65rem; }
          .ct-stat-num { font-size: 1.4rem; }
          .ct-stat-lbl { font-size: 0.72rem; }
          .ct-ind-label { font-size: 0.72rem; }
          .ct-tab-visual-title { font-size: 0.82rem; }
          .ct-tab-visual-sub { font-size: 0.65rem; }
        }
        /* ── Dynamic 7-Slide Hero Slider ── */
        .ct-hero-slider-viewport {
          overflow: hidden;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }
        .ct-hero-slider-track {
          display: flex;
          width: 100%;
          will-change: transform;
        }
        .ct-hero-slide-item {
          min-width: 100%;
          width: 100%;
          max-width: 100%;
          flex-shrink: 0;
          box-sizing: border-box;
          padding: 0 4px;
          overflow: hidden;
        }
        .ct-hero-slide-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: center;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }
        @media (max-width: 991px) {
          .ct-hp-hero {
            background: #ffffff !important;
            color: #0f172a !important;
            border-bottom: 1px solid #e2e8f0 !important;
            padding: 24px 0 32px !important;
          }
          .ct-hp-hero-glow-1, .ct-hp-hero-glow-2, .ct-hp-hero-grid {
            display: none !important;
          }
          .ct-hero-slide-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        .ct-slide-col-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }
        @media (max-width: 991px) {
          .ct-slide-col-left {
            align-items: center;
            text-align: center;
          }
          .ct-hp-hero h1 {
            color: #0f172a !important;
            font-size: clamp(1.25rem, 4.5vw, 1.6rem) !important;
            line-height: 1.25 !important;
            word-break: break-word !important;
            width: 100% !important;
            max-width: 100% !important;
            margin-bottom: 8px !important;
          }
          .ct-hp-hero-sub {
            color: #475569 !important;
            font-size: 0.84rem !important;
            line-height: 1.45 !important;
            word-break: break-word !important;
            width: 100% !important;
            max-width: 100% !important;
            margin-bottom: 12px !important;
            display: -webkit-box !important;
            -webkit-line-clamp: 2 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
          }
          .ct-hp-hero-pills {
            justify-content: center !important;
            width: 100% !important;
            gap: 6px !important;
            margin-bottom: 12px !important;
          }
          .ct-hp-hero-pills span:nth-child(n+3) {
            display: none !important;
          }
          .ct-hp-pill {
            background: #f8fafc !important;
            border: 1px solid #e2e8f0 !important;
            color: #334155 !important;
            font-size: 0.7rem !important;
            padding: 3px 9px !important;
            word-break: break-word !important;
          }
          .ct-hp-hero-ctas {
            flex-direction: column !important;
            width: 100% !important;
            gap: 6px !important;
          }
          .ct-hp-hero-ctas a, .ct-hp-hero-ctas button {
            width: 100% !important;
            justify-content: center !important;
            box-sizing: border-box !important;
            text-align: center !important;
            padding: 9px 14px !important;
            font-size: 0.85rem !important;
          }
        .ct-btn-ghost {
          color: #1e293b !important;
          border: 1.5px solid #cbd5e1 !important;
          background: #ffffff !important;
        }
        .ct-btn-ghost:hover {
          background: #f8fafc !important;
          border-color: #94a3b8 !important;
          color: #0f172a !important;
        }
        .ct-slide-col-right {
          width: 100%;
          min-width: 0;
          max-width: 100%;
          box-sizing: border-box;
        }
        .ct-slider-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 10px;
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
          border: 1px solid #e2e8f0;
          overflow: hidden;
          transition: all 0.5s ease-in-out;
          position: relative;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }
        @media (max-width: 991px) {
          .ct-slider-card {
            padding: 6px;
            border-radius: 14px;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08) !important;
            border: 1px solid #e2e8f0 !important;
          }
        }
        .ct-slider-img {
          width: 100%;
          height: auto;
          max-height: 380px;
          object-fit: cover;
          border-radius: 14px;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @media (max-width: 768px) {
          .ct-slider-img {
            max-height: 185px !important;
          }
        }
        .ct-slider-card:hover .ct-slider-img {
          transform: scale(1.02);
        }
        .ct-slider-controls {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          margin: 28px auto 0 !important;
          gap: 16px !important;
          width: 100% !important;
          text-align: center !important;
          position: relative !important;
          z-index: 10 !important;
        }
        .ct-slider-arrow {
          width: 44px !important;
          height: 44px !important;
          border-radius: 50% !important;
          background: #ffffff !important;
          border: 1.5px solid #cbd5e1 !important;
          color: #0f172a !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
          transition: all 0.25s ease !important;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08) !important;
          outline: none !important;
          padding: 0 !important;
        }
        .ct-slider-arrow:hover {
          background: #2563eb !important;
          border-color: #2563eb !important;
          color: #ffffff !important;
          transform: translateY(-2px) scale(1.06) !important;
          box-shadow: 0 8px 22px rgba(37, 99, 235, 0.3) !important;
        }
        .ct-slider-dots {
          display: inline-flex !important;
          align-items: center !important;
          gap: 8px !important;
        }
        .ct-slider-dot {
          width: 10px !important;
          height: 10px !important;
          border-radius: 50% !important;
          background: #cbd5e1 !important;
          border: none !important;
          padding: 0 !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
        }
        .ct-slider-dot.active {
          width: 28px !important;
          border-radius: 20px !important;
          background: #2563eb !important;
        }
      `}</style>

      {/* ── 1. MODERN 7-SLIDE DYNAMIC HERO CAROUSEL ── */}
      <section
        className="ct-hp-hero"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="ct-hp-hero-glow-1"></div>
        <div className="ct-hp-hero-glow-2"></div>
        <div className="ct-hp-hero-grid"></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>

          {/* Smooth Horizontal Sliding Viewport */}
          <div className="ct-hero-slider-viewport">
            <div
              className="ct-hero-slider-track"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: "transform 0.85s cubic-bezier(0.25, 1, 0.5, 1)"
              }}
            >
              {HERO_SLIDES.map((slideItem) => (
                <div className="ct-hero-slide-item" key={slideItem.id}>
                  <div className="ct-hero-slide-grid">

                    {/* Left Content Column */}
                    <div className="ct-slide-col-left">
                      <div className="ct-hp-hero-badge" style={{ borderColor: `${slideItem.badgeColor}40` }}>
                        <i className={`fa-solid ${slideItem.badgeIcon}`} style={{ color: slideItem.badgeColor }}></i>
                        <span style={{ color: slideItem.badgeColor, fontWeight: 700 }}>{slideItem.badge}</span>
                      </div>

                      <h1>{slideItem.title}</h1>
                      <p className="ct-hp-hero-sub">{slideItem.sub}</p>

                      <div className="ct-hp-hero-pills">
                        {slideItem.pills.map((pill, idx) => (
                          <span key={idx} className="ct-hp-pill">
                            <i className="fa-solid fa-check" style={{ color: slideItem.badgeColor }}></i> {pill}
                          </span>
                        ))}
                      </div>

                      <div className="ct-hp-hero-ctas justify-content-center justify-content-lg-start">
                        <Link
                          href={slideItem.ctaPrimary.href}
                          className="ct-btn ct-btn-primary"
                          style={{
                            background: `linear-gradient(135deg, ${slideItem.badgeColor} 0%, #291fbc 100%)`,
                            border: "none",
                            padding: "11px 24px",
                            fontSize: "0.92rem"
                          }}
                        >
                          <i className={`fa-solid ${slideItem.ctaPrimary.icon}`}></i> {slideItem.ctaPrimary.text}
                        </Link>

                        {slideItem.ctaSecondary.targetModal ? (
                          <button
                            className="ct-btn ct-btn-ghost"
                            data-bs-toggle="modal"
                            data-bs-target="#trialModal"
                            style={{ padding: "11px 24px", fontSize: "0.92rem" }}
                          >
                            <i className={`fa-solid ${slideItem.ctaSecondary.icon}`}></i> {slideItem.ctaSecondary.text}
                          </button>
                        ) : (
                          <Link
                            href={slideItem.ctaSecondary.href}
                            className="ct-btn ct-btn-ghost"
                            style={{ padding: "11px 24px", fontSize: "0.92rem" }}
                          >
                            <i className={`fa-solid ${slideItem.ctaSecondary.icon}`}></i> {slideItem.ctaSecondary.text}
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Right Visual Card Column */}
                    <div className="ct-slide-col-right">
                      <div className="ct-slider-card">
                        <Image
                          src={slideItem.image}
                          alt={slideItem.alt}
                          className="ct-slider-img"
                          width={800}
                          height={450}
                          priority={true}
                        />
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Centered Controls Bar (Inline Styled for Zero CSS Cascade Overrides) */}
          <div
            className="ct-slider-controls"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              marginTop: "24px",
              width: "100%",
              position: "relative",
              zIndex: 10
            }}
          >
            <button
              type="button"
              className="ct-slider-arrow"
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
              title="Previous Slide"
              aria-label="Previous Slide"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                border: "1.5px solid #cbd5e1",
                color: "#0f172a",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(15, 23, 42, 0.08)",
                outline: "none",
                padding: 0
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`ct-slider-dot ${currentSlide === idx ? "active" : ""}`}
                  onClick={() => setCurrentSlide(idx)}
                  title={`Go to slide ${idx + 1}`}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: currentSlide === idx ? "28px" : "10px",
                    height: "10px",
                    borderRadius: currentSlide === idx ? "20px" : "50%",
                    backgroundColor: currentSlide === idx ? "#2563eb" : "#cbd5e1",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              className="ct-slider-arrow"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
              title="Next Slide"
              aria-label="Next Slide"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                border: "1.5px solid #cbd5e1",
                color: "#0f172a",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(15, 23, 42, 0.08)",
                outline: "none",
                padding: 0
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

        </div>
      </section>



      {/* ── 3. DUAL-LINE CONTINUOUS SLOW MARQUEE ── */}
      <section className="ct-tech-marquee-sec">
        <div className="container-fluid p-0">
          <div className="ct-tech-marquee-title">
            Powered By Industry-Leading Technologies
          </div>
          <div className="ct-tech-marquee-container">
            {/* Line 1 Scrolling Left */}
            <div className="ct-tech-marquee-track-left">
              {[...TECH_ROW_1, ...TECH_ROW_1].map((t, idx) => (
                <Link
                  key={`r1-${t.slug}-${idx}`}
                  href={t.href || `/technology/${t.slug}`}
                  className="ct-tech-chip"
                  title={`Explore ${t.name} Development Services`}
                >
                  <i className={t.icon} style={{ color: t.color, fontSize: "1.1rem" }}></i>
                  <span>{t.name}</span>
                </Link>
              ))}
            </div>
            {/* Line 2 Scrolling Right */}
            <div className="ct-tech-marquee-track-right">
              {[...TECH_ROW_2, ...TECH_ROW_2].map((t, idx) => (
                <Link
                  key={`r2-${t.slug}-${idx}`}
                  href={t.href || `/technology/${t.slug}`}
                  className="ct-tech-chip"
                  title={`Explore ${t.name} Development Services`}
                >
                  <i className={t.icon} style={{ color: t.color, fontSize: "1.1rem" }}></i>
                  <span>{t.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="ct-tech-disclaimer">
            *Note: Logo colors are modified for aesthetic purposes only and do not represent official brand guidelines.
          </div>
        </div>
      </section>

      {/* ── 5. PRODUCT TABS (DYNAMICALLY UPDATING) ── */}
      <section className="ct-bg-white" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="ct-section-head">
            <span className="ct-section-eyebrow"><i className="fa-solid fa-layer-group"></i> Technology Stack</span>
            <h2 className="ct-section-h2">Engineered for Enterprise Scale</h2>
            <p className="ct-section-p">
              Deep dive into ChittorTech's specialized AI models, knowledge systems, and cloud development solutions.
            </p>
          </div>
          <div className="ct-tabs-wrap">
            {TABS.map((t) => (
              <button
                key={t.key}
                className={`ct-tab-pill ${activeTab === t.key ? "active" : ""}`}
                onClick={() => setActiveTab(t.key)}
              >
                <i className={`fa-solid ${t.icon}`} style={{ color: activeTab === t.key ? t.accent : "inherit" }}></i> {t.label}
              </button>
            ))}
          </div>
          {tab && (
            <div className="ct-tab-content" key={tab.key}>
              <div>
                <h3 className="ct-tab-headline">{tab.headline}</h3>
                <p className="ct-tab-desc">{tab.desc}</p>
                <ul className="ct-tab-bullets">
                  {tab.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <Link href={tab.href} className="ct-btn ct-btn-primary" style={{ background: tab.accent, border: "none", padding: "10px 20px", fontSize: "0.88rem" }}>
                  Learn More About {tab.label} <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
              <div className="ct-tab-visual" style={{ overflow: 'hidden', maxWidth: '100%', width: '100%', boxSizing: 'border-box' }}>
                <div className="ct-tab-visual-head">
                  <div>
                    <div className="ct-tab-visual-title">{tab.previewTitle}</div>
                    <div className="ct-tab-visual-sub">{tab.previewSubtitle}</div>
                  </div>
                  <span className="badge" style={{ background: tab.accent }}>Active</span>
                </div>
                <i className={`fa-solid ${tab.icon} ct-tab-icon-big`}></i>
                <div className="ct-tab-feature-cards">
                  {tab.metrics.map((c) => (
                    <div key={c.lbl} className="ct-tab-mini-card">
                      <div className="val" style={{ color: tab.accent }}>{c.val}</div>
                      <div className="lbl">{c.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── 6. INDUSTRIES ── */}
      <section className="ct-bg-slate" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="ct-section-head">
            <span className="ct-section-eyebrow"><i className="fa-solid fa-building"></i> Vertical Solutions</span>
            <h2 className="ct-section-h2">Tailored AI Solutions for Every Industry</h2>
            <p className="ct-section-p">
              Industry-specific automation, custom API & system integration, and specialized AI models for your vertical.
            </p>
          </div>
          <div className="ct-ind-grid">
            {INDUSTRIES.map((ind) => (
              <Link key={ind.href} href={ind.href} className="ct-ind-card">
                <div className="ct-ind-icon" style={{ background: `${ind.color}15`, color: ind.color }}>
                  <i className={`fa-solid ${ind.icon}`}></i>
                </div>
                <div className="ct-ind-label">{ind.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. WHY CHITTORTECH ── */}
      <section className="ct-bg-white" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="ct-section-head">
            <span className="ct-section-eyebrow"><i className="fa-solid fa-shield-halved"></i> Why ChittorTech</span>
            <h2 className="ct-section-h2">Why Industry Leaders Choose ChittorTech</h2>
            <p className="ct-section-p">
              We fuse deep AI research with agile software engineering to craft high-impact enterprise solutions.
            </p>
          </div>
          <div className="ct-feat-grid">
            {[
              { icon: "fa-robot", title: "Cutting-Edge AI Expertise", desc: "We build with modern LLMs, vector embeddings, RAG architectures, and autonomous multi-agent systems.", color: "#8b5cf6" },
              { icon: "fa-shield-halved", title: "Enterprise-Grade Security", desc: "100% data confidentiality, end-to-end encryption, and options for private on-premise cloud deployments.", color: "#06b6d4" },
              { icon: "fa-bolt", title: "Rapid Agile Engineering", desc: "From concept to production-ready AI prototype in as little as 2 weeks — accelerating digital ROI.", color: "#10b981" },
              { icon: "fa-headset", title: "Dedicated Tech Support", desc: "Direct communication with engineers, proactive 24/7 monitoring, and continuous system optimization.", color: "#f59e0b" },
              { icon: "fa-cloud", title: "Cloud-Native Scalability", desc: "Architected on AWS, GCP, and Vercel to seamlessly serve millions of high-concurrency requests.", color: "#3b82f6" },
              { icon: "fa-chart-line", title: "Measurable Business ROI", desc: "Every AI feature is engineered to directly lower operational overhead and boost user lead conversion.", color: "#ec4899" },
            ].map((w) => (
              <div key={w.title} className="ct-feat-card">
                <div className="ct-feat-icon" style={{ background: `${w.color}15`, color: w.color, border: `1px solid ${w.color}25` }}>
                  <i className={`fa-solid ${w.icon}`}></i>
                </div>
                <div className="ct-feat-h3">{w.title}</div>
                <p className="ct-feat-p">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. PROCESS ── */}
      <section className="ct-bg-slate" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="ct-section-head">
            <span className="ct-section-eyebrow"><i className="fa-solid fa-diagram-next"></i> Execution Process</span>
            <h2 className="ct-section-h2">Our 4-Step Delivery Framework</h2>
            <p className="ct-section-p">
              A structured technical blueprint from initial AI discovery to production deployment.
            </p>
          </div>
          <div className="ct-process-grid">
            {PROCESS_STEPS.map((s) => (
              <div key={s.num} className="ct-proc-card">
                <div className="ct-proc-num" style={{ background: s.color }}>{s.num}</div>
                <div className="ct-proc-title">{s.title}</div>
                <p className="ct-proc-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. REAL GOOGLE REVIEWS ── */}
      <section className="ct-bg-white" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="ct-section-head">
            <span className="ct-section-eyebrow"><i className="fa-solid fa-quote-left"></i> Verified Client Reviews</span>
            <h2 className="ct-section-h2">Real Reviews from Real Partners</h2>
            <p className="ct-section-p">
              Real stories from founders, product leaders, and mentors who trust ChittorTech.
            </p>
          </div>
          <div className="ct-testi-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="ct-testi-card">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="ct-stars">{"★".repeat(t.rating)}</div>
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </div>
                <p className="ct-testi-text">"{t.text}"</p>
                <div className="ct-testi-author">
                  <div className="ct-testi-avatar" style={{ background: t.avatarBg }}>{t.initials}</div>
                  <div>
                    <div className="ct-testi-name">{t.name}</div>
                    {t.role ? <div className="ct-testi-role">{t.role}</div> : null}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <a
              href="https://www.google.com/search?q=ChittorTech"
              target="_blank"
              rel="noopener noreferrer"
              className="ct-btn-google"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>View all reviews on Google</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 10. FINAL CTA ── */}
      <section style={{ padding: "50px 0 60px", background: "#f8fafc" }}>
        <div className="container">
          <div className="ct-cta-banner">
            <h2>Ready to Transform Your Business with AI?</h2>
            <p>Schedule a technical consultation with ChittorTech's senior AI and software engineers.</p>
            <div className="ct-cta-banner-btns">
              <button
                className="ct-btn"
                data-bs-toggle="modal"
                data-bs-target="#trialModal"
                style={{ background: "#ffffff", color: "#0f172a", fontWeight: 700, border: "none", padding: "10px 22px", fontSize: "0.9rem" }}
              >
                <i className="fa-solid fa-calendar-check" style={{ color: "#7c3aed" }}></i> Book Technical Consultation
              </button>
              <Link href="/contact-us" className="ct-btn ct-btn-ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.2)", padding: "10px 22px", fontSize: "0.9rem" }}>
                <i className="fa-solid fa-envelope"></i> Contact Engineering Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
