export const metadata = {
  title: "Google Play Store App Publishing & Testing Services | ChittorTech",
  description: "Struggling with the 12-tester rule, organization verification, or account suspensions? Let ChittorTech publish and manage your Android applications securely.",
  alternates: {
    canonical: "https://chittortech.in/google-play-publishing",
  },
  openGraph: {
    title: "Google Play Store App Publishing & Testing Services | ChittorTech",
    description: "Struggling with the 12-tester rule, organization verification, or account suspensions? Let ChittorTech publish and manage your Android applications securely.",
    url: "https://chittortech.in/google-play-publishing",
    siteName: "ChittorTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Google Play Store App Publishing Services | ChittorTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Play Store App Publishing & Testing Services | ChittorTech",
    description: "Struggling with the 12-tester rule, organization verification, or account suspensions? Let ChittorTech publish and manage your Android applications securely.",
    images: ["/favicon.png"],
  },
};

export default function Layout({ children }) {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Google Play Store Publishing & Policy Compliance by ChittorTech",
    "description": "Watch our 1-minute quick video overview on how ChittorTech publishes and manages Android apps on Google Play Console safely without policy bans.",
    "thumbnailUrl": [
      "https://chittortech.in/images/google-play-video-poster.jpg"
    ],
    "uploadDate": "2026-09-07T00:00:00+05:30",
    "duration": "PT1M15S",
    "contentUrl": "https://github.com/user-attachments/assets/bcd3514f-b2fd-40aa-8b74-fb5e994dde3f",
    "embedUrl": "https://chittortech.in/google-play-publishing",
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
