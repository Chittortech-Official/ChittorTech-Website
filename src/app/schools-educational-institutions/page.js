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
                <i className={`fa-solid fa-school`}></i> School AI & IT Solutions
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                School & Educational Institution AI & IT Solutions
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Complete school management — admissions, fees, timetable, and parent portal.
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
                <i className={`fa-solid fa-school`}></i>
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
                  <h2>Best AI & IT Solutions for Schools & Educational Institutions  <span>in India .</span></h2>
                  <p>In today’s fast-paced digital age, schools and educational institutions need more than just traditional methods to manage academics, administration, and communication. With growing competition, increasing student expectations, and the need for transparency, educational institutions must adopt technology-driven solutions to stay ahead.</p>
                  <p>ChittorTech offers the Best AI & IT Solutions for Schools & Educational Institutions in India, designed to streamline day-to-day operations, improve academic delivery, enhance communication, and ensure efficiency in administration. Our AI & IT Solutions is tailored to meet the unique needs of schools, colleges, and universities—helping them embrace automation and digital transformation.</p>
               </div>
            </div>
         </div>
         <div className="col-md-6">
            <div className="seo-services-img manufacturers-img">
               <figure>
                  <img src="/assets/images/img294.jpg" alt="Trading Business AI & IT Solutions" />
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
                  <img src="/assets/images/img295.jpg" alt="School & Educational AI & IT Solutions" />
               </figure>
            </div>
         </div>
         <div className="col-md-7">
            <div className="heading-wrap text-start">
               <h2>Why <span>Schools & Educational Institutions</span> Need AI & IT Solutions?</h2>
               <p>Running an educational institution comes with its own set of challenges. From managing admissions to handling student data, and from fee collection to academic performance tracking, administrators juggle multiple tasks daily. An AI & IT Solutions ensures everything runs smoothly in one centralized system.</p>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li><strong>Manual Administrative Work</strong> – High dependency on paperwork increases errors and inefficiency.</li>
                  <li><strong>Data Management</strong> – Storing and retrieving student and staff data securely.</li>
                  <li><strong>Fee Collection & Finance</strong> – Complex fee structures, pending payments, and accounting mismatches.</li>
                  <li><strong>Parent-Teacher Communication</strong> – Lack of real-time interaction and updates.</li>
                  <li><strong>Exams & Results Management</strong> – Tedious process of preparing report cards and managing results.</li>
                  <li><strong>Student Attendance & Discipline</strong> – Time-consuming manual tracking of attendance and records.</li>
                  <li><strong>Resource Allocation</strong> – Inefficient use of classrooms, staff, and infrastructure.</li>
               </ul>
               <p>This is where <strong>ChittorTech</strong> brings in automation, ensuring hassle-free academic and administrative management.</p>
            </div>
         </div>
      </div>
   </div>
</section>


