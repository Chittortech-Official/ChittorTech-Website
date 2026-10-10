"use client";

import React, { useEffect } from 'react';

const policyContent = {
  privacy: {
    title: "Privacy Policy",
    content: (
      <>
        <p>At ChittorTech, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website, applications, and services.</p>
        
        <h3>1. Information We Collect</h3>
        <p>We may collect the following information:</p>
        <ul>
          <li>Name and contact information (email address)</li>
          <li>Business/project requirements</li>
          <li>Technical information such as browser type, device information, and IP address</li>
          <li>Any information voluntarily shared through contact forms or communication channels</li>
        </ul>
        
        <h3>2. How We Use Information</h3>
        <p>The collected information is used for:</p>
        <ul>
          <li>Project communication and consultation</li>
          <li>Providing technical support and customer service</li>
          <li>Improving our website, applications, and services</li>
          <li>Responding to inquiries and service requests</li>
          <li>Maintaining security and preventing fraudulent activities</li>
        </ul>
        
        <h3>3. Data Protection & Security</h3>
        <p>ChittorTech takes appropriate technical and organizational measures to protect your personal data against unauthorized access, misuse, disclosure, or loss.</p>
        
        <h3>4. Confidentiality</h3>
        <p>Any sensitive business or project-related information shared with ChittorTech during development or consultation will be treated as strictly confidential.</p>
        
        <h3>5. Third-Party Services</h3>
        <p>We may use trusted third-party services such as:</p>
        <ul>
          <li>Google Analytics</li>
          <li>Firebase</li>
          <li>Cloud hosting providers</li>
          <li>Payment gateways</li>
        </ul>
        <p>These services may collect limited technical information necessary for functionality and analytics.</p>
        
        <h3>6. Cookies</h3>
        <p>Our website may use cookies to improve user experience, website functionality, and analytics performance.</p>
        
        <h3>7. Data Sharing</h3>
        <p>We do not sell, trade, or rent users’ personal information to third parties for marketing purposes.</p>
        
        <h3>8. User Rights</h3>
        <p>Users may request:</p>
        <ul>
          <li>Access to their personal data</li>
          <li>Correction of inaccurate information</li>
          <li>Deletion of personal information, subject to legal obligations</li>
        </ul>
        
        <h3>9. External Links</h3>
        <p>Our website or applications may contain links to external websites. We are not responsible for the privacy practices of third-party websites.</p>
        
        <h3>10. Changes to This Policy</h3>
        <p>ChittorTech reserves the right to update this Privacy Policy at any time. Updates will be posted on this page.</p>
        
        <h3>11. Contact Us</h3>
        <p>If you have any questions regarding this Privacy Policy, you may contact us at:</p>
        <ul>
          <li><strong>General &amp; Privacy:</strong> contact@chittortech.in</li>
          <li><strong>Business Enquiries:</strong> business@chittortech.in</li>
          <li><strong>Website:</strong> ChittorTech</li>
        </ul>
      </>
    )
  },
  terms: {
    title: "Terms & Conditions",
    content: (
      <>
        <p>Welcome to ChittorTech. By accessing our website, services, or engaging in any project with us, you agree to the following Terms & Conditions.</p>
        
        <h3>1. Project Scope & Requirement Approval</h3>
        <p>Before project initiation, ChittorTech will discuss and document project requirements through a Software Requirement Specification (SRS) or mutually agreed scope document.</p>
        <p>The client is responsible for reviewing and approving the scope before development begins. Any changes or additional features requested after approval may require additional charges and timeline adjustments.</p>
        
        <h3>2. Payment Policy</h3>
        <p>A minimum advance payment is required before project development begins. Development work shall commence only after payment confirmation.</p>
        <p>Remaining payments must be completed according to the agreed project milestones or before final delivery.</p>
        
        <h3>3. Project Timeline & Demo</h3>
        <p>Estimated timelines are provided based on project complexity. Initial demos or previews may be shared during development for client review and feedback.</p>
        <p>Project timelines may vary depending on:</p>
        <ul>
          <li>client response time</li>
          <li>revision requests</li>
          <li>third-party service dependencies</li>
        </ul>
        
        <h3>4. Client Review & Acceptance</h3>
        <p>Clients are requested to review delivered work within a reasonable period and report any functional issues or concerns.</p>
        <p>If no major concerns are communicated after delivery, the project may be considered approved and completed.</p>
        
        <h3>5. Communication</h3>
        <p>Official communication may take place through:</p>
        <ul>
          <li>Email</li>
          <li>Project management tools</li>
        </ul>
        <p>Clients are encouraged to maintain timely communication to ensure smooth project progress.</p>
        
        <h3>6. Service Suspension</h3>
        <p>ChittorTech reserves the right to temporarily suspend services in cases of overdue payments, misuse, policy violations, or security concerns.</p>
        
        <h3>7. Intellectual Property</h3>
        <p>Unless otherwise agreed in writing:</p>
        <ul>
          <li>ChittorTech retains ownership of proprietary development frameworks, reusable modules, and internal tools.</li>
          <li>Clients receive usage rights for the delivered project for their intended business operations.</li>
        </ul>
        <p>Complete source code ownership transfer may require a separate written agreement.</p>
        
        <h3>8. Support & Maintenance</h3>
        <p>Complimentary support, if included, shall be limited to the agreed duration after project delivery.</p>
        <p>Future updates, maintenance, feature additions, hosting renewals, or technical support may require separate charges.</p>
        
        <h3>9. Refund Policy</h3>
        <p>Payments made for development, design, hosting, domain registration, or digital services are generally non-refundable once work has commenced.</p>
        <p>However, ChittorTech will make reasonable efforts to ensure client satisfaction and project transparency.</p>
        
        <h3>10. Client Content Responsibility</h3>
        <p>Clients are responsible for ensuring they possess proper rights, licenses, and permissions for all content, images, logos, trademarks, or materials provided to ChittorTech.</p>
        
        <h3>11. Third-Party Services</h3>
        <p>Some projects may depend on third-party services such as:</p>
        <ul>
          <li>Google Services</li>
          <li>Firebase</li>
          <li>Hosting providers</li>
          <li>Payment gateways</li>
          <li>External APIs</li>
        </ul>
        <p>ChittorTech is not responsible for downtime, policy changes, or service interruptions caused by third-party providers.</p>
        
        <h3>12. Security & Backups</h3>
        <p>While industry-standard security practices are followed, ChittorTech cannot guarantee absolute protection against cyber threats, server failures, or unforeseen technical incidents.</p>
        <p>Clients are encouraged to maintain independent backups of critical data.</p>
        
        <h3>13. Limitation of Liability</h3>
        <p>ChittorTech shall not be liable for indirect, incidental, or consequential damages arising from the use of our services, software, or website.</p>
        
        <h3>14. Governing Jurisdiction</h3>
        <p>Any legal disputes shall be subject to the jurisdiction of the courts located in Chittorgarh, Rajasthan, India.</p>
        
        <h3>15. Changes to Terms</h3>
        <p>ChittorTech reserves the right to update or modify these Terms & Conditions at any time. Updated versions will be published on our website.</p>
        
        <h3>16. Contact Information</h3>
        <p>For any questions regarding these Terms & Conditions, you may contact:</p>
        <ul>
          <li><strong>General Enquiry:</strong> contact@chittortech.in</li>
          <li><strong>Business Enquiries:</strong> business@chittortech.in</li>
          <li><strong>Website:</strong> ChittorTech</li>
        </ul>
      </>
    )
  },
  support: {
    title: "Contact & Support",
    content: (
      <>
        <p>At ChittorTech, we are committed to providing reliable support and timely communication for all clients and users.</p>
        
        <h3>1. Support Channels</h3>
        <p>For technical support, business inquiries, bug reports, or project discussions, you may contact us through our official channels:</p>
        <ul>
          <li><strong>Business Enquiries:</strong> business@chittortech.in</li>
          <li><strong>General &amp; Technical Support:</strong> contact@chittortech.in</li>
          <li><strong>Website:</strong> ChittorTech</li>
        </ul>
        
        <h3>2. Support Availability</h3>
        <p>Our support team is generally available from Monday to Saturday during standard business hours.</p>
        <p>Response times may vary depending on inquiry volume and project complexity. Non-urgent requests are typically addressed within 24–48 business hours.</p>
        
        <h3>3. Technical Assistance</h3>
        <p>Clients may contact us for:</p>
        <ul>
          <li>Technical support</li>
          <li>Bug reporting</li>
          <li>Project-related assistance</li>
          <li>Service inquiries</li>
          <li>Maintenance requests</li>
        </ul>
        
        <h3>4. Communication Policy</h3>
        <p>To ensure efficient communication and record keeping, clients are encouraged to use official communication channels only.</p>
        
        <h3>5. Service Commitment</h3>
        <p>ChittorTech strives to provide professional, transparent, and timely support to all clients and users.</p>
      </>
    )
  },
  payments: {
    title: "Payment Terms & Refund Policy",
    content: (
      <>
        <p>ChittorTech maintains transparent commercial agreements with milestone billing and fair refund policies.</p>
        
        <h3>1. Milestone Billing Structure</h3>
        <p>Standard software projects are structured across three transparent milestones: 30–40% Kickoff Deposit, 30–40% Beta Staging Demo Approval, and 20–30% Final Handover &amp; Source Code Transfer.</p>
        
        <h3>2. Approved Payment Methods</h3>
        <p>Payments are accepted via NEFT/RTGS/IMPS direct bank transfers, UPI, credit/debit cards (via Razorpay/Stripe), and international SWIFT wire transfers.</p>
        
        <h3>3. Cancellation &amp; Refund Policy</h3>
        <p>Pre-development cancellations within 24 hours of advance payment receive a 90% refund. Once active development or SRS scope approval has commenced, advance deposits are non-refundable as they compensate for allocated engineering hours.</p>
        <p>Third-party fees (domains, cloud hosting servers, Google Play Console accounts, paid APIs) are 100% non-refundable.</p>
        
        <h3>4. Invoicing &amp; GST Compliance</h3>
        <p>All domestic Indian invoices comply with 18% GST regulations. International clients receive zero-rated export invoices in USD, EUR, or GBP.</p>
        
        <h3>5. Billing Inquiries</h3>
        <p>For invoice questions or receipt copies, contact <a href="mailto:business@chittortech.in">business@chittortech.in</a> or call +91 75974 51057.</p>
      </>
    )
  }
};

