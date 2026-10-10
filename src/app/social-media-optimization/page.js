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
                <i className={`fa-solid fa-thumbs-up`}></i> SMO
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Social Media Optimization (SMO) Services
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Build your brand, grow your audience, and drive engagement across all social platforms.
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
                <i className={`fa-solid fa-thumbs-up`}></i>
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
                          <h2>Best Social Media Optimization Company in India  <span>– ChittorTech</span> </h2>
                         <p>
                          Looking for the 
                          <strong>
                            <a href="/social-media-optimization" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
                              best SMO company
                            </a> 
                            in India? ChittorTech
                          </strong> 
                          offers the <strong>best SMO services in India,</strong> designed to help your business connect with audiences, boost engagement, and maximize ROI across social media platforms.
                        </p>


                          <p>With over <strong> 14 years of experience, </strong> our team of Meta Ads certified professionals delivers exceptional results, including <strong> 2X to 5X revenue growth, a 40% to 300% increase in qualified leads, </strong> and up to <strong> 2000% growth in new followers. </strong> Our strategies enhance brand exposure by <strong> 100% to 700%, </strong> earning recognition on <strong>Google </strong> and <strong>Clutch.co. </strong></p>
                       </div>
                    </div>
                   </div>
                   <div className="col-md-6">
                        <div className="seo-services-img">
                           <figure>
                               <img src="/assets/images/img121.jpg" alt="Best SEO Services" />
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
                          <h2> Our SMO Services  <span>Include:</span> </h2>
                       </div>
                       <div className="why-choose-wrap">
                          <ul>
                             <li>
                                <figure> <img src="/assets/images/so1.png" alt="ChittorTech Social Media Optimization - so1" /> </figure>
                                <h3>Social Media Profile Creation & Management</h3>
                                <p>Establish and optimize profiles on Facebook, Instagram, LinkedIn, Twitter, and YouTube.</p>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/so2.png" alt="ChittorTech Social Media Optimization - so2" /> </figure>
                                <h3>Content & Graphics Development </h3>
                                <p>Create engaging posts, visuals, and videos tailored to your audience.</p>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/so3.png" alt="ChittorTech Social Media Optimization - so3" /> </figure>
                                <h3>Targeted Advertising</h3>
                                <p>Run campaigns to reach potential customers actively interested in your products or services.</p>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/so4.png" alt="ChittorTech Social Media Optimization - so4" /> </figure>
                                <h3>Performance Analytics & Reporting</h3>
                                <p>Track metrics and provide actionable insights to maximize ROI.</p>
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
                              <img src="/assets/images/img122.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start">
                          <h2> Our SMO <span>Process</span> </h2>
                       </div>
                       <div className="expertise-wrap strategy-wrap">
                           <ul>
                              <li>
                                <h4>1. Social Media Audit & Strategy</h4>
                                <p>Comprehensive audit of your accounts, creating a custom SMO strategy aligned with your business goals.</p>
                              </li>
                              <li>
                                <h4>2. Social Profiles Optimization</h4>
                                <p>Optimize images, bios, descriptions, and links to maximize engagement and visibility.</p>
                              </li>
                              <li>
                                <h4>3. Research Topics & Hashtags</h4>
                                <p>Identify trending topics, industry hashtags, and audience interests for effective content strategy.</p>
                              </li>
                              <li>
                                <h4>4. Timeline Post Creation & Optimization</h4>
                                <p>Create high-quality posts with hashtags, tags, and strong calls-to-action for maximum engagement.</p>
                              </li>
                              <li>
                                <h4>5. Schedule & Post Content at Optimal Times</h4>
                                <p>Analyze audience behavior to post when followers are most active, increasing reach and interactions.</p>
                              </li>
                              <li>
                                <h4>6. Performance Analysis & Optimization</h4>
                                <p>Continuous monitoring and strategy refinement to improve social media performance and ROI.</p>
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
                 <h2> Social Media Platforms   <span>We Specialize In</span> </h2>
              </div>
             <div className="row">
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="0">
                   <figure> <img src="/assets/images/f1.png" alt="ChittorTech Social Media Optimization - f1" /> </figure>
                   <h4>Facebook</h4>
                   <p>Broad reach, powerful ads, ideal for B2C and eCommerce.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="100">
                   <figure> <img src="/assets/images/f2.png" alt="ChittorTech Social Media Optimization - f2" /> </figure>
                   <h4>Instagram</h4>
                   <p>Visual storytelling and influencer campaigns for younger audiences.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="200">
                   <figure> <img src="/assets/images/f3.png" alt="ChittorTech Social Media Optimization - f3" /> </figure>
                   <h4>Twitter </h4>
                   <p>Real-time updates and trend engagement for media and tech.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="300">
                   <figure> <img src="/assets/images/f4.png" alt="ChittorTech Social Media Optimization - f4" /> </figure>
                   <h4>LinkedIn</h4>
                   <p> B2B lead generation and professional networking.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="400">
                   <figure> <img src="/assets/images/f5.png" alt="ChittorTech Social Media Optimization - f5" /> </figure>
                   <h4>YouTube</h4>
                   <p>Long-form videos and tutorials for brand awareness and engagement.</p>
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
                          <h2> Benefits of Our  <span>SMO Services</span> </h2>
                       </div>
                       <div className="expertise-wrap benefits-text">
                           <ul>
                              <li><strong> Build a Strong Brand –</strong> Enhance credibility with engaging content and reputation management.</li>
                              <li><strong> Increase Engagement –</strong> Create meaningful interactions that drive loyalty.</li>
                              <li><strong>Boost Online Visibility – </strong> Target the right audience with strategic campaigns.</li>
                              <li><strong> Attract Relevant Customers –</strong> Connect with potential buyers interested in your products/services.</li>
                              <li><strong>Generate Quality Leads –</strong> Convert social media engagement into actionable business leads.</li>
                           </ul>
                       </div>
                  </div>
                  <div className="col-md-6">
                       <div className="expertise-img text-end">
                           <figure>
                              <img src="/assets/images/img123.jpg" alt="Local & National SEO Expertise" />
                           </figure>
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
                        <button  onClick={() => { window.location.href = "/contact-us"; }}  className="cta-button">Get Started</button>
                     </div>
                 </div>
             </div>
         </div>
      </section>


      {/*  Why Choose Our SEO Services? */}
      <section className="why-choose-sec tools-use-sec"> 
          <div className="container">
           <div className="heading-wrap text-center">
              <h2> Why Choose   <span>ChittorTech? </span> </h2>
           </div>
            <div className="row">
                  <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="0">
                      <i className="fas fa-chart-line fa-3x mb-3" style={{ "color": "#28a745" }}></i>
                      <h4>Bespoke Strategies –</h4>
                      <p>Custom SMO plans for your business and audience.</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="100">
                      <i className="fas fa-magnifying-glass fa-3x mb-3" style={{ "color": "#007bff" }}></i>
                      <h4>Expert Team –</h4>
                      <p>Meta Ads Certified professionals with over 14 years of experience.</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="200">
                      <i className="fas fa-tachometer-alt fa-3x mb-3" style={{ "color": "#dc3545" }}></i>
                      <h4>Engaging Content – </h4>
                      <p>Creative posts that resonate and drive interaction.</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="200">
                      <i className="fas fa-tachometer-alt fa-3x mb-3" style={{ "color": "#dc3545" }}></i>
                      <h4>Data-Driven Approach –  </h4>
                      <p>Continuous monitoring and optimization for maximum results.</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="200">
                      <i className="fas fa-tachometer-alt fa-3x mb-3" style={{ "color": "#dc3545" }}></i>
                      <h4>Comprehensive Support – </h4>
                      <p> Full SMO services including content, lead generation, and reputation management.</p>
                    </div>
                  </div>
               </div>
               <p className="single-text">Partner with <strong> ChittorTech,</strong> the <strong> best SMO company in India,</strong> for <strong>best SMO services in India</strong> that enhance your brand presence, engagement, and ROI.</p>
          </div>
      </section>
      {/*  Why Choose Our SEO Services? */}

      
      {/*  faq template section */}
      <section className="faq-template">
          <div className="container">
             <div className="heading-wrap text-center">
                 <h2> Frequently Asked Questions (FAQs)  <span> – Best SMO Company in India</span> </h2>
              </div>
              <div className="row">
                  <div className="col-md-12">
                      <div className="faq-section">
                        <div className="accordion" id="faqAccordion">
                            {/* FAQ 1 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What is Social Media Optimization (SMO)?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Social Media Optimization (SMO) is the process of enhancing your social media profiles, content, and campaigns to increase brand visibility, engagement, and lead generation. It includes creating compelling content, optimizing posts, and running targeted campaigns across platforms like Facebook, Instagram, LinkedIn, Twitter, and YouTube.
                                    </div>
                                </div>
                            </div>
                            {/* FAQ 2 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Why is SMO important for my business?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        SMO helps you connect with your audience, build trust, and increase conversions. It boosts online visibility, enhances engagement, attracts relevant customers, and generates leads—all while creating a strong brand presence.
                                    </div>
                                </div>
                            </div>
                            {/* FAQ 3 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        How can ChittorTech help my business with SMO?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                       As the best SMO company in India, we provide customized social media strategies tailored to your business goals. From profile optimization to content creation, targeted advertising, and performance analytics, we manage your entire social media presence to drive measurable results.
                                    </div>
                                </div>
                            </div>
                            {/* FAQ 4 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Which social media platforms should my business focus on?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        The platforms depend on your industry, target audience, and business goals. We specialize in Facebook, Instagram, LinkedIn, Twitter, and YouTube, helping you choose the most effective channels for maximum reach and engagement.
                                    </div>
                                </div>
                            </div>
                            {/* FAQ 5 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        How do you measure SMO success?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        We track KPIs like engagement rates, follower growth, website traffic from social media, lead generation, and conversions. Regular reports and analytics help you see tangible results from our SMO campaigns.
                                    </div>
                                </div>
                            </div>
                            {/* FAQ 6 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        How often should I post on social media?
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Posting frequency depends on your audience and platform. We analyze user behavior and engagement trends to schedule posts at optimal times, ensuring maximum visibility and interaction.
                                    </div>
                                </div>
                            </div>
                            {/* FAQ 7 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                         Can SMO generate leads and sales?
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Yes. Our SMO strategies are designed to attract relevant audiences, engage them effectively, and convert interactions into leads or sales. Paid campaigns, content marketing, and profile optimization all contribute to lead generation.
                                    </div>
                                </div>
                            </div>
                            {/* FAQ 8 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEight">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                         Do you provide content creation for social media?
                                    </button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Absolutely. We create high-quality graphics, videos, captions, and interactive content that resonate with your audience and drive engagement. Our content is tailored to your brand’s voice and target demographic.
                                    </div>
                                </div>
                            </div>
                            {/* FAQ 9 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingNine">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                        Is SMO different from Social Media Marketing (SMM)?
                                    </button>
                                </h2>
                                <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Yes. SMO focuses on optimizing social media profiles and organic engagement, while SMM primarily involves paid advertising campaigns. We offer both SMO and SMM services to ensure comprehensive social media growth.
                                    </div>
                                </div>
                            </div>
                            {/* FAQ 10 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                         How long does it take to see results from SMO?
                                    </button>
                                </h2>
                                <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Results vary based on industry, competition, and strategy. Typically, you can see noticeable improvements in engagement, reach, and leads within 2–3 months, with long-term benefits as the strategy matures.
                                    </div>
                                </div>
                            </div>
                            {/* FAQ 11 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEleven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                        Why choose ChittorTech as the best SMO company in India?
                                    </button>
                                </h2>
                                <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        We combine 14+ years of experience, a certified expert team, data-driven strategies, and proven results. Our approach ensures measurable ROI, increased brand visibility, and a strong online presence.
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
