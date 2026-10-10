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
                <i className={`fa-solid fa-laptop-code`}></i> Web Design
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Modern Responsive Website Design
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Beautiful, fast, and SEO-ready websites that convert visitors into customers.
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
                <i className={`fa-solid fa-laptop-code`}></i>
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
                          <h2>Top Responsive Web Design Company in India  <span>– ChittorTech</span> </h2>
                        <p>
  In today’s fast-paced digital world, having a website that looks good is no longer enough. Your website must be responsive, user-friendly, and adaptable across all devices. At ChittorTech, we are recognized as the 
  <a href="/modern-responsive-website-design" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
    best responsive web design company in India
  </a>, creating websites that engage users, boost traffic, and increase conversions.
</p>

                          <p>Our expert designers and developers craft adaptive websites that automatically adjust to different screen sizes and devices, ensuring an exceptional browsing experience for all users.</p>
                       </div>
                    </div>
                   </div>
                   <div className="col-md-6">
                        <div className="seo-services-img">
                           <figure>
                               <img src="/assets/images/img135.jpg" alt="Best SEO Services" />
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
                              <img src="/assets/images/img136.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start mobile-a">
                          <h3> Why Responsive Web   <span>Design Matters</span> </h3>
                          <p>With the rise of mobile devices, people increasingly access websites on smartphones and tablets rather than desktops. A website that is not mobile-friendly risks losing a significant portion of potential customers.</p>
                       </div>
                       <div className="expertise-wrap">
                        <h5>Responsive web design ensures:</h5>
                           <ul>
                              <li><strong>Consistent User Experience:</strong> Your website looks and functions perfectly on all devices.</li>
                              <li><strong>Better Search Engine Rankings:</strong> Google prioritizes mobile-friendly websites in search results.</li>
                              <li><strong>Increased Engagement & Conversions:</strong> A seamless experience keeps users longer on your site.</li>
                              <li><strong>Voice Search Optimization:</strong> As voice searches rise, responsive websites improve local SEO performance.</li>
                           </ul>
                           <p>By partnering with the <b>top web designing company in India,</b> you ensure your business stays ahead in the digital landscape.</p>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/*  Why Choose Our SEO Services? */}

      <section className="bridal-store-sec pt-60 pb-60">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                   <div className="bridal-store">
                      <h2>What Is Responsive Website Design?</h2>

                      <p>Responsive website design is a method where web pages automatically adjust to fit any screen size, whether it’s a desktop, tablet, or smartphone. A responsive design guarantees a smooth and consistent experience for all visitors.</p>

                      <p>Without responsive design, websites may appear distorted or unreadable on smaller screens, driving users away. At ChittorTech, we revamp existing websites or create new ones that are fully mobile-optimized and future-ready.</p>

                   </div>
                 </div>
             </div>
         </div>
      </section>

      {/*   Our Complete SEO Service Suite */}
      <section className="complete-seo-service"> 
         <div className="container my-5">
            <div className="heading-wrap text-center">
                 <h2> Why Choose Our Responsive  <span>Web Design Services? </span> </h2>
                 <p>Our responsive web design company in India customizes services to fit your brand’s personality, business goals, and target audience. Our collaborative approach ensures your vision becomes reality while your website becomes a powerful tool for attracting, engaging, and retaining customers.</p>
              </div>
             <div className="row">
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="0">
                   <figure> <img src="/assets/images/ux1.png" alt="ChittorTech Modern Responsive Website Design - ux1" /> </figure>
                   <h4>Improved User Experience (UX)</h4>
                   <p>A responsive website ensures fluid navigation, readability, and functionality across all devices. Happy users are more likely to stay longer and convert into customers.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="100">
                   <figure> <img src="/assets/images/ux2.png" alt="ChittorTech Modern Responsive Website Design - ux2" /> </figure>
                   <h4>Enhanced Rankings</h4>
                   <p>Mobile-friendly websites are favored by search engines, improving your chances of ranking higher on Google, Bing, and Yahoo.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="200">
                   <figure> <img src="/assets/images/ux3.png" alt="ChittorTech Modern Responsive Website Design - ux3" /> </figure>
                   <h4>Increased Traffic</h4>
                   <p>A website that works on all devices attracts more visitors, reducing bounce rates and increasing engagement.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="300">
                   <figure> <img src="/assets/images/ux4.png" alt="ChittorTech Modern Responsive Website Design - ux4" /> </figure>
                   <h4>Cost-Effective</h4>
                   <p>A single responsive website eliminates the need for multiple versions, saving time and development costs.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="400">
                   <figure> <img src="/assets/images/ux5.png" alt="ChittorTech Modern Responsive Website Design - ux5" /> </figure>
                   <h4>Future-Proof Design</h4>
                   <p>Responsive design ensures your website remains compatible with new devices and screen sizes entering the market</p>
                 </div>
               </div>
             </div>
           </div>
      </section>
      {/*   Our Complete SEO Service Suite */}

      <section className="overview-section pb-60">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="heading-wrap">
                         <h2>Our Comprehensive Web  <span>Design Services</span> </h2>
                         <p>
                           As a leading web designing company in India, we offer a full suite of services:
                         </p>
                     </div>
                     <div className="features-list">
                        <ul>
                            <li><strong>Mobile Responsive Website Design</strong> <br /> We design websites that look and perform flawlessly on mobile devices, catering to the growing number of users browsing via smartphones.</li>
                            <li><strong>Logo Designing</strong><br /> Our creative team designs unique logos that reflect your brand identity and make a lasting impression.</li>
                            <li><strong>Website Redesign</strong><br />Revamp your existing website with modern designs, improved UX, and optimized performance.</li>
                            <li><strong>HTML Page Designing</strong> <br />We create professional, functional web pages using HTML with all the necessary features to support your business.</li>
                            <li><strong>SAAS Model Designing</strong><br />We help plan and develop scalable SAAS platforms, complete with unit tests and backend optimization.</li>
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
                          <h2> Our Approach – Designing Websites    <span>That Work for You</span> </h2>
                          <p>At ChittorTech, we follow a structured process to deliver high-performing websites:</p>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li><strong>Planning & Strategy:</strong> Understand your business goals and target audience.</li>
                              <li><strong>Custom Design:</strong> Craft responsive layouts and themes aligned with your brand.</li>
                              <li><strong>Development:</strong> Integrate a seamless backend with an attractive frontend.</li>
                              <li><strong>Testing & Optimization:</strong> Ensure your website functions flawlessly on all devices.</li>
                              <li><strong>Launch & Support:</strong> Deploy your website with ongoing maintenance and optimization.</li>
                           </ul>
                           <p>Our designs are <b>scalable, future-ready, and optimized for search engines,</b> ensuring your business stays ahead in the digital era.</p>
                       </div>
                  </div>
                  <div className="col-md-6">
                       <div className="expertise-img text-end">
                           <figure>
                              <img src="/assets/images/img137.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/*  Why Choose Our SEO Services? */}

    
{/*       <section className="chittortech-sec pb-60">
         <div className="container">
            <div className="row">
                <div className="col-md-12">
                   <div className="heading-wrap">
                      <h2>Featured  <span>Projects</span> </h2>
                      <p>We have successfully developed customized web solutions for businesses across industries:</p>
                   </div>
                   <div className="choose-section">
                   <div className="row g-3">
                     <div className="col-md-4">
                       <div className="choose-box">
                         <h5>Elephat:</h5>
                         <p>Real Estate, Sports, and Food/Beverages conglomerate – seamless multi-device experience</p>
                       </div>
                     </div>
                     <div className="col-md-4">
                       <div className="choose-box">
                         <h5>Dental Works Clinic:</h5>
                         <p>Healthcare website optimized for mobile and desktop users.</p>
                       </div>
                     </div>
                   </div>
                 </div>
                </div>
            </div>
         </div>
      </section> */}

      {/*  Why Choose Our SEO Services? */}
      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row align-items-center">
                 <div className="col-md-6">
                       <div className="expertise-img text-start">
                           <figure>
                              <img src="/assets/images/img138.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start">
                          <h2> Why Choose ChittorTech as Your Responsive Web   <span>Design Company in India?</span> </h2>
                          <p>At ChittorTech, we follow a structured process to deliver high-performing websites:</p>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li><strong>Experienced Team:</strong> Skilled designers and developers delivering high-quality responsive websites.</li>
                              <li><strong>Custom Solutions:</strong> Tailored strategies to match your brand and target audience.</li>
                              <li><strong>Future-Ready Designs:</strong> Scalable websites compatible with new devices and technologies.</li>
                              <li><strong>SEO-Friendly:</strong> Optimized for search engines to boost visibility and traffic.</li>
                              <li><strong>High Conversions:</strong> Designed to convert visitors into customers effectively.</li>
                           </ul>
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
                        <h2>Get Started with the Best Responsive Web Design Company in India</h2>
                        <p>A responsive website is no longer optional – it’s essential for business growth in the digital age. Partner with ChittorTech, the best responsive web design company in India, and turn your website into a powerful tool for attracting, engaging, and retaining customers.</p>
                       
						<button className="cta-button" onClick={() => { window.location.href = "/contact-us"; }}>
 Get Started
