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
                <i className={`fa-solid fa-mobile`}></i> Electronics Management
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Electronics & Smartphone Store AI & IT Solutions
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                IMEI tracking, warranty management, and fast billing for electronics retailers.
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
                <i className={`fa-solid fa-mobile`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* header */}
        
{/* header */}
<section className="seo-services-sec manufacturers-sec">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-6">
            <div className="seo-services">
               <div className="heading-wrap text-start">
                  <h2>Best AI & IT Solutions for Electronics & Smartphone Manufacturers <span>Industry in India</span> | ChittorTech</h2>
                  <p>In today’s competitive and technology-driven market, the Electronics & Smartphone manufacturing industry faces constant pressure to innovate, deliver faster, and maintain strict quality standards. With rapid advancements in technology, shorter product lifecycles, and increasing global demand, manufacturers need a powerful AI & IT Solutions solution to optimize every aspect of their business.</p>
                  <p><b>ChittorTech</b> provides the Best AI & IT Solutions for Electronics & Smartphone Manufacturers in India, enabling businesses to streamline production, manage complex supply chains, track inventory efficiently, and maintain regulatory compliance.</p>
               </div>
            </div>
         </div>
         <div className="col-md-6">
            <div className="seo-services-img manufacturers-img">
               <figure>
                  <img src="/assets/images/img288.jpg" alt="Electronics & Smartphone Manufacture" />
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>


<section className="why-choose-sec bridal-sec">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-5">
            <div className="expertise-img text-start">
               <figure>
                  <img src="/assets/images/img289.jpg" alt="Electronics & Smartphone AI Manufacturing Solutions" />
               </figure>
            </div>
         </div>
         <div className="col-md-7">
            <div className="heading-wrap text-start">
               <h2>Why <span>Electronics & Smartphone Manufacturers</span> Need AI & IT Solutions?</h2>
               <p>Electronics and smartphone manufacturers encounter unique challenges that demand advanced solutions. Some of the critical challenges include:</p>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li><strong>Complex Supply Chains</strong> – Managing raw materials, electronic components, semiconductors, and vendor networks.</li>
                  <li><strong>High Product Turnover</strong> – Short product lifecycles and constant demand for upgraded features and innovations.</li>
                  <li><strong>Stringent Quality & Compliance</strong> – Adhering to international certifications and electronics industry regulations.</li>
                  <li><strong>Component & Inventory Management</strong> – Tracking thousands of SKUs, PCBs, chips, batteries, and accessories without errors.</li>
                  <li><strong>Warranty & After-Sales Service</strong> – Managing warranties, returns, and customer service effectively.</li>
                  <li><strong>Global Market Competition</strong> – Needing faster production cycles and reduced time-to-market.</li>
               </ul>
               <p>This is where <strong>Chittortech AI & IT Solutions</strong> for Electronics & Smartphone Manufacturers in India becomes the ultimate solution with automation, analytics, and real-time control.</p>
            </div>
         </div>
      </div>
   </div>
</section>



