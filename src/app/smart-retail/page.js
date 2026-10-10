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
                <i className={`fa-solid fa-robot`}></i> Smart Retail
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Computer Vision & Retail AI Intelligence
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Next-generation retail AI — visual analytics, footfall heatmaps, and smart inventory vision.
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
                <i className={`fa-solid fa-robot`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* header */}
        
    {/* header */}
      
     
      
      <section className="manufacturing-key section-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-9">
                        <div className="heading-wrap">
                            <h2>Transform Your Store with   <span>Intelligent Retail Software</span> </h2>
                            <p>Enable frictionless shopping with our smart retail platform—featuring automated checkouts, AI-driven insights, and real-time store analytics—designed to elevate the phygital retail experience.</p>
                        </div>
                    </div>
                </div>
               <div className="row justify-content-center gy-4">

    {/* Intelligent Shopping Carts */}
    <div className="col-lg-4 col-md-6">
        <div className="key-box">
            <h3>Intelligent Shopping Carts</h3>
            <h5>Fast, smooth, and shopper-friendly</h5>
            <p>Reimagine in-store shopping with smart trolleys built for self-service efficiency:</p>
            <ul>
                <li>Pay with cards, UPI, digital wallets, or cash</li>
                <li>Loyalty programs seamlessly integrated</li>
                <li>Queue-free self-checkouts</li>
                <li>Mobile-based product scanning for instant billing</li>
                <li>Interactive self-kiosks for easy checkout</li>
                <li>User-friendly billing interface for a hassle-free experience</li>
            </ul>
        </div>
    </div>

    {/* Smart Product Detection */}
    <div className="col-lg-4 col-md-6">
        <div className="key-box">
            <h3>Smart Product Detection</h3>
            <h5>Accurate, rapid, and automated</h5>
            <p>Speed up your counters with intelligent item recognition:</p>
            <ul>
                <li>Sensors detect products instantly</li>
                <li>Supports thousands of SKUs without errors</li>
                <li>Visual product library ensures precision</li>
                <li>Syncs with inventory management systems for real-time updates</li>
            </ul>
        </div>
    </div>

    {/* AI-Powered Retail Analytics */}
    <div className="col-lg-4 col-md-6">
        <div className="key-box">
            <h3>AI-Powered Retail Analytics</h3>
            <h5>Insightful, predictive, and actionable</h5>
            <p>Leverage intelligent analytics to improve operations and boost sales:</p>
            <ul>
                <li>Analyze customer behavior in-store</li>
                <li>Real-time dashboards for instant insights</li>
                <li>Predict stock requirements with advanced analytics</li>
                <li>Plan promotions and forecast sales trends</li>
            </ul>
        </div>
    </div>

    {/* Unified Management System */}
    <div className="col-lg-4 col-md-6">
        <div className="key-box">
            <h3>Unified Management System</h3>
            <h5>Integrated, flexible, and intelligent</h5>
            <p>Combine billing, AI Knowledge Base, inventory, and online channels in one platform:</p>
            <ul>
                <li>Real-time billing and inventory tracking</li>
                <li>Multi-channel support: in-store, mobile, and online</li>
                <li>Self-service checkout terminals with customer displays</li>
                <li>Streamlined operations for staff and shoppers</li>
            </ul>
        </div>
    </div>

    {/* Retail Traffic Insights */}
    <div className="col-lg-4 col-md-6">
        <div className="key-box">
            <h3>Retail Traffic Insights</h3>
            <h5>Precise, strategic, and actionable</h5>
            <p>Optimize store layout and operations with intelligent footfall tracking:</p>
            <ul>
                <li>AI-based visitor counting</li>
                <li>Identify peak hours and shopping trends</li>
                <li>Generate heatmaps for customer movement and store optimization</li>
            </ul>
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
                            <h2>Must-Have Features for Modern Retailers</h2>
