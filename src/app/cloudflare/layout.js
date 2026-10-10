export const metadata = {
  title: "Cloudflare Free Hosting & Pages Masterclass: Unlimited Bandwidth & Edge Workers for Students (2026) | ChittorTech",
  description: "The definitive 2026 developer & student guide to Cloudflare Pages and Workers. Learn how to get 100% free hosting with unlimited bandwidth, custom domain SSL, edge functions, and zero cold starts.",
  keywords: [
    "Cloudflare free hosting",
    "Cloudflare Pages tutorial 2026",
    "how to host React on Cloudflare Pages for free",
    "Cloudflare unlimited bandwidth free tier",
    "Cloudflare custom domain SSL setup",
    "Cloudflare Workers edge API student guide",
    "Cloudflare DNS setup nameservers",
    "Cloudflare flexible vs full strict SSL",
    "free edge hosting for students",
    "Cloudflare vs Vercel vs Netlify",
    "ChittorTech Cloudflare guide"
  ],
  alternates: {
    canonical: "https://chittortech.in/cloudflare",
  },
  openGraph: {
    title: "Cloudflare Free Hosting & Pages Masterclass: Unlimited Bandwidth & Edge Workers (2026) | ChittorTech",
    description: "Step-by-step student & developer blueprint for hosting React, Next.js, and static apps on Cloudflare Pages for free with unlimited bandwidth and 0ms cold starts.",
    url: "https://chittortech.in/cloudflare",
    siteName: "ChittorTech",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Cloudflare Free Hosting & Pages Masterclass by ChittorTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloudflare Free Hosting & Pages Masterclass (2026) | ChittorTech",
    description: "Deploy frontends with unlimited bandwidth and 0ms cold starts on Cloudflare Pages & Workers for free. Official ChittorTech guide.",
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
        "name": "Cloudflare Pages & Workers",
        "operatingSystem": "Global Edge Network / Linux",
        "applicationCategory": "DeveloperApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "TechArticle",
        "headline": "Cloudflare Pages & Workers: The Zero-Cost Edge Hosting Masterclass for Students and Developers",
        "description": "Comprehensive tutorial on deploying web applications to Cloudflare Pages with zero cost, unlimited bandwidth, instant custom domain SSL, and V8 edge functions.",
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
        "mainEntityOfPage": "https://chittortech.in/cloudflare"
      },
      {
        "@type": "HowTo",
        "name": "How to Deploy a Free Website on Cloudflare Pages with Custom Domain & Unlimited Bandwidth",
        "totalTime": "PT4M",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Connect Git Repository or Upload Assets",
            "text": "Link your GitHub or GitLab repository to Cloudflare Pages, or drag-and-drop your pre-built dist folder."
          },
          {
            "@type": "HowToStep",
            "name": "Set Build Framework Preset",
            "text": "Select Vite, React, Astro, or Next.js export with build command 'npm run build' and output directory 'dist' or 'out'."
          },
          {
            "@type": "HowToStep",
            "name": "Configure SPA Rewrites with _redirects",
            "text": "Add a _redirects file containing '/* /index.html 200' inside your public folder to prevent 404 errors on page reload."
          },
          {
            "@type": "HowToStep",
            "name": "Attach Free Custom Domain",
            "text": "Add your custom domain in the Pages Custom Domains tab. Cloudflare automatically sets up CNAME and issues free Universal SSL."
          },
          {
            "@type": "HowToStep",
            "name": "Activate Cloudflare Proxy Shield",
            "text": "Enable Orange Cloud proxying for free CDN edge caching, DDoS protection, and HTTP/3 support."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Cloudflare Pages really 100% free with unlimited bandwidth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Cloudflare Pages offers unlimited free bandwidth and unlimited static requests on their Free Tier. Unlike Vercel (which caps free bandwidth at 100GB/mo) or AWS, Cloudflare does not charge for static bandwidth."
            }
          },
          {
            "@type": "Question",
            "name": "How do I fix 404 errors when refreshing routes on Cloudflare Pages (React / Vue SPA)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Create a file named _redirects inside your project's /public directory with the single line: '/* /index.html 200'. Cloudflare will route all frontend browser routes to your index.html entry point."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Cloudflare Pages and Cloudflare Workers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cloudflare Pages is tailored for frontend websites (HTML, React, Vite, Next.js static). Cloudflare Workers are lightweight, serverless V8 isolate functions that run backend JavaScript code at 300+ global edge locations with 0ms cold starts."
            }
          },
          {
            "@type": "Question",
            "name": "How do I avoid 'Too Many Redirects' errors when enabling Cloudflare SSL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In the Cloudflare dashboard under SSL/TLS, set the encryption mode to 'Full' or 'Full (Strict)' if your origin server has an SSL cert. Avoid using 'Flexible' if your server already redirects HTTP to HTTPS."
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
            "name": "Cloudflare Guide",
            "item": "https://chittortech.in/cloudflare"
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
