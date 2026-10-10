export const metadata = {
  title: "Groq LPU Masterclass: Free Fast AI API, Llama 3 & Mixtral for Students (2026) | ChittorTech",
  description: "The definitive 2026 developer & student guide to Groq Cloud. Learn how to get free API keys, achieve 500+ tokens/sec on Llama 3, build ultra-fast AI chatbots, and bypass OpenAI latency.",
  keywords: [
    "Groq free API key",
    "Groq LPU tutorial 2026",
    "how to use Groq API for free",
    "Groq Llama 3 fast inference",
    "Groq vs OpenAI speed",
    "Groq streaming API student guide",
    "Groq Next.js route handler",
    "Groq Python SDK tutorial",
    "free AI API for students",
    "Groq rate limits 2026",
    "ChittorTech Groq guide"
  ],
  alternates: {
    canonical: "https://chittortech.in/groq",
  },
  openGraph: {
    title: "Groq LPU Masterclass: Free Fast AI API & Llama 3 (2026) | ChittorTech",
    description: "Build ultra-fast AI apps with Groq LPU inference. 500+ tokens/second, free API tier, and instant Next.js/Python code examples.",
    url: "https://chittortech.in/groq",
    siteName: "ChittorTech",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Groq LPU Masterclass by ChittorTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Groq LPU Masterclass: Free Fast AI API (2026) | ChittorTech",
    description: "Get 500+ tokens/sec on Llama 3 & Mixtral for free. Complete student & developer blueprint by ChittorTech.",
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
        "name": "Groq Cloud LPU Inference Engine",
        "operatingSystem": "Cloud API / Global LPU Cluster",
        "applicationCategory": "DeveloperApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "TechArticle",
        "headline": "Groq LPU & Fast AI Inference Masterclass for Students and Developers (2026 Guide)",
        "description": "Comprehensive tutorial on building real-time conversational AI applications with Groq LPUs, streaming 500+ tokens per second on Llama 3.3, and navigating free tier rate limits.",
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
        "dateModified": "2026-09-09T16:55:00+05:30",
        "mainEntityOfPage": "https://chittortech.in/groq"
      },
      {
        "@type": "HowTo",
        "name": "How to Get a Free Groq API Key and Stream 500+ Tokens/Sec in Next.js & Python",
        "totalTime": "PT3M",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Sign In to GroqCloud Console",
            "text": "Navigate to console.groq.com and sign up with GitHub or Google without entering any credit card."
          },
          {
            "@type": "HowToStep",
            "name": "Create Free API Key",
            "text": "Go to API Keys in the left navigation and generate a new secret key (starts with 'gsk_')."
          },
          {
            "@type": "HowToStep",
            "name": "Install Official SDK",
            "text": "Run 'npm install groq-sdk' for JavaScript/TypeScript or 'pip install groq' for Python."
          },
          {
            "@type": "HowToStep",
            "name": "Call Llama 3.3 or Mixtral Model",
            "text": "Initialize the Groq client and query 'llama-3.3-70b-versatile' or 'llama-3.1-8b-instant'."
          },
          {
            "@type": "HowToStep",
            "name": "Enable Streaming Responses",
            "text": "Set stream: true to receive tokens instantly at 500+ tokens per second with <90ms time-to-first-token."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Groq Cloud API really 100% free for students and developers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Groq Cloud provides a generous Free Tier that gives all developers access to Llama 3.3 70B, Llama 3.1 8B, and Mixtral 8x7B without requiring a credit card. You get up to 30 requests per minute (RPM) and generous daily token limits."
            }
          },
          {
            "@type": "Question",
            "name": "Why is Groq so much faster than OpenAI or standard GPU clouds?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Groq uses proprietary LPUs (Language Processing Units) rather than traditional GPUs. LPUs are custom silicon designed specifically for sequential tensor computation, eliminating external memory bottlenecks and achieving over 500 tokens per second."
            }
          },
          {
            "@type": "Question",
            "name": "How do I avoid '429 Rate Limit Exceeded' on Groq Free Tier?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Implement exponential backoff retry logic, switch between 'llama-3.3-70b-versatile' and 'llama-3.1-8b-instant' (which has a much higher RPM/TPM limit), or cache repeated prompt responses with Cloudflare Workers or Redis."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use Groq API inside Next.js App Router route handlers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! You can use the official 'groq-sdk' or the Vercel AI SDK inside Next.js edge route handlers (app/api/chat/route.js) to stream responses straight to the browser with zero cold start."
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
            "name": "Groq Guide",
            "item": "https://chittortech.in/groq"
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
