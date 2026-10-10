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
                <i className={`fa-solid fa-calculator`}></i> Accounting
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                AI Predictive Analytics & Data Intelligence
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Turn raw operational data into accurate financial forecasts, trend analysis, and business insights.
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
                <i className={`fa-solid fa-calculator`}></i>
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
                          <h2> India’s #1 AI-Powered AI & IT Solutions Accounting    <span> Solution for Retail</span> </h2>
                          <p>ChittorTech offers an intelligent, AI-driven AI & IT Solutions accounting software built for retail businesses across India. Simplify operations, stay GST-compliant, and gain complete financial control.</p>
                       </div>
                       <div className="expertise-wrap pro-list">
                           <h5>Solve Key Retail Accounting Challenges</h5>
                       <ul>
    <li>
        <strong>GST Billing & Returns Made Easy</strong> – Automate invoices, refunds, and GST filings without errors.
    </li>
    <li>
        <strong>Real-Time Business Insights</strong> – Access instant sales, inventory, and financial analytics
        for smarter decision-making.
    </li>
    <li>
        <strong>Accurate Inventory Accounting</strong> – Track stock, purchases, and post-sale inventory
        seamlessly across multiple stores.
    </li>
    <li>
        <strong>Instant Financial Reports</strong> – Generate P&L statements, cash flow summaries, and
        branch-wise reports in seconds.
    </li>
</ul>

                           <p> <strong>If yes:</strong> Then <strong>ChittorTech </strong> is the perfect accounting solution for your retail business.</p>
                           <a  href="/contact-us"  className="schedule-btn"> Choose Your Plan</a>
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
                      <div className="heading-wrap text-start mobile-a pro-list">
                          <h2>Key Benefits of India’s #1 AI-Powered AI & IT Solutions for  <span>GST Accounting  </span> </h2>
                       </div>
                       <div className="expertise-wrap pro-list">
                          <ul>
    <li>
        <strong>AI-Driven GST Compliance</strong> – Automatically calculate taxes, generate accurate financial
        statements, and file GST returns effortlessly.
    </li>
    <li>
        <strong>Smart Inventory Management</strong> – Real-time stock tracking, automated post-sale updates,
        and centralized item management across all outlets.
    </li>
    <li>
        <strong>Seamless Payment Handling</strong> – Manage customer payments, supplier invoices, and multiple
        payment modes efficiently from one platform.
    </li>
    <li>
        <strong>Live Financial Reporting</strong> – Generate instant, accurate P&amp;L statements, balance
        sheets, and branch-wise financial summaries with AI insights.
    </li>
