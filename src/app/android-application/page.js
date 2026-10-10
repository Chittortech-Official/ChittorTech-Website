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
                <i className={`fa-solid fa-android`}></i> Android Dev
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Mobile App Development & Android Solutions
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Leading mobile app development company in India. We engineer custom native Android apps, scalable iOS apps, and cross-platform mobile solutions built for speed, security, and high user retention.
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
                <i className={`fa-solid fa-android`}></i>
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
                          <h2>ChittorTech – Best Android App Development <span>Company in India</span> </h2>
                          <p>In today’s mobile-first world, businesses cannot afford to ignore Android. With more than 87% of the global smartphone market share, Android has become the most powerful platform to connect, engage, and retain customers. At ChittorTech, we provide end-to-end Android app development services that empower businesses to create high-performing, user-friendly, and scalable mobile applications.</p>
                          <p>Whether you need an app for smartphones, tablets, smart TVs, or wearables, our expert team delivers solutions that align with your business goals and deliver an exceptional user experience.</p>
                         <p>
  Looking to grow your business on the world’s most popular mobile platform? Discover how ChittorTech – the 
  <a href="/android-application" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
    best Android app development company in India
  </a> – can make it happen.
</p>

                          <a className="schedule-btn" href="/contact-us"> Connect with an Expert Today!</a>
                       </div>
                    </div>
                   </div>
                   <div className="col-md-6">
                        <div className="seo-services-img">
                           <figure>
                               <img src="/assets/images/img154.jpg" alt="Best SEO Services" />
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
                              <img src="/assets/images/img155.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start mobile-a">
                          <h2> Why Choose ChittorTech for  <span>Android App Development? </span> </h2>
                          <p>As a leading Android app development company in India, ChittorTech blends innovation, technology, and strategic insight to help startups, SMBs, and enterprises thrive in the digital ecosystem.</p>
                       </div>
                       <div className="expertise-wrap">
                           <h5>We focus on:</h5>
                           <ul>
                              <li>Maximizing ROI with tailored solutions.</li>
                              <li>Delivering seamless integration with Google services.</li>
                              <li>Using the latest Android tools like Kotlin, Java, and React Native.</li>
                              <li>Designing intuitive UI/UX interfaces for unmatched customer engagement.</li>
                              <li>Ensuring performance, stability, and security in every application.</li>

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
                      <div className="heading-wrap text-start mobile-a">
                          <h2> Our Android App Development  <span>Expertise</span> </h2>
                          <p>At ChittorTech, our Android app development services cover a wide range of technical and creative requirements:</p>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li> <strong> Custom Android App Development</strong> Using the latest Android SDKs, we develop applications tailored to your unique business needs, ensuring scalability and high performance.</li>

                              <li> <strong>  Android Application UI/UX Design </strong> Our design team creates interactive and user-friendly UI/UX layouts that enhance customer experience and keep users engaged.</li>

                              <li> <strong> Android App Porting Services</strong> We provide smooth iOS-to-Android migration or platform switching, ensuring a hassle-free experience while expanding your reach.</li>

                              <li> <strong>  Native Android App Development</strong> Our developers specialize in native Android app development, leveraging the power of Kotlin and Java to deliver robust, responsive apps.</li>

                              <li> <strong> Android App Testing Services</strong> We conduct unit testing, regression testing, and beta testing to ensure your application is bug-free, reliable, and ready for market launch.</li>

                              <li> <strong> Cloud-Based Android Solutions</strong> With cloud integration, your app remains secure, scalable, and accessible, supporting both small and large-scale business operations.</li>

                              <li> <strong> Support & Maintenance</strong> We offer post-launch support, app updates, and performance monitoring, ensuring your app stays future-ready.</li>

                              <li> <strong>  Upgradation Services</strong> Stay ahead of competitors with upgraded apps optimized for the latest Android versions and market trends.</li>

                           </ul>
                       </div>
                  </div>
                  <div className="col-md-6">
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img156.jpg" alt="Local & National SEO Expertise" />
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
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img157.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start mobile-a">
                          <h2> How ChittorTech Helps Businesses Grow with Android Apps  <span>Grow with Android Apps</span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li> <strong>  Startups </strong>  Build MVPs quickly, validate ideas, and scale faster with cost-efficient Android apps.</li>

                              <li> <strong>  SMBs  </strong>  Drive customer engagement and sales with tailored mobile solutions.</li>

                              <li> <strong>  Enterprises  </strong>  Automate operations, improve customer loyalty, and stay competitive with enterprise-grade Android apps.</li>

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
                      <div className="heading-wrap text-start mobile-a">
                          <h2> Android App Development Services Across All Platforms  <span>Across All Platforms</span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <h5>We build Android apps for:</h5>
                           <ul>
                              <li> <strong>  Smartphones  </strong>  Business, eCommerce, or lifestyle apps.</li>

                              <li> <strong>  Tablets   </strong>  Productivity and enterprise-focused apps.</li>

                              <li> <strong>  Wearables   </strong>  Smartwatch and fitness solutions.</li>

                              <li> <strong>  Smart TVs   </strong>  Entertainment and streaming apps.</li>

                           </ul>
                           <p>Our development ensures seamless performance across devices, so your business reaches every corner of the Android ecosystem.</p>
                       </div>
                  </div>
                  <div className="col-md-6">
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img158.jpg" alt="Local & National SEO Expertise" />
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
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img159.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start mobile-a">
                          <h2> What Makes ChittorTech the Best Android App Development   <span>Company in India?</span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li> <strong>   Experienced Team -   </strong>  killed in Kotlin, Java, Flutter, and React Native.</li>

                              <li> <strong>  Client-Centric Approach –   </strong>  We prioritize your business goals and audience.</li>

                              <li> <strong>  Proven Portfolio –   </strong>  Delivered successful Android apps across multiple industries.</li>

                              <li> <strong>  Innovation & Technology –   </strong>  Always updated with the latest frameworks and Google guidelines.</li>

                              <li> <strong>  Commitment to Quality – </strong>  Apps designed for stability, speed, and superior performance.</li>

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
                      <div className="heading-wrap text-start mobile-a">
                          <h2> Our Android App Development  <span>Process</span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li> <strong>   Analysis    </strong> Understand project goals, audience, and market.</li>

                              <li> <strong>  UX Design  </strong>  Create wireframes and user journeys.</li>

                              <li> <strong>  UI Design    </strong>  Develop interactive and visually appealing layouts.</li>

                              <li> <strong>  Technical Architecture  </strong>  Choose the right tools, languages, and APIs.</li>

                              <li> <strong>  Development  </strong>  Agile iterations with client feedback.</li>

                              <li> <strong>  Testing   </strong>  Quality assurance and bug fixing.</li>

                              <li> <strong>  Deployment   </strong>  Publish to Google Play Store and ensure smooth go-live.</li>

                           </ul>
                       </div>
                  </div>
                  <div className="col-md-6">
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img160.jpg" alt="Local & National SEO Expertise" />
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
                          <h2> Technologies We Use for   <span>Android Development</span> </h2>
                       </div>
                       <div className="why-choose-wrap">
                          <ul>
                             <li>
                                <figure> <img src="/assets/images/ja1.png" alt="ChittorTech Android Application - ja1" /> </figure>
                                <h3>Kotlin & Java</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/ja2.png" alt="ChittorTech Android Application - ja2" /> </figure>
                                <h3>Android Studio & SDK</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/ja3.png" alt="ChittorTech Android Application - ja3" /> </figure>
                                <h3>Firebase (Push Notifications, Analytics, ML Kit)</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/ja4.png" alt="ChittorTech Android Application - ja4" /> </figure>
                                <h3>Google Play Services (Maps, APIs, Authentication)</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/ja5.png" alt="ChittorTech Android Application - ja5" /> </figure>
                                <h3>MVVM Architecture & Jetpack Components</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/ja6.png" alt="ChittorTech Android Application - ja6" /> </figure>
                                <h3>Glide, Retrofit, and RXJava2</h3>
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
                      <div className="heading-wrap text-start">
                          <h2> Why ChittorTech is Your Trusted  <span>Android Development Partner</span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li>  Proven track record with high-quality apps.</li>
                              <li>  Recognized among the best Android app development companies in India.</li>
                              <li>  Strong client testimonials and industry recognition.</li>
                              <li>  Focus on innovation, user experience, and measurable business outcomes.</li>
                           </ul>
                       </div>
                  </div>
                  <div className="col-md-6">
                       <div className="expertise-img text-end">
                           <figure>
                              <img src="/assets/images/img161.jpg" alt="Local & National SEO Expertise" />
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
                 <h2> Our Services in <span>Android App Development</span> </h2>
              </div>
             <div className="row">
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="0">
                   <figure> <img src="/assets/images/op1.png" alt="ChittorTech Android Application - op1" /> </figure>
                   <h4>Custom Android App Development</h4>
                   <p>We design and develop tailor-made Android applications that meet your business objectives, whether you are a startup, SME, or enterprise. Every app is built to match your brand identity and target audience.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="100">
                   <figure> <img src="/assets/images/op2.png" alt="ChittorTech Android Application - op2" /> </figure>
                   <h4>E-commerce App Development</h4>
                   <p>Mobile commerce is booming, and we provide feature-rich Android apps with secure payment gateways, shopping carts, product catalogs, and push notifications to boost customer engagement and sales.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="200">
                   <figure> <img src="/assets/images/op3.png" alt="ChittorTech Android Application - op3" /> </figure>
                   <h4>On-Demand App Solutions</h4>
                   <p>From food delivery to taxi booking and healthcare to fitness, we build on-demand Android applications that simplify everyday services and ensure seamless user experiences.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="300">
                   <figure> <img src="/assets/images/op4.png" alt="ChittorTech Android Application - op4" /> </figure>
                   <h4>Enterprise Mobility Solutions</h4>
                   <p>For large organizations, we develop powerful apps that streamline operations, improve employee collaboration, and enable secure access to data on the go.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="400">
                   <figure> <img src="/assets/images/op5.png" alt="ChittorTech Android Application - op5" /> </figure>
                   <h4>UI/UX Design</h4>
                   <p>A good app isn’t just about functionality—it’s about design too. Our creative design team focuses on intuitive, user-friendly interfaces that make apps visually appealing and easy to navigate.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/op6.png" alt="ChittorTech Android Application - op6" /> </figure>
                   <h4>App Maintenance and Support</h4>
                   <p>Technology evolves, and so do apps. We provide continuous support, performance monitoring, bug fixing, and regular updates to keep your Android app secure, fast, and reliable.</p>
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
                              <img src="/assets/images/img162.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start mobile-a">
                          <h2> Uses of Our Android   <span>App Development</span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li> <strong>   Business Visibility    </strong> Android apps help brands expand their digital presence, reaching millions of mobile users across India and globally.</li>

                              <li> <strong>  Customer Engagement </strong>  Features like push notifications, in-app chat, and personalized recommendations keep customers connected.</li>

                              <li> <strong>  Easier Transactions   </strong>  With secure payment gateways, customers can shop, subscribe, or book services conveniently.</li>

                              <li> <strong>  Brand Loyalty  </strong>  Regular updates and smooth experiences encourage repeat usage and strengthen brand trust.</li>

                              <li> <strong>  Lead Generation:  </strong>  Apps serve as a direct channel for promotions, offers, and lead conversion strategies.</li>

                              <li> <strong>  24/7 Accessibility   </strong> Unlike traditional businesses, apps allow customers to interact with your services anytime, anywhere.</li>

                              <li> <strong>  Deployment   </strong>  Publish to Google Play Store and ensure smooth go-live.</li>

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
                      <div className="heading-wrap text-start mobile-a">
                          <h2> How ChittorTech  <span> Serves Its Customers</span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li> <strong>   Requirement Gathering & Analysis</strong> We start with in-depth discussions to understand your vision, business model, and industry challenges before creating a customized app roadmap.</li>

                              <li> <strong>  Agile Development Methodology </strong>  Our team follows an agile approach, ensuring faster delivery cycles with flexibility to incorporate client feedback during development.</li>

                              <li> <strong>  Transparent Communication   </strong>  Regular updates, progress reports, and open communication channels ensure that clients are always in the loop.</li>

                              <li> <strong>  Scalable & Secure Solutions  </strong>  Every Android app is designed to grow with your business, handling increasing traffic while keeping data safe with top security practices.</li>

                              <li> <strong>  End-to-End Development  </strong>  From ideation and prototyping to development, testing, deployment, and maintenance, we handle the complete app lifecycle.</li>

                              <li> <strong>  Industry Expertise   </strong> With years of experience across domains such as retail, healthcare, education, finance, and logistics, we deliver solutions tailored to industry-specific needs.</li>

                           </ul>
                       </div>
                  </div>
                  <div className="col-md-6">
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img163.jpg" alt="Local & National SEO Expertise" />
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
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img164.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start mobile-a">
                          <h2>  Customer Satisfaction –  <span> Our Core Priority </span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li> <strong>User-Centered Approach:</strong> We build apps with the end-user in mind, ensuring smooth navigation, faster loading speeds, and engaging features.</li>

                              <li> <strong>  On-Time Delivery:  </strong>  Meeting deadlines without compromising quality is a commitment we live by.</li>

                              <li> <strong>  Continuous Support:   </strong>  Our relationship doesn’t end at deployment—we offer long-term maintenance, upgrades, and technical assistance.</li>

                              <li> <strong>  Client Involvement:  </strong>  We encourage regular feedback sessions, ensuring the final product aligns perfectly with client expectations.</li>

                              <li> <strong>  Proven Track Record:  </strong>   Repeat business and positive client testimonials reflect our dedication to delivering value-driven results.</li>


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
                        <h2>Let's Build Your Online Authority</h2>
                        <p>Ready to take your rankings and reputation to the next level? Contact ChittorTech today for a free SEO strategy consultation.</p>
                           <button className="cta-button" onClick={() => { window.location.href = "/contact-us"; }}>
