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
                <i className={`fa-solid fa-truck`}></i> Logistics AI & IT Solutions
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Logistics & Supply Chain Management Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Track shipments, manage routes, and optimize your entire supply chain.
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
                <i className={`fa-solid fa-truck`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      

{/* Hero Section Overhaul */}


{/* Challenge & Solutions Section */}
<section className="why-choose-sec">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6">
                <div className="expertise-img text-start">
                    <figure>
                        <img src="/assets/images/Centralized-Inventory.png" className="img-fluid" alt="Centralized Inventory Management" style={{ "maxHeight": "480px", "borderRadius": "12px", "boxShadow": "0 10px 30px rgba(0,0,0,0.05)" }} />
                    </figure>
                </div>
            </div>
            <div className="col-md-6">
                <div className="expertise-wrap pro-list">
                    <h5>Common Logistics Challenges We Solve</h5>
                    <ul>
                        <li>
                            <strong>Disorganized Storage & Shelf Chaos</strong><br />
                            Misplaced inventory increases pick times and slows order fulfillment. Chittortech's Rack & Bin system maps precise product coordinates.
                        </li>
                        <li>
                            <strong>Multi-Warehouse & Branch Invisibility</strong><br />
                            Managing stocks across branches manually leads to inconsistencies. Consolidate multi-hub stock records into a single live dashboard.
                        </li>
                        <li>
                            <strong>Product Waste & Expiry Overlooks</strong><br />
                            Unmonitored batch lifespans result in wasted inventory. Our system tracks batch dates and sends auto-alerts for items nearing expiry.
                        </li>
                        <li>
                            <strong>Delayed Orders & Inefficient Picking</strong><br />
                            Inaccurate pick routes exhaust cashiers and pickers. Chittortech generates optimized picklists to guide warehouse staff on the fastest paths.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

{/* Second Challenge/Solution Block (Alternating style) */}
<section className="why-choose-sec" style={{ "background": "#ffffff !important" }}>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
                <div className="expertise-img text-end">
                    <figure>
                        <img src="/assets/images/Centralized-Multilocation.png" className="img-fluid" alt="Centralized Multi-location Sync" style={{ "maxHeight": "480px", "borderRadius": "12px", "boxShadow": "0 10px 30px rgba(0,0,0,0.05)" }} />
                    </figure>
                </div>
            </div>
            <div className="col-md-6 order-md-1">
                <div className="expertise-wrap pro-list">
                    <h5>Chittortech Logistics – Scaled for Growth</h5>
                    <ul>
                        <li>
                            <strong>Automated Stock Reordering</strong><br />
                            Establish reorder limits for separate channels. Chittortech automatically notifies procurement before stock levels reach critical bounds.
                        </li>
                        <li>
                            <strong>Integrated Stock Reconciliation</strong><br />
                            Frictionless audits and adjustments. Keep real-time counts synced with cash registers, minimizing data mismatches.
                        </li>
                        <li>
                            <strong>Secure Multi-user Hierarchy</strong><br />
                            Assign custom permissions for staff roles (picker, stock controller, admin). Limit sensitive financial info to designated executives.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

{/* Core Features Card Grid Section */}
<section id="features" className="industry new-cards accounting-sec">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="heading-wrap text-center mb-5">
                    <h2>Advanced Logistics <span>Management Features</span></h2>
                    <p className="text-muted">Optimize storage density, dispatch velocities, and tax compliance across all locations.</p>
                </div>
                <div className="desktop-industries">
                    <div className="row justify-content-center">
                        <div className="col-md-3 col-sm-6">
                            <div className="boxes mb-4 flip-container">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-back">
                                            <img src="/assets/images/fast1.png" alt="Rack & Bin" className="img-fluid mb-3" />
                                            <h4>Rack & Bin System</h4>
                                            <p>Map items to exact shelves, compartments, and aisles for rapid extraction.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="boxes mb-4 flip-container">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-back">
                                            <img src="/assets/images/fast2.png" alt="Expiry Tracking" className="img-fluid mb-3" />
                                            <h4>Expiry Monitoring</h4>
                                            <p>Track batch numbers and receive proactive alerts to prevent expired write-offs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="boxes mb-4 flip-container">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-back">
                                            <img src="/assets/images/fast3.png" alt="Access Control" className="img-fluid mb-3" />
                                            <h4>Role Accountability</h4>
                                            <p>Limit data access permissions for pickers, stock managers, and cashiers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="boxes mb-4 flip-container">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-back">
                                            <img src="/assets/images/fast4.png" alt="Rack Transfers" className="img-fluid mb-3" />
                                            <h4>Internal Transfers</h4>
                                            <p>Track stock movements between racks and stores with seamless logs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="boxes mb-4 flip-container">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-back">
                                            <img src="/assets/images/fast5.png" alt="Reorder Alerts" className="img-fluid mb-3" />
                                            <h4>Reorder Alerts</h4>
                                            <p>Receive notifications when warehouse supplies cross low-limit values.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="boxes mb-4 flip-container">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-back">
                                            <img src="/assets/images/fast10.png" alt="GST Transfers" className="img-fluid mb-3" />
                                            <h4>GST Compliance</h4>
                                            <p>Generate compliant bills and stock declarations for inter-state transfers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="boxes mb-4 flip-container">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-back">
                                            <img src="/assets/images/fast13.png" alt="Auto Picklist" className="img-fluid mb-3" />
                                            <h4>Auto Picklists</h4>
                                            <p>Generate optimized order picklists mapped to shelf location indices.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="boxes mb-4 flip-container">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-back">
                                            <img src="/assets/images/fast17.png" alt="Multi-Store Control" className="img-fluid mb-3" />
                                            <h4>Central Console</h4>
                                            <p>Track transfers, stock values, and movements across all hubs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{/* Space Management Features */}
<section className="complete-seo-service">
   <div className="container my-5">
      <div className="heading-wrap text-center">
         <h2>Structured Warehouse Capacity <span>Management Tools</span></h2>
         <p>Maximize layout efficiency, utilize raw capacity parameters, and prevent structural overloading.</p>
      </div>
      <div className="row mt-4">
         {/* Rack & Bin Management */}
         <div className="col-md-3 col-sm-6 mb-4">
            <div className="card service-box text-center p-4" style={{ "height": "100%", "borderRadius": "12px", "border": "1px solid #e2e8f0", "background": "#fff" }}>
               <figure><img src="/assets/images/rk1.png" className="img-fluid" alt="Rack Location" style={{ "maxHeight": "60px" }} /></figure>
               <h4 className="mt-3">Rack Planning</h4>
               <p className="text-muted">Log shelf dimensions, and assign dynamic Rack IDs to allocate appropriate stock sizes.</p>
            </div>
         </div>
         {/* Bin Capacity */}
         <div className="col-md-3 col-sm-6 mb-4">
            <div className="card service-box text-center p-4" style={{ "height": "100%", "borderRadius": "12px", "border": "1px solid #e2e8f0", "background": "#fff" }}>
               <figure><img src="/assets/images/rk2.png" className="img-fluid" alt="Capacity Control" style={{ "maxHeight": "60px" }} /></figure>
               <h4 className="mt-3">Capacity Limits</h4>
               <p className="text-muted">Define stock count thresholds for bins to prevent overload wear and inventory damage.</p>
            </div>
         </div>
         {/* Multi-Hub control */}
         <div className="col-md-3 col-sm-6 mb-4">
            <div className="card service-box text-center p-4" style={{ "height": "100%", "borderRadius": "12px", "border": "1px solid #e2e8f0", "background": "#fff" }}>
               <figure><img src="/assets/images/rk3.png" className="img-fluid" alt="Multi-Hub Control" style={{ "maxHeight": "60px" }} /></figure>
               <h4 className="mt-3">Multi-Hub Sync</h4>
               <p className="text-muted">Transfer stocks between multi-tier warehouses with auto-logged shipment manifests.</p>
            </div>
         </div>
         {/* Picklist Auto-generation */}
         <div className="col-md-3 col-sm-6 mb-4">
            <div className="card service-box text-center p-4" style={{ "height": "100%", "borderRadius": "12px", "border": "1px solid #e2e8f0", "background": "#fff" }}>
               <figure><img src="/assets/images/rk4.png" className="img-fluid" alt="Picklist" style={{ "maxHeight": "60px" }} /></figure>
               <h4 className="mt-3">Aisle Navigation</h4>
               <p className="text-muted">Calculate optimal routes to reduce warehouse walk times by grouping neighboring SKU bins.</p>
            </div>
         </div>
      </div>
   </div>
</section>

{/* Comparison Table */}
<section className="features-table-main pt-60 pb-60 d-none d-md-block">
   <div className="container">
      <div className="row">
         <div className="col-12">
            <div className="section-title text-center mb-5">
               <h2>Traditional Warehousing vs. ChittorTech</h2>
               <p className="text-muted">Compare the performance difference between traditional systems and Chittortech's automated cloud logistics solution.</p>
            </div>
         </div>
      </div>
      <div className="row">
         <div className="col-12">
            <div className="comp-table-responsive">
                 <table className="comp-table mb-0">
                     <thead>
                         <tr>
                             <th>Feature Parameter</th>
                             <th>Traditional Warehousing</th>
                             <th style={{ "color": "var(--primary-color)" }}>ChittorTech</th>
                         </tr>
                     </thead>
                     <tbody>
                         <tr>
                             <td><strong>Location Accuracy</strong></td>
                             <td>Aisles are noted broadly. Items frequently get misplaced.</td>
                             <td>Specific Rack IDs and Bin codes for exact SKU mapping.</td>
                         </tr>
                         <tr>
                             <td><strong>Space Optimization</strong></td>
                             <td>Ad-hoc stacking, leading to underutilized vertical capacity.</td>
                             <td>Automated capacity limit controls and height planning.</td>
                         </tr>
                         <tr>
                             <td><strong>Internal Transfers</strong></td>
                             <td>Manual tracking with high transcription error rates.</td>
                             <td>1-click mobile barcode scans for instant rack-to-rack allocation.</td>
                         </tr>
                         <tr>
                             <td><strong>Inventory Visibility</strong></td>
                             <td>Delayed syncing, leading to over-selling or shelf stockouts.</td>
                             <td>Real-time live multi-hub dashboard updates instantly upon sale.</td>
                         </tr>
                         <tr>
                             <td><strong>Stock Reordering</strong></td>
                             <td>Periodic manual audits which often delay vendor purchase orders.</td>
                             <td>Automatic low-stock threshold triggers and email notifications.</td>
                         </tr>
                         <tr>
                             <td><strong>Picking Route Speed</strong></td>
                             <td>Staff walk aimlessly search-matching items using printed orders.</td>
                             <td>Optimized, grouped SKU picklists matching natural aisle steps.</td>
                         </tr>
                     </tbody>
                 </table>
            </div>
         </div>
      </div>
   </div>
</section>

{/* Call to Action Section */}
<section className="bridal-store-sec pb-60" style={{ "borderTop": "1px solid #e2e8f0", "borderBottom": "none", "background": "#fff !important" }}>
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div className="bridal-store text-center">
               <h2>Ready to Make Your Logistics Super-Efficient?</h2>
               <p>Schedule a detailed walk-through with our product experts and see how Chittortech can streamline your supply chain.</p>
               <button onClick={() => { window.location.href = "/contact-us"; }} className="cta-button" style={{ "borderRadius": "50px", "padding": "14px 32px", "fontWeight": "600", "background": "var(--primary-gradient)", "color": "#fff", "border": "none", "boxShadow": "0 4px 15px rgba(12, 166, 120, 0.25)" }}>Schedule a Free Demo</button>
            </div>
         </div>
      </div>
   </div>
</section>

{/* Integration Partners */}
<section className="partners-sec">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-12">
                <div className="heading-wrap text-center mb-5">
                    <h2>Our Integration <span>Partners</span></h2>
                    <p className="text-muted">ChittorTech integrates seamlessly with standard business, payment, and logistics platforms to keep your operations unified.</p>
                </div>
            </div>
        </div>
        <div className="integration-sec">
            <div className="container">
                <div className="logo-grid" style={{ "display": "flex", "gap": "20px", "justifyContent": "center", "flexWrap": "wrap" }}>
                    <div className="logo-box p-3" style={{ "background": "#fff", "borderRadius": "8px", "border": "1px solid #e2e8f0", "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "150px", "height": "80px" }}>
                        <img src="/assets/images/shiprocket.webp" className="img-fluid" alt="Shiprocket" style={{ "maxHeight": "40px" }} />
                    </div>
                    <div className="logo-box p-3" style={{ "background": "#fff", "borderRadius": "8px", "border": "1px solid #e2e8f0", "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "150px", "height": "80px" }}>
                        <img src="/assets/images/e-invoice.webp" className="img-fluid" alt="E-Invoice" style={{ "maxHeight": "40px" }} />
                    </div>
                    <div className="logo-box p-3" style={{ "background": "#fff", "borderRadius": "8px", "border": "1px solid #e2e8f0", "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "150px", "height": "80px" }}>
                        <img src="/assets/images/eway-bill.webp" className="img-fluid" alt="E-Way Bill" style={{ "maxHeight": "40px" }} />
                    </div>
                    <div className="logo-box p-3" style={{ "background": "#fff", "borderRadius": "8px", "border": "1px solid #e2e8f0", "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "150px", "height": "80px" }}>
                        <img src="/assets/images/shopify.webp" className="img-fluid" alt="Shopify" style={{ "maxHeight": "40px" }} />
                    </div>
                    <div className="logo-box p-3" style={{ "background": "#fff", "borderRadius": "8px", "border": "1px solid #e2e8f0", "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "150px", "height": "80px" }}>
                        <img src="/assets/images/woocommerce.webp" className="img-fluid" alt="Woocommerce" style={{ "maxHeight": "40px" }} />
                    </div>
                </div></div></div></div></section>

{/* FAQ section */}
<section className="faq-template pb-60">
   <div className="container">
      <div className="heading-wrap text-center mb-5">
         <h2>Frequently Asked <span>Questions</span></h2>
         <p className="text-muted">Answers to common logistics and storage management questions.</p>
      </div>
      <div className="row">
         <div className="col-md-12">
            <div className="faq-section">
               <div className="accordion" id="faqAccordion">
                  <div className="accordion-item" style={{ "border": "1px solid #e2e8f0", "borderRadius": "8px", "marginBottom": "12px", "overflow": "hidden" }}>
                     <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ "background": "#fff", "color": "#0f172a", "fontWeight": "600" }}>
                        How does Rack & Bin management improve picking efficiency?
                        </button>
                     </h2>
                     <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                        <div className="accordion-body text-muted" style={{ "background": "#f8fafc" }}>
                           Instead of cashiers or pickers walking aimlessly searching matching boxes, every SKU is registered with specific Rack IDs and Bin codes. When orders are processed, picklists are generated with items grouped by location order, streamlining routes.
                        </div>
                     </div>
                  </div>
                  <div className="accordion-item" style={{ "border": "1px solid #e2e8f0", "borderRadius": "8px", "marginBottom": "12px", "overflow": "hidden" }}>
                     <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ "background": "#fff", "color": "#0f172a", "fontWeight": "600" }}>
                        Can I track batch expiry thresholds?
                        </button>
                     </h2>
                     <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                        <div className="accordion-body text-muted" style={{ "background": "#f8fafc" }}>
                           Yes. For businesses handling groceries, pharmaceuticals, or perishable items, Chittortech logs specific batch numbers and expiration metrics. It triggers auto-alerts to notify procurement teams before stock expiries occur.
                        </div>
                     </div>
                  </div>
                  <div className="accordion-item" style={{ "border": "1px solid #e2e8f0", "borderRadius": "8px", "marginBottom": "12px", "overflow": "hidden" }}>
                     <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ "background": "#fff", "color": "#0f172a", "fontWeight": "600" }}>
                        Does the system support inter-branch stock transfers?
                        </button>
                     </h2>
                     <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                        <div className="accordion-body text-muted" style={{ "background": "#f8fafc" }}>
                           Absolutely. If you manage multiple store outlets or secondary storage depots, you can transfer product stock logs with a single mobile barcode scan. The system automatically updates counts on both terminals and logs inter-branch GST manifests.
                        </div>
                     </div>
                  </div>
                  <div className="accordion-item" style={{ "border": "1px solid #e2e8f0", "borderRadius": "8px", "marginBottom": "12px", "overflow": "hidden" }}>
                     <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{ "background": "#fff", "color": "#0f172a", "fontWeight": "600" }}>
                        How secure is multi-user access?
                        </button>
                     </h2>
                     <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                        <div className="accordion-body text-muted" style={{ "background": "#f8fafc" }}>
                           Super secure. The platform allows setting up distinct role profiles (e.g. stock picker, manager, admin) and restricts access to specific areas (such as invoicing settings, inventory valuations, or financial summaries) depending on credentials.
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

{/* Footer */}
    </>
  );
}
