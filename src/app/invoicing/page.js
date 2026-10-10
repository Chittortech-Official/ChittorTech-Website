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
                <i className={`fa-solid fa-file-invoice`}></i> Invoicing
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                OCR Document Processing & Automated Data AI
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Extract invoice data, document fields, and table entries automatically with vision AI models.
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
                <i className={`fa-solid fa-file-invoice`}></i>
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
            <div className="col-md-6 order-md-2">
                <div className="expertise-img text-end">
                    <figure>
                        <img src="/assets/images/Simple-Billing.png" className="img-fluid" alt="Chittortech Simple Billing Illustration" style={{ "maxHeight": "480px" }} />
                    </figure>
                </div>
            </div>
            <div className="col-md-6 order-md-1">
                <div className="heading-wrap text-start mobile-a pro-list">
                    <h2>Addressing Every Billing Challenge with a <span>Powerful Invoicing Engine</span></h2>
                </div>
                <div className="expertise-wrap pro-list">
                    <h5>Common Invoicing Challenges We Solve</h5>
                    <ul>
                        <li>
                            <strong>Long Checkout Queues & Counter Friction</strong><br />
                            Traditional billing methods slow down checkouts during peak hours, frustrating customers. Chittortech's barcode-enabled invoicing processes bills in milliseconds.
                        </li>
                        <li>
                            <strong>Complex Tax Calculations & GST Compliance</strong><br />
                            Manual calculation of SGST, CGST, IGST, and HSN codes often leads to errors. Chittortech automates HSN mapping and tax splits, ensuring 100% compliance.
                        </li>
                        <li>
                            <strong>Disconnected Inventory & Stockouts</strong><br />
                            Selling items without real-time stock reduction causes discrepancies. Our invoicing module immediately updates inventory levels across all store counters.
                        </li>
                        <li>
                            <strong>High Printing Costs & Paper Waste</strong><br />
                            Printing physical receipts adds recurring overhead. Chittortech offers instant digital invoices sent directly to customer WhatsApp numbers or emails.
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
                    <h2>Simple & Powerful Management <span>Billing Features</span></h2>
                    <p className="text-muted">High-speed invoicing tools designed for retail, wholesale, and multi-store operations.</p>
                </div>
                <div className="desktop-industries">
                    <div className="row justify-content-center">
                        <div className="col-md-3 col-sm-6">
                            <div className="boxes mb-4 flip-container">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-back">
                                            <img src="/assets/images/fast1.png" alt="Checkout" className="img-fluid mb-3" />
                                            <h4>Quick Checkout</h4>
                                            <p>Scan barcodes and checkout customers in seconds without delay.</p>
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
                                            <img src="/assets/images/fast2.png" alt="GST" className="img-fluid mb-3" />
                                            <h4>GST Automated</h4>
                                            <p>Automatically calculate IGST/CGST/SGST and map correct HSN codes.</p>
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
                                            <img src="/assets/images/fast3.png" alt="Returns" className="img-fluid mb-3" />
                                            <h4>Easy Returns</h4>
                                            <p>Process product exchanges and generate credit notes instantly.</p>
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
                                            <img src="/assets/images/fast4.png" alt="Products" className="img-fluid mb-3" />
                                            <h4>Custom Templates</h4>
                                            <p>Choose from multiple invoice designs to match your branding.</p>
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
                                            <img src="/assets/images/fast5.png" alt="Payments" className="img-fluid mb-3" />
                                            <h4>Multi-Payment</h4>
                                            <p>Accept cards, UPI QR scans, wallets, and store credit tags.</p>
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
                                            <img src="/assets/images/fast7.png" alt="WhatsApp" className="img-fluid mb-3" />
                                            <h4>WhatsApp Delivery</h4>
                                            <p>Auto-deliver PDF invoices to customer phone numbers instantly.</p>
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
                                            <img src="/assets/images/fast10.png" alt="Reports" className="img-fluid mb-3" />
                                            <h4>Sales Reports</h4>
                                            <p>Track real-time billing performance, peaks, and cash registers.</p>
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
                                            <img src="/assets/images/fast13.png" alt="Loyalty" className="img-fluid mb-3" />
                                            <h4>Loyalty Rewards</h4>
                                            <p>Accumulate and redeem points automatically at checkout.</p>
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

