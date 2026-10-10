"use client";
import React from "react";
import Link from "next/link";
import "../../../public/assets/css/premium-products.css";

export default function Page() {
  return (
    <div className="ab-page-wrap">
      <style>{`
        /* ─── About Us Page Scoped Design System ─── */
        .ab-page-wrap {
          font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
          color: #1e293b;
          background: #ffffff;
          overflow-x: hidden;
        }
        .ab-page-wrap h1, 
        .ab-page-wrap h2, 
        .ab-page-wrap h3, 
        .ab-page-wrap h4, 
        .ab-page-wrap h5 {
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif !important;
        }

        /* ── Hero Section ── */
        .ab-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #1e293b 100%);
          padding: 95px 0 75px;
          position: relative;
          color: #ffffff !important;
          overflow: hidden;
        }
        .ab-hero::before {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%);
          top: -150px;
          right: -100px;
          pointer-events: none;
        }
        .ab-hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #38bdf8 !important;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          padding: 6px 16px;
          border-radius: 50px;
          margin-bottom: 20px;
        }
        .ab-hero-title {
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-weight: 800;
          color: #ffffff !important;
          line-height: 1.18;
          margin-bottom: 18px;
          letter-spacing: -0.5px;
        }
        .ab-hero-desc {
          font-size: 1.08rem;
          color: #f1f5f9 !important;
          line-height: 1.75;
          max-width: 640px;
          margin-bottom: 32px;
        }

        /* Buttons */
        .ab-btn-primary {
          display: inline-flex !important;
          align-items: center !important;
          gap: 8px !important;
          padding: 13px 30px !important;
          background: linear-gradient(135deg, #2563eb, #06b6d4) !important;
          color: #ffffff !important;
          border-radius: 50px !important;
          font-weight: 700 !important;
          font-size: 0.92rem !important;
          border: none !important;
          text-decoration: none !important;
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3) !important;
          transition: all 0.25s ease !important;
          cursor: pointer;
        }
        .ab-btn-primary:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 12px 28px rgba(37, 99, 235, 0.45) !important;
          color: #ffffff !important;
        }
        .ab-btn-ghost {
          display: inline-flex !important;
          align-items: center !important;
          gap: 8px !important;
          padding: 12px 28px !important;
          background: transparent !important;
          color: #ffffff !important;
          border-radius: 50px !important;
          font-weight: 600 !important;
          font-size: 0.92rem !important;
          border: 1.5px solid rgba(255, 255, 255, 0.35) !important;
          text-decoration: none !important;
          transition: all 0.25s ease !important;
        }
        .ab-btn-ghost:hover {
          background: rgba(255, 255, 255, 0.12) !important;
          border-color: #ffffff !important;
          color: #ffffff !important;
        }

        /* Stat Cards */
        .ab-stat-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 18px;
          padding: 22px 16px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .ab-stat-card:hover {
          background: rgba(255, 255, 255, 0.14);
          transform: translateY(-4px);
          border-color: rgba(56, 189, 248, 0.4);
        }
        .ab-stat-num {
          font-size: 2.1rem;
          font-weight: 800;
          color: #38bdf8 !important;
          line-height: 1;
          margin-bottom: 6px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .ab-stat-label {
          font-size: 0.76rem;
          color: rgba(255, 255, 255, 0.85) !important;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Section Wrappers */
        .ab-section {
          padding: 80px 0;
          position: relative;
        }
        .ab-sec-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #eff6ff;
          color: #2563eb !important;
          border: 1px solid #bfdbfe;
          font-size: 0.74rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 5px 14px;
          border-radius: 30px;
          margin-bottom: 14px;
        }
        .ab-sec-title {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: #0f172a !important;
          margin-bottom: 14px;
          letter-spacing: -0.4px;
        }

        /* White Elevated Card */
        .ab-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 32px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 6px 24px rgba(15, 23, 42, 0.04);
          transition: all 0.3s ease;
          height: 100%;
        }
        .ab-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(37, 99, 235, 0.1);
          border-color: #bfdbfe;
        }

        /* Icon Badge Box */
        .ab-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: linear-gradient(135deg, #2563eb, #06b6d4);
          color: #ffffff !important;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          margin-bottom: 20px;
          box-shadow: 0 6px 16px rgba(37, 99, 235, 0.22);
        }

        /* Meaning Banner (Crisp Light Card with Left Blue Accent) */
        .ab-meaning-card {
          background: #f8fafc;
          border-radius: 24px;
          padding: 44px 36px;
          color: #1e293b !important;
          border: 1.5px solid #e2e8f0;
          border-left: 6px solid #2563eb;
          box-shadow: 0 12px 35px rgba(15, 23, 42, 0.05);
        }
        .ab-meaning-card strong {
          color: #2563eb !important;
          font-weight: 700;
        }
        .ab-meaning-title {
          font-size: 2rem;
          font-weight: 800;
          color: #0f172a !important;
          margin-bottom: 14px;
        }
        .ab-meaning-desc {
          color: #334155 !important;
          line-height: 1.8;
          font-size: 1.04rem;
          margin: 0;
        }

        /* Differentiator Numbers */
        .ab-diff-num {
          font-size: 1.7rem;
          font-weight: 800;
          color: #2563eb !important;
          margin-bottom: 10px;
        }

        /* CTA Box */
        .ab-cta-banner {
          background: linear-gradient(135deg, #1e1b4b 0%, #291fbc 50%, #0284c7 100%);
          border-radius: 28px;
          padding: 56px 36px;
          color: #ffffff !important;
          text-align: center;
          box-shadow: 0 20px 50px rgba(37, 99, 235, 0.25);
        }
        .ab-cta-title {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 800;
          color: #ffffff !important;
          margin-bottom: 14px;
        }
        .ab-cta-desc {
          font-size: 1.05rem;
          color: #f1f5f9 !important;
          max-width: 620px;
          margin: 0 auto 30px;
          line-height: 1.7;
        }
        .ab-btn-light {
          display: inline-flex !important;
          align-items: center !important;
          gap: 8px !important;
          padding: 13px 30px !important;
          background: #ffffff !important;
          color: #1d4ed8 !important;
          border-radius: 50px !important;
          font-weight: 800 !important;
          font-size: 0.92rem !important;
          border: none !important;
          text-decoration: none !important;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15) !important;
          transition: all 0.25s ease !important;
          cursor: pointer;
        }
        .ab-btn-light i, .ab-btn-light span {
          color: #1d4ed8 !important;
        }
        .ab-btn-light:hover {
          transform: translateY(-2px) !important;
          background: #f8fafc !important;
          color: #1e40af !important;
        }
        .ab-btn-light:hover i, .ab-btn-light:hover span {
          color: #1e40af !important;
        }
      `}</style>

      {/* ── 1. Hero Section ── */}
      <section className="ab-hero">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="ab-hero-pill">
                <i className="fa-solid fa-sparkles"></i> Pioneering AI &amp; Software Engineering
              </div>
              <h1 className="ab-hero-title">
                About ChittorTech: Building High-Impact AI &amp; Software Solutions
              </h1>
              <p className="ab-hero-desc">
                We are a team of passionate engineers, AI researchers, and software architects dedicated to empowering Indian SMEs and enterprises with cutting-edge AI chatbots, fine-tuned LLMs, RAG knowledge systems, and custom software platforms.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <button className="ab-btn-primary" data-bs-toggle="modal" data-bs-target="#trialModal">
                  <i className="fa-solid fa-rocket"></i> Book Free Demo &amp; Consultation
                </button>
                <Link href="/contact-us" className="ab-btn-ghost">
                  <i className="fa-solid fa-envelope"></i> Contact Us
                </Link>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="row g-3">
                <div className="col-6">
                  <div className="ab-stat-card">
                    <div className="ab-stat-num">250+</div>
                    <div className="ab-stat-label">Projects Delivered</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="ab-stat-card">
                    <div className="ab-stat-num">99.8%</div>
                    <div className="ab-stat-label">Client Satisfaction</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="ab-stat-card">
                    <div className="ab-stat-num">4.8★</div>
                    <div className="ab-stat-label">Google Rating</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="ab-stat-card">
                    <div className="ab-stat-num">24/7</div>
                    <div className="ab-stat-label">Intelligent Automation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Who We Are Section ── */}
      <section className="ab-section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="ab-sec-pill">
                <i className="fa-solid fa-building"></i> Who We Are
              </div>
              <h2 className="ab-sec-title">
                Empowering Businesses with Cutting-Edge AI &amp; Next-Gen IT Solutions
              </h2>
              <p style={{ color: "#475569", lineHeight: "1.8", fontSize: "1.02rem", marginBottom: "16px" }}>
                At ChittorTech, we engineer solutions that deliver real, measurable impact. From deploying autonomous AI agents that handle customer support 24/7, to architecting private knowledge search systems across thousands of enterprise documents, and engineering high-performance web and mobile applications — ChittorTech is your end-to-end technology partner.
              </p>
              <p style={{ color: "#475569", lineHeight: "1.8", fontSize: "1.02rem", marginBottom: "24px" }}>
                We believe cutting-edge AI and software should be accessible to every business — not just large tech giants. ChittorTech bridges this gap by delivering production-ready, scalable, and secure AI solutions tailored to the specific needs of SMEs and enterprise clients alike.
              </p>
              
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3">
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#dbeafe", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.85rem" }}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span style={{ fontWeight: "600", color: "#1e293b" }}>Production-Ready AI Pipelines &amp; Autonomous Workflows</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#dbeafe", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.85rem" }}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span style={{ fontWeight: "600", color: "#1e293b" }}>100% Data Confidentiality &amp; Private Cloud Deployments</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#dbeafe", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.85rem" }}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span style={{ fontWeight: "600", color: "#1e293b" }}>Dedicated Post-Launch Technical Support &amp; Maintenance</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src="/assets/images/about-img.png"
                alt="ChittorTech AI Innovation"
                className="img-fluid"
                style={{ borderRadius: "20px", boxShadow: "0 15px 40px rgba(15, 23, 42, 0.08)", border: "1px solid #e2e8f0" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Brand Heritage Section (Light High-Contrast Card) ── */}
      <section className="ab-section" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="ab-meaning-card">
            <div className="row align-items-center g-4">
              <div className="col-lg-9">
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#e0f2fe", color: "#0284c7", padding: "6px 16px", borderRadius: "30px", fontSize: "0.76rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>
                  <i className="fa-solid fa-shield-halved"></i> Our Origin &amp; Values
                </div>
                <h2 className="ab-meaning-title">
                  The Meaning Behind <span style={{ color: "#2563eb" }}>ChittorTech</span>
                </h2>
                <p className="ab-meaning-desc">
                  The name <strong>"ChittorTech"</strong> is inspired by <strong>Chittorgarh</strong> — a historic city of valor, resilience, and excellence in Rajasthan. Combined with <strong>"Tech"</strong>, it reflects our core philosophy: <strong>building technology that stands strong, serves with precision, and empowers businesses to rise above challenges.</strong> We bring the same spirit of excellence to every AI system, software product, and digital solution we build.
                </p>
              </div>
              <div className="col-lg-3 text-lg-end text-center d-none d-lg-block">
                <div style={{ display: "inline-flex", width: "100px", height: "100px", borderRadius: "50%", background: "#e0f2fe", border: "1px solid #bae6fd", alignItems: "center", justifyContent: "center", fontSize: "2.8rem", color: "#0284c7" }}>
                  <i className="fa-solid fa-building"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Vision & Mission Section ── */}
      <section className="ab-section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="text-center mb-5">
            <div className="ab-sec-pill">
              <i className="fa-solid fa-compass"></i> Guiding Vision
            </div>
            <h2 className="ab-sec-title">Our Vision &amp; Mission</h2>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="ab-card">
                <div className="ab-icon-box">
                  <i className="fa-solid fa-eye"></i>
                </div>
                <h3 style={{ fontSize: "1.45rem", fontWeight: "800", color: "#0f172a", marginBottom: "12px" }}>
                  Vision
                </h3>
                <p style={{ color: "#475569", lineHeight: "1.75", fontSize: "1.02rem", margin: 0 }}>
                  To be India's most trusted AI engineering company — making intelligent automation, custom LLMs, and next-generation software accessible to every business, from ambitious startups to global enterprises.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="ab-card">
                <div className="ab-icon-box" style={{ background: "linear-gradient(135deg, #06b6d4, #3b82f6)" }}>
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <h3 style={{ fontSize: "1.45rem", fontWeight: "800", color: "#0f172a", marginBottom: "12px" }}>
                  Mission
                </h3>
                <p style={{ color: "#475569", lineHeight: "1.75", fontSize: "1.02rem", margin: 0 }}>
                  To accelerate digital transformation for businesses by delivering custom AI solutions, RAG-powered knowledge systems, intelligent chatbots, and full-stack software that unlock new levels of efficiency, intelligence, and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Why Choose ChittorTech (6 Highlights) ── */}
      <section className="ab-section" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="text-center mb-5">
            <div className="ab-sec-pill">
              <i className="fa-solid fa-award"></i> Why Choose Us
            </div>
            <h2 className="ab-sec-title">Why Leading Businesses Partner With ChittorTech</h2>
          </div>

          <div className="row g-4">
            {[
              { num: "01", title: "250+ Projects Delivered", desc: "Proven track record delivering high-performance AI, web, mobile, and enterprise SaaS products across India." },
              { num: "02", title: "RAG & LLM Specialists", desc: "Deep expertise in custom LLM fine-tuning, RAG document search, and multi-step autonomous AI workflows." },
              { num: "03", title: "End-to-End Execution", desc: "From initial discovery and architectural design to cloud deployment and ongoing maintenance." },
              { num: "04", title: "4.8+ Google Rating", desc: "Consistently rated top-tier by clients reflecting our unwavering commitment to quality and satisfaction." },
              { num: "05", title: "100% Data Confidentiality", desc: "Air-gapped and private cloud deployment options to keep your enterprise data completely secure." },
              { num: "06", title: "Dedicated Support", desc: "Continuous technical support, system monitoring, and performance optimizations post-launch." },
            ].map((item, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="ab-card">
                  <div className="ab-diff-num">{item.num}</div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: "800", color: "#0f172a", marginBottom: "8px" }}>
                    {item.title}
                  </h4>
                  <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: "1.6", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Industries We Serve ── */}
      <section className="ab-section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="text-center mb-5">
            <div className="ab-sec-pill">
              <i className="fa-solid fa-briefcase"></i> Industry Solutions
            </div>
            <h2 className="ab-sec-title">Who We Serve</h2>
          </div>

          <div className="row g-4">
            {[
              { title: "E-Commerce & Retail", desc: "AI product search, recommendation engines, automated support chatbots, and smart inventory." },
              { title: "Healthcare & Pharma", desc: "Medical document AI, patient data extraction, clinical decision support, and compliance automation." },
              { title: "Manufacturing & Logistics", desc: "Computer vision quality control, predictive maintenance, supply chain AI, and real-time tracking." },
              { title: "BFSI & Fintech", desc: "AI underwriting, document OCR, risk analytics, and regulatory compliance automation." },
              { title: "Education & EdTech", desc: "AI tutoring systems, intelligent content search, student analytics, and personalized learning paths." },
              { title: "Legal & Consulting", desc: "Contract AI, knowledge management, automated research tools, and document summarization." },
            ].map((ind, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="ab-card" style={{ padding: "26px" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#0f172a", marginBottom: "8px" }}>
                    {ind.title}
                  </h4>
                  <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: "1.6", margin: 0 }}>
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Call To Action ── */}
      <section className="ab-section" style={{ background: "#ffffff", paddingBottom: "90px" }}>
        <div className="container">
          <div className="ab-cta-banner">
            <h2 className="ab-cta-title">
              Ready To Accelerate Your Business With AI?
            </h2>
            <p className="ab-cta-desc">
              Schedule a free consultation today and discover how ChittorTech can engineer tailored AI automation and software solutions for your growth.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <button className="ab-btn-light" data-bs-toggle="modal" data-bs-target="#trialModal">
                <i className="fa-solid fa-calendar-check"></i> <span>Book Free Demo &amp; Consultation</span>
              </button>
              <Link href="/contact-us" className="ab-btn-ghost">
                <i className="fa-solid fa-envelope"></i> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
