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
                <i className={`fa-solid fa-user-check`}></i> BGV Services
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Employee Background Verification
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Digital BGV solutions — document verification, references, and compliance checks.
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
                <i className={`fa-solid fa-user-check`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* header */}
        
{/* header */}
<section className="seo-services-sec manufacturers-sec">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-6">
            <div className="seo-services">
               <div className="heading-wrap text-start">
                  <h2>Best AI & IT Solutions for Employee Background Verification Services <span>in India .</span></h2>
                  <p>In today’s competitive business landscape, employee trust and credibility play a critical role in organizational success. Companies across industries are realizing that hiring the right talent is not just about qualifications and skills, but also about integrity, past behavior, and professional authenticity. This is where employee background verification (BGV) services become a necessity for HR departments, recruitment agencies, and corporates.</p>
                  <p>The process of verifying an employee’s history, educational qualifications, work experience, criminal record, financial background, and identity can be time-consuming and complex without the right technology. Manual checks often lead to delays, errors, and even compliance risks.</p>
                  <p>To streamline this, <strong>ChittorTech</strong> offers the Best AI & IT Solutions for Employee Background Verification Services in India, helping organizations and verification agencies digitize, automate, and accelerate the entire BGV process while ensuring compliance, accuracy, and efficiency.</p>
               </div>
            </div>
         </div>
         <div className="col-md-6">
            <div className="seo-services-img manufacturers-img">
               <figure>
                  <img src="/assets/images/img296.jpg" alt="Employee Background Verification AI & IT Solutions" />
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>


<section className="why-choose-sec bridal-sec">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-5">
            <div className="expertise-img text-start">
               <figure>
                  <img src="/assets/images/img297.jpg" alt="Employee Background Verification AI & IT Solutions" />
               </figure>
            </div>
         </div>
         <div className="col-md-7">
            <div className="heading-wrap text-start">
               <h2>Why <span>Employee Background Verification Services</span> Need AI & IT Solutions?</h2>
               <p>Employee background verification companies and HR teams face a unique set of challenges that demand automation and a centralized system.</p>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li><strong>High Volume of Requests</strong> – Hundreds or thousands of verification cases need to be processed simultaneously.</li>
                  <li><strong>Multiple Verification Parameters</strong> – Identity, criminal records, credit checks, education, employment history, references, and more.</li>
                  <li><strong>Third-Party Integrations</strong> – Interaction with government portals, universities, previous employers, and credit bureaus.</li>
                  <li><strong>Data Security & Compliance</strong> – Sensitive employee information must be handled with strict confidentiality.</li>
                  <li><strong>Time Sensitivity</strong> – Organizations want quick results to avoid delays in recruitment.</li>
                  <li><strong>Scalability Needs</strong> – As companies grow, BGV providers must scale operations without compromising accuracy.</li>
               </ul>
               <p>A dedicated AI & IT Solutions solution tailored for background verification ensures smooth end-to-end operations — from data collection to final reporting.</p>
            </div>
         </div>
      </div>
   </div>
</section>



