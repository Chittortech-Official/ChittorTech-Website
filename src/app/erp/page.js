"use client";
import React from "react";
import "../../../public/assets/css/premium-products.css";

export default function Page() {
  return (
    <>
      <style>{`
        /* ChittorTech Design System — Inner Page Overrides */
        body { font-family: 'Inter', 'Segoe UI', sans-serif !important; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Plus Jakarta Sans', 'Inter', sans-serif !important; }
        section { position: relative; }
        .schedule-btn, .btn-hero-primary, a.schedule-btn {
          display: inline-flex !important; align-items: center !important; gap: 8px !important;
          padding: 12px 28px !important;
          background: linear-gradient(135deg, #291fbc, #3b82f6) !important;
          color: #fff !important; border-radius: 10px !important; font-weight: 700 !important;
          font-family: 'Inter', sans-serif !important; font-size: 0.95rem !important;
          border: none !important; text-decoration: none !important;
          transition: all 0.25s ease !important;
          box-shadow: 0 4px 16px rgba(41,31,188,0.3) !important;
        }
        .schedule-btn:hover, a.schedule-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 24px rgba(41,31,188,0.4) !important; color: #fff !important;
        }
        .section-title, .main-title, .sec-title {
          font-family: 'Plus Jakarta Sans', sans-serif !important; font-weight: 800 !important;
          color: #1e1b4b !important;
        }
        .feature-card, .item-wrap, .why-item, .benfit-item {
          transition: all 0.3s ease !important; border-radius: 16px !important;
        }
        .feature-card:hover, .item-wrap:hover, .why-item:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 20px 50px rgba(41,31,188,0.1) !important;
        }
        .cta-sec, .cta-section {
          background: linear-gradient(135deg, #1e1b4b 0%, #291fbc 60%, #0e7490 100%) !important;
        }
        .breadcrumb-item.active { color: #06b6d4 !important; }
        .accordion-button:not(.collapsed) {
          color: #291fbc !important; background-color: rgba(41,31,188,0.05) !important;
          box-shadow: none !important;
        }
        .accordion-button:focus { box-shadow: 0 0 0 3px rgba(41,31,188,0.2) !important; }
        .nav-tabs .nav-link.active {
          color: #291fbc !important; border-bottom-color: #291fbc !important;
        }

        /* Page-specific styles */
        .ai-wf-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; margin-top: 48px; }
        .ai-wf-card {
          background: #fff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 32px;
          transition: all 0.3s ease;
        }
        .ai-wf-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(41,31,188,0.12); border-color: rgba(41,31,188,0.2); }
        .ai-wf-icon {
          width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center;
          justify-content: center; font-size: 1.4rem; margin-bottom: 18px;
          background: rgba(41,31,188,0.08); color: #291fbc;
        }
        .ai-wf-card h4 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 1.05rem; font-weight: 700; color: #1e1b4b; margin-bottom: 10px; }
        .ai-wf-card p { font-size: 0.9rem; color: #64748b; line-height: 1.7; margin: 0; }

        .usecase-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 20px; margin-top: 40px; }
        .usecase-card {
          background: #f8fafc; border-left: 4px solid #291fbc; border-radius: 0 12px 12px 0;
          padding: 24px; transition: all 0.25s ease;
        }
        .usecase-card:hover { background: #fff; box-shadow: 0 8px 24px rgba(41,31,188,0.08); }
        .usecase-card h4 { font-size: 1rem; font-weight: 700; color: #1e1b4b; margin-bottom: 8px; }
        .usecase-card p { font-size: 0.875rem; color: #64748b; line-height: 1.65; margin: 0; }

        .steps-wrap { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; margin-top: 48px; position: relative; }
        .step-card { text-align: center; }
        .step-num {
          width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 16px;
          background: linear-gradient(135deg, #291fbc, #3b82f6); color: #fff;
          font-family: 'Plus Jakarta Sans',sans-serif; font-size: 1.1rem; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 24px rgba(41,31,188,0.3);
        }
        .step-title { font-family: 'Plus Jakarta Sans',sans-serif; font-weight: 700; color: #1e1b4b; margin-bottom: 8px; }
        .step-desc { font-size: 0.875rem; color: #64748b; line-height: 1.65; }

        .metrics-bar { display: grid; grid-template-columns: repeat(4,1fr); gap: 0; background: #fff; border: 1px solid #e2e8f0; border-radius: 18px; overflow: hidden; margin-top: 48px; }
        .metric-item { padding: 36px 24px; text-align: center; border-right: 1px solid #f1f5f9; }
        .metric-item:last-child { border-right: none; }
        .metric-val { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 2.2rem; font-weight: 900; background: linear-gradient(135deg,#291fbc,#06b6d4); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; line-height:1; }
        .metric-lbl { font-size: 0.82rem; color: #64748b; margin-top: 6px; font-weight: 500; }

        .ct-section-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(41,31,188,0.08); border: 1px solid rgba(41,31,188,0.15);
          color: #291fbc; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 1.5px; padding: 6px 14px; border-radius: 50px; margin-bottom: 16px;
        }
        .page-section-h2 {
          font-family: 'Plus Jakarta Sans',sans-serif; font-size: clamp(1.7rem,3vw,2.4rem);
          font-weight: 800; color: #1e1b4b; margin-bottom: 12px;
        }
        .page-section-p { font-size: 1rem; color: #64748b; max-width: 640px; line-height: 1.75; }

        .ct-cta-banner {
          background: linear-gradient(135deg, #1e1b4b 0%, #291fbc 60%, #0e7490 100%);
          border-radius: 24px; padding: 70px 60px; text-align: center; position: relative; overflow: hidden;
        }
        .ct-cta-banner h2 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: clamp(1.6rem,3vw,2.4rem); font-weight: 900; color: #fff; margin-bottom: 14px; }
        .ct-cta-banner p { font-size: 1rem; color: rgba(255,255,255,0.75); margin-bottom: 32px; max-width: 600px; margin-left: auto; margin-right: auto; }
        .ct-cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

        @media (max-width: 1023px) { .ai-wf-grid, .steps-wrap { grid-template-columns: repeat(2,1fr); } .metrics-bar { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 767px) { .usecase-grid, .ai-wf-grid { grid-template-columns: 1fr; } .steps-wrap { grid-template-columns: 1fr; } .metrics-bar { grid-template-columns: 1fr; } .ct-cta-banner { padding: 48px 24px; } }
      `}</style>

      {/* ── Modern Inner Page Hero ── */}
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #291fbc 55%, #0e7490 100%)', padding: '90px 0 70px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)', top: '-200px', right: '-100px', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', padding: '6px 16px', borderRadius: '50px', marginBottom: '20px' }}>
                <i className={`fa-solid fa-diagram-project`}></i> AI Automation Platform
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Enterprise AI Workflow Automation
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Automate complex business processes, multi-step operations, and data pipelines with autonomous AI agents that work 24/7 — reducing costs by up to 70% and eliminating manual errors.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button className="ct-btn ct-btn-primary ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal">
                  <i className="fa-solid fa-calendar-check"></i> Book Free Consultation
                </button>
                <a href="/contact-us" className="ct-btn ct-btn-ghost">
                  <i className="fa-solid fa-envelope"></i> Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-flex justify-content-center">
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', color: 'rgba(255,255,255,0.4)' }}>
                <i className={`fa-solid fa-diagram-project`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Metrics Bar ── */}
      <section style={{ background: '#f8fafc', padding: '60px 0' }}>
        <div className="container">
          <div className="metrics-bar">
            {[
              { val: '70%', lbl: 'Average Cost Reduction' },
              { val: '10x', lbl: 'Faster Process Execution' },
              { val: '99.9%', lbl: 'Workflow Accuracy' },
              { val: '24/7', lbl: 'Autonomous Operation' },
            ].map((m) => (
              <div key={m.lbl} className="metric-item">
                <div className="metric-val">{m.val}</div>
                <div className="metric-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Build ── */}
      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="ct-section-eyebrow"><i className="fa-solid fa-robot"></i> AI Automation Services</span>
            <h2 className="page-section-h2">Intelligent Automation for Every Business Process</h2>
            <p className="page-section-p" style={{ margin: '0 auto' }}>
              ChittorTech engineers multi-step, autonomous AI workflows that connect your data, tools, and teams — eliminating bottlenecks and accelerating decisions.
            </p>
          </div>
          <div className="ai-wf-grid">
            {[
              { icon: 'fa-file-lines', title: 'Document Processing & OCR AI', desc: 'Automatically extract, classify, and validate data from invoices, contracts, medical records, and forms using AI-powered OCR and NLP pipelines.' },
              { icon: 'fa-robot', title: 'Autonomous AI Agents', desc: 'Deploy multi-step AI agents that browse the web, query databases, call APIs, write emails, and make decisions — completely hands-free.' },
              { icon: 'fa-network-wired', title: 'Business Process Automation', desc: 'Map and automate complex workflows spanning multiple departments, systems, and approval chains with no-code to code-level flexibility.' },
              { icon: 'fa-chart-line', title: 'AI Predictive Analytics', desc: 'Forecast demand, detect anomalies, score leads, and surface hidden business insights using custom ML models trained on your data.' },
              { icon: 'fa-code-branch', title: 'API & System Integration', desc: 'Connect your databases, business systems, and third-party tools into unified AI pipelines — eliminating data silos and manual data entry.' },
              { icon: 'fa-bell', title: 'Intelligent Alerting & Monitoring', desc: 'Real-time AI monitoring systems that detect issues, trigger alerts, and initiate automated recovery workflows without human intervention.' },
            ].map((c) => (
              <div key={c.title} className="ai-wf-card">
                <div className="ai-wf-icon"><i className={`fa-solid ${c.icon}`}></i></div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section style={{ background: '#f8fafc', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '0' }}>
            <span className="ct-section-eyebrow"><i className="fa-solid fa-building"></i> Industry Use Cases</span>
            <h2 className="page-section-h2">AI Workflows Deployed Across Industries</h2>
            <p className="page-section-p" style={{ margin: '0 auto 0' }}>
              From healthcare to logistics, our AI automation systems are production-tested across diverse verticals.
            </p>
          </div>
          <div className="usecase-grid">
            {[
              { title: 'Healthcare: Patient Document Processing', desc: 'Auto-extract patient information from lab reports, discharge summaries, and prescriptions. Trigger appointment reminders, insurance claims, and compliance workflows automatically.' },
              { title: 'Finance: AI-Powered Invoice Matching', desc: 'Match purchase orders to invoices, flag discrepancies, route approvals, and post to accounting — reducing invoice processing time from days to minutes.' },
              { title: 'E-Commerce: Order & Fulfillment Automation', desc: 'Automate order routing, inventory updates, shipping label generation, customer notifications, and return processing with zero manual touchpoints.' },
              { title: 'HR & Recruitment: AI Resume Screening', desc: 'Parse and rank hundreds of resumes, schedule interviews, send personalized outreach, and update your ATS — all triggered automatically from a job posting.' },
              { title: 'Legal: Contract Review & Summarization', desc: 'Extract key clauses, flag compliance risks, compare against templates, and generate executive summaries of legal documents in seconds.' },
              { title: 'Manufacturing: Quality Control AI', desc: 'Connect computer vision models to production lines to automatically detect defects, flag anomalies, halt processes, and generate quality reports in real time.' },
              { title: 'Customer Support: Ticket Automation', desc: 'Auto-classify support tickets, suggest responses from your knowledge base, escalate urgent issues, and close resolved tickets without agent involvement.' },
              { title: 'Marketing: AI Content & Campaign Workflows', desc: 'Generate personalized email sequences, social posts, and ad copy, A/B test variants, and publish to multiple channels through a single AI workflow.' },
            ].map((u) => (
              <div key={u.title} className="usecase-card">
                <h4>{u.title}</h4>
                <p>{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="ct-section-eyebrow"><i className="fa-solid fa-map-signs"></i> Our Process</span>
            <h2 className="page-section-h2">How We Build Your AI Workflow</h2>
            <p className="page-section-p" style={{ margin: '0 auto' }}>
              A structured 4-step process from workflow discovery to full production deployment.
            </p>
          </div>
          <div className="steps-wrap">
            {[
              { num: '01', title: 'Process Discovery & Audit', desc: 'We analyze your existing workflows, identify high-ROI automation opportunities, and map data flows across your systems.' },
              { num: '02', title: 'Architecture & Blueprint', desc: 'Our engineers design the AI workflow architecture, select the right models and tools, and define integration touchpoints.' },
              { num: '03', title: 'Build, Train & Test', desc: 'We develop and fine-tune the AI pipeline, integrate with your systems, and run extensive end-to-end testing with real data.' },
              { num: '04', title: 'Deploy & Monitor', desc: 'Production deployment on cloud infrastructure with real-time monitoring, alerting, and continuous optimization included.' },
            ].map((s) => (
              <div key={s.num} className="step-card">
                <div className="step-num">{s.num}</div>
                <div className="step-title">{s.title}</div>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why ChittorTech ── */}
      <section style={{ background: '#f8fafc', padding: '100px 0' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="ct-section-eyebrow"><i className="fa-solid fa-star"></i> Why ChittorTech</span>
              <h2 className="page-section-h2">Enterprise-Grade AI Automation You Can Trust</h2>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px' }}>
                {[
                  ['fa-shield-halved', '100% Data Privacy', 'Local deployment and private cloud options available — your data never leaves your infrastructure.'],
                  ['fa-bolt', 'Rapid Delivery', 'From discovery to working prototype in as little as 2 weeks with our agile engineering process.'],
                  ['fa-headset', 'Dedicated Support', 'Direct access to the engineers who built your system — no ticket queues or generic support.'],
                  ['fa-cloud', 'Cloud-Native Scale', 'Architected to handle millions of events daily on AWS, GCP, and Azure without performance degradation.'],
                  ['fa-plug', 'Seamless Integration', 'Works with your existing stack — Salesforce, SAP, custom databases, REST APIs, and everything in between.'],
                ].map(([icon, title, desc]) => (
                  <li key={title} style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(41,31,188,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#291fbc', fontSize: '1rem', flexShrink: 0 }}>
                      <i className={`fa-solid ${icon}`}></i>
                    </div>
                    <div>
                      <strong style={{ display: 'block', color: '#1e1b4b', marginBottom: '4px', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{title}</strong>
                      <span style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.65 }}>{desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <div style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #291fbc 60%, #0e7490 100%)', borderRadius: '20px', padding: '48px', position: 'relative', overflow: 'hidden' }}>
                <i className="fa-solid fa-diagram-project" style={{ fontSize: '6rem', color: 'rgba(255,255,255,0.1)', position: 'absolute', bottom: '20px', right: '30px' }}></i>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', position: 'relative', zIndex: 2 }}>
                  {[
                    { val: '3 Weeks', lbl: 'Avg. Time to Deploy' },
                    { val: '70%', lbl: 'Cost Reduction' },
                    { val: '10x', lbl: 'Speed Improvement' },
                    { val: '250+', lbl: 'Projects Delivered' },
                  ].map((m) => (
                    <div key={m.lbl} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                      <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '1.6rem', fontWeight: 800, color: '#fff' }}>{m.val}</div>
                      <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.65)', marginTop: '4px', fontWeight: 500 }}>{m.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="ct-section-eyebrow"><i className="fa-solid fa-circle-question"></i> FAQs</span>
            <h2 className="page-section-h2">Common Questions About AI Workflow Automation</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqWorkflow">
                {[
                  {
                    id: 'wf1',
                    q: 'What types of workflows can ChittorTech automate?',
                    a: 'We automate virtually any repeatable business process — from document extraction and invoice processing to customer onboarding, HR workflows, quality control, and multi-step AI agent pipelines. If it involves data moving between systems or people, we can automate it.',
                  },
                  {
                    id: 'wf2',
                    q: 'How long does it take to deploy an AI workflow?',
                    a: 'Simple workflows can be live within 1–2 weeks. Complex multi-system enterprise automations typically take 4–8 weeks depending on integration complexity and data volume. We always start with a rapid prototype so you see results early.',
                  },
                  {
                    id: 'wf3',
                    q: 'Is my data safe? Can we deploy on-premise?',
                    a: 'Yes. We offer full on-premise and private cloud deployment options where all data processing happens within your own infrastructure. We never require your proprietary data to leave your systems.',
                  },
                  {
                    id: 'wf4',
                    q: 'What systems can ChittorTech integrate with?',
                    a: 'We integrate with any system that has an API — including Salesforce, SAP, Microsoft 365, Google Workspace, Zoho, custom databases (PostgreSQL, MySQL, MongoDB), WhatsApp Business API, Tally, and hundreds of other enterprise tools.',
                  },
                  {
                    id: 'wf5',
                    q: 'What is the ROI of AI workflow automation?',
                    a: 'Our clients typically see 60–80% reduction in processing time, 70%+ cost savings on manual labor, and ROI within 3–6 months of deployment. We provide detailed ROI projections during our free initial consultation.',
                  },
                ].map((faq, i) => (
                  <div className="accordion-item" key={faq.id} style={{ borderRadius: '12px', marginBottom: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${faq.id}`}
                        aria-expanded={i === 0}
                        aria-controls={faq.id}
                        style={{ fontWeight: 600, fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                      >
                        {faq.q}
                      </button>
                    </h2>
                    <div id={faq.id} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#faqWorkflow">
                      <div className="accordion-body" style={{ color: '#64748b', lineHeight: 1.75 }}>{faq.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 0 100px', background: '#f8fafc' }}>
        <div className="container">
          <div className="ct-cta-banner">
            <h2>Ready to Automate Your Business Workflows?</h2>
            <p>Book a free 30-minute consultation with ChittorTech's AI engineers to identify your highest-ROI automation opportunities.</p>
            <div className="ct-cta-btns">
              <button
                className="ct-btn ct-btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#trialModal"
                style={{ background: '#fff', color: '#291fbc', fontWeight: 700 }}
              >
                <i className="fa-solid fa-calendar-check"></i> Book Free Consultation
              </button>
              <a href="/contact-us" className="ct-btn ct-btn-ghost ct-btn-lg">
                <i className="fa-solid fa-envelope"></i> Contact Engineering Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
