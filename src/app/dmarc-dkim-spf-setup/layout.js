export const metadata = {
  title: "Best DMARC, DKIM & SPF Setup Services | Google & Yahoo Compliance | ChittorTech",
  description:
    "Best-rated DMARC, DKIM, and SPF setup services for Google Workspace, Microsoft 365, and AWS SES. Stop domain spoofing, fix spam errors, and achieve DMARC p=reject compliance.",
  keywords: [
    "best DMARC setup service",
    "best DKIM setup service",
    "best SPF setup service",
    "hire best DMARC implementation in India",
    "best DMARC service in USA",
    "best DMARC service in UK",
    "best DMARC service in UAE",
    "best DMARC service in Canada",
    "best DMARC service in Australia",
    "best email authentication consultant",
    "top DMARC implementation agency",
    "hire DMARC expert",
    "hire email authentication engineer",
    "DMARC setup service India",
    "DMARC setup service USA",
    "DMARC setup service UK",
    "DMARC implementation services",
    "SPF DKIM DMARC configuration service",
    "DMARC p=reject compliance service",
    "Google and Yahoo email compliance mandates",
    "SPF 10 DNS lookup limit fix",
    "SPF record flattening service",
    "DKIM 2048-bit key setup service",
    "DMARC alignment SPF DKIM fix",
    "DMARC RUA aggregate reporting setup",
    "DMARC RUF forensic failure reports",
    "Google Postmaster Tools DMARC verification",
    "domain spoofing protection service",
    "anti-phishing email authentication",
    "Google Workspace DMARC setup",
    "Microsoft 365 SPF DKIM DMARC configuration",
    "Office 365 custom DKIM selector setup",
    "AWS SES DMARC DKIM SPF implementation",
    "Zoho Mail DMARC DKIM SPF configuration",
    "Cloudflare DNS DMARC setup",
    "GoDaddy DMARC DKIM configuration",
    "Namecheap SPF DKIM DMARC consultant",
    "enterprise DMARC deployment consultant",
    "stop email spoofing on company domain",
    "DMARC policy rollout none quarantine reject",
    "fix DMARC unauthenticated mail rejected 550",
    "DMARC enforcement roadmap",
    "subdomain DMARC policy sp=reject",
    "best email security consultant",
    "hire SPF DKIM specialist",
    "email spoofing prevention services India",
    "email authentication agency USA",
    "DMARC report monitoring and analysis",
    "B2B domain authentication service",
    "cybersecurity email authentication firm",
    "corporate domain email protection",
    "fix SPF too many DNS lookups PermError",
    "RFC 7489 DMARC compliant setup",
    "RFC 6376 DKIM implementation",
    "ChittorTech DMARC DKIM SPF setup services"
  ],
  alternates: {
    canonical: "https://chittortech.in/dmarc-dkim-spf-setup",
  },
  openGraph: {
    title: "Best DMARC, DKIM & SPF Setup Services | Google & Yahoo Compliance | ChittorTech",
    description:
      "Stop domain spoofing before someone uses your brand for fraud. End-to-end SPF, 2048-bit DKIM, and DMARC p=reject roadmap by ChittorTech.",
    url: "https://chittortech.in/dmarc-dkim-spf-setup",
    siteName: "ChittorTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "ChittorTech DMARC, DKIM & SPF Setup Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best DMARC, DKIM & SPF Setup Services | ChittorTech",
    description:
      "Expert SPF, DKIM and DMARC enforcement. Protect your brand from spoofing and comply with Google & Yahoo mandates.",
    images: ["/favicon.png"],
  },
};

export default function Layout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "ChittorTech DMARC, DKIM & SPF Authentication Engineering",
        "url": "https://chittortech.in/dmarc-dkim-spf-setup",
        "logo": "https://chittortech.in/favicon.png",
        "image": "https://chittortech.in/favicon.png",
        "description":
          "Enterprise email authentication engineering: SPF 10-lookup optimization, 2048-bit DKIM key rotation, progressive DMARC p=reject enforcement, and Google/Yahoo mandate compliance.",
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
        "name": "DMARC, DKIM & SPF Authentication Setup Services",
        "provider": {
          "@type": "Organization",
          "name": "ChittorTech"
        },
        "serviceType": "DNS Email Security Infrastructure",
        "offers": [
          {
            "@type": "Offer",
            "name": "Express Authentication Fix",
            "price": "79",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "name": "Complete DMARC Enforcement & Monitoring Suite",
            "price": "149",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "name": "Enterprise Multi-Domain / Agency Stack",
            "price": "349",
            "priceCurrency": "USD"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What happens if I jump directly from p=none to p=reject?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "p=reject instructs receiving mail systems to drop any email failing DMARC. If third-party senders like your CRM, ERP, invoices, or transactional APIs have not been properly authenticated and aligned, mission-critical business emails will be rejected."
            }
          },
          {
            "@type": "Question",
            "name": "Can I have multiple SPF records on the same domain?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. RFC 7208 forbids publishing multiple SPF TXT records on a single domain. Having more than one SPF record causes an automatic PermError and authentication failure. All authorized senders must be consolidated into a single valid SPF string."
            }
          },
          {
            "@type": "Question",
            "name": "How do I check whether my DKIM is aligned with DMARC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "DMARC alignment requires the domain in the visible From: header to match the d= domain in the DKIM cryptographic signature header. In relaxed mode (adkim=r), subdomains align with organizational domains; in strict mode (adkim=s), the domains must match exactly."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between DMARC p=quarantine and p=reject?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under p=quarantine, receivers divert failing messages into the recipient's Spam/Junk folder. Under p=reject, receivers reject failing messages at the SMTP connection layer before they reach the mailbox, providing true spoofing immunity."
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
