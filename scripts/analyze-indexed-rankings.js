const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const indexedUrls = fs.readFileSync(path.join(ROOT_DIR, 'SEO-History', 'gsc_all_indexed_oct15.txt'), 'utf8')
  .trim()
  .split('\n')
  .map(u => u.trim().toLowerCase().replace(/\/$/, ''));

console.log(`Processing ${indexedUrls.length} verified indexed URLs...`);

// High-converting commercial terms vs informational terms
const moneyMakerSlugs = [
  'web-development-services',
  'b2b-lead-generation-services',
  'modern-responsive-website-design',
  'e-commerce-website-development',
  'android-application',
  'accounting',
  'payroll',
  'lead-management',
  'technical-seo-services',
  'dharamshala-billing-system',
  'google-play-publishing',
  'online-booking-admin-portal'
];

const analysis = {
  totalIndexed: indexedUrls.length,
  categories: {
    cityDirectories: [],
    techStackPages: [],
    aiBlogsAndGuides: [],
    smallTownLongTail: [],
    tier1RajasthanCommercial: [],
    generalCompanyAndPolicy: []
  },
  moneyMakersIndexedCount: 0,
  moneyMakersUnindexedCount: 0
};

indexedUrls.forEach(url => {
  const slug = url.replace('https://chittortech.in/', '');
  
  if (slug.startsWith('cities/')) {
    analysis.categories.cityDirectories.push(url);
  } else if (slug.startsWith('technology/')) {
    analysis.categories.techStackPages.push(url);
  } else if (
    slug.includes('ai-') || slug.includes('-ai') || slug.includes('slm') || 
    slug.includes('llm') || slug.includes('agents') || slug.includes('robotics') || 
    slug.includes('zero-trust') || slug.includes('prompt-engineering') || 
    slug.includes('building-ai') || slug.includes('cloud-native') || 
    slug.includes('combating') || slug.includes('edtech') || 
    slug.includes('financial-sector') || slug.includes('multimodal') || 
    slug.includes('rag-systems')
  ) {
    analysis.categories.aiBlogsAndGuides.push(url);
  } else if (
    slug.includes('-in-jaipur') || slug.includes('-in-jodhpur') || 
    slug.includes('-in-udaipur') || slug.includes('-in-bhilwara')
  ) {
    analysis.categories.tier1RajasthanCommercial.push(url);
  } else if (slug.includes('-in-')) {
    analysis.categories.smallTownLongTail.push(url);
  } else {
    analysis.categories.generalCompanyAndPolicy.push(url);
  }
});

moneyMakerSlugs.forEach(slug => {
  const fullUrl = `https://chittortech.in/${slug}`;
  if (indexedUrls.includes(fullUrl)) {
    analysis.moneyMakersIndexedCount++;
  } else {
    analysis.moneyMakersUnindexedCount++;
  }
});

console.log('Category breakdown:');
console.log(`- City Directories (/cities/*): ${analysis.categories.cityDirectories.length}`);
console.log(`- AI Blogs & Deep Tech Articles: ${analysis.categories.aiBlogsAndGuides.length}`);
console.log(`- Small Town Long-Tail Pages: ${analysis.categories.smallTownLongTail.length}`);
console.log(`- Tier-1 Commercial Rajasthan Pages: ${analysis.categories.tier1RajasthanCommercial.length}`);
console.log(`- Tech Stack Pages: ${analysis.categories.techStackPages.length}`);
console.log(`- General / Company / Industry: ${analysis.categories.generalCompanyAndPolicy.length}`);
console.log(`- Core Commercial Money-Makers Indexed: ${analysis.moneyMakersIndexedCount} / ${moneyMakerSlugs.length}`);