<section className="manufacturing-key section-bg pt-60">
   <div className="container">
      <div className="heading-wrap">
         <h2>Key Features of <span>Chittortech AI & IT Solutions for Electronics & Smartphone Manufacturers</span></h2>
         <p>Our AI & IT Solutions is designed specifically for electronics and smartphone manufacturers in India, addressing real challenges in production, inventory, quality, and after-sales support:</p>
      </div>
      <div className="row justify-content-center gy-4">

         {/* 1. Production Planning & Control */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Production Planning &amp; Control</h3>
               <ul>
                  <li> Optimize production lines, reduce downtime, and improve efficiency</li>
               </ul>
            </div>
         </div>

         {/* 2. Component & Inventory Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Component &amp; Inventory Management</h3>
               <ul>
                  <li> Track electronic parts, prevent stockouts, and maintain the right balance of inventory</li>
               </ul>
            </div>
         </div>

         {/* 3. Quality Assurance & Compliance */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Quality Assurance &amp; Compliance</h3>
               <ul>
                  <li> Integrated quality checkpoints and adherence to global electronics standards</li>
               </ul>
            </div>
         </div>

         {/* 4. Supply Chain & Vendor Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Supply Chain &amp; Vendor Management</h3>
               <ul>
                  <li> Smooth coordination with suppliers and vendor networks</li>
               </ul>
            </div>
         </div>

         {/* 5. R&D & Product Lifecycle Management (PLM) */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>R&amp;D &amp; Product Lifecycle Management (PLM)</h3>
               <ul>
                  <li> Manage product design, prototyping, and launch cycles efficiently</li>
               </ul>
            </div>
         </div>

         {/* 6. Warranty & Service Tracking */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Warranty &amp; Service Tracking</h3>
               <ul>
                  <li> Ensure customer satisfaction with seamless after-sales support</li>
               </ul>
            </div>
         </div>

         {/* 7. Regulatory Compliance */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Regulatory Compliance</h3>
               <ul>
                  <li> Stay updated with electronic industry certifications and statutory requirements</li>
               </ul>
            </div>
         </div>

         {/* 8. Real-Time Business Insights */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Real-Time Business Insights</h3>
               <ul>
                  <li> Dashboard with analytics for production, sales, and financial performance</li>
               </ul>
            </div>
         </div>

      </div>
   </div>
</section>



<section className="choose-chittortech-sec core-features-sec textile-manufacturers-sec">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div className="heading-wrap">
               <h2>Benefits of <span>Choosing Chittortech AI & IT Solutions</span></h2>
            </div>
            <div className="why-choose-grid textile-manufacturers-wrap">
               <div className="grid-item">
                  <figure><img src="/assets/images/ma1.png" alt="Increased Operational Efficiency" /></figure>
                  <h3>Increased Operational Efficiency</h3>
                  <p> Minimize manual errors and streamline workflows.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma2.png" alt="Faster Time-to-Market" /></figure>
                  <h3>Faster Time-to-Market</h3>
                  <p> Launch new smartphone models quickly with optimized processes.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma3.png" alt="Cost Reduction" /></figure>
                  <h3>Cost Reduction</h3>
                  <p> Reduce wastage and optimize resource utilization.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma4.png" alt="Enhanced Customer Satisfaction" /></figure>
                  <h3>Enhanced Customer Satisfaction</h3>
                  <p> Strong warranty and service management system.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma5.png" alt="Scalability" /></figure>
                  <h3>Scalability</h3>
                  <p> Adapt to changing industry demands and future expansion.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma6.png" alt="Data-Driven Decisions" /></figure>
                  <h3>Data-Driven Decisions</h3>
                  <p> Access real-time insights for smarter decision-making.</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>



<section className="clothing-stores-sec software-sec">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-7">
            <div className="clothing-stores-text software-wrap specialized-box">
               <h4>Why Choose <span>ChittorTech?</span></h4>
               <ul>
                  <li><strong>Industry Expertise –</strong> Specialized in AI & IT Solutions for Electronics & Smartphone Manufacturers.</li>
                  <li><strong>Trusted by Leading Brands –</strong> Proven AI & IT Solutions implementation success in India.</li>
                  <li><strong>Customization –</strong> Tailored AI & IT Solutions modules to suit your unique manufacturing needs.</li>
                  <li><strong>Dedicated Support –</strong> 24/7 expert assistance to ensure smooth AI & IT Solutions operations.</li>
                  <li><strong>Proven Results –</strong> Enhanced productivity, compliance, and profitability for clients.</li>
               </ul>
            </div>
         </div>
         <div className="col-md-5">
            <div className="clothing-stores-img text-end">
               <figure>
                  <img src="/assets/images/industry1.png" alt="Electronics & Smartphone AI & IT Solutions Solutions" />
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>
    </>
  );
}
