export const metadata = {
  title: "Best Email Blacklist Removal & Domain Reputation Recovery Services | ChittorTech",
  description:
    "Best-rated email blacklist remediation for Spamhaus, Barracuda, Microsoft SNDS, and Google Postmaster. Forensic spam-trap diagnosis, compromised mailbox cleanup, and documented delisting.",
  keywords: [
    "best email blacklist removal service",
    "best email blacklist removal consultant",
    "best IP reputation recovery agency",
    "best domain reputation repair service",
    "hire email blacklist removal expert",
    "best email blacklist removal in USA",
    "best email blacklist removal in UK",
    "best email blacklist removal in India",
    "best email blacklist removal in UAE",
    "best email blacklist removal in Canada",
    "best email blacklist removal in Australia",
    "Spamhaus blacklist removal service",
    "Spamhaus SBL CSS DBL delisting expert",
    "Barracuda blacklist removal service",
    "Barracuda BRBL delisting consultant",
    "Microsoft SNDS IP blacklist fix",
    "Microsoft 365 blocked sending IP delisting",
    "Outlook 550 5.7.1 Service unavailable client host blocked",
    "Google Postmaster Bad reputation recovery",
    "Google Postmaster Low reputation fix",
    "fix emails blocked by Spamhaus",
    "SpamCop blacklist removal",
    "SORBS blacklist removal service",
    "Invaluement ivmURI ivmSIP delisting",
    "UCEPROTECT blacklist removal guidance",
    "SURBL URIBL domain delisting",
    "email blacklist checker and removal",
    "fix IP on email blacklist",
    "dedicated IP blacklist removal",
    "cold email domain blacklist recovery",
    "Smartlead blacklist fix",
    "Instantly domain reputation recovery",
    "transactional email blacklist remediation",
    "SendGrid IP blacklist removal",
    "AWS SES sending pause blacklist fix",
    "Mailgun IP reputation recovery",
    "compromised mailbox spam cleanup",
    "stop emails bouncing with blacklist error",
    "DNSBL RBL lookup and removal service",
    "PTR record and FCrDNS blacklist fix",
    "spam trap hit identification service",
    "email list hygiene and spam trap removal",
    "enterprise email blacklist remediation",
    "B2B domain blacklist removal firm",
    "corporate IP delisting consultant",
    "emergency email blacklist fix",
    "hire email deliverability engineer India",
    "email reputation audit service USA",
    "fix Gmail 550 spam rejection blacklist",
    "Yahoo Complaint Feedback Loop CFL setup",
    "automated spam bot compromised server fix",
    "post-delisting email warmup protocol",
    "RFC compliant email reputation healing",
    "anti-spam database removal service",
    "ChittorTech email blacklist removal services"
  ],
  alternates: {
    canonical: "https://chittortech.in/email-blacklist-removal",
  },
  openGraph: {
    title: "Best Email Blacklist Removal & Domain Reputation Recovery Services | ChittorTech",
    description:
      "Restore your inbox deliverability. Root-cause forensics, compromised account containment, and evidence-backed delisting for Spamhaus, Barracuda, Microsoft SNDS, and Google Postmaster.",
    url: "https://chittortech.in/email-blacklist-removal",
    siteName: "ChittorTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "ChittorTech Best Email Blacklist Removal & Domain Reputation Recovery Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Email Blacklist Removal & Domain Reputation Recovery Services | ChittorTech",
    description:
      "Forensic blacklist remediation for Spamhaus, Barracuda, Microsoft SNDS, and Google Postmaster. Fix the underlying cause before delisting.",
    images: ["/favicon.png"],
  },
};

export default function Layout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "ChittorTech Best Email Blacklist Removal & Reputation Recovery",
        "url": "https://chittortech.in/email-blacklist-removal",
        "logo": "https://chittortech.in/favicon.png",
        "image": "https://chittortech.in/favicon.png",
        "description":
          "Enterprise email blacklist remediation, forensic log analysis, compromised mailbox containment, and official delisting workflows for Spamhaus, Barracuda, Microsoft SNDS, and Google Postmaster.",
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
        "name": "Best Email Blacklist Removal & Reputation Recovery Services",
        "provider": {
          "@type": "Organization",
          "name": "ChittorTech"
        },
        "serviceType": "Email Security & Reputation Engineering",
        "offers": [
          {
            "@type": "Offer",
            "name": "Emergency Blacklist Delisting",
            "price": "99",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "name": "Complete Domain & IP Reputation Recovery",
            "price": "199",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "name": "Enterprise Fleet & SaaS IP Range Recovery",
            "price": "449",
            "priceCurrency": "USD"
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
