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
                <i className={`fa-solid fa-hospital`}></i> Hospital AI & IT Solutions
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Hospital Management Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Patient records, billing, pharmacy, and inventory management for healthcare.
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
                <i className={`fa-solid fa-hospital`}></i>
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
                  <h2>Best AI & IT Solutions for Hospitals <span>in India .</span></h2>
                  <p>In today’s fast-paced and technology-driven healthcare sector, hospitals are under constant pressure to deliver high-quality patient care, manage operational efficiency, comply with strict medical regulations, and maintain transparency in billing and administration. With growing patient demands, complex medical records, and large healthcare teams, hospitals require a robust AI & IT Solutions (Enterprise Resource Planning) software to streamline processes and ensure smooth day-to-day operations.</p>
                  <p><strong>ChittorTech</strong> provides the Best AI & IT Solutions for Hospitals in India, designed specifically for healthcare institutions. Our AI & IT Solutions solution empowers hospitals to integrate departments, automate workflows, enhance patient experiences, and make informed decisions with real-time insights.</p>
               </div>
            </div>
         </div>
         <div className="col-md-6">
            <div className="seo-services-img manufacturers-img">
               <figure>
                  <img src="/assets/images/img298.jpg" alt="Hospital AI & IT Solutions Solutions" />
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
                  <img src="/assets/images/img299.jpg" alt="Hospital AI & IT Solutions Solutions" />
               </figure>
            </div>
         </div>
         <div className="col-md-7">
            <div className="heading-wrap text-start">
               <h2>Why <span>Hospitals Need AI & IT Solutions</span></h2>
               <p>Running a hospital involves managing multiple critical aspects simultaneously. Without a centralized system, errors, delays, and inefficiencies can directly affect patient care. Hospitals in India face challenges such as:</p>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li><strong>Patient Records Management</strong> – Storing and accessing electronic health records (EHR) securely and quickly.</li>
                  <li><strong>Billing & Insurance</strong> – Ensuring transparent billing while handling insurance claims and reimbursements.</li>
                  <li><strong>Pharmacy & Inventory</strong> – Managing medicines, consumables, and critical equipment without stockouts.</li>
                  <li><strong>Doctor & Staff Scheduling</strong> – Optimizing duty rosters and ensuring availability of specialists.</li>
                  <li><strong>Regulatory Compliance</strong> – Adhering to NABH, JCI, HIPAA, and government healthcare standards.</li>
                  <li><strong>Operational Efficiency</strong> – Reducing manual paperwork and avoiding miscommunication across departments.</li>
               </ul>
               <p>A hospital AI & IT Solutions bridges these gaps by bringing administration, clinical, and financial operations onto one unified platform.</p>
            </div>
         </div>
      </div>
   </div>
</section>



