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
                <i className={`fa-solid fa-graduation-cap`}></i> Education AI & IT Solutions
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                EdTech & Institutional AI Solutions
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Custom portals, AI learning assistants, and digital infrastructure for schools & universities.
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
                <i className={`fa-solid fa-graduation-cap`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* header */}
        
{/* header */}

<section className="manufacturing-key section-bg">
   <div className="container">
      <div className="row justify-content-center">
         <div className="col-lg-12">
            <div className="heading-wrap">
               <h2>Key Features of Chittortech <span>School AI & IT Solutions</span></h2>
            </div>
         </div>
      </div>
      <div className="row justify-content-center gy-4">
         {/* Feature 1: Parent Control */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3> Parent Control</h3>
               <p>
                  Keep parents informed with real-time updates on student performance, attendance, exam results, and school notices – strengthening the parent-school partnership.
               </p>
               <ul>
                  <li>Real-time student performance reports</li>
                  <li>Attendance and exam result notifications</li>
                  <li>Instant school announcements and notices</li>
               </ul>
            </div>
         </div>
         {/* Feature 2: Attendance Management */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3> Attendance Management</h3>
               <p>
                  Automated student and staff attendance tracking through biometric, RFID, or mobile app integration – ensuring accuracy and saving hours of manual work.
               </p>
               <ul>
                  <li>Biometric & RFID-based tracking</li>
                  <li>Mobile app attendance marking</li>
                  <li>Daily & monthly attendance reports</li>
               </ul>
            </div>
         </div>
         {/* Feature 3: Staff Management */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3> Staff Management</h3>
               <p>
                  Manage teacher and staff records, track performance, assign timetables, and streamline payroll integration – all in one dashboard.
               </p>
               <ul>
                  <li>Centralized teacher & staff database</li>
                  <li>Timetable & duty allocation</li>
                  <li>Performance tracking & payroll sync</li>
               </ul>
            </div>
         </div>
         {/* Feature 4: Remote Access */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Remote Access</h3>
               <p>
                  Cloud-based AI & IT Solutions allows 24/7 access for administrators, teachers, students, and parents, ensuring continuous learning and management even from remote locations.
               </p>
               <ul>
                  <li>Anytime, anywhere AI & IT Solutions access</li>
                  <li>Secure cloud-based platform</li>
                  <li>Supports hybrid & remote learning</li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>
<section className="clothing-stores-sec pro-clothing-sec">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-6">
            <div className="clothing-stores-text">
               <h2>What is a School AI & IT Solutions System and How Does it Work?</h2>
               <p>
                  A School AI & IT Solutions simplifies day-to-day operations including:
               </p>
               <ul>
                  <li>Student admissions & enrollment</li>
                  <li>Curriculum and timetable management</li>
                  <li>Exam scheduling & result processing</li>
                  <li>Attendance & leave management</li>
                  <li>Fees collection & payment tracking</li>
                  <li>Communication between school, teachers, parents, and students</li>
               </ul>
               <p>
                  With ChittorTech School AI & IT Solutions, every stakeholder gets a centralized dashboard view – making communication transparent and improving efficiency.
               </p>
            </div>
         </div>
         <div className="col-md-6">
            <div className="clothing-stores-img text-end">
               <figure>
                  <img src="/assets/images/img197.jpg" alt="School AI & IT Solutions System" />
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>
<section id="features"  className="manufacturing-key section-bg">
   <div className="container">
      <div className="row justify-content-center">
         <div className="col-lg-12 col-9">
            <div className="heading-wrap">
               <h2>Core Features of Chittortech <span>School AI & IT Solutions</span></h2>
            </div>
         </div>
      </div>
      <div className="row justify-content-center gy-4">
         {/* Feature 1: Fee & Finance Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3> Fee &amp; Finance Management</h3>
               <ul>
                  <li>Automate fee collection and payment reminders</li>
                  <li>Generate receipts and financial reports</li>
                  <li>Track pending fees and installment payments</li>
                  <li>Integrate with payment gateways (UPI, cards, net banking)</li>
               </ul>
            </div>
         </div>
         {/* Feature 2: Timetable & Scheduling */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3> Timetable &amp; Scheduling</h3>
               <ul>
                  <li>Create and manage class timetables digitally</li>
                  <li>Avoid subject or teacher scheduling conflicts</li>
                  <li>Share timetables instantly with teachers &amp; students</li>
               </ul>
            </div>
         </div>
         {/* Feature 3: Examination & Result Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3> Examination &amp; Result Management</h3>
               <ul>
                  <li>Create exam schedules and digital grade sheets</li>
                  <li>Auto-generate report cards with marks &amp; grades</li>
                  <li>Provide online access to parents &amp; students</li>
               </ul>
            </div>
         </div>
         {/* Feature 4: Document & Records Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3> Document &amp; Records Management</h3>
               <ul>
                  <li>Store and manage student &amp; staff records securely</li>
                  <li>Upload documents like ID proofs, certificates, and mark sheets</li>
                  <li>Easy search and retrieval of data anytime</li>
               </ul>
            </div>
         </div>
         {/* Feature 5: Communication & Notifications */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3> Communication &amp; Notifications</h3>
               <ul>
                  <li>Send SMS, Email, and App Notifications instantly</li>
                  <li>Share school notices, announcements &amp; circulars with one click</li>
                  <li>Create stronger communication between parents, teachers &amp; students</li>
               </ul>
            </div>
         </div>
         {/* Feature 6: Mobile App Integration */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3> Mobile App Integration</h3>
               <ul>
                  <li>Mobile-friendly AI & IT Solutions dashboard for all stakeholders</li>
                  <li>Parents can track progress, fees &amp; attendance on the go</li>
                  <li>Teachers can mark attendance and upload grades via app</li>
               </ul>
            </div>
         </div>
         {/* Feature 7: Reports & Analytics */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3> Reports &amp; Analytics</h3>
               <ul>
                  <li>Generate detailed academic, financial, and administrative reports</li>
                  <li>Track student progress, staff performance, and fee collections</li>
                  <li>Data-driven insights for better decision-making</li>
               </ul>
            </div>
         </div>
         {/* Feature 8: Multi-Branch Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3> Multi-Branch Management</h3>
               <ul>
                  <li>Manage multiple campuses under one AI & IT Solutions system</li>
                  <li>Centralized control with branch-level autonomy</li>
                  <li>Consolidated reports for school groups or chains</li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>
<section className="clothing-stores-sec pro-clothing-sec">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-6">
            <div className="clothing-stores-text">
               <h4>Benefits of Using Chittortech School AI & IT Solutions</h4>
               <ul>
                  <li><strong> Improved Efficiency –</strong> Automates attendance, fee collection, scheduling & more.</li>
                  <li><strong> Enhanced Communication –</strong> Parents, teachers, and students stay connected.</li>
                  <li><strong> Secure Data Management –</strong> Stores academic & financial records safely.</li>
                  <li><strong> Real-time Access –</strong> Instantly track attendance, progress & events.</li>
                  <li><strong> Cost-Effective –</strong> Reduces admin costs with an all-in-one cloud system.</li>
                  <li><strong> Boosted Teacher Performance –</strong> Teachers focus on teaching, not paperwork.</li>
                  <li><strong> Scalable & Flexible –</strong> Adapts to schools, colleges & institutions of all sizes.</li>
               </ul>
            </div>
         </div>
         <div className="col-md-6">
            <div className="clothing-stores-img text-end">
               <figure>
                  <img src="/assets/images/img198.jpg" alt="ChittorTech Education - img198" />
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>
<section className="clothing-stores-sec pro-clothing-sec">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-6 order-md-2">
            <div className="clothing-stores-text">
               <h2>How Chittortech AI & IT Solutions Helps Schools Succeed</h2>
               <ul>
                  <li><strong>Admissions Made Easy –</strong> Go paperless with digital admission processes.</li>
                  <li><strong>Smarter Learning –</strong> Teachers focus on education while AI & IT Solutions handles admin work.</li>
                  <li><strong>Better Communication –</strong> Parents stay updated with real-time student data.</li>
                  <li><strong>Data-driven Decisions –</strong> Access powerful reports & analytics anytime.</li>
                  <li><strong>Multi-branch Friendly –</strong> Manage multiple campuses from one dashboard.</li>
               </ul>
               <p>🚀 School AI & IT Solutions systems by <strong>ChittorTech</strong> are game-changers – simplifying school operations like never before.</p>
            </div>
         </div>
         <div className="col-md-6 order-md-1">
            <div className="clothing-stores-img text-end">
               <figure>
                  <img src="/assets/images/img199.jpg" alt="School AI & IT Solutions Illustration" />
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>
<section className="clothing-stores-sec pro-clothing-sec">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-6">
            <div className="clothing-stores-text">
               <h2>Education AI & IT Solutions – For Schools, Colleges & Institutes</h2>
               <ul>
                  <li><strong>Manage Student Data –</strong> Track academic records and progress with ease.</li>
                  <li><strong>Schedule Classes & Exams –</strong> Create and manage timetables effortlessly.</li>
                  <li><strong>Track Staff & Payroll –</strong> Manage teacher data, attendance, and salaries.</li>
                  <li><strong>Simplify Attendance & Leave –</strong> Automate student and staff attendance tracking.</li>
                  <li><strong>Automate Fees & Finance –</strong> Manage fee collection, reminders, and reports digitally.</li>
                  <li><strong>Monitor Campus Performance –</strong> Get a complete overview of academic and administrative activities.</li>
               </ul>
            </div>
         </div>
         <div className="col-md-6">
            <div className="clothing-stores-img text-start">
               <figure>
                  <img src="/assets/images/img200.jpg" alt="Education AI & IT Solutions Illustration" />
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>
<section className="manufacturing-key section-bg">
   <div className="container">
      <div className="row justify-content-center">
         <div className="col-lg-12 col-9">
            <div className="heading-wrap">
               <h2>How to Use Chittortech <span>School AI & IT Solutions</span></h2>
               <p>Using Chittortech School AI & IT Solutions is simple and user-friendly. Follow these steps to get started:</p>
            </div>
         </div>
      </div>
      <div className="row justify-content-center gy-4">
         {/* Step 1 */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>1️⃣ Login & Setup</h3>
               <ul>
                  <li>Log in with your Admin credentials.</li>
                  <li>Configure your school details (name, logo, branches, academic year, etc.).</li>
               </ul>
            </div>
         </div>
         {/* Step 2 */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>2️⃣ Add Users</h3>
               <ul>
                  <li>Add students, teachers, staff, and parents to the system.</li>
                  <li>Assign roles & permissions for secure access.</li>
               </ul>
            </div>
         </div>
         {/* Step 3 */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>3️⃣ Manage Attendance</h3>
               <ul>
                  <li>Teachers can mark daily attendance through the web or mobile app.</li>
                  <li>Parents get instant notifications about their child’s presence/absence.</li>
               </ul>
            </div>
         </div>
         {/* Step 4 */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>4️⃣ Fee & Finance Module</h3>
               <ul>
                  <li>Set up fee structures, due dates, and discounts.</li>
                  <li>Collect fees via cash, card, UPI, or online gateway.</li>
                  <li>Generate automated receipts & track pending fees.</li>
               </ul>
            </div>
         </div>
         {/* Step 5 */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>5️⃣ Timetable & Scheduling</h3>
               <ul>
                  <li>Create class schedules for all grades.</li>
                  <li>Share digital timetables with teachers & students.</li>
               </ul>
            </div>
         </div>
         {/* Step 6 */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>6️⃣ Exam & Result Management</h3>
               <ul>
                  <li>Set up exam schedules.</li>
                  <li>Teachers can upload marks and grades.</li>
                  <li>Report cards are generated automatically and shared with parents.</li>
               </ul>
            </div>
         </div>
         {/* Step 7 */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>7️⃣ Communication & Notifications</h3>
               <ul>
                  <li>Send SMS, Email, or App alerts to parents & staff instantly.</li>
                  <li>Share circulars, homework, and notices in one click.</li>
               </ul>
            </div>
         </div>
         {/* Step 8 */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>8️⃣ Reports & Analytics</h3>
               <ul>
                  <li>View attendance reports, academic performance, and fee collection summaries.</li>
                  <li>Use analytics for better decision-making.</li>
               </ul>
            </div>
         </div>
         {/* Step 9 */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>9️⃣ Multi-Branch Access</h3>
               <ul>
                  <li>Admins can monitor and control multiple branches from one dashboard.</li>
               </ul>
            </div>
         </div>
         {/* Step 10 */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>🔟 Mobile App Access</h3>
               <ul>
                  <li>Teachers, parents, and students can access the AI & IT Solutions through a dedicated mobile app for convenience.</li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>
<section className="faq-template">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div className="faq-section">
               <div className="heading-wrap text-center">
                  <h2>Frequently Asked Questions – <span>How to Use Chittortech School AI & IT Solutions</span></h2>
               </div>
               <div className="accordion" id="faqAccordion">
                  {/* FAQ 1 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Q1: How do I log in to the AI & IT Solutions system?
                        </button>
                     </h2>
                     <div id="collapseOne" className="accordion-collapse collapse show"
                        aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Admins, teachers, students, and parents receive their unique login ID & password. Simply visit the web portal or mobile app, enter credentials, and access the dashboard.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 2 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Q2: How can I add students and teachers?
                        </button>
                     </h2>
                     <div id="collapseTwo" className="accordion-collapse collapse"
                        aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Go to <strong>Admin Panel → Add Users → Select Role</strong> (Student/Teacher/Staff/Parent) and fill in the required details. You can also bulk-upload data using an Excel sheet.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 3 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Q3: How do teachers mark attendance?
                        </button>
                     </h2>
                     <div id="collapseThree" className="accordion-collapse collapse"
                        aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Teachers can log in from the web or mobile app → <strong>Attendance Module</strong> → Select Class & Date → Mark Present/Absent. Attendance is updated instantly.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 4 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Q4: Can parents track their child’s attendance?
                        </button>
                     </h2>
                     <div id="collapseFour" className="accordion-collapse collapse"
                        aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes ✅ Parents can log in via the mobile app or parent portal to see daily and weekly attendance reports in real-time.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 5 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Q5: How do I manage fee collection?
                        </button>
                     </h2>
                     <div id="collapseFive" className="accordion-collapse collapse"
                        aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Go to <strong>Finance → Fee Module</strong> → Define fee structures, discounts, and due dates. Parents can pay online, and the system automatically generates receipts.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 6 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Q6: How are exam results managed?
                        </button>
                     </h2>
                     <div id="collapseSix" className="accordion-collapse collapse"
                        aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Teachers can upload marks in the <strong>Examination Module</strong>. The AI & IT Solutions automatically generates report cards with grades, remarks, and attendance summary. Parents can view or download results online.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 7 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        Q7: Can I send notifications to parents and staff?
                        </button>
                     </h2>
                     <div id="collapseSeven" className="accordion-collapse collapse"
                        aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes! Use the <strong>Communication Module</strong> to send SMS, Emails, or in-app notifications instantly for circulars, homework, or urgent notices.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 8 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingEight">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        Q8: How do I create class timetables?
                        </button>
                     </h2>
                     <div id="collapseEight" className="accordion-collapse collapse"
                        aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Go to <strong>Timetable Module</strong> → Add Class & Subjects → Assign Teachers → Save & Share. The timetable is visible to teachers and students instantly.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 9 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingNine">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        Q9: Can multiple branches be managed with one AI & IT Solutions?
                        </button>
                     </h2>
                     <div id="collapseNine" className="accordion-collapse collapse"
                        aria-labelledby="headingNine" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes ✅ Chittortech AI & IT Solutions supports multi-branch management. Admins can monitor student data, fee reports, and staff activity across all campuses from one dashboard.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 10 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingTen">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                        Q10: Is there a mobile app for students and parents?
                        </button>
                     </h2>
                     <div id="collapseTen" className="accordion-collapse collapse"
                        aria-labelledby="headingTen" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes 📱 A dedicated mobile app is available where parents can check attendance, fees, and results while students can access homework, timetables, and notices on the go.
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
    </>
  );
}