<ul>
    <li>
        <strong>Instant Product Scanning</strong> – Shoppers quickly scan items using the Chittortech app for a smooth experience.
    </li>
    <li>
        <strong>Dynamic Digital Cart</strong> – Easily add or remove products before completing checkout.
    </li>
    <li>
        <strong>Paperless Receipts</strong> – Generate instant digital bills to save paper and streamline accounting.
    </li>
    <li>
        <strong>Comprehensive Purchase History</strong> – View all previous transactions in one place for convenience.
    </li>
    <li>
        <strong>Live Inventory Tracking</strong> – Automatically updates stock levels as purchases are made.
    </li>
    <li>
        <strong>Seamless Order Flow</strong> – From QR code scan to payment, manage every step in real time.
    </li>
    <li>
        <strong>AI Camera Recognition</strong> – Monitor foot traffic, detect unusual activity, and enhance store safety.
    </li>
    <li>
        <strong>Smart Mirrors &amp; VR Try-Ons</strong> – Let customers virtually try on clothes, eyewear, or beauty products using AI.
    </li>
    <li>
        <strong>Customer Flow Analytics</strong> – Use heatmaps and traffic data to optimize product placement.
    </li>
    <li>
        <strong>Predictive Stock Management</strong> – Automated replenishment based on sales trends and demand forecasting.
    </li>
    <li>
        <strong>Loyalty Points Payments</strong> – Redeem points or vouchers directly at checkout for a smoother reward experience.
    </li>
    <li>
        <strong>Flexible Payment Options</strong> – Support for cards, UPI, digital wallets, and cash for ultimate convenience.
    </li>
</ul>

                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="clothing-stores-img text-end">
                              <figure>
                                 <img src="/assets/images/img183.jpg" alt="ChittorTech Smart Retail - img183" />
                              </figure>
                          </div>
                      </div>
                  </div>
               </div>
           
      </section>


   

      <section id="features" className="industry new-cards accounting-sec">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="heading-wrap">
                        <h2>Top Advantages of Smart   <span>Retail Solutions</span> </h2>
                        <p>Faster checkouts, happier shoppers, and smoother store management – that’s the power of ChittorTech.</p>
                     </div>
                     <div className="desktop-industries">
                        <div className="row justify-content-center">
                           <div className="col-md-3 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <img src="/assets/images/k1.png" alt="Billing" className="img-fluid mb-3" />
                                          <h4>Scale Easily</h4>
                                          <p>Supports single or multiple stores, handling any number of customers and transactions without hassle.</p>
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
                                          <img src="/assets/images/k2.png" alt="Inbuilt Accounting Modules" className="img-fluid mb-3" />
                                          <h4>Quick Checkout</h4>
                                          <p>Automated billing and self-service kiosks make shopping faster for everyone.</p>
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
                                          <img src="/assets/images/k3.png" alt="Organize Clothing Stock" className="img-fluid mb-3" />
                                          <h4>Increase Sales</h4>
                                          <p>Smart tools like virtual try-ons, AI scales, and digital carts help customers buy more.</p>
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
                                          <img src="/assets/images/k4.png" alt="Best Selling Apparel" className="img-fluid mb-3" />
                                          <h4> No Waiting Lines</h4>
                                          <p>Self-checkout and automated counters reduce queues, keeping shopping stress-free.</p>
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
                                          <img src="/assets/images/k5.png" alt="Offers and Discount Management" className="img-fluid mb-3" />
                                          <h4>Cut Operational Costs</h4>
                                          <p>Automation reduces the need for extra staff, saving money on store operations.</p>
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
                                          <img src="/assets/images/k6.png" alt="Sort Style-wise" className="img-fluid mb-3" />
                                          <h4>Better Shopping Experience</h4>
                                          <p>Provide secure, convenient, and fast payment options for customers.</p>
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
                                          <img src="/assets/images/k7.png" alt="Sort Style-wise" className="img-fluid mb-3" />
                                          <h4>Connected Systems</h4>
                                          <p>Works seamlessly with inventory, POS, payment systems, and analytics tools.</p>
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
                                          <img src="/assets/images/k8.png" alt="Sort Style-wise" className="img-fluid mb-3" />
                                          <h4> Optimized Store Layout</h4>
                                          <p>AI-powered traffic tracking and insights help arrange products for higher sales and efficiency.

