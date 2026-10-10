# 🚀 ChittorTech Domain Migration & Clean Slate Guide

> **New Primary Domain:** `chittortech.in` (100% LIVE)  
> **Previous Domain:** `chittortech.in` (Decommissioning / Shutting Down)  
> **Strategy:** 100% Clean Slate & Fresh Start (No 301 baggage, fresh indexing, fresh analytics)  
> **Date:** September 10, 2026  

---

## ✅ PHASE 1: COMPLETED SETUPS (100% DONE)

- [x] **Cloudflare DNS Management (`chittortech.in`):**
  - [x] GoDaddy Nameservers pointed to Cloudflare (`leonidas.ns.cloudflare.com`, `nova.ns.cloudflare.com`).
  - [x] Apex `A` record (`199.36.158.100`) pointed to Firebase Hosting.
  - [x] SSL/TLS mode set to Full with Always Use HTTPS.
- [ ] **Cloudflare Cache & Settings Match (Pending Review):**
  - [ ] Purane Cloudflare account (`chittortech.in`) ki Caching settings, Page Rules aur Tiered Cache rules dekh kar naye Cloudflare account (`chittortech.in`) se match karni hain.
- [x] **GoDaddy Professional Email Authentication:**
  - [x] SPF Record (`TXT`) added & verified (`v=spf1 include:secureserver.net -all`).
  - [x] DKIM Record 1 (`CNAME`) added & verified (`secureserver1._domainkey` ➔ `s1.dkim.chittortech_in.56c.onsecureserver.net`).
  - [x] DKIM Record 2 (`CNAME`) added & verified (`secureserver2._domainkey` ➔ `s2.dkim.chittortech_in.56c.onsecureserver.net`).
  - [x] DMARC & MX records active (`smtp.secureserver.net`, `mailstore1.secureserver.net`).
  - [x] All GoDaddy red warning banners completely resolved.
- [x] **Firebase Hosting & Authentication:**
  - [x] Custom domain `chittortech.in` connected and verified.
  - [x] Google SSL Certificate minted & active (`HTTP 200 OK`).
  - [x] `chittortech.in` added to Firebase Auth Authorised Domains.
- [x] **Next.js Codebase Deep Migration:**
  - [x] All 104 files & 4,381 occurrences replaced from `.online` to `.in`.
  - [x] AI Chatbot lead emails and knowledge prompt updated.
  - [x] Contact page, Footer, Legal & Payment policy emails updated (`contact@chittortech.in`, `business@chittortech.in`).
  - [x] `public/sitemap.xml` regenerated with 837 clean `.in` URLs.
  - [x] `public/robots.txt` pointing to `https://chittortech.in/sitemap.xml`.

---

## 🛑 PHASE 2: PURANA `.online` BAND / DECOMMISSIONING (Raat ko karein)

Aapko purana sara data aur properties band karni hain taaki naya system clean rahe:

- [x] **1. Google Search Console (Purani Property Band karein):**
  - [x] Search Console me `https://chittortech.in/` select karke remove kar diya.
- [x] **2. Bing Webmaster Tools (Purana Site Delete karein):**
  - [x] Bing Webmaster me purana domain removed; sirf `chittortech.in/` active hai.
- [x] **3. Yandex Webmaster (Purana Site Delete karein):**
  - [x] Purana `.online` unverified / disconnected; naya `chittortech.in` 100% active hai.
- [x] **4. Google Analytics 4 (Purani Property Trash karein):**
  - [x] Naya fresh account aur stream banaya (`ChittorTech.in Website` / `G-CYREXRYVLN`).
- [ ] **5. Firebase Console (`Chittor-Tech`):**
  - [ ] **Hosting:** Custom Domains list me `chittortech.in` aur `www.chittortech.in` ke 3 dots par click karke **"Delete domain"** kar dein.
  - [ ] **Authentication:** Settings ➔ **Authorised domains** me se `chittortech.in` ko remove kar dein.
- [x] **6. Cloudflare:**
  - [x] `chittortech.in` removed from active domains list; `chittortech.in` active.

---

## 🌟 PHASE 3: NAYA FRESH START (`chittortech.in`)

Naye domain ke liye zero se fresh setup:

- [x] **1. Google Search Console (Nayi Property):**
  - [x] Domain property `chittortech.in` added & verified via Cloudflare DNS.
  - [x] `public/sitemap.xml` audited with zero 404s (836 clean 200 OK URLs).
- [x] **2. Bing Webmaster Tools (Nayi Site):**
  - [x] Added `https://chittortech.in` via 1-Click Google Search Console Import (Verified).
  - [ ] Submit sitemap: `https://chittortech.in/sitemap.xml`
- [x] **3. Yandex Webmaster (Nayi Site):**
  - [x] Added & verified `https://chittortech.in` via Meta tag (`495c64862381b7b9`).
  - [ ] Submit sitemap: `https://chittortech.in/sitemap.xml`
- [x] **4. Google Analytics 4 (Nayi Fresh Property):**
  - [x] GA4 me fresh property create ki: `ChittorTech (.in)`.
  - [x] Web Stream URL: `https://chittortech.in`.
  - [x] Naya Measurement ID connect kiya: `G-CYREXRYVLN` in `src/app/layout.js`.

---

## 🏢 PHASE 4: BUSINESS PORTALS & SOCIAL PROFILES

- [ ] **Supabase (Database & Auth):**
  - [ ] Project Settings ➔ **Authentication** ➔ **URL Configuration**:
  - [ ] **Site URL:** `https://chittortech.in`
  - [ ] **Redirect URLs:** Purana hata kar `https://chittortech.in/**` save karein.
- [ ] **Google Business Profile (Google My Business / Maps):**
  - [ ] Edit Profile ➔ Contact:
  - [ ] **Website:** `https://chittortech.in`
  - [ ] **Email:** `contact@chittortech.in`
- [ ] **iStart Rajasthan Portal:**
  - [ ] Startup Dashboard ➔ Profile Details:
  - [ ] **Website:** `https://chittortech.in`
  - [ ] **Email:** `business@chittortech.in`
- [ ] **GitHub Repository:**
  - [ ] Repo main page ➔ About (gear icon) ➔ Website URL: `https://chittortech.in`
- [ ] **Payment Gateways (Razorpay / Stripe / Cashfree):**
  - [ ] Profile Settings ➔ Business Website URL: `https://chittortech.in`
- [ ] **Social Media Profiles:**
  - [ ] **LinkedIn Company Page:** Edit ➔ Website: `https://chittortech.in`
  - [ ] **Instagram Bio:** Link: `https://chittortech.in`
  - [ ] **WhatsApp Business Profile:** Website: `https://chittortech.in`
  - [ ] **Facebook & YouTube:** About links update karein.
