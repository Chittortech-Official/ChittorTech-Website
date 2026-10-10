"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function WhatsAppFloatingWidget() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  if (pathname && pathname.startsWith("/admin")) {
    return null;
  }
  // activeMode for mobile: 'corners' (7s) vs 'island' (7s)
  const [activeMode, setActiveMode] = useState("corners");
  const [isMobile, setIsMobile] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check initial screen & session state
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isClosedInSession = sessionStorage.getItem("ct_island_dismissed") === "true";
      if (isClosedInSession) {
        setIsDismissed(true);
      }
      setIsMobile(window.innerWidth <= 768);
    }

    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  // EXACT REAL 7-SECOND ALTERNATING LOOP (MOBILE ONLY)
  useEffect(() => {
    if (!isVisible || isDismissed || !isMobile) return;

    const timer = setTimeout(() => {
      setActiveMode((prevMode) => (prevMode === "corners" ? "island" : "corners"));
    }, 7000); // 7 full seconds per phase

    return () => clearTimeout(timer);
  }, [activeMode, isVisible, isDismissed, isMobile]);

  // Sync body classes for mobile CSS blur transitions
  useEffect(() => {
    if (typeof document === "undefined") return;

    if (isDismissed) {
      document.body.classList.remove("mobile-island-active");
      document.body.classList.add("mobile-corners-active");
      return;
    }

    if (isMobile) {
      if (activeMode === "island") {
        document.body.classList.add("mobile-island-active");
        document.body.classList.remove("mobile-corners-active");
      } else {
        document.body.classList.add("mobile-corners-active");
        document.body.classList.remove("mobile-island-active");
      }
    } else {
      document.body.classList.remove("mobile-island-active");
      document.body.classList.remove("mobile-corners-active");
    }

    return () => {
      document.body.classList.remove("mobile-island-active");
      document.body.classList.remove("mobile-corners-active");
    };
  }, [activeMode, isMobile, isDismissed]);

  const handleManualSwitchToIsland = () => {
    if (isMobile && !isDismissed) setActiveMode("island");
  };

  const handleDismissSession = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (typeof window !== "undefined") {
      sessionStorage.setItem("ct_island_dismissed", "true");
    }
    setIsDismissed(true);
    setActiveMode("corners");
  };

  if (!isVisible) return null;

  const whatsappNumber = "917597451057";
  const defaultMessage = encodeURIComponent(
    "Hello ChittorTech team, I want to get a personalized project quote and consultation for my business."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <>
      {/* ─── CENTER DYNAMIC ISLAND (PERMANENT ON DESKTOP, 7s ALTERNATING ON MOBILE) ─── */}
      {!isDismissed && (
        <div
          className={`dynamic-island-container ${
            !isMobile || activeMode === "island" ? "island-visible" : "island-hidden"
          }`}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="dynamic-island-pill"
            title="Get Instant Quote on WhatsApp (+91 7597451057)"
            aria-label="Chat on WhatsApp with ChittorTech"
          >
            {/* Left Side: Live Pulse Dot & WhatsApp Badge */}
            <div className="island-left">
              <div className="live-status-ring">
                <span className="live-dot"></span>
                <span className="live-pulse"></span>
              </div>
              <div className="island-icon-badge">
                <i className="fab fa-whatsapp"></i>
              </div>
            </div>

            {/* Center: Title & Live Badge */}
            <div className="island-center">
              <div className="island-header">
                <span className="island-badge">INSTANT QUOTE</span>
                <span className="island-timer">• Online</span>
              </div>
              <div className="island-title">Chat on WhatsApp</div>
            </div>

            {/* Right Side: Equalizer Waveform (Desktop) & CTA Arrow */}
            <div className="island-right">
              <div className="island-waveform desktop-only-waveform">
                <span className="bar bar-1"></span>
                <span className="bar bar-2"></span>
                <span className="bar bar-3"></span>
              </div>
              <div className="island-cta-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </a>

          {/* Close Button (Dismisses for current tab session on Mobile) */}
          {isMobile && (
            <button
              onClick={handleDismissSession}
              className="island-close-btn"
              title="Close for this session"
              aria-label="Close Dynamic Island for this session"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      )}

      {/* ─── BOTTOM-LEFT COMPACT WHATSAPP BUTTON (SHOWS IN SYMMETRY WITH CHATBOT IN PHASE 1) ─── */}
      <div
        className={`bottom-left-wa-container ${
          isDismissed || (isMobile && activeMode === "corners") ? "mini-visible" : "mini-hidden"
        }`}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mini-wa-btn"
          onMouseEnter={handleManualSwitchToIsland}
          onClick={handleManualSwitchToIsland}
          title="Chat on WhatsApp (+91 7597451057)"
          aria-label="Open WhatsApp Chat"
        >
          <div className="mini-live-ring">
            <span className="mini-live-dot"></span>
            <span className="mini-live-pulse"></span>
          </div>
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      {/* Global CSS Overrides for Desktop & Mobile */}
      <style jsx global>{`
        /* DESKTOP VIEW (min-width: 769px): ALL 3 ELEMENTS PERMANENTLY VISIBLE TOGETHER */
        @media (min-width: 769px) {
          .ct-float-left-brand,
          .chatbot-fab-wrap,
          .chatbot-fab,
          .chatbot-container {
            opacity: 1 !important;
            visibility: visible !important;
            filter: blur(0px) !important;
            transform: translateY(0) scale(1) !important;
            pointer-events: auto !important;
            z-index: 1000005 !important;
          }
        }

        /* MOBILE VIEW (max-width: 768px): GRADUAL 0.8s BLUR DISSOLVE IN PERFECT SYMMETRY */
        @media (max-width: 768px) {
          body.mobile-island-active .ct-float-left-brand,
          body.mobile-island-active .chatbot-fab-wrap,
          body.mobile-island-active .chatbot-container:not(.open) {
            opacity: 0 !important;
            visibility: hidden !important;
            filter: blur(12px) !important;
            pointer-events: none !important;
            transform: translateY(20px) scale(0.85) !important;
            transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1) !important;
          }

          body.mobile-corners-active .ct-float-left-brand,
          body.mobile-corners-active .chatbot-fab-wrap,
          body.mobile-corners-active .chatbot-fab,
          body.mobile-corners-active .chatbot-container {
            opacity: 1 !important;
            visibility: visible !important;
            filter: blur(0px) !important;
            pointer-events: auto !important;
            transform: translateY(0) scale(1) !important;
            transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1) !important;
          }
        }

        .ct-float-left-brand,
        .chatbot-fab-wrap {
          transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }
      `}</style>

      <style jsx>{`
        /* ─── Center Dynamic Island Container ─── */
        .dynamic-island-container {
          position: fixed;
          bottom: 20px;
          left: 0;
          right: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999990;
          padding: 0 12px;
          box-sizing: border-box;
          transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
          pointer-events: none !important; /* Full width container must not block corner buttons */
        }

        .island-visible {
          opacity: 1;
          visibility: visible;
          filter: blur(0px);
          transform: translateY(0) scale(1);
          pointer-events: none !important; /* Retain none so FAB clicks pass through */
        }

        .island-hidden {
          opacity: 0;
          visibility: hidden;
          filter: blur(12px);
          transform: translateY(20px) scale(0.88);
          pointer-events: none !important;
        }

        .dynamic-island-pill {
          pointer-events: auto !important; /* Only the interactive pill catches pointer events */
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          background: rgba(8, 9, 14, 0.95);
          backdrop-filter: blur(24px) saturate(200%);
          -webkit-backdrop-filter: blur(24px) saturate(200%);
          border: 1.5px solid rgba(255, 255, 255, 0.18);
          border-radius: 40px;
          padding: 8px 16px 8px 10px;
          color: #ffffff !important;
          text-decoration: none !important;
          box-shadow: 
            0 18px 40px rgba(0, 0, 0, 0.65),
            0 0 25px rgba(37, 211, 102, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.22);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          width: auto;
          max-width: 100%;
          cursor: pointer;
          user-select: none;
          position: relative;
        }

        .dynamic-island-pill:hover {
          background: rgba(5, 6, 9, 0.98);
          border-color: rgba(37, 211, 102, 0.55);
          box-shadow: 
            0 22px 50px rgba(0, 0, 0, 0.85),
            0 0 35px rgba(37, 211, 102, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .island-left {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .live-status-ring {
          position: relative;
          width: 10px;
          height: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          background: #25D366;
          border-radius: 50%;
          z-index: 2;
          box-shadow: 0 0 8px #25D366;
        }

        .live-pulse {
          position: absolute;
          width: 16px;
          height: 16px;
          background: rgba(37, 211, 102, 0.4);
          border-radius: 50%;
          animation: pulseRing 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }

        @keyframes pulseRing {
          0% { transform: scale(0.6); opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        .island-icon-badge {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.35);
        }

        .island-center {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex-shrink: 1;
          min-width: 0;
        }

        .island-header {
          display: flex;
          align-items: center;
          gap: 5px;
          line-height: 1;
          margin-bottom: 2px;
        }

        .island-badge {
          font-size: 0.58rem;
          font-weight: 800;
          letter-spacing: 0.8px;
          color: #25D366;
          text-transform: uppercase;
        }

        .island-timer {
          font-size: 0.56rem;
          color: rgba(255, 255, 255, 0.55);
          font-weight: 500;
        }

        .island-title {
          font-size: 0.84rem;
          font-weight: 700;
          color: #ffffff;
          white-space: nowrap;
          letter-spacing: -0.2px;
          line-height: 1.1;
        }

        .island-right {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }

        .island-waveform {
          display: flex;
          align-items: center;
          gap: 3px;
          height: 14px;
          padding: 0 2px;
        }

        .island-waveform .bar {
          width: 3px;
          background: #25D366;
          border-radius: 3px;
          animation: waveform 1.2s ease-in-out infinite alternate;
        }

        .bar-1 { height: 5px; animation-delay: 0s; }
        .bar-2 { height: 13px; animation-delay: 0.2s; }
        .bar-3 { height: 8px; animation-delay: 0.4s; }

        @keyframes waveform {
          0% { height: 4px; opacity: 0.5; }
          100% { height: 13px; opacity: 1; }
        }

        .island-cta-arrow {
          width: 24px;
          height: 24px;
          background: rgba(255, 255, 255, 0.12);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          color: #ffffff;
          transition: all 0.3s ease;
        }

        .dynamic-island-pill:hover .island-cta-arrow {
          background: #25D366;
          color: #000000;
        }

        .island-close-btn {
          margin-left: 4px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          border: none;
          color: rgba(255, 255, 255, 0.7);
          font-size: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
          pointer-events: auto !important;
        }

        .island-close-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          color: #ffffff;
        }

        /* ─── Compact Bottom-Left Floating Button Container ─── */
        .bottom-left-wa-container {
          position: fixed;
          bottom: 24px;
          left: 24px;
          z-index: 999990;
          transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .mini-visible {
          opacity: 1;
          visibility: visible;
          filter: blur(0px);
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .mini-hidden {
          opacity: 0;
          visibility: hidden;
          filter: blur(12px);
          transform: translateY(20px) scale(0.85);
          pointer-events: none;
        }

        .mini-wa-btn {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          color: #ffffff !important;
          font-size: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none !important;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45), 0 2px 8px rgba(0, 0, 0, 0.2);
          border: 2px solid #ffffff;
          position: relative;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }

        .mini-wa-btn:hover {
          transform: scale(1.12) translateY(-2px);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.65), 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .mini-live-ring {
          position: absolute;
          top: 0px;
          right: 0px;
          width: 14px;
          height: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mini-live-dot {
          width: 10px;
          height: 10px;
          background: #25D366;
          border: 2px solid #ffffff;
          border-radius: 50%;
          z-index: 2;
        }

        .mini-live-pulse {
          position: absolute;
          width: 16px;
          height: 16px;
          background: rgba(37, 211, 102, 0.5);
          border-radius: 50%;
          animation: miniPulse 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }

        @keyframes miniPulse {
          0% { transform: scale(0.7); opacity: 1; }
          100% { transform: scale(1.9); opacity: 0; }
        }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .desktop-only-waveform {
            display: none !important;
          }

          .bottom-left-wa-container {
            display: none !important;
          }

          .mini-wa-btn {
            width: 52px;
            height: 52px;
            font-size: 24px;
          }

          .dynamic-island-container {
            bottom: 16px;
            padding: 0 10px;
          }

          .dynamic-island-pill {
            padding: 6px 12px 6px 10px;
            gap: 8px;
          }

          .island-icon-badge {
            width: 28px;
            height: 28px;
            font-size: 16px;
          }

          .island-title {
            font-size: 0.78rem;
          }

          .island-badge {
            font-size: 0.52rem;
          }
        }
      `}</style>
    </>
  );
}