<section className="manufacturing-key section-bg pt-60">
   <div className="container">
      <div className="heading-wrap">
         <h2>Key Features of <span>Chittortech AI & IT Solutions for Employee Background Verification</span></h2>
         <p>Our AI & IT Solutions has been designed with employee background verification agencies, HR outsourcing firms, and large corporates in mind. It enables them to manage the complete verification cycle with automation, transparency, and efficiency.</p>
      </div>
      <div className="row justify-content-center gy-4">

         {/* 1. Case Management System */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Case Management System</h3>
               <ul>
                  <li>Centralized dashboard for all verification requests</li>
                  <li>Assign cases automatically to verification officers</li>
                  <li>Track progress in real-time</li>
               </ul>
            </div>
         </div>

         {/* 2. Document Management & Validation */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Document Management &amp; Validation</h3>
               <ul>
                  <li>Securely store applicant documents (ID proof, certificates, experience letters, etc.)</li>
                  <li>Automated OCR & AI-based document verification</li>
                  <li>Reduce the risk of forged or falsified documents</li>
               </ul>
            </div>
         </div>

         {/* 3. Multi-Parameter Verification */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Multi-Parameter Verification</h3>
               <ul>
                  <li>Criminal record checks through integrated government databases</li>
                  <li>Education and degree verification from universities</li>
                  <li>Employment history confirmation with previous organizations</li>
                  <li>Credit score and financial checks via bureau integrations</li>
                  <li>Address & reference verification modules</li>
               </ul>
            </div>
         </div>

         {/* 4. Automated Workflows */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Automated Workflows</h3>
               <ul>
                  <li>Pre-defined workflows for different verification types</li>
                  <li>Reduce manual intervention and accelerate TAT (Turn-Around Time)</li>
               </ul>
            </div>
         </div>

         {/* 5. Integration Capabilities */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Integration Capabilities</h3>
               <ul>
                  <li>APIs to connect with third-party databases, government registries, and financial institutions</li>
                  <li>Seamless HRMS integration for corporates</li>
               </ul>
            </div>
         </div>

         {/* 6. Compliance & Security */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Compliance &amp; Security</h3>
               <ul>
                  <li>GDPR, ISO, and Indian IT Act compliant data handling</li>
                  <li>End-to-end encryption for sensitive employee records</li>
               </ul>
            </div>
         </div>

         {/* 7. Real-Time Reporting */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Real-Time Reporting</h3>
               <ul>
                  <li>Generate detailed verification reports instantly</li>
                  <li>Customizable formats for corporates and agencies</li>
                  <li>Analytics dashboard for performance and fraud detection trends</li>
               </ul>
            </div>
         </div>

         {/* 8. Scalable & Cloud-Based */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Scalable &amp; Cloud-Based</h3>
               <ul>
                  <li>Suitable for both small verification agencies and large enterprises</li>
                  <li>Cloud hosting ensures accessibility anytime, anywhere</li>
               </ul>
            </div>
         </div>

      </div>
   </div>
</section>



<section className="choose-chittortech-sec core-features-sec textile-manufacturers-sec">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div className="heading-wrap">
               <h2>Benefits of <span>Chittortech AI & IT Solutions for Employee Background Verification</span></h2>
            </div>
            <div className="why-choose-grid textile-manufacturers-wrap">
               <div className="grid-item">
                  <figure><img src="/assets/images/ma1.png" alt="Faster Verification Process" /></figure>
                  <h3>Faster Verification Process</h3>
                  <p>Reduce case completion times by up to 50%.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma2.png" alt="Improved Accuracy" /></figure>
                  <h3>Improved Accuracy</h3>
                  <p>Automated checks minimize errors and fraud risks.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma3.png" alt="Higher Client Satisfaction" /></figure>
                  <h3>Higher Client Satisfaction</h3>
                  <p>Deliver timely and transparent verification reports.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma4.png" alt="Scalability" /></figure>
                  <h3>Scalability</h3>
                  <p>Handle 10 to 10,000+ cases with equal efficiency.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma5.png" alt="Enhanced Security" /></figure>
                  <h3>Enhanced Security</h3>
                  <p>Protect sensitive candidate data with robust encryption.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma6.png" alt="Cost Reduction & Regulatory Compliance" /></figure>
                  <h3>Cost Reduction & Regulatory Compliance</h3>
                  <p>Cut down manual labor and operational costs; stay compliant with local and global standards.</p>
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
               <h2>Why Choose <span>ChittorTech?</span></h2>
               <ul>
                  <li><strong>Expertise in Industry-Specific AI & IT Solutions –</strong> Our AI & IT Solutions is tailored for verification companies and HR teams.</li>
                  <li><strong>Proven Results –</strong> Trusted by agencies and corporates in India for reliable background checks.</li>
                  <li><strong>Customization Options –</strong> Adaptable to the unique needs of each business.</li>
                  <li><strong>End-to-End Support –</strong> From implementation to training and ongoing support.</li>
                  <li><strong>Local Presence –</strong> Serving clients across Delhi NCR, Jaipur, and pan-India with strong regional expertise.</li>
               </ul>
            </div>
         </div>
         <div className="col-md-5">
            <div className="clothing-stores-img text-end">
               <figure>
                  <img src="/assets/images/industry1.png" alt="Employee Background Verification AI & IT Solutions Solutions" />
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>

<section className="clothing-stores-sec software-sec">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-7 order-md-2">
            <div className="clothing-stores-text software-wrap specialized-box">
               <h4>Use Cases of <span>AI & IT Solutions in Employee Background Verification</span></h4>
               <ul>
                  <li><strong>Recruitment Agencies –</strong> Speed up onboarding for clients by automating BGV.</li>
                  <li><strong>Corporate HR Departments –</strong> Ensure new hires are vetted quickly and securely.</li>
                  <li><strong>BGV Service Providers –</strong> Manage large-scale verification requests with minimal manpower.</li>
                  <li><strong>Financial Institutions –</strong> Verify employee and borrower credentials.</li>
                  <li><strong>Educational Institutions –</strong> Authenticate student and faculty credentials.</li>
               </ul>
            </div>
         </div>
         <div className="col-md-5 order-md-1">
            <div className="clothing-stores-img text-end">
               <figure>
                  <img src="/assets/images/industry1.png" alt="Employee Background Verification AI & IT Solutions Use Cases" />
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>
    </>
  );
}
