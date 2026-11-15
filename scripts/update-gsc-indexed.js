const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const SITEMAP_PATH = path.join(ROOT_DIR, 'public', 'sitemap.xml');
const PREV_INDEXED_PATH = path.join(ROOT_DIR, 'SEO-History', 'gsc_all_indexed_oct15.txt');

// Read sitemap
const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
const sitemapUrls = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map(m => m[1].trim().replace(/\/+$/, ''))
  .map(u => u.startsWith('http://') ? u.replace(/^http:\/\//, 'https://') : u);
const sitemapSet = new Set(sitemapUrls);

console.log(`Total Sitemap URLs: ${sitemapUrls.length}`);

// Load previous indexed
let prevIndexed = [];
if (fs.existsSync(PREV_INDEXED_PATH)) {
  prevIndexed = fs.readFileSync(PREV_INDEXED_PATH, 'utf8')
    .split('\n')
    .map(u => u.trim().replace(/\/+$/, ''))
    .filter(Boolean);
}

// User pasted text from prompt
const userPastedText = `
https://chittortech.in/gst-accounting-invoicing-software-in-nagaur
13 Oct 2026
https://chittortech.in/custom-software-development-in-bhilwara
13 Oct 2026
https://chittortech.in/dharamshala-billing-system-in-rajsamand
13 Oct 2026
https://chittortech.in/technology/java
13 Oct 2026
https://chittortech.in/dharamshala-billing-system-in-hanumangarh
13 Oct 2026
https://chittortech.in/cities/sikar
13 Oct 2026
https://chittortech.in/melbourne-australia
13 Oct 2026
https://chittortech.in/technology/html5
13 Oct 2026
https://chittortech.in/technology/figma
13 Oct 2026
https://chittortech.in/web-development-company-in-jodhpur
13 Oct 2026
https://chittortech.in/spatial-computing-ai-real-estate
13 Oct 2026
https://chittortech.in/contact-us
13 Oct 2026
https://chittortech.in/ui-ux-design-services-in-jodhpur
13 Oct 2026
https://chittortech.in/android-application-development-in-bharatpur
13 Oct 2026
https://chittortech.in/custom-software-development-in-dausa
13 Oct 2026
https://chittortech.in/dharamshala-billing-system-in-ajmer
13 Oct 2026
https://chittortech.in/abu-dhabi
13 Oct 2026
https://chittortech.in/ai-solutions-in-churu
13 Oct 2026
https://chittortech.in/seo-services-in-alwar
13 Oct 2026
https://chittortech.in/ecommerce-website-development-in-hanumangarh
13 Oct 2026
https://chittortech.in/logistics-supply-chain-software-in-bhilwara
13 Oct 2026
https://chittortech.in/marble-granite-industry-erp-in-churu
13 Oct 2026
https://chittortech.in/google-play-publishing-in-bundi
13 Oct 2026
https://chittortech.in/school-management-software-in-jhalawar
13 Oct 2026
https://chittortech.in/hotel-management-system-in-barmer
12 Oct 2026
https://chittortech.in/google-play-publishing-in-chittorgarh
12 Oct 2026
https://chittortech.in/dharamshala-billing-system-in-banswara
12 Oct 2026
https://chittortech.in/dharamshala-billing-system-in-barmer
12 Oct 2026
https://chittortech.in/dharamshala-billing-system-in-pratapgarh
12 Oct 2026
https://chittortech.in/ai-chatbot-development
12 Oct 2026
https://chittortech.in/silicon-valley
12 Oct 2026
https://chittortech.in/saudi-arabia
12 Oct 2026
https://chittortech.in/ui-ux-design-services-in-dausa
12 Oct 2026
https://chittortech.in/london-tech-city
12 Oct 2026
https://chittortech.in/toronto-canada
12 Oct 2026
https://chittortech.in/custom-crm-solutions-in-barmer
12 Oct 2026
https://chittortech.in/singapore-hub
12 Oct 2026
https://chittortech.in/4-week-saas-mvp
12 Oct 2026
https://chittortech.in/hotel-room-booking-system
12 Oct 2026
https://chittortech.in/cities/dehradun
12 Oct 2026
https://chittortech.in/invoicing
12 Oct 2026
https://chittortech.in/cities/varanasi
12 Oct 2026
https://chittortech.in/logistics-supply-chain-software-in-banswara
12 Oct 2026
https://chittortech.in/shabari-mata-temple-hubli-invoice-system
12 Oct 2026
https://chittortech.in/erp-software-in-chittorgarh
12 Oct 2026
https://chittortech.in/erp-software-in-ajmer
12 Oct 2026
https://chittortech.in/custom-crm-solutions-in-chittorgarh
12 Oct 2026
https://chittortech.in/ecommerce-website-development-in-ajmer
12 Oct 2026
https://chittortech.in/marble-granite-industry-erp-in-ajmer
12 Oct 2026
https://chittortech.in/cities/ahmedabad
12 Oct 2026
https://chittortech.in/cities/lucknow
12 Oct 2026
https://chittortech.in/cities/ghaziabad
12 Oct 2026
https://chittortech.in/cities/coimbatore
12 Oct 2026
https://chittortech.in/cities/nagpur
12 Oct 2026
https://chittortech.in/cities/faridabad
12 Oct 2026
https://chittortech.in/google-play-publishing-in-sikar
12 Oct 2026
https://chittortech.in/
12 Oct 2026
https://chittortech.in/combating-ai-slop-content-generation
12 Oct 2026
https://chittortech.in/google-play-publishing-in-alwar
12 Oct 2026
https://chittortech.in/ai-chatbot-development-in-sawai-madhopur
12 Oct 2026
https://chittortech.in/ai-chatbot-development-in-alwar
12 Oct 2026
https://chittortech.in/e-commerce-website-development
12 Oct 2026
https://chittortech.in/android-application-development-in-barmer
12 Oct 2026
https://chittortech.in/ai-solutions-in-nagaur
12 Oct 2026
https://chittortech.in/erp-software-in-sawai-madhopur
12 Oct 2026
https://chittortech.in/cities/kolkata
12 Oct 2026
https://chittortech.in/cities/surat
12 Oct 2026
https://chittortech.in/marble-granite-industry-erp-in-bharatpur
12 Oct 2026
https://chittortech.in/marble-granite-industry-erp-in-banswara
12 Oct 2026
https://chittortech.in/logistics-supply-chain-software-in-pratapgarh
12 Oct 2026
https://chittortech.in/logistics-supply-chain-software-in-bundi
12 Oct 2026
https://chittortech.in/google-play-publishing-in-dausa
12 Oct 2026
https://chittortech.in/hotel-management-system-in-tonk
12 Oct 2026
https://chittortech.in/payroll-hr-management-software-in-sawai-madhopur
12 Oct 2026
https://chittortech.in/gst-accounting-invoicing-software-in-hanumangarh
12 Oct 2026
https://chittortech.in/payroll-hr-management-software-in-ajmer
12 Oct 2026
https://chittortech.in/dharamshala-billing-system-in-bharatpur
12 Oct 2026
https://chittortech.in/custom-crm-solutions-in-sawai-madhopur
12 Oct 2026
https://chittortech.in/cities/nashik
11 Oct 2026
https://chittortech.in/payroll-hr-management-software-in-rajsamand
11 Oct 2026
https://chittortech.in/digital-marketing-services-in-bundi
11 Oct 2026
https://chittortech.in/dharamshala-billing-system-in-pali
11 Oct 2026
https://chittortech.in/ai-solutions-in-banswara
11 Oct 2026
https://chittortech.in/cities/sonipat
11 Oct 2026
https://chittortech.in/technology/swift-ios
11 Oct 2026
https://chittortech.in/technology/flutter
11 Oct 2026
https://chittortech.in/ai-solutions-in-hanumangarh
11 Oct 2026
https://chittortech.in/cities/visakhapatnam
11 Oct 2026
https://chittortech.in/ai-knowledge-base-in-pratapgarh
11 Oct 2026
https://chittortech.in/cities/noida
11 Oct 2026
https://chittortech.in/resort-guest-house-software
11 Oct 2026
https://chittortech.in/cities/banswara
11 Oct 2026
https://chittortech.in/web-development-company-in-hanumangarh
11 Oct 2026
https://chittortech.in/small-language-models-slm
11 Oct 2026
https://chittortech.in/payment-terms
11 Oct 2026
https://chittortech.in/modern-responsive-website-design
11 Oct 2026
https://chittortech.in/lead-management
11 Oct 2026
https://chittortech.in/cities/tumakuru
11 Oct 2026
https://chittortech.in/ecommerce-website-development-in-sikar
11 Oct 2026
https://chittortech.in/android-application
11 Oct 2026
https://chittortech.in/cities/jhalawar
11 Oct 2026
https://chittortech.in/seo-services-in-bundi
11 Oct 2026
https://chittortech.in/digital-marketing-services-in-sikar
11 Oct 2026
https://chittortech.in/ui-ux-design-services-in-sikar
10 Oct 2026
https://chittortech.in/school-management-software-in-pratapgarh
10 Oct 2026
https://chittortech.in/web-development-company-in-jhalawar
10 Oct 2026
https://chittortech.in/cities/salem
10 Oct 2026
https://chittortech.in/erp-software-in-nagaur
10 Oct 2026
https://chittortech.in/seo-services-in-jodhpur
10 Oct 2026
https://chittortech.in/ai-manufacturing-solutions-in-sri-ganganagar
10 Oct 2026
https://chittortech.in/web-development-company-in-alwar
10 Oct 2026
https://chittortech.in/custom-crm-solutions-in-hanumangarh
10 Oct 2026
https://chittortech.in/ui-ux-design-services-in-hanumangarh
10 Oct 2026
https://chittortech.in/smart-retail-ai-in-tonk
10 Oct 2026
https://chittortech.in/germany-berlin
10 Oct 2026
https://chittortech.in/logistics-supply-chain-software-in-jodhpur
10 Oct 2026
https://chittortech.in/logistics
10 Oct 2026
https://chittortech.in/cities/kanpur
10 Oct 2026
https://chittortech.in/cities/bhavnagar
10 Oct 2026
https://chittortech.in/technology/fastapi
10 Oct 2026
https://chittortech.in/cities/bhopal
10 Oct 2026
https://chittortech.in/employee-background-verification
10 Oct 2026
https://chittortech.in/dubai
10 Oct 2026
https://chittortech.in/google-play-publishing-in-banswara
10 Oct 2026
https://chittortech.in/seo-services-in-pali
10 Oct 2026
https://chittortech.in/ai-chatbot-development-in-jhalawar
10 Oct 2026
https://chittortech.in/ecommerce-website-development-in-pratapgarh
10 Oct 2026
https://chittortech.in/payroll-hr-management-software-in-sikar
10 Oct 2026
https://chittortech.in/terms
10 Oct 2026
https://chittortech.in/dedicated-tech-teams
10 Oct 2026
https://chittortech.in/cities/ajmer
10 Oct 2026
https://chittortech.in/cities/pratapgarh
10 Oct 2026
https://chittortech.in/cities/ludhiana
10 Oct 2026
https://chittortech.in/cities/udaipur
10 Oct 2026
https://chittortech.in/cities/kota
10 Oct 2026
https://chittortech.in/united-states
10 Oct 2026
https://chittortech.in/cities/nizamabad
10 Oct 2026
https://chittortech.in/after-sale-service
10 Oct 2026
https://chittortech.in/cities/pali
10 Oct 2026
https://chittortech.in/cities/hyderabad
10 Oct 2026
https://chittortech.in/cities/vijayawada
10 Oct 2026
https://chittortech.in/cities/dharwad
10 Oct 2026
https://chittortech.in/cities/bengaluru
10 Oct 2026
https://chittortech.in/cities/thrissur
10 Oct 2026
https://chittortech.in/cities/bundi
10 Oct 2026
https://chittortech.in/school-management-software-in-udaipur
10 Oct 2026
https://chittortech.in/cities/mumbai
10 Oct 2026
https://chittortech.in/gst-accounting-invoicing-software-in-pali
10 Oct 2026
https://chittortech.in/cities/hubli
10 Oct 2026
https://chittortech.in/cities/karimnagar
10 Oct 2026
https://chittortech.in/erp-software-in-udaipur
10 Oct 2026
https://chittortech.in/ai-manufacturing-solutions-in-dausa
10 Oct 2026
https://chittortech.in/marble-granite-industry-erp-in-pratapgarh
10 Oct 2026
https://chittortech.in/cities/sawai-madhopur
10 Oct 2026
https://chittortech.in/digital-marketing-services-in-udaipur
10 Oct 2026
https://chittortech.in/marble-granite-industry-erp-in-udaipur
10 Oct 2026
https://chittortech.in/smart-retail-ai-in-bhilwara
10 Oct 2026
https://chittortech.in/seo-services-in-hanumangarh
10 Oct 2026
https://chittortech.in/web-development-company-in-bundi
10 Oct 2026
https://chittortech.in/cities/dausa
10 Oct 2026
https://chittortech.in/erp-software-in-bhilwara
10 Oct 2026
https://chittortech.in/ai-manufacturing-solutions-in-rajsamand
10 Oct 2026
https://chittortech.in/gst-accounting-invoicing-software-in-sawai-madhopur
10 Oct 2026
https://chittortech.in/ai-manufacturing-solutions-in-pali
10 Oct 2026
https://chittortech.in/hotel-management-system-in-hanumangarh
10 Oct 2026
https://chittortech.in/ai-solutions-in-udaipur
9 Oct 2026
https://chittortech.in/payroll-hr-management-software-in-udaipur
9 Oct 2026
https://chittortech.in/ecommerce-website-development-in-sawai-madhopur
9 Oct 2026
https://chittortech.in/school-management-software-in-pali
9 Oct 2026
https://chittortech.in/payroll-hr-management-software-in-hanumangarh
9 Oct 2026
https://chittortech.in/web-development-company-in-ajmer
9 Oct 2026
https://chittortech.in/payroll-hr-management-software-in-alwar
9 Oct 2026
https://chittortech.in/dharamshala-billing-system-in-udaipur
9 Oct 2026
https://chittortech.in/dharamshala-billing-system-in-dausa
9 Oct 2026
https://chittortech.in/school-management-software-in-sawai-madhopur
9 Oct 2026
https://chittortech.in/google-play-publishing-in-udaipur
9 Oct 2026
https://chittortech.in/technology/github
9 Oct 2026
https://chittortech.in/smart-retail-ai-in-udaipur
9 Oct 2026
https://chittortech.in/custom-software-development-in-udaipur
9 Oct 2026
https://chittortech.in/ecommerce-website-development-in-udaipur
9 Oct 2026
https://chittortech.in/android-application-development-in-udaipur
9 Oct 2026
https://chittortech.in/gst-accounting-invoicing-software-in-udaipur
9 Oct 2026
https://chittortech.in/seo-services-in-udaipur
9 Oct 2026
https://chittortech.in/custom-crm-solutions-in-sikar
9 Oct 2026
https://chittortech.in/ai-chatbot-development-in-udaipur
9 Oct 2026
https://chittortech.in/ai-manufacturing-solutions-in-udaipur
9 Oct 2026
https://chittortech.in/ai-knowledge-base-in-udaipur
9 Oct 2026
https://chittortech.in/custom-crm-solutions-in-udaipur
9 Oct 2026
https://chittortech.in/ui-ux-design-services-in-udaipur
9 Oct 2026
https://chittortech.in/cities/jammu
9 Oct 2026
https://chittortech.in/web-development-company-in-sikar
9 Oct 2026
https://chittortech.in/web-development-company-in-sri-ganganagar
9 Oct 2026
https://chittortech.in/zero-trust-security-architecture
9 Oct 2026
https://chittortech.in/web-development-company-in-rajsamand
9 Oct 2026
https://chittortech.in/web-development-company-in-tonk
9 Oct 2026
https://chittortech.in/web-development-company-in-udaipur
9 Oct 2026
https://chittortech.in/web-development-company-in-pratapgarh
9 Oct 2026
https://chittortech.in/web-development-company-in-pali
9 Oct 2026
https://chittortech.in/web-development-company-in-sawai-madhopur
9 Oct 2026
https://chittortech.in/web-development-company-in-nagaur
9 Oct 2026
https://chittortech.in/smart-retail
9 Oct 2026
https://chittortech.in/trust-center
8 Oct 2026
https://chittortech.in/hotel-management-system-in-udaipur
7 Oct 2026
https://chittortech.in/ai-solutions-in-bhilwara
7 Oct 2026
https://chittortech.in/gst-accounting-invoicing-software-in-chittorgarh
6 Oct 2026
https://chittortech.in/hotel-management-system-in-chittorgarh
6 Oct 2026
https://chittortech.in/logistics-supply-chain-software-in-chittorgarh
6 Oct 2026
https://chittortech.in/payroll-hr-management-software-in-chittorgarh
6 Oct 2026
https://chittortech.in/ai-knowledge-base-in-chittorgarh
6 Oct 2026
https://chittortech.in/android-application-development-in-chittorgarh
6 Oct 2026
https://chittortech.in/ecommerce-website-development-in-chittorgarh
6 Oct 2026
https://chittortech.in/ai-manufacturing-solutions-in-chittorgarh
6 Oct 2026
https://chittortech.in/cities/jaipur
4 Oct 2026
https://chittortech.in/ai-chatbot-development-in-pali
4 Oct 2026
https://chittortech.in/ai-chatbot-development-in-bharatpur
4 Oct 2026
https://chittortech.in/ai-chatbot-development-in-banswara
4 Oct 2026
https://chittortech.in/ai-chatbot-development-in-bhilwara
4 Oct 2026
https://chittortech.in/digital-coworkers-ai-hr-processes
4 Oct 2026
https://chittortech.in/agritech-predictive-analytics-crop
4 Oct 2026
https://chittortech.in/autonomous-ai-agents-2026
4 Oct 2026
https://chittortech.in/inventory
4 Oct 2026
https://chittortech.in/school-management-software-in-sri-ganganagar
2 Oct 2026
https://chittortech.in/school-management-software-in-sikar
2 Oct 2026
https://chittortech.in/school-management-software-in-chittorgarh
2 Oct 2026
https://chittortech.in/school-management-software-in-hanumangarh
2 Oct 2026
https://chittortech.in/marble-granite-industry-erp-in-hanumangarh
2 Oct 2026
https://chittortech.in/school-management-software-in-ajmer
2 Oct 2026
https://chittortech.in/school-management-software-in-bhilwara
2 Oct 2026
https://chittortech.in/physical-ai-software-robotics
2 Oct 2026
https://chittortech.in/cities/panipat
2 Oct 2026
https://chittortech.in/cities/chennai
2 Oct 2026
https://chittortech.in/enterprise-ai-agents
1 Oct 2026
https://chittortech.in/about-us
1 Oct 2026
https://chittortech.in/education
1 Oct 2026
https://chittortech.in/cities/gandhinagar
1 Oct 2026
https://chittortech.in/cities/aurangabad
1 Oct 2026
https://chittortech.in/custom-software-development-in-alwar
1 Oct 2026
https://chittortech.in/austin-tech-hub
1 Oct 2026
https://chittortech.in/cities/guwahati
1 Oct 2026
https://chittortech.in/industrial-products
1 Oct 2026
https://chittortech.in/ai-indian-healthcare-hospital-erp
1 Oct 2026
https://chittortech.in/google-play-publishing-in-sri-ganganagar
1 Oct 2026
https://chittortech.in/beyond-automation-why-agentic-ai-erp-is-the-best-retail-software-move-for-2026
1 Oct 2026
https://chittortech.in/google-play-publishing-in-ajmer
1 Oct 2026
https://chittortech.in/dharamshala-billing-system-in-churu
30 Sept 2026
https://chittortech.in/dharamshala-billing-system-in-sawai-madhopur
30 Sept 2026
https://chittortech.in/dharamshala-billing-system-in-chittorgarh
30 Sept 2026
https://chittortech.in/cities/belgaum
29 Sept 2026
https://chittortech.in/dmarc-dkim-spf-setup
29 Sept 2026
https://chittortech.in/dns-cloudflare-management
29 Sept 2026
https://chittortech.in/email-blacklist-removal
29 Sept 2026
https://chittortech.in/email-deliverability-services
29 Sept 2026
https://chittortech.in/cloud-hosting-deployment
29 Sept 2026
https://chittortech.in/business-email-branding-bimi
29 Sept 2026
https://chittortech.in/crm
28 Sept 2026
https://chittortech.in/cities/thane
28 Sept 2026
https://chittortech.in/vercel
28 Sept 2026
https://chittortech.in/hospitals
28 Sept 2026
https://chittortech.in/building-ai-native-organization
28 Sept 2026
https://chittortech.in/cloud-native-infrastructure-scalable-saas
28 Sept 2026
https://chittortech.in/cities/anand
28 Sept 2026
https://chittortech.in/erp-software-in-bundi
27 Sept 2026
https://chittortech.in/technology/vuejs
27 Sept 2026
https://chittortech.in/demo
27 Sept 2026
https://chittortech.in/edtech-evolution-hyper-personalized-ai
27 Sept 2026
https://chittortech.in/technology/pytorch
27 Sept 2026
https://chittortech.in/financial-sector-automated-risk-assessment
27 Sept 2026
https://chittortech.in/ai-knowledge-base-in-dausa
26 Sept 2026
https://chittortech.in/jewellery-store-software-in-bundi
26 Sept 2026
https://chittortech.in/payroll-hr-management-software-in-dausa
26 Sept 2026
https://chittortech.in/technology/postgresql
26 Sept 2026
https://chittortech.in/technology/mysql
26 Sept 2026
https://chittortech.in/technology/graphql
26 Sept 2026
https://chittortech.in/technology/tensorflow
26 Sept 2026
https://chittortech.in/technology/typescript
26 Sept 2026
https://chittortech.in/groq
26 Sept 2026
https://chittortech.in/technology/nodejs
26 Sept 2026
https://chittortech.in/technology/redis
26 Sept 2026
https://chittortech.in/technology/openai-gpt4
26 Sept 2026
https://chittortech.in/render
26 Sept 2026
https://chittortech.in/ecommerce-website-development-in-barmer
25 Sept 2026
https://chittortech.in/cities/madurai
25 Sept 2026
https://chittortech.in/ai-chatbot-development-in-barmer
25 Sept 2026
https://chittortech.in/ai-chatbot-development-in-tonk
25 Sept 2026
https://chittortech.in/ai-manufacturing-solutions-in-bhilwara
25 Sept 2026
https://chittortech.in/ai-manufacturing-solutions-in-banswara
25 Sept 2026
https://chittortech.in/ai-chatbot-development-in-pratapgarh
25 Sept 2026
https://chittortech.in/ai-chatbot-development-in-nagaur
25 Sept 2026
https://chittortech.in/erp
25 Sept 2026
https://chittortech.in/android-application-development-in-rajsamand
25 Sept 2026
https://chittortech.in/visit-chittorgarh-app-tourism
25 Sept 2026
https://chittortech.in/smart-retail-ai-in-pali
25 Sept 2026
https://chittortech.in/seo-services-in-sawai-madhopur
25 Sept 2026
https://chittortech.in/logistics-supply-chain-software-in-hanumangarh
25 Sept 2026
https://chittortech.in/digital-marketing-services-in-bhilwara
24 Sept 2026
https://chittortech.in/ai-solutions-in-chittorgarh
24 Sept 2026
https://chittortech.in/ai-solutions-in-jhalawar
24 Sept 2026
https://chittortech.in/jewellery-store-software-in-alwar
24 Sept 2026
https://chittortech.in/ui-ux-design-services-in-ajmer
24 Sept 2026
https://chittortech.in/gst-accounting-invoicing-software-in-ajmer
24 Sept 2026
https://chittortech.in/ai-knowledge-base-in-bhilwara
24 Sept 2026
https://chittortech.in/gst-accounting-invoicing-software-in-barmer
24 Sept 2026
https://chittortech.in/electronics-smartphones
24 Sept 2026
https://chittortech.in/smart-retail-ai-in-sawai-madhopur
24 Sept 2026
https://chittortech.in/ai-manufacturing
24 Sept 2026
https://chittortech.in/social-media-optimization
24 Sept 2026
https://chittortech.in/ai-knowledge-base-in-tonk
24 Sept 2026
https://chittortech.in/inventory-management-software-in-jhalawar
23 Sept 2026
https://chittortech.in/custom-software-development-in-sikar
23 Sept 2026
https://chittortech.in/cities/agra
23 Sept 2026
https://chittortech.in/ai-political-campaigns-india
23 Sept 2026
https://chittortech.in/cities/chandigarh
23 Sept 2026
https://chittortech.in/cities/gurgaon
23 Sept 2026
https://chittortech.in/rag-systems-enterprise-knowledge
23 Sept 2026
https://chittortech.in/cities/chittorgarh
23 Sept 2026
https://chittortech.in/antigravity
23 Sept 2026
https://chittortech.in/manchester-uk
23 Sept 2026
https://chittortech.in/custom-software-development-in-pratapgarh
22 Sept 2026
https://chittortech.in/chittorgarh-tourism-website-development
21 Sept 2026
https://chittortech.in/cities/mangalore
21 Sept 2026
https://chittortech.in/custom-crm-solutions-in-sri-ganganagar
21 Sept 2026
https://chittortech.in/cities/rajsamand
21 Sept 2026
https://chittortech.in/cities/sri-ganganagar
21 Sept 2026
https://chittortech.in/cities/mysuru
21 Sept 2026
https://chittortech.in/cities/thiruvananthapuram
21 Sept 2026
https://chittortech.in/cities/junagadh
21 Sept 2026
https://chittortech.in/cities/bhubaneswar
21 Sept 2026
https://chittortech.in/cities/indore
21 Sept 2026
https://chittortech.in/project-estimator
21 Sept 2026
https://chittortech.in/ui-ux-design-services-in-churu
21 Sept 2026
https://chittortech.in/logistics-supply-chain-software-in-churu
21 Sept 2026
https://chittortech.in/technology/vs-code
21 Sept 2026
https://chittortech.in/ai-knowledge-base-in-rajsamand
21 Sept 2026
https://chittortech.in/schools-educational-institutions
21 Sept 2026
https://chittortech.in/web-development-company-in-banswara
20 Sept 2026
https://chittortech.in/dharamshala-billing-system-in-alwar
20 Sept 2026
https://chittortech.in/android-application-development-in-jodhpur
20 Sept 2026
https://chittortech.in/dharamshala-billing-system-in-jodhpur
20 Sept 2026
https://chittortech.in/android-application-development-in-alwar
20 Sept 2026
https://chittortech.in/cloudflare
20 Sept 2026
https://chittortech.in/dharamshala-billing-system-in-bhilwara
20 Sept 2026
https://chittortech.in/technology/nextjs
20 Sept 2026
https://chittortech.in/android-application-development-in-bhilwara
20 Sept 2026
https://chittortech.in/web-development-company-in-bhilwara
20 Sept 2026
https://chittortech.in/pay
20 Sept 2026
https://chittortech.in/ecommerce-website-development-in-pali
20 Sept 2026
https://chittortech.in/ecommerce-website-development-in-jhalawar
20 Sept 2026
https://chittortech.in/cities/ranchi
19 Sept 2026
https://chittortech.in/android-application-development-in-banswara
19 Sept 2026
https://chittortech.in/android-application-development-in-ajmer
19 Sept 2026
https://chittortech.in/custom-software-development-in-jodhpur
19 Sept 2026
https://chittortech.in/custom-software-development-in-banswara
19 Sept 2026
https://chittortech.in/technology/google-cloud
18 Sept 2026
https://chittortech.in/new-york-city
17 Sept 2026
https://chittortech.in/cities/barmer
17 Sept 2026
https://chittortech.in/android-application-development-in-nagaur
17 Sept 2026
https://chittortech.in/android-application-development-in-tonk
17 Sept 2026
https://chittortech.in/ai-knowledge-base-in-ajmer
17 Sept 2026
https://chittortech.in/android-application-development-in-hanumangarh
17 Sept 2026
https://chittortech.in/android-application-development-in-sawai-madhopur
17 Sept 2026
https://chittortech.in/ai-chatbot-development-in-jodhpur
17 Sept 2026
https://chittortech.in/ai-knowledge-base-in-jhalawar
17 Sept 2026
https://chittortech.in/cities/vadodara
16 Sept 2026
https://chittortech.in/hotel-management-system
16 Sept 2026
https://chittortech.in/search-engine-optimization
16 Sept 2026
https://chittortech.in/smart-retail-ai-in-nagaur
16 Sept 2026
https://chittortech.in/multimodal-ai-interactive-interfaces
16 Sept 2026
https://chittortech.in/ai-chatbot-development-in-sikar
15 Sept 2026
https://chittortech.in/ai-chatbot-development-in-churu
15 Sept 2026
https://chittortech.in/hotel-management-system-in-banswara
15 Sept 2026
https://chittortech.in/ai-solutions-in-bharatpur
15 Sept 2026
https://chittortech.in/erp-software-in-alwar
15 Sept 2026
https://chittortech.in/erp-software-in-sikar
15 Sept 2026
https://chittortech.in/technology/docker
15 Sept 2026
https://chittortech.in/ai-chatbot-development-in-hanumangarh
15 Sept 2026
https://chittortech.in/ai-solutions-in-rajsamand
15 Sept 2026
https://chittortech.in/ai-manufacturing-solutions-in-jodhpur
15 Sept 2026
https://chittortech.in/custom-software-development-in-bharatpur
15 Sept 2026
https://chittortech.in/hotel-management-system-in-alwar
15 Sept 2026
https://chittortech.in/ai-manufacturing-solutions-in-sawai-madhopur
15 Sept 2026
https://chittortech.in/custom-software-development-in-pali
15 Sept 2026
https://chittortech.in/ai-manufacturing-solutions-in-hanumangarh
15 Sept 2026
https://chittortech.in/custom-crm-solutions-in-churu
15 Sept 2026
https://chittortech.in/marble-granite-industry-erp-in-bhilwara
15 Sept 2026
https://chittortech.in/web-development-company-in-chittorgarh
15 Sept 2026
https://chittortech.in/custom-software-development-in-chittorgarh
15 Sept 2026
https://chittortech.in/custom-crm-solutions
15 Sept 2026
https://chittortech.in/marble-granite-industry-erp-in-rajsamand
15 Sept 2026
https://chittortech.in/marble-granite-industry-erp-in-chittorgarh
15 Sept 2026
https://chittortech.in/ai-governance-security-deepfakes
15 Sept 2026
https://chittortech.in/android-application-development-in-sri-ganganagar
15 Sept 2026
https://chittortech.in/mastering-prompt-engineering-business
15 Sept 2026
https://chittortech.in/google-play-publishing-in-rajsamand
15 Sept 2026
https://chittortech.in/google-play-publishing-in-jhalawar
15 Sept 2026
https://chittortech.in/inventory-management-software-in-rajsamand
15 Sept 2026
https://chittortech.in/dharamshala-billing-system-in-jhalawar
15 Sept 2026
https://chittortech.in/cities/rajkot
15 Sept 2026
https://chittortech.in/timezone-overlap
15 Sept 2026
https://chittortech.in/turkey-eurasia
14 Sept 2026
https://chittortech.in/united-kingdom
14 Sept 2026
https://chittortech.in/sydney-australia
14 Sept 2026
https://chittortech.in/hotel-management-system-in-dausa
14 Sept 2026
https://chittortech.in/netherlands-amsterdam
14 Sept 2026
https://chittortech.in/custom-software-development-in-rajsamand
14 Sept 2026
https://chittortech.in/custom-crm-solutions-in-bhilwara
14 Sept 2026
https://chittortech.in/custom-software-development-in-jhalawar
13 Sept 2026
https://chittortech.in/ai-chatbot-development-in-ajmer
13 Sept 2026
https://chittortech.in/ai-knowledge-base-in-bharatpur
13 Sept 2026
https://chittortech.in/ai-chatbot-development-in-bundi
13 Sept 2026
https://chittortech.in/custom-software-development-in-sawai-madhopur
13 Sept 2026
https://chittortech.in/ai-knowledge-base-in-hanumangarh
13 Sept 2026
https://chittortech.in/ai-manufacturing-solutions-in-barmer
13 Sept 2026
https://chittortech.in/ai-solutions-in-dausa
13 Sept 2026
https://chittortech.in/hotel-management-system-in-rajsamand
13 Sept 2026
https://chittortech.in/erp-software-in-jodhpur
13 Sept 2026
https://chittortech.in/google-play-store-publishing-guide-compliance-launch
13 Sept 2026
https://chittortech.in/ai-knowledge-base-in-pali
13 Sept 2026
https://chittortech.in/hotel-management-system-in-jhalawar
13 Sept 2026
https://chittortech.in/ai-chatbot-development-in-chittorgarh
13 Sept 2026
https://chittortech.in/miami-florida
13 Sept 2026
https://chittortech.in/ai-knowledge-base-in-sawai-madhopur
13 Sept 2026
https://chittortech.in/custom-software-development-in-tonk
13 Sept 2026
https://chittortech.in/custom-crm-solutions-in-bundi
13 Sept 2026
https://chittortech.in/google-play-publishing-in-bharatpur
13 Sept 2026
https://chittortech.in/omnichannel-retail-software-in-tonk
13 Sept 2026
https://chittortech.in/custom-software-development-in-nagaur
13 Sept 2026
https://chittortech.in/web-development-company-in-dausa
13 Sept 2026
https://chittortech.in/custom-crm-solutions-in-rajsamand
13 Sept 2026
https://chittortech.in/smart-retail-ai-in-chittorgarh
13 Sept 2026
https://chittortech.in/cities/davanagere
12 Sept 2026
https://chittortech.in/digital-marketing-services
12 Sept 2026
https://chittortech.in/cities/bhilwara
12 Sept 2026
https://chittortech.in/readymade-garment
12 Sept 2026
https://chittortech.in/cities/jamnagar
12 Sept 2026
https://chittortech.in/cities/kochi
12 Sept 2026
https://chittortech.in/garments
12 Sept 2026
https://chittortech.in/cities/raipur
12 Sept 2026
https://chittortech.in/cities/amritsar
12 Sept 2026
https://chittortech.in/pet-shop
12 Sept 2026
https://chittortech.in/cities/tiruppur
12 Sept 2026
https://chittortech.in/textile
12 Sept 2026
https://chittortech.in/cities/alwar
12 Sept 2026
https://chittortech.in/cities/churu
12 Sept 2026
https://chittortech.in/cities/delhi
12 Sept 2026
https://chittortech.in/cities/srinagar
12 Sept 2026
https://chittortech.in/cities/jodhpur
12 Sept 2026
https://chittortech.in/cities/warangal
12 Sept 2026
https://chittortech.in/cities/meerut
12 Sept 2026
https://chittortech.in/cosmetic-store
12 Sept 2026
https://chittortech.in/cities/tonk
12 Sept 2026
https://chittortech.in/gift-shop
12 Sept 2026
https://chittortech.in/privacy-policy
11 Sept 2026
https://chittortech.in/cities/shimla
11 Sept 2026
https://chittortech.in/home-decor-furniture
11 Sept 2026
https://chittortech.in/pos
10 Sept 2026
`;

const extractedUrls = [...userPastedText.matchAll(/https:\/\/chittortech\.in[^\s]*/g)]
  .map(m => m[0].trim().replace(/\/+$/, ''));

console.log(`Extracted from user text: ${extractedUrls.length} total URL lines.`);

// Unique set of all indexed
const allIndexedSet = new Set();
prevIndexed.forEach(u => allIndexedSet.add(u));
extractedUrls.forEach(u => allIndexedSet.add(u));

console.log(`Total unique indexed URLs combined: ${allIndexedSet.size}`);

// Write all indexed to file
const allIndexedList = Array.from(allIndexedSet).sort();
fs.writeFileSync(path.join(ROOT_DIR, 'SEO-History', 'gsc_all_indexed_oct16.txt'), allIndexedList.join('\n'), 'utf8');

// Also update gsc_all_indexed_oct15.txt or keep both
fs.writeFileSync(path.join(ROOT_DIR, 'SEO-History', 'gsc_all_indexed_oct15.txt'), allIndexedList.join('\n'), 'utf8');

// Now calculate unindexed URLs against sitemap
const unindexedUrls = sitemapUrls.filter(u => !allIndexedSet.has(u));
console.log(`Total Unindexed URLs in Sitemap: ${unindexedUrls.length}`);

fs.writeFileSync(path.join(ROOT_DIR, 'SEO-History', 'gsc_unindexed_today.txt'), unindexedUrls.join('\n'), 'utf8');

// Categorize and extract HIGH VALUE LEAD GENERATING UNINDEXED PAGES
// High-intent keywords for direct paying clients and leads:
// 1. Core agency & web development: web-development-services, b2b-lead-generation-services, modern-responsive-website-design
// 2. High ticket development: enterprise-ai-agents, technical-seo-services, on-page-seo-services, off-page-seo-services
// 3. SaaS / Software pillars: accounting, payroll, custom-crm-solutions, lead-management, logistics
// 4. City commercial pillars (especially top hubs): web-development-company-in-[city], ecommerce-website-development-in-[city],
//    custom-crm-solutions-in-[city], gst-accounting-invoicing-software-in-[city], erp-software-in-[city],
//    marble-granite-industry-erp-in-[city], ai-manufacturing-solutions-in-[city]

const priorityPillars = [
  'https://chittortech.in/b2b-lead-generation-services',
  'https://chittortech.in/web-development-services',
  'https://chittortech.in/technical-seo-services',
  'https://chittortech.in/on-page-seo-services',
  'https://chittortech.in/off-page-seo-services',
  'https://chittortech.in/accounting',
  'https://chittortech.in/payroll',
  'https://chittortech.in/dharamshala-billing-system',
  'https://chittortech.in/google-play-publishing',
  'https://chittortech.in/ai-solutions',
  'https://chittortech.in/ai-chatbot-development'
];

function scoreUrl(url) {
  let score = 0;
  const lower = url.toLowerCase();
  
  // Highest priority pillars
  if (priorityPillars.includes(url)) score += 1000;
  
  // High intent service types
  if (lower.includes('b2b-lead-generation')) score += 500;
  if (lower.includes('web-development-services')) score += 400;
  if (lower.includes('technical-seo')) score += 350;
  if (lower.includes('web-development-company-in')) score += 300;
  if (lower.includes('custom-crm-solutions-in')) score += 280;
  if (lower.includes('ecommerce-website-development-in')) score += 270;
  if (lower.includes('gst-accounting-invoicing-software-in')) score += 260;
  if (lower.includes('erp-software-in')) score += 250;
  if (lower.includes('ai-manufacturing-solutions-in')) score += 240;
  if (lower.includes('logistics-supply-chain-software-in')) score += 230;
  if (lower.includes('hotel-management-system-in')) score += 220;
  if (lower.includes('marble-granite-industry-erp-in')) score += 210;
  if (lower.includes('payroll-hr-management-software-in')) score += 200;
  
  // High value commercial hubs get boost
  if (lower.includes('jodhpur')) score += 100;
  if (lower.includes('bhilwara')) score += 95;
  if (lower.includes('alwar')) score += 90;
  if (lower.includes('udaipur')) score += 85;
  if (lower.includes('chittorgarh')) score += 80;
  if (lower.includes('rajsamand')) score += 75;
  if (lower.includes('ajmer')) score += 70;
  if (lower.includes('pali')) score += 65;
  if (lower.includes('kota')) score += 60;
  if (lower.includes('jaipur')) score += 55;
  
  return score;
}

const scoredUnindexed = unindexedUrls.map(u => ({ url: u, score: scoreUrl(u) }));
scoredUnindexed.sort((a, b) => b.score - a.score);

const highValueUnindexed = scoredUnindexed.map(item => item.url);

fs.writeFileSync(
  path.join(ROOT_DIR, 'SEO-History', 'today_high_value_unindexed_leads.txt'),
  highValueUnindexed.join('\n'),
  'utf8'
);

console.log(`Top 20 Scored High-Value Lead-Gen Unindexed URLs:`);
scoredUnindexed.slice(0, 20).forEach((item, idx) => {
  console.log(`${idx + 1}. [Score: ${item.score}] ${item.url}`);
});
