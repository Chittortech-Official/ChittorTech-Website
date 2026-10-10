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
                <i className={`fa-solid fa-boxes-stacked`}></i> Inventory
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Custom LLM Fine-Tuning & Model Training
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Domain-specific AI models trained on your proprietary business data with high accuracy and 100% privacy.
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
                <i className={`fa-solid fa-boxes-stacked`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* header */}
           
    {/* header */}
      
     

      {/* Solutions Holds section start here */}
      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row align-items-center">
                 <div className="col-md-6">
    <div className="heading-wrap text-start mobile-a pro-list">
        <h2>No. 1 AI-Powered Inventory Management for <span>SMEs, MSMEs & Retailers</span></h2>
        <p>
            ChittorTech is India’s leading AI-driven, cloud-based inventory management system,
            built for retailers, wholesalers, distributors, and fast-growing businesses.
        </p>
    </div>

    <div className="expertise-wrap pro-list">
        <h5>Common Inventory Challenges We Solve</h5>
        <ul>
            <li>
                <strong>Stock Inaccuracy:</strong> Manual tracking causes data mismatch and frequent errors.
            </li>
            <li>
                <strong>Overstock &amp; Stock-Outs:</strong> Poor demand planning affects sales and cash flow.
            </li>
            <li>
                <strong>Online–Offline Stock Gaps:</strong> Limited visibility across channels leads to delays.
            </li>
            <li>
                <strong>Slow Inventory Audits:</strong> Manual verification wastes time and increases business risk.
            </li>
        </ul>

        <p>
            <strong>With AI-powered automation, real-time tracking, and smart forecasting,</strong>
            ChittorTech gives you complete inventory control — anytime, anywhere.
        </p>

        <a href="/contact-us" className="schedule-btn">Choose Your Plan</a>
    </div>
</div>

                  <div className="col-md-6">
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img101.png" alt="Local &amp; National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/* Solutions Holds section end here */}

      {/* Solutions Holds section start here */}
      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-6">
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img102.png" alt="Local &amp; National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                 <div className="col-md-6">
    <div id="features" className="heading-wrap text-start mobile-a pro-list">
        <h2>Key <span>Features</span></h2>
    </div>

    <div className="expertise-wrap pro-list">
        <ul>
            <li>
                <strong>Real-Time Inventory Visibility</strong><br />
                Monitor stock movement across all stores and warehouses from one centralized, AI-powered dashboard.
            </li>
            <li>
                <strong>AI-Based Demand Forecasting</strong><br />
                Identify fast-moving and slow-moving products with intelligent reports to prevent overstocking or stock shortages.
            </li>
            <li>
                <strong>Seamless Online &amp; Offline Sync</strong><br />
                Automatically synchronize inventory between physical outlets and online channels for a unified stock view.
            </li>
            <li>
                <strong>Smart Stock Verification</strong><br />
                Use AI-enabled mobile audits to verify inventory quickly, accurately, and without manual errors.
            </li>
        </ul>
    </div>