</ul>

                           
                           <a  href="/contact-us"  className="schedule-btn"> Choose Your Plan</a>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/* Solutions Holds section end here */}

      <section id="features" className="industry new-cards accounting-sec">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="heading-wrap">
                        <h2>India’s #1 AI-Powered AI & IT Solutions  <span>Accounting for Retail</span> </h2>
                     </div>
                     <div className="desktop-industries">
                        <div className="row justify-content-center">
                           <div className="col-md-3 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <img src="/assets/images/e1.png" alt="Billing" className="img-fluid mb-3" />
                                          <h4>AI-Driven Invoicing </h4>
                                          <p>Generate GST-compliant invoices and automated E-Invoices with zero errors.</p>
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
                                          <h4>	E-Way Bill Automation </h4>
                                          <p>Automatically create E-Way bills for seamless goods movement.</p>
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
                                          <h4> 	Multi-Store Management </h4>
                                          <p>Manage accounts for all outlets from a single dashboard.</p>
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
                                          <h4>	Tally & POS Integration </h4>
                                          <p> Sync your data for real-time reporting and accuracy.</p>
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
                                          <h4>	User Permissions & Security </h4>
                                          <p>Protect sensitive information with role-based access controls.</p>
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
                                          <h4>Anytime, Anywhere Access </h4>
                                          <p>Monitor accounting and inventory from any device.</p>
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
                                          <h4>	Multi-Currency Handling </h4>
                                          <p>Process payments in multiple currencies with automatic conversion.</p>
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
                                             Inventory Accounting 
                                          </h4>
                                          <p>Track stock, sales, and post-sale updates seamlessly.</p>
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
                                             Comprehensive Ledgers 
                                          </h4>
                                          <p>Journal Books, Cash Books, Trial Balances, General Ledgers.</p>
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
                                            	Branch-Wise Reports 
                                          </h4>
                                          <p>Compare performance across outlets effortlessly.</p>
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
                                            	Expense & Asset Management 
                                          </h4>
                                          <p> Monitor financial health with balance sheets and expense tracking.</p>
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
                                          <img src="/assets/images/e12.png" alt="GST-Billing Compatibility" className="img-fluid mb-3" />
                                          <h4>
                                             Budgeting & Forecasting 
                                          </h4>
                                          <p>Plan resources, allocate budgets, and monitor growth intelligently.</p>
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
                      <div className="col-md-6">
                          <div className="clothing-stores-text">
                              <h2>India’s #1 AI-Powered Cloud Accounting Solution</h2>
                             <ul>
    <li>
        <strong>Integrated Business Hub</strong> – Manage accounting, billing, POS, AI Knowledge Base, payroll, GST compliance,
        and online store operations seamlessly—all in a single AI-driven platform.
    </li>
    <li>
        <strong>Smart E-Invoicing</strong> – Instantly generate and share digital invoices with automated GST
        compliance, powered by AI to reduce errors and speed up processes.
    </li>
    <li>
        <strong>AI-Driven GST Filing</strong> – Simplify tax management with automated calculations, audit-ready
        reports, and AI-backed error detection for faster, accurate filings.
    </li>
    <li>
        <strong>Seamless Tally Synchronization</strong> – Keep your records aligned and generate detailed reports
        effortlessly, ensuring consistency across platforms.
    </li>
    <li>
        <strong>On-the-Go Financial Insights</strong> – Access P&amp;L statements, trial balances, cash flow,
        and other financial data anytime via mobile, with AI analytics highlighting key trends.
    </li>
    <li>
        <strong>Predictive Business Intelligence</strong> – AI-powered forecasts and insights help optimize
        resources, identify profitable opportunities, and make smarter business decisions.
    </li>
    <li>
        <strong>Centralized Multi-Store Control</strong> – Oversee all outlets from a single dashboard, with AI
        ensuring uniform accounting practices and real-time monitoring.
    </li>
    <li>
        <strong>Effortless User Experience</strong> – Intuitive design and AI assistance make navigation simple
        for retailers, even those with minimal accounting knowledge.
    </li>
</ul>

                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="clothing-stores-img text-end">
                              <figure>
                                 <img src="/assets/images/img103.jpg" alt="ChittorTech Accounting - img103" />
                              </figure>
                          </div>
                      </div>
                  </div></div></section>

      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="heading-wrap text-center">
                          <h2> Unlock the Power of  <span>Integrations</span> </h2>
                        <p>
  ChittorTech 
  <a href="/accounting" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
    GST accounting software
  </a> 
  integrates seamlessly with:
</p>

                       </div>
                       <div className="why-choose-wrap">
                          <ul>
                             <li>
                                <figure> <img src="/assets/images/platforms1.png" alt="ChittorTech Accounting - platforms1" /> </figure>
                                <h3>E-commerce Platforms</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/platforms2.png" alt="ChittorTech Accounting - platforms2" /> </figure>
                                <h3>Communication & Marketing Tools</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/platforms3.png" alt="ChittorTech Accounting - platforms3" /> </figure>
                                <h3>Payment Solutions</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/platforms4.png" alt="ChittorTech Accounting - platforms4" /> </figure>
                                <h3>Business Applications</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/platforms5.png" alt="ChittorTech Accounting - platforms5" /> </figure>
                                <h3>Shipping & Logistics</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/platforms6.png" alt="ChittorTech Accounting - platforms6" /> </figure>
                                <h3>E-Invoicing & Compliance Tools</h3>
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
                   <div className="col-md-7">
                       <div className="clothing-stores-text software-wrap specialized-box">
                           <h2>Fuel Retail Success with India’s #1 AI Cloud Accounting Platform</h2>
                            
                           <h5>Core Advantages:</h5>
                          <ul>
    <li>Intelligent Finance Engine</li>
    <li>Automated GST &amp; E-Invoice Suite</li>
    <li>Unified Multi-Store Control</li>
    <li>Insight-Driven Analytics</li>
    <li>Connected E-Commerce Management</li>
    <li>Hassle-Free Tax Compliance</li>
