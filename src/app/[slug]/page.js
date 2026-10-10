import React from "react";
import fs from "fs";
import path from "path";
import DynamicBlogClient from "./DynamicBlogClient";
import cityServices from "@/data/cityServices.json";
import blogPosts from "@/data/blogPosts.json";
import { notFound } from "next/navigation";

export const dynamicParams = false;

const blockedRetailSlugs = new Set([
  'pos', 'supermarket', 'hypermarket', 'departmental-store', 'departmental-hypermarket-store',
  'grocery-store', 'kirana-store', 'garments', 'footwear-store', 'boutique-store', 'bridal-store',
  'textile', 'readymade-garment', 'pharma', 'cosmetic-store', 'imitation-jewellery', 'hardware-store',
  'hardware-shopping-store', 'home-decor-furniture', 'pet-shop', 'book-store', 'gift-shop',
  'gift-toy-sports-shop', 'toy-store', 'sports-shop', 'fruits-vegetable-shop', 'liquor-store',
  'convenience-store', 'minimart', 'retaile-store', 'shopping-mall', 'stationery-store', 'consumer-goods'
]);

const isBlockedSlug = (s) => {
  if (!s) return true;
  if (blockedRetailSlugs.has(s)) return true;
  if (s.includes('pos-billing') || s.includes('supermarket-grocery') || s.includes('garment-textile') || s.includes('jewellery-store') || s.includes('omnichannel')) return true;
  return false;
};

// Helper to convert slug to clean title
const getCleanTitle = (s) => {
  if (!s) return "ChittorTech Enterprise AI & IT Solutions";
  let clean = s.replace(/-/g, " ");
  clean = clean.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
  clean = clean.replace(/Erp/g, "ERP");
  clean = clean.replace(/Pos/g, "POS");
  clean = clean.replace(/Gst/g, "GST");
  clean = clean.replace(/Bom/g, "BOM");
  clean = clean.replace(/Ai/g, "AI");
  clean = clean.replace(/Smes/g, "SMEs");
  clean = clean.replace(/By Chittortech/g, "by ChittorTech");
  return clean;
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (isBlockedSlug(slug)) {
    notFound();
  }
  const service = cityServices[slug];

  if (service) {
    return {
      title: service.metaTitle,
      description: service.metaDescription,
      keywords: service.metaKeywords,
      alternates: {
        canonical: `https://chittortech.in/${slug}`,
      },
      openGraph: {
        title: service.metaTitle,
        description: service.metaDescription,
        url: `https://chittortech.in/${slug}`,
        siteName: "ChittorTech",
        locale: "en_IN",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: service.metaTitle,
        description: service.metaDescription,
      },
    };
  }

  // Check if this is a defined blog post
  const blogPost = blogPosts.find((p) => p.link && p.link.replace(/^\//, "") === slug);
  if (blogPost) {
    return {
      title: `${blogPost.title} | ChittorTech`,
      description: blogPost.desc,
      alternates: {
        canonical: `https://chittortech.in/${slug}`,
      },
      openGraph: {
        title: `${blogPost.title} | ChittorTech`,
        description: blogPost.desc,
        url: `https://chittortech.in/${slug}`,
        siteName: "ChittorTech",
        locale: "en_IN",
        images: blogPost.image ? [{ url: blogPost.image }] : undefined,
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: `${blogPost.title} | ChittorTech`,
        description: blogPost.desc,
      },
    };
  }

  const cleanTitle = getCleanTitle(slug);
  return {
    title: `${cleanTitle} | ChittorTech`,
    description: `Discover comprehensive solutions, features, and expert implementation for ${cleanTitle} by ChittorTech.`,
    alternates: {
      canonical: `https://chittortech.in/${slug}`,
    },
    openGraph: {
      title: `${cleanTitle} | ChittorTech`,
      description: `Discover comprehensive solutions, features, and expert implementation for ${cleanTitle} by ChittorTech.`,
      url: `https://chittortech.in/${slug}`,
      siteName: "ChittorTech",
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  const sitemapPath = path.join(process.cwd(), "public/sitemap.xml");
  const validUrlsPath = path.join(process.cwd(), "valid_urls.txt");
  const pathsMap = new Map();

  // 1. Add all dedicated City Services (588+ URLs)
  Object.keys(cityServices).forEach((s) => {
    pathsMap.set(s, { slug: s });
  });

  // 2. Add all Blog Posts (31 URLs)
  blogPosts.forEach((post) => {
    if (post.link) {
      const s = post.link.replace(/^\//, "");
      if (s) pathsMap.set(s, { slug: s });
    }
  });

  try {
    const content = fs.readFileSync(sitemapPath, "utf8");
    const lines = content.split("\n");

    // Static routes to skip as they are handled by static pages
    const skipRoutes = new Set([
      "",
      "index",
      "about-us",
      "search-engine-optimization",
      "digital-marketing-services",
      "social-media-optimization",
      "on-page-seo-services",
      "off-page-seo-services",
      "technical-seo-services",
      "modern-responsive-website-design",
      "e-commerce-website-development",
      "custom-crm-solutions",
      "web-development-services",
      "android-application",
      "pos",
      "erp",
      "accounting",
      "inventory",
      "omnichannel",
      "crm",
      "smart-retail",
      "lead-management",
      "payroll",
      "education",
      "invoicing",
      "logistics",
      "bridal-store",
      "boutique-store",
      "readymade-garment",
      "footwear-store",
      "book-store",
      "stationery-store",
      "cosmetic-store",
      "home-decor-furniture",
      "imitation-jewellery",
      "india-temple",
      "convenience-store",
      "departmental-hypermarket-store",
      "fruits-vegetable-shop",
      "grocery-store",
      "kirana-store",
      "supermarket",
      "gift-toy-sports-shop",
      "hardware-shopping-store",
      "retaile-store",
      "ai-manufacturing",
      "textile",
      "pharma",
      "consumer-goods",
      "garments",
      "electronics-smartphones",
      "industrial-products",
      "trading-overview",
      "After-Sale-Service",
      "schools-educational-institutions",
      "employee-background-verification",
      "hospitals",
      "blog",
      "contact-us"
    ]);

    for (let line of lines) {
      line = line.trim();
      if (!line) continue;

      const locMatch = line.match(/<loc>(.*?)<\/loc>/i);
      let url = "";
      if (locMatch) {
        url = locMatch[1].trim();
      } else if (line.startsWith("http://") || line.startsWith("https://")) {
        url = line;
      } else {
        continue; // Skip xml tags like <urlset>, <changefreq>, <priority>, etc.
      }

      // Extract the slug after the domain
      const slugPath = url.replace("https://chittortech.in/", "").replace(/^\//, "");
      
      // Skip empty, blocked retail/pos, main routes, inquiry forms, and cities sub-routes
      if (!slugPath || isBlockedSlug(slugPath) || skipRoutes.has(slugPath) || slugPath.startsWith("cities/") || slugPath.startsWith("pos_bill/") || slugPath.includes("<") || slugPath.includes(">")) {
        continue;
      }

      pathsMap.set(slugPath, { slug: slugPath });
    }

    return Array.from(pathsMap.values());
  } catch (err) {
    console.error("Failed to read sitemap.xml for generateStaticParams:", err);
    return Array.from(pathsMap.values());
  }
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (isBlockedSlug(slug)) {
    notFound();
  }
  const cleanTitle = getCleanTitle(slug);

  return <DynamicBlogClient slug={slug} cleanTitle={cleanTitle} />;
}
