"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

const INDUSTRY_PRESETS = [
  {
    id: "dharamshala",
    name: "धर्मशाला एवं तीर्थ ट्रस्ट",
    tabLabel: "धर्मशाला एवं ट्रस्ट (हिंदी)",
    icon: "fa-gopuram",
    badge: "100% पारदर्शी ट्रस्ट प्रबंधन",
    color: "#d97706",
    accentBg: "#fffbeb",
    borderCol: "#fde68a",
    defaultLang: "hindi",
    isHindi: true,
    sampleLead: {
      name: "श्री श्याम धाम सेवा ट्रस्ट एवं अतिथि भवन",
      city: "खाटू श्याम जी, सीकर / सालासर / नाथद्वारा (राजस्थान)",
      rating: "4.9 ★ (420+ समीक्षाएं)",
      hasWebsite: false,
      category: "धर्मशाला, अतिथि गृह एवं धार्मिक ट्रस्ट",
    },
    pitchHindi: `*सादर प्रणाम प्रबंधक महोदय / ट्रस्ट प्रबंधन* 🙏

मैं *कुश शर्मा (संस्थापक, चित्तौड़टेक)*, आपके सम्मानित धाम में स्थित *श्री श्याम धाम सेवा ट्रस्ट* के प्रबंधन को और अधिक पारदर्शी, व्यवस्थित व सुगम बनाने हेतु यह छोटा सा प्रस्ताव रख रहा हूँ।

✨ *धर्मशाला एवं ट्रस्ट मैनेजमेंट सिस्टम की मुख्य सुविधाएं:*
🏨 *लाइव कमरा स्थिति डैशबोर्ड* — काउंटर एवं मोबाइल पर रियल-टाइम दिखेगा कि कितने कमरे बुक हैं और कितने खाली हैं।
🧾 *2-तरफा डिजिटल रसीद (Check-In & Check-Out)* — चेक-इन रसीद और चेक-आउट सेटलमेंट रसीद (तुरंत WhatsApp पर श्रद्धालु को पक्की रसीद)।
🍲 *भोजनशाला एवं आहार कूपन सिस्टम* — श्रद्धालुओं के लिए डिजिटल भोजन कूपन और थाली पास व्यवस्था।
💰 *100% पारदर्शी दान-पुण्य एवं कमरा किराया* — सारा भुगतान सीधे ट्रस्ट के बैंक खाते में (Zero Cash Leakage)।
⚙️ *ट्रस्ट के नियमानुसार 100% कस्टमाइज़ेबल* — आपके ट्रस्ट के नियमों, कमरों के प्रकार व रसीद फॉर्मेट अनुसार सॉफ्टवेयर में बदलाव किया जा सकता है।
🔒 *सुरक्षित ट्रस्ट अकाउंटिंग एवं क्लाउड ऑडिट* — ट्रस्टीज़ के लिए पारदर्शी हिसाब-किताब व ऑनलाइन रिकॉर्ड्स।

क्या हम प्रबंधन समिति के साथ 2 मिनट का निःशुल्क लाइव डेमो या फोन पर चर्चा कर सकते हैं?

सादर प्रणाम,
*कुश शर्मा (संस्थापक)*
*चित्तौड़टेक (ChittorTech)*
🌐 https://chittortech.in
📞 +91 75974 51057
📍 चित्तौड़गढ़ • भीलवाड़ा • उदयपुर (राजस्थान)`,
    pitchEnglish: `*सादर प्रणाम ट्रस्टीज़ एवं प्रबंधन समिति* 🙏

चित्तौड़टेक द्वारा प्रमुख तीर्थ क्षेत्रों एवं धर्मशालाओं के लिए विशेष रूप से डिज़ाइन किया गया ट्रस्ट मैनेजमेंट सिस्टम:

1. ऑनलाइन एवं काउंटर कमरा आवंटन (Zero Middlemen & No Overbooking)
2. WhatsApp पर डिजिटल रसीद व दान (80G) टैक्स सर्टिफिकेट
3. भोजनशाला थाली पास एवं श्रद्धालु कूपन व्यवस्था
4. दैनिक आय-व्यय व ट्रस्ट ऑडिटिंग रजिस्टर

क्या हम प्रबंधन समिति के साथ 2 मिनट की संक्षिप्त चर्चा कर सकते हैं?

सादर,
चित्तौड़टेक टीम (ChittorTech)
फोन: +91 75974 51057 | वेबसाइट: https://chittortech.in`,
    highlights: [
      "काउंटर एवं मोबाइल पर लाइव कमरा स्थिति व रसीद प्रिंटर",
      "श्रद्धालुओं को WhatsApp पर तुरंत डिजिटल चेक-इन/आउट पर्ची",
      "भोजनशाला थाली कूपन, दान-पुण्य व 80G टैक्स रसीद पोर्टल",
      "सीधे ट्रस्ट के बैंक खाते में भुगतान (Zero Cash Leakage)"
    ]
  },
  {
    id: "marble",
    name: "Marble & Granite Manufacturers",
    tabLabel: "Marble & Granite",
    icon: "fa-cubes",
    badge: "Export & Pan-India Wholesalers",
    color: "#2563eb",
    accentBg: "#eff6ff",
    borderCol: "#bfdbfe",
    defaultLang: "english",
    isHindi: false,
    sampleLead: {
      name: "Mewar Royal Granite & Marbles",
      city: "Bhilwara / Chittorgarh / Kishangarh, Rajasthan",
      rating: "4.8 ★ (134 Google Reviews)",
      hasWebsite: true,
      category: "Stone Manufacturer & Global Exporter",
    },
    pitchHindi: `*Namaste Mewar Royal Granite & Marbles* 🙏\n\nMain *ChittorTech* se connect kar raha hoon. Hum stone manufacturers aur exporters ke operations aur sales ko digitalize karke unka direct buyers reach multiply karte hain:\n\n🌐 *High-Impact Corporate Website* — International buyers direct order karte hain.\n🎯 *1-Link Live Digital Slab Catalogue* — Instant slab sizes & finish preview with zero WhatsApp photo clutter.\n💰 *Zero Brokerage & High Profit* — Direct inquiries without middlemen cut.\n📱 *Factory ERP & Block Tracking* — Block cutting, slab stock & GST billing in simple cloud software.\n\nKya hum is hafte 2-minute call par live demo share kar sakte hain?\n\nWarm regards,\n*ChittorTech* | 📞 +91 75974 51057`,
    pitchEnglish: `Subject: B2B Digital Catalogue, Factory ERP & Direct Export Inquiries for Mewar Royal Granite & Marbles

Dear Management,

Greetings from ChittorTech, Western India's premier B2B technology engineering firm.

We partner with leading stone, marble, and granite manufacturers across Bhilwara & Rajasthan to modernize their sales infrastructure and drive high-margin bulk orders:

1. Modern B2B Corporate Website (Mobile-first, international buyer & exporter ready)
2. 1-Link Live Digital Stone Catalogue (Share high-res slabs and live stock in 1 interactive link)
3. Custom Factory ERP (Block-to-slab cutting, batch stock, GST billing & dispatch)
4. Rank #1 on Google for high-intent marble buyer and architect search queries

Could we schedule a quick 2-minute preview call to demonstrate how our platform accelerates direct sales?

Best regards,
ChittorTech Team
Website: https://chittortech.in
Phone / WhatsApp: +91 75974 51057`,
    highlights: [
      "1-Click Live Slab Catalogue eliminates messy WhatsApp photo sharing",
      "Direct pan-India & overseas export buyer lead capture",
      "Factory Block-to-Slab Cutting & Inventory ERP integration",
      "Top Google Ranking for high-ticket stone buyer queries"
    ]
  },
  {
    id: "hotel",
    name: "Hotels & Luxury Resorts",
    tabLabel: "Hotels & Resorts",
    icon: "fa-hotel",
    badge: "0% Commission Direct Bookings",
    color: "#0891b2",
    accentBg: "#ecfeff",
    borderCol: "#a5f3fc",
    defaultLang: "english",
    isHindi: false,
    sampleLead: {
      name: "Lakefront Heritage Palace & Resort",
      city: "Udaipur / Jaipur / Kumbhalgarh, Rajasthan",
      rating: "4.7 ★ (310 Google Reviews)",
      hasWebsite: true,
      category: "Boutique Hotel & Heritage Resort",
    },
    pitchHindi: `*Hello Team Lakefront Heritage Palace* 🙏\n\nGreetings from *ChittorTech*.\n\nHum Rajasthan ke boutique hotels & resorts ke liye direct guest bookings aur revenue boost karne ke custom tech solutions engineer karte hain:\n\n💰 *Save 20-25% OTA Commission* — Direct website guest booking system.\n🌐 *Luxury Direct Booking Engine* — Ultra-fast mobile UI for high-paying tourists.\n📱 *Hotel ERP & Multi-counter KOT Billing* — Room inventory, check-in/out & GST invoices.\n\nWould you be open for a quick 5-minute preview call this week?\n\nBest regards,\n*ChittorTech* | 📞 +91 75974 51057`,
    pitchEnglish: `Subject: Direct Booking Engine & 0% Commission Website for Lakefront Heritage Palace

Hello Team,

Greetings from ChittorTech. We engineer custom high-converting direct booking engines and hotel management software for premium boutique resorts across Rajasthan:

Key Advantages for Your Property:
- Save 20-25% in OTA commissions with direct guest website checkout
- Instant WhatsApp booking confirmations with driving directions & digital room slips
- Integrated Hotel PMS & Multi-counter Restaurant KOT billing
- Top Google Hotel Search visibility for direct tourist inquiries

Would you be open for a brief 5-minute live demonstration this week?

Best regards,
ChittorTech Team
Website: https://chittortech.in
Phone: +91 75974 51057`,
    highlights: [
      "Direct booking engine saves 20-25% OTA commissions per room",
      "Instant WhatsApp booking confirmations with maps & room details",
      "Integrated Hotel PMS, room service KOT & GST billing",
      "High-speed mobile UI crafted for premium domestic & foreign tourists"
    ]
  },
  {
    id: "textile",
    name: "Textile Mills & Fabrics",
    tabLabel: "Textiles & Mills",
    icon: "fa-tshirt",
    badge: "B2B Fabric Catalogues & Orders",
    color: "#059669",
    accentBg: "#ecfdf5",
    borderCol: "#a7f3d0",
    defaultLang: "english",
    isHindi: false,
    sampleLead: {
      name: "Sangam Mewar Synthetic & Suiting Mills",
      city: "Bhilwara (Textile City), Rajasthan",
      rating: "4.6 ★ (88 Google Reviews)",
      hasWebsite: true,
      category: "Textile Manufacturer & Wholesale Suiting",
    },
    pitchHindi: `*Namaste Sangam Mewar Synthetic Mills* 🙏\n\nHum textile manufacturers aur exporters ke sales aur operations ko expand karne ke liye custom digital platforms build karte hain:\n\n🌐 *B2B Digital Fabric Catalogue* — Pan-India dealers ke liye live stock & shade card portfolio.\n💼 *Yarn-to-Fabric Production ERP* — Loom production & dispatch balance tracking.\n📊 *Dealer Order Mobile Portal* — Instant wholesale orders directly from dealers.\n\nKya hum is hafte 2-minute call par demo share kar sakte hain?\n\nWarm regards,\n*ChittorTech* | 📞 +91 75974 51057`,
    pitchEnglish: `Subject: B2B Digital Fabric Catalogue & Production ERP for Sangam Mewar Synthetic Mills

Dear Management,

We build specialized B2B digital portals and production ERPs for textile manufacturers in Bhilwara & Western India:

1. Interactive Fabric & Suiting Shade Card Portal for Pan-India Wholesalers
2. Real-time Loom & Weaving Production Tracking ERP
3. 1-Click Dealer Bulk Ordering Mobile App
4. Verified B2B Wholesale Buyer Acquisition & Google Visibility

Could we connect for a brief 2-minute preview this week?

Warm regards,
ChittorTech Team
Website: https://chittortech.in
Phone: +91 75974 51057`,
    highlights: [
      "Digital shade cards & fabric GSM catalogues for Pan-India distributors",
      "Direct bulk wholesale inquiries without commission agents",
      "Loom-to-dispatch production tracking and yarn stock ERP",
      "Dealer mobile ordering app with live dispatch notifications"
    ]
  },
  {
    id: "transport",
    name: "Transport & Logistics",
    tabLabel: "Transport & Logistics",
    icon: "fa-truck-moving",
    badge: "Fleet & Freight Operations",
    color: "#ea580c",
    accentBg: "#fff7ed",
    borderCol: "#fed7aa",
    defaultLang: "english",
    isHindi: false,
    sampleLead: {
      name: "Chittor Mewar Freight Logistics & Fleet",
      city: "Chittorgarh / Nimbahera / Kota, Rajasthan",
      rating: "4.5 ★ (95 Google Reviews)",
      hasWebsite: false,
      category: "Heavy Freight Logistics & Transport",
    },
    pitchHindi: `*Namaste Chittor Mewar Freight Logistics* 🙏\n\nHum Rajasthan ke fleet operators ke operations ko automate aur freight inquiries multiply karne ke software solutions build karte hain:\n\n🚚 *Live Bilty / LR Management* — Digital Bilty with instant WhatsApp delivery.\n📦 *Consignment Tracking* — Factory clients check live consignment status.\n💰 *Fleet Trip & Diesel Register* — Profit/loss report per vehicle.\n\nKya hum is hafte 2-minute call par live demo share kar sakte hain?\n\nWarm regards,\n*ChittorTech* | 📞 +91 75974 51057`,
    pitchEnglish: `Subject: Digital Bilty (LR), Fleet ERP & Corporate Freight Acquisition

Dear Management,

We build specialized digital logistics platforms for transport and fleet operators across Mewar & Rajasthan:
- Cloud Bilty (LR) generation & automated WhatsApp delivery receipts
- Diesel expense, trip balance and fleet maintenance audit tracker
- Direct corporate factory contracts through high Google search positioning

Would you be open for a quick demo call this week?

Best regards,
ChittorTech Team
Website: https://chittortech.in
Phone: +91 75974 51057`,
    highlights: [
      "Automated digital Bilty / LR generation with 1-click WhatsApp delivery",
      "Fleet trip profit & diesel mileage auditing software",
      "Direct corporate freight and factory consignment leads",
      "End-to-end dispatch and driver settlement management"
    ]
  }
];

