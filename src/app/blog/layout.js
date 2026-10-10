export const metadata = {
  title: "Blog | ChittorTech",
  description: "Read ChittorTech",
  alternates: {
    canonical: "https://chittortech.in/blog",
  },
  openGraph: {
    title: "Blog | ChittorTech",
    description: "Read ChittorTech",
    url: "https://chittortech.in/blog",
    siteName: "ChittorTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Blog | ChittorTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | ChittorTech",
    description: "Read ChittorTech",
    images: ["/favicon.png"],
  },
};

export default function Layout({ children }) {
  return children;
}
