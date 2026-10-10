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
                <i className={`fa-solid fa-magnifying-glass`}></i> SEO Services
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                SEO Services — Search Engine Optimization
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Rank higher on Google with data-driven SEO strategies tailored for Indian businesses.
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
                  background: "linear-gradient(135deg, #064e3b, #022c22, #020617)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 2px rgba(16, 185, 129, 0.5), 0 0 35px rgba(5, 150, 105, 0.25)",
                  border: "4px solid #065f46",
                }}
              >
                {/* Phone Notch & Speaker */}
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                  <div style={{ width: "36px", height: "4px", backgroundColor: "#047857", borderRadius: "4px" }} />
                  <div style={{ width: "5px", height: "5px", backgroundColor: "#022c22", borderRadius: "50%", border: "1px solid #047857" }} />
                </div>

                {/* Video Container (9:16) */}
                <div
                  style={{
                    position: "relative",
                    borderRadius: "24px",
                    overflow: "hidden",
                    aspectRatio: "9 / 16",
                    backgroundColor: "#022c22",
                  }}
                >
                  <video
                    ref={videoRef}
                    src="https://github.com/user-attachments/assets/5eabb4f4-efe2-4827-bf91-52fdfecbb78c"
                    poster="/images/seo-growth-video-poster.jpg"
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
                          background: "linear-gradient(135deg, #10b981, #059669)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 10px 30px rgba(16, 185, 129, 0.65), 0 0 0 4px rgba(255, 255, 255, 0.35)",
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
                  <span style={{ fontSize: "0.75rem", color: "#a7f3d0", fontWeight: 600 }}>Speed:</span>
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
                          background: playbackSpeed === speed ? "#10b981" : "transparent",
                          color: playbackSpeed === speed ? "#ffffff" : "#a7f3d0",
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
      

      {/*  Best SEO Services section start here */}
      <section className="seo-services-sec">
           <div className="container">
               <div className="row align-items-center">
                   <div className="col-md-6">
                     <div className="seo-services">
                        <div className="heading-wrap text-start">
                          <h2>ChittorTech – Best SEO Company in India | <span>Best SEO Service in India</span> </h2>
                          <h5>ChittorTech: SEO Services in India – Driving Business Growth</h5>
                          <p>Are you a business owner looking to expand your customer base? Do you have a social media presence but struggle to get noticed? Have you seen countless businesses thriving online and wonder how you can do the same? The answer is  <strong>SEO – Search Engine Optimization.</strong> </p>
                         <p>
  SEO improves both the quantity and <strong>quality of organic traffic</strong> to your website. In today’s digital-first world, having a strong online presence isn’t optional—it’s essential. With <strong>ChittorTech,</strong> a leading 
  <a href="/search-engine-optimization" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
    SEO Company in India
  </a>, your business can rank higher on search engines and build lasting credibility.
