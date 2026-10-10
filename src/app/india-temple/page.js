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
                <i className={`fa-solid fa-place-of-worship`}></i> Temple AI & IT Solutions
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Temple Management System & Mandir Billing POS Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                All-in-one Mandir & Temple software for religious trusts across India. Streamline counter donation billing POS, online pooja & seva booking, dharamshala room allotment, and automated trust accounting.
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
                <i className={`fa-solid fa-place-of-worship`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* header */}
         
      {/* header */}
      
      {/* inner banner section start here  */}
      
      {/* inner banner section end here  */}




<section className="manufacturing-key section-bg">
    <div className="container">
        <div className="row justify-content-center gy-4">

    {/* Smart & Transparent Donation Handling */}
    <div className="col-md-3 col-sm-6">
        <div className="key-box">
            <h3>Smart & Transparent Donation Handling</h3>
            <p>
                Our AI-enabled temple platform streamlines donation collection and documentation.
                Every contribution is logged instantly, with auto-generated receipts to ensure trust,
                accuracy, and complete visibility.
            </p>
            <ul>
                <li>Live donation dashboards & insights</li>
                <li>Safe online and in-temple contribution options</li>
                <li>Intelligent donor data management</li>
            </ul>
        </div>
    </div>

    {/* Intelligent Inventory & Prasad Control */}
    <div className="col-md-3 col-sm-6">
        <div className="key-box">
            <h3>Intelligent Inventory & Prasad Control</h3>
            <p>
                Manage prasad, flowers, pooja items, and daily temple supplies with a smart stock
                system that prevents shortages and excess.
            </p>
            <ul>
                <li>Live stock tracking with AI alerts</li>
                <li>Auto notifications for low or excess inventory</li>
                <li>Structured handling of ritual materials</li>
                <li>Minimized wastage with balanced prasad distribution</li>
            </ul>
        </div>
    </div>

    {/* AI-Driven Expense & Accounts Oversight */}
    <div className="col-md-3 col-sm-6">
        <div className="key-box">
            <h3>AI-Driven Expense & Accounts Oversight</h3>
            <p>
                Maintain financial clarity with an automated expense tracking system built for temples.
                Categorize costs and monitor spending in real time.
            </p>
            <ul>
                <li>Digital storage of bills & expense proofs</li>
                <li>Real-time expense analytics</li>
                <li>Smart expense classification for easy audits</li>
            </ul>
        </div>
    </div>

    {/* Devotee Relationship & Engagement Hub */}
    <div className="col-md-3 col-sm-6">
        <div className="key-box">
            <h3>Devotee Relationship & Engagement Hub</h3>
            <p>
                Offer devotees a smooth, connected experience through a centralized devotee
                management system designed to strengthen engagement.
            </p>
            <ul>
                <li>Simple online & offline pooja bookings</li>
                <li>Instant notifications via WhatsApp & SMS</li>
                <li>Personalized communication for higher devotee satisfaction</li>
            </ul>
        </div>
    </div>

</div>

    </div>
</section>

<section className="why-choose-sec">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div className="heading-wrap text-center">
               <h2> Multiple Payment Modes <span>for Temples & Trusts</span> </h2>
               <p>Offer flexibility to devotees by accepting donations and payments through multiple channels.</p>
            </div>
            <div className="why-choose-wrap">
               <ul>
                  <li>
                     <figure> <img src="/assets/images/img602.png" alt="UPI Payments" /> </figure>
                     <h3>UPI</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/img603.png" alt="Bank Transfers" /> </figure>
                     <h3>Bank Transfers</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/img604.png" alt="Cash Payments" /> </figure>
                     <h3>Cash</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/img605.png" alt="Digital Wallets" /> </figure>
                     <h3>Digital Wallets</h3>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>

