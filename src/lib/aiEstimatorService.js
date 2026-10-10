// ChittorTech Intelligent Dual-Market AI Estimator Service
// Fully compatible with Next.js Static Export & Client-Side Browser Inference
// Supports dynamic localization for English, Hindi, Arabic (UAE/Gulf), Turkish, and German

export const MARKET_CONFIGS = {
  domestic: {
    name: "Indian Domestic Market",
    flag: "🇮🇳",
    defaultCountry: "IN",
    defaultLang: "hi",
    currency: "INR",
    symbol: "₹",
    locale: "en-IN",
    badge: "Indian SME & Startup Rates",
    pricingNote: "Fair milestone-based SME pricing with zero agency markups.",
    compliance: ["100% Source Code Ownership", "GST Invoice & Tax Input Credit", "Razorpay / Cashfree & UPI", "1-Click WhatsApp Cloud API Support"],
    speedMultiplier: 1.0,
  },
  international: {
    name: "International Global Market",
    flag: "🌍",
    defaultCountry: "US",
    defaultLang: "en",
    currency: "USD",
    symbol: "$",
    locale: "en-US",
    badge: "Global Enterprise Sprints",
    pricingNote: "Up to 70% cost advantage vs Western agencies with Silicon Valley-grade code quality.",
    compliance: ["Full IP Assignment & Signed NDA", "Stripe Multi-Currency Checkout", "Cloudflare Global Edge Latency (<50ms)", "Dedicated Remote Timezone Overlap Sprints"],
    speedMultiplier: 1.2,
  },
};

export const COUNTRIES = [
  { id: "IN", name: "India", flag: "🇮🇳", currency: "INR", symbol: "₹", defaultLang: "en", supportedLangs: ["en", "hi"], market: "domestic", rateMultiplier: 1, baseMin: 15000, baseMax: 35000 },
  { id: "US", name: "United States", flag: "🇺🇸", currency: "USD", symbol: "$", defaultLang: "en", supportedLangs: ["en"], market: "international", rateMultiplier: 1, baseMin: 850, baseMax: 2800 },
  { id: "AE", name: "UAE & Dubai", flag: "🇦🇪", currency: "AED", symbol: "AED ", defaultLang: "en", supportedLangs: ["en", "ar"], market: "international", rateMultiplier: 3.67, baseMin: 3200, baseMax: 10500 },
  { id: "TR", name: "Turkey (Türkiye)", flag: "🇹🇷", currency: "TRY", symbol: "₺", defaultLang: "en", supportedLangs: ["en", "tr"], market: "international", rateMultiplier: 32.0, baseMin: 28000, baseMax: 92000 },
  { id: "DE", name: "Germany & EU", flag: "🇩🇪", currency: "EUR", symbol: "€", defaultLang: "en", supportedLangs: ["en", "de"], market: "international", rateMultiplier: 0.92, baseMin: 780, baseMax: 2550 },
  { id: "UK", name: "United Kingdom", flag: "🇬🇧", currency: "GBP", symbol: "£", defaultLang: "en", supportedLangs: ["en"], market: "international", rateMultiplier: 0.8, baseMin: 680, baseMax: 2200 },
  { id: "AU", name: "Australia", flag: "🇦🇺", currency: "AUD", symbol: "A$", defaultLang: "en", supportedLangs: ["en"], market: "international", rateMultiplier: 1.5, baseMin: 1250, baseMax: 4200 },
  { id: "GLOBAL", name: "Global / Remote", flag: "🌐", currency: "USD", symbol: "$", defaultLang: "en", supportedLangs: ["en"], market: "international", rateMultiplier: 1, baseMin: 850, baseMax: 2800 },
];

const FALLBACK_MODELS = [
  "openrouter/free",
  "qwen/qwen3.8-27b:free",
  "nvidia/nemotron-3.5-lightning:free",
  "liquid/lfm-2.5-2.6b:free"
];

