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
                <i className={`fa-solid fa-money-check`}></i> Payroll
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Automated Enterprise HR & Payroll Systems
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Streamline employee management, salary processing, attendance, and compliance reports.
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
                <i className={`fa-solid fa-money-check`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* header */}
           
    {/* header */}
      


<section className="clothing-stores-sec pro-clothing-sec">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6">
                <div className="clothing-stores-text">
                    <h2>Why Payroll Management is Critical in India</h2>
                    <ul>
                        <li><strong>Complex Salary Structures:</strong> Indian companies often have multiple allowances, deductions, bonuses, and tax implications. Handling these manually can lead to mistakes.</li>
                        <li><strong>Statutory Compliance:</strong> Businesses must comply with PF, ESI, TDS, LWF, Gratuity, Professional Tax, and other regulations. Non-compliance can result in fines and legal complications.</li>
                        <li><strong>Employee Satisfaction:</strong> Timely and accurate salary disbursal builds trust and improves retention. Payroll errors can significantly impact morale.</li>
                        <li><strong>Data Security:</strong> Payroll involves sensitive employee data. Maintaining confidentiality and preventing breaches is critical.</li>
                        <li><strong>Operational Efficiency:</strong> Manual payroll consumes HR hours. Automation saves time and reduces dependency on external payroll providers.</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-6"> 
                <div className="clothing-stores-img text-end">
                    <figure>
                        <img src="/assets/images/img531.jpg" alt="Payroll Management Illustration" />
                    </figure>
                </div>
            </div>
        </div>
    </div>
</section>




<section id="features"  className="manufacturing-key section-bg">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-12">
                <div className="heading-wrap">
                    <h2>Core Features of ChittorTech’ <span> Payroll Management System</span> </h2>
                </div>
            </div>
        </div>
     <div className="row justify-content-center gy-4">

        {/* Step 1: Lead Generation */}
        <div className="col-md-3 col-sm-6">
            <div className="key-box">
                <h3>Automated Salary Calculations</h3>
                <p>Manual salary computation is prone to errors and inefficiencies. Our system automatically calculates gross salary, deductions, allowances, and net pay based on attendance, leave records, overtime, and performance bonuses. Integration with biometric or attendance systems ensures real-time accuracy.</p>
            </div>
        </div>

        {/* Step 2: Lead Capturing */}
        <div className="col-md-3 col-sm-6">
            <div className="key-box">
                <h3>Multi-Component Salary Structure</h3>
                <p>Every organization has unique pay structures. ChittorTech’ platform supports Basic Pay, HRA, Conveyance, Incentives, Bonuses, Allowances, and Deductions. Customize salary templates based on employee grade, designation, or department.</p>
            </div>
        </div>

        {/* Step 3: Lead Scoring */}
        <div className="col-md-3 col-sm-6">
            <div className="key-box">
                <h3>Statutory Compliance</h3>
                <p>Compliance is non-negotiable in India. Our Payroll Management System ensures full adherence to PF, ESI, TDS, LWF, Professional Tax, and labor laws. The system auto-calculates contributions, prepares reports, and keeps the business audit-ready.</p>
            </div>
        </div>

        {/* Step 4: Lead Segmentation */}
        <div className="col-md-3 col-sm-6">
            <div className="key-box">
                <h3> Auto-Generation of Payslips</h3>
                <p>Digital payslips are automatically generated and can be securely accessed by employees anytime. The self-service portal reduces HR workload and increases transparency.</p>
                <h5> <strong>Key Features:</strong> </h5>
                <ul>
                    <li>PDF payslips with secure download</li>
                    <li>Multi-language support</li>
                    <li>Email notifications for each payroll cycle</li>
                </ul>
            </div>
        </div>
        {/* Step 4: Lead Segmentation */}
        <div className="col-md-3 col-sm-6">
            <div className="key-box">
                <h3> Loans, Advances & Reimbursements Management</h3>
                <p>Track employee loans, salary advances, and reimbursements with ease. Our system automatically adjusts deductions and reimbursements in salary calculations.</p>
            </div>
        </div>
        {/* Step 4: Lead Segmentation */}
        <div className="col-md-3 col-sm-6">
            <div className="key-box">
                <h3> Full & Final Settlements</h3>
                <p>When an employee exits, calculating pending salary, bonuses, leave encashment, and deductions can be complex. Our system automates F&F settlements, ensuring compliance and smooth exits.</p>
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
                    <h2>Integrations & APIs</h2>
                    <p>In today’s digital business environment, payroll cannot function in isolation. Organizations use multiple systems for HR, finance, attendance, and employee management. ChittorTech ensures your payroll system seamlessly integrates with all your critical business applications, creating a unified ecosystem for accurate, efficient, and error-free payroll processing.</p>
                    <h3>Key Integrations Include:</h3>
                    <ul>
                        <li><strong>Biometric & Attendance Systems:</strong> Automatically sync attendance data from fingerprint scanners, facial recognition systems, or mobile check-ins. This ensures real-time tracking of working hours, overtime, leaves, and shift patterns, eliminating manual entry errors and improving accuracy.</li>
                        <li><strong>Payroll & Accounting Systems:</strong> Connect seamlessly with popular accounting platforms such as QuickBooks, Tally, Zoho Books, and AI & IT Solutions modules. Automatic posting of payroll transactions into the accounting system reduces manual reconciliation, ensures up-to-date ledgers, and simplifies financial audits.</li>
                        <li><strong>HRMS, AI & IT Solutions & AI Knowledge Base Integration:</strong> Maintain a single source of truth by integrating payroll with your HR management systems, enterprise resource planning tools, and customer relationship management software. Employee profiles, benefits, attendance, and salary data are synchronized, reducing duplication and maintaining consistency across departments.</li>
                        <li><strong>Open APIs for Custom Integrations:</strong> For businesses with unique workflows or specialized software, our platform provides open APIs. This allows developers to create custom integrations, ensuring that your payroll system fits perfectly within your existing technology ecosystem.</li>
                    </ul>
                    <h3>Benefits of Integrations:</h3>
                    <ul>
                        <li>Streamlined HR and finance operations with minimal manual intervention</li>
                        <li>Reduced errors in salary calculation, deductions, and statutory contributions</li>
                        <li>Real-time reporting and analytics across departments</li>
                        <li>Centralized data ecosystem for strategic decision-making</li>
                    </ul>
                    <p>With these integrations, ChittorTech transforms payroll from a back-office task into a connected, intelligent system that supports growth and efficiency.</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="clothing-stores-img text-end">
                    <figure>
                        <img src="/assets/images/img332.jpg" alt="Integrations & APIs" />
                    </figure>
                </div>
            </div>
        </div>
    </div>
