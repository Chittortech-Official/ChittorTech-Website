export const metadata = {
  title: "E-Governance & Government Software Solutions, Rajasthan | ChittorTech",
  description:
    "Websites, citizen grievance portals, ward complaint systems, and municipal IT infrastructure for government departments, police administrations, and urban local bodies by ChittorTech, Rajasthan.",
  keywords: [
    "E-Governance Software Solutions",
    "Government Web Portal Development Rajasthan",
    "Municipal Council Complaint Management System",
    "Nagar Parishad Citizen Services Portal",
    "Police Citizen Portal Development",
    "SP Chittorgarh Citizen Portal",
    "Panch Gaurav Portal Chittorgarh",
    "Public Grievance Redressal System India",
    "ChittorTech Government IT Services",
    "Government Software Architecture Rajasthan",
    "DoIT&C iStart Rajasthan Software Vendor",
  ],
  alternates: {
    canonical: "https://chittortech.in/government-egovernance-solutions",
  },
  openGraph: {
    title: "E-Governance & Government Software Solutions, Rajasthan | ChittorTech",
    description:
      "Websites, citizen grievance portals, ward complaint systems, and municipal IT infrastructure for government departments and municipal councils.",
    url: "https://chittortech.in/government-egovernance-solutions",
    siteName: "ChittorTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "ChittorTech E-Governance & Government Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Governance & Government Software Solutions, Rajasthan | ChittorTech",
    description:
      "Websites, citizen portals, and complaint management systems for government departments and municipal bodies by ChittorTech.",
    images: ["/favicon.png"],
  },
};

export default function Layout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GovernmentService",
        "@id": "https://chittortech.in/government-egovernance-solutions#service",
        name: "E-Governance & Public Sector Software Engineering",
        serviceType: "Government Software & Citizen Grievance Portal Development",
        provider: {
          "@type": "Organization",
          name: "ChittorTech",
          url: "https://chittortech.in",
          logo: "https://chittortech.in/favicon.png",
          founder: {
            "@type": "Person",
            name: "Kush Sharma",
            jobTitle: "Founder & Chief Government Relations Officer (CGRO)"
          },
          member: {
            "@type": "Person",
            name: "Lav Sharma",
            jobTitle: "Co-Founder & Chief Business Development & Strategic Partnerships Officer (CBDO)"
          }
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Rajasthan, India"
        },
        description:
          "Specialized development of citizen inquiry portals, municipal grievance redressal systems, and administrative dashboards for government departments and local bodies.",
        url: "https://chittortech.in/government-egovernance-solutions",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://chittortech.in/government-egovernance-solutions#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://chittortech.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Industries",
            item: "https://chittortech.in/#industries",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Government & E-Governance Solutions",
            item: "https://chittortech.in/government-egovernance-solutions",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://chittortech.in/government-egovernance-solutions#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can government departments and municipal bodies procure software from ChittorTech under GFR rules?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. ChittorTech is an MSME / Udyam registered enterprise under the Ministry of MSME, Govt. of India, and an officially recognized startup under DPIIT and iStart Rajasthan (DoIT&C, Govt. of Rajasthan). Government departments can engage ChittorTech through direct procurement under GFR Rule 149 / 154 / 155 limits, proprietary article certificates, or competitive e-tender processes.",
            },
          },
          {
            "@type": "Question",
            name: "What security standards and data localization compliance does ChittorTech provide for public sector portals?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All government platforms engineered by ChittorTech follow strict CERT-In guidelines, OWASP Top 10 web security compliance, end-to-end TLS encryption, role-based access control (RBAC), and 100% data residency within India across MeitY-empaneled cloud providers or on-premise government server enclosures.",
            },
          },
          {
            "@type": "Question",
            name: "Does ChittorTech provide complete source code ownership and post-deployment Annual Maintenance Contracts (AMC)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. ChittorTech guarantees 100% custom source code and commercial intellectual property transfer to the procuring department upon milestone sign-off. We also provide dedicated post-launch SLA-backed Annual Maintenance Contracts (AMC) covering server security patches, zero-day mitigation, and regular feature updates.",
            },
          },
          {
            "@type": "Question",
            name: "How does the Nagar Parishad complaint management system improve civic grievance redressal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The portal allows citizens to lodge geotagged complaints with photo evidence across ward-specific categories such as streetlights, sanitation, drain cleaning, and water supply. It automatically assigns tickets to the respective ward sanitary inspector with an enforceable SLA, sends real-time SMS/WhatsApp updates to citizens, and provides an executive analytics dashboard for the Municipal Commissioner and Councilors.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}

