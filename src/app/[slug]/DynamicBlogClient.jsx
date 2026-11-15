"use client";

import React, { useState } from "react";
import Link from "next/link";
import { submitLead } from "@/lib/leadService";
import chittorgarhServices from "@/data/chittorgarhServices.json";


const CASE_STUDY_METRICS = {
  "shabari-mata-temple-hubli-invoice-system": [
    { val: "< 1 Sec", lbl: "Thermal Receipt Print", icon: "fa-solid fa-bolt", color: "#fb923c", bg: "rgba(251, 146, 60, 0.18)", border: "rgba(251, 146, 60, 0.45)" },
    { val: "100%", lbl: "80G Tax Compliance", icon: "fa-solid fa-shield-halved", color: "#4ade80", bg: "rgba(74, 222, 128, 0.18)", border: "rgba(74, 222, 128, 0.45)" },
    { val: "0 Halts", lbl: "Offline-First Resilience", icon: "fa-solid fa-database", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.18)", border: "rgba(56, 189, 248, 0.45)" },
    { val: "Live Cloud", lbl: "Trustee Audit Dashboard", icon: "fa-solid fa-chart-pie", color: "#c084fc", bg: "rgba(192, 132, 252, 0.18)", border: "rgba(192, 132, 252, 0.45)" },
  ],
  "visit-chittorgarh-app-tourism": [
    { val: "5,600+", lbl: "Search Impressions", icon: "fa-solid fa-chart-line", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.18)", border: "rgba(56, 189, 248, 0.45)" },
    { val: "576", lbl: "Generative AI Overviews", icon: "fa-solid fa-wand-magic-sparkles", color: "#c084fc", bg: "rgba(192, 132, 252, 0.18)", border: "rgba(192, 132, 252, 0.45)" },
    { val: "Global", lbl: "US, UK, DE, AU Visitors", icon: "fa-solid fa-earth-americas", color: "#34d399", bg: "rgba(52, 211, 153, 0.18)", border: "rgba(52, 211, 153, 0.45)" },
    { val: "Direct", lbl: "WhatsApp Cab Bookings", icon: "fa-brands fa-whatsapp", color: "#22c55e", bg: "rgba(34, 197, 94, 0.18)", border: "rgba(34, 197, 94, 0.45)" },
  ],
};

const CASE_STUDY_WORKFLOWS = {
  "shabari-mata-temple-hubli-invoice-system": {
    title: "Deployment & Architectural Workflow",
    steps: [
      { num: "01", title: "Offline Pilgrim Counter Check-In", desc: "Counter staff register devotees and donations with instantaneous local SQLite caching, operating continuously without internet access." },
      { num: "02", title: "Sub-Second Thermal Printing & 80G Audit", desc: "Automated generation of bilingual Kannada/English thermal slips with sequential 80G tax exemption numbering and donor PAN validation." },
      { num: "03", title: "Background Cloud Synchronization", desc: "Whenever network connectivity is available, the local ledger synchronizes tamper-proof audit data directly to the trustee cloud." },
      { num: "04", title: "Cashier Shift Tallying & Trustee Governance", desc: "Automated end-of-day physical cash reconciliation reports preventing revenue leakage and giving trustees full remote visibility." }
    ]
  },
  "visit-chittorgarh-app-tourism": {
    title: "Answer Engine (GEO) & Conversion Workflow",
    steps: [
      { num: "01", title: "Global AI Query Discovery", desc: "International tourists search for Chittorgarh day trips on ChatGPT, Perplexity, and Google AI Overviews." },
      { num: "02", title: "GEO Schema Citation Domination", desc: "Structured JSON-LD schema (TouristAttraction, LocalBusiness, FAQ) triggers top citation placement in AI overviews." },
      { num: "03", title: "Sub-Second Next.js PWA Experience", desc: "Fast-loading mobile-first itineraries, audio guides, and cloakroom maps that work smoothly even inside fort blind spots." },
      { num: "04", title: "Direct WhatsApp Booking Conversion", desc: "Direct 1-click booking connects tourists to licensed local cab drivers and guides with zero intermediary commission cuts." }
    ]
  }
};

const RELATED_CASE_STUDIES = [
  {
    badge: "Spiritual Trust ERP",
    badgeColor: "#ea580c",
    badgeBg: "#fff7ed",
    title: "Sabari Mala Mandir (Hubli) - 80G Billing",
    desc: "Offline-first thermal donation billing with automated 80G tax exemption receipts and cloud trustee dashboard.",
    link: "/shabari-mata-temple-hubli-invoice-system",
  },
  {
    badge: "Regional Tourism & GEO",
    badgeColor: "#0284c7",
    badgeBg: "#f0f9ff",
    title: "VisitChittorgarh.in - UNESCO Tourism Portal",
    desc: "Capturing global tourist demand across 576 AI overviews with sub-second Next.js PWA and direct WhatsApp booking.",
    link: "/visit-chittorgarh-app-tourism",
  },
  {
    badge: "Mobile App Publishing",
    badgeColor: "#16a34a",
    badgeBg: "#f0fdf4",
    title: "Google Play Direct Production Console",
    desc: "D-U-N-S registered organization console publishing bypassing 14-day tester wait for immediate live releases.",
    link: "/google-play-publishing",
  },
];