{/* Automated Invoicing Tools */}
<section className="complete-seo-service">
   <div className="container my-5">
      <div className="heading-wrap text-center">
         <h2>Automated Billing with <span>Advanced Management Integration</span></h2>
         <p>Expand operational limits with advanced modules for payments, offline checkouts, and image selection.</p>
      </div>
      <div className="row mt-4">
         {/* Digi-Pay */}
         <div className="col-md-3 col-sm-6 mb-4">
            <div className="card service-box text-center p-4" style={{ "height": "100%", "borderRadius": "12px", "border": "1px solid #e2e8f0", "background": "#fff" }}>
               <figure><img src="/assets/images/auto1.png" className="img-fluid" alt="Digi-Pay" style={{ "maxHeight": "60px" }} /></figure>
               <h4 className="mt-3">Digi-Pay</h4>
               <p className="text-muted">Initiate UPI payment and instantly display a dynamic, order-linked QR code on a customer-facing screen.</p>
            </div>
         </div>
         {/* V-Checkout */}
         <div className="col-md-3 col-sm-6 mb-4">
            <div className="card service-box text-center p-4" style={{ "height": "100%", "borderRadius": "12px", "border": "1px solid #e2e8f0", "background": "#fff" }}>
               <figure><img src="/assets/images/auto2.png" className="img-fluid" alt="Digi-Checkout" style={{ "maxHeight": "60px" }} /></figure>
               <h4 className="mt-3">Digi-Checkout</h4>
               <p className="text-muted">Enable customers to scan product barcodes with their smartphones, pay online, and bypass billing counter lines.</p>
            </div>
         </div>
         {/* Hybrid Management */}
         <div className="col-md-3 col-sm-6 mb-4">
            <div className="card service-box text-center p-4" style={{ "height": "100%", "borderRadius": "12px", "border": "1px solid #e2e8f0", "background": "#fff" }}>
               <figure><img src="/assets/images/auto3.png" className="img-fluid" alt="Hybrid Management" style={{ "maxHeight": "60px" }} /></figure>
               <h4 className="mt-3">Hybrid Management</h4>
               <p className="text-muted">Generate invoices offline during network outages. Data automatically syncs with the cloud once back online.</p>
            </div>
         </div>
         {/* Image-Based Management */}
         <div className="col-md-3 col-sm-6 mb-4">
            <div className="card service-box text-center p-4" style={{ "height": "100%", "borderRadius": "12px", "border": "1px solid #e2e8f0", "background": "#fff" }}>
               <figure><img src="/assets/images/auto4.png" className="img-fluid" alt="Image-Based Management" style={{ "maxHeight": "60px" }} /></figure>
               <h4 className="mt-3">Image-Based Management</h4>
               <p className="text-muted">Visual grid layout for products without barcodes. Cashiers can tap images for rapid billing on touch terminals.</p>
            </div>
         </div>
      </div>
   </div>
</section>

