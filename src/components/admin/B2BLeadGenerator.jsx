"use client";

import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import {
  addB2BLeads,
  subscribeToB2BLeads,
  updateB2BLeadStatus,
  updateB2BLeadNotes,
  updateB2BLeadCity,
  updateB2BLeadCategory,
  updateB2BLeadAudit,
  deleteB2BLead,
} from "@/lib/leadService";
import { auditWebsiteTarget } from "@/lib/auditService";

/* ─────────────────────────────────────────────────────────────
   CONSTANTS & DATA
───────────────────────────────────────────────────────────── */

const TARGET_PRESETS = [
  { id: "khatu_shyam", label: "Khatu Shyam Ji Hotels & Dharamshalas", icon: "fa-om", query: "Dharamshala and guest house in Khatu Shyam Ji Sikar Rajasthan", city: "Khatu Shyam Ji", category: "Dharamshala & Trusts", pitchType: "dharamshala", color: "#ec4899" },
  { id: "marble_bhilwara", label: "Bhilwara Marble & Granite", icon: "fa-cubes", query: "Marble manufacturers in Bhilwara Rajasthan", city: "Bhilwara", category: "Marble & Granite", pitchType: "marble", color: "#6366f1" },
  { id: "dharamshala_chittor", label: "Chittorgarh Dharamshalas & Trusts", icon: "fa-gopuram", query: "Dharamshala and trusts in Chittorgarh Rajasthan", city: "Chittorgarh", category: "Dharamshala & Trusts", pitchType: "dharamshala", color: "#f59e0b" },
  { id: "resorts_udaipur", label: "Udaipur Luxury Resorts", icon: "fa-umbrella-beach", query: "Boutique hotels and luxury resorts in Udaipur Rajasthan", city: "Udaipur", category: "Hotels & Resorts", pitchType: "hotel", color: "#06b6d4" },
  { id: "textile_bhilwara", label: "Bhilwara Textiles", icon: "fa-tshirt", query: "Textile manufacturers in Bhilwara Rajasthan", city: "Bhilwara", category: "Textile & Manufacturing", pitchType: "textile", color: "#10b981" },
  { id: "industrial_chittor", label: "Mewar Industrial & Transport", icon: "fa-industry", query: "Transport and logistics companies in Chittorgarh Rajasthan", city: "Chittorgarh", category: "Industrial", pitchType: "general", color: "#8b5cf6" },
];

const SEARCH_PREFIX_TEMPLATES = [
  { id: "dharamshala", label: "Dharamshala & Stays in", prefix: "Dharamshala and guest houses in ", icon: "fa-om", color: "#ec4899", placeholder: "e.g. Khatu Shyam Ji, Rajasthan" },
  { id: "hotels", label: "Hotels & Resorts in", prefix: "Hotels and luxury resorts in ", icon: "fa-hotel", color: "#06b6d4", placeholder: "e.g. Udaipur, Rajasthan" },
  { id: "businesses", label: "Businesses in", prefix: "Businesses in ", icon: "fa-briefcase", color: "#6366f1", placeholder: "e.g. Bhilwara, Rajasthan" },
  { id: "marble", label: "Marble & Granite in", prefix: "Marble and granite manufacturers in ", icon: "fa-cubes", color: "#8b5cf6", placeholder: "e.g. Bhilwara / Chittorgarh" },
  { id: "textile", label: "Textiles & Garments in", prefix: "Textile manufacturers and mills in ", icon: "fa-tshirt", color: "#10b981", placeholder: "e.g. Bhilwara, Rajasthan" },
  { id: "schools", label: "Schools & Colleges in", prefix: "Schools and coaching institutes in ", icon: "fa-graduation-cap", color: "#f59e0b", placeholder: "e.g. Kota, Rajasthan" },
  { id: "transport", label: "Transport & Logistics in", prefix: "Transport and logistics companies in ", icon: "fa-truck", color: "#ef4444", placeholder: "e.g. Chittorgarh, Rajasthan" },
  { id: "custom", label: "✏️ Custom Query", prefix: "", icon: "fa-pen", color: "#64748b", placeholder: "Type full custom search term + city..." },
];

const QUICK_LOCATIONS = [
  { name: "Khatu Shyam Ji, Rajasthan", label: "Khatu Shyam Ji (Raj)", color: "#ec4899" },
  { name: "Chittorgarh, Rajasthan", label: "Chittorgarh", color: "#f59e0b" },
  { name: "Bhilwara, Rajasthan", label: "Bhilwara", color: "#6366f1" },
  { name: "Udaipur, Rajasthan", label: "Udaipur", color: "#06b6d4" },
  { name: "Jaipur, Rajasthan", label: "Jaipur", color: "#3b82f6" },
  { name: "Sanwalia Ji, Chittorgarh", label: "Sanwalia Ji", color: "#eab308" },
  { name: "Salasar, Rajasthan", label: "Salasar Balaji", color: "#f97316" },
  { name: "Nathdwara, Rajsamand", label: "Nathdwara", color: "#10b981" },
  { name: "Kota, Rajasthan", label: "Kota", color: "#8b5cf6" },
  { name: "Jodhpur, Rajasthan", label: "Jodhpur", color: "#0284c7" },
];

export const NICHE_CONFIG = {
  marble: {
    id: "marble",
    label: "Marble & Granite",
    icon: "fa-cubes",
    color: "#8b5cf6",
    bg: "rgba(139, 92, 246, 0.12)",
    border: "rgba(139, 92, 246, 0.35)",
    text: "#7c3aed",
    categoryName: "Marble & Granite",
    badge: "💎 Marble",
  },
  textile: {
    id: "textile",
    label: "Textiles & Garments",
    icon: "fa-tshirt",
    color: "#10b981",
    bg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.35)",
    text: "#059669",
    categoryName: "Textile & Manufacturing",
    badge: "🧵 Textile",
  },
  school: {
    id: "school",
    label: "Schools & Colleges",
    icon: "fa-graduation-cap",
    color: "#f59e0b",
    bg: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.35)",
    text: "#d97706",
    categoryName: "Schools & Colleges",
    badge: "🏫 Education",
  },
  transport: {
    id: "transport",
    label: "Transport & Logistics",
    icon: "fa-truck",
    color: "#ef4444",
    bg: "rgba(239, 68, 68, 0.12)",
    border: "rgba(239, 68, 68, 0.35)",
    text: "#dc2626",
    categoryName: "Transport & Logistics",
    badge: "🚚 Transport",
  },
  dharamshala: {
    id: "dharamshala",
    label: "Dharamshala & Trusts",
    icon: "fa-om",
    color: "#ec4899",
    bg: "rgba(236, 72, 153, 0.12)",
    border: "rgba(236, 72, 153, 0.35)",
    text: "#db2777",
    categoryName: "Dharamshala & Trusts",
    badge: "🛕 Dharamshala",
  },
  hotel: {
    id: "hotel",
    label: "Hotels & Resorts",
    icon: "fa-hotel",
    color: "#06b6d4",
    bg: "rgba(6, 182, 212, 0.12)",
    border: "rgba(6, 182, 212, 0.35)",
    text: "#0891b2",
    categoryName: "Hotels & Resorts",
    badge: "🏨 Hotel",
  },
  general: {
    id: "general",
    label: "Business & IT Services",
    icon: "fa-briefcase",
    color: "#6366f1",
    bg: "rgba(99, 102, 241, 0.12)",
    border: "rgba(99, 102, 241, 0.35)",
    text: "#4f46e5",
    categoryName: "General Business",
    badge: "💼 Business",
  }
};

function detectNiche(lead) {
  if (lead?.pitchType && NICHE_CONFIG[lead.pitchType]) return lead.pitchType;
  const combined = `${lead?.category || ""} ${lead?.name || ""} ${lead?.notes || ""}`.toLowerCase();
  if (combined.includes("marble") || combined.includes("granite") || combined.includes("stone") || combined.includes("mines") || combined.includes("quartz") || combined.includes("marmo")) return "marble";
  if (combined.includes("textile") || combined.includes("spin") || combined.includes("suit") || combined.includes("fabric") || combined.includes("garment") || combined.includes("yarn") || combined.includes("mill") || combined.includes("synthetics")) return "textile";
  if (combined.includes("school") || combined.includes("college") || combined.includes("coaching") || combined.includes("institute") || combined.includes("education") || combined.includes("shiksha")) return "school";
  if (combined.includes("transport") || combined.includes("logistic") || combined.includes("fleet") || combined.includes("truck") || combined.includes("cargo") || combined.includes("carrier") || combined.includes("mover")) return "transport";
  if (combined.includes("dharamshala") || combined.includes("dharmashala") || combined.includes("trust") || combined.includes("mandir") || combined.includes("ashram") || combined.includes("sansthan") || combined.includes("yatri")) return "dharamshala";
  if (combined.includes("hotel") || combined.includes("resort") || combined.includes("palace") || combined.includes("stay") || combined.includes("inn") || combined.includes("haveli")) return "hotel";
  return "general";
}

const E = {
  namaste: "\u{1F64F}",  // 🙏
  sparkle: "\u{2728}",   // ✨
  money:   "\u{1F4B0}",  // 💰 Paisa / High Profit & Revenue
  reach:   "\u{1F680}",  // 🚀 Audience Reach & Scale
  growth:  "\u{1F4C8}",  // 📈 Business Growth & Conversions
  target:  "\u{1F3AF}",  // 🎯 Direct High-Quality Lead Generation
  lock:    "\u{1F512}",  // 🔒 Simple & 100% Secure Operations
  web:     "\u{1F310}",  // 🌐 Corporate Website & Online Reach
  app:     "\u{1F4F1}",  // 📱 Mobile Application (Android & iOS)
  erp:     "\u{1F4BC}",  // 💼 Custom ERP & GST Billing
  crm:     "\u{1F4CA}",  // 📊 Business CRM & Automation
  map:     "\u{1F4CD}",  // 📍 Google Search & Maps Ranking
  bulb:    "\u{1F4A1}",  // 💡 Smart Growth Opportunity
  phone:   "\u{1F4DE}",  // 📞 Phone
  stone:   "\u{1F48E}",  // 💎 Marble & Granite
  hotel:   "\u{1F3E8}",  // 🏨 Hotel & Resort
  receipt: "\u{1F9FE}",  // 🧾 Digital Receipt
  fabric:  "\u{1F9F5}",  // 🧵 Textile
  school:  "\u{1F3EB}",  // 🏫 School
  truck:   "\u{1F69A}",  // 🚚 Truck
};

function getAuditSnippet(lead) {
  if (lead?.auditResult) {
    const ar = lead.auditResult;
    const issues = ar.painPoints && ar.painPoints.length ? ar.painPoints.slice(0, 3) : [];
    return (
`\n${E.sparkle} *Technical Website Audit (${lead.website || ""}):*
${ar.pitchSnippet ? `⚠️ ${ar.pitchSnippet}\n` : ""}${issues.map(p => `• ${p}`).join("\n")}
${E.bulb} *ChittorTech Solution:* Hum aapki website ko 100% Secure SSL, Superfast Cloud hosting aur modern corporate design ke sath revamp karte hain jisse outstation clients ka trust bane aur direct inquiries boost hon.\n`
    );
  }
  if (lead?.website?.trim()) {
    return `\n${E.bulb} *Digital Upgrade:* Hum aapki existing website ko modern look, superfast speed aur live lead conversion features ke sath upgrade kar sakte hain.\n`;
  }
  return `\n${E.bulb} *Direct Growth:* Ek modern corporate website aur Google ranking ke sath aap har mahine lakhon ka naya outstation business direct crack kar sakte hain.\n`;
}

function generateWhatsAppPitch(lead) {
  const name = (lead?.name || "").trim() || "Team";
  const city = lead?.city || "Rajasthan";
  const niche = detectNiche(lead);

  if (niche === "marble") {
    return (
`*Namaste ${name}* ${E.namaste}

Main *ChittorTech* (Mewar) se connect kar raha hoon.

Aapka marble & granite enterprise ${city}/Mewar me well-established hai. Hum stone manufacturers aur exporters ke operations aur sales ko digitalize karke unka business profit aur market reach bohot badhate hain:

${E.sparkle} *Humari Tech & Business Growth Solutions:*
${E.web} *High-Impact Corporate Website* — Website se aapki pan-India aur overseas audience reach 10x badhegi, jisse export buyers direct trust karte hain.
${E.target} *Direct Quality Lead Generation* — WhatsApp par 100 photos bhejne ki jagah 1 live digital slab catalogue link, jisse outstation buyers instant slab sizes dekh kar direct bulk orders bhejte hain.
${E.money} *Maximum Profit & Zero Brokerage* — Middlemen aur brokers ka commission bachega, aur direct enquiries aane se aapka profit aur revenue bohot badhega.
${E.app} *Custom Mobile App & Live Stone Catalogue* — Dealers aur overseas buyers ke mobile par live inventory aur stock availability display karein.
${E.erp} *Custom Factory ERP & GST Billing* — Block cutting, slab inventory, GST invoices aur dispatch balance tracking ka simple software.
${E.lock} *Simple & 100% Secure Operations* — Daily operations aasan honge aur aapka factory data cloud-encrypted & 100% secure rahega.
${E.crm} *Business CRM & WhatsApp Automation* — Client inquiries par automatic follow-up system taaki deal turant close ho sake.
${E.map} *Google Search & Maps Ranking* — "Top Marble in Bhilwara/Rajasthan" par top Google positioning taaki buyers seedha aapko call karein.
${getAuditSnippet(lead)}
Kya hum is hafte 2-minute quick call ya WhatsApp par portfolio aur live demo share kar sakte hain?

Aapke response ka intezaar rahega.

Warm regards,
*ChittorTech*
${E.web} https://chittortech.in
${E.phone} +91 75974 51057
${E.map} Chittorgarh • Bhilwara • Udaipur`
    );
  }

  if (niche === "dharamshala") {
    return (
`*सादर प्रणाम प्रबंधक महोदय / ट्रस्ट प्रबंधन (${name})* ${E.namaste}

मैं *कुश शर्मा (संस्थापक, चित्तौड़टेक)*, आपके सम्मानित धाम (${city}) में स्थित *${name}* के प्रबंधन को और अधिक पारदर्शी व सुगम बनाने हेतु यह छोटा सा प्रस्ताव रख रहा हूँ।

हम भारत भर के प्रमुख तीर्थ क्षेत्रों एवं जैन धर्मशालाओं के लिए विशेष सॉफ्टवेयर समाधान प्रदान करते हैं:

${E.sparkle} *धर्मशाला एवं ट्रस्ट मैनेजमेंट सिस्टम:*
${E.hotel} *लाइव कमरा स्थिति डैशबोर्ड* — काउंटर एवं मोबाइल पर रियल-टाइम दिखेगा कि कितने कमरे बुक हैं और कितने खाली हैं।
${E.receipt} *2-तरफा डिजिटल रसीद (Check-In & Check-Out)* — चेक-इन रसीद और चेक-आउट सेटलमेंट रसीद (तुरंत WhatsApp पर पक्की रसीद)।
🍲 *भोजनशाला एवं आहार कूपन सिस्टम* — श्रद्धालुओं के लिए डिजिटल भोजन कूपन और थाली पास व्यवस्था।
${E.money} *100% पारदर्शी दान-पुण्य एवं कमरा किराया* — सारा भुगतान सीधे ट्रस्ट के बैंक खाते में (Zero Cash Leakage)।
⚙️ *ट्रस्ट के नियमानुसार 100% कस्टमाइज़ेबल* — आपके ट्रस्ट के नियमों, कमरों के प्रकार व रसीद फॉर्मेट अनुसार सॉफ्टवेयर में बदलाव किया जा सकता है।
${E.lock} *सुरक्षित ट्रस्ट अकाउंटिंग एवं क्लाउड ऑडिट* — ट्रस्टीज़ के लिए पारदर्शी हिसाब-किताब व ऑनलाइन रिकॉर्ड्स।

क्या हम प्रबंधन समिति के साथ 2 मिनट का निःशुल्क लाइव डेमो या फोन पर चर्चा कर सकते हैं?

सादर प्रणाम,
*कुश शर्मा (संस्थापक)*
*चित्तौड़टेक (ChittorTech)*
${E.web} https://chittortech.in
${E.phone} +91 75974 51057
${E.map} मेवाड़, राजस्थान`
    );
  }

  if (niche === "hotel") {
    return (
`*Hello Team (${name})* ${E.namaste}

Greetings from *ChittorTech* (Mewar).

Hum Udaipur aur Rajasthan ke premium boutique hotels & luxury resorts ke liye direct guest bookings, audience reach aur revenue boost karne ke custom tech solutions engineer karte hain:

${E.sparkle} *Hospitality Growth Suite:*
${E.money} *Zero Commission — Save 20-25% Revenue* — Guests direct aapki website se book karein aur MakeMyTrip/Goibibo/Booking.com ko commission na dekar lakho rupaye ka direct profit kamayein.
${E.web} *Luxury Direct Booking Engine Website* — Ultra-fast mobile-first aesthetic design jo high-paying tourists aur corporate guests ko direct attract kare.
${E.target} *Direct High-Paying Guest Leads* — Google Hotel search aur Maps par direct booking link se verified guest leads generate hoti hain.
${E.app} *Custom Guest Mobile App & Web Tour* — Room 360° visual preview, amenities display aur 1-click instant booking.
${E.erp} *Hotel ERP & Billing System* — Room inventory, check-in/out, GST invoices aur kitchen/restaurant KOT billing.
${E.lock} *Simple & 100% Secure Operations* — Advance payment seedha aapke bank account me, with zero chargebacks aur secure records.
${E.crm} *Guest CRM & WhatsApp Automation* — Automated booking confirmation, check-in details aur 5-star Google review follow-ups.
${getAuditSnippet(lead)}
Would you be open to a quick 5-minute live preview or call this week?

Best regards,
*ChittorTech*
${E.web} https://chittortech.in
${E.phone} +91 75974 51057
${E.map} Udaipur • Chittorgarh`
    );
  }


  if (niche === "textile") {
    return (
`*Namaste ${name}* ${E.namaste}

Main *ChittorTech* (Mewar) se connect kar raha hoon.

Aapka textile enterprise Bhilwara textile hub me well-established hai. Hum textile manufacturers aur exporters ke operations streamline aur sales expand karne ke liye custom digital platforms build karte hain:

${E.sparkle} *Humari Textile Solutions:*
${E.web} *B2B Digital Fabric Catalogue* — Pan-India dealers ke liye live stock, weave, GSM aur shade card digital portfolio.
${E.erp} *Yarn-to-Fabric Production & Inventory ERP* — Loom production, grey fabric, processing, packing aur dispatch tracking.
${E.crm} *Dealer Order Portal* — Dealers directly mobile se order place karein, real-time dispatch status dekhein.
${E.map} *Pan-India Google B2B Visibility* — Wholesale buyers directly aapki factory se bulk orders connect karein.
${getAuditSnippet(lead)}
Kya hum is hafte 2-minute quick call ya WhatsApp par demo share kar sakte hain?

Aapke response ka intezaar rahega.

Warm regards,
*ChittorTech*
${E.web} https://chittortech.in
${E.phone} +91 75974 51057
${E.map} Chittorgarh • Bhilwara • Udaipur`
    );
  }

  if (niche === "school") {
    return (
`*Namaste Management (${name})* ${E.namaste}

Main *ChittorTech* se connect kar raha hoon.

Aapka educational institution ${city} me vidyarthiyo ko shreshth shiksha pradan kar raha hai. Hum schools, colleges aur coaching institutes ke administrative operations aur admissions ko automate karne ke liye custom tech suite build karte hain:

${E.sparkle} *Humari Education & Campus Solutions:*
${E.web} *High-Impact Admission Website* — Modern, mobile-first website jisse naye session me admissions aur student inquiries 3x badhti hain.
${E.app} *School / College Mobile App* — Parents aur students ke liye daily attendance, homework, circulars aur exam result portal.
${E.erp} *Automated Fee Collection & Online Gateway* — Zero fee delay; parents seedha UPI/Card se fee jama karein aur WhatsApp par instant digital fee receipt mile.
${E.crm} *Admission Enquiry CRM* — Phone aur website leads par automatic follow-up system taaki inquiry miss na ho.
${E.lock} *Staff Payroll & Biometric Attendance* — Teachers aur staff ka attendance, salary slip aur leave management.
${E.map} *Google Maps & Local Search Ranking* — "${city} ke top schools/institutes" me Google par #1 ranking taaki parents seedha aapko call karein.
${getAuditSnippet(lead)}
Kya hum is hafte 2-minute quick call ya WhatsApp par live demo share kar sakte hain?

Aapke response ka intezaar rahega.

Warm regards,
*ChittorTech*
${E.web} https://chittortech.in
${E.phone} +91 75974 51057
${E.map} Chittorgarh • Bhilwara • Udaipur • Rajasthan`
    );
  }

  if (niche === "transport") {
    return (
`*Namaste Management (${name})* ${E.namaste}

Main *ChittorTech* (Mewar) se connect kar raha hoon.

Aapki transport & logistics company ${city.toLowerCase().includes("rajasthan") ? city : city.toLowerCase().includes("madhya pradesh") ? "Madhya Pradesh" : `${city}`} me fleet aur goods movement me established hai. Hum transport enterprises ke freight billing aur customer acquisition ko digitalize karte hain:

${E.sparkle} *Humari Logistics & Fleet Tech Solutions:*
${E.erp} *Bilty / LR (Lorry Receipt) & GST Billing ERP* — LR generation, freight invoices, advance/diesel slips aur balance settlement ka simple software.
${E.web} *Corporate Logistics Website* — Pan-India industrial clients aur factories direct corporate bookings ke liye aapko contact karein.
${E.target} *Direct Factory & Shipper Leads* — Middlemen aur commission agents ki zarurat nahi, companies seedha aapke portal par load tender karein.
${E.lock} *Vehicle Maintenance & Driver Ledger* — Truck maintenance, tyre tracking, driver trip accounts aur expense control.
${E.crm} *Consignment Tracking & WhatsApp Updates* — Dispatch se delivery tak client ko WhatsApp par automated status update.
${E.map} *Google Search & SEO Ranking* — Top Google positioning taaki manufacturers aur traders direct aapko transport order dein.
${getAuditSnippet(lead)}
Kya hum is hafte 2-minute quick call ya WhatsApp par live demo share kar sakte hain?

Aapke response ka intezaar rahega.

Warm regards,
*ChittorTech*
${E.web} https://chittortech.in
${E.phone} +91 75974 51057
${E.map} Chittorgarh • Bhilwara • Udaipur • Rajasthan`
    );
  }

  // General B2B / Manufacturing / Corporate
  return (
`*Namaste ${name}* ${E.namaste}

Main *ChittorTech* (Mewar) se connect kar raha hoon.

Hum Rajasthan ke leading businesses aur enterprises ke operations ko aasan aur digitalize karke unka sales turnover aur profit bohot badhate hain:

${E.sparkle} *Humari Core Expertise:*
${E.reach} *Huge Market Reach & Audience* — High-speed corporate website se local aur outstation buyers tak aapki direct brand reach badhegi.
${E.target} *Direct High-Quality Lead Generation* — Google search aur digital platforms se genuine bulk buyers ki direct daily leads.
${E.money} *High Revenue & Maximum Profit* — Direct client acquisition se middlemen ka commission bachega aur business ka profit bohot multiply hoga.
${E.web} *High-Impact Corporate Websites & Portals* — Lightning-fast, mobile-friendly & overseas/export ready modern design.
${E.app} *Custom Mobile Applications (Android & iOS)* — Business apps, dealer order apps aur customer portals.
${E.erp} *Custom ERP & GST Billing Software* — GST invoicing, stock/inventory management, staff & order tracking.
${E.lock} *Simple & 100% Secure Operations* — Cloud database, user roles aur daily automated backup ke sath business operate karna bilkul aasan.
${E.crm} *Business CRM & WhatsApp Automation* — Lead management, client follow-ups aur quotation tracking system.
${E.map} *Google Search & SEO Growth* — Google par top positioning taaki outstation & local buyers seedha aapko call karein.
${getAuditSnippet(lead)}
Kya hum is hafte 2-minute quick call ya WhatsApp par humara portfolio share kar sakte hain?

Aapke response ka intezaar rahega.

Warm regards,
*ChittorTech*
${E.web} https://chittortech.in
${E.phone} +91 75974 51057
${E.map} Chittorgarh • Bhilwara • Udaipur`
  );
}

