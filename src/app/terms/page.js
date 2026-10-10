import React from "react";
import LegalPageLayout from "@/components/LegalPageLayout";
import LegalClauseCard from "@/components/LegalClauseCard";
import PrintContractView from "@/components/PrintContractView";

export const metadata = {
  title: "Terms of Service & Master Agreement | ChittorTech™",
  description: "Official Terms of Service of ChittorTech. Review project scopes, source code intellectual property transfer, milestone deliverables, warranty, and contractual commitments.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  const tocItems = [
    { id: "acceptance", title: "1. Agreement & Acceptance" },
    { id: "services", title: "2. Scope of Services" },
    { id: "client-obligations", title: "3. Client Obligations & Assets" },
    { id: "srs-scope-freeze", title: "4. Specifications & Scope Freeze" },
    { id: "uat-acceptance", title: "5. UAT & Acceptance Testing" },
    { id: "ip-code-ownership", title: "6. IP & Source Code Ownership" },
    { id: "warranty-sla", title: "7. 30-Day Bug Warranty & SLA" },
    { id: "service-suspension", title: "8. Default & Service Suspension" },
    { id: "liability-indemnity", title: "9. Limitation of Liability" },
    { id: "termination-exit", title: "10. Termination & Fair Exit" },
    { id: "jurisdiction-arbitration", title: "11. Indian Law & Jurisdiction" },
  ];

  const executiveSummary = [
    {
      icon: "fa-solid fa-file-code",
      title: "100% Source Code Transfer",
      desc: "Upon full settlement of project milestone payments, complete commercial intellectual property and production source code are transferred to you.",
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      title: "30-Day Free Bug-Fix Warranty",
      desc: "Every custom web and mobile deliverable includes 30 days of complimentary bug-fixing and technical remediation post-production deployment.",
    },
    {
      icon: "fa-solid fa-file-signature",
      title: "Strict Scope Protection",
      desc: "Detailed Software Requirement Specifications (SRS) ensure transparent milestones without unexpected costs or unagreed scope changes.",
    },
    {
      icon: "fa-solid fa-handshake-angle",
      title: "Transparent Change Requests",
      desc: "Out-of-scope features or client additions are handled through clear Change Requests (CR) with agreed pricing and timeline estimates.",
    },
  ];

  /* ── Compact 3-Page Contract Content for Print Engine ── */
  const printPage1Articles = [
    {
      title: "ARTICLE 1: PARTIES & BINDING MASTER AGREEMENT",
      content: (
        <>
          <p>
            This Master Service Agreement (&quot;MSA&quot;) is entered into by and between <strong>ChittorTech™ (Chittor Technologies)</strong>, having its principal place of business at Chittorgarh, Rajasthan, India (&quot;Service Provider&quot;), and the entity or individual commissioning services (&quot;Client&quot;).
          </p>
          <p>
            Issuance of a signed proposal, statement of work (SOW), purchase order, or advance deposit constitutes full legal acceptance of this Agreement.
          </p>
        </>
      ),
    },
    {
      title: "ARTICLE 2: SCOPE OF PROFESSIONAL DIGITAL SERVICES",
      content: (
        <>
          <ul>
            <li><strong>2.1 Custom Web Engineering:</strong> Full-stack applications (Next.js, React, Node.js), enterprise portals, cloud ERP/CRM platforms.</li>
            <li><strong>2.2 Mobile App Engineering:</strong> Native and cross-platform Android and iOS applications with cloud API integration.</li>
            <li><strong>2.3 Google Play Console &amp; Launch:</strong> Turnkey deployment, organization verification, and 14-day 12-tester closed testing management.</li>
            <li><strong>2.4 Cloud Infrastructure &amp; Security:</strong> AWS, Google Cloud, Firebase, Cloudflare CDN, SSL hardening, and DevOps deployment.</li>
          </ul>
        </>
      ),
    },
    {
      title: "ARTICLE 3: CLIENT OBLIGATIONS & SPECIFICATION SCOPE FREEZE",
      content: (
        <>
          <ul>
            <li><strong>3.1 Asset Provisioning:</strong> Client warrants legal ownership of all assets, brand logos, copy, and credentials provided to ChittorTech.</li>
            <li><strong>3.2 Feedback &amp; Delay Adjustment:</strong> Milestone deadlines rely on prompt client reviews. Feedback delayed beyond seven (7) business days extends scheduled delivery dates accordingly without penalty to ChittorTech.</li>
            <li><strong>3.3 SRS Scope Freeze &amp; Change Requests:</strong> Development proceeds strictly against an approved Software Requirement Specification (SRS). Subsequent feature additions are treated as formal Change Requests (CR) with separate cost and timeline quotations.</li>
          </ul>
        </>
      ),
    },
  ];

  const printPage2Articles = [
    {
      title: "ARTICLE 4: USER ACCEPTANCE TESTING (UAT) & DEEMED APPROVAL",
      content: (
        <>
          <p>
            Upon staging deployment, the Client has a <strong>ten (10) business day</strong> evaluation window to report deviations from the approved SRS. Documented defects will be remediated promptly by ChittorTech. If no defects are communicated within 10 days, or if the application is launched into live commercial production, the milestone is deemed fully approved.
          </p>
        </>
      ),
    },
    {
      title: "ARTICLE 5: INTELLECTUAL PROPERTY & 100% SOURCE CODE TRANSFER",
      content: (
        <>
          <p>
            Upon receipt of 100% full and final payment for all agreed project milestones, <strong>full commercial intellectual property, custom source code, databases, design assets, and production repositories are transferred completely to the Client</strong> for unencumbered ownership and commercial exploitation.
          </p>
          <p style={{ fontSize: "7pt", color: "#475569" }}>
            * ChittorTech retains ownership of pre-existing boilerplates and internal libraries, granting the Client a perpetual, royalty-free license to use them within the delivered application. Live code releases are withheld until all milestone invoices are cleared in full.
          </p>
        </>
      ),
    },
    {
      title: "ARTICLE 6: 30-DAY COMPLIMENTARY BUG WARRANTY & SERVICE LEVELS",
      content: (
        <>
          <p>
            ChittorTech provides thirty (30) calendar days of complimentary post-launch bug remediation covering defects arising directly from our authored code. The warranty excludes third-party API deprecations, external cloud server outages, or client-side code tampering. Extended support is available via Annual Maintenance Contracts (AMC).
          </p>
        </>
      ),
    },
    {
      title: "ARTICLE 7: LIMITATION OF LIABILITY & MUTUAL INDEMNIFICATION",
      content: (
        <>
          <p>
            To the maximum extent permitted by law, ChittorTech&apos;s aggregate financial liability for any claims arising out of this agreement shall not exceed the <strong>total fees paid by the Client for the specific milestone in dispute</strong>. Neither party shall be liable for indirect, incidental, or consequential damages.
          </p>
        </>
      ),
    },
  ];

  const printPage3Articles = [
    {
      title: "ARTICLE 8: TERMINATION & ACCRUED SETTLEMENT PROTOCOLS",
      content: (
        <>
          <p>
            Either party may terminate upon fourteen (14) days written notice. In the event of termination, the Client shall settle payment for all completed milestone deliverables and verified pro-rata work up to the effective date. Upon settlement, ChittorTech will transfer all completed code and assets for the paid portions.
          </p>
        </>
      ),
    },
    {
      title: "ARTICLE 9: GOVERNING LAW & EXCLUSIVE JURISDICTION",
      content: (
        <>
          <p>
            This Master Agreement shall be governed by and construed in accordance with the <strong>laws of the Republic of India</strong>. The parties agree to resolve disputes through amicable executive discussion for 30 days. If unresolved, the competent courts in <strong>Chittorgarh, Rajasthan, India</strong> shall have exclusive jurisdiction.
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Terms of Service"
      subtitle="These Terms of Service constitute a legally binding agreement between ChittorTech™ and our clients, governing software engineering, web application development, mobile applications, cloud services, and digital consulting engagements."
      badge="MASTER SERVICE AGREEMENT"
      effectiveDate="September 10, 2026"
      version="v2.6 Enterprise"
      jurisdiction="India (Information Technology Act 2000) & International Commercial Law"
      tocItems={tocItems}
      executiveSummary={executiveSummary}
      printContract={
        <PrintContractView
          documentType="terms"
          title="MASTER SERVICE AGREEMENT & TERMS OF SERVICE"
          refCode="CT-MSA-TOS-2026"
          effectiveDate="September 10, 2026"
          version="v2.6 Enterprise"
          jurisdiction="Republic of India (Chittorgarh, Rajasthan Jurisdiction)"
          page1Articles={printPage1Articles}
          page2Articles={printPage2Articles}
          page3Articles={printPage3Articles}
          frameworkNote="This document constitutes the General Master Service Agreement of ChittorTech™ (Chittor Technologies). Execution or electronic acceptance of this document legally binds the Client to these foundational terms. In addition to this general agreement, a Project-Specific Addendum (specifying the definitive Software Requirement Specification [SRS], delivery milestones, and payment schedule) shall be executed separately for each project engagement and shall form an integral, enforceable schedule governed by this Master Contract."
        />
      }
    >
      {/* ── Clause 1: Agreement & Acceptance ── */}
      <LegalClauseCard
        id="acceptance"
        clauseNumber="01"
        title="Agreement & Acceptance of Terms"
        icon="fa-solid fa-handshake"
        badge="BINDING CONTRACT"
        badgeType="primary"
      >
        <p>
          By engaging <strong>ChittorTech™</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;) for web development, software engineering, mobile applications, Google Play deployment, cloud infrastructure, or consulting services, or by issuing a formal purchase order, signed quotation, statement of work (SOW), or advance payment, you (&quot;Client&quot;, &quot;you&quot;) agree to be legally bound by these Terms of Service.
        </p>
        <p>
          If you are entering into this agreement on behalf of a corporate entity, company, or organization, you represent and warrant that you possess full legal authority to bind said entity to these terms.
        </p>
      </LegalClauseCard>

      {/* ── Clause 2: Scope of Services ── */}
      <LegalClauseCard
        id="services"
        clauseNumber="02"
        title="Scope of Professional IT &amp; Engineering Services"
        icon="fa-solid fa-layer-group"
        badge="SERVICE PORTFOLIO"
        badgeType="slate"
      >
        <p>
          ChittorTech delivers high-performance digital engineering services, including but not limited to:
        </p>
        <ul>
          <li>
            <strong>Modern Web Application Development:</strong> High-speed web applications built on Next.js, React, Node.js, enterprise ERPs, CRMs, and custom portals.
          </li>
          <li>
            <strong>Mobile Application Engineering:</strong> Native and cross-platform Android and iOS mobile applications, API architectures, and cloud backend integrations.
          </li>
          <li>
            <strong>Google Play Console &amp; Launch Services:</strong> End-to-end Google Play Console deployment, organization account verification guidance, 14-day 12-tester closed testing compliance, and production release management.
          </li>
          <li>
            <strong>Cloud Infrastructure &amp; Security:</strong> Deployment on AWS, Google Cloud/Firebase, Cloudflare CDN configuration, SSL hardening, and automated CI/CD pipelines.
          </li>
          <li>
            <strong>Search Engine Optimization (SEO) &amp; Digital Growth:</strong> Technical SEO audits, Core Web Vitals optimization, on-page indexing architecture, and structured data schemas.
          </li>
        </ul>
      </LegalClauseCard>

      {/* ── Clause 3: Client Obligations & Assets ── */}
      <LegalClauseCard
        id="client-obligations"
        clauseNumber="03"
        title="Client Obligations, Asset Provisioning &amp; Project Timelines"
        icon="fa-solid fa-user-check"
        badge="COLLABORATION"
        badgeType="emerald"
      >
        <p>
          To ensure timely execution and milestone compliance, successful delivery requires collaborative participation:
        </p>
        <ul>
          <li>
            <strong>Asset Delivery:</strong> The Client is responsible for supplying brand assets, logos, copy text, API documentation, and third-party account credentials required for the agreed milestones in a timely manner.
          </li>
          <li>
            <strong>Intellectual Ownership Warranty:</strong> The Client warrants that all logos, trademarks, graphic designs, written copy, and databases provided to ChittorTech are legally owned or appropriately licensed by the Client, and do not infringe any third-party intellectual property rights.
          </li>
          <li>
            <strong>Impact of Client Delays:</strong> Project timelines provided by ChittorTech are contingent upon prompt client feedback. Where feedback, approvals, or required credentials are delayed by more than seven (7) business days, scheduled milestone delivery dates will be adjusted accordingly without penalty to ChittorTech.
          </li>
        </ul>
      </LegalClauseCard>

      {/* ── Clause 4: Specifications & Scope Freeze ── */}
      <LegalClauseCard
        id="srs-scope-freeze"
        clauseNumber="04"
        title="Software Requirements Specification (SRS) &amp; Scope Freeze"
        icon="fa-solid fa-diagram-project"
        badge="SCOPE MANAGEMENT"
        badgeType="primary"
      >
        <p>
          Clear documentation prevents misunderstandings and guarantees predictable results:
        </p>
        <ul>
          <li>
            <strong>SRS Scope Freeze:</strong> Development commences strictly against an approved Software Requirement Specification (SRS), project proposal, or written Statement of Work (SOW). Approval of the SRS by email or messaging constitutes a formal &quot;Scope Freeze&quot;.
          </li>
          <li>
            <strong>Change Requests (Scope Creep Policy):</strong> Any feature, third-party API integration, layout redesign, or workflow addition requested after the Scope Freeze will be categorized as a <strong>Change Request (CR)</strong>.
          </li>
          <li>
            <strong>Evaluation of CRs:</strong> ChittorTech will assess the technical impact, estimated hours, and associated cost of any CR. Work on the requested additions will proceed only upon mutual written approval of the CR quotation.
          </li>
        </ul>
      </LegalClauseCard>

      {/* ── Clause 5: UAT & Acceptance Testing ── */}
      <LegalClauseCard
        id="uat-acceptance"
        clauseNumber="05"
        title="User Acceptance Testing (UAT) &amp; Deemed Acceptance"
        icon="fa-solid fa-list-check"
        badge="QUALITY ASSURANCE"
        badgeType="slate"
      >
        <p>
          Upon completing a development milestone or project release, ChittorTech will deploy the build to a staging environment for client evaluation:
        </p>
        <ul>
          <li>
            <strong>UAT Evaluation Window:</strong> The Client shall have a testing window of <strong>ten (10) business days</strong> from the date of staging deployment to test delivered features against the approved SRS and submit functional bug reports.
          </li>
          <li>
            <strong>Remediation:</strong> Any documented deviations from the approved SRS will be remediated by ChittorTech at no additional cost.
          </li>
          <li>
            <strong>Deemed Acceptance:</strong> If the Client fails to provide written feedback or defect reports within the 10-business-day window, or if the Client proceeds to deploy the build into public production use, the milestone shall be deemed fully accepted and approved.
          </li>
        </ul>
      </LegalClauseCard>

      {/* ── Clause 6: IP & Source Code Ownership ── */}
      <LegalClauseCard
        id="ip-code-ownership"
        clauseNumber="06"
        title="Intellectual Property Rights &amp; Source Code Ownership"
        icon="fa-solid fa-code-fork"
        badge="IP TRANSFER"
        badgeType="emerald"
      >
        <div className="clause-callout success">
          <div className="clause-callout-title">
            <i className="fa-solid fa-circle-check"></i> 100% Client Ownership Guarantee
          </div>
          <p>
            Upon receipt of 100% full and final payment for all agreed project milestones, <strong>full commercial intellectual property, custom source code, repository access, and production builds are transferred completely to the Client</strong> for unrestricted business use.
          </p>
        </div>
        <p>
          The intellectual property framework operates under the following conditions:
        </p>
        <ul>
          <li>
            <strong>Pre-Existing Frameworks:</strong> ChittorTech retains ownership of its pre-existing developer boilerplates, internal utility scripts, and open-source foundation packages incorporated into the project. The Client receives an irrevocable, perpetual, royalty-free license to use these libraries within the delivered application.
          </li>
          <li>
            <strong>Withholding Prior to Full Settlement:</strong> Source code repositories, master administrative keys, and live production server transfers will not be released until all milestone balances are cleared in full.
          </li>
          <li>
            <strong>Portfolio &amp; Attribution:</strong> Unless a formal Non-Disclosure Agreement explicitly prohibits public acknowledgment, ChittorTech reserves the professional right to display screenshots, case studies, and a brief description of the delivered project in our online portfolio.
          </li>
        </ul>
      </LegalClauseCard>

      {/* ── Clause 7: 30-Day Bug Warranty & SLA ── */}
      <LegalClauseCard
        id="warranty-sla"
        clauseNumber="07"
        title="30-Day Post-Launch Bug Warranty &amp; Service Levels"
        icon="fa-solid fa-wrench"
        badge="WARRANTY INCLUDED"
        badgeType="primary"
      >
        <p>
          We stand behind the quality and craftsmanship of our code:
        </p>
        <ul>
          <li>
            <strong>30-Day Complimentary Warranty:</strong> ChittorTech provides thirty (30) calendar days of complimentary warranty support starting from the date of final production deployment or handover. This covers functional bugs, broken logic, and errors arising directly from our authored code.
          </li>
          <li>
            <strong>Warranty Exclusions:</strong> The complimentary bug warranty does not cover:
            <ul style={{ marginTop: "8px" }}>
              <li>Modifications or tampering with the source code made by the Client or third-party developers.</li>
              <li>Outages, breaking changes, or deprecations introduced by third-party APIs (e.g., Google Maps, payment gateways, WhatsApp Business APIs).</li>
              <li>Server misconfigurations, DNS failures, or downtime originating from external cloud hosting vendors.</li>
              <li>Brand-new feature requests or design alterations not included in the original SRS.</li>
            </ul>
          </li>
          <li>
            <strong>Post-Warranty Maintenance:</strong> Continued updates, OS compatibility patches, security updates, and active technical support beyond 30 days are available through our Annual Maintenance Contracts (AMC).
          </li>
        </ul>
      </LegalClauseCard>

      {/* ── Clause 8: Default & Service Suspension ── */}
      <LegalClauseCard
        id="service-suspension"
        clauseNumber="08"
        title="Payment Default &amp; Temporary Service Suspension"
        icon="fa-solid fa-pause"
        badge="COMMERCIAL SAFETY"
        badgeType="amber"
      >
        <p>
          In the event that an undisputed milestone invoice remains unpaid past seven (7) calendar days from its due date:
        </p>
        <ul>
          <li>
            ChittorTech reserves the right to temporarily pause active development, hold intermediate staging builds, or freeze development sprint allocations until the balance is cleared.
          </li>
          <li>
            Project timelines will be extended by the duration of the payment hold plus standard sprint re-mobilization time (typically 2 to 3 business days).
          </li>
          <li>
            ChittorTech shall not be held liable for any commercial delays, business interruptions, or launch postponements resulting from payment defaults.
          </li>
        </ul>
      </LegalClauseCard>

      {/* ── Clause 9: Limitation of Liability ── */}
      <LegalClauseCard
        id="liability-indemnity"
        clauseNumber="09"
        title="Limitation of Liability &amp; Mutual Indemnification"
        icon="fa-solid fa-shield"
        badge="LEGAL SAFEGUARDS"
        badgeType="slate"
      >
        <p>
          To the maximum extent permitted by applicable Indian and international law:
        </p>
        <ul>
          <li>
            <strong>Cap on Direct Liability:</strong> Under no circumstances shall the aggregate financial liability of ChittorTech for any claims arising out of or related to this agreement exceed the <strong>total fees actually paid by the Client to ChittorTech for the specific milestone or project component in dispute</strong> during the preceding three (3) months.
          </li>
          <li>
            <strong>Consequential Damages Waiver:</strong> Neither party shall be liable for indirect, incidental, special, punitive, or consequential damages, including loss of business revenue, loss of data, operational downtime, or loss of commercial goodwill.
          </li>
          <li>
            <strong>Mutual Indemnity:</strong> The Client agrees to defend, indemnify, and hold harmless ChittorTech, its developers, and affiliates from any third-party claims, liabilities, or expenses resulting from materials, logos, copy, or data supplied by the Client that infringe intellectual property or violate privacy statutes.
          </li>
        </ul>
      </LegalClauseCard>

      {/* ── Clause 10: Termination & Fair Exit ── */}
      <LegalClauseCard
        id="termination-exit"
        clauseNumber="10"
        title="Termination Protocols &amp; Fair Exit Terms"
        icon="fa-solid fa-arrow-right-from-bracket"
        badge="EXIT PROTOCOLS"
        badgeType="amber"
      >
        <p>
          Either party may initiate termination under the following conditions:
        </p>
        <ul>
          <li>
            <strong>Termination for Cause:</strong> Either party may terminate immediately upon written notice if the other party commits a material breach of these terms and fails to cure such breach within fourteen (14) calendar days of receiving written notification.
          </li>
          <li>
            <strong>Termination for Convenience:</strong> If the Client chooses to terminate a project without cause, written notice of fourteen (14) days is required.
          </li>
          <li>
            <strong>Accrued Settlement &amp; Work Handover:</strong> Upon termination, the Client is liable to settle payment for all completed milestones and verified pro-rata work completed up to the termination effective date. Upon receipt of settlement, ChittorTech will transfer all completed deliverables, design assets, and source code authored for the paid portions.
          </li>
        </ul>
      </LegalClauseCard>

      {/* ── Clause 11: Indian Law & Jurisdiction ── */}
      <LegalClauseCard
        id="jurisdiction-arbitration"
        clauseNumber="11"
        title="Governing Law, Amicable Resolution &amp; Jurisdiction"
        icon="fa-solid fa-gavel"
        badge="JURISDICTION"
        badgeType="primary"
      >
        <p>
          This Agreement and all associated Statements of Work shall be governed by, construed, and enforced in accordance with the <strong>laws of the Republic of India</strong>.
        </p>
        <div className="clause-callout">
          <div className="clause-callout-title">
            <i className="fa-solid fa-landmark-dome"></i> Amicable Negotiation &amp; Exclusive Jurisdiction
          </div>
          <p>
            In the event of any dispute, claim, or controversy arising out of or relating to these terms, the parties agree to first attempt resolution through good-faith executive consultation for a period of thirty (30) days.
          </p>
          <p style={{ margin: 0 }}>
            If unresolved through amicable consultation, both parties irrevocably agree that the <strong>competent courts situated in Chittorgarh, Rajasthan, India</strong> shall have exclusive legal jurisdiction to settle any disputes or legal proceedings.
          </p>
        </div>
      </LegalClauseCard>
    </LegalPageLayout>
  );
}
