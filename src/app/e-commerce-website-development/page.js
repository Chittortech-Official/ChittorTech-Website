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
                <i className={`fa-solid fa-cart-shopping`}></i> E-Commerce
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                E-Commerce Website Development
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Build powerful online stores with seamless payment, inventory, and order management.
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
                <i className={`fa-solid fa-cart-shopping`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* header */}
            
    {/* header */}

      {/*  Best SEO Services section start here */}
      <section className="seo-services-sec">
           <div className="container">
               <div className="row align-items-center">
                   <div className="col-md-6">
                     <div className="seo-services">
                        <div className="heading-wrap text-start">
                          <h2>Best eCommerce Website Development in India –   <span>ChittorTech </span> </h2>
                          <h5>Transform Your Online Store into a Sales Powerhouse</h5>
                          <p>At ChittorTech, we specialize in creating custom, engaging, and high-performing eCommerce websites that turn casual browsers into loyal customers. Our team works with businesses of all sizes to deliver eCommerce solutions that are on time, on budget, and built for success.</p>
                          <p>Whether you want to launch a new store or revamp your existing one, we provide end-to-end e-commerce website development in India, helping your business grow in the digital marketplace.</p>
                          <a className="schedule-btn" href="/contact-us"> Get Started Today</a>
                       </div>
                    </div>
                   </div>
                   <div className="col-md-6">
                        <div className="seo-services-img">
                           <figure>
                               <img src="/assets/images/img139.jpg" alt="Best SEO Services" />
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>
      {/*  Best SEO Services section end here */}



      {/*   Our Complete SEO Service Suite */}
      <section className="complete-seo-service"> 
         <div className="container my-5">
            <div className="heading-wrap text-center">
                 <h2> Our eCommerce Website Development   <span>Services</span> </h2>
                 <p>We offer a wide range of services tailored to your business needs, including:</p>
              </div>
             <div className="row">
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="0">
                   <figure> <img src="/assets/images/ec1.png" alt="ChittorTech E Commerce Website Development - ec1" /> </figure>
                   <h4> Custom eCommerce Web Development</h4>
                 <p>
  With our 
  <a href="/e-commerce-website-development" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
    best e-commerce website development in India
  </a>, we build stores that are unique to your brand. From designing eye-catching layouts to coding secure, high-performing websites, we create solutions that grow with your business.
