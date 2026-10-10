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
                <i className={`fa-solid fa-chart-line`}></i> Lead Management
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                AI Lead Nurturing & Automated Growth Engine
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Capture, prioritize, and nurture leads automatically across WhatsApp, Email, and Web forms.
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
                <i className={`fa-solid fa-chart-line`}></i>
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
          <h2>ChittorTech – Complete Lead Management System</h2>
          <p>Every business wants more sales. But the truth is, getting leads is only the first step. The real challenge is managing those leads properly — from the first message to the final bill.</p>
          <p>Many companies lose potential customers because:</p>
          <ul>
            <li>Their field team and backend team work separately.</li>
            <li>Updates are not done in real time.</li>
            <li>Follow-ups are missed.</li>
            <li>Quotations and orders are delayed.</li>
            <li>They don’t have automation or chatbot support.</li>
          </ul>
          <p><strong>ChittorTech</strong> solves all these problems with one single powerful platform —</p>
         <p>
  👉 <strong>
   A Complete
    <a href="/lead-management" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
      Lead Management System
    </a>
  </strong> that connects your entire sales process:
</p>

          <p><strong>Lead ➝ Quote ➝ PO ➝ Order ➝ Billing ➝ Invoice</strong></p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="clothing-stores-img text-end">
          <figure>
            <img src="/assets/images/img185.jpg" alt="Lead Management System" />
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
        <div className="clothing-stores-img text-end">
          <figure>
            <img src="/assets/images/img501.jpg" alt="Lead Management Dashboard" />
          </figure>
        </div>
      </div>
      <div className="col-md-6">
        <div className="clothing-stores-text">
          <h2>Capture Leads from Anywhere</h2>
          <p>Leads can come from many sources:</p>
          <ul>
            <li>WhatsApp messages</li>
            <li>Incoming calls</li>
            <li>Website contact forms</li>
            <li>Social media ads</li>
            <li>Walk-in customers</li>
            <li>Referrals</li>
          </ul>
          <p>Our system automatically captures all leads in one dashboard.</p>
          <ul>
            <li>No need for manual entry.</li>
            <li>No searching through WhatsApp or call logs.</li>
            <li>Every lead is assigned to the right salesperson or agent.</li>
          </ul>
          <h4>Example:</h4>
          <p>
            A customer messages your WhatsApp Business number.<br />
            The system auto-creates a lead with their name, number, and message.<br />
            The backend team or field agent can instantly start working on the lead.
          </p>
          <p><strong>👉 Result:</strong> No leads are missed. Response time is fast.</p>
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
          <h2>Real-Time Collaboration Between Teams</h2>
          <p>In many businesses:</p>
          <ul>
            <li>Field salespeople keep updates on paper or personal phones.</li>
            <li>Backend agents don’t know the latest status.</li>
            <li>Managers have no clear visibility.</li>
          </ul>
          <p><strong>ChittorTech</strong> allows real-time collaboration:</p>
          <ul>
            <li>Field agent updates the lead after the meeting.</li>
            <li>Backend team sees the status immediately.</li>
            <li>Everyone works together on one screen.</li>
          </ul>
          <p><strong>👉 This improves:</strong></p>
          <ul>
            <li> Team communication</li>
            <li> Lead follow-up quality</li>
            <li> Customer experience</li>
          </ul>
        </div>
      </div>

      <div className="col-md-6">
        <div className="clothing-stores-img text-start">
          <figure>
            <img src="/assets/images/img503.jpg" alt="Real-Time Collaboration" />
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
        <div className="clothing-stores-img text-end">
          <figure>
            <img src="/assets/images/img188.jpg" alt="Quick Quote Generation" />
          </figure>
        </div>
      </div>
      <div className="col-md-6">
        <div className="clothing-stores-text">
          <h2>Quick and Easy Quote Generation</h2>
          <p>Once a customer confirms interest:</p>
          <ul>
            <li>Sales team can create a quotation right inside the system.</li>
            <li>No need to use Word, Excel, or separate software.</li>
            <li>Product details, pricing, and terms are added quickly.</li>
            <li>Quotation is sent to the customer in just a few clicks.</li>
          </ul>
          <p>All quotations are stored automatically with the lead. Everyone can track:</p>
          <ul>
            <li> When it was sent</li>
            <li> What was offered</li>
            <li> Who handled it</li>
          </ul>
          <p><strong>👉 This saves time and avoids errors.</strong></p>
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
          <h2>Convert PO to Order and Billing</h2>
          <p>After PO approval:</p>
          <ul>
            <li>The system automatically converts it into a Sales Order.</li>
            <li>Internal approvals can be done with one click.</li>
            <li>The order moves to the billing team.</li>
            <li>Once payment is received, the invoice is generated automatically.</li>
          </ul>
          <p><strong>👉 Complete flow:</strong></p>
          <p><strong>Lead ➝ Quote ➝ PO ➝ Order ➝ Billing ➝ Invoice</strong></p>
          <p><strong>No manual work. No double entry. No delays.</strong></p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="clothing-stores-img text-end">
          <figure>
            <img src="/assets/images/img504.jpg" alt="Convert PO to Order and Billing" />
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
        <div className="clothing-stores-img text-end">
          <figure>
            <img src="/assets/images/img505.jpg" alt="Built-in Approvals for Control" />
          </figure>
        </div>
      </div>
      <div className="col-md-6">
        <div className="clothing-stores-text">
          <h2>Built-in Approvals for Control</h2>
          <p>To keep the process secure and controlled:</p>
          <ul>
            <li>Quotations can be set to go for manager approval before sending.</li>
            <li>POs can be verified before order creation.</li>
            <li>Orders and invoices can be checked by authorized staff.</li>
          </ul>
          <h3>This ensures:</h3><ul>
            <li> Correct pricing</li>
            <li> No unauthorized discounts</li>
            <li> Clear accountability</li>
            <li> Full audit trail</li>
          </ul>
          <p><strong>Approvals can be done from desktop or mobile — quick and simple.</strong></p>
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
          <h2>Built-in Approvals for Control</h2>
          <p>To keep the process secure and controlled:</p>
          <ul>
            <li>Quotations can be set to go for manager approval before sending.</li>
            <li>POs can be verified before order creation.</li>
            <li>Orders and invoices can be checked by authorized staff.</li>
          </ul>
          <p><strong>This ensures:</strong></p>
          <ul>
            <li>Correct pricing</li>
            <li>No unauthorized discounts</li>
            <li>Clear accountability</li>
            <li>Full audit trail</li>
          </ul>
          <p><strong>Approvals can be done from desktop or mobile — quick and simple.</strong></p>
        </div>
      </div>

      <div className="col-md-6">
        <div className="clothing-stores-img text-start">
          <figure>
            <img src="/assets/images/img506.jpg" alt="Built-in Approvals for Control" />
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
        <div className="clothing-stores-img text-end">
          <figure>
            <img src="/assets/images/img507.jpg" alt="AI Chatbot – Your 24/7 Sales Helper" />
          </figure>
        </div>
      </div>
      <div className="col-md-6">
        <div className="clothing-stores-text">
          <h2>AI Chatbot – Your 24/7 Sales Helper</h2>
          <p>Customers often send messages at night, on weekends, or outside working hours.<br />
          Your team can’t reply all the time, but our AI chatbot can.</p>
          
          <p><strong>✨ What the chatbot can do:</strong></p>
          <ul>
            <li>Reply instantly to WhatsApp or website inquiries.</li>
            <li>Share PPT, PDF, Excel or product brochures from the system.</li>
            <li>Answer common questions (price, features, availability).</li>
            <li>Collect customer details automatically.</li>
            <li>Pass only hot or serious leads to the sales team.</li>
          </ul>
          
          <p><strong>Example:</strong></p>
          <ul>
            <li>If someone just asks about pricing, the bot answers.</li>
            <li>If the customer wants to buy, the bot alerts your team.</li>
          </ul>

          <p><strong>👉 This saves your team’s time and improves customer service.</strong></p>
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
          <h2>Hot Lead Detection with AI</h2>
          <p>Not every lead is ready to buy. Some are just asking basic questions.</p>
          <p>Our system uses AI to score leads:</p>
          <ul>
            <li>Hot leads (ready to buy) get top priority.</li>
            <li>Warm or cold leads can be nurtured through automated messages.</li>
            <li>Salespeople focus only on leads that really matter.</li>
          </ul>
          <p><strong>👉 This increases conversion rates and saves time.</strong></p>
        </div>
      </div>

      <div className="col-md-6">
        <div className="clothing-stores-img text-end">
          <figure>
            <img src="/assets/images/img508.jpg" alt="Hot Lead Detection with AI" />
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
        <div className="clothing-stores-img text-end">
          <figure>
            <img src="/assets/images/img509.jpg" alt="WhatsApp, Calls & All Channels in One Place" />
          </figure>
        </div>
      </div>
      <div className="col-md-6">
        <div className="clothing-stores-text">
          <h2>WhatsApp, Calls & All Channels in One Place</h2>
          <p>Chittortech Lead Management System connects with:</p>
          <ul>
            <li> WhatsApp Business</li>
            <li> Call management systems</li>
            <li> Website chat</li>
            <li> Email campaigns</li>
            <li> AI Knowledge Base / AI & IT Solutions</li>
          </ul>
          <p><strong>👉 This means:</strong></p>
          <ul>
            <li>Every message, call, or email is saved with the lead.</li>
            <li>Your team sees full conversation history.</li>
            <li>Managers can track communication quality and speed.</li>
            <li>No need to check multiple apps. Everything is inside one platform.</li>
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
          <h2>Auto Follow-Ups & Reminders</h2>
          <p>Many businesses lose customers just because they forget to follow up.</p>
          <p>With our system:</p>
          <ul>
            <li>Automatic reminders are sent for follow-ups.</li>
            <li>Calendar integration helps salespeople plan meetings.</li>
            <li>Customers can receive automatic WhatsApp or email reminders.</li>
          </ul>
          <p><strong>👉 No more lost leads.</strong></p>
          <p><strong>👉 More chances of closing deals.</strong></p>
        </div>
      </div>

      <div className="col-md-6">
        <div className="clothing-stores-img text-start">
          <figure>
            <img src="/assets/images/img510.jpg" alt="Auto Follow-Ups & Reminders" />
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
        <div className="clothing-stores-img text-end">
          <figure>
            <img src="/assets/images/img512.jpg" alt="Real-Time Dashboard & Reports" />
          </figure>
        </div>
      </div>
      <div className="col-md-6">
        <div className="clothing-stores-text">
          <h2>Real-Time Dashboard & Reports</h2>
          <p>Managers need a clear picture of what’s happening.</p>
          <p>Our dashboard shows:</p>
          <ul>
            <li>Total leads received</li>
            <li>Hot leads</li>
            <li>Quotes sent</li>
            <li>PO received</li>
            <li>Orders generated</li>
            <li>Invoices made</li>
            <li>Follow-ups pending</li>
          </ul>
          <p>Reports can be sorted by:</p>
          <ul>
            <li>Date</li>
            <li>Team member</li>
            <li>Location</li>
            <li>Product or service</li>
          </ul>
          <p>Managers can check all this on mobile too.</p>
          <p><strong>👉 This helps in better decision-making and faster action.</strong></p>
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
          <h2>How the AI Chatbot Helps Your Business</h2>
          <p>Our chatbot isn’t just a basic bot. It uses AI (Artificial Intelligence) and NLP (Natural Language Processing) to:</p>
          <ul>
            <li>Understand real customer intent</li>
            <li>Collect data automatically</li>
            <li>Schedule demos or trigger quote actions</li>
            <li>Learn and give better answers over time</li>
          </ul>
          <p>This reduces manual work for your team and makes the customer experience fast and smart.</p>
          <ul>
            <li>24/7 customer support</li>
            <li>Faster lead response</li>
            <li>Less workload on your staff</li>
          </ul>
        </div>
      </div>

      <div className="col-md-6">
        <div className="clothing-stores-img text-end">
          <figure>
            <img src="/assets/images/img513.jpg" alt="AI Chatbot Benefits" />
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
        <div className="clothing-stores-img text-end">
          <figure>
            <img src="/assets/images/img186.jpg" alt="Easy to Customize" />
          </figure>
        </div>
      </div>
      <div className="col-md-6">
        <div className="clothing-stores-text">
          <h2>Easy to Customize</h2>
          <p>Every company works differently. Our system can be customized to match your process:</p>
          <ul>
            <li>Add your own fields and workflows</li>
            <li>Set approval rules as per your team structure</li>
            <li>Connect with your existing AI & IT Solutions or accounting system</li>
            <li>Add or remove features as your business grows</li>
          </ul>
          <p><strong>👉 Whether you have 5 users or 5,000 users — it scales easily.</strong></p>
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
          <h2>Safe and Secure System</h2>
          <p>Your data is very valuable. We make sure it stays safe:</p>
          <ul>
            <li>End-to-end data encryption</li>
            <li>Secure cloud hosting</li>
            <li>Role-based access control</li>
            <li>Audit trails of every action</li>
            <li>Only authorized people can see or change data</li>
          </ul>
          <p>We take data privacy and security very seriously.</p>
        </div>
      </div>

      <div className="col-md-6">
        <div className="clothing-stores-img text-start">
          <figure>
            <img src="/assets/images/img187.jpg" alt="Safe and Secure System" />
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
        <div className="clothing-stores-img text-end">
          <figure>
            <img src="/assets/images/img514.jpg" alt="Example of How the System Works" />
          </figure>
        </div>
      </div>
      <div className="col-md-6">
        <div className="clothing-stores-text">
          <h2>Example of How the System Works</h2>
          <p>Let’s take a simple example:</p>
          <ul>
            <li>A customer sends a message on WhatsApp.</li>
            <li>The AI chatbot replies instantly and collects their name and requirement.</li>
            <li>The system creates a lead automatically.</li>
            <li>If the customer is serious, the bot sends the lead to a salesperson.</li>
            <li>The salesperson talks to the customer.</li>
            <li>A quote is created and shared.</li>
            <li>Customer approves the quote → sends PO.</li>
            <li>PO is approved and converted to an order.</li>
            <li>Billing is done and invoice is generated.</li>
            <li>Manager can see the full lead journey in the dashboard.</li>
          </ul>
          <p>All this happens in one platform — fast, easy, and without confusion.</p>
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
          <h2>Key Benefits of Using Chittortech Lead Management</h2>
          <ul>
            <li> Leads from WhatsApp, Calls, Website — All in One Place</li>
            <li> Field & Backend Teams Work Together</li>
            <li> Fast Quoting and PO Processing</li>
            <li> Automatic Order and Billing</li>
            <li> Smart Chatbot for Instant Replies</li>
            <li> Hot Lead Detection</li>
            <li> Reminders and Auto Follow-ups</li>
            <li> Real-Time Reporting</li>
            <li> Secure and Easy to Use</li>
          </ul>
          <p>This system gives your sales team more time to sell and less time doing manual work.</p>
        </div>
      </div>

      <div className="col-md-6">
        <div className="clothing-stores-img text-end">
          <figure>
            <img src="/assets/images/img515.jpg" alt="Chittortech Lead Management Benefits" />
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
        <div className="clothing-stores-img text-end">
          <figure>
            <img src="/assets/images/img516.jpg" alt="Why Choose ChittorTech" />
          </figure>
        </div>
      </div>
      <div className="col-md-6">
        <div className="clothing-stores-text">
          <h2>Why Choose ChittorTech</h2>
          <ul>
            <li> Easy to Use: No complicated steps. Anyone can learn quickly.</li>
            <li> AI Automation: Saves your team’s time.</li>
            <li> Fast Response: No lead is ever missed.</li>
            <li> Works on Mobile and Desktop: For office and field teams.</li>
            <li> Customizable: Fits your exact sales process.</li>
            <li> Scalable: Grows with your business.</li>
            <li> Secure: Data is safe and private.</li>
          </ul>
          <p><strong>👉 We give your business the tools to grow faster.</strong></p>
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
          <h2>Future of Sales = Smart Lead Management</h2>
          <p>Sales is no longer about just collecting leads. It’s about responding fast, working smart, and closing deals quickly.</p>
          <p>With ChittorTech Lead Management System, you can:</p>
          <ul>
            <li>Manage your leads from WhatsApp to Invoice in one place</li>
            <li>Automate your sales steps</li>
            <li>Use AI bots to handle basic queries</li>
            <li>Give your team more time to focus on real customers</li>
            <li>Increase your conversions and revenue</li>
          </ul>
          <p>This is not just a software — <strong>👉 It’s your complete digital sales engine.</strong></p>
        </div>
      </div>

      <div className="col-md-6">
        <div className="clothing-stores-img text-end">
          <figure>
            <img src="/assets/images/img517.jpg" alt="Smart Lead Management" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