</ul>

                       </div>
                   </div>
                   <div className="col-md-5">
                       <div className="clothing-stores-img text-end">
                           <figure>
                              <img src="/assets/images/img104.jpg" alt="ChittorTech Accounting - img104" />
                           </figure>
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
                           <img src="/assets/images/img105.jpg" alt="ChittorTech Accounting - img105" />
                        </figure>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="clothing-stores-text software-wrap specialized-box">
                        <h2>Why ChittorTech is India’s Leading GST Accounting Software for Retail</h2>
                       <ul>
    <li>
        <strong>Retail-Focused Design</strong><br />
        Built specifically to meet the unique needs of retail businesses, making accounting simple and efficient.
    </li>
    <li>
        <strong>Anywhere, Anytime Access</strong><br />
        Compatible across multiple devices, giving you full control of your finances on-the-go.
    </li>
    <li>
        <strong>Smooth Data Migration</strong><br />
        Easily transfer your existing accounting records to the cloud without disruption.
    </li>
    <li>
        <strong>Cloud-Powered Accounting</strong><br />
        Stay connected to your financial data anytime with secure, cloud-based access.
    </li>
    <li>
        <strong>Seamless Integrations</strong><br />
        Connect effortlessly with AI Knowledge Base, POS, e-commerce platforms, and payment systems.
    </li>
    <li>
        <strong>Real-Time Financial Updates</strong><br />
        Monitor your business performance with instant access to accounting data and reports.
    </li>
    <li>
        <strong>Trusted by Thousands of Merchants</strong><br />
        Recognized as India’s most reliable and secure accounting software for retail businesses.
    </li>