</p>

                       </div>
                    </div>
                   </div>
                   <div className="col-md-6">
                        <div className="seo-services-img">
                           <figure>
                               <img src="/assets/images/img107.jpg" alt="Best SEO Services" />
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
                          <h2> Why SEO Services in India Are  <span>Essential for Your Business</span> </h2>
                          <p>India’s business ecosystem is booming—from startups to large enterprises. With millions of businesses competing online, professional SEO services in India have become a must for success.</p>
                       </div>
                       <div className="why-choose-wrap">
                          <h4>ChittorTech offers customized SEO packages for multiple industries, including:</h4>
                          <ul>
                             <li>
                                <figure> <img src="/assets/images/seo1.png" alt="ChittorTech Search Engine Optimization - seo1" /> </figure>
                                <h3>Education & Coaching</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/seo2.png" alt="ChittorTech Search Engine Optimization - seo2" /> </figure>
                                <h3>Healthcare & Medica</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/seo3.png" alt="ChittorTech Search Engine Optimization - seo3" /> </figure>
                                <h3>Finance & Banking</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/seo4.png" alt="ChittorTech Search Engine Optimization - seo4" /> </figure>
                                <h3>Home Improvement & Construction</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/seo5.png" alt="ChittorTech Search Engine Optimization - seo5" /> </figure>
                                <h3>Manufacturing & Industrial</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/seo6.png" alt="ChittorTech Search Engine Optimization - seo6" /> </figure>
                                <h3>eCommerce & Retail</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/seo7.png" alt="ChittorTech Search Engine Optimization - seo7" /> </figure>
                                <h3>Local Businesses</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/seo8.png" alt="ChittorTech Search Engine Optimization - seo8" /> </figure>
                                <h3>Travel & Tourism</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/seo9.png" alt="ChittorTech Search Engine Optimization - seo9" /> </figure>
                                <h3>Hotels & Hospitality</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/seo10.png" alt="ChittorTech Search Engine Optimization - seo10" /> </figure>
                                <h3>Gambling & Casinos</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/seo12.png" alt="ChittorTech Search Engine Optimization - seo12" /> </figure>
                                <h3>Astrology & Spiritual Services</h3>
                             </li>
                          </ul>
                       </div>
                       <div className="text-new">
                            <p>We also provide <strong>city-specific SEO services </strong> to ensure your business dominates locally in major Indian cities:</p>
                            <ul>
                              <li>SEO Services in Mumbai, Delhi, Bangalore, Hyderabad, Pune, Chennai, Kolkata, Ahmedabad, Jaipur, and Chandigarh</li>
                              <li>Local SEO in cities like Surat, Lucknow, Indore, Coimbatore, Nagpur, and more</li>
                            </ul>
                            <p>No matter your location, our team ensures your website ranks at the top and attracts the right local and national audience.</p>
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
                              <img src="/assets/images/img108.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start">
                          <h2>Benefits of Professional SEO Services in India by   <span>ChittorTech</span> </h2>
                          <p>A strong SEO strategy ensures your business appears at the top of Google, Bing, and other search engines. With <strong>ChittorTech,</strong> you gain:</p>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li> <strong>Increased Visibility:</strong> Appear in search results when your potential customers are actively looking for your services.</li>
                              <li> <strong>Higher Credibility:</strong> Top rankings enhance your brand authority in your city and nationwide.</li>
                              <li> <strong>Better ROI:</strong> Organic traffic costs less than paid campaigns and generates higher conversions.</li>
                              <li> <strong>Scalability:</strong> From local businesses to national or international enterprises, SEO grows with your business.</li>
                           </ul>
                           <p>Whether your goal is <strong>Local SEO in Mumbai or Delhi, National SEO across India,</strong> or <strong>International SEO, ChittorTech</strong> ensures your website performs at its best, generating leads, traffic, and measurable business growth.</p>
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
                 <h2>SEO Company India: We Perform SEO  <span>Services for the Following Industries </span> </h2>
              </div>
             <div className="row">
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="0">
                   <figure> <img src="/assets/images/ind1.png" alt="ChittorTech Search Engine Optimization - ind1" /> </figure>
                   <h4>AI Tools SEO Services</h4>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="100">
                   <figure> <img src="/assets/images/ind2.png" alt="ChittorTech Search Engine Optimization - ind2" /> </figure>
                   <h4>Astrology SEO Services</h4>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="200">
                   <figure> <img src="/assets/images/ind3.png" alt="ChittorTech Search Engine Optimization - ind3" /> </figure>
                   <h4>Automobile SEO Services</h4>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="300">
                   <figure> <img src="/assets/images/ind4.png" alt="ChittorTech Search Engine Optimization - ind4" /> </figure>
                   <h4>Consultant SEO Services</h4>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="400">
                   <figure> <img src="/assets/images/ind5.png" alt="ChittorTech Search Engine Optimization - ind5" /> </figure>
                   <h4>Coworking SEO Services</h4>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/ind6.png" alt="ChittorTech Search Engine Optimization - ind6" /> </figure>
                   <h4>Cyber Security SEO Services</h4>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/ind7.png" alt="ChittorTech Search Engine Optimization - ind7" /> </figure>
                   <h4>Data Recovery SEO Services</h4>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/ind8.png" alt="ChittorTech Search Engine Optimization - ind8" /> </figure>
                   <h4>Data Science SEO Services</h4>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/ind9.png" alt="ChittorTech Search Engine Optimization - ind9" /> </figure>
                   <h4>Dentists SEO Services</h4>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/ind10.png" alt="ChittorTech Search Engine Optimization - ind10" /> </figure>
                   <h4>eCommerce SEO Services</h4>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/ind11.png" alt="ChittorTech Search Engine Optimization - ind11" /> </figure>
                   <h4>Education SEO Services</h4>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/ind12.png" alt="ChittorTech Search Engine Optimization - ind12" /> </figure>
                   <h4>Finance SEO Services</h4>
                 </div>
               </div>
             </div>
           </div>
      </section>
      {/*   Our Complete SEO Service Suite */}


      <section className="seo-services-sec pt0">
           <div className="container">
               <div className="row align-items-center">
                   <div className="col-md-12">
                     <div className="seo-services">
                        <div className="heading-wrap text-start">
                          <h2>Hire 25+ Full-Time SEO Experts at  <span>ChittorTech</span> </h2>
                          <p> <strong>At ChittorTech,</strong> we pride ourselves on our team of <strong>25+ full-time SEO professionals</strong> with a combined experience of over <strong>70 years.</strong> Our experts are equipped with the knowledge and strategies to drive significant growth for your business.</p>

                          <p>We provide <strong>customized SEO solutions in India</strong> tailored to your business needs. From increasing online visibility to boosting website traffic and generating measurable results, our team uses advanced techniques to ensure your brand stands out in the digital space.</p>

                          <p>By partnering with <strong>ChittorTech,</strong> you gain access to experienced professionals who constantly stay updated with the <strong>latest SEO trends, algorithm updates, and industry best practices.</strong> This ensures your business receives the most effective and innovative strategies for long-term success.</p>
                          
                       </div>
                    </div>
                   </div>
               </div>
           </div>
      </section>

      <section className="seo-services-sec pt0">
           <div className="container">
               <div className="row align-items-center">
                   <div className="col-md-12">
                     <div className="seo-services">
                        <div className="heading-wrap text-start">
                          <h2>Global SEO Services – Expand  <span>Beyond Borders</span> </h2>
                          <p> Your business doesn’t have to be limited by geography. We provide SEO services worldwide, serving clients in the USA, UK, Canada, Germany, Australia, Japan, Singapore, UAE, Brazil, and many other countries across Europe, Asia, and the Americas.</p>

                          <p>With our international SEO packages, we help businesses gain visibility in target markets, attract global traffic, and establish a strong online presence. Each SEO campaign is customized to match regional preferences and market trends, ensuring effective results wherever your business operates.</p>

                        <p>
  No matter where your business is, ChittorTech offers comprehensive 
  <a href="/search-engine-optimization" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
    SEO services in India
  </a> 
  and beyond.