</p>
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
                              <h2>Why Choose ChittorTech for Smart Retail?</h2>
                              <h5>Smart retail is about combining in-store experiences with next-gen digital technologies to engage customers like never before.</h5>
                              <ul>
                                <li>Smart shopping carts & trolleys with auto-billing systems</li>
                                <li>AI-powered weight scale integrations for precise checkout</li>
                                <li>Smart mirrors (VR try-ons) for garments, beauty, and eyewear</li>
                                <li>Customer-facing displays & kiosks for self-service billing</li>
                                <li>Traffic analytics & footfall counters for smarter retail space planning</li>
                                <li>Real-time integrations with Management, AI Knowledge Base, and e-commerce</li>
                              </ul>
                              <p>Our future-ready technologies are transforming supermarkets, grocery chains, fashion outlets, hypermarkets, and MSMEs into next-gen smart stores.</p>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="clothing-stores-img text-end">
                              <figure>
                                 <img src="/assets/images/img184.jpg" alt="ChittorTech Smart Retail - img184" />
                              </figure>
                          </div>
                      </div>
                  </div></div></section>

      <section className="cta-section">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="cta-box">
                        <h2>The Future of Retail is Here</h2>
                        <p>Smart retail is not just about technology – it’s about delivering immersive, interactive, and seamless shopping experiences that set you apart from competitors.</p>
                        <button onClick={() => { window.location.href = "/contact-us"; }}  className="cta-button">Request a Free Demo Now</button>
                     </div>
                 </div>
             </div>
         </div>
      </section>
      
     <section className="industry new-cards accounting-sec">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="heading-wrap">
                        <h2>How to Use ChittorTech’ Smart Retail   <span>Solution – With Benefits</span> </h2>
                     </div>
                     <div className="desktop-industries">
                        <div className="row justify-content-center">
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <h4>AI-Based Weight Integration</h4>
                                           <h5><strong>How to Use:</strong></h5>
                                           <ul>
                                             <li>Place the product on the AI-powered scale at checkout.</li>
                                             <li>The system automatically detects weight and calculates price.</li>
                                             <li>The total is synced instantly with Management/self-checkout systems.</li>
                                           </ul>
                                           <h5><strong>Benefits:</strong></h5>
                                           <ul>
                                            <li>Accurate billing without manual errors</li>
                                            <li>Faster checkouts with minimal staff involvement</li>
                                            <li>Enhanced customer trust with transparent pricing</li>
                                           </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <h4> Smart Shopping Carts & Trolleys</h4>
                                           <h5><strong>How to Use:</strong></h5>
                                           <ul>
                                             <li>Customers add items to a smart cart with inbuilt barcode scanning.</li>
                                             <li>Cart automatically updates items and shows the running total.</li>
                                             <li>Pay directly via card, UPI, wallet, or cash at counter.</li>
                                           </ul>
                                           <h5><strong>Benefits:</strong></h5>
                                           <ul>
                                            <li>Hassle-free shopping experience</li>
                                            <li>No need to stand in long queues</li>
                                            <li>Customers get loyalty points directly at checkout</li>
                                           </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <h4> Self-Checkout Systems</h4>
                                           <h5><strong>How to Use:</strong></h5>
                                           <ul>
                                                <li>Customers scan products themselves at self-kiosks.</li>
                                                <li>Choose from multiple payment options (cash, card, UPI, wallets).</li>
                                                <li>Receive a digital receipt instantly on mobile.</li>
                                           </ul>
                                           <h5><strong>Benefits:</strong></h5>
                                           <ul>
                                                <li>Eliminates long queues at billing counters</li>
                                                <li>Saves billing time for both customers and staff</li>
                                                <li>Reduces dependency on extra billing employees</li>
                                           </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <h4>Smart Object Detection at Management</h4>
                                           <h5><strong>How to Use:</strong></h5>
                                           <ul>
                                            <li>Place items on the Management counter with sensors.</li>
                                            <li>System automatically identifies and bills products using its database.</li>
                                            <li>Integrated with inventory and AI Knowledge Base for real-time updates.</li>
                                           </ul>
                                           <h5><strong>Benefits:</strong></h5>
                                           <ul>
                                             <li>Accurate & instant detection of thousands of products</li>
                                             <li>Reduces manual scanning effort</li>
                                             <li>Enhances speed & efficiency at counters</li>
                                           </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <h4>Intelligent Analytics & Reporting</h4>
                                           <h5><strong>How to Use:</strong></h5>
                                           <ul>
                                            <li>Access dashboards for Management reports, sales trends, traffic analysis, and inventory.</li>
                                            <li>Retailers can monitor store performance in real time.</li>
                                            <li>Use predictive analytics for inventory restocking.</li>

                                           </ul>
                                           <h5><strong>Benefits:</strong></h5>
                                           <ul>
                                              <li>Smarter business decisions with data insights</li>
                                              <li>Forecast sales & manage promotions effectively</li>
                                              <li>Prevents overstocking or understocking issues</li>
                                           </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <h4> Retail Traffic Counting & Heat Maps</h4>
                                           <h5><strong>How to Use:</strong></h5>
                                           <ul>
                                               <li>Install computer vision sensors at store entry/exit points.</li>
                                               <li>Track customer footfall and analyze peak shopping hours.</li>
                                               <li>Use heat maps to understand customer movement patterns.</li>
                                           </ul>
                                           <h5><strong>Benefits:</strong></h5>
                                           <ul>
                                             <li>Better store space optimization</li>
                                             <li>Helps improve product placement for higher sales</li>
                                             <li>Clear insights into customer shopping behavior</li>
                                           </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <h4>Seamless Integrations with Management, AI Knowledge Base, and Payments</h4>
                                           <h5><strong>How to Use:</strong></h5>
                                           <ul>
                                            <li>Integrate existing Management, e-commerce, inventory, and payment systems.</li>
                                            <li>Use a single dashboard to manage in-store & online sales.</li>
                                            <li>Accept payments through cards, UPI, wallets, loyalty points, or cash.</li>
                                           </ul>
                                           <h5><strong>Benefits:</strong></h5>
                                           <ul>
                                            <li>Unified system for all store operations</li>
                                            <li>Smooth omnichannel retail experience</li>
                                            <li>Saves operational costs & increases efficiency</li>
                                           </ul>
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


      <section className="faq-template">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="faq-section">
                          <div className="heading-wrap text-center">
                              <h2>FAQ – Smart Retail Solution by   <span>ChittorTech</span> </h2>
                          </div>
                            <div className="accordion" id="faqAccordion">

                            {/* AI FAQ 1 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How can AI-based weight integration improve billing accuracy in retail stores?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        AI-powered weight scales automatically calculate product prices based on weight, reducing manual errors. This ensures accurate billing, faster checkouts, and improved customer trust in pricing.
                                    </div>
                                </div>
                            </div>

                            {/* AI FAQ 2 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        What are the benefits of using smart shopping carts in retail?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Smart shopping carts let customers scan items directly, track their total in real time, and pay instantly. This reduces waiting times, prevents billing queues, and enhances the overall shopping experience.
                                    </div>
                                </div>
                            </div>

                            {/* AI FAQ 3 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Why should retailers implement self-checkout systems?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Self-checkout kiosks empower customers to scan and pay for products themselves. This saves time, eliminates long queues, reduces staffing needs, and provides a seamless payment experience with digital receipts.
                                    </div>
                                </div>
                            </div>

                            {/* AI FAQ 4 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        How does smart object detection at Management improve efficiency?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse"
                                    aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        With AI-powered object detection, items are instantly recognized and billed at counters without manual scanning. This speeds up checkout, improves accuracy, and integrates smoothly with inventory and AI Knowledge Base systems.
                                    </div>
                                </div>
                            </div>

                            {/* AI FAQ 5 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        What role does intelligent analytics play in retail success?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse"
                                    aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Intelligent analytics provide real-time sales reports, customer insights, and predictive restocking suggestions. Retailers can use these insights to improve promotions, optimize inventory, and boost overall store performance.
                                    </div>
                                </div>
                            </div>

                            {/* AI FAQ 6 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        How can retail traffic counting and heat maps benefit store owners?
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse"
                                    aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Traffic counters and heat maps track customer footfall and movement patterns inside the store. This data helps retailers optimize store layouts, improve product placement, and increase sales conversions.
                                    </div>
                                </div>
                            </div>

                            {/* AI FAQ 7 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        Why is seamless integration with Management, AI Knowledge Base, and payments important?
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse"
                                    aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        A unified system ensures smooth store operations by connecting billing, AI Knowledge Base, inventory, and payments on one dashboard. This enhances customer experience, supports omnichannel retailing, and reduces operational costs.
                                    </div>
                                </div>
                            </div>

                            {/* AI FAQ 8 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEight">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                        How does ChittorTech support omnichannel retail in India?
                                    </button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse"
                                    aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        With its Omnichannel E-Commerce Software in India, ChittorTech connects online and offline sales, streamlines inventory, supports multiple payment gateways, and provides customers with a consistent shopping experience across all platforms.
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
