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
                <i className={`fa-solid fa-screwdriver-wrench`}></i> Service AI & IT Solutions
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                After Sale Service & Warranty Management
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Track service requests, warranties, and technician assignments systematically.
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
                <i className={`fa-solid fa-screwdriver-wrench`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* header */}
   
{/* header */}
{/* inner banner section start here  */}

<section className="clothing-stores-sec software-sec">
   <div className="container">
      <div className="row align-items-center">
         
         {/* Text Content */}
         <div className="col-md-7 order-md-2">
            <div className="clothing-stores-text software-wrap specialized-box">
               <h2>After-Sales Service & Warranty Fulfilment</h2>

               <p>
                  <strong>By ChittorTech</strong><br /><br />
                  In today’s competitive and customer-driven market, selling a product is
                  only the beginning of the business relationship. The real differentiation
                  happens after the sale — through service quality, warranty management,
                  repair response time, and overall customer support experience.
               </p>

               <p>
                  Across industries, businesses are rapidly adopting
                  <strong>After-Sales Service & Warranty Fulfilment Management Systems</strong>
                  to streamline operations, reduce service costs, improve customer
                  satisfaction, and gain real-time visibility into product performance.
               </p>

               <p>
                  At <strong>ChittorTech</strong>, we provide advanced, cloud-based
                  After-Sales Service & Warranty Fulfilment software designed to help
                  organizations manage service operations efficiently across multiple
                  locations, dealers, and service partners.
               </p>

               <p>
                  Below is a clear, practical, and industry-wise breakdown of who uses
                  After-Sales & Warranty Fulfilment systems today — from
                  <strong>highest adoption industries to emerging sectors.</strong>
               </p>
            </div>
         </div>

         {/* Image */}
         <div className="col-md-5 order-md-1">
            <div className="clothing-stores-img text-end">
               <figure>
                  <img src="/assets/images/img104.jpg" alt="After Sales Warranty Management Software" />
               </figure>
            </div>
         </div>

      </div>
   </div>
</section>

