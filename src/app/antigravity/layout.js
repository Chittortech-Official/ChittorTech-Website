export const metadata = {
  title: "Google Antigravity IDE: Download Stable Build & Disable Auto-Updates Permanently | ChittorTech",
  description: "The definitive 2026 guide and verified repository for Google Antigravity IDE on Windows. Learn how to install the stable dark build, understand Antigravity IDE vs 2.0, and permanently stop background auto-updates.",
  keywords: [
    "Google Antigravity",
    "Antigravity IDE",
    "Antigravity download",
    "Antigravity IDE Windows 11",
    "Antigravity IDE Windows 10",
    "Google Antigravity IDE install",
    "Antigravity 2.0 vs Antigravity IDE",
    "disable Antigravity auto update",
    "stop Antigravity update",
    "inno_updater disabled",
    "Antigravity dark theme",
    "ChittorTech Antigravity"
  ],
  alternates: {
    canonical: "https://chittortech.in/antigravity",
  },
  openGraph: {
    title: "Google Antigravity IDE: Download Stable Build & Disable Auto-Updates Permanently",
    description: "The complete developer guide & verified package for Google Antigravity IDE on Windows. Stop forced auto-updates and keep your favorite dark UI forever.",
    url: "https://chittortech.in/antigravity",
    siteName: "ChittorTech",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Google Antigravity IDE Guide and Installer - ChittorTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Antigravity IDE: Download Stable Build & Disable Auto-Updates",
    description: "Official ChittorTech guide to install Google Antigravity IDE and permanently prevent background updater processes on Windows 10 & 11.",
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
  // Comprehensive Schema Graph for #1 Search Engine Ranking
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Google Antigravity IDE",
        "operatingSystem": "Windows 10, Windows 11 (64-bit)",
        "applicationCategory": "DeveloperApplication",
        "softwareVersion": "2.5.5 / 1.107.0",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "1280",
          "bestRating": "5"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "TechArticle",
        "headline": "How to Install Google Antigravity IDE and Permanently Disable Auto-Updates",
        "description": "Developer walkthrough for locking Google Antigravity IDE to the dark stable build on Windows and stopping background inno_updater triggers.",
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
        "dateModified": "2026-09-09T16:25:00+05:30",
        "mainEntityOfPage": "https://chittortech.in/antigravity"
      },
      {
        "@type": "HowTo",
        "name": "How to Lock Antigravity IDE Version and Stop Background Updates",
        "totalTime": "PT2M",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Download Verified Stable Installer",
            "text": "Obtain AntigravitySetup-stable.exe and Disable-Antigravity-Updates.bat from the verified ChittorTech repository."
          },
          {
            "@type": "HowToStep",
            "name": "Disconnect Internet / Airplane Mode",
            "text": "Disconnect all network adapters to stop the editor from performing an online handshake on first run."
          },
          {
            "@type": "HowToStep",
            "name": "Execute Offline Installer",
            "text": "Run the setup executable offline to install Antigravity IDE to your local user directory."
          },
          {
            "@type": "HowToStep",
            "name": "Run the 1-Click Update Blocker",
            "text": "Execute Disable-Antigravity-Updates.bat to rename inno_updater.exe and enforce update.mode: none."
          },
          {
            "@type": "HowToStep",
            "name": "Re-enable Network Connection",
            "text": "Turn Wi-Fi back on. The application is now permanently locked."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why does Antigravity automatically update even with update.mode: none?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Antigravity IDE runs a background binary called inno_updater.exe. Even if settings.json is set to none, updater daemons still query the servers and trigger updates on reboot. Renaming the updater binary creates an un-bypassable OS-level lock."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Antigravity IDE and Antigravity 2.0?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Antigravity IDE is the full, AI-first code editor based on VS Code with dark mode and sidebar pair programming. Antigravity 2.0 is a companion desktop app with a white/light canvas interface. Both coexist, but developers prefer the IDE for day-to-day coding."
            }
          },
          {
            "@type": "Question",
            "name": "Will this fix work on Windows 11 and Windows 10?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, it is 100% compatible with all 64-bit editions of Windows 10 and Windows 11, utilizing standard Windows user environment variables."
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
            "name": "Developer Resources",
            "item": "https://chittortech.in"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Google Antigravity IDE",
            "item": "https://chittortech.in/antigravity"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      {children}
    </>
  );
}
