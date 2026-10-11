const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const SITEMAP_PATH = path.join(ROOT_DIR, 'public', 'sitemap.xml');

// Load sitemap URLs
const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
const sitemapUrls = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map(m => m[1].trim())
  .map(u => u.startsWith('http://') ? u.replace(/^http:\/\//, 'https://') : u);

console.log(`Total Sitemap URLs: ${sitemapUrls.length}`);

// Read user's text or parse it
const rawText = `
URL	Last crawled
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
https://chittortech.in/cities/visakhapatnam
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
https://chittortech.in/trust-center
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
https://chittortech.in/google-play-publishing-in-chittorgarh
1 Oct 2026
https://chittortech.in/google-play-publishing-in-sikar
1 Oct 2026
https://chittortech.in/ai-indian-healthcare-hospital-erp
1 Oct 2026
https://chittortech.in/google-play-publishing-in-sri-ganganagar
1 Oct 2026
https://chittortech.in/beyond-automation-why-agentic-ai-erp-is-the-best-retail-software-move-for-2026
1 Oct 2026
https://chittortech.in/google-play-publishing-in-ajmer
1 Oct 2026
https://chittortech.in/melbourne-australia
1 Oct 2026
https://chittortech.in/cities/sikar
1 Oct 2026
https://chittortech.in/saudi-arabia
30 Sept 2026
https://chittortech.in/silicon-valley
30 Sept 2026
https://chittortech.in/dharamshala-billing-system-in-ajmer
30 Sept 2026
https://chittortech.in/dharamshala-billing-system-in-barmer
30 Sept 2026
https://chittortech.in/dharamshala-billing-system-in-churu
30 Sept 2026
https://chittortech.in/dharamshala-billing-system-in-banswara
30 Sept 2026
https://chittortech.in/dharamshala-billing-system-in-sawai-madhopur
30 Sept 2026
https://chittortech.in/dharamshala-billing-system-in-pratapgarh
30 Sept 2026
https://chittortech.in/dharamshala-billing-system-in-hanumangarh
30 Sept 2026
https://chittortech.in/dharamshala-billing-system-in-chittorgarh
30 Sept 2026
https://chittortech.in/dharamshala-billing-system-in-rajsamand
30 Sept 2026
https://chittortech.in/shabari-mata-temple-hubli-invoice-system
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
https://chittortech.in/ai-chatbot-development
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
https://chittortech.in/combating-ai-slop-content-generation
27 Sept 2026
https://chittortech.in/demo
27 Sept 2026
https://chittortech.in/edtech-evolution-hyper-personalized-ai
27 Sept 2026
https://chittortech.in/technology/pytorch
27 Sept 2026
https://chittortech.in/financial-sector-automated-risk-assessment
27 Sept 2026
https://chittortech.in/
27 Sept 2026
https://chittortech.in/ai-knowledge-base-in-dausa
26 Sept 2026
https://chittortech.in/cities/pune
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
https://chittortech.in/ai-chatbot-development-in-sawai-madhopur
25 Sept 2026
https://chittortech.in/ai-chatbot-development-in-nagaur
25 Sept 2026
https://chittortech.in/erp
25 Sept 2026
https://chittortech.in/android-application-development-in-rajsamand
25 Sept 2026
https://chittortech.in/zero-trust-security-architecture
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
https://chittortech.in/smart-retail
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
https://chittortech.in/cities/hubli
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
https://chittortech.in/contact-us
19 Sept 2026
https://chittortech.in/android-application-development-in-banswara
19 Sept 2026
https://chittortech.in/android-application-development-in-ajmer
19 Sept 2026
https://chittortech.in/custom-software-development-in-bhilwara
19 Sept 2026
https://chittortech.in/custom-software-development-in-jodhpur
19 Sept 2026
https://chittortech.in/dubai
19 Sept 2026
https://chittortech.in/abu-dhabi
19 Sept 2026
https://chittortech.in/custom-software-development-in-banswara
19 Sept 2026
https://chittortech.in/technology/google-cloud
18 Sept 2026
https://chittortech.in/singapore-hub
18 Sept 2026
https://chittortech.in/germany-berlin
18 Sept 2026
https://chittortech.in/london-tech-city
18 Sept 2026
https://chittortech.in/toronto-canada
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
https://chittortech.in/ai-chatbot-development-in-sri-ganganagar
17 Sept 2026
https://chittortech.in/ai-chatbot-development-in-alwar
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
https://chittortech.in/technology/fastapi
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
https://chittortech.in/4-week-saas-mvp
15 Sept 2026
https://chittortech.in/marble-granite-industry-erp-in-rajsamand
15 Sept 2026
https://chittortech.in/dedicated-tech-teams
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
https://chittortech.in/hotel-room-booking-system
13 Sept 2026
https://chittortech.in/hotel-management-system-in-jhalawar
13 Sept 2026
https://chittortech.in/ai-chatbot-development-in-chittorgarh
13 Sept 2026
https://chittortech.in/miami-florida
13 Sept 2026
https://chittortech.in/united-states
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
https://chittortech.in/cities/udaipur
13 Sept 2026
https://chittortech.in/cities/davanagere
12 Sept 2026
https://chittortech.in/digital-marketing-services
12 Sept 2026
https://chittortech.in/cities/pali
12 Sept 2026
https://chittortech.in/invoicing
12 Sept 2026
https://chittortech.in/cities/sonipat
12 Sept 2026
https://chittortech.in/cities/kota
12 Sept 2026
https://chittortech.in/cities/bengaluru
12 Sept 2026
https://chittortech.in/cities/bhilwara
12 Sept 2026
https://chittortech.in/after-sale-service
12 Sept 2026
https://chittortech.in/cities/bundi
12 Sept 2026
https://chittortech.in/cities/ludhiana
12 Sept 2026
https://chittortech.in/resort-guest-house-software
12 Sept 2026
https://chittortech.in/cities/surat
12 Sept 2026
https://chittortech.in/cities/bhopal
12 Sept 2026
https://chittortech.in/readymade-garment
12 Sept 2026
https://chittortech.in/cities/jamnagar
12 Sept 2026
https://chittortech.in/cities/thrissur
12 Sept 2026
https://chittortech.in/cities/kochi
12 Sept 2026
https://chittortech.in/garments
12 Sept 2026
https://chittortech.in/cities/hyderabad
12 Sept 2026
https://chittortech.in/cities/raipur
12 Sept 2026
https://chittortech.in/cities/salem
12 Sept 2026
https://chittortech.in/employee-background-verification
12 Sept 2026
https://chittortech.in/cities/amritsar
12 Sept 2026
https://chittortech.in/logistics
12 Sept 2026
https://chittortech.in/cities/noida
12 Sept 2026
https://chittortech.in/pet-shop
12 Sept 2026
https://chittortech.in/cities/bhavnagar
12 Sept 2026
https://chittortech.in/terms
12 Sept 2026
https://chittortech.in/cities/dehradun
12 Sept 2026
https://chittortech.in/cities/tiruppur
12 Sept 2026
https://chittortech.in/cities/varanasi
12 Sept 2026
https://chittortech.in/cities/tumakuru
12 Sept 2026
https://chittortech.in/cities/mumbai
12 Sept 2026
https://chittortech.in/textile
12 Sept 2026
https://chittortech.in/cities/banswara
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
https://chittortech.in/cities/ajmer
12 Sept 2026
https://chittortech.in/cities/jammu
12 Sept 2026
https://chittortech.in/cities/warangal
12 Sept 2026
https://chittortech.in/cities/meerut
12 Sept 2026
https://chittortech.in/cosmetic-store
12 Sept 2026
https://chittortech.in/cities/pratapgarh
12 Sept 2026
https://chittortech.in/cities/tonk
12 Sept 2026
https://chittortech.in/gift-shop
12 Sept 2026
https://chittortech.in/cities/karimnagar
11 Sept 2026
https://chittortech.in/cities/vijayawada
11 Sept 2026
https://chittortech.in/privacy-policy
11 Sept 2026
https://chittortech.in/cities/jhalawar
11 Sept 2026
https://chittortech.in/cities/kanpur
11 Sept 2026
https://chittortech.in/cities/shimla
11 Sept 2026
https://chittortech.in/cities/kolkata
11 Sept 2026
https://chittortech.in/home-decor-furniture
11 Sept 2026
https://chittortech.in/cities/dharwad
11 Sept 2026
https://chittortech.in/cities/nizamabad
11 Sept 2026
https://chittortech.in/pos
10 Sept 2026
`;

// Extract all URLs from rawText
const matches = [...rawText.matchAll(/(https?:\/\/chittortech\.in[^\s\r\n]*)/g)].map(m => m[1].trim());
const indexedSet = new Set(matches.map(u => u.toLowerCase().replace(/\/$/, '')));

console.log(`User provided ${matches.length} indexed URLs (${indexedSet.size} unique).`);

// Find unindexed URLs from sitemap
const unindexed = sitemapUrls.filter(u => {
  const norm = u.toLowerCase().replace(/\/$/, '');
  return !indexedSet.has(norm);
});

console.log(`Unindexed URLs found: ${unindexed.length}`);

// Categorize and prioritize unindexed URLs
const prioritySlugs = [
  'web-development-services',
  'android-application',
  'e-commerce-website-development',
  'b2b-lead-generation-services',
  'on-page-seo-services',
  'technical-seo-services',
  'off-page-seo-services',
  'modern-responsive-website-design',
  'payroll',
  'lead-management',
  'payment-terms',
  'small-language-models-slm',
  'large-reasoning-models-vs-llm',
  'algorithmic-seo-ai-search-rankings',
  'spatial-computing-ai-real-estate',
  'smart-manufacturing-iot-predictive-maintenance',
  'historical-data-digitization-computer-vision',
  'ai-logistics-supply-chain-predictive'
];

function scoreUrl(u) {
  const slug = u.replace(/^https?:\/\/chittortech\.in\/?/, '').toLowerCase();
  const pIdx = prioritySlugs.indexOf(slug);
  if (pIdx !== -1) return 1000 - pIdx;
  
  // Udaipur regional services (newly added)
  if (slug.endsWith('-in-udaipur')) return 800;

  // Root level high value service pages
  if (!slug.includes('/') && !slug.includes('-in-')) {
    return 600;
  }
  
  // Blog / AI Thought leadership
  if (slug.includes('ai-') || slug.includes('-ai')) return 500;

  // Major metro cities
  if (slug.startsWith('cities/')) return 400;

  return 100;
}

unindexed.sort((a, b) => scoreUrl(b) - scoreUrl(a));

// Write all unindexed to file
const unindexedPath = path.join(ROOT_DIR, 'SEO-History', 'gsc_unindexed_today.txt');
fs.writeFileSync(unindexedPath, unindexed.join('\n'), 'utf8');

// Top 15 recommended for manual indexing today
const top15 = unindexed.slice(0, 15);
const top10Path = path.join(ROOT_DIR, 'SEO-History', 'today_google_manual_10.txt');
fs.writeFileSync(top10Path, top15.slice(0, 10).join('\n'), 'utf8');

console.log('Top 15 unindexed prioritized:');
top15.forEach((u, i) => console.log(`${i + 1}. ${u}`));
