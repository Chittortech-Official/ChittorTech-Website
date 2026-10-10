"use client";

import React, { useState } from "react";
import { submitLead } from "@/lib/leadService";
import chittorgarhServices from "@/data/chittorgarhServices.json";

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
    heading: "Sabari Mala Mandir (Hubli) Custom Invoice & Billing System",
    intro: "Sabarimala Mandir is one of India's largest pilgrimage management challenges. With millions of devotees offering donations, booking services, and requesting 80G tax exemption certificates, a standard billing machine falls short. ChittorTech engineered a custom offline-online hybrid invoice system to handle trust accounting, room booking, and counter billing seamlessly.",
    capabilitiesTitle: "Sabari Mala Mandir Custom ERP Capabilities:",
    capabilities: [
      {
        title: "80G Tax Exemption Receipts",
        desc: "Instant creation of digital and printed donation receipts with automatic 80G compliance tax data formatting."
      },
      {
        title: "Offline/Online Hybrid Sync",
        desc: "Allows temple counters to issue invoices instantly even during zero internet connectivity, with background cloud auto-sync."
      },
      {
        title: "Devotee Room & Queue Booking",
        desc: "Integrated system to manage dharamshala check-ins, queue reservations, and inventory logs in real-time."
      },
      {
        title: "Trust & Donation Accounting",
        desc: "Secure ledgers tracking every single rupee donated, with automated audit trails and daily bank deposits logging."
      }
    ],
    summary: "We designed a robust billing solution that handles the high-volume traffic of Sabari Mala Mandir counters. With modern UI, receipt print integrations, and transparent accounting, we help temple trusts manage their resources with absolute trust."
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
          padding: 80px 0;
        }
        .dy-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 32px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03);
          height: 100%;
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
        </div>
      </section>

      {/* Main Content & Form */}
      <section className="dy-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#0f172a", marginBottom: "20px" }}>
                {content.heading || cleanTitle}
              </h2>
              <p style={{ fontSize: "1.02rem", color: "#475569", lineHeight: "1.8", marginBottom: "24px" }}>
                {content.intro}
              </p>

              <div className="dy-card mb-4">
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f172a", marginBottom: "16px" }}>
                  {content.capabilitiesTitle}
                </h3>
                <ul className="dy-bullets">
                  {content.capabilities.map((c, idx) => (
                    <li key={idx}>
                      <div className="dy-bullet-icon"><i className="fas fa-check"></i></div>
                      <span><strong>{c.title}:</strong> {c.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a", marginTop: "40px", marginBottom: "16px" }}>
                {slug.includes("chittorgarh") ? "Why Chittorgarh Businesses Choose ChittorTech" : "Why Indian Enterprises Trust ChittorTech"}
              </h2>
              <p style={{ fontSize: "0.98rem", color: "#475569", lineHeight: "1.75" }}>
                {content.summary}
              </p>
            </div>

            {/* Sticky Form */}
            <div className="col-lg-5">
              <div className="dy-form-card">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