</div>

              </div>
          </div>
      </section>
      {/* Solutions Holds section end here */}

      <section     className="industry new-cards accounting-sec">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="heading-wrap">
                        <h2>Advanced AI Inventory  <span>Management Tools</span> </h2>
                     </div>
                     <div className="desktop-industries">
                        <div className="row justify-content-center">
                           <div className="col-md-3 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <img src="/assets/images/e1.png" alt="Billing" className="img-fluid mb-3" />
                                          <h4>Smart Billing & Item Master</h4>
                                          <p>Centralize all SKUs, product details, pricing, and specifications for faster billing and better control.</p>
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
                                          <img src="/assets/images/e2.png" alt="Inbuilt Accounting Modules" className="img-fluid mb-3" />
                                          <h4>Inbuilt Accounting Integration</h4>
                                          <p>Automatically sync inventory with accounting modules for accurate financial records and GST-ready reports.</p>
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
                                          <img src="/assets/images/e3.png" alt="Organize Clothing Stock" className="img-fluid mb-3" />
                                          <h4>Multiple Product Variants</h4>
                                          <p>Easily manage size, color, material, brand, and style variations from a single system.</p>
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
                                          <img src="/assets/images/e4.png" alt="Best Selling Apparel" className="img-fluid mb-3" />
                                          <h4>AI-Powered Automated Reorders</h4>
                                          <p> AI monitors stock levels and auto-generates purchase orders when inventory reaches reorder limits.</p>
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
                                          <img src="/assets/images/e5.png" alt="Offers and Discount Management" className="img-fluid mb-3" />
                                          <h4>Product–Supplier Mapping</h4>
                                          <p>Link products with preferred suppliers to ensure timely restocking and smoother procurement.</p>
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
                                          <img src="/assets/images/e6.png" alt="Sort Style-wise" className="img-fluid mb-3" />
                                          <h4>Warehouse Inventory Tracking</h4>
                                          <p>Track inventory movement and availability across multiple warehouses in real time.</p>
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
                                          <img src="/assets/images/e7.png" alt="WhatsApp Integration" className="img-fluid mb-3" />
                                          <h4>Smart Stock Alerts</h4>
                                          <p>Receive instant alerts for low stock, negative stock, or critical inventory situations.</p>
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
                                          <img src="/assets/images/e8.png" alt="GST-Billing Compatibility" className="img-fluid mb-3" />
                                          <h4>
                                            Expiry & Shelf-Life Management
                                          </h4>
                                          <p>Track product expiry dates to reduce wastage and improve stock rotation.</p>
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
                                          <img src="/assets/images/e9.png" alt="GST-Billing Compatibility" className="img-fluid mb-3" />
                                          <h4>
                                            Barcode & Label Generation
                                          </h4>
                                          <p>Create high-quality barcodes and custom labels for faster scanning and inventory accuracy.</p>
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
                                          <img src="/assets/images/e10.png" alt="GST-Billing Compatibility" className="img-fluid mb-3" />
                                          <h4>
                                            Seamless Stock Transfers
                                          </h4>
                                          <p>Monitor and manage stock movement between stores and warehouses with full traceability.</p>
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
                                          <img src="/assets/images/e11.png" alt="GST-Billing Compatibility" className="img-fluid mb-3" />
                                          <h4>
                                           Shipment & Delivery Tracking
                                          </h4>
                                          <p>Track inventory from warehouse dispatch to final customer delivery in real time.</p>
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

      <section className="clothing-stores-sec pro-clothing-sec">
           <div className="container">
                  <div className="row align-items-center">
                      <div className="col-md-12">
                          <div className="clothing-stores-text">
                              <h2 className="text-center">Benefits & How to Use – ChittorTech Inventory Software</h2>
                              <div className="ai-solutions-item-wrap inventory-wrap">
                                 <div className="ai-solutions-item">
                                     <h4>1. Efficient Inventory Tracking</h4>
                                     <p><strong>Benefit:</strong> Avoid stock discrepancies and maintain accurate records.</p>
                                     <p><strong>How to Use:</strong> Monitor stock levels for all products on a central dashboard in real-time.</p>
                                 </div>
                                 <div className="ai-solutions-item">
                                     <h4>2. Demand Forecasting</h4>
                                     <p><strong>Benefit:</strong> Reduce overstocking and understocking issues.</p>
                                     <p><strong>How to Use:</strong> Analyze best-selling and slow-moving items, then plan orders accordingly.</p>
                                 </div>
                                 <div className="ai-solutions-item">
                                     <h4>3. Multi-Location Management</h4>
                                     <p><strong>Benefit:</strong>  Manage inventory for multiple stores and warehouses efficiently.</p>
                                     <p><strong>How to Use:</strong> Use the software to consolidate stock data from all locations.</p>
                                 </div>
                                 <div className="ai-solutions-item">
                                     <h4>4. Automated Reordering</h4>
                                     <p><strong>Benefit:</strong> Prevent stockouts and maintain smooth operations.</p>
                                     <p><strong>How to Use:</strong> Set reorder thresholds, and the system will generate purchase orders automatically.</p>
                                 </div>
                                 <div className="ai-solutions-item">
                                     <h4>5. Expiry & Batch Management</h4>
                                     <p><strong>Benefit:</strong> Minimize wastage and improve product traceability.</p>
                                     <p><strong>How to Use:</strong> Track expiration dates and batches using mobile app alerts.</p>
                                 </div>
                                 <div className="ai-solutions-item">
                                     <h4>6. Supplier Management</h4>
                                     <p><strong>Benefit:</strong> Ensure timely replenishment and smooth supply chain operations.</p>
                                     <p><strong>How to Use:</strong> Map products to suppliers, maintain contact details, and track transactions.</p>
                                 </div>
                                 <div className="ai-solutions-item">
                                     <h4>7. Feedback & Analytics</h4>
                                     <p><strong>Benefit:</strong> Make informed decisions to boost efficiency and profitability.</p>
                                     <p><strong>How to Use:</strong> Generate reports for stock movement, low/high-selling items, and category-wise sales.</p>
                                 </div>
                                 <div className="ai-solutions-item">
                                     <h4>8. Integration with Management, AI Knowledge Base, and E-commerce</h4>
                                     <p><strong>Benefit:</strong> Centralized control for all business operations.</p>
                                     <p><strong>How to Use:</strong> Connect the inventory system to billing, AI Knowledge Base, accounting, and online platforms.</p>
                                 </div>
                                 <div className="ai-solutions-item">
                                     <h4>9. Mobile Accessibility</h4>
                                     <p><strong>Benefit:</strong> Manage inventory anytime, anywhere.</p>
                                     <p><strong>How to Use:</strong>  Access dashboards and perform audits from smartphones or tablets.</p>
                                 </div>
                             </div>
                          </div>
                      </div>
                  </div></div></section>

       


      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="heading-wrap text-center">
                          <h2> Inventory Reports &  <span>Analytics</span> </h2>
                          <p>ChittorTech GST accounting software integrates seamlessly with:</p>
                       </div>
                       <div className="why-choose-wrap">
                          <ul>
                             <li>
                                <figure> <img src="/assets/images/platforms1.png" alt="ChittorTech Inventory - platforms1" /> </figure>
                                <h3>AI Inventory Turnover Analysis </h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/platforms2.png" alt="ChittorTech Inventory - platforms2" /> </figure>
                                <h3>Top & Low Performing Products </h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/platforms3.png" alt="ChittorTech Inventory - platforms3" /> </figure>
                                <h3>Low & Negative Stock Alerts </h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/platforms4.png" alt="ChittorTech Inventory - platforms4" /> </figure>
                                <h3>Smart ABC Classification </h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/platforms5.png" alt="ChittorTech Inventory - platforms5" /> </figure>
                                <h3>Intelligent Stock Reorder Reports </h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/platforms6.png" alt="ChittorTech Inventory - platforms6" /> </figure>
                                <h3>Stock Movement & Adjustment Tracking </h3>
                             </li>
                          </ul>
                       </div>
                  </div>
              </div>
          </div>
      </section>
     



      <section className="clothing-stores-sec software-sec">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-5">
                    <div className="clothing-stores-img">
                        <figure>
                           <img src="/assets/images/img105.jpg" alt="ChittorTech Inventory - img105" />
                        </figure>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="clothing-stores-text software-wrap specialized-box">
                        <h2>Why ChittorTech Cloud-Based Inventory Management Software?</h2>
                        <ul>
                           <li><strong>Designed for All Business Types:</strong> SMEs to large retail chains.</li>
                           <li><strong>Cloud-Based Software:</strong> Access your inventory data anytime, anywhere.</li>
                           <li><strong>Seamless Integrations:</strong> POS, AI Knowledge Base, accounting, and e-commerce platforms.</li>
                           <li><strong>24/7 Access & Multi-Device Operability:</strong> Mobile, tablet, or desktop.</li>
                           <li><strong>Custom Inventory Features:</strong> Tailored modules like FIFO, LIFO, or Just-in-Time.</li>
                           <li><strong>Real-Time Analytics:</strong> Make smarter, data-driven decisions.</li>
                        </ul>
                       <strong>
