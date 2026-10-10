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

        /* Page-specific */
        .rag-feature-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; margin-top: 48px; }
        .rag-feature-card {
          background: #fff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 32px;
          transition: all 0.3s ease;
        }
        .rag-feature-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(41,31,188,0.12); border-color: rgba(41,31,188,0.2); }
        .rag-feat-icon {
          width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center;
          justify-content: center; font-size: 1.4rem; margin-bottom: 18px;
          background: rgba(41,31,188,0.08); color: #291fbc;
        }
        .rag-feature-card h4 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 1.05rem; font-weight: 700; color: #1e1b4b; margin-bottom: 10px; }
        .rag-feature-card p { font-size: 0.9rem; color: #64748b; line-height: 1.7; margin: 0; }

        .rag-how-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; margin-top: 48px; }
        .rag-how-card { text-align: center; position: relative; }
        .rag-how-num {
          width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 16px;
          background: linear-gradient(135deg, #291fbc, #06b6d4); color: #fff;
          font-family: 'Plus Jakarta Sans',sans-serif; font-size: 1.1rem; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 24px rgba(41,31,188,0.3);
        }
        .rag-how-title { font-family: 'Plus Jakarta Sans',sans-serif; font-weight: 700; color: #1e1b4b; margin-bottom: 8px; font-size: 1rem; }
        .rag-how-desc { font-size: 0.875rem; color: #64748b; line-height: 1.65; }

        .usecase-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 20px; margin-top: 40px; }
        .usecase-card {
          background: #f8fafc; border-left: 4px solid #06b6d4; border-radius: 0 12px 12px 0;
          padding: 24px; transition: all 0.25s ease;
        }
        .usecase-card:hover { background: #fff; box-shadow: 0 8px 24px rgba(41,31,188,0.08); }
        .usecase-card h4 { font-size: 1rem; font-weight: 700; color: #1e1b4b; margin-bottom: 8px; }
        .usecase-card p { font-size: 0.875rem; color: #64748b; line-height: 1.65; margin: 0; }

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

        .doc-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(41,31,188,0.07); border: 1px solid rgba(41,31,188,0.12);
          color: #291fbc; padding: 6px 14px; border-radius: 50px;
          font-size: 0.82rem; font-weight: 600; margin: 4px;
        }

        @media (max-width: 1023px) { .rag-feature-grid, .rag-how-grid { grid-template-columns: repeat(2,1fr); } .metrics-bar { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 767px) { .usecase-grid, .rag-feature-grid { grid-template-columns: 1fr; } .rag-how-grid { grid-template-columns: 1fr; } .metrics-bar { grid-template-columns: 1fr; } .ct-cta-banner { padding: 48px 24px; } }
      `}</style>

      {/* ── Modern Inner Page Hero ── */}
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #291fbc 55%, #0e7490 100%)', padding: '90px 0 70px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)', top: '-200px', right: '-100px', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', padding: '6px 16px', borderRadius: '50px', marginBottom: '20px' }}>
                <i className="fa-solid fa-brain"></i> RAG & Knowledge AI
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                RAG Knowledge Base & Enterprise AI Search
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Transform thousands of internal documents, PDFs, manuals, and databases into an intelligent, instantly searchable AI knowledge system. Eliminate information silos and empower your teams to find answers in seconds.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button className="ct-btn ct-btn-primary ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal">
                  <i className="fa-solid fa-calendar-check"></i> Book Free Demo
                </button>
                <a href="/contact-us" className="ct-btn ct-btn-ghost">
                  <i className="fa-solid fa-envelope"></i> Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-flex justify-content-center">
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', color: 'rgba(255,255,255,0.4)' }}>
                <i className="fa-solid fa-brain"></i>
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
              { val: '10x', lbl: 'Faster Information Retrieval' },
              { val: '95%', lbl: 'Answer Accuracy Rate' },
              { val: '∞', lbl: 'Documents Supported' },
              { val: '24/7', lbl: 'Always Available AI Search' },
            ].map((m) => (
              <div key={m.lbl} className="metric-item">
                <div className="metric-val">{m.val}</div>
                <div className="metric-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What is RAG ── */}
      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="ct-section-eyebrow"><i className="fa-solid fa-circle-info"></i> What is RAG</span>
              <h2 className="page-section-h2">Retrieval-Augmented Generation — Enterprise AI That Knows Your Business</h2>
              <p className="page-section-p">
                RAG (Retrieval-Augmented Generation) is the gold standard for enterprise AI knowledge systems. Instead of relying on a generic LLM's training data, RAG connects AI to your specific documents, policies, and databases — so answers are always accurate, current, and traceable to real sources.
              </p>
              <p className="page-section-p" style={{ marginTop: '16px' }}>
                ChittorTech builds private, secure RAG systems deployable on your own infrastructure — zero data leakage, 100% control.
              </p>
              <div style={{ marginTop: '28px' }}>
                <strong style={{ display: 'block', color: '#1e1b4b', marginBottom: '12px', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Supported Document Types:</strong>
                <div>
                  {['PDF', 'Word / DOCX', 'Excel / XLSX', 'PowerPoint', 'Web Pages', 'Confluence', 'Notion', 'SharePoint', 'Google Drive', 'SQL Databases', 'APIs', 'Emails'].map((d) => (
                    <span key={d} className="doc-pill"><i className="fa-solid fa-file"></i> {d}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #291fbc 60%, #0e7490 100%)', borderRadius: '20px', padding: '48px', position: 'relative', overflow: 'hidden' }}>
                <i className="fa-solid fa-brain" style={{ fontSize: '6rem', color: 'rgba(255,255,255,0.1)', position: 'absolute', bottom: '20px', right: '30px' }}></i>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  {[
                    { step: '01', label: 'Ingest', desc: 'Upload your documents, PDFs, databases, and data sources' },
                    { step: '02', label: 'Embed', desc: 'AI converts content into semantic vector embeddings' },
                    { step: '03', label: 'Retrieve', desc: 'User query retrieves the most relevant document chunks' },
                    { step: '04', label: 'Generate', desc: 'LLM synthesizes a precise, cited answer from retrieved context' },
                  ].map((s) => (
                    <div key={s.step} style={{ display: 'flex', gap: '14px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.78rem', flexShrink: 0 }}>{s.step}</div>
                      <div>
                        <strong style={{ color: '#fff', display: 'block', marginBottom: '2px' }}>{s.label}</strong>
                        <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem' }}>{s.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ background: '#f8fafc', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="ct-section-eyebrow"><i className="fa-solid fa-sparkles"></i> Platform Features</span>
            <h2 className="page-section-h2">Everything Your Enterprise Knowledge System Needs</h2>
            <p className="page-section-p" style={{ margin: '0 auto' }}>
              Production-ready RAG systems with enterprise security, source attribution, and seamless integrations.
            </p>
          </div>
          <div className="rag-feature-grid">
            {[
              { icon: 'fa-magnifying-glass', title: 'Instant Semantic Search', desc: 'Find answers across thousands of documents in milliseconds using vector similarity search — no keyword matching, pure meaning-based retrieval.' },
              { icon: 'fa-quote-right', title: 'Source Attribution & Citations', desc: 'Every AI answer includes links to the exact source documents and page numbers — building trust and enabling verification.' },
              { icon: 'fa-lock', title: 'Role-Based Access Control', desc: 'Granular permissions ensure employees only access documents they\'re authorized for — HR policies for HR, financial data for finance.' },
              { icon: 'fa-rotate', title: 'Real-Time Document Sync', desc: 'Connect to Google Drive, Confluence, SharePoint, or any file system for automatic syncing — knowledge base always stays current.' },
              { icon: 'fa-language', title: 'Multi-Language Support', desc: 'Query in English, Hindi, or any regional language. Our RAG systems support multilingual document ingestion and cross-language retrieval.' },
              { icon: 'fa-server', title: 'Private Cloud Deployment', desc: 'Full on-premise or private VPC deployment available. Your documents and queries never touch external AI services without your consent.' },
              { icon: 'fa-chart-bar', title: 'Usage Analytics & Insights', desc: 'Track what employees are searching for, identify knowledge gaps, and see which documents get the most queries — continuously improve your KB.' },
              { icon: 'fa-comments', title: 'Conversational AI Interface', desc: 'Natural chat interface with memory — ask follow-up questions, drill deeper, and get contextual answers across a full conversation thread.' },
              { icon: 'fa-plug', title: 'API & Webhook Integration', desc: 'Embed RAG-powered search into your existing apps, Slack bots, websites, or custom portals through a clean REST API.' },
            ].map((f) => (
              <div key={f.title} className="rag-feature-card">
                <div className="rag-feat-icon"><i className={`fa-solid ${f.icon}`}></i></div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="ct-section-eyebrow"><i className="fa-solid fa-building"></i> Use Cases</span>
            <h2 className="page-section-h2">Who Uses RAG Knowledge Base AI?</h2>
            <p className="page-section-p" style={{ margin: '0 auto' }}>
              Any organization with more documents than people can read deploys RAG to unlock its institutional knowledge.
            </p>
          </div>
          <div className="usecase-grid">
            {[
              { title: 'Internal Employee Helpdesk AI', desc: 'Let employees ask HR policies, IT procedures, benefits information, and onboarding FAQs in natural language — reducing HR ticket volume by 60%+.' },
              { title: 'Customer Support Knowledge Base', desc: 'Power your support agents or public-facing chatbot with your entire product documentation, so every answer is instant and accurate.' },
              { title: 'Legal & Compliance Document Search', desc: 'Search contracts, regulations, case law, and internal compliance policies in seconds — reduce legal research time from hours to minutes.' },
              { title: 'Technical Documentation Assistant', desc: 'Let developers and engineers query API docs, architecture documents, runbooks, and error logs through conversational AI.' },
              { title: 'Medical & Clinical Knowledge Search', desc: 'Hospital staff can query clinical protocols, drug interactions, treatment guidelines, and patient histories through a secure AI assistant.' },
              { title: 'Sales Intelligence & Product Knowledge', desc: 'Equip your sales team with AI-powered access to case studies, competitor analysis, pricing sheets, and product specs during live demos.' },
              { title: 'Manufacturing Process Documentation', desc: 'Maintenance engineers can ask detailed questions about equipment manuals, safety procedures, and troubleshooting guides on the shop floor.' },
              { title: 'Financial Research & Report Search', desc: 'Let analysts query thousands of financial reports, market research documents, and regulatory filings through natural language search.' },
            ].map((u) => (
              <div key={u.title} className="usecase-card">
                <h4>{u.title}</h4>
                <p>{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Build It ── */}
      <section style={{ background: '#f8fafc', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="ct-section-eyebrow"><i className="fa-solid fa-gears"></i> Deployment Process</span>
            <h2 className="page-section-h2">Your RAG System Live in 4 Steps</h2>
          </div>
          <div className="rag-how-grid">
            {[
              { num: '01', title: 'Document Audit & Ingestion', desc: 'We audit your existing documents, define the scope of the knowledge base, and build the ingestion pipeline for all data sources.' },
              { num: '02', title: 'Chunking, Embedding & Indexing', desc: 'Documents are semantically chunked, converted to vector embeddings, and indexed in a high-performance vector database (Pinecone, Weaviate, or pgvector).' },
              { num: '03', title: 'RAG Pipeline & LLM Integration', desc: 'We build the retrieval pipeline, connect to the chosen LLM (GPT-4, Claude, Gemini, or local open-source), and implement prompt engineering for accuracy.' },
              { num: '04', title: 'UI, Security & Deployment', desc: 'A polished chat interface with RBAC, audit logs, and your branding — deployed on your cloud infrastructure or on-premise servers.' },
            ].map((s) => (
              <div key={s.num} className="rag-how-card">
                <div className="rag-how-num">{s.num}</div>
                <div className="rag-how-title">{s.title}</div>
                <p className="rag-how-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="ct-section-eyebrow"><i className="fa-solid fa-circle-question"></i> FAQs</span>
            <h2 className="page-section-h2">Common Questions About RAG Knowledge Base Systems</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqRag">
                {[
                  {
                    id: 'rag1',
                    q: 'What makes RAG different from a regular chatbot or search engine?',
                    a: 'A regular search engine finds documents; RAG reads them and synthesizes a direct answer. A generic chatbot uses its training data which may be outdated. RAG combines the best of both — it retrieves the most relevant sections from your actual documents and uses an LLM to generate a precise, cited answer in natural language.',
                  },
                  {
                    id: 'rag2',
                    q: 'How many documents can the system handle?',
                    a: 'Our RAG systems are built to scale — we have deployed knowledge bases handling millions of document pages with sub-second retrieval times. The system scales horizontally on cloud infrastructure, so document volume is not a limiting factor.',
                  },
                  {
                    id: 'rag3',
                    q: 'Is our proprietary data safe? Can this be deployed on-premise?',
                    a: 'Absolutely. We offer complete on-premise and private VPC deployment. All document ingestion, embedding, storage, and retrieval happens entirely within your own infrastructure. We never send your documents to external APIs unless you explicitly choose a cloud-hosted LLM.',
                  },
                  {
                    id: 'rag4',
                    q: 'Can the knowledge base be kept up to date automatically?',
                    a: 'Yes. We build automatic sync pipelines that continuously monitor your connected document sources (Google Drive, Confluence, SharePoint, etc.) and re-index new or modified documents. Your knowledge base stays current without manual intervention.',
                  },
                  {
                    id: 'rag5',
                    q: 'How long does it take to deploy a RAG knowledge base?',
                    a: 'A standard knowledge base deployment — document ingestion, RAG pipeline, and a polished chat interface — typically takes 2–4 weeks. Complex deployments with custom RBAC, multi-source integration, and private cloud setup may take 6–8 weeks.',
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
                    <div id={faq.id} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#faqRag">
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
            <h2>Ready to Build Your Enterprise Knowledge Base?</h2>
            <p>Book a free demo to see how ChittorTech can transform your documents into an intelligent, searchable AI assistant in weeks — not months.</p>
            <div className="ct-cta-btns">
              <button
                className="ct-btn ct-btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#trialModal"
                style={{ background: '#fff', color: '#291fbc', fontWeight: 700 }}
              >
                <i className="fa-solid fa-calendar-check"></i> Book Free Demo
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