Get Start
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
      <h2> FAQ – Android App Development Services at <span>ChittorTech</span> </h2>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="faq-section">
          <div className="accordion" id="faqAccordion">

            {/* FAQ 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Why is ChittorTech considered the best Android app development company in India?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  ChittorTech stands out because of its expertise in building custom, scalable, and secure Android applications for diverse industries. With a proven track record, innovative designs, and a client-first approach, we ensure that every app not only meets but exceeds expectations.
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  What industries do you serve with Android app development?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  We provide solutions for a wide range of industries including:<br />
                  • E-commerce & Retail – Shopping and delivery apps <br />
                  • Healthcare – Appointment booking and telemedicine apps <br />
                  • Education – E-learning platforms and school management apps <br />
                  • Finance & Banking – Secure payment and investment apps <br />
                  • Travel & Hospitality – Booking and tourism apps <br />
                  • On-Demand Services – Food delivery, cab booking, and more
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  What are the key benefits of using your Android app development services?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  • Boost business visibility and customer engagement <br />
                  • Deliver a smooth user experience with intuitive design <br />
                  • Enable secure transactions with multiple payment options <br />
                  • Provide 24/7 accessibility to customers <br />
                  • Enhance brand reputation with innovative features
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  How does ChittorTech ensure customer satisfaction?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  We follow a user-centered design approach, maintain transparent communication, and involve clients at every stage of development. Our focus on timely delivery, regular updates, and continuous support ensures long-term client satisfaction.
                </div>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  How long does it take to develop an Android app?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  The timeline depends on the complexity and features of the app:<br />
                  • Basic Apps: 4–6 weeks <br />
                  • Medium-Complexity Apps: 2–3 months <br />
                  • Advanced / Enterprise Apps: 3–6 months or more <br />
                  We follow agile development, so clients see progress in real-time.
                </div>
              </div>
            </div>

            {/* FAQ 6 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  Do you provide post-launch support and maintenance?
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Yes ✅. We offer end-to-end services, including app maintenance, bug fixes, performance monitoring, and upgrades to keep your app competitive in the market.
                </div>
              </div>
            </div>

            {/* FAQ 7 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                  How do you ensure app security and data protection?
                </button>
              </h2>
              <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  We implement latest security protocols, encryption methods, and GDPR-compliant practices to safeguard customer data. Regular security audits ensure apps remain reliable and risk-free.
                </div>
              </div>
            </div>

            {/* FAQ 8 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                  Can you customize apps according to my business requirements?
                </button>
              </h2>
              <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Absolutely! Every business is unique, and so are its digital needs. We specialize in custom Android app development where features, design, and functionality are tailored to match your business goals.
                </div>
              </div>
            </div>

            {/* FAQ 9 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingNine">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                  How cost-effective are your Android app development services?
                </button>
              </h2>
              <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Our pricing is flexible and competitive depending on the app’s complexity, features, and scope. We aim to deliver high ROI-driven solutions that add measurable value to your business.
                </div>
              </div>
            </div>

            {/* FAQ 10 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTen">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                  How do I get started with ChittorTech?
                </button>
              </h2>
              <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  It’s simple! Just reach out to us with your business idea. Our team will conduct a free consultation, understand your requirements, and create a customized roadmap for your Android app development journey.
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
