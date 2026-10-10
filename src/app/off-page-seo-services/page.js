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
                <i className={`fa-solid fa-link`}></i> Off-Page SEO
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Off-Page SEO Services
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Build domain authority with high-quality backlinks and strategic link-building.
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
                <i className={`fa-solid fa-link`}></i>
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
                          <h2>Best Off-Page SEO Company in India – <span> ChittorTech</span> </h2>
                          <p>Looking to achieve a top rank on Google where most clicks happen? As a leading off-page SEO company in India, ChittorTech helps you climb the ranks with high-quality backlinks, strategic guest blogging, influencer outreach, and content promotion that drives referral traffic and boosts your online authority.</p>
                         <p>
  Get your free proposal from the 
  <a href="/off-page-seo-services" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
    best off-page SEO agency  in India
  </a> 
  today.
</p>

                       </div>
                    </div>
                   </div>
                   <div className="col-md-6">
                        <div className="seo-services-img">
                           <figure>
                               <img src="/assets/images/img126.jpg" alt="Best SEO Services" />
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
                          <h2> Backlink Strategies That Drive  <span> Relevant Traffic</span> </h2>
                       </div>
                       <div className="why-choose-wrap">
                          <ul>
                             <li>
                                <figure> <img src="/assets/images/off1.png" alt="ChittorTech Off Page Seo Services - off1" /> </figure>
                                <h3>Personalized Off-Page SEO Services tailored to your business needs</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/off2.png" alt="ChittorTech Off Page Seo Services - off2" /> </figure>
                                <h3>98% Client Satisfaction Score with measurable results</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/off3.png" alt="ChittorTech Off Page Seo Services - off3" /> </figure>
                                <h3>Successfully handled 8,000+ projects across industries</h3>
                             </li>
                          </ul>
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
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img127.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start">
                          <h2> Backlink Strategies That Drive  <span>Relevant Traffic </span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li> <img src="/assets/images/check.png" alt="ChittorTech Off Page Seo Services - check" />Personalized Off-Page SEO Services tailored to your business needs</li>
                              <li> <img src="/assets/images/check.png" alt="ChittorTech Off Page Seo Services - check" />98% Client Satisfaction Score with measurable results</li>
                              <li> <img src="/assets/images/check.png" alt="ChittorTech Off Page Seo Services - check" />Successfully handled 8,000+ projects across industries</li>
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
                 <h2>Our Off-Page <span>SEO Services</span> </h2>
              </div>
             <div className="row">
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="0">
                   <figure> <img src="/assets/images/cp1.png" alt="ChittorTech Off Page Seo Services - cp1" /> </figure>
                   <h4>Content Promotion</h4>
                   <p>We promote your content through targeted campaigns and social media strategies to reach the right audience and earn backlinks from authoritative websites.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="100">
                   <figure> <img src="/assets/images/cp2.png" alt="ChittorTech Off Page Seo Services - cp2" /> </figure>
                   <h4>Strategic Outreach</h4>
                   <p>We connect your content with respected bloggers, journalists, and influencers. Guest blogging and influencer collaborations help build credibility and online authority.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="200">
                   <figure> <img src="/assets/images/cp3.png" alt="ChittorTech Off Page Seo Services - cp3" /> </figure>
                   <h4> Earned Media Expertise</h4>
                   <p>We create high-quality content like infographics, guest blogs, and videos to attract natural backlinks, boost brand authority, and drive meaningful traffic.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="300">
                   <figure> <img src="/assets/images/cp4.png" alt="ChittorTech Off Page Seo Services - cp4" /> </figure>
                   <h4>Industry Networking</h4>
                   <p>With relationships across <strong>200+ industries,</strong> we secure backlinks quickly from trusted sources, increasing your site’s authority.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="400">
                   <figure> <img src="/assets/images/cp5.png" alt="ChittorTech Off Page Seo Services - cp5" /> </figure>
                   <h4>Link Analysis & Disavow</h4>
                   <p>We monitor your backlink profile, remove spammy links, and ensure a clean, trustworthy SEO strategy.</p>
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
                          <h2> Why Choose ChittorTech for   <span>Off-Page SEO</span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li> <img src="/assets/images/ccheck1.png" alt="ChittorTech Off Page Seo Services - ccheck1" /> Best Off-Page SEO Company in India with proven expertise</li>
                              <li> <img src="/assets/images/ccheck1.png" alt="ChittorTech Off Page Seo Services - ccheck1" /> Ethical & Result-Oriented Strategies for long-term growth</li>
                              <li> <img src="/assets/images/ccheck1.png" alt="ChittorTech Off Page Seo Services - ccheck1" /> Expert Team with years of experience in link-building and outreach</li>
                              <li> <img src="/assets/images/ccheck1.png" alt="ChittorTech Off Page Seo Services - ccheck1" /> Transparent Reporting and measurable results</li>
                           </ul>
                       </div>
                  </div>
                  <div className="col-md-6">
                       <div className="expertise-img text-end">
                           <figure>
                              <img src="/assets/images/img128.jpg" alt="Local & National SEO Expertise" />
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
                       <div className="expertise-img text-strat">
                           <figure>
                              <img src="/assets/images/img129.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start">
                          <h2> Benefits of Off-Page <span>SEO Services  </span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li><strong> Boost Website Authority & Domain Score –</strong> Build trust with high-quality backlinks.</li>
                              <li><strong> Generate Valuable Referral Traffic –</strong> Attract visitors from relevant, trusted sources.</li>
                              <li><strong> Improve Local Search Rankings –</strong> Enhance visibility for local searches and Google Maps.</li>
                              <li><strong> Expand Reach Through Social Media –</strong> Promote content and engage with your audience.</li>
                              <li><strong> Build Long-Term Online Presence & Brand Reputation –</strong> Establish credibility and authority over time.</li>
                              <li><strong> Enhance Trust with Positive Reviews –</strong> Influence potential customers and local SEO rankings.</li>
                           </ul>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/*  Why Choose Our SEO Services? */}

      <section className="choose-chittortech-sec core-features-sec textile-manufacturers-sec">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="heading-wrap">
                     <h2> Industries We   <span>Serve </span> </h2>
                     <p>We offer customized off-page SEO packages for multiple industries to drive growth, visibility, and authority:</p>
                  </div>
                  <div className="why-choose-grid textile-manufacturers-wrap">
                     <div className="grid-item">
                        <figure> <img src="/assets/images/t1.png" alt="ChittorTech Off Page Seo Services - t1" /> </figure>
                        <h3>Travel & Tourism</h3>
                        <p>Backlinks from travel blogs, tourism boards, and directories</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/t2.png" alt="ChittorTech Off Page Seo Services - t2" /> </figure>
                        <h3>Education</h3>
                        <p>Authority building via academic websites and course platforms</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/t3.png" alt="ChittorTech Off Page Seo Services - t3" /> </figure>
                        <h3>eCommerce</h3>
                        <p>Links from product review sites, influencers, and niche blogs</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/t4.png" alt="ChittorTech Off Page Seo Services - t4" /> </figure>
                        <h3>Healthcare</h3>
                        <p>Backlinks from medical blogs, health directories, and forums</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/t5.png" alt="ChittorTech Off Page Seo Services - t5" /> </figure>
                        <h3>Real Estate</h3>
                        <p> Property portals, local business sites, and real estate blogs</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/t6.png" alt="ChittorTech Off Page Seo Services - t6" /> </figure>
                        <h3>Entertainment & Media</h3>
                        <p> Media publications, fan communities, and news sites </p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/t7.png" alt="ChittorTech Off Page Seo Services - t7" /> </figure>
                        <h3>Food & Beverage</h3>
                        <p> Recipe blogs, food review sites, and local directories </p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/t8.png" alt="ChittorTech Off Page Seo Services - t8" /> </figure>
                        <h3>Logistics & Transportation</h3>
                        <p>  Industry directories, business partners, and forums </p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/t9.png" alt="ChittorTech Off Page Seo Services - t9" /> </figure>
                        <h3>Retail</h3>
                        <p>Product review sites, lifestyle blogs, and marketplaces</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/t10.png" alt="ChittorTech Off Page Seo Services - t10" /> </figure>
                        <h3>Hospitality</h3>
                        <p>  Travel review sites, booking platforms, and influencer blogs</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/t11.png" alt="ChittorTech Off Page Seo Services - t11" /> </figure>
                        <h3>Sports & Fitness</h3>
                        <p> Fitness blogs, sports news sites, and local clubs </p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/t12.png" alt="ChittorTech Off Page Seo Services - t12" /> </figure>
                        <h3>Automotive</h3>
                        <p>Auto review sites, forums, and industry publications </p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/t13.png" alt="ChittorTech Off Page Seo Services - t13" /> </figure>
                        <h3>Finance</h3>
                        <p> Finance blogs, news sites, and professional directories</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/t14.png" alt="ChittorTech Off Page Seo Services - t14" /> </figure>
                        <h3>Luxury Goods</h3>
                        <p>High-end lifestyle magazines, influencer sites</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/t15.png" alt="ChittorTech Off Page Seo Services - t15" /> </figure>
                        <h3>Artificial Intelligence</h3>
                        <p> Tech blogs, AI forums, and industry leaders </p>
                     </div>
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
      
      {/*  faq template section */}
    <section className="faq-template">
      <div className="container">
        <div className="heading-wrap text-center">
          <h2>Frequently Asked <span>Questions</span></h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="faq-section">
              <div className="accordion" id="faqAccordion">

                {/* FAQ 1 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What is Off-Page SEO and why is it important?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Off-Page SEO refers to strategies implemented outside your website to improve its authority, rankings, and referral traffic. It includes link building, guest posting, influencer outreach, and social signals. It’s important because it helps search engines trust your site and boosts your visibility.
                    </div>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      How does ChittorTech provide the best off-page SEO services in India?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We create customized off-page SEO strategies, including high-quality backlinks, content promotion, influencer outreach, and social media engagement. Our ethical and result-driven approach ensures measurable growth in rankings and traffic.
                    </div>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      What industries can benefit from Off-Page SEO services?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Off-Page SEO is effective for almost all industries, including travel, education, eCommerce, healthcare, real estate, entertainment, food & beverage, logistics, retail, hospitality, sports, automotive, finance, luxury goods, and AI technology.
                    </div>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      How long does it take to see results from off-page SEO?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Results vary based on competition, industry, and website condition. Typically, improvements in rankings and referral traffic can be observed within 3–6 months of implementing effective off-page SEO strategies.
                    </div>
                  </div>
                </div>

                {/* FAQ 5 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      What makes ChittorTech the best off-page SEO company in India?
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We combine experience, proven strategies, and a dedicated team of experts. With a track record of handling 8,000+ projects and achieving high-quality backlinks, we focus on measurable results, long-term growth, and client satisfaction.
                    </div>
                  </div>
                </div>

                {/* FAQ 6 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      Can Off-Page SEO increase local search visibility?
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes! Local SEO techniques, such as citations, backlinks from local websites, and review management, help your business appear prominently in Google Maps and local search results.
                    </div>
                  </div>
                </div>

                {/* FAQ 7 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                      What are the key benefits of Off-Page SEO services?
                    </button>
                  </h2>
                  <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <ul>
                        <li>Improved search engine rankings and visibility</li>
                        <li>Higher website authority and domain score</li>
                        <li>Increased referral traffic and qualified leads</li>
                        <li>Better brand reputation and credibility</li>
                        <li>Long-term sustainable growth</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* FAQ 8 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEight">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                      How does Off-Page SEO work with On-Page SEO and SMO?
                    </button>
                  </h2>
                  <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Off-Page SEO complements On-Page SEO (content, meta tags, site structure) and SMO (social media optimization) to create a holistic digital marketing strategy. Together, they boost rankings, traffic, and conversions.
                    </div>
                  </div>
                </div>

                {/* FAQ 9 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingNine">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                      Do you provide reporting and performance tracking for Off-Page SEO?
                    </button>
                  </h2>
                  <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Absolutely! We provide regular reports detailing backlink acquisition, domain authority improvements, referral traffic, and keyword ranking progress to ensure transparency and measurable results.
                    </div>
                  </div>
                </div>

                {/* FAQ 10 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                      How can I get started with ChittorTech’ Off-Page SEO services?
                    </button>
                  </h2>
                  <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Simply contact us for a free consultation and proposal. Our experts will analyze your website, identify opportunities, and create a customized off-page SEO strategy to boost your rankings and online authority.
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