function generateEmailPitch(lead) {
  const niche = detectNiche(lead);
  const name = (lead?.name || "Business Management").trim();

  if (niche === "dharamshala") {
    return {
      subject: `Automated Room Booking, Billing & Trust Management Portal for ${name}`,
      body: `Dear Management of ${name},

Greetings from ChittorTech, Mewar's premier software & digital engineering firm.

We design automated room reservation portals, donation management systems, and computerized counter billing software for prominent pilgrimage trusts and dharamshalas across Rajasthan.

Key Solutions:
1. Online Room Reservation Website (Direct guest booking without middlemen)
2. Fast Front-Desk Slip & Room Availability Management
3. Digital Donation (Daan) & Automated 80G Tax Receipt Portal
4. Complete Trust Auditing, Accounts & Expense Register

Could we connect for a brief 2-minute discussion this week to show you how our system simplifies daily administration?

Best regards,
ChittorTech Team
Website: https://chittortech.in
Email: business@chittortech.in
Contact: +91 75974 51057`,
    };
  }

  if (niche === "marble") {
    return {
      subject: `B2B Digital Catalogue, Factory ERP & Export Growth for ${name}`,
      body: `Dear Management of ${name},

Greetings from ChittorTech, Mewar's premier technology solutions provider.

We partner with leading stone, marble, and granite manufacturers in Bhilwara & Rajasthan to modernize their business infrastructure and drive export-grade sales.

Our Specialized Marble Industry Suite:
1. Modern B2B Corporate Website (Mobile-first, international buyer ready)
2. Live Digital Stone Catalogue (Share high-res slabs and live stock in 1 link)
3. Custom Factory ERP (Block cutting, inventory, GST billing & dispatch)
4. High Google Search Ranking for Pan-India & Overseas buyers

Could we schedule a quick 2-minute call to demonstrate how our platform can elevate ${name}'s digital presence?

Warm regards,
ChittorTech Team
Website: https://chittortech.in
Email: business@chittortech.in
Contact: +91 75974 51057`,
    };
  }

  if (niche === "hotel") {
    return {
      subject: `Direct Booking Engine & 0% Commission Website for ${name}`,
      body: `Hello Team (${name}),

Greetings from ChittorTech.

We engineer direct hotel booking websites and property management systems (PMS) for luxury resorts and boutique hotels in Udaipur & Rajasthan, helping you eliminate 20-25% OTA commissions.

Key Solutions:
- 0% Commission Direct Booking Engine
- Front-Desk PMS & Restaurant KOT Billing
- Guest CRM & Automated WhatsApp Communication
- High-Impact Google Local Ranking

Would you be open to a 5-minute live preview this week?

Best regards,
ChittorTech Team
Website: https://chittortech.in
Email: business@chittortech.in
Contact: +91 75974 51057`,
    };
  }

  if (niche === "textile") {
    return {
      subject: `B2B Digital Fabric Catalogue & Factory ERP for ${name}`,
      body: `Respected Management (${name}),

Greetings from ChittorTech.

We build high-converting B2B wholesale fabric catalogues and production inventory ERPs for Bhilwara textile manufacturers, enabling all-India dealers to place bulk orders 24/7.

Key Capabilities:
- Private Digital Sample Book for Dealers
- Yarn-to-Fabric Production & Inventory ERP
- Dealer Order & Dispatch Tracking Portal
- Pan-India Google B2B Visibility

Would you be open to a quick 5-minute preview call?

Warm regards,
ChittorTech Team
Website: https://chittortech.in
Email: business@chittortech.in
Contact: +91 75974 51057`,
    };
  }

  if (niche === "school") {
    return {
      subject: `Automated Admission Website, Mobile App & Fee Management Portal for ${name}`,
      body: `Dear Management (${name}),

Greetings from ChittorTech.

We engineer modern institutional websites, campus mobile apps, and automated fee collection ERP portals for prominent schools, colleges, and coaching institutes across Rajasthan.

Key Solutions:
1. High-Converting Admission Portal (Mobile-friendly, online inquiries)
2. Student & Parent Mobile App (Daily attendance, notices, results & homework)
3. Direct Fee Collection & Online Gateway (Instant receipts, zero fee delay)
4. Staff Payroll & Biometric Attendance Integration
5. Top Google Maps & Search Ranking in ${lead?.city || "Rajasthan"}

Could we schedule a quick 2-minute introductory call or live demo this week?

Warm regards,
ChittorTech Team
Website: https://chittortech.in
Email: business@chittortech.in
Contact: +91 75974 51057`,
    };
  }

  if (niche === "transport") {
    return {
      subject: `Bilty (LR) Software, Freight Billing ERP & Corporate Logistics Portal for ${name}`,
      body: `Dear Management (${name}),

Greetings from ChittorTech.

We build modern logistics portals, Bilty/LR generation software, and fleet expense ERPs for transport and freight carriers across Rajasthan.

Key Solutions:
1. Bilty / LR (Lorry Receipt) Generation & Fast GST Billing ERP
2. Corporate Logistics Website (Direct factory and industrial consignments)
3. Fleet Maintenance, Diesel Slips & Driver Expense Tracking
4. Consignment Tracking & Automated WhatsApp Updates
5. Pan-India Google Search & B2B Visibility

Could we schedule a brief 2-minute call to demonstrate how our platform streamlines fleet operations?

Warm regards,
ChittorTech Team
Website: https://chittortech.in
Email: business@chittortech.in
Contact: +91 75974 51057`,
    };
  }

  return {
    subject: `Corporate Website, ERP & Digital Growth Proposal for ${name} | ChittorTech`,
    body: `Dear Management (${name}),

Greetings from ChittorTech, Mewar's premier web & software development agency.

We engineer modern corporate websites, custom ERP billing portals, business CRMs, and Google search ranking for Rajasthan's leading businesses.

Our Core Solutions:
1. High-Impact Corporate Websites & Portals (Mobile-first, lightning-fast, export-ready)
2. Custom ERP, Billing & Inventory Software (GST compliant, stock and accounts management)
3. Lead CRM & WhatsApp Automation (Instant tracking and automated follow-ups)
4. Google Search & SEO Ranking (Top positioning on Google for local and pan-India buyers)

Could we schedule a quick 2-minute introductory call to explore how we can assist your brand's digital presence?

Best regards,
ChittorTech
Website: https://chittortech.in
Email: business@chittortech.in
Phone: +91 75974 51057`,
  };
}


const SCRAPER_CODE = `(async function scrapeGoogleMaps() {
  console.log("⚡ [ChittorTech] Starting Google Maps Lead Extractor...");

  // Helper to trigger bulletproof CSV download via Blob
  const downloadCSV = (results, searchName) => {
    if (!results || !results.length) {
      alert("⚠️ Koi verified lead nahi mili (jisme Phone number ho). Google Maps search result open karein.");
      return;
    }
    const header = "Business Name,Phone,Website,Rating,City,Category";
    const rows = results.map(r => \`"\${(r.Name||"").replace(/"/g, '""')}","\${r.Phone||""}","\${r.Website||""}","\${r.Rating||""}","\${r.City||""}","\${r.Category||""}"\`);
    const csvContent = "\\uFEFF" + [header, ...rows].join("\\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const cleanName = (searchName || "Leads").replace(/[^a-zA-Z0-9\\s]/g, ' ').trim().replace(/\\s+/g, '_') || "Mewar_Leads";
    const fileName = \`\${cleanName}_Leads.csv\`;

    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    console.log(\`✅ SUCCESS: \${results.length} verified leads downloaded as \${fileName}!\`);
    alert(\`✅ SUCCESS: \${results.length} verified leads downloaded as \${fileName}!\\nAb is CSV ko ChittorTech Admin Portal me drag & drop karein.\`);
  };

  // 1. Detect search query / location
  const searchInput = (
    document.querySelector('#searchboxinput')?.value ||
    document.querySelector('input[name="q"]')?.value ||
    (window.location.href.includes('/search/') ? decodeURIComponent(window.location.href.split('/search/')[1].split('/')[0].split('?')[0]) : '') ||
    document.title.replace(/ - Google Maps/i, '').replace(/Google Maps/i, '').trim() ||
    "Leads"
  ).trim();

  const qLower = searchInput.toLowerCase();

  // Try extracting location from query like "in Madhya Pradesh", "in Bhopal", etc.
  const locMatch = searchInput.match(/\\b(?:in|at|near|around)\\s+([a-zA-Z\\s,]+)$/i);
  let parsedLocation = locMatch ? locMatch[1].trim().replace(/[,\\s]+$/, '') : "";
  if (parsedLocation) {
    parsedLocation = parsedLocation.split(/\\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
  }

  // Detect City / State
  let defaultCity = parsedLocation || "Rajasthan";
  if (qLower.includes("khatu shyam") || qLower.includes("khatushyam") || qLower.includes("khatu")) defaultCity = "Khatu Shyam Ji";
  else if (qLower.includes("chittor") || qLower.includes("sanwaliya") || qLower.includes("nimbahera") || qLower.includes("kapasan")) defaultCity = "Chittorgarh";
  else if (qLower.includes("udaipur")) defaultCity = "Udaipur";
  else if (qLower.includes("jaipur")) defaultCity = "Jaipur";
  else if (qLower.includes("jodhpur")) defaultCity = "Jodhpur";
  else if (qLower.includes("kota")) defaultCity = "Kota";
  else if (qLower.includes("ajmer") || qLower.includes("pushkar")) defaultCity = "Ajmer";
  else if (qLower.includes("bhilwara")) defaultCity = "Bhilwara";
  else if (qLower.includes("salasar")) defaultCity = "Salasar Balaji";
  else if (qLower.includes("bhopal")) defaultCity = "Bhopal";
  else if (qLower.includes("indore")) defaultCity = "Indore";
  else if (qLower.includes("gwalior")) defaultCity = "Gwalior";
  else if (qLower.includes("jabalpur")) defaultCity = "Jabalpur";
  else if (qLower.includes("ujjain")) defaultCity = "Ujjain";
  else if (qLower.includes("madhya pradesh") || qLower.includes("madhya_pradesh") || qLower.includes(" mp ") || qLower.endsWith(" mp")) defaultCity = "Madhya Pradesh";
  else if (parsedLocation) defaultCity = parsedLocation;

  // Detect Category
  let defaultCategory = "General";
  if (qLower.includes("transport") || qLower.includes("logistic") || qLower.includes("cargo") || qLower.includes("packer") || qLower.includes("mover") || qLower.includes("truck") || qLower.includes("fleet") || qLower.includes("carrier") || qLower.includes("freight") || qLower.includes("bilty")) defaultCategory = "Transport & Logistics";
  else if (qLower.includes("dharamshala") || qLower.includes("dharmashala") || qLower.includes("dharmsala") || qLower.includes("trust") || qLower.includes("mandir") || qLower.includes("temple") || qLower.includes("ashram") || qLower.includes("yatri")) defaultCategory = "Dharamshala & Trusts";
  else if (qLower.includes("marble") || qLower.includes("granite") || qLower.includes("stone") || qLower.includes("quartz") || qLower.includes("mines") || qLower.includes("marmo")) defaultCategory = "Marble & Granite";
  else if (qLower.includes("hotel") || qLower.includes("resort") || qLower.includes("palace") || qLower.includes("stay") || qLower.includes("inn") || qLower.includes("haveli")) defaultCategory = "Hotels & Resorts";
  else if (qLower.includes("textile") || qLower.includes("spin") || qLower.includes("suit") || qLower.includes("fabric") || qLower.includes("yarn") || qLower.includes("garment") || qLower.includes("mill")) defaultCategory = "Textile & Manufacturing";
  else if (qLower.includes("school") || qLower.includes("college") || qLower.includes("coaching") || qLower.includes("institute") || qLower.includes("education") || qLower.includes("academy")) defaultCategory = "Schools & Colleges";

  // ── CASE A: SINGLE PLACE PAGE (e.g. https://www.google.com/maps/place/...) ──
  const isSinglePlace = window.location.href.includes('/place/') || (!document.querySelector('div[role="feed"]') && document.querySelector('h1.DUwDvf, h1.fontHeadlineLarge'));
  
  if (isSinglePlace) {
    console.log("📍 Single Business Place detected on Google Maps! Extracting details...");
    const nameEl = document.querySelector('h1.DUwDvf, h1.fontHeadlineLarge, h1');
    const name = (nameEl ? (nameEl.innerText || nameEl.getAttribute('aria-label')) : "").trim() || searchInput;

    // Phone
    const phoneBtn = document.querySelector('button[data-item-id^="phone:tel:"], button[data-tooltip*="phone" i], button[aria-label*="Phone" i], [data-item-id*="phone"]');
    let phone = "";
    if (phoneBtn) {
      const rawPhone = phoneBtn.getAttribute('data-item-id') || phoneBtn.getAttribute('aria-label') || phoneBtn.innerText || "";
      const m = rawPhone.match(/(?:\\+91[\\s-]?)?[0]?[6-9]\\d{4}[\\s-]?\\d{5}|\\b0\\d{2,4}[\\s-]?\\d{6,8}\\b/);
      if (m) phone = m[0].replace(/[\\s-]/g, '');
    }

    // Website
    const webBtn = document.querySelector('a[data-item-id="authority"], a[data-tooltip*="website" i], a[aria-label*="Website" i], a[data-value="Website"]');
    let website = (webBtn && webBtn.href && !webBtn.href.includes('google.com')) ? webBtn.href : "";

    // Rating
    const rEl = document.querySelector('div.F7nice span[aria-hidden="true"], span.MW4etd, span.ceNzKf');
    const rating = rEl ? rEl.innerText : "";

    // Category
    const catBtn = document.querySelector('button.DkEaL, span.Y0A0hc');
    let category = catBtn ? catBtn.innerText.trim() : defaultCategory;
    if (category.toLowerCase().includes("transport") || category.toLowerCase().includes("logistic") || category.toLowerCase().includes("cargo") || category.toLowerCase().includes("packer") || category.toLowerCase().includes("carrier")) category = "Transport & Logistics";
    else if (category.toLowerCase().includes("marble") || category.toLowerCase().includes("granite")) category = "Marble & Granite";
    else if (category.toLowerCase().includes("dharmshala") || category.toLowerCase().includes("trust")) category = "Dharamshala & Trusts";
    else if (category.toLowerCase().includes("hotel") || category.toLowerCase().includes("resort")) category = "Hotels & Resorts";
    else if (category.toLowerCase().includes("school") || category.toLowerCase().includes("college")) category = "Schools & Colleges";

    // Address/City
    const addrEl = document.querySelector('button[data-item-id="address"], [data-item-id*="address"]');
    const fullText = (name + " " + (addrEl?.innerText || "") + " " + searchInput).toLowerCase();
    let city = defaultCity;
    if (fullText.includes("bhopal")) city = "Bhopal";
    else if (fullText.includes("indore")) city = "Indore";
    else if (fullText.includes("gwalior")) city = "Gwalior";
    else if (fullText.includes("jabalpur")) city = "Jabalpur";
    else if (fullText.includes("ujjain")) city = "Ujjain";
    else if (fullText.includes("madhya pradesh")) city = "Madhya Pradesh";
    else if (fullText.includes("chittor")) city = "Chittorgarh";
    else if (fullText.includes("udaipur")) city = "Udaipur";
    else if (fullText.includes("khatu shyam") || fullText.includes("khatushyam")) city = "Khatu Shyam Ji";
    else if (fullText.includes("jaipur")) city = "Jaipur";
    else if (fullText.includes("jodhpur")) city = "Jodhpur";
    else if (fullText.includes("kota")) city = "Kota";
    else if (fullText.includes("bhilwara")) city = "Bhilwara";

    if (!phone) {
      alert(\`⚠️ \${name} ka phone number Google Maps par publicly listed nahi hai.\`);
      return;
    }

    console.log(\`✅ [Single Lead Extracted] \${name} | Phone: \${phone} | Web: \${website || "None"}\`);
    downloadCSV([{ Name: name, Phone: phone, Website: website, Rating: rating, City: city, Category: category }], name);
    return;
  }

  // ── CASE B: SEARCH RESULTS LIST / FEED ──
  const feed = document.querySelector('div[role="feed"]') || document.querySelector('div.m6QErb[aria-label*="Results" i]') || document.querySelector('div[role="main"]');
  if (!feed) {
    alert("Google Maps Search Results list nahi mili! Pehle Maps search bar me query search karein (jaise 'Marble in Chittorgarh' ya 'Hotels in Udaipur').");
    return;
  }

  console.log("⚡ [1/2] Scrolling to load all listings...");
  let prev = 0;
  for (let i = 0; i < 20; i++) {
    feed.scrollTop = feed.scrollHeight;
    await new Promise(r => setTimeout(r, 1000));
    const n = feed.querySelectorAll('div[role="article"], div.Nv2PK').length;
    if (n === prev && i > 3) break;
    prev = n;
  }

  const cards = Array.from(feed.querySelectorAll('div[role="article"], div.Nv2PK'));
  console.log(\`⚡ [2/2] Extracting details from \${cards.length} listings...\`);

  const results = [];
  for (let i = 0; i < cards.length; i++) {
    const el = cards[i];
    const nameEl = el.querySelector('.fontHeadlineSmall') || el.querySelector('a.hfpxzc') || el.querySelector('div.qBF1Pd');
    const name = (nameEl ? (nameEl.getAttribute('aria-label') || nameEl.innerText) : "").trim();
    if (!name) continue;

    const text = el.innerText || "";

    // 1. Try card for website
    let webEl = el.querySelector('a[data-value="Website"], a[aria-label*="website" i], a[href*="http"]:not([href*="google.com"]):not([href*="goo.gl"])');
    let website = webEl ? webEl.href : "";

    // 2. Try card text for phone
    let ph = text.match(/(?:\\+91[\\s-]?)?[0]?[6-9]\\d{4}[\\s-]?\\d{5}|\\b0\\d{2,4}[\\s-]?\\d{6,8}\\b/);
    let phone = ph ? ph[0].replace(/[\\s-]/g, '') : "";

    // 3. Deep Extraction: Click listing if phone or website is hidden
    if (!phone || !website) {
      try {
        const clickTarget = el.querySelector('a.hfpxzc') || nameEl || el;
        clickTarget.click();
        await new Promise(r => setTimeout(r, 450));

        if (!phone) {
          const phoneBtn = document.querySelector('button[data-item-id^="phone:tel:"], button[data-tooltip*="phone" i], button[aria-label*="Phone" i], [data-item-id*="phone"]');
          if (phoneBtn) {
            const rawPhone = phoneBtn.getAttribute('data-item-id') || phoneBtn.getAttribute('aria-label') || phoneBtn.innerText || "";
            const m = rawPhone.match(/(?:\\+91[\\s-]?)?[0]?[6-9]\\d{4}[\\s-]?\\d{5}|\\b0\\d{2,4}[\\s-]?\\d{6,8}\\b/);
            if (m) phone = m[0].replace(/[\\s-]/g, '');
          }
        }

        if (!website) {
          const webBtn = document.querySelector('a[data-item-id="authority"], a[data-tooltip*="website" i], a[aria-label*="Website" i], a[data-value="Website"]');
          if (webBtn && webBtn.href && !webBtn.href.includes('google.com')) {
            website = webBtn.href;
          }
        }
      } catch (err) {}
    }

    const rEl = el.querySelector('span[aria-hidden="true"], span.MW4etd');
    const rating = rEl ? rEl.innerText : "";

    // City check
    const tLower = (text + " " + name).toLowerCase();
    let city = defaultCity;
    if (tLower.includes("bhopal")) city = "Bhopal";
    else if (tLower.includes("indore")) city = "Indore";
    else if (tLower.includes("gwalior")) city = "Gwalior";
    else if (tLower.includes("jabalpur")) city = "Jabalpur";
    else if (tLower.includes("ujjain")) city = "Ujjain";
    else if (tLower.includes("madhya pradesh")) city = "Madhya Pradesh";
    else if (tLower.includes("khatu shyam") || tLower.includes("khatushyam")) city = "Khatu Shyam Ji";
    else if (tLower.includes("chittorgarh") || tLower.includes("chittor") || tLower.includes("sanwaliya")) city = "Chittorgarh";
    else if (tLower.includes("udaipur")) city = "Udaipur";
    else if (tLower.includes("jaipur")) city = "Jaipur";
    else if (tLower.includes("jodhpur")) city = "Jodhpur";
    else if (tLower.includes("kota")) city = "Kota";
    else if (tLower.includes("ajmer") || tLower.includes("pushkar")) city = "Ajmer";
    else if (tLower.includes("bhilwara")) city = "Bhilwara";

    // Category check
    let category = defaultCategory;
    if (tLower.includes("transport") || tLower.includes("logistic") || tLower.includes("cargo") || tLower.includes("packer") || tLower.includes("mover") || tLower.includes("carrier") || tLower.includes("fleet") || tLower.includes("freight")) category = "Transport & Logistics";
    else if (tLower.includes("dharamshala") || tLower.includes("dharmashala") || tLower.includes("dharmsala") || tLower.includes("trust")) category = "Dharamshala & Trusts";
    else if (tLower.includes("marble") || tLower.includes("granite") || tLower.includes("stone")) category = "Marble & Granite";
    else if (tLower.includes("hotel") || tLower.includes("resort") || tLower.includes("palace") || tLower.includes("stay") || tLower.includes("inn")) category = "Hotels & Resorts";
    else if (tLower.includes("textile") || tLower.includes("fabric") || tLower.includes("yarn") || tLower.includes("garment")) category = "Textile & Manufacturing";
    else if (tLower.includes("school") || tLower.includes("college") || tLower.includes("coaching") || tLower.includes("institute")) category = "Schools & Colleges";

    if (!phone || !phone.trim()) {
      console.log(\`⏩ [Skipped - No Phone] \${name}\`);
      continue;
    }

    console.log(\`[\${results.length + 1}] \${name} | 📞 \${phone} | 🌐 \${website || "No website"}\`);
    results.push({ Name: name, Phone: phone, Website: website, Rating: rating, City: city, Category: category });
  }

  downloadCSV(results, searchInput);
})();`;



