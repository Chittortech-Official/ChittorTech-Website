"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = {
  aiProducts: [
    { href: "/crm",                      icon: "fa-robot",           label: "AI Support Chatbots",       desc: "Bilingual AI assistants" },
    { href: "/erp",                      icon: "fa-diagram-project", label: "AI Workflow Automation",    desc: "End-to-end automation" },
    { href: "/crm",                      icon: "fa-brain",           label: "RAG Knowledge Base",        desc: "Vector search & LLMs" },
    { href: "/erp",                      icon: "fa-microchip",       label: "Custom LLM Training",       desc: "Fine-tuned AI models" },
    { href: "/erp",                      icon: "fa-chart-line",      label: "AI Predictive Analytics",   desc: "Data-driven insights" },
    { href: "/erp",                      icon: "fa-file-code",       label: "OCR & Document AI",         desc: "Smart doc processing" },
    { href: "/web-development-services", icon: "fa-laptop-code",     label: "Custom SaaS Apps",          desc: "Scalable cloud platforms" },
    { href: "/ai-manufacturing",         icon: "fa-eye",             label: "Computer Vision AI",        desc: "Image & defect detection" },
  ],
  industries: {
    solutions: [
      { href: "/erp",                        icon: "fa-cubes",          label: "Enterprise ERP Systems" },
      { href: "/crm",                        icon: "fa-users-gear",     label: "AI CRM & Sales Funnel" },
      { href: "/custom-crm-solutions",       icon: "fa-user-check",     label: "Custom CRM Solutions" },
      { href: "/lead-management",            icon: "fa-filter-circle-dollar", label: "Lead Management System" },
      { href: "/smart-retail",               icon: "fa-store",          label: "Smart Retail Solutions" },
    ],
    operations: [
      { href: "/inventory",                  icon: "fa-boxes-stacked",  label: "Inventory & Stock Sync" },
      { href: "/accounting",                 icon: "fa-file-invoice-dollar", label: "GST Accounting Software" },
      { href: "/payroll",                    icon: "fa-money-bill-wave",label: "Payroll & HRMS System" },
      { href: "/invoicing",                  icon: "fa-receipt",        label: "Invoicing & Billing Engine" },
      { href: "/trading-overview",           icon: "fa-chart-line",     label: "Trading & Wholesale ERP" },
    ],
    hospitality: [
      { href: "/dharamshala-billing-system",  icon: "fa-torii-gate",    label: "Dharamshala Management" },
      { href: "/hotel-management-system",     icon: "fa-hotel",         label: "Hotel Management System" },
      { href: "/hotel-room-booking-system",   icon: "fa-bed",           label: "Hotel Room Booking" },
      { href: "/resort-guest-house-software", icon: "fa-umbrella-beach",label: "Resort & Guest House" },
      { href: "/online-booking-admin-portal", icon: "fa-calendar-check",label: "Online Booking Portal" },
    ],
    enterprise: [
      { href: "/hospitals",                        icon: "fa-hospital",       label: "Hospitals & Medical Centers" },
      { href: "/schools-educational-institutions", icon: "fa-graduation-cap", label: "Schools & EdTech" },
      { href: "/ai-manufacturing",                 icon: "fa-industry",       label: "Smart Manufacturing" },
      { href: "/industrial-products",              icon: "fa-building",       label: "Industrial B2B Suppliers" },
      { href: "/after-sale-service",               icon: "fa-screwdriver-wrench", label: "Warranty & Service Networks" },
    ],
  },
  services: [
    { href: "/web-development-services",       icon: "fa-code",                  label: "Web Development",          desc: "Next.js, React, Node.js" },
    { href: "/cloud-hosting-deployment",       icon: "fa-cloud",                 label: "Cloud Hosting & DevOps",   desc: "AWS, Azure, GCP & Docker" },
    { href: "/dns-cloudflare-management",      icon: "fa-network-wired",         label: "DNS & Cloudflare Setup",   desc: "Zero-downtime DNS & WAF" },
    { href: "/email-deliverability-services",  icon: "fa-envelope-circle-check", label: "Email Deliverability",    desc: "Fix spam & land in inbox" },
    { href: "/dmarc-dkim-spf-setup",           icon: "fa-shield-halved",         label: "DMARC, DKIM & SPF",        desc: "Email security & auth" },
    { href: "/business-email-branding-bimi",   icon: "fa-certificate",           label: "BIMI Verified Branding",   desc: "Gmail & Apple checkmark" },
    { href: "/email-blacklist-removal",        icon: "fa-triangle-exclamation",  label: "Blacklist Removal",        desc: "Spamhaus & IP recovery" },
    { href: "/e-commerce-website-development", icon: "fa-cart-shopping",         label: "E-Commerce Solutions",     desc: "Full-stack storefronts" },
    { href: "/android-application",            icon: "fa-android",               label: "Android Mobile Apps",      desc: "Native & cross-platform" },
    { href: "/google-play-publishing",         icon: "fa-upload",                label: "Google Play Publishing",   desc: "Verify & publish your apps" },
    { href: "/search-engine-optimization",     icon: "fa-magnifying-glass",      label: "SEO Growth Services",      desc: "Rank #1 on Google" },
    { href: "/digital-marketing-services",     icon: "fa-bullhorn",              label: "Digital Marketing",        desc: "Ads, leads, ROI" },
    { href: "/b2b-lead-generation-services",   icon: "fa-bullseye",              label: "B2B Lead Generation",      desc: "Automated B2B sales engine" },
  ],
};

