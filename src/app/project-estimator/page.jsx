"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { submitLead } from "@/lib/leadService";
import {
  generateDualMarketEstimate,
  MARKET_CONFIGS,
  COUNTRIES,
  formatCurrencyValue
} from "@/lib/aiEstimatorService";
import {
  TRANSLATIONS,
  LOCALIZED_ARCHETYPES,
  LOCALIZED_ARCHETYPE_SAMPLES,
  LOCALIZED_KAIRA_MESSAGES,
  LOCALIZED_QUICK_PROMPTS,
  LOCALIZED_AGENT_STEPS
} from "@/lib/estimatorTranslations";
import "../../../public/assets/css/estimator.css";

const MARQUEE_ITEMS = [
  { name: "Next.js 15 SSR", icon: "fa-solid fa-code", color: "#000000" },
  { name: "React Native Mobile", icon: "fa-solid fa-mobile-screen-button", color: "#61dafb" },
  { name: "PostgreSQL & Supabase", icon: "fa-solid fa-database", color: "#336791" },
  { name: "Groq LPU Acceleration", icon: "fa-solid fa-microchip", color: "#f43f5e" },
  { name: "WhatsApp Cloud API", icon: "fa-brands fa-whatsapp", color: "#25d366" },
  { name: "Cloudflare Edge CDN", icon: "fa-brands fa-cloudflare", color: "#f6821f" },
  { name: "Stripe & Razorpay Checkout", icon: "fa-solid fa-credit-card", color: "#0c2340" },
  { name: "Python & LangChain AI", icon: "fa-brands fa-python", color: "#3776ab" },
  { name: "Antigravity AI IDE", icon: "fa-solid fa-bolt", color: "#a855f7" },
  { name: "Render Cloud Infrastructure", icon: "fa-solid fa-server", color: "#46e3b7" },
];

