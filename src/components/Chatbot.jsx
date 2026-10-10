"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { usePathname } from "next/navigation";
import { submitLead } from "@/lib/leadService";

function getPageAwareDetails(pathname, userName = "") {
  const nameGreeting = userName ? ` ${userName}` : "";
  const nameHindi = userName ? ` ${userName} जी` : "";

  if (pathname === "/dharamshala-billing-system") {
    return {
      greeting: `सादर प्रणाम${nameHindi}! 🙏 क्या आप अपने तीर्थ ट्रस्ट या धर्मशाला के लिए कमरा बुकिंग, भोजनशाला कूपन व दान रसीद सॉफ्टवेयर का लाइव डेमो देखना चाहते हैं?`,
      suggestions: [
        "कमरा बुकिंग लाइव डेमो",
        "दान एवं चंदा रसीद सिस्टम",
        "भोजनशाला थाली कूपन",
        "ट्रस्ट सॉफ्टवेयर प्राइजिंग"
      ],
      contextPrompt: "The visitor is on the Dharamshala Billing & Pilgrimage Trust Management page (/dharamshala-billing-system). Answer queries related to room reservations, 2-way check-in/out slips, digital daan/donation receipts, and bhojanshala coupon software in respectful Hindi or English. Avoid repetitive technical tax jargon like '80G' unless specifically asked."
    };
  }

  if (pathname === "/b2b-lead-generation-services") {
    return {
      greeting: `Welcome${nameGreeting}! 🚀 Want to see how our AI extracts verified B2B leads from Google Maps for your industry?`,
      suggestions: [
        "Google Maps Scraping Demo",
        "Marble Industry Leads",
        "Textile Wholesale Buyers",
        "Lead Gen Pricing & ROI"
      ],
      contextPrompt: "The visitor is on the B2B Lead Generation Services page (/b2b-lead-generation-services). Explain how ChittorTech extracts authentic Google Maps business data, generates AI hyper-personalized WhatsApp & cold email pitches, and powers automated client acquisition."
    };
  }

  if (pathname === "/project-estimator") {
    return {
      greeting: `Need help estimating the cost of your web app or ERP? I can guide you!${nameGreeting ? " (" + nameGreeting.trim() + ")" : ""}`,
      suggestions: [
        "Estimate Web App Cost",
        "Mobile App Timeline",
        "Custom ERP Estimate",
        "Talk to Lav Sharma"
      ],
      contextPrompt: "The visitor is on the Interactive Project Estimator page (/project-estimator). Assist them in calculating development costs, choosing the right tech stack, and understanding delivery timelines."
    };
  }

  if (pathname?.includes("hotel") || pathname?.includes("resort")) {
    return {
      greeting: `Hello${nameGreeting}! 🏨 Looking for a 0% commission direct hotel booking engine or resort management system?`,
      suggestions: [
        "Direct Booking Engine Demo",
        "Save 20% OTA Commission",
        "Hotel PMS & KOT Billing",
        "Schedule Demo"
      ],
      contextPrompt: "The visitor is exploring Hospitality & Hotel Management solutions. Focus on 0% OTA commission direct booking engines, WhatsApp check-in slips, and hotel PMS software."
    };
  }

  if (pathname?.includes("crm") || pathname?.includes("lead-management")) {
    return {
      greeting: `Hello${nameGreeting}! 📊 Looking to build a custom CRM with automated WhatsApp follow-ups and lead tracking for your sales team?`,
      suggestions: [
        "Custom CRM Features",
        "WhatsApp Automation",
        "Lead Pipeline Demo",
        "Get Custom Quote"
      ],
      contextPrompt: "The visitor is exploring Custom CRM Solutions & Lead Management software. Highlight custom pipeline stages, automated client follow-ups, and role-based access."
    };
  }

  if (pathname?.includes("enterprise-ai") || pathname?.includes("ai-chatbot")) {
    return {
      greeting: `Hello${nameGreeting}! 🤖 Welcome to ChittorTech Enterprise AI. Looking to deploy private RAG knowledge retrieval, voice AI, or autonomous workflow agents?`,
      suggestions: [
        "Enterprise RAG Vector Search",
        "WhatsApp Conversational AI",
        "Custom LLM Fine-Tuning",
        "AI Architecture Call"
      ],
      contextPrompt: "The visitor is exploring Enterprise AI Agents & AI Chatbots. Highlight private document RAG, sub-second Groq LPUs, WhatsApp voice AI, and custom AI engineering."
    };
  }

  if (pathname?.includes("android") || pathname?.includes("google-play")) {
    return {
      greeting: `Hello${nameGreeting}! 📱 Need high-performance mobile app development (Android & iOS) or Google Play 12-tester verification & publishing?`,
      suggestions: [
        "Android App Quote",
        "Google Play 12-Tester Verification",
        "Publishing Package Rates",
        "Publish My App"
      ],
      contextPrompt: "The visitor is exploring Mobile App Development & Google Play Publishing Services (/google-play-publishing). We have published 50+ apps globally in 6 months with 100% first-attempt approval. If asked about publishing packages/pricing, clearly state the 3 official tiers: 1. Publish on Your Account (₹10,299 / $129 USD), 2. Publish on ChittorTech Account (₹25,999 / $299 USD), 3. Full Account Setup & Launch (₹29,499 / $339 USD). Emphasize the official Google 12-tester rule (14 continuous days), free 15-minute APK/AAB audit, client NDA confidentiality, and reference apps (künh, Reward Club, Visit Chittorgarh, Mewari Achaar)."
    };
  }

  if (pathname?.includes("e-commerce")) {
    return {
      greeting: `Hello${nameGreeting}! 🛒 Planning to launch a custom e-commerce store with high speed, payment gateways, and WhatsApp order alerts?`,
      suggestions: [
        "E-Commerce Storefront Quote",
        "Payment Gateway Setup",
        "Custom Order Management",
        "View E-Commerce Portfolio"
      ],
      contextPrompt: "The visitor is exploring E-Commerce Website Development."
    };
  }

  // Default Fallback
  return {
    greeting: `Hello${nameGreeting}! I'm ChittorTech GPT, your official AI Assistant. How can I assist your business growth or engineering today?`,
    suggestions: [
      "What is ChittorTech?",
      "View Core Services",
      "B2B Lead Generation Engine",
      "Contact Support Team"
    ],
    contextPrompt: "The visitor is exploring ChittorTech's website. Answer questions politely and guide them to relevant software solutions, lead generation tools, or contact info."
  };
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const messagesEndRef = useRef(null);
  const typingRef = useRef(null);
  const pathname = usePathname();

  // Pre-chat Registration states
  const [isRegistered, setIsRegistered] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validationError, setValidationError] = useState("");

  // Embedded Meeting Scheduler state
  const [showMeetingScheduler, setShowMeetingScheduler] = useState(false);
  const [meetingService, setMeetingService] = useState("B2B Lead Generation Engine");
  const [meetingDate, setMeetingDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [meetingSlot, setMeetingSlot] = useState("11:00 AM - 12:00 PM");
  const [meetingNote, setMeetingNote] = useState("");
  const [isSubmittingMeeting, setIsSubmittingMeeting] = useState(false);

  // Lead Intent & Proactive Engagement states
  const [showIntentCTA, setShowIntentCTA] = useState(false);
  const [leadScore, setLeadScore] = useState(0);

  // Message Reactions state: { [msgIndex]: emoji }
  const [reactions, setReactions] = useState({});

  const handleReaction = (idx, emoji) => {
    setReactions(prev => {
      if (prev[idx] === emoji) {
        const next = { ...prev };
        delete next[idx];
        return next;
      }
      return { ...prev, [idx]: emoji };
    });
  };

  // Quick upcoming date chips for easy 1-click scheduling
  const upcomingDateOptions = useMemo(() => {
    const list = [];
    const today = new Date();
    for (let i = 0; i < 4; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      const iso = d.toISOString().split("T")[0];
      const dayName = i === 0 ? "Today" : i === 1 ? "Tomorrow" : d.toLocaleDateString("en-IN", { weekday: "short" });
      const dateStr = d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
      list.push({ iso, dayName, dateStr });
    }
    return list;
  }, []);

  const TIME_SLOTS = useMemo(() => [
    { value: "11:00 AM - 12:00 PM", label: "11:00 AM", period: "Morning", icon: "fa-sun" },
    { value: "02:00 PM - 03:00 PM", label: "02:00 PM", period: "Afternoon", icon: "fa-cloud-sun" },
    { value: "04:00 PM - 05:00 PM", label: "04:00 PM", period: "Evening", icon: "fa-coffee" },
    { value: "06:30 PM - 07:30 PM", label: "06:30 PM", period: "Late Eve", icon: "fa-moon" },
  ], []);

  const activeContext = getPageAwareDetails(pathname, userName);
  const suggestions = activeContext.suggestions;


  // ── Intent CTA: scan user messages for buying signals ──
  useEffect(() => {
    const INTENT_KEYWORDS = [
      "price", "cost", "quote", "budget", "how much", "rate", "charges",
      "build", "develop", "create", "start", "begin", "hire", "need",
      "estimate", "proposal", "package", "plan", "timeline", "when can",
      "demo", "trial", "interested", "let's go", "proceed"
    ];
    const lastUserMsg = messages.filter(m => m.role === "user").slice(-1)[0];
    if (!lastUserMsg) return;
    const txt = lastUserMsg.content.toLowerCase();
    const hasIntent = INTENT_KEYWORDS.some(kw => txt.includes(kw));
    if (hasIntent) {
      setLeadScore(prev => prev + 5);
      setShowIntentCTA(true);
    }
  }, [messages]);

  // Initialize chatbot messages and user registration from localStorage
  useEffect(() => {
    const savedUserInfo = localStorage.getItem("chittortech_user_info");
    let isUserReg = false;
    let registeredName = "";
    if (savedUserInfo) {
      try {
        const userInfo = JSON.parse(savedUserInfo);
        if (userInfo.name) {
          setUserName(userInfo.name);
          if (userInfo.email) setUserEmail(userInfo.email);
          registeredName = userInfo.name;
          if (userInfo.phone) {
            const parts = userInfo.phone.split(" ");
            if (parts.length > 1) {
              setCountryCode(parts[0]);
              setPhoneNumber(parts.slice(1).join(" "));
            } else {
              setPhoneNumber(userInfo.phone);
            }
          }
          setIsRegistered(true);
          isUserReg = true;
        }
      } catch (e) {
        console.error("Failed to parse user info:", e);
      }
    }

    const savedMessages = localStorage.getItem("chittortech_chat_history");
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
          return;
        }
      } catch (e) {
        console.error("Failed to parse chat history:", e);
      }
    }

    if (isUserReg) {
      const pageInfo = getPageAwareDetails(pathname, registeredName);
      setMessages([
        {
          role: "ai",
          content: pageInfo.greeting,
          isSystem: true,
          timestamp: new Date().toISOString(),
        },
      ]);
    } else {
      setMessages([]);
    }
  }, [pathname]);

  // Save messages to localstorage whenever they change (always preserve fullText so nothing is lost if closed mid-typing)
  useEffect(() => {
    if (messages.length > 0) {
      const cleanToSave = messages.map((m) => {
        if (m.fullText) {
          return { role: m.role, content: m.fullText, timestamp: m.timestamp };
        }
        return { role: m.role, content: m.content, timestamp: m.timestamp };
      });
      localStorage.setItem("chittortech_chat_history", JSON.stringify(cleanToSave));
    }
  }, [messages]);

  // Scroll chat cleanly to bottom without shaking or jittering the window
  useEffect(() => {
    const el = document.getElementById("chatbot-messages");
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages, isLoading, showMeetingScheduler]);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const resetChat = () => {
    localStorage.removeItem("chittortech_chat_history");
    setIsRegistered(false);
    setMessages([]);
    setShowMeetingScheduler(false);
  };

  // 1-Click WhatsApp Sync with Pre-filled Chat Summary
  const handleWhatsAppSync = () => {
    const userMsgs = messages.filter((m) => m.role === "user" && !m.content.startsWith("Name :"));
    const lastUserQuery = userMsgs.length > 0 ? userMsgs[userMsgs.length - 1].content : "Exploring ChittorTech services";
    const name = userName ? userName : "Visitor";
    const phone = phoneNumber ? `${countryCode} ${phoneNumber}` : "";
    
    const summaryText = `*Namaste Lav Sir!*\n\nI am chatting with *ChittorTech GPT* on chittortech.in (${pathname}).\n\n• *My Inquiry:* "${lastUserQuery.slice(0, 160)}"\n• *Name:* ${name}\n• *Phone:* ${phone}\n\nCan we discuss this further?`;
    
    window.open(`https://api.whatsapp.com/send?phone=917597451057&text=${encodeURIComponent(summaryText)}`, "_blank");
  };

  // Embedded Meeting Form Submit Handler
  const handleScheduleSubmit = async (e) => {
    e.preventDefault();
    if (!meetingDate) {
      alert("Please select a date for the meeting.");
      return;
    }
    setIsSubmittingMeeting(true);

    const fullPhone = `${countryCode} ${phoneNumber}`.trim();
    const meetingPayload = {
      name: userName || "Visitor",
      email: "N/A",
      contact: fullPhone,
      location: "Chatbot Meeting Scheduler",
      industry: meetingService,
      service: meetingService,
      date: meetingDate,
      slot: meetingSlot,
      notes: meetingNote || "None",
      message: `Meeting Request: Service: ${meetingService} | Date: ${meetingDate} (${meetingSlot}) | Phone: ${fullPhone} | Notes: ${meetingNote || "None"}`,
      company: "N/A",
      firm: "N/A",
      source: "Chatbot Meeting Scheduler",
    };

    try {
      await submitLead(meetingPayload);
    } catch (err) {
      console.error("Meeting lead submission error:", err);
    }

    setIsSubmittingMeeting(false);
    setShowMeetingScheduler(false);

    const confMsg = {
      role: "ai",
      content: `🎉 **Meeting Request Received!**\n\n- **Service:** ${meetingService}\n- **Date:** ${meetingDate}\n- **Time Slot:** ${meetingSlot}\n\nThank you **${userName || "Valued Partner"}**! We have received your strategy call request. Our team will revert back to you shortly on your registered number (**${fullPhone}**).\n\nYou can also chat directly on WhatsApp with founder **Lav Sharma**: [ACTION:WHATSAPP]`,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, confMsg]);
  };

  const formatTime = (isoString) => {
    const date = isoString ? new Date(isoString) : new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
  };

  const parseMarkdown = (text) => {
    if (!text) return { __html: "" };

    let content = text;

    // 1. Code blocks: ```code```
    content = content.replace(/```([\s\S]*?)```/g, (match, code) => {
      const escaped = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      return `<pre><code>${escaped.trim()}</code></pre>`;
    });

    // 2. Inline code: `code`
    content = content.replace(/`([^`]+)`/g, "<code>$1</code>");

    // 3. Bold: **text**
    content = content.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

    // 4. Markdown tables: ensure in-progress table rows stay inside <table> during streaming
    if (content.includes("|")) {
      const linesArr = content.split("\n");
      const lastLine = linesArr[linesArr.length - 1]?.trim();
      if (lastLine && lastLine.startsWith("|")) {
        if (!lastLine.endsWith("|")) {
          content = content + " |\n";
        } else if (!content.endsWith("\n")) {
          content = content + "\n";
        }
      }
    }

    content = content.replace(/(?:^|\n)(\|[^\n]+\|\r?\n)(?:\|:?[-]+:?)+\|(\r?\n(?:\|[^\n]+\|\r?\n?)+)/g, (match, header, rows) => {
      const parseCells = (rowStr, tag) => {
        const parts = rowStr.split('|').map(s => s.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
        return parts.map(p => `<${tag}>${p}</${tag}>`).join('');
      };
      const ths = parseCells(header, 'th');
      const trs = rows.trim().split('\n').filter(r => r.includes('|')).map(r => `<tr>${parseCells(r, 'td')}</tr>`).join('');
      return `<div class="chat-table-wrap"><table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
    });

    // 5. Markdown links: [label](url)
    content = content.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="chat-markdown-link">$1 <i class="fas fa-external-link-alt" style="font-size: 0.72em; margin-left: 2px;"></i></a>'
    );

    // 5. Action button triggers (robust regex with space tolerance, case-insensitivity & catch-all fallback)
    content = content.replace(
      /\[\s*ACTION\s*:\s*CONTACT\s*\]/gi,
      '<div class="chat-action-wrapper"><a href="/contact-us" class="message-action-btn"><i class="fas fa-envelope"></i> Contact Us</a></div>'
    );
    content = content.replace(
      /\[\s*ACTION\s*:\s*DEMO\s*\]/gi,
      '<div class="chat-action-wrapper"><a href="#" data-bs-toggle="modal" data-bs-target="#trialModal" class="message-action-btn"><i class="fas fa-laptop"></i> Request a Demo</a></div>'
    );
    content = content.replace(
      /\[\s*ACTION\s*:\s*SCHEDULE\s*\]/gi,
      '<div class="chat-action-wrapper"><a href="/contact-us" class="message-action-btn"><i class="fas fa-calendar-check"></i> Book Strategy Meeting</a></div>'
    );
    content = content.replace(
      /\[\s*ACTION\s*:\s*WHATSAPP\s*\]/gi,
      '<div class="chat-action-wrapper"><a href="https://wa.me/917597451057?text=Namaste%20Lav%20Sir!%20I%20want%20to%20discuss%20a%20project%20with%20ChittorTech." target="_blank" rel="noopener noreferrer" class="message-action-btn wa-btn"><i class="fab fa-whatsapp"></i> Chat with Lav Sharma</a></div>'
    );
    content = content.replace(
      /\[\s*ACTION\s*:\s*ESTIMATOR\s*\]/gi,
      '<div class="chat-action-wrapper"><a href="https://chittortech.in/project-estimator" target="_blank" rel="noopener noreferrer" class="message-action-btn estimator-btn"><i class="fas fa-calculator"></i> Calculate Instant Project Quote</a></div>'
    );
    // Catch-all fallback for any other variations of [ACTION: ...] so raw tags never leak as text
    content = content.replace(
      /\[\s*ACTION\s*:\s*([^\]]+)\]/gi,
      (match, actionTarget) => {
        const cleanTarget = actionTarget.trim();
        if (cleanTarget.startsWith("http://") || cleanTarget.startsWith("https://") || cleanTarget.startsWith("/")) {
          return `<div class="chat-action-wrapper"><a href="${cleanTarget}" target="_blank" rel="noopener noreferrer" class="message-action-btn"><i class="fas fa-external-link-alt"></i> ${cleanTarget}</a></div>`;
        }
        return `<div class="chat-action-wrapper"><a href="/contact-us" class="message-action-btn"><i class="fas fa-envelope"></i> Contact Us</a></div>`;
      }
    );

    // 6. Auto-link Email Addresses with email badge (only match raw emails, avoid href attributes)
    content = content.replace(
      /\b([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\b/g,
      (match, email, offset, fullStr) => {
        const before = fullStr.slice(Math.max(0, offset - 15), offset);
        if (before.includes('href="') || before.includes('mailto:')) return match;
        return `<a href="mailto:${email}" class="chat-email-badge"><i class="fas fa-envelope"></i><span>${email}</span></a>`;
      }
    );

    // 7. Line-by-line parser for clean paragraphs & bullet points without irregular indents
    const lines = content.split("\n");
    const output = [];
    let inList = false;

    for (let i = 0; i < lines.length; i++) {
      const rawLine = lines[i];
      const trimmed = rawLine.trim();

      // Check if line is an action button, table, or pre tag already wrapped
      if (
        trimmed.includes('class="chat-action-wrapper"') ||
        trimmed.includes('class="chat-table-wrap"') ||
        trimmed.startsWith("<table") ||
        trimmed.startsWith("<div class=\"chat-table-wrap\"") ||
        trimmed.startsWith("<pre")
      ) {
        if (inList) {
          output.push("</ul>");
          inList = false;
        }
        output.push(trimmed);
        continue;
      }

      // Check if line is a bullet item (- or * or •)
      const bulletMatch = trimmed.match(/^[-*•]\s+(.*)$/);

      if (bulletMatch) {
        if (!inList) {
          output.push('<ul class="chat-bullet-list">');
          inList = true;
        }
        output.push(`<li>${bulletMatch[1]}</li>`);
      } else {
        if (inList) {
          output.push("</ul>");
          inList = false;
        }
        if (trimmed === "") {
          output.push('<div class="chat-gap"></div>');
        } else {
          output.push(`<p class="chat-line">${trimmed}</p>`);
        }
      }
    }

    if (inList) {
      output.push("</ul>");
    }

    return { __html: output.join("") };
  };

  const typeMessage = (text) => {
    setIsLoading(false);

    const newMsg = {
      role: "ai",
      content: "",
      fullText: text, // Preserve complete response so it is never truncated
      timestamp: new Date().toISOString(),
      isTyping: true,
    };

    setMessages((prev) => [...prev, newMsg]);

    let currentIndex = 0;
    let intervalId = null;

    const finish = () => {
      if (intervalId) clearInterval(intervalId);
      intervalId = null;
      setMessages((prev) => {
        const updated = [...prev];
        if (updated.length > 0 && updated[updated.length - 1].role === "ai") {
          const last = { ...updated[updated.length - 1] };
          last.content = text;
          delete last.isTyping;
          updated[updated.length - 1] = last;
        }
        return updated;
      });
      typingRef.current = null;
      const el = document.getElementById("chatbot-messages");
      if (el) el.scrollTop = el.scrollHeight;
    };

    typingRef.current = { finishImmediately: finish };

    // Calm, readable human-like typing cadence (50ms interval):
    // 1 char every 50ms (~20 chars/sec) for short texts, 2 chars every 50ms for longer texts
    const step = text.length > 600 ? 2 : 1;

    intervalId = setInterval(() => {
      currentIndex += step;
      if (currentIndex < text.length) {
        const partial = text.slice(0, currentIndex);
        setMessages((prev) => {
          const updated = [...prev];
          if (updated.length > 0 && updated[updated.length - 1].role === "ai") {
            updated[updated.length - 1].content = partial;
          }
          return updated;
        });
        const el = document.getElementById("chatbot-messages");
        if (el) el.scrollTop = el.scrollHeight;
      } else {
        finish();
      }
    }, 50);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const name = userName.trim();
    const email = userEmail.trim();
    const phone = phoneNumber.trim();

    if (!name || name.length < 2) {
      setValidationError("Please enter a valid name (at least 2 characters).");
      return;
    }

    setValidationError("");
    const fullPhone = phone ? `${countryCode} ${phone}` : "N/A";
    const finalEmail = email || "chatbot-lead@chittortech.in";

    localStorage.setItem(
      "chittortech_user_info",
      JSON.stringify({ name, email: finalEmail, phone: fullPhone })
    );

    // Send lead to Firestore and email alert in background
    const leadPayload = {
      name: name,
      email: finalEmail,
      contact: fullPhone,
      location: "Chatbot Lead Capture",
      industry: "AI Chatbot User",
      message: `User initiated a chat session on ${pathname}.`,
      company: "N/A",
      firm: "N/A",
      source: "ChittorTech AI Chatbot",
    };

    submitLead(leadPayload).catch((err) => {
      console.error("Chatbot lead submission error:", err);
    });

    setIsRegistered(true);

    const regMsg = {
      role: "user",
      content: `Name : ${name}${email ? `\nEmail : ${email}` : ""}${phone ? `\nPhone : ${fullPhone}` : ""}`,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, regMsg]);
    const pageInfo = getPageAwareDetails(pathname, name);
    const welcomeText = pageInfo.greeting;
    typeMessage(welcomeText);
  };

  const handleSend = async (customText = "") => {
    const text = (customText || inputVal).trim();
    if (!text || isLoading) return;

    // Add user message
    const userMsg = {
      role: "user",
      content: text,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsLoading(true);

    try {
      // Build previous messages payload for AI context
      // - Omit system/registration messages
      // - Only keep last 8 exchanges to control token count
      // - Truncate long AI replies (they may contain injected HTML service cards)
      const sanitizeContent = (content, role) => {
        if (role !== "ai") return content;
        // Strip any injected HTML (service cards, action buttons) before sending to API
        return content
          .replace(/<[^>]*>/g, " ")
          .replace(/\s{2,}/g, " ")
          .trim()
          .slice(0, 1200); // hard cap to keep tokens under control
      };

      const chatHistory = [...messages, userMsg]
        .filter((m) => !m.isSystem && !(m.content.startsWith("Name :") && m.content.includes("Phone :")))
        .slice(-16) // last 16 entries = ~8 back-and-forth exchanges
        .map((m) => ({
          role: m.role === "ai" ? "assistant" : "user",
          content: sanitizeContent(m.content, m.role),
        }));

      // Secure Vercel Serverless AI Execution (/api/chat)
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: chatHistory,
          pathname,
          userName,
        }),
      });

      if (!response.ok) throw new Error(`API Error ${response.status}`);

      const data = await response.json();
      const reply = data.reply || "Sorry, I didn't quite catch that. Could you please rephrase?";

      typeMessage(reply);
    } catch (e) {
      console.error("ChittorTech GPT API Error:", e);
      // Show a helpful response instead of raw error
      const errMsg = e?.message || "";
      if (errMsg.includes("413")) {
        typeMessage("Your query contains too much context. Please start a fresh conversation by clicking the 🗑️ button above.");
      } else if (errMsg.includes("429")) {
        typeMessage("We're experiencing high traffic right now. Please try again in a few seconds, or reach us directly on WhatsApp: **+91 7597451057** [ACTION:WHATSAPP]");
      } else {
        typeMessage("I'm having trouble connecting right now. Please try again, or contact us directly:\n\n📞 **+91 7597451057** (WhatsApp / Call)\n📧 **business@chittortech.in** [ACTION:WHATSAPP]");
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    const copyIcon = document.getElementById(`copy-icon-${idx}`);
    if (copyIcon) {
      copyIcon.className = "fas fa-check text-success";
      setTimeout(() => {
        copyIcon.className = "far fa-copy";
      }, 2000);
    }
  };

  if (pathname && pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      {/* FAB Floating Button */}
      <div className="chatbot-fab-wrap">
        {!isOpen && (isLoading || messages.some((m) => m.isTyping)) && (
          <div className="chatbot-fab-typing-badge" onClick={toggleChat} title="Click to view AI response">
            <span className="fab-typing-dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span>ChittorTech GPT is typing...</span>
          </div>
        )}
        <button 
          id="chatbot-fab" 
          className={`chatbot-fab ${isOpen ? "active" : ""}`} 
          onClick={toggleChat}
          aria-label="Open AI Assistant" 
          title="Talk to AI"
        >
          {isOpen ? (
            <i className="fa-solid fa-times"></i>
          ) : (
            <i className="fa-solid fa-comments"></i>
          )}
          <div className="pulse-ring"></div>
        </button>
      </div>

      {/* Chat Window */}
      <div id="chatbot-window" className={`chatbot-window ${isOpen ? "open" : ""}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <img src="/assets/images/chatbot-kaira.webp" alt="ChittorTech GPT" />
            </div>
            <div className="chatbot-header-text">
              <h4>ChittorTech GPT</h4>
              <span>Online • AI Assistant</span>
            </div>
          </div>
          <div className="chatbot-header-actions">
            {isRegistered && (
              <button onClick={resetChat} className="chatbot-reset-btn" title="Clear Chat">
                <i className="fas fa-trash-alt"></i>
              </button>
            )}
            <button onClick={toggleChat} className="chatbot-close-btn" title="Close Chat">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

          {!isRegistered ? (
            <div className="chatbot-reg-container">
              <div className="chatbot-3d-hero">
                <div className="ai-3d-orb-wrap">
                  <div className="ai-3d-orb-glow"></div>
                  <div className="ai-3d-avatar-container">
                    <img src="/assets/images/chatbot-kaira.webp" alt="ChittorTech GPT" className="ai-3d-avatar-img" />
                    <span className="ai-live-pulse-badge">
                      <span className="live-dot"></span> Neural AI
                    </span>
                  </div>
                </div>
                <div className="chatbot-reg-welcome-text">
                  <h3>ChittorTech AI Studio</h3>
                  <p>Chat with <strong>ChittorTech GPT</strong> for instant solution architecture, lead generator demos & custom pricing.</p>
                </div>
                <div className="ai-capabilities-pill-strip">
                  <span><i className="fas fa-bolt"></i> Instant Answers</span>
                  <span><i className="fas fa-shield-alt"></i> Verified Tech</span>
                  <span><i className="fas fa-calendar-check"></i> Book a Demo</span>
                </div>
              </div>

              <form onSubmit={handleRegister} className="chatbot-reg-form">
                <div className="chatbot-reg-group">
                  <label className="chatbot-reg-label">Your Full Name <span style={{ color: "#ef4444" }}>*</span></label>
                  <div className="chatbot-input-with-icon">
                    <i className="fas fa-user-circle input-inner-icon"></i>
                    <input
                      type="text"
                      className="chatbot-reg-input with-icon"
                      placeholder="e.g. Rajesh Sharma"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="chatbot-reg-group">
                  <label className="chatbot-reg-label">Email Address <span style={{ fontWeight: "normal", color: "#64748b", fontSize: "11px" }}>(Optional)</span></label>
                  <div className="chatbot-input-with-icon">
                    <i className="fas fa-envelope input-inner-icon"></i>
                    <input
                      type="email"
                      className="chatbot-reg-input with-icon"
                      placeholder="e.g. name@company.com"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  </div>
                  <span style={{ fontSize: "11px", color: "#64748b", marginTop: "4px", display: "block", lineHeight: "1.3" }}>
                    💡 Providing a valid email ID helps us send direct proposals & instant project estimates.
                  </span>
                </div>

                <div className="chatbot-reg-group">
                  <label className="chatbot-reg-label">WhatsApp / Phone Number <span style={{ fontWeight: "normal", color: "#64748b", fontSize: "11px" }}>(Optional)</span></label>
                  <div className="chatbot-phone-wrapper">
                    <select
                      className="chatbot-country-select"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                    >
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+61">🇦🇺 +61</option>
                    </select>
                    <div className="chatbot-input-with-icon" style={{ flex: 1 }}>
                      <i className="fas fa-phone-alt input-inner-icon"></i>
                      <input
                        type="tel"
                        className="chatbot-reg-input with-icon"
                        placeholder="Mobile number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                      />
                    </div>
                  </div>
                </div>

                {validationError && (
                  <div className="chatbot-reg-error">{validationError}</div>
                )}

                <button type="submit" className="chatbot-reg-btn">
                  <span>Launch AI Conversation</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </form>
            </div>
          ) : (
            <>
              {/* Quick Action Bar */}
              <div className="chatbot-action-bar">
                <a 
                  href="https://chittortech.in/project-estimator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chat-quick-pill estimator-pill"
                  title="Calculate instant project quote"
                >
                  <i className="fas fa-calculator"></i>
                  <span>Estimate Cost</span>
                </a>
                <button 
                  type="button" 
                  className={`chat-quick-pill schedule-pill ${showMeetingScheduler ? 'active' : ''}`}
                  onClick={() => setShowMeetingScheduler(!showMeetingScheduler)}
                >
                  <i className="fas fa-calendar-alt"></i>
                  <span>Book Call</span>
                </button>
              </div>

              {/* Embedded Meeting Scheduler Card */}
              {showMeetingScheduler && (
                <div className="chatbot-scheduler-card">
                  <div className="scheduler-header">
                    <div className="scheduler-title-wrap">
                      <div className="scheduler-header-badge">
                        <i className="fas fa-calendar-check"></i>
                      </div>
                      <div>
                        <h4 className="scheduler-title-text">Book Strategy Call</h4>
                        <p className="scheduler-sub-text">Direct 1-on-1 consultation with Lav Sharma</p>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      className="scheduler-close-btn"
                      onClick={() => setShowMeetingScheduler(false)}
                      aria-label="Close scheduler"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>

                  <form onSubmit={handleScheduleSubmit} className="scheduler-form">
                    {/* Focus Area */}
                    <div className="scheduler-field">
                      <label className="scheduler-field-label">
                        <i className="fas fa-layer-group"></i>
                        <span>Focus Area / Service</span>
                      </label>
                      <div className="scheduler-select-wrap">
                        <select 
                          value={meetingService} 
                          onChange={(e) => setMeetingService(e.target.value)}
                          className="scheduler-select"
                        >
                          <option value="B2B Lead Generation Engine">B2B Lead Gen & Google Maps Scraping</option>
                          <option value="Dharamshala Billing & Trust System">Dharamshala & Pilgrimage Billing System</option>
                          <option value="Custom CRM & ERP Architecture">Custom CRM & ERP Architecture</option>
                          <option value="Enterprise AI Agent & RAG Vector">Enterprise AI Agent & RAG Vector</option>
                          <option value="Mobile App (Android/iOS) & Play Store">Mobile App & Google Play Publishing</option>
                          <option value="Custom Website / SaaS MVP">Custom Website / 4-Week SaaS MVP</option>
                        </select>
                      </div>
                    </div>

                    {/* Preferred Date & Calendar */}
                    <div className="scheduler-field">
                      <div className="scheduler-label-row">
                        <label className="scheduler-field-label">
                          <i className="fas fa-calendar-alt"></i>
                          <span>Preferred Date</span>
                        </label>
                        {meetingDate && (
                          <span className="scheduler-selected-tag">
                            <i className="fas fa-check"></i>
                            {new Date(meetingDate + "T00:00:00").toLocaleDateString("en-IN", { weekday: 'short', day: 'numeric', month: 'short' })}
                          </span>
                        )}
                      </div>

                      {/* Quick Date Chips */}
                      <div className="scheduler-date-chips">
                        {upcomingDateOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt.iso}
                            className={`date-chip ${meetingDate === opt.iso ? "active" : ""}`}
                            onClick={() => setMeetingDate(opt.iso)}
                          >
                            <span className="chip-day">{opt.dayName}</span>
                            <span className="chip-date">{opt.dateStr}</span>
                          </button>
                        ))}
                      </div>

                      {/* Custom Date Input for custom pick */}
                      <div className="scheduler-input-with-icon">
                        <i className="fas fa-calendar-day input-icon"></i>
                        <input 
                          type="date" 
                          className="scheduler-input date-input"
                          value={meetingDate}
                          min={new Date().toISOString().split("T")[0]}
                          onChange={(e) => setMeetingDate(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Preferred Slot */}
                    <div className="scheduler-field">
                      <label className="scheduler-field-label">
                        <i className="fas fa-clock"></i>
                        <span>Select Time Slot</span>
                      </label>
                      <div className="scheduler-slot-grid">
                        {TIME_SLOTS.map((slot) => {
                          const isSelected = meetingSlot === slot.value;
                          return (
                            <button
                              type="button"
                              key={slot.value}
                              className={`slot-chip ${isSelected ? "active" : ""}`}
                              onClick={() => setMeetingSlot(slot.value)}
                            >
                              <i className={`fas ${slot.icon} slot-icon`}></i>
                              <div className="slot-info">
                                <span className="slot-time">{slot.label}</span>
                                <span className="slot-period">{slot.period}</span>
                              </div>
                              {isSelected && (
                                <i className="fas fa-check-circle slot-check"></i>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Project Scope / Note */}
                    <div className="scheduler-field">
                      <label className="scheduler-field-label">
                        <i className="fas fa-comment-dots"></i>
                        <span>Project Scope / Note (Optional)</span>
                      </label>
                      <div className="scheduler-input-with-icon">
                        <i className="fas fa-pen input-icon"></i>
                        <input 
                          type="text" 
                          className="scheduler-input"
                          placeholder="e.g. Need lead scraper for marble dealers..."
                          value={meetingNote}
                          onChange={(e) => setMeetingNote(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="scheduler-actions">
                      <button 
                        type="submit" 
                        className="scheduler-submit-btn"
                        disabled={isSubmittingMeeting}
                      >
                        {isSubmittingMeeting ? (
                          <span><i className="fas fa-spinner fa-spin"></i> Booking Call...</span>
                        ) : (
                          <span><i className="fas fa-check-circle"></i> Confirm Strategy Call</span>
                        )}
                      </button>
                      <div className="scheduler-guarantee-note">
                        <i className="fas fa-shield-alt"></i> 100% Free Consultation • No Obligation
                      </div>
                    </div>
                  </form>
                </div>
              )}

              <div id="chatbot-messages" className="chatbot-messages">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`message-wrapper ${msg.role}`}>
                    {msg.role === "ai" && (
                      <div className="message-avatar-wrap">
                        <img 
                          src="/assets/images/chatbot-kaira.webp" 
                          alt="AI" 
                          onError={(e) => { e.target.src = '/assets/images/ct-logo.png'; }}
                        />
                      </div>
                    )}
                    <div className="message-content-wrap">
                      {msg.role === "ai" && (
                        <span className="message-sender-name">ChittorTech GPT</span>
                      )}
                      <div className={`message ${msg.role}`}>
                        {msg.role === "ai" ? (
                          <div dangerouslySetInnerHTML={parseMarkdown(msg.content)} />
                        ) : (
                          <div style={{ whiteSpace: "pre-line" }}>{msg.content}</div>
                        )}
                        
                        <span className="msg-time">{formatTime(msg.timestamp)}</span>
                        
                        {msg.role === "ai" && !msg.isSystem && !msg.isTyping && (
                          <div 
                            className="msg-copy-btn" 
                            title="Copy message"
                            onClick={() => handleCopy(msg.content, idx)}
                          >
                            <i id={`copy-icon-${idx}`} className="far fa-copy"></i>
                          </div>
                        )}
                      </div>

                      {/* Message Reactions Bar */}
                      {msg.role === "ai" && !msg.isSystem && !msg.isTyping && (
                        <div className="msg-reactions-bar">
                          {["👍", "❤️", "😮"].map((emoji) => (
                            <button
                              key={emoji}
                              className={`msg-reaction-btn${reactions[idx] === emoji ? " active" : ""}`}
                              onClick={() => handleReaction(idx, emoji)}
                              title={emoji === "👍" ? "Helpful" : emoji === "❤️" ? "Love it" : "Wow"}
                            >
                              {emoji}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="message-wrapper ai">
                    <div className="message-avatar-wrap">
                      <img src="/assets/images/chatbot-kaira.webp" alt="AI" onError={(e) => { e.target.src = '/assets/images/ct-logo.png'; }} />
                    </div>
                    <div className="message-content-wrap">
                      <span className="message-sender-name">ChittorTech GPT</span>
                      <div className="message ai typing">
                        <div className="typing-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Intent-Based Lead CTA Banner */}
              {showIntentCTA && isRegistered && (
                <div className="chatbot-intent-cta">
                  <div className="intent-cta-content">
                    <span className="intent-cta-icon">🎯</span>
                    <div className="intent-cta-text">
                      <strong>Ready to get started?</strong>
                      <span>Get a free custom quote in 10 mins</span>
                    </div>
                  </div>
                  <div className="intent-cta-actions">
                    <a
                      href={`https://api.whatsapp.com/send?phone=917597451057&text=${encodeURIComponent(`Hi! I'm ${userName || 'a visitor'} from ChittorTech website. I'm interested in getting a quote for my project.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="intent-cta-btn primary"
                    >
                      <i className="fab fa-whatsapp"></i> Get Quote
                    </a>
                    <button
                      className="intent-cta-dismiss"
                      onClick={() => setShowIntentCTA(false)}
                      aria-label="Dismiss"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              )}


              <div className="chatbot-input-area">
                <input 
                  type="text" 
                  id="chatbot-input" 
                  className="chatbot-input" 
                  placeholder="Ask about our services..." 
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button 
                  id="chatbot-send-btn" 
                  className="chatbot-send"
                  onClick={() => handleSend()}
                  disabled={isLoading}
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </>
          )}
        </div>
    </>
  );
}

