export const metadata = {
  title: "Website Developer & Custom Web Development Services India | ChittorTech",
  description: "Searching for the best website developer near you? ChittorTech delivers custom responsive web design, robust web development, and secure cloud web hosting in India. Get a free quote!",
  alternates: {
    canonical: "https://chittortech.in/web-development-services",
  },
  openGraph: {
    title: "Website Developer & Custom Web Development Services India | ChittorTech",
    description: "Searching for the best website developer near you? ChittorTech delivers custom responsive web design, robust web development, and secure cloud web hosting in India. Get a free quote!",
    url: "https://chittortech.in/web-development-services",
    siteName: "ChittorTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Website Developer & Web Development Services | ChittorTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Developer & Custom Web Development Services India | ChittorTech",
    description: "Searching for the best website developer near you? ChittorTech delivers custom responsive web design, robust web development, and secure cloud web hosting in India. Get a free quote!",
    images: ["/favicon.png"],
  },
};

export default function Layout({ children }) {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "ChittorTech Website Development & Next.js Architecture Overview",
    "description": "Watch our 1-minute quick video overview on how ChittorTech engineers high-performance, SEO-ranked, and lightning-fast Next.js websites.",
    "thumbnailUrl": [
      "https://chittortech.in/images/web-dev-video-poster.jpg"
    ],
    "uploadDate": "2026-09-07T00:00:00+05:30",
    "duration": "PT1M15S",
    "contentUrl": "https://github.com/user-attachments/assets/9d6d0723-cc44-4d1b-a611-b4efcf6fe354",
    "embedUrl": "https://chittortech.in/web-development-services",
    "publisher": {
      "@type": "Organization",
      "name": "ChittorTech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chittortech.in/favicon.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      {children}
    </>
  );
}