</section>




<section className="manufacturing-key section-bg pt-60">
   <div className="container">
      <div className="heading-wrap">
         <h2>Cloud-based System — Future-ready Payroll <span>Technology By ChittorTech</span></h2>
         <p>In today’s fast-changing business landscape, organizations need smart, secure, and flexible payroll and HR solutions. Gone are the days when companies depended on heavy software installations, outdated spreadsheets, and manual attendance tracking. ChittorTech brings a next-generation, fully cloud-based payroll and workforce management system that makes managing employees easier, faster, and more reliable.</p>
         <p>Our solution is designed to empower both employers and employees, ensuring smooth business operations — whether your teams work from office, home, or across multiple locations.</p>
      </div>
      <div className="row justify-content-center gy-4">

         {/* Feature 1: Access from Anywhere */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box payroll-box">
               <h3>Access from Anywhere, Any Device</h3>
               <h4><i>What it is:</i></h4>
               <p>This feature forms the backbone of modern payroll management. Chittortech’s cloud technology allows your HR team, managers, and employees to securely log in from anywhere in the world. Whether in the office, at home, or traveling, the system can be accessed from laptops, tablets, or mobile phones — ideal for remote, hybrid, and multi-location setups.</p>
               <ul>
                  <li>Employees can log in securely through web browsers or mobile apps.</li>
                  <li>Check attendance, salary slips, apply for leaves, and view schedules in real-time.</li>
                  <li>HR/Admin teams can monitor live dashboards, approve leave requests, and generate reports remotely.</li>
               </ul>
               <h4><i>Benefits:</i></h4>
               <ul>
                  <li>No dependency on office-based servers or fixed locations.</li>
                  <li>Perfectly suited for hybrid work models and flexible teams.</li>
                  <li>Ensures business continuity during travel, emergencies, or lockdowns.</li>
                  <li>Real-time insights for faster decision-making.</li>
               </ul>
               <h4><i>Real-Life Example:</i></h4>
               <p>A company with 5 branches across India manages its entire payroll from a single centralized platform. No more Excel files, no more delays — managers log in from anywhere to get live data on attendance, salary, and leaves.</p>
            </div>
         </div>

         {/* Feature 2: No Installations or Local Server */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box payroll-box">
               <h3> No Installations or Local Server Requirements</h3>
               <h4><i>How to use:</i></h4>
               <ul>
                  <li>Open the secure link in any browser or mobile.</li>
                  <li>Enter admin credentials to set up employee data, leave rules, and payroll structure.</li>
                  <li>Start using the system immediately with no downtime or IT involvement.</li>
               </ul>
               <h4><i>Benefits:</i></h4>
               <ul>
                  <li>No hardware or server setup costs.</li>
                  <li>Rapid deployment — get started in hours, not weeks.</li>
                  <li>Easy scalability as your team grows.</li>
                  <li>Lower operational costs compared to traditional IT-heavy systems.</li>
               </ul>
               <h4><i>Real-Life Example:</i></h4>
               <p>A startup saved ₹50,000 by moving to Chittortech’s cloud platform, eliminating server maintenance costs while improving reliability.</p>
            </div>
         </div>

         {/* Feature 3: Automatic Updates and Backups */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box payroll-box">
               <h3> Automatic Updates and Backups</h3>
               <h4><i>How to use:</i></h4>
               <ul>
                  <li>No manual action required — updates run in the background.</li>
                  <li>Admins get notifications when new features or improvements are added.</li>
               </ul>
               <h4><i>Benefits:</i></h4>
               <ul>
                  <li>Always runs on the latest and most secure version.</li>
                  <li>Protects sensitive employee data with encrypted backups.</li>
                  <li>Eliminates IT involvement in maintenance.</li>
                  <li>Guarantees uninterrupted uptime.</li>
               </ul>
               <h4><i>Real-Life Example:</i></h4>
               <p>An HR manager saved 6–8 hours every month by not having to schedule or supervise software updates manually.</p>
            </div>
         </div>

         {/* Feature 4: Real-Time Clock-in/Clock-out */}
            <div className="col-md-4 col-sm-6">
                <div className="key-box payroll-box">
                    <h3> Real-Time Clock-in/Clock-out (Web, Mobile, Biometric)</h3>
                    <h4><i>How to use:</i></h4>
                    <ul>
                        <li>Employees mark the start and end time of their shifts.</li>
                        <li>Biometric punches sync automatically with the cloud.</li>
                        <li>HR can view daily and monthly logs on the dashboard.</li>
                    </ul>
                    <h4><i>Benefits:</i></h4>
                    <ul>
                        <li>Eliminates proxy attendance.</li>
                        <li>Ensures error-free payroll calculation.</li>
                        <li>Saves time on manual tracking.</li>
                    </ul>
                    <h4><i>Real-Life Example:</i></h4>
                    <p>A manufacturing unit with 300+ workers reduced their attendance processing time from 2 days to just 30 minutes by switching to real-time biometric integration.</p>
                </div>
            </div>

            {/* Feature 5: GPS-based Attendance */}
            <div className="col-md-4 col-sm-6">
                <div className="key-box payroll-box">
                    <h3> GPS-based Attendance for Field & Remote Staff</h3>
                    <h4><i>How to use:</i></h4>
                    <ul>
                        <li>Employee logs in via mobile.</li>
                        <li>Click “Mark Attendance” to clock in/out.</li>
                        <li>GPS coordinates with timestamps are recorded.</li>
                    </ul>
                    <h4><i>Benefits:</i></h4>
                    <ul>
                        <li>Full transparency on work locations.</li>
                        <li>Reduces time theft and fake entries.</li>
                        <li>Boosts accountability.</li>
                    </ul>
                    <h4><i>Real-Life Example:</i></h4>
                    <p>A logistics company uses GPS-based attendance to track 100+ riders in real-time, improving operational visibility by 90%.</p>
                </div>
            </div>
      </div>
   </div>
</section>

<section className="clothing-stores-sec pro-clothing-sec">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6">
                <div className="clothing-stores-img text-end">
                    <figure>
                        <img src="/assets/images/img533.jpg" alt="Security & Compliance" />
                    </figure>
                </div>
            </div>
            <div className="col-md-6">
                <div className="clothing-stores-text">
                    <h2>Security & Compliance</h2>
                    <p>Payroll systems handle the most sensitive data within an organization. Confidentiality, integrity, and compliance are paramount to protect employees, the organization, and regulatory obligations. ChittorTech has built a robust framework to safeguard payroll data and ensure compliance with local and international regulations.</p>
                    
                    <h3>Key Security Features Include:</h3>
                    <ul>
                        <li><strong>Role-Based Access Controls:</strong> Limit access to payroll data based on user roles. HR managers, finance officers, and executives can view or modify only what they are authorized to, reducing the risk of data breaches or accidental modifications.</li>
                        <li><strong>Data Encryption:</strong> All sensitive payroll information is encrypted both during transmission and at rest. This ensures that employee records, salary details, tax information, and bank account data remain secure from unauthorized access.</li>
                        <li><strong>Audit Trail & Activity Logs:</strong> Every action taken in the system is logged. Administrators can track changes, modifications, and approvals in real time. This creates transparency, accountability, and a clear audit trail for compliance purposes.</li>
                        <li><strong>Regulatory Compliance:</strong> Our payroll platform is fully compliant with GDPR, HIPAA, and Indian labor laws, including PF, ESI, TDS, LWF, Gratuity, and Professional Tax. Automated updates ensure that new regulations are incorporated immediately, reducing compliance risk.</li>
                    </ul>

                    <h3>Benefits of Security & Compliance Features:</h3>
                    <ul>
                        <li>Protect sensitive employee information from internal and external threats</li>
                        <li>Maintain regulatory compliance to avoid penalties and legal risks</li>
                        <li>Transparent operations with complete accountability and audit readiness</li>
                        <li>Build trust with employees by ensuring confidentiality of their salary and personal data</li>
                    </ul>

                    <p>By combining advanced security measures with regulatory compliance, ChittorTech allows businesses to manage payroll confidently and responsibly.</p>
                </div>
            </div>
        </div>
    </div>
</section>



<section className="manufacturing-key section-bg">
   <div className="container">
      <div className="row justify-content-center gy-4">

         {/* IP Restrictions & Geofencing */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box restrictions-box">
               <h3>IP Restrictions & Geofencing</h3>
               <p>IP Restrictions and Geofencing is a security feature that ensures attendance can only be marked from pre-approved locations or office networks. This prevents misuse and ensures that attendance records are genuine, reliable, and compliant with company policies.</p>
               <strong>How to Use:</strong>
               <ul>
                  <li>The admin or HR manager defines authorized IP addresses or sets geofencing boundaries using the Chittortech dashboard.</li>
                  <li>Employees attempting to mark attendance must be within these predefined zones or networks.</li>
                  <li>Any attempt to punch attendance from unauthorized devices, locations, or networks is automatically blocked or flagged for review.</li>
               </ul>
               <strong>Benefits:</strong>
               <ul>
                  <li>Prevents fraudulent attendance marking from outside office premises.</li>
                  <li>Strengthens overall system security by limiting access.</li>
                  <li>Creates accurate and trustworthy attendance records for payroll, audits, and compliance purposes.</li>
                  <li>Helps organizations maintain strict workforce discipline and accountability.</li>
               </ul>
               <strong>Practical Example:</strong>
               <p>If a company has multiple branches, IP restrictions can ensure that an employee in Branch A cannot mark attendance from Branch B or from a personal device at home.</p>
            </div>
         </div>

         {/* Auto-Sync with Biometric Devices */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box restrictions-box">
               <h3> Auto-Sync with Biometric Devices</h3>
               <p>Manual attendance exports from biometric devices are outdated and error-prone. ChittorTech automates this by directly fetching punch records from biometric machines and reflecting them in real-time in the attendance system.</p>
               <strong>How to Use:</strong>
               <ul>
                  <li>Connect your existing biometric devices with Chittortech’s platform using the provided integration settings.</li>
                  <li>The system automatically syncs attendance data without any manual intervention.</li>
                  <li>Instant reports on attendance, late entries, and absenteeism are available on the dashboard.</li>
               </ul>
               <strong>Benefits:</strong>
               <ul>
                  <li>Provides real-time attendance data, ensuring HR and management have immediate access to accurate information.</li>
                  <li>Eliminates errors caused by manual data exports or imports.</li>
                  <li>Reduces administrative workload and accelerates payroll processing.</li>
                  <li>Ensures a seamless workflow between biometric attendance and salary calculation.</li>
               </ul>
               <strong>Practical Example:</strong>
               <p>In a company with 200 employees using fingerprint or facial recognition devices, attendance data is automatically pulled into the system, making reports ready for payroll without human intervention.</p>
            </div>
         </div>

         {/* Shift Scheduling & Rotation */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box restrictions-box">
               <h3> Shift Scheduling & Rotation</h3>
               <p>Managing multiple shifts manually using spreadsheets is inefficient and error-prone. Chittortech automates shift scheduling, allowing organizations to assign, rotate, and track shifts seamlessly.</p>
               <strong>How to Use:</strong>
               <ul>
                  <li>Create reusable shift templates for morning, evening, night, or customized shifts.</li>
                  <li>Assign shifts to employees or departments using the dashboard.</li>
                  <li>The system instantly displays rosters and notifies employees of their schedules.</li>
               </ul>
               <strong>Benefits:</strong>
               <ul>
                  <li>Clear shift allocation prevents confusion among employees.</li>
                  <li>Simplifies rotation planning and workload distribution.</li>
                  <li>Reduces HR administrative burden by automating shift assignment.</li>
                  <li>Ensures compliance with labor laws regarding working hours and shift rotations.</li>
               </ul>
               <strong>Practical Example:</strong>
               <p>A hospital or call center can manage multiple teams working 24/7 by assigning shifts efficiently without manual errors.</p>
            </div>
         </div>

         {/* Break and Lunch Tracking */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box restrictions-box">
               <h3> Break and Lunch Tracking</h3>
               <p>Monitoring break times enhances workforce productivity and ensures compliance with labor regulations. Chittortech tracks breaks digitally, providing transparency and accurate records.</p>
               <strong>How to Use:</strong>
               <ul>
                  <li>Employees click “Start Break” and “End Break” on the app or portal.</li>
                  <li>The system calculates the exact duration of each break.</li>
                  <li>Break data is available for payroll integration and performance analysis.</li>
               </ul>
               <strong>Benefits:</strong>
               <ul>
                  <li>Promotes transparency and accountability in work hours.</li>
                  <li>Ensures compliance with labor laws regarding mandatory breaks.</li>
                  <li>Provides managers with insights into productivity patterns.</li>
                  <li>Helps identify and address excessive or insufficient break times.</li>
               </ul>
               <strong>Practical Example:</strong>
               <p>An office can analyze team break patterns and identify if certain teams are consistently taking longer than allowed lunch breaks, helping improve efficiency.</p>
            </div>
         </div>

         {/* Overtime Calculation */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box restrictions-box">
               <h3>Overtime Calculation</h3>
               <p>Manual overtime (OT) calculations are prone to mistakes and disputes. Chittortech automates this process, calculating OT based on predefined rules and integrating it with payroll.</p>
               <strong>How to Use:</strong>
               <ul>
                  <li>Define OT rules and rates in the system (e.g., 1.5x for weekdays, 2x for weekends).</li>
                  <li>The system detects extra hours automatically from clock-in/out data.</li>
                  <li>Overtime is added to salary calculations seamlessly.</li>
               </ul>
               <strong>Benefits:</strong>
               <ul>
                  <li>Ensures fair and transparent compensation for extra hours worked.</li>
                  <li>Reduces disputes between employees and HR over OT payments.</li>
                  <li>Accelerates payroll processing with error-free calculations.</li>
                  <li>Improves employee satisfaction by providing timely and accurate OT pay.</li>
               </ul>
               <strong>Practical Example:</strong>
               <p>If an employee works 2 hours beyond their shift, the system automatically calculates OT pay and adds it to the salary without HR intervention.</p>
            </div>
         </div>

         {/* Attendance Regularization */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box restrictions-box">
               <h3>Attendance Regularization</h3>
               <p>Sometimes, employees miss punches or make errors while marking attendance. Attendance regularization allows employees to submit correction requests digitally, eliminating paper-based processes.</p>
               <strong>How to Use:</strong>
               <ul>
                  <li>Employees submit attendance correction requests through the Chittortech app or portal.</li>
                  <li>Managers receive the request for approval or rejection.</li>
                  <li>Upon approval, attendance records are automatically updated in the system.</li>
               </ul>
               <strong>Benefits:</strong>
               <ul>
                  <li>Promotes transparency and fairness in correcting attendance errors.</li>
                  <li>Reduces disputes between employees and HR.</li>
                  <li>Saves time by eliminating manual record updates.</li>
                  <li>Maintains accurate attendance data for payroll, audits, and performance analysis.</li>
               </ul>
               <strong>Practical Example:</strong>
               <p>An employee forgets to punch in due to a network issue. They submit a request, manager approves, and records are updated automatically.</p>
            </div>
         </div>

         {/* Notifications & Alerts */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box restrictions-box">
               <h3> Notifications & Alerts</h3>
               <p>Automatic notifications ensure everyone is aware of attendance anomalies, improving discipline and accountability. Alerts can be sent via SMS, email, or mobile app.</p>
               <strong>How to Use:</strong>
               <ul>
                  <li>The system detects late logins, missed punches, and absences automatically.</li>
                  <li>Alerts are sent to employees and managers instantly.</li>
                  <li>Admins can customize alert settings as needed.</li>
               </ul>
               <strong>Benefits:</strong>
               <ul>
                  <li>Improves punctuality by reminding employees about their attendance.</li>
                  <li>Prevents data gaps by alerting HR to irregularities.</li>
                  <li>Encourages accountability among teams.</li>
                  <li>Reduces manual monitoring and follow-ups.</li>
               </ul>
               <strong>Practical Example:</strong>
               <p>If an employee is late by 15 minutes, the system sends a notification to both the employee and the manager, prompting corrective action.</p>
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
                    <h2>Customization & Scalability</h2>
                    <p>Every organization has unique payroll requirements. Businesses vary in size, structure, location, industry, and workforce complexity. ChittorTech offers a fully customizable payroll platform that grows with your business and adapts to changing needs.</p>
                    
                    <h3>Key Customization Features Include:</h3>
                    <ul>
                        <li><strong>Custom Workflows, Fields & Reports:</strong> Tailor payroll processes to your organization’s specific workflows. Define custom salary components, allowances, deductions, incentives, and benefits. Create custom reports for departments, branches, or regulatory filings.</li>
                        <li><strong>Scalable for All Business Sizes:</strong> Whether you are a startup with 20 employees or a multinational enterprise with 10,000 staff members, our system scales effortlessly. Automated processing ensures consistent performance regardless of organizational size.</li>
                        <li><strong>Multi-Location & Multi-Department Support:</strong> Manage payroll for multiple offices, regions, or departments from a single dashboard. Consolidated reporting enables central control while allowing localized configurations for specific state labor laws, shift patterns, or tax requirements.</li>
                    </ul>

                    <h3>Benefits of Customization & Scalability:</h3>
                    <ul>
                        <li>Adapt the system to unique business requirements without compromising efficiency</li>
                        <li>Support future growth without needing to switch platforms or disrupt payroll operations</li>
                        <li>Ensure compliance across multiple locations, departments, and employee categories</li>
                        <li>Enable managers and executives to access tailored dashboards and reports for strategic insights</li>
                    </ul>

                    <p>With ChittorTech, businesses do not have to settle for generic payroll systems. Our platform evolves with your organization, supporting both complexity and growth without sacrificing usability or performance.</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="clothing-stores-img text-end">
                    <figure>
                        <img src="/assets/images/img534.jpg" alt="Customization & Scalability" />
                    </figure>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="manufacturing-key section-bg">
   <div className="container">
      <div className="heading-wrap">
         <h2>Leave Management <span>Module</span></h2>
      </div>
      <div className="row justify-content-center gy-4">

         {/* Custom Leave Policies */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box restrictions-box">
               <h3> Custom Leave Policies</h3>
               <p>Every organization has unique leave structures. Chittortech allows HR to define custom policies for casual, sick, earned, and other types of leaves.</p>
               <strong>How to Use:</strong>
               <ul>
                  <li>Admins create leave rules, such as accrual rates, maximum leaves, and carry-forward policies.</li>
                  <li>The system applies these rules automatically when employees request leave.</li>
               </ul>
               <strong>Benefits:</strong>
               <ul>
                  <li>Eliminates manual leave tracking and errors.</li>
                  <li>Ensures 100% policy compliance.</li>
                  <li>Enhances transparency in leave management.</li>
                  <li>Helps HR plan workforce availability effectively.</li>
               </ul>
               <strong>Practical Example:</strong>
               <p>An employee can see that their sick leave is capped at 10 days per year and casual leave can be carried forward up to 5 days.</p>
            </div>
         </div>

         {/* Leave Requests & Approvals */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box restrictions-box">
               <h3> Leave Requests & Approvals</h3>
               <p>Paper-based leave applications are slow and inefficient. Chittortech enables fully digital leave requests and approvals.</p>
               <strong>How to Use:</strong>
               <ul>
                  <li>Employees apply for leave via the mobile app or portal.</li>
                  <li>Managers receive notifications and can approve or reject in a single click.</li>
                  <li>The system updates leave balances automatically.</li>
               </ul>
               <strong>Benefits:</strong>
               <ul>
                  <li>Faster processing with zero paperwork.</li>
                  <li>Real-time updates for both employees and managers.</li>
                  <li>Reduces HR administrative burden.</li>
                  <li>Improves employee satisfaction with transparent and quick leave handling.</li>
               </ul>
               <strong>Practical Example:</strong>
               <p>An employee requests leave for a family emergency. The manager approves instantly on the app, and leave balance is updated immediately.</p>
            </div>
         </div>

         {/* Leave Balance Tracking */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box restrictions-box">
               <h3>Leave Balance Tracking</h3>
               <p>Employees can track their leave balances anytime, ensuring they are aware of available, taken, and remaining leaves.</p>
               <strong>How to Use:</strong>
               <ul>
                  <li>Dashboard shows leave types, total entitlement, leaves taken, and remaining balance.</li>
                  <li>Employees can plan their leaves based on accurate data.</li>
               </ul>
               <strong>Benefits:</strong>
               <ul>
                  <li>Promotes transparency.</li>
                  <li>Simplifies planning for vacations or personal time.</li>
                  <li>Eliminates manual queries to HR about leave balances.</li>
               </ul>
               <strong>Practical Example:</strong>
               <p>Before requesting a week off, an employee can verify that they have sufficient casual and earned leaves remaining.</p>
            </div>
         </div>

         {/* Holiday Calendar Integration */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box restrictions-box">
               <h3> Holiday Calendar Integration</h3>
               <p>Company holidays can be integrated directly into the system, allowing seamless leave planning without conflicts.</p>
               <strong>How to Use:</strong>
               <ul>
                  <li>HR uploads the annual holiday calendar.</li>
                  <li>Chittortech automatically maps holidays against leave requests.</li>
               </ul>
               <strong>Benefits:</strong>
               <ul>
                  <li>Clear visibility of holidays and leaves.</li>
                  <li>Ensures smooth workforce planning.</li>
                  <li>Prevents conflicts and overlapping leaves.</li>
                  <li>Reduces manual errors in scheduling.</li>
               </ul>
               <strong>Practical Example:</strong>
               <p>Employees cannot accidentally request leave on national holidays, as the system auto-blocks such days.</p>
            </div>
         </div>

         {/* Automatic Leave Deduction in Payroll */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box restrictions-box">
               <h3> Automatic Leave Deduction in Payroll</h3>
               <p>Leave management is directly linked to payroll, enabling automatic salary adjustments based on approved leaves.</p>
               <strong>How to Use:</strong>
               <ul>
                  <li>Approved leaves are synced with payroll.</li>
                  <li>The system adjusts salary automatically according to leave type and duration.</li>
               </ul>
               <strong>Benefits:</strong>
               <ul>
                  <li>No manual intervention in salary calculations.</li>
                  <li>Ensures accurate and timely salary disbursement.</li>
                  <li>Saves significant HR time.</li>
                  <li>Reduces errors and payroll disputes.</li>
               </ul>
               <strong>Practical Example:</strong>
               <p>If an employee takes unpaid leave, the system automatically deducts the appropriate amount from their monthly salary, reflecting the correct payout.</p>
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
                    <h2>Additional Features for Modern Indian Businesses</h2>
                    <p>ChittorTech offers a comprehensive payroll platform tailored to meet the unique needs of modern Indian businesses, ensuring accuracy, compliance, and employee satisfaction.</p>
                    <h5>Key Features Include:</h5>
                    <ul>
                        <li><strong>Multi-Location Payroll Management:</strong> Manage payroll for multiple offices, cities, or states from a single platform.</li>
                        <li><strong>Shift & Overtime Management:</strong> Accurately calculate payroll for night shifts, extra hours, and flexible schedules.</li>
                        <li><strong>Integration with Accounting Tools:</strong> Connect seamlessly with Tally, QuickBooks, Zoho Books, and AI & IT Solutions systems.</li>
                        <li><strong>Employee Self-Service:</strong> Allow employees to access payslips, tax forms, and benefits information online.</li>
                        <li><strong>Tax Filing Assistance:</strong> Auto-generate reports for IT returns, TDS filings, and PF contributions.</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-5">
                <div className="clothing-stores-img text-end">
                    <figure>
                        <img src="/assets/images/img535.jpg" alt="Additional Features" />
                    </figure>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="clothing-stores-sec software-sec need-helf-sec">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-5">
                <div className="clothing-stores-img text-end">
                    <figure>
                        <img src="/assets/images/img536.jpg" alt="Chittortech Payroll Benefits" />
                    </figure>
                </div>
            </div>
            <div className="col-md-7">
                <div className="clothing-stores-text software-wrap specialized-box">
                    <h2>Key Benefits of Chittortech Payroll System</h2>
                    <p>ChittorTech provides a comprehensive payroll platform designed to ensure accuracy, compliance, and efficiency for businesses of all sizes.</p>
                    
                    <ul>
                        <li><strong>100% Accuracy & Compliance:</strong> Eliminate errors and avoid penalties with automated calculations and statutory compliance.</li>
                        <li><strong>Time Efficiency:</strong> Save hundreds of HR hours each month through automation.</li>
                        <li><strong>Employee Satisfaction:</strong> Timely, transparent payroll builds trust and improves retention.</li>
                        <li><strong>Cost Savings:</strong> Reduce dependency on external payroll providers.</li>
                        <li><strong>Data Security:</strong> Protect sensitive payroll information with encryption, access control, and secure backups.</li>
                        <li><strong>Scalability:</strong> Whether 20 employees or 10,000, our platform scales effortlessly.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="clothing-stores-sec software-sec need-helf-sec">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-7">
                <div className="clothing-stores-text software-wrap specialized-box">
                    <h2>Industry Use Cases</h2>
                    <p>ChittorTech provides industry-specific payroll solutions tailored to meet the unique requirements of various sectors, ensuring accuracy, compliance, and efficiency.</p>
                    
                    <ul>
                        <li><strong>Manufacturing:</strong> Handle large-scale payroll with multiple shifts and integrate attendance from biometric systems while automating compliance with labor laws.</li>
                        <li><strong>IT & Technology:</strong> Manage hybrid and remote teams with flexible salary components and automated compliance tracking.</li>
                        <li><strong>Healthcare:</strong> Automate multi-shift payrolls for doctors, nurses, and staff while maintaining statutory compliance.</li>
                        <li><strong>Education:</strong> Simplify payroll for teachers, administrative staff, and part-timers with accurate leave and attendance sync.</li>
                        <li><strong>Retail & Hospitality:</strong> Efficiently manage hourly wages, overtime, and incentives using real-time attendance data.</li>
                        <li><strong>Startups & SMEs:</strong> Automate payroll from day one, enabling founders to focus on business growth rather than HR tasks.</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-5">
                <div className="clothing-stores-img text-end">
                    <figure>
                        <img src="/assets/images/img537.jpg" alt="Industry Use Cases" />
                    </figure>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="clothing-stores-sec software-sec">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-5">
                <div className="clothing-stores-img">
                    <figure>
                        <img src="/assets/images/img538.jpg" alt="Why Choose ChittorTech" />
                    </figure>
                </div>
            </div>
            <div className="col-md-7">
                <div className="clothing-stores-text software-wrap specialized-box">
                    <h2>Why Choose ChittorTech?</h2>
                    <ul>
                        <li><strong>End-to-End Automation:</strong> Complete automation from attendance to salary disbursal.</li>
                        <li><strong>Customizable Workflows:</strong> Tailor payroll processes, reports, and salary structures.</li>
                        <li><strong>Integrated with HR & Accounting Systems:</strong> Works seamlessly with AI & IT Solutions, Tally, QuickBooks, Zoho Books, and more.</li>
                        <li><strong>Compliance-Ready Framework:</strong> Automatic updates with the latest Indian labor laws and tax regulations.</li>
                        <li><strong>User-Friendly Dashboard:</strong> Simple, intuitive interface for non-technical HR staff.</li>
                        <li><strong>Scalable for Growth:</strong> From 20 to 10,000 employees, the system grows with your organization.</li>
                        <li><strong>Robust Security & Compliance:</strong> Protect sensitive employee data with encryption, audit logs, and role-based access.</li>
                        <li><strong>Flexible & Customizable:</strong> Workflows, fields, reports, and multi-location setups are fully adaptable.</li>
                    </ul>
                    <strong>Trusted by businesses across India for seamless payroll and HR automation.</strong>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="clothing-stores-sec software-sec need-helf-sec">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-7">
                <div className="clothing-stores-text software-wrap specialized-box">
                    <h2>Why ChittorTech Is Different</h2>
                    <p>There are many providers of cloud-based systems, but not all deliver the same value. At ChittorTech, we go beyond just technology—we provide partnership, innovation, and peace of mind.</p>
                    
                    <h3>Our Key Differentiators</h3>
                    <ul>
                        <li><strong>Tailored Solutions:</strong> We understand that no two businesses are alike. Our cloud systems are customizable, designed to fit your industry, size, and unique challenges.</li>
                        <li><strong>End-to-End Support:</strong> From consultation to migration and ongoing support, ChittorTech stays with you at every step.</li>
                        <li><strong>Security First Approach:</strong> With enterprise-grade encryption, two-factor authentication, and compliance-ready frameworks, we prioritize the safety of your data.</li>
                        <li><strong>Scalable for Growth:</strong> Whether you’re a startup or an enterprise, our systems scale as you grow, ensuring you’re never paying for more than you need.</li>
                        <li><strong>User-Friendly Platforms:</strong> Technology should simplify, not complicate. Our cloud platforms are intuitive, requiring minimal training for teams.</li>
                        <li><strong>Global Reach, Local Care:</strong> We serve businesses across the world but with personalized attention that feels local.</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-5">
                <div className="clothing-stores-img text-end">
                    <figure>
                        <img src="/assets/images/img539.jpg" alt="Why ChittorTech Is Different" />
                    </figure>
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
                        <h2>FAQs – How to Use <span>Chittortech Payroll Software</span></h2>
                    </div>

                    <div className="accordion" id="faqAccordion">
                        {/* FAQ 1 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Q1: How does Chittortech Payroll handle statutory compliance in India?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show"
                                aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    We automatically update PF, ESI, TDS, LWF, and professional tax calculations to reduce compliance risk.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 2 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Q2: Can the system integrate with attendance or biometric devices?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse"
                                aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Yes, full integration ensures accurate salary computation.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 3 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Q3: Is employee data secure?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse"
                                aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Data is encrypted in transit and at rest, with role-based access controls, audit logs, and secure backups.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 4 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Q4: Does it support multi-location organizations?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse"
                                aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Yes, manage payroll for multiple branches and departments from one dashboard.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 5 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Q5: Can we customize salary components?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse"
                                aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Yes, define allowances, deductions, bonuses, and benefits as per company policy.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 6 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    Q6: How are payslips generated and shared?
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse"
                                aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Payslips are auto-generated and accessible online via a secure employee portal.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 7 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSeven">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    Q7: What support is provided?
                                </button>
                            </h2>
                            <div id="collapseSeven" className="accordion-collapse collapse"
                                aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Full onboarding, training, and dedicated support for smooth payroll processing.
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