</button>

                     </div>
                 </div>
             </div>
         </div>
      </section>
      {/*  faq template section */}
    <section className="faq-template">
      <div className="container">
        <div className="heading-wrap text-center">
          <h2> FAQs – <span>Responsive Web Design Services by ChittorTech</span> </h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="faq-section">
              <div className="accordion" id="faqAccordion">
                
                {/* FAQ 1 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What makes ChittorTech the best responsive web design company in India?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      ChittorTech is recognized as the best responsive web design company in India because we combine creativity, technical expertise, and industry knowledge. Our team ensures every website is mobile-friendly, visually appealing, and optimized for SEO, offering an engaging experience across all devices.
                    </div>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Why is responsive web design crucial for my business website?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Responsive web design ensures your website adapts to all screen sizes, from desktops to smartphones. With more users accessing websites via mobile devices, a responsive design prevents poor user experience and lost traffic, ultimately boosting your search engine rankings and conversions.
                    </div>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      How does a responsive website improve user experience and engagement?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      A responsive website provides seamless navigation, faster page load times, and optimized layouts for any device. This leads to higher engagement, longer visit durations, and increased chances of turning visitors into loyal customers.
                    </div>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Can a responsive website help my business rank higher on Google?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes! Google prioritizes mobile-friendly and responsive websites in search results. By partnering with a top responsive web design company in India like ChittorTech, your site gains SEO advantages that improve visibility and rankings on Google, Bing, and other search engines.
                    </div>
                  </div>
                </div>

                {/* FAQ 5 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      How do you ensure my website works on all devices and screen sizes?
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We use advanced responsive web design techniques, including flexible grids, scalable images, and CSS media queries. Our team tests your website across multiple devices, screen resolutions, and browsers to ensure flawless functionality.
                    </div>
                  </div>
                </div>

                {/* FAQ 6 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      What are the key benefits of hiring a top web designing company in India?
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      By hiring a top web designing company, you get professional designs, faster page speed, mobile optimization, SEO-friendly coding, and a website that represents your brand identity effectively. This gives you a competitive advantage online.
                    </div>
                  </div>
                </div>

                {/* FAQ 7 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                      Do you redesign existing websites to make them mobile-friendly?
                    </button>
                  </h2>
                  <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes! Our team specializes in revamping outdated websites, ensuring they are fully responsive, modern, and optimized for mobile devices without compromising SEO or design integrity.
                    </div>
                  </div>
                </div>

                {/* FAQ 8 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEight">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                      How does responsive web design impact website conversion rates?
                    </button>
                  </h2>
                  <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      A responsive website enhances user experience, reduces bounce rates, and makes navigation easy. These improvements lead to higher engagement, increased trust, and ultimately, better conversion rates for your business.
                    </div>
                  </div>
                </div>

                {/* FAQ 9 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingNine">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                      What is the difference between a mobile-responsive and a mobile-optimized website?
                    </button>
                  </h2>
                  <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      A mobile-responsive website automatically adjusts to any screen size, while a mobile-optimized website is specifically designed for mobile devices. ChittorTech provides fully responsive designs that work seamlessly on all devices, combining the benefits of both approaches.
                    </div>
                  </div>
                </div>

                {/* FAQ 10 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                      How long does it take for your team to design and launch a responsive website?
                    </button>
                  </h2>
                  <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      The timeline depends on the project’s complexity. Typically, a standard responsive website is designed and launched within 4–8 weeks. We ensure every stage, from design to testing, meets high-quality standards.
                    </div>
                  </div>
                </div>

                {/* FAQ 11 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEleven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                      Can you create a responsive website for my industry or niche?
                    </button>
                  </h2>
                  <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Absolutely! We customize our responsive web design services to align with your industry, brand identity, and target audience. Whether it’s eCommerce, healthcare, education, or corporate websites, we deliver industry-specific solutions.
                    </div>
                  </div>
                </div>

                {/* FAQ 12 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwelve">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                      How do you test a website to ensure it works seamlessly across devices?
                    </button>
                  </h2>
                  <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We conduct extensive testing on multiple devices, browsers, and screen resolutions. This includes performance tests, functionality checks, and user experience assessments to guarantee a flawless website experience.
                    </div>
                  </div>
                </div>

                {/* FAQ 13 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThirteen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                      What additional services do you offer along with responsive web design?
                    </button>
                  </h2>
                  <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Along with responsive web design, we offer mobile app development, UI/UX design, logo designing, website redesign, HTML page designing, SaaS model planning, and SEO optimization to ensure your website attracts and converts traffic effectively.
                    </div>
                  </div>
                </div>

                {/* FAQ 14 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFourteen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                      How do responsive web design services help with SEO and local search rankings?
                    </button>
                  </h2>
                  <div id="collapseFourteen" className="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Responsive websites improve mobile usability, page speed, and user experience—all key SEO ranking factors. A mobile-friendly site also enhances local SEO performance, helping your business appear in Google Maps and local search results.
                    </div>
                  </div>
                </div>

                {/* FAQ 15 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFifteen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                      Can your team integrate modern features like voice search and AI-friendly layouts into my website?
                    </button>
                  </h2>
                  <div id="collapseFifteen" className="accordion-collapse collapse" aria-labelledby="headingFifteen" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes! As a leading responsive web design company in India, we design websites compatible with modern technologies like voice search, AI-based chatbots, and advanced SEO practices to future-proof your online presence.
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
