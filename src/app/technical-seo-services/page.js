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
                <i className={`fa-solid fa-gears`}></i> Technical SEO
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Technical SEO Services
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Fix crawl errors, improve site speed, and optimize your technical foundation.
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
                <i className={`fa-solid fa-gears`}></i>
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
                          <h2>Best Technical SEO Service in India –  <span>ChittorTech</span> </h2>
                          <p>
  In today’s digital era, having a visually appealing website is no longer enough. Your website needs to be technically optimized to rank higher on search engines and deliver an exceptional user experience. Technical SEO ensures that search engines can crawl, index, and rank your pages effectively. At ChittorTech, we provide the 
  <a href="/technical-seo-services" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
    best technical SEO service in India
  </a>, helping businesses of all sizes increase visibility, organic traffic, and conversions.
</p>

                       </div>
                    </div>
                   </div>
                   <div className="col-md-6">
                        <div className="seo-services-img">
                           <figure>
                               <img src="/assets/images/img130.jpg" alt="Best SEO Services" />
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>
      {/*  Best SEO Services section end here */}



      {/*  Why Choose Our SEO Services? */}
      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-6">
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img131.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start mobile-a">
                          <h3> What Is Technical   <span>SEO?</span> </h3>
                          <p>Technical SEO refers to optimizing the technical aspects of your website to improve search engine rankings. Unlike on-page or off-page SEO, which focuses on content and backlinks, technical SEO deals with backend elements such as:</p>
                       </div>
                       <div className="expertise-wrap">
                           <ul className="benefit-list">
                              <li>Website speed and performance</li>
                              <li>Mobile responsiveness</li>
                              <li>Site architecture</li>
                              <li>Crawlability & indexability</li>
                              <li>Secure connections (HTTPS)</li>
                              <li>Structured data & schema markup</li>
                           </ul>
                           <p>A website that is technically optimized ensures both users and search engines can navigate it seamlessly, resulting in higher search visibility and a better user experience. Partnering with the best technical SEO company in India ensures your website stays ahead of the competition.</p>
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
                      <div className="heading-wrap text-start mobile-a">
                          <h2> Why Technical SEO Is   <span>Important</span> </h2>
                          <p>Technical SEO lays the foundation for all other SEO strategies. Without it, even the best content and backlinks cannot achieve optimal results. Key reasons to invest in technical SEO:</p>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li> <strong>Improved Search Engine Rankings:</strong> Ensure your website ranks high on Google and other search engines.</li>
                              <li> <strong>Faster Website Speed:</strong> Optimized websites load quickly, reducing bounce rates and improving user engagement.</li>
                              <li> <strong>Enhanced User Experience:</strong> Mobile-friendly designs, clear navigation, and secure websites enhance customer satisfaction.</li>
                              <li> <strong>Better Crawlability & Indexing:</strong> Search engines can easily access and understand your content.</li>
                              <li> <strong>Higher Organic Traffic:</strong> Increased visibility attracts more qualified visitors to your site.</li>
                              <li> <strong>Competitive Advantage:</strong> Stay ahead of competitors with a technically sound website.</li>

                           </ul>
                           <p>By choosing the <b> best technical SEO service in India,</b> your business can achieve measurable growth in rankings, traffic, and conversions.</p>
                       </div>
                  </div>
                  <div className="col-md-6">
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img132.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/*  Why Choose Our SEO Services? */}

      {/*   Our Complete SEO Service Suite */}
      <section className="complete-seo-service"> 
         <div className="container my-5">
            <div className="heading-wrap text-center">
                 <h2> Core Technical SEO Services  <span>We Offer</span> </h2>
                 <p>At ChittorTech, our technical SEO company in India provides comprehensive services to optimize your website technically:</p>
              </div>
             <div className="row">
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="0">
                   <figure> <img src="/assets/images/au1.png" alt="ChittorTech Technical Seo Services - au1" /> </figure>
                   <h4>Technical SEO Audit</h4>
                   <p>We conduct a detailed audit of your website to identify technical issues and opportunities for improvement. This includes checking:</p>
                   <ul className="list-unstyled">
                      <li>Core Web Vitals (LCP, FID, CLS)</li>
                      <li>Crawlability & indexability</li>
                      <li>Site structure & URL hierarchy</li>
                      <li>Duplicate content and canonicalization</li>
                      <li>HTTPS & website security</li>
                   </ul>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="100">
                   <figure> <img src="/assets/images/au2.png" alt="ChittorTech Technical Seo Services - au2" /> </figure>
                   <h4>Page Speed Optimization</h4>
                   <p>Our experts ensure fast-loading pages by:</p>
                   <ul className="list-unstyled">
                      <li>Compressing and optimizing images</li>
                      <li>Implementing browser caching</li>
                      <li>Minifying CSS, JS, and HTML</li>
                      <li>Server & database optimization</li>

                   </ul>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="200">
                   <figure> <img src="/assets/images/au3.png" alt="ChittorTech Technical Seo Services - au3" /> </figure>
                   <h4> Mobile Optimization</h4>
                   <p>Google prioritizes mobile-first indexing. Our team ensures your website is responsive, fast, and fully functional on all devices.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="300">
                   <figure> <img src="/assets/images/au4.png" alt="ChittorTech Technical Seo Services - au4" /> </figure>
                   <h4> Structured Data & Schema Markup</h4>
                   <p>Schema markup helps search engines understand your content and display rich snippets in search results, improving CTR.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="400">
                   <figure> <img src="/assets/images/au5.png" alt="ChittorTech Technical Seo Services - au5" /> </figure>
                   <h4>Crawl Error Fixing & Indexing Optimization</h4>
                   <p>We identify and fix crawl errors, broken links, orphan pages, and redirects to ensure smooth indexing by search engines.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/au6.png" alt="ChittorTech Technical Seo Services - au6" /> </figure>
                   <h4>XML Sitemap & Robots.txt Optimization</h4>
                   <p>We create and optimize sitemaps and robots.txt files, directing search engines to index the right pages</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/au7.png" alt="ChittorTech Technical Seo Services - au7" /> </figure>
                   <h4>Duplicate Content & Canonicalization</h4>
                   <p>Using canonical tags and URL optimization, we prevent duplicate content issues and guide search engines to the preferred version of pages.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/au8.png" alt="ChittorTech Technical Seo Services - au8" /> </figure>
                   <h4>HTTPS & Website Security</h4>
                   <p>A secure website builds user trust and improves Google rankings. We implement SSL certificates and ensure HTTPS for all pages.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/au9.png" alt="ChittorTech Technical Seo Services - au9" /> </figure>
                   <h4> Penalty Recovery</h4>
                   <p>If your website has been penalized by Google, we identify the cause, implement fixes, and help recover lost rankings.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/au10.png" alt="ChittorTech Technical Seo Services - au10" /> </figure>
                   <h4>Website Migration Support</h4>
                   <p>We manage smooth domain or platform migrations while maintaining rankings, updating links, and eliminating duplicate content.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/au11.png" alt="ChittorTech Technical Seo Services - au11" /> </figure>
                   <h4>Backlink Audit & Cleanup</h4>
                   <p>We analyze and remove harmful backlinks to improve domain authority and search engine trustworthiness.</p>
                 </div>
               </div>
             </div>
           </div>
      </section>
      {/*   Our Complete SEO Service Suite */}

      {/*  Why Choose Our SEO Services? */}
      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-6">
                      <div className="heading-wrap text-start">
                          <h2> How Technical SEO Services Boost   <span>Your Business</span> </h2>
                          <p>Working with the best technical SEO company in India brings multiple benefits:</p>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li> <strong>Higher Rankings:</strong> Ensure your site appears on Google’s first page.</li>
                              <li> <strong>Increased Organic Traffic:</strong> Attract more qualified visitors.</li>
                              <li> <strong>Better Conversions:</strong> Fast, secure, and user-friendly websites lead to higher sales.</li>
                              <li> <strong>Long-Term Growth:</strong> Technical SEO is a sustainable strategy for ongoing growth.</li>
                              <li> <strong>Improved Brand Reputation:</strong> Secure and optimized websites enhance user trust.</li>
                           </ul>
                       </div>
                  </div>
                  <div className="col-md-6">
                       <div className="expertise-img text-end">
                           <figure>
                              <img src="/assets/images/img133.jpg" alt="Local & National SEO Expertise" />
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
                              <img src="/assets/images/img134.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start">
                          <h2> Our Proven Technical SEO Process  <span>SEO Process</span> </h2>
                          <p>Working with the best technical SEO company in India brings multiple benefits:</p>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li><strong>Discover:</strong> Understand your business, website, and audience.</li>
                              <li><strong>Analyze:</strong> Conduct a comprehensive technical SEO audit.</li>
                              <li><strong>Strategize:</strong> Create a custom plan to fix technical issues.</li>
                              <li><strong>Implement:</strong> Optimize speed, mobile responsiveness, crawlability, and security.</li>
                              <li><strong>Measure:</strong> Track website performance using analytics and SEO tools.</li>
                              <li><strong>Report:</strong> Provide transparent reports on progress and results.</li>
                              <li><strong>Refine:</strong> Continuously adjust strategies based on updates and results.</li>
                           </ul>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/*  Why Choose Our SEO Services? */}

      <section className="industry new-cards">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="heading-wrap">
                        <h2>Industries <span>We Serve</span> </h2>
                        <p>Our top technical SEO company in India caters to various industries:</p>
                     </div>
                     <div className="desktop-industries">
                        <div className="row justify-content-center">
                           <div className="col-md-3 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <img src="/assets/images/is1.png" alt="Billing" className="img-fluid mb-3" />
                                          <h4>BFSI & FinTech  </h4>
                                          <p>Improve search visibility for financial services</p>
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
                                          <img src="/assets/images/is2.png" alt="Inbuilt Accounting Modules" className="img-fluid mb-3" />
                                          <h4>Healthcare & Pharma </h4>
                                          <p>Ensure patients find your services online.</p>
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
                                          <img src="/assets/images/is3.png" alt="Organize Clothing Stock" className="img-fluid mb-3" />
                                          <h4> Education & E-learning</h4>
                                          <p>Enhance rankings for courses and institutions.</p>
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
                                          <img src="/assets/images/is4.png" alt="Best Selling Apparel" className="img-fluid mb-3" />
                                          <h4>E-commerce & Retail</h4>
                                          <p>Optimize product pages and categories.</p>
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
                                          <img src="/assets/images/is5.png" alt="Offers and Discount Management" className="img-fluid mb-3" />
                                          <h4>IT & SaaS</h4>
                                          <p>Ensure software platforms are crawlable.</p>
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
                                          <img src="/assets/images/is6.png" alt="Sort Style-wise" className="img-fluid mb-3" />
                                          <h4>Real Estate & Hospitality</h4>
                                          <p> Improve local SEO and maps presence.</p>
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
                                          <img src="/assets/images/is7.png" alt="WhatsApp Integration" className="img-fluid mb-3" />
                                          <h4>Automotive & Transportation</h4>
                                          <p>Rank dealerships and services higher.</p>
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
                                          <img src="/assets/images/is8.png" alt="GST-Billing Compatibility" className="img-fluid mb-3" />
                                          <h4>
                                             Luxury & Lifestyle
                                          </h4>
                                          <p>Strengthen authority and SERP visibility.</p>
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

      <section className="clothing-stores-sec software-sec">
           <div className="container">
               <div className="row align-items-center">
                   <div className="col-md-7">
                       <div className="clothing-stores-text software-wrap specialized-box">
                           <h2>Why Choose ChittorTech as Your Technical SEO Company in India?</h2>
                           <ul>
                              <li> <strong>Experienced Team:</strong> Over a decade of technical SEO expertise.</li>
                              <li> <strong>Advanced Tools:</strong> Proficient in Ahrefs, Screaming Frog, Google Search Console, and more.</li>
                              <li> <strong>Up-to-Date Strategies:</strong> Stay ahead of algorithm updates.</li>
                              <li> <strong>Data-Driven Approach:</strong> Analytical solutions for maximum ROI.</li>
                              <li> <strong>Transparent Reporting:</strong> Clear insights on progress and performance.</li>
                              <li> <strong>Proven Results:</strong> Helping SMBs and enterprises increase traffic, rankings, and conversions.</li>
                           </ul>
                       </div>
                   </div>
                   <div className="col-md-5">
                       <div className="clothing-stores-img text-end">
                           <figure>
                              <img src="/assets/images/industry1.png" alt="ChittorTech Technical Seo Services - industry1" />
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>

      {/*  faq template section */}
      <section className="faq-template">
          <div className="container">
             <div className="heading-wrap text-center">
                 <h2>  FAQs About Technical  <span>SEO Services</span> </h2>
              </div>
              <div className="row">
                  <div className="col-md-12">
                      <div className="faq-section">
                              <div className="accordion" id="faqAccordion">
                                  {/* FAQ 1 */}
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingOne">
                                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                              What is the difference between technical SEO and on-page SEO?
                                          </button>
                                      </h2>
                                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                          <div className="accordion-body">
                                              Technical SEO focuses on backend optimizations like speed, crawlability, and security, while on-page SEO focuses on content, keywords, and meta tags.
                                          </div>
                                      </div>
                                  </div>
                                  {/* FAQ 2 */}
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingTwo">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                              How long to see results from technical SEO?
                                          </button>
                                      </h2>
                                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                          <div className="accordion-body">
                                              Typically, results appear within 3–6 months depending on website size and issues.
                                          </div>
                                      </div>
                                  </div>
                                  {/* FAQ 3 */}
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingThree">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                              Can technical SEO recover sites after Google penalties?
                                          </button>
                                      </h2>
                                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                          <div className="accordion-body">
                                              Yes, by fixing technical issues and harmful links, your rankings can improve.
                                          </div>
                                      </div>
                                  </div>
                                  {/* FAQ 4 */}
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingFour">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                              Do you provide ongoing technical SEO services?
                                          </button>
                                      </h2>
                                      <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                          <div className="accordion-body">
                                               Yes, we monitor and optimize continuously to ensure long-term performance.
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