</ul>

                      
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="clothing-stores-sec software-sec need-helf-sec">
           <div className="container">
               <div className="row align-items-center">
                   <div className="col-md-7">
                       <div className="clothing-stores-text software-wrap specialized-box">
                           <h2>FAQ – Need Help?</h2>
                           <h5>What is GST Accounting Software?</h5>
                           <p>Cloud-based GST accounting software from ChittorTech is a complete solution for managing financial operations of Indian retail stores. It allows real-time tracking of sales, inventory, invoices, ledgers, balance sheets, P&L, GST returns, and more.</p>
                           <h6>Benefits of deploying cloud-based accounting software:</h6>
                           <ul>
                              <li>Centralized financial management</li>
                              <li>Real-time reporting & analytics</li>
                              <li>Simplified GST compliance</li>
                              <li>Automation of routine accounting tasks</li>
                           </ul>
                           <h6>Do I need accounting software for my small business?</h6>
                           <p>Yes! Even small retail stores benefit from automated accounting, error-free GST filing, and real-time insights that help with informed business decisions and growth.</p>
                       </div>
                   </div>
                   <div className="col-md-5">
                       <div className="clothing-stores-img text-end">
                           <figure>
                              <img src="/assets/images/img106.jpg" alt="ChittorTech Accounting - img106" />
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>


      <section className="manufacturing-key section-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-9">
                        <div className="heading-wrap">
                            <h2>Benefits and How to Use ChittorTech <span>GST Accounting Software</span> </h2>
                        </div>
                    </div>
                </div>
               <div className="row justify-content-center mt-5 gy-4">
                   {/* Simplified GST Compliance */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Simplified GST Compliance</h3>
                           <ul>
                               <li>Automatically calculates GST for all transactions.</li>
                               <li>Generates GST returns, E-Invoices, and E-Way bills for easy filing.</li>
                               <li>Reduces errors and ensures timely compliance.</li>
                           </ul>
                       </div>
                   </div>

                   {/* Real-Time Financial Reporting */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Real-Time Financial Reporting</h3>
                           <ul>
                               <li>Generate balance sheets, P&amp;L statements, cash flow reports, and branch-wise summaries instantly.</li>
                               <li>Helps in monitoring financial health and making informed business decisions.</li>
                               <li>Use filters for date, branch, product, or customer to get detailed insights.</li>
                           </ul>
                       </div>
                   </div>

                   {/* Centralized Multi-Store Management */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Centralized Multi-Store Management</h3>
                           <ul>
                               <li>Manage multiple branches from one dashboard.</li>
                               <li>Track sales, inventory, and accounts for all stores in real-time.</li>
                               <li>Reconcile accounts and maintain consistent practices across all locations.</li>
                           </ul>
                       </div>
                   </div>

                   {/* Advanced Inventory Management */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Advanced Inventory Management</h3>
                           <ul>
                               <li>Automatically updates stock levels with each sale, purchase, or return.</li>
                               <li>Maintains accurate inventory valuation and after-sale stock entries.</li>
                               <li>Helps prevent stock-outs and overstocking.</li>
                           </ul>
                       </div>
                   </div>

                   {/* Integrated Payment and Invoice Management */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Integrated Payment and Invoice Management</h3>
                           <ul>
                               <li>Record payments from customers and suppliers directly in the software.</li>
                               <li>Generate invoices and E-Invoices automatically.</li>
                               <li>Integrate with payment gateways for online transactions.</li>
                           </ul>
                       </div>
                   </div>

                   {/* Mobile and Cloud-Based Access */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Mobile and Cloud-Based Access</h3>
                           <ul>
                               <li>Access financial and accounting data anytime, anywhere on desktops, laptops, tablets, or smartphones.</li>
                               <li>Update records, generate reports, and track accounts while on the move.</li>
                           </ul>
                       </div>
                   </div>

                   {/* Tally and Other Integrations */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Tally and Other Integrations</h3>
                           <ul>
                               <li>Sync data with Tally, POS systems, e-commerce platforms, and payment gateways.</li>
                               <li>Ensures consistency and real-time data exchange.</li>
                               <li>Eliminates the need for multiple software tools.</li>
                           </ul>
                       </div>
                   </div>

                   {/* Budgeting and Forecasting */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Budgeting and Forecasting</h3>
                           <ul>
                               <li>Set financial goals and allocate resources effectively.</li>
                               <li>Compare actual performance with planned budgets.</li>
                               <li>Helps in business planning and growth strategy.</li>
                           </ul>
                       </div>
                   </div>

                   {/* User Access and Security */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>User Access and Security</h3>
                           <ul>
                               <li>Assign roles and permissions for employees.</li>
                               <li>Restrict access to sensitive financial data.</li>
                               <li>Monitor all activity through audit logs.</li>
                           </ul>
                       </div>
                   </div>

                   {/* Retail-Specific Design */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Retail-Specific Design</h3>
                           <ul>
                               <li>Tailored for SMEs, MSMEs, and multi-store retail chains.</li>
                               <li>Manage SKUs, sales channels, branches, and customer data efficiently.</li>
                               <li>Simplifies accounting while optimizing business operations.</li>
                           </ul>
                       </div>
                   </div>

                   {/* Data Backup and Safety */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Data Backup and Safety</h3>
                           <ul>
                               <li>Cloud-based storage ensures data safety and easy recovery.</li>
                               <li>Protects against accidental loss or hardware failures.</li>
                           </ul>
                       </div>
                   </div>

                   {/* Business Insights for Growth */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Business Insights for Growth</h3>
                           <ul>
                               <li>Access accurate analytics on sales, inventory, and finances.</li>
                               <li>Identify profit opportunities, optimize resources, and reduce risks.</li>
                               <li>Make strategic decisions backed by data.</li>
                           </ul>
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
                              <h2>FAQ – Best GST Accounting Software for Retail in India | <span>ChittorTech</span> </h2>
                          </div>
                          <div className="accordion" id="faqAccordion">

                              {/* GST FAQ 1 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingOne">
                                      <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                          What is the best GST accounting software for retail in India?
                                      </button>
                                  </h2>
                                  <div id="collapseOne" className="accordion-collapse collapse show"
                                      aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          ChittorTech offers the best GST accounting software for retail in India, a cloud-based platform that helps retailers manage GST compliance, accounting, invoicing, inventory, and financial reporting seamlessly.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 2 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingTwo">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                          How can cloud-based GST accounting software benefit my retail store?
                                      </button>
                                  </h2>
                                  <div id="collapseTwo" className="accordion-collapse collapse"
                                      aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Cloud-based GST accounting software simplifies tax calculations, automates GST return filing, provides real-time business insights, and allows access to accounts from anywhere—saving time, reducing errors, and improving efficiency.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 3 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingThree">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                          Can this accounting software handle multiple retail stores?
                                      </button>
                                  </h2>
                                  <div id="collapseThree" className="accordion-collapse collapse"
                                      aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Yes! ChittorTech’ retail accounting software enables centralized management for multiple outlets, keeping branch-wise accounts, inventory, and financial data consistent and up-to-date.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 4 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingFour">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                          Does it support GST-compliant invoicing and E-Way bills?
                                      </button>
                                  </h2>
                                  <div id="collapseFour" className="accordion-collapse collapse"
                                      aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Absolutely. The software generates GST-compliant invoices, E-Invoices, and E-Way bills automatically, ensuring full compliance with Indian tax regulations.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 5 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingFive">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                          How does the software simplify inventory accounting?
                                      </button>
                                  </h2>
                                  <div id="collapseFive" className="accordion-collapse collapse"
                                      aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          It maintains accurate stock levels, automatically updates after sales or purchases, tracks inventory across multiple stores, and provides real-time valuation, helping retailers prevent stock issues.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 6 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingSix">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                          Can I get real-time financial reports using this software?
                                      </button>
                                  </h2>
                                  <div id="collapseSix" className="accordion-collapse collapse"
                                      aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Yes, you can generate balance sheets, profit &amp; loss statements, cash flow reports, trial balances, and branch-wise summaries instantly, empowering smarter business decisions.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 7 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingSeven">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                          Is it possible to integrate this software with Tally or other platforms?
                                      </button>
                                  </h2>
                                  <div id="collapseSeven" className="accordion-collapse collapse"
                                      aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Yes, it supports Tally integration, POS systems, e-commerce platforms, and payment gateways, ensuring accurate, real-time data across all your business systems.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 8 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingEight">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                          Can I use this accounting software on mobile or remote devices?
                                      </button>
                                  </h2>
                                  <div id="collapseEight" className="accordion-collapse collapse"
                                      aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Definitely! Being cloud-based, it allows access via smartphones, tablets, laptops, or desktops, giving retailers the flexibility to monitor finances on-the-go.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 9 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingNine">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                          How secure is my business data on this platform?
                                      </button>
                                  </h2>
                                  <div id="collapseNine" className="accordion-collapse collapse"
                                      aria-labelledby="headingNine" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          ChittorTech provides secure cloud storage, role-based access, and audit logs, ensuring your financial data is safe, backed up, and protected from unauthorized access.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 10 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingTen">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                          Does this software help with budgeting and business forecasting?
                                      </button>
                                  </h2>
                                  <div id="collapseTen" className="accordion-collapse collapse"
                                      aria-labelledby="headingTen" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Yes, it enables you to create budgets, allocate resources, and generate forecasts, helping retailers plan growth, optimize spending, and maximize profits.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 11 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingEleven">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                          Why is ChittorTech the top choice for retail accounting software in India?
                                      </button>
                                  </h2>
                                  <div id="collapseEleven" className="accordion-collapse collapse"
                                      aria-labelledby="headingEleven" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Designed specifically for retailers, SMEs, and multi-store chains, it combines GST compliance, inventory management, payment integration, and real-time reporting—all in one cloud-based accounting software for retail in India.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 12 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingTwelve">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                          Can I migrate my existing accounting data to this software?
                                      </button>
                                  </h2>
                                  <div id="collapseTwelve" className="accordion-collapse collapse"
                                      aria-labelledby="headingTwelve" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Yes, the ChittorTech team provides smooth data migration support, ensuring all your previous accounts, invoices, and inventory records are transferred safely and accurately.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 13 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingThirteen">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                          How does this software provide business insights for retail growth?
                                      </button>
                                  </h2>
                                  <div id="collapseThirteen" className="accordion-collapse collapse"
                                      aria-labelledby="headingThirteen" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          By analyzing sales, inventory, expenses, and profits, it generates actionable insights that help retailers identify opportunities, reduce costs, and make strategic business decisions.
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
