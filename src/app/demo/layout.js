export const metadata = {
  title: "Book a Free Software Demo | ChittorTech",
  description: "Schedule a live, customized demonstration of ChittorTech ERP, POS billing software, and custom AI solutions tailored for your business.",
  alternates: {
    canonical: "https://chittortech.in/demo",
  },
  openGraph: {
    title: "Book a Free Software Demo | ChittorTech",
    description: "Schedule a live, customized demonstration of ChittorTech ERP, POS billing software, and custom AI solutions tailored for your business.",
    url: "https://chittortech.in/demo",
    siteName: "ChittorTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Book a Free Software Demo | ChittorTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Software Demo | ChittorTech",
    description: "Schedule a live, customized demonstration of ChittorTech ERP, POS billing software, and custom AI solutions tailored for your business.",
    images: ["/favicon.png"],
  },
};

export default function Layout({ children }) {
  return children;
}
