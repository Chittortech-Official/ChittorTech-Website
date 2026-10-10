export const metadata = {
  title: "Vercel Free Hosting & Next.js Masterclass: Deployments, APIs & Domains for Students (2026) | ChittorTech",
  description: "The complete 2026 developer & student guide to Vercel and Next.js. Master free tier deployments, serverless route handlers, custom domain DNS, CLI workflows, and zero-downtime previews.",
  keywords: [
    "Vercel free hosting",
    "how to deploy Next.js on Vercel for free",
    "Vercel deployment tutorial 2026",
    "Vercel free tier limits",
    "Vercel custom domain GoDaddy Hostinger",
    "Vercel serverless functions guide",
    "Vercel vs Render vs Netlify",
    "Vercel environment variables tutorial",
    "Vercel CLI deploy commands",
    "free frontend hosting for students",
    "ChittorTech Vercel guide"
  ],
  alternates: {
    canonical: "https://chittortech.in/vercel",
  },
  openGraph: {
    title: "Vercel Free Hosting & Next.js Masterclass: Deployments & APIs (2026) | ChittorTech",
    description: "Step-by-step developer walkthrough to deploy Next.js and React apps on Vercel for free. Zero-config CI/CD, custom domains, and serverless functions.",
    url: "https://chittortech.in/vercel",
    siteName: "ChittorTech",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Vercel Free Hosting & Next.js Masterclass by ChittorTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vercel Free Hosting & Next.js Masterclass (2026) | ChittorTech",
    description: "Deploy Next.js & React on Vercel for free with custom domains and serverless APIs. Comprehensive student & developer blueprint by ChittorTech.",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Layout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Vercel Frontend Cloud Platform",
        "operatingSystem": "Cloud / Serverless Linux",
        "applicationCategory": "DeveloperApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "TechArticle",
        "headline": "Vercel & Next.js Masterclass: Zero-Cost Deployments for Students and Developers",
        "description": "Comprehensive tutorial on deploying Next.js and React apps on Vercel with zero configuration, custom domain DNS mapping, edge serverless APIs, and automatic preview branches.",
        "author": {
          "@type": "Organization",
          "name": "ChittorTech",
          "url": "https://chittortech.in"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ChittorTech",
          "logo": {
            "@type": "ImageObject",
            "url": "https://chittortech.in/favicon.png"
          }
        },
        "datePublished": "2026-09-09T00:00:00+05:30",
        "dateModified": "2026-09-09T16:50:00+05:30",
        "mainEntityOfPage": "https://chittortech.in/vercel"
      },
      {
        "@type": "HowTo",
        "name": "How to Deploy a Free Next.js Project on Vercel with Custom Domain & Serverless APIs",
        "totalTime": "PT3M",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Push Repository to GitHub",
            "text": "Commit your Next.js or React application to a public or private GitHub repository."
          },
          {
            "@type": "HowToStep",
            "name": "Import Project into Vercel Dashboard",
            "text": "Sign in to Vercel via GitHub, click 'Add New Project', and import your repo. Vercel automatically detects Next.js build settings."
          },
          {
            "@type": "HowToStep",
            "name": "Add Environment Variables",
            "text": "Under 'Environment Variables', paste secrets from your .env.local (such as DATABASE_URL or API keys)."
          },
          {
            "@type": "HowToStep",
            "name": "Attach Free Custom Domain",
            "text": "In Settings -> Domains, enter your domain and point an A record to 76.76.21.21 or a CNAME to cname.vercel-dns.com."
          },
          {
            "@type": "HowToStep",
            "name": "Deploy and Enjoy Automated SSL",
            "text": "Click Deploy. Vercel provisions global edge distribution and issues an automatic Let's Encrypt SSL certificate."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Vercel really 100% free for student and personal projects?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Vercel's Hobby plan is completely free forever for non-commercial and student projects. It includes 100GB bandwidth per month, unlimited preview deployments, serverless functions, and free automated SSL certificates."
            }
          },
          {
            "@type": "Question",
            "name": "How do I connect a custom domain to Vercel from GoDaddy, Namecheap, or Hostinger?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In your Vercel project dashboard, go to Settings -> Domains. Add your domain name. In your DNS provider (e.g., GoDaddy), create an 'A' record for '@' pointing to 76.76.21.21, and a 'CNAME' record for 'www' pointing to cname.vercel-dns.com."
            }
          },
          {
            "@type": "Question",
            "name": "Should I use Vercel or Render for my full-stack app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use Vercel for frontend frameworks (Next.js, React, Svelte) and serverless API routes. Use Render when you have continuous backend processes like Express.js, WebSockets (Socket.IO), or persistent databases like PostgreSQL."
            }
          },
          {
            "@type": "Question",
            "name": "How do I fix 'Command npm run build exited with code 1' on Vercel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Next.js enforces strict ESLint and TypeScript checks during production builds. Run 'npm run build' locally to identify syntax errors, or temporarily configure ignoreDuringBuilds in your next.config.mjs to pass deployment."
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
            "name": "Vercel Guide",
            "item": "https://chittortech.in/vercel"
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
