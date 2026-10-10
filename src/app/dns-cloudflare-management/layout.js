export const metadata = {
  title: "Best Enterprise DNS & Cloudflare Management Services | Zero-Downtime Migration & Anti-DDoS | ChittorTech",
  description:
    "Best-rated Cloudflare DNS setup, zero-downtime nameserver migrations, DNSSEC, WAF firewall rules, and email routing architecture. Protect and accelerate your domain.",
  keywords: [
    "best enterprise DNS management services",
    "best DNS management services",
    "best Cloudflare setup consultant",
    "best Cloudflare management agency",
    "top DNS migration company",
    "hire Cloudflare expert",
    "hire DNS security engineer",
    "best Cloudflare service in USA",
    "best Cloudflare service in UK",
    "best Cloudflare service in India",
    "best Cloudflare consultant in UAE",
    "best DNS management services in Canada",
    "best Cloudflare services in Australia",
    "zero downtime DNS migration service",
    "zero downtime nameserver migration",
    "Cloudflare DNS setup service",
    "DNSSEC implementation service",
    "Cloudflare WAF firewall setup",
    "Cloudflare anti DDoS configuration",
    "Cloudflare orange cloud email fix",
    "fix emails broken by Cloudflare proxy",
    "Cloudflare email routing setup",
    "Anycast DNS management firm",
    "enterprise DNS management consulting",
    "Cloudflare speed and cache optimization",
    "Cloudflare Page Rules and Cache Rules setup",
    "AWS Route 53 to Cloudflare migration",
    "GoDaddy to Cloudflare migration service",
    "Namecheap DNS migration consultant",
    "Google Cloud DNS management",
    "DNS propagation speed optimization",
    "TTL lowering pre-migration strategy",
    "dual-resolution DNS migration SOP",
    "Cloudflare SSL TLS mode configuration",
    "Cloudflare bot fight mode setup",
    "Cloudflare rate limiting rules",
    "custom CNAME isolation and flattening",
    "multi-provider email DNS architecture",
    "Google Workspace Cloudflare DNS setup",
    "Microsoft 365 Cloudflare DNS configuration",
    "AWS SES Cloudflare DNS verification",
    "Cloudflare DNSSEC setup registrar",
    "DNS cache poisoning prevention",
    "Cloudflare certified architecture consultant",
    "hire enterprise DNS administrator",
    "Cloudflare multi-zone fleet management",
    "Terraform Cloudflare DNS IaC automation",
    "Cloudflare load balancing setup",
    "B2B DNS infrastructure management",
    "cybersecurity DNS hardening services",
    "authoritative DNS audit and zone cleanup",
    "prevent website downtime during DNS transfer",
    "Cloudflare edge caching optimization",
    "high performance Anycast DNS India USA",
    "corporate DNS security services",
    "ChittorTech DNS and Cloudflare management"
  ],
  alternates: {
    canonical: "https://chittortech.in/dns-cloudflare-management",
  },
  openGraph: {
    title: "Best Enterprise DNS & Cloudflare Management Services | ChittorTech",
    description:
      "Accelerate your domain with sub-30ms global Anycast DNS, zero-downtime migrations, DNSSEC cryptographic protection, and custom Cloudflare WAF firewall rules.",
    url: "https://chittortech.in/dns-cloudflare-management",
    siteName: "ChittorTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "ChittorTech Best Enterprise DNS & Cloudflare Management Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Enterprise DNS & Cloudflare Management Services | ChittorTech",
    description:
      "Zero-downtime DNS migrations, DNSSEC hardening, WAF firewall rules, and email routing integrity across global enterprise networks.",
    images: ["/favicon.png"],
  },
};

export default function Layout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "ChittorTech Best Enterprise DNS & Cloudflare Management",
        "url": "https://chittortech.in/dns-cloudflare-management",
        "logo": "https://chittortech.in/favicon.png",
        "image": "https://chittortech.in/favicon.png",
        "description":
          "Enterprise Cloudflare architecture, zero-downtime nameserver migrations, DNSSEC security, WAF firewall rules, and email routing integrity for global businesses.",
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
        "name": "Best Enterprise DNS & Cloudflare Management Services",
        "provider": {
          "@type": "Organization",
          "name": "ChittorTech"
        },
        "serviceType": "Cloud Infrastructure & DNS Engineering",
        "offers": [
          {
            "@type": "Offer",
            "name": "Essential DNS Audit & Cloudflare Setup",
            "price": "79",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "name": "Complete Cloudflare Security & Speed Suite",
            "price": "149",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "name": "Enterprise Multi-Domain / Agency Fleet",
            "price": "349",
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