</p>

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
                        <h2>SEO Services We Perform </h2>
                  <p>
  Ranking on Google’s first page requires expertise, strategy, and consistent effort. At our 
  <a href="/search-engine-optimization" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
    SEO Agency
  </a>, we combine over 10 years of experience, in-depth algorithm knowledge, and constant research to deliver results-driven SEO services for businesses across industries and platforms.
</p>

                        <p>We continuously train our team and implement innovative strategies to stay ahead, ensuring every client gets measurable growth in search rankings, traffic, and conversions.</p>
                     </div>
                     <div className="desktop-industries">
                        <div className="row justify-content-center">
                           <div className="col-lg-4 col-md-6 col-4">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <img src="/assets/images/se1.png" alt="Billing" className="img-fluid mb-3" />
                                          <h4> Local SEO</h4>
                                          <p>Our Local SEO experts help your business dominate locally searched terms, driving both online and offline footfall. We manage Google My Business, local citations, content marketing, brand profiles, and online reputation management to ensure maximum visibility in your local market.</p>
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
                                          <img src="/assets/images/se2.png" alt="Inbuilt Accounting Modules" className="img-fluid mb-3" />
                                          <h4> eCommerce SEO</h4>
                                          <p>Optimizing an eCommerce store requires more than keywords. Our specialists implement advanced product page structures, category-wise keyword strategies, guest posting, strong backlinks, and technical optimizations to help your online store rank on Google’s first page.</p>
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
                                          <img src="/assets/images/se3.png" alt="Organize Clothing Stock" className="img-fluid mb-3" />
                                          <h4> YouTube SEO</h4>
                                          <p>YouTube success depends on content and consistency. Our YouTube SEO strategies focus on optimizing video content, performing iterative improvements, and increasing subscribers, watch time, and engagement. This ensures both individual video ranking and overall channel growth.</p>
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
                                          <img src="/assets/images/se4.png" alt="Best Selling Apparel" className="img-fluid mb-3" />
                                          <h4> Podcast SEO</h4>
                                          <p>Podcast SEO is an emerging field. We use content marketing, backlink building, and branding techniques to grow podcast audiences, increase subscribers, and enhance discoverability across platforms.</p>
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
                                          <img src="/assets/images/se5.png" alt="Offers and Discount Management" className="img-fluid mb-3" />
                                          <h4>. National (Country-Level) SEO</h4>
                                          <p>For businesses aiming to expand beyond local markets, our country-level SEO strategies target service keywords, create optimized content, and implement On-Page and Off-Page activities to drive results across the entire country.</p>
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
                                          <img src="/assets/images/se6.png" alt="Sort Style-wise" className="img-fluid mb-3" />
                                          <h4>International SEO</h4>
                                          <p>Going global requires aggressive strategies. We help businesses reach international audiences using a mix of content marketing, branding, podcasting, ORM, and full-scale On-Page and Off-Page SEO to appear in global search results.</p>
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
                                          <img src="/assets/images/se7.png" alt="WhatsApp Integration" className="img-fluid mb-3" />
                                          <h4>App Store SEO / ASO</h4>
                                          <p>App optimization is specialized. We increase app installations through Play Store and App Store optimization, website keyword targeting, and semantic search strategies that drive real installs.</p>
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
                                          <img src="/assets/images/se8.png" alt="GST-Billing Compatibility" className="img-fluid mb-3" />
                                          <h4>
                                             Voice Search SEO
                                          </h4>
                                          <p>Voice search is growing fast. We analyze potential voice commands for your industry, then create SEO strategies targeting long-tail voice search queries to rank your pages in Google Voice Search results.</p>
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

      {/*  Why Choose Our SEO Services? */}
      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-6">
                      <div className="heading-wrap text-start">
                          <h2> Why Choose Our SEO   <span>Services?</span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li> Decade-long experience in SEO across multiple platforms</li>
                              <li> Data-driven strategies tailored to your business</li>
                              <li> Continuous optimization and innovative experimentation</li>
                              <li> Transparent reporting and measurable results</li>
                           </ul>
                       </div>
                  </div>
                  <div className="col-md-6">
                       <div className="expertise-img text-end">
                           <figure>
                              <img src="/assets/images/seo-concept.png" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/*  Why Choose Our SEO Services? */}

      <section className="seo-services-sec pt0">
           <div className="container">
               <div className="row align-items-center">
                   <div className="col-md-12">
                     <div className="seo-services">
                        <div className="heading-wrap text-start">
                          <h2>Why ChittorTech SEO Services Are Best for Your Business </h2>
                          <p> At ChittorTech, we offer a dedicated team of hand-picked professional SEO experts. Every strategy we create is designed to send positive signals to search engine crawlers, ensuring faster indexing and quicker ranking for your website.</p>

                          <p>Our approach goes beyond just ranking – we focus on driving organic traffic that generates real business growth for your company.</p>
                          
                       </div>
                    </div>
                   </div>
               </div>
           </div>
      </section>

      <section className="seo-services-sec pt0">
           <div className="container">
               <div className="row align-items-center">
                   <div className="col-md-12">
                     <div className="seo-services">
                        <div className="heading-wrap text-start">
                          <h2> Not Getting Business Even After Multiple SEO Attempts? </h2>
                          <p> A common mistake with many SEO providers in India is considering first-page ranking as the ultimate goal. True SEO is not just about rankings – it’s a process to attract leads, convert traffic into customers, and support long-term business growth.</p>

                          <p>By partnering with ChittorTech, your business can achieve higher rankings and attract more leads, fueling growth and success.</p>
                          
                       </div>
                    </div>
                   </div>
               </div>
           </div>
      </section>

      <section className="why-choose-sec pt0"> 
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-12">
                      <div className="heading-wrap text-start">
                          <h2> Scope of SEO Services for Your Business Website </h2>
                          <p>SEO Myths Busted: Platforms like WordPress, Shopify, Wix, Magento, or others do not determine a website’s SEO-friendliness. On-Page SEO can be fully customized regardless of your CMS.</p>
                       </div>
                       <div className="expertise-wrap">
                        <h6>At ChittorTech, our team covers:</h6>
                           <ul>
                             <li>
  <a href="/on-page-seo-services" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
    Basic On-Page SEO
  </a>: Updating page titles, meta descriptions, and meta keywords.
