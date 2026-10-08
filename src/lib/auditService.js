/**
 * ChittorTech Technical Website Audit & Inspector Service
 * Performs fast non-intrusive client-side technical inspection:
 * - SSL (HTTPS vs HTTP "Not Secure")
 * - Mobile Viewport & Responsiveness
 * - CMS & Tech Stack (WordPress, Elementor, Wix, Shopify, Legacy PHP/Bootstrap, React)
 * - Server Reachability & Response Timing
 * - Actionable Pain Points & Tailored Sales Pitch Hooks
 */

export async function auditWebsiteTarget(url) {
  let target = (url || "").trim();
  if (!target) return null;
  if (!target.startsWith("http://") && !target.startsWith("https://")) {
    target = "https://" + target;
  }
  const isHttps = target.startsWith("https://");
  const startTime = Date.now();
  let html = "";
  let isReachable = false;
  let status = 0;

  // Multi-proxy fallback for CORS-safe in-browser fetching
  const proxies = [
    `https://api.allorigins.win/raw?url=${encodeURIComponent(target)}`,
    `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(target)}`,
  ];

  for (const proxyUrl of proxies) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 3500);
      const res = await fetch(proxyUrl, { signal: controller.signal });
      clearTimeout(timer);
      if (res.ok) {
        const text = await res.text();
        if (text && text.length > 80) {
          html = text;
          isReachable = true;
          status = res.status;
          break;
        }
      }
    } catch {
      // Continue to next proxy
    }
  }

  // Fast direct browser probe fallback if proxies timed out
  if (!isReachable) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 2500);
      const res = await fetch(target, { signal: controller.signal });
      clearTimeout(timer);
      if (res.ok) {
        html = await res.text();
        isReachable = true;
      }
    } catch {
      // Direct fetch might be blocked by CORS; try no-cors ping
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 2000);
        await fetch(target, { mode: "no-cors", signal: controller.signal });
        clearTimeout(timer);
        isReachable = true;
      } catch {
        isReachable = false;
      }
    }
  }

  const durationMs = Date.now() - startTime;
  const htmlLower = (html || "").toLowerCase();

  const hasViewport = htmlLower.includes('name="viewport"') || htmlLower.includes("name='viewport'");
  const isWordPress = htmlLower.includes("wp-content") || htmlLower.includes("wp-includes") || htmlLower.includes("wordpress");
  const isElementor = htmlLower.includes("elementor");
  const isWix = htmlLower.includes("wix.com") || htmlLower.includes("parastorage");
  const isShopify = htmlLower.includes("cdn.shopify.com") || htmlLower.includes("shopify");
  const isBootstrap = htmlLower.includes("bootstrap");
  const isPhp = htmlLower.includes(".php") || htmlLower.includes("phpsessid");
  const isJQuery = htmlLower.includes("jquery");
  const isReact = htmlLower.includes("react") || htmlLower.includes("_next");

  let cms = "Custom Coded";
  if (isWordPress) cms = isElementor ? "WordPress + Elementor" : "WordPress";
  else if (isWix) cms = "Wix";
  else if (isShopify) cms = "Shopify Store";
  else if (isReact) cms = "React / Next.js";
  else if (isPhp) cms = "Legacy PHP";
  else if (isBootstrap && isJQuery) cms = "Legacy Bootstrap & jQuery";

  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : "";

  // Pain points for sales pitch
  const painPoints = [];
  if (!isHttps) {
    painPoints.push('No SSL Certificate (Browser marks website as "Not Secure")');
  }
  if (!hasViewport && isReachable) {
    painPoints.push("Mobile Viewport Missing (Layout breaks / cut-off on smartphones)");
  }
  if (isWordPress) {
    painPoints.push(`Outdated WordPress CMS (${cms}) — High maintenance & vulnerability to plugin hacks`);
  }
  if (isBootstrap && isJQuery && !isReact) {
    painPoints.push("Legacy Monolithic Frontend — Heavy jQuery/Bootstrap causing slow speed & poor Google SEO");
  }
  if (!isReachable) {
    painPoints.push("Server Connectivity Issues — Website is extremely slow or intermittently timing out");
  }

  // Pitch hook line (Hindi)
  let pitchSnippet = "";
  if (!isHttps) {
    pitchSnippet = "Aapki current website par SSL missing hai aur browser me 'Not Secure' warning aati hai, jisse customers ka trust toot jata hai.";
  } else if (!hasViewport && isReachable) {
    pitchSnippet = "Aapki current website mobile phones par proper open nahi hoti aur layout cut jata hai, jisse phone users seedha exit kar jate hain.";
  } else if (isWordPress) {
    pitchSnippet = `Aapki website purane ${cms} par chal rahi hai jo phone par slow chalti hai aur plugin hack hone ka risk rehta hai.`;
  } else if (!isReachable) {
    pitchSnippet = "Aapki website ka server currently slow ya open hone me dikkat de raha hai, jisse customers order nahi de pate.";
  } else {
    pitchSnippet = "Aapki website live hai lekin modern corporate design, lead conversion CTA aur automated WhatsApp booking missing hai.";
  }

  // Health Score (0 - 100)
  let score = 100;
  if (!isHttps) score -= 30;
  if (!hasViewport) score -= 25;
  if (isWordPress) score -= 20;
  if (isBootstrap && isJQuery) score -= 15;
  if (!isReachable) score = 20;

  return {
    url: target,
    hasHttps: isHttps,
    hasViewport: isReachable ? hasViewport : false,
    cms,
    isReachable,
    title,
    durationMs,
    score: Math.max(score, 10),
    painPoints,
    pitchSnippet,
    auditedAt: new Date().toISOString(),
  };
}