const BLOG_CONTENT = {
  "google-play-store-publishing-guide-compliance-launch": {
    heading: "How to Safely Publish & Rank Your App on Google Play Store",
    intro: "Google Play Console publishing has become highly strict in 2026. With the introduction of the mandatory 12-tester rule for 14 days, identity verification for organization accounts, and rigid policy audits, developers face constant rejection. This guide explains how ChittorTech solves these hurdles to ensure a 100% approval rate.",
    capabilitiesTitle: "Our Google Play Publishing Solutions:",
    capabilities: [
      {
        title: "12-Tester Compliance Management",
        desc: "We provide 12 verified real tester accounts to run your app for 14 days continuously, meeting Google's strict feedback compliance."
      },
      {
        title: "Verified Organization Console Hosting",
        desc: "Publish on our established, verified Google Play developer account to bypass $25 registration fees and strict identity audits."
      },
      {
        title: "Pre-Submission Policy Audits",
        desc: "We manually scan your source code, privacy policy, and assets to detect any malware, fraudulent behavior, or policy-violating code before Google does."
      },
      {
        title: "ASO (App Store Optimization) Setup",
        desc: "Keyword research and screenshot optimization to ensure your app ranks highly in Play Store search results from Day 1."
      }
    ],
    summary: "At ChittorTech, we eliminate the complexity of app publishing. By providing tester pools, policy compliance consulting, and verified developer consoles, we guarantee your app reaches your audience safely and quickly."
  },
  "shabari-mata-temple-hubli-invoice-system": {
    heading: "Case Study: Sabari Mala Mandir (Hubli) - Hybrid 80G Billing & Devotee ERP",
    intro: "Sabarimala Temple in Hubli (Karnataka) manages thousands of daily pilgrim footfalls, requiring instant donation accounting, dharamshala room allocations, pooja bookings, and legal 80G tax exemption receipts. ChittorTech designed and deployed an offline-first hybrid invoice system that prints thermal receipts in under 1 second, keeps functioning during internet blackouts, and automatically syncs all audit ledgers to a cloud trustee dashboard.",
    capabilitiesTitle: "Core Engineering Highlights & Impact:",
    capabilities: [
      {
        title: "Statutory 80G Tax Exemption Automation",
        desc: "Automated generation of bilingual donation receipts compliant with Indian Income Tax 80G rules, including donor PAN capture, serial numbering, and instant thermal printer & WhatsApp dispatch."
      },
      {
        title: "Offline-First Hybrid Architecture",
        desc: "Built with local offline database cache allowing counter staff to continuously issue receipts and check-ins even during zero internet connectivity, with background cloud synchronization."
      },
      {
        title: "Multi-Counter Cashier & Role Access Control",
        desc: "Dedicated user roles for cashiers, temple administrators, and trustees, complete with cashier shift closing reports, physical cash tallying, and tamper-proof audit trails."
      },
      {
        title: "Pilgrim Room Allocation & Queue Management",
        desc: "Integrated dharamshala room booking module tracking check-ins, advance devotee reservations, inventory logs, and Form C police register exports in real-time."
      }
    ],
    summary: "By deploying ChittorTech's pilgrim billing ERP, the Sabari Mala Mandir Trust eliminated 100% of manual paper ledger bottlenecks, achieved transparent 80G tax auditing, and reduced devotee counter waiting times from 15 minutes to under 30 seconds."
  },
  "visit-chittorgarh-app-tourism": {
    heading: "Case Study: Visit Chittorgarh - Digital Tourism Platform & Travel Guide",
    intro: "VisitChittorgarh.in is the definitive digital tourism guide and private day-trip booking engine for Chittorgarh Fort, a UNESCO World Heritage Site attracting over 1.2 million tourists annually. ChittorTech engineered the end-to-end web portal, mobile application, and Answer Engine Optimization (AEO) pipeline: generating over 5,600 organic impressions and 576 Generative AI recommendations in just 90 days from international tourists in Germany, USA, Australia, and the UK.",
    capabilitiesTitle: "Key Technical & Business Architecture:",
    capabilities: [
      {
        title: "Sub-Second Next.js Performance & PWA",
        desc: "Engineered on Next.js with server-side caching, automated XML sitemaps, and mobile-first progressive web app capabilities for lightning-fast speeds on slow 3G/4G network zones inside the 700-acre fort."
      },
      {
        title: "Answer Engine Optimization (AEO/GEO)",
        desc: "Structured schema architecture (TouristAttraction, LocalBusiness, FAQPage, HowTo) that successfully secured #1 citation rankings across ChatGPT, Perplexity AI, Google AI Overviews, and Microsoft Copilot."
      },
      {
        title: "Integrated WhatsApp Cab & Guide Booking Engine",
        desc: "High-converting direct WhatsApp reservation pipeline for private AC day trips (Udaipur to Chittorgarh) and licensed government-approved fort guides with zero commission intermediary leakage."
      },
      {
        title: "Hyperlocal Food & Heritage Directory",
        desc: "Comprehensive database covering 50+ local culinary spots, luggage storage cloakrooms, sound & light show timings, and fort entry ticket logistics with interactive map navigation."
      }
    ],
    summary: "The VisitChittorgarh project proves how ChittorTech combines modern web development with bleeding-edge Answer Engine Optimization (GEO) to capture real global consumer demand. Want to build a high-converting regional portal or booking engine? Contact ChittorTech today."
  },
  "chittorgarh-tourism-website-development": {
    heading: "Case Study: Chittorgarh Tourism Web Platform Engineering",
    intro: "Developing an authoritative, high-authority tourism portal requires balancing heavy historical media assets with instant load times and search engine prominence. ChittorTech delivered a comprehensive digital gateway for Chittorgarh's tourism ecosystem, featuring interactive heritage maps, ticketing guides, and foreign tourist assistance.",
    capabilitiesTitle: "Tourism Web Architecture Deliverables:",
    capabilities: [
      {
        title: "High-Resolution Image & Video Streaming",
        desc: "Edge-cached static asset delivery ensuring instant loading of 4K fort visuals without slowing down mobile page speeds."
      },
      {
        title: "International Tourist Assistance Workflows",
        desc: "Dedicated itinerary planners, currency guidance, local taxi fare benchmarks, and direct WhatsApp concierge support for global visitors."
      },
      {
        title: "Search Console & Answer Engine Domination",
        desc: "Configured comprehensive JSON-LD schemas and multilingual metadata to capture voice and AI search queries across search engines."
      },
      {
        title: "Local Vendor & Guide Integration",
        desc: "Direct contact directories connecting travelers directly with licensed local guides, homestays, and Rajasthan Tourism accredited operators."
      }
    ],
    summary: "A benchmark in regional digital transformation. ChittorTech continues to empower local tourism economies through scalable, modern web engineering."
  },
  "ai-governance-security-deepfakes": {
    heading: "AI Governance, Security & Deepfake Mitigation Guide",
    intro: "As Generative AI shifts from experimentation to core operations, enterprises face new security risks. From deepfake impersonations and data privacy leaks to regulatory audits, safeguarding your AI pipeline is crucial. ChittorTech provides end-to-end security compliance for custom LLMs and RAG engines.",
    capabilitiesTitle: "Our Enterprise AI Security Safeguards:",
    capabilities: [
      {
        title: "Deepfake & KYC Verification",
        desc: "AI models designed to detect synthesized media, audio manipulations, and facial spoofing during digital onboarding."
      },
      {
        title: "Data Sanitization & Guardrails",
        desc: "Ensuring PII (Personally Identifiable Information) is automatically masked or removed before passing to public LLMs."
      },
      {
        title: "Enterprise Role Access Control",
        desc: "Strict RBAC (Role-Based Access Control) to verify which employee can access specific vector database files."
      },
      {
        title: "Compliance & Audit Logging",
        desc: "Maintaining detailed prompt-response transaction logs to ensure adherence to data sovereignty and AI laws."
      }
    ],
    summary: "At ChittorTech, we ensure your transition to Agentic AI is safe, compliant, and secure. We establish zero-trust architectures to defend your proprietary data against modern threats."
  },
  "building-ai-native-organization": {
    heading: "Building an AI-Native Organization from the Ground Up",
    intro: "Integrating AI is no longer about adding a chatbot to a legacy website. To achieve true productivity gains, organizations must restructure their workflows, databases, and employee roles around autonomous agents. This guide outlines ChittorTech's playbook for building an AI-native business.",
    capabilitiesTitle: "AI-Native Operational Foundations:",
    capabilities: [
      {
        title: "Multi-Agent Core Workflows",
        desc: "Replacing static department silos with self-orchestrated AI teams that execute sales, support, and documentation."
      },
      {
        title: "Proprietary Model Fine-Tuning",
        desc: "Training compact, specialized SLMs (Small Language Models) on your company's internal data for maximum efficiency."
      },
      {
        title: "Real-Time Data Pipelines",
        desc: "Connecting databases directly to LLMs via secure APIs for live, autonomous decision-making."
      },
      {
        title: "Digital Coworker Onboarding",
        desc: "Designing interfaces where employees seamlessly collaborate with AI assistants rather than manually editing tables."
      }
    ],
    summary: "Shifting to an AI-native structure cuts operational overhead by up to 60%. ChittorTech serves as your strategic engineering partner, designing the custom pipelines and models needed to automate your growth."
  },
  "physical-ai-software-robotics": {
    heading: "Physical AI: Bridging Software and Robotics",
    intro: "Physical AI represents the boundary where software reasoning meets the physical world. While traditional AI acts on screens and text, Physical AI drives drones, warehouse systems, and manufacturing robots. ChittorTech builds custom machine learning models and edge computing pipelines to power autonomous physical operations.",
    capabilitiesTitle: "Our Physical AI Capabilities:",
    capabilities: [
      {
        title: "Edge Model Deployment",
        desc: "Optimizing and deploying neural networks directly on Edge devices (Jetson Nano, Raspberry Pi, industrial PLCs)."
      },
      {
        title: "IoT & Sensor Integration",
        desc: "Real-time sync of LiDAR, ultrasonic, and camera feeds into a centralized cloud automation pipeline."
      },
      {
        title: "Predictive Control Systems",
        desc: "Custom Reinforcement Learning models that allow robotic arms to adapt and correct errors dynamically."
      },
      {
        title: "Low-Latency Communications",
        desc: "Ultra-fast websocket and gRPC data transfer protocols to ensure zero-delay remote telemetry monitoring."
      }
    ],
    summary: "Physical AI transforms static machinery into intelligent coworkers. ChittorTech partners with smart factories and logistics centers to design and scale the secure software brains behind physical automation."
  },
  "digital-coworkers-ai-hr-processes": {
    heading: "Digital Co-workers: Integrating AI Agents into HR Processes",
    intro: "Human Resource departments waste thousands of hours on repetitive inquiries, candidate screening, and onboarding paperwork. ChittorTech builds autonomous AI agents (Digital Co-workers) that act as virtual HR partners, answering policy questions, processing payroll, and scoring candidates automatically.",
    capabilitiesTitle: "Digital HR Agent Capabilities:",
    capabilities: [
      {
        title: "Automated Resume Screening",
        desc: "Semantic matching models that screen hundreds of PDFs against job descriptions to score and rank candidates."
      },
      {
        title: "24/7 Policy Q&A Agent",
        desc: "WhatsApp and Slack-integrated bots trained on your employee handbook to answer leave and benefit queries instantly."
      },
      {
        title: "Seamless Payroll Integration",
        desc: "AI workflows that automatically verify timesheets and trigger payroll invoice generation in your ERP."
      },
      {
        title: "Employee Onboarding Workflows",
        desc: "Step-by-step digital coworker pipelines that verify employee background details and generate offer letters."
      }
    ],
    summary: "By deploying digital coworkers, HR teams can redirect 60% of their operational bandwidth to strategic talent development. Contact ChittorTech to schedule a live HR agent demonstration."
  }
};

