export const metadata = {
  title: "Best Dharamshala Management System | ChittorTech",
  description: "Manage check-ins, advance bookings, donation receipts, and inventory with the best Dharamshala billing software in India.",
  alternates: {
    canonical: "https://chittortech.in/dharamshala-billing-system",
  },
  openGraph: {
    title: "Best Dharamshala Management System | ChittorTech",
    description: "Manage check-ins, advance bookings, donation receipts, and inventory with the best Dharamshala billing software in India.",
    url: "https://chittortech.in/dharamshala-billing-system",
    siteName: "ChittorTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Best Dharamshala Management System | ChittorTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dharamshala Management System | ChittorTech",
    description: "Manage check-ins, advance bookings, donation receipts, and inventory with the best Dharamshala billing software in India.",
    images: ["/favicon.png"],
  },
};

export default function Layout({ children }) {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Dharamshala Management System & Yatri Room Booking Software Overview",
    "description": "Watch our 1-minute quick video overview on how ChittorTech Dharamshala Software simplifies pilgrim check-ins, advance bookings, donation receipts, and trust accounting.",
    "thumbnailUrl": [
      "https://chittortech.in/images/dharamshala-video-poster.jpg"
    ],
    "uploadDate": "2026-09-07T00:00:00+05:30",
    "duration": "PT1M15S",
    "contentUrl": "https://github.com/user-attachments/assets/4ba125d1-ce14-49d0-98f5-2bb0cef1ff53",
    "embedUrl": "https://chittortech.in/dharamshala-billing-system",
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