Thousands   merchants trust ChittorTech for efficient 
  <a href="/inventory" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
    inventory management in India
  </a>.
</strong>

                    </div>
                </div>
            </div>
        </div>
      </section>

    <section className="cta-section">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="cta-box">
                        <h2>Experience Now!</h2>
                       <p>
  Streamline your inventory, reduce errors, save time, and improve profitability with ChittorTech – the 
  <a href="/inventory" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
    best cloud-based inventory management software in India
  </a>.
</p>

                        <button  onClick={() => { window.location.href = "/contact-us"; }}   className="cta-button">Schedule a free demo today!</button>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      <section className="faq-template">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="faq-section">
                          <div className="heading-wrap text-center">
                              <h2>Questions About Cloud-Based Inventory Management  <span>Software in India</span> </h2>
                          </div>
                          <div className="accordion" id="faqAccordion">

                              {/* GST FAQ 1 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingOne">
                                      <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                          How does ChittorTech help with inventory tracking?
                                      </button>
                                  </h2>
                                  <div id="collapseOne" className="accordion-collapse collapse show"
                                      aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          It provides real-time updates on stock levels across all stores and warehouses, reducing errors and ensuring accurate inventory data.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 2 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingTwo">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                          Can it prevent overstocking and understocking?
                                      </button>
                                  </h2>
                                  <div id="collapseTwo" className="accordion-collapse collapse"
                                      aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Yes, automated reorders and demand forecasting maintain optimal stock levels for smooth operations.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 3 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingThree">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                          Does it synchronize online and offline inventory?
                                      </button>
                                  </h2>
                                  <div id="collapseThree" className="accordion-collapse collapse"
                                      aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Absolutely. The software consolidates online and offline stock in one dashboard for better visibility and control.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 4 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingFour">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                           How does stock verification become easier?
                                      </button>
                                  </h2>
                                  <div id="collapseFour" className="accordion-collapse collapse"
                                      aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Mobile app-based audits automate counting, making stock verification fast, accurate, and paperless.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 5 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingFive">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                          Can it track product expiry and batches?
                                      </button>
                                  </h2>
                                  <div id="collapseFive" className="accordion-collapse collapse"
                                      aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Yes, expiry management and batch tracking minimize wastage and improve traceability.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 6 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingSix">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                          How does supplier management help?
                                      </button>
                                  </h2>
                                  <div id="collapseSix" className="accordion-collapse collapse"
                                      aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          It maps products to suppliers, tracks transactions, and ensures timely replenishment of inventory.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 7 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingSeven">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                          Does it provide inventory analytics and reports?
                                      </button>
                                  </h2>
                                  <div id="collapseSeven" className="accordion-collapse collapse"
                                      aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Yes, detailed insights on stock turnover, fast/slow-moving items, and category sales help optimize decisions.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 8 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingEight">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                          Can it integrate with Management, AI Knowledge Base, and e-commerce systems?
                                      </button>
                                  </h2>
                                  <div id="collapseEight" className="accordion-collapse collapse"
                                      aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Yes, seamless integration allows unified operations across sales, accounting, and customer management.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 9 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingNine">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                          Is it accessible on mobile devices?
                                      </button>
                                  </h2>
                                  <div id="collapseNine" className="accordion-collapse collapse"
                                      aria-labelledby="headingNine" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Yes, you can monitor and manage inventory anytime, anywhere, using any device.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 10 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingTen">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                           What are the main benefits of using ChittorTech?
                                      </button>
                                  </h2>
                                  <div id="collapseTen" className="accordion-collapse collapse"
                                      aria-labelledby="headingTen" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          It reduces manual errors, saves time, optimizes stock levels, prevents wastage, and ensures efficient multi-store management.
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