{/* inner banner section end here  */}
<section className="manufacturing-key section-bg">
  <div className="container">

    <div className="text-center mb-5">
      <h2>Industries That Strongly Depend on Warranty & After-Sales Management Systems</h2>
      <p>Industries where warranty, service, and after-sales workflows are mission-critical for operations, cost control, and customer satisfaction.</p>
    </div>

    <div className="row justify-content-center gy-4">

      {/* 1. Consumer Durables */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>1) Consumer Durables <span className="badge bg-success">Very High Usage</span></h3>
          <p>Largest adopter of warranty and after-sales workflow systems.</p>

          <strong>Examples:</strong>
          <ul>
            <li>TVs, Refrigerators, Washing Machines</li>
            <li>Air Conditioners, Microwaves</li>
            <li>Mobiles, Laptops, Tablets</li>
            <li>Water Purifiers, Kitchen Appliances</li>
          </ul>

          <strong>Typical Processes:</strong>
          <ul>
            <li>Warranty registration (online/offline)</li>
            <li>QR / serial number tracking</li>
            <li>Service ticket & TAT tracking</li>
            <li>Spare parts & engineer routing</li>
            <li>AMC & replacement workflows</li>
          </ul>

          <strong>Business Impact:</strong>
          <ul>
            <li>✔ Faster service resolution</li>
            <li>✔ Reduced warranty fraud</li>
            <li>✔ Higher customer satisfaction</li>
          </ul>
        </div>
      </div>

      {/* 2. Electronics & Electrical */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>2) Electronics & Electrical Manufacturing</h3>
          <p>Serial and batch-level tracking is critical in this industry.</p>

          <strong>Examples:</strong>
          <ul>
            <li>LED Lights, Switches, Fans</li>
            <li>UPS, Inverters, Batteries</li>
            <li>Solar Equipment, CCTV, Routers</li>
          </ul>

          <strong>Key Processes:</strong>
          <ul>
            <li>Serial & batch tracking</li>
            <li>Failure rate analysis</li>
            <li>Dealer & service network control</li>
            <li>RMA & replacement approvals</li>
          </ul>

          <strong>Benefits:</strong>
          <ul>
            <li>✔ Faster defect detection</li>
            <li>✔ Reduced replacement loss</li>
            <li>✔ Better dealer coordination</li>
          </ul>
        </div>
      </div>

      {/* 3. Automobile */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>3) Automobile & Auto Components</h3>
          <p>Warranty claims involve high costs and strict approval workflows.</p>

          <strong>Examples:</strong>
          <ul>
            <li>Car & two-wheeler manufacturers</li>
            <li>EV companies</li>
            <li>Battery & tyre manufacturers</li>
          </ul>

          <strong>Warranty Workflows:</strong>
          <ul>
            <li>Dealer warranty claims</li>
            <li>Inspection & approvals</li>
            <li>Recall campaign tracking</li>
            <li>Fraud detection</li>
          </ul>

          <strong>With Chittortech:</strong>
          <ul>
            <li>✔ Centralized claim control</li>
            <li>✔ Dealer performance tracking</li>
            <li>✔ Cost analytics</li>
          </ul>
        </div>
      </div>

      {/* 4. Industrial Machinery */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>4) Industrial Machinery & Heavy Equipment</h3>
          <p>Downtime directly impacts revenue and production.</p>

          <strong>Examples:</strong>
          <ul>
            <li>CNC, Textile & Printing Machines</li>
            <li>Packaging Machines</li>
            <li>Construction Equipment</li>
          </ul>

          <strong>Service Needs:</strong>
          <ul>
            <li>On-site field service</li>
            <li>Preventive maintenance</li>
            <li>AMC & breakdown tracking</li>
            <li>Technician scheduling</li>
          </ul>

          <strong>Benefits:</strong>
          <ul>
            <li>✔ SLA compliance</li>
            <li>✔ Reduced downtime</li>
            <li>✔ Predictive maintenance</li>
          </ul>
        </div>
      </div>

      {/* 5. Medical Devices */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>5) Medical Devices & Healthcare</h3>
          <p>Compliance, safety, and audit trails are mandatory.</p>

          <strong>Examples:</strong>
          <ul>
            <li>MRI, CT, X-Ray Machines</li>
            <li>ECG & ICU Monitoring Devices</li>
          </ul>

          <strong>Key Processes:</strong>
          <ul>
            <li>Machine service history</li>
            <li>Calibration tracking</li>
            <li>SLA & emergency breakdowns</li>
            <li>Compliance reporting</li>
          </ul>

          <strong>Impact:</strong>
          <ul>
            <li>✔ Regulatory compliance</li>
            <li>✔ Reduced hospital downtime</li>
          </ul>
        </div>
      </div>

      {/* 6. IT Hardware */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>6) IT Hardware & Office Equipment</h3>

          <strong>Examples:</strong>
          <ul>
            <li>Printers, Copiers</li>
            <li>Servers & Networking Devices</li>
            <li>POS & Barcode Scanners</li>
          </ul>

          <strong>Common Workflows:</strong>
          <ul>
            <li>Ticket-based complaint system</li>
            <li>Remote + field support</li>
            <li>AMC & contract tracking</li>
            <li>Replacement approvals</li>
          </ul>
        </div>
      </div>

      {/* 7–12 (Compact Cards) */}
      <div className="col-md-6">
        <div className="key-box">
          <h3>7) HVAC & Solar Installations</h3>
          <ul>
            <li>Site-based installation tracking</li>
            <li>Warranty & service reminders</li>
            <li>Technician routing</li>
          </ul>

          <h3 className="mt-3">8) Furniture & Modular Kitchens</h3>
          <ul>
            <li>Installation issues</li>
            <li>Hardware warranty tracking</li>
            <li>On-site service scheduling</li>
          </ul>

          <h3 className="mt-3">9) Water Purifiers & RO</h3>
          <ul>
            <li>Filter replacement cycles</li>
            <li>AMC subscriptions</li>
            <li>Recurring service reminders</li>
          </ul>
        </div>
      </div>

      <div className="col-md-6">
        <div className="key-box">
          <h3>10) Elevators & Lifts</h3>
          <ul>
            <li>Installation & inspection tracking</li>
            <li>SLA & breakdown alerts</li>
            <li>Maintenance contracts</li>
          </ul>

          <h3 className="mt-3">11) Smart Devices & IoT</h3>
          <ul>
            <li>Device-level warranty</li>
            <li>Firmware support</li>
            <li>Remote diagnostics</li>
          </ul>

          <h3 className="mt-3">12) Power & Energy Equipment</h3>
          <ul>
            <li>Transformers, Generators, Batteries</li>
            <li>Preventive maintenance</li>
            <li>Spare parts planning</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>
 
 