const ANNOUNCEMENT_SLIDES = [
  {
    badge: "⚡ Instant Architecture & Quote",
    badgeColor: "#fbbf24",
    badgeBorder: "rgba(251, 191, 36, 0.4)",
    badgeBg: "rgba(251, 191, 36, 0.12)",
    textPrefix: "Planning a custom Website, App, or Cloud ERP?",
    textHighlight: "Get blueprint & cost estimate in 10 mins.",
    btnText: "💬 Get Free Estimate",
    btnLink: "https://wa.me/917597451057?text=Hi%20ChittorTech,%20I%20would%20like%20a%20free%20architectural%20plan%20and%20instant%20cost%20estimate%20for%20my%20project.",
    isExternal: true,
    btnGradient: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
    btnShadow: "0 0 16px rgba(245, 158, 11, 0.45)",
    textColor: "#ffffff"
  },
  {
    badge: "🚀 Google Play Guaranteed",
    badgeColor: "#38bdf8",
    badgeBorder: "rgba(56, 189, 248, 0.4)",
    badgeBg: "rgba(56, 189, 248, 0.12)",
    textPrefix: "Stuck on Google Play 14-Day 12-Tester verification?",
    textHighlight: "100% policy compliance & fast store approval.",
    btnText: "📲 Publish Your App",
    btnLink: "/google-play-publishing",
    isExternal: false,
    btnGradient: "linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)",
    btnShadow: "0 0 16px rgba(6, 182, 212, 0.45)",
    textColor: "#ffffff"
  },
  {
    badge: "🟢 Live Engineering Desk",
    badgeColor: "#34d399",
    badgeBorder: "rgba(52, 211, 153, 0.4)",
    badgeBg: "rgba(52, 211, 153, 0.12)",
    textPrefix: "Talk directly with Senior Full-Stack Engineers —",
    textHighlight: "Sub-second turnaround & zero sales pitch.",
    btnText: "⚡ Chat on WhatsApp",
    btnLink: "https://wa.me/917597451057?text=Hi%20ChittorTech,%20I%20would%20like%20to%20speak%20directly%20with%20an%20engineer.",
    isExternal: true,
    btnGradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    btnShadow: "0 0 16px rgba(16, 185, 129, 0.45)",
    textColor: "#ffffff"
  },
  {
    badge: "🛡️ 100% Inbox Deliverability",
    badgeColor: "#c084fc",
    badgeBorder: "rgba(192, 132, 252, 0.4)",
    badgeBg: "rgba(192, 132, 252, 0.12)",
    textPrefix: "Emails landing in Spam/Junk?",
    textHighlight: "100% SPF, DKIM, DMARC & BIMI inbox guarantee.",
    btnText: "✉️ Fix Deliverability",
    btnLink: "/email-deliverability-services",
    isExternal: false,
    btnGradient: "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
    btnShadow: "0 0 16px rgba(139, 92, 246, 0.45)",
    textColor: "#ffffff"
  }
];

