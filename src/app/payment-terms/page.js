import React from "react";
import LegalPageLayout from "@/components/LegalPageLayout";
import LegalClauseCard from "@/components/LegalClauseCard";
import PrintContractView from "@/components/PrintContractView";

export const metadata = {
  title: "Payment Terms & Refund Policy | ChittorTech™ Billing",
  description: "Official Billing, Payment Terms, Milestone Schedules, and Refund Policy of ChittorTech. Transparent commercial agreements for web and mobile software development.",
  alternates: {
    canonical: "/payment-terms",
  },
};

export default function PaymentTermsPage() {
  const tocItems = [
    { id: "commercial-models", title: "1. Commercial Pricing Models" },
    { id: "milestone-schedule", title: "2. Milestone Billing Schedule" },
    { id: "payment-methods", title: "3. Approved Payment Gateways" },
    { id: "taxes-currency", title: "4. Invoicing, GST & Currencies" },
    { id: "overdue-invoices", title: "5. Overdue Invoices & Holds" },
    { id: "refund-matrix", title: "6. Cancellation & Refund Policy" },
    { id: "chargebacks-disputes", title: "7. Disputes & Chargebacks" },
    { id: "billing-desk", title: "8. Billing Desk & Invoicing Contact" },
  ];

  const executiveSummary = [
    {
      icon: "fa-solid fa-stairs",
      title: "Milestone-Based Security",
      desc: "Payments are phased in transparent milestones tied directly to demonstrable progress and staging previews.",
    },
    {
      icon: "fa-solid fa-receipt",
      title: "Formal GST & Export Invoicing",
      desc: "All domestic invoices comply with Indian GST laws; international clients receive compliant export documentation in USD, EUR, or GBP.",
    },
    {
      icon: "fa-solid fa-credit-card",
      title: "Secure Encrypted Gateways",
      desc: "Zero card data is stored on our servers. Transactions are handled via PCI-DSS Level 1 compliant gateways (Razorpay, Stripe, Bank Wire).",
    },
    {
      icon: "fa-solid fa-scale-unbalanced-flip",
      title: "Fair & Transparent Refund Rules",
      desc: "Clear guidelines govern cancellations before development begins, during active sprints, and for third-party infrastructure purchases.",
    },
  ];

  /* ── Compact 3-Page Contract Content for Print Engine ── */
  const printPage1Articles = [
    {
      title: "ARTICLE 1: COMMERCIAL PRICING & ENGAGEMENT MODELS",
      content: (
        <>
          <p>
            ChittorTech™ executes client digital initiatives under three established commercial models:
          </p>
          <ul>
            <li><strong>1.1 Fixed-Price Milestone:</strong> Fixed scope governed by an approved Software Requirement Specification (SRS). Billed across sequential milestone deliverables.</li>
            <li><strong>1.2 Dedicated Monthly Engineering Retainer:</strong> Monthly dedicated developer allocation billed in advance per 30-day agile cycle for continuous product development.</li>
            <li><strong>1.3 Turnkey Packages:</strong> Standardized service packages (e.g., Google Play 14-day 12-tester closed testing, cloud server deployment, SEO audits) billed one-time upfront.</li>
          </ul>
        </>
      ),
    },
    {
      title: "ARTICLE 2: STANDARD MILESTONE PAYMENT SCHEDULE",
      content: (
        <>
          <p>Standard custom software, web, and mobile application projects follow a three-tier milestone schedule:</p>
          <table>
            <thead>
              <tr>
                <th>Phase</th>
                <th>Deliverable Scope</th>
                <th>Standard Split</th>
                <th>Release Trigger</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Stage 1: Kickoff</strong></td>
                <td>SRS finalization, UI/UX wireframes, database &amp; architecture setup.</td>
                <td><strong>30% – 40%</strong></td>
                <td>Due upon contract signing prior to sprint allocation.</td>
              </tr>
              <tr>
                <td><strong>Stage 2: Staging Demo</strong></td>
                <td>Core business logic, frontend assembly, API integrations, staging preview.</td>
                <td><strong>30% – 40%</strong></td>
                <td>Due upon client review and demo sign-off on staging instance.</td>
              </tr>
              <tr>
                <td><strong>Stage 3: Production Handover</strong></td>
                <td>QA validation, domain/server launch, SSL, 100% source repository transfer.</td>
                <td><strong>20% – 30%</strong></td>
                <td>Due prior to live public launch and source code transfer.</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: "7pt", color: "#475569", marginTop: "2px" }}>
            * Express/small engagements under ₹15,000 / $250 USD are structured with 50% advance deposit and 50% upon completed delivery.
          </p>
        </>
      ),
    },
    {
      title: "ARTICLE 3: INVOICING, 18% GST & MULTI-CURRENCY STANDARDS",
      content: (
        <>
          <ul>
            <li><strong>3.1 Indian GST Compliance:</strong> Invoices issued to Indian entities are subject to applicable GST (currently 18%). GST invoices contain official GSTIN and SAC codes for input tax credit (ITC) claiming.</li>
            <li><strong>3.2 Zero-Rated Export of Services:</strong> Invoices to foreign clients are zero-rated under Section 2(6) of the IGST Act, 2017, supported by Foreign Inward Remittance Certificates (FIRC).</li>
            <li><strong>3.3 Net Payment Terms:</strong> Invoices are payable within seven (7) calendar days of generation. Supported currencies: INR (₹), USD ($), EUR (€), GBP (£), and AUD ($).</li>
          </ul>
        </>
      ),
    },
  ];

  const printPage2Articles = [
    {
      title: "ARTICLE 4: APPROVED PAYMENT GATEWAYS & SECURITY",
      content: (
        <>
          <p>Payments must be remitted through official, encrypted channels:</p>
          <ul>
            <li><strong>4.1 Corporate Bank Wire:</strong> NEFT, RTGS, and IMPS direct transfers to ChittorTech verified bank accounts stated on valid invoices.</li>
            <li><strong>4.2 UPI Instant Settlement:</strong> Direct payment via official corporate VPA (BHIM, Google Pay, PhonePe, Paytm).</li>
            <li><strong>4.3 Credit / Debit Cards:</strong> Visa, MasterCard, RuPay, Amex processed via PCI-DSS Level 1 compliant gateways (Razorpay, Stripe). Zero raw card data is stored on our servers.</li>
            <li><strong>4.4 International Transfers:</strong> SWIFT international wire transfers and PayPal for overseas corporate accounts.</li>
          </ul>
        </>
      ),
    },
    {
      title: "ARTICLE 5: OVERDUE ACCOUNTS & SPRINT PAUSE POLICY",
      content: (
        <>
          <ul>
            <li><strong>5.1 Grace Window:</strong> Clients receive a 7-day grace period from the invoice generation date to complete payment without operational interruption.</li>
            <li><strong>5.2 Development Hold:</strong> Undisputed invoices remaining unpaid past Day 7 will result in an immediate temporary hold on active sprint development and staging environments.</li>
            <li><strong>5.3 Sprint Remobilization:</strong> Work resumes within 24–48 hours of confirmed payment clearance. ChittorTech is exempt from project delay liabilities arising from client payment defaults.</li>
          </ul>
        </>
      ),
    },
    {
      title: "ARTICLE 6: CANCELLATION & REFUND ELIGIBILITY MATRIX",
      content: (
        <>
          <table>
            <thead>
              <tr>
                <th>Project Status</th>
                <th>Cancellation Window</th>
                <th>Refund Eligibility &amp; Settlement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Pre-Development</strong></td>
                <td>Within 24 hours of advance payment, prior to SRS/design initiation.</td>
                <td><strong>90% Refund</strong> (10% retained for banking gateway &amp; administrative fees).</td>
              </tr>
              <tr>
                <td><strong>Active Development</strong></td>
                <td>After SRS sign-off, design delivery, or active coding initiation.</td>
                <td><strong>Advance Non-Refundable</strong> (covers dedicated developer sprint allocations).</td>
              </tr>
              <tr>
                <td><strong>Mutual Separation</strong></td>
                <td>Midway termination by mutual written consent of both parties.</td>
                <td><strong>Pro-Rata Settlement</strong> for completed milestones; source code transferred for paid portions.</td>
              </tr>
              <tr>
                <td><strong>Third-Party Costs</strong></td>
                <td>Domains, cloud server hosting (AWS/Firebase/Vercel), paid SSL, APIs.</td>
                <td><strong>100% Strictly Non-Refundable</strong> (remitted directly to external cloud vendors).</td>
              </tr>
              <tr>
                <td><strong>Google Play Testing</strong></td>
                <td>Once tester onboarding and closed testing groups are launched.</td>
                <td><strong>Non-Refundable</strong> (allocates real human testers, devices, and tracking consoles).</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: "7pt", color: "#475569", marginTop: "2px" }}>
            * Approved refunds are credited to the original payment source within 5 to 10 business days of written confirmation.
          </p>
        </>
      ),
    },
    {
      title: "ARTICLE 7: DISPUTE ESCALATION & CHARGEBACK SAFEGUARDS",
      content: (
        <>
          <p>
            The Client agrees that prior to initiating any formal payment chargeback or dispute with banking institutions or card issuers, the Client shall notify ChittorTech billing support in writing at <code>business@chittortech.in</code> and allow seven (7) business days for amicable resolution. Unjustified chargebacks for documented deliverables will result in immediate suspension of cloud deployments and legal recovery of outstanding dues.
          </p>
        </>
      ),
    },
  ];

  const printPage3Articles = [
    {
      title: "ARTICLE 8: CORPORATE BILLING CONTACT & INVOICING DESK",
      content: (
        <>
          <p>
            For invoice requests, GST clarifications, receipt copies, or bank details verification:
          </p>
          <ul>
            <li><strong>Accounts Department:</strong> Corporate Billing &amp; Commercial Contracts Desk</li>
            <li><strong>Official Billing Email:</strong> <code>business@chittortech.in</code> (CC: <code>contact@chittortech.in</code>)</li>
            <li><strong>Billing Hotline:</strong> +91 75974 51057 | <strong>Hours:</strong> Mon–Sat, 9:30 AM to 7:00 PM IST</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Payment & Refund Policy"
      subtitle="ChittorTech™ maintains an open, transparent commercial standard. Review our milestone billing structures, approved payment gateways, tax compliance, and fair cancellation and refund procedures."
      badge="COMMERCIAL TERMS & BILLING POLICY"
      effectiveDate="September 10, 2026"
      version="v2.6 Enterprise"
      jurisdiction="India (RBI Regulations & GST Laws) & International Banking Standards"
      tocItems={tocItems}
      executiveSummary={executiveSummary}
      printContract={
        <PrintContractView
          documentType="payment-terms"
          title="MASTER COMMERCIAL AGREEMENT & PAYMENT TERMS"
          refCode="CT-MSA-PAY-2026"
          effectiveDate="September 10, 2026"
          version="v2.6 Enterprise"
          jurisdiction="Republic of India (Chittorgarh, Rajasthan Jurisdiction)"
          page1Articles={printPage1Articles}
          page2Articles={printPage2Articles}
          page3Articles={printPage3Articles}
          frameworkNote="This document constitutes the General Master Commercial Framework of ChittorTech™ (Chittor Technologies). Execution or electronic acceptance of this document binds the Client to these overarching commercial and refund standards. In addition to this general agreement, a Project-Specific Addendum (incorporating the definitive Software Requirement Specification [SRS], exact milestone payment amounts, and deliverable schedules) shall be executed separately for each project engagement and shall form an integral, enforceable schedule governed by this Master Contract."
        />
      }
    >
      {/* ── Clause 1: Commercial Pricing Models ── */}
      <LegalClauseCard
        id="commercial-models"
        clauseNumber="01"
        title="Commercial Engagement &amp; Pricing Models"
        icon="fa-solid fa-handshake-simple"
        badge="ENGAGEMENT TYPES"
        badgeType="primary"
      >
        <p>
          ChittorTech offers flexible, structured engagement models designed to suit startups, growing enterprises, and established institutions:
        </p>
        <div className="table-scroll-hint">
          <i className="fa-solid fa-arrows-left-right"></i> Swipe table horizontally to view all columns →
        </div>
        <div className="clause-table-wrap">
          <table className="clause-table">
            <thead>
              <tr>
                <th>Model</th>
                <th>Best Suited For</th>
                <th>Billing Structure</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Fixed-Price Milestone</strong></td>
                <td>Projects with well-defined SRS, wireframes, and fixed scopes (Web Apps, Mobile Apps, Portals).</td>
                <td>Phased milestone advance payments tied to verified deliverables.</td>
              </tr>
              <tr>
                <td><strong>Dedicated Monthly Retainer</strong></td>
                <td>Ongoing development, agile product teams, continuous feature delivery, and dedicated engineers.</td>
                <td>Monthly advance retainer billed at the start of each 30-day sprint cycle.</td>
              </tr>
              <tr>
                <td><strong>Turnkey Service Packages</strong></td>
                <td>Google Play Console setup, 14-day closed testing (12 testers), technical SEO audits, and cloud setups.</td>
                <td>Fixed one-time package fee billed prior to service launch.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </LegalClauseCard>

      {/* ── Clause 2: Milestone Billing Schedule ── */}
      <LegalClauseCard
        id="milestone-schedule"
        clauseNumber="02"
        title="Standard Milestone Payment Breakdown"
        icon="fa-solid fa-chart-pie"
        badge="MILESTONE SCHEDULE"
        badgeType="emerald"
      >
        <p>
          For standard custom software and web application development, project costs are divided into clear deliverables to ensure safety for both parties:
        </p>
        <div className="table-scroll-hint">
          <i className="fa-solid fa-arrows-left-right"></i> Swipe table horizontally to view all columns →
        </div>
        <div className="clause-table-wrap">
          <table className="clause-table">
            <thead>
              <tr>
                <th>Phase</th>
                <th>Deliverable Stage</th>
                <th>Standard Split</th>
                <th>Milestone Condition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Stage 1: Kickoff Deposit</strong></td>
                <td>SRS finalization, architecture design, UI/UX wireframes, database schema setup.</td>
                <td><strong>30% to 40%</strong></td>
                <td>Due upon project agreement prior to development sprint allocation.</td>
              </tr>
              <tr>
                <td><strong>Stage 2: Alpha / Beta Staging</strong></td>
                <td>Core backend logic, API integrations, frontend assembly, interactive staging demo.</td>
                <td><strong>30% to 40%</strong></td>
                <td>Due upon client review and demo approval on our staging server.</td>
              </tr>
              <tr>
                <td><strong>Stage 3: Production Handover</strong></td>
                <td>Final QA testing, domain/server deployment, SSL configuration, source code repository transfer.</td>
                <td><strong>20% to 30%</strong></td>
                <td>Due prior to live domain release and complete repository ownership handover.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="clause-callout">
          <div className="clause-callout-title">
            <i className="fa-solid fa-bolt"></i> Small / Express Engagements Under ₹15,000 / $250 USD
          </div>
          <p style={{ margin: 0 }}>
            Engagements with quick turnarounds (such as expedited bug-fixing, landing page creation, or emergency server recovery) are structured with <strong>50% advance deposit</strong> and <strong>50% upon completed delivery</strong>.
          </p>
        </div>
      </LegalClauseCard>

      {/* ── Clause 3: Approved Payment Gateways ── */}
      <LegalClauseCard
        id="payment-methods"
        clauseNumber="03"
        title="Approved Payment Channels &amp; Gateway Security"
        icon="fa-solid fa-lock"
        badge="PAYMENT GATEWAYS"
        badgeType="primary"
      >
        <p>
          ChittorTech provides convenient, enterprise-grade payment options protected by 256-bit encryption:
        </p>
        <ul>
          <li>
            <strong>Domestic Bank Transfer (India):</strong> NEFT, RTGS, and IMPS direct transfers to our verified corporate bank account. Official bank details are provided on valid invoices.
          </li>
          <li>
            <strong>Unified Payments Interface (UPI):</strong> Instant bank transfers via official company VPA (BHIM, Google Pay, PhonePe, Paytm).
          </li>
          <li>
            <strong>Credit &amp; Debit Cards:</strong> Visa, MasterCard, American Express, and RuPay cards processed via certified PCI-DSS compliant payment gateways (Razorpay, Stripe).
          </li>
          <li>
            <strong>International Wire Transfers (SWIFT):</strong> Direct international wire transfers to our Indian bank account for foreign enterprise clients.
          </li>
          <li>
            <strong>PayPal / International Cards:</strong> Supported for overseas clients invoicing in USD, EUR, GBP, CAD, or AUD.
          </li>
        </ul>
        <div className="clause-callout warning">
          <div className="clause-callout-title">
            <i className="fa-solid fa-shield-halved"></i> Anti-Fraud &amp; Phishing Notice
          </div>
          <p style={{ margin: 0 }}>
            Never transfer funds to any personal account or payment link not originating from an official <code>@chittortech.in</code> domain email or verified invoice document.
          </p>
        </div>
      </LegalClauseCard>

      {/* ── Clause 4: Invoicing, GST & Currencies ── */}
      <LegalClauseCard
        id="taxes-currency"
        clauseNumber="04"
        title="Invoicing Terms, GST Compliance &amp; Multi-Currency Handling"
        icon="fa-solid fa-file-invoice-dollar"
        badge="TAX COMPLIANCE"
        badgeType="slate"
      >
        <p>
          We adhere strictly to statutory tax and financial reporting standards:
        </p>
        <ul>
          <li>
            <strong>Indian Goods &amp; Services Tax (GST):</strong> Invoices issued to Indian corporate clients and individuals are subject to applicable GST (currently 18%). GST invoices contain our valid GSTIN, SAC codes, and the client&apos;s GSTIN for input tax credit (ITC) claiming.
          </li>
          <li>
            <strong>Export of Services (Zero-Rated):</strong> Services provided to clients located outside India are categorized as Export of Services under Section 2(6) of the Integrated Goods and Services Tax (IGST) Act, 2017, and are zero-rated for GST subject to Foreign Inward Remittance Certificate (FIRC) compliance.
          </li>
          <li>
            <strong>Payment Due Window:</strong> Milestone invoices are payable within <strong>seven (7) calendar days</strong> of issuance unless otherwise stipulated in the Statement of Work.
          </li>
          <li>
            <strong>Currencies Accepted:</strong> INR (₹), USD ($), EUR (€), GBP (£), and AUD ($). Currency conversions are calculated at prevailing interbank rates at the time of invoice generation.
          </li>
        </ul>
      </LegalClauseCard>

      {/* ── Clause 5: Overdue Invoices & Holds ── */}
      <LegalClauseCard
        id="overdue-invoices"
        clauseNumber="05"
        title="Overdue Invoices &amp; Project Freeze Timeline"
        icon="fa-solid fa-triangle-exclamation"
        badge="BILLING ENFORCEMENT"
        badgeType="amber"
      >
        <p>
          Prompt settlement of milestone invoices guarantees that developer resources and cloud infrastructure remain assigned to your project:
        </p>
        <ul>
          <li>
            <strong>Grace Period:</strong> Clients receive a 7-day grace period from the invoice generation date to complete payment without disruption.
          </li>
          <li>
            <strong>Project Pause (Day 8+):</strong> If an undisputed milestone invoice remains unpaid past day 7, active sprint development will be paused, and developer allocations may be reassigned to other client queues.
          </li>
          <li>
            <strong>Reactivation:</strong> Development resumes within 24 to 48 hours following payment confirmation and receipt clearance.
          </li>
        </ul>
      </LegalClauseCard>

      {/* ── Clause 6: Cancellation & Refund Policy ── */}
      <LegalClauseCard
        id="refund-matrix"
        clauseNumber="06"
        title="Cancellation, Refund Policy &amp; Eligibility Matrix"
        icon="fa-solid fa-rotate-left"
        badge="REFUND TERMS"
        badgeType="emerald"
      >
        <p>
          Because custom software development represents a commitment of dedicated engineering hours, cloud environments, and architectural design, refunds are governed by the following schedule:
        </p>
        
        <div className="table-scroll-hint">
          <i className="fa-solid fa-arrows-left-right"></i> Swipe table horizontally to view all columns →
        </div>
        <div className="clause-table-wrap">
          <table className="clause-table">
            <thead>
              <tr>
                <th>Project Scenario</th>
                <th>Cancellation Window</th>
                <th>Refund Policy &amp; Terms</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Pre-Development Cancellation</strong></td>
                <td>Within 24 hours of advance payment, before any SRS documentation, wireframes, or design work has commenced.</td>
                <td>
                  <strong style={{ color: "#16a34a" }}>90% Refund</strong><br />
                  <span style={{ fontSize: "0.8rem", color: "#64748b" }}>10% retained for banking gateway processing and administrative overhead.</span>
                </td>
              </tr>
              <tr>
                <td><strong>Active Development Phase</strong></td>
                <td>After SRS approval, UI design completion, or active coding has started.</td>
                <td>
                  <strong style={{ color: "#dc2626" }}>Advance Non-Refundable</strong><br />
                  <span style={{ fontSize: "0.8rem", color: "#64748b" }}>Advance deposit is non-refundable as it covers dedicated developer sprint hours and architectural allocations.</span>
                </td>
              </tr>
              <tr>
                <td><strong>Mutual Midway Separation</strong></td>
                <td>Project halted midway by mutual written consent of both parties.</td>
                <td>
                  <strong style={{ color: "#2563eb" }}>Pro-Rata Settlement</strong><br />
                  <span style={{ fontSize: "0.8rem", color: "#64748b" }}>Billed only for completed milestones. Source code for paid milestones is transferred to the Client.</span>
                </td>
              </tr>
              <tr>
                <td><strong>Third-Party Infrastructure &amp; Licenses</strong></td>
                <td>Domain registration, cloud server hosting (AWS/Firebase/Vercel), paid SSL, third-party APIs.</td>
                <td>
                  <strong style={{ color: "#dc2626" }}>100% Strictly Non-Refundable</strong><br />
                  <span style={{ fontSize: "0.8rem", color: "#64748b" }}>Disbursed directly to external vendors and cannot be reclaimed.</span>
                </td>
              </tr>
              <tr>
                <td><strong>Google Play 12-Tester Closed Testing Service</strong></td>
                <td>Once tester onboarding, testing groups, and Google Play Console invites are initiated.</td>
                <td>
                  <strong style={{ color: "#dc2626" }}>Non-Refundable</strong><br />
                  <span style={{ fontSize: "0.8rem", color: "#64748b" }}>Allocates real human testers, hardware devices, and compliance tracking.</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="clause-callout success">
          <div className="clause-callout-title">
            <i className="fa-solid fa-money-bill-transfer"></i> Refund Processing SLA
          </div>
          <p style={{ margin: 0 }}>
            Approved refunds are credited back to the original source payment method (bank account, UPI, or card) within <strong>5 to 10 business days</strong> from the date of formal written confirmation.
          </p>
        </div>
      </LegalClauseCard>

      {/* ── Clause 7: Disputes & Chargebacks ── */}
      <LegalClauseCard
        id="chargebacks-disputes"
        clauseNumber="07"
        title="Payment Disputes, Chargebacks &amp; Amicable Resolution"
        icon="fa-solid fa-scale-balanced"
        badge="FAIR DISPUTES"
        badgeType="slate"
      >
        <p>
          We are dedicated to total client satisfaction and transparent communication:
        </p>
        <ul>
          <li>
            <strong>Mandatory Amicable Consultation:</strong> The Client agrees that prior to filing a formal dispute or payment chargeback with any credit card issuer, bank, or payment gateway (Razorpay, Stripe, PayPal), the Client shall notify ChittorTech billing support in writing at <a href="mailto:business@chittortech.in">business@chittortech.in</a> and afford our management team at least seven (7) business days to investigate and resolve the issue.
          </li>
          <li>
            <strong>Unjustified Chargebacks:</strong> In the event of a fraudulent or unjustified chargeback for deliverables completed and documented under an approved Statement of Work, ChittorTech reserves the legal right to report the chargeback, revoke access to deployed cloud instances, and seek recovery of outstanding dues along with associated collection and legal fees.
          </li>
        </ul>
      </LegalClauseCard>

      {/* ── Clause 8: Billing Desk & Contact ── */}
      <LegalClauseCard
        id="billing-desk"
        clauseNumber="08"
        title="Billing Desk, GST Inquiries &amp; Invoicing Contact"
        icon="fa-solid fa-headset"
        badge="DIRECT BILLING DESK"
        badgeType="primary"
      >
        <p>
          For invoice requests, GST clarifications, receipt downloads, or payment method inquiries, contact our official corporate accounts department:
        </p>
        <div className="clause-callout success">
          <div className="clause-callout-title">
            <i className="fa-solid fa-building-circle-check"></i> ChittorTech Accounts &amp; Billing Desk
          </div>
          <p style={{ marginBottom: "8px" }}>
            <strong>Department:</strong> Corporate Accounts &amp; Commercial Billing
          </p>
          <p style={{ marginBottom: "8px" }}>
            <strong>Direct Billing Email:</strong> <a href="mailto:business@chittortech.in">business@chittortech.in</a> (CC: <a href="mailto:contact@chittortech.in">contact@chittortech.in</a>)
          </p>
          <p style={{ marginBottom: "8px" }}>
            <strong>Corporate Billing Line:</strong> <a href="tel:+917597451057">+91 75974 51057</a>
          </p>
          <p style={{ marginBottom: "8px" }}>
            <strong>Official WhatsApp Support:</strong> <a href="https://wa.me/917597451057" target="_blank" rel="noopener noreferrer">+91 75974 51057</a>
          </p>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "#64748b" }}>
            * Standard operational hours: Monday through Saturday, 9:30 AM to 7:00 PM IST.
          </p>
        </div>
      </LegalClauseCard>
    </LegalPageLayout>
  );
}
