const fs = require('fs');
const path = require('path');

const appDir = path.join(process.cwd(), 'src/app');
const getDirectories = srcPath => fs.readdirSync(srcPath, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

// Exclude internal routing helpers and non-page folders
// Exclude internal routing helpers, admin, and non-indexable folders
const excludeFolders = new Set([
  'api', 'admin', 'cities', 'city', '[slug]', 'pos_bill', '404', 'blog-details', 'blog-master', '.system_generated'
]);

const staticPages = getDirectories(appDir).filter(f => {
  if (excludeFolders.has(f)) return false;
  return fs.existsSync(path.join(appDir, f, 'page.js')) || fs.existsSync(path.join(appDir, f, 'page.jsx'));
});

// Blocked Retail/POS slugs to never include
const blockedRetailSlugs = new Set([
  'pos', 'supermarket', 'hypermarket', 'departmental-store', 'departmental-hypermarket-store',
  'grocery-store', 'kirana-store', 'garments', 'footwear-store', 'boutique-store', 'bridal-store',
  'textile', 'readymade-garment', 'pharma', 'cosmetic-store', 'imitation-jewellery', 'hardware-store',
  'hardware-shopping-store', 'home-decor-furniture', 'pet-shop', 'book-store', 'gift-shop',
  'gift-toy-sports-shop', 'toy-store', 'sports-shop', 'fruits-vegetable-shop', 'liquor-store',
  'convenience-store', 'minimart', 'retaile-store', 'shopping-mall', 'stationery-store', 'consumer-goods'
]);

const isBlockedSlug = (s) => {
  if (!s) return false;
  if (blockedRetailSlugs.has(s)) return true;
  if (s.includes('pos-billing') || s.includes('supermarket-grocery') || s.includes('garment-textile') || s.includes('jewellery-store') || s.includes('omnichannel')) return true;
  return false;
};

// City dynamic pages
let citySlugs = [];
if (fs.existsSync('src/data/cities.json')) {
  const citiesData = JSON.parse(fs.readFileSync('src/data/cities.json', 'utf8'));
  citySlugs = Object.keys(citiesData).map(c => 'cities/' + c);
}

// Chittorgarh Local & City Service Slugs
let cityServiceSlugs = [];
if (fs.existsSync('src/data/cityServices.json')) {
  const servicesData = JSON.parse(fs.readFileSync('src/data/cityServices.json', 'utf8'));
  cityServiceSlugs = Object.keys(servicesData).filter(s => !isBlockedSlug(s));
}

// Blog Posts Slugs
let blogSlugs = [];
if (fs.existsSync('src/data/blogPosts.json')) {
  const blogsData = JSON.parse(fs.readFileSync('src/data/blogPosts.json', 'utf8'));
  blogSlugs = blogsData.map(b => b.link ? b.link.replace(/^\//, '') : '').filter(Boolean).filter(s => !isBlockedSlug(s));
}

// Technology Slugs (44 Pages)
let techSlugs = [];
if (fs.existsSync('src/data/technologies.json')) {
  const techData = JSON.parse(fs.readFileSync('src/data/technologies.json', 'utf8'));
  techSlugs = techData.map(t => 'technology/' + t.slug);
}

const allUniquePaths = new Set();
allUniquePaths.add(''); // Homepage

staticPages.forEach(p => allUniquePaths.add(p));
citySlugs.forEach(c => allUniquePaths.add(c));
cityServiceSlugs.forEach(s => allUniquePaths.add(s));
blogSlugs.forEach(b => allUniquePaths.add(b));
techSlugs.forEach(t => allUniquePaths.add(t));

// Delete any known bad paths or redirected paths (to ensure 100% 200 OK in GSC)
['404', 'admin', 'city', 'blog-details', 'blog-master', 'undefined', 'null', 'affiliate-marketing-app-mewari-achaar', 'omnichannel'].forEach(bad => allUniquePaths.delete(bad));

const today = new Date().toISOString().split('T')[0];

const coreServices = new Set([
  'erp', 'crm', 'accounting', 'inventory', 'payroll', 'invoicing', 
  'smart-retail', 'lead-management', 'logistics', 
  'web-development-services', 'search-engine-optimization', 'digital-marketing-services', 
  'custom-crm-solutions', 'e-commerce-website-development', 'android-application', 
  'ai-solutions', 'ai-manufacturing', 'ai-chatbot-development', 'antigravity', 'render', 'cloudflare', 'vercel', 'groq',
  'enterprise-ai-agents', 'dedicated-tech-teams', '4-week-saas-mvp', 'timezone-overlap', 'b2b-lead-generation-services',
  'email-deliverability-services', 'dmarc-dkim-spf-setup', 'business-email-branding-bimi',
  'dns-cloudflare-management', 'email-blacklist-removal', 'cloud-hosting-deployment',
  'trust-center'
]);

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

Array.from(allUniquePaths).sort().forEach(p => {
  let url = p ? 'https://chittortech.in/' + p : 'https://chittortech.in/';
  let priority = '0.7';
  let changefreq = 'weekly';

  if (!p) {
    priority = '1.0';
    changefreq = 'daily';
  } else if (p === 'contact-us' || p === 'demo' || coreServices.has(p)) {
    priority = '0.9';
    changefreq = 'weekly';
  } else if (p.startsWith('cities/')) {
    priority = '0.8';
    changefreq = 'weekly';
  } else if (p === 'privacy-policy' || p === 'terms') {
    priority = '0.3';
    changefreq = 'monthly';
  }

  xml += '  <url>\n';
  xml += `    <loc>${url}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>${changefreq}</changefreq>\n`;
  xml += `    <priority>${priority}</priority>\n`;
  xml += '  </url>\n';
});

xml += '</urlset>\n';

fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
console.log(`Successfully generated public/sitemap.xml with ${allUniquePaths.size} clean, active URLs.`);