export default function Header() {
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [scrolled, setScrolled]           = useState(false);
  const [currentSlide, setCurrentSlide]     = useState(0);
  const [isSlidePaused, setIsSlidePaused]   = useState(false);
  const headerRef = useRef(null);
  const pathname = usePathname();

  // Auto-rotate announcement slides every 4.5 seconds
  useEffect(() => {
    if (isSlidePaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ANNOUNCEMENT_SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isSlidePaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % ANNOUNCEMENT_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + ANNOUNCEMENT_SLIDES.length) % ANNOUNCEMENT_SLIDES.length);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleWhatsApp = (e) => {
    e.preventDefault();
    window.open("https://wa.me/917597451057", "_blank");
  };

  const toggleDropdown = (key) =>
    setActiveDropdown((prev) => (prev === key ? null : key));

  if (pathname && pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      <style>{`
        /* ─── Ultra-Attractive Announcement Strip ─── */
        .ct-strip {
          background: linear-gradient(90deg, #07041a 0%, #130a38 25%, #1e1050 50%, #130a38 75%, #07041a 100%);
          background-size: 200% 100%;
          animation: ct-strip-move 10s linear infinite;
          padding: 8px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          min-height: 48px;
          border-bottom: 1px solid rgba(139, 92, 246, 0.28);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);
          z-index: 1001;
        }
        @keyframes ct-strip-move {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        .ct-strip::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 150% at 50% 50%, rgba(99, 102, 241, 0.2) 0%, transparent 80%);
          pointer-events: none;
        }
        .ct-strip::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.7), rgba(245, 158, 11, 0.7), transparent);
          pointer-events: none;
        }
        .ct-strip-inner {
          width: 100%;
          max-width: 1360px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          position: relative;
          z-index: 2;
        }
        .ct-strip-spacer {
          width: 88px;
          flex-shrink: 0;
        }
        .ct-strip-slider {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }
        .ct-strip-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          animation: ctSlidePop 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: center;
        }
        @keyframes ctSlidePop {
          0% { opacity: 0; transform: translateY(6px) scale(0.99); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ct-strip-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 12px;
          border-radius: 50px;
          white-space: nowrap;
          letter-spacing: 0.3px;
          flex-shrink: 0;
          border: 1px solid;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 0 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.15);
        }
        .ct-strip-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
          animation: ctPulseAnim 1.4s ease-in-out infinite;
        }
        @keyframes ctPulseAnim {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(0.7); }
        }
        .ct-strip-text {
          font-size: 0.835rem;
          font-weight: 500;
          color: rgba(241, 245, 249, 0.95);
          letter-spacing: -0.01em;
          white-space: normal;
          line-height: 1.45;
          text-shadow: 0 1px 3px rgba(0,0,0,0.5);
        }
        .ct-strip-text-highlight {
          color: #ffffff;
          font-weight: 700;
          text-decoration: underline decoration-sky-400/50 underline-offset-4;
          margin-left: 3px;
        }
        .ct-strip-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-weight: 800;
          font-size: 0.73rem;
          padding: 6px 16px;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          cursor: pointer;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          font-family: 'Inter', sans-serif;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
          flex-shrink: 0;
          white-space: nowrap;
          overflow: hidden;
        }
        .ct-strip-btn::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -80%;
          width: 50%;
          height: 200%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
          transform: rotate(25deg);
          animation: ctBtnShine 3.5s infinite;
        }
        @keyframes ctBtnShine {
          0% { left: -80%; }
          25% { left: 150%; }
          100% { left: 150%; }
        }
        .ct-strip-btn:hover {
          transform: translateY(-2px) scale(1.05);
          filter: brightness(1.12);
        }
        .ct-strip-nav {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          padding: 3px 8px;
          border-radius: 30px;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.12), 0 2px 8px rgba(0,0,0,0.25);
          flex-shrink: 0;
        }
        .ct-strip-nav-btn {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.6rem;
          transition: all 0.2s ease;
        }
        .ct-strip-nav-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
          transform: scale(1.12);
        }
        .ct-strip-dots {
          display: flex;
          gap: 5px;
          align-items: center;
        }
        .ct-strip-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.25s ease;
          border: none;
          padding: 0;
        }
        .ct-strip-dot.active {
          width: 16px;
          border-radius: 5px;
          background: #38bdf8;
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.7);
        }
        @media (max-width: 1200px) {
          .ct-strip-inner {
            justify-content: space-between;
          }
        }
        @media (max-width: 991px) {
          .ct-strip-spacer {
            display: none;
          }
          .ct-strip {
            padding: 8px 12px;
            min-height: auto;
          }
          .ct-strip-inner {
            flex-direction: column;
            gap: 8px;
          }
          .ct-strip-slide {
            flex-direction: column;
            gap: 6px;
          }
          .ct-strip-text {
            font-size: 0.76rem;
            text-align: center;
          }
        }

        /* ─── Main Header ─── */
        .ct-header {
          position: sticky; top: 0; z-index: 1000;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .ct-header-bar {
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(226,232,240,0.9);
          transition: all 0.35s ease;
        }
        .ct-header.scrolled .ct-header-bar {
          background: rgba(255,255,255,0.99);
          box-shadow: 0 4px 32px rgba(41,31,188,0.12), 0 1px 0 rgba(41,31,188,0.06);
          border-bottom-color: rgba(41,31,188,0.1);
        }
        .ct-header-inner {
          display: flex; align-items: center; justify-content: space-between;
          height: 76px; padding: 0 28px;
          max-width: 1360px; margin: 0 auto; gap: 12px;
        }

        /* ─── Logo ─── */
        .ct-logo {
          display: flex; align-items: center; flex-shrink: 0;
          text-decoration: none;
        }
        .ct-logo img {
          height: 50px; width: auto; object-fit: contain;
          transition: filter 0.25s ease;
          /* White logo → make it show on white bg using invert + brand color */
          filter: invert(1) sepia(1) saturate(8) hue-rotate(200deg) brightness(0.75);
        }
        .ct-logo:hover img {
          filter: invert(1) sepia(1) saturate(10) hue-rotate(200deg) brightness(0.65);
          transform: scale(1.02);
        }
        .ct-logo-text {
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
          font-size: 1.45rem;
          font-weight: 800;
          color: #0f172a;
          margin-left: 12px;
          letter-spacing: -0.02em;
        }

        /* ─── Desktop Nav ─── */
        .ct-nav {
          display: flex; align-items: center; gap: 1px;
          list-style: none; margin: 0; padding: 0;
        }
        .ct-nav > li { position: relative; }

        .ct-nav-btn {
          display: flex; align-items: center; gap: 5px;
          padding: 8px 13px; border-radius: 9px;
          font-size: 0.855rem; font-weight: 600; color: #1e293b;
          background: transparent; border: none; cursor: pointer;
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
          transition: all 0.2s ease; white-space: nowrap;
          text-decoration: none; letter-spacing: -0.1px;
          position: relative;
        }
        .ct-nav-btn::after {
          content: '';
          position: absolute; bottom: 4px; left: 50%; right: 50%;
          height: 2px; border-radius: 2px;
          background: linear-gradient(135deg, #291fbc, #06b6d4);
          transition: all 0.25s ease;
        }
        .ct-nav-btn:hover::after, .ct-nav-btn.open::after {
          left: 10px; right: 10px;
        }
        .ct-nav-btn:hover, .ct-nav-btn.open {
          color: #291fbc; background: rgba(41,31,188,0.05);
        }
        .ct-nav-chevron {
          font-size: 0.58rem; color: #94a3b8;
          transition: transform 0.25s ease, color 0.2s;
        }
        .ct-nav-btn.open .ct-nav-chevron {
          transform: rotate(180deg); color: #291fbc;
        }

        /* ─── Dropdown Base ─── */
        .ct-drop {
          position: absolute; top: calc(100% + 12px); left: 50%;
          transform: translateX(-50%) translateY(-10px);
          background: #fff;
          border: 1px solid rgba(226,232,240,0.9);
          border-radius: 18px;
          box-shadow: 0 24px 64px rgba(41,31,188,0.14), 0 8px 24px rgba(0,0,0,0.06);
          padding: 16px;
          z-index: 9990;
          opacity: 0; visibility: hidden; pointer-events: none;
          transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.34,1.56,0.64,1), visibility 0.22s;
        }
        .ct-drop.open {
          opacity: 1; visibility: visible; pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }
        /* Left-aligned for last items */
        .ct-drop.align-right { left: auto; right: 0; transform: translateY(-10px); }
        .ct-drop.align-right.open { transform: translateY(0); }

        /* Arrow tip */
        .ct-drop::before {
          content: '';
          position: absolute; top: -6px; left: 50%; transform: translateX(-50%);
          width: 12px; height: 12px; background: #fff;
          border-top: 1px solid rgba(226,232,240,0.9);
          border-left: 1px solid rgba(226,232,240,0.9);
          transform: translateX(-50%) rotate(45deg);
          border-radius: 2px;
        }

        /* ─── Standard Dropdown Items ─── */
        .ct-drop-grid { display: grid; gap: 4px; }
        .ct-drop-item {
          display: flex; align-items: center; gap: 12px;
          padding: 10px 12px; border-radius: 11px;
          text-decoration: none; transition: all 0.18s ease;
          cursor: pointer;
        }
        .ct-drop-item:hover { background: linear-gradient(135deg, rgba(41,31,188,0.05), rgba(6,182,212,0.04)); }
        .ct-drop-icon {
          width: 34px; height: 34px; border-radius: 9px; flex-shrink: 0;
          background: rgba(41,31,188,0.08);
          border: 1px solid rgba(41,31,188,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #291fbc; font-size: 0.78rem;
          transition: all 0.18s ease;
        }
        .ct-drop-item:hover .ct-drop-icon {
          background: linear-gradient(135deg, #291fbc, #06b6d4);
          border-color: transparent; color: #fff;
          box-shadow: 0 4px 12px rgba(41,31,188,0.3);
        }
        .ct-drop-text { min-width: 0; }
        .ct-drop-label {
          font-size: 0.845rem; font-weight: 600; color: #1e293b;
          display: block; line-height: 1.3;
          transition: color 0.18s;
        }
        .ct-drop-item:hover .ct-drop-label { color: #291fbc; }
        .ct-drop-desc {
          font-size: 0.74rem; color: #94a3b8; display: block; margin-top: 1px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }

        /* ─── Mega Dropdown ─── */
        .ct-mega {
          position: absolute; top: calc(100% + 12px); left: 50%;
          transform: translateX(-50%) translateY(-10px);
          background: #fff;
          border: 1px solid rgba(226,232,240,0.9);
          border-radius: 20px;
          box-shadow: 0 24px 64px rgba(41,31,188,0.14), 0 8px 24px rgba(0,0,0,0.06);
          padding: 24px; min-width: 880px; z-index: 9990;
          opacity: 0; visibility: hidden; pointer-events: none;
          transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.34,1.56,0.64,1), visibility 0.22s;
        }
        .ct-mega.open {
          opacity: 1; visibility: visible; pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }
        .ct-mega::before {
          content: '';
          position: absolute; top: -6px; left: 50%; transform: translateX(-50%) rotate(45deg);
          width: 12px; height: 12px; background: #fff;
          border-top: 1px solid rgba(226,232,240,0.9);
          border-left: 1px solid rgba(226,232,240,0.9);
          border-radius: 2px;
        }
        .ct-mega-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 20px; padding-bottom: 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        .ct-mega-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1rem; font-weight: 800; color: #0f172a;
        }
        .ct-mega-badge {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 10px; border-radius: 50px;
          background: linear-gradient(135deg, rgba(41,31,188,0.08), rgba(6,182,212,0.08));
          border: 1px solid rgba(41,31,188,0.15);
          font-size: 0.7rem; font-weight: 700; color: #291fbc;
          letter-spacing: 0.5px; text-transform: uppercase;
        }
        .ct-mega-grid {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 12px;
        }
        .ct-mega-col {
          border-radius: 12px;
          padding: 12px 14px;
          transition: all 0.25s ease;
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
        .ct-mega-col-head {
          font-size: 0.68rem; font-weight: 800;
          text-transform: uppercase; letter-spacing: 1.5px;
          color: rgba(41,31,188,0.5);
          margin-bottom: 10px; display: flex; align-items: center; gap: 6px;
        }
        .ct-mega-col-head i { font-size: 0.7rem; }

        /* Retail column accent */
        .ct-mega-col--retail {
          background: linear-gradient(160deg, rgba(37,99,235,0.03) 0%, rgba(147,197,253,0.06) 100%);
        }
        .ct-mega-col--retail .ct-mega-col-head {
          display: inline-flex; align-items: center; gap: 6px;
          background: linear-gradient(135deg, #2563eb, #60a5fa);
          color: #fff; border-radius: 50px;
          padding: 3px 10px 3px 7px;
          font-size: 0.62rem; letter-spacing: 1px;
          margin-bottom: 10px;
        }
        .ct-mega-col--retail .ct-mega-col-head i { font-size: 0.65rem; color: #fff; }
        .ct-mega-col--retail .ct-mega-link i { color: #2563eb; }
        .ct-mega-col--retail .ct-mega-link:hover { background: rgba(37,99,235,0.06); color: #2563eb; }
        .ct-mega-col--retail .ct-mega-link:hover i { color: #1d4ed8; }

        /* Fashion column accent */
        .ct-mega-col--fashion {
          background: linear-gradient(160deg, rgba(219,39,119,0.03) 0%, rgba(249,168,212,0.06) 100%);
        }
        .ct-mega-col--fashion .ct-mega-col-head {
          display: inline-flex; align-items: center; gap: 6px;
          background: linear-gradient(135deg, #db2777, #f472b6);
          color: #fff; border-radius: 50px;
          padding: 3px 10px 3px 7px;
          font-size: 0.62rem; letter-spacing: 1px;
          margin-bottom: 10px;
        }
        .ct-mega-col--fashion .ct-mega-col-head i { font-size: 0.65rem; color: #fff; }
        .ct-mega-col--fashion .ct-mega-link i { color: #db2777; }
        .ct-mega-col--fashion .ct-mega-link:hover { background: rgba(219,39,119,0.06); color: #db2777; }
        .ct-mega-col--fashion .ct-mega-link:hover i { color: #be185d; }

        /* Hospitality column accent */
        .ct-mega-col--hospitality {
          background: linear-gradient(160deg, rgba(16,185,129,0.03) 0%, rgba(110,231,183,0.06) 100%);
        }
        .ct-mega-col--hospitality .ct-mega-col-head {
          display: inline-flex; align-items: center; gap: 6px;
          background: linear-gradient(135deg, #10b981, #34d399);
          color: #fff; border-radius: 50px;
          padding: 3px 10px 3px 7px;
          font-size: 0.62rem; letter-spacing: 1px;
          margin-bottom: 10px;
        }
        .ct-mega-col--hospitality .ct-mega-col-head i { font-size: 0.65rem; color: #fff; }
        .ct-mega-col--hospitality .ct-mega-link i { color: #10b981; }
        .ct-mega-col--hospitality .ct-mega-link:hover { background: rgba(16,185,129,0.06); color: #10b981; }
        .ct-mega-col--hospitality .ct-mega-link:hover i { color: #047857; }

        /* Enterprise column accent */
        .ct-mega-col--enterprise {
          background: linear-gradient(160deg, rgba(99,102,241,0.03) 0%, rgba(165,180,252,0.06) 100%);
        }
        .ct-mega-col--enterprise .ct-mega-col-head {
          display: inline-flex; align-items: center; gap: 6px;
          background: linear-gradient(135deg, #6366f1, #818cf8);
          color: #fff; border-radius: 50px;
          padding: 3px 10px 3px 7px;
          font-size: 0.62rem; letter-spacing: 1px;
          margin-bottom: 10px;
        }
        .ct-mega-col--enterprise .ct-mega-col-head i { font-size: 0.65rem; color: #fff; }
        .ct-mega-col--enterprise .ct-mega-link i { color: #6366f1; }
        .ct-mega-col--enterprise .ct-mega-link:hover { background: rgba(99,102,241,0.06); color: #6366f1; }
        .ct-mega-col--enterprise .ct-mega-link:hover i { color: #4f46e5; }
        .ct-mega-link {
          display: flex; align-items: center; gap: 8px;
          padding: 7px 8px; border-radius: 8px;
          text-decoration: none; font-size: 0.835rem; font-weight: 500;
          color: #475569; transition: all 0.18s ease;
          margin-bottom: 1px;
        }
        .ct-mega-link i {
          font-size: 0.72rem; color: #94a3b8; width: 14px; flex-shrink: 0;
          transition: color 0.18s;
        }
        .ct-mega-link:hover {
          background: rgba(41,31,188,0.05); color: #291fbc;
          transform: translateX(3px);
        }
        .ct-mega-link:hover i { color: #291fbc; }

        /* ─── Nav Right ─── */
        .ct-nav-right {
          display: flex; align-items: center; gap: 8px; flex-shrink: 0;
        }
        .ct-phone-btn {
          display: flex; align-items: center; gap: 6px;
          padding: 8px 14px; border-radius: 9px;
          border: 1.5px solid #e2e8f0;
          color: #374151; font-size: 0.82rem; font-weight: 600;
          text-decoration: none; white-space: nowrap;
          transition: all 0.2s ease; background: transparent;
        }
        .ct-phone-btn i { color: #291fbc; font-size: 0.78rem; }
        .ct-phone-btn:hover {
          border-color: #291fbc; color: #291fbc;
          background: rgba(41,31,188,0.04);
          box-shadow: 0 0 0 3px rgba(41,31,188,0.06);
        }
        .ct-cta-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 9px 20px; border-radius: 10px;
          background: linear-gradient(135deg, #291fbc 0%, #1d4ed8 50%, #06b6d4 100%);
          background-size: 200% 100%;
          color: #fff !important; font-size: 0.855rem; font-weight: 700;
          border: none; cursor: pointer; font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
          box-shadow: 0 4px 16px rgba(41,31,188,0.3);
          transition: all 0.3s ease; white-space: nowrap; text-decoration: none;
          letter-spacing: -0.1px;
        }
        .ct-cta-btn:hover {
          background-position: 100% 0%;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(41,31,188,0.42);
          color: #fff !important;
        }
        .ct-cta-btn i { transition: transform 0.25s ease; }
        .ct-cta-btn:hover i { transform: translateX(3px); }

        /* ─── Hamburger ─── */
        .ct-hamburger {
          display: none; flex-direction: column; gap: 5px;
          width: 36px; height: 36px; border: none; background: transparent;
          cursor: pointer; padding: 6px; border-radius: 8px;
          align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .ct-hamburger:hover { background: rgba(41,31,188,0.06); }
        .ct-hamburger span {
          width: 24px; height: 3px; border-radius: 1px;
          background: #000000; transition: all 0.3s ease;
          display: block;
        }
        .ct-hamburger.open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .ct-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .ct-hamburger.open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        /* ─── Mobile Drawer ─── */
        .ct-mobile-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.45);
          backdrop-filter: blur(4px); z-index: 8000;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        .ct-mobile-overlay.open {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }
        .ct-mobile-drawer {
          position: fixed; top: 0; right: -100%; bottom: 0;
          width: min(340px, 88vw);
          background: #0f172a; z-index: 8001;
          box-shadow: -24px 0 80px rgba(0,0,0,0.4);
          transition: right 0.35s cubic-bezier(0.4,0,0.2,1);
          display: flex; flex-direction: column; overflow-y: auto;
          color: #f8fafc;
        }
        .ct-mobile-drawer.open { right: 0; }
        .ct-mobile-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 24px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          flex-shrink: 0;
        }
        .ct-mobile-head img { height: 38px; object-fit: contain; filter: brightness(0) invert(1) !important; }
        .ct-mobile-close {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.05); cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: #cbd5e1; font-size: 0.95rem; transition: all 0.25s ease;
        }
        .ct-mobile-close:hover { background: rgba(239,68,68,0.2); border-color: rgba(239,68,68,0.4); color: #ef4444; transform: rotate(90deg); }
        .ct-mobile-nav { padding: 24px 20px; flex: 1; }
        .ct-mobile-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 12px 16px; border-radius: 12px; text-decoration: none;
          font-size: 0.95rem; font-weight: 600; color: #cbd5e1;
          transition: all 0.2s; cursor: pointer; background: transparent; border: none;
          width: 100%; font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
          letter-spacing: -0.1px; margin-bottom: 4px;
        }
        .ct-mobile-link:hover, .ct-mobile-link.active {
          background: rgba(255,255,255,0.06); color: #ffffff;
        }
        .ct-mobile-link i.chevron { font-size: 0.65rem; color: #64748b; transition: transform 0.25s; }
        .ct-mobile-link.active i.chevron { transform: rotate(180deg); color: #06b6d4; }
        .ct-mobile-sub {
          overflow: hidden; max-height: 0;
          transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1);
          padding-left: 16px; border-left: 1.5px solid rgba(255,255,255,0.06);
          margin-left: 28px; margin-bottom: 8px;
        }
        .ct-mobile-sub.open { max-height: 2500px; }
        .ct-mobile-sub-link {
          display: block; padding: 8px 16px; border-radius: 8px;
          font-size: 0.88rem; font-weight: 500; color: #94a3b8;
          text-decoration: none; transition: all 0.18s;
        }
        .ct-mobile-sub-link:hover { background: rgba(255,255,255,0.04); color: #06b6d4; }
        .ct-mobile-sub-head {
          font-size: 0.7rem; font-weight: 800; text-transform: uppercase;
          letter-spacing: 1.5px; color: #475569; padding: 12px 16px 4px;
        }
        .ct-mobile-divider { height: 1px; background: rgba(255,255,255,0.08); margin: 12px 0; }
        .ct-mobile-footer {
          padding: 20px 20px 24px;
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex; flex-direction: column; gap: 12px;
          flex-shrink: 0; background: rgba(0,0,0,0.2);
        }
        .ct-mobile-cta-primary {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 14px 20px; border-radius: 12px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff !important; font-weight: 700; font-size: 0.92rem;
          text-decoration: none; box-shadow: 0 4px 20px rgba(124,58,237,0.3);
          transition: all 0.25s ease;
        }
        .ct-mobile-cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(124,58,237,0.45); }
        .ct-mobile-cta-secondary {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 13px 20px; border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.03);
          color: #cbd5e1 !important; font-weight: 600; font-size: 0.9rem; text-decoration: none;
          transition: all 0.2s;
        }
        .ct-mobile-cta-secondary:hover { border-color: #ffffff; color: #ffffff !important; background: rgba(255,255,255,0.06); }

        /* ─── Floating Buttons ─── */
        .ct-float-left-brand {
          position: fixed; bottom: 25px; left: 25px; z-index: 1000005;
          width: 58px; height: 58px; border-radius: 50%;
          background: #ffffff; border: 2px solid #e2e8f0;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 25px rgba(41, 31, 188, 0.22), 0 3px 10px rgba(0, 0, 0, 0.08);
          cursor: pointer; padding: 7px;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          animation: ct-brand-pop-pulse 3.5s ease-in-out infinite;
          text-decoration: none !important;
        }
        .ct-float-left-brand:hover {
          transform: scale(1.12) translateY(-2px);
          box-shadow: 0 14px 35px rgba(37, 99, 235, 0.38);
          border-color: #2563eb;
        }
        .ct-brand-float-img {
          width: 100%; height: 100%; object-fit: contain;
        }
        .ct-brand-verified-dot {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 18px;
          height: 18px;
          background: #16a34a;
          color: #ffffff;
          border-radius: 50%;
          border: 2px solid #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8px;
          box-shadow: 0 2px 6px rgba(22, 163, 74, 0.4);
        }
        @keyframes ct-brand-pop-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 8px 25px rgba(41, 31, 188, 0.22); }
          50% { transform: scale(1.08); box-shadow: 0 12px 32px rgba(37, 99, 235, 0.42); }
        }

        .ct-float-wa { display: none !important; }

        @media (min-width: 769px) {
          .ct-float-wa { display: none !important; }
          .ct-float-left-brand {
            display: flex !important;
            bottom: 25px !important;
            left: 25px !important;
            right: auto !important;
          }
        }
        @media (max-width: 768px) {
          .ct-float-left-brand {
            display: flex !important;
            bottom: 20px !important;
            left: 20px !important;
            right: auto !important;
            width: 52px !important;
            height: 52px !important;
            padding: 6px !important;
          }
          .ct-float-wa { display: none !important; }
        }

        /* ─── Responsive ─── */
        @media (max-width: 1100px) {
          .ct-nav, .ct-nav-right { display: none !important; }
          .ct-hamburger { display: flex !important; }
          .ct-mobile-drawer { display: flex; }
        }
        @media (max-width: 768px) {
          .ct-strip { display: none !important; }
          .ct-float-contact {
            bottom: 20px !important;
            width: 54px !important;
            height: 54px !important;
            font-size: 1.35rem !important;
            display: flex !important;
          }
          .ct-float-wa {
            display: none !important;
          }
          .ct-header {
            position: sticky !important;
            top: 0 !important;
            padding: 0 !important;
            z-index: 1000 !important;
          }
          .ct-header-bar {
            background: rgba(255,255,255,0.98) !important;
            backdrop-filter: blur(24px) !important;
            -webkit-backdrop-filter: blur(24px) !important;
            border-bottom: 1px solid rgba(226,232,240,0.9) !important;
            border-radius: 0 !important;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05) !important;
            padding: 0 !important;
          }
          .ct-header-inner {
            height: 64px !important;
            padding: 0 20px !important;
          }
          .ct-logo img {
            height: 40px !important;
            filter: invert(1) sepia(1) saturate(8) hue-rotate(200deg) brightness(0.75) !important;
          }
          .ct-logo-text {
            color: #0f172a !important;
            font-size: 1.3rem !important;
            font-weight: 800 !important;
            margin-left: 10px !important;
          }
          .ct-mobile-capsule-cta {
            display: none !important;
          }
          .ct-hamburger {
            width: 36px !important;
            height: 36px !important;
            background: transparent !important;
            border: none !important;
            display: flex !important;
          }
          .ct-hamburger span {
            background: #000000 !important;
            height: 3px !important;
            width: 24px !important;
          }
          main {
            padding-bottom: 40px !important;
          }
        }
        /* Hide Next.js dev indicator portal overlay on mobile/dev */
        [data-nextjs-toast],
        nextjs-portal,
        #nextjs-dev-tools {
          display: none !important;
        }
      `}</style>

      {/* ── Dynamic Announcement Strip ── */}
      <div 
        className="ct-strip" 
        onMouseEnter={() => setIsSlidePaused(true)}
        onMouseLeave={() => setIsSlidePaused(false)}
        role="region"
        aria-label="Announcements"
      >
        <div className="ct-strip-inner">
          <div className="ct-strip-spacer" aria-hidden="true" />
          <div className="ct-strip-slider">
            <div className="ct-strip-slide" key={currentSlide}>
              <span 
                className="ct-strip-badge"
                style={{
                  color: ANNOUNCEMENT_SLIDES[currentSlide].badgeColor,
                  borderColor: ANNOUNCEMENT_SLIDES[currentSlide].badgeBorder,
                  background: ANNOUNCEMENT_SLIDES[currentSlide].badgeBg,
                }}
              >
                <span 
                  className="ct-strip-pulse-dot" 
                  style={{ 
                    background: ANNOUNCEMENT_SLIDES[currentSlide].badgeColor,
                    boxShadow: `0 0 8px ${ANNOUNCEMENT_SLIDES[currentSlide].badgeColor}`
                  }}
                />
                {ANNOUNCEMENT_SLIDES[currentSlide].badge}
              </span>
              <span className="ct-strip-text">
                {ANNOUNCEMENT_SLIDES[currentSlide].textPrefix}{" "}
                <strong className="ct-strip-text-highlight">
                  {ANNOUNCEMENT_SLIDES[currentSlide].textHighlight}
                </strong>
              </span>
              {ANNOUNCEMENT_SLIDES[currentSlide].isExternal ? (
                <a
                  href={ANNOUNCEMENT_SLIDES[currentSlide].btnLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-strip-btn"
                  style={{
                    background: ANNOUNCEMENT_SLIDES[currentSlide].btnGradient,
                    boxShadow: ANNOUNCEMENT_SLIDES[currentSlide].btnShadow,
                    color: ANNOUNCEMENT_SLIDES[currentSlide].textColor
                  }}
                >
                  {ANNOUNCEMENT_SLIDES[currentSlide].btnText}
                </a>
              ) : (
                <Link
                  href={ANNOUNCEMENT_SLIDES[currentSlide].btnLink}
                  className="ct-strip-btn"
                  style={{
                    background: ANNOUNCEMENT_SLIDES[currentSlide].btnGradient,
                    boxShadow: ANNOUNCEMENT_SLIDES[currentSlide].btnShadow,
                    color: ANNOUNCEMENT_SLIDES[currentSlide].textColor
                  }}
                >
                  {ANNOUNCEMENT_SLIDES[currentSlide].btnText}
                </Link>
              )}
            </div>
          </div>

          <div className="ct-strip-nav">
            <button 
              className="ct-strip-nav-btn" 
              onClick={prevSlide}
              aria-label="Previous announcement"
              type="button"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div className="ct-strip-dots">
              {ANNOUNCEMENT_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`ct-strip-dot ${idx === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              className="ct-strip-nav-btn" 
              onClick={nextSlide}
              aria-label="Next announcement"
              type="button"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <div className={`ct-header ${scrolled ? "scrolled" : ""}`} ref={headerRef}>
        <div className="ct-header-bar">
          <div className="ct-header-inner">

            {/* Logo */}
            <Link href="/" className="ct-logo">
              <img src="/assets/images/ct-logo.png" alt="ChittorTech" />
              <span className="ct-logo-text">ChittorTech</span>
            </Link>

            {/* Desktop Nav */}
            <nav>
              <ul className="ct-nav">

                {/* AI Solutions */}
                <li>
                  <button
                    className={`ct-nav-btn ${activeDropdown === "ai" ? "open" : ""}`}
                    onClick={() => toggleDropdown("ai")}
                    onMouseEnter={() => setActiveDropdown("ai")}
                  >
                    AI Solutions <i className="fa-solid fa-chevron-down ct-nav-chevron"></i>
                  </button>
                  <div
                    className={`ct-drop ${activeDropdown === "ai" ? "open" : ""}`}
                    style={{ minWidth: "540px" }}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="ct-drop-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "3px" }}>
                      {NAV_ITEMS.aiProducts.map((item) => (
                        <Link key={item.label} href={item.href} className="ct-drop-item" onClick={() => setActiveDropdown(null)}>
                          <div className="ct-drop-icon"><i className={`fa-solid ${item.icon}`}></i></div>
                          <div className="ct-drop-text">
                            <span className="ct-drop-label">{item.label}</span>
                            <span className="ct-drop-desc">{item.desc}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>

                {/* Industries */}
                <li>
                  <button
                    className={`ct-nav-btn ${activeDropdown === "industries" ? "open" : ""}`}
                    onClick={() => toggleDropdown("industries")}
                    onMouseEnter={() => setActiveDropdown("industries")}
                  >
                    Industries <i className="fa-solid fa-chevron-down ct-nav-chevron"></i>
                  </button>
                  <div
                    className={`ct-mega ${activeDropdown === "industries" ? "open" : ""}`}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="ct-mega-header">
                      <span className="ct-mega-title">Industries We Serve</span>
                      <span className="ct-mega-badge"><i className="fa-solid fa-star"></i> 20+ Verticals</span>
                    </div>
                    <div className="ct-mega-grid">
                      <div className="ct-mega-col ct-mega-col--retail">
                        <div className="ct-mega-col-head"><i className="fa-solid fa-cubes"></i> Core Solutions</div>
                        {NAV_ITEMS.industries.solutions.map((l) => (
                          <Link key={l.href} href={l.href} className="ct-mega-link" onClick={() => setActiveDropdown(null)}>
                            <i className={`fa-solid ${l.icon}`}></i>{l.label}
                          </Link>
                        ))}
                      </div>
                      <div className="ct-mega-col ct-mega-col--fashion">
                        <div className="ct-mega-col-head"><i className="fa-solid fa-gears"></i> Operations & ERP</div>
                        {NAV_ITEMS.industries.operations.map((l) => (
                          <Link key={l.href} href={l.href} className="ct-mega-link" onClick={() => setActiveDropdown(null)}>
                            <i className={`fa-solid ${l.icon}`}></i>{l.label}
                          </Link>
                        ))}
                      </div>
                      <div className="ct-mega-col ct-mega-col--hospitality">
                        <div className="ct-mega-col-head"><i className="fa-solid fa-hotel"></i> Hospitality</div>
                        {NAV_ITEMS.industries.hospitality.map((l) => (
                          <Link key={l.href} href={l.href} className="ct-mega-link" onClick={() => setActiveDropdown(null)}>
                            <i className={`fa-solid ${l.icon}`}></i>{l.label}
                          </Link>
                        ))}
                      </div>
                      <div className="ct-mega-col ct-mega-col--enterprise">
                        <div className="ct-mega-col-head"><i className="fa-solid fa-building"></i> Enterprise</div>
                        {NAV_ITEMS.industries.enterprise.map((l) => (
                          <Link key={l.href} href={l.href} className="ct-mega-link" onClick={() => setActiveDropdown(null)}>
                            <i className={`fa-solid ${l.icon}`}></i>{l.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>

                {/* IT Services */}
                <li>
                  <button
                    className={`ct-nav-btn ${activeDropdown === "services" ? "open" : ""}`}
                    onClick={() => toggleDropdown("services")}
                    onMouseEnter={() => setActiveDropdown("services")}
                  >
                    IT Services <i className="fa-solid fa-chevron-down ct-nav-chevron"></i>
                  </button>
                  <div
                    className={`ct-drop ${activeDropdown === "services" ? "open" : ""}`}
                    style={{ minWidth: "620px", maxHeight: "88vh", overflowY: "auto" }}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="ct-drop-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
                      {NAV_ITEMS.services.map((item) => (
                        <Link key={item.label} href={item.href} className="ct-drop-item" onClick={() => setActiveDropdown(null)}>
                          <div className="ct-drop-icon"><i className={`fa-solid ${item.icon}`}></i></div>
                          <div className="ct-drop-text">
                            <span className="ct-drop-label">{item.label}</span>
                            <span className="ct-drop-desc">{item.desc}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>

                <li><Link href="/trust-center" className="ct-nav-btn"><i className="fa-solid fa-shield-halved text-success me-1" style={{ fontSize: "0.78rem" }}></i> Trust Center</Link></li>
                <li><Link href="/about-us" className="ct-nav-btn">About</Link></li>
                <li><Link href="/blog" className="ct-nav-btn">Blog</Link></li>

              </ul>
            </nav>

            {/* Right CTAs */}
            <div className="ct-nav-right">
              <a href="tel:+917597451057" className="ct-phone-btn">
                <i className="fa-solid fa-phone"></i> +91 75974 51057
              </a>
              <Link href="/contact-us" className="ct-cta-btn">
                Get Started <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

            {/* Hamburger */}
            <button
              className={`ct-hamburger ${mobileOpen ? "open" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span></span><span></span><span></span>
            </button>

          </div>
        </div>
      </div>

      {/* ── Mobile Overlay ── */}
      <div className={`ct-mobile-overlay ${mobileOpen ? "open" : ""}`} onClick={() => setMobileOpen(false)} />

      {/* ── Mobile Drawer ── */}
      <div className={`ct-mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <div className="ct-mobile-head">
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/assets/images/ct-logo.png" alt="ChittorTech" />
            <span style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 800, marginLeft: '12px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>ChittorTech</span>
          </Link>
          <button className="ct-mobile-close" onClick={() => setMobileOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="ct-mobile-nav">
          {/* AI Solutions */}
          <button
            className={`ct-mobile-link ${mobileExpanded === "ai" ? "active" : ""}`}
            onClick={() => setMobileExpanded(mobileExpanded === "ai" ? null : "ai")}
          >
            <span><i className="fa-solid fa-robot" style={{marginRight:"8px",color:"#291fbc"}}></i>AI Solutions</span>
            <i className="fa-solid fa-chevron-down chevron"></i>
          </button>
          <div className={`ct-mobile-sub ${mobileExpanded === "ai" ? "open" : ""}`}>
            {NAV_ITEMS.aiProducts.map((item) => (
              <Link key={item.label} href={item.href} className="ct-mobile-sub-link">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Industries */}
          <button
            className={`ct-mobile-link ${mobileExpanded === "industries" ? "active" : ""}`}
            onClick={() => setMobileExpanded(mobileExpanded === "industries" ? null : "industries")}
          >
            <span><i className="fa-solid fa-store" style={{marginRight:"8px",color:"#291fbc"}}></i>Industries</span>
            <i className="fa-solid fa-chevron-down chevron"></i>
          </button>
          <div className={`ct-mobile-sub ${mobileExpanded === "industries" ? "open" : ""}`}>
            <div className="ct-mobile-sub-head">Core Solutions</div>
            {NAV_ITEMS.industries.solutions.map((l) => (
              <Link key={l.href} href={l.href} className="ct-mobile-sub-link">{l.label}</Link>
            ))}
            <div className="ct-mobile-sub-head">Operations & ERP</div>
            {NAV_ITEMS.industries.operations.map((l) => (
              <Link key={l.href} href={l.href} className="ct-mobile-sub-link">{l.label}</Link>
            ))}
            <div className="ct-mobile-sub-head">Hospitality</div>
            {NAV_ITEMS.industries.hospitality.map((l) => (
              <Link key={l.href} href={l.href} className="ct-mobile-sub-link">{l.label}</Link>
            ))}
            <div className="ct-mobile-sub-head">Enterprise</div>
            {NAV_ITEMS.industries.enterprise.map((l) => (
              <Link key={l.href} href={l.href} className="ct-mobile-sub-link">{l.label}</Link>
            ))}
          </div>

          {/* IT Services */}
          <button
            className={`ct-mobile-link ${mobileExpanded === "services" ? "active" : ""}`}
            onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
          >
            <span><i className="fa-solid fa-laptop-code" style={{marginRight:"8px",color:"#291fbc"}}></i>IT Services</span>
            <i className="fa-solid fa-chevron-down chevron"></i>
          </button>
          <div className={`ct-mobile-sub ${mobileExpanded === "services" ? "open" : ""}`}>
            {NAV_ITEMS.services.map((item) => (
              <Link key={item.label} href={item.href} className="ct-mobile-sub-link">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="ct-mobile-divider" />
          <Link href="/trust-center" className="ct-mobile-link">
            <span><i className="fa-solid fa-shield-halved" style={{marginRight:"8px",color:"#10b981"}}></i>Trust Center</span>
          </Link>
          <Link href="/about-us" className="ct-mobile-link">
            <span><i className="fa-solid fa-circle-info" style={{marginRight:"8px",color:"#94a3b8"}}></i>About Us</span>
          </Link>
          <Link href="/blog" className="ct-mobile-link">
            <span><i className="fa-solid fa-newspaper" style={{marginRight:"8px",color:"#94a3b8"}}></i>Blog</span>
          </Link>
        </div>

        <div className="ct-mobile-footer">
          <Link href="/contact-us" className="ct-mobile-cta-primary">
            <i className="fa-solid fa-rocket"></i> Get Started Free
          </Link>
          <a href="tel:+917597451057" className="ct-mobile-cta-secondary">
            <i className="fa-solid fa-phone" style={{color:"#291fbc"}}></i> +91 75974 51057
          </a>
        </div>
      </div>

      {/* ── Floating Buttons ── */}
      <Link
        href="/trust-center"
        className="ct-float-left-brand"
        title="ChittorTech Trust Center & Legal Accreditations"
        aria-label="Explore ChittorTech Trust Center"
      >
        <img src="/assets/images/ct-logo.png" alt="ChittorTech Logo" className="ct-brand-float-img" />
        <span className="ct-brand-verified-dot" title="Verified Enterprise Partner">
          <i className="fa-solid fa-shield-halved"></i>
        </span>
      </Link>
      <a href="https://wa.me/917597451057" target="_blank" rel="noopener noreferrer" className="ct-float-wa" title="Chat on WhatsApp">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
}