</li>

                            
							  <li>
  <a href="/technical-seo-services" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
    Technical On-Page SEO
  </a>: Fixing broken links, internal linking, sitemap creation, and content optimization.
</li>

                              <li>Advanced On-Page SEO: Adding schema markup (FAQ, Review & Rating, Local Business, JSON-LD), conversion rate optimization, and improving page load speed.</li>
                           </ul>
                           <p>With these strategies, we ensure your website is fully optimized for search engines and users alike.</p>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="complete-seo-service"> 
         <div className="container my-5">
            <div className="heading-wrap text-center">
                 <h2> How to Buy SEO Services from ChittorTech in India <span>Solutions in India</span> </h2>
                 <p>There are two ways to purchase our SEO services based on your familiarity with SEO:</p>
              </div>
             <div className="row">
               <div className="col-md-6 col-lg-6 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="0">
                   <h4>Way 1: For Tech-Savvy Business Owners</h4>
                   <ul className="list-unstyled">
                     <li>Visit our website: chittortech.in</li>
                     <li>Use the search panel at the top to type your industry, e.g., AI Software, Automobile, Cyber Security, eCommerce, Real Estate, Restaurants, etc.</li>
                     <li>Click the relevant SEO package page.</li>
                     <li>Choose the package type based on your target locations (local, national, international).</li>
                     <li>Select the number of keywords for your SEO package.</li>
                     <li>Review the included Off-Page activities and pricing.</li>
                     <li>Add the package to your cart and proceed to payment.</li>
                     <li>After payment, receive confirmation via email and a call from our ChittorTech SEO team within 24 hours to start the campaign.</li>
                   </ul>
                 </div>
               </div>
               <div className="col-md-6 col-lg-6 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="100">
                   <h4>Way 2: For Non-Tech-Savvy Users</h4>
                   <ul className="list-unstyled">
                     <li>Contact our SEO experts via Call or WhatsApp for guidance.</li>
                     <li>Visit chittortech.in and search for your industry (e.g., Travel Agencies, Dentists, Law Firms, Movers & Packers, Roofing Companies, Real Estate, etc.).</li>
                     <li>Follow the same steps as Way 1 to choose a package, keywords, and proceed to payment.</li>
                     <li>Receive a confirmation email and a call within 24 hours for strategy discussion and campaign initiation.</li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
      </section>
       <section className="complete-seo-service"> 
         <div className="container my-5">
            <div className="heading-wrap text-center">
                 <h2> 100% Manual, Penalty-Free SEO Services by <span>ChittorTech</span> </h2>
                 <p>We strictly avoid outdated or low-value tactics like blog commenting, directory submissions, or automated backlink creation, which can harm your website.</p>
              </div>
             <div className="row">
               <div className="col-md-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="0">
                   <h4>Content Marketing SEO:</h4>
                   <ul className="list-unstyled">
                     <li>Free or Paid Guest Posts</li>
                     <li>Article Submissions</li>
                     <li>Website-targeted Landing Page Content</li>
                     <li>Blog Writing</li>
                     <li>Social Bookmarking</li>
                     <li>Classified Submissions</li>
                     <li>PPT/PDF Submissions</li>
                     <li>Q&A Submissions</li>
                   </ul>
                 </div>
               </div>
               <div className="col-md-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="100">
                   <h4>Branding SEO:</h4>
                   <ul className="list-unstyled">
                     <li>Brand Profile Creation</li>
                     <li>Local Business Listings</li>
                     <li>Podcast Creation & Submissions</li>
                     <li>Image Submissions</li>
                     <li>Microsite Creation</li>
                   </ul>
                 </div>
               </div>
               <div className="col-md-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="100">
                   <h4>Online Reputation Management (ORM):</h4>
                   <ul className="list-unstyled">
                     <li>Sharing positive reviews on your site (if possible)</li>
                     <li>Promoting reviews for brand names, services, and products</li>
                   </ul>
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


      {/*  Why Choose Our SEO Services? */}
      <section className="why-choose-sec tools-use-sec"> 
          <div className="container">
           <div className="heading-wrap text-center">
              <h2> Why Choose ChittorTech for   <span>SEO Services in India?</span> </h2>
           </div>
            <div className="row">
                  <div className="col-md-3 col-lg-3 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="0">
                      <h4>Professional, hand-picked SEO experts</h4>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-3 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="100">
                      <h4>Customized strategies for every industry</h4>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-3 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="200">
                      <h4>100% manual, penalty-free SEO</h4>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-3 mb-4">
                    <div className="card tool-box text-center p-4 animate-in" data-delay="200">
                      <h4>Focus on generating real leads and business growth</h4>
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