<section className="manufacturing-key section-bg pt-60">
   <div className="container">
      <div className="heading-wrap">
         <h2>Key Features of <span>Chittortech AI & IT Solutions for Hospitals</span></h2>
         <p>Our AI & IT Solutions solution is tailored for hospitals, clinics, and multi-specialty healthcare institutions. Some of the most impactful features include:</p>
      </div>
      <div className="row justify-content-center gy-4">

         {/* 1. Patient Management System */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Patient Management System</h3>
               <ul>
                  <li>Digital patient registration & admission</li>
                  <li>Centralized access to patient history, medical reports, and treatment plans</li>
                  <li>Quick OPD/IPD (Outpatient & Inpatient) management</li>
               </ul>
            </div>
         </div>

         {/* 2. Electronic Medical Records (EMR / EHR) */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Electronic Medical Records (EMR / EHR)</h3>
               <ul>
                  <li>Secure cloud-based storage of medical data</li>
                  <li>Easy retrieval for doctors, nurses, and lab staff</li>
                  <li>HIPAA-compliant data security</li>
               </ul>
            </div>
         </div>

         {/* 3. Billing & Financial Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Billing &amp; Financial Management</h3>
               <ul>
                  <li>Automated and transparent billing</li>
                  <li>Multi-mode payment support (cash, card, insurance, online)</li>
                  <li>Integration with insurance providers for claim settlements</li>
               </ul>
            </div>
         </div>

         {/* 4. Pharmacy & Inventory Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Pharmacy &amp; Inventory Management</h3>
               <ul>
                  <li>Real-time tracking of medicines and consumables</li>
                  <li>Expiry-date tracking to avoid wastage</li>
                  <li>Automated stock alerts and purchase orders</li>
               </ul>
            </div>
         </div>

         {/* 5. Doctor & Staff Scheduling */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Doctor &amp; Staff Scheduling</h3>
               <ul>
                  <li>Shift planning and duty rosters</li>
                  <li>Automatic notifications to doctors and staff</li>
                  <li>Easy coordination between departments</li>
               </ul>
            </div>
         </div>

         {/* 6. Laboratory & Radiology Integration */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Laboratory &amp; Radiology Integration</h3>
               <ul>
                  <li>Automated lab test requests and report generation</li>
                  <li>Digital sharing of diagnostic results with doctors and patients</li>
               </ul>
            </div>
         </div>

         {/* 7. Operation Theatre (OT) Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Operation Theatre (OT) Management</h3>
               <ul>
                  <li>Scheduling and tracking surgeries</li>
                  <li>Resource allocation (equipment, staff, and rooms)</li>
                  <li>Post-surgery records and reports</li>
               </ul>
            </div>
         </div>

         {/* 8. Compliance & Regulatory Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Compliance &amp; Regulatory Management</h3>
               <ul>
                  <li>NABH/JCI documentation support</li>
                  <li>Complete audit trail of activities</li>
                  <li>Data security aligned with global healthcare standards</li>
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
               <h2>Benefits of <span>Choosing Chittortech AI & IT Solutions for Hospitals</span></h2>
            </div>
            <div className="why-choose-grid textile-manufacturers-wrap">
               <div className="grid-item">
                  <figure><img src="/assets/images/ma1.png" alt="Improved Patient Care" /></figure>
                  <h3>Improved Patient Care</h3>
                  <p>Doctors and nurses get instant access to complete patient data, ensuring accurate diagnosis and treatment.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma2.png" alt="Transparency in Billing" /></figure>
                  <h3>Transparency in Billing</h3>
                  <p>No hidden charges; patients and their families can trust the billing system.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma3.png" alt="Operational Efficiency" /></figure>
                  <h3>Operational Efficiency</h3>
                  <p>Automation reduces paperwork and manual intervention.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma4.png" alt="Resource Optimization" /></figure>
                  <h3>Resource Optimization</h3>
                  <p>Better staff utilization and cost control.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma5.png" alt="Scalability" /></figure>
                  <h3>Scalability</h3>
                  <p>Suitable for small clinics, multi-specialty hospitals, and large healthcare chains.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma6.png" alt="Data-Driven Insights & Enhanced Patient Experience" /></figure>
                  <h3>Data-Driven Insights & Enhanced Patient Experience</h3>
                  <p>Real-time dashboards and reports for better decision-making; faster services, reduced waiting times, and seamless hospital journeys.</p>
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
               <h4>Why Choose <span>ChittorTech?</span></h4>
               <ul>
                  <li><strong>Specialized in Healthcare AI & IT Solutions Solutions –</strong> Years of experience serving hospitals in India.</li>
                  <li><strong>Trusted by Healthcare Leaders –</strong> Proven success with hospitals and clinics of all sizes.</li>
                  <li><strong>Customization for Every Hospital –</strong> AI & IT Solutions designed as per your workflows.</li>
                  <li><strong>24/7 Support & Training –</strong> Ensuring smooth adoption and usage.</li>
                  <li><strong>Future-Ready Technology –</strong> Cloud-enabled, mobile-friendly, and AI-ready AI & IT Solutions system.</li>
               </ul>
            </div>
         </div>
         <div className="col-md-5">
            <div className="clothing-stores-img text-end">
               <figure>
                  <img src="/assets/images/industry1.png" alt="Healthcare AI & IT Solutions Solutions" />
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>
    </>
  );
}