<section className="manufacturing-key section-bg pt-60">
   <div className="container">
      <div className="heading-wrap">
         <h2>Key Features of <span>Chittortech AI & IT Solutions for Schools & Educational Institutions</span></h2>
         <p>Comprehensive solutions to manage students, staff, fees, attendance, exams, and more in a centralized system.</p>
      </div>
      <div className="row justify-content-center gy-4">

         {/* 1. Student Information Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Student Information Management</h3>
               <ul>
                  <li>Centralized database with complete student records</li>
                  <li>Personal details, academic history, and disciplinary notes</li>
               </ul>
            </div>
         </div>

         {/* 2. Online Admission & Enrollment */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Online Admission &amp; Enrollment</h3>
               <ul>
                  <li>Simplified admission process</li>
                  <li>Online applications and document uploads</li>
                  <li>Automated approval workflow</li>
               </ul>
            </div>
         </div>

         {/* 3. Fee Management System */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Fee Management System</h3>
               <ul>
                  <li>Automated fee collection and receipts</li>
                  <li>Tracking of dues and pending payments</li>
                  <li>Integration with payment gateways</li>
               </ul>
            </div>
         </div>

         {/* 4. Attendance Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Attendance Management</h3>
               <ul>
                  <li>Biometric or RFID-based attendance for students and staff</li>
                  <li>Instant attendance reporting and analytics</li>
               </ul>
            </div>
         </div>

         {/* 5. Examination & Result Processing */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Examination &amp; Result Processing</h3>
               <ul>
                  <li>Streamlined exam scheduling and management</li>
                  <li>Automated result calculation and report generation</li>
               </ul>
            </div>
         </div>

         {/* 6. Parent & Teacher Communication Portal */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Parent &amp; Teacher Communication Portal</h3>
               <ul>
                  <li>Mobile app and portal for real-time updates</li>
                  <li>Attendance, performance, and notices tracking</li>
               </ul>
            </div>
         </div>

         {/* 7. Library & Resource Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Library &amp; Resource Management</h3>
               <ul>
                  <li>Track issued/returned books and fines</li>
                  <li>Access to digital library resources</li>
               </ul>
            </div>
         </div>

         {/* 8. Payroll & HR Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Payroll &amp; HR Management</h3>
               <ul>
                  <li>Streamlined staff payroll, leave, and performance management</li>
               </ul>
            </div>
         </div>

         {/* 9. Timetable & Academic Scheduling */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Timetable &amp; Academic Scheduling</h3>
               <ul>
                  <li>Efficient class schedules with optimized teacher allocation</li>
               </ul>
            </div>
         </div>

         {/* 10. Transport & Hostel Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Transport &amp; Hostel Management</h3>
               <ul>
                  <li>Real-time bus tracking and route planning</li>
                  <li>Hostel occupancy management</li>
               </ul>
            </div>
         </div>

         {/* 11. Multi-Branch Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Multi-Branch Management</h3>
               <ul>
                  <li>Manage multiple campuses from a single dashboard</li>
                  <li>Centralized control with branch-level access</li>
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
               <h2>Benefits of <span>Chittortech AI & IT Solutions for Schools & Educational Institutions</span></h2>
            </div>
            <div className="why-choose-grid textile-manufacturers-wrap">
               <div className="grid-item">
                  <figure><img src="/assets/images/ma1.png" alt="Enhanced Efficiency" /></figure>
                  <h3>Enhanced Efficiency</h3>
                  <p>Reduce paperwork and manual errors.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma2.png" alt="Better Communication" /></figure>
                  <h3>Better Communication</h3>
                  <p>Strengthen parent-teacher-student engagement.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma3.png" alt="Financial Transparency" /></figure>
                  <h3>Financial Transparency</h3>
                  <p>Simplify fee management with clear reporting.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma4.png" alt="Improved Learning Experience" /></figure>
                  <h3>Improved Learning Experience</h3>
                  <p>Teachers focus on academics, not admin work.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma5.png" alt="Data Security" /></figure>
                  <h3>Data Security</h3>
                  <p>Safe storage of sensitive student and staff data.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma6.png" alt="Real-Time Insights & Scalability" /></figure>
                  <h3>Real-Time Insights & Scalability</h3>
                  <p>Quick reports for decision-making; suitable for schools, colleges, and universities of all sizes.</p>
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
                  <li><strong>Expertise –</strong> Expertise in education-focused AI & IT Solutions solutions.</li>
                  <li><strong>Trusted –</strong> Trusted by schools and institutions in India.</li>
                  <li><strong>Customizable –</strong> Tailored modules based on institution needs.</li>
                  <li><strong>Support –</strong> 24/7 support & training for staff and admin teams.</li>
                  <li><strong>Proven Results –</strong> Improving efficiency, transparency, and student satisfaction.</li>
               </ul>
            </div>
         </div>
         <div className="col-md-5">
            <div className="clothing-stores-img text-end">
               <figure>
                  <img src="/assets/images/industry1.png" alt="Educational AI & IT Solutions Solutions" />
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>
    </>
  );
}