const getDynamicContent = (slug, cleanTitle) => {
  if (chittorgarhServices[slug]) {
    return chittorgarhServices[slug];
  }
  if (BLOG_CONTENT[slug]) {
    return BLOG_CONTENT[slug];
  }

  const title = cleanTitle;
  let theme = "software automation";
  let techKeywords = ["custom development", "system integration", "cloud scaling", "automated workflows"];

  if (slug.includes("ai") || slug.includes("llm") || slug.includes("chatbot") || slug.includes("rag") || slug.includes("reasoning") || slug.includes("prompt") || slug.includes("slop")) {
    theme = "artificial intelligence and machine learning";
    techKeywords = ["custom LLM training", "vector search semantic indexing", "autonomous AI agents", "prompt engineering standards"];
  } else if (slug.includes("erp") || slug.includes("billing") || slug.includes("invoice") || slug.includes("pos") || slug.includes("accounting") || slug.includes("inventory") || slug.includes("invoicing") || slug.includes("payroll")) {
    theme = "enterprise resource planning (ERP) systems";
    techKeywords = ["GST tax calculation engines", "multi-outlet store sync", "automated ledger logs", "inventory stock alerts"];
  } else if (slug.includes("seo") || slug.includes("marketing") || slug.includes("outreach") || slug.includes("rankings")) {
    theme = "digital marketing and algorithmic SEO";
    techKeywords = ["technical SEO crawlers", "algorithmic keyword research", "backlink profiles", "conversion funnel optimization"];
  } else if (slug.includes("cloud") || slug.includes("infrastructure") || slug.includes("security") || slug.includes("zero-trust") || slug.includes("saas")) {
    theme = "secure cloud-native systems";
    techKeywords = ["AWS/Vercel serverless compute", "Zero-Trust authorization", "multi-tenant schema isolation", "real-time API endpoint monitoring"];
  }

  return {
    heading: title,
    intro: `In modern business operations, adopting proper tech strategies is key to maintaining a competitive edge. This article explores how implementing ${title} helps enterprises streamline workflows, eliminate manual errors, and scale operations seamlessly. Our technical team at ChittorTech designs robust architectures tailored for this specific use case.`,
    capabilitiesTitle: `Key Technical Features of our ${title} System:`,
    capabilities: [
      {
        title: "High-Performance Integration",
        desc: `We build custom architectures for ${title} to ensure sub-second latency, zero downtime, and complete compatibility with your legacy database stack.`
      },
      {
        title: "Automated Workflows",
        desc: `Deploy automated background workers and secure pipelines that handle ${techKeywords[0]} and ${techKeywords[1]} without manual intervention.`
      },
      {
        title: "Advanced Security & Auditing",
        desc: `Protect your proprietary databases with standard role-based access control (RBAC), end-to-end data encryption, and real-time operational logging.`
      },
      {
        title: "Cloud Connectivity & APIs",
        desc: `Integrated notification triggers via WhatsApp APIs, webhooks, and custom dashboards designed specifically to manage ${techKeywords[2]} and ${techKeywords[3]}.`
      }
    ],
    summary: `At ChittorTech, we are dedicated to helping businesses grow through reliable, modern software engineering. By building tailored systems around ${title}, we help managers cut operational overhead and focus on strategic scaling. Contact our engineering team today to see a live demonstration of these features in action.`
  };
};

