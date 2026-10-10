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
                <i className={`fa-solid fa-database`}></i> Custom Software Solutions
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Custom Software &amp; Enterprise Portals Development
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Bespoke enterprise software, billing automation, and customized portals built to your exact business workflow and requirements.
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
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 2px rgba(147, 51, 234, 0.5), 0 0 35px rgba(126, 34, 206, 0.25)",
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
                    poster="/images/custom-software-video-poster.jpg"
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
                          background: "linear-gradient(135deg, #9333ea, #7c3aed)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 10px 30px rgba(124, 58, 237, 0.65), 0 0 0 4px rgba(255, 255, 255, 0.35)",
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
                  <span style={{ fontSize: "0.75rem", color: "#c084fc", fontWeight: 600 }}>Speed:</span>
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
                          background: playbackSpeed === speed ? "#9333ea" : "transparent",
                          color: playbackSpeed === speed ? "#ffffff" : "#c084fc",
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
                          <h2>Best Customer Relationship Management (AI Knowledge Base)  <span>Services in India </span> </h2>
                          <h5>Automate, Optimize, and Strengthen Your Customer Relationships</h5>
                          <p>
  At ChittorTech, we provide the 
  <a href="/crm" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
    best Customer Relationship Management (AI Knowledge Base) Services in India
  </a> 
  to help businesses streamline marketing, sales, and customer service processes. Our custom AI Knowledge Base solutions enable seamless management of customer data, interaction tracking, purchase history, and contact management — all designed to boost efficiency, sales, and customer satisfaction.
