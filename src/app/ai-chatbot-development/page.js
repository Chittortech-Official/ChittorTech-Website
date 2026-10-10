"use client";
import React, { useState } from "react";
import Link from "next/link";
import "../../../public/assets/css/premium-products.css";

export default function AIChatbotDevelopmentPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is AI Chatbot Development and how does it benefit my business?",
      a: "AI Chatbot Development creates custom conversational AI assistants powered by Large Language Models (LLMs) and RAG (Retrieval-Augmented Generation). It automates up to 80% of routine customer inquiries 24/7, captures qualified leads, and syncs seamlessly with your CRM or database."
    },
    {
      q: "Can the AI Chatbot handle conversations in Hindi and Hinglish?",
      a: "Yes! Our AI chatbots are fully bilingual and multilingual. They fluently understand and respond in Hindi, Hinglish, English, and other regional Indian languages."
    },
    {
      q: "Can the chatbot integrate directly with official WhatsApp Business API?",
      a: "Absolutely. We build official WhatsApp Business API chatbots that send interactive catalog links, order updates, booking confirmations, and capture user leads automatically."
    },
    {
      q: "How fast can a custom AI Chatbot be trained and deployed?",
      a: "Standard website and WhatsApp AI chatbots can be trained on your business documents, FAQs, and product catalogs and deployed live in 3 to 7 business days."
    },
    {
      q: "Is our proprietary business data secure?",
      a: "100% secure. We enforce enterprise-grade data encryption, privacy protocols, and strict data isolation. Your private documents and customer chats are never used to train public AI models."
    }
  ];

  return (
    <>
      <style>{`
        /* ChittorTech AI Chatbot Page Overrides */
        .ct-ai-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #291fbc 100%) !important;
          padding: 95px 0 75px !important;
          position: relative;
          overflow: hidden;
          color: #ffffff !important;
        }
        .ct-ai-hero-badge {
          display: inline-flex !important;
          align-items: center !important;
          gap: 8px !important;
          background: rgba(255, 255, 255, 0.15) !important;
          border: 1px solid rgba(255, 255, 255, 0.3) !important;
          color: #93c5fd !important;
          font-size: 0.8rem !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 1.5px !important;
          padding: 6px 16px !important;
          border-radius: 50px !important;
          margin-bottom: 20px !important;
        }
        .ct-ai-hero-h1 {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-size: clamp(2.1rem, 4.2vw, 3.4rem) !important;
          font-weight: 900 !important;
          color: #ffffff !important;
          line-height: 1.18 !important;
          margin-bottom: 20px !important;
        }
        .ct-ai-hero-p {
          font-size: 1.1rem !important;
          color: rgba(255, 255, 255, 0.92) !important;
          line-height: 1.7 !important;
          max-width: 640px !important;
          margin-bottom: 32px !important;
        }
        .ct-ai-btn-primary {
          display: inline-flex !important;
          align-items: center !important;
          gap: 10px !important;
          padding: 14px 30px !important;
          background: #ffffff !important;
          color: #1e1b4b !important;
          font-weight: 800 !important;
          border-radius: 10px !important;
          text-decoration: none !important;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2) !important;
          transition: all 0.25s ease !important;
        }
        .ct-ai-btn-primary:hover {
          transform: translateY(-2px) !important;
          background: #f8fafc !important;
          color: #291fbc !important;
          box-shadow: 0 12px 28px rgba(0,0,0,0.3) !important;
        }
        .ct-ai-btn-whatsapp {
          display: inline-flex !important;
          align-items: center !important;
          gap: 10px !important;
          padding: 14px 30px !important;
          background: #25D366 !important;
          border: 1px solid #25D366 !important;
          color: #ffffff !important;
          font-weight: 700 !important;
          border-radius: 10px !important;
          text-decoration: none !important;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.3) !important;
          transition: all 0.25s ease !important;
        }
        .ct-ai-btn-whatsapp:hover {
          transform: translateY(-2px) !important;
          background: #20ba5a !important;
          color: #ffffff !important;
        }

        /* Demo Chat Window */
        .ct-chat-box {
          background: #ffffff !important;
          border-radius: 18px !important;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.3) !important;
          overflow: hidden !important;
          border: 1px solid #cbd5e1 !important;
          color: #0f172a !important;
        }
        .ct-chat-box-header {
          background: #0f172a !important;
          color: #ffffff !important;
          padding: 18px 22px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          font-weight: 700 !important;
        }
        .ct-chat-box-body {
          padding: 24px !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 16px !important;
          background: #f8fafc !important;
        }
        .ct-msg {
          display: flex !important;
          gap: 12px !important;
          max-width: 90% !important;
          font-size: 0.95rem !important;
          line-height: 1.55 !important;
        }
        .ct-msg.bot { align-self: flex-start !important; }
        .ct-msg.user { align-self: flex-end !important; flex-direction: row-reverse !important; }
        .ct-msg-avatar {
          width: 36px !important; height: 36px !important; border-radius: 50% !important;
          background: #291fbc !important; color: #ffffff !important;
          display: flex !important; align-items: center !important; justify-content: center !important;
          font-size: 0.9rem !important; flex-shrink: 0 !important;
        }
        .ct-msg-bubble {
          padding: 13px 18px !important; border-radius: 14px !important;
        }
        .ct-msg.bot .ct-msg-bubble {
          background: #ffffff !important; border: 1px solid #cbd5e1 !important; color: #1e293b !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06) !important;
        }
        .ct-msg.user .ct-msg-bubble {
          background: #2563eb !important; color: #ffffff !important; font-weight: 500 !important;
        }

        /* Light Sections & Headings */
        .ct-feat-sec { padding: 85px 0 !important; background: #f8fafc !important; }
        .ct-card {
          background: #ffffff !important;
          border: 1px solid #e2e8f0 !important;
          border-radius: 16px !important;
          padding: 32px !important;
          height: 100% !important;
          transition: all 0.3s ease !important;
        }
        .ct-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 20px 45px rgba(41, 31, 188, 0.12) !important;
          border-color: rgba(41, 31, 188, 0.3) !important;
        }
        .ct-icon-box {
          width: 56px !important; height: 56px !important; border-radius: 14px !important;
          background: rgba(41, 31, 188, 0.08) !important; color: #291fbc !important;
          display: flex !important; align-items: center !important; justify-content: center !important;
          font-size: 1.4rem !important; margin-bottom: 20px !important;
        }
        .ct-card-title {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-size: 1.2rem !important; font-weight: 700 !important; color: #0f172a !important; margin-bottom: 10px !important;
        }
        .ct-card-desc {
          font-size: 0.95rem !important; color: #475569 !important; line-height: 1.65 !important; margin: 0 !important;
        }

        /* Section Eyebrow & Title */
        .ct-eye {
          display: inline-flex !important; align-items: center !important; gap: 6px !important;
          background: rgba(41,31,188,0.08) !important; border: 1px solid rgba(41,31,188,0.18) !important;
          color: #291fbc !important; font-size: 0.78rem !important; font-weight: 800 !important; text-transform: uppercase !important;
          letter-spacing: 1.5px !important; padding: 6px 16px !important; border-radius: 50px !important; margin-bottom: 16px !important;
        }
        .ct-h2-dark {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-size: clamp(1.8rem, 3.2vw, 2.5rem) !important;
          font-weight: 800 !important; color: #0f172a !important; margin-bottom: 14px !important;
        }
        .ct-sub-dark {
          font-size: 1.05rem !important; color: #475569 !important; max-width: 640px !important; margin: 0 auto 52px auto !important;
        }

        /* FAQ Accordion */
        .ct-faq-box {
          border: 1px solid #cbd5e1 !important; border-radius: 12px !important; background: #ffffff !important;
          margin-bottom: 14px !important; overflow: hidden !important;
        }
        .ct-faq-header {
          padding: 20px 24px !important; font-weight: 700 !important; color: #0f172a !important; cursor: pointer !important;
          display: flex !important; justify-content: space-between !important; align-items: center !important; font-size: 1.05rem !important;
        }
        .ct-faq-body {
          padding: 0 24px 20px 24px !important; color: #475569 !important; font-size: 0.95rem !important; line-height: 1.7 !important;
        }

        /* CTA Footer Box — FIXED High Contrast White Text */
        .ct-cta-box-wrapper {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #291fbc 100%) !important;
          border-radius: 24px !important; padding: 64px 36px !important; text-align: center !important;
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.4) !important;
        }
        .ct-cta-h2 {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-size: clamp(1.9rem, 3.8vw, 2.7rem) !important;
          font-weight: 900 !important;
          color: #ffffff !important;
          margin-bottom: 18px !important;
          line-height: 1.25 !important;
        }
        .ct-cta-p {
          color: #ffffff !important;
          font-size: 1.1rem !important;
          max-width: 640px !important;
          margin: 0 auto 34px auto !important;
          line-height: 1.65 !important;
          opacity: 0.95 !important;
        }
      `}</style>

      {/* Hero Banner Section */}
      <section className="ct-ai-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="ct-ai-hero-badge">
                <i className="fa-solid fa-robot"></i> ChittorTech AI Solutions
              </div>
              
              {/* Single H1 Tag */}
              <h1 className="ct-ai-hero-h1">
                Best AI Chatbot Development Company in India
              </h1>

              <p className="ct-ai-hero-p">
                Transform customer service and lead generation with custom AI chatbots, bilingual WhatsApp assistants, and RAG document knowledge base solutions built for Indian businesses.
              </p>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <Link href="/contact-us" className="ct-ai-btn-primary">
                  <i className="fa-solid fa-calendar-check"></i> Request Live Demo
                </Link>
                <a href="https://wa.me/917597451057?text=Hi%20ChittorTech,%20I%20want%20to%20know%20more%20about%20AI%20Chatbots" target="_blank" rel="noopener noreferrer" className="ct-ai-btn-whatsapp">
                  <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Live Chat Simulation Box */}
            <div className="col-lg-5">
              <div className="ct-chat-box">
                <div className="ct-chat-box-header">
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "10px", height: "10px", background: "#10b981", borderRadius: "50%" }}></span>
                    ChittorTech AI Bot
                  </div>
                  <span style={{ fontSize: "0.78rem", opacity: 0.9, color: "#94a3b8" }}>Online 24/7</span>
                </div>

                <div className="ct-chat-box-body">
                  <div className="ct-msg bot">
                    <div className="ct-msg-avatar"><i className="fa-solid fa-robot"></i></div>
                    <div className="ct-msg-bubble">
                      Namaste! 🙏 Welcome to ChittorTech. I can answer your product queries, provide instant quotes, or schedule a demo.
                    </div>
                  </div>

                  <div className="ct-msg user">
                    <div className="ct-msg-bubble">
                      Can you build a WhatsApp bot for billing & customer bookings in Hindi?
                    </div>
                  </div>

                  <div className="ct-msg bot">
                    <div className="ct-msg-avatar"><i className="fa-solid fa-robot"></i></div>
                    <div className="ct-msg-bubble">
                      Haan bilkul! Our WhatsApp AI bots support bilingual chat (Hindi & English), auto-send catalogs, take bookings, and update your CRM in real time.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Overview Section */}
      <section style={{ padding: "85px 0", background: "#ffffff" }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="ct-eye"><i className="fa-solid fa-brain"></i> Conversational AI</div>
              <h2 className="ct-h2-dark">Intelligent 24/7 AI Assistants for Modern Enterprises</h2>
              <p style={{ color: "#475569", lineHeight: 1.75, fontSize: "1.02rem" }}>
                ChittorTech specializes in building enterprise-grade <strong>AI Chatbots</strong> powered by state-of-the-art Large Language Models (LLMs) and custom RAG vector search engines. Whether you run a retail store, hotel, hospital, or B2B enterprise, our AI solutions ensure zero missed customer queries.
              </p>
              <p style={{ color: "#475569", lineHeight: 1.75, fontSize: "1.02rem" }}>
                Our AI assistants connect directly with your existing software stack, including WhatsApp Business API, Website Live Chat, Telegram, and ChittorTech ERP/CRM systems.
              </p>
            </div>
            <div className="col-lg-6">
              <div style={{ borderRadius: "18px", overflow: "hidden", boxShadow: "0 18px 40px rgba(0,0,0,0.12)" }}>
                <img src="/assets/images/img151.jpg" alt="AI Chatbot Development Solutions by ChittorTech" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Capabilities Grid */}
      <section className="ct-feat-sec">
        <div className="container text-center">
          <div className="ct-eye"><i className="fa-solid fa-sparkles"></i> Capabilities</div>
          <h2 className="ct-h2-dark">Why Choose ChittorTech AI Chatbots?</h2>
          <p className="ct-sub-dark">Designed for maximum engagement, lead conversion, and customer satisfaction.</p>

          <div className="row g-4 text-start">
            <div className="col-md-4">
              <div className="ct-card">
                <div className="ct-icon-box"><i className="fa-brands fa-whatsapp"></i></div>
                <h3 className="ct-card-title">WhatsApp Business API</h3>
                <p className="ct-card-desc">
                  Automate WhatsApp chats, send interactive catalog links, confirm orders, and collect customer leads directly on mobile.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ct-card">
                <div className="ct-icon-box"><i className="fa-solid fa-file-code"></i></div>
                <h3 className="ct-card-title">RAG & Document Search</h3>
                <p className="ct-card-desc">
                  Upload your PDFs, price lists, and policy manuals. The AI instantly retrieves precise answers from your private documents.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ct-card">
                <div className="ct-icon-box"><i className="fa-solid fa-language"></i></div>
                <h3 className="ct-card-title">Multilingual (Hinglish/Hindi)</h3>
                <p className="ct-card-desc">
                  Seamlessly understand and respond in Hindi, Hinglish, English, and regional Indian dialects to connect with every customer.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ct-card">
                <div className="ct-icon-box"><i className="fa-solid fa-users-gear"></i></div>
                <h3 className="ct-card-title">Automated Lead Capture</h3>
                <p className="ct-card-desc">
                  Capture visitor names, phone numbers, and specific inquiries automatically, syncing them instantly to your CRM or Google Sheets.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ct-card">
                <div className="ct-icon-box"><i className="fa-solid fa-clock"></i></div>
                <h3 className="ct-card-title">24/7 Instant Support</h3>
                <p className="ct-card-desc">
                  Eliminate support response delays. Resolve 80%+ of recurring customer support queries round-the-clock without human intervention.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ct-card">
                <div className="ct-icon-box"><i className="fa-solid fa-lock"></i></div>
                <h3 className="ct-card-title">Enterprise Data Privacy</h3>
                <p className="ct-card-desc">
                  Your business data stays 100% private. Strict encryption and isolated model deployments guarantee data protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section style={{ padding: "85px 0", background: "#ffffff" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div className="text-center">
            <div className="ct-eye"><i className="fa-solid fa-circle-question"></i> Questions</div>
            <h2 className="ct-h2-dark">Frequently Asked Questions</h2>
            <p className="ct-sub-dark">Everything you need to know about our AI chatbot services.</p>
          </div>

          <div style={{ marginTop: "24px" }}>
            {faqs.map((faq, index) => (
              <div key={index} className="ct-faq-box">
                <div className="ct-faq-header" onClick={() => toggleFaq(index)}>
                  <span>{faq.q}</span>
                  <i className={`fa-solid ${activeFaq === index ? "fa-chevron-up" : "fa-chevron-down"}`} style={{ color: "#291fbc" }}></i>
                </div>
                {activeFaq === index && (
                  <div className="ct-faq-body">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section style={{ padding: "0 0 85px 0", background: "#ffffff" }}>
        <div className="container">
          <div className="ct-cta-box-wrapper">
            <h2 className="ct-cta-h2">
              Ready to Automate Your Business with AI Chatbots?
            </h2>
            <p className="ct-cta-p">
              Get in touch with ChittorTech engineers today for a customized demonstration tailored to your exact business workflow.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact-us" className="ct-ai-btn-primary">
                <i className="fa-solid fa-envelope"></i> Contact Our AI Team
              </Link>
              <a href="tel:+917597451057" className="ct-ai-btn-primary" style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.3)" }}>
                <i className="fa-solid fa-phone"></i> Call +91 75974 51057
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