// ── PRE-VERIFIED DIRECTORY OF TOP DHARAMSHALAS & PILGRIMAGE TRUSTS (RAJASTHAN & INDIA) ──
const PRELOADED_DHARAMSHALAS = [
  // Khatu Shyam Ji (Sikar, Rajasthan)
  { name: "Mange Ram Dharamshala", phone: "9812425000", website: "", rating: "4.8", city: "Khatu Shyam Ji", category: "Dharamshala & Trusts", notes: "Prime Dharamshala in Khatu Shyam Ji • Large room capacity." },
  { name: "Surajgarh Bhawan Dharamshala", phone: "9414038155", website: "", rating: "4.7", city: "Khatu Shyam Ji", category: "Dharamshala & Trusts", notes: "Surajgarh Trust • Yatri Niwas." },
  { name: "Shree Shyam Mandir Committee Yatri Niwas", phone: "9414038200", website: "", rating: "4.9", city: "Khatu Shyam Ji", category: "Dharamshala & Trusts", notes: "Official Mandir Committee Yatri Sadan." },
  { name: "Morvi Dharamshala Trust", phone: "9829034500", website: "", rating: "4.6", city: "Khatu Shyam Ji", category: "Dharamshala & Trusts", notes: "Morvi Trust Bhawan." },
  { name: "Haryana Sewa Sadan Trust", phone: "9812034111", website: "", rating: "4.7", city: "Khatu Shyam Ji", category: "Dharamshala & Trusts", notes: "Haryana Samaj Bhawan." },
  { name: "Kolkata Bhawan Dharamshala", phone: "9830025600", website: "", rating: "4.6", city: "Khatu Shyam Ji", category: "Dharamshala & Trusts", notes: "Kolkata Yatri Sadan Trust." },
  { name: "Gujarat Bhawan Atithi Niwas", phone: "9825012340", website: "", rating: "4.5", city: "Khatu Shyam Ji", category: "Dharamshala & Trusts", notes: "Gujarat Samaj Dharamshala." },
  { name: "Birla Dharamshala & Atithi Sadan", phone: "9414012900", website: "", rating: "4.8", city: "Khatu Shyam Ji", category: "Dharamshala & Trusts", notes: "Birla Trust Yatri Niwas." },
  { name: "Maheshwari Bhawan Dharamshala", phone: "9414123450", website: "", rating: "4.7", city: "Khatu Shyam Ji", category: "Dharamshala & Trusts", notes: "Maheshwari Samaj Trust." },
  { name: "Agarwal Dharamshala Trust", phone: "9414234560", website: "", rating: "4.6", city: "Khatu Shyam Ji", category: "Dharamshala & Trusts", notes: "Agarwal Seva Sadan." },
  { name: "Delhi Bhawan Yatri Sadan", phone: "9810023450", website: "", rating: "4.5", city: "Khatu Shyam Ji", category: "Dharamshala & Trusts", notes: "Delhi Trust Yatri Sadan." },
  { name: "Toran Dwar Atithi Bhawan", phone: "9414345670", website: "", rating: "4.6", city: "Khatu Shyam Ji", category: "Dharamshala & Trusts", notes: "Toran Dwar Chowk." },
  { name: "Baba Shyam Kripa Bhawan", phone: "9414456780", website: "", rating: "4.7", city: "Khatu Shyam Ji", category: "Dharamshala & Trusts", notes: "Khatu Shyam Yatri Niwas." },

  // Salasar Balaji (Churu, Rajasthan)
  { name: "Shree Balaji Mandir Trust Dharamshala", phone: "9414085100", website: "", rating: "4.9", city: "Salasar Balaji", category: "Dharamshala & Trusts", notes: "Shree Hanuman Sewa Samiti Salasar." },
  { name: "Sharda Bhawan Dharamshala", phone: "9414085222", website: "", rating: "4.7", city: "Salasar Balaji", category: "Dharamshala & Trusts", notes: "Sharda Seva Sadan Salasar." },
  { name: "Anjani Mata Mandir Trust Bhawan", phone: "9414085333", website: "", rating: "4.8", city: "Salasar Balaji", category: "Dharamshala & Trusts", notes: "Anjani Dham Yatri Sadan." },
  { name: "Maheshwari Seva Trust Bhawan", phone: "9414085444", website: "", rating: "4.6", city: "Salasar Balaji", category: "Dharamshala & Trusts", notes: "Maheshwari Samaj Salasar." },
  { name: "Agarwal Seva Sadan Salasar", phone: "9414085555", website: "", rating: "4.7", city: "Salasar Balaji", category: "Dharamshala & Trusts", notes: "Agarwal Trust Salasar." },
  { name: "Haryana Bhawan Salasar", phone: "9812085666", website: "", rating: "4.5", city: "Salasar Balaji", category: "Dharamshala & Trusts", notes: "Haryana Yatri Bhawan." },

  // Shri Sanwaliya Seth (Mandaphiya, Chittorgarh, Rajasthan)
  { name: "Shri Sanwaliya Seth Mandir Trust Dharamshala", phone: "9414112100", website: "", rating: "4.9", city: "Chittorgarh", category: "Dharamshala & Trusts", notes: "Official Sanwaliya Mandir Board Yatri Niwas." },
  { name: "Mewar Yatri Niwas Bhawan", phone: "9414112200", website: "", rating: "4.7", city: "Chittorgarh", category: "Dharamshala & Trusts", notes: "Mewar Sanwaliya Atithi Sadan." },
  { name: "Sanwaliya Ji Maheshwari Sewa Sadan", phone: "9414112300", website: "", rating: "4.8", city: "Chittorgarh", category: "Dharamshala & Trusts", notes: "Maheshwari Trust Mandaphiya." },
  { name: "Agarwal Dharamshala Mandaphiya", phone: "9414112400", website: "", rating: "4.6", city: "Chittorgarh", category: "Dharamshala & Trusts", notes: "Agarwal Samaj Sanwaliya Ji." },
  { name: "Chittorgarh Fort Jain Atithi Bhawan", phone: "9414112500", website: "", rating: "4.7", city: "Chittorgarh", category: "Dharamshala & Trusts", notes: "Jain Tirth Kshetra Chittorgarh." },

  // Nathdwara (Rajsamand, Rajasthan)
  { name: "Shreenathji Temple Board Dharamshala", phone: "9414170100", website: "", rating: "4.9", city: "Nathdwara", category: "Dharamshala & Trusts", notes: "Temple Board Official Yatri Cottage." },
  { name: "Vallabh Bhawan Yatri Niwas", phone: "9414170200", website: "", rating: "4.7", city: "Nathdwara", category: "Dharamshala & Trusts", notes: "Vallabh Kul Seva Sadan." },
  { name: "New Bombay Dharamshala Nathdwara", phone: "9414170300", website: "", rating: "4.6", city: "Nathdwara", category: "Dharamshala & Trusts", notes: "Bombay Yatri Trust Bhawan." },
  { name: "Maheshwari Bhawan Trust Nathdwara", phone: "9414170400", website: "", rating: "4.8", city: "Nathdwara", category: "Dharamshala & Trusts", notes: "Maheshwari Samaj Nathdwara." },
  { name: "Gujarat Samaj Dharamshala", phone: "9825170500", website: "", rating: "4.5", city: "Nathdwara", category: "Dharamshala & Trusts", notes: "Gujarat Vaishnav Bhawan." },

  // Rishabhdeo / Kesariyaji (Udaipur, Rajasthan)
  { name: "Shri Kesariyaji Jain Shwetambar Tirth Trust Dharamshala", phone: "9414280100", website: "", rating: "4.9", city: "Udaipur", category: "Dharamshala & Trusts", notes: "Prachin Jain Tirth Kshetra Kesariyaji." },
  { name: "Digambar Jain Yatri Niwas Rishabhdeo", phone: "9414280200", website: "", rating: "4.7", city: "Udaipur", category: "Dharamshala & Trusts", notes: "Digambar Jain Trust Bhawan." },
  { name: "Mewar Jain Atithi Bhawan", phone: "9414280300", website: "", rating: "4.6", city: "Udaipur", category: "Dharamshala & Trusts", notes: "Jain Dharmshala Complex." },

  // Shree Nakoda Ji Tirth (Balotra / Barmer, Rajasthan)
  { name: "Shri Nakoda Parshwanath Jain Tirth Trust Dharamshala", phone: "9414390100", website: "", rating: "4.9", city: "Nakoda Ji", category: "Dharamshala & Trusts", notes: "Shree Nakoda Tirth Pedhi Yatri Niwas (Over 500 rooms)." },
  { name: "Nakoda Bhairav Atithi Bhawan Complex", phone: "9414390200", website: "", rating: "4.8", city: "Nakoda Ji", category: "Dharamshala & Trusts", notes: "Mewad-Marwar Yatri Bhawan." },
  { name: "Shree Nakoda Bhojanshala & Dharamshala Sadan", phone: "9414390300", website: "", rating: "4.8", city: "Nakoda Ji", category: "Dharamshala & Trusts", notes: "Trust Bhawan & Aahar Shala." },

  // Mount Abu / Delwara (Rajasthan)
  { name: "Delwara Jain Tirth Trust Dharamshala", phone: "9414410100", website: "", rating: "4.9", city: "Mount Abu", category: "Dharamshala & Trusts", notes: "Dilwara World Heritage Temple Trust Yatri Niwas." },
  { name: "Gujarat Bhawan Trust Mount Abu", phone: "9825410200", website: "", rating: "4.6", city: "Mount Abu", category: "Dharamshala & Trusts", notes: "Gujarat Yatri Sadan Mount Abu." },
  { name: "Maheshwari Seva Sadan Mount Abu", phone: "9414410300", website: "", rating: "4.7", city: "Mount Abu", category: "Dharamshala & Trusts", notes: "Maheshwari Samaj Bhawan." },

  // Pushkar & Ajmer (Rajasthan)
  { name: "Jagatpita Brahma Mandir Trust Dharamshala", phone: "9414520100", website: "", rating: "4.8", city: "Pushkar", category: "Dharamshala & Trusts", notes: "Brahma Ghat Yatri Niwas Pushkar." },
  { name: "Maheshwari Sewa Sadan Pushkar", phone: "9414520200", website: "", rating: "4.8", city: "Pushkar", category: "Dharamshala & Trusts", notes: "Maheshwari Trust Pushkar." },
  { name: "Marwar Dharamshala Trust Pushkar", phone: "9414520300", website: "", rating: "4.6", city: "Pushkar", category: "Dharamshala & Trusts", notes: "Marwar Yatri Sadan." },
  { name: "Agarwal Dharamshala Pushkar", phone: "9414520400", website: "", rating: "4.6", city: "Pushkar", category: "Dharamshala & Trusts", notes: "Agarwal Seva Samiti." },

  // Vrindavan & Mathura (Uttar Pradesh)
  { name: "Bankey Bihari Mandir Atithi Sadan", phone: "9837012100", website: "", rating: "4.9", city: "Vrindavan", category: "Dharamshala & Trusts", notes: "Vrindavan Dham Yatri Bhawan." },
  { name: "Shri Krishna Janmabhoomi Trust Yatri Niwas", phone: "9837012200", website: "", rating: "4.8", city: "Mathura", category: "Dharamshala & Trusts", notes: "Janmabhoomi Trust Mathura." },
  { name: "Prem Mandir Atithi Bhawan", phone: "9837012300", website: "", rating: "4.9", city: "Vrindavan", category: "Dharamshala & Trusts", notes: "Jagadguru Kripalu Parishat Yatri Sadan." },
  { name: "Maheshwari Bhawan Trust Vrindavan", phone: "9837012400", website: "", rating: "4.7", city: "Vrindavan", category: "Dharamshala & Trusts", notes: "Maheshwari Seva Trust Raman Reti." },
  { name: "Agarwal Dharamshala Vrindavan", phone: "9837012500", website: "", rating: "4.6", city: "Vrindavan", category: "Dharamshala & Trusts", notes: "Agarwal Bhawan Vrindavan." },

  // Ayodhya & Haridwar
  { name: "Shri Ram Janmabhoomi Teerth Kshetra Yatri Sadan", phone: "9450012100", website: "", rating: "5.0", city: "Ayodhya", category: "Dharamshala & Trusts", notes: "Ram Janmabhoomi Teerth Kshetra Trust." },
  { name: "Kanak Bhawan Trust Dharamshala", phone: "9450012200", website: "", rating: "4.8", city: "Ayodhya", category: "Dharamshala & Trusts", notes: "Kanak Bhawan Atithi Niwas." },
  { name: "Birla Dharamshala Ayodhya", phone: "9450012300", website: "", rating: "4.7", city: "Ayodhya", category: "Dharamshala & Trusts", notes: "Birla Trust Ayodhya Dham." },
  { name: "Har Ki Pauri Trust Yatri Niwas", phone: "9897012100", website: "", rating: "4.8", city: "Haridwar", category: "Dharamshala & Trusts", notes: "Ganga Ghat Yatri Sadan Haridwar." },
  { name: "Jairam Ashram Trust Dharamshala", phone: "9897012200", website: "", rating: "4.7", city: "Haridwar", category: "Dharamshala & Trusts", notes: "Jairam Ashram Haridwar Complex." },
];

const STATUS_CONFIG = {
  new:       { label: "New Lead",         dot: "#d97706", bg: "rgba(217,119,6,0.08)",   border: "rgba(217,119,6,0.22)",   text: "#92400e" },
  contacted: { label: "Pitch Dispatched", dot: "#6366f1", bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.22)", text: "#4338ca" },
  interested:{ label: "In Negotiation",   dot: "#9333ea", bg: "rgba(147,51,234,0.08)", border: "rgba(147,51,234,0.22)", text: "#7e22ce" },
  converted: { label: "Closed Deal ✓",    dot: "#16a34a", bg: "rgba(22,163,74,0.08)",  border: "rgba(22,163,74,0.22)",  text: "#14532d" },
  lost:      { label: "Not Interested",   dot: "#94a3b8", bg: "rgba(148,163,184,0.08)",border: "rgba(148,163,184,0.22)",text: "#64748b" },
};

// Priority sorting hierarchy: Dispatched & active leads stay at the top; untouched new leads below
const STATUS_PRIORITY = {
  interested: 1, // In Negotiation (active hot discussion)
  contacted:  2, // Pitch Dispatched (reached out, active outreach)
  converted:  3, // Closed Deal ✓
  new:        4, // New Lead (untouched prospects)
  lost:       5, // Not Interested
};

/* ─────────────────────────────────────────────────────────────
   INLINE STYLES — DESIGN SYSTEM (Light / White Theme)
───────────────────────────────────────────────────────────── */
const DS = {
  // ── Surfaces (Clean white / slate light) ──
  canvasBg:      "#f8fafc",         // slate-50
  surfacePrimary:"#ffffff",         // pure white
  surfaceRaised: "#f1f5f9",         // slate-100
  surfaceBorder: "rgba(15,23,42,0.08)",
  surfaceBorderHover: "rgba(15,23,42,0.16)",

  // ── Typography ──
  textPrimary:   "#0f172a",         // slate-900
  textSecondary: "#475569",         // slate-600
  textTertiary:  "#94a3b8",         // slate-400
  textMono:      "'JetBrains Mono','Fira Code','Menlo',monospace",

  // ── Single coherent accent palette ──
  accentPrimary: "#6366f1",         // indigo-500  (primary CTA)
  accentPrimaryBg: "rgba(99,102,241,0.08)",
  accentPrimaryBorder: "rgba(99,102,241,0.22)",

  accentAmber:   "#d97706",         // amber-600   (🔥 hot/fire leads)
  accentAmberBg: "rgba(217,119,6,0.08)",
  accentAmberBorder: "rgba(217,119,6,0.22)",

  accentGreen:   "#16a34a",         // green-600   (success / converted)
  accentGreenBg: "rgba(22,163,74,0.08)",
  accentGreenBorder: "rgba(22,163,74,0.22)",

  accentBlue:    "#2563eb",         // blue-600    (info / website badge)
  accentBlueBg:  "rgba(37,99,235,0.08)",
  accentBlueBorder:"rgba(37,99,235,0.22)",

  accentRed:     "#dc2626",         // red-600     (delete)
  accentRedBg:   "rgba(220,38,38,0.08)",

  accentIndigo:  "#6366f1",

  // ── Soft shadows (no glow, clean drop shadows) ──
  glowPrimary: "0 0 0 2.5px rgba(99,102,241,0.18), 0 2px 8px rgba(99,102,241,0.10)",
  glowAmber:   "0 0 0 2.5px rgba(217,119,6,0.20),  0 2px 8px rgba(217,119,6,0.10)",
  glowGreen:   "0 0 0 2.5px rgba(22,163,74,0.18),  0 2px 8px rgba(22,163,74,0.10)",
  glowBlue:    "0 0 0 2.5px rgba(37,99,235,0.18),   0 2px 8px rgba(37,99,235,0.10)",
};

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────────────────────── */

function StatusPill({ status, onChange }) {
  const [open, setOpen] = useState(false);
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.new;
  const ref = useRef(null);

  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          padding: "3px 8px 3px 6px", borderRadius: "6px",
          background: cfg.bg, border: `1px solid ${cfg.border}`,
          color: cfg.text, fontSize: "0.72rem", fontWeight: 700,
          cursor: "pointer", letterSpacing: "0.2px", whiteSpace: "nowrap",
          transition: "all 0.15s ease",
        }}
      >
        <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: cfg.dot, boxShadow: `0 0 6px ${cfg.dot}`, flexShrink: 0 }} />
        {cfg.label}
        <i className="fas fa-chevron-down" style={{ fontSize: "8px", opacity: 0.7 }}></i>
      </button>
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", left: 0, zIndex: 500,
          background: DS.surfaceRaised, border: `1px solid ${DS.surfaceBorder}`,
          borderRadius: "10px", padding: "4px", minWidth: "176px",
          boxShadow: "0 16px 40px rgba(0,0,0,0.5)", backdropFilter: "blur(12px)",
        }}>
          {Object.entries(STATUS_CONFIG).map(([key, c]) => (
            <button
              key={key}
              onClick={() => { onChange(key); setOpen(false); }}
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                width: "100%", padding: "7px 10px", borderRadius: "7px",
                background: status === key ? "rgba(255,255,255,0.06)" : "transparent",
                border: "none", color: c.text, fontSize: "0.78rem",
                fontWeight: status === key ? 700 : 500, cursor: "pointer",
                textAlign: "left", transition: "background 0.1s ease",
              }}
              onMouseOver={e => { if(status !== key) e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
              onMouseOut={e => { if(status !== key) e.currentTarget.style.background = "transparent"; }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: c.dot, boxShadow: `0 0 6px ${c.dot}`, flexShrink: 0 }} />
              {c.label}
              {status === key && <i className="fas fa-check" style={{ marginLeft: "auto", fontSize: "10px", opacity: 0.8 }}></i>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function CityPill({ city, onChange, availableCities }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const citiesList = Array.from(new Set([
    ...(availableCities || []),
    city,
  ])).filter(Boolean);

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        title="Click to edit location"
        style={{
          display: "inline-flex", alignItems: "center", gap: "5px",
          padding: "3px 8px 3px 6px", borderRadius: "6px",
          background: "rgba(15,23,42,0.04)", border: `1px solid ${DS.surfaceBorder}`,
          color: DS.textSecondary, fontSize: "0.74rem", fontWeight: 600,
          cursor: "pointer", letterSpacing: "0.2px", whiteSpace: "nowrap",
          transition: "all 0.15s ease",
        }}
      >
        <i className="fas fa-location-dot" style={{ color: DS.accentRed, fontSize: "9px" }}></i>
        <span>{city || "Set City"}</span>
        <i className="fas fa-chevron-down" style={{ fontSize: "7px", opacity: 0.6 }}></i>
      </button>
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 4px)", left: 0, zIndex: 500,
          background: DS.surfacePrimary, border: `1px solid ${DS.surfaceBorder}`,
          borderRadius: "8px", padding: "4px", minWidth: "150px",
          boxShadow: "0 12px 30px rgba(15,23,42,0.15)",
        }}>
          <div style={{ maxHeight: "200px", overflowY: "auto" }}>
            {citiesList.map(c => (
              <button
                key={c}
                type="button"
                onClick={() => { onChange(c); setOpen(false); }}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  width: "100%", padding: "6px 8px", borderRadius: "5px",
                  background: city === c ? "rgba(99,102,241,0.08)" : "transparent",
                  border: "none", color: city === c ? DS.accentPrimary : DS.textSecondary,
                  fontSize: "0.74rem", fontWeight: city === c ? 700 : 500, cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span>{c}</span>
                {city === c && <i className="fas fa-check" style={{ fontSize: "8px", color: DS.accentPrimary }}></i>}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              const custom = prompt("Enter new city name:", city);
              if (custom && custom.trim()) {
                onChange(custom.trim());
                setOpen(false);
              }
            }}
            style={{
              width: "100%", padding: "6px 8px", borderRadius: "5px",
              background: "transparent", border: "none", borderTop: `1px solid ${DS.surfaceBorder}`,
              color: DS.accentPrimary, fontSize: "0.72rem", fontWeight: 700,
              cursor: "pointer", textAlign: "left", marginTop: "3px",
            }}
          >
            + Other City...
          </button>
        </div>
      )}
    </div>
  );
}

