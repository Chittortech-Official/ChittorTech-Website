"use client";
import React from "react";
import "../../../public/assets/css/premium-products.css";


export default function Page() {
  const videoRef = React.useRef(null);
  const [playbackSpeed, setPlaybackSpeed] = React.useState(1);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const changeSpeed = (rate) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
      setPlaybackSpeed(rate);
    }
  };

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
            <div className="col-lg-7">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', padding: '6px 16px', borderRadius: '50px', marginBottom: '20px' }}>
                <i className={`fa-solid fa-code`}></i> Web Dev
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Website Developer & Custom Web Development Services
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Top-rated website developer near you for fast, responsive web design and full-stack custom web development. High-converting websites engineered for SEO, speed, and business growth.
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

            {/* Smartphone Mockup Frame */}
            <div className="col-lg-5 col-12 d-flex justify-content-center mt-4 mt-lg-0">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "270px",
                  borderRadius: "36px",
                  padding: "10px 8px 12px",
                  background: "linear-gradient(135deg, #1e1b4b, #0f172a, #020617)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 2px rgba(59, 130, 246, 0.5), 0 0 35px rgba(37, 99, 235, 0.25)",
                  border: "4px solid #334155",
                }}
              >
                {/* Phone Notch & Speaker */}
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                  <div style={{ width: "36px", height: "4px", backgroundColor: "#64748b", borderRadius: "4px" }} />
                  <div style={{ width: "5px", height: "5px", backgroundColor: "#0f172a", borderRadius: "50%", border: "1px solid #64748b" }} />
                </div>

                {/* Video Container (9:16) */}
                <div
                  style={{
                    position: "relative",
                    borderRadius: "24px",
                    overflow: "hidden",
                    aspectRatio: "9 / 16",
                    backgroundColor: "#020617",
                  }}
                >
                  <video
                    ref={videoRef}
                    src="https://github.com/user-attachments/assets/9d6d0723-cc44-4d1b-a611-b4efcf6fe354"
                    poster="/images/web-dev-video-poster.jpg"
                    controls
                    controlsList="nofullscreen nodownload"
                    disablePictureInPicture
                    playsInline
                    preload="metadata"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  {!isPlaying && (
                    <div
                      onClick={togglePlay}
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(0, 0, 0, 0.2)",
                        cursor: "pointer",
                        zIndex: 3,
                      }}
                    >
                      <div
                        style={{
                          width: "64px",
                          height: "64px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 10px 30px rgba(6, 182, 212, 0.65), 0 0 0 4px rgba(255, 255, 255, 0.35)",
                        }}
                      >
                        <i className="fa-solid fa-play" style={{ color: "#fff", fontSize: "1.5rem", marginLeft: "4px" }}></i>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Playback Speed Switcher */}
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "5px 8px",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <span style={{ fontSize: "0.75rem", color: "#94a3b8", fontWeight: 600 }}>Speed:</span>
                  <div style={{ display: "flex", gap: "4px" }}>
                    {[1, 1.25, 1.5, 2].map((speed) => (
                      <button
                        key={speed}
                        onClick={() => changeSpeed(speed)}
                        style={{
                          padding: "2px 6px",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          borderRadius: "6px",
                          border: "none",
                          cursor: "pointer",
                          background: playbackSpeed === speed ? "#06b6d4" : "transparent",
                          color: playbackSpeed === speed ? "#ffffff" : "#94a3b8",
                          transition: "all 0.2s",
                        }}
                      >
                        {speed}x
                      </button>
                    ))}
                  </div>
                </div>
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

                          <h2>Best Web Development Company in India  <span>ChittorTech</span> </h2>
                        <p>
                          With over 15 years of experience, ChittorTech is recognized as the 
                          <a href="/web-development-services" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
                            best Web Development Company in India
                          </a>, delivering innovative, scalable, and high-performing digital solutions. We have successfully executed hundreds of projects across diverse industries for clients in India, the USA, UK, Australia, Canada, and other countries. Our strong portfolio, high client retention rate, and proven track record demonstrate our commitment to excellence and client satisfaction.
                        </p>


                          <p>As the best Web Development Company in India, we use the latest technologies including React, Angular, Vue.js, Node.js, Progressive Web Apps (PWAs), and headless CMS to develop websites that are fast, secure, responsive, and scalable. Our expertise ensures that every website we build enhances user engagement, drives conversions, and strengthens your digital presence.</p>

                          <p>Whether you require a corporate website, eCommerce store, blog, or custom web application, ChittorTech – the best Web Development Company in India – provides tailored digital solutions that align perfectly with your business goals and objectives.</p>

                       </div>
                    </div>
                   </div>
                   <div className="col-md-6">
                        <div className="seo-services-img">
                           <figure>
                               <img src="/assets/images/img151.jpg" alt="Best SEO Services" />
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
                  <div className="col-md-12">
                        <div className="heading-wrap text-center">
                          <h2> Our Services – Best Web Development   <span>Company in India</span> </h2>
                          <p>As a full-stack Web Development Company in India, ChittorTech offers comprehensive web development and web design services designed to meet the unique needs of your business.</p>
                       </div>
                       <div className="row">
                            <div className="col-md-6">
                                 <div className="expertise-wrap ser-wer">
                                    <h5>Front-End Web Development</h5>
                                    <p>We create highly interactive and visually appealing websites that keep users engaged:</p>
                                     <ul>
                                        <li><strong>ReactJS –</strong> Modern and dynamic front-end applications</li>
                                        <li><strong>VueJS –</strong> Lightweight and responsive user interfaces</li>
                                        <li><strong>Angular –</strong> Enterprise-level, scalable front-end solutions</li>
                                     </ul>
                                 </div>
                            </div>
                            <div className="col-md-6">
                                 <div className="expertise-wrap ser-wer">
                                     <h5>Back-End Web Development</h5>
                                     <p>Our robust back-end solutions ensure smooth performance, security, and reliability:</p>
                                     <ul>
                                        <li><strong>Node.js –</strong> Fast and scalable server-side solutions</li>
                                        <li><strong>PHP –</strong> Reliable and versatile web development</li>
                                        <li><strong>Python –</strong> Advanced programming for complex applications</li>
                                        <li><strong>Laravel –</strong> Secure and modern PHP framework</li>
                                     </ul>
                                 </div>
                            </div>
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
                 <h2> Explore Our Additional Web Development Services – <span>ChittorTech</span> </h2>
               <p>
  At ChittorTech, the 
  <a href="/web-development-services" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
    best Web Development Company in India
  </a>, we provide a wide range of specialized web development solutions designed to elevate your online presence, boost conversions, and drive business growth. Our services are crafted to meet the diverse needs of businesses across industries, ensuring customized and scalable solutions.