export default function PolicyModal({ type, onClose }) {
  useEffect(() => {
    // Disable scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!type || !policyContent[type]) return null;

  const { title, content } = policyContent[type];

  return (
    <div className="modal-overlay" onClick={onClose} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(15, 23, 42, 0.85)',
      backdropFilter: 'blur(10px)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="modal-content reveal reveal-active" onClick={e => e.stopPropagation()} style={{
        background: 'var(--bg-card, #0f172a)',
        border: '1px solid var(--glass-border, rgba(255, 255, 255, 0.15))',
        borderRadius: '30px',
        width: '100%',
        maxWidth: '720px',
        maxHeight: '85vh',
        overflowY: 'auto',
        position: 'relative',
        padding: 'clamp(1.5rem, 5vw, 3rem)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '25px',
          right: '25px',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          color: 'white',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          transition: 'all 0.3s ease'
        }}>
          <i className="fas fa-times"></i>
        </button>

        <h2 style={{ 
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
          marginBottom: '1.5rem', 
          background: 'var(--gradient, linear-gradient(135deg, #3b82f6, #06b6d4))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'var(--font-space-grotesk, sans-serif)',
          paddingRight: '50px'
        }}>{title}</h2>
        
        <div className="policy-text" style={{ 
          color: 'var(--text-muted, #94a3b8)', 
          lineHeight: '1.8',
          fontSize: '1.02rem'
        }}>
          {content}
        </div>

        <div style={{ marginTop: '2.5rem', borderTop: '1px solid var(--glass-border, rgba(255,255,255,0.12))', paddingTop: '1.5rem', textAlign: 'center' }}>
          <button onClick={onClose} className="btn btn-primary" style={{ padding: '0.8rem 2.5rem', borderRadius: '50px', background: 'linear-gradient(135deg, #2563eb, #06b6d4)', border: 'none', color: '#fff', fontWeight: '700' }}>
            I Understand
          </button>
        </div>
      </div>

      <style jsx global>{`
        .policy-text {
          font-family: var(--font-inter, sans-serif);
        }
        .policy-text h3 {
          margin: 2.2rem 0 1rem;
          font-size: 1.25rem;
          font-weight: 700;
          background: var(--gradient, linear-gradient(135deg, #60a5fa, #38bdf8));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          border-bottom: 1px solid var(--glass-border, rgba(255,255,255,0.12));
          padding-bottom: 0.6rem;
          position: relative;
        }
        .policy-text p {
          margin-bottom: 1.2rem;
          color: rgba(255,255,255,0.85);
          line-height: 1.75;
          font-size: 1rem;
        }
        .policy-text ul {
          margin-bottom: 1.5rem;
          padding-left: 0;
          list-style: none;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--glass-border, rgba(255,255,255,0.12));
          border-radius: 16px;
          padding: 1.2rem;
        }
        .policy-text li {
          margin-bottom: 0.8rem;
          color: rgba(255,255,255,0.82);
          position: relative;
          padding-left: 1.8rem;
          line-height: 1.6;
          word-wrap: break-word;
          overflow-wrap: anywhere;
        }
        .policy-text li:last-child {
          margin-bottom: 0;
        }
        .policy-text li::before {
          content: '✦';
          position: absolute;
          left: 0;
          color: var(--primary, #3b82f6);
          font-size: 1.1rem;
          line-height: 1.6;
        }
        .policy-text strong {
          color: var(--primary, #60a5fa);
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        .modal-content::-webkit-scrollbar {
          width: 8px;
        }
        .modal-content::-webkit-scrollbar-track {
          background: transparent;
        }
        .modal-content::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.15);
          border-radius: 10px;
        }
        .modal-content::-webkit-scrollbar-thumb:hover {
          background: var(--primary, #2563eb);
        }
        @media (max-width: 768px) {
          .policy-text ul {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