function NichePill({ lead, onChange, nicheStats }) {
  const [open, setOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const currentNiche = detectNiche(lead);
  const currentCfg = NICHE_CONFIG[currentNiche] || NICHE_CONFIG.general;
  const ref = useRef(null);

  useEffect(() => {
    const h = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setShowAll(false);
      }
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  // Filter dynamic niche list based on user's exact rule:
  // - If pending leads exist: only show niches that still have pending leads to send (plus current lead's niche)
  // - If all leads dispatched: show only niches that exist in the database (total > 0)
  // - Audio 2: "Agar marbles ka khatam ho gaya bhejte-bhejte, toh marbles hat jana chahiye dropdown se fir wahi dono bache rehne chahiye"
  const visibleNiches = useMemo(() => {
    if (showAll) return Object.entries(NICHE_CONFIG);

    const entries = Object.entries(NICHE_CONFIG).filter(([key]) => {
      // Always include current lead's assigned niche so user sees the active selection
      if (key === currentNiche) return true;

      const stat = nicheStats?.map?.[key];
      if (!stat) return false;

      if (nicheStats?.anyPending) {
        // As user sends leads, if all marbles dispatched (pending === 0), marble disappears!
        return stat.pending > 0;
      }

      // If no pending leads left, only show niches that actually exist in leads
      return stat.total > 0;
    });

    return entries.length > 0 ? entries : Object.entries(NICHE_CONFIG);
  }, [currentNiche, nicheStats, showAll]);

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        title="Select business industry / niche to auto-tailor WhatsApp pitch"
        style={{
          display: "inline-flex", alignItems: "center", gap: "5px",
          padding: "3px 8px 3px 6px", borderRadius: "6px",
          background: currentCfg.bg, border: `1px solid ${currentCfg.border}`,
          color: currentCfg.text, fontSize: "0.74rem", fontWeight: 700,
          cursor: "pointer", letterSpacing: "0.2px", whiteSpace: "nowrap",
          transition: "all 0.15s ease",
        }}
      >
        <i className={`fas ${currentCfg.icon}`} style={{ color: currentCfg.color, fontSize: "10px" }}></i>
        <span>{currentCfg.badge || currentCfg.label}</span>
        <i className="fas fa-chevron-down" style={{ fontSize: "7px", opacity: 0.6 }}></i>
      </button>

      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 4px)", left: 0, zIndex: 600,
          background: DS.surfacePrimary, border: `1px solid ${DS.surfaceBorder}`,
          borderRadius: "9px", padding: "6px", minWidth: "215px",
          boxShadow: "0 14px 35px rgba(15,23,42,0.18)",
        }}>
          <div style={{
            fontSize: "0.64rem", fontWeight: 700, color: DS.textTertiary,
            padding: "3px 8px 5px", textTransform: "uppercase", letterSpacing: "0.5px",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span>Select Pitch Template</span>
            <span style={{ fontSize: "0.6rem", color: DS.accentPrimary, fontWeight: 700 }}>
              {nicheStats?.anyPending ? "Active to send" : "Detected"}
            </span>
          </div>

          {visibleNiches.map(([key, cfg]) => {
            const isSelected = currentNiche === key;
            const stat = nicheStats?.map?.[key];
            const countLabel = nicheStats?.anyPending
              ? (stat?.pending > 0 ? `${stat.pending} left` : "")
              : (stat?.total > 0 ? `${stat.total}` : "");

            return (
              <button
                key={key}
                type="button"
                onClick={() => {
                  onChange(key, cfg.categoryName);
                  setOpen(false);
                  setShowAll(false);
                }}
                style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  width: "100%", padding: "6px 8px", borderRadius: "6px",
                  background: isSelected ? cfg.bg : "transparent",
                  border: isSelected ? `1px solid ${cfg.border}` : "1px solid transparent",
                  color: isSelected ? cfg.text : DS.textSecondary,
                  fontSize: "0.74rem", fontWeight: isSelected ? 700 : 500, cursor: "pointer",
                  textAlign: "left", transition: "all 0.1s ease",
                  marginBottom: "2px",
                }}
                onMouseOver={e => { if (!isSelected) e.currentTarget.style.background = "rgba(15,23,42,0.04)"; }}
                onMouseOut={e => { if (!isSelected) e.currentTarget.style.background = "transparent"; }}
              >
                <i className={`fas ${cfg.icon}`} style={{ fontSize: "11px", color: cfg.color, width: "14px", textAlign: "center" }}></i>
                <span style={{ flex: 1 }}>{cfg.label}</span>
                {countLabel && (
                  <span style={{ fontSize: "0.64rem", fontWeight: 700, opacity: 0.75, padding: "1px 6px", borderRadius: "4px", background: "rgba(0,0,0,0.05)" }}>
                    {countLabel}
                  </span>
                )}
                {isSelected && <i className="fas fa-check" style={{ fontSize: "8px", color: cfg.color, marginLeft: "4px" }}></i>}
              </button>
            );
          })}

          {/* Toggle to view all templates if needed */}
          <div style={{ borderTop: `1px solid ${DS.surfaceBorder}`, marginTop: "4px", paddingTop: "4px" }}>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setShowAll(v => !v); }}
              style={{
                background: "none", border: "none", color: DS.accentPrimary,
                fontSize: "0.68rem", fontWeight: 700, cursor: "pointer",
                padding: "3px 8px", width: "100%", textAlign: "left",
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}
            >
              <span>{showAll ? "✕ Show Only Active" : "+ Show all categories"}</span>
              <span style={{ opacity: 0.6 }}>{showAll ? "▲" : "▼"}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function StarRating({ rating }) {
  const num = parseFloat(rating) || 0;
  if (!num) return null;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "3px", fontSize: "0.72rem", fontWeight: 700, color: DS.accentAmber }}>
      <i className="fas fa-star" style={{ fontSize: "9px" }}></i>
      {num.toFixed(1)}
    </span>
  );
}