export default function ProjectEstimatorPage() {
  // Market & Localization State: Default Language is ALWAYS English (en)
  const [marketMode, setMarketMode] = useState("domestic"); // "domestic" | "international"
  const [selectedCountryId, setSelectedCountryId] = useState("IN");
  const [lang, setLang] = useState("en"); // English by default for India, USA, and all countries

  const [selectedArch, setSelectedArch] = useState("web");
  const [description, setDescription] = useState("");
  const [timelineSpeed, setTimelineSpeed] = useState("Standard");
  const [industry, setIndustry] = useState("retail");

  // State machine for generation
  const [isThinking, setIsThinking] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [estimateResult, setEstimateResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [activeTab, setActiveTab] = useState("architecture");
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  // Typewritten summary
  const [typedSummary, setTypedSummary] = useState("");

  // Kaira dynamic speech typewriter
  const [kairaMsgIndex, setKairaMsgIndex] = useState(0);
  const [kairaTypedText, setKairaTypedText] = useState("");
  const [isKairaTyping, setIsKairaTyping] = useState(true);

  // Description auto-typewriter
  const [isAutoTypingDesc, setIsAutoTypingDesc] = useState(false);
  const descTypingTimerRef = useRef(null);

  // Lead capture states
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState(false);

  // Translation helpers
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const isRTL = t.isRTL || false;
  const currentCountry = COUNTRIES.find((c) => c.id === selectedCountryId) || COUNTRIES[0];
  const archetypes = LOCALIZED_ARCHETYPES[lang] || LOCALIZED_ARCHETYPES.en;
  const archetypeSamples = LOCALIZED_ARCHETYPE_SAMPLES[lang] || LOCALIZED_ARCHETYPE_SAMPLES.en;
  const kairaMessages = LOCALIZED_KAIRA_MESSAGES[lang] || LOCALIZED_KAIRA_MESSAGES.en;
  const quickPrompts = LOCALIZED_QUICK_PROMPTS[lang] || LOCALIZED_QUICK_PROMPTS.en;
  const agentSteps = LOCALIZED_AGENT_STEPS[lang] || LOCALIZED_AGENT_STEPS.en;

  // 1. Kaira Speech Bubble Dynamic Typewriter Effect
  useEffect(() => {
    let charIndex = 0;
    let typeTimer = null;
    let pauseTimer = null;
    const currentMessage = kairaMessages[kairaMsgIndex % kairaMessages.length];

    setIsKairaTyping(true);
    setKairaTypedText("");

    typeTimer = setInterval(() => {
      if (charIndex < currentMessage.length) {
        setKairaTypedText(currentMessage.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeTimer);
        setIsKairaTyping(false);

        pauseTimer = setTimeout(() => {
          setKairaMsgIndex((prev) => (prev + 1) % kairaMessages.length);
        }, 4500);
      }
    }, 22);

    return () => {
      if (typeTimer) clearInterval(typeTimer);
      if (pauseTimer) clearTimeout(pauseTimer);
    };
  }, [kairaMsgIndex, lang, marketMode]);

  // 2. Helper to live-typewrite text into description
  const typewriteIntoDescription = (targetText) => {
    if (descTypingTimerRef.current) {
      clearInterval(descTypingTimerRef.current);
    }
    setIsAutoTypingDesc(true);
    setDescription("");
    let charIdx = 0;
    descTypingTimerRef.current = setInterval(() => {
      if (charIdx < targetText.length) {
        setDescription(targetText.substring(0, charIdx + 1));
        charIdx++;
      } else {
        clearInterval(descTypingTimerRef.current);
        descTypingTimerRef.current = null;
        setIsAutoTypingDesc(false);
      }
    }, 14);
  };

  const stopAutoTyping = () => {
    if (descTypingTimerRef.current) {
      clearInterval(descTypingTimerRef.current);
      descTypingTimerRef.current = null;
      setIsAutoTypingDesc(false);
    }
  };

  // Handle Market Mode Change (Domestic vs International) - English by Default
  const handleMarketChange = (mode) => {
    setMarketMode(mode);
    setKairaMsgIndex(0);

    if (mode === "domestic") {
      setSelectedCountryId("IN");
      setLang("en"); // English by default
      const samples = LOCALIZED_ARCHETYPE_SAMPLES.en;
      typewriteIntoDescription(samples[selectedArch] || samples.web);
    } else {
      const newCountry = selectedCountryId === "IN" ? "US" : selectedCountryId;
      setSelectedCountryId(newCountry);
      setLang("en"); // English by default
      const samples = LOCALIZED_ARCHETYPE_SAMPLES.en;
      typewriteIntoDescription(samples[selectedArch] || samples.web);
    }
  };

  // Handle Country Selection - English by Default
  const handleCountryChange = (countryId) => {
    setSelectedCountryId(countryId);
    const selected = COUNTRIES.find((c) => c.id === countryId);
    if (selected) {
      if (selected.market !== marketMode) {
        setMarketMode(selected.market);
      }
      // Keep English by default unless user has manually chosen another supported language
      if (lang !== "en" && !selected.supportedLangs.includes(lang)) {
        setLang("en");
      }
      setKairaMsgIndex(0);
      const activeLang = (selected.supportedLangs.includes(lang)) ? lang : "en";
      const samples = LOCALIZED_ARCHETYPE_SAMPLES[activeLang] || LOCALIZED_ARCHETYPE_SAMPLES.en;
      typewriteIntoDescription(samples[selectedArch] || samples.web);
    }
  };

  // Handle Language Switch (When user explicitly clicks language toggle)
  const handleLanguageChange = (newLang) => {
    setLang(newLang);
    setKairaMsgIndex(0);
    const samples = LOCALIZED_ARCHETYPE_SAMPLES[newLang] || LOCALIZED_ARCHETYPE_SAMPLES.en;
    typewriteIntoDescription(samples[selectedArch] || samples.web);
  };

  // Handle Archetype click with live typewriter
  const handleArchetypeClick = (archId) => {
    setSelectedArch(archId);
    const sample = archetypeSamples[archId];
    if (sample) {
      typewriteIntoDescription(sample);
    }
  };

  // Handle quick prompt click with live typewriter
  const handleQuickPromptClick = (text) => {
    typewriteIntoDescription(text);
  };

  // Initial load: live-type default English sample after 600ms
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      typewriteIntoDescription(LOCALIZED_ARCHETYPE_SAMPLES.en.web);
    }, 600);
    return () => {
      clearTimeout(initialTimer);
      stopAutoTyping();
    };
  }, []);

  // Live timer & step progression during AI thinking
  useEffect(() => {
    let timer;
    let stepTimer;

    if (isThinking) {
      setElapsedSeconds(0);
      setActiveStepIndex(0);

      const start = Date.now();
      timer = setInterval(() => {
        setElapsedSeconds(((Date.now() - start) / 1000).toFixed(1));
      }, 100);

      let s = 0;
      stepTimer = setInterval(() => {
        s++;
        if (s < agentSteps.length) {
          setActiveStepIndex(s);
        }
      }, 700);
    }

    return () => {
      clearInterval(timer);
      clearInterval(stepTimer);
    };
  }, [isThinking, agentSteps]);

  // Live typewriter effect for summary
  useEffect(() => {
    if (estimateResult && estimateResult.summary) {
      setTypedSummary("");
      let i = 0;
      const full = estimateResult.summary;
      const interval = setInterval(() => {
        if (i < full.length) {
          setTypedSummary(full.substring(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 12);
      return () => clearInterval(interval);
    }
  }, [estimateResult]);

  // Generate Estimate: Direct Client-Side OpenRouter + DeepReason Fallback Engine
  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!description.trim() || description.trim().length < 6) {
      setErrorMsg("Please describe your project idea with at least 1-2 lines of detail.");
      return;
    }

    setErrorMsg("");
    setIsThinking(true);
    setEstimateResult(null);
    setLeadSuccess(false);

    try {
      const result = await generateDualMarketEstimate({
        projectType: archetypes.find((a) => a.id === selectedArch)?.title || selectedArch,
        description: description.trim(),
        timelineSpeed,
        targetAudience: t.industries[industry] || industry,
        marketMode,
        countryId: selectedCountryId,
        lang,
      });

      if (!result || !result.estimation) {
        throw new Error("Failed to compile architectural estimate. Please try again.");
      }

      setEstimateResult(result.estimation);
      setActiveTab("architecture");

      setTimeout(() => {
        const el = document.getElementById("blueprint-deliverable");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 250);
    } catch (err) {
      console.error("Estimator error:", err);
      setErrorMsg(err.message || "Failed to generate estimate. Please try again.");
    } finally {
      setIsThinking(false);
    }
  };

  const handleCopyMarkdown = () => {
    if (!estimateResult) return;
    const md = `# ${estimateResult.projectName}
**Target Market:** ${estimateResult.country || currentCountry.name} (${estimateResult.currency})
**Estimated Budget:** ${estimateResult.costEstimation?.formatted}
**Estimated Timeline:** ${estimateResult.estimatedTimeline}
**Complexity:** ${estimateResult.complexity}

## Architecture Overview
${estimateResult.summary}

## Recommended Tech Stack
- Frontend: ${estimateResult.recommendedTech?.frontend}
- Backend: ${estimateResult.recommendedTech?.backend}
- Database: ${estimateResult.recommendedTech?.database}
- Integrations: ${estimateResult.recommendedTech?.integrations}

## Key Capabilities Included
${estimateResult.keyFeatures?.map((f) => `- ${f}`).join("\n")}

## Milestone Sprints
${estimateResult.milestones?.map((m) => `### ${m.phase} (${m.duration})\n${m.description}`).join("\n\n")}

---
Generated by ChittorTech AI Solutions Architect (Agent Kaira)
https://chittortech.in/project-estimator`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(md).then(() => {
        setCopiedSuccess(true);
        setTimeout(() => setCopiedSuccess(false), 3000);
      });
    }
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!leadName || !leadPhone) {
      alert("Please provide your name and contact number.");
      return;
    }

    setLeadSubmitting(true);
    try {
      const payload = {
        name: leadName,
        contact: leadPhone,
        email: leadEmail || "N/A",
        service: `AI Estimator [${marketMode.toUpperCase()} - ${currentCountry.name} - ${lang.toUpperCase()}]: ${estimateResult?.projectName || "Custom Project"}`,
        industry: t.industries[industry] || industry,
        message: `Market: ${currentCountry.name} (${estimateResult?.currency}) | Language: ${lang} | Budget: ${estimateResult?.costEstimation?.formatted} | Timeline: ${estimateResult?.estimatedTimeline} | User Idea: ${description}`,
        source: "/project-estimator",
        company: `AI Estimator (${marketMode})`,
      };

      await submitLead(payload);
      setLeadSuccess(true);
    } catch (err) {
      console.error("Lead submission error:", err);
      alert("Failed to submit inquiry. Please WhatsApp us directly at +91 7597451057");
    } finally {
      setLeadSubmitting(false);
    }
  };

  return (
    <div
      className="estimator-light-canvas light-dot-grid"
      dir={isRTL ? "rtl" : "ltr"}
      style={{ paddingTop: "110px", paddingBottom: "80px", textAlign: isRTL ? "right" : "left" }}
    >
      <div className="estimator-main-container">
        
        {/* TOP AGENT IDENTITY RIBBON */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div className="estimator-top-ribbon" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "999px", padding: "6px 20px", boxShadow: "0 4px 20px rgba(37, 99, 235, 0.08)", flexWrap: "wrap", justifyContent: "center" }}>
            <img
              src="/assets/images/chatbot-kaira.webp"
              alt="Kaira AI"
              style={{ width: "24px", height: "24px", borderRadius: "50%", objectFit: "contain", border: "1.5px solid #2563eb" }}
            />
            <span style={{ fontSize: "13px", fontWeight: "800", color: "#0f172a" }}>
              Agent Kaira
            </span>
            <span style={{ color: "#94a3b8" }}>•</span>
            <span style={{ fontSize: "12.5px", color: "#2563eb", fontWeight: "700" }}>
              {t.agentRole} ({currentCountry.name})
            </span>
            <span style={{ color: "#94a3b8" }}>•</span>
            <span style={{ fontSize: "12px", color: "#64748b" }}>
              ⚡ OpenRouter Inference Core
            </span>
          </div>
        </div>

        {/* HERO TITLE */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h1 className="estimator-hero-title" style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: "900", color: "#0f172a", letterSpacing: "-1px", lineHeight: 1.15, margin: "0 auto 16px", maxWidth: "980px" }}>
            {t.heroTitlePrefix} <br />
            <span style={{ background: "linear-gradient(135deg, #2563eb 0%, #06b6d4 50%, #059669 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {t.heroTitleHighlight}
            </span>
          </h1>
          <p className="estimator-hero-subtitle" style={{ fontSize: "16.5px", color: "#475569", maxWidth: "800px", margin: "0 auto 24px", lineHeight: "1.6" }}>
            {marketMode === "domestic" ? t.heroSubtitleDomestic : t.heroSubtitleInternational}
          </p>

          {/* Value Badges */}
          <div className="estimator-value-badges" style={{ display: "inline-flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", padding: "10px 24px", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "14px", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#334155", fontWeight: "600" }}>
              <i className="fa-solid fa-bolt" style={{ color: "#d97706" }}></i>
              <span>{t.badgeReasoning}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#334155", fontWeight: "600" }}>
              <i className="fa-solid fa-shield-halved" style={{ color: "#059669" }}></i>
              <span>{marketMode === "domestic" ? t.badgeGuaranteeDomestic : t.badgeGuaranteeInternational}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#334155", fontWeight: "600" }}>
              <i className="fa-solid fa-code" style={{ color: "#2563eb" }}></i>
              <span>{t.badgeStack}</span>
            </div>
          </div>
        </div>

        {/* DYNAMIC INFINITE TECH MARQUEE */}
        <div style={{ marginBottom: "36px" }} dir="ltr">
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((tech, idx) => (
                <div key={idx} className="marquee-item">
                  <i className={tech.icon} style={{ color: tech.color, fontSize: "15px" }}></i>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AGENTIC CONVERSATION INTRO BUBBLE */}
        <div className="glass-white-card estimator-agent-card" style={{ borderLeft: isRTL ? "none" : "5px solid #2563eb", borderRight: isRTL ? "5px solid #2563eb" : "none" }}>
          <div style={{ position: "relative", width: "54px", height: "54px", flexShrink: 0 }}>
            <img
              src="/assets/images/chatbot-kaira.webp"
              alt="Kaira AI Avatar"
              className="kaira-avatar-glow"
              style={{ width: "54px", height: "54px", borderRadius: "50%", objectFit: "contain", background: "#ffffff", border: "2.5px solid #2563eb", padding: "2px" }}
              onError={(e) => { e.target.src = '/assets/images/ct-logo.png'; }}
            />
            <span style={{ position: "absolute", bottom: "1px", right: "1px", width: "14px", height: "14px", background: "#10b981", border: "2.5px solid #ffffff", borderRadius: "50%", boxShadow: "0 0 8px #10b981" }}></span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "6px" }}>
              <div style={{ fontSize: "13px", fontWeight: "800", color: "#2563eb", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Agent Kaira ({currentCountry.name})
              </div>
              <span style={{ fontSize: "11px", background: isKairaTyping ? "#eff6ff" : "#ecfdf5", color: isKairaTyping ? "#2563eb" : "#059669", border: `1px solid ${isKairaTyping ? '#bfdbfe' : '#a7f3d0'}`, borderRadius: "999px", padding: "2px 10px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                {isKairaTyping ? (
                  <>
                    <span style={{ display: "inline-flex", gap: "3px" }}>
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                    </span>
                    {t.agentStatusTyping}
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-circle" style={{ fontSize: "7px", color: "#10b981" }}></i>
                    {t.agentStatusReady}
                  </>
                )}
              </span>
            </div>
            <div style={{ fontSize: "15px", color: "#1e293b", lineHeight: "1.6", fontWeight: "500", minHeight: "46px" }}>
              "{kairaTypedText}"
              <span className="kaira-cursor"></span>
            </div>
          </div>
        </div>

        {/* STUDIO INPUT CARD */}
        <div className="glass-white-card estimator-studio-card">
          
          {/* 🌟 MARKET SWITCHER & COUNTRY/LANGUAGE CALIBRATION BANNER 🌟 */}
          <div className="estimator-market-banner">
            
            {/* Market Switcher Row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "14px" }}>
              <div>
                <div style={{ fontSize: "11.5px", color: "#2563eb", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "800", display: "flex", alignItems: "center", gap: "6px" }}>
                  <i className="fa-solid fa-globe"></i> {t.marketTitle}
                </div>
                <div style={{ fontSize: "14px", fontWeight: "700", color: "#0f172a" }}>
                  {t.marketSubtitle}
                </div>
              </div>

              {/* Segment Toggle: Domestic vs International */}
              <div className="market-toggle-group" style={{ display: "inline-flex", background: "#e2e8f0", padding: "4px", borderRadius: "12px", gap: "4px" }} dir="ltr">
                <button
                  type="button"
                  className="market-toggle-btn"
                  onClick={() => handleMarketChange("domestic")}
                  style={{
                    border: "none",
                    borderRadius: "9px",
                    padding: "8px 18px",
                    fontSize: "13px",
                    fontWeight: "800",
                    cursor: "pointer",
                    background: marketMode === "domestic" ? "#ffffff" : "transparent",
                    color: marketMode === "domestic" ? "#0f172a" : "#64748b",
                    boxShadow: marketMode === "domestic" ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                    transition: "all 0.2s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <span>🇮🇳</span>
                  <span>{t.tabDomestic}</span>
                </button>

                <button
                  type="button"
                  className="market-toggle-btn"
                  onClick={() => handleMarketChange("international")}
                  style={{
                    border: "none",
                    borderRadius: "9px",
                    padding: "8px 18px",
                    fontSize: "13px",
                    fontWeight: "800",
                    cursor: "pointer",
                    background: marketMode === "international" ? "#2563eb" : "transparent",
                    color: marketMode === "international" ? "#ffffff" : "#64748b",
                    boxShadow: marketMode === "international" ? "0 2px 10px rgba(37, 99, 235, 0.3)" : "none",
                    transition: "all 0.2s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <span>🌍</span>
                  <span>{t.tabInternational}</span>
                </button>
              </div>
            </div>

            {/* Country Pills Row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center", paddingTop: "12px", borderTop: "1px solid #e2e8f0" }} dir="ltr">
              <span style={{ fontSize: "12px", color: "#64748b", fontWeight: "700" }}>
                {t.countryFilterLabel}
              </span>

              {COUNTRIES.filter((c) => marketMode === "domestic" ? c.id === "IN" : c.id !== "IN").map((country) => {
                const isActive = selectedCountryId === country.id;
                return (
                  <button
                    key={country.id}
                    type="button"
                    onClick={() => handleCountryChange(country.id)}
                    style={{
                      background: isActive ? "#ffffff" : "#f1f5f9",
                      border: isActive ? "2px solid #2563eb" : "1px solid #cbd5e1",
                      borderRadius: "999px",
                      padding: "6px 14px",
                      fontSize: "12.5px",
                      fontWeight: isActive ? "800" : "600",
                      color: isActive ? "#2563eb" : "#334155",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      boxShadow: isActive ? "0 4px 12px rgba(37, 99, 235, 0.15)" : "none",
                      transition: "all 0.2s"
                    }}
                  >
                    <span>{country.flag}</span>
                    <span>{country.name}</span>
                    <span style={{ color: isActive ? "#1d4ed8" : "#64748b", fontSize: "11px", fontWeight: "700" }}>({country.currency})</span>
                  </button>
                );
              })}
            </div>

            {/* Native Language Switcher for Multi-Lingual Countries (e.g. Dubai Arabic/English, Turkey Turkish/English, Germany Deutsch/English, India Hindi/English) */}
            {currentCountry.supportedLangs && currentCountry.supportedLangs.length > 1 && (
              <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", background: "#ffffff", padding: "8px 16px", borderRadius: "10px", border: "1px dashed #cbd5e1" }}>
                <span style={{ fontSize: "12px", color: "#475569", fontWeight: "700", display: "flex", alignItems: "center", gap: "6px" }}>
                  <i className="fa-solid fa-language" style={{ color: "#2563eb", fontSize: "14px" }}></i>
                  Language / Sprache / لغة:
                </span>
                <div style={{ display: "inline-flex", gap: "6px" }} dir="ltr">
                  {currentCountry.supportedLangs.map((lCode) => {
                    const lObj = TRANSLATIONS[lCode] || TRANSLATIONS.en;
                    const isCurrent = lang === lCode;
                    return (
                      <button
                        key={lCode}
                        type="button"
                        onClick={() => handleLanguageChange(lCode)}
                        style={{
                          background: isCurrent ? "#2563eb" : "#f1f5f9",
                          color: isCurrent ? "#ffffff" : "#334155",
                          border: isCurrent ? "1px solid #1d4ed8" : "1px solid #e2e8f0",
                          borderRadius: "6px",
                          padding: "4px 10px",
                          fontSize: "12px",
                          fontWeight: "800",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          transition: "all 0.2s"
                        }}
                      >
                        <span>{lObj.flag}</span>
                        <span>{lObj.langName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          <form onSubmit={handleGenerate}>
            
            {/* Step 1: Select Archetype */}
            <div style={{ marginBottom: "30px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                <span style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ background: "#2563eb", color: "#ffffff", width: "24px", height: "24px", borderRadius: "6px", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "900" }}>1</span>
                  {t.step1Title}
                </span>
                <span style={{ fontSize: "12px", color: "#64748b" }}>{t.step1Desc}</span>
              </div>

              <div className="archetypes-grid">
                {archetypes.map((arch) => {
                  const isSelected = selectedArch === arch.id;
                  return (
                    <div
                      key={arch.id}
                      className={`cat-light-card ${isSelected ? "selected" : ""}`}
                      onClick={() => handleArchetypeClick(arch.id)}
                    >
                      {isSelected && (
                        <div style={{ position: "absolute", top: "14px", right: isRTL ? "auto" : "14px", left: isRTL ? "14px" : "auto", width: "20px", height: "20px", borderRadius: "50%", background: "#2563eb", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "900" }}>
                          <i className="fa-solid fa-check"></i>
                        </div>
                      )}
                      
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                        <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: arch.bg, display: "flex", alignItems: "center", justifyContent: "center", color: arch.color, fontSize: "17px" }}>
                          <i className={`fa-solid ${arch.icon}`}></i>
                        </div>
                        <span style={{ fontSize: "11px", fontWeight: "800", color: arch.color, textTransform: "uppercase", letterSpacing: "0.5px" }}>{arch.badge}</span>
                      </div>

                      <div style={{ fontWeight: "800", fontSize: "15px", color: "#0f172a", marginBottom: "4px" }}>{arch.title}</div>
                      <div style={{ fontSize: "12.5px", color: "#64748b", lineHeight: 1.45 }}>{arch.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Prompt Details */}
            <div style={{ marginBottom: "28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", flexWrap: "wrap", gap: "8px" }}>
                <span style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ background: "#059669", color: "#ffffff", width: "24px", height: "24px", borderRadius: "6px", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "900" }}>2</span>
                  {t.step2Title}
                </span>
                {isAutoTypingDesc ? (
                  <span style={{ fontSize: "12px", color: "#2563eb", background: "#eff6ff", border: "1px solid #bfdbfe", padding: "3px 12px", borderRadius: "999px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <i className="fa-solid fa-pen-fancy" style={{ animation: "blinkCursor 1s infinite" }}></i>
                    {t.step2DescAuto}
                  </span>
                ) : (
                  <span style={{ fontSize: "12px", color: "#64748b" }}>
                    {description.length > 0 ? `${description.length} chars` : t.step2DescManual}
                  </span>
                )}
              </div>

              <div style={{ position: "relative" }}>
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => {
                    stopAutoTyping();
                    setDescription(e.target.value);
                  }}
                  onFocus={() => {
                    if (isAutoTypingDesc) stopAutoTyping();
                  }}
                  placeholder={t.step2DescManual}
                  style={{
                    width: "100%",
                    padding: "16px 18px",
                    borderRadius: "14px",
                    border: isAutoTypingDesc ? "2px solid #2563eb" : "1.5px solid #cbd5e1",
                    background: isAutoTypingDesc ? "#f0f9ff" : "#ffffff",
                    color: "#0f172a",
                    fontSize: "14.5px",
                    lineHeight: "1.6",
                    outline: "none",
                    resize: "vertical",
                    boxShadow: isAutoTypingDesc ? "0 0 0 4px rgba(37, 99, 235, 0.15)" : "0 2px 8px rgba(0,0,0,0.02)",
                    transition: "all 0.2s",
                    textAlign: isRTL ? "right" : "left"
                  }}
                />
                {isAutoTypingDesc && (
                  <button
                    type="button"
                    onClick={stopAutoTyping}
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      right: isRTL ? "auto" : "12px",
                      left: isRTL ? "12px" : "auto",
                      background: "#2563eb",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "6px",
                      padding: "4px 10px",
                      fontSize: "11px",
                      fontWeight: "700",
                      cursor: "pointer"
                    }}
                  >
                    {t.editYourselfBtn}
                  </button>
                )}
              </div>

              {/* Quick Sample Prompts */}
              <div className="quick-prompts-container">
                <span style={{ fontSize: "12px", color: "#64748b", fontWeight: "700" }}>
                  <i className="fa-solid fa-wand-magic-sparkles" style={{ color: "#2563eb", marginRight: "4px" }}></i>
                  {t.quickPromptsLabel}
                </span>
                {quickPrompts.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="quick-prompt-btn"
                    onClick={() => handleQuickPromptClick(p.text)}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Project Parameters */}
            <div className="estimator-params-grid">
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "800", color: "#0f172a", marginBottom: "6px" }}>
                  {t.step3SpeedLabel}
                </label>
                <select
                  value={timelineSpeed}
                  onChange={(e) => setTimelineSpeed(e.target.value)}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1.5px solid #cbd5e1", background: "#ffffff", color: "#0f172a", fontSize: "13.5px", outline: "none" }}
                >
                  <option value="Standard">{t.speedStandard}</option>
                  <option value="Express">{t.speedExpress}</option>
                  <option value="Modular">{t.speedModular}</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "800", color: "#0f172a", marginBottom: "6px" }}>
                  {t.step3IndustryLabel}
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1.5px solid #cbd5e1", background: "#ffffff", color: "#0f172a", fontSize: "13.5px", outline: "none" }}
                >
                  <option value="retail">{t.industries.retail}</option>
                  <option value="manufacturing">{t.industries.manufacturing}</option>
                  <option value="hospitality">{t.industries.hospitality}</option>
                  <option value="healthcare">{t.industries.healthcare}</option>
                  <option value="education">{t.industries.education}</option>
                  <option value="saas">{t.industries.saas}</option>
                </select>
              </div>
            </div>

            {/* Error Banner */}
            {errorMsg && (
              <div style={{ background: "#fef2f2", border: "1px solid #f87171", borderRadius: "12px", padding: "14px 18px", color: "#991b1b", fontSize: "14px", marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fa-solid fa-triangle-exclamation" style={{ color: "#dc2626" }}></i>
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Launch Button */}
            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                disabled={isThinking}
                className="btn-electric-blue estimator-submit-btn"
                style={{
                  opacity: isThinking ? 0.75 : 1,
                  cursor: isThinking ? "not-allowed" : "pointer"
                }}
              >
                {isThinking ? (
                  <>
                    <i className="fa-solid fa-circle-notch fa-spin" style={{ fontSize: "18px" }}></i>
                    <span>{t.generateBtnReasoning} ({elapsedSeconds}s)</span>
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-wand-magic-sparkles" style={{ fontSize: "18px" }}></i>
                    <span>
                      {t.generateBtnText} ({currentCountry.symbol} {currentCountry.currency})
                    </span>
                  </>
                )}
              </button>
              
              <div style={{ fontSize: "12.5px", color: "#64748b", marginTop: "12px" }}>
                ⚡ {t.footerNote}
              </div>
            </div>

          </form>
        </div>

        {/* AGENT LIVE THINKING CONSOLE (SHOWN WHILE REASONING) */}
        {isThinking && (
          <div className="glass-white-card" style={{ padding: "30px", marginBottom: "36px", border: "2px solid #2563eb", background: "#f0f9ff" }}>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #bae6fd", paddingBottom: "16px", marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img
                  src="/assets/images/chatbot-kaira.webp"
                  alt="Kaira AI"
                  style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "contain", border: "2px solid #2563eb" }}
                />
                <span style={{ fontWeight: "800", color: "#0f172a", fontSize: "15px" }}>
                  {t.reasoningConsoleTitle} ({currentCountry.name} • {t.langName})
                </span>
              </div>
              <div style={{ fontFamily: "monospace", fontSize: "13px", color: "#0284c7", fontWeight: "700" }}>
                ⏱️ {t.elapsedText} {elapsedSeconds}s
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {agentSteps.map((stepText, idx) => {
                const isCompleted = idx <= activeStepIndex;
                const isCurrent = idx === activeStepIndex;
                return (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "14px" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: isCompleted ? "#2563eb" : "#e2e8f0", color: isCompleted ? "#ffffff" : "#64748b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "800" }}>
                      {isCompleted ? "✓" : idx + 1}
                    </div>
                    <span style={{ color: isCurrent ? "#0284c7" : isCompleted ? "#0f172a" : "#64748b", fontWeight: isCurrent ? "800" : isCompleted ? "600" : "500" }}>
                      {stepText}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* RESULTS HUD SECTION (WORLD-CLASS BLUEPRINT DELIVERABLE) */}
        {estimateResult && (
          <div id="blueprint-deliverable" className="glass-white-card" style={{ padding: "36px", marginBottom: "40px", border: "2px solid #059669", boxShadow: "0 20px 50px -10px rgba(5, 150, 105, 0.15)" }}>
            
            {/* Top Toolbar */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", borderBottom: "1px solid #e2e8f0", paddingBottom: "22px", marginBottom: "26px" }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#ecfdf5", border: "1px solid #a7f3d0", borderRadius: "8px", padding: "4px 12px", color: "#059669", fontSize: "12px", fontWeight: "800", marginBottom: "8px" }}>
                  <i className="fa-solid fa-circle-check"></i> {t.verifiedSpecBadge} ({estimateResult.country || currentCountry.name})
                </div>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: "900", color: "#0f172a", letterSpacing: "-0.5px", margin: 0 }}>
                  {estimateResult.projectName}
                </h2>
              </div>

              {/* Action Toolbar */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <button
                  type="button"
                  onClick={handleCopyMarkdown}
                  style={{
                    background: copiedSuccess ? "#ecfdf5" : "#f1f5f9",
                    border: copiedSuccess ? "1px solid #10b981" : "1px solid #cbd5e1",
                    borderRadius: "10px",
                    padding: "10px 18px",
                    color: copiedSuccess ? "#059669" : "#334155",
                    fontSize: "13px",
                    fontWeight: "800",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "all 0.2s"
                  }}
                >
                  <i className={copiedSuccess ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
                  <span>{copiedSuccess ? t.copiedBtn : t.copyBlueprintBtn}</span>
                </button>

                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "8px 16px", textAlign: isRTL ? "left" : "right" }}>
                  <div style={{ fontSize: "10.5px", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "800" }}>{t.complexityLabel}</div>
                  <div style={{ fontSize: "15px", fontWeight: "900", color: estimateResult.complexity === "High" || estimateResult.complexity === "مرتفع" || estimateResult.complexity === "Yüksek" || estimateResult.complexity === "Hoch" ? "#dc2626" : "#059669" }}>
                    {estimateResult.complexity || "Standard"}
                  </div>
                </div>
              </div>
            </div>

            {/* Typewritten Executive Summary */}
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "20px 24px", marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <img
                  src="/assets/images/chatbot-kaira.webp"
                  alt="Kaira AI"
                  style={{ width: "22px", height: "22px", borderRadius: "50%", objectFit: "contain", border: "1.5px solid #2563eb", background: "#ffffff" }}
                  onError={(e) => { e.target.src = '/assets/images/ct-logo.png'; }}
                />
                <div style={{ fontSize: "11.5px", color: "#2563eb", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "800" }}>
                  {t.summaryTitle}
                </div>
              </div>
              <div style={{ fontSize: "15px", color: "#1e293b", lineHeight: "1.65" }}>
                {typedSummary}
                {typedSummary.length < (estimateResult.summary?.length || 0) && (
                  <span className="kaira-cursor"></span>
                )}
              </div>
            </div>

            {/* Big Metrics: Cost & Timeline */}
            <div className="metrics-grid">
              
              {/* Cost Card */}
              <div style={{ background: "linear-gradient(135deg, #ecfdf5 0%, #ffffff 100%)", border: "2px solid #059669", borderRadius: "20px", padding: "24px", boxShadow: "0 10px 25px -5px rgba(5, 150, 105, 0.1)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "800", color: "#059669", textTransform: "uppercase", letterSpacing: "0.8px" }}>
                    <i className="fa-solid fa-coins" style={{ marginRight: isRTL ? "0px" : "6px", marginLeft: isRTL ? "6px" : "0px" }}></i>
                    {marketMode === "domestic" ? t.pricingCardTitleDomestic : `${t.pricingCardTitleInternational} (${estimateResult.currency || currentCountry.currency})`}
                  </span>
                  <span style={{ background: "#d1fae5", color: "#065f46", fontSize: "11px", padding: "3px 10px", borderRadius: "999px", fontWeight: "800" }}>
                    {marketMode === "domestic" ? t.pricingBadgeDomestic : t.pricingBadgeInternational}
                  </span>
                </div>
                <div style={{ fontSize: "36px", fontWeight: "900", color: "#065f46", letterSpacing: "-1px" }} dir="ltr">
                  {estimateResult.costEstimation?.formatted || "Calculated on scope"}
                </div>
                <div style={{ fontSize: "12.5px", color: "#475569", marginTop: "6px" }}>
                  {marketMode === "domestic" ? t.pricingFootnoteDomestic : t.pricingFootnoteInternational}
                </div>
              </div>

              {/* Timeline Card */}
              <div style={{ background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)", border: "2px solid #2563eb", borderRadius: "20px", padding: "24px", boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.1)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "800", color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.8px" }}>
                    <i className="fa-regular fa-clock" style={{ marginRight: isRTL ? "0px" : "6px", marginLeft: isRTL ? "6px" : "0px" }}></i>
                    {t.timelineCardTitle}
                  </span>
                  <span style={{ background: "#dbeafe", color: "#1e40af", fontSize: "11px", padding: "3px 10px", borderRadius: "999px", fontWeight: "800" }}>{t.timelineBadge}</span>
                </div>
                <div style={{ fontSize: "36px", fontWeight: "900", color: "#1e40af", letterSpacing: "-1px" }}>
                  {estimateResult.estimatedTimeline || "2 - 3 Weeks"}
                </div>
                <div style={{ fontSize: "12.5px", color: "#475569", marginTop: "6px" }}>
                  {marketMode === "domestic" ? t.timelineFootnoteDomestic : t.timelineFootnoteInternational}
                </div>
              </div>

            </div>

            {/* Navigation Tabs */}
            <div style={{ display: "flex", gap: "10px", borderBottom: "1px solid #e2e8f0", paddingBottom: "14px", marginBottom: "26px", overflowX: "auto" }}>
              <button
                type="button"
                className={`tab-light-btn ${activeTab === "architecture" ? "active" : ""}`}
                onClick={() => setActiveTab("architecture")}
              >
                <i className="fa-solid fa-layer-group"></i>
                <span>{t.tabArchitecture}</span>
              </button>

              <button
                type="button"
                className={`tab-light-btn ${activeTab === "milestones" ? "active" : ""}`}
                onClick={() => setActiveTab("milestones")}
              >
                <i className="fa-solid fa-timeline"></i>
                <span>{t.tabMilestones}</span>
              </button>

              <button
                type="button"
                className={`tab-light-btn ${activeTab === "reasoning" ? "active" : ""}`}
                onClick={() => setActiveTab("reasoning")}
              >
                <i className="fa-solid fa-brain"></i>
                <span>{t.tabReasoning}</span>
              </button>
            </div>

            {/* TAB 1: ARCHITECTURE */}
            {activeTab === "architecture" && (
              <div>
                <div className="tech-tier-grid">
                  <div style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "16px", padding: "18px", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
                    <div style={{ fontSize: "11px", color: "#2563eb", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: "800", marginBottom: "6px" }}>{t.techTierFrontend}</div>
                    <div style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a" }}>{estimateResult.recommendedTech?.frontend || "Next.js 15, Tailwind CSS"}</div>
                  </div>

                  <div style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "16px", padding: "18px", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
                    <div style={{ fontSize: "11px", color: "#059669", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: "800", marginBottom: "6px" }}>{t.techTierBackend}</div>
                    <div style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a" }}>{estimateResult.recommendedTech?.backend || "Node.js Serverless Edge Routes"}</div>
                  </div>

                  <div style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "16px", padding: "18px", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
                    <div style={{ fontSize: "11px", color: "#d97706", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: "800", marginBottom: "6px" }}>{t.techTierDatabase}</div>
                    <div style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a" }}>{estimateResult.recommendedTech?.database || "PostgreSQL (Supabase) / Firebase"}</div>
                  </div>

                  <div style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "16px", padding: "18px", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
                    <div style={{ fontSize: "11px", color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: "800", marginBottom: "6px" }}>{t.techTierIntegrations}</div>
                    <div style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a" }}>{estimateResult.recommendedTech?.integrations || (marketMode === "domestic" ? "WhatsApp Cloud API, Razorpay" : "Stripe, Cloudflare Edge")}</div>
                  </div>
                </div>

                <div className="features-grid">
                  <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "18px", padding: "22px" }}>
                    <h4 style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <i className="fa-solid fa-circle-check" style={{ color: "#059669" }}></i> {t.includedFeaturesTitle}
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {estimateResult.keyFeatures?.map((f, idx) => (
                        <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13.5px", color: "#334155", marginBottom: "12px", lineHeight: 1.5 }}>
                          <i className="fa-solid fa-check" style={{ color: "#059669", fontSize: "12px", marginTop: "5px" }}></i>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "18px", padding: "22px" }}>
                    <h4 style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <i className="fa-solid fa-lightbulb" style={{ color: "#d97706" }}></i> {t.strategicInsightsTitle}
                    </h4>
                    {estimateResult.proTips?.map((tip, idx) => (
                      <p key={idx} style={{ fontSize: "13.5px", color: "#475569", lineHeight: 1.6, marginBottom: "12px" }}>
                        "{tip}"
                      </p>
                    ))}
                    <div style={{ marginTop: "16px", padding: "14px", borderRadius: "12px", background: "#ecfdf5", border: "1px dashed #059669", fontSize: "13px", color: "#065f46" }}>
                      💡 <strong>ChittorTech Standard:</strong> {marketMode === "domestic" ? t.standardsFootnoteDomestic : t.standardsFootnoteInternational}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: MILESTONES */}
            {activeTab === "milestones" && (
              <div style={{ marginBottom: "30px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {estimateResult.milestones?.map((m, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "16px", background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: "16px", padding: "18px 22px" }}>
                      <div style={{ background: "linear-gradient(135deg, #2563eb 0%, #059669 100%)", color: "#ffffff", width: "36px", height: "36px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "900", flexShrink: 0, marginTop: "2px" }}>
                        0{idx + 1}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                          <span style={{ fontWeight: "800", color: "#0f172a", fontSize: "15px" }}>{m.phase}</span>
                          <span style={{ fontSize: "12px", color: "#1d4ed8", background: "#dbeafe", border: "1px solid #bfdbfe", padding: "3px 12px", borderRadius: "6px", fontWeight: "700" }}>
                            {m.duration}
                          </span>
                        </div>
                        <div style={{ fontSize: "13.5px", color: "#475569", marginTop: "6px", lineHeight: 1.55 }}>
                          {m.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: REASONING */}
            {activeTab === "reasoning" && (
              <div style={{ background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: "18px", padding: "24px", marginBottom: "30px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", borderBottom: "1px solid #e2e8f0", paddingBottom: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#7c3aed", fontSize: "14px", fontWeight: "800" }}>
                    <i className="fa-solid fa-brain"></i>
                    <span>{t.reasoningChainTitle}</span>
                  </div>
                  <span style={{ fontFamily: "monospace", fontSize: "12px", color: "#64748b" }}>
                    {estimateResult.country || currentCountry.name} ({estimateResult.currency || currentCountry.currency})
                  </span>
                </div>

                <div style={{ fontFamily: "monospace", fontSize: "13.5px", color: "#334155", lineHeight: "1.8" }}>
                  {estimateResult.thinkingProcess && estimateResult.thinkingProcess.length > 0 ? (
                    estimateResult.thinkingProcess.map((thought, idx) => (
                      <div key={idx} style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
                        <span style={{ color: "#2563eb", fontWeight: "800" }}>[Step {idx + 1}]</span>
                        <span>{thought}</span>
                      </div>
                    ))
                  ) : (
                    <>
                      <div>[Step 1] Analyzed domain requirements for: "{description.substring(0, 60)}..."</div>
                      <div>[Step 2] Selected Next.js 15 for optimal Google SEO indexing and sub-500ms Core Web Vitals.</div>
                      <div>[Step 3] Designed schema relations for instant API notifications and order lifecycle.</div>
                      <div>[Step 4] Benchmarked realistic developer sprint hours & calibrated local currency budget range.</div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* PROPOSAL & EMAIL DISPATCH FORM */}
            <div className="estimator-lead-card">
              <h3 style={{ fontSize: "24px", fontWeight: "900", color: "#0f172a", marginBottom: "8px" }}>
                {marketMode === "domestic" ? t.leadFormTitleDomestic : t.leadFormTitleInternational}
              </h3>
              <p style={{ fontSize: "14.5px", color: "#475569", maxWidth: "680px", margin: "0 auto 24px", lineHeight: 1.6 }}>
                {marketMode === "domestic" ? t.leadFormSubtitleDomestic : t.leadFormSubtitleInternational}
              </p>

              {leadSuccess ? (
                <div style={{ background: "#ecfdf5", border: "1.5px solid #059669", borderRadius: "14px", padding: "20px", color: "#065f46", fontWeight: "800", fontSize: "16px", display: "inline-block" }}>
                  <i className="fa-solid fa-circle-check" style={{ marginRight: "8px", color: "#059669" }}></i>
                  {t.leadSuccessMsg}
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} style={{ maxWidth: "600px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="grid-responsive-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <input
                      type="text"
                      placeholder={t.leadNamePlaceholder}
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      style={{ padding: "14px 16px", borderRadius: "12px", border: "1.5px solid #cbd5e1", background: "#ffffff", color: "#0f172a", fontSize: "14px", outline: "none", textAlign: isRTL ? "right" : "left" }}
                    />
                    <input
                      type="tel"
                      placeholder={marketMode === "domestic" ? t.leadPhonePlaceholderDomestic : t.leadPhonePlaceholderInternational}
                      required
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      style={{ padding: "14px 16px", borderRadius: "12px", border: "1.5px solid #cbd5e1", background: "#ffffff", color: "#0f172a", fontSize: "14px", outline: "none", textAlign: isRTL ? "right" : "left" }}
                    />
                  </div>
                  
                  <input
                    type="email"
                    placeholder={t.leadEmailPlaceholder}
                    required
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    style={{ padding: "14px 16px", borderRadius: "12px", border: "1.5px solid #cbd5e1", background: "#ffffff", color: "#0f172a", fontSize: "14px", outline: "none", textAlign: isRTL ? "right" : "left" }}
                  />

                  <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "10px", flexWrap: "wrap" }}>
                    <button
                      type="submit"
                      disabled={leadSubmitting}
                      style={{
                        background: "linear-gradient(135deg, #059669 0%, #047857 100%)",
                        color: "#ffffff",
                        fontWeight: "800",
                        fontSize: "14.5px",
                        padding: "16px 34px",
                        borderRadius: "12px",
                        border: "none",
                        cursor: leadSubmitting ? "not-allowed" : "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        boxShadow: "0 10px 25px rgba(5, 150, 105, 0.35)",
                      }}
                    >
                      {leadSubmitting ? (
                        <><i className="fa-solid fa-spinner fa-spin"></i> {t.leadSubmittingText}</>
                      ) : (
                        <><i className="fa-brands fa-whatsapp" style={{ fontSize: "18px" }}></i> {marketMode === "domestic" ? t.leadSubmitBtnDomestic : t.leadSubmitBtnInternational}</>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/917597451057?text=${encodeURIComponent(`Hi Kush! I just generated an estimate on ChittorTech for "${estimateResult.projectName}" [${currentCountry.name} - ${estimateResult.costEstimation?.formatted}]. Let's discuss building this!`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: "#ffffff",
                        border: "1.5px solid #cbd5e1",
                        color: "#0f172a",
                        fontWeight: "800",
                        fontSize: "14.5px",
                        padding: "16px 24px",
                        borderRadius: "12px",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                      }}
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" style={{ color: "#2563eb" }}></i> {t.founderChatBtn}
                    </a>
                  </div>
                </form>
              )}

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