<section className="manufacturing-key section-bg">
   <div className="container">
    <div className="heading-wrap">
        <h2>India’s #1 <span>AI-Powered Temple Management & Billing Software</span></h2>
        <p>
            Run modern temples with intelligence, transparency, and speed using
            ChittorTech’ next-gen AI temple platform.
        </p>
    </div>

    <div className="row justify-content-center gy-4">

        {/* AI Smart Donation & Payment System */}
        <div className="col-md-3 col-sm-6">
            <div className="key-box">
                <h3>AI Smart Donation & Payment System</h3>
                <p>
                    Our AI engine automatically records, validates, and organizes every donation—
                    online or offline—ensuring complete accuracy and trust.
                </p>
                <ul>
                    <li>AI-tracked donation entries in real time</li>
                    <li>Secure UPI, QR, cash & digital payments</li>
                    <li>Instant AI-generated digital receipts</li>
                    <li>Zero manual errors & 100% transparency</li>
                </ul>
            </div>
        </div>

        {/* AI Inventory & Prasad Intelligence */}
        <div className="col-md-3 col-sm-6">
            <div className="key-box">
                <h3>AI Inventory & Prasad Intelligence</h3>
                <p>
                    Manage prasad, flowers, pooja materials, and ritual items using AI-based
                    stock intelligence that predicts demand and prevents waste.
                </p>
                <ul>
                    <li>AI-based stock forecasting</li>
                    <li>Smart expiry & wastage control</li>
                    <li>Automated low-stock & surplus alerts</li>
                    <li>Optimized prasad distribution</li>
                </ul>
            </div>
        </div>

        {/* AI Expense & Accounting Automation */}
        <div className="col-md-3 col-sm-6">
            <div className="key-box">
                <h3>AI Expense & Accounting Automation</h3>
                <p>
                    Track temple expenses effortlessly with AI-driven accounting that categorizes,
                    audits, and reports finances automatically.
                </p>
                <ul>
                    <li>AI-classified expense tracking</li>
                    <li>Real-time financial insights</li>
                    <li>Automated audit & trust reports</li>
                    <li>Clean, error-free accounting</li>
                </ul>
            </div>
        </div>

        {/* AI Devotee Relationship Management */}
        <div className="col-md-3 col-sm-6">
            <div className="key-box">
                <h3>AI Devotee Relationship Management</h3>
                <p>
                    Build stronger connections with devotees using AI-powered AI Knowledge Base for bookings,
                    communication, and engagement.
                </p>
                <ul>
                    <li>AI-managed devotee profiles</li>
                    <li>Smart pooja & ritual scheduling</li>
                    <li>Automated WhatsApp & SMS alerts</li>
                    <li>Higher devotee satisfaction</li>
                </ul>
            </div>
        </div>

        {/* AI Smart Billing & D-Checkout */}
        <div className="col-md-3 col-sm-6">
            <div className="key-box">
                <h3>AI Smart Billing & D-Checkout</h3>
                <p>
                    Remove queues and delays with AI-enabled billing and self-checkout solutions
                    designed for busy temples.
                </p>
                <ul>
                    <li>AI QR-based fast billing</li>
                    <li>Self-checkout via scan & pay</li>
                    <li>Faster counters & smoother flow</li>
                    <li>Reduced manpower dependency</li>
                </ul>
            </div>
        </div>

        {/* AI WhatsApp Automation Hub */}
        <div className="col-md-3 col-sm-6">
            <div className="key-box">
                <h3>AI WhatsApp Automation Hub</h3>
                <p>
                    Let AI handle all devotee communication—from receipts to announcements—
                    automatically and instantly.
                </p>
                <ul>
                    <li>AI-triggered invoice sharing</li>
                    <li>Real-time donation confirmations</li>
                    <li>Festival & event updates</li>
                    <li>Two-way devotee communication</li>
                </ul>
            </div>
        </div>

        {/* AI Centralized Cloud Command Center */}
        <div className="col-md-3 col-sm-6">
            <div className="key-box">
                <h3>AI Centralized Cloud Command Center</h3>
                <p>
                    Control everything from a single AI-powered dashboard—donations, inventory,
                    expenses, devotees, and reports.
                </p>
                <ul>
                    <li>AI-driven insights & analytics</li>
                    <li>Live multi-branch synchronization</li>
                    <li>Secure role-based access</li>
                    <li>Anytime, anywhere management</li>
                </ul>
            </div>
        </div>

    </div>
</div>

</section>

<section className="bridal-store-sec company-logo-sec pb-60">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div className="bridal-store text-center">
               <h2> Branch-wise Reports</h2>
               <p>Manage multiple temple branches effortlessly with detailed reports and analytics. Monitor donations, expenses, and stock across branches for smart decision-making.</p>
               <p>📈 Branch-specific reports</p>
               <p>📊 Centralized analytics</p>
               <p>🧭 Smarter operational control</p>
            </div>
         </div>
      </div>
   </div>
</section>