export function formatCurrencyValue(num, currencyCode, symbol) {
  try {
    if (currencyCode === "INR") {
      return `₹${Number(num).toLocaleString("en-IN")}`;
    }
    if (currencyCode === "AED") {
      return `AED ${Number(num).toLocaleString("en-US")}`;
    }
    if (currencyCode === "TRY") {
      return `₺${Number(num).toLocaleString("tr-TR")}`;
    }
    if (currencyCode === "USD") {
      return `$${Number(num).toLocaleString("en-US")}`;
    }
    if (currencyCode === "EUR") {
      return `€${Number(num).toLocaleString("de-DE")}`;
    }
    if (currencyCode === "GBP") {
      return `£${Number(num).toLocaleString("en-GB")}`;
    }
    if (currencyCode === "AUD") {
      return `A$${Number(num).toLocaleString("en-AU")}`;
    }
    return `${symbol}${Number(num).toLocaleString()}`;
  } catch (e) {
    return `${symbol}${num}`;
  }
}

// ChittorTech DeepReason Heuristic Engine with Full Multi-Language Synthesis
export function generateHeuristicEstimate({
  projectType,
  description,
  timelineSpeed,
  targetAudience,
  marketMode,
  countryId,
  lang = "en"
}) {
  const selectedCountry = COUNTRIES.find((c) => c.id === countryId) || COUNTRIES.find((c) => c.market === marketMode) || COUNTRIES[0];
  const isDomestic = marketMode === "domestic" || selectedCountry.currency === "INR";

  const lowerDesc = (projectType + " " + description).toLowerCase();
  const isMobile = lowerDesc.includes("app") || lowerDesc.includes("mobile") || lowerDesc.includes("ios") || lowerDesc.includes("android") || lowerDesc.includes("جوال") || lowerDesc.includes("mobil");
  const isEcommerce = lowerDesc.includes("shop") || lowerDesc.includes("cart") || lowerDesc.includes("store") || lowerDesc.includes("commerce") || lowerDesc.includes("متجر") || lowerDesc.includes("ticaret");
  const isCRM = lowerDesc.includes("crm") || lowerDesc.includes("erp") || lowerDesc.includes("portal") || lowerDesc.includes("billing") || lowerDesc.includes("إدارة");
  const isAI = lowerDesc.includes("ai") || lowerDesc.includes("bot") || lowerDesc.includes("agent") || lowerDesc.includes("ذكاء") || lowerDesc.includes("yapay");

  let complexityMultiplier = 1.0;
  let complexityLabel = "Medium";
  let timeline = "2 - 3 Weeks";

  if (isCRM || (isMobile && isEcommerce)) {
    complexityMultiplier = 1.85;
    complexityLabel = "High";
    timeline = "4 - 6 Weeks";
  } else if (isAI) {
    complexityMultiplier = 1.5;
    complexityLabel = "High";
    timeline = "3 - 5 Weeks";
  } else if (isMobile) {
    complexityMultiplier = 1.6;
    complexityLabel = "Medium";
    timeline = "3 - 5 Weeks";
  } else if (isEcommerce) {
    complexityMultiplier = 1.35;
    complexityLabel = "Medium";
    timeline = "3 - 4 Weeks";
  } else {
    complexityMultiplier = 1.0;
    complexityLabel = "Low";
    timeline = "1 - 2 Weeks";
  }

  if (timelineSpeed && timelineSpeed.toLowerCase().includes("express")) {
    complexityMultiplier *= 1.2;
    timeline = timeline.replace(/2 - 3/, "1 - 2").replace(/3 - 5/, "2 - 3").replace(/4 - 6/, "3 - 4");
  }

  const rawMin = Math.round(selectedCountry.baseMin * complexityMultiplier);
  const rawMax = Math.round(selectedCountry.baseMax * complexityMultiplier);
  const formattedCost = `${formatCurrencyValue(rawMin, selectedCountry.currency, selectedCountry.symbol)} - ${formatCurrencyValue(rawMax, selectedCountry.currency, selectedCountry.symbol)}`;

  // Multi-Language Content Generators
  if (lang === "ar") {
    // 🇦🇪 Arabic (Dubai/UAE/Gulf)
    let arProject = "منصة سحابية فائقة الأداء بنظام Next.js 15";
    if (isEcommerce) arProject = "منصة تجارة إلكترونية متعددة العملات مع دفع فوري بالدرهم";
    else if (isMobile) arProject = "تطبيق جوال فائق السرعة لنظامي iOS و Android مع دعم Apple Pay";
    else if (isCRM) arProject = "نظام ERP سحابي متكامل لإدارة الأعمال والفوترة الضريبية";
    else if (isAI) arProject = "وكيل ذكاء اصطناعي تفاعلي مع ربط الواتساب السحابي للشركات";

    return {
      projectName: arProject,
      marketMode,
      country: selectedCountry.name,
      currency: selectedCountry.currency,
      complexity: complexityLabel === "High" ? "مرتفع" : complexityLabel === "Medium" ? "متوسط" : "قياسي",
      estimatedTimeline: timeline.replace("Weeks", "أسابيع").replace("Week", "أسبوع"),
      costEstimation: { min: rawMin, max: rawMax, currency: selectedCountry.currency, symbol: selectedCountry.symbol, formatted: formattedCost },
      thinkingProcess: [
        `المرحلة 1: تحليل متطلبات قطاع ${targetAudience || "الأعمال بدبي والخليج"} وهندسة رحلة المستخدم.`,
        `المرحلة 2: اعتماد بنية Next.js 15 مع خوادم حافة Cloudflare لسرعة استجابة فائقة أقل من 40 جزء من الثانية بالإمارات.`,
        `المرحلة 3: دمج بوابة الدفع السحابية Stripe المتوافقة مع الدرهم والبطاقات البنكية المحلية.`,
        `المرحلة 4: حساب ساعات التطوير بتوفير 70% مقارنة بالوكالات المحلية في دبي مع ضمان الجودة بنسبة 100%.`
      ],
      summary: `حل برمجي متكامل ومصمم خصيصاً لسوق ${selectedCountry.name}. يجمع بين واجهة تفاعلية فائقة السرعة، بنية سحابية لامركزية، وتكامل سلس مع بوابات الدفع والواتساب السحابي مع نقل الملكية الفكرية بالكامل.`,
      recommendedTech: {
        frontend: isMobile ? "React Native (Expo), Tailwind CSS" : "Next.js 15 (React 19), Tailwind CSS, Lucide",
        backend: "Node.js Serverless Edge Routes, JWT Authentication",
        database: "PostgreSQL (Supabase) أو Firebase Cloud Firestore",
        integrations: "Stripe Multi-Currency Checkout, Cloudflare Edge CDN, WhatsApp Cloud API"
      },
      milestones: [
        { phase: "المرحلة 1: المخطط المعماري وتصاميم Figma", duration: "3 - 5 أيام", description: "نماذج تفاعلية عالية الدقة، هندسة قاعدة البيانات، واعتماد الجدول الزمني." },
        { phase: "المرحلة 2: هندسة النظام والوحدات البرمجية", duration: "8 - 14 يوماً", description: "بناء واجهات المستخدم التفاعلية، برمجة الـ APIs، ولوحة التحكم الإدارية." },
        { phase: "المرحلة 3: الربط السحابي، الاختبار والإطلاق", duration: "4 - 7 أيام", description: "تكامل بوابات الدفع، اختبارات الأمان، والإطلاق السحابي المعتمد." }
      ],
      keyFeatures: [
        "زمن استجابة أقل من 50 ملي ثانية مدعوم بشبكة Cloudflare Edge في منطقة الخليج",
        "دفع إلكتروني آمن متعدد العملات يدعم Apple Pay وبطاقات الائتمان",
        "توقيع اتفاقية سرية المعلومات (NDA) ونقل الملكية الفكرية (IP) بالكامل",
        "تسليم الكود المصدري كاملاً على مستودع GitHub بدون أي احتكار"
      ],
      proTips: [
        "الاستعانة بفريق شيتور تك الهندسي يمنح شركتكم في دبي معايير سيليكون فالي التقنية بتوفير هائل في التكاليف."
      ]
    };
  }

  if (lang === "tr") {
    // 🇹🇷 Turkish (Turkey)
    let trProject = "Next.js 15 Yüksek Performanslı Dijital Platform";
    if (isEcommerce) trProject = "Çoklu Para Birimli Modern E-Ticaret ve Satış Platformu";
    else if (isMobile) trProject = "iOS ve Android Uyumlu Çapraz Platform Mobil Uygulama";
    else if (isCRM) trProject = "Kurumsal Operasyon, ERP ve E-Fatura Portalı";
    else if (isAI) trProject = "Otonom Yapay Zeka Müşteri Temsilcisi ve Vektör Veritabanı";

    return {
      projectName: trProject,
      marketMode,
      country: selectedCountry.name,
      currency: selectedCountry.currency,
      complexity: complexityLabel === "High" ? "Yüksek" : complexityLabel === "Medium" ? "Orta" : "Standart",
      estimatedTimeline: timeline.replace("Weeks", "Hafta").replace("Week", "Hafta"),
      costEstimation: { min: rawMin, max: rawMax, currency: selectedCountry.currency, symbol: selectedCountry.symbol, formatted: formattedCost },
      thinkingProcess: [
        `Adım 1: ${targetAudience || "Girişim ve KOBİ"} gereksinimleri analiz edildi.`,
        `Adım 2: 50ms altı küresel hız için Next.js 15 ve Cloudflare Edge CDN seçildi.`,
        `Adım 3: Güvenli Stripe / İyzico ödeme altyapısı ve WhatsApp entegrasyonu planlandı.`,
        `Adım 4: Yerli ve yabancı ajans fiyatlandırmaları kıyaslanarak %70 tasarruflu şeffaf bütçe çıkarıldı.`
      ],
      summary: `${selectedCountry.name} pazarı için tasarlanmış yüksek performanslı yazılım mimarisi. Next.js 15, güvenli bulut API'leri ve kesintisiz mobil deneyim ile tam fikri mülkiyet devri sunar.`,
      recommendedTech: {
        frontend: isMobile ? "React Native (Expo), Tailwind CSS" : "Next.js 15 (React 19), Tailwind CSS",
        backend: "Node.js Serverless Edge Routes, JWT Auth",
        database: "PostgreSQL (Supabase) / Firebase Firestore",
        integrations: "Stripe Checkout, Cloudflare CDN, WhatsApp Cloud API"
      },
      milestones: [
        { phase: "1. Aşama: Mimari Tasarım & Figma Arayüzü", duration: "3 - 5 Gün", description: "Kullanıcı deneyimi tasarımları, veritabanı şeması ve müşteri onayı." },
        { phase: "2. Aşama: Çekirdek Kodlama & Modüller", duration: "8 - 14 Gün", description: "Duyarlı arayüz geliştirme, backend API'leri ve yönetim paneli." },
        { phase: "3. Aşama: Entegrasyon, Test & Canlıya Alma", duration: "4 - 7 Gün", description: "Ödeme altyapısı, bildirim sistemleri ve Cloudflare dağıtımı." }
      ],
      keyFeatures: [
        "Cloudflare Edge ağı sayesinde Türkiye ve dünyada 50ms altı ultra hızlı açılış",
        "Kredi kartı ve çoklu para birimi destekli güvenli ödeme altyapısı",
        "İmzalı Gizlilik Sözleşmesi (NDA) ve %100 kaynak kod mülkiyeti teslimi",
        "Zaman dilimi uyumlu günlük iletişim ve düzenli sprint güncellemeleri"
      ],
      proTips: [
        "ChittorTech ile çalışmak, Silikon Vadisi standartlarında yazılımı ajans komisyonları olmadan doğrudan mühendislerden almanızı sağlar."
      ]
    };
  }

  if (lang === "de") {
    // 🇩🇪 German (Germany & EU)
    let deProject = "Next.js 15 Hochleistungs-Unternehmensplattform";
    if (isEcommerce) deProject = "Moderne Headless-E-Commerce- & Checkout-Plattform";
    else if (isMobile) deProject = "Cross-Platform iOS & Android Mobile Suite mit 60fps";
    else if (isCRM) deProject = "DSGVO-konformes Cloud-ERP & Rechnungsportal";
    else if (isAI) deProject = "Autonomer KI-Agent & RAG-Vektordatenbank";

    return {
      projectName: deProject,
      marketMode,
      country: selectedCountry.name,
      currency: selectedCountry.currency,
      complexity: complexityLabel === "High" ? "Hoch" : complexityLabel === "Medium" ? "Mittel" : "Standard",
      estimatedTimeline: timeline.replace("Weeks", "Wochen").replace("Week", "Woche"),
      costEstimation: { min: rawMin, max: rawMax, currency: selectedCountry.currency, symbol: selectedCountry.symbol, formatted: formattedCost },
      thinkingProcess: [
        `Schritt 1: Analyse der funktionalen Anforderungen für ${targetAudience || "Europäische Unternehmen"}.`,
        `Schritt 2: Architektur-Design mit Next.js 15 Server Components für DSGVO-Konformität und Sub-50ms Latenz.`,
        `Schritt 3: Integration von Stripe SEPA/Kreditkarten und Cloudflare Edge CDN.`,
        `Schritt 4: Kalkulation transparenter Meilensteinpreise mit bis zu 70 % Einsparung gegenüber DACH-Agenturen.`
      ],
      summary: `Eine maßgeschneiderte Unternehmenssoftware für den europäischen Markt. Entwickelt mit modernster reaktiver Architektur, lückenloser IP-Abtretung und maximaler Zuverlässigkeit.`,
      recommendedTech: {
        frontend: isMobile ? "React Native (Expo), Tailwind CSS" : "Next.js 15 (React 19), Tailwind CSS",
        backend: "Node.js Serverless Edge Routes, JWT Session Auth",
        database: "PostgreSQL (Supabase) / Firebase Firestore",
        integrations: "Stripe SEPA/Cards, Cloudflare Global Edge, Resend API"
      },
      milestones: [
        { phase: "Phase 1: Architektur-Blueprint & Figma-Design", duration: "3 - 5 Tage", description: "Figma UI/UX-Prototypen, Datenbankschemata und Meilenstein-Freigabe." },
        { phase: "Phase 2: Core Engineering & Modulentwicklung", duration: "8 - 14 Tage", description: "Frontend-Entwicklung, REST/GraphQL-APIs und Administrations-Cockpit." },
        { phase: "Phase 3: Integrationen, QS & Cloudflare-Launch", duration: "4 - 7 Tage", description: "Zahlungsgateway-Anbindung, Performance-Audit und produktiver Rollout." }
      ],
      keyFeatures: [
        "Latenz unter 50 ms in Frankfurt, Zürich und Wien via Cloudflare Edge CDN",
        "Vollständige DSGVO-Konformität und sichere Stripe-Zahlungsabwicklung",
        "Unterzeichnete Vertraulichkeitsvereinbarung (NDA) und 100 % Quellcode-Übergabe",
        "Tägliche asynchrone Updates und direkte Abstimmung mit Entwicklern"
      ],
      proTips: [
        "Profitieren Sie von erstklassiger Softwareentwicklung ohne ausufernde Agentur-Honorare."
      ]
    };
  }

  if (lang === "hi") {
    // 🇮🇳 Hindi / Hinglish (India)
    let hiProject = "Next.js 15 हाई-परफॉरमेंस डिजिटल वेब प्लेटफॉर्म";
    if (isEcommerce) hiProject = "मेवाड़ ई-कॉमर्स व व्हाट्सएप 1-क्लिक ऑर्डरिंग पोर्टल";
    else if (isMobile) hiProject = "क्रॉस-प्लेटफॉर्म मोबाइल ऐप (Android व iOS) + UPI पेमेंट";
    else if (isCRM) hiProject = "राजस्थान एंटरप्राइज ERP, बिलिंग और GST अकाउंटिंग हब";
    else if (isAI) hiProject = "ऑटोनॉमस AI व्हाट्सएप बिज़नेस असिस्टेंट व लीड कैप्चर";

    return {
      projectName: hiProject,
      marketMode,
      country: selectedCountry.name,
      currency: selectedCountry.currency,
      complexity: complexityLabel === "High" ? "उच्च (High)" : complexityLabel === "Medium" ? "मध्यम (Medium)" : "सरल (Standard)",
      estimatedTimeline: timeline.replace("Weeks", "सप्ताह").replace("Week", "सप्ताह"),
      costEstimation: { min: rawMin, max: rawMax, currency: selectedCountry.currency, symbol: selectedCountry.symbol, formatted: formattedCost },
      thinkingProcess: [
        `स्टेप 1: ${targetAudience || "भारतीय बिज़नेस व SME"} की आवश्यकताओं का विश्लेषण।`,
        `स्टेप 2: गूगल सर्च में #1 रैंकिंग और सब-सेकंड लोडिंग के लिए Next.js 15 व क्लाउड डेटाबेस का चयन।`,
        `स्टेप 3: 1-क्लिक व्हाट्सएप इंक्वायरी और Razorpay / Cashfree UPI गेटवे का एकीकरण।`,
        `स्टेप 4: भारतीय SME बजट के अनुसार पारदर्शी और उचित माइलस्टोन दरों की गणना।`
      ],
      summary: `भारतीय उद्यमियों के लिए तैयार किया गया संपूर्ण डिजिटल समाधान। Next.js 15, सुरक्षित क्लाउड डेटाबेस और डायरेक्ट व्हाट्सएप ऑटोमेशन के साथ — ग्राहकों की संख्या 3 गुना बढ़ाने में सक्षम।`,
      recommendedTech: {
        frontend: isMobile ? "React Native (Expo), Tailwind CSS" : "Next.js 15 (React 19), Tailwind CSS",
        backend: "Node.js Serverless Edge Routes, JWT Auth",
        database: "PostgreSQL (Supabase) / Firebase Firestore",
        integrations: "WhatsApp Cloud API, Razorpay / Cashfree UPI, Cloudflare CDN"
      },
      milestones: [
        { phase: "फेज 1: आर्किटेक्चर ब्लूप्रिंट और Figma डिज़ाइन", duration: "3 - 5 दिन", description: "Figma वायरफ्रेम, डेटाबेस मॉडल और क्लाइंट अप्रूवल।" },
        { phase: "फेज 2: कोर कोडिंग और मुख्य मॉड्यूल्स", duration: "8 - 14 दिन", description: "रिस्पॉन्सिव फ्रंटएंड, बैकएंड APIs और एडमिन कंट्रोल पैनल।" },
        { phase: "फेज 3: पेमेंट गेटवे, टेस्टिंग और लाइव लॉन्च", duration: "4 - 7 दिन", description: "UPI गेटवे, व्हाट्सएप अलर्ट्स, SEO ऑडिट और क्लाउड डिप्लॉयमेंट।" }
      ],
      keyFeatures: [
        "1-क्लिक डायरेक्ट व्हाट्सएप लीड राउटिंग — बिना कॉल इंतज़ार के ऑर्डर क्लोज़ करें",
        "ऑटोमेटेड GST-अनुकूल चालान व बिलिंग सिस्टम",
        "राजस्थान और पैन-इंडिया में 95+ गूगल पेजस्पीड स्कोर",
        "100% फुल सोर्स कोड हैंडओवर और 30 दिन की निःशुल्क वारंटी"
      ],
      proTips: [
        "क्लाउडफ्लेयर एज नेटवर्क पर डिप्लॉयमेंट से सर्वर खर्च शून्य हो जाता है और गति बेजोड़ मिलती है।"
      ]
    };
  }

  // 🌐 Default: English
  let defaultProject = "Next.js High-Performance Digital Platform";
  if (isEcommerce) defaultProject = isDomestic ? "Mewar Commerce & WhatsApp Ordering Engine" : "Global Next.js Headless E-Commerce Platform";
  else if (isMobile) defaultProject = isDomestic ? "React Native Mobile App & UPI QR Gateway" : "Cross-Platform iOS & Android Mobile Suite";
  else if (isCRM) defaultProject = isDomestic ? "Rajasthan Enterprise ERP, Invoicing & GST Hub" : "Global Enterprise Cloud CRM & Operations Portal";
  else if (isAI) defaultProject = isDomestic ? "Autonomous AI WhatsApp Business Assistant & RAG" : "Enterprise Autonomous AI Agent & Vector Engine";

  return {
    projectName: defaultProject,
    marketMode,
    country: selectedCountry.name,
    currency: selectedCountry.currency,
    complexity: complexityLabel,
    estimatedTimeline: timeline,
    costEstimation: { min: rawMin, max: rawMax, currency: selectedCountry.currency, symbol: selectedCountry.symbol, formatted: formattedCost },
    thinkingProcess: isDomestic
      ? [
          `Step 1: Analyzed requirements for ${targetAudience || "Indian SME / Retail"} domain.`,
          `Step 2: Selected Next.js 15 App Router & Server Components for sub-second page loads and #1 Google SEO ranking.`,
          `Step 3: Integrated WhatsApp Cloud API for 1-click lead capture and Razorpay / Cashfree UPI billing.`,
          `Step 4: Calibrated developer sprint hours against fair, transparent Indian SME milestone rates.`
        ]
      : [
          `Step 1: Evaluated functional specifications for ${selectedCountry.name} market standards & international compliance.`,
          `Step 2: Architected multi-region Cloudflare Edge routing, sub-50ms international latency, and Stripe payments.`,
          `Step 3: Established dedicated sprint milestones with NDA & 100% intellectual property ownership.`,
          `Step 4: Benchmarked pricing at ${formattedCost}, offering 60-70% cost savings compared to US/European agencies.`
        ],
    summary: isDomestic
      ? `A robust digital engineering solution built with Next.js 15, PostgreSQL, and instant WhatsApp business automation. Engineered specifically for Indian businesses to eliminate manual operational overhead and drive 3x customer inquiries.`
      : `An enterprise-grade software solution architected for the ${selectedCountry.name} market. Built with high-concurrency microservices, sub-second global edge CDN caching, and seamless Stripe multi-currency checkout with complete IP assignment.`,
    recommendedTech: {
      frontend: isMobile ? "React Native (Expo), Tailwind CSS" : "Next.js 15 (React 19), Tailwind CSS, Lucide Icons",
      backend: "Node.js Serverless Edge Routes, JWT Session Auth",
      database: "PostgreSQL (Supabase) or Firebase Cloud Firestore",
      integrations: isDomestic 
        ? "WhatsApp Cloud API, Razorpay / Cashfree UPI, Cloudflare CDN"
        : "Stripe Multi-Currency Checkout, Cloudflare Global Edge, SendGrid / Resend API, Supabase Realtime"
    },
    milestones: [
      {
        phase: "Phase 1: Architecture Blueprint & Wireframes",
        duration: "3 - 5 Days",
        description: "Figma UI/UX prototypes, database schema modeling, and client milestone sign-off."
      },
      {
        phase: "Phase 2: Core Engineering & Modules Sprints",
        duration: "8 - 14 Days",
        description: "Full responsive UI implementation, API route endpoints, and administrative control center."
      },
      {
        phase: "Phase 3: Integrations, QA & Global Launch",
        duration: "4 - 7 Days",
        description: isDomestic
          ? "Payment gateway, WhatsApp notifications, SEO indexing, and production deployment."
          : "Stripe checkout, multi-region CDN edge caching, security pentest, and production handover."
      }
    ],
    keyFeatures: isDomestic
      ? [
          "Direct WhatsApp 1-Click customer routing — close leads without manual call delays",
          "Automated GST-compliant invoice PDF generation & accounting sync",
          "Lightning-fast Google PageSpeed 95+ score for Rajasthan & pan-India search visibility",
          "100% full source code transfer and 30 days post-launch warranty"
        ]
      : [
          "Sub-50ms global latency delivered via Cloudflare Edge network across 300+ cities",
          "Seamless Stripe multi-currency processing with local payment methods (Apple Pay, Google Pay, Cards)",
          "Signed Mutual NDA, complete intellectual property (IP) assignment, and clean GitHub repository handover",
          "Daily async updates via Slack/Loom and scheduled timezone-aligned sync calls"
        ],
    proTips: [
      isDomestic
        ? "Deploying on Cloudflare Edge provides zero server hosting maintenance costs while giving your business instant enterprise speed."
        : "Leveraging our remote engineering squad in Chittorgarh gives you Silicon Valley tech expertise at a fraction of local agency retainers."
    ]
  };
}