{/* How it works: Step-by-step Process */}
<section className="step-process-tab-main p-0">
   <div className="container">
      <div className="row">
         <div className="col-12">
            <div className="section-title text-center mb-5">
               <h2>Three-Step Billing Process</h2>
               <p className="text-muted">Invoicing has never been faster or simpler. Train billing operators in less than 5 minutes.</p>
            </div>
         </div>
         <div className="col-12">
            <div className="step-box-wrapper" style={{ "display": "flex", "gap": "20px", "justifyContent": "center", "flexWrap": "wrap" }}>
               <div className="step-box text-center p-4" style={{ "flex": "1", "minWidth": "250px", "background": "#fff", "borderRadius": "12px", "boxShadow": "0 4px 15px rgba(0,0,0,0.02)", "border": "1px solid #e2e8f0" }}>
                  <img loading="lazy" src="/assets/images/scan.gif" alt="scan" className="img-fluid mb-3" style={{ "maxHeight": "100px" }} />
                  <h5>Step 1</h5>
                  <p className="text-muted">Scan the item barcode to auto-populate GST and discount parameters.</p>
               </div>
               <div className="step-box text-center p-4" style={{ "flex": "1", "minWidth": "250px", "background": "#fff", "borderRadius": "12px", "boxShadow": "0 4px 15px rgba(0,0,0,0.02)", "border": "1px solid #e2e8f0" }}>
                  <img loading="lazy" src="/assets/images/payment-method.gif" alt="payment-method" className="img-fluid mb-3" style={{ "maxHeight": "100px" }} />
                  <h5>Step 2</h5>
                  <p className="text-muted">Select payment mode (Cash, Card, or Instant QR) and accept payment.</p>
               </div>
               <div className="step-box text-center p-4" style={{ "flex": "1", "minWidth": "250px", "background": "#fff", "borderRadius": "12px", "boxShadow": "0 4px 15px rgba(0,0,0,0.02)", "border": "1px solid #e2e8f0" }}>
                  <img loading="lazy" src="/assets/images/whatapp.gif" alt="print" className="img-fluid mb-3" style={{ "maxHeight": "100px" }} />
                  <h5>Step 3</h5>
                  <p className="text-muted">Invoice auto-delivers to customer WhatsApp & Email while printing.</p>
               </div>
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
               <h2>Traditional Billing vs. ChittorTech</h2>
               <p className="text-muted">Compare the performance difference between traditional systems and Chittortech's automated cloud invoicing engine.</p>
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
                             <th>Traditional Billing Systems</th>
                             <th style={{ "color": "var(--primary-color)" }}>ChittorTech</th>
                         </tr>
                     </thead>
                     <tbody>
                         <tr>
                             <td><strong>Invoice Scaling</strong></td>
                             <td>Limited numbers per register, slow loading with large invoices.</td>
                             <td>Unlimited invoices, scalable across distributed chains.</td>
                         </tr>
                         <tr>
                             <td><strong>Hybrid Network Sync</strong></td>
                             <td>Online or offline only. Risk of data conflict on reconnect.</td>
                             <td>Fully hybrid offline billing with automated cloud reconciliation.</td>
                         </tr>
                         <tr>
                             <td><strong>Payment Methods</strong></td>
                             <td>Cash and credit card terminals only. Manual registers.</td>
                             <td>Integrated UPI split payment, dynamic QR scans, cards, and cash ledger.</td>
                         </tr>
                         <tr>
                             <td><strong>Digital Receipts</strong></td>
                             <td>Paper thermal rolls only. Susceptible to damage or loss.</td>
                             <td>Instant paperless delivery via WhatsApp, Email, or SMS with 1-click.</td>
                         </tr>
                         <tr>
                             <td><strong>Multi-Store Counters</strong></td>
                             <td>Requires separate local software setups and complex syncing.</td>
                             <td>Centralized server hosting supporting 1 to 100+ distributed branches.</td>
                         </tr>
                         <tr>
                             <td><strong>Security Backups</strong></td>
                             <td>Local hard drives. At high risk of hardware failure and virus attacks.</td>
                             <td>Cloud-secured storage (Microsoft Azure) with automatic periodic backup encryption.</td>
                         </tr>
                     </tbody>
                 </table>
            </div>
         </div>
      </div>
   </div>
</section>