</p>

              </div>
             <div className="row">
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="0">
                   <figure> <img src="/assets/images/w1.png" alt="ChittorTech Web Development Services - w1" /> </figure>
                   <h4>WordPress Development</h4>
                   <p>WordPress powers a large portion of websites worldwide. As the best web design company in India, we create custom-designed WordPress websites with unique features, modern designs, and optimized performance. Whether you need a corporate website, blog, or eCommerce platform, our web development services ensure your website is responsive, SEO-friendly, and conversion-focused.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="100">
                   <figure> <img src="/assets/images/w2.png" alt="ChittorTech Web Development Services - w2" /> </figure>
                   <h4>Magento & Adobe Commerce Development</h4>
                    <p>Need a fully customized CMS or eCommerce website? As a top web development company in India, ChittorTech specializes in Magento and Adobe Commerce platforms. We build websites tailored to your business needs, integrating product management, payment gateways, shipping, and advanced features for a seamless online shopping experience.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="200">
                   <figure> <img src="/assets/images/w3.png" alt="ChittorTech Web Development Services - w3" /> </figure>
                   <h4>Custom CMS Development</h4>
                   <p>Managing website content efficiently is essential. Our CMS development services allow you to control, edit, and publish content with ease. We develop CMS solutions on WordPress, Joomla, Drupal, Wix, BigCommerce, Laravel, and CodeIgniter, ensuring scalability, security, and user-friendly interfaces.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="300">
                   <figure> <img src="/assets/images/w4.png" alt="ChittorTech Web Development Services - w4" /> </figure>
                   <h4>NET Development</h4>
                   <p>As a leading web development company in India, we deliver robust .NET solutions for both desktop and mobile applications. Our team handles complex and large-scale projects, ensuring timely delivery, high performance, and scalability for enterprise-level solutions.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="400">
                   <figure> <img src="/assets/images/w5.png" alt="ChittorTech Web Development Services - w5" /> </figure>
                   <h4>Custom PHP Web Development</h4>
                   <p>For businesses that require unique web applications, our custom PHP development services provide full-stack solutions tailored to your needs. We create visually stunning, functional websites with PHP, Laravel, and CodeIgniter, ensuring fast performance and modern design aesthetics.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/w6.png" alt="ChittorTech Web Development Services - w6" /> </figure>
                   <h4>Mobile App Development</h4>
                   <p>Expand your digital presence with custom mobile applications. We develop native, hybrid, and web apps for Android and iOS platforms, ensuring mobile-friendly designs, smooth performance, and user-centric functionality.</p>
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
                          <h2> Why ChittorTech is the Best Choice for <span> Web Development Services</span> </h2>
                         <p>
  With over 15 years of experience, ChittorTech is recognized as the 
  <a href="/web-development-services" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
    best Web Development Company in India
  </a>. Our proven development process ensures every project is delivered on time, with exceptional quality and performance.
