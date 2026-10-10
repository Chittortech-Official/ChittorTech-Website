export const metadata = {
  title: "Render Free Hosting & Node.js Deployment Guide (2026) | ChittorTech",
  description: "The complete 2026 developer & student guide to hosting Node.js, Python, Docker & Express web services on Render for free. Includes sleep prevention, free PostgreSQL, and custom domain SSL.",
  keywords: [
    "Render free hosting",
    "how to host nodejs on render for free",
    "render free tier web service",
    "render deployment guide 2026",
    "heroku free alternative render",
    "render prevent spin down",
    "render cold start bypass",
    "render student free hosting",
    "render custom domain setup",
    "render vs vercel vs heroku",
    "free backend hosting for students",
    "ChittorTech render guide"
  ],
  alternates: {
    canonical: "https://chittortech.in/render",
  },
  openGraph: {
    title: "Render Free Hosting & Node.js Deployment Guide (2026) | ChittorTech",
    description: "Step-by-step developer tutorial to deploy full-stack apps on Render for free with custom domains and SSL. Overcome cold starts and sleep timeouts.",
    url: "https://chittortech.in/render",
    siteName: "ChittorTech",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Render Free Hosting Guide by ChittorTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Render Free Hosting & Node.js Deployment Guide (2026) | ChittorTech",
    description: "Host Node.js, Python and Web Services on Render for free. Complete student & developer blueprint by ChittorTech.",
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
        "name": "Render Cloud Application Platform",
        "operatingSystem": "Cloud / Linux",
        "applicationCategory": "DeveloperApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "TechArticle",
        "headline": "How to Host Node.js and Full-Stack Apps on Render for Free (2026 Guide)",
        "description": "Step-by-step developer walkthrough for configuring free web services, custom domains, and zero-downtime pinging on Render.",
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
        "mainEntityOfPage": "https://chittortech.in/render"
      },
      {
        "@type": "HowTo",
        "name": "How to Deploy a Free Web Service on Render",
        "totalTime": "PT5M",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Connect GitHub Repository",
            "text": "Push code to GitHub and link the repo inside Render Dashboard."
          },
          {
            "@type": "HowToStep",
            "name": "Configure Build & Start Commands",
            "text": "Set Build Command to 'npm install' and Start Command to 'npm start'."
          },
          {
            "@type": "HowToStep",
            "name": "Select Free Instance Tier",
            "text": "Choose the 750 free hours tier with 512MB RAM."
          },
          {
            "@type": "HowToStep",
            "name": "Set Port & Environment Variables",
            "text": "Specify PORT 10000 or use process.env.PORT in your server."
          },
          {
            "@type": "HowToStep",
            "name": "Deploy & Connect Custom Domain",
            "text": "Click Deploy and add CNAME records for free SSL."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Render really 100% free for Node.js and Python projects?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Render provides 750 free instance hours every month for Web Services on their Free Tier. This is sufficient to run one continuous service 24/7 without entering any credit card."
            }
          },
          {
            "@type": "Question",
            "name": "How do I prevent my Render server from sleeping (cold starts)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Render spins down free services after 15 minutes of inactivity. You can prevent sleep by setting up a free cron monitor (such as cron-job.org, UptimeRobot, or GitHub Actions) to send an HTTP GET request to your /health endpoint every 14 minutes."
            }
          },
          {
            "@type": "Question",
            "name": "What port should my Node.js app listen on Render?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Render injects a PORT environment variable into your runtime, usually 10000. Configure your server to listen on process.env.PORT || 10000 and bind to 0.0.0.0."
            }
          },
          {
            "@type": "Question",
            "name": "Can I connect a custom domain to Render for free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Render provides full custom domain support with automatic Let's Encrypt SSL certificates for free. Add a CNAME pointing to your onrender.com address or an A record to Render's IP."
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
            "name": "Render Guide",
            "item": "https://chittortech.in/render"
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