const FAQS = [
  {
    q: "How does ChittorTech's Automated B2B Lead Generation Engine work?",
    a: "Our engine combines three layers: (1) Real-time Google Maps & Places intelligence scraping to extract authentic business contacts (phone numbers, addresses, websites, ratings) for any specific niche or city; (2) An industry-tuned AI personalization engine that crafts context-specific value pitches addressing each business's exact revenue and pain points; and (3) A 1-click multi-channel dispatch system (WhatsApp Web/API, Email, Cloud Dialer) backed by a full Firestore CRM pipeline."
  },
  {
    q: "Why is this better than buying static lead databases or generic cold calling?",
    a: "Static lead databases are notoriously outdated—over 60% of numbers are dead or inactive, and generic mass spam gets immediately blocked. ChittorTech's engine extracts live, real-time data directly from Google Maps daily, ensuring 100% active operational businesses. Furthermore, our AI crafts hyper-personalized, value-driven messages that achieve over 5x higher response rates compared to standard cold outreach."
  },
  {
    q: "क्या धर्मशाला और तीर्थ ट्रस्टों के लिए संपूर्ण विवरण हिंदी में उपलब्ध है?",
    a: "हाँ, चित्तौड़टेक का धर्मशाला एवं ट्रस्ट मैनेजमेंट सिस्टम पूरी तरह से सरल हिंदी और देवनागरी लिपि में उपलब्ध है। काउंटर रसीद, कमरा स्थिति, भोजनशाला कूपन और दान रसीदें हिंदी में प्रिंट होती हैं और श्रद्धालुओं के WhatsApp पर भी हिंदी में भेजी जाती हैं।"
  },
  {
    q: "Can this system be customized for my specific business or in-house sales team?",
    a: "Absolutely! We provide both done-for-you lead generation services where we deliver verified, qualified buyer inquiries directly to your sales desk, as well as deployable custom SaaS lead generator tools and CRM portals built specifically for your in-house team."
  },
  {
    q: "Is there an integrated CRM to track which leads replied or converted?",
    a: "Yes! Every extracted lead is automatically organized into an interactive pipeline tracker (Cold → Contacted → In Discussion → Demo Scheduled → Closed Won). You can write timestamped follow-up notes, filter by city or status, assign deals to sales reps, and export clean data to Excel/CSV with one click."
  }
];