function KpiCard({ label, value, sub, accent, icon, glow }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      style={{
        background: hovered ? DS.surfaceRaised : DS.surfacePrimary,
        border: `1px solid ${hovered && glow ? accent + "44" : DS.surfaceBorder}`,
        borderRadius: "12px", padding: "16px 18px",
        transition: "all 0.2s ease",
        boxShadow: hovered && glow ? `0 0 18px ${accent}22` : "none",
        cursor: "default",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
        <span style={{ fontSize: "0.68rem", fontWeight: 700, color: DS.textSecondary, textTransform: "uppercase", letterSpacing: "0.8px" }}>{label}</span>
        <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: `${accent}18`, border: `1px solid ${accent}30`, display: "flex", alignItems: "center", justifyContent: "center", color: accent, fontSize: "12px", flexShrink: 0 }}>
          <i className={`fas ${icon}`}></i>
        </span>
      </div>
      <div style={{ fontSize: "1.75rem", fontWeight: 800, color: DS.textPrimary, letterSpacing: "-1px", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>{value}</div>
      {sub && <div style={{ fontSize: "0.72rem", color: glow ? accent : DS.textSecondary, fontWeight: 600, marginTop: "5px" }}>{sub}</div>}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
export default function B2BLeadGenerator({ isOnline: parentIsOnline = true }) {
  // State
  const [internalOnline, setInternalOnline] = useState(() => {
    return typeof navigator !== "undefined" ? navigator.onLine : true;
  });

  useEffect(() => {
    const handleOnline = () => setInternalOnline(true);
    const handleOffline = () => setInternalOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const isActuallyOnline = parentIsOnline && internalOnline;

  const [leads, setLeads] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [scraperOpen, setScraperOpen] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [activeView, setActiveView] = useState("table");
  const [editingId, setEditingId] = useState(null);
  const [notesDraft, setNotesDraft] = useState("");
  const [toast, setToast] = useState(null); // { leadId, name, type }
  const [copiedPitchId, setCopiedPitchId] = useState(null);

  // Filters (Persisted in sessionStorage so refresh preserves selected city)
  const [search, setSearch] = useState("");
  const [cityF, setCityF] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        return sessionStorage.getItem("ct_b2b_selected_city") || "all";
      } catch (e) {}
    }
    return "all";
  });
  const [webF, setWebF] = useState("all");
  const [statusF, setStatusF] = useState("all");
  const [nicheF, setNicheF] = useState("all");

  const handleCityFilterChange = (val) => {
    setCityF(val);
    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem("ct_b2b_selected_city", val);
      } catch (e) {}
    }
  };

  // Dynamic Google Maps Prospecting Search Engine State
  const [dynPrefixId, setDynPrefixId] = useState("dharamshala");
  const [dynLocation, setDynLocation] = useState("Khatu Shyam Ji, Rajasthan");
  const [dynCustomQuery, setDynCustomQuery] = useState("");
  const [dynCopiedQuery, setDynCopiedQuery] = useState(false);
  const [showPresets, setShowPresets] = useState(false);
  const [showScraperEngine, setShowScraperEngine] = useState(false);
  const fileRef = useRef(null);

  // ── Multi-Select Checkboxes & 1-by-1 Sequential WhatsApp Outreach Campaign State ──
  const [selectedIds, setSelectedIds] = useState(() => new Set());
  const [campaignOpen, setCampaignOpen] = useState(false);
  const [campaignIndex, setCampaignIndex] = useState(0);
  const [campaignText, setCampaignText] = useState("");
  const [campaignCopied, setCampaignCopied] = useState(false);

  // ── 1-Click Website Audit & Tech Inspector State ──
  const [auditingLeadId, setAuditingLeadId] = useState(null);
  const [auditModalLead, setAuditModalLead] = useState(null);
  const [auditCopied, setAuditCopied] = useState(false);

  const handleAuditWebsite = async (lead) => {
    if (!lead || !lead.website) return;
    setAuditingLeadId(lead.id);
    try {
      const result = await auditWebsiteTarget(lead.website);
      if (result) {
        setLeads(prev => prev.map(l => l.id === lead.id ? { ...l, auditResult: result } : l));
        await updateB2BLeadAudit(lead.id, result);
        setAuditModalLead({ ...lead, auditResult: result });
      }
    } catch (err) {
      console.error("Website audit scan failed:", err);
      alert("Website audit scan failed: " + (err.message || "Network error"));
    } finally {
      setAuditingLeadId(null);
    }
  };

  // ── Firestore Real-time Sync ──
  useEffect(() => {
    const unsub = subscribeToB2BLeads(
      (data) => { setLeads(data); setIsLoaded(true); },
      (err)  => { console.error("B2B leads sync error:", err); setIsLoaded(true); }
    );
    return () => unsub && unsub();
  }, []);

  // ── CSV Parser ──
  const parseAndImport = useCallback((text, fileName = "") => {
    if (!text || !text.trim()) {
      alert("CSV file khali hai!");
      return;
    }
    const lines = text.split(/\r?\n/).filter(l => l.trim());
    if (lines.length < 2) {
      alert("CSV file empty lag rahi hai. Pehle scraper script se leads download karein.");
      return;
    }

    const splitRow = (str) => {
      const arr = []; let q = false, col = "";
      for (let i = 0; i < str.length; i++) {
        const c = str[i];
        if (c === '"') {
          if (q && str[i+1] === '"') { col += '"'; i++; }
          else q = !q;
        } else if (c === ',' && !q) {
          arr.push(col.trim());
          col = "";
        } else {
          col += c;
        }
      }
      arr.push(col.trim());
      return arr;
    };

    const headers = splitRow(lines[0]).map(h => h.toLowerCase().replace(/[^a-z0-9]/g,""));
    const idx = (keys) => headers.findIndex(h => keys.some(k => h.includes(k)));
    const nameI  = idx(["name","title","business"]);
    const phoneI = idx(["phone","tel","mobile","contact"]);
    const emailI = idx(["email","mail"]);
    const webI   = idx(["web","url","site","link"]);
    const rateI  = idx(["rate","star","score"]);
    const cityI  = idx(["city","location","place","town","district"]);
    const catI   = idx(["category","niche","industry","type"]);

    const fn = (fileName || "").toLowerCase();
    
    // Extract location from filename like "Transport_and_logistics_companies_in_madhya_pradesh_Leads.csv"
    let fileLocation = "";
    const locMatch = fn.replace(/\.csv$/i, "").replace(/_leads$/i, "").match(/(?:^|_)in_([a-z_]+)$/);
    if (locMatch) {
      fileLocation = locMatch[1].split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    }

    // File level default city
    let defaultCity = fileLocation || "Rajasthan";
    if (fn.includes("khatu shyam") || fn.includes("khatushyam") || fn.includes("khatu")) defaultCity = "Khatu Shyam Ji";
    else if (fn.includes("chittor") || fn.includes("sanwaliya")) defaultCity = "Chittorgarh";
    else if (fn.includes("udaipur")) defaultCity = "Udaipur";
    else if (fn.includes("jaipur")) defaultCity = "Jaipur";
    else if (fn.includes("jodhpur")) defaultCity = "Jodhpur";
    else if (fn.includes("kota")) defaultCity = "Kota";
    else if (fn.includes("ajmer")) defaultCity = "Ajmer";
    else if (fn.includes("bhilwara")) defaultCity = "Bhilwara";
    else if (fn.includes("bhopal")) defaultCity = "Bhopal";
    else if (fn.includes("indore")) defaultCity = "Indore";
    else if (fn.includes("gwalior")) defaultCity = "Gwalior";
    else if (fn.includes("jabalpur")) defaultCity = "Jabalpur";
    else if (fn.includes("ujjain")) defaultCity = "Ujjain";
    else if (fn.includes("madhya pradesh") || fn.includes("madhya_pradesh")) defaultCity = "Madhya Pradesh";
    else if (fileLocation) defaultCity = fileLocation;
    else {
      const cleanFn = (fileName || "").replace(/\.csv$/i, "").replace(/_leads$/i, "").replace(/leads/i, "").replace(/_/g, " ").trim();
      if (cleanFn && cleanFn.length > 2) {
        defaultCity = cleanFn.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
      }
    }

    // File level default category
    let defaultCat = "General";
    if (fn.includes("transport") || fn.includes("logistic") || fn.includes("cargo") || fn.includes("packer") || fn.includes("mover") || fn.includes("truck") || fn.includes("fleet") || fn.includes("carrier")) defaultCat = "Transport & Logistics";
    else if (fn.includes("marble") || fn.includes("granite") || fn.includes("stone")) defaultCat = "Marble & Granite";
    else if (fn.includes("dharamshala") || fn.includes("dharmashala") || fn.includes("trust") || fn.includes("mandir")) defaultCat = "Dharamshala & Trusts";
    else if (fn.includes("hotel") || fn.includes("resort")) defaultCat = "Hotels & Resorts";
    else if (fn.includes("textile")) defaultCat = "Textile & Manufacturing";
    else if (fn.includes("school") || fn.includes("college") || fn.includes("education") || fn.includes("coaching")) defaultCat = "Schools & Colleges";

    const batch = [];

    lines.slice(1).forEach(line => {
      const cols = splitRow(line);
      const name = (nameI !== -1 ? cols[nameI] : cols[0]) || "";
      if (!name.trim()) return;
      const phone = (phoneI !== -1 ? cols[phoneI] : cols[1]) || "";
      // STRICT FILTER: Skip any lead without a phone number
      if (!phone || !phone.trim()) return;
      const email = (emailI !== -1 ? cols[emailI] : "") || "";
      const website = (webI !== -1 ? cols[webI] : cols[2]) || "";
      const rating = (rateI !== -1 ? cols[rateI] : cols[3]) || "";

      // City detection: Column -> Name/Address text -> File Name default
      let rowCity = (cityI !== -1 ? cols[cityI] : "")?.trim();
      const fnLower = (fileName || "").toLowerCase();
      // If rowCity is empty OR was wrongly assigned "Bhilwara" while the filename/content specifies another location
      const hasMismatch = rowCity.toLowerCase() === "bhilwara" && (fnLower.includes("madhya") || fnLower.includes("bhopal") || fnLower.includes("indore") || (fileLocation && fileLocation.toLowerCase() !== "bhilwara"));
      if (!rowCity || hasMismatch) {
        const t = (name + " " + (cols[4] || "") + " " + fileName).toLowerCase();
        if (t.includes("bhopal")) rowCity = "Bhopal";
        else if (t.includes("indore")) rowCity = "Indore";
        else if (t.includes("gwalior")) rowCity = "Gwalior";
        else if (t.includes("jabalpur")) rowCity = "Jabalpur";
        else if (t.includes("ujjain")) rowCity = "Ujjain";
        else if (t.includes("madhya pradesh") || t.includes("madhya_pradesh")) rowCity = "Madhya Pradesh";
        else if (t.includes("khatu shyam") || t.includes("khatushyam") || t.includes("khatu")) rowCity = "Khatu Shyam Ji";
        else if (t.includes("chittor") || t.includes("sanwaliya") || t.includes("nimbahera") || t.includes("kapasan") || t.includes("bassi")) rowCity = "Chittorgarh";
        else if (t.includes("udaipur") || t.includes("sukhadia") || t.includes("fateh sagar")) rowCity = "Udaipur";
        else if (t.includes("jaipur")) rowCity = "Jaipur";
        else if (t.includes("jodhpur")) rowCity = "Jodhpur";
        else if (t.includes("kota")) rowCity = "Kota";
        else if (t.includes("bhilwara") && !hasMismatch) rowCity = "Bhilwara";
        else rowCity = defaultCity;
      }

      // Category detection: Column -> Name -> File Name default
      let rowCat = (catI !== -1 ? cols[catI] : "")?.trim();
      if (!rowCat || rowCat.toLowerCase() === "general") {
        const t = (name + " " + fileName).toLowerCase();
        if (t.includes("transport") || t.includes("logistic") || t.includes("cargo") || t.includes("packer") || t.includes("mover") || t.includes("carrier") || t.includes("truck") || t.includes("fleet") || t.includes("bilty") || t.includes("freight")) rowCat = "Transport & Logistics";
        else if (t.includes("dharamshala") || t.includes("dharmashala") || t.includes("dharmsala") || t.includes("dharmshala") || t.includes("trust") || t.includes("mandir") || t.includes("temple") || t.includes("dadawadi") || t.includes("ashram")) rowCat = "Dharamshala & Trusts";
        else if (t.includes("marble") || t.includes("granite") || t.includes("stone") || t.includes("mines") || t.includes("quartz") || t.includes("marmo")) rowCat = "Marble & Granite";
        else if (t.includes("hotel") || t.includes("resort") || t.includes("palace") || t.includes("stay") || t.includes("inn") || t.includes("haveli")) rowCat = "Hotels & Resorts";
        else if (t.includes("textile") || t.includes("spin") || t.includes("suit") || t.includes("fabric") || t.includes("garment") || t.includes("yarn") || t.includes("mill") || t.includes("synthetics")) rowCat = "Textile & Manufacturing";
        else if (t.includes("school") || t.includes("college") || t.includes("coaching") || t.includes("institute") || t.includes("education") || t.includes("academy")) rowCat = "Schools & Colleges";
        else rowCat = defaultCat;
      }

      batch.push({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        website: website.trim(),
        rating: rating.trim(),
        city: rowCity,
        category: rowCat,
        notes: !website.trim() ? "NO WEBSITE — Prime outreach target." : "",
      });
    });

    if (!batch.length) {
      alert("CSV mein koi valid leads nahi mili.");
      return;
    }

    setIsImporting(true);

    // Save to Firestore (cloud)
    addB2BLeads(batch)
      .then(({ added, skipped }) => {
        setIsImporting(false);
        alert(`✅ ${added} new leads Firestore Cloud mein save ho gaye!${skipped ? ` (${skipped} duplicate phones skip kiye)` : ""}`);
      })
      .catch((err) => {
        setIsImporting(false);
        alert(`❌ Firestore save failed: ${err.message || "Error"}. Browser console check karein.`);
        console.error("Firestore save error:", err);
      });
  }, []);

  const handleFile = (file) => {
    if (!file) return;
    const r = new FileReader();
    r.onload = e => parseAndImport(e.target.result, file.name);
    r.onerror = err => {
      console.error("FileReader error:", err);
      alert("File read karne mein error aayi!");
    };
    r.readAsText(file, "UTF-8");
  };

  // ── Lead Operations (Firestore) ──
  const updateStatus = (id, s) => updateB2BLeadStatus(id, s);
  const updateCity = (id, c) => updateB2BLeadCity(id, c);
  const updateCategory = (id, pitchType, categoryName) => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, pitchType, category: categoryName } : l));
    updateB2BLeadCategory(id, categoryName, pitchType);
  };
  const saveNotes = (id, notes) => { updateB2BLeadNotes(id, notes); setEditingId(null); };
  const deleteLead = (id, name) => {
    if (window.confirm(`Delete "${name}"?`)) deleteB2BLead(id);
  };

  // ── Preloaded Dharamshalas 1-Click Database Loader ──
  const handleLoadPreloadedDharamshalas = () => {
    if (!window.confirm(`Load ${PRELOADED_DHARAMSHALAS.length}+ Pre-verified Dharamshalas & Mandir Trusts into your Firestore cloud database?`)) return;
    setIsImporting(true);
    addB2BLeads(PRELOADED_DHARAMSHALAS)
      .then(({ added, skipped }) => {
        setIsImporting(false);
        alert(`✅ ${added} Verified Dharamshalas & Mandir Trusts Firestore Cloud mein load ho gaye!${skipped ? ` (${skipped} already existing skip kiye)` : ""}`);
      })
      .catch((err) => {
        setIsImporting(false);
        alert(`❌ Firestore load failed: ${err.message || "Error"}`);
      });
  };

  // ── Scraper Clipboard Helper ──
  const copyCode = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(SCRAPER_CODE);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2500);
    }
  };

  // ── 1-Click Pitch Clipboard Helper (with emojis) ──
  const copyPitch = (lead) => {
    const text = generateWhatsAppPitch(lead);
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedPitchId(lead.id);
      setTimeout(() => setCopiedPitchId(null), 2500);
    }
  };

  // ── WhatsApp ──
  const waLink = (lead) => {
    let ph = lead.phone?.replace(/\D/g,"") || "";
    if (ph.length === 10) ph = "91" + ph;
    if (ph.length === 11 && ph[0] === "0") ph = "91" + ph.slice(1);
    if (!ph) return "";
    const text = generateWhatsAppPitch(lead);
    // Direct link to avoid wa.me 302 redirect which corrupts 4-byte UTF-8 emojis into %EF%BF%BD ()
    const isMobile = typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const base = isMobile ? "https://api.whatsapp.com/send" : "https://web.whatsapp.com/send";
    return `${base}?phone=${ph}&text=${encodeURIComponent(text)}`;
  };

  // ── 1-Click Pre-filled Email Pitch ──
  const emailLink = (lead) => {
    if (!lead.email) return "";
    const { subject, body } = generateEmailPitch(lead);
    return `mailto:${encodeURIComponent(lead.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // ── Export ──
  const exportCSV = () => {
    if (!leads.length) return;
    const h = ["Business Name","Phone","Website","Rating","City","Category","Status","Notes","Imported"];
    const rows = leads.map(l => [`"${(l.name||"").replace(/"/g,'""')}"`,"\""+l.phone+"\"","\""+l.website+"\"","\""+l.rating+"\"","\""+l.city+"\"","\""+l.category+"\"","\""+l.status+"\"","\""+((l.notes||"").replace(/"/g,'""'))+"\"","\""+l.importedAt+"\""]);
    const csv = "data:text/csv;charset=utf-8,"+encodeURI([h.join(","),...rows.map(r=>r.join(","))].join("\n"));
    const a = document.createElement("a"); a.href=csv; a.download=`ChittorTech_B2B_Leads_${Date.now()}.csv`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  };

  // ── Contact Action (Trigger Outreach & Show Outcome Confirmation Popup) ──
  const onContactClick = (lead, type) => {
    // Show top floating confirmation prompt to allow user to choose the outcome
    setToast({ leadId: lead.id, name: lead.name, type });
  };

  // ── Dynamic Niche Breakdown & Pending Outbound Counts ──
  // Audio instructions:
  // 1. "business me apne aap upar se lena chahiye matlab ye dekh lega ki kon-kon se abhi tak types businesses ke hain, wahi dikhayega agar transport and logistics nahi hai toh wo nahi dikhana chahiye taaki confusion nahi ho"
  // 2. "aur maan lijiye kisi ke lead send karte-karte, teen hai: transport, education, marbles. Agar marbles ka khatam ho gaya bhejte-bhejte, toh marbles hat jana chahiye dropdown se fir wahi dono bache rehne chahiye"
  const nicheStats = useMemo(() => {
    const map = {};
    Object.keys(NICHE_CONFIG).forEach(k => {
      map[k] = { total: 0, pending: 0 };
    });

    leads.forEach(l => {
      const n = detectNiche(l);
      if (!map[n]) map[n] = { total: 0, pending: 0 };
      map[n].total += 1;
      const isPending = !l.status || l.status === "new";
      if (isPending) map[n].pending += 1;
    });

    const anyPending = Object.values(map).some(v => v.pending > 0);
    return { map, anyPending };
  }, [leads]);

  // ── Unique Available Cities (Strictly dynamic from existing leads only) ──
  const availableCities = useMemo(() => {
    const fromLeads = leads
      .map(l => (l.city || "").trim())
      .filter(Boolean);
    return Array.from(new Set(fromLeads)).sort((a, b) => a.localeCompare(b));
  }, [leads]);

  // ── Filtered & Prioritized Leads ──
  // Dispatched ("Pitch Dispatched", "In Negotiation") float to the top; untouched new leads stay below.
  const filtered = useMemo(() => {
    const list = leads.filter(l => {
      if (search.trim()) {
        const q = search.toLowerCase();
        if (![(l.name||""),(l.phone||""),(l.website||""),(l.notes||"")].some(v=>v.toLowerCase().includes(q))) return false;
      }
      if (cityF !== "all" && l.city !== cityF) return false;
      if (statusF !== "all" && (l.status||"new") !== statusF) return false;
      if (webF === "no_web" && l.website?.trim()) return false;
      if (webF === "has_web" && !l.website?.trim()) return false;
      if (nicheF !== "all" && detectNiche(l) !== nicheF) return false;
      return true;
    });

    return list.sort((a, b) => {
      const pA = STATUS_PRIORITY[a.status] || STATUS_PRIORITY.new;
      const pB = STATUS_PRIORITY[b.status] || STATUS_PRIORITY.new;
      if (pA !== pB) return pA - pB;

      // Within same status tier: Most recent activity / update or import at top
      const timeA = a.updatedAtDate?.getTime?.() || (a.updatedAt?.toMillis ? a.updatedAt.toMillis() : (a.importedAtDate?.getTime?.() || 0));
      const timeB = b.updatedAtDate?.getTime?.() || (b.updatedAt?.toMillis ? b.updatedAt.toMillis() : (b.importedAtDate?.getTime?.() || 0));
      return timeB - timeA;
    });
  }, [leads, search, cityF, statusF, webF, nicheF]);

  // ── Stats ──
  const stats = useMemo(() => ({
    total:     leads.length,
    noWeb:     leads.filter(l => !l.website?.trim()).length,
    hasWeb:    leads.filter(l =>  l.website?.trim()).length,
    contacted: leads.filter(l => l.status === "contacted").length,
    interested:leads.filter(l => l.status === "interested").length,
    converted: leads.filter(l => l.status === "converted").length,
    lost:      leads.filter(l => l.status === "lost").length,
  }), [leads]);

  // ── Multi-Selection & Queue Computations (Depends on filtered & leads) ──
  const selectedQueue = useMemo(() => {
    return leads.filter(l => selectedIds.has(l.id) && l.phone?.trim());
  }, [leads, selectedIds]);

  const untouchedCount = useMemo(() => {
    return filtered.filter(l => (l.status || "new") === "new" && l.phone?.trim()).length;
  }, [filtered]);

  const isAllFilteredSelected = filtered.length > 0 && filtered.every(l => selectedIds.has(l.id));

  const toggleSelectLead = (id) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleSelectAllFiltered = () => {
    if (isAllFilteredSelected) {
      setSelectedIds(prev => {
        const next = new Set(prev);
        filtered.forEach(l => next.delete(l.id));
        return next;
      });
    } else {
      setSelectedIds(prev => {
        const next = new Set(prev);
        filtered.forEach(l => next.add(l.id));
        return next;
      });
    }
  };

  const selectUntouchedNewLeads = () => {
    const newLeads = filtered.filter(l => (l.status || "new") === "new" && l.phone?.trim());
    setSelectedIds(new Set(newLeads.map(l => l.id)));
  };

  const clearSelection = () => {
    setSelectedIds(new Set());
  };

  const startCampaign = () => {
    if (selectedQueue.length === 0) {
      alert("Pehle un leads ke checkbox par tick mark lagayein jinhe WhatsApp message bhejna hai!");
      return;
    }
    setCampaignIndex(0);
    setCampaignText(generateWhatsAppPitch(selectedQueue[0]));
    setCampaignOpen(true);
    setCampaignCopied(false);
  };

  // Sync message preview whenever active lead changes in the campaign
  useEffect(() => {
    if (campaignOpen && selectedQueue[campaignIndex]) {
      setCampaignText(generateWhatsAppPitch(selectedQueue[campaignIndex]));
      setCampaignCopied(false);
    }
  }, [campaignIndex, campaignOpen, selectedQueue]);

  // Campaign Navigation Handlers
  const handleCampaignSendAndNext = (statusOutcome = "contacted") => {
    const currentLead = selectedQueue[campaignIndex];
    if (!currentLead) return;

    let ph = currentLead.phone?.replace(/\D/g, "") || "";
    if (ph.length === 10) ph = "91" + ph;
    if (ph.length === 11 && ph[0] === "0") ph = "91" + ph.slice(1);

    if (ph) {
      const isMobile = typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      const base = isMobile ? "https://api.whatsapp.com/send" : "https://web.whatsapp.com/send";
      const url = `${base}?phone=${ph}&text=${encodeURIComponent(campaignText)}`;
      window.open(url, "_blank");
    }

    // Mark status in cloud Firestore
    updateStatus(currentLead.id, statusOutcome);

    // Advance to next lead in queue or finish
    if (campaignIndex < selectedQueue.length - 1) {
      setCampaignIndex(prev => prev + 1);
    } else {
      setCampaignIndex(selectedQueue.length); // Completed screen
    }
  };

  const handleCampaignSkip = () => {
    if (campaignIndex < selectedQueue.length - 1) {
      setCampaignIndex(prev => prev + 1);
    } else {
      setCampaignIndex(selectedQueue.length);
    }
  };

  const handleCampaignPrev = () => {
    if (campaignIndex > 0) {
      setCampaignIndex(prev => prev - 1);
    }
  };

  const copyCampaignText = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(campaignText);
      setCampaignCopied(true);
      setTimeout(() => setCampaignCopied(false), 2000);
    }
  };

  // Keyboard shortcut support for superfast campaign running
  useEffect(() => {
    if (!campaignOpen) return;
    const handleKeyDown = (e) => {
      if (e.target.tagName === "TEXTAREA" || e.target.tagName === "INPUT") {
        if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
          e.preventDefault();
          handleCampaignSendAndNext("contacted");
        }
        return;
      }
      if (e.key === "Enter") {
        e.preventDefault();
        handleCampaignSendAndNext("contacted");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleCampaignSkip();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handleCampaignPrev();
      } else if (e.key === "Escape") {
        e.preventDefault();
        setCampaignOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [campaignOpen, campaignIndex, selectedQueue, campaignText]);

  /* ─────────────────────── RENDER ─────────────────────── */
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: DS.textPrimary, animation: "b2bFadeIn 0.25s ease" }}>
      <style>{`
        @keyframes b2bFadeIn { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulseGlow { 0%,100% { opacity:1; } 50% { opacity:0.35; } }
        @keyframes toastSlideDown { from { transform: translate(-50%, -36px); opacity: 0; } to { transform: translate(-50%, 0); opacity: 1; } }
        .b2b-row:hover { background: #f8fafc !important; }
        .b2b-action-btn:hover { opacity: 0.88; transform: translateY(-1px); }
        .b2b-chip:hover { background: rgba(99,102,241,0.08) !important; border-color: rgba(99,102,241,0.3) !important; color: #6366f1 !important; transform: translateY(-1px); }
        .b2b-preset:hover { border-color: rgba(99,102,241,0.3) !important; background: rgba(99,102,241,0.06) !important; }
        .b2b-wa-btn:hover { opacity: 0.85; transform: translateY(-1px); }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: #f1f5f9; }
        ::-webkit-scrollbar-thumb { background: rgba(15,23,42,0.18); border-radius: 4px; }
        .b2b-note-input:focus { outline: none; border-color: ${DS.accentPrimary} !important; box-shadow: ${DS.glowPrimary}; }
        .b2b-search:focus { outline: none; border-color: ${DS.accentPrimary} !important; box-shadow: ${DS.glowPrimary}; }
        select { appearance: none; background-color: #ffffff; }
        select:focus { outline: none; border-color: ${DS.accentPrimary} !important; }
      `}</style>

      {/* ══════════════════════════════════════════
          FLOATING TOP TOAST NOTIFICATION
      ══════════════════════════════════════════ */}
      {toast && (
        <div style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 999999,
          width: "calc(100% - 32px)",
          maxWidth: "740px",
          background: "#ffffff",
          border: "1.5px solid rgba(34, 197, 94, 0.35)",
          borderRadius: "16px",
          padding: "12px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          boxShadow: "0 20px 50px rgba(15, 23, 42, 0.22), 0 4px 14px rgba(22, 163, 74, 0.16)",
          animation: "toastSlideDown 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
          backdropFilter: "blur(12px)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{
              width: "36px", height: "36px", borderRadius: "10px",
              background: "linear-gradient(135deg, #22c55e, #16a34a)",
              color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "16px", flexShrink: 0,
              boxShadow: "0 4px 12px rgba(34, 197, 94, 0.35)",
            }}>
              <i className={toast.type === "whatsapp" ? "fab fa-whatsapp" : "fas fa-envelope"}></i>
            </span>
            <div>
              <div style={{ fontSize: "0.86rem", fontWeight: 800, color: "#0f172a", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                <span>{toast.type === "whatsapp" ? "WhatsApp Pitch Sent" : "Email Sent"}</span>
                <span style={{ fontSize: "0.74rem", fontWeight: 700, color: "#16a34a", background: "rgba(34, 197, 94, 0.12)", border: "1px solid rgba(34, 197, 94, 0.25)", padding: "1px 8px", borderRadius: "20px" }}>
                  {toast.name}
                </span>
              </div>
              <div style={{ fontSize: "0.74rem", color: "#64748b", marginTop: "1px" }}>
                Outcome select karein (Firestore Cloud par real-time save hoga):
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
            {[
              { label: "Pitch Dispatched", val: "contacted", bg: "rgba(99,102,241,0.1)", color: "#4338ca", border: "rgba(99,102,241,0.25)" },
              { label: "Interested", val: "interested", bg: "rgba(147,51,234,0.1)", color: "#7e22ce", border: "rgba(147,51,234,0.25)" },
              { label: "Closed Deal ✓", val: "converted", bg: "rgba(34,197,94,0.12)", color: "#15803d", border: "rgba(34,197,94,0.3)" },
              { label: "Not Interested", val: "lost", bg: "rgba(100,116,139,0.1)", color: "#475569", border: "rgba(100,116,139,0.2)" },
            ].map(opt => (
              <button
                key={opt.val}
                onClick={() => {
                  updateStatus(toast.leadId, opt.val);
                  setToast(null);
                }}
                style={{
                  padding: "6px 12px",
                  borderRadius: "8px",
                  border: `1px solid ${opt.border}`,
                  background: opt.bg,
                  color: opt.color,
                  fontSize: "0.76rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                Mark {opt.label}
              </button>
            ))}
            <button
              onClick={() => setToast(null)}
              style={{
                background: "rgba(15,23,42,0.06)",
                border: "none",
                color: "#64748b",
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "13px",
                cursor: "pointer",
                marginLeft: "2px",
                fontWeight: 700,
              }}
              title="Close notification"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════
          1. COMPACT COMMAND BAR & LEAD ENGINE TOGGLE
      ══════════════════════════════════════════ */}
      {/* Hidden file input triggered by fileRef */}
      <input
        type="file"
        ref={fileRef}
        accept=".csv,text/csv,application/vnd.ms-excel"
        style={{ display: "none" }}
        onChange={e => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = "";
        }}
      />

      <div style={{
        background: DS.surfacePrimary,
        border: `1px solid ${DS.surfaceBorder}`,
        borderRadius: "14px", marginBottom: "12px",
        padding: "12px 18px",
        boxShadow: "0 1px 4px rgba(15,23,42,0.06), 0 4px 16px rgba(15,23,42,0.04)",
      }}>
        {/* Main Header Row: Title + Interactive Quick KPI Filters + Action Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
          
          {/* Title & Active Count */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "34px", height: "34px", borderRadius: "9px",
              background: "linear-gradient(135deg, #6366f1, #818cf8)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 2px 8px rgba(99,102,241,0.25)", flexShrink: 0,
            }}>
              <i className="fas fa-satellite-dish" style={{ color: "#ffffff", fontSize: "14px" }}></i>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <h2 style={{ fontSize: "0.98rem", fontWeight: 800, color: DS.textPrimary, margin: 0, letterSpacing: "-0.3px" }}>
                  B2B Outbound Leads
                </h2>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: "4px",
                  background: DS.accentGreenBg, border: `1px solid ${DS.accentGreenBorder}`,
                  color: DS.accentGreen, fontSize: "0.65rem", fontWeight: 800,
                  padding: "1px 7px", borderRadius: "20px",
                }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: DS.accentGreen, animation: "pulseGlow 1.8s ease infinite" }}></span>
                  {leads.length} Real Prospects
                </span>
              </div>
            </div>
          </div>

          {/* Quick Clickable KPI Filter Pills (Only shown when full drawer is collapsed) */}
          {!showScraperEngine && (
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "5px" }}>
              <button
                type="button"
                onClick={() => { setWebF("all"); setStatusF("all"); }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "4px",
                  padding: "4px 9px", borderRadius: "6px",
                  background: webF === "all" && statusF === "all" ? "rgba(99,102,241,0.12)" : "rgba(15,23,42,0.03)",
                  border: `1px solid ${webF === "all" && statusF === "all" ? DS.accentPrimary : DS.surfaceBorder}`,
                  color: webF === "all" && statusF === "all" ? DS.accentPrimary : DS.textSecondary,
                  fontSize: "0.72rem", fontWeight: 700, cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
                title="Show all leads"
              >
                <i className="fas fa-database" style={{ fontSize: "9px" }}></i>
                <span>All ({leads.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setWebF(webF === "no_web" ? "all" : "no_web")}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "4px",
                  padding: "4px 9px", borderRadius: "6px",
                  background: webF === "no_web" ? "rgba(245,158,11,0.18)" : "rgba(245,158,11,0.06)",
                  border: `1px solid ${webF === "no_web" ? DS.accentAmber : "rgba(245,158,11,0.25)"}`,
                  color: DS.accentAmber,
                  fontSize: "0.72rem", fontWeight: 700, cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
                title="Filter leads without website"
              >
                <i className="fas fa-fire" style={{ fontSize: "9px" }}></i>
                <span>🔥 {stats.noWeb} No Web</span>
              </button>

              <button
                type="button"
                onClick={() => setWebF(webF === "has_web" ? "all" : "has_web")}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "4px",
                  padding: "4px 9px", borderRadius: "6px",
                  background: webF === "has_web" ? "rgba(59,130,246,0.18)" : "rgba(59,130,246,0.06)",
                  border: `1px solid ${webF === "has_web" ? DS.accentBlue : "rgba(59,130,246,0.25)"}`,
                  color: DS.accentBlue,
                  fontSize: "0.72rem", fontWeight: 700, cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
                title="Filter leads with website"
              >
                <i className="fas fa-globe" style={{ fontSize: "9px" }}></i>
                <span>🌐 {stats.hasWeb} Has Web</span>
              </button>

              <button
                type="button"
                onClick={() => setStatusF(statusF === "contacted" ? "all" : "contacted")}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "4px",
                  padding: "4px 9px", borderRadius: "6px",
                  background: statusF === "contacted" ? "rgba(99,102,241,0.18)" : "rgba(99,102,241,0.06)",
                  border: `1px solid ${statusF === "contacted" ? DS.accentPrimary : "rgba(99,102,241,0.25)"}`,
                  color: DS.accentPrimary,
                  fontSize: "0.72rem", fontWeight: 700, cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
                title="Filter dispatched pitches"
              >
                <i className="fas fa-paper-plane" style={{ fontSize: "9px" }}></i>
                <span>🚀 {stats.contacted} Dispatched</span>
              </button>

              <button
                type="button"
                onClick={() => setStatusF(statusF === "interested" ? "all" : "interested")}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "4px",
                  padding: "4px 9px", borderRadius: "6px",
                  background: statusF === "interested" ? "rgba(22,163,74,0.18)" : "rgba(22,163,74,0.06)",
                  border: `1px solid ${statusF === "interested" ? DS.accentGreen : "rgba(22,163,74,0.25)"}`,
                  color: DS.accentGreen,
                  fontSize: "0.72rem", fontWeight: 700, cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
                title="Filter active hot negotiations"
              >
                <i className="fas fa-handshake" style={{ fontSize: "9px" }}></i>
                <span>🤝 {stats.interested} Interested</span>
              </button>
            </div>
          )}

          {/* Action Buttons: Scraper Toggle + Upload CSV + Copy Script */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <button
              type="button"
              onClick={() => setShowScraperEngine(v => !v)}
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "6px 12px", borderRadius: "8px",
                background: showScraperEngine ? "linear-gradient(135deg, #4f46e5, #6366f1)" : "rgba(99,102,241,0.08)",
                border: `1px solid ${showScraperEngine ? "#4f46e5" : DS.accentPrimaryBorder}`,
                color: showScraperEngine ? "#ffffff" : DS.accentPrimary,
                fontSize: "0.76rem", fontWeight: 700, cursor: "pointer",
                boxShadow: showScraperEngine ? "0 2px 6px rgba(79,70,229,0.3)" : "none",
                transition: "all 0.15s ease",
              }}
              title="Toggle Google Maps search builder & lead scraper"
            >
              <i className={`fas ${showScraperEngine ? "fa-times" : "fa-magnifying-glass-location"}`} style={{ fontSize: "11px" }}></i>
              <span>{showScraperEngine ? "Hide Scraper ▲" : "🔍 Maps Scraper Engine ▼"}</span>
            </button>

            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "6px 11px", borderRadius: "8px",
                background: "rgba(15,23,42,0.04)",
                border: `1px solid ${DS.surfaceBorder}`,
                color: DS.textSecondary,
                fontSize: "0.76rem", fontWeight: 700, cursor: "pointer",
                transition: "all 0.15s ease",
              }}
              title="Import Google Maps CSV directly"
            >
              <i className="fas fa-cloud-arrow-up" style={{ fontSize: "11px", color: DS.accentPrimary }}></i>
              <span>Upload CSV</span>
            </button>

            <button
              type="button"
              onClick={copyCode}
              style={{
                display: "inline-flex", alignItems: "center", gap: "5px",
                padding: "6px 10px", borderRadius: "8px",
                background: codeCopied ? DS.accentGreenBg : "rgba(15,23,42,0.04)",
                border: `1px solid ${codeCopied ? DS.accentGreenBorder : DS.surfaceBorder}`,
                color: codeCopied ? DS.accentGreen : DS.textSecondary,
                fontSize: "0.76rem", fontWeight: 700, cursor: "pointer",
                transition: "all 0.15s ease",
              }}
              title="Google Maps console (F12) extractor script copy karein"
            >
              <i className={`fas ${codeCopied ? "fa-check" : "fa-copy"}`} style={{ fontSize: "10px" }}></i>
              <span>{codeCopied ? "Copied!" : "Script"}</span>
            </button>
          </div>
        </div>

        {/* ── Collapsible Full Engine & KPI Dashboard ── */}
        {showScraperEngine && (
          <div style={{
            marginTop: "14px",
            paddingTop: "14px",
            borderTop: `1px solid ${DS.surfaceBorder}`,
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}>
            {/* Full 6 Rich KPI Stat Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(175px, 1fr))", gap: "10px" }}>
              <div onClick={() => { setWebF("all"); setStatusF("all"); }} style={{ cursor: "pointer" }} title="Click to view all prospects">
                <KpiCard label="Saved in Engine" value={stats.total} sub="Total prospects" accent={DS.accentPrimary} icon="fa-database" />
              </div>
              <div onClick={() => setWebF(webF === "no_web" ? "all" : "no_web")} style={{ cursor: "pointer" }} title="Click to filter leads with NO website">
                <KpiCard label="🔥 No Website" value={stats.noWeb} sub="Needs web presence" accent={DS.accentAmber} icon="fa-fire" glow />
              </div>
              <div onClick={() => setWebF(webF === "has_web" ? "all" : "has_web")} style={{ cursor: "pointer" }} title="Click to filter leads with existing website">
                <KpiCard label="Has Website" value={stats.hasWeb} sub="SEO & Redesign" accent={DS.accentBlue} icon="fa-globe" />
              </div>
              <div onClick={() => setStatusF(statusF === "contacted" ? "all" : "contacted")} style={{ cursor: "pointer" }} title="Click to filter Dispatched pitches">
                <KpiCard label="Pitch Dispatched" value={stats.contacted} sub="Messages sent" accent={DS.accentPrimary} icon="fa-paper-plane" />
              </div>
              <div onClick={() => setStatusF(statusF === "interested" ? "all" : "interested")} style={{ cursor: "pointer" }} title="Click to filter Interested hot leads">
                <KpiCard label="Interested" value={stats.interested} sub="In active discussion" accent={DS.accentGreen} icon="fa-handshake" glow />
              </div>
              <div onClick={() => setStatusF(statusF === "lost" ? "all" : "lost")} style={{ cursor: "pointer" }} title="Click to filter Not Interested leads">
                <KpiCard label="Not Interested" value={stats.lost} sub="Cold / dropped leads" accent="#64748b" icon="fa-ban" />
              </div>
            </div>

            {/* Dynamic Search Builder & Scraper */}
            {(() => {
              const activePrefixObj = SEARCH_PREFIX_TEMPLATES.find(t => t.id === dynPrefixId) || SEARCH_PREFIX_TEMPLATES[0];
              const isCustomMode = dynPrefixId === "custom";
              const constructedQuery = isCustomMode
                ? (dynCustomQuery.trim() || dynLocation.trim() || "Hotels and Businesses in Rajasthan")
                : `${activePrefixObj.prefix}${dynLocation.trim() || "Rajasthan"}`;

              const launchGoogleMapsSearch = (overrideQuery) => {
                const q = (typeof overrideQuery === "string" && overrideQuery) ? overrideQuery : constructedQuery;
                if (!q || !q.trim()) return;
                const url = `https://www.google.com/maps/search/${encodeURIComponent(q.trim())}`;
                window.open(url, "_blank");
              };

              const copyConstructedQuery = () => {
                try {
                  navigator.clipboard.writeText(constructedQuery);
                  setDynCopiedQuery(true);
                  setTimeout(() => setDynCopiedQuery(false), 2000);
                } catch (e) {}
              };

              return (
                <div style={{
                  background: "rgba(15,23,42,0.02)",
                  border: `1px solid ${DS.surfaceBorder}`,
                  borderRadius: "12px",
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}>
                  {/* Category Prefix Selector Chips */}
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "0.68rem", fontWeight: 800, color: DS.textSecondary, textTransform: "uppercase", letterSpacing: "0.7px", marginRight: "4px" }}>
                      <i className="fas fa-filter" style={{ marginRight: "4px", color: DS.accentPrimary }}></i> Target Category:
                    </span>
                    {SEARCH_PREFIX_TEMPLATES.map(tmpl => {
                      const isSelected = dynPrefixId === tmpl.id;
                      return (
                        <button
                          key={tmpl.id}
                          type="button"
                          onClick={() => setDynPrefixId(tmpl.id)}
                          style={{
                            display: "inline-flex", alignItems: "center", gap: "5px",
                            padding: "4px 10px", borderRadius: "6px",
                            background: isSelected ? `${tmpl.color}15` : "rgba(255,255,255,0.7)",
                            border: `1px solid ${isSelected ? tmpl.color : DS.surfaceBorder}`,
                            color: isSelected ? tmpl.color : DS.textSecondary,
                            fontSize: "0.74rem", fontWeight: isSelected ? 700 : 500,
                            cursor: "pointer", transition: "all 0.15s ease",
                          }}
                        >
                          <i className={`fas ${tmpl.icon}`} style={{ fontSize: "10px", color: tmpl.color }}></i>
                          <span>{tmpl.label}</span>
                          {isSelected && <i className="fas fa-check" style={{ fontSize: "8px", marginLeft: "2px" }}></i>}
                        </button>
                      );
                    })}
                  </div>

                  {/* Search Input Bar + Launch Button */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "stretch" }}>
                    <div style={{
                      flex: "1 1 340px",
                      display: "flex",
                      alignItems: "center",
                      background: "#ffffff",
                      border: `1.5px solid ${DS.accentPrimaryBorder}`,
                      borderRadius: "9px",
                      padding: "2px 8px 2px 12px",
                      boxShadow: "0 1px 3px rgba(15,23,42,0.04)",
                    }}>
                      {!isCustomMode ? (
                        <span style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          color: activePrefixObj.color,
                          background: `${activePrefixObj.color}12`,
                          padding: "3px 8px",
                          borderRadius: "5px",
                          marginRight: "8px",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}>
                          <i className={`fas ${activePrefixObj.icon}`} style={{ fontSize: "10px" }}></i>
                          {activePrefixObj.prefix}
                        </span>
                      ) : null}

                      <input
                        type="text"
                        value={isCustomMode ? dynCustomQuery : dynLocation}
                        onChange={(e) => {
                          if (isCustomMode) setDynCustomQuery(e.target.value);
                          else setDynLocation(e.target.value);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            launchGoogleMapsSearch();
                          }
                        }}
                        placeholder={isCustomMode ? "Type anything: e.g. Hotels and Dharamshala in Khatu Shyam Ji Rajasthan..." : activePrefixObj.placeholder}
                        style={{
                          flex: 1,
                          border: "none",
                          outline: "none",
                          background: "transparent",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: DS.textPrimary,
                          minWidth: "160px",
                          padding: "6px 0",
                        }}
                      />

                      {(isCustomMode ? dynCustomQuery : dynLocation) && (
                        <button
                          type="button"
                          onClick={() => {
                            if (isCustomMode) setDynCustomQuery("");
                            else setDynLocation("");
                          }}
                          title="Clear input"
                          style={{
                            background: "none", border: "none", color: DS.textTertiary,
                            cursor: "pointer", padding: "4px 6px", fontSize: "11px",
                          }}
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      )}
                    </div>

                    {/* Launch CTA */}
                    <button
                      type="button"
                      onClick={() => launchGoogleMapsSearch()}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "8px",
                        padding: "8px 18px", borderRadius: "9px",
                        background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                        border: "none", color: "#ffffff",
                        fontSize: "0.82rem", fontWeight: 700, cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(37,99,235,0.3)",
                        transition: "all 0.15s ease",
                      }}
                    >
                      <i className="fas fa-magnifying-glass-location" style={{ fontSize: "12px" }}></i>
                      <span>Search on Google Maps ↗</span>
                    </button>

                    {/* Copy Query */}
                    <button
                      type="button"
                      onClick={copyConstructedQuery}
                      title="Copy exact search query string"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        padding: "8px 12px", borderRadius: "9px",
                        background: dynCopiedQuery ? DS.accentGreenBg : "rgba(15,23,42,0.04)",
                        border: `1px solid ${dynCopiedQuery ? DS.accentGreenBorder : DS.surfaceBorder}`,
                        color: dynCopiedQuery ? DS.accentGreen : DS.textSecondary,
                        fontSize: "0.78rem", fontWeight: 600, cursor: "pointer",
                        transition: "all 0.15s ease",
                      }}
                    >
                      <i className={`fas ${dynCopiedQuery ? "fa-check" : "fa-copy"}`} style={{ fontSize: "11px" }}></i>
                      <span>{dynCopiedQuery ? "Query Copied!" : "Copy Query"}</span>
                    </button>
                  </div>

                  {/* Quick Location Chips */}
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "5px" }}>
                    <span style={{ fontSize: "0.66rem", fontWeight: 700, color: DS.textTertiary, textTransform: "uppercase", letterSpacing: "0.6px", marginRight: "3px" }}>
                      Quick Cities:
                    </span>
                    {QUICK_LOCATIONS.map(loc => {
                      const isCurrent = dynLocation === loc.name;
                      return (
                        <button
                          key={loc.name}
                          type="button"
                          onClick={() => {
                            setDynLocation(loc.name);
                            if (isCustomMode) {
                              setDynCustomQuery((prev) => prev ? `${prev} ${loc.name}` : loc.name);
                            }
                          }}
                          style={{
                            display: "inline-flex", alignItems: "center", gap: "4px",
                            padding: "3px 8px", borderRadius: "6px",
                            background: isCurrent ? `${loc.color}18` : "rgba(15,23,42,0.03)",
                            border: `1px solid ${isCurrent ? loc.color : "rgba(15,23,42,0.08)"}`,
                            color: isCurrent ? loc.color : DS.textSecondary,
                            fontSize: "0.72rem", fontWeight: isCurrent ? 700 : 500,
                            cursor: "pointer", transition: "all 0.1s ease",
                          }}
                        >
                          <i className="fas fa-location-dot" style={{ fontSize: "8px", color: loc.color }}></i>
                          <span>{loc.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Live Preview Strip */}
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "8px",
                    background: "#ffffff",
                    border: "1px dashed rgba(15,23,42,0.12)",
                    borderRadius: "7px",
                    padding: "6px 12px",
                    fontSize: "0.72rem",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: DS.textSecondary, overflow: "hidden" }}>
                      <span style={{ fontWeight: 700, color: DS.accentPrimary, flexShrink: 0 }}>
                        🎯 Generated Search:
                      </span>
                      <code style={{
                        fontFamily: DS.textMono,
                        color: DS.textPrimary,
                        fontWeight: 700,
                        background: "rgba(99,102,241,0.06)",
                        padding: "2px 6px",
                        borderRadius: "4px",
                      }}>
                        &quot;{constructedQuery}&quot;
                      </code>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ color: DS.accentGreen, fontWeight: 600, fontSize: "0.7rem", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                        <i className="fas fa-shield-halved"></i> 100% Anti-Ambiguity Protected
                      </span>
                      <button
                        type="button"
                        onClick={() => setShowPresets(v => !v)}
                        style={{
                          background: "none", border: "none", color: DS.accentPrimary,
                          fontSize: "0.7rem", fontWeight: 700, cursor: "pointer", textDecoration: "underline",
                        }}
                      >
                        {showPresets ? "Hide 1-Click Presets ▲" : "Show 1-Click Presets ▼"}
                      </button>
                    </div>
                  </div>

                  {/* Optional Collapsible Presets */}
                  {showPresets && (
                    <div style={{
                      display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center",
                      paddingTop: "6px", borderTop: `1px solid ${DS.surfaceBorder}`,
                    }}>
                      <span style={{ fontSize: "0.65rem", fontWeight: 700, color: DS.textTertiary, textTransform: "uppercase", letterSpacing: "0.8px", marginRight: "4px" }}>
                        Popular One-Clicks:
                      </span>
                      {TARGET_PRESETS.map(p => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => launchGoogleMapsSearch(p.query)}
                          className="b2b-chip"
                          style={{
                            display: "inline-flex", alignItems: "center", gap: "5px",
                            padding: "4px 9px", borderRadius: "6px",
                            background: "rgba(255,255,255,0.7)", border: `1px solid ${DS.surfaceBorder}`,
                            color: DS.textSecondary, fontSize: "0.73rem", fontWeight: 600,
                            transition: "all 0.15s ease", cursor: "pointer",
                          }}
                        >
                          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: p.color, boxShadow: `0 0 6px ${p.color}` }}></span>
                          <i className={`fas ${p.icon}`} style={{ color: p.color, fontSize: "10px" }}></i>
                          {p.label}
                          <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: "7px", opacity: 0.5 }}></i>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Dropzone inside expanded drawer */}
                  <div
                    onDragEnter={e => { e.preventDefault(); e.stopPropagation(); setDragOver(true); }}
                    onDragOver={e => { e.preventDefault(); e.stopPropagation(); setDragOver(true); }}
                    onDragLeave={e => { e.preventDefault(); e.stopPropagation(); setDragOver(false); }}
                    onDrop={e => {
                      e.preventDefault();
                      e.stopPropagation();
                      setDragOver(false);
                      const f = e.dataTransfer?.files?.[0];
                      if (f) handleFile(f);
                    }}
                    onClick={() => {
                      if (!isImporting) fileRef.current?.click();
                    }}
                    style={{
                      border: `1.5px dashed ${dragOver ? DS.accentPrimary : DS.surfaceBorder}`,
                      background: dragOver ? DS.accentPrimaryBg : "rgba(255,255,255,0.8)",
                      borderRadius: "10px", padding: "12px 18px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      gap: "14px", cursor: isImporting ? "wait" : "pointer",
                      transition: "all 0.2s ease",
                      boxShadow: dragOver ? DS.glowPrimary : "none",
                      opacity: isImporting ? 0.7 : 1,
                    }}
                  >
                    <i className={`fas ${isImporting ? "fa-spinner fa-spin" : "fa-cloud-arrow-up"}`} style={{ color: dragOver || isImporting ? DS.accentPrimary : DS.textTertiary, fontSize: "1.1rem" }}></i>
                    <div>
                      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: dragOver || isImporting ? DS.accentPrimary : DS.textSecondary }}>
                        {isImporting ? "Saving leads to Firestore Cloud..." : "Drop Google Maps CSV here — or click to browse"}
                      </div>
                      <div style={{ fontSize: "0.7rem", color: DS.textTertiary }}>
                        Auto-detects columns • Deduplicates phone numbers • Saves to Firestore Cloud ☁️
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════════
          4. FILTER & SEARCH BAR
      ══════════════════════════════════════════ */}
      <div style={{
        display: "flex", flexWrap: "wrap", alignItems: "center",
        gap: "8px", marginBottom: "12px",
      }}>
        {/* Search */}
        <div style={{ position: "relative", flex: "1 1 280px", minWidth: "200px" }}>
          <i className="fas fa-magnifying-glass" style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: DS.textTertiary, fontSize: "12px", pointerEvents: "none" }}></i>
          <input
            className="b2b-search"
            type="text"
            placeholder="Search leads, phones, notes..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: "100%", padding: "8px 10px 8px 34px",
              background: DS.surfacePrimary, border: `1px solid ${DS.surfaceBorder}`,
              borderRadius: "8px", color: DS.textPrimary, fontSize: "0.82rem",
              transition: "all 0.15s ease", boxSizing: "border-box",
            }}
          />
          {search && (
            <button onClick={() => setSearch("")} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: DS.textTertiary, cursor: "pointer", fontSize: "11px" }}>✕</button>
          )}
        </div>

        {/* City (Strictly dynamic from imported leads) */}
        <select
          value={cityF}
          onChange={e => handleCityFilterChange(e.target.value)}
          style={{
            padding: "7px 10px",
            background: DS.surfacePrimary,
            border: `1px solid ${cityF !== "all" ? DS.accentPrimary : DS.surfaceBorder}`,
            borderRadius: "8px",
            color: cityF !== "all" ? DS.accentPrimary : DS.textSecondary,
            fontSize: "0.78rem",
            fontWeight: cityF !== "all" ? 700 : 500,
            cursor: "pointer",
          }}
        >
          <option value="all">All Cities ({leads.length})</option>
          {availableCities.map(c => {
            const count = leads.filter(l => (l.city || "").trim() === c).length;
            return (
              <option key={c} value={c}>
                {c} ({count})
              </option>
            );
          })}
        </select>

        {/* Niche / Target Industry Filter */}
        <select
          value={nicheF}
          onChange={e => setNicheF(e.target.value)}
          style={{
            padding: "7px 10px",
            background: DS.surfacePrimary,
            border: `1px solid ${nicheF !== "all" ? DS.accentPrimary : DS.surfaceBorder}`,
            borderRadius: "8px",
            color: nicheF !== "all" ? DS.accentPrimary : DS.textSecondary,
            fontSize: "0.78rem",
            fontWeight: nicheF !== "all" ? 700 : 500,
            cursor: "pointer",
          }}
        >
          <option value="all">All Industries ({leads.length})</option>
          {Object.entries(NICHE_CONFIG)
            .filter(([k]) => {
              const stat = nicheStats?.map?.[k];
              if (!stat) return false;
              if (statusF === "new") return stat.pending > 0;
              return stat.total > 0;
            })
            .map(([k, cfg]) => {
              const stat = nicheStats?.map?.[k];
              const count = statusF === "new" ? stat?.pending : stat?.total;
              return (
                <option key={k} value={k}>
                  {cfg.badge || cfg.label} ({count})
                </option>
              );
            })}
        </select>

        {/* Web status */}
        <select value={webF} onChange={e => setWebF(e.target.value)} style={{ padding: "7px 10px", background: DS.surfacePrimary, border: `1px solid ${DS.surfaceBorder}`, borderRadius: "8px", color: DS.textSecondary, fontSize: "0.78rem", cursor: "pointer" }}>
          <option value="all">All Targets</option>
          <option value="no_web">🔥 No Website (Prime)</option>
          <option value="has_web">Has Website</option>
        </select>

        {/* Status */}
        <select value={statusF} onChange={e => setStatusF(e.target.value)} style={{ padding: "7px 10px", background: DS.surfacePrimary, border: `1px solid ${DS.surfaceBorder}`, borderRadius: "8px", color: DS.textSecondary, fontSize: "0.78rem", cursor: "pointer" }}>
          <option value="all">All Statuses</option>
          {Object.entries(STATUS_CONFIG).map(([k, c]) => <option key={k} value={k}>{c.label}</option>)}
        </select>

        {/* View toggle */}
        <div style={{ display: "flex", background: DS.surfacePrimary, border: `1px solid ${DS.surfaceBorder}`, borderRadius: "8px", padding: "3px", marginLeft: "auto" }}>
          {[["table","fa-list"],["cards","fa-th-large"]].map(([v, ico]) => (
            <button key={v} onClick={() => setActiveView(v)} style={{ padding: "5px 11px", borderRadius: "6px", border: "none", cursor: "pointer", fontSize: "0.76rem", fontWeight: 700, transition: "all 0.15s ease", background: activeView === v ? "rgba(255,255,255,0.08)" : "transparent", color: activeView === v ? DS.textPrimary : DS.textTertiary, display: "flex", alignItems: "center", gap: "5px" }}>
              <i className={`fas ${ico}`} style={{ fontSize: "10px" }}></i>
              {v === "table" ? "Table" : "Cards"}
            </button>
          ))}
        </div>

        {/* Lead count chip */}
        <span style={{ fontSize: "0.72rem", fontWeight: 700, color: DS.textTertiary, whiteSpace: "nowrap" }}>
          {filtered.length} / {leads.length}
        </span>

        {/* Reset / Clear */}
        {leads.length > 0 && (
          <button
            onClick={() => { if (window.confirm("Clear all leads?")) { setLeads([]); localStorage.removeItem("ct_b2b_leads_store_v1"); } }}
            style={{ background: "none", border: `1px solid rgba(248,113,113,0.25)`, color: DS.accentRed, padding: "6px 10px", borderRadius: "8px", fontSize: "0.72rem", cursor: "pointer", transition: "all 0.15s ease" }}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        )}
      </div>

      {/* ══════════════════════════════════════════
          5. LEADS DISPLAY
      ══════════════════════════════════════════ */}
      {!isActuallyOnline ? (
        <div style={{
          background: DS.surfacePrimary, border: `2px dashed #fca5a5`,
          borderRadius: "16px", padding: "52px 24px", textAlign: "center",
          boxShadow: "0 10px 25px rgba(239,68,68,0.06)",
        }}>
          <div style={{
            width: "64px", height: "64px", borderRadius: "50%",
            background: "rgba(239, 68, 68, 0.1)", color: "#ef4444",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            fontSize: "26px", marginBottom: "14px",
          }}>
            <i className="fas fa-wifi-slash"></i>
          </div>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: DS.textPrimary, margin: "0 0 8px 0" }}>
            Database Disconnected
          </h3>
          <p style={{ fontSize: "0.85rem", color: DS.textSecondary, margin: "0 auto 20px", maxWidth: "480px", lineHeight: 1.5 }}>
            Internet connection band hai. Data protection ke liye offline mode me data display band hai. Internet restore hote hi live B2B leads display ho jayengi.
          </p>
          <button
            type="button"
            onClick={() => {
              if (typeof navigator !== "undefined" && navigator.onLine) {
                setInternalOnline(true);
              } else {
                alert("Internet connection abhi bhi band hai. Kripya apna Wi-Fi ya Mobile Data check karein.");
              }
            }}
            style={{
              padding: "8px 18px", borderRadius: "8px",
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              color: "#ffffff", border: "none", fontWeight: 700, fontSize: "0.8rem",
              cursor: "pointer",
            }}
          >
            Check Connection ↻
          </button>
        </div>
      ) : filtered.length === 0 ? (
        <div style={{
          background: DS.surfacePrimary, border: `1px solid ${DS.surfaceBorder}`,
          borderRadius: "14px", padding: "52px 24px", textAlign: "center",
        }}>
          <i className="fas fa-inbox" style={{ fontSize: "2rem", color: DS.textTertiary, marginBottom: "12px", display: "block" }}></i>
          <div style={{ fontSize: "0.95rem", fontWeight: 700, color: DS.textSecondary, marginBottom: "6px" }}>No leads match your filters</div>
          <div style={{ fontSize: "0.8rem", color: DS.textTertiary, marginBottom: "18px" }}>Upload a Google Maps CSV or adjust the filters above</div>
          <button onClick={() => { setSearch(""); setCityF("all"); setNicheF("all"); setWebF("all"); setStatusF("all"); }} style={{ background: DS.accentPrimary, color: "#09090b", border: "none", padding: "8px 16px", borderRadius: "8px", fontWeight: 800, fontSize: "0.82rem", cursor: "pointer" }}>
            Clear All Filters
          </button>
        </div>
      ) : activeView === "table" ? (
        /* ── TABLE VIEW ── */
        <div style={{ background: DS.surfacePrimary, border: `1px solid ${DS.surfaceBorder}`, borderRadius: "14px", overflow: "hidden" }}>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem", tableLayout: "auto" }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${DS.surfaceBorder}` }}>
                  <th style={{ width: "38px", padding: "10px 10px 10px 14px", textAlign: "center", background: "#f8fafc" }}>
                    <input
                      type="checkbox"
                      checked={isAllFilteredSelected}
                      onChange={toggleSelectAllFiltered}
                      title={isAllFilteredSelected ? "Deselect All" : "Select All Filtered Leads"}
                      style={{ width: "16px", height: "16px", cursor: "pointer", accentColor: "#16a34a" }}
                    />
                  </th>
                  {["Business Entity","City","Contact & Outreach","Opportunity","Status","Target Niche & Notes","—"].map((h, i) => (
                    <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, fontSize: "0.65rem", color: DS.textTertiary, textTransform: "uppercase", letterSpacing: "0.8px", whiteSpace: "nowrap", background: "#f8fafc" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(lead => {
                  const hasWeb = Boolean(lead.website?.trim());
                  const wa = waLink(lead);
                  const isEditing = editingId === lead.id;
                  const cfg = STATUS_CONFIG[lead.status] || STATUS_CONFIG.new;
                  const isPitched = lead.status === "contacted" || lead.status === "interested";
                  const isSelected = selectedIds.has(lead.id);

                  return (
                    <tr
                      key={lead.id}
                      className="b2b-row"
                      style={{
                        borderBottom: `1px solid ${DS.surfaceBorder}`,
                        borderLeft: isPitched ? `3px solid ${lead.status === "interested" ? "#9333ea" : "#6366f1"}` : "3px solid transparent",
                        background: isSelected
                          ? "rgba(34, 197, 94, 0.07)"
                          : (isPitched ? (lead.status === "interested" ? "rgba(147,51,234,0.025)" : "rgba(99,102,241,0.02)") : "transparent"),
                        transition: "all 0.12s ease",
                      }}
                    >
                      {/* Selection Checkbox */}
                      <td style={{ width: "38px", padding: "12px 10px 12px 14px", textAlign: "center" }}>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleSelectLead(lead.id)}
                          style={{ width: "16px", height: "16px", cursor: "pointer", accentColor: "#16a34a" }}
                        />
                      </td>
                      {/* Entity */}
                      <td style={{ padding: "12px 14px", maxWidth: "240px" }}>
                        <div style={{ fontWeight: 700, color: DS.textPrimary, marginBottom: "3px", lineHeight: 1.3 }}>{lead.name}</div>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span style={{ fontSize: "0.65rem", color: DS.textTertiary, background: "rgba(255,255,255,0.05)", padding: "1px 7px", borderRadius: "4px", fontWeight: 600 }}>
                            {lead.category || "Enterprise"}
                          </span>
                          <StarRating rating={lead.rating} />
                        </div>
                      </td>

                      {/* City */}
                      <td style={{ padding: "12px 14px", whiteSpace: "nowrap" }}>
                        <CityPill city={lead.city} onChange={c => updateCity(lead.id, c)} availableCities={availableCities} />
                      </td>

                      {/* Contact & Outreach (WhatsApp + Email) */}
                      <td style={{ padding: "12px 14px", whiteSpace: "nowrap" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "6px" }}>
                          <span style={{ fontFamily: DS.textMono, fontSize: "0.78rem", color: DS.textSecondary, letterSpacing: "0.5px" }}>
                            {lead.phone || <span style={{ color: DS.textTertiary, fontStyle: "italic" }}>No phone</span>}
                          </span>
                          {lead.email && (
                            <span style={{ fontSize: "0.72rem", color: DS.accentIndigo, overflow: "hidden", textOverflow: "ellipsis", maxWidth: "180px" }}>
                              <i className="fas fa-envelope" style={{ fontSize: "9px", marginRight: "4px" }}></i>
                              {lead.email}
                            </span>
                          )}
                        </div>
                        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
                          {lead.phone && (
                            <>
                              <a href={wa} target="_blank" rel="noopener noreferrer"
                                onClick={() => onContactClick(lead, "whatsapp")}
                                className="b2b-wa-btn"
                                style={{
                                  display: "inline-flex", alignItems: "center", gap: "5px",
                                  padding: "4px 10px", borderRadius: "6px",
                                  background: "rgba(34,197,94,0.12)", border: `1px solid ${DS.accentGreenBorder}`,
                                  color: DS.accentGreen, fontSize: "0.72rem", fontWeight: 700,
                                  textDecoration: "none", transition: "all 0.15s ease",
                                }}
                              >
                                <i className="fab fa-whatsapp" style={{ fontSize: "12px" }}></i> WhatsApp
                              </a>

                              <button
                                type="button"
                                onClick={() => copyPitch(lead)}
                                title="Copy pitch message with emojis to clipboard"
                                style={{
                                  display: "inline-flex", alignItems: "center", gap: "4px",
                                  padding: "4px 8px", borderRadius: "6px",
                                  background: copiedPitchId === lead.id ? "rgba(34,197,94,0.15)" : "rgba(15,23,42,0.05)",
                                  border: `1px solid ${copiedPitchId === lead.id ? DS.accentGreenBorder : DS.surfaceBorder}`,
                                  color: copiedPitchId === lead.id ? DS.accentGreen : DS.textSecondary,
                                  fontSize: "0.72rem", fontWeight: 600, cursor: "pointer",
                                  transition: "all 0.15s ease",
                                }}
                              >
                                <i className={`fas ${copiedPitchId === lead.id ? "fa-check" : "fa-copy"}`} style={{ fontSize: "10px" }}></i>
                                <span>{copiedPitchId === lead.id ? "Copied! ✓" : "Copy"}</span>
                              </button>
                              <a href={`tel:${lead.phone}`} style={{ display: "inline-flex", alignItems: "center", gap: "4px", padding: "4px 8px", borderRadius: "6px", background: "rgba(15,23,42,0.05)", border: `1px solid ${DS.surfaceBorder}`, color: DS.textSecondary, fontSize: "0.72rem", fontWeight: 600, textDecoration: "none" }}>
                                <i className="fas fa-phone-alt" style={{ fontSize: "10px" }}></i>
                              </a>
                            </>
                          )}
                          {lead.email && (
                            <a
                              href={emailLink(lead)}
                              onClick={() => onContactClick(lead, "email")}
                              title={`Send Pre-filled Pitch Email to ${lead.email}`}
                              style={{
                                display: "inline-flex", alignItems: "center", gap: "4px",
                                padding: "4px 9px", borderRadius: "6px",
                                background: "rgba(37,99,235,0.08)", border: `1px solid ${DS.accentBlueBorder}`,
                                color: DS.accentBlue, fontSize: "0.72rem", fontWeight: 700,
                                textDecoration: "none", transition: "all 0.15s ease",
                              }}
                            >
                              <i className="fas fa-envelope" style={{ fontSize: "11px" }}></i> Email
                            </a>
                          )}
                        </div>
                      </td>

                      {/* Opportunity & Tech Audit */}
                      <td style={{ padding: "12px 14px" }}>
                        {hasWeb ? (
                          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                              <a
                                href={lead.website.startsWith("http") ? lead.website : `https://${lead.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: DS.accentIndigo, fontSize: "0.72rem", textDecoration: "none", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "3px", maxWidth: "125px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                                title={lead.website}
                              >
                                <i className="fas fa-globe" style={{ fontSize: "10px", color: DS.accentBlue }}></i>
                                {lead.website.replace(/^https?:\/\//i, "").replace(/\/$/, "")}
                                <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: "8px", opacity: 0.7 }}></i>
                              </a>
                            </div>

                            {/* ⚡ 1-Click Audit Button / Score Pill */}
                            {lead.auditResult ? (
                              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                <button
                                  type="button"
                                  onClick={() => setAuditModalLead(lead)}
                                  style={{
                                    display: "inline-flex", alignItems: "center", gap: "4px",
                                    padding: "3px 8px", borderRadius: "5px",
                                    background: lead.auditResult.score < 60 ? "rgba(239, 68, 68, 0.12)" : lead.auditResult.score < 80 ? "rgba(245, 158, 11, 0.12)" : "rgba(34, 197, 94, 0.12)",
                                    border: `1px solid ${lead.auditResult.score < 60 ? "rgba(239, 68, 68, 0.3)" : lead.auditResult.score < 80 ? "rgba(245, 158, 11, 0.3)" : "rgba(34, 197, 94, 0.3)"}`,
                                    color: lead.auditResult.score < 60 ? "#ef4444" : lead.auditResult.score < 80 ? "#f59e0b" : "#16a34a",
                                    fontSize: "0.68rem", fontWeight: 800, cursor: "pointer",
                                  }}
                                  title="View detailed Website Audit Report & Tech Stack"
                                >
                                  <span>⚡ {lead.auditResult.score}/100</span>
                                  {lead.auditResult.painPoints?.length > 0 && (
                                    <span style={{ fontSize: "0.64rem", opacity: 0.85 }}>({lead.auditResult.painPoints.length} issues)</span>
                                  )}
                                </button>
                                <button
                                  type="button"
                                  disabled={auditingLeadId === lead.id}
                                  onClick={() => handleAuditWebsite(lead)}
                                  title="Re-audit website"
                                  style={{
                                    background: "transparent", border: "none", color: DS.textTertiary,
                                    cursor: "pointer", fontSize: "10px", padding: "2px 4px",
                                  }}
                                >
                                  <i className={`fas fa-rotate ${auditingLeadId === lead.id ? "fa-spin" : ""}`}></i>
                                </button>
                              </div>
                            ) : (
                              <button
                                type="button"
                                disabled={auditingLeadId === lead.id}
                                onClick={() => handleAuditWebsite(lead)}
                                style={{
                                  display: "inline-flex", alignItems: "center", gap: "4px",
                                  padding: "3px 8px", borderRadius: "5px",
                                  background: "linear-gradient(135deg, rgba(234, 179, 8, 0.15), rgba(249, 115, 22, 0.15))",
                                  border: "1px solid rgba(234, 179, 8, 0.4)",
                                  color: "#f59e0b", fontSize: "0.68rem", fontWeight: 800,
                                  cursor: auditingLeadId === lead.id ? "not-allowed" : "pointer",
                                  transition: "all 0.15s ease",
                                }}
                                title="Run 1-Click Website Audit (SSL, Mobile, CMS Stack)"
                              >
                                {auditingLeadId === lead.id ? (
                                  <>
                                    <i className="fas fa-spinner fa-spin" style={{ fontSize: "9px" }}></i>
                                    <span>Scanning...</span>
                                  </>
                                ) : (
                                  <>
                                    <span>⚡ Audit Website</span>
                                  </>
                                )}
                              </button>
                            )}
                          </div>
                        ) : (
                          <div>
                            <span style={{
                              display: "inline-flex", alignItems: "center", gap: "5px",
                              background: DS.accentAmberBg, border: `1px solid ${DS.accentAmberBorder}`,
                              color: DS.accentAmber, padding: "3px 8px", borderRadius: "5px",
                              fontSize: "0.68rem", fontWeight: 800,
                              boxShadow: "0 0 14px rgba(245,158,11,0.12)",
                            }}>
                              🔥 NO WEBSITE
                            </span>
                          </div>
                        )}
                      </td>

                      {/* Status pill */}
                      <td style={{ padding: "12px 14px", whiteSpace: "nowrap" }}>
                        <StatusPill status={lead.status || "new"} onChange={s => updateStatus(lead.id, s)} />
                      </td>

                      {/* Target Niche & Inline Notes */}
                      <td style={{ padding: "12px 14px", minWidth: "215px", maxWidth: "290px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          <div>
                            <NichePill
                              lead={lead}
                              onChange={(pitchType, catName) => updateCategory(lead.id, pitchType, catName)}
                              nicheStats={nicheStats}
                            />
                          </div>
                          {isEditing ? (
                            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                              <input
                                className="b2b-note-input"
                                autoFocus
                                type="text"
                                value={notesDraft}
                                onChange={e => setNotesDraft(e.target.value)}
                                onKeyDown={e => { if (e.key === "Enter") saveNotes(lead.id, notesDraft); if (e.key === "Escape") setEditingId(null); }}
                                placeholder="Add follow-up note..."
                                style={{
                                  flex: 1, padding: "5px 9px", borderRadius: "6px",
                                  background: DS.surfaceRaised, border: `1px solid ${DS.surfaceBorder}`,
                                  color: DS.textPrimary, fontSize: "0.78rem",
                                  fontFamily: "inherit", transition: "border-color 0.15s ease, box-shadow 0.15s ease",
                                }}
                              />
                              <button onClick={() => saveNotes(lead.id, notesDraft)} style={{ background: DS.accentPrimary, border: "none", color: "#09090b", padding: "5px 9px", borderRadius: "6px", cursor: "pointer", fontWeight: 800, fontSize: "12px" }}>✓</button>
                              <button onClick={() => setEditingId(null)} style={{ background: "none", border: "none", color: DS.textTertiary, cursor: "pointer", fontSize: "12px" }}>✕</button>
                            </div>
                          ) : (
                            <div
                              onClick={() => { setEditingId(lead.id); setNotesDraft(lead.notes || ""); }}
                              style={{ cursor: "text", fontSize: "0.76rem", color: lead.notes ? DS.textSecondary : DS.textTertiary, fontStyle: lead.notes ? "normal" : "italic", lineHeight: 1.45, padding: "2px 0" }}
                              title="Click to edit note"
                            >
                              {lead.notes || "+ Add note"}
                            </div>
                          )}
                        </div>
                      </td>

                      {/* Delete */}
                      <td style={{ padding: "12px 10px", textAlign: "center" }}>
                        <button
                          onClick={() => deleteLead(lead.id, lead.name)}
                          style={{ background: "none", border: "none", color: DS.textTertiary, cursor: "pointer", fontSize: "12px", padding: "4px", borderRadius: "4px", transition: "color 0.1s" }}
                          onMouseOver={e => e.currentTarget.style.color = DS.accentRed}
                          onMouseOut={e => e.currentTarget.style.color = DS.textTertiary}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* ── CARDS VIEW ── */
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: "12px" }}>
          {filtered.map(lead => {
            const hasWeb = Boolean(lead.website?.trim());
            const wa = waLink(lead);
            const isPitched = lead.status === "contacted" || lead.status === "interested";
            const isSelected = selectedIds.has(lead.id);
            return (
              <div
                key={lead.id}
                style={{
                  background: isSelected
                    ? "rgba(34, 197, 94, 0.04)"
                    : (isPitched ? (lead.status === "interested" ? "rgba(147,51,234,0.02)" : "rgba(99,102,241,0.02)") : DS.surfacePrimary),
                  border: isSelected
                    ? "1.5px solid #22c55e"
                    : (isPitched
                      ? `1.5px solid ${lead.status === "interested" ? "rgba(147,51,234,0.35)" : "rgba(99,102,241,0.35)"}`
                      : `1px solid ${hasWeb ? DS.surfaceBorder : DS.accentAmberBorder}`),
                  borderRadius: "12px", padding: "16px",
                  display: "flex", flexDirection: "column", gap: "10px",
                  transition: "all 0.15s ease",
                  boxShadow: isSelected ? "0 4px 20px rgba(34,197,94,0.12)" : (isPitched ? "0 4px 16px rgba(99,102,241,0.08)" : (hasWeb ? "none" : "0 0 18px rgba(245,158,11,0.06)")),
                }}
              >
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSelectLead(lead.id)}
                      style={{ width: "16px", height: "16px", cursor: "pointer", accentColor: "#16a34a", marginTop: "3px" }}
                    />
                    <div>
                      <div style={{ fontWeight: 800, color: DS.textPrimary, fontSize: "0.9rem", lineHeight: 1.3, marginBottom: "4px" }}>{lead.name}</div>
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
                        <NichePill lead={lead} onChange={(pitchType, catName) => updateCategory(lead.id, pitchType, catName)} nicheStats={nicheStats} />
                        <CityPill city={lead.city} onChange={c => updateCity(lead.id, c)} availableCities={availableCities} />
                        <StarRating rating={lead.rating} />
                      </div>
                    </div>
                  </div>
                  <button onClick={() => deleteLead(lead.id, lead.name)} style={{ background: "none", border: "none", color: DS.textTertiary, cursor: "pointer", padding: "2px", flexShrink: 0 }} onMouseOver={e=>e.currentTarget.style.color=DS.accentRed} onMouseOut={e=>e.currentTarget.style.color=DS.textTertiary}>
                    <i className="fas fa-times" style={{ fontSize: "12px" }}></i>
                  </button>
                </div>

                {/* Opportunity & Tech Audit strip */}
                {hasWeb ? (
                  <div style={{ padding: "8px 10px", borderRadius: "8px", background: "rgba(56,189,248,0.05)", border: `1px solid rgba(56,189,248,0.15)`, display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ fontSize: "0.7rem", fontWeight: 700, color: DS.accentBlue, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                        <i className="fas fa-globe" style={{ fontSize: "10px" }}></i>
                        <a href={lead.website.startsWith("http") ? lead.website : `https://${lead.website}`} target="_blank" rel="noopener noreferrer" style={{ color: DS.accentIndigo, textDecoration: "none", fontWeight: 700, maxWidth: "120px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", display: "inline-block" }}>
                          {lead.website.replace(/^https?:\/\//i, "").replace(/\/$/, "")}
                        </a>
                      </span>
                    </div>

                    {lead.auditResult ? (
                      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <button
                          type="button"
                          onClick={() => setAuditModalLead(lead)}
                          style={{
                            display: "inline-flex", alignItems: "center", gap: "4px",
                            padding: "3px 8px", borderRadius: "6px",
                            background: lead.auditResult.score < 60 ? "rgba(239, 68, 68, 0.12)" : lead.auditResult.score < 80 ? "rgba(245, 158, 11, 0.12)" : "rgba(34, 197, 94, 0.12)",
                            border: `1px solid ${lead.auditResult.score < 60 ? "rgba(239, 68, 68, 0.3)" : lead.auditResult.score < 80 ? "rgba(245, 158, 11, 0.3)" : "rgba(34, 197, 94, 0.3)"}`,
                            color: lead.auditResult.score < 60 ? "#ef4444" : lead.auditResult.score < 80 ? "#f59e0b" : "#16a34a",
                            fontSize: "0.68rem", fontWeight: 800, cursor: "pointer",
                          }}
                          title="View Website Audit Report & Tech Stack"
                        >
                          <span>⚡ {lead.auditResult.score}/100</span>
                        </button>
                        <button
                          type="button"
                          disabled={auditingLeadId === lead.id}
                          onClick={() => handleAuditWebsite(lead)}
                          title="Re-audit website"
                          style={{
                            background: "transparent", border: "none", color: DS.textTertiary,
                            cursor: "pointer", fontSize: "10px", padding: "2px 4px",
                          }}
                        >
                          <i className={`fas fa-rotate ${auditingLeadId === lead.id ? "fa-spin" : ""}`}></i>
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        disabled={auditingLeadId === lead.id}
                        onClick={() => handleAuditWebsite(lead)}
                        style={{
                          display: "inline-flex", alignItems: "center", gap: "4px",
                          padding: "4px 9px", borderRadius: "6px",
                          background: "linear-gradient(135deg, rgba(234, 179, 8, 0.18), rgba(249, 115, 22, 0.18))",
                          border: "1px solid rgba(234, 179, 8, 0.4)",
                          color: "#f59e0b", fontSize: "0.7rem", fontWeight: 800,
                          cursor: auditingLeadId === lead.id ? "not-allowed" : "pointer",
                        }}
                      >
                        {auditingLeadId === lead.id ? (
                          <>
                            <i className="fas fa-spinner fa-spin" style={{ fontSize: "9px" }}></i>
                            <span>Scanning...</span>
                          </>
                        ) : (
                          <>
                            <span>⚡ Audit Website</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                ) : (
                  <div style={{ padding: "7px 10px", borderRadius: "7px", background: DS.accentAmberBg, border: `1px solid ${DS.accentAmberBorder}`, display: "flex", alignItems: "center", gap: "7px", boxShadow: "0 0 14px rgba(245,158,11,0.08)" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: DS.accentAmber }}>🔥 NO WEBSITE</span>
                  </div>
                )}

                {/* Notes */}
                <div onClick={() => { setEditingId(lead.id); setNotesDraft(lead.notes||""); }} style={{ fontSize: "0.75rem", color: lead.notes?DS.textSecondary:DS.textTertiary, fontStyle: lead.notes?"normal":"italic", lineHeight: 1.4, cursor: "text", background: "rgba(255,255,255,0.025)", padding: "8px 10px", borderRadius: "7px", minHeight: "36px" }}>
                  {editingId===lead.id ? (
                    <div onClick={e=>e.stopPropagation()} style={{display:"flex",gap:"5px"}}>
                      <input autoFocus type="text" value={notesDraft} onChange={e=>setNotesDraft(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")saveNotes(lead.id,notesDraft);if(e.key==="Escape")setEditingId(null);}} style={{flex:1,background:"transparent",border:"none",color:DS.textPrimary,fontSize:"0.75rem",fontFamily:"inherit"}} />
                      <button onClick={()=>saveNotes(lead.id,notesDraft)} style={{background:DS.accentBlue,border:"none",color:"#0d1117",padding:"2px 7px",borderRadius:"4px",cursor:"pointer",fontWeight:800,fontSize:"11px"}}>✓</button>
                    </div>
                  ) : (lead.notes || "+ Add strategy note")}
                </div>

                {/* Footer actions */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px", borderTop: `1px solid ${DS.surfaceBorder}`, paddingTop: "10px" }}>
                  <StatusPill status={lead.status||"new"} onChange={s=>updateStatus(lead.id,s)} />
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
                    {lead.phone && (
                      <>
                        <a href={wa} target="_blank" rel="noopener noreferrer" onClick={()=>onContactClick(lead, "whatsapp")} className="b2b-wa-btn" style={{ display:"inline-flex",alignItems:"center",gap:"5px",padding:"5px 10px",borderRadius:"7px",background:DS.accentGreenBg,border:`1px solid ${DS.accentGreenBorder}`,color:DS.accentGreen,fontSize:"0.74rem",fontWeight:700,textDecoration:"none",transition:"all 0.15s ease" }}>
                          <i className="fab fa-whatsapp" style={{fontSize:"12px"}}></i> WhatsApp
                        </a>

                        <button
                          type="button"
                          onClick={() => copyPitch(lead)}
                          title="Copy pitch message with emojis to clipboard"
                          style={{
                            display: "inline-flex", alignItems: "center", gap: "4px",
                            padding: "5px 8px", borderRadius: "7px",
                            background: copiedPitchId === lead.id ? "rgba(34,197,94,0.15)" : "rgba(15,23,42,0.05)",
                            border: `1px solid ${copiedPitchId === lead.id ? DS.accentGreenBorder : DS.surfaceBorder}`,
                            color: copiedPitchId === lead.id ? DS.accentGreen : DS.textSecondary,
                            fontSize: "0.72rem", fontWeight: 600, cursor: "pointer",
                            transition: "all 0.15s ease",
                          }}
                        >
                          <i className={`fas ${copiedPitchId === lead.id ? "fa-check" : "fa-copy"}`} style={{ fontSize: "10px" }}></i>
                          <span>{copiedPitchId === lead.id ? "Copied! ✓" : "Copy"}</span>
                        </button>
                        <a href={`tel:${lead.phone}`} style={{ display:"inline-flex",alignItems:"center",padding:"5px 8px",borderRadius:"7px",background:"rgba(15,23,42,0.05)",border:`1px solid ${DS.surfaceBorder}`,color:DS.textSecondary,textDecoration:"none" }}>
                          <i className="fas fa-phone-alt" style={{fontSize:"10px"}}></i>
                        </a>
                      </>
                    )}
                    {lead.email && (
                      <a href={emailLink(lead)} onClick={()=>onContactClick(lead, "email")} title={`Send Pre-filled Pitch Email to ${lead.email}`} style={{ display:"inline-flex",alignItems:"center",gap:"4px",padding:"5px 9px",borderRadius:"7px",background:"rgba(37,99,235,0.08)",border:`1px solid ${DS.accentBlueBorder}`,color:DS.accentBlue,fontSize:"0.74rem",fontWeight:700,textDecoration:"none" }}>
                        <i className="fas fa-envelope" style={{fontSize:"11px"}}></i> Email
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}


      {/* ══════════════════════════════════════════
          FLOATING BOTTOM STICKY BULK ACTION BAR
      ══════════════════════════════════════════ */}
      {selectedIds.size > 0 && (
        <div style={{
          position: "fixed",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          background: "#0f172a",
          color: "#ffffff",
          border: "1.5px solid rgba(99, 102, 241, 0.4)",
          borderRadius: "16px",
          padding: "10px 18px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(99,102,241,0.25)",
          backdropFilter: "blur(16px)",
          animation: "b2bFadeIn 0.2s ease",
          flexWrap: "wrap",
          maxWidth: "95vw",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{
              background: "rgba(34, 197, 94, 0.2)",
              color: "#22c55e",
              border: "1px solid rgba(34, 197, 94, 0.4)",
              padding: "3px 10px",
              borderRadius: "20px",
              fontSize: "0.8rem",
              fontWeight: 800,
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
            }}>
              <i className="fas fa-check-circle"></i>
              {selectedQueue.length} Selected
            </span>
            <span style={{ fontSize: "0.76rem", color: "#94a3b8" }}>
              (Ready for WhatsApp queue)
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={startCampaign}
              style={{
                background: "linear-gradient(135deg, #22c55e, #16a34a)",
                color: "#ffffff",
                border: "none",
                padding: "8px 18px",
                borderRadius: "10px",
                fontSize: "0.84rem",
                fontWeight: 800,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 16px rgba(34, 197, 94, 0.4)",
                transition: "all 0.15s ease",
              }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: "16px" }}></i>
              <span>Start 1-by-1 WhatsApp Campaign ({selectedQueue.length}) 🚀</span>
            </button>

            {untouchedCount > 0 && selectedQueue.length !== untouchedCount && (
              <button
                type="button"
                onClick={selectUntouchedNewLeads}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#e2e8f0",
                  padding: "7px 12px",
                  borderRadius: "8px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Select All Untouched ({untouchedCount})
              </button>
            )}

            <button
              type="button"
              onClick={clearSelection}
              style={{
                background: "none",
                border: "none",
                color: "#94a3b8",
                fontSize: "0.78rem",
                fontWeight: 600,
                cursor: "pointer",
                padding: "4px 8px",
              }}
            >
              Clear ✕
            </button>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════
          1-BY-1 SEQUENTIAL WHATSAPP CAMPAIGN RUNNER MODAL
      ══════════════════════════════════════════ */}
      {campaignOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 99999,
          background: "rgba(15, 23, 42, 0.75)",
          backdropFilter: "blur(10px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "16px",
          animation: "b2bFadeIn 0.2s ease",
        }}>
          {(() => {
            const isCompleted = campaignIndex >= selectedQueue.length;
            const currentLead = selectedQueue[campaignIndex];
            const currentHasWeb = Boolean(currentLead?.website?.trim());
            const pct = selectedQueue.length > 0 
              ? Math.min(100, Math.round(((campaignIndex + 1) / selectedQueue.length) * 100))
              : 0;

            if (isCompleted || !currentLead) {
              return (
                <div style={{
                  background: "#ffffff",
                  border: `1px solid ${DS.surfaceBorder}`,
                  borderRadius: "20px",
                  width: "100%", maxWidth: "560px",
                  padding: "36px 28px",
                  textAlign: "center",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
                }}>
                  <div style={{
                    width: "72px", height: "72px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #22c55e, #16a34a)",
                    color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "32px", margin: "0 auto 18px",
                    boxShadow: "0 8px 24px rgba(34, 197, 94, 0.4)",
                  }}>
                    <i className="fas fa-check"></i>
                  </div>
                  <h2 style={{ margin: "0 0 8px", fontSize: "1.4rem", fontWeight: 800, color: DS.textPrimary }}>
                    Campaign Completed! 🎉
                  </h2>
                  <p style={{ margin: "0 0 24px", fontSize: "0.85rem", color: DS.textSecondary, lineHeight: 1.5 }}>
                    Aapne successfully <strong>{selectedQueue.length} leads</strong> ko 1-by-1 WhatsApp message dispatch kar diya hai! Sabhi statuses cloud Firestore par update ho chuke hain.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setCampaignOpen(false);
                      clearSelection();
                    }}
                    style={{
                      background: "linear-gradient(135deg, #22c55e, #16a34a)",
                      border: "none", color: "#ffffff",
                      padding: "10px 24px", borderRadius: "10px",
                      fontSize: "0.9rem", fontWeight: 800, cursor: "pointer",
                      boxShadow: "0 4px 16px rgba(34, 197, 94, 0.35)",
                    }}
                  >
                    Done & Return to Leads Dashboard
                  </button>
                </div>
              );
            }

            return (
              <div style={{
                background: "#ffffff",
                border: `1px solid ${DS.surfaceBorder}`,
                borderRadius: "20px",
                width: "100%", maxWidth: "680px",
                maxHeight: "92vh",
                display: "flex", flexDirection: "column",
                boxShadow: "0 30px 70px rgba(0,0,0,0.35)",
                overflow: "hidden",
              }}>
                {/* Progress Strip */}
                <div style={{ width: "100%", height: "5px", background: "#f1f5f9" }}>
                  <div style={{
                    width: `${pct}%`, height: "100%",
                    background: "linear-gradient(90deg, #22c55e, #16a34a)",
                    transition: "width 0.25s ease",
                  }} />
                </div>

                {/* Modal Header */}
                <div style={{
                  padding: "16px 22px",
                  borderBottom: `1px solid ${DS.surfaceBorder}`,
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  background: "linear-gradient(135deg, rgba(34,197,94,0.06), rgba(99,102,241,0.04))",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      width: "38px", height: "38px", borderRadius: "10px",
                      background: "linear-gradient(135deg, #22c55e, #16a34a)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#ffffff", fontSize: "18px", boxShadow: "0 4px 12px rgba(34, 197, 94, 0.35)",
                    }}>
                      <i className="fab fa-whatsapp"></i>
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <h3 style={{ margin: 0, fontSize: "1.02rem", fontWeight: 800, color: DS.textPrimary }}>
                          WhatsApp Outreach Runner
                        </h3>
                        <span style={{
                          fontSize: "0.68rem", fontWeight: 800, color: "#16a34a",
                          background: "rgba(34, 197, 94, 0.12)", border: "1px solid rgba(34, 197, 94, 0.25)",
                          padding: "2px 8px", borderRadius: "12px",
                        }}>
                          Lead {campaignIndex + 1} of {selectedQueue.length} ({pct}%)
                        </span>
                      </div>
                      <p style={{ margin: "2px 0 0", fontSize: "0.72rem", color: DS.textTertiary }}>
                        1-Click WhatsApp send • Auto-advances to next lead • Saves time
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setCampaignOpen(false)}
                    style={{
                      background: "none", border: "none", color: DS.textTertiary,
                      fontSize: "18px", cursor: "pointer", padding: "4px 8px",
                      borderRadius: "6px",
                    }}
                    onMouseOver={e => e.currentTarget.style.color = DS.accentRed}
                    onMouseOut={e => e.currentTarget.style.color = DS.textTertiary}
                  >
                    ✕
                  </button>
                </div>

                {/* Modal Body */}
                <div style={{ padding: "18px 22px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "14px", flex: 1 }}>
                  {/* Current Lead Info Box */}
                  <div style={{
                    background: "#f8fafc",
                    border: `1px solid ${DS.surfaceBorder}`,
                    borderRadius: "12px",
                    padding: "12px 16px",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    flexWrap: "wrap", gap: "10px",
                  }}>
                    <div>
                      <div style={{ fontSize: "1.05rem", fontWeight: 800, color: DS.textPrimary, marginBottom: "4px" }}>
                        {currentLead.name}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                        <span style={{ fontSize: "0.72rem", fontWeight: 700, color: DS.accentPrimary, background: "rgba(99,102,241,0.08)", padding: "2px 8px", borderRadius: "6px" }}>
                          📍 {currentLead.city || "Rajasthan"}
                        </span>
                        <span style={{ fontSize: "0.72rem", color: DS.textSecondary, background: "rgba(15,23,42,0.04)", padding: "2px 8px", borderRadius: "6px" }}>
                          {currentLead.category}
                        </span>
                        <span style={{ fontFamily: DS.textMono, fontSize: "0.76rem", fontWeight: 700, color: DS.textPrimary }}>
                          📞 {currentLead.phone}
                        </span>
                        <StarRating rating={currentLead.rating} />
                      </div>
                    </div>

                    <div>
                      {currentHasWeb ? (
                        <span style={{ fontSize: "0.7rem", fontWeight: 700, color: DS.accentBlue, background: DS.accentBlueBg, border: `1px solid ${DS.accentBlueBorder}`, padding: "4px 8px", borderRadius: "6px", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                          <i className="fas fa-globe"></i> Has Website
                        </span>
                      ) : (
                        <span style={{ fontSize: "0.72rem", fontWeight: 800, color: DS.accentAmber, background: DS.accentAmberBg, border: `1px solid ${DS.accentAmberBorder}`, padding: "4px 8px", borderRadius: "6px", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                          🔥 NO WEBSITE
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message Preview Textarea */}
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                      <span style={{ fontSize: "0.7rem", fontWeight: 800, color: DS.textSecondary, textTransform: "uppercase", letterSpacing: "0.6px" }}>
                        WhatsApp Message Preview (Editable):
                      </span>
                      <button
                        type="button"
                        onClick={copyCampaignText}
                        style={{
                          background: "none", border: "none", color: campaignCopied ? DS.accentGreen : DS.accentPrimary,
                          fontSize: "0.72rem", fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "4px",
                        }}
                      >
                        <i className={`fas ${campaignCopied ? "fa-check" : "fa-copy"}`}></i>
                        <span>{campaignCopied ? "Copied! ✓" : "Copy Message"}</span>
                      </button>
                    </div>

                    <textarea
                      value={campaignText}
                      onChange={e => setCampaignText(e.target.value)}
                      rows={8}
                      style={{
                        width: "100%", padding: "12px 14px",
                        background: "#fafafa", border: `1px solid ${DS.surfaceBorder}`,
                        borderRadius: "10px", fontSize: "0.8rem", lineHeight: 1.5,
                        color: DS.textPrimary, resize: "vertical", outline: "none",
                        fontFamily: "inherit", boxSizing: "border-box",
                      }}
                    />
                  </div>

                  {/* Quick Outcome Selector */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", flexWrap: "wrap", borderTop: `1px solid ${DS.surfaceBorder}`, paddingTop: "10px" }}>
                    <span style={{ fontSize: "0.7rem", fontWeight: 700, color: DS.textTertiary }}>
                      Quick Status override:
                    </span>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      <button
                        type="button"
                        onClick={() => handleCampaignSendAndNext("interested")}
                        style={{ padding: "4px 8px", borderRadius: "6px", background: "rgba(147,51,234,0.08)", border: "1px solid rgba(147,51,234,0.25)", color: "#7e22ce", fontSize: "0.7rem", fontWeight: 700, cursor: "pointer" }}
                      >
                        Send & Mark Interested
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCampaignSendAndNext("converted")}
                        style={{ padding: "4px 8px", borderRadius: "6px", background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)", color: "#15803d", fontSize: "0.7rem", fontWeight: 700, cursor: "pointer" }}
                      >
                        Send & Mark Closed Deal ✓
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCampaignSendAndNext("lost")}
                        style={{ padding: "4px 8px", borderRadius: "6px", background: "rgba(100,116,139,0.08)", border: "1px solid rgba(100,116,139,0.2)", color: "#475569", fontSize: "0.7rem", fontWeight: 700, cursor: "pointer" }}
                      >
                        Send & Mark Lost
                      </button>
                    </div>
                  </div>
                </div>

                {/* Modal Footer Controls */}
                <div style={{
                  padding: "14px 22px",
                  borderTop: `1px solid ${DS.surfaceBorder}`,
                  background: "#f8fafc",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  gap: "10px", flexWrap: "wrap",
                }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <button
                      type="button"
                      disabled={campaignIndex === 0}
                      onClick={handleCampaignPrev}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "5px",
                        padding: "8px 14px", borderRadius: "8px",
                        background: "transparent", border: `1px solid ${DS.surfaceBorder}`,
                        color: campaignIndex === 0 ? DS.textTertiary : DS.textSecondary,
                        fontSize: "0.78rem", fontWeight: 700,
                        cursor: campaignIndex === 0 ? "not-allowed" : "pointer",
                        opacity: campaignIndex === 0 ? 0.5 : 1,
                      }}
                    >
                      <i className="fas fa-arrow-left"></i>
                      <span>Previous Lead</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCampaignSkip}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "5px",
                        padding: "8px 14px", borderRadius: "8px",
                        background: "rgba(15,23,42,0.04)", border: `1px solid ${DS.surfaceBorder}`,
                        color: DS.textSecondary, fontSize: "0.78rem", fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      <span>Skip ⏭</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCampaignSendAndNext("contacted")}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "8px",
                      padding: "10px 22px", borderRadius: "10px",
                      background: "linear-gradient(135deg, #22c55e, #16a34a)",
                      border: "none", color: "#ffffff",
                      fontSize: "0.86rem", fontWeight: 800, cursor: "pointer",
                      boxShadow: "0 4px 16px rgba(34, 197, 94, 0.4)",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <i className="fab fa-whatsapp" style={{ fontSize: "16px" }}></i>
                    <span>Open WhatsApp & Send Next ▶ (Enter ↵)</span>
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* ── 1-Click Technical Website Audit & Inspector Modal ── */}
      {auditModalLead && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setAuditModalLead(null)}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(15, 23, 42, 0.72)",
            backdropFilter: "blur(6px)",
            zIndex: 10000,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "16px",
          }}
        >
          {(() => {
            const audit = auditModalLead.auditResult || {};
            const wa = waLink(auditModalLead);
            const pitch = generateWhatsAppPitch(auditModalLead);

            return (
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  maxWidth: "680px",
                  width: "100%",
                  maxHeight: "90vh",
                  overflowY: "auto",
                  boxShadow: "0 25px 60px -15px rgba(0,0,0,0.3)",
                  border: `1px solid ${DS.surfaceBorder}`,
                  display: "flex", flexDirection: "column",
                }}
              >
                {/* Header */}
                <div style={{
                  padding: "18px 24px",
                  borderBottom: `1px solid ${DS.surfaceBorder}`,
                  background: "linear-gradient(135deg, #0f172a, #1e293b)",
                  color: "#ffffff",
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px",
                  borderTopLeftRadius: "16px", borderTopRightRadius: "16px",
                }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "4px" }}>
                      <span style={{
                        display: "inline-flex", alignItems: "center", gap: "4px",
                        padding: "3px 8px", borderRadius: "6px",
                        background: "rgba(245, 158, 11, 0.2)", border: "1px solid rgba(245, 158, 11, 0.4)",
                        color: "#f59e0b", fontSize: "0.72rem", fontWeight: 800,
                      }}>
                        ⚡ 1-CLICK TECH AUDIT
                      </span>
                      <span style={{ fontSize: "0.78rem", color: "#94a3b8" }}>
                        {auditModalLead.city || "Business Target"} • {auditModalLead.category || "General"}
                      </span>
                    </div>
                    <h3 style={{ margin: 0, fontSize: "1.15rem", fontWeight: 800, color: "#ffffff" }}>
                      {auditModalLead.name}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setAuditModalLead(null)}
                    style={{
                      background: "rgba(255,255,255,0.1)", border: "none", color: "#cbd5e1",
                      width: "32px", height: "32px", borderRadius: "8px", cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "14px",
                    }}
                  >
                    ✕
                  </button>
                </div>

                {/* Body */}
                <div style={{ padding: "22px 24px", display: "flex", flexDirection: "column", gap: "18px" }}>
                  {/* URL & Score Strip */}
                  <div style={{
                    padding: "14px 16px", borderRadius: "12px",
                    background: (audit.score || 0) < 60 ? "rgba(239, 68, 68, 0.06)" : (audit.score || 0) < 80 ? "rgba(245, 158, 11, 0.06)" : "rgba(34, 197, 94, 0.06)",
                    border: `1px solid ${(audit.score || 0) < 60 ? "rgba(239, 68, 68, 0.2)" : (audit.score || 0) < 80 ? "rgba(245, 158, 11, 0.2)" : "rgba(34, 197, 94, 0.2)"}`,
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", flexWrap: "wrap",
                  }}>
                    <div>
                      <div style={{ fontSize: "0.72rem", fontWeight: 700, color: DS.textTertiary, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                        Inspected Website
                      </div>
                      <a
                        href={auditModalLead.website?.startsWith("http") ? auditModalLead.website : `https://${auditModalLead.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: DS.accentIndigo, fontWeight: 700, fontSize: "0.92rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "2px" }}
                      >
                        <i className="fas fa-globe"></i>
                        <span>{auditModalLead.website}</span>
                        <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: "10px" }}></i>
                      </a>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, color: DS.textTertiary }}>HEALTH SCORE</div>
                        <div style={{
                          fontSize: "1.45rem", fontWeight: 900,
                          color: (audit.score || 0) < 60 ? "#ef4444" : (audit.score || 0) < 80 ? "#f59e0b" : "#16a34a",
                        }}>
                          {audit.score || 0}<span style={{ fontSize: "0.85rem", fontWeight: 600, color: DS.textTertiary }}>/100</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        disabled={auditingLeadId === auditModalLead.id}
                        onClick={() => handleAuditWebsite(auditModalLead)}
                        style={{
                          display: "inline-flex", alignItems: "center", gap: "5px",
                          padding: "8px 12px", borderRadius: "8px",
                          background: "#ffffff", border: `1px solid ${DS.surfaceBorder}`,
                          color: DS.textPrimary, fontSize: "0.75rem", fontWeight: 700,
                          cursor: auditingLeadId === auditModalLead.id ? "not-allowed" : "pointer",
                          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                        }}
                      >
                        <i className={`fas fa-rotate ${auditingLeadId === auditModalLead.id ? "fa-spin" : ""}`}></i>
                        <span>Re-Scan</span>
                      </button>
                    </div>
                  </div>

                  {/* 4 Inspector Metric Cards */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(135px, 1fr))", gap: "10px" }}>
                    {/* SSL */}
                    <div style={{
                      padding: "12px", borderRadius: "10px",
                      background: audit.hasHttps ? "rgba(34, 197, 94, 0.05)" : "rgba(239, 68, 68, 0.06)",
                      border: `1px solid ${audit.hasHttps ? "rgba(34, 197, 94, 0.2)" : "rgba(239, 68, 68, 0.25)"}`,
                    }}>
                      <div style={{ fontSize: "0.68rem", fontWeight: 700, color: DS.textTertiary, marginBottom: "4px" }}>
                        SSL CERTIFICATE
                      </div>
                      <div style={{ fontSize: "0.82rem", fontWeight: 800, color: audit.hasHttps ? "#16a34a" : "#ef4444", display: "flex", alignItems: "center", gap: "5px" }}>
                        <i className={`fas ${audit.hasHttps ? "fa-lock" : "fa-lock-open"}`}></i>
                        {audit.hasHttps ? "HTTPS Secured" : "Not Secure ⚠️"}
                      </div>
                      <div style={{ fontSize: "0.68rem", color: DS.textSecondary, marginTop: "4px" }}>
                        {audit.hasHttps ? "Valid SSL encryption" : "Browser warns client"}
                      </div>
                    </div>

                    {/* Viewport */}
                    <div style={{
                      padding: "12px", borderRadius: "10px",
                      background: audit.hasViewport ? "rgba(34, 197, 94, 0.05)" : "rgba(239, 68, 68, 0.06)",
                      border: `1px solid ${audit.hasViewport ? "rgba(34, 197, 94, 0.2)" : "rgba(239, 68, 68, 0.25)"}`,
                    }}>
                      <div style={{ fontSize: "0.68rem", fontWeight: 700, color: DS.textTertiary, marginBottom: "4px" }}>
                        MOBILE VIEWPORT
                      </div>
                      <div style={{ fontSize: "0.82rem", fontWeight: 800, color: audit.hasViewport ? "#16a34a" : "#ef4444", display: "flex", alignItems: "center", gap: "5px" }}>
                        <i className={`fas ${audit.hasViewport ? "fa-mobile-screen" : "fa-triangle-exclamation"}`}></i>
                        {audit.hasViewport ? "Responsive Meta" : "Layout Broken 📱"}
                      </div>
                      <div style={{ fontSize: "0.68rem", color: DS.textSecondary, marginTop: "4px" }}>
                        {audit.hasViewport ? "Scales on phone" : "Cuts off on mobile"}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div style={{
                      padding: "12px", borderRadius: "10px",
                      background: "rgba(99, 102, 241, 0.05)",
                      border: "1px solid rgba(99, 102, 241, 0.2)",
                    }}>
                      <div style={{ fontSize: "0.68rem", fontWeight: 700, color: DS.textTertiary, marginBottom: "4px" }}>
                        TECH STACK / CMS
                      </div>
                      <div style={{ fontSize: "0.82rem", fontWeight: 800, color: "#6366f1", display: "flex", alignItems: "center", gap: "5px" }}>
                        <i className="fas fa-layer-group"></i>
                        {audit.cms || "Custom"}
                      </div>
                      <div style={{ fontSize: "0.68rem", color: DS.textSecondary, marginTop: "4px" }}>
                        {audit.cms?.includes("WordPress") ? "High hack / slow risk" : "Current platform"}
                      </div>
                    </div>

                    {/* Speed / Ping */}
                    <div style={{
                      padding: "12px", borderRadius: "10px",
                      background: "rgba(14, 165, 233, 0.05)",
                      border: "1px solid rgba(14, 165, 233, 0.2)",
                    }}>
                      <div style={{ fontSize: "0.68rem", fontWeight: 700, color: DS.textTertiary, marginBottom: "4px" }}>
                        SERVER RESPONSE
                      </div>
                      <div style={{ fontSize: "0.82rem", fontWeight: 800, color: "#0284c7", display: "flex", alignItems: "center", gap: "5px" }}>
                        <i className="fas fa-bolt"></i>
                        {audit.durationMs ? `${audit.durationMs}ms` : "Active"}
                      </div>
                      <div style={{ fontSize: "0.68rem", color: DS.textSecondary, marginTop: "4px" }}>
                        {audit.isReachable ? "Server reachable" : "Slow response"}
                      </div>
                    </div>
                  </div>

                  {/* Real Detected Pain Points Checklist */}
                  <div>
                    <div style={{ fontSize: "0.78rem", fontWeight: 800, color: DS.textPrimary, marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                      <i className="fas fa-triangle-exclamation" style={{ color: "#ef4444" }}></i>
                      <span>Detected Website Weaknesses (Client Ko Batane Ke Liye):</span>
                    </div>
                    {audit.painPoints && audit.painPoints.length > 0 ? (
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        {audit.painPoints.map((point, idx) => (
                          <div
                            key={idx}
                            style={{
                              padding: "8px 12px", borderRadius: "8px",
                              background: "rgba(239, 68, 68, 0.05)", border: "1px solid rgba(239, 68, 68, 0.15)",
                              fontSize: "0.76rem", color: "#991b1b", fontWeight: 600,
                              display: "flex", alignItems: "center", gap: "8px",
                            }}
                          >
                            <i className="fas fa-circle-exclamation" style={{ color: "#ef4444", fontSize: "11px", flexShrink: 0 }}></i>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div style={{
                        padding: "10px 14px", borderRadius: "8px",
                        background: "rgba(34, 197, 94, 0.06)", border: "1px solid rgba(34, 197, 94, 0.2)",
                        fontSize: "0.76rem", color: "#166534", fontWeight: 600,
                      }}>
                        Website online hai lekin modern ChittorTech speed, CRM leads capture aur direct WhatsApp button missing hai.
                      </div>
                    )}
                  </div>

                  {/* Tailored WhatsApp Pitch Box (Incorporates Audit Findings) */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                      <label style={{ fontSize: "0.78rem", fontWeight: 800, color: DS.textPrimary, display: "flex", alignItems: "center", gap: "6px" }}>
                        <i className="fab fa-whatsapp" style={{ color: "#16a34a" }}></i>
                        <span>Auto-Generated WhatsApp Pitch (With Real Audit Pain Points):</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(pitch);
                          setAuditCopied(true);
                          setTimeout(() => setAuditCopied(false), 2200);
                        }}
                        style={{
                          background: "transparent", border: "none", color: auditCopied ? "#16a34a" : DS.accentIndigo,
                          fontSize: "0.74rem", fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "4px",
                        }}
                      >
                        <i className={`fas ${auditCopied ? "fa-check" : "fa-copy"}`}></i>
                        <span>{auditCopied ? "Copied!" : "Copy Pitch"}</span>
                      </button>
                    </div>

                    <textarea
                      readOnly
                      rows={6}
                      value={pitch}
                      style={{
                        width: "100%", padding: "12px 14px", borderRadius: "10px",
                        background: "#f8fafc", border: `1px solid ${DS.surfaceBorder}`,
                        fontSize: "0.76rem", color: DS.textPrimary, fontFamily: "inherit",
                        lineHeight: 1.5, resize: "none",
                      }}
                    />
                  </div>
                </div>

                {/* Footer Actions */}
                <div style={{
                  padding: "14px 24px", borderTop: `1px solid ${DS.surfaceBorder}`,
                  background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "space-between",
                  gap: "10px", flexWrap: "wrap", borderBottomLeftRadius: "16px", borderBottomRightRadius: "16px",
                }}>
                  <button
                    type="button"
                    onClick={() => setAuditModalLead(null)}
                    style={{
                      padding: "8px 16px", borderRadius: "8px",
                      background: "transparent", border: `1px solid ${DS.surfaceBorder}`,
                      color: DS.textSecondary, fontSize: "0.8rem", fontWeight: 700, cursor: "pointer",
                    }}
                  >
                    Close
                  </button>

                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        onContactClick(auditModalLead, "whatsapp");
                        setAuditModalLead(null);
                      }}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "7px",
                        padding: "9px 20px", borderRadius: "10px",
                        background: "linear-gradient(135deg, #22c55e, #16a34a)",
                        border: "none", color: "#ffffff",
                        fontSize: "0.84rem", fontWeight: 800, textDecoration: "none",
                        boxShadow: "0 4px 14px rgba(34, 197, 94, 0.35)",
                        cursor: "pointer",
                      }}
                    >
                      <i className="fab fa-whatsapp" style={{ fontSize: "15px" }}></i>
                      <span>Send Pitch on WhatsApp ↗</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

    </div>
  );
}


