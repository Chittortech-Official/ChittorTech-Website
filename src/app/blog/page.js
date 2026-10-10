"use client";
import React from "react";
import Link from "next/link";
import "../../../public/assets/css/premium-products.css";
import BLOG_POSTS from "@/data/blogPosts.json";

export default function Page() {
  return (
    <>

      <style>{`
        /* ChittorTech Design System — Inner Page Overrides */
        body { font-family: 'Inter', 'Segoe UI', sans-serif !important; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Plus Jakarta Sans', 'Inter', sans-serif !important; }
        
        /* Section spacing */
        section { position: relative; }
        
        /* Upgrade existing button styles */
        .schedule-btn, .btn-hero-primary, a.schedule-btn {
          display: inline-flex !important;
          align-items: center !important;
          gap: 8px !important;
          padding: 12px 28px !important;
          background: linear-gradient(135deg, #291fbc, #3b82f6) !important;
          color: #fff !important;
          border-radius: 10px !important;
          font-weight: 700 !important;
          font-family: 'Inter', sans-serif !important;
          font-size: 0.95rem !important;
          border: none !important;
          text-decoration: none !important;
          transition: all 0.25s ease !important;
          box-shadow: 0 4px 16px rgba(41,31,188,0.3) !important;
        }
        .schedule-btn:hover, a.schedule-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 24px rgba(41,31,188,0.4) !important;
          color: #fff !important;
        }

        /* Upgrade section titles */
        .section-title, .main-title, .sec-title {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-weight: 800 !important;
          color: #1e1b4b !important;
        }

        /* Upgrade cards */
        .feature-card, .item-wrap, .why-item, .benfit-item {
          transition: all 0.3s ease !important;
          border-radius: 16px !important;
        }
        .feature-card:hover, .item-wrap:hover, .why-item:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 20px 50px rgba(41,31,188,0.1) !important;
        }

        /* Upgrade CTA sections */
        .cta-sec, .cta-section {
          background: linear-gradient(135deg, #1e1b4b 0%, #291fbc 60%, #0e7490 100%) !important;
        }
        
        /* Breadcrumb modernization */
        .breadcrumb-item.active { color: #06b6d4 !important; }
        
        /* FAQ accordion */
        .accordion-button:not(.collapsed) {
          color: #291fbc !important;
          background-color: rgba(41,31,188,0.05) !important;
          box-shadow: none !important;
        }
        .accordion-button:focus { box-shadow: 0 0 0 3px rgba(41,31,188,0.2) !important; }
        
        /* Tab modernization */
        .nav-tabs .nav-link.active {
          color: #291fbc !important;
          border-bottom-color: #291fbc !important;
        }
      `}</style>

      {/* ── Modern Inner Page Hero ── */}
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #291fbc 55%, #0e7490 100%)', padding: '90px 0 70px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)', top: '-200px', right: '-100px', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', padding: '6px 16px', borderRadius: '50px', marginBottom: '20px' }}>
                <i className={`fa-solid fa-newspaper`}></i> Blog
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                ChittorTech Blog & Resources
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Insights, guides, and industry news to help your business grow smarter.
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
                <i className={`fa-solid fa-newspaper`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* header */}

{/* header */}

 
<style>{`
.new-blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin: 40px auto;
  max-width: 1200px;
  justify-content: center;
  padding: 0 20px;
}

.new-blog-card {
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.new-blog-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
}

.new-blog-content {
  padding: 22px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.new-blog-content h3 {
  font-size: 24px;
  margin-bottom: 12px;
  color: #1a1a1a;
  font-weight: 700;
}

      {/* ── Blog Grid Section ── */}

.new-blog-content p {
  font-size: 16px;
  color: #444;
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 20px;
}

.new-read-more-btn {
  margin-top: auto;
  align-self: flex-start;
  background: linear-gradient(135deg, #0ca678, #089f6d);
  color: #fff;
  padding: 10px 22px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.new-read-more-btn:hover {
  opacity: 0.85;
}

@media (max-width: 768px) {
  .new-blog-content h3 {
    font-size: 20px;
  }
  .new-blog-content p {
    font-size: 14px;
  }
  .new-read-more-btn {
    padding: 8px 18px;
    font-size: 14px;
  }
}
`}</style>


<div className="new-blog-grid">
  {BLOG_POSTS.map((post, idx) => (
    <div className="new-blog-card" key={idx} style={{ position: "relative" }}>
      {post.trending && (
        <div style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          background: "linear-gradient(135deg, #f59e0b, #ef4444)",
          color: "#fff",
          padding: "6px 12px",
          borderRadius: "20px",
          fontSize: "12px",
          fontWeight: "bold",
          zIndex: 10,
          boxShadow: "0 4px 10px rgba(239, 68, 68, 0.4)"
        }}>
          🔥 Trending
        </div>
      )}
      <div style={{
        width: "100%",
        height: "200px",
        background: "#eee",
        borderTopLeftRadius: "18px",
        borderTopRightRadius: "18px",
        position: "relative",
        overflow: "hidden"
      }}>
        <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div className="new-blog-content">
        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "10px", color: "#0f172a" }}>
          {post.title}
        </h3>
        <p style={{ fontSize: "0.92rem", color: "#64748b", lineHeight: "1.6", flexGrow: 1, marginBottom: "20px" }}>
          {post.desc}
        </p>
        <Link href={post.link} className="new-read-more-btn">
          Read More
        </Link>
      </div>
    </div>
  ))}
</div>

{/*  footer */}
    </>
  );
}