export default function B2BLeadGenerationPage() {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRY_PRESETS[0]);
  const [activePitchTab, setActivePitchTab] = useState("hindi");
  const [copiedState, setCopiedState] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  // Industry selection with default language assignment
  const handleSelectIndustry = (ind) => {
    setSelectedIndustry(ind);
    setActivePitchTab(ind.defaultLang);
  };

  // Interactive ROI Calculator State
  const [monthlyOutreach, setMonthlyOutreach] = useState(300);
  const [dealValue, setDealValue] = useState(75000);
  const [conversionRate, setConversionRate] = useState(4);

  const estimatedDeals = useMemo(() => {
    return Math.max(1, Math.round((monthlyOutreach * (conversionRate / 100))));
  }, [monthlyOutreach, conversionRate]);

  const estimatedRevenue = useMemo(() => {
    return estimatedDeals * dealValue;
  }, [estimatedDeals, dealValue]);

  const hoursSavedWeekly = useMemo(() => {
    return Math.round((monthlyOutreach * 0.22) / 4);
  }, [monthlyOutreach]);

  const handleCopyPitch = () => {
    const textToCopy = activePitchTab === "hindi" ? selectedIndustry.pitchHindi : selectedIndustry.pitchEnglish;
    navigator.clipboard.writeText(textToCopy);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2200);
  };

  const handleOpenWhatsAppTest = () => {
    const textToCopy = activePitchTab === "hindi" ? selectedIndustry.pitchHindi : selectedIndustry.pitchEnglish;
    const url = `https://wa.me/917597451057?text=${encodeURIComponent("Namaste ChittorTech! I want to explore the B2B Lead Generation Engine for my business.\n\nSample Pitch Preview:\n" + textToCopy.slice(0, 220) + "...")}`;
    window.open(url, "_blank");
  };

  return (
    <div className="b2b-wrapper">
      
      {/* ─────────────────────────────────────────────────────────────
          STRICT BULLETPROOF RESPONSIVE CSS
      ───────────────────────────────────────────────────────────── */}
      <style>{`
        .b2b-wrapper {
          background-color: #ffffff;
          color: #0f172a;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
          box-sizing: border-box;
        }

        .b2b-wrapper *, .b2b-wrapper *::before, .b2b-wrapper *::after {
          box-sizing: border-box;
        }

        .b2b-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 16px;
          width: 100%;
        }

        /* ─── Hero Section ─── */
        .b2b-hero {
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          padding: 110px 0 50px;
          border-bottom: 1px solid #e2e8f0;
          text-align: center;
        }

        .b2b-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #1d4ed8;
          margin-bottom: 16px;
        }

        .b2b-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.9rem, 4vw, 3.2rem);
          font-weight: 800;
          line-height: 1.2;
          color: #0f172a;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }

        .b2b-title span {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .b2b-subtitle {
          font-size: clamp(0.95rem, 1.6vw, 1.12rem);
          color: #475569;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto 28px;
        }

        .b2b-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 36px;
        }

        .b2b-btn-blue {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 24px;
          background: #2563eb;
          color: #ffffff !important;
          font-size: 0.95rem;
          font-weight: 700;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(37,99,235,0.25);
          transition: all 0.2s;
          border: none;
          cursor: pointer;
        }

        .b2b-btn-blue:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .b2b-btn-green {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 22px;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          color: #059669 !important;
          font-size: 0.95rem;
          font-weight: 700;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.2s;
        }

        .b2b-btn-green:hover {
          background: #d1fae5;
        }

        /* ─── Highlights Row ─── */
        .b2b-metrics-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          width: 100%;
        }

        .b2b-metric-item {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px;
          text-align: left;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }

        .b2b-metric-val {
          font-size: 1.35rem;
          font-weight: 800;
          margin-bottom: 2px;
        }

        .b2b-metric-lbl {
          font-size: 0.78rem;
          color: #64748b;
          line-height: 1.35;
        }

        /* ─── Tabs & Simulator (Non-scrollable Box Grid) ─── */
        .b2b-tabs-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 10px;
          width: 100%;
          margin-bottom: 24px;
        }

        .b2b-tab-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #334155;
          transition: all 0.2s;
          text-align: center;
          box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }

        .b2b-tab-pill.active {
          border-color: #2563eb;
          background: #eff6ff;
          color: #2563eb;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(37,99,235,0.15);
        }

        .b2b-sim-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 20px;
          width: 100%;
        }

        .b2b-box-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 20px;
          box-shadow: 0 4px 16px rgba(15,23,42,0.04);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        /* ─── ROI Calculator Boxes ─── */
        .b2b-calc-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 20px;
          width: 100%;
        }

        .b2b-calc-input-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 22px;
          box-shadow: 0 4px 16px rgba(15,23,42,0.04);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .b2b-calc-output-box {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          border: 2px solid #a7f3d0;
          border-radius: 14px;
          padding: 22px;
          box-shadow: 0 4px 20px rgba(16,185,129,0.08);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* ─── Responsive Queries ─── */
        @media (max-width: 992px) {
          .b2b-metrics-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .b2b-sim-grid {
            grid-template-columns: 1fr;
          }
          .b2b-calc-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .b2b-hero {
            padding: 85px 0 40px;
          }
          .b2b-metrics-row {
            grid-template-columns: 1fr;
          }
          .b2b-actions {
            flex-direction: column;
          }
          .b2b-btn-blue, .b2b-btn-green {
            width: 100%;
          }
          .b2b-tabs-container {
            grid-template-columns: 1fr;
            gap: 8px;
            overflow-x: visible;
          }
          .b2b-tab-pill {
            width: 100%;
            justify-content: flex-start;
            padding: 10px 14px;
            font-size: 0.88rem;
          }
          .b2b-box-card, .b2b-calc-input-box, .b2b-calc-output-box {
            padding: 16px;
          }
        }
      `}</style>

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="b2b-hero">
        <div className="b2b-container">
          
          <div className="b2b-badge">
            <i className="fa-solid fa-map-location-dot" />
            <span>Google Maps Intelligence • AI Outreach • B2B Sales Automation</span>
          </div>

          <h1 className="b2b-title">
            Multiply Your B2B Sales with ChittorTech&apos;s{" "}
            <span>Automated Lead System</span>
          </h1>

          <p className="b2b-subtitle">
            Extract 100% verified, authentic business contacts directly from <strong>Google Maps</strong>. Generate tailored value pitches for WhatsApp &amp; Email in seconds, and track high-ticket deals through a unified CRM pipeline.
          </p>

          <div className="b2b-actions">
            <a href="#simulator-section" className="b2b-btn-blue">
              <i className="fa-solid fa-wand-magic-sparkles" />
              <span>Explore Live Lead Simulator</span>
            </a>

            <a
              href="https://wa.me/917597451057?text=Namaste%20ChittorTech!%20I%20want%20to%20grow%20my%20business%20sales%20with%20your%20B2B%20Lead%20Generation%20Services."
              target="_blank"
              rel="noopener noreferrer"
              className="b2b-btn-green"
            >
              <i className="fa-brands fa-whatsapp" style={{ fontSize: "1.15rem" }} />
              <span>WhatsApp Consultation (+91 75974 51057)</span>
            </a>
          </div>

          {/* 4 Metrics Box Cards */}
          <div className="b2b-metrics-row">
            <div className="b2b-metric-item">
              <div className="b2b-metric-val" style={{ color: "#2563eb" }}>100% Verified</div>
              <div className="b2b-metric-lbl">Live Google Maps &amp; Places extraction without dead static databases.</div>
            </div>
            <div className="b2b-metric-item">
              <div className="b2b-metric-val" style={{ color: "#7c3aed" }}>AI Tailored</div>
              <div className="b2b-metric-lbl">Industry-specific Hindi &amp; English value propositions.</div>
            </div>
            <div className="b2b-metric-item">
              <div className="b2b-metric-val" style={{ color: "#059669" }}>5x Responses</div>
              <div className="b2b-metric-lbl">1-Click WhatsApp dispatch &amp; multi-stage CRM tracking.</div>
            </div>
            <div className="b2b-metric-item">
              <div className="b2b-metric-val" style={{ color: "#d97706" }}>&lt; 10s Speed</div>
              <div className="b2b-metric-lbl">From local query to fully drafted enterprise pitch in seconds.</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. HOW IT WORKS (4 Step Process Cards)
      ───────────────────────────────────────────────────────────── */}
      <section style={{ padding: "60px 0", background: "#ffffff", borderBottom: "1px solid #e2e8f0" }}>
        <div className="b2b-container">
          
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 36px" }}>
            <div style={{ fontSize: "0.8rem", fontWeight: "800", color: "#2563eb", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>
              HOW IT WORKS
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", fontWeight: "800", color: "#0f172a", margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              4-Step Automated Sales Pipeline
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px" }}>
              <div style={{ width: "38px", height: "38px", borderRadius: "8px", background: "#eff6ff", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", marginBottom: "12px" }}>
                <i className="fa-solid fa-map-location-dot" />
              </div>
              <div style={{ fontSize: "0.72rem", fontWeight: "800", color: "#2563eb", textTransform: "uppercase", marginBottom: "4px" }}>Step 01 • Data Extraction</div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#0f172a", marginBottom: "8px" }}>Live Google Maps Scraper</h3>
              <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: "1.5", margin: 0 }}>
                Extracts operational businesses with verified phone numbers, official addresses, ratings, and website status.
              </p>
            </div>

            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px" }}>
              <div style={{ width: "38px", height: "38px", borderRadius: "8px", background: "#f5f3ff", color: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", marginBottom: "12px" }}>
                <i className="fa-solid fa-microchip" />
              </div>
              <div style={{ fontSize: "0.72rem", fontWeight: "800", color: "#7c3aed", textTransform: "uppercase", marginBottom: "4px" }}>Step 02 • Niche AI Engine</div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#0f172a", marginBottom: "8px" }}>Pain-Point Diagnosis</h3>
              <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: "1.5", margin: 0 }}>
                Identifies industry bottlenecks: lost OTA fees in hotels, manual slips in dharamshalas, missing slab catalogues in stone.
              </p>
            </div>

            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px" }}>
              <div style={{ width: "38px", height: "38px", borderRadius: "8px", background: "#ecfdf5", color: "#059669", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", marginBottom: "12px" }}>
                <i className="fa-solid fa-message" />
              </div>
              <div style={{ fontSize: "0.72rem", fontWeight: "800", color: "#059669", textTransform: "uppercase", marginBottom: "4px" }}>Step 03 • AI Messaging</div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#0f172a", marginBottom: "8px" }}>Hindi &amp; English Pitches</h3>
              <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: "1.5", margin: 0 }}>
                Generates culturally tailored value propositions highlighting direct revenue, profit, and software demos.
              </p>
            </div>

            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px" }}>
              <div style={{ width: "38px", height: "38px", borderRadius: "8px", background: "#fffbeb", color: "#d97706", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", marginBottom: "12px" }}>
                <i className="fa-solid fa-chart-pie" />
              </div>
              <div style={{ fontSize: "0.72rem", fontWeight: "800", color: "#d97706", textTransform: "uppercase", marginBottom: "4px" }}>Step 04 • Multi-Channel CRM</div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#0f172a", marginBottom: "8px" }}>1-Click Outreach &amp; Sync</h3>
              <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: "1.5", margin: 0 }}>
                1-Click WhatsApp dispatch, direct dialer calling, email drafting, and real-time CRM stage tracking.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. INTERACTIVE SIMULATOR (Dharamshala = Hindi, Others = English)
      ───────────────────────────────────────────────────────────── */}
      <section id="simulator-section" style={{ padding: "60px 0", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
        <div className="b2b-container">
          
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 28px" }}>
            <div style={{ fontSize: "0.8rem", fontWeight: "800", color: "#d97706", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>
              INTERACTIVE DEMO
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", fontWeight: "800", color: "#0f172a", margin: "0 0 8px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Explore AI Pitches by Industry
            </h2>
            <p style={{ color: "#64748b", fontSize: "0.92rem", margin: 0 }}>
              Select an industry below. Dharamshala is presented in pure Hindi for trusts, while corporate B2B sectors are presented in professional English.
            </p>
          </div>

          {/* Tab Selector Pills */}
          <div className="b2b-tabs-container">
            {INDUSTRY_PRESETS.map((ind) => {
              const isSelected = selectedIndustry.id === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => handleSelectIndustry(ind)}
                  className={`b2b-tab-pill ${isSelected ? "active" : ""}`}
                  style={{
                    borderColor: isSelected ? ind.color : "#e2e8f0",
                    background: isSelected ? ind.accentBg : "#ffffff",
                    color: isSelected ? ind.color : "#334155"
                  }}
                >
                  <i className={`fa-solid ${ind.icon}`} style={{ color: ind.color }} />
                  <span>{ind.tabLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Hindi Banner for Dharamshala */}
          {selectedIndustry.isHindi && (
            <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "10px", padding: "10px 16px", marginBottom: "18px", display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#92400e" }}>
              <i className="fa-solid fa-om" style={{ color: "#d97706", fontSize: "1rem" }} />
              <span>
                <strong>विशेष (धर्मशाला एवं तीर्थ ट्रस्ट):</strong> यह प्रस्ताव और सॉफ्टवेयर विशेष रूप से राजस्थान व भारत भर के तीर्थ ट्रस्टियों के लिए सरल हिंदी भाषा में तैयार किया गया है।
              </span>
            </div>
          )}

          {/* 2 Neat Boxes Grid */}
          <div className="b2b-sim-grid">
            
            {/* Box 1: Prospect Profile Card */}
            <div className="b2b-box-card">
              <div>
                <span style={{ display: "inline-block", padding: "3px 8px", borderRadius: "6px", background: selectedIndustry.accentBg, color: selectedIndustry.color, fontSize: "0.72rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "8px", border: `1px solid ${selectedIndustry.borderCol}` }}>
                  {selectedIndustry.badge}
                </span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "#0f172a", margin: "0 0 4px" }}>
                  {selectedIndustry.sampleLead.name}
                </h3>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#64748b", fontSize: "0.84rem" }}>
                  <i className="fa-solid fa-location-dot" style={{ color: "#ef4444" }} />
                  <span>{selectedIndustry.sampleLead.city}</span>
                </div>
              </div>

              {/* Data Meta Details */}
              <div style={{ background: "#f8fafc", borderRadius: "10px", padding: "12px", border: "1px solid #e2e8f0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div>
                  <div style={{ fontSize: "0.68rem", color: "#64748b", textTransform: "uppercase", fontWeight: "700" }}>Rating</div>
                  <div style={{ fontSize: "0.88rem", color: "#d97706", fontWeight: "700", marginTop: "2px" }}>{selectedIndustry.sampleLead.rating}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.68rem", color: "#64748b", textTransform: "uppercase", fontWeight: "700" }}>Website</div>
                  <div style={{ fontSize: "0.88rem", color: selectedIndustry.sampleLead.hasWebsite ? "#059669" : "#ea580c", fontWeight: "700", marginTop: "2px" }}>
                    {selectedIndustry.sampleLead.hasWebsite ? "Live Website" : "No Website"}
                  </div>
                </div>
                <div style={{ gridColumn: "span 2" }}>
                  <div style={{ fontSize: "0.68rem", color: "#64748b", textTransform: "uppercase", fontWeight: "700" }}>Category</div>
                  <div style={{ fontSize: "0.85rem", color: "#334155", fontWeight: "600", marginTop: "2px" }}>{selectedIndustry.sampleLead.category}</div>
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <div style={{ fontSize: "0.78rem", fontWeight: "700", color: "#334155", marginBottom: "6px" }}>
                  {selectedIndustry.isHindi ? "प्रस्ताव में शामिल मुख्य तकनीकी बिंदु:" : "Key AI Value Angles Injected in Pitch:"}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                  {selectedIndustry.highlights.map((h, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "6px", fontSize: "0.82rem", color: "#475569" }}>
                      <i className="fa-solid fa-circle-check" style={{ color: selectedIndustry.color, marginTop: "2px", flexShrink: 0 }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: "auto", paddingTop: "6px" }}>
                <button
                  onClick={handleOpenWhatsAppTest}
                  style={{
                    width: "100%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "10px 14px",
                    background: "#ecfdf5",
                    border: "1px solid #a7f3d0",
                    borderRadius: "8px",
                    color: "#059669",
                    fontWeight: "700",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                  }}
                >
                  <i className="fa-brands fa-whatsapp" />
                  <span>{selectedIndustry.isHindi ? "व्हाट्सएप पर लाइव डेमो देखें" : "Test Pitch on WhatsApp"}</span>
                </button>
              </div>

            </div>

            {/* Box 2: Pitch Preview Card */}
            <div className="b2b-box-card" style={{ padding: "0", overflow: "hidden" }}>
              
              {/* Box Header with Lang Toggle */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", fontWeight: "700", color: "#475569" }}>
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
                  <span>{selectedIndustry.isHindi ? "AI जनरेटेड प्रस्ताव" : "AI Generated Value Pitch"}</span>
                </div>

                <div style={{ display: "flex", gap: "4px" }}>
                  <button
                    onClick={() => setActivePitchTab("hindi")}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      background: activePitchTab === "hindi" ? selectedIndustry.accentBg : "transparent",
                      border: activePitchTab === "hindi" ? `1px solid ${selectedIndustry.color}` : "1px solid transparent",
                      color: activePitchTab === "hindi" ? selectedIndustry.color : "#64748b",
                      fontSize: "0.75rem",
                      fontWeight: "700",
                      cursor: "pointer"
                    }}
                  >
                    Hindi
                  </button>
                  <button
                    onClick={() => setActivePitchTab("english")}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      background: activePitchTab === "english" ? selectedIndustry.accentBg : "transparent",
                      border: activePitchTab === "english" ? `1px solid ${selectedIndustry.color}` : "1px solid transparent",
                      color: activePitchTab === "english" ? selectedIndustry.color : "#64748b",
                      fontSize: "0.75rem",
                      fontWeight: "700",
                      cursor: "pointer"
                    }}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Box Content */}
              <div style={{ padding: "16px", flex: 1, fontSize: "0.86rem", lineHeight: "1.6", color: "#1e293b", whiteSpace: "pre-wrap", wordBreak: "break-word", overflowY: "auto", maxHeight: "380px" }}>
                {activePitchTab === "hindi" ? selectedIndustry.pitchHindi : selectedIndustry.pitchEnglish}
              </div>

              {/* Box Footer Toolbar */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
                <span style={{ fontSize: "0.74rem", color: "#64748b" }}>
                  {activePitchTab === "hindi" ? "WhatsApp Message Format" : "B2B Cold Email Format"}
                </span>

                <button
                  onClick={handleCopyPitch}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "5px 12px",
                    borderRadius: "6px",
                    background: copiedState ? "#059669" : "#2563eb",
                    border: "none",
                    color: "#ffffff",
                    fontSize: "0.76rem",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  <i className={`fa-solid ${copiedState ? "fa-check" : "fa-copy"}`} />
                  <span>{copiedState ? "Copied!" : "Copy Pitch"}</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. ROI CALCULATOR (Neat 2-Box Structure)
      ───────────────────────────────────────────────────────────── */}
      <section style={{ padding: "60px 0", background: "#ffffff", borderBottom: "1px solid #e2e8f0" }}>
        <div className="b2b-container">
          
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 32px" }}>
            <div style={{ fontSize: "0.8rem", fontWeight: "800", color: "#059669", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>
              ROI CALCULATOR
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", fontWeight: "800", color: "#0f172a", margin: "0 0 8px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Calculate Your Monthly B2B Revenue Multiplier
            </h2>
            <p style={{ color: "#64748b", fontSize: "0.92rem", margin: 0 }}>
              Adjust parameters below to see estimated deals, monthly pipeline boost, and manual prospecting hours saved.
            </p>
          </div>

          <div className="b2b-calc-grid">
            
            {/* Box 1: Input Sliders */}
            <div className="b2b-calc-input-box">
              <div style={{ fontSize: "0.95rem", fontWeight: "800", color: "#0f172a", borderBottom: "1px solid #e2e8f0", paddingBottom: "10px" }}>
                Target Outreach Parameters
              </div>

              {/* Slider 1 */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <label style={{ fontSize: "0.86rem", fontWeight: "700", color: "#334155" }}>Monthly Target Outbound Leads</label>
                  <span style={{ fontSize: "0.95rem", fontWeight: "800", color: "#2563eb" }}>{monthlyOutreach} leads</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="50"
                  value={monthlyOutreach}
                  onChange={(e) => setMonthlyOutreach(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "#2563eb", cursor: "pointer" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "#64748b", marginTop: "2px" }}>
                  <span>50 (Niche)</span>
                  <span>1,000 (Regional)</span>
                  <span>2,000 (Pan-India)</span>
                </div>
              </div>

              {/* Slider 2 */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <label style={{ fontSize: "0.86rem", fontWeight: "700", color: "#334155" }}>Average Deal Value (₹)</label>
                  <span style={{ fontSize: "0.95rem", fontWeight: "800", color: "#7c3aed" }}>₹{dealValue.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min="15000"
                  max="500000"
                  step="5000"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "#7c3aed", cursor: "pointer" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "#64748b", marginTop: "2px" }}>
                  <span>₹15k (Starter)</span>
                  <span>₹1.5 Lakh (ERP/Web)</span>
                  <span>₹5 Lakh (Enterprise)</span>
                </div>
              </div>

              {/* Slider 3 */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <label style={{ fontSize: "0.86rem", fontWeight: "700", color: "#334155" }}>Estimated Deal Close Rate</label>
                  <span style={{ fontSize: "0.95rem", fontWeight: "800", color: "#059669" }}>{conversionRate}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "#059669", cursor: "pointer" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "#64748b", marginTop: "2px" }}>
                  <span>1% (Conservative)</span>
                  <span>4% (Average AI Pitch)</span>
                  <span>15% (High-Intent)</span>
                </div>
              </div>

            </div>

            {/* Box 2: Projected Output Card */}
            <div className="b2b-calc-output-box">
              <div>
                <div style={{ fontSize: "0.72rem", fontWeight: "800", color: "#059669", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "4px" }}>
                  PROJECTED MONTHLY REVENUE GROWTH
                </div>
                <div style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: "900", color: "#059669", marginBottom: "14px", lineHeight: "1.1" }}>
                  ₹{estimatedRevenue.toLocaleString("en-IN")}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
                  <div style={{ background: "#ffffff", padding: "10px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                    <div style={{ fontSize: "0.68rem", color: "#64748b", textTransform: "uppercase" }}>Estimated Deals</div>
                    <div style={{ fontSize: "1.15rem", fontWeight: "800", color: "#2563eb", marginTop: "2px" }}>{estimatedDeals} Deals/mo</div>
                  </div>
                  <div style={{ background: "#ffffff", padding: "10px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                    <div style={{ fontSize: "0.68rem", color: "#64748b", textTransform: "uppercase" }}>Time Saved</div>
                    <div style={{ fontSize: "1.15rem", fontWeight: "800", color: "#d97706", marginTop: "2px" }}>{hoursSavedWeekly} hrs/wk</div>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={`https://wa.me/917597451057?text=${encodeURIComponent(`Namaste ChittorTech! My target is ${monthlyOutreach} leads/mo with average deal size of ₹${dealValue}. I want to deploy your B2B lead generation engine.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="b2b-btn-blue"
                  style={{ width: "100%", padding: "11px 16px", fontSize: "0.9rem" }}
                >
                  <i className="fa-brands fa-whatsapp" />
                  <span>Start Generating Inquiries on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. FAQS ACCORDION
      ───────────────────────────────────────────────────────────── */}
      <section style={{ padding: "60px 0", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
        <div className="b2b-container" style={{ maxWidth: "800px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div style={{ fontSize: "0.8rem", fontWeight: "800", color: "#2563eb", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", fontWeight: "800", color: "#0f172a", margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Common Questions &amp; Answers
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: "#ffffff",
                    border: isOpen ? "1px solid #93c5fd" : "1px solid #e2e8f0",
                    borderRadius: "10px",
                    overflow: "hidden",
                    transition: "all 0.2s"
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    style={{
                      width: "100%",
                      padding: "16px 18px",
                      background: "transparent",
                      border: "none",
                      color: "#0f172a",
                      fontSize: "0.95rem",
                      fontWeight: "700",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      cursor: "pointer"
                    }}
                  >
                    <span>{faq.q}</span>
                    <i
                      className={`fa-solid ${isOpen ? "fa-minus" : "fa-plus"}`}
                      style={{ color: isOpen ? "#2563eb" : "#94a3b8", fontSize: "0.85rem", flexShrink: 0 }}
                    />
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 16px", color: "#475569", fontSize: "0.88rem", lineHeight: "1.6" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. BOTTOM CALL TO ACTION
      ───────────────────────────────────────────────────────────── */}
      <section style={{ padding: "70px 0", background: "linear-gradient(135deg, #1e1b4b 0%, #291fbc 60%, #0e7490 100%)", textAlign: "center", color: "#ffffff" }}>
        <div className="b2b-container" style={{ maxWidth: "750px" }}>
          
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.7rem)", fontWeight: "900", color: "#ffffff", lineHeight: "1.2", marginBottom: "14px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Start Generating High-Ticket B2B Inquiries
          </h2>

          <p style={{ fontSize: "1rem", color: "#e0e7ff", lineHeight: "1.6", maxWidth: "620px", margin: "0 auto 28px" }}>
            Whether you need a custom in-house Lead Extractor &amp; CRM built for your team or want ChittorTech to manage your outbound acquisition pipeline—we deliver predictable results.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            <a
              href="https://wa.me/917597451057?text=Namaste%20ChittorTech!%20I%20want%20to%20deploy%20the%20Automated%20B2B%20Lead%20Generation%20System."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 26px",
                background: "#ffffff",
                color: "#1e1b4b",
                fontSize: "0.95rem",
                fontWeight: "800",
                borderRadius: "10px",
                textDecoration: "none",
                boxShadow: "0 6px 18px rgba(0, 0, 0, 0.2)",
              }}
            >
              <i className="fa-brands fa-whatsapp" style={{ color: "#25d366", fontSize: "1.15rem" }} />
              <span>Request Free Demo on WhatsApp</span>
            </a>

            <Link
              href="/contact-us"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 22px",
                background: "rgba(0, 0, 0, 0.25)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "#ffffff",
                fontSize: "0.95rem",
                fontWeight: "700",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              <i className="fa-solid fa-phone" />
              <span>Call: +91 75974 51057</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
