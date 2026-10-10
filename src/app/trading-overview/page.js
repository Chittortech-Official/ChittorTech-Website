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
                <i className={`fa-solid fa-handshake`}></i> Trading AI & IT Solutions
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Trading Business AI & IT Solutions & Management Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                B2B trading management — orders, invoices, payments, and buyer relationships.
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
                <i className={`fa-solid fa-handshake`}></i>
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
                  <h2>Best AI & IT Solutions for Trading Businesses <span>in India | ChittorTech</span></h2>
                  <p>In the fast-paced world of trading, businesses must constantly deal with fluctuating market demands, competitive pricing pressures, diverse customer expectations, and complex supply chain networks. Whether you operate in wholesale distribution, retail trading, import-export, FMCG, or multi-category trading, the ability to manage your operations seamlessly is the key to long-term success.</p>
                  <p>This is where <b>ChittorTech</b> steps in as a trusted technology partner. We provide the Best AI & IT Solutions for Trading Businesses in India, helping companies of all sizes streamline their operations, manage resources efficiently, and maximize profitability.</p>
                  <p>With our industry-specific AI & IT Solutions solution, you can overcome operational bottlenecks, improve customer satisfaction, and stay ahead of the competition.</p>
               </div>
            </div>
         </div>
         <div className="col-md-6">
            <div className="seo-services-img manufacturers-img">
               <figure>
                  <img src="/assets/images/img292.jpg" alt="Trading Business AI & IT Solutions" />
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
                  <img src="/assets/images/img293.jpg" alt="Trading Business AI & IT Solutions" />
               </figure>
            </div>
         </div>
         <div className="col-md-7">
            <div className="heading-wrap text-start">
               <h2>Why <span>Trading Businesses</span> Need AI & IT Solutions?</h2>
               <p>Trading companies face unique challenges compared to manufacturers or service providers. From handling large product assortments and maintaining stock levels to ensuring accurate billing, taxation, and compliance, AI & IT Solutions is no longer a luxury but a necessity.</p>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li><strong>Inventory Mismanagement</strong> – Difficulty in tracking stock levels across warehouses and outlets.</li>
                  <li><strong>Complex Supply Chains</strong> – Managing multiple suppliers, vendors, and distributors simultaneously.</li>
                  <li><strong>Manual Billing & Errors</strong> – Time-consuming invoicing processes leading to inaccuracies.</li>
                  <li><strong>Regulatory Compliance</strong> – GST, taxation, and financial audits require meticulous data handling.</li>
                  <li><strong>Customer Expectations</strong> – Rising demand for faster deliveries and better after-sales support.</li>
                  <li><strong>Multi-Location Challenges</strong> – Businesses expanding across Delhi NCR, Jaipur, or pan-India need centralized control.</li>
               </ul>
               <p>Without a robust system, traders struggle with delayed deliveries, revenue leakage, poor decision-making, and customer dissatisfaction.</p>
               <p><strong>Chittortech AI & IT Solutions</strong> provides a one-stop solution, automating core business functions and ensuring real-time visibility of operations.</p>
            </div>
         </div>
      </div>
   </div>
</section>





