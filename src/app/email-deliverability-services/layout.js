export const metadata = {
  title: "Best Email Deliverability Services & Spam Recovery | ChittorTech",
  description:
    "Best-rated email deliverability services & spam recovery consultants. Fix SPF, DKIM, DMARC, Google Workspace, Microsoft 365, and cold outbound deliverability. Target 10/10 inbox placement.",
  keywords: [
    "best email deliverability services",
    "best email deliverability consultant",
    "best email deliverability agency",
    "top email deliverability company",
    "best email spam recovery services",
    "hire email deliverability expert",
    "best email deliverability service in USA",
    "best email deliverability service in UK",
    "best email deliverability service in India",
    "best email deliverability consultant in UAE",
    "best email deliverability services in Canada",
    "best email deliverability service in Australia",
    "email deliverability consulting firm",
    "hire cold email deliverability consultant",
    "best cold email deliverability agency",
    "Google Workspace emails going to spam fix",
    "Microsoft 365 emails going to junk fix",
    "fix Outlook spam filter issues",
    "email deliverability audit service",
    "Mail-Tester 10/10 score guarantee service",
    "Mail-Tester 10/10 optimization",
    "SPF DKIM DMARC setup service",
    "SPF PermError fix service",
    "DMARC p=reject implementation consultant",
    "email authentication specialist",
    "Google Postmaster Tools setup and reputation fix",
    "Smartlead email deliverability setup",
    "Instantly email deliverability consultant",
    "Lemlist deliverability optimization",
    "Apollo io email deliverability setup",
    "cold email infrastructure setup agency",
    "custom tracking domain setup",
    "email blacklist removal service",
    "fix domain reputation Google Postmaster",
    "enterprise email deliverability consulting",
    "B2B email deliverability consultant",
    "outbound email deliverability expert",
    "fix Gmail 550 spam rejection",
    "stop emails going to spam folder",
    "email inbox placement service",
    "best email deliverability agency India",
    "best email deliverability agency USA",
    "hire email infrastructure engineer",
    "Google bulk sender compliance 2024",
    "Yahoo email authentication requirements",
    "SPF flattening service",
    "DKIM 2048 bit key setup",
    "DMARC aggregate report analysis",
    "transactional email deliverability service",
    "SendGrid deliverability consultant",
    "Amazon SES deliverability expert",
    "Mailgun spam recovery service",
    "email warm up strategy consultant",
    "corporate email deliverability solutions",
    "ChittorTech email deliverability services"
  ],
  alternates: {
    canonical: "https://chittortech.in/email-deliverability-services",
  },
  openGraph: {
    title: "Best Email Deliverability Services & Spam Recovery | ChittorTech",
    description:
      "Emails landing in spam? ChittorTech fixes SPF, DKIM, DMARC, Google Workspace, Microsoft 365 and cold email infrastructure. Target 10/10 Mail-Tester score.",
    url: "https://chittortech.in/email-deliverability-services",
    siteName: "ChittorTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "ChittorTech Best Email Deliverability Services & Spam Recovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Email Deliverability Services & Spam Recovery | ChittorTech",
    description:
      "Stop losing deals to the spam folder. Best-in-class SPF, DKIM, DMARC, Google Workspace, and Microsoft 365 email deliverability services by ChittorTech.",
    images: ["/favicon.png"],
  },
};

export default function Layout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "ChittorTech Email Deliverability & DNS Authentication",
        "url": "https://chittortech.in/email-deliverability-services",
        "logo": "https://chittortech.in/favicon.png",
        "image": "https://chittortech.in/favicon.png",
        "description":
          "Enterprise email deliverability diagnostics, SPF/DKIM/DMARC authentication, Google & Yahoo compliance audits, and spam recovery for global businesses.",
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
        "areaServed": ["US", "GB", "AE", "CA", "AU", "IN"]
      },
      {
        "@type": "Service",
        "name": "Email Deliverability & Spam Recovery Services",
        "provider": {
          "@type": "Organization",
          "name": "ChittorTech"
        },
        "serviceType": "Email Infrastructure Engineering",
        "offers": [
          {
            "@type": "Offer",
            "name": "Emergency Spam Fix",
            "price": "99",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "name": "Complete Authentication & Deliverability Suite",
            "price": "199",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "name": "Enterprise & Agency Email Fleet",
            "price": "499",
            "priceCurrency": "USD"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why are my business emails suddenly going to Spam or getting rejected?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google and Yahoo enforced strict sender guidelines requiring mandatory SPF, DKIM, and DMARC alignment, low spam complaint rates (<0.3%), and valid reverse DNS. Failure in any element triggers permanent SMTP 550 rejections or direct routing into Spam."
            }
          },
          {
            "@type": "Question",
            "name": "What is the SPF 10-lookup limit and how does ChittorTech fix SPF PermError?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RFC 7208 limits SPF evaluations to 10 DNS lookups. Adding multiple services (e.g. Google Workspace, Zendesk, Mailchimp) causes SPF PermError. ChittorTech resolves this via controlled SPF architecture optimization, subdomain segmentation, and intelligent SPF flattening."
            }
          },
          {
            "@type": "Question",
            "name": "How does the progressive DMARC policy deployment work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We implement DMARC in three controlled stages: Phase 1 Monitoring (p=none) with aggregate RUA reports, Phase 2 Partial Enforcement (p=quarantine), and Phase 3 Full Rejection (p=reject) once all legitimate email sources are 100% aligned."
            }
          },
          {
            "@type": "Question",
            "name": "Do you support cold email platforms like Smartlead, Instantly, and Apollo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We configure multi-domain infrastructure, custom branded tracking domains (SSL CNAMEs), mailbox authentication, and reputation monitoring across Smartlead, Instantly, Lemlist, and Apollo.io."
            }
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
