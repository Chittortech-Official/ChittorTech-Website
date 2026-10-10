export const metadata = {
  title: "Best SEO Company & Growth Services | ChittorTech",
  description: "Grow your business online with the best seo services in India. Custom responsive strategies, proven ROI, and expert execution by ChittorTech.",
  alternates: {
    canonical: "https://chittortech.in/search-engine-optimization",
  },
  openGraph: {
    title: "Best SEO Company & Growth Services | ChittorTech",
    description: "Grow your business online with the best seo services in India. Custom responsive strategies, proven ROI, and expert execution by ChittorTech.",
    url: "https://chittortech.in/search-engine-optimization",
    siteName: "ChittorTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Best SEO Company & Growth Services | ChittorTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best SEO Company & Growth Services | ChittorTech",
    description: "Grow your business online with the best seo services in India. Custom responsive strategies, proven ROI, and expert execution by ChittorTech.",
    images: ["/favicon.png"],
  },
};

export default function Layout({ children }) {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "ChittorTech SEO Growth Services & Google #1 Ranking Overview",
    "description": "Watch our 1-minute quick video overview on how ChittorTech ranks Indian business websites on Google Page #1 through Technical SEO and Local SEO.",
    "thumbnailUrl": [
      "https://chittortech.in/images/seo-growth-video-poster.jpg"
    ],
    "uploadDate": "2026-09-07T00:00:00+05:30",
    "duration": "PT1M15S",
    "contentUrl": "https://github.com/user-attachments/assets/5eabb4f4-efe2-4827-bf91-52fdfecbb78c",
    "embedUrl": "https://chittortech.in/search-engine-optimization",
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
