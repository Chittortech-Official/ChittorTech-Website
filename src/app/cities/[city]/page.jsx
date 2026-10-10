import React from "react";
import citiesData from "@/data/cities.json";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(citiesData).map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const cityData = citiesData[city.toLowerCase()];

  if (!cityData) {
    return {
      title: "Best AI & IT Solutions in India | ChittorTech",
      description: "Cloud-based AI & IT Solutions, Retail AI Automation, and billing software across India by ChittorTech.",
      alternates: {
        canonical: `https://chittortech.in/cities/${city}`,
      },
    };
  }

  const rawTitle = cityData.pageTitle || `Best AI & IT Solutions in ${cityData.cityName} | ChittorTech`;
  // Ensure title is concise and under 60 chars for SEO
  const title = rawTitle.length > 60 
    ? `Best AI & IT Solutions in ${cityData.cityName} | ChittorTech` 
    : rawTitle;

  const description = (cityData.pageDescription && cityData.pageDescription.trim().length > 30)
    ? cityData.pageDescription.trim()
    : `Leading AI & IT Solutions for manufacturing and retail in ${cityData.cityName}. Automate billing, inventory, and GST compliance with ChittorTech.`;

  return {
    title,
    description,
    keywords: cityData.pageKeywords,
    alternates: {
      canonical: `https://chittortech.in/cities/${city.toLowerCase()}`,
    },
    openGraph: {
      title,
      description,
      url: `https://chittortech.in/cities/${city.toLowerCase()}`,
      siteName: "ChittorTech",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/favicon.png",
          width: 512,
          height: 512,
          alt: `ChittorTech ${cityData.cityName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/favicon.png"],
    },
  };
}

export default async function CityPage({ params }) {
  const { city } = await params;
  const cityData = citiesData[city.toLowerCase()];

  if (!cityData) {
    notFound();
  }

  return (
    <div className="city-page-content">
      {/* Renders the extracted legacy template dynamically */}
      <div dangerouslySetInnerHTML={{ __html: cityData.html }} />
    </div>
  );
}