</p>

                          <a className="schedule-btn" href="/contact-us"> Get a Free Consultation Today</a>
                       </div>
                    </div>
                   </div>
                   <div className="col-md-6">
                        <div className="seo-services-img">
                           <figure>
                               <img src="/assets/images/img145.jpg" alt="Best SEO Services" />
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
                          <h2> Why Choose ChittorTech –   <span>The Best AI Knowledge Base Company in India?</span> </h2>
                       </div>
                       <div className="why-choose-wrap">
                          <ul>
                             <li>
                                <figure> <img src="/assets/images/po1.png" alt="ChittorTech Custom Crm Solutions - po1" /> </figure>
                                <h3>Proven Expertise: Experienced in delivering custom AI Knowledge Base solutions for startups and Fortune 500 companies.</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/po2.png" alt="ChittorTech Custom Crm Solutions - po2" /> </figure>
                                <h3>Seamless Automation: Automate sales, marketing, and support processes to improve efficiency.</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/po3.png" alt="ChittorTech Custom Crm Solutions - po3" /> </figure>
                                <h3>Tailored Solutions: Our AI Knowledge Base systems are customized to meet the specific needs of your business.</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/po4.png" alt="ChittorTech Custom Crm Solutions - po4" /> </figure>
                                <h3>Global Standards: Secure, scalable, and compliant with top-tier data security protocols.</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/po6.png" alt="ChittorTech Custom Crm Solutions - po6" /> </figure>
                                <h3>Dedicated Support: Continuous maintenance and upgrades to keep your AI Knowledge Base running smoothly.</h3>
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
                 <h2> Our AI Knowledge Base Services – Best Customer Relationship   <span>Management (AI Knowledge Base) Services in India </span> </h2>
                 <p>We provide a full spectrum of AI Knowledge Base services in India, from consulting to implementation and support:</p>
              </div>
             <div className="row">
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="0">
                   <figure> <img src="/assets/images/cr1.png" alt="ChittorTech Custom Crm Solutions - cr1" /> </figure>
                   <h4>AI Knowledge Base Consulting</h4>
                   <p>We assist organizations in planning and managing AI Knowledge Base projects effectively:</p>
                   <ul className="list-unstyled">
                     <li>Optimize workflows and increase AI Knowledge Base adoption</li>
                     <li>Tailor AI Knowledge Base strategies to align with business goals</li>
                     <li>Identify and resolve AI Knowledge Base bottlenecks</li>
                   </ul>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="100">
                   <figure> <img src="/assets/images/cr2.png" alt="ChittorTech Custom Crm Solutions - cr2" /> </figure>
                   <h4>AI Knowledge Base Implementation & Migration</h4>
                   <p>Streamline customer-facing operations and ensure smooth transitions:</p>
                   <ul className="list-unstyled">
                     <li>Analysis of existing AI Knowledge Base setups</li>
                     <li>Seamless data migration with zero downtime</li>
                     <li>Full lifecycle management of AI Knowledge Base systems</li>
                   </ul>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="200">
                   <figure> <img src="/assets/images/cr3.png" alt="ChittorTech Custom Crm Solutions - cr3" /> </figure>
                   <h4>Custom AI Knowledge Base Development</h4>
                   <p>Tailored AI Customer Engine development services to match your unique business requirements:</p>
                   <ul className="list-unstyled">
                     <li>Business analysis and end-to-end development</li>
                     <li>Iterative development for continuous improvement</li>
                     <li>Integration of tailored AI Knowledge Base tools and features</li>
                   </ul>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="300">
                   <figure> <img src="/assets/images/cr4.png" alt="ChittorTech Custom Crm Solutions - cr4" /> </figure>
                   <h4> AI Knowledge Base Testing</h4>
                   <p>Ensure reliability, security, and performance:</p>
                   <ul className="list-unstyled">
                     <li>Rigorous testing of all AI Knowledge Base functionalities</li>
                     <li>Verification of third-party integrations</li>
                     <li>Comprehensive quality assurance</li>
                   </ul>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="400">
                   <figure> <img src="/assets/images/cr5.png" alt="ChittorTech Custom Crm Solutions - cr5" /> </figure>
                   <h4> Support & Evolution</h4>
                   <p>Ongoing monitoring, data administration, and upgrades:</p>
                   <ul className="list-unstyled">
                     <li>Quick issue resolution to maintain uptime</li>
                     <li>System evolution to adapt to business growth</li>
                     <li>Long-term support for AI Knowledge Base efficiency</li>
                   </ul>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/cr6.png" alt="ChittorTech Custom Crm Solutions - cr6" /> </figure>
                   <h4> AI Knowledge Base Campaign Management</h4>
                   <p>Manage marketing campaigns effectively with AI Knowledge Base systems in India:</p>
                   <ul className="list-unstyled">
                     <li>Execute email blasts, SMS campaigns, and customer outreach</li>
                     <li>Track customer responses and engagement</li>
                     <li>Analyze results to optimize future campaigns</li>
                   </ul>
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
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img146.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start mobile-a">
                          <h2> Benefits of the Best AI Customer Engine  <span> for Your Business</span> </h2>
                       </div>
                       <div className="expertise-wrap ">
                           <h5>AI Customer Engine empowers businesses to:</h5>
                           <ul className="benefit-list">
                              <li>Centralize Customer Data: Consolidate contact details, purchase history, and preferences</li>
                              <li>Streamline Sales Processes: Automate repetitive tasks and manage leads</li>
                              <li>Enhance Collaboration: Share data, notes, and activities</li>
                              <li>Run Personalized Marketing Campaigns: Segment audiences for targeted messaging</li>
                              <li>Scale & Grow: Handle increasing customers, data, and processes efficiently</li>

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
                      <div className="heading-wrap text-start">
                          <h2> Key Features of Our AI Knowledge Base Solutions –    <span>Best AI Knowledge Base Company in India</span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li> <strong>Contact Management:</strong> Centralized database for all customer information</li>
                              <li> <strong>Lead & Opportunity Management</strong>  Track and nurture leads across your sales funnel</li>
                              <li> <strong>Sales Automation:</strong> Automated workflows for quotes, proposals, and follow-ups</li>
                              <li> <strong>Analytics & Reporting:</strong> Real-time insights into sales performance and customer behavior</li>
                              <li> <strong>Integration Capabilities:</strong> Connect with AI & IT Solutions, marketing, and support tools</li>
                              <li> <strong>Data Security:</strong> Advanced encryption, access controls, and regulatory compliance</li>
                           </ul>
                       </div>
                  </div>
                  <div className="col-md-6">
                       <div className="expertise-img text-end">
                           <figure>
                              <img src="/assets/images/img147.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/*  Why Choose Our SEO Services? */}


      {/*  Why Choose Our SEO Services? */}
      <section className="why-choose-sec tools-use-sec"> 
          <div className="container">
           <div className="heading-wrap text-center">
              <h2> Four Types of AI Knowledge Base Systems   <span>We Offer </span> </h2>
           </div>
            <div className="row">
                  <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="0">
                      <h4> <b>Operational AI Knowledge Base:</b>  Streamlines sales, marketing, and customer service</h4>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="100">
                      <h4> <b>Analytical AI Knowledge Base:</b> Provides insights into customer behavior and trends</h4>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="200">
                      <h4> <b>Collaborative AI Knowledge Base:</b> Enables interdepartmental collaboration</h4>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="200">
                      <h4> <b>Strategic AI Knowledge Base: </b> Focuses on long-term customer relationship planning</h4>
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
                              <img src="/assets/images/img148.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start mobile-a">
                          <h2> Best Practices for   <span> AI Knowledge Base Setup</span> </h2>
                       </div>
                       <div className="expertise-wrap ">
                           <h5>AI Customer Engine empowers businesses to:</h5>
                           <ul className="benefit-list">
                              <li>Define clear business objectives</li>
                              <li>Align AI Knowledge Base with business processes</li>
                              <li>Clean, import, and organize customer data</li>
                              <li>Customize features and workflows</li>
                              <li>Train users and encourage adoption</li>
                              <li>Monitor performance and refine processes</li>
                              <li>Ensure data security and compliance</li>


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
                      <div className="heading-wrap text-start">
                          <h2> Automating Sales Processes   <span> with AI Knowledge Base </span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <ul className="benefit-list">
                              <li>Lead Management: Capture, assign, and nurture leads automatically</li>
                              <li>Opportunity Tracking: Manage deals through every stage</li>
                              <li>Quote & Proposal Generation: Automate accurate proposals</li>
                              <li>Sales Activity Tracking: Record interactions and customer communications</li>
                              <li>Reporting & Analytics: Gain insights through dashboards and automated reports</li>
                              <li>System Integration: Connect AI Knowledge Base with email, e-commerce, and other platforms</li>

                           </ul>
                       </div>
                  </div>
                  <div className="col-md-6">
                       <div className="expertise-img text-end">
                           <figure>
                              <img src="/assets/images/img149.jpg" alt="Local & National SEO Expertise" />
                           </figure>
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
                          <h2> Choosing the   <span>Right AI Knowledge Base </span> </h2>
                       </div>
                       <div className="why-choose-wrap">
                          <ul>
                             <li>
                                <h3>Identify business needs and goals</h3>
                             </li>
                             <li>
                                <h3>Evaluate features and functionality</h3>
                             </li>
                             <li>
                                <h3>Consider ease of use and adoption</h3>
                             </li>
                             <li>
                                <h3>Ensure customization and flexibility</h3>
                             </li>
                             <li>
                                <h3>Check integration capabilities</h3>
                             </li>
                             <li>
                                <h3>Assess scalability and growth potential</h3>
                             </li>
                             <li>
                                <h3>Prioritize data security and compliance</h3>
                             </li>
                             <li>
                                <h3>Evaluate vendor support and training</h3>
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
                       <div className="expertise-img text-start">
                           <figure>
                              <img src="/assets/images/img150.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start">
                          <h2> Our AI Knowledge Base Development    <span> Process </span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <ul className="benefit-list">
                              <li>Requirement Analysis</li>
                              <li>Planning & Strategy</li>
                              <li>Development & Customization</li>
                              <li>Testing & QA</li>
                              <li>Deployment</li>
                              <li>Training & Support</li>
                           </ul>
                       </div>
                  </div>

              </div>
          </div>
      </section>
      {/*  Why Choose Our SEO Services? */}

      <section className="success-stories-sec">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="heading-wrap">
                        <h2>Client  <span>  Testimonials</span> </h2>
                     </div>
                    <div className="row">
                       <div className="col-md-12">
                           <div className="success-stories-box">
                                 <div id="stories" className="owl-carousel owl-theme">
                                    <div className="testimonial-card">
                                      <p className="testimonial-quote">Outstanding results, clear communication, and a dedicated team. We’re extremely satisfied with their AI Knowledge Base services.</p>
                                      <p className="testimonial-author">Jonathan</p>
                                    </div>
                                    <div className="testimonial-card">
                                      <p className="testimonial-quote">The project managers understood our needs perfectly and delivered a solution beyond our expectations.</p>
                                      <p className="testimonial-author">James Kelly</p>
                                      <p className="testimonial-role">Co-founder, Miracle Choice</p>
                                    </div>
                                    <div className="testimonial-card">
                                      <p className="testimonial-quote">The team provided creative solutions and excellent technical expertise. Highly recommended!</p>
                                      <p className="testimonial-author">Judith Mueller</p>
                                      <p className="testimonial-role">Executive Director, Mueller Health Foundation</p>
                                    </div>
                                    <div className="testimonial-card">
                                      <p className="testimonial-quote">ChittorTech’ AI Knowledge Base solutions helped streamline our processes and improve customer engagement significantly.</p>
                                      <p className="testimonial-author"> Kris Bruynson</p>
                                      <p className="testimonial-role"> Director, Storloft</p>
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
                           <h2>Industries We Serve – Best Customer Relationship Management (AI Knowledge Base) Services in India</h2>
                           <h5>We provide AI Knowledge Base solutions in India to businesses in diverse sectors:</h5>
                           <ul>
                              <li>IT & Software</li>
                              <li>Healthcare & Pharmaceuticals</li>
                              <li>Retail & E-commerce</li>
                              <li>Finance & Banking</li>
                              <li>Education & Training</li>
                              <li>Manufacturing & Logistics</li>
                              <li>Real Estate & Construction</li>

                           </ul>
                       </div>
                   </div>
                   <div className="col-md-5">
                       <div className="clothing-stores-img text-end">
                           <figure>
                              <img src="/assets/images/industry1.png" alt="ChittorTech Custom Crm Solutions - industry1" />
                           </figure>
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
                        <h2>Get Your Free AI Knowledge Base Consultation Today</h2>
                        <p>Unlock the full potential of your business with ChittorTech, the best AI Knowledge Base Company in India. Automate workflows, improve customer relationships, and scale your business efficiently.</p>
                        <button  onClick={() => { window.location.href = "/contact-us"; }}  className="cta-button">Get Started</button>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      
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
                      What are the best Customer Relationship Management (AI Knowledge Base) Services in India?
                    </button>
                  </h2>
                  <div id="crmCollapseOne" className="accordion-collapse collapse show" aria-labelledby="crmHeadingOne" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      The best Customer Relationship Management (AI Knowledge Base) Services in India streamline marketing, sales, and customer service processes. ChittorTech offers consulting, implementation, custom development, testing, support, and AI Knowledge Base campaign management tailored for businesses of all sizes.
                    </div>
                  </div>
                </div>

                {/* AI Knowledge Base FAQ 2 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="crmHeadingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#crmCollapseTwo" aria-expanded="false" aria-controls="crmCollapseTwo">
                      Why choose ChittorTech as the best AI Knowledge Base Company in India?
                    </button>
                  </h2>
                  <div id="crmCollapseTwo" className="accordion-collapse collapse" aria-labelledby="crmHeadingTwo" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      ChittorTech is recognized as the best AI Knowledge Base Company in India due to our proven expertise, custom solutions, seamless automation, secure systems, and dedicated support. We help businesses automate workflows, improve customer engagement, and grow efficiently.
                    </div>
                  </div>
                </div>

                {/* AI Knowledge Base FAQ 3 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="crmHeadingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#crmCollapseThree" aria-expanded="false" aria-controls="crmCollapseThree">
                      Which industries can benefit from AI Knowledge Base services in India?
                    </button>
                  </h2>
                  <div id="crmCollapseThree" className="accordion-collapse collapse" aria-labelledby="crmHeadingThree" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Businesses in IT & Software, Healthcare & Pharmaceuticals, Retail & E-commerce, Finance & Banking, Education & Training, Manufacturing & Logistics, and Real Estate & Construction can benefit from the best AI Knowledge Base services in India provided by ChittorTech.
                    </div>
                  </div>
                </div>

                {/* AI Knowledge Base FAQ 4 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="crmHeadingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#crmCollapseFour" aria-expanded="false" aria-controls="crmCollapseFour">
                      What are the key features of a top AI Knowledge Base system in India?
                    </button>
                  </h2>
                  <div id="crmCollapseFour" className="accordion-collapse collapse" aria-labelledby="crmHeadingFour" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Key features include contact management, lead and opportunity tracking, sales automation, analytics and reporting, integration capabilities, and robust data security. ChittorTech, the best AI Knowledge Base company in India, customizes all features to match your business needs.
                    </div>
                  </div>
                </div>

                {/* AI Knowledge Base FAQ 5 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="crmHeadingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#crmCollapseFive" aria-expanded="false" aria-controls="crmCollapseFive">
                      How can AI Customer Engine improve my business?
                    </button>
                  </h2>
                  <div id="crmCollapseFive" className="accordion-collapse collapse" aria-labelledby="crmHeadingFive" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      A AI Knowledge Base system centralizes customer data, automates sales processes, enhances team collaboration, enables personalized marketing campaigns, and supports scalable business growth. Choosing the best Customer Relationship Management (AI Knowledge Base) Services in India ensures maximum efficiency and ROI.
                    </div>
                  </div>
                </div>

                {/* AI Knowledge Base FAQ 6 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="crmHeadingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#crmCollapseSix" aria-expanded="false" aria-controls="crmCollapseSix">
                      What types of AI Knowledge Base systems does ChittorTech offer?
                    </button>
                  </h2>
                  <div id="crmCollapseSix" className="accordion-collapse collapse" aria-labelledby="crmHeadingSix" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We provide Operational AI Knowledge Base, Analytical AI Knowledge Base, Collaborative AI Knowledge Base, and Strategic AI Knowledge Base to meet different business needs, making us the best AI Knowledge Base company in India.
                    </div>
                  </div>
                </div>

                {/* AI Knowledge Base FAQ 7 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="crmHeadingSeven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#crmCollapseSeven" aria-expanded="false" aria-controls="crmCollapseSeven">
                      What is included in AI Knowledge Base consulting services in India?
                    </button>
                  </h2>
                  <div id="crmCollapseSeven" className="accordion-collapse collapse" aria-labelledby="crmHeadingSeven" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      AI Knowledge Base consulting includes workflow optimization, AI Knowledge Base strategy alignment, bottleneck identification, and project planning. Our consulting ensures your business implements the best AI Knowledge Base services in India efficiently.
                    </div>
                  </div>
                </div>

                {/* AI Knowledge Base FAQ 8 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="crmHeadingEight">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#crmCollapseEight" aria-expanded="false" aria-controls="crmCollapseEight">
                      Can ChittorTech help with AI Knowledge Base migration?
                    </button>
                  </h2>
                  <div id="crmCollapseEight" className="accordion-collapse collapse" aria-labelledby="crmHeadingEight" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, we offer seamless AI Knowledge Base migration with zero downtime, analyzing your existing system and ensuring smooth transition to new platforms as part of our custom AI Knowledge Base solutions.
                    </div>
                  </div>
                </div>

                {/* AI Knowledge Base FAQ 9 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="crmHeadingNine">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#crmCollapseNine" aria-expanded="false" aria-controls="crmCollapseNine">
                      Do you provide ongoing AI Knowledge Base support and upgrades?
                    </button>
                  </h2>
                  <div id="crmCollapseNine" className="accordion-collapse collapse" aria-labelledby="crmHeadingNine" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Absolutely. ChittorTech, the best AI Knowledge Base company in India, provides continuous system monitoring, maintenance, upgrades, and quick issue resolution to ensure your AI Knowledge Base operates smoothly.
                    </div>
                  </div>
                </div>

                {/* AI Knowledge Base FAQ 10 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="crmHeadingTen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#crmCollapseTen" aria-expanded="false" aria-controls="crmCollapseTen">
                      How does AI Knowledge Base campaign management help my business?
                    </button>
                  </h2>
                  <div id="crmCollapseTen" className="accordion-collapse collapse" aria-labelledby="crmHeadingTen" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      AI Knowledge Base campaign management allows businesses to execute email blasts, SMS campaigns, and customer outreach while tracking responses and analyzing results. This ensures your marketing efforts are targeted and effective.
                    </div>
                  </div>
                </div>

                {/* AI Knowledge Base FAQ 11 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="crmHeadingEleven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#crmCollapseEleven" aria-expanded="false" aria-controls="crmCollapseEleven">
                      Is AI Customer Engine secure and compliant with data regulations?
                    </button>
                  </h2>
                  <div id="crmCollapseEleven" className="accordion-collapse collapse" aria-labelledby="crmHeadingEleven" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, our AI Knowledge Base systems in India are built with advanced encryption, access controls, and comply with top-tier data protection standards to ensure your customer data is safe.
                    </div>
                  </div>
                </div>

                {/* AI Knowledge Base FAQ 12 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="crmHeadingTwelve">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#crmCollapseTwelve" aria-expanded="false" aria-controls="crmCollapseTwelve">
                      How can I get started with the best AI Knowledge Base services in India?
                    </button>
                  </h2>
                  <div id="crmCollapseTwelve" className="accordion-collapse collapse" aria-labelledby="crmHeadingTwelve" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Simply contact ChittorTech for a free consultation. Our team will analyze your business needs and provide a tailored plan as part of the best AI Knowledge Base company in India services.
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