// Master Function: Calls OpenRouter directly or falls back to DeepReason Heuristic Engine
export async function generateDualMarketEstimate({
  projectType,
  description,
  timelineSpeed = "Standard",
  targetAudience = "General Business",
  marketMode = "domestic",
  countryId = "IN",
  lang = "en"
}) {
  const selectedCountry = COUNTRIES.find((c) => c.id === countryId) || COUNTRIES[0];
  const isDomestic = marketMode === "domestic";

  const apiKey = (typeof process !== "undefined" && (process.env.NEXT_PUBLIC_OPENROUTER_API_KEY || process.env.OPENROUTER_API_KEY)) || "";

  // If no API key is set, immediately use heuristic engine without failing
  if (!apiKey || apiKey.trim() === "") {
    return {
      success: true,
      modelUsed: "ChittorTech DeepReason Engine (Auto-Calibrated)",
      estimation: generateHeuristicEstimate({ projectType, description, timelineSpeed, targetAudience, marketMode, countryId, lang }),
    };
  }

  const systemPrompt = `You are ChittorTech's Principal Solutions Architect & Chief Estimator (Agent Kaira).
ChittorTech is a premier digital engineering startup based in Chittorgarh, Rajasthan, India, building state-of-the-art Next.js 15 web applications, React Native mobile apps, custom CRMs, and autonomous AI agents.

CURRENT MARKET CONTEXT:
- Mode: ${isDomestic ? "DOMESTIC INDIAN MARKET (🇮🇳 INDIA)" : `INTERNATIONAL GLOBAL MARKET (🌍 ${selectedCountry.name})`}
- Target Currency: ${selectedCountry.currency} (${selectedCountry.symbol})
- Required Output Language: ${lang} (${lang === "ar" ? "Arabic" : lang === "tr" ? "Turkish" : lang === "de" ? "German" : lang === "hi" ? "Hindi" : "English"})
${lang === "ar" ? "CRITICAL: The entire output (summary, milestones, keyFeatures, proTips) MUST be written in professional, natural Arabic suitable for Dubai/UAE/Gulf clients." : ""}
${lang === "tr" ? "CRITICAL: The entire output (summary, milestones, keyFeatures, proTips) MUST be written in natural Turkish suitable for Turkey tech founders." : ""}
${lang === "de" ? "CRITICAL: The entire output (summary, milestones, keyFeatures, proTips) MUST be written in professional German suitable for European clients." : ""}

CRITICAL INSTRUCTION:
Output ONLY a single valid, parseable JSON object without markdown fences (\`\`\`json), comments, or surrounding text.
JSON Structure:
{
  "projectName": "Title in ${lang}",
  "marketMode": "${marketMode}",
  "country": "${selectedCountry.name}",
  "currency": "${selectedCountry.currency}",
  "thinkingProcess": [ "Step 1 in ${lang}...", "Step 2...", "Step 3...", "Step 4..." ],
  "summary": "2 clear sentences in ${lang} detailing technical architecture and business outcome.",
  "complexity": "Low" | "Medium" | "High",
  "recommendedTech": {
    "frontend": "e.g., Next.js 15, Tailwind CSS",
    "backend": "e.g., Node.js Serverless Edge Routes",
    "database": "e.g., PostgreSQL (Supabase)",
    "integrations": "e.g., Stripe, Cloudflare Edge"
  },
  "estimatedTimeline": "e.g., 2 - 3 Weeks",
  "costEstimation": {
    "min": ${selectedCountry.baseMin},
    "max": ${selectedCountry.baseMax},
    "currency": "${selectedCountry.currency}",
    "symbol": "${selectedCountry.symbol}",
    "formatted": "${selectedCountry.symbol}..."
  },
  "milestones": [
    { "phase": "Phase in ${lang}", "duration": "Duration in ${lang}", "description": "Description in ${lang}" }
  ],
  "keyFeatures": [ "Feature 1 in ${lang}", "Feature 2...", "Feature 3...", "Feature 4..." ],
  "proTips": [ "Strategic recommendation in ${lang}" ]
}`;

  const userPrompt = `Project Archetype: ${projectType}
Timeline Preference: ${timelineSpeed}
Target Industry / Audience: ${targetAudience}
Market Mode: ${marketMode} (${selectedCountry.name})
Output Language: ${lang}
Project Requirements:
"""
${description}
"""

Generate the structured JSON estimation now.`;

  for (const model of FALLBACK_MODELS) {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": "https://chittortech.in",
          "X-Title": "ChittorTech Project Estimator",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: model,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
          ],
          temperature: 0.35,
          max_tokens: 1600
        }),
        signal: AbortSignal.timeout(6000)
      });

      if (!response.ok) continue;

      const data = await response.json();
      const rawContent = data.choices?.[0]?.message?.content;
      if (!rawContent) continue;

      let cleaned = rawContent.trim();
      if (cleaned.startsWith("```json")) {
        cleaned = cleaned.replace(/^```json/, "").replace(/```$/, "").trim();
      } else if (cleaned.startsWith("```")) {
        cleaned = cleaned.replace(/^```/, "").replace(/```$/, "").trim();
      }

      const firstBrace = cleaned.indexOf("{");
      const lastBrace = cleaned.lastIndexOf("}");
      if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
        cleaned = cleaned.substring(firstBrace, lastBrace + 1);
      }

      const parsed = JSON.parse(cleaned);
      if (parsed && parsed.projectName && parsed.costEstimation) {
        return {
          success: true,
          modelUsed: model,
          estimation: parsed
        };
      }
    } catch (err) {
      console.warn(`OpenRouter model ${model} timed out or invalid JSON:`, err.message);
      // Immediately fallback to DeepReason for instant sub-second user experience
      break;
    }
  }

  return {
    success: true,
    modelUsed: "ChittorTech DeepReason Engine (Auto-Calibrated)",
    estimation: generateHeuristicEstimate({ projectType, description, timelineSpeed, targetAudience, marketMode, countryId, lang }),
  };
}
