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
                <i className={`fa-solid fa-file-lines`}></i> On-Page SEO
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                On-Page SEO Services
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Optimize every element of your website to rank for high-intent keywords.
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
                <i className={`fa-solid fa-file-lines`}></i>
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
                          <h2>Best On-Page SEO Services in India –  <span>ChittorTech</span> </h2>
                       <p>
  In today’s digital landscape, having a website alone is not enough. To achieve visibility and reach your target audience, your website must be optimized with 
  <a href="/on-page-seo-services" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
    best on-page SEO services in India.
  </a> 
   ChittorTech provides expert on-page SEO services to enhance website performance, improve user experience, and boost search engine rankings.
</p>

                          <p>On-page SEO involves techniques implemented directly on your website, including optimizing content, meta tags, URLs, and site structure, ensuring your website is search engine friendly and easy for users to navigate.</p>
                       </div>
                    </div>
                   </div>
                   <div className="col-md-6"> 
                        <div className="seo-services-img">
                           <figure>
                               <img src="/assets/images/img124.jpg" alt="Best SEO Services" />
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
              <div className="row">
                  <div className="col-md-12">
                      <div className="heading-wrap text-center">
                          <h2>Why On-Page  <span>SEO Matters</span> </h2>
                       </div>
                       <div className="why-choose-wrap">
                          <ul>
                             <li>
                                <figure> <img src="/assets/images/h1.png" alt="ChittorTech On Page Seo Services - h1" /> </figure>
                                <h3>Higher search engine rankings</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/h2.png" alt="ChittorTech On Page Seo Services - h2" /> </figure>
                                <h3>Better user experience and navigation</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/h3.png" alt="ChittorTech On Page Seo Services - h3" /> </figure>
                                <h3>Increased organic traffic</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/h4.png" alt="ChittorTech On Page Seo Services - h4" /> </figure>
                                <h3>Greater conversion potential</h3>
                             </li>
                          </ul>
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
                 <h2> Our On-Page SEO   <span>Services Include</span> </h2>
              </div>
             <div className="row">
               <div className="col-md-3 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="0">
                   <figure> <img src="/assets/images/c1.png" alt="ChittorTech On Page Seo Services - c1" /> </figure>
                   <h4>Content Optimization</h4>
                   <ul className="list-unstyled">
                     <li>High-quality, relevant content tailored for your audience</li>
                     <li>Keyword-rich headings, subheadings, and internal linking</li>
                     <li>Multimedia integration (images, videos, infographics)</li>
                   </ul>
                 </div>
               </div>
               <div className="col-md-3 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="100">
                   <figure> <img src="/assets/images/c21.png" alt="ChittorTech On Page Seo Services - c21" /> </figure>
                   <h4>Meta Tags Optimization</h4>
                   <ul className="list-unstyled">
                     <li>Optimized title tags, meta descriptions, and meta keywords</li>
                     <li>Unique tags to improve CTR and search rankings</li>
                     <li>Structured meta data for better search engine understanding</li>
                   </ul>
                 </div>
               </div>
               <div className="col-md-3 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="200">
                   <figure> <img src="/assets/images/c31.png" alt="ChittorTech On Page Seo Services - c31" /> </figure>
                   <h4>URL Optimization</h4>
                   <ul className="list-unstyled">
                     <li>SEO-friendly, readable URLs</li>
                     <li>Keyword integration in URL structure</li>
                     <li>Consistent and clean naming conventions</li>
                   </ul>
                 </div>
               </div>
               <div className="col-md-3 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="300">
                   <figure> <img src="/assets/images/c41.png" alt="ChittorTech On Page Seo Services - c41" /> </figure>
                   <h4>Site Structure Optimization</h4>
                   <ul className="list-unstyled">
                     <li>Clear navigation hierarchy</li>
                     <li>Proper heading tag usage (H1, H2, H3)</li>
                     <li>Mobile-friendly design and fast-loading pages</li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
      </section>
      {/*   Our Complete SEO Service Suite */}

      <section className="complete-seo-service"> 
         <div className="container my-5">
            <div className="heading-wrap text-center">
                 <h2> Keyword Research – The  <span>Backbone of SEO</span> </h2>
                 <p>Keyword research is essential to understand your audience’s search behavior, identify market gaps, and optimize website content. Proper keyword implementation improves your website’s ranking and visibility.</p>
              </div>
             <div className="row">
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="0">
                   <figure> <img src="/assets/images/ap1.png" alt="ChittorTech On Page Seo Services - ap1" /> </figure>
                   <h4>Our approach</h4>
                   <ul className="list-unstyled">
                     <li>Identify target audience and search intent</li>
                     <li>Select low-competition, high-volume keywords</li>
                     <li>Integrate keywords naturally into content, meta tags, and URLs</li>
                     <li>Analyze competitors and fill gaps in the market</li>
                     <li>Create a keyword list relevant to your website content</li>
                   </ul>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="100">
                   <figure> <img src="/assets/images/ap2.png" alt="ChittorTech On Page Seo Services - ap2" /> </figure>
                   <h4>Best practices</h4>
                   <ul className="list-unstyled">
                     <li>Unique and descriptive titles</li>
                     <li>Relevant keywords in meta descriptions</li>
                     <li>Avoid duplicate meta tags</li>
                     <li>Align meta tags with page content</li>
                   </ul>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="200">
                   <figure> <img src="/assets/images/ap3.png" alt="ChittorTech On Page Seo Services - ap3" /> </figure>
                   <h4>Guidelines</h4>
                   <ul className="list-unstyled">
                     <li>H1 for main headings, H2-H6 for subheadings</li>
                     <li>Keep headings informative and keyword-rich</li>
                     <li>Avoid overuse to maintain clarity</li>
                     <li>Use CSS for styling instead of font-size changes</li>
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
                      <div className="heading-wrap text-start">
                          <h2> Major Benefits of  <span>On-Page SEO  </span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li> <img src="/assets/images/ccheck1.png" alt="ChittorTech On Page Seo Services - ccheck1" /> Improved Search Rankings: Boost website visibility and organic traffic</li>
                              <li> <img src="/assets/images/ccheck1.png" alt="ChittorTech On Page Seo Services - ccheck1" /> Targeted Audience Reach: Attract users searching for your services</li>
                              <li> <img src="/assets/images/ccheck1.png" alt="ChittorTech On Page Seo Services - ccheck1" /> Enhanced User Experience: Better navigation and readability</li>
                              <li> <img src="/assets/images/ccheck1.png" alt="ChittorTech On Page Seo Services - ccheck1" /> Higher ROI: Increase conversions and business growth</li>
                           </ul>
                       </div>
                  </div>
                  <div className="col-md-6">
                       <div className="expertise-img text-end">
                           <figure>
                              <img src="/assets/images/img125.jpg" alt="Local & National SEO Expertise" />
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
                  <div className="col-md-12">
                      <div className="heading-wrap text-start">
                          <h2>Best Off-Page SEO Company in India –  <span>ChittorTech</span> </h2>
                          <p>Alongside on-page SEO, effective off-page SEO is crucial to improve your website authority and search engine ranking. As the best off-page SEO company in India, ChittorTech focuses on:</p>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li> <img src="/assets/images/ccheck1.png" alt="ChittorTech On Page Seo Services - ccheck1" /> High-quality backlink building from authoritative websites</li>
                              <li> <img src="/assets/images/ccheck1.png" alt="ChittorTech On Page Seo Services - ccheck1" /> Guest posting & content outreach</li>
                              <li> <img src="/assets/images/ccheck1.png" alt="ChittorTech On Page Seo Services - ccheck1" /> Social bookmarking and directory submissions</li>
                              <li> <img src="/assets/images/ccheck1.png" alt="ChittorTech On Page Seo Services - ccheck1" /> Influencer collaborations to boost brand presence</li>
                              <li> <img src="/assets/images/ccheck1.png" alt="ChittorTech On Page Seo Services - ccheck1" /> Online reputation management to enhance credibility</li>
                           </ul>
                           <p>Our off-page SEO strategies complement on-page optimization, ensuring your website ranks higher and attracts more qualified traffic.</p>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/*  Why Choose Our SEO Services? */}

      <section className="cta-section">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="cta-box">
                        <div className="phone-icon">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <h2>Let's Build Your Online Authority</h2>
                        <p>Ready to take your rankings and reputation to the next level? Contact ChittorTech today for a free SEO strategy consultation.</p>
                        <button  onClick={() => { window.location.href = "/contact-us"; }}   className="cta-button">Get Started</button>
                     </div>
                 </div>
             </div>
         </div>
      </section>


      {/*  Why Choose Our SEO Services? */}
      <section className="why-choose-sec tools-use-sec"> 
          <div className="container">
           <div className="heading-wrap text-center">
              <h2> Why Choose Chittortech   <span> for SEO </span> </h2>
           </div>
            <div className="row">
                  <div className="col-md-3 col-lg-3 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="0">
                      <h4> <strong>Expert Team:</strong> Experienced professionals for on-page and off-page SEO</h4>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-3 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="100">
                      <h4> <strong>Customized Solutions:</strong> Tailored strategies to meet your business goals</h4>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-3 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="200">
                      <h4><strong>Transparent Communication:</strong> Clear updates at every stage</h4>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-3 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="200">
                      <h4><strong>Proven Results:</strong> Improved rankings, higher traffic, and better ROI</h4>
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
                 <h2>  Frequently Asked <span>Questions</span> </h2>
              </div>
              <div className="row">
                  <div className="col-md-12">
                      <div className="faq-section">
                              <div className="accordion" id="faqAccordion">
                                  {/* FAQ 1 */}
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingOne">
                                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                              What is SEO and why is it important for my business?
                                          </button>
                                      </h2>
                                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                          <div className="accordion-body">
                                              SEO helps your website rank higher on search engines, bringing organic traffic and increasing brand trust—especially important in competitive areas like Jaipur and Delhi NCR.
                                          </div>
                                      </div>
                                  </div>
                                  {/* FAQ 2 */}
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingTwo">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                              How long does it take to see results from SEO?
                                          </button>
                                      </h2>
                                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                          <div className="accordion-body">
                                              Most businesses see improvements in 3 to 6 months, depending on competition, current rankings, and effort invested.
                                          </div>
                                      </div>
                                  </div>
                                  {/* FAQ 3 */}
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingThree">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                              Do you offer SEO services for both local and national businesses?
                                          </button>
                                      </h2>
                                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                          <div className="accordion-body">
                                              Yes, we do! Whether you're targeting local customers in Jaipur & Delhi NCR or running national campaigns, we customize strategies for you.
                                          </div>
                                      </div>
                                  </div>
                                  {/* FAQ 4 */}
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingFour">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                              What types of SEO do you provide?
                                          </button>
                                      </h2>
                                      <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                          <div className="accordion-body">
                                              On-page, off-page, technical, mobile SEO, and more. We cover all aspects to improve your complete search presence.
                                          </div>
                                      </div>
                                  </div>
                                  {/* FAQ 5 */}
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingFive">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                              Can SEO help increase leads and conversions?
                                          </button>
                                      </h2>
                                      <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                          <div className="accordion-body">
                                              Definitely. SEO helps attract the right audience that is actively searching for your services—leading to more conversions.
                                          </div>
                                      </div>
                                  </div>
                                  {/* FAQ 6 */}
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingSix">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                              Why choose Chittortech as your SEO agency?
                                          </button>
                                      </h2>
                                      <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                                          <div className="accordion-body">
                                              We focus on transparency, ROI, ethical techniques, and long-term growth. Our team is dedicated to your success.
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