<section className="complete-seo-service pt0"> 
  <div className="container">
    <div className="heading-wrap text-center">
      <h2> Key Features of <span>Temple Management System</span> </h2>
    </div>
    <div className="row">
      {/* Feature 1 */}
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card service-box text-center p-4 animate-in" data-delay="0">
          <figure><img src="/assets/images/img606.png" alt="Auto Sync Feature" /></figure>
          <h4>Auto Sync Feature</h4>
          <p>Say goodbye to manual errors. Our system automatically syncs data across multiple branches ensuring smooth and accurate temple operations.</p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card service-box text-center p-4 animate-in" data-delay="100">
          <figure><img src="/assets/images/img607.png" alt="Instant Donor Receipts" /></figure>
          <h4>Instant Donor Receipts</h4>
          <p>Enhance transparency by automatically generating and sending donation receipts to devotees in real-time.</p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card service-box text-center p-4 animate-in" data-delay="200">
          <figure><img src="/assets/images/img608.png" alt="Smart Expense Management" /></figure>
          <h4>Smart Expense Management</h4>
          <p>Track and manage expenses across single or multiple temple branches with ease.</p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card service-box text-center p-4 animate-in" data-delay="300">
          <figure><img src="/assets/images/img609.png" alt="Automated Restocking & Alerts" /></figure>
          <h4> Automated Restocking & Alerts</h4>
          <p>Never run out of essential pooja or prasad items. Get instant low-stock and out-of-stock alerts for timely restocking.</p>
        </div>
      </div>

      {/* Feature 5 */}
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card service-box text-center p-4 animate-in" data-delay="400">
          <figure><img src="/assets/images/img610.png" alt="Expiry Management" /></figure>
          <h4>Expiry Management</h4>
          <p>Ensure prasad and ritual items are always fresh and safe. Our software tracks expiry dates and alerts you to avoid wastage.</p>
        </div>
      </div>

      {/* Feature 6 */}
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card service-box text-center p-4 animate-in" data-delay="500">
          <figure><img src="/assets/images/img611.png" alt="Future of Temple Management" /></figure>
          <h4>Experience the Future of Temple Management</h4>
          <p>Seamlessly manage donations, devotees, inventory, accounts, and rituals — all in one powerful cloud-based platform.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="cta-section pt-60">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="cta-box">
          <div className="phone-icon">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <h2>Begin Your AI-Powered Temple Journey — Without Overspending</h2>
          <p>Intelligent. Effortless. Cost-Effective.<br />
         India’s #1 AI Temple Management Platform brings together donations, billing, devotees, inventory, and communication into one smart system—helping your temple operate faster, serve better, and grow sustainably.</p>
          <button  onClick={() => { window.location.href = "/contact-us"; }}   className="cta-button">👉 Choose Your Plan Today</button>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="manufacturing-key section-bg">
  <div className="container">
    <div className="heading-wrap">
        <h2>
            Top Advantages of India’s #1 <span>AI-Powered Temple Management Software</span><br />
            by ChittorTech
        </h2>
    </div>

    <div className="row justify-content-center gy-4">

        {/* Smart & Centralized Temple Operations */}
        <div className="col-md-4 col-sm-6">
            <div className="key-box">
                <h3>Smart & Centralized Temple Operations</h3>
                <ul>
                    <li>One unified dashboard for single or multiple temple branches</li>
                    <li>Live tracking of donations, rituals, inventory, and performance metrics</li>
                    <li>Improved transparency and smoother daily operations</li>
                    <li>Stronger coordination between temple management and staff</li>
                </ul>
            </div>
        </div>

        {/* Faster, Queue-Free Billing & Donations */}
        <div className="col-md-4 col-sm-6">
            <div className="key-box">
                <h3>Faster, Queue-Free Billing & Donations</h3>
                <ul>
                    <li>Shorter queues at donation and billing counters</li>
                    <li>Supports UPI, QR, cards, wallets, and cash</li>
                    <li>Automated, error-free invoice generation</li>
                    <li>Secure and lightning-fast payment processing</li>
                </ul>
            </div>
        </div>

        {/* Deeper Devotee Connection & Engagement */}
        <div className="col-md-4 col-sm-6">
            <div className="key-box">
                <h3>Deeper Devotee Connection & Engagement</h3>
                <ul>
                    <li>Instant donation receipts via WhatsApp</li>
                    <li>Automated alerts for events, poojas, and special occasions</li>
                    <li>Personalized communication powered by AI insights</li>
                    <li>Higher devotee trust and engagement</li>
                </ul>
            </div>
        </div>

        {/* Intelligent Financial Control */}
        <div className="col-md-4 col-sm-6">
            <div className="key-box">
                <h3>Intelligent Financial Control</h3>
                <ul>
                    <li>Real-time visibility of donations, income, and expenses</li>
                    <li>AI-assisted GST-ready invoicing</li>
                    <li>Hassle-free bank reconciliation</li>
                    <li>Transparent and audit-ready accounting system</li>
                </ul>
            </div>
        </div>

        {/* Enterprise-Grade Security & Access Control */}
        <div className="col-md-4 col-sm-6">
            <div className="key-box">
                <h3>Enterprise-Grade Security & Access Control</h3>
                <ul>
                    <li>Role-based user permissions</li>
                    <li>Live monitoring of staff activity and system usage</li>
                    <li>Secure data storage with high accuracy and reliability</li>
                </ul>
            </div>
        </div>

        {/* Advanced Reports & Predictive Insights */}
        <div className="col-md-4 col-sm-6">
            <div className="key-box">
                <h3>Advanced Reports & Predictive Insights</h3>
                <ul>
                    <li>Real-time financial and operational dashboards</li>
                    <li>AI-based cash flow forecasting</li>
                    <li>Profit &amp; loss reports with category-wise insights</li>
                    <li>Clear visibility into temple growth and performance</li>
                </ul>
            </div>
        </div>

    </div>
