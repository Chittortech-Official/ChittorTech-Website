"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { submitLead } from "@/lib/leadService";

export default function TrialModal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    firm: "",
    contact: "",
    location: "",
    message: "",
  });
  const [dontShow, setDontShow] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "danger"
  const [submitting, setSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Guarantee 1-click modal opening for all consultation & demo buttons
  useEffect(() => {
    const handleModalTrigger = (e) => {
      const trigger = e.target.closest('[data-bs-target="#trialModal"], [data-target="#trialModal"]');
      if (trigger) {
        e.preventDefault();
        const trialModalEl = document.getElementById("trialModal");
        if (trialModalEl) {
          if (typeof window !== "undefined" && window.bootstrap && window.bootstrap.Modal) {
            const modalInstance = window.bootstrap.Modal.getOrCreateInstance(trialModalEl);
            modalInstance.show();
          } else {
            trialModalEl.classList.add("show");
            trialModalEl.style.display = "block";
            document.body.classList.add("modal-open");
          }
        }
      }
    };

    document.addEventListener("click", handleModalTrigger);
    return () => document.removeEventListener("click", handleModalTrigger);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Only run on the client side
    const trialModalEl = document.getElementById("trialModal");
    if (!trialModalEl) return;

    // Smart mobile detection to prevent high bounce rates on iOS Safari and mobile screens
    const isMobile = typeof window !== "undefined" && (window.innerWidth < 768 || /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
    const maxPopups = isMobile ? 1 : 3;
    let timerId = null;
    let startTime = null;
    let remainingTime = 0;

    function getAutoPopupCount() {
      try {
        const local = parseInt(localStorage.getItem("trial_popup_count"), 10) || 0;
        const session = parseInt(sessionStorage.getItem("trial_popup_count"), 10) || 0;
        return Math.max(local, session);
      } catch (e) {
        return 0;
      }
    }

    function recordAutoPopupShow() {
      try {
        const nextCount = getAutoPopupCount() + 1;
        localStorage.setItem("trial_popup_count", nextCount.toString());
        sessionStorage.setItem("trial_popup_count", nextCount.toString());
        if (nextCount >= maxPopups) {
          localStorage.setItem("trial_modal_dismissed_v2_at", Date.now().toString());
          sessionStorage.setItem("trial_modal_max_reached", "true");
        }
        return nextCount;
      } catch (e) {
        return 1;
      }
    }

    function shouldShowModal() {
      // Disabled auto-popup completely so visitors and developers are not interrupted repeatedly
      return false;
    }

    function showModal(isAuto = false) {
      if (!shouldShowModal() && isAuto) return;

      const triggerShow = () => {
        if (window.bootstrap && window.bootstrap.Modal) {
          const modalInstance = window.bootstrap.Modal.getOrCreateInstance(trialModalEl);
          if (isAuto) {
            trialModalEl.setAttribute("data-auto-opened", "true");
          } else {
            trialModalEl.removeAttribute("data-auto-opened");
          }
          modalInstance.show();
          return true;
        }
        return false;
      };

      if (!triggerShow()) {
        const interval = setInterval(() => {
          if (triggerShow()) {
            clearInterval(interval);
          }
        }, 500);
        setTimeout(() => clearInterval(interval), 10000);
      }
    }

    function isInteractingWithNav() {
      return !!document.querySelector('.ct-drop.open, .ct-nav-btn.open, .ct-mobile-drawer.open, .dropdown-menu.show');
    }

    function startTimer(delay) {
      clearTimer();
      startTime = Date.now();
      remainingTime = delay;

      timerId = setTimeout(() => {
        timerId = null;
        if (typeof document !== "undefined" && document.hidden) {
          // Tab is currently in background; do not fire in background
          return;
        }
        if (isInteractingWithNav()) {
          // User is exploring header dropdowns (AI Solutions, etc.); postpone by 6 seconds
          startTimer(6000);
          return;
        }
        const isAnyModalShow = document.querySelector(".modal.show");
        if (!isAnyModalShow && shouldShowModal()) {
          showModal(true);
          recordAutoPopupShow();
        }
      }, remainingTime);
    }

    function clearTimer() {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      remainingTime = 0;
    }

    function scheduleNext() {
      if (!shouldShowModal()) return;

      const currentCount = getAutoPopupCount();
      if (currentCount >= maxPopups) {
        clearTimer();
        return;
      }
      
      // Non-intrusive mobile delay to eliminate 1-sec bounce on iPhone/Safari:
      // Mobile users get 35s of uninterrupted reading before any prompt.
      // Desktop users get 15s.
      let delay = isMobile ? 35000 : 15000;
      if (currentCount === 1) {
        delay = isMobile ? 45000 : 25000;
      } else if (currentCount === 2) {
        delay = isMobile ? 60000 : 35000;
      }

      startTimer(delay);
    }

    if (shouldShowModal()) {
      scheduleNext();
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Clear active timers when switching away to prevent background accumulation
        clearTimer();
      } else {
        // Tab restored: give comfortable buffer before any popup
        if (shouldShowModal() && getAutoPopupCount() < maxPopups) {
          startTimer(isMobile ? 20000 : 8000);
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const onHideModal = () => {
      const isChecked = document.getElementById("dontShowTrial")?.checked;
      if (isChecked) {
        try {
          localStorage.setItem("trial_modal_dismissed_v2_at", Date.now().toString());
          sessionStorage.setItem("trial_modal_max_reached", "true");
        } catch (e) {}
        clearTimer();
      }
    };

    const onHiddenModal = () => {
      setDontShow(false);
      try {
        sessionStorage.setItem("trial_modal_last_closed_at", Date.now().toString());
      } catch (e) {}

      const wasAuto = trialModalEl.getAttribute("data-auto-opened") === "true";
      trialModalEl.removeAttribute("data-auto-opened");

      const currentCount = getAutoPopupCount();
      // If reached maximum of 3 popups, automatically silence for 2 days
      if (currentCount >= maxPopups) {
        try {
          localStorage.setItem("trial_modal_dismissed_v2_at", Date.now().toString());
          sessionStorage.setItem("trial_modal_max_reached", "true");
        } catch (e) {}
        clearTimer();
        return;
      }

      if (wasAuto && shouldShowModal()) {
        scheduleNext();
      }
    };

    trialModalEl.addEventListener("hide.bs.modal", onHideModal);
    trialModalEl.addEventListener("hidden.bs.modal", onHiddenModal);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      trialModalEl.removeEventListener("hide.bs.modal", onHideModal);
      trialModalEl.removeEventListener("hidden.bs.modal", onHiddenModal);
      trialModalEl.removeAttribute("data-auto-opened");
      clearTimer();
    };
  }, [isSubmitted, mounted]);

  const handleManualClose = () => {
    const trialModalEl = document.getElementById("trialModal");
    if (trialModalEl) {
      if (typeof window !== "undefined" && window.bootstrap && window.bootstrap.Modal) {
        const modalInstance = window.bootstrap.Modal.getInstance(trialModalEl);
        if (modalInstance) {
          modalInstance.hide();
        }
      }
      trialModalEl.classList.remove("show");
      trialModalEl.style.display = "none";
      document.body.classList.remove("modal-open");
      if (typeof document !== "undefined") {
        document.querySelectorAll(".modal-backdrop").forEach((b) => b.remove());
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setDontShow(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMsg("");

    // Validate required fields client-side
    if (!formData.name || !formData.email || !formData.contact || !formData.location) {
      setStatusType("danger");
      setStatusMsg("Please fill in all required fields.");
      setSubmitting(false);
      return;
    }

    // Capture submission data
    const submissionPayload = { ...formData };

    // 1. Instant feedback to user
    setStatusType("success");
    setStatusMsg("Thank you! We will contact you soon.");
    
    // 2. Clear form fields
    setFormData({
      name: "",
      email: "",
      company: "",
      industry: "",
      firm: "",
      contact: "",
      location: "",
      message: "",
    });

    // 3. Mark as submitted in session/local storage for 7 days silence
    localStorage.setItem("trial_modal_submitted_at", Date.now().toString());
    sessionStorage.setItem("trial_modal_submitted", "true");
    setIsSubmitted(true);

    // 4. Hide modal automatically after 2.5s
    setTimeout(() => {
      const trialModalEl = document.getElementById("trialModal");
      if (trialModalEl && window.bootstrap && window.bootstrap.Modal) {
        const modalInstance = window.bootstrap.Modal.getInstance(trialModalEl);
        if (modalInstance) {
          modalInstance.hide();
        }
      }
    }, 2500);

    // 5. Send payload into Firestore and trigger email
    submitLead(submissionPayload).catch((err) => {
      console.error("Lead submission error:", err);
    });

    setSubmitting(false);
  };

  if (!mounted || (pathname && pathname.startsWith("/admin"))) return null;

  return (
    <>
      <style>{`
        #trialModal {
          z-index: 9999999 !important;
        }
        #trialModal.show {
          display: block !important;
          opacity: 1 !important;
        }
        #trialModal.show .modal-dialog {
          opacity: 1 !important;
          transform: none !important;
        }
        .modal-backdrop {
          z-index: 9999998 !important;
          background-color: rgba(15, 23, 42, 0.68) !important;
          backdrop-filter: blur(8px);
        }
        #trialModal .modal-dialog {
          max-width: 860px;
          width: 94%;
          margin: 1.75rem auto;
        }
        #trialModal .modal-content {
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(219, 234, 254, 0.9);
          box-shadow: 0 25px 60px -15px rgba(37, 99, 235, 0.22), 0 10px 25px -5px rgba(15, 23, 42, 0.15);
          max-height: 90vh;
          background: #ffffff;
        }
        #trialModal .modal-body {
          padding: 0;
          overflow-y: auto;
          max-height: 90vh;
        }
        .trial-flex {
          display: flex;
          flex-direction: row;
        }

        /* Left Side: Modern White-Blue Banner */
        .trial-banner {
          flex: 0 0 38%;
          background: linear-gradient(145deg, #f0f7ff 0%, #e0f2fe 50%, #eff6ff 100%);
          border-right: 1px solid #dbeafe;
          position: relative;
          display: flex;
          flex-direction: column;
          color: #0f172a;
          padding: 26px 22px;
          overflow: hidden;
        }

        /* Glowing background decorative shapes */
        .trial-banner-orb1 {
          position: absolute;
          top: -80px;
          right: -80px;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(255, 255, 255, 0) 70%);
          pointer-events: none;
          animation: floatOrb 8s ease-in-out infinite alternate;
        }
        .trial-banner-orb2 {
          position: absolute;
          bottom: -60px;
          left: -60px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.18) 0%, rgba(255, 255, 255, 0) 70%);
          pointer-events: none;
          animation: floatOrb 10s ease-in-out infinite alternate-reverse;
        }

        @keyframes floatOrb {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(15px, 15px) scale(1.08); }
        }

        .trial-banner-content {
          position: relative;
          z-index: 2;
        }
        .trial-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          font-size: 0.74rem;
          font-weight: 700;
          color: #1d4ed8;
          letter-spacing: 0.4px;
          margin-bottom: 12px;
          border: 1px solid #bfdbfe;
          box-shadow: 0 3px 10px rgba(37, 99, 235, 0.1);
        }
        .trial-badge i {
          color: #2563eb;
          font-size: 0.78rem;
        }
        .trial-banner-content h2 {
          font-size: 1.45rem;
          font-weight: 800;
          line-height: 1.25;
          margin-bottom: 10px;
          color: #0f172a;
          letter-spacing: -0.4px;
        }
        .trial-text-gradient {
          background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #0284c7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .trial-banner-content p {
          font-size: 0.81rem;
          color: #475569;
          line-height: 1.48;
          margin-bottom: 14px;
        }

        .trial-logo-card {
          display: inline-flex;
          align-items: center;
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(6px);
          border-radius: 12px;
          border: 1px solid rgba(219, 234, 254, 0.8);
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
          margin-bottom: 14px;
        }

        .trial-features {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .trial-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.79rem;
          font-weight: 600;
          color: #1e293b;
          transition: transform 0.2s ease;
        }
        .trial-feature-item:hover {
          transform: translateX(3px);
        }
        .trial-feature-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          flex-shrink: 0;
          box-shadow: 0 3px 8px rgba(37, 99, 235, 0.25);
        }

        /* Right Side: Sleek Modern Form */
        .trial-form-side {
          flex: 1;
          padding: 26px 32px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }
        .trial-title {
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 4px;
          font-size: 1.35rem;
          letter-spacing: -0.4px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding-right: 36px;
        }
        .trial-title-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #2563eb;
          display: inline-block;
        }
        .trial-subtitle {
          color: #64748b;
          margin-bottom: 16px;
          font-size: 0.83rem;
        }

        .trial-input-group {
          margin-bottom: 10px;
          border-radius: 10px;
          overflow: hidden;
          border: 1.5px solid #e2e8f0;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          background: #f8fafc;
          display: flex;
          align-items: center;
        }
        .trial-input-group:focus-within {
          border-color: #2563eb;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.14);
          background: #ffffff;
          transform: translateY(-1px);
        }
        .trial-input-group-text {
          background: transparent;
          border: none;
          color: #3b82f6;
          padding-left: 14px;
          padding-right: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }
        .trial-input-group:focus-within .trial-input-group-text {
          color: #1d4ed8;
        }
        .trial-form-side .form-control, 
        .trial-form-side .form-select {
          border: none;
          padding: 11px 14px 11px 0;
          font-size: 0.86rem;
          font-weight: 500;
          background: transparent;
          color: #0f172a;
          box-shadow: none !important;
        }
        .trial-form-side .form-control::placeholder {
          color: #94a3b8;
          font-weight: 400;
        }
        .trial-form-side .form-select {
          cursor: pointer;
          color: #0f172a;
        }
        .trial-form-side .form-select option {
          background: #ffffff;
          color: #0f172a;
        }

        .trial-textarea-wrap {
          margin-bottom: 16px;
          border-radius: 12px;
          border: 1.5px solid #e2e8f0;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          background: #f8fafc;
          padding: 10px 14px;
        }
        .trial-textarea-wrap:focus-within {
          border-color: #2563eb;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.14);
          background: #ffffff;
          transform: translateY(-1px);
        }
        .trial-textarea {
          border: none !important;
          padding: 0 !important;
          font-size: 0.86rem !important;
          font-weight: 500 !important;
          background: transparent !important;
          box-shadow: none !important;
          color: #0f172a !important;
          width: 100%;
          resize: none;
        }
        .trial-textarea::placeholder {
          color: #94a3b8;
          font-weight: 400;
        }

        .trial-btn {
          width: 100%;
          padding: 13px 20px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.92rem;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          border: none;
          color: #ffffff;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 4px;
          box-shadow: 0 8px 20px -4px rgba(37, 99, 235, 0.4);
          letter-spacing: 0.3px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
        }
        .trial-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
          box-shadow: 0 12px 25px -4px rgba(37, 99, 235, 0.5);
          transform: translateY(-2px);
        }
        .trial-btn:active:not(:disabled) {
          transform: translateY(0);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }
        .trial-btn:disabled {
          opacity: 0.75;
          cursor: not-allowed;
        }

        .close-modal-custom {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 1001;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #64748b;
          transition: all 0.25s ease;
        }
        .close-modal-custom:hover {
          background: #2563eb;
          border-color: #2563eb;
          color: #ffffff;
          transform: rotate(90deg) scale(1.05);
        }

        .dont-show-box {
          margin-top: 16px;
          font-size: 0.8rem;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .dont-show-box input {
          cursor: pointer;
          accent-color: #2563eb;
          width: 16px;
          height: 16px;
          border-radius: 4px;
        }

        .trial-alert-success {
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          color: #065f46;
          border-radius: 12px;
          padding: 10px 14px;
          font-size: 0.84rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          animation: fadeInDown 0.3s ease;
        }
        .trial-alert-danger {
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #991b1b;
          border-radius: 12px;
          padding: 10px 14px;
          font-size: 0.84rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          animation: fadeInDown 0.3s ease;
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 767px) {
          #trialModal .modal-dialog {
            width: 92% !important;
            margin: 1.25rem auto !important;
            padding-bottom: env(safe-area-inset-bottom, 20px) !important;
          }
          .trial-flex {
            flex-direction: column !important;
          }
          .trial-banner {
            display: none !important;
          }
          .trial-form-side {
            padding: 24px 18px !important;
          }
          .close-modal-custom {
            width: 44px !important;
            height: 44px !important;
            min-width: 44px !important;
            min-height: 44px !important;
            top: 10px !important;
            right: 10px !important;
            font-size: 1.15rem !important;
            touch-action: manipulation !important;
          }
        }
      `}</style>

      <div className="modal fade" id="trialModal" tabIndex="-1" aria-hidden="true" data-bs-focus="false">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0">
            <div
              className="close-modal-custom"
              data-bs-dismiss="modal"
              onClick={handleManualClose}
              onTouchEnd={handleManualClose}
              role="button"
              aria-label="Close modal"
            >
              <i className="bi bi-x-lg"></i>
            </div>
            <div className="modal-body">
              <div className="trial-flex">
                {/* Left Side: ChittorTech Modern AI Banner (White & Blue) */}
                <div className="trial-banner">
                  <div className="trial-banner-orb1"></div>
                  <div className="trial-banner-orb2"></div>

                  <div className="trial-banner-content">
                    <div className="trial-badge">
                      <i className="fas fa-sparkles"></i>
                      <span>ChittorTech Exclusive</span>
                    </div>
                    <h2>
                      Transform Your Business <span className="trial-text-gradient">With AI</span>
                    </h2>
                    <p>
                      Request a personalized demo and discover custom AI chatbots, workflows, and enterprise automation built for your growth.
                    </p>
                    <div className="trial-logo-card">
                      <img
                        src="/assets/images/ct-logo.png"
                        alt="ChittorTech Logo"
                        style={{ height: "48px", width: "auto", objectFit: "contain" }}
                      />
                    </div>

                    <div className="trial-features">
                      <div className="trial-feature-item">
                        <div className="trial-feature-icon">
                          <i className="fas fa-bolt"></i>
                        </div>
                        <span>24/7 Intelligent Automation</span>
                      </div>
                      <div className="trial-feature-item">
                        <div className="trial-feature-icon">
                          <i className="fas fa-shield-alt"></i>
                        </div>
                        <span>Enterprise Security & Privacy</span>
                      </div>
                      <div className="trial-feature-item">
                        <div className="trial-feature-icon">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <span>High-ROI Custom Solutions</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Modern White & Blue Form */}
                <div className="trial-form-side">
                  <div>
                    <h3 className="trial-title">
                      <span>Get Free Consultation & Trial</span>
                    </h3>
                    <p className="trial-subtitle">Tell us about your project and receive a tailored demo.</p>
                  </div>

                  {statusMsg && (
                    <div className={statusType === "success" ? "trial-alert-success" : "trial-alert-danger"}>
                      <i className={statusType === "success" ? "fas fa-check-circle" : "fas fa-exclamation-triangle"}></i>
                      <span>{statusMsg}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} id="trialForm">
                    <div className="row g-2">
                      <div className="col-md-6">
                        <div className="trial-input-group">
                          <span className="trial-input-group-text"><i className="fas fa-user"></i></span>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="trial-input-group">
                          <span className="trial-input-group-text"><i className="fas fa-envelope"></i></span>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email ID*"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="trial-input-group">
                          <span className="trial-input-group-text"><i className="fas fa-industry"></i></span>
                          <select
                            name="industry"
                            className="form-select"
                            value={formData.industry}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Industry*</option>
                            <option value="Manufacturing">Manufacturing</option>
                            <option value="Trading & Retail">Trading & Retail</option>
                            <option value="Hospitality & Hotel">Hospitality & Hotel</option>
                            <option value="IT & Tech Services">IT & Tech Services</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="trial-input-group">
                          <span className="trial-input-group-text"><i className="fas fa-phone-alt"></i></span>
                          <input
                            type="text"
                            className="form-control"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="Phone / WhatsApp*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="trial-input-group">
                          <span className="trial-input-group-text"><i className="fas fa-map-marker-alt"></i></span>
                          <input
                            type="text"
                            className="form-control"
                            id="trialLocation"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Location (City/State)*"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="trial-textarea-wrap">
                      <textarea
                        className="trial-textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="2"
                        placeholder="Brief project details or requirements..."
                      ></textarea>
                    </div>

                    <button type="submit" className="trial-btn" disabled={submitting}>
                      {submitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Request Free Trial & Demo</span>
                          <i className="fas fa-arrow-right fs-6 ms-1"></i>
                        </>
                      )}
                    </button>

                    <div className="dont-show-box">
                      <input
                        type="checkbox"
                        id="dontShowTrial"
                        checked={dontShow}
                        onChange={handleCheckboxChange}
                        autoComplete="off"
                      />
                      <label htmlFor="dontShowTrial">Don't show this popup for 2 days</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
