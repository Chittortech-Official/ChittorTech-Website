import React from "react";
import LegalPageLayout from "@/components/LegalPageLayout";
import LegalClauseCard from "@/components/LegalClauseCard";
import PrintContractView from "@/components/PrintContractView";

export const metadata = {
  title: "Enterprise Privacy Policy | ChittorTech™ Legal & Compliance",
  description: "Official Privacy Policy of ChittorTech. Learn how we safeguard client source code, project credentials, personal data, and maintain DPDP & GDPR compliance.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const tocItems = [
    { id: "preamble", title: "1. Scope & Legal Framework" },
    { id: "data-collected", title: "2. Information We Collect" },
    { id: "processing-purpose", title: "3. Purpose & Legal Grounds" },
    { id: "source-code-confidentiality", title: "4. Code Confidentiality & NDA" },
    { id: "sub-processors", title: "5. Sub-Processors & Cloud Partners" },
    { id: "cookies-telemetry", title: "6. Cookies & Web Telemetry" },
    { id: "cross-border", title: "7. Cross-Border Data Transfers" },
    { id: "retention-purging", title: "8. Retention & Purging Schedule" },
    { id: "client-rights", title: "9. Your Data Rights (DPDP & GDPR)" },
    { id: "security-measures", title: "10. Technical & Enterprise Security" },
    { id: "children-privacy", title: "11. Children's Online Privacy" },
    { id: "grievance-officer", title: "12. Statutory Grievance Redressal" },
  ];

  const executiveSummary = [
    {
      icon: "fa-solid fa-code-commit",
      title: "100% Client Code Confidentiality",
      desc: "Your source code, business logic, algorithms, and project databases are treated under strict non-disclosure terms and never shared or repurposed.",
    },
    {
      icon: "fa-solid fa-ban",
      title: "Zero Data Monetization",
      desc: "We never sell, rent, monetize, or trade client or user personal records to third-party ad networks or brokers under any circumstances.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Statutory Indian & Global Compliance",
      desc: "Fully aligned with India's Digital Personal Data Protection Act 2023 (DPDP), the IT Act 2000, and international GDPR principles.",
    },
    {
      icon: "fa-solid fa-user-lock",
      title: "Right to Full Data Erasure",
      desc: "Clients can request complete retrieval or permanent expunging of staging databases, test data, and communication logs at any time.",
    },
  ];

  /* ── Compact 3-Page Contract Content for Print Engine ── */
  const printPage1Articles = [
    {
      title: "ARTICLE 1: SCOPE & STATUTORY PRIVACY FRAMEWORK",
      content: (
        <>
          <p>
            This Privacy &amp; Data Protection Agreement governs all custom software engineering, mobile applications, and cloud systems operated by <strong>ChittorTech™ (Chittor Technologies)</strong>, Chittorgarh, Rajasthan, India.
          </p>
          <p>
            Drafted in adherence to the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, the <strong>Information Technology Act, 2000</strong> (and 2011 IT Rules), and aligned with the <strong>General Data Protection Regulation (GDPR)</strong> for foreign clients.
          </p>
        </>
      ),
    },
    {
      title: "ARTICLE 2: CATEGORIES OF INFORMATION COLLECTED & PROCESSED",
      content: (
        <>
          <ul>
            <li><strong>2.1 Corporate &amp; Contact Records:</strong> Full legal name, corporate identity, official email, phone/WhatsApp number, billing address, GSTIN / Tax ID.</li>
            <li><strong>2.2 Project Specifications &amp; Design Assets:</strong> Software Requirement Specifications (SRS), wireframes, UI schemas, and database architectures.</li>
            <li><strong>2.3 Sanitized Development Credentials:</strong> Temporary test database keys and cloud staging logins provided under isolated development conditions.</li>
            <li><strong>2.4 Technical Telemetry:</strong> Server access logs, IP addresses, browser headers, and network performance indicators for cyber defense.</li>
          </ul>
        </>
      ),
    },
    {
      title: "ARTICLE 3: LAWFUL GROUNDS & PURPOSE OF DATA PROCESSING",
      content: (
        <>
          <p>Data processing is conducted strictly under recognized legal bases:</p>
          <ul>
            <li><strong>3.1 Performance of Contract:</strong> Delivering custom software development, milestone previews, and technical deployment.</li>
            <li><strong>3.2 Statutory Tax Compliance:</strong> Issuance of compliant Indian GST invoices and retention of audited accounting records.</li>
            <li><strong>3.3 Infrastructure Security:</strong> Bot mitigation, DDoS prevention, and secure cloud server firewall rule enforcement.</li>
          </ul>
        </>
      ),
    },
  ];

  const printPage2Articles = [
    {
      title: "ARTICLE 4: SOURCE CODE CONFIDENTIALITY & STRICT NDA STANDARD",
      content: (
        <>
          <p>
            ChittorTech treats all client source code, database architectures, and commercial business logic with absolute confidentiality:
          </p>
          <ul>
            <li><strong>4.1 Zero Code Monetization:</strong> Custom code authored for your deliverables will never be sold, leased, or recycled to third parties.</li>
            <li><strong>4.2 Isolated Repositories:</strong> Code is maintained on private Git infrastructure with mandatory two-factor authentication (2FA) and access limited to assigned engineers.</li>
            <li><strong>4.3 Standalone NDAs:</strong> We routinely execute mutual or unilateral Non-Disclosure Agreements upon enterprise client request.</li>
          </ul>
        </>
      ),
    },
    {
      title: "ARTICLE 5: SUB-PROCESSORS & CLOUD INFRASTRUCTURE PARTNERS",
      content: (
        <>
          <p>We engage certified enterprise infrastructure partners adhering to ISO 27001 and SOC 2 standards:</p>
          <ul>
            <li><strong>Cloudflare:</strong> Edge SSL encryption, CDN delivery, DNS management, and Web Application Firewall.</li>
            <li><strong>Google Cloud &amp; Firebase:</strong> Database synchronization, analytics, and serverless compute instances.</li>
            <li><strong>Razorpay &amp; Stripe:</strong> Tokenized, PCI-DSS Level 1 compliant payment processing (zero card numbers stored on local servers).</li>
            <li><strong>Amazon Web Services (AWS):</strong> Secure object storage (S3) and encrypted development instances.</li>
          </ul>
        </>
      ),
    },
    {
      title: "ARTICLE 6: DATA RETENTION, ARCHIVING & SECURE PURGING SCHEDULE",
      content: (
        <>
          <ul>
            <li><strong>6.1 Active Phase:</strong> Data is retained for active sprint development and deployment.</li>
            <li><strong>6.2 90-Day Post-Delivery Purge:</strong> Staging snapshots and test environments are permanently wiped 90 days post-launch.</li>
            <li><strong>6.3 Statutory Invoices:</strong> Tax and accounting invoices are retained for 7 years in accordance with Indian tax laws.</li>
          </ul>
        </>
      ),
    },
    {
      title: "ARTICLE 7: CLIENT DATA RIGHTS (DPDP ACT & GDPR ALIGNED)",
      content: (
        <>
          <p>
            Clients retain non-negotiable rights to request access, rectification, or complete erasure (&quot;Right to be Forgotten&quot;) of personal and test data by emailing <code>contact@chittortech.in</code>. Requests are acknowledged within 48 business hours.
          </p>
        </>
      ),
    },
  ];

  const printPage3Articles = [
    {
      title: "ARTICLE 8: TECHNICAL SECURITY ARCHITECTURE",
      content: (
        <>
          <p>
            All web traffic is enforced via HTTPS TLS 1.3 protocol. Access to staging servers is restricted via Role-Based Access Control (RBAC). Repositories are scanned routinely for credential leaks and dependency vulnerabilities.
          </p>
        </>
      ),
    },
    {
      title: "ARTICLE 9: STATUTORY GRIEVANCE REDRESSAL OFFICER",
      content: (
        <>
          <p>
            In compliance with Section 43A of the Information Technology Act, 2000, Rule 5(9) of the IT Rules, 2011, and the DPDP Act, 2023:
          </p>
          <ul>
            <li><strong>Officer:</strong> Legal &amp; Compliance Officer, ChittorTech</li>
            <li><strong>Office Address:</strong> ChittorTech, Chittorgarh, Rajasthan – 312001, India</li>
            <li><strong>Direct Compliance Email:</strong> <code>contact@chittortech.in</code> | <strong>Hotline:</strong> +91 75974 51057</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="ChittorTech™ is committed to total transparency, absolute project confidentiality, and the highest standards of digital data protection across our software development, cloud infrastructure, and mobile app services."
      badge="ENTERPRISE PRIVACY ARCHITECTURE"
      effectiveDate="September 10, 2026"
      version="v2.6 Enterprise"
      jurisdiction="India (DPDP Act 2023 / IT Act 2000) & International (GDPR Aligned)"
      tocItems={tocItems}
      executiveSummary={executiveSummary}
      printContract={
        <PrintContractView
          documentType="privacy"
          title="ENTERPRISE PRIVACY & DATA PROTECTION AGREEMENT"
          refCode="CT-DPA-PRV-2026"
          effectiveDate="September 10, 2026"
          version="v2.6 Enterprise"
          jurisdiction="Republic of India (Chittorgarh, Rajasthan Jurisdiction)"
          page1Articles={printPage1Articles}
          page2Articles={printPage2Articles}
          page3Articles={printPage3Articles}
          frameworkNote="This document constitutes the General Master Privacy & Data Protection Framework of ChittorTech™ (Chittor Technologies). Execution or electronic acceptance of this document binds the Client to these baseline privacy, NDA, and data handling commitments. In addition to this general framework, a Project-Specific Addendum (incorporating custom data processing schedules, specific API access parameters, and database sanitation requirements) shall be executed separately for each project engagement and shall form an integral, enforceable schedule governed by this Master Contract."
        />
      }
    >
      {/* ── Clause 1: Scope & Legal Framework ── */}
      <LegalClauseCard
        id="preamble"
        clauseNumber="01"
        title="Scope, Corporate Identity & Legal Framework"
        icon="fa-solid fa-landmark"
        badge="STATUTORY COMPLIANCE"
        badgeType="primary"
      >
        <p>
          This Privacy Policy governs the collection, processing, storage, and transfer of personal and commercial data by <strong>ChittorTech™</strong> (&quot;ChittorTech&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), headquartered in Chittorgarh, Rajasthan, India.
        </p>
        <p>
          This policy applies to all prospective and existing clients, website visitors, partners, and users accessing our primary portal (<code>chittortech.in</code>), subdomains, client collaboration platforms, staging environments, and proprietary enterprise software solutions.
        </p>
        <div className="clause-callout">
          <div className="clause-callout-title">
            <i className="fa-solid fa-scale-balanced"></i> Statutory Compliance Benchmark
          </div>
          <p>
            This document is drafted in strict adherence to Section 43A of the <strong>Information Technology Act, 2000</strong>, the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>, and the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> of the Republic of India. For our overseas clients across North America, Europe, and Asia-Pacific, our technical procedures adhere to the principles of the <strong>General Data Protection Regulation (GDPR - Regulation (EU) 2016/679)</strong>.
          </p>
        </div>
      </LegalClauseCard>

      {/* ── Clause 2: Information We Collect ── */}
      <LegalClauseCard
        id="data-collected"
        clauseNumber="02"
        title="Categories of Information We Collect"
        icon="fa-solid fa-database"
        badge="TRANSPARENCY"
        badgeType="slate"
      >
        <p>
          In delivering custom web development, mobile app engineering, Google Play publishing, and cloud software services, we collect information classified under the following categories:
        </p>
        <ul>
          <li>
            <strong>Client Identification &amp; Contact Records:</strong> Full legal name, corporate affiliation, designation, official email address, phone/WhatsApp number, billing address, and Goods and Services Tax Identification Number (GSTIN) or corporate tax ID.
          </li>
          <li>
            <strong>Project Specifications &amp; Technical Assets:</strong> Software Requirement Specifications (SRS), wireframes, architectural diagrams, API schemas, design mockups, and client-provided digital assets necessary for project execution.
          </li>
          <li>
            <strong>Sanitized Environment Credentials:</strong> When necessary for deployment or integration, temporary development credentials for test databases, cloud staging instances, or third-party test accounts provided under controlled, encrypted conditions.
          </li>
          <li>
            <strong>Automated Device &amp; Telemetry Data:</strong> IP addresses, browser engine and version, operating system, referring URLs, screen resolution, and session timestamps captured automatically via standard web server logs.
          </li>
        </ul>
        <div className="clause-callout warning">
          <div className="clause-callout-title">
            <i className="fa-solid fa-triangle-exclamation"></i> Client Production Data Safeguard
          </div>
          <p>
            ChittorTech actively discourages clients from transmitting unmasked, live end-user production databases during development. We mandate the use of anonymized, dummy, or synthetic datasets for quality assurance and staging environments.
          </p>
        </div>
      </LegalClauseCard>

      {/* ── Clause 3: Purpose & Legal Grounds ── */}
      <LegalClauseCard
        id="processing-purpose"
        clauseNumber="03"
        title="Purpose & Lawful Basis for Data Processing"
        icon="fa-solid fa-clipboard-check"
        badge="LAWFUL BASIS"
        badgeType="emerald"
      >
        <p>
          We do not process data arbitrarily. Every piece of information collected serves a defined legal basis under applicable data protection statutes:
        </p>
        <div className="table-scroll-hint">
          <i className="fa-solid fa-arrows-left-right"></i> Swipe table horizontally to view all columns →
        </div>
        <div className="clause-table-wrap">
          <table className="clause-table">
            <thead>
              <tr>
                <th>Data Category</th>
                <th>Primary Business Purpose</th>
                <th>Lawful Processing Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Contact &amp; Corporate Info</td>
                <td>Project kickoff, milestone progress updates, invoicing, and tax documentation.</td>
                <td>Performance of Contract (Art. 6(1)(b) GDPR / Section 4 DPDP)</td>
              </tr>
              <tr>
                <td>Project SRS &amp; Code Assets</td>
                <td>Custom software engineering, quality assurance testing, and production deployment.</td>
                <td>Contractual Obligation &amp; Client Consent</td>
              </tr>
              <tr>
                <td>Server &amp; Network Telemetry</td>
                <td>DDoS mitigation, bot detection, firewall configuration, and uptime monitoring.</td>
                <td>Legitimate Business Interest &amp; Cyber Defense</td>
              </tr>
              <tr>
                <td>Financial &amp; Transaction Slips</td>
                <td>Statutory accounting, bank reconciliations, and Indian GST audit compliance.</td>
                <td>Legal &amp; Statutory Compliance (Indian Tax Laws)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </LegalClauseCard>

      {/* ── Clause 4: Code Confidentiality & NDA ── */}
      <LegalClauseCard
        id="source-code-confidentiality"
        clauseNumber="04"
        title="Client Source Code Confidentiality & Strict NDA Standard"
        icon="fa-solid fa-file-shield"
        badge="IP PROTECTION"
        badgeType="primary"
      >
        <p>
          At ChittorTech, we treat intellectual property and project confidentiality with the utmost seriousness:
        </p>
        <ul>
          <li>
            <strong>Non-Disclosure by Default:</strong> All conversations, technical scopes, database models, business logic, and proprietary code repositories shared with ChittorTech are automatically governed by strict non-disclosure obligations, even in the absence of a standalone physical NDA.
          </li>
          <li>
            <strong>Isolated Git Repositories:</strong> Code repositories are maintained on private, access-restricted enterprise infrastructure (GitHub/GitLab) with mandatory multi-factor authentication (2FA) and role-based permissions restricted exclusively to assigned developers.
          </li>
          <li>
            <strong>No Code Resale or Cross-Pollination:</strong> Custom code authored specifically for your deliverables will never be sold, leased, or recycled into competitor products.
          </li>
          <li>
            <strong>Execution of Custom NDAs:</strong> We readily review and execute bilateral or unilateral Non-Disclosure Agreements provided by enterprise clients before discovery calls or repository access.
          </li>
        </ul>
      </LegalClauseCard>

      {/* ── Clause 5: Sub-Processors & Cloud Partners ── */}
      <LegalClauseCard
        id="sub-processors"
        clauseNumber="05"
        title="Third-Party Sub-Processors & Infrastructure Partners"
        icon="fa-solid fa-cloud"
        badge="INFRASTRUCTURE"
        badgeType="slate"
      >
        <p>
          To deliver reliable, high-availability software services, ChittorTech relies on industry-certified global cloud vendors and payment processors that comply with ISO/IEC 27001, SOC 2 Type II, and PCI-DSS Level 1 standards:
        </p>
        <div className="table-scroll-hint">
          <i className="fa-solid fa-arrows-left-right"></i> Swipe table horizontally to view all columns →
        </div>
        <div className="clause-table-wrap">
          <table className="clause-table">
            <thead>
              <tr>
                <th>Service Provider</th>
                <th>Role &amp; Integration</th>
                <th>Security Standard</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cloudflare, Inc.</strong></td>
                <td>Global CDN, edge SSL termination, DNS management, and Web Application Firewall (WAF).</td>
                <td>SOC 2, ISO 27001, GDPR compliant</td>
              </tr>
              <tr>
                <td><strong>Google Cloud / Firebase</strong></td>
                <td>Cloud Firestore, database synchronization, serverless functions, and analytics.</td>
                <td>ISO 27001, SOC 1/2/3, HIPAA ready</td>
              </tr>
              <tr>
                <td><strong>Razorpay / Stripe</strong></td>
                <td>Secured payment gateway for processing domestic UPI/Netbanking and international credit cards.</td>
                <td>PCI-DSS Level 1 Compliant</td>
              </tr>
              <tr>
                <td><strong>Amazon Web Services (AWS)</strong></td>
                <td>Scalable object storage (S3), staging compute instances (EC2), and production backups.</td>
                <td>FedRAMP, ISO 27001, SOC 2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          We do not store complete credit card or debit card numbers on our servers; all transaction processing is handled via tokenized, encrypted payment gateways.
        </p>
      </LegalClauseCard>

      {/* ── Clause 6: Cookies & Web Telemetry ── */}
      <LegalClauseCard
        id="cookies-telemetry"
        clauseNumber="06"
        title="Cookie Policy & Web Telemetry"
        icon="fa-solid fa-cookie-bite"
        badge="COOKIES"
        badgeType="slate"
      >
        <p>
          Our website utilizes standard HTTP cookies, session tokens, and local storage mechanisms to improve user experience, maintain navigation state, and analyze website traffic:
        </p>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> Critical for navigation, security tokens, CSRF protection, and load balancer session affinity.
          </li>
          <li>
            <strong>Analytical Cookies (Google Analytics 4):</strong> Used to evaluate website visitor flows, identify broken links, and measure page performance. We configure GA4 with IP anonymization flags enabled.
          </li>
          <li>
            <strong>User Control:</strong> You can manage, disable, or delete cookies via your browser preferences. Note that disabling essential cookies may impact certain dynamic website functionalities.
          </li>
        </ul>
      </LegalClauseCard>

      {/* ── Clause 7: Cross-Border Data Transfers ── */}
      <LegalClauseCard
        id="cross-border"
        clauseNumber="07"
        title="Cross-Border Transfers & International Safeguards"
        icon="fa-solid fa-globe"
        badge="GLOBAL DATA FLOW"
        badgeType="primary"
      >
        <p>
          ChittorTech serves clients worldwide, including in North America, Europe, Australia, and the Middle East. When data or source code flows across international borders:
        </p>
        <p>
          We implement Standard Contractual Clauses (SCCs) and robust cryptographic protocols (TLS 1.3 in transit, AES-256 at rest) to ensure that foreign data receives the same level of legal protection as mandated under European GDPR and Indian data protection directives.
        </p>
      </LegalClauseCard>

      {/* ── Clause 8: Retention & Purging Schedule ── */}
      <LegalClauseCard
        id="retention-purging"
        clauseNumber="08"
        title="Data Retention, Archiving & Secure Purging"
        icon="fa-solid fa-trash-can"
        badge="RETENTION SCHEDULE"
        badgeType="amber"
      >
        <p>
          We adhere to data minimization principles and retain data only for as long as functionally or legally necessary:
        </p>
        <ul>
          <li>
            <strong>Active Development Phase:</strong> Project files, credentials, and test environments are retained for the duration of the development lifecycle.
          </li>
          <li>
            <strong>Post-Launch Warranty Window (30 to 90 Days):</strong> Staging deployments and temporary development branches are maintained for up to 90 days following production sign-off to assist in bug fixes, warranty support, or emergency rollbacks.
          </li>
          <li>
            <strong>Permanent Decommissioning:</strong> After the warranty window, temporary staging databases, dummy test accounts, and sensitive API keys are permanently deleted from development servers.
          </li>
          <li>
            <strong>Tax &amp; Accounting Records:</strong> Invoices, payment receipts, and contract agreements are retained for a minimum of 7 statutory years in accordance with Indian Income Tax and GST regulations.
          </li>
        </ul>
      </LegalClauseCard>

      {/* ── Clause 9: Your Data Rights ── */}
      <LegalClauseCard
        id="client-rights"
        clauseNumber="09"
        title="Your Legal Rights (DPDP Act &amp; GDPR)"
        icon="fa-solid fa-user-gear"
        badge="CLIENT RIGHTS"
        badgeType="emerald"
      >
        <p>
          Under applicable global and Indian privacy laws, clients and visitors possess the following non-negotiable rights:
        </p>
        <ul>
          <li><strong>Right of Access:</strong> You can request a summary of personal information held in our records.</li>
          <li><strong>Right to Rectification:</strong> You may request immediate correction of outdated or inaccurate contact or billing details.</li>
          <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> You may request the deletion of your personal records and test environments, subject to statutory accounting retention mandates.</li>
          <li><strong>Right to Restrict or Object to Processing:</strong> You may restrict the processing of your data where you contest its accuracy or lawfulness.</li>
          <li><strong>Right to Data Portability:</strong> You are entitled to receive your project assets and personal records in a structured, machine-readable format.</li>
        </ul>
        <p>
          To exercise any of these rights, submit a written request to <a href="mailto:contact@chittortech.in">contact@chittortech.in</a>. We will process and acknowledge your request within 72 business hours.
        </p>
      </LegalClauseCard>

      {/* ── Clause 10: Technical & Enterprise Security ── */}
      <LegalClauseCard
        id="security-measures"
        clauseNumber="10"
        title="Technical &amp; Organizational Security Architecture"
        icon="fa-solid fa-shield-virus"
        badge="CYBER DEFENSE"
        badgeType="primary"
      >
        <p>
          ChittorTech employs rigorous technical safeguards to protect all data against unauthorized access, destruction, tampering, or exfiltration:
        </p>
        <ul>
          <li><strong>End-to-End Cryptography:</strong> All traffic on our web platforms is enforced via HTTPS with TLS 1.3 protocol and SHA-256 SSL certificates.</li>
          <li><strong>Role-Based Access Control (RBAC):</strong> Access to staging servers, cloud dashboards, and source repositories is strictly segregated according to job requirements.</li>
          <li><strong>Automated Code Scanning:</strong> Repositories are periodically scanned for leaked credentials, hardcoded keys, and vulnerable third-party npm packages.</li>
          <li><strong>Disaster Recovery:</strong> Staging snapshots and critical project backups are securely maintained with geo-redundant storage.</li>
        </ul>
      </LegalClauseCard>

      {/* ── Clause 11: Children's Online Privacy ── */}
      <LegalClauseCard
        id="children-privacy"
        clauseNumber="11"
        title="Children's Online Privacy Protection"
        icon="fa-solid fa-child-reaching"
        badge="PROTECTION"
        badgeType="slate"
      >
        <p>
          ChittorTech provides commercial enterprise software engineering and B2B IT consultancy services. Our services, platforms, and products are not targeted toward, nor knowingly collect information from, individuals under the age of eighteen (18) years without verified parental or legal guardian consent.
        </p>
        <p>
          If we become aware that personal information of a minor has been collected without parental consent, we will take immediate steps to delete that data from our infrastructure.
        </p>
      </LegalClauseCard>

      {/* ── Clause 12: Statutory Grievance Redressal ── */}
      <LegalClauseCard
        id="grievance-officer"
        clauseNumber="12"
        title="Statutory Grievance Redressal Mechanism &amp; Officer"
        icon="fa-solid fa-user-shield"
        badge="STATUTORY OFFICER"
        badgeType="amber"
      >
        <p>
          In accordance with the <strong>Information Technology Act, 2000</strong> and <strong>Rule 5(9) of the IT Rules, 2011</strong>, as well as the provisions of the <strong>Digital Personal Data Protection Act, 2023</strong>, the name and contact details of our designated Grievance Officer are published below:
        </p>
        
        <div className="clause-callout success">
          <div className="clause-callout-title">
            <i className="fa-solid fa-building-columns"></i> Designated Grievance Officer &amp; Legal Desk
          </div>
          <p style={{ marginBottom: "8px" }}>
            <strong>Officer in Charge:</strong> Legal &amp; Compliance Officer, ChittorTech
          </p>
          <p style={{ marginBottom: "8px" }}>
            <strong>Corporate Address:</strong> ChittorTech, Chittorgarh, Rajasthan – 312001, India
          </p>
          <p style={{ marginBottom: "8px" }}>
            <strong>Direct Compliance Email:</strong> <a href="mailto:contact@chittortech.in">contact@chittortech.in</a> (CC: <a href="mailto:business@chittortech.in">business@chittortech.in</a>)
          </p>
          <p style={{ marginBottom: "8px" }}>
            <strong>Direct Support Hotline:</strong> <a href="tel:+917597451057">+91 75974 51057</a>
          </p>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "#64748b" }}>
            * Statutory response window: All grievances will be formally acknowledged within 48 business hours and disposed of within thirty (30) calendar days from receipt.
          </p>
        </div>
      </LegalClauseCard>
    </LegalPageLayout>
  );
}
