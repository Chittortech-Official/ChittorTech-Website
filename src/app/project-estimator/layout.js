export const metadata = {
  title: "AI Project Cost & Scope Estimator | ChittorTech",
  description: "Get an instant, AI-powered project scope, tech stack recommendations, timeline roadmap, and cost estimation for your custom website, mobile app, or CRM.",
  alternates: {
    canonical: "https://chittortech.in/project-estimator",
  },
  openGraph: {
    title: "AI Project Cost & Scope Estimator | ChittorTech",
    description: "Instant AI-powered budget, timeline, and tech architecture estimator for startups and businesses. Built by ChittorTech.",
    url: "https://chittortech.in/project-estimator",
    siteName: "ChittorTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "AI Project Estimator | ChittorTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Project Cost & Scope Estimator | ChittorTech",
    description: "Instant AI-powered budget, timeline, and tech architecture estimator for startups and businesses.",
    images: ["/favicon.png"],
  },
};

export default function Layout({ children }) {
  return children;
}
