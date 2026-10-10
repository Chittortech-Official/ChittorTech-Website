"use client";
import React from "react";
import "../../../public/assets/css/premium-products.css";


export default function Page() {
  return (
    <>

      <style>{`
        /* ChittorTech Design System — Digital Marketing Page Overrides */
        body { font-family: 'Inter', 'Segoe UI', sans-serif !important; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Plus Jakarta Sans', 'Inter', sans-serif !important; }
        
        section { position: relative; }
        .pb-60 { padding-bottom: 60px; }
        .pt-60 { padding-top: 60px; }
        
        /* Section Heading Wrappers */
        .heading-wrap {
          text-align: center;
          margin-bottom: 40px;
        }
        .heading-wrap.text-start {
          text-align: left;
        }
        .heading-wrap h2 {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: #1e1b4b;
          line-height: 1.25;
          margin-bottom: 16px;
        }
        .heading-wrap h2 span {
          background: linear-gradient(135deg, #291fbc, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .heading-wrap p {
          font-size: 1.05rem;
          color: #64748b;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .heading-wrap.text-start p {
          margin-left: 0;
        }

        /* Solutions Holds Grid & Cards */
        .solutions-holds-box {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
          margin-top: 36px;
        }
        .holds-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 30px 26px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .holds-box:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(41, 31, 188, 0.12);
          border-color: rgba(41, 31, 188, 0.25);
        }
        .holds-box figure {
          width: 72px;
          height: 72px;
          border-radius: 16px;
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 0 22px 0;
          padding: 14px;
          border: 1px solid #bfdbfe;
        }
        .holds-box figure img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          height: auto;
        }
        .holds-box h3 {
          font-size: 1.25rem;
          font-weight: 800;
          color: #1e1b4b;
          margin-bottom: 16px;
          line-height: 1.35;
        }
        .holds-box h3 a {
          color: #1e1b4b !important;
          text-decoration: none !important;
          transition: color 0.2s ease;
        }
        .holds-box h3 a:hover {
          color: #291fbc !important;
        }
        .holds-box ul {
          list-style: none;
          padding: 0;
          margin: 0;
          flex-grow: 1;
        }
        .holds-box ul li {
          position: relative;
          padding-left: 24px;
          font-size: 0.93rem;
          color: #475569;
          margin-bottom: 10px;
          line-height: 1.6;
        }
        .holds-box ul li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 0;
          color: #3b82f6;
          font-weight: 900;
          font-size: 0.95rem;
        }

        /* Banner Card Section */
        .bridal-store-sec {
          margin: 30px 0 60px !important;
          position: relative !important;
        }
        .bridal-store {
          background: linear-gradient(135deg, #1e1b4b 0%, #291fbc 60%, #0e7490 100%) !important;
          padding: 48px 40px !important;
          border-radius: 24px !important;
          color: #ffffff !important;
          box-shadow: 0 20px 50px rgba(30, 27, 75, 0.25) !important;
          text-align: center !important;
          position: relative !important;
          overflow: hidden !important;
          border: 1px solid rgba(255,255,255,0.1) !important;
        }
        .bridal-store h2, .bridal-store-sec h2 {
          color: #ffffff !important;
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-size: clamp(1.35rem, 2.5vw, 1.85rem) !important;
          font-weight: 800 !important;
          margin-bottom: 22px !important;
          line-height: 1.4 !important;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2) !important;
        }
        .bridal-store p, .bridal-store-sec p {
          color: rgba(255, 255, 255, 0.92) !important;
          font-size: 1.02rem !important;
          line-height: 1.75 !important;
          max-width: 920px !important;
          margin: 0 auto 16px !important;
        }

        /* Enforce High Contrast Text Across All Sections */
        .heading-wrap h2 {
          color: #1e1b4b !important;
        }
        .heading-wrap p {
          color: #475569 !important;
        }
        .holds-box {
          background: #ffffff !important;
          border: 1px solid #e2e8f0 !important;
        }
        .holds-box h3, .holds-box h3 a {
          color: #1e1b4b !important;
        }
        .holds-box ul li {
          color: #334155 !important;
        }
        .marketing-services-box {
          background: #ffffff !important;
          border: 1px solid #e2e8f0 !important;
        }
        .marketing-services-box h3 {
          color: #1e1b4b !important;
        }
        .marketing-services-box p, .marketing-services-box ul li {
          color: #334155 !important;
        }
        .website-development-wrap h2, .website-development-wrap h4 {
          color: #1e1b4b !important;
        }
        .website-development-wrap p, .website-development-wrap ul li {
          color: #334155 !important;
        }
        .choose-box {
          background: #ffffff !important;
          border: 1px solid #e2e8f0 !important;
        }
        .choose-box p {
          color: #475569 !important;
        }
        .rank-card {
          background: #ffffff !important;
          border: 1px solid #e2e8f0 !important;
        }
        .rank-title {
          color: #1e1b4b !important;
        }
        .rank-content {
          color: #475569 !important;
        }
        .features-list ul li {
          background: #ffffff !important;
          border: 1px solid #e2e8f0 !important;
          color: #334155 !important;
        }
        .features-list ul li strong {
          color: #1e1b4b !important;
        }

        /* Marketing Services Boxes */
        .marketing-services-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 32px 28px;
          height: 100%;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          transition: all 0.3s ease;
        }
        .marketing-services-box:hover {
          box-shadow: 0 12px 30px rgba(41,31,188,0.08);
          border-color: #cbd5e1;
        }
        .marketing-services-box h3 {
          font-size: 1.25rem;
          font-weight: 800;
          color: #1e1b4b;
          margin-bottom: 16px;
          border-left: 4px solid #291fbc;
          padding-left: 14px;
          line-height: 1.35;
        }
        .marketing-services-box p {
          font-size: 0.98rem;
          color: #64748b;
          margin-bottom: 16px;
        }
        .marketing-services-box ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .marketing-services-box ul li {
          position: relative;
          padding-left: 26px;
          margin-bottom: 12px;
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.55;
        }
        .marketing-services-box ul li::before {
          content: "➔";
          position: absolute;
          left: 0;
          top: 1px;
          color: #291fbc;
          font-size: 0.9rem;
          font-weight: 700;
        }

        /* Website Development Section */
        .website-development-wrap h4 {
          font-size: 1.15rem;
          font-weight: 800;
          color: #291fbc;
          margin-top: 24px;
          margin-bottom: 8px;
        }
        .website-development-wrap p {
          color: #475569;
          font-size: 0.98rem;
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .website-development-wrap ul {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
        }
        .website-development-wrap ul li {
          position: relative;
          padding-left: 28px;
          margin-bottom: 12px;
          font-size: 0.98rem;
          font-weight: 600;
          color: #1e1b4b;
        }
        .website-development-wrap ul li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 0;
          color: #06b6d4;
          font-weight: 900;
          font-size: 1.1rem;
        }
        .website-development-img figure img {
          border-radius: 20px;
          width: 100%;
          height: auto;
          box-shadow: 0 16px 40px rgba(0,0,0,0.1);
          border: 1px solid #e2e8f0;
        }

        /* Timeline / Choose Boxes */
        .choose-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px 20px;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px rgba(0,0,0,0.03);
          height: 100%;
        }
        .choose-box:hover {
          transform: translateY(-5px);
          border-color: #3b82f6;
          box-shadow: 0 16px 32px rgba(59, 130, 246, 0.12);
        }
        .choose-box h5 {
          font-size: 1.4rem;
          font-weight: 900;
          background: linear-gradient(135deg, #291fbc, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 8px;
        }
        .choose-box p {
          font-size: 0.92rem;
          color: #64748b;
          margin: 0;
          font-weight: 600;
          line-height: 1.5;
        }

        /* Ranking / Process Work Cards */
        .ranking-section {
          padding: 60px 0;
          background: #f8fafc;
          border-radius: 24px;
          margin: 40px 0;
        }
        .rank-card-box {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          margin-top: 32px;
        }
        .rank-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 26px 22px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(0,0,0,0.03);
        }
        .rank-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(41,31,188,0.1);
        }
        .rank-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #1e1b4b;
          margin-bottom: 10px;
        }
        .rank-content {
          font-size: 0.92rem;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        /* Overview Features Grid */
        .features-list ul {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 18px;
          list-style: none;
          padding: 0;
          margin-top: 30px;
        }
        .features-list ul li {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 20px 22px;
          color: #475569;
          font-size: 0.93rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
          transition: all 0.25s ease;
        }
        .features-list ul li:hover {
          border-color: #3b82f6;
          transform: translateY(-2px);
        }
        .features-list ul li strong {
          color: #1e1b4b;
          font-size: 1rem;
          display: block;
          margin-bottom: 4px;
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
                <i className={`fa-solid fa-bullhorn`}></i> Digital Marketing
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Digital Marketing Agency in Chittorgarh & SEO Services
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Full-spectrum digital marketing and ROI-driven SEO services. Google Ads PPC, social media management, organic search ranking, and lead generation that drives revenue.
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
                <i className={`fa-solid fa-bullhorn`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Holds section start here */}
      <section className="solutions-holds-sec pb-60 pt-60">
           <div className="container">
               <div className="row">
                   <div className="col-md-12">
                       <div className="heading-wrap">
                         <h2>Best Digital Marketing <span>Services in India</span></h2>
                         <p>At ChittorTech, our digital marketing services are designed to increase brand visibility, generate qualified leads, and deliver measurable results. Using data-driven strategies and industry-proven tactics, we help businesses achieve maximum ROI across multiple channels.</p>
                       </div>
                       <div className="solutions-holds-box">
                          <div className="holds-box">
                             <figure> <img src="/assets/images/sv1.png" alt="Search Engine Optimization" /> </figure>
                             <h3>
                               <a href="/search-engine-optimization">
                                 Search Engine Optimization (SEO)
                               </a>
                             </h3>
                             <ul>
                                 <li>Improve search engine rankings and drive high-quality organic traffic</li>
                                 <li>Comprehensive on-page & off-page optimization</li>
                                 <li>Local SEO for targeted geographic markets</li>
                                 <li>eCommerce SEO to boost online store visibility</li>
                                 <li>Technical SEO to ensure website performance, speed, and crawlability</li>
                                 <li>Keyword research, competitor analysis, and content optimization</li>
                             </ul>
                          </div>
                          <div className="holds-box">
                             <figure> <img src="/assets/images/sv2.png" alt="Pay-Per-Click Advertising" /> </figure>
                             <h3>Pay-Per-Click Advertising (PPC)</h3>
                             <ul>
                                 <li>Google Ads, Bing Ads, and Display Advertising campaigns</li>
                                 <li>Targeted campaigns to generate leads and sales quickly</li>
                                 <li>Continuous performance tracking and ROI optimization</li>
                                 <li>Retargeting campaigns to recapture interested users</li>
                                 <li>Ad copywriting, A/B testing, and landing page optimization</li>
                             </ul>
                          </div>
                          <div className="holds-box">
                             <figure> <img src="/assets/images/sv3.png" alt="Social Media Marketing" /> </figure>
                             <h3>
                               <a href="/social-media-optimization">
                                 Social Media Marketing (SMM)
                               </a>
                             </h3>
                             <ul>
                                 <li>Campaigns on Facebook, Instagram, LinkedIn, Twitter, and YouTube</li>
                                 <li>Social media content creation, engagement, and management</li>
                                 <li>Paid social advertising to increase reach and generate leads</li>
                                 <li>Community building and follower growth strategies</li>
                                 <li>Analytics-driven insights to optimize campaigns continuously</li>
                             </ul>
                          </div>
                          <div className="holds-box">
                             <figure> <img src="/assets/images/sv4.png" alt="Reputation Management" /> </figure>
                             <h3>Reputation Management</h3>
                             <ul>
                                 <li>Monitor online brand mentions and manage reviews</li>
                                 <li>Handle negative feedback and crisis management effectively</li>
                                 <li>Build a strong, positive brand image across platforms</li>
                                 <li>Develop PR strategies to enhance credibility and trust</li>
                                 <li>Track online reputation metrics and maintain transparency</li>
                             </ul>
                          </div>
                          <div className="holds-box">
                             <figure> <img src="/assets/images/sv5.png" alt="Web Design & Development" /> </figure>
                             <h3>
                               <a href="/web-development-services">
                                 Web Design & Development
                               </a>
                             </h3>
                             <ul>
                                 <li>Fully responsive websites for desktop, tablet, and mobile</li>
                                 <li>Custom eCommerce, corporate, and portfolio websites</li>
                                 <li>UX/UI optimization for better engagement and conversions</li>
                                 <li>Website performance enhancements, speed optimization, and security</li>
                                 <li>Integration with third-party tools and platforms</li>
                             </ul>
                          </div>
                          <div className="holds-box">
                             <figure> <img src="/assets/images/sv6.png" alt="App Development" /> </figure>
                             <h3>App Development</h3>
                             <ul>
                                 <li>iOS & Android mobile app development</li>
                                 <li>Custom app solutions tailored to business needs</li>
                                 <li>App store optimization (ASO) to improve downloads and visibility</li>
                                 <li>UX/UI design for seamless app experience</li>
                                 <li>Integration of analytics, push notifications, and in-app features</li>
                             </ul>
                          </div>
                          <div className="holds-box">
                             <figure> <img src="/assets/images/sv7.png" alt="Content Marketing" /> </figure>
                             <h3>Content Marketing</h3>
                             <ul>
                                 <li>Blog writing, articles, and guest posting</li>
                                 <li>Backlink building and authority content strategies</li>
                                 <li>Video content creation, infographics, and interactive media</li>
                                 <li>Social media content for brand storytelling and engagement</li>
                                 <li>SEO-driven content to drive organic traffic and leads</li>
                             </ul>
                          </div>
                          <div className="holds-box">
                             <figure> <img src="/assets/images/sv8.png" alt="Email Marketing" /> </figure>
                             <h3>Email Marketing</h3>
                             <ul>
                                 <li>Personalized email campaigns to nurture leads</li>
                                 <li>Automated workflows for better engagement</li>
                                 <li>Segmentation and targeting for maximum impact</li>
                                 <li>Analytics-driven optimization to improve open rates and conversions</li>
                                 <li>Newsletter creation and drip campaigns for customer retention</li>
                             </ul>
                          </div>
                          <div className="holds-box">
                             <figure> <img src="/assets/images/sv9.png" alt="White Label SEO Reseller Program" /> </figure>
                             <h3>White Label SEO Reseller Program</h3>
                             <ul>
                                 <li>Partner with us and resell premium SEO services</li>
                                 <li>Ready-to-use marketing packages for quick client onboarding</li>
                                 <li>Full support, reporting, and training for reseller partners</li>
                                 <li>Help your agency expand services without additional infrastructure</li>
                                 <li>Increase revenue while maintaining service quality</li>
                             </ul>
                          </div>
                          <div className="holds-box">
                             <figure> <img src="/assets/images/sv10.png" alt="Additional Services We Offer" /> </figure>
                             <h3>Additional Services We Offer</h3>
                             <ul>
                                 <li>Conversion Rate Optimization (CRO): Increase sales & leads from existing traffic</li>
                                 <li>Video Marketing: Promotional, explainer, and social media videos</li>
                                 <li>Analytics & Reporting: Track performance across all campaigns</li>
                                 <li>Affiliate Marketing: Build partnerships to drive traffic and revenue</li>
                                 <li>E-commerce Marketing: Optimize online stores for maximum sales</li>
                                 <li>Influencer Marketing: Collaborate with influencers to expand brand reach</li>
                             </ul>
                          </div>
                       </div>
                   </div>
               </div>
           </div>
      </section>
      {/* Solutions Holds section end here */}


      <section className="bridal-store-sec company-logo-sec  pb-60">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                   <div className="bridal-store">
                      <h2>With ChittorTech, you get a full suite of digital marketing services tailored to your business needs, ensuring measurable growth, enhanced brand visibility, and maximum ROI.</h2>
                      <p> We craft custom digital marketing strategies tailored to your business goals—whether it’s driving more sales, increasing leads, or building brand awareness. Did you know that 90% of people searching online haven’t decided on a brand yet? With ChittorTech, you can capture their attention and convert them into loyal customers.</p>

                      <p>Our results speak for themselves: we’ve generated millions of leads, thousands of calls, and helped businesses in over 28 countries grow their revenue. Every strategy is unique, designed after understanding your business needs and goals to deliver maximum results efficiently.</p>

                      <p>Partner with ChittorTech, India’s best digital marketing company, to grow your business, boost sales, and enhance brand awareness. Let’s take your online presence to the next level.</p>
                   </div>
                 </div>
             </div>
         </div>
      </section>

      {/* Our Digital Marketing Services section start here */}
      <section className="marketing-services-sec pb-60">
           <div className="container">
               <div className="row">
                   <div className="col-md-12">
                       <div className="heading-wrap">
                         <h2>Our Proven Track Record as the Leading Digital   <span>Marketing Agency in India</span> </h2>
                         <p>Discover how ChittorTech, the best digital marketing company in India, has helped businesses achieve their digital marketing goals through successful case studies. From increasing online visibility to boosting sales, leads, and revenue, we deliver measurable results across diverse industries. Read on to see how we can help grow your business.</p>
                       </div>
                       <div className="row">
                          <div className="col-md-6">
                             <div className="marketing-services-box">
                                 <h3> Why Your Business Needs Digital Marketing Services</h3>
                                 <p>Businesses benefit from digital marketing services through:</p>
                                 <ul>
                                    <li>Wider reach and audience engagement</li>
                                    <li>Data-driven strategies for growth</li>
                                    <li>Competitive advantage in your industry</li>
                                    <li>Measurable progress and analytics</li>
                                    <li>Improved customer interactions</li>
                                 </ul>
                             </div>
                          </div>
                          <div className="col-md-6">
                             <div className="marketing-services-box">
                                 <h3>If you haven’t partnered with the best performance marketing agency, you might be missing out on:</h3>
                                 <ul>
                                    <li>Potential customers</li>
                                    <li>Broader business reach and engagement</li>
                                    <li>Staying ahead of competitors</li>
                                    <li>Actionable, result-driven marketing plans</li>
                                    <li>Higher conversions and sales</li>
                                    <li>Expert guidance in digital strategy</li>
                                 </ul>
                             </div>
                          </div>
                       </div>
                   </div>
               </div>
           </div>
      </section>
      {/* Our Digital Marketing Services section end here */}

      <section className="website-development-sec pb-60">
         <div className="container">
             <div className="row align-items-center">
                 <div className="col-md-6">
                     <div className="website-development-wrap">
                         <div className="heading-wrap text-start">
                           <h2>Achieve Your Business Goals with Our Strategic  <span> Digital Marketing Solutions </span> </h2>
                        </div>
                        <p>At ChittorTech, our services are designed to help you achieve your business goals efficiently. We have partnered with leading industry clients to maximize their digital marketing ROI. Our successful case studies and client testimonials validate us as a top digital marketing company in India.</p>
                        <h4>1. Focus on Quality Leads</h4>
                        <p>As the best digital marketing company in India, we prioritize generating high-quality leads. Our data-driven strategies and analytics ensure your campaigns reach the right audience. We start with an in-depth analysis of your business and target market, then design tailored campaigns to capture attention and convert leads into loyal customers.</p>
                        <p>What sets ChittorTech apart is our unwavering focus on delivering quality leads, sales, and growth.</p>
                        <h4>2. rusted by Corporate Partners</h4>
                        <p>As a leading performance marketing agency, we have proudly served 12,000+ clients across multiple industries. Our experience spans companies of all sizes, giving us unique insights into diverse market conditions. Some of our major clients include:</p>
                     </div>
                 </div>
                 <div className="col-md-6">
                    <div className="website-development-img">
                       <figure> <img src="/assets/images/img109.jpg" alt="ChittorTech Digital Marketing Services - img109" /> </figure>
                    </div>
                 </div>
             </div>
         </div>
      </section>

      <section className="bridal-store-sec company-logo-sec  pb-60">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                   <div className="bridal-store">
                      <h2>How Our Digital Services Transform Your Marketing Approach</h2>
                      <p>At ChittorTech, we keep things straightforward. Our innovative and effective marketing strategies have earned us a reputation as a trustworthy digital marketing agency in India. Since 2010, we have helped startups and small businesses establish themselves as strong brands. Over the years, our approach has evolved to incorporate cutting-edge tools, AI-driven reporting, and result-oriented processes.</p>
                   </div>
                 </div>
             </div>
         </div>
      </section>


      <section className="chittortech-sec pb-60">
         <div className="container">
            <div className="row">
                <div className="col-md-12">
                   <div className="heading-wrap">
                      <h2>Digital Marketing Services  <span>Timeline (2010–2025)</span> </h2>
                   </div>
                   <div className="choose-section">
                   <div className="row g-3">
                     <div className="col-md-4">
                       <div className="choose-box">
                         <h5>2010</h5>
                         <p>Define objectives and goals</p>
                       </div>
                     </div>
                     <div className="col-md-4">
                       <div className="choose-box">
                         <h5>2012</h5>
                         <p>Analyze audience behavior</p>
                       </div>
                     </div>
                     <div className="col-md-4">
                       <div className="choose-box">
                         <h5>2015</h5>
                         <p>Create tailored strategies</p>
                       </div>
                     </div>
                     <div className="col-md-4">
                       <div className="choose-box">
                         <h5>2018</h5>
                         <p>Execute and optimize campaigns</p>
                       </div>
                     </div>
                     <div className="col-md-4">
                       <div className="choose-box">
                         <h5>2020</h5>
                         <p>Monitor and refine performance</p>
                       </div>
                     </div>
                     <div className="col-md-4">
                       <div className="choose-box">
                         <h5>2023</h5>
                         <p>AI-based reporting & automation</p>
                       </div>
                     </div>
                     <div className="col-md-4">
                       <div className="choose-box">
                         <h5>2025</h5>
                         <p>Track results, adjust strategies, and maximize ROI</p>
                       </div>
                     </div>
                   </div>
                 </div>
                </div>
            </div>
         </div>
      </section>

      <section className="bridal-store-sec company-logo-sec  pb-60">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                   <div className="bridal-store">
                      <h2>Looking for the Best Digital Marketing Agency to Boost Your Revenue?</h2>
                      <p>Enhance your revenue and grow your business with ChittorTech. Get in touch with our digital marketing specialists today for a free proposal.</p>
                   </div>
                 </div>
             </div>
         </div>
      </section>

      <section className="ranking-section">
        <div className="container">
           <div className="row">
               <div className="col-md-12">
                  <div className="heading-wrap">
                      <h2>Grow With Our Easy   <span>Work Process</span> </h2>
                      <p>Our process is simple, yet highly effective. With ChittorTech, even complex marketing challenges are handled efficiently through our laser-focused work approach:</p>
                  </div>
                  <div className="row">
                     <div className="col-md-12">
                      <div className="rank-card-box">
                      <div className="rank-card">
                        <div className="d-flex">
                          <div>
                            <div className="rank-title"> Understanding Project Requirements</div>
                          </div>
                        </div>
                        <p className="rank-content">We discuss your project goals, market conditions, competitors, and current status to fully understand your business needs.</p>
                      </div>

                      {/* Rank 2 */}
                      <div className="rank-card">
                        <div className="d-flex">
                          <div className="rank-title"> Setting Up a Tailored Plan</div>
                        </div>
                        <p className="rank-content">Based on our discussion, we prepare a customized digital marketing plan aligned with your objectives.</p>
                      </div>

                      {/* Rank 3 */}
                      <div className="rank-card">
                        <div className="d-flex">
                          <div className="rank-title">Starting the Process</div>
                        </div>
                        <p className="rank-content">We execute the plan, optimize campaigns, and provide regular updates on progress and performance.</p>
                      </div>

                      {/* Rank 4 */}
                      <div className="rank-card">
                        <div className="d-flex">
                          <div className="rank-title">Delivering Results</div>
                        </div>
                        <p className="rank-content">We implement all necessary measures to ensure you achieve your desired outcomes.</p>
                      </div>
                   </div>
                   </div>
                  </div>
               </div>
           </div>
        </div>
      </section>

      <section className="overview-section pb-60">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="heading-wrap">
                         <h2>Our Digital Marketing  <span>Services</span> </h2>
                         <p>
                           Our services are designed to increase brand visibility, generate qualified leads, and deliver measurable results with data-driven strategies for maximum ROI. We offer:
                         </p>
                     </div>
                     <div className="features-list">
                        <ul>
                            <li><strong>Search Engine Optimization (SEO):</strong> <br /> Improve rankings & traffic</li>
                            <li><strong>Pay-Per-Click (PPC):</strong><br /> Drive quick sales</li>
                            <li><strong>Social Media Marketing (SMM):</strong><br /> Enhance engagement</li>
                            <li><strong>Reputation Management:</strong> <br />Build and maintain brand reputation</li>
                            <li><strong>Web Design & Development:</strong><br /> Create responsive websites</li>
                            <li><strong>App Development:</strong><br /> Build mobile applications</li>
                            <li><strong>Content Marketing:</strong><br /> Create valuable content & backlinks</li>
                            <li><strong>White Label SEO Reseller:</strong><br /> Become a partner reseller</li>
                        </ul>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      <section className="website-development-sec pb-60">
         <div className="container">
             <div className="row align-items-center">
                 <div className="col-md-6">
                     <div className="website-development-wrap">
                         <div className="heading-wrap text-start">
                           <h2>Speed Up Your Digital Growth with    <span>ChittorTech</span> </h2>
                           <p>As a leading digital marketing company in India, we focus on delivering customized, innovative solutions to drive measurable growth. We don’t rely on generic strategies—our plans are tailored to help clients reach their specific goals. With ChittorTech, you gain:</p>
                        </div>
                        <ul>
                            <li>Personalized Digital Marketing Techniques</li>
                            <li>Data-Driven, ROI-Focused Strategies</li>
                            <li>Proven Results Across Multiple Industries</li>
                            <li>Reliable and Dedicated Customer Support</li>
                        </ul>
                        <p>Partner with <b>ChittorTech</b> and accelerate your business growth today.</p>
                     </div>
                 </div>
                 <div className="col-md-6">
                    <div className="website-development-img">
                       <figure> <img src="/assets/images/website.jpg" alt="ChittorTech Digital Marketing Services - website" /> </figure>
                    </div>
                 </div>
             </div>
         </div>
      </section>
    </>
  );
}