</div>

</section>

<section className="why-choose-sec bridal-sec pt0"> 
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-5">
            <div className="expertise-img text-start">
               <figure>
                  <img src="/assets/images/img612.jpg" alt="Multi-Temple Branch Management" />
               </figure>
            </div>
         </div>
        <div className="col-md-7">
    <div className="heading-wrap text-start">
        <h2>AI-Driven Multi-Temple Branch <span>Management</span></h2>
        <p>Powered by India’s #1 Temple Management Platform</p>
    </div>

    <div className="expertise-wrap bridal-wrap">
        <ul>
            <li>
                <strong>One Command Center for All Temples:</strong>
                Control every temple location from a single AI-enabled dashboard. Manage offerings, devotees, finances, and daily operations seamlessly with centralized visibility.
            </li>

            <li>
                <strong>Intelligent Prasad & Ritual Stock Movement:</strong>
                AI-powered inventory flow between branches ensures smooth transfers, smart stock requests, and reduced wastage.
            </li>

            <li>
                <strong>Real-Time Insights with AI Analytics:</strong>
                Get instant reports on donations, inventory usage, expiry tracking, and event or pooja registrations with predictive insights for better planning.
            </li>

            <li>
                <strong>Always-On Expert Support:</strong>
                Dedicated support team with proactive system monitoring, fast issue resolution, and continuous onboarding assistance.
            </li>

            <li>
                <strong>Smart Central Inventory Control:</strong>
                Maintain live visibility of prasad and ritual materials across all branches with automated alerts for low or excess stock.
            </li>

            <li>
                <strong>Unified Devotee & Donor Intelligence:</strong>
                Manage all devotee and donor records in one secure system with AI-driven communication and timely updates via WhatsApp, SMS, and digital receipts.
            </li>
        </ul>
    </div>
</div>

      </div>
   </div>
</section>

<section className="why-choose-sec bridal-sec pt0"> 
  <div className="container">
      <div className="row align-items-center">
        <div className="col-md-7">
    <div className="heading-wrap text-start">
        <h2>India’s #1 <span>AI-Powered Temple Management Platform</span></h2>
        <p>
            A secure, cloud-native temple management solution designed to simplify donations, rituals, devotee engagement,
            events, inventory, and accounting — all powered by AI for accuracy, transparency, and ease.
        </p>
    </div>

    <div className="expertise-wrap bridal-wrap">
        <h4>AI-Smart Billing & Cloud Command Center</h4>
        <ul>
            <li>Centralized control for multiple temples and branches from one dashboard.</li>
            <li>Live inventory tracking with AI-assisted barcode management.</li>
            <li>Supports UPI, cash, cards, and direct bank payments seamlessly.</li>
            <li>Intelligent reports for planning, forecasting, and operational insights.</li>
            <li>Enable online donations and prasad booking with ease.</li>
        </ul>
    </div>
</div>

          <div className="col-md-5">
               <div className="expertise-img text-start">
                   <figure>
                      <img src="/assets/images/img613.jpg" alt="Local &amp; National SEO Expertise" />
                   </figure>
               </div>
          </div>
      </div>
  </div>
</section>

