export const metadata = {
  title: "B2B Lead Generation Services | Automated AI Prospecting & Sales Engine | ChittorTech",
  description:
    "Multiply your B2B sales with ChittorTech's Automated Lead System. Real-time Google Maps data extraction, AI-powered WhatsApp & Email hyper-personalized outreach, and intelligent CRM pipelines for manufacturers, hotels, textiles, and enterprises.",
  keywords: [
    "B2B Lead Generation Services",
    "Automated Lead Generation Software",
    "Google Maps Lead Extractor",
    "B2B WhatsApp Outreach Automation",
    "AI Cold Email & Pitch Generator",
    "Marble Industry Lead Generation",
    "Textile B2B Buyer Leads",
    "Hotel Direct Booking Leads",
    "ChittorTech B2B Sales Engine",
    "Lead Management CRM India",
  ],
  alternates: {
    canonical: "https://chittortech.in/b2b-lead-generation-services",
  },
  openGraph: {
    title: "B2B Lead Generation Services | Automated AI Prospecting Engine | ChittorTech",
    description:
      "Generate high-intent B2B inquiries with ChittorTech's automated Google Maps intelligence, AI hyper-personalized pitches, and WhatsApp CRM pipelines.",
    url: "https://chittortech.in/b2b-lead-generation-services",
    siteName: "ChittorTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "ChittorTech B2B Lead Generation & Automated Sales Engine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Lead Generation Services | ChittorTech",
    description:
      "Multiply your B2B sales with ChittorTech's Automated Lead Generation & AI Outreach Engine.",
    images: ["/favicon.png"],
  },
};

export default function Layout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "ChittorTech B2B Lead Generation & Sales Automation",
        "url": "https://chittortech.in/b2b-lead-generation-services",
        "logo": "https://chittortech.in/favicon.png",
        "image": "https://chittortech.in/favicon.png",
        "description":
          "Enterprise B2B Lead Generation Services and Automated Sales Pipelines powered by Google Maps intelligence, AI message personalization, and multi-channel outreach automation.",
        "priceRange": "$$",
        "telephone": "+91-75974-51057",
        "email": "business@chittortech.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Collectorate Circle",
          "addressLocality": "Chittorgarh",
          "addressRegion": "Rajasthan",
          "postalCode": "312001",
          "addressCountry": "IN"
        },
        "areaServed": ["IN", "AE", "US", "GB", "SG", "AU", "CA", "DE", "SA"]
      },
      {
        "@type": "SoftwareApplication",
        "name": "ChittorTech Automated B2B Lead Engine",
        "operatingSystem": "Web, Cloud, Android, iOS",
        "applicationCategory": "BusinessApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "148"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does ChittorTech's Automated B2B Lead Generation Engine work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our engine connects directly with live Google Maps and Places intelligence to extract authentic, verified business contacts (phone, address, website, rating) across any targeted niche or city. It then utilizes custom AI models to draft tailored, hyper-personalized value proposition pitches for WhatsApp and Email outreach."
            }
          },
          {
            "@type": "Question",
            "name": "Which industries can benefit from this B2B Lead Generation system?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The platform is pre-optimized for Marble & Granite manufacturers, Textile mills, Luxury Hotels & Resorts (zero-commission direct bookings), Dharamshalas & Trusts, Schools & Colleges, Transport & Logistics, and Industrial B2B enterprises."
            }
          },
          {
            "@type": "Question",
            "name": "Can we send automated personalized WhatsApp messages to leads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our system generates customized Hindi & English pitches tailored to each business's exact operational pain point and enables instant 1-click WhatsApp dispatch or API-based workflow automations."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a CRM to track lead status and follow-ups?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our integrated cloud database tracks the full lifecycle of every lead from Cold, Contacted, In Discussion, Demo Scheduled, to Won/Closed, complete with timestamped notes, revenue tracking, and Excel export."
            }
          }
        ]
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
            "name": "B2B Lead Generation Services",
            "item": "https://chittortech.in/b2b-lead-generation-services"
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