<section className="why-choose-sec bridal-sec">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-5 order-md-2">
            <div className="expertise-img text-start">
               <figure>
                  <img src="/assets/images/img238.jpg" alt="Local &amp; National SEO Expertise" />
               </figure>
            </div>
         </div>
        <div className="col-md-7 order-md-1">
   <div className="heading-wrap text-start">
      <h2>Why More Industries Are Adopting <span>After-Sales & Warranty Software</span></h2>
      <p>
         Businesses today focus on long-term customer relationships rather than one-time sales.
         That’s why companies are choosing ChittorTech’ After-Sales & Warranty
         Fulfilment Software.
      </p>
   </div>

   <div className="expertise-wrap bridal-wrap">
      <ul>
         <li>✔ Better customer experience & brand trust</li>
         <li>✔ Faster complaint & service resolution</li>
         <li>✔ Reduced warranty fraud & misuse</li>
         <li>✔ Controlled warranty & service costs</li>
         <li>✔ Real-time field engineer tracking</li>
         <li>✔ Complete spare parts visibility & planning</li>
         <li>✔ Data-driven product improvement insights</li>
         <li>✔ SLA compliance & turnaround time monitoring</li>
         <li>✔ Automated AMC & extended warranty renewals</li>
         <li>✔ Centralized dealer & service centre control</li>
      </ul>
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
                  <img src="/assets/images/img239.jpg" alt="Local &amp; National SEO Expertise" />
               </figure>
            </div>
         </div>
        <div className="col-md-7">
   <div className="heading-wrap text-start">
      <h2>How <span>ChittorTech</span> Helps</h2>
      <p>
         Our cloud-based after-sales & warranty platform is designed to streamline service
         operations and turn after-sales into a strategic business advantage.
      </p>
   </div>

   <div className="expertise-wrap bridal-wrap">
      <ul>
         <li>Centralized ticket & complaint management</li>
         <li>Field engineer mobile application for on-site service</li>
         <li>Spare parts tracking & inventory visibility</li>
         <li>Dealer & service centre management</li>
         <li>Warranty, AMC & extended warranty automation</li>
         <li>Serial number & batch-level product tracking</li>
         <li>Real-time dashboards for service monitoring</li>
         <li>Advanced analytics & failure trend reports</li>
         <li>Multi-location & multi-branch support</li>
         <li>Role-based access control for secure operations</li>
      </ul>
   </div>

   <p>
      We help <strong>manufacturers, distributors, and service-driven organizations</strong>
      transform their after-sales operations into a powerful competitive advantage.
   </p>
</div>

      </div>
   </div>
</section>
       

{/*  faq template section */}
<section className="faq-template py-5">
   <div className="container">
      <div className="heading-wrap text-center mb-4">
         <h2>Frequently Asked <span>Questions (FAQs)</span></h2>
      </div>
      <div className="row">
         <div className="col-md-12">
            <div className="faq-section">
               <div className="accordion" id="faqAccordion">

   {/* FAQ 1 */}
   <div className="accordion-item">
      <h2 className="accordion-header" id="heading1">
         <button className="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
            What is After-Sales Service & Warranty Fulfilment Software?
         </button>
      </h2>
      <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
         <div className="accordion-body">
            After-Sales Service & Warranty Fulfilment Software is a centralized digital platform that helps businesses manage customer complaints, warranty claims, service requests, spare parts, field engineers, and AMC contracts after product sale. It ensures faster resolution, better tracking, and improved customer experience.
         </div>
      </div>
   </div>

   {/* FAQ 2 */}
   <div className="accordion-item">
      <h2 className="accordion-header" id="heading2">
         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
            Which industries need After-Sales & Warranty software the most?
         </button>
      </h2>
      <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
         <div className="accordion-body">
            Industries with high product volumes, warranty commitments, and field service dependency benefit the most, including consumer durables, electronics & electrical manufacturing, automobiles, industrial machinery, medical devices, IT hardware, HVAC & solar, water purifiers, elevators, and smart IoT devices.
         </div>
      </div>
   </div>

   {/* FAQ 3 */}
   <div className="accordion-item">
      <h2 className="accordion-header" id="heading3">
         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
            Why is after-sales management critical for business growth?
         </button>
      </h2>
      <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
         <div className="accordion-body">
            Customers remember service quality more than the product itself. Poor after-sales service leads to negative reviews, warranty fraud, and customer churn, while efficient service builds trust, loyalty, repeat sales, and long-term brand value.
         </div>
      </div>
   </div>

   {/* FAQ 4 */}
   <div className="accordion-item">
      <h2 className="accordion-header" id="heading4">
         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
            How does ChittorTech manage warranty claims?
         </button>
      </h2>
      <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
         <div className="accordion-body">
            ChittorTech automates the complete warranty lifecycle including warranty registration, serial & batch verification, claim validation, approval or rejection workflows, repair or replacement processing, and detailed cost tracking with reports.
         </div>
      </div>
   </div>

   {/* FAQ 5 */}
   <div className="accordion-item">
      <h2 className="accordion-header" id="heading5">
         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
            Can the system track products by serial number or batch?
         </button>
      </h2>
      <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
         <div className="accordion-body">
            Yes. The system supports serial-number-wise and batch-wise tracking, allowing businesses to trace products from sale to service history, detect batch failures early, reduce warranty fraud, and improve root cause analysis.
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
    </>
  );
}