<section className="choose-chittortech-sec core-features-sec">
 <div className="container">
    <div className="row">
       <div className="col-md-12">
          <div className="heading-wrap">
             <h2>Proven <span>Growth Impact</span></h2>
          </div>
          <div className="why-choose-grid">
             <div className="grid-item">
                <figure> <img src="/assets/images/img614.png" alt="ChittorTech India Temple - img614" /> </figure>
                <p>3X Revenue growth rate</p>
             </div>
             <div className="grid-item">
                <figure> <img src="/assets/images/img615.png" alt="ChittorTech India Temple - img615" /> </figure>
                <p>116+ Billing hours saved per month</p>
             </div>
             <div className="grid-item">
                <figure> <img src="/assets/images/img616.png" alt="ChittorTech India Temple - img616" /> </figure>
                <p>87% Faster transaction processing</p>
             </div>
             <div className="grid-item">
                <figure> <img src="/assets/images/img617.png" alt="ChittorTech India Temple - img617" /> </figure>
                <p>95% Reduction in manual errors</p>
             </div>
             <div className="grid-item">
                <figure> <img src="/assets/images/img618.png" alt="ChittorTech India Temple - img618" /> </figure>
                <p>Shipping &amp; Logistics</p>
             </div>
             <div className="grid-item">
                <figure> <img src="/assets/images/img619.png" alt="ChittorTech India Temple - img619" /> </figure>
                <p>E-Invoicing &amp; Compliance</p>
             </div>
          </div>
       </div>
    </div>
 </div>
</section>


