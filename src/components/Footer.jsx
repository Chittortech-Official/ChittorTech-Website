"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname && pathname.startsWith("/admin")) {
    return null;
  }
  return (
    <>
      <style>{`
        /* ─── Footer Wrapper ─── */
        .ct-footer-wrap {
          background: #f8fafc;
          color: #475569;
          position: relative;
          overflow: hidden;
          border-top: 1px solid #e2e8f0;
        }
        .ct-footer-wrap::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #291fbc, #06b6d4, #291fbc);
          background-size: 200% 100%;
          animation: ct-footer-shimmer 4s linear infinite;
        }
        @keyframes ct-footer-shimmer {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        .ct-footer-wrap::after {
          content: '';
          position: absolute;
          top: 0; left: -10%; right: -10%; bottom: 0;
          background:
            radial-gradient(ellipse 50% 30% at 10% 0%, rgba(41,31,188,0.04) 0%, transparent 70%),
            radial-gradient(ellipse 40% 25% at 90% 0%, rgba(6,182,212,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ─── CTA Strip ─── */
        .ct-footer-cta {
          position: relative; z-index: 1;
          border-bottom: 1px solid #e2e8f0;
          padding: 48px 0;
          background: linear-gradient(135deg, #eff6ff 0%, #f0fdfe 100%);
        }
        .ct-footer-cta-inner {
          display: flex; align-items: center; justify-content: space-between;
          gap: 24px; flex-wrap: wrap;
        }
        .ct-footer-cta-text h3 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.5rem; font-weight: 800; color: #0f172a;
          margin: 0 0 6px;
        }
        .ct-footer-cta-text p {
          font-size: 0.9rem; color: #64748b; margin: 0;
        }
        .ct-footer-cta-btns {
          display: flex; gap: 12px; flex-wrap: wrap; flex-shrink: 0;
        }
        .ct-footer-cta-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 24px; border-radius: 50px;
          background: linear-gradient(135deg, #291fbc, #06b6d4);
          color: #fff !important; font-weight: 700; font-size: 0.875rem;
          text-decoration: none; border: none; cursor: pointer;
          box-shadow: 0 8px 24px rgba(41,31,188,0.25);
          transition: all 0.25s ease;
        }
        .ct-footer-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(41,31,188,0.38);
          color: #fff !important;
        }
        .ct-footer-cta-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 24px; border-radius: 50px;
          background: transparent; color: #374151 !important;
          font-weight: 600; font-size: 0.875rem; text-decoration: none;
          border: 1.5px solid #d1d5db;
          transition: all 0.25s ease;
        }
        .ct-footer-cta-btn-ghost i { color: #25d366; }
        .ct-footer-cta-btn-ghost:hover {
          border-color: #25d366; color: #16a34a !important;
          background: rgba(37,211,102,0.05);
        }

        /* ─── Main Grid ─── */
        .ct-footer-main {
          position: relative; z-index: 1;
          padding: 64px 0 56px;
        }
        .ct-footer-grid {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr 1.1fr;
          gap: 52px;
        }

        /* ─── Brand Column ─── */
        .ct-footer-brand-logo {
          height: 44px; width: auto; object-fit: contain;
          display: block; margin-bottom: 20px;
          /* White logo → dark on white bg using invert filter */
          filter: invert(1) sepia(1) saturate(8) hue-rotate(200deg) brightness(0.75);
          transition: filter 0.25s ease;
        }
        .ct-footer-brand-logo:hover {
          filter: invert(1) sepia(1) saturate(10) hue-rotate(200deg) brightness(0.6);
        }
        .ct-footer-tagline {
          font-size: 0.88rem; line-height: 1.85;
          color: #64748b;
          margin-bottom: 28px; max-width: 300px;
        }
        .ct-footer-trust-row {
          display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 28px;
        }
        .ct-footer-trust-chip {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 10px; border-radius: 50px;
          background: rgba(41,31,188,0.06);
          border: 1px solid rgba(41,31,188,0.12);
          font-size: 0.72rem; font-weight: 600;
          color: #475569; letter-spacing: 0.3px;
        }
        .ct-footer-trust-chip i { color: #f59e0b; font-size: 0.7rem; }
        .ct-footer-socials { display: flex; gap: 8px; flex-wrap: wrap; }
        .ct-footer-social-btn {
          width: 36px; height: 36px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          font-size: 0.95rem; transition: all 0.25s ease;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        .ct-footer-social-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.15);
        }
        .ct-footer-social-btn.linkedin { background: #e8f3ff; color: #0a66c2; border: 1px solid #d0e7ff; }
        .ct-footer-social-btn.linkedin:hover { background: #0a66c2; color: #fff; border-color: transparent; }
        
        .ct-footer-social-btn.gmb { background: #e8f5e9; color: #34a853; border: 1px solid #c8e6c9; }
        .ct-footer-social-btn.gmb:hover { background: #34a853; color: #fff; border-color: transparent; }
        
        .ct-footer-social-btn.istart { background: #fff3e0; color: #ef6c00; border: 1px solid #ffe0b2; }
        .ct-footer-social-btn.istart:hover { background: #ef6c00; color: #fff; border-color: transparent; }
        
        .ct-footer-social-btn.whatsapp { background: #e8f5e9; color: #25d366; border: 1px solid #c8e6c9; }
        .ct-footer-social-btn.whatsapp:hover { background: #25d366; color: #fff; border-color: transparent; }
        
        .ct-footer-social-btn.quora { background: #fdf2f2; color: #b92b27; border: 1px solid #fee2e2; }
        .ct-footer-social-btn.quora:hover { background: #b92b27; color: #fff; border-color: transparent; }
        


        /* ─── Nav Columns ─── */
        .ct-footer-col-head {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.72rem; font-weight: 800;
          text-transform: uppercase; letter-spacing: 2px;
          color: #94a3b8;
          margin-bottom: 20px;
          display: flex; align-items: center; gap: 8px;
        }
        .ct-footer-col-head::after {
          content: '';
          flex: 1; height: 1px;
          background: #e2e8f0;
        }
        .ct-footer-nav-link {
          display: flex; align-items: center; gap: 0;
          padding: 6px 0; text-decoration: none;
          font-size: 0.865rem; font-weight: 400;
          color: #64748b;
          transition: all 0.2s ease;
        }
        .ct-footer-nav-link span {
          display: inline-block;
          transition: transform 0.2s ease;
        }
        .ct-footer-nav-link i {
          font-size: 0.6rem; color: #291fbc;
          opacity: 0; margin-right: 0;
          transform: translateX(-6px);
          transition: all 0.2s ease;
        }
        .ct-footer-nav-link:hover { color: #291fbc; }
        .ct-footer-nav-link:hover i {
          opacity: 1; margin-right: 6px; transform: translateX(0);
        }
        .ct-footer-nav-link:hover span { transform: translateX(2px); }

        /* ─── Contact Column ─── */
        .ct-footer-contact-item {
          display: flex; align-items: flex-start; gap: 12px;
          margin-bottom: 16px;
        }
        .ct-footer-contact-icon {
          width: 34px; height: 34px; border-radius: 9px;
          background: rgba(41,31,188,0.07);
          border: 1px solid rgba(41,31,188,0.12);
          display: flex; align-items: center; justify-content: center;
          color: #291fbc; font-size: 0.78rem; flex-shrink: 0;
        }
        .ct-footer-contact-text {
          font-size: 0.84rem; line-height: 1.65;
          color: #64748b;
        }
        .ct-footer-contact-text a {
          color: #374151; text-decoration: none;
          transition: color 0.2s;
        }
        .ct-footer-contact-text a:hover { color: #291fbc; }
        .ct-footer-contact-label {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 1px;
          text-transform: uppercase; color: #94a3b8;
          margin-bottom: 2px;
        }

        /* ─── Tabular Card Directory Architecture ─── */
        .ct-footer-directory {
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          padding: 36px 0 32px;
          position: relative;
          z-index: 1;
        }
        .ct-dir-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 8px;
        }
        .ct-dir-heading {
          font-size: 0.96rem;
          font-weight: 800;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 8px;
          letter-spacing: -0.2px;
        }
        .ct-dir-heading i { color: #2563eb; font-size: 0.9rem; }
        .ct-dir-subhead {
          font-size: 0.78rem;
          color: #64748b;
        }
        .ct-dir-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
          transition: all 0.2s ease;
        }
        .ct-dir-card:hover {
          border-color: #cbd5e1;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
        }
        .ct-dir-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 10px;
          margin-bottom: 12px;
          border-bottom: 1px solid #f1f5f9;
        }
        .ct-dir-card-title {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #1e293b;
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .ct-dir-card-badge {
          font-size: 0.66rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 20px;
          background: #f1f5f9;
          color: #475569;
          border: 1px solid #e2e8f0;
        }
        .ct-dir-pills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .ct-dir-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
          font-weight: 500;
          color: #475569;
          text-decoration: none;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 3px 8px;
          border-radius: 6px;
          transition: all 0.15s ease;
          line-height: 1.4;
        }
        .ct-dir-flag-img {
          width: 17px;
          height: 12px;
          object-fit: cover;
          border-radius: 2px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.12);
          flex-shrink: 0;
          display: inline-block;
        }
        .ct-dir-pill:hover {
          background: #eff6ff;
          color: #1d4ed8;
          border-color: #bfdbfe;
          transform: translateY(-1px);
        }
        .ct-dir-scroll-box {
          max-height: 240px;
          overflow-y: auto;
          padding-right: 4px;
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        .ct-dir-scroll-box::-webkit-scrollbar {
          width: 4px;
        }
        .ct-dir-scroll-box::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .ct-city-pill {
          display: inline-flex;
          align-items: center;
          font-size: 0.72rem;
          font-weight: 500;
          color: #475569;
          text-decoration: none;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 3px 7px;
          border-radius: 6px;
          text-transform: capitalize;
          transition: all 0.15s ease;
          line-height: 1.35;
        }
        .ct-city-pill:hover {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          transform: translateY(-1px);
        }
        @media (max-width: 768px) {
          .ct-dir-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
            margin-bottom: 14px;
          }
        }

        /* ─── Divider ─── */
        .ct-footer-divider {
          border: none; border-top: 1px solid #e2e8f0; margin: 0;
          position: relative; z-index: 1;
        }

        /* ─── Bottom Bar ─── */
        .ct-footer-bottom {
          position: relative; z-index: 1;
          padding: 22px 0;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .ct-footer-copy {
          font-size: 0.8rem; color: #94a3b8;
        }
        .ct-footer-copy a {
          color: #64748b; text-decoration: none;
          transition: color 0.2s;
        }
        .ct-footer-copy a:hover { color: #291fbc; }
        .ct-footer-copy .sep { margin: 0 8px; opacity: 0.4; }
        .ct-footer-bottom-right {
          display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
        }
        .ct-footer-badge-pill {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 10px; border-radius: 50px;
          background: #fff;
          border: 1px solid #e2e8f0;
          font-size: 0.7rem; font-weight: 600;
          color: #64748b; letter-spacing: 0.3px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .ct-footer-badge-pill i { font-size: 0.68rem; }
        .ct-footer-badge-pill.ssl i { color: #10b981; }
        .ct-footer-badge-pill.ai i { color: #f59e0b; }
        .ct-footer-badge-pill.india i { color: #ef4444; }

        /* ─── Responsive ─── */
        @media (max-width: 1100px) {
          .ct-footer-grid { grid-template-columns: 1.8fr 1fr 1fr; gap: 36px; }
          .ct-footer-grid > div:last-child { grid-column: span 3; }
        }
        @media (max-width: 768px) {
          .ct-footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
          .ct-footer-grid > div:first-child { grid-column: span 2; }
          .ct-footer-grid > div:last-child { grid-column: span 2; }
          .ct-footer-cta-inner { flex-direction: column; text-align: center; }
          .ct-footer-cta-btns { justify-content: center; }
          .ct-footer-main { padding: 48px 0 40px; }
          .ct-footer-cta { padding: 36px 0; }
        }
        @media (max-width: 480px) {
          .ct-footer-grid { grid-template-columns: 1fr; gap: 28px; }
          .ct-footer-grid > div:first-child,
          .ct-footer-grid > div:last-child { grid-column: span 1; }
          .ct-footer-bottom { flex-direction: column; text-align: center; }
          .ct-footer-bottom-right { justify-content: center; }
          .ct-footer-cta-text h3 { font-size: 1.25rem; }
        }


      `}</style>

      <footer className="ct-footer-wrap">

        {/* ─── CTA Strip ─── */}
        <div className="ct-footer-cta">
          <div className="container">
            <div className="ct-footer-cta-inner">
              <div className="ct-footer-cta-text">
                <h3>Ready to transform your business with AI?</h3>
                <p>Book a free consultation with our experts — zero obligation, 100% value.</p>
              </div>
              <div className="ct-footer-cta-btns">
                <a href="/contact-us" className="ct-footer-cta-btn-primary">
                  <i className="fa-solid fa-rocket"></i> Get Free Consultation
                </a>
                <a href="https://wa.me/917597451057" target="_blank" rel="noopener noreferrer" className="ct-footer-cta-btn-ghost">
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Main Footer Grid ─── */}
        <div className="ct-footer-main">
          <div className="container">
            <div className="ct-footer-grid">

              {/* Col 1: Brand */}
              <div>
                <img src="/assets/images/ct-logo.png" alt="ChittorTech" className="ct-footer-brand-logo" />
                <p className="ct-footer-tagline">
                  Empowering global enterprises, startups, and growing businesses with cutting-edge AI Solutions, Custom LLMs, Enterprise Cloud Systems, Dedicated Tech Teams, and Digital Growth Services.
                </p>
                <div className="ct-footer-trust-row">
                  <Link href="/trust-center" className="ct-footer-trust-chip" style={{ color: "#1e40af", background: "rgba(30,64,175,0.08)", borderColor: "rgba(30,64,175,0.25)" }}>
                    <i className="fa-solid fa-landmark"></i> ADB Empaneled (#051187)
                  </Link>
                  <Link href="/trust-center" className="ct-footer-trust-chip" style={{ color: "#b91c1c", background: "rgba(185,28,28,0.08)", borderColor: "rgba(185,28,28,0.25)" }}>
                    <i className="fa-solid fa-city"></i> SG GeBIZ Partner (#Y309075)
                  </Link>
                  <Link href="/trust-center" className="ct-footer-trust-chip" style={{ color: "#0284c7", background: "rgba(2,132,199,0.08)", borderColor: "rgba(2,132,199,0.25)" }}>
                    <i className="fa-solid fa-globe"></i> UNGM Supplier
                  </Link>
                  <Link href="/trust-center" className="ct-footer-trust-chip" style={{ color: "#0f172a", background: "rgba(15,23,42,0.06)", borderColor: "rgba(15,23,42,0.2)" }}>
                    <i className="fa-solid fa-flag-usa"></i> SAM.gov Contractor
                  </Link>
                  <Link href="/trust-center" className="ct-footer-trust-chip" style={{ color: "#059669", background: "rgba(16,185,129,0.08)", borderColor: "rgba(16,185,129,0.25)" }}>
                    <i className="fa-solid fa-certificate"></i> Trust Center &amp; DGFT IEC
                  </Link>
                </div>
                <div className="ct-footer-socials">
                  <a href="https://www.linkedin.com/company/chittortech" target="_blank" rel="noopener noreferrer" className="ct-footer-social-btn linkedin" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="https://maps.google.com/?q=ChittorTech+Chittorgarh" target="_blank" rel="noopener noreferrer" className="ct-footer-social-btn gmb" title="Google My Business (GMB)"><i className="fa-brands fa-google"></i></a>
                  <a href="https://istart.rajasthan.gov.in/profile/11478/startups" target="_blank" rel="noopener noreferrer" className="ct-footer-social-btn istart" title="iStart Rajasthan Startup"><i className="fa-solid fa-rocket"></i></a>
                  <a href="https://wa.me/917597451057" target="_blank" rel="noopener noreferrer" className="ct-footer-social-btn whatsapp" title="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
                  <a href="https://www.quora.com/profile/ChittorTech" target="_blank" rel="noopener noreferrer" className="ct-footer-social-btn quora" title="Quora"><i className="fa-brands fa-quora"></i></a>
                </div>
              </div>

              {/* Col 2: AI Solutions */}
              <div>
                <div className="ct-footer-col-head">AI Solutions</div>
                {[
                  { href: "/ai-chatbot-development", label: "AI Chatbots & Support" },
                  { href: "/erp", label: "Enterprise AI Workflows" },
                  { href: "/crm", label: "RAG Knowledge Base" },
                  { href: "/erp", label: "Custom LLM Fine-Tuning" },
                  { href: "/erp", label: "AI Predictive Analytics" },
                  { href: "/erp", label: "OCR & Document AI" },
                  { href: "/web-development-services", label: "Custom SaaS Development" },
                  { href: "/ai-manufacturing", label: "Computer Vision AI" },
                ].map((l) => (
                  <Link key={l.label} href={l.href} className="ct-footer-nav-link">
                    <i className="fa-solid fa-chevron-right"></i>
                    <span>{l.label}</span>
                  </Link>
                ))}
              </div>

              {/* Col 3: IT & Growth */}
              <div>
                <div className="ct-footer-col-head">IT & Growth</div>
                {[
                  { href: "/web-development-services", label: "Web Development" },
                  { href: "/cloud-hosting-deployment", label: "Cloud Hosting & DevOps" },
                  { href: "/dns-cloudflare-management", label: "DNS & Cloudflare" },
                  { href: "/email-deliverability-services", label: "Email Deliverability" },
                  { href: "/dmarc-dkim-spf-setup", label: "DMARC & DKIM Setup" },
                  { href: "/business-email-branding-bimi", label: "BIMI Email Branding" },
                  { href: "/email-blacklist-removal", label: "Blacklist Removal" },
                  { href: "/e-commerce-website-development", label: "E-Commerce Solutions" },
                  { href: "/android-application", label: "Android Mobile Apps" },
                  { href: "/google-play-publishing", label: "Google Play Publishing" },
                  { href: "/search-engine-optimization", label: "SEO Services" },
                  { href: "/digital-marketing-services", label: "Digital Marketing" },
                  { href: "/b2b-lead-generation-services", label: "B2B Lead Generation" },
                ].map((l) => (
                  <Link key={l.label} href={l.href} className="ct-footer-nav-link">
                    <i className="fa-solid fa-chevron-right"></i>
                    <span>{l.label}</span>
                  </Link>
                ))}
              </div>

              {/* Col 4: Contact */}
              <div>
                <div className="ct-footer-col-head">Get in Touch</div>

                <div className="ct-footer-contact-item">
                  <div className="ct-footer-contact-icon"><i className="fa-solid fa-location-dot"></i></div>
                  <div className="ct-footer-contact-text">
                    <div className="ct-footer-contact-label">Office</div>
                    Chittorgarh, Rajasthan – 312001
                  </div>
                </div>

                <div className="ct-footer-contact-item">
                  <div className="ct-footer-contact-icon"><i className="fa-solid fa-phone"></i></div>
                  <div className="ct-footer-contact-text">
                    <div className="ct-footer-contact-label">Call / WhatsApp</div>
                    <a href="tel:+917597451057">+91 7597451057</a>
                  </div>
                </div>

                <div className="ct-footer-contact-item">
                  <div className="ct-footer-contact-icon"><i className="fa-solid fa-envelope"></i></div>
                  <div className="ct-footer-contact-text">
                    <div className="ct-footer-contact-label">Business Inquiries</div>
                    <span dangerouslySetInnerHTML={{ __html: '<!--email_off--><a href="mailto:business@chittortech.in" rel="nofollow">business@chittortech.in</a><!--/email_off-->' }} />
                    <div className="ct-footer-contact-label" style={{ marginTop: '6px' }}>General Inquiries</div>
                    <span dangerouslySetInnerHTML={{ __html: '<!--email_off--><a href="mailto:contact@chittortech.in" rel="nofollow">contact@chittortech.in</a><!--/email_off-->' }} />
                  </div>
                </div>

                <div className="ct-footer-contact-item">
                  <div className="ct-footer-contact-icon" style={{background:'rgba(37,211,102,0.08)',borderColor:'rgba(37,211,102,0.18)',color:'#16a34a'}}>
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div className="ct-footer-contact-text">
                    <div className="ct-footer-contact-label">WhatsApp</div>
                    <a href="https://wa.me/917597451057" target="_blank" rel="noopener noreferrer">Chat with us now</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ─── Expandable / Rich Directory Section for Complete Internal Linking ─── */}
        <div className="ct-footer-directory">
          <div className="container">
            <div className="ct-dir-top">
              <div className="ct-dir-heading">
                <i className="fa-solid fa-layer-group"></i> Solutions &amp; Global Hubs Directory
              </div>
              <div className="ct-dir-subhead">
                Explore ChittorTech's complete ecosystem of enterprise software, global offshore hubs, and regional deployment networks.
              </div>
            </div>

            <div className="row g-3 text-start">
              
              {/* Global Markets & Offshore Exposure */}
              <div className="col-lg-3 col-md-6">
                <div className="ct-dir-card">
                  <div className="ct-dir-card-head">
                    <div className="ct-dir-card-title">
                      <i className="fa-solid fa-earth-americas text-primary"></i> Global Hubs
                    </div>
                    <span className="ct-dir-card-badge" style={{ background: '#ecfdf5', color: '#059669', borderColor: '#a7f3d0' }}>22 Markets</span>
                  </div>
                  <div className="ct-dir-pills-wrap">
                    {[
                      { href: "/united-states", label: "United States (USA)", countryCode: "us" },
                      { href: "/silicon-valley", label: "Silicon Valley (CA)", countryCode: "us" },
                      { href: "/austin-tech-hub", label: "Austin Tech Hub (TX)", countryCode: "us" },
                      { href: "/new-york-city", label: "New York City (NY)", countryCode: "us" },
                      { href: "/miami-florida", label: "Miami & Florida", countryCode: "us" },
                      { href: "/united-kingdom", label: "United Kingdom (UK)", countryCode: "gb" },
                      { href: "/london-tech-city", label: "London Tech City", countryCode: "gb" },
                      { href: "/manchester-uk", label: "Manchester (UK)", countryCode: "gb" },
                      { href: "/dubai", label: "Dubai (UAE)", countryCode: "ae" },
                      { href: "/abu-dhabi", label: "Abu Dhabi (UAE)", countryCode: "ae" },
                      { href: "/saudi-arabia", label: "Saudi Arabia (KSA)", countryCode: "sa" },
                      { href: "/turkey-eurasia", label: "Turkey & Eurasia", countryCode: "tr" },
                      { href: "/germany-berlin", label: "Germany (Berlin)", countryCode: "de" },
                      { href: "/netherlands-amsterdam", label: "Netherlands (AMS)", countryCode: "nl" },
                      { href: "/toronto-canada", label: "Toronto (Canada)", countryCode: "ca" },
                      { href: "/sydney-australia", label: "Sydney (Australia)", countryCode: "au" },
                      { href: "/melbourne-australia", label: "Melbourne (AU)", countryCode: "au" },
                      { href: "/singapore-hub", label: "Singapore Hub", countryCode: "sg" },
                      { href: "/dedicated-tech-teams", label: "Dedicated Tech Teams", icon: "fa-solid fa-users", iconColor: "#2563eb" },
                      { href: "/4-week-saas-mvp", label: "4-Week SaaS MVP", icon: "fa-solid fa-rocket", iconColor: "#f59e0b" },
                      { href: "/enterprise-ai-agents", label: "Enterprise AI Agents", icon: "fa-solid fa-robot", iconColor: "#8b5cf6" },
                      { href: "/timezone-overlap", label: "Timezone Overlap", icon: "fa-solid fa-clock", iconColor: "#06b6d4" },
                    ].map((item, idx) => (
                      <Link key={idx} href={item.href} className="ct-dir-pill">
                        {item.countryCode ? (
                          <img
                            src={`https://flagcdn.com/w40/${item.countryCode}.png`}
                            srcSet={`https://flagcdn.com/w80/${item.countryCode}.png 2x`}
                            alt={`${item.label} flag`}
                            className="ct-dir-flag-img"
                            loading="lazy"
                          />
                        ) : (
                          <i className={item.icon} style={{ color: item.iconColor, fontSize: '0.78rem' }}></i>
                        )}
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Core ERP & Enterprise Systems */}
              <div className="col-lg-3 col-md-6">
                <div className="ct-dir-card">
                  <div className="ct-dir-card-head">
                    <div className="ct-dir-card-title">
                      <i className="fa-solid fa-cubes text-indigo" style={{ color: '#6366f1' }}></i> ERP &amp; Systems
                    </div>
                    <span className="ct-dir-card-badge">16 Modules</span>
                  </div>
                  <div className="ct-dir-pills-wrap">
                    {[
                      { href: "/erp", label: "Enterprise ERP" },
                      { href: "/crm", label: "AI CRM & Leads" },
                      { href: "/accounting", label: "GST Accounting" },
                      { href: "/inventory", label: "Inventory Mgmt" },
                      { href: "/payroll", label: "Payroll & HRMS" },
                      { href: "/invoicing", label: "GST Invoicing" },
                      { href: "/lead-management", label: "Sales Lead Tracking" },
                      { href: "/logistics", label: "Logistics & Transport" },
                      { href: "/smart-retail", label: "Smart Retail" },
                      { href: "/custom-crm-solutions", label: "Custom CRM" },
                      { href: "/industrial-products", label: "Industrial Wholesale" },
                      { href: "/trading-overview", label: "Trading ERP" },
                      { href: "/after-sale-service", label: "Service & Warranty" },
                      { href: "/employee-background-verification", label: "Employee BGV" },
                      { href: "/electronics-smartphones", label: "Electronics POS" },
                    ].map((item, idx) => (
                      <Link key={idx} href={item.href} className="ct-dir-pill">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hospitality, Institutions & Digital Services */}
              <div className="col-lg-3 col-md-6">
                <div className="ct-dir-card">
                  <div className="ct-dir-card-head">
                    <div className="ct-dir-card-title">
                      <i className="fa-solid fa-hotel text-emerald" style={{ color: '#10b981' }}></i> Hospitality &amp; Web
                    </div>
                    <span className="ct-dir-card-badge">17 Suites</span>
                  </div>
                  <div className="ct-dir-pills-wrap">
                    {[
                      { href: "/hotel-management-system", label: "Hotel HMS" },
                      { href: "/hotel-room-booking-system", label: "Room Booking" },
                      { href: "/dharamshala-billing-system", label: "Dharamshala Mgmt" },
                      { href: "/resort-guest-house-software", label: "Resort & Guest House" },
                      { href: "/online-booking-admin-portal", label: "Booking Portal" },
                      { href: "/india-temple", label: "Temple Trust Billing" },
                      { href: "/hospitals", label: "Hospital HMS" },
                      { href: "/schools-educational-institutions", label: "School Mgmt" },
                      { href: "/education", label: "EdTech Software" },
                      { href: "/search-engine-optimization", label: "SEO Services" },
                      { href: "/on-page-seo-services", label: "On-Page SEO" },
                      { href: "/off-page-seo-services", label: "Off-Page SEO" },
                      { href: "/technical-seo-services", label: "Technical SEO" },
                      { href: "/digital-marketing-services", label: "Digital Marketing" },
                      { href: "/social-media-optimization", label: "SMO Services" },
                      { href: "/modern-responsive-website-design", label: "Web Design" },
                      { href: "/google-play-publishing", label: "Play Store Launch" },
                    ].map((item, idx) => (
                      <Link key={idx} href={item.href} className="ct-dir-pill">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Major City Landing Pages */}
              <div className="col-lg-3 col-md-6">
                <div className="ct-dir-card">
                  <div className="ct-dir-card-head">
                    <div className="ct-dir-card-title">
                      <i className="fa-solid fa-map-location-dot text-amber" style={{ color: '#f59e0b' }}></i> Popular Cities
                    </div>
                    <span className="ct-dir-card-badge">90+ Hubs</span>
                  </div>
                  <div className="ct-dir-scroll-box">
                    {[
                      "agra", "ahmedabad", "ajmer", "alwar", "amritsar", "anand", "aurangabad", "banswara", "barmer",
                      "belgaum", "bengaluru", "bharatpur", "bhavnagar", "bhilwara", "bhopal", "bhubaneswar", "bundi",
                      "chandigarh", "chennai", "chittorgarh", "churu", "coimbatore", "dausa", "davanagere", "dehradun",
                      "delhi", "dharwad", "faridabad", "gandhinagar", "ghaziabad", "gurgaon", "guwahati", "hanumangarh",
                      "hubli", "hyderabad", "indore", "jaipur", "jalandhar", "jammu", "jamnagar", "jhalawar", "jodhpur",
                      "junagadh", "kannur", "kanpur", "karimnagar", "kochi", "kolkata", "kota", "lucknow", "ludhiana",
                      "madurai", "mangalore", "meerut", "mumbai", "mysuru", "nagaur", "nagpur", "nashik", "nizamabad",
                      "noida", "pali", "panipat", "pratapgarh", "pune", "raipur", "rajkot", "rajsamand", "ranchi",
                      "salem", "sawai-madhopur", "shimla", "sikar", "sonipat", "sri-ganganagar", "srinagar", "surat",
                      "thane", "thiruvananthapuram", "thrissur", "tiruppur", "tonk", "trichy", "tumakuru", "udaipur",
                      "vadodara", "varanasi", "vijayawada", "visakhapatnam", "warangal"
                    ].map((city) => (
                      <Link
                        key={city}
                        href={`/cities/${city}`}
                        className="ct-city-pill"
                      >
                        {city.replace('-', ' ')}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ─── Divider ─── */}
        <hr className="ct-footer-divider" />

        {/* ─── Bottom Bar ─── */}
        <div className="container">
          <div className="ct-footer-bottom">
            <div className="ct-footer-copy">
              © {new Date().getFullYear()} <a href="/">ChittorTech</a>.
              <span className="sep">·</span>
              <a href="/trust-center">Trust Center &amp; Accreditations</a>
              <span className="sep">·</span>
              <a href="/privacy-policy">Privacy Policy</a>
              <span className="sep">·</span>
              <a href="/terms">Terms of Service</a>
              <span className="sep">·</span>
              <a href="/payment-terms">Payment &amp; Refund Terms</a>
              <span className="sep">·</span>
              <a href="/blog">Blog</a>
              <span className="sep">·</span>
              <a href="/sitemap.xml">Sitemap</a>
            </div>
            <div className="ct-footer-bottom-right">
              <Link href="/trust-center" className="ct-footer-badge-pill" style={{ textDecoration: 'none', background: '#eff6ff', color: '#1e40af', borderColor: '#bfdbfe' }}><i className="fa-solid fa-landmark"></i> ADB #051187</Link>
              <Link href="/trust-center" className="ct-footer-badge-pill" style={{ textDecoration: 'none', background: '#fef2f2', color: '#dc2626', borderColor: '#fecaca' }}><i className="fa-solid fa-city"></i> GeBIZ #Y309075</Link>
              <Link href="/trust-center" className="ct-footer-badge-pill" style={{ textDecoration: 'none', background: '#f0f9ff', color: '#0284c7', borderColor: '#bae6fd' }}><i className="fa-solid fa-globe"></i> UNGM Supplier</Link>
              <Link href="/trust-center" className="ct-footer-badge-pill" style={{ textDecoration: 'none', background: '#f8fafc', color: '#0f172a', borderColor: '#cbd5e1' }}><i className="fa-solid fa-flag-usa"></i> SAM.gov</Link>
              <span className="ct-footer-badge-pill ssl"><i className="fa-solid fa-shield-halved"></i> SSL Secured</span>
              <span className="ct-footer-badge-pill india"><i className="fa-solid fa-flag"></i> Made in India</span>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
}
