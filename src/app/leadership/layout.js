export const metadata = {
  title: "Leadership & Technical Advisory Board | ChittorTech",
  description:
    "Meet ChittorTech's executive leadership and technical advisory board. Led by Kush Sharma (Founder & CGRO) and Lav Sharma (Co-Founder & CBDO), advised by senior engineers from premier technology ecosystems.",
  keywords: [
    "ChittorTech Leadership",
    "Kush Sharma ChittorTech",
    "Lav Sharma ChittorTech",
    "ChittorTech Founders",
    "ChittorTech Technical Advisory Board",
    "Navneet Sharma IIT Mandi",
    "ChittorTech Management",
    "Government IT Leadership Rajasthan",
    "Enterprise Software Leadership India",
  ],
  alternates: {
    canonical: "https://chittortech.in/leadership",
  },
  openGraph: {
    title: "Leadership & Technical Advisory Board | ChittorTech",
    description:
      "Meet the leadership driving mission-critical e-governance systems, enterprise digital transformation, and cloud security architecture at ChittorTech.",
    url: "https://chittortech.in/leadership",
    siteName: "ChittorTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "ChittorTech Leadership & Advisory Board",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership & Technical Advisory Board | ChittorTech",
    description:
      "Led by Kush Sharma (Founder & CGRO) and Lav Sharma (Co-Founder & CBDO), advised by senior technology engineers.",
    images: ["/favicon.png"],
  },
};

export default function Layout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://chittortech.in/#organization",
        name: "ChittorTech",
        url: "https://chittortech.in",
        logo: "https://chittortech.in/favicon.png",
        founder: {
          "@type": "Person",
          name: "Kush Sharma",
          jobTitle: "Founder & Chief Government Relations Officer (CGRO)",
          url: "https://chittortech.in/leadership",
        },
        member: [
          {
            "@type": "Person",
            name: "Lav Sharma",
            jobTitle: "Co-Founder & Chief Business Development & Strategic Partnerships Officer (CBDO)",
            url: "https://chittortech.in/leadership",
          },
          {
            "@type": "Person",
            name: "Navneet Sharma",
            jobTitle: "Technical Advisor — Cloud, Enterprise Security & AI Platforms",
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Indian Institute of Technology (IIT), Mandi",
            },
          },
          {
            "@type": "Person",
            name: "Ronak Sharma",
            jobTitle: "Technical Advisor — Multi-Cloud Architecture, FinOps & Enterprise Transformation",
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Rajasthan Technical University (RTU)",
            },
          },
          {
            "@type": "Person",
            name: "Ananya Sharma",
            jobTitle: "Technical Advisor — Enterprise Full-Stack Engineering, Workflow Automation & Generative AI",
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Chitkara University",
            },
          },
          {
            "@type": "Person",
            name: "Ayush Sharma",
            jobTitle: "Technical Advisor — AI Product Strategy, Agentic AI & B2B SaaS",
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Netaji Subhas Institute of Technology (NSIT), Delhi",
            },
          },
          {
            "@type": "Person",
            name: "Divya Shaktawat",
            jobTitle: "Technical Advisor — Enterprise Java Microservices, Kafka & AWS Cloud Engineering",
            sameAs: "https://www.linkedin.com/in/divya-shaktawat-17242015a/",
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "M.L.V. Textile & Engineering College, Bhilwara",
            },
          },
          {
            "@type": "Person",
            name: "Bharat Sharma",
            jobTitle: "Technical Advisor — Enterprise Banking Architecture, Cloud Engineering & Technical Project Leadership",
            sameAs: "https://www.linkedin.com/in/bharat-sharma-978b801b3/",
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Rajasthan Technical University (RTU), Kota",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://chittortech.in/leadership#breadcrumb",
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
            name: "Leadership & Advisory Board",
            item: "https://chittortech.in/leadership",
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