<section className="complete-seo-service pt0"> 
  <div className="container">
    <div className="heading-wrap text-center">
      <h2>Why Choose <span>ChittorTech?</span></h2>
    </div>
    <div className="row">
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card service-box text-center p-4 animate-in" data-delay="0">
          <figure> <img src="/assets/images/img620.png" alt="ChittorTech India Temple - img620" /> </figure>
          <h4>Compatible on Any Device</h4>
          <p>Access from Android, iOS, desktop, or tablets — anywhere, anytime.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card service-box text-center p-4 animate-in" data-delay="100">
          <figure> <img src="/assets/images/img621.png" alt="ChittorTech India Temple - img621" /> </figure>
          <h4>Data-Driven Insights</h4>
          <p>Leverage reports & analytics to optimize inventory, pricing, rituals, and temple resources.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card service-box text-center p-4 animate-in" data-delay="200">
          <figure> <img src="/assets/images/img622.png" alt="ChittorTech India Temple - img622" /> </figure>
          <h4>Multi-Feature Integration</h4>
          <p>POS, inventory, donations, accounting — all in one single solution.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card service-box text-center p-4 animate-in" data-delay="300">
          <figure> <img src="/assets/images/img623.png" alt="ChittorTech India Temple - img623" /> </figure>
          <h4>Cloud-Based Software</h4>
          <p>No local servers. Access your temple data securely from anywhere.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card service-box text-center p-4 animate-in" data-delay="400">
          <figure> <img src="/assets/images/img624.png" alt="ChittorTech India Temple - img624" /> </figure>
          <h4>Hardware Independent</h4>
          <p>No special hardware required. Just log in and manage.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card service-box text-center p-4 animate-in" data-delay="500">
          <figure> <img src="/assets/images/img625.png" alt="ChittorTech India Temple - img625" /> </figure>
          <h4>No Data Loss</h4>
          <p>Your temple’s data is stored securely on encrypted cloud servers.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card service-box text-center p-4 animate-in" data-delay="500">
          <figure> <img src="/assets/images/Cloud-Temple-Management.png" alt="ChittorTech Temple Management Solutions" /> </figure>
          <h4> Expert Support Team</h4>
          <p>Our team ensures smooth implementation and ongoing assistance.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card service-box text-center p-4 animate-in" data-delay="500">
          <figure> <img src="/assets/images/img627.png" alt="ChittorTech India Temple - img627" /> </figure>
          <h4>Smart Integrations</h4>
          <p>Seamlessly integrates with payment gateways, logistics, marketing, and more.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card service-box text-center p-4 animate-in" data-delay="500">
          <figure> <img src="/assets/images/img628.png" alt="ChittorTech India Temple - img628" /> </figure>
          <h4>Tailored for Temples</h4>
          <p>Custom-built modules for rituals, donations, devotee engagement, and branch management.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card service-box text-center p-4 animate-in" data-delay="500">
          <figure> <img src="/assets/images/img629.png" alt="ChittorTech India Temple - img629" /> </figure>
          <h4> Easy Access</h4>
          <p>User-friendly interface for staff and management.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card service-box text-center p-4 animate-in" data-delay="500">
          <figure> <img src="/assets/images/img630.png" alt="ChittorTech India Temple - img630" /> </figure>
          <h4>Training & Implementation</h4>
          <p>Our experts train your staff for effortless adoption.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card service-box text-center p-4 animate-in" data-delay="500">
          <figure> <img src="/assets/images/img631.png" alt="ChittorTech India Temple - img631" /> </figure>
          <h4>Speed & Precision</h4>
          <p>Built for high performance, accuracy, and scalability.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="why-choose-sec bridal-sec"> 
  <div className="container">
      <div className="row align-items-center">
          <div className="col-md-5 order-md-2">
               <div className="expertise-img text-end">
                   <figure>
                      <img src="/assets/images/img632.jpg" alt="Seamless Integrations" />
                   </figure>
               </div>
          </div>
         <div className="col-md-7 order-md-1">
    <div className="heading-wrap text-start">
        <h2>AI-Powered Smart <span>Integrations (#1 Platform)</span></h2>
    </div>
    <div className="expertise-wrap bridal-wrap">
        <ul>
            <li>Online Store & Marketplace Platforms</li>
            <li>Customer Messaging & Marketing Tools</li>
            <li>Secure Digital Payment Systems</li>
            <li>GST, E-Invoicing & Compliance Networks</li>
            <li>Delivery, Logistics & Shipping Services</li>
            <li>Core Business & Enterprise Applications</li>
        </ul>
    </div>
</div>

      </div>
  </div>
</section>

<section className="bridal-store-sec">
 <div className="container">
     <div className="row">
         <div className="col-md-12">
           <div className="bridal-store">
              <h2>Trusted by Thousands Users Across India</h2>
              <p>India’s most trusted cloud-based temple and Retail AI Automation platform.</p>
           </div>
         </div>
     </div>
 </div>
</section>



{/* Clothing Stores section start here */}
<section className="clothing-stores-sec pt-60">
   <div className="container">
        <div className="row align-items-center">
           <div className="col-md-6">
               <div className="clothing-stores-text">
                   <h2>Why Temples Love ChittorTech</h2>
                   <p>Temples operate long hours managing rituals, devotees, donations, inventory, and finances. Manual processes lead to inefficiencies, errors, and delays. ChittorTech helps temples automate and simplify their daily operations:</p>
                   <ul>
                      <li>Record and manage donations & devotee data</li>
                      <li>Generate bills & donor receipts</li>
                      <li>Manage inventory and prasad stocks</li>
                      <li>Track financial transactions accurately</li>
                      <li>Centralize branch operations</li>
                      <li>Access real-time reports anywhere</li>
                   </ul>
               </div>
           </div>
           <div className="col-md-6">
               <div className="clothing-stores-img">
                   <figure>
                      <img src="/assets/images/img633.jpg" alt="ChittorTech India Temple - img633" />
                   </figure>
               </div>
           </div>
       </div>
   </div>
</section>
{/* Clothing Stores section end here */}

<section className="manufacturing-key section-bg">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-12 col-9">
                <div className="heading-wrap">
                    <h2>Step-by-Step Guide to Use ChittorTech <span>Temple Management Software</span></h2>
                </div>
            </div>
        </div>
        <div className="row justify-content-center  gy-4">

            {/* STEP 1 */}
            <div className="col-lg-4 col-md-6">
                <div className="key-box">
                    <h3>STEP 1: Login to Your Dashboard</h3>
                    <ul>
                        <li>Open your browser on any device (laptop, PC, tablet, or mobile).</li>
                        <li>Go to the official link: <a href="https://chittortech.in/">https://chittortech.in/</a></li>
                        <li>Enter your Username & Password (provided at the time of onboarding).</li>
                        <li>Access the main dashboard showing donations, devotees, inventory, expenses, and reports.</li>
                        <li>Tip: Ensure a stable internet connection.</li>
                    </ul>
                </div>
            </div>

            {/* STEP 2 */}
            <div className="col-lg-4 col-md-6">
                <div className="key-box">
                    <h3> STEP 2: Add or Manage Temple Branches</h3>
                    <ul>
                        <li>Click on “Temple Branches” in the menu.</li>
                        <li>Add a new branch or update existing branch details (address, contact person, etc.).</li>
                        <li>Manage multiple branches from the same dashboard.</li>
                        <li>Data auto-syncs — no need to enter details multiple times.</li>
                        <li>Ideal for temples with multiple locations.</li>
                    </ul>
                </div>
            </div>

            {/* STEP 3 */}
            <div className="col-lg-4 col-md-6">
                <div className="key-box">
                    <h3>STEP 3: Manage Donations</h3>
                    <ul>
                        <li>Go to “Donations” section.</li>
                        <li>Select donation type (Cash / UPI / Cheque / Bank Transfer).</li>
                        <li>Add devotee details and donation amount.</li>
                        <li>System auto-generates receipt and sends via WhatsApp/SMS.</li>
                        <li>View real-time donation reports anytime.</li>
                        <li>100% transparent and error-free donation management.</li>
                    </ul>
                </div>
            </div>

            {/* STEP 4 */}
            <div className="col-lg-4 col-md-6">
                <div className="key-box">
                    <h3>TEP 4: Manage Inventory & Prasad Stock</h3>
                    <ul>
                        <li>Open the “Inventory” tab.</li>
                        <li>Add items like prasad, ritual products, flowers, etc.</li>
                        <li>Track stock levels, expiry dates, and restocking alerts in real-time.</li>
                        <li>Transfer stock easily between branches if needed.</li>
                        <li>Get auto alerts for low stock or expiry items.</li>
                        <li>Saves time and reduces wastage of temple offerings.</li>
                    </ul>
                </div>
            </div>

            {/* STEP 5 */}
            <div className="col-lg-4 col-md-6">
                <div className="key-box">
                    <h3>STEP 5: Manage Expenses & Accounting</h3>
                    <ul>
                        <li>Click on “Expenses”.</li>
                        <li>Enter details of temple expenses (electricity, staff, rituals, maintenance, etc.).</li>
                        <li>Attach bills or invoices if available.</li>
                        <li>System auto-categorizes expenses and creates reports.</li>
                        <li>Generate monthly or yearly expense summaries easily.</li>
                        <li>Makes temple finances transparent and audit-ready.</li>
                    </ul>
                </div>
            </div>

            {/* STEP 6 */}
            <div className="col-lg-4 col-md-6">
                <div className="key-box">
                    <h3>STEP 6: Manage Devotees & Event Registrations</h3>
                    <ul>
                        <li>Go to the “Devotees” section.</li>
                        <li>Add new devotees or import existing lists.</li>
                        <li>Schedule events, pujas, and rituals.</li>
                        <li>Send automated reminders via WhatsApp/SMS.</li>
                        <li>Manage bookings and seating in advance.</li>
                        <li>Improves devotee engagement and communication.</li>
                    </ul>
                </div>
            </div>

            {/* STEP 7 */}
            <div className="col-lg-4 col-md-6">
                <div className="key-box">
                    <h3>STEP 7: Generate Reports</h3>
                    <ul>
                        <li>Click on “Reports & Analytics”.</li>
                        <li>Generate donation, expense, inventory usage, and profit/loss reports.</li>
                        <li>Filter by date, branch, or event.</li>
                        <li>Export reports to PDF / Excel / Email with one click.</li>
                        <li>All insights in one place for trustees and accountants.</li>
                    </ul>
                </div>
            </div>

            {/* STEP 8 */}
            <div className="col-lg-4 col-md-6">
                <div className="key-box">
                    <h3>STEP 8: Use WhatsApp Integration</h3>
                    <ul>
                        <li>Enable WhatsApp in settings.</li>
                        <li>Automatically send donation receipts, event updates, and reminders.</li>
                        <li>Engage devotees instantly and professionally.</li>
                        <li>Makes communication faster & more effective.</li>
                    </ul>
                </div>
            </div>

            {/* STEP 9 */}
            <div className="col-lg-4 col-md-6">
                <div className="key-box">
                    <h3>STEP 9: Accept Payments Easily</h3>
                    <ul>
                        <li>At the billing counter, generate a bill using the Management system.</li>
                        <li>Devotee scans the QR code and pays via UPI or other modes.</li>
                        <li>Receipt is generated and stored automatically.</li>
                        <li>No long queues, no manual errors.</li>
                    </ul>
                </div>
            </div>

            {/* STEP 10 */}
            <div className="col-lg-4 col-md-6">
                <div className="key-box">
                    <h3>STEP 10: Manage User Access & Security</h3>
                    <ul>
                        <li>Go to “Settings” → “User Access”.</li>
                        <li>Create accounts for different staff roles (admin, cashier, volunteer, etc.).</li>
                        <li>Give permissions based on role to ensure data security.</li>
                        <li>Track activity logs for transparency.</li>
                        <li>Secure and controlled system access.</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</section>

<section className="why-choose-sec bridal-sec pt0"> 
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-12">
            <div className="heading-wrap text-start mb-4">
               <h2>Modern Solution to <span>Manage Temple Operations Easily</span></h2>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <p>Temples are sacred spaces where multiple activities start early in the morning and continue till late at night. From conducting and organizing rituals to managing devotees, donations, inventory, accounts, and events — every operation requires precision, dedication, and proper coordination.</p>
               <p>However, with multiple tasks and limited staff, temple administrators often face challenges in keeping operations smooth and transparent. Manual work can lead to errors, delays, and difficulties in maintaining proper records.</p>
               <p>This is where <strong>ChittorTech’ Cloud-Based Temple Management Software</strong> comes in as a modern, automated, and reliable solution. Our advanced platform is designed to simplify daily temple operations and bring efficiency to every process.</p>
               <p>With our software, temple staff can:</p>
               <ul>
                  <li>Access and update temple data securely from anywhere, anytime.</li>
                  <li>Automate and manage donation records, rituals, inventory, and devotees.</li>
                  <li>Generate donor bills and receipts in real time.</li>
                  <li>Manage vendor payments, monitor expenses, and maintain accurate financial reports.</li>
                  <li>Streamline communication through integrated WhatsApp alerts and digital updates.</li>
                  <li>Get centralized control and complete transparency for every temple branch.</li>
               </ul>
               <p>Let <strong>ChittorTech</strong> support your temple management — ensuring that every ritual, donation, and operation runs peacefully, efficiently, and in a well-organized manner.</p>
               <p><strong>Schedule Your Free Demo Today</strong> and experience a smarter way to manage your temple operations.</p>
            </div>
         </div>
      </div>
   </div>
</section>

      
{/*  faq template section */}
<section className="faq-template">
<div className="container">
   <div className="heading-wrap text-center">
       <h2> FAQ – <span>Temple Management Software</span> </h2>
   </div>
   <div className="row">
       <div className="col-md-12">
           <div className="faq-section">
               <div className="accordion" id="faqAccordion">
                   {/* FAQ 1 */}
                   <div className="accordion-item">
                       <h2 className="accordion-header" id="headingOne">
                           <button className="accordion-button" type="button" data-bs-toggle="collapse"
                               data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                               What is temple management software?
                           </button>
                       </h2>
                       <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                           data-bs-parent="#faqAccordion">
                           <div className="accordion-body">
                               A temple management software is a cloud platform that helps temples manage events, devotees, rituals, donations, prasad inventory, and accounting. It automates billing, provides integrations with payment gateways, and eliminates manual errors.
                           </div>
                       </div>
                   </div>
                   {/* FAQ 2 */}
                   <div className="accordion-item">
                       <h2 className="accordion-header" id="headingTwo">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                               data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                               Are software updates included?
                           </button>
                       </h2>
                       <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                           data-bs-parent="#faqAccordion">
                           <div className="accordion-body">
                               Yes. Regular updates are included to keep your system secure and up to date.
                           </div>
                       </div>
                   </div>
                   {/* FAQ 3 */}
                   <div className="accordion-item">
                       <h2 className="accordion-header" id="headingThree">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                               data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                               How much does the software cost?
                           </button>
                       </h2>
                       <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                           data-bs-parent="#faqAccordion">
                           <div className="accordion-body">
                               Pricing depends on your temple size, number of branches, and features needed. Our plans are flexible and affordable.
                           </div>
                       </div>
                   </div>
                   {/* FAQ 4 */}
                   <div className="accordion-item">
                       <h2 className="accordion-header" id="headingFour">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                               data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                               How long does implementation take?
                           </button>
                       </h2>
                       <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                           data-bs-parent="#faqAccordion">
                           <div className="accordion-body">
                               Implementation usually takes a few days depending on customization needs.
                           </div>
                       </div>
                   </div>
                   {/* FAQ 5 */}
                   <div className="accordion-item">
                       <h2 className="accordion-header" id="headingFive">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                               data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                               Is the temple software customizable?
                           </button>
                       </h2>
                       <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                           data-bs-parent="#faqAccordion">
                           <div className="accordion-body">
                               Yes. It’s fully customizable for your temple’s unique processes.
                           </div>
                       </div>
                   </div>
                   {/* FAQ 6 */}
                   <div className="accordion-item">
                       <h2 className="accordion-header" id="headingSix">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                               data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                               How user-friendly is ChittorTech software?
                           </button>
                       </h2>
                       <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                           data-bs-parent="#faqAccordion">
                           <div className="accordion-body">
                               Our platform is designed for simplicity. Even non-technical users can operate it easily.
                           </div>
                       </div>
                   </div>
                   {/* FAQ 7 */}
                   <div className="accordion-item">
                       <h2 className="accordion-header" id="headingSeven">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                               data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                               Can multiple temple branches be monitored remotely?
                           </button>
                       </h2>
                       <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven"
                           data-bs-parent="#faqAccordion">
                           <div className="accordion-body">
                               Absolutely. All branches can be controlled from a single centralized dashboard.
                           </div>
                       </div>
                   </div>
               </div>{/* /accordion */}
           </div>
       </div>
   </div>
</div>
</section>

{/* faq template section */}
    </>
  );
}