</p>

                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li><strong>Two Decades of Expertise:</strong> Successfully served businesses in 32+ countries across diverse industries.</li>
                              <li><strong>Professional Development Team:</strong> Skilled developers using industry-standard tools and technologies.</li>
                              <li><strong>Agile Methodology:</strong> Efficient development cycles for faster project delivery.</li>
                              <li><strong>Quality Assurance:</strong> Every website is thoroughly tested for functionality, speed, and security.</li>
                              <li><strong>Creative & User-Centric Design:</strong> Websites that reflect your brand and provide an engaging user experience.</li>
                              <li><strong>Transparent & Value-Driven:</strong> Clear communication, honest reporting, and flexible packages.</li>
                              <li><strong>SEO-Friendly Websites:</strong> Optimized to improve online visibility and drive targeted traffic.</li>
                           </ul>
                       </div>
                  </div>
                  <div className="col-md-6">
                       <div className="expertise-img text-end">
                           <figure>
                              <img src="/assets/images/img152.jpg" alt="Local & National SEO Expertise" />
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
                              <img src="/assets/images/img153.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start">
                          <h2>Full-Stack Web Development Process –  <span> ChittorTech</span> </h2>
                          <p>With over 15 years of experience, ChittorTech is recognized as the best Web Development Company in India. Our proven development process ensures every project is delivered on time, with exceptional quality and performance.</p>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li><strong>Client Requirements:</strong> Understanding your business goals and project needs.</li>
                              <li><strong>Customized Planning:</strong> Tailored roadmap to meet your objectives.</li>
                              <li><strong>Wireframe & Design Approval:</strong> Visualizing website structure and layout.</li>
                              <li><strong>Front-End & Back-End Development:</strong> Interactive, secure, and scalable web solutions.</li>
                              <li><strong>Testing & Quality Assurance:</strong> Automated and manual testing for flawless performance.</li>
                              <li><strong>Launch:</strong> Smooth deployment and website go-live.</li>
                              <li><strong>Ongoing Support & Maintenance:</strong> Regular updates, monitoring, and optimization.</li>
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
                     <h2> Industries We Serve – Web Development Services  <span>Across the Globe </span> </h2>
                  </div>
                  <div className="why-choose-grid textile-manufacturers-wrap">
                     <div className="grid-item">
                        <figure> <img src="/assets/images/ha1.png" alt="ChittorTech Web Development Services - ha1" /> </figure>
                        <h3>Healthcare</h3>
                        <p>Patient portals, booking systems, and responsive informational websites.</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/ha2.png" alt="ChittorTech Web Development Services - ha2" /> </figure>
                        <h3>Education</h3>
                        <p> eLearning platforms, university portals, and course management systems.</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/ha3.png" alt="ChittorTech Web Development Services - ha3" /> </figure>
                        <h3>Retail & E-Commerce</h3>
                        <p>Optimized online stores for higher conversions.</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/ha4.png" alt="ChittorTech Web Development Services - ha4" /> </figure>
                        <h3>Finance & Banking</h3>
                        <p>Secure websites for fintech, banks, and insurance firms.</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/ha5.png" alt="ChittorTech Web Development Services - ha5" /> </figure>
                        <h3>Travel & Tourism</h3>
                        <p>  Booking portals and interactive travel websites.</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/ha6.png" alt="ChittorTech Web Development Services - ha6" /> </figure>
                        <h3>Food & Restaurants</h3>
                        <p> Online ordering, delivery management systems, and responsive menus. </p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/ha7.png" alt="ChittorTech Web Development Services - ha7" /> </figure>
                        <h3>Non-Profit Organizations</h3>
                        <p>Community portals, donation systems, and informational websites.</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/ha8.png" alt="ChittorTech Web Development Services - ha8" /> </figure>
                        <h3>Telecom/Tech, Utilities, B2B, Chemical Industries </h3>
                        <p> Tailored web solutions for operational efficiency and online growth.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="case-studies-section pb-60">
         <div className="container">
             <div className="row">
                <div className="col-md-12">
                       <div className="case-studies-container">
                           {/* Case Study 1 */}
                           <div className="case-study-card">
                               <h3>Our Technology Stack – Best Web Development Company in India</h3>
                               <p><strong>Front-End:</strong> HTML, CSS, JavaScript, ReactJS, Angular, VueJS</p>
                               <p><strong>Back-End:</strong> PHP, Node.js, Python, Laravel, CodeIgniter, Java, .NET</p>
                               <p><strong>Databases:</strong>MySQL, PostgreSQL, MongoDB</p>
                               <p><strong>CMS Platforms:</strong>WordPress, Joomla, Drupal, Wix, Magento, BigCommerce</p>
                               <p><strong>Code Features:</strong> Robust, reusable, tested, and optimized for cross-device performance and SEO.</p>
                           </div>

                           {/* Case Study 2 */}
                           <div className="case-study-card">
                               <h3>Benefits of Hiring ChittorTech – Best Web Development Company in India</h3>
                               <ul className="benefit-list">
                                  <li>Increased online visibility and traffic</li>
                                  <li>Mobile-friendly and responsive websites</li>
                                  <li>SEO-friendly and user-centric design</li>
                                  <li>Enhanced brand credibility and professional image</li>
                                  <li>Targeted lead generation and local reputation management</li>
                                  <li>Timely delivery with agile methodology</li>
                                  <li>Ongoing support, updates, and website maintenance</li>

                               </ul>
                           </div>
                       </div>
                </div>
             </div>
         </div>
     </section>

     <section className="industry new-cards">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="heading-wrap">
                        <h2>Why ChittorTech Is the Best  <span>Choice for Web Development Services</span> </h2>
                        <p>With over 15 years of experience, ChittorTech is recognized as the best Web Development Company in India, delivering top-notch web development services to businesses across multiple industries. Our proven development methodology ensures that every project meets your exact business requirements and is delivered on time. Backed by extensive expertise in web development, web design, and digital marketing, we provide reliable, high-quality solutions tailored to your growth goals.</p>
                     </div>
                     <div className="desktop-industries">
                        <div className="row justify-content-center">
                           <div className="col-lg-4 col-md-6 col-4">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <img src="/assets/images/dev1.png" alt="Billing" className="img-fluid mb-3" />
                                          <h4>Two Decades of Experience</h4>
                                          <p>As a leading web development company in India, ChittorTech has successfully developed web solutions for businesses in 32+ countries. We have coded across diverse domains including IT, healthcare, law firms, tourism, eCommerce, and more. Our team understands the nuances of building, improving, and revamping websites for businesses of all sizes, ensuring optimal performance and design.</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-md-6 col-4">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <img src="/assets/images/dev2.png" alt="Inbuilt Accounting Modules" className="img-fluid mb-3" />
                                          <h4>Wide Variety of Niches & Professional Team</h4>
                                          <p>Our dedicated team of developers builds websites every day. As a top web design company in India, we deliver high-quality web solutions quickly and efficiently, whether for eCommerce platforms, corporate websites, or local business portals. We use industry-standard tools, modern frameworks, and cutting-edge programming languages to ensure every project is up to date with current technology trends.</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-md-6 col-4">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <img src="/assets/images/dev3.png" alt="Organize Clothing Stock" className="img-fluid mb-3" />
                                          <h4> Agile Methodology for Fast & Reliable Delivery</h4>
                                          <p>At ChittorTech, we follow the agile methodology to ensure consistent results. Regular scrum meetings and optimized development cycles allow us to deliver websites faster without compromising quality. Our agile approach ensures flexibility, transparency, and a seamless collaboration process with our clients.</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-md-6 col-4">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <img src="/assets/images/dev4.png" alt="Best Selling Apparel" className="img-fluid mb-3" />
                                          <h4>Quality Assurance & Thorough Testing</h4>
                                          <p>As the best web development company in India, we ensure every website undergoes rigorous testing before deployment. Using both automated and manual QA methods, we follow the latest quality assurance standards to guarantee flawless performance, security, and responsiveness across all devices.</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-md-6 col-4">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <img src="/assets/images/dev5.png" alt="Offers and Discount Management" className="img-fluid mb-3" />
                                          <h4>Result-Oriented Creativity</h4>
                                          <p>We craft websites with full dedication, ensuring that every solution reflects your brand identity. Our web development services focus on understanding your business objectives, target audience, and vision. ChittorTech, as a premier web design company in India, combines creativity with functionality to deliver websites that stand out, attract traffic, and engage users effectively.</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-md-6 col-4">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <img src="/assets/images/dev6.png" alt="Sort Style-wise" className="img-fluid mb-3" />
                                          <h4>User-Centric Design & White-Hat Practices</h4>
                                          <p>We value client input but prioritize the end-user experience. Every element, from website structure to interlinking and navigation, is carefully planned to ensure seamless usability. Our web development services in India not only create visually appealing websites but also enhance engagement, retention, and conversions through user-focused designs.</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-md-6 col-4">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <img src="/assets/images/dev7.png" alt="WhatsApp Integration" className="img-fluid mb-3" />
                                          <h4>Value for Money & Transparent Communication</h4>
                                          <p>At ChittorTech, we believe in delivering maximum value. As the best Web Development Company in India, we track every step of the project, maintain transparent communication, and provide regular progress updates. Honest reporting, clear milestones, and client-focused services ensure long-term satisfaction and successful partnerships.</p>
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

      {/*  faq template section */}
      <section className="faq-template">
        <div className="container">
          <div className="heading-wrap text-center">
            <h2> ChittorTech: Best Web Development  <span>Company in India</span> </h2>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="faq-section">
                <div className="accordion" id="faqAccordion">
                  
                  {/* FAQ 1 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Why should I choose ChittorTech as my web development partner?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        ChittorTech is recognized as the best Web Development Company in India, with over 15 years of experience delivering high-quality, custom web solutions. Our team ensures every project meets your business needs, is delivered on time, and incorporates modern technologies for optimal performance and design.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What services does ChittorTech offer as a web design company in India?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        We offer end-to-end web development and web design services, including custom website design, eCommerce platforms, CMS development, mobile-friendly designs, AI & IT Solutions solutions, and application development. Every solution is tailored to enhance user engagement and business growth.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        How experienced is ChittorTech in handling web development projects?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        As a leading web development company in India, we have successfully developed websites for clients in 32+ countries across industries like IT, healthcare, tourism, law firms, eCommerce, and more. Our team combines creativity, coding expertise, and industry knowledge to deliver exceptional results.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Does ChittorTech follow a structured development process?
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Yes! We follow a structured full-stack web development process including client requirement analysis, customized planning, wireframing, design approval, development, testing, and launch. Our agile methodology ensures timely delivery and flexibility throughout the project.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 5 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        How does ChittorTech ensure website quality and performance?
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        We conduct rigorous testing using both automated and manual QA methods. Every website is checked for functionality, responsiveness, performance, and security. This ensures flawless operation across devices and browsers.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 6 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        How does ChittorTech focus on user experience?
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        As a top web design company in India, we prioritize user-centric designs, considering website structure, navigation, and interactivity. Our goal is to create visually appealing websites that attract and retain visitors while driving engagement and conversions.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 7 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        Is ChittorTech transparent in communication and project updates?
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Absolutely! We track every step of the project, provide regular progress updates, and maintain transparent communication. Our focus on clarity and accountability ensures smooth collaboration and client satisfaction.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 8 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        What makes ChittorTech different from other web development companies in India?
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        We combine over 15 years of experience, creative design, advanced technologies, and agile methodologies. As a trusted web development company in India, we deliver high-quality, scalable, and SEO-friendly websites that are tailored to meet your business objectives.
                      </div>
                    </div>
                  </div>

                </div> {/* /accordion */}
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
