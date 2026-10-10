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
                <i className={`fa-solid fa-industry`}></i> Industrial AI & IT Solutions
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Industrial Products AI & IT Solutions
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Manage bulk orders, B2B customers, and industrial product distribution.
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
                <i className={`fa-solid fa-industry`}></i>
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
                  <h2>Best AI & IT Solutions for Industrial Products Manufacturers <span>in India</span></h2>
                  <p>The Industrial Products manufacturing sector is the backbone of the economy, covering a wide range of industries such as machinery, heavy equipment, tools, automotive components, and engineered products. With rising customer demands, global competition, and stricter compliance requirements, manufacturers must rely on advanced technology to ensure smooth operations and sustainable growth.</p>
                  <p><b>ChittorTech</b> delivers the Best AI & IT Solutions for Industrial Products Manufacturers in India, designed to streamline complex production cycles, manage vast inventories, and improve overall efficiency. Our AI & IT Solutions solution empowers businesses to integrate production, inventory, procurement, sales, finance, and compliance into one unified platform.</p>
               </div>
            </div>
         </div>
         <div className="col-md-6">
            <div className="seo-services-img manufacturers-img">
               <figure>
                  <img src="/assets/images/img290.jpg" alt="Industrial Products Manufacture" />
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
                  <img src="/assets/images/img291.jpg" alt="Industrial Products AI Manufacturing Solutions" />
               </figure>
            </div>
         </div>
         <div className="col-md-7">
            <div className="heading-wrap text-start">
               <h2>Why <span>Industrial Products Manufacturers</span> Need AI & IT Solutions?</h2>
               <p>Industrial product manufacturers face unique challenges due to the diversity and complexity of their operations. Some key challenges include:</p>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li><strong>Complex Production Cycles</strong> – Managing multi-stage production processes, assemblies, and customizations.</li>
                  <li><strong>Diverse Product Range</strong> – Handling multiple product categories, SKUs, and variants.</li>
                  <li><strong>Inventory & Supply Chain Management</strong> – Tracking raw materials, parts, and finished goods across multiple facilities.</li>
                  <li><strong>Strict Quality Standards</strong> – Adhering to international manufacturing standards and certifications.</li>
                  <li><strong>Cost Control & Resource Management</strong> – Reducing wastage and optimizing utilization of machinery and workforce.</li>
                  <li><strong>Customization & Client Demands</strong> – Meeting unique client requirements while ensuring timely deliveries.</li>
               </ul>
               <p>This is where <strong>Chittortech AI & IT Solutions</strong> becomes a game-changer by offering automation, real-time visibility, and control across all manufacturing functions.</p>
            </div>
         </div>
      </div>
   </div>
</section>




<section className="manufacturing-key section-bg pt-60">
   <div className="container">
      <div className="heading-wrap">
         <h2>Key Features of <span>Chittortech AI & IT Solutions for Industrial Products</span></h2>
         <p>Our AI & IT Solutions is designed specifically for industrial products manufacturers in India, addressing real challenges in production, inventory, quality, and compliance:</p>
      </div>
      <div className="row justify-content-center gy-4">

         {/* 1. Production Planning & Control */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Production Planning &amp; Control</h3>
               <ul>
                  <li> Manage multi-level production cycles, optimize resources, and reduce downtime</li>
               </ul>
            </div>
         </div>

         {/* 2. Inventory & Warehouse Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Inventory &amp; Warehouse Management</h3>
               <ul>
                  <li> Real-time tracking of raw materials, semi-finished goods, and finished products</li>
               </ul>
            </div>
         </div>

         {/* 3. Supply Chain & Vendor Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Supply Chain &amp; Vendor Management</h3>
               <ul>
                  <li> Streamlined procurement processes and better coordination with suppliers</li>
               </ul>
            </div>
         </div>

         {/* 4. Quality Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Quality Management</h3>
               <ul>
                  <li> Integrated quality checks at every stage to ensure zero defects and compliance</li>
               </ul>
            </div>
         </div>

         {/* 5. Finance & Costing Module */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Finance &amp; Costing Module</h3>
               <ul>
                  <li> Monitor budgets, production costs, and profitability with detailed financial insights</li>
               </ul>
            </div>
         </div>

         {/* 6. Machine Maintenance & Asset Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Machine Maintenance &amp; Asset Management</h3>
               <ul>
                  <li> Preventive and predictive maintenance to minimize breakdowns</li>
               </ul>
            </div>
         </div>

         {/* 7. Custom Orders & Client Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Custom Orders &amp; Client Management</h3>
               <ul>
                  <li> Handle bulk and custom orders with accuracy and speed</li>
               </ul>
            </div>
         </div>

         {/* 8. Regulatory & Compliance Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Regulatory &amp; Compliance Management</h3>
               <ul>
                  <li> Stay compliant with industry standards and safety regulations</li>
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
               <h2>Benefits of <span>Choosing Chittortech AI & IT Solutions for Industrial Products</span></h2>
            </div>
            <div className="why-choose-grid textile-manufacturers-wrap">
               <div className="grid-item">
                  <figure><img src="/assets/images/ma1.png" alt="Operational Efficiency" /></figure>
                  <h3>Operational Efficiency</h3>
                  <p> Automate workflows and reduce manual errors.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma2.png" alt="Cost Optimization" /></figure>
                  <h3>Cost Optimization</h3>
                  <p> Cut wastage, control production costs, and improve margins.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma3.png" alt="Scalability" /></figure>
                  <h3>Scalability</h3>
                  <p> Manage everything from small-scale units to large industrial plants.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma4.png" alt="Faster Deliveries" /></figure>
                  <h3>Faster Deliveries</h3>
                  <p> Streamlined supply chain ensures timely product delivery.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma5.png" alt="Enhanced Customer Satisfaction" /></figure>
                  <h3>Enhanced Customer Satisfaction</h3>
                  <p> Meet client demands with accuracy and reliability.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma6.png" alt="Real-Time Insights" /></figure>
                  <h3>Real-Time Insights</h3>
                  <p> Powerful dashboards for monitoring performance, production, and sales.</p>
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
                  <li><strong>Industry Expertise –</strong> Specialized AI & IT Solutions solutions for industrial product manufacturers.</li>
                  <li><strong>Proven Success –</strong> Trusted by leading companies in India.</li>
                  <li><strong>Customization –</strong> Tailored AI & IT Solutions modules to suit your business needs.</li>
                  <li><strong>Dedicated Support –</strong> Reliable post-implementation training and assistance.</li>
               </ul>
            </div>
         </div>
         <div className="col-md-5">
            <div className="clothing-stores-img text-end">
               <figure>
                  <img src="/assets/images/industry1.png" alt="Industrial Products AI & IT Solutions Solutions" />
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>
    </>
  );
}