export default function DynamicBlogClient({ slug, cleanTitle }) {
  const content = getDynamicContent(slug, cleanTitle);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    firm: "",
    contact: "",
    location: "",
    message: "",
  });
  const [statusMsg, setStatusMsg] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "danger"
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMsg("");

    // Validate required fields
    if (!formData.name || !formData.email || !formData.contact || !formData.location) {
      setStatusType("danger");
      setStatusMsg("Please fill in all required fields.");
      setSubmitting(false);
      return;
    }

    const submissionPayload = {
      ...formData,
      message: `[SEO LANDING PAGE: ${cleanTitle}] ` + (formData.message || "")
    };

    // 1. Instant feedback to user
    setStatusType("success");
    setStatusMsg("Thank you! We will contact you soon with a custom demo.");

    // 2. Clear form fields
    setFormData({
      name: "",
      email: "",
      company: "",
      industry: "",
      firm: "",
      contact: "",
      location: "",
      message: "",
    });

    // 3. Send payload into Firestore and trigger email
    submitLead(submissionPayload).catch((err) => {
      console.error("Background lead submission error:", err);
    });

    setSubmitting(false);
  };

  return (
    <div className="dy-page-wrap">
      <style>{`
        .dy-page-wrap {
          font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
          color: #1e293b;
          background: #ffffff;
          overflow-x: hidden;
        }
        .dy-page-wrap h1, 
        .dy-page-wrap h2, 
        .dy-page-wrap h3, 
        .dy-page-wrap h4 {
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif !important;
        }

        /* Hero */
        .dy-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 55%, #1e293b 100%);
          padding: 100px 0 80px;
          position: relative;
          color: #ffffff !important;
          overflow: hidden;
        }
        .dy-hero::before {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
          top: -200px;
          right: -100px;
          pointer-events: none;
        }
        .dy-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #38bdf8 !important;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          padding: 6px 16px;
          border-radius: 50px;
          margin-bottom: 24px;
        }
        .dy-hero-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #ffffff !important;
          line-height: 1.2;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }
        .dy-hero-desc {
          font-size: 1.08rem;
          color: #cbd5e1 !important;
          line-height: 1.7;
          max-width: 700px;
          margin-bottom: 0;
        }

        /* Section */
        .dy-section {
          padding: 70px 0;
          position: relative;
          clear: both;
          display: block;
          width: 100%;
        }
        .dy-workflow-section {
          padding: 75px 0;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          position: relative;
          clear: both;
          display: block;
          width: 100%;
        }
        .dy-impact-section {
          padding: 70px 0;
          background: #ffffff;
          position: relative;
          clear: both;
          display: block;
          width: 100%;
        }
        .dy-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 32px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03);
          height: auto !important;
          margin-bottom: 0px;
          position: relative;
        }
        .dy-related-section {
          padding: 80px 0;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          position: relative;
          clear: both;
          display: block;
          width: 100%;
        }
        .dy-cta-section {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #1e3a8a 100%);
          padding: 75px 0;
          color: #ffffff;
          text-align: center;
          position: relative;
          clear: both;
          display: block;
          width: 100%;
        }

        /* Form Card */
        .dy-form-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 36px;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.05);
          position: sticky;
          top: 100px;
        }
        .dy-form-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 6px;
        }
        .dy-form-subtitle {
          font-size: 0.82rem;
          color: #64748b;
          margin-bottom: 24px;
        }
        .dy-input-group {
          margin-bottom: 12px;
          border-radius: 10px;
          border: 1.5px solid #e2e8f0;
          background: #f8fafc;
          display: flex;
          align-items: center;
          transition: all 0.2s ease;
        }
        .dy-input-group:focus-within {
          border-color: #2563eb;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
        }
        .dy-input-icon {
          color: #3b82f6;
          padding-left: 14px;
          padding-right: 10px;
          font-size: 0.9rem;
        }
        .dy-form-card .form-control,
        .dy-form-card .form-select {
          border: none;
          padding: 11px 14px 11px 0;
          font-size: 0.86rem;
          font-weight: 500;
          background: transparent;
          color: #0f172a;
          box-shadow: none !important;
        }
        .dy-form-card .form-control::placeholder {
          color: #94a3b8;
        }
        .dy-btn {
          width: 100%;
          padding: 13px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.92rem;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          border: none;
          color: #ffffff;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .dy-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(37, 99, 235, 0.45);
        }

        /* Bullet List */
        .dy-bullets {
          list-style: none;
          padding: 0;
          margin: 24px 0;
        }
        .dy-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 0.96rem;
          line-height: 1.5;
        }
        .dy-bullet-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #eff6ff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .dy-alert {
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          color: #065f46;
          padding: 12px;
          border-radius: 10px;
          font-size: 0.84rem;
          font-weight: 600;
          margin-bottom: 16px;
        }
      `}</style>

      {/* Hero */}
      <section className="dy-hero">
        <div className="container">
          <div className="dy-hero-badge">
            <i className="fas fa-sparkles"></i>
            <span>{content.badge || "ChittorTech Guides"}</span>
          </div>
          <h1 className="dy-hero-title">{content.heading || cleanTitle}</h1>
          <p className="dy-hero-desc">
            {content.intro || "Explore secure, cloud-based workflow automation, GST-compliant billing, inventory management, and custom enterprise AI solutions tailored to boost business growth."}
          </p>

          {CASE_STUDY_METRICS[slug] && (
            <div className="d-flex flex-wrap gap-3 mt-4">
              {CASE_STUDY_METRICS[slug].map((m, idx) => (
                <div key={idx} style={{
                  background: "rgba(15, 23, 42, 0.7)",
                  border: `1.5px solid ${m.border}`,
                  borderRadius: "14px",
                  padding: "10px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.35)",
                  backdropFilter: "blur(10px)"
                }}>
                  <div style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    background: m.bg,
                    border: `1px solid ${m.border}`,
                    color: m.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.15rem",
                    flexShrink: 0
                  }}>
                    <i className={m.icon} style={{ color: m.color }}></i>
                  </div>
                  <div>
                    <div style={{ fontSize: "1.25rem", fontWeight: 900, color: "#ffffff", lineHeight: 1.1, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{m.val}</div>
                    <div style={{ fontSize: "0.72rem", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginTop: "2px" }}>{m.lbl}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Main Content & Form */}
      <section className="dy-section">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-7">
              <div className="dy-card mb-4">
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                  <span style={{ background: "#eff6ff", color: "#2563eb", padding: "4px 12px", borderRadius: "50px", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase" }}>
                    <i className="fa-solid fa-layer-group me-1"></i> Solution Architecture
                  </span>
                </div>
                <h2 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#0f172a", marginBottom: "20px" }}>
                  {content.capabilitiesTitle || "Key Technical Features & Capabilities"}
                </h2>
                <ul className="dy-bullets">
                  {content.capabilities.map((c, idx) => (
                    <li key={idx} style={{ alignItems: "flex-start" }}>
                      <div className="dy-bullet-icon" style={{ marginTop: "4px" }}><i className="fas fa-check"></i></div>
                      <div>
                        <strong style={{ color: "#0f172a", fontSize: "0.98rem" }}>{c.title}:</strong>
                        <div style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.6, marginTop: "2px" }}>{c.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Sticky Form & Trust Card */}
            <div className="col-lg-5">
              <div className="dy-form-card" style={{ position: "sticky", top: "90px" }}>
                <h3 className="dy-form-title">Request a Free Demo</h3>
                <p className="dy-form-subtitle">Receive a customized demonstration and expert trial consultation.</p>

                {statusMsg && (
                  <div className="dy-alert">
                    <i className="fas fa-check-circle me-2"></i>
                    <span>{statusMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="dy-input-group">
                    <span className="dy-input-icon"><i className="fas fa-user"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Full Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="dy-input-group">
                    <span className="dy-input-icon"><i className="fas fa-envelope"></i></span>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="dy-input-group">
                    <span className="dy-input-icon"><i className="fas fa-phone"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      name="contact"
                      placeholder="Phone / WhatsApp*"
                      required
                      value={formData.contact}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="dy-input-group">
                    <span className="dy-input-icon"><i className="fas fa-map-marker-alt"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      placeholder="Location (City/State)*"
                      required
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="dy-input-group">
                    <span className="dy-input-icon"><i className="fas fa-industry"></i></span>
                    <select
                      className="form-select"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                    >
                      <option value="">Select Industry</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Retail & Kirana">Retail &amp; Kirana</option>
                      <option value="Textile & Garment">Textile &amp; Garment</option>
                      <option value="Hospitality & Hotels">Hospitality &amp; Hotels</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Education">Education</option>
                    </select>
                  </div>

                  <div className="dy-input-group" style={{ alignItems: "flex-start", padding: "6px" }}>
                    <span className="dy-input-icon" style={{ marginTop: "8px" }}><i className="fas fa-comment-dots"></i></span>
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Specific Requirements (Optional)"
                      rows="2"
                      style={{ border: "none", resize: "none", width: "100%", outline: "none", fontSize: "0.86rem", fontWeight: "500", background: "transparent" }}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="dy-btn" disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit Inquiry & Request Demo"}
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </form>

                {/* Trust & Guarantee Box */}
                <div style={{ marginTop: "24px", paddingTop: "18px", borderTop: "1px dashed #e2e8f0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                    <span style={{ background: "#ecfdf5", color: "#059669", padding: "4px 10px", borderRadius: "50px", fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase" }}>
                      <i className="fa-solid fa-shield-check me-1"></i> Verified Partner
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600 }}>D-U-N-S Registered Org</span>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px 0", fontSize: "0.8rem", color: "#475569" }}>
                    <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <i className="fa-solid fa-circle-check text-success"></i> <strong>Zero Commission / Direct Booking Leakage</strong>
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <i className="fa-solid fa-circle-check text-success"></i> <strong>100% Source Code Ownership & Audit Trail</strong>
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <i className="fa-solid fa-circle-check text-success"></i> <strong>Direct WhatsApp Technical Consultation</strong>
                    </li>
                  </ul>
                  <a
                    href="https://api.whatsapp.com/send?phone=917597451057&text=Hi%20ChittorTech,%20I%20reviewed%20your%20case%20study%20and%20want%20to%20discuss%20a%20similar%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success w-100 fw-bold"
                    style={{ borderRadius: "10px", fontSize: "0.82rem", padding: "9px" }}
                  >
                    <i className="fa-brands fa-whatsapp me-2"></i> Chat with Lead Engineer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standalone Full-Width System Workflow Section */}
      {CASE_STUDY_WORKFLOWS[slug] && (
        <section className="dy-workflow-section">
          <div className="container">
            <div className="text-center mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
              <span style={{ background: "#eff6ff", color: "#2563eb", padding: "5px 14px", borderRadius: "50px", fontSize: "0.76rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>
                <i className="fa-solid fa-diagram-project me-1"></i> System Architecture &amp; Workflow
              </span>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)", fontWeight: 800, color: "#0f172a", marginTop: "12px", marginBottom: "8px" }}>
                {CASE_STUDY_WORKFLOWS[slug].title}
              </h2>
              <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                High-availability pipeline engineered for seamless operations, zero data loss, and real-time execution.
              </p>
            </div>
            <div className="row g-4 align-items-stretch">
              {CASE_STUDY_WORKFLOWS[slug].steps.map((st) => (
                <div key={st.num} className="col-12 col-md-6 col-lg-3 d-flex">
                  <div style={{
                    background: "#ffffff",
                    border: "1.5px solid #e2e8f0",
                    borderRadius: "16px",
                    padding: "24px 20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "100%",
                    boxShadow: "0 6px 20px rgba(15, 23, 42, 0.04)"
                  }}>
                    <div>
                      <span style={{ fontSize: "0.75rem", fontWeight: 900, color: "#2563eb", background: "#eff6ff", border: "1px solid #dbeafe", padding: "4px 10px", borderRadius: "6px" }}>
                        STEP {st.num}
                      </span>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a", marginTop: "14px", marginBottom: "8px", lineHeight: 1.35 }}>
                        {st.title}
                      </h3>
                      <p style={{ fontSize: "0.86rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                        {st.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Standalone Full-Width Measurable Impact Section */}
      {content.summary && (
        <section className="dy-impact-section">
          <div className="container">
            <div style={{
              background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 55%, #1e3a8a 100%)",
              borderRadius: "22px",
              padding: "44px 38px",
              color: "#ffffff",
              boxShadow: "0 15px 35px rgba(15, 23, 42, 0.12)"
            }}>
              <div className="row align-items-center g-4">
                <div className="col-12 col-lg-8">
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(34, 197, 94, 0.2)", border: "1px solid rgba(34, 197, 94, 0.4)", color: "#4ade80", padding: "4px 12px", borderRadius: "50px", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "12px" }}>
                    <i className="fa-solid fa-circle-check"></i> Verified Business Impact
                  </span>
                  <h3 style={{ fontSize: "clamp(1.4rem, 3vw, 1.85rem)", fontWeight: 900, color: "#ffffff", marginBottom: "12px", lineHeight: 1.25, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Measurable Impact &amp; Client Value
                  </h3>
                  <p style={{ fontSize: "0.98rem", color: "#cbd5e1", lineHeight: 1.75, margin: 0, maxWidth: "720px" }}>
                    {content.summary}
                  </p>
                </div>
                <div className="col-12 col-lg-4 text-lg-end text-start">
                  <a
                    href="https://api.whatsapp.com/send?phone=917597451057&text=Hi%20ChittorTech,%20I%20reviewed%20your%20case%20study%20and%20want%20to%20discuss%20a%20similar%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success fw-bold px-4 py-3 w-100 mb-2"
                    style={{ borderRadius: "10px", fontSize: "0.9rem" }}
                  >
                    <i className="fa-brands fa-whatsapp me-2"></i> Discuss Similar System
                  </a>
                  <Link href="/contact-us" className="btn btn-outline-light fw-bold px-4 py-2 w-100" style={{ borderRadius: "10px", fontSize: "0.86rem" }}>
                    Request Free Consultation <i className="fa-solid fa-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Case Studies Grid */}
      <section className="dy-related-section">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <div>
              <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#2563eb", textTransform: "uppercase", letterSpacing: "1px" }}>
                Proven Engineering
              </span>
              <h2 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#0f172a", margin: "4px 0 0" }}>
                Explore More Client Case Studies &amp; Architecture
              </h2>
            </div>
            <Link href="/case-studies" className="btn btn-outline-primary btn-sm fw-bold px-3 py-2" style={{ borderRadius: "8px" }}>
              View All Case Studies <i className="fa-solid fa-arrow-right ms-1"></i>
            </Link>
          </div>

          <div className="row g-4">
            {RELATED_CASE_STUDIES.filter((item) => item.link !== "/" + slug).slice(0, 3).map((item) => (
              <div key={item.link} className="col-12 col-md-4">
                <Link href={item.link} style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{
                    background: "#ffffff",
                    border: "1.5px solid #e2e8f0",
                    borderRadius: "18px",
                    padding: "26px",
                    height: "auto",
                    minHeight: "220px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.2s ease",
                  }} className="cs-preview-card">
                    <div>
                      <span style={{ fontSize: "0.72rem", fontWeight: 800, color: item.badgeColor, background: item.badgeBg, padding: "3px 10px", borderRadius: "50px", textTransform: "uppercase" }}>
                        {item.badge}
                      </span>
                      <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", marginTop: "14px", marginBottom: "8px", lineHeight: 1.35 }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
                    <div style={{ marginTop: "20px", fontSize: "0.84rem", fontWeight: 700, color: "#2563eb", display: "flex", alignItems: "center", gap: "6px" }}>
                      Read Case Study <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width Conversion CTA Banner */}
      <section className="dy-cta-section">
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 900, color: "#ffffff", marginBottom: "14px" }}>
            Want Similar Scalable Architecture For Your Business?
          </h2>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "28px" }}>
            Whether you need offline-first pilgrim billing ERP, Answer Engine Optimization (GEO) to capture global travelers, or verified mobile app publishing, our engineering team is ready to deploy.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a
              href="https://api.whatsapp.com/send?phone=917597451057&text=Hi%20ChittorTech,%20I%20want%20to%20consult%20on%20building%20a%20system%20like%20your%20case%20studies."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-lg fw-bold px-4 py-3"
              style={{ borderRadius: "10px" }}
            >
              <i className="fa-brands fa-whatsapp me-2"></i> Discuss on WhatsApp (+91 75974 51057)
            </a>
            <Link href="/contact-us" className="btn btn-outline-light btn-lg fw-bold px-4 py-3" style={{ borderRadius: "10px" }}>
              Request Custom Blueprint
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
