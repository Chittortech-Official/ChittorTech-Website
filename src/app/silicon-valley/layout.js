import { globalHubsData } from "@/data/globalHubsData";

export async function generateMetadata() {
  const hub = globalHubsData["silicon-valley"];
  return {
    title: hub.metaTitle,
    description: hub.metaDescription,
    keywords: hub.keywords,
    alternates: {
      canonical: "https://chittortech.in/silicon-valley",
    },
    openGraph: {
      title: hub.metaTitle,
      description: hub.metaDescription,
      url: "https://chittortech.in/silicon-valley",
      siteName: "ChittorTech",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/favicon.png",
          width: 512,
          height: 512,
          alt: `${hub.name} Offshore Software Development by ChittorTech`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: hub.metaTitle,
      description: hub.metaDescription,
      images: ["/favicon.png"],
    },
  };
}

export default function Layout({ children }) {
  const hub = globalHubsData["silicon-valley"];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": `ChittorTech ${hub.name} Offshore Engineering`,
        "url": "https://chittortech.in/silicon-valley",
        "logo": "https://chittortech.in/favicon.png",
        "description": hub.metaDescription,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "22:00"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": hub.faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://chittortech.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": hub.name,
            "item": "https://chittortech.in/silicon-valley"
          }
        ]
      }
    ]
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
