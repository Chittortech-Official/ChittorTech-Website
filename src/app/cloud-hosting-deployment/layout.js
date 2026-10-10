export const metadata = {
  title: "Best Cloud Hosting & Deployment Services | AWS, Azure, GCP & Vercel | ChittorTech",
  description:
    "Professional cloud hosting and production deployment services for AWS, Azure, Google Cloud, Vercel, and Docker. Expert CI/CD automation, DNS, SSL, security hardening, and cloud migration by ChittorTech.",
  keywords: [
    "best cloud hosting and deployment services",
    "best cloud deployment services",
    "best cloud hosting services",
    "best AWS deployment services",
    "best Azure deployment services",
    "best Google Cloud deployment services",
    "best Vercel deployment services",
    "best Next.js deployment services",
    "best Docker deployment services",
    "best CI/CD deployment services",
    "best production deployment services",
    "best cloud migration services",
    "best DevOps deployment services",
    "cloud infrastructure setup consultant",
    "cloud server deployment expert",
    "secure cloud deployment agency",
    "hire DevOps engineer USA",
    "hire cloud deployment engineer UK",
    "cloud hosting services in UAE",
    "cloud hosting services in Canada",
    "cloud deployment services Australia",
    "cloud server setup services India",
    "AWS EC2 and ECS deployment expert",
    "AWS RDS and CloudFront configuration",
    "Google Cloud Run production deployment",
    "Google Cloud SQL deployment consultant",
    "Azure Container Apps deployment service",
    "Azure App Service setup agency",
    "Vercel Next.js custom domain DNS setup",
    "Docker multi-stage production deployment",
    "GitHub Actions CI/CD pipeline automation",
    "automated deployment pipeline setup",
    "Node.js Express API production hosting",
    "Python FastAPI cloud server deployment",
    "PostgreSQL connection pooling PgBouncer",
    "MongoDB Atlas cloud deployment setup",
    "Nginx reverse proxy and SSL configuration",
    "Cloudflare CDN and WAF deployment",
    "zero downtime cloud migration service",
    "VPS to AWS migration consultant",
    "fix 502 bad gateway production error",
    "fix 503 service unavailable cloud deployment",
    "fix container crash loop backoff",
    "production deployment checklist audit",
    "environment variable secret management",
    "cloud security hardening and firewall",
    "SSH key and port hardening Linux server",
    "cloud monitoring and logging setup",
    "uptime health check endpoint monitoring",
    "database backup and disaster recovery setup",
    "enterprise cloud infrastructure deployment",
    "SaaS MVP production cloud deployment",
    "startup cloud architecture consultant",
    "b2b cloud infrastructure engineering",
    "high availability cloud deployment firm",
    "ChittorTech cloud hosting deployment services"
  ],
  alternates: {
    canonical: "https://chittortech.in/cloud-hosting-deployment",
  },
  openGraph: {
    title: "Best Cloud Hosting & Deployment Services | AWS, Azure, GCP & Vercel | ChittorTech",
    description:
      "Deploy faster, scale reliably, and operate with confidence. End-to-end cloud infrastructure, CI/CD automation, Docker containerization, and production hardening.",
    url: "https://chittortech.in/cloud-hosting-deployment",
    siteName: "ChittorTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "ChittorTech Best Cloud Hosting & Deployment Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Cloud Hosting & Deployment Services | AWS, Azure, GCP & Vercel | ChittorTech",
    description:
      "Enterprise cloud hosting and deployment services for AWS, Azure, Google Cloud, Vercel, and Docker. CI/CD pipelines, DNS, SSL, and security hardening.",
    images: ["/favicon.png"],
  },
};

export default function Layout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "ChittorTech Best Cloud Hosting & Deployment Services",
        "url": "https://chittortech.in/cloud-hosting-deployment",
        "logo": "https://chittortech.in/favicon.png",
        "image": "https://chittortech.in/favicon.png",
        "description":
          "Enterprise cloud hosting, production deployment, infrastructure configuration, CI/CD automation, Docker containerization, DNS, SSL, and cloud migration for AWS, Azure, GCP, and Vercel.",
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
        "name": "Best Cloud Hosting & Deployment Services",
        "provider": {
          "@type": "Organization",
          "name": "ChittorTech"
        },
        "serviceType": "Cloud Infrastructure & DevOps Engineering",
        "offers": [
          {
            "@type": "Offer",
            "name": "Starter Cloud Deployment",
            "price": "99",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "name": "Professional Cloud & DevOps Deployment",
            "price": "199",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "name": "Enterprise Cloud Infrastructure & Migration",
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