</p>

                   <ul className="list-unstyled">
                      <li>Fully tailored to your business needs</li>
                      <li>SEO-friendly architecture for higher search engine ranking</li>
                      <li>Mobile-first design for seamless shopping on any device</li>
                      <li>Complete control and advanced security for safe transactions</li>

                   </ul>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="100">
                   <figure> <img src="/assets/images/ec2.png" alt="ChittorTech E Commerce Website Development - ec2" /> </figure>
                   <h4> eCommerce Website Design & Redesign</h4>
                   <p>A visually appealing website is critical to attract and retain customers. Our e-commerce website design in India services focus on creating designs that are:</p>
                   <ul className="list-unstyled">
                      <li>User-friendly with an intuitive interface</li>
                      <li>Optimized for maximum engagement and conversions</li>
                      <li>Fully responsive across desktops, tablets, and smartphones</li>
                      <li>Consistent with your brand identity and messaging</li>

                   </ul>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="200">
                   <figure> <img src="/assets/images/ec3.png" alt="ChittorTech E Commerce Website Development - ec3" /> </figure>
                   <h4>Migration Between Platforms</h4>
                   <p>Switching platforms? Whether it’s WooCommerce to Shopify, Magento to Shopify, or vice versa, we handle every step of migration.</p>
                   <ul className="list-unstyled">
                      <li>Safe transfer of all product data and customer records</li>
                      <li>SEO preservation to maintain search engine ranking</li>
                      <li>Smooth user experience for customers, without interruptions</li>

                   </ul>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="300">
                   <figure> <img src="/assets/images/ec4.png" alt="ChittorTech E Commerce Website Development - ec4" /> </figure>
                   <h4> eCommerce Website Maintenance</h4>
                   <p>A thriving online store requires regular updates, security checks, and feature enhancements. Our maintenance services ensure your website is:</p>
                   <ul className="list-unstyled">
                      <li>Secure and fast-loading</li>
                      <li>Updated with new plugins and features</li>
                      <li>Free of bugs and errors</li>
                      <li>Continuously optimized for performance</li>

                   </ul>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="400">
                   <figure> <img src="/assets/images/ec5.png" alt="ChittorTech E Commerce Website Development - ec5" /> </figure>
                   <h4> CMS-Based eCommerce Development</h4>
                   <p>We specialize in building websites using popular CMS platforms like Shopify, WordPress with WooCommerce, and Adobe Commerce (Magento).</p>
                   <ul className="list-unstyled">
                      <li>Custom themes and plugins tailored to your business</li>
                      <li>Easy-to-manage admin panels for effortless updates</li>
                      <li>Flexible solutions for single or multi-vendor marketplaces</li>

                   </ul>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/ec6.png" alt="ChittorTech E Commerce Website Development - ec6" /> </figure>
                   <h4> eCommerce Integrations</h4>
                   <p>Integrate your online store with tools and APIs that improve efficiency:</p>
                   <ul className="list-unstyled">
                      <li>Payment gateways (Stripe, PayPal, Razorpay, etc.)</li>
                      <li>Inventory management systems (Zoho, QuickBooks, etc.)</li>
                      <li>Shipping APIs (UPS, FedEx, DHL, etc.)</li>
                   </ul>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/ec7.png" alt="ChittorTech E Commerce Website Development - ec7" /> </figure>
                   <h4> Product & Data Imports</h4>
                   <p>Easily import products and data from multiple sources to keep your store updated:</p>
                   <ul className="list-unstyled">
                      <li>Real-time product availability and pricing</li>
                      <li>Automated catalog updates for multiple vendors</li>
                      <li>Smooth product migration to new platforms</li>

                   </ul>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/ec8.png" alt="ChittorTech E Commerce Website Development - ec8" /> </figure>
                   <h4> Checkouts & Payment Gateways</h4>
                   <p>A fast and simple checkout increases conversions. We create:</p>
                   <ul className="list-unstyled">
                      <li>One-click checkouts for convenience</li>
                      <li>Multiple payment options (cards, wallets, UPI, etc.)</li>
                      <li>Secure and encrypted transactions for customer trust</li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
      </section>
      {/*   Our Complete SEO Service Suite */}

      <section className="why-choose-sec bridal-sec"> 
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-5">
                       <div className="expertise-img text-start">
                           <figure>
                              <img src="/assets/images/img140.jpg" alt="Local &amp; National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-7">
                      <div className="heading-wrap text-start">
                          <h2> Why Choose ChittorTech for   <span>eCommerce Website Development?</span> </h2>
                       </div>
                       <div className="expertise-wrap bridal-wrap">
                           <ul>
                              <li> <strong> Proven Track Record</strong> We have been providing e-commerce website development in India for nearly 20 years. From startups to enterprise businesses, we have delivered successful online stores that generate real results.</li>

                              <li>  <strong>Client Satisfaction </strong> With over 68+ reviews on Clutch.co and an average rating of 5.0, our clients trust us to deliver high-quality eCommerce solutions.</li>

                              <li>  <strong>Global Expertise with Local Insight </strong> Our team of 500+ professionals combines global expertise with local understanding to create online stores that appeal to diverse audiences worldwide.</li>

                              <li>  <strong>Cybersecurity Excellence </strong> We follow ISO/IEC 27001:2022 standards to ensure your eCommerce platform is secure, reliable, and built to protect your customers’ data.</li>
                           </ul>
                       </div>
                  </div>
              </div>
          </div>
      </section>

      {/*  Why Choose Our SEO Services? */}
      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-6">
                      <div className="heading-wrap text-start mobile-a">
                          <h2> Our eCommerce Development   <span> Process</span> </h2>
                       </div>
                       <div className="expertise-wrap ">
                           <ul className="benefit-list">
                              <li> <strong>Request a Quote –</strong> Share your project details and requirements with us.</li>
                              <li> <strong>Project Estimate –</strong> Receive a detailed cost estimate and timeline.</li>
                              <li> <strong>Design & Development –</strong> Our team develops your store with precision and speed.</li>
                              <li> <strong>Testing –</strong> Thorough testing across devices, browsers, and platforms.</li>
                              <li> <strong>Launch & Support –</strong> Your fully functional eCommerce store goes live with post-launch support.</li>
                           </ul>
                       </div>
                  </div>
                  <div className="col-md-6">
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img141.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/*  Why Choose Our SEO Services? */}

      {/*  Why Choose Our SEO Services? */}
      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-6">
                       <div className="expertise-img text-start">
                           <figure>
                              <img src="/assets/images/img142.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start">
                          <h2> Benefits of an     <span>eCommerce Website</span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li> <strong>Lower Overhead Costs – </strong> Reduce expenses compared to physical stores</li>
                              <li> <strong>Better Customer Experience –</strong>  Seamless shopping from any device</li>
                              <li> <strong>Competitive Advantage –</strong> Stay ahead in a digital-first market</li>
                              <li> <strong>Increased Reach –</strong> Sell products globally 24/7</li>
                              <li> <strong>Convenience –</strong> Easy management for you, easy shopping for your customers</li>
                           </ul>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/*  Why Choose Our SEO Services? */}

      <section className="clothing-stores-sec software-sec">
           <div className="container">
               <div className="row align-items-center">
                   <div className="col-md-7">
                       <div className="clothing-stores-text software-wrap specialized-box">
                           <h2>Key Features of Our eCommerce Solutions</h2>
                           <ul>
                              <li> <strong>Web Design for eCommerce –</strong> Engaging layouts and responsive designs</li>
                              <li> <strong>Product Catalog & Inventory Management –</strong> Real-time updates and organization</li>
                              <li> <strong>Order & Payment Management –</strong> Smooth processing, returns, and refunds</li>
                              <li> <strong>Cross-Selling & Upselling Tools –</strong> Increase Average Order Value (AOV)</li>
                              <li> <strong>Advanced Search & Wishlist Features –</strong> Help customers find products easily</li>
                              <li> <strong>Promotional Offers & Discounts –</strong> Highlight deals to attract buyers</li>
                              <li> <strong>Analytics & Reporting –</strong> Measure performance and optimize conversions</li>

                           </ul>
                       </div>
                   </div>
                   <div className="col-md-5">
                       <div className="clothing-stores-img text-end">
                           <figure>
                              <img src="/assets/images/img144.jpg" alt="ChittorTech E Commerce Website Development - img144" />
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>


      {/*  Why Choose Our SEO Services? */}
      <section className="why-choose-sec tools-use-sec"> 
          <div className="container">
           <div className="heading-wrap text-center">
              <h2> Platforms We <span>Excel In</span> </h2>
           </div>
            <div className="row">
                  <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="0">
                      <h4> <b>Shopify – </b>  Fast, reliable, and trend-setting</h4>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="100">
                      <h4> <b>WooCommerce –</b>  Flexible for all business sizes</h4>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="200">
                      <h4> <b>Magento / Adobe Commerce - </b> Scalable, feature-rich solutions</h4>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="200">
                      <h4> <b>BigCommerce – </b> Powerful platform for growing stores</h4>
                    </div>
                  </div>
               </div>
          </div>
      </section>
      {/*  Why Choose Our SEO Services? */}

      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="heading-wrap text-center">
                          <h2> Technology   <span>Stack</span> </h2>
                          <p>We use the latest technologies to build modern, efficient online stores:</p>
                       </div>
                       <div className="why-choose-wrap">
                          <ul>
                             <li>
                                <figure> <img src="/assets/images/img521.jpg" alt="ChittorTech E Commerce Website Development - img521" /> </figure>
                                <h3>Node.js</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/img522.jpg" alt="ChittorTech E Commerce Website Development - img522" /> </figure>
                                <h3> Flutter</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/img523.jpg" alt="ChittorTech E Commerce Website Development - img523" /> </figure>
                                <h3>Shopify</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/img524.jpg" alt="ChittorTech E Commerce Website Development - img524" /> </figure>
                                <h3> WooCommerce</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/img525.jpg" alt="ChittorTech E Commerce Website Development - img525" /> </figure>
                                <h3>Magento</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/img526.jpg" alt="ChittorTech E Commerce Website Development - img526" /> </figure>
                                <h3>OpenCart</h3>
                             </li>
                          </ul>
                       </div>
                  </div>
              </div>
          </div>
      </section>

      {/*  Why Choose Our SEO Services? */}
      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-6">
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/local-sec.png" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start mobile-a">
                          <h2> Why Hire Chittortech   <span>  ?</span> </h2>
                       </div>
                       <div className="expertise-wrap ">
                           <ul className="benefit-list">
                              <li>Skilled designers and experienced developers</li>
                              <li>High-performing, SEO-friendly, mobile-responsive websites</li>
                              <li>Fast-loading, optimized for conversions</li>
                              <li>Marketing guidance included to maximize online sales</li>
                              <li>Full support from launch to post-launch</li>
                           </ul>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/*  Why Choose Our SEO Services? */}


      
      {/*  faq template section */}
    <section className="faq-template">
      <div className="container">
        <div className="heading-wrap text-center">
          <h2> Frequently Asked <span>Questions</span> </h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="faq-section">
              <div className="accordion" id="faqAccordion">

                {/* AI Knowledge Base FAQ 1 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="crmHeadingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#crmCollapseOne" aria-expanded="true" aria-controls="crmCollapseOne">
                      Why do I need eCommerce website development services?</button></h2>
                  <div id="crmCollapseOne" className="accordion-collapse collapse show" aria-labelledby="crmHeadingOne" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      To increase sales, reach more customers, and provide a seamless online shopping experience.
                    </div>
                  </div>
                </div>

                {/* AI Knowledge Base FAQ 2 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="crmHeadingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#crmCollapseTwo" aria-expanded="false" aria-controls="crmCollapseTwo">
                     Which platforms do you use for development?
                    </button>
                  </h2>
                  <div id="crmCollapseTwo" className="accordion-collapse collapse" aria-labelledby="crmHeadingTwo" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Shopify, WooCommerce, Magento, BigCommerce, and other CMS platforms.
                    </div>
                  </div>
                </div>

                {/* AI Knowledge Base FAQ 3 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="crmHeadingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#crmCollapseThree" aria-expanded="false" aria-controls="crmCollapseThree">
                      Can you integrate payment gateways?
                    </button>
                  </h2>
                  <div id="crmCollapseThree" className="accordion-collapse collapse" aria-labelledby="crmHeadingThree" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, we integrate Stripe, PayPal, Razorpay, Square, and other gateways.
                    </div>
                  </div>
                </div>

                {/* AI Knowledge Base FAQ 4 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="crmHeadingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#crmCollapseFour" aria-expanded="false" aria-controls="crmCollapseFour">
                      Will my website be mobile-friendly?
                    </button>
                  </h2>
                  <div id="crmCollapseFour" className="accordion-collapse collapse" aria-labelledby="crmHeadingFour" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Absolutely. All websites are fully responsive across devices.
                    </div>
                  </div>
                </div>

                {/* AI Knowledge Base FAQ 5 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="crmHeadingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#crmCollapseFive" aria-expanded="false" aria-controls="crmCollapseFive">
                      How long does it take to develop an eCommerce website?
                    </button>
                  </h2>
                  <div id="crmCollapseFive" className="accordion-collapse collapse" aria-labelledby="crmHeadingFive" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Typically 4–12 weeks, depending on complexity and features.
                    </div>
                  </div>
                </div>

                {/* AI Knowledge Base FAQ 6 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="crmHeadingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#crmCollapseSix" aria-expanded="false" aria-controls="crmCollapseSix">
                       Do you provide post-development support?
                    </button>
                  </h2>
                  <div id="crmCollapseSix" className="accordion-collapse collapse" aria-labelledby="crmHeadingSix" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, we offer maintenance, updates, and troubleshooting support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* faq template section */}

      {/*  footer */}
    </>
  );
}