{/* Call to Action Section */}
<section className="cta-section">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div className="cta-box text-center">
               <div className="phone-icon mb-4">
                  <i className="fa-solid fa-envelope" style={{ "fontSize": "32px", "color": "var(--primary-color)" }}></i>
               </div>
               <h2>Start Invoicing Smarter Today</h2>
               <p>Boost checkouts, simplify compliance, and reduce recurring costs. Get started with a personalized demo.</p>
               <button onClick={() => { window.location.href = "/contact-us"; }} className="cta-button">Explore Pricing Plans</button>
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
                        <img src="/assets/images/paytm.webp" className="img-fluid" alt="Paytm" style={{ "maxHeight": "40px" }} />
                    </div>
                    <div className="logo-box p-3" style={{ "background": "#fff", "borderRadius": "8px", "border": "1px solid #e2e8f0", "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "150px", "height": "80px" }}>
                        <img src="/assets/images/razorpay.webp" className="img-fluid" alt="Razorpay" style={{ "maxHeight": "40px" }} />
                    </div>
                    <div className="logo-box p-3" style={{ "background": "#fff", "borderRadius": "8px", "border": "1px solid #e2e8f0", "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "150px", "height": "80px" }}>
                        <img src="/assets/images/phonepe.webp" className="img-fluid" alt="PhonePe" style={{ "maxHeight": "40px" }} />
                    </div>
                    <div className="logo-box p-3" style={{ "background": "#fff", "borderRadius": "8px", "border": "1px solid #e2e8f0", "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "150px", "height": "80px" }}>
                        <img src="/assets/images/pinelabs.webp" className="img-fluid" alt="Pine Labs" style={{ "maxHeight": "40px" }} />
                    </div>
                    <div className="logo-box p-3" style={{ "background": "#fff", "borderRadius": "8px", "border": "1px solid #e2e8f0", "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "150px", "height": "80px" }}>
                        <img src="/assets/images/tally.webp" className="img-fluid" alt="Tally" style={{ "maxHeight": "40px" }} />
                    </div>
                </div></div></div></div></section>

{/* FAQ section */}
<section className="faq-template pb-60">
   <div className="container">
      <div className="heading-wrap text-center mb-5">
         <h2>Frequently Asked <span>Questions</span></h2>
         <p className="text-muted">Answers to common invoicing questions.</p>
      </div>
      <div className="row">
         <div className="col-md-12">
            <div className="faq-section">
               <div className="accordion" id="faqAccordion">
                  <div className="accordion-item" style={{ "border": "1px solid #e2e8f0", "borderRadius": "8px", "marginBottom": "12px", "overflow": "hidden" }}>
                     <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ "background": "#fff", "color": "#0f172a", "fontWeight": "600" }}>
                        Is the software GST compliant?
                        </button>
                     </h2>
                     <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                        <div className="accordion-body text-muted" style={{ "background": "#f8fafc" }}>
                           Yes. ChittorTech generates 100% GST-compliant invoices. It automatically splits IGST, CGST, and SGST, allows setting product-level HSN codes, and exports reports compatible with GSTR-1 and GSTR-3B filings.
                        </div>
                     </div>
                  </div>
                  <div className="accordion-item" style={{ "border": "1px solid #e2e8f0", "borderRadius": "8px", "marginBottom": "12px", "overflow": "hidden" }}>
                     <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ "background": "#fff", "color": "#0f172a", "fontWeight": "600" }}>
                        Does the invoicing software work offline?
                        </button>
                     </h2>
                     <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                        <div className="accordion-body text-muted" style={{ "background": "#f8fafc" }}>
                           Absolutely. Our Hybrid Management database lets you generate billing invoices when internet connectivity is offline. Once the connection is re-established, the records auto-sync with the central cloud dashboard.
                        </div>
                     </div>
                  </div>
                  <div className="accordion-item" style={{ "border": "1px solid #e2e8f0", "borderRadius": "8px", "marginBottom": "12px", "overflow": "hidden" }}>
                     <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ "background": "#fff", "color": "#0f172a", "fontWeight": "600" }}>
                        How are invoices shared digitally?
                        </button>
                     </h2>
                     <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                        <div className="accordion-body text-muted" style={{ "background": "#f8fafc" }}>
                           With AI Knowledge Base and API configurations active, billing slips are automatically formatted into a mobile-responsive PDF and sent directly to the customer's verified WhatsApp number or email address immediately upon completing the checkout.
                        </div>
                     </div>
                  </div>
                  <div className="accordion-item" style={{ "border": "1px solid #e2e8f0", "borderRadius": "8px", "marginBottom": "12px", "overflow": "hidden" }}>
                     <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{ "background": "#fff", "color": "#0f172a", "fontWeight": "600" }}>
                        Does it support multiple stores or billing counters?
                        </button>
                     </h2>
                     <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                        <div className="accordion-body text-muted" style={{ "background": "#f8fafc" }}>
                           Yes. Chittortech is designed to grow with your business. You can configure multiple billing terminals within a single store, or manage invoicing analytics across dozens of locations from a single admin account.
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