<section className="manufacturing-key section-bg pt-60">
   <div className="container">
      <div className="heading-wrap">
         <h2>Key Features of <span>Chittortech AI & IT Solutions for Trading Businesses</span></h2>
         <p>Our AI & IT Solutions system is designed specifically for trading companies and includes modules that simplify day-to-day operations:</p>
      </div>
      <div className="row justify-content-center gy-4">

         {/* 1. Inventory & Stock Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Inventory &amp; Stock Management</h3>
               <ul>
                  <li>Real-time tracking of stock across warehouses, godowns, and retail outlets</li>
                  <li>Prevent stockouts and overstocking with intelligent alerts</li>
                  <li>Barcode/RFID-based stock movement for accuracy</li>
               </ul>
            </div>
         </div>

         {/* 2. Purchase & Vendor Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Purchase &amp; Vendor Management</h3>
               <ul>
                  <li>Automated purchase orders based on inventory requirements</li>
                  <li>Vendor performance tracking with pricing comparisons</li>
                  <li>Better negotiation through supplier history and analytics</li>
               </ul>
            </div>
         </div>

         {/* 3. Sales & Distribution Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Sales &amp; Distribution Management</h3>
               <ul>
                  <li>End-to-end order processing, from quotation to invoice</li>
                  <li>Automated billing with GST-compliant invoicing</li>
                  <li>Manage distribution channels (B2B, B2C, wholesale, retail)</li>
               </ul>
            </div>
         </div>

         {/* 4. Financial & Tax Compliance */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Financial &amp; Tax Compliance</h3>
               <ul>
                  <li>Seamless integration with GST, TDS, and accounting rules</li>
                  <li>Automated tax calculations for invoices and purchase bills</li>
                  <li>Ready reports for audits and compliance filing</li>
               </ul>
            </div>
         </div>

         {/* 5. Customer Relationship Management (AI Knowledge Base) */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Customer Relationship Management (AI Knowledge Base)</h3>
               <ul>
                  <li>Track customer orders, preferences, and buying history</li>
                  <li>Manage after-sales services, warranties, and feedback</li>
                  <li>Build stronger relationships with repeat customers</li>
               </ul>
            </div>
         </div>

         {/* 6. Multi-Location Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Multi-Location Management</h3>
               <ul>
                  <li>Control multiple warehouses, stores, and branches from a single dashboard</li>
                  <li>Centralized data for head office while allowing branch-level access</li>
                  <li>Consolidated reporting for better decision-making</li>
               </ul>
            </div>
         </div>

         {/* 7. Reporting & Analytics */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Reporting &amp; Analytics</h3>
               <ul>
                  <li>Real-time dashboards for sales, stock, and finance</li>
                  <li>Custom reports for decision-making</li>
                  <li>Forecasting tools to predict demand and optimize purchases</li>
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
               <h2>Benefits of <span>Chittortech AI & IT Solutions for Trading Businesses</span></h2>
            </div>
            <div className="why-choose-grid textile-manufacturers-wrap">
               <div className="grid-item">
                  <figure><img src="/assets/images/ma1.png" alt="Seamless Operations" /></figure>
                  <h3>Seamless Operations</h3>
                  <p>Integrated modules reduce duplication and manual errors.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma2.png" alt="Improved Profit Margins" /></figure>
                  <h3>Improved Profit Margins</h3>
                  <p>Optimize purchases, reduce wastage, and control expenses.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma3.png" alt="Faster Deliveries" /></figure>
                  <h3>Faster Deliveries</h3>
                  <p>Automation ensures quicker order fulfillment.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma4.png" alt="Accurate Financials" /></figure>
                  <h3>Accurate Financials</h3>
                  <p>GST-ready and audit-friendly accounts.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma5.png" alt="Customer Delight" /></figure>
                  <h3>Customer Delight</h3>
                  <p>Faster service, better communication, and reliable after-sales support.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma6.png" alt="Scalability & Data-Driven Decisions" /></figure>
                  <h3>Scalability & Data-Driven Decisions</h3>
                  <p>Suitable for small traders to large distributors with real-time insights into performance, sales, and profitability.</p>
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
               <h4>Who Can Benefit from <span>Chittortech AI & IT Solutions?</span></h4>
               <ul>
                  <li><strong>Wholesale Traders –</strong> Handle bulk purchases and distribution with ease.</li>
                  <li><strong>Retail Chains –</strong> Manage multiple outlets, POS systems, and real-time inventory.</li>
                  <li><strong>Import-Export Businesses –</strong> Handle customs, documentation, and multi-currency transactions.</li>
                  <li><strong>FMCG Distributors –</strong> Track fast-moving consumer goods with expiry and batch controls.</li>
                  <li><strong>Hardware & Electrical Traders –</strong> Manage thousands of SKUs with efficiency.</li>
                  <li><strong>Pharma & Medical Distributors –</strong> Ensure compliance with batch, lot, and expiry tracking.</li>
                  <li><strong>E-commerce Traders –</strong> Integrate online and offline sales channels seamlessly.</li>
               </ul>
            </div>
         </div>
         <div className="col-md-5">
            <div className="clothing-stores-img text-end">
               <figure>
                  <img src="/assets/images/industry1.png" alt="Trading Businesses AI & IT Solutions Solutions" />
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>

<section className="clothing-stores-sec software-sec">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-7 order-md-2">
            <div className="clothing-stores-text software-wrap specialized-box">
               <h2>Why Choose <span>ChittorTech?</span></h2>
               <ul>
                  <li><strong>Proven Expertise –</strong> Years of experience in AI & IT Solutions development and implementation.</li>
                  <li><strong>Industry-Specific Customization –</strong> Tailored modules for trading businesses.</li>
                  <li><strong>Trusted by Businesses in India –</strong> Local presence with global capabilities.</li>
                  <li><strong>Dedicated Support –</strong> Continuous training, maintenance, and 24/7 assistance.</li>
                  <li><strong>Affordable & Scalable –</strong> Solutions that grow with your business needs.</li>
               </ul>
            </div>
         </div>
         <div className="col-md-5 order-md-1">
            <div className="clothing-stores-img text-end">
               <figure>
                  <img src="/assets/images/industry1.png" alt="Trading Businesses AI & IT Solutions Solutions" />
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>
    </>
  );
}
