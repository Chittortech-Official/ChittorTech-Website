"use client";
import React, { useState } from "react";
import "../../../public/assets/css/premium-products.css";

export default function GooglePlayPublishingPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activePolicy, setActivePolicy] = useState(null);
  const videoRef = React.useRef(null);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const changeSpeed = (rate) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
      setPlaybackSpeed(rate);
    }
  };

  const POLICY_DETAILS = {
    your_account: {
      title: "Publishing Policy (Your Account)",
      themeColor: "#3b82f6",
      icon: "fa-circle-info text-primary",
      intro: "Since you are publishing on your own developer console, ChittorTech acts as your setup and development partner.",
      points: [
        "Store Listing Optimization (ASO) setup is completed using your approved metadata.",
        "We perform a pre-submission policy review to check for potential Google Play violations to ensure a smooth review process.",
        "You are responsible for providing all legal store assets, icons, and contact details.",
        "Since the app is hosted on your console, ChittorTech is not responsible for any post-launch policy actions, warnings, or account suspensions issued by Google."
      ],
      notice: ""
    },
    chittortech_account: {
      title: "Publishing & Abuse Policy (ChittorTech Console)",
      themeColor: "#ef4444",
      icon: "fa-triangle-exclamation text-danger",
      intro: "Because you are publishing under ChittorTech's verified corporate developer console, we maintain strict policy controls to protect our console health.",
      points: [
        "Zero-tolerance policy against malware, phishing, clone code, gambling, or policy-violating applications.",
        "All app bundles (AAB) undergo strict manual and automated policy audits before uploading.",
        "Clients must ensure their app meets all local government regulations and licensing requirements."
      ],
      notice: "To safeguard our developer account and ensure uninterrupted service for all hosted applications, clients are requested to strictly adhere to Google Play guidelines. In case of major violations leading to account suspensions or warnings, the client will be held responsible for any damages caused to the platform."
    },
    full_setup: {
      title: "Developer Console Setup Policy",
      themeColor: "#06b6d4",
      icon: "fa-gears text-info",
      intro: "We assist and guide you in creating, verifying, and launching your own dedicated Google Play Developer Console.",
      points: [
        "The client is responsible for providing valid identity documents, business registrations, and D-U-N-S numbers as requested by Google.",
        "The standard Google developer registration fee ($25) is paid directly by the client (subject to change per Google's pricing updates).",
        "ChittorTech will configure Play Console settings, complete required setup forms, and launch your first app.",
        "Once setup is completed, full control and security of the console belongs to the client. ChittorTech is not responsible for future account standing."
      ],
      notice: ""
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const PACKAGES = [
    {
      title: "Publish on Your Account",
      priceUSD: "$129",
      priceINR: "₹10,299",
      popular: false,
      policyType: "your_account",
      desc: "Perfect for developers who already own a Google Play Console and want experts to handle compliance, asset setup, and submission.",
      features: [
        "Store Listing Setup (ASO)",
        "Pre-Submission Policy & Compliance Check",
        "AAB/APK Compilation & SDK Target Check",
        "Privacy Policy Hosting Setup",
        "Review Process Management",
        "1 Free App Update (within 30 days)"
      ],
      whatsappMsg: "Hi ChittorTech, I want to publish my app on my own Google Play Console ($129/₹10,299). I need help in publishing my app."
    },
    {
      title: "Publish on ChittorTech Account",
      priceUSD: "$299",
      priceINR: "₹25,999",
      popular: false,
      policyType: "chittortech_account",
      desc: "No developer account? No problem. Skip the $25 registration fee and identity verification. We publish your app on our verified organization console.",
      features: [
        "1-Year Hosting under ChittorTech Console (Renewable)",
        "Complete Store Asset Upload & Setup",
        "Strict Policy & Security Compliance Audit",
        "Privacy Policy Creation & Hosting",
        "Active Console Monitoring & Crash Alerts",
        "2 Free Updates per year"
      ],
      whatsappMsg: "Hi ChittorTech, I want to publish my app on ChittorTech's Google Play Console ($299/₹25,999). I need help in publishing my app."
    },
    {
      title: "Full Account Setup & Launch",
      priceUSD: "$339",
      priceINR: "₹29,499",
      popular: true,
      policyType: "full_setup",
      desc: "For businesses wanting their own dedicated developer console. We handle organization verification, setup, and publish the first app.",
      features: [
        "Organization / Individual Console Registration",
        "D-U-N-S Number Registration Guidance",
        "Business Identity & Document Verification Help",
        "Google API Console & Credentials Config",
        "First App Upload & Publishing Support",
        "1-Month Dedicated Account Support"
      ],
      whatsappMsg: "Hi ChittorTech, I want a complete Google Play Console setup and launch service ($339/₹29,499). I need help in publishing my app."
    }
  ];

  const COMPARISON_ITEMS = [
    {
      feature: "12 Real Android Testers",
      diy: "Begging 12 friends/family to install (high drop-out rate)",
      ct: "12 Real, dedicated active Android devices with 100% retention"
    },
    {
      feature: "14-Day Continuous Opt-in",
      diy: "Risk of tester uninstalls resetting the 14-day clock",
      ct: "Guaranteed uninterrupted 14-day continuous opt-in streak"
    },
    {
      feature: "Production Access Application",
      diy: "High rejection rate due to generic feedback answers",
      ct: "Expert-crafted questionnaire responses proven to pass Google review"
    },
    {
      feature: "Policy & Target SDK Audit",
      diy: "Trial and error after multiple Google Play rejections",
      ct: "Pre-submission compliance check (SDK 34/35, permissions, privacy)"
    },
    {
      feature: "Organization & D-U-N-S Verification",
      diy: "Months of paperwork, legal verification delays & confusion",
      ct: "Guided setup or instant publishing on ChittorTech verified console"
    },
    {
      feature: "Time to Live on Play Store",
      diy: "45 to 60+ days with high uncertainty",
      ct: "Fast-track 14 to 20 business days"
    }
  ];

  const FAQS = [
    {
      q: "Google Play Console par app publish karne me kitna time lagta hai?",
      a: "Naye Google rules ke mutabik, app review hone me aamtaur par 3 se 7 din ka samay lagta hai. Agar aapka account naya hai toh kabhi-kabhi verification aur review me 10-14 days bhi lag sakte hain."
    },
    {
      q: "What is Google's 12-Tester Rule (Closed Testing)?",
      a: "Google ke official update ke mutabik, personal developer accounts ko app public karne se pehle closed testing me kam se kam 12 testers se 14 days tak continuous app opt-in aur test karwana compulsory hai (Google ne ise 20 se reduce karke 12 testers kar diya hai). ChittorTech is requirement ko real devices ke saath 100% complete karwati hai."
    },
    {
      q: "Kya mera app suspend hone ka khatra hai?",
      a: "Hum app publish karne se pehle poori compliance checking karte hain. Agar aapka app Google Play Developer Policies (jaise copyright infringement, local government regulations, adult content, spam) ko follow karta hai, toh suspension ka risk na ke barabar hota hai."
    },
    {
      q: "Hum kis tarah ke apps publish nahi karte?",
      a: "Apne console aur reputation ko safe rakhne ke liye hum Gambling (betting) apps, short-term loan apps (bina RBI/legal approvals), clone apps (jo kisi aur ke code ko directly copy karte hain), aur illegal content wale apps publish nahi karte hain."
    },
    {
      q: "Agar app update karna ho toh kya charge hoga?",
      a: "Humare packages me free updates included hain (jaisa package details me likha hai). Uske baad ke updates ke liye nominal custom fee li jaati hai, jise aap humse discuss kar sakte hain."
    }
  ];

  return (
    <>
      <style>{`
        /* Design System overrides & variables */
        .gplay-section {
          font-family: 'Inter', sans-serif;
          color: #1e293b;
          overflow-x: hidden;
          width: 100%;
        }
        .gplay-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
        }
        .gplay-hero .gplay-title,
        .gplay-cta-title {
          color: #ffffff !important;
        }
        .gplay-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #1e3a8a 100%);
          color: #fff;
          padding: 100px 0 80px;
          position: relative;
          overflow: hidden;
        }
        .gplay-hero::before {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 75%);
          top: -200px;
          right: -100px;
          border-radius: 50%;
          pointer-events: none;
        }
        .gplay-hero::after {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 75%);
          bottom: -100px;
          left: -50px;
          border-radius: 50%;
          pointer-events: none;
        }
        .btn-gplay-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: #fff !important;
          font-weight: 700;
          padding: 12px 30px;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: none;
          cursor: pointer;
        }
        .btn-gplay-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
        }
        .btn-gplay-whatsapp {
          background: #25d366;
          color: #fff !important;
          font-weight: 700;
          padding: 12px 30px;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.3);
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: none;
          cursor: pointer;
        }
        .btn-gplay-whatsapp:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        }
        .gplay-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 40px 30px;
          transition: all 0.3s ease;
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .gplay-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
          border-color: #cbd5e1;
        }
        .gplay-card.popular {
          border: 2px solid #3b82f6;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.1);
        }
        .popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 50px;
          box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
        }
        .step-num {
          width: 50px;
          height: 50px;
          background: rgba(59, 130, 246, 0.1);
          color: #2563eb;
          font-weight: 800;
          font-size: 1.25rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .policy-allowed {
          background: rgba(16, 185, 129, 0.05);
          border-left: 4px solid #10b981;
          padding: 20px;
          border-radius: 0 12px 12px 0;
          height: 100%;
        }
        .policy-blocked {
          background: rgba(239, 68, 68, 0.05);
          border-left: 4px solid #ef4444;
          padding: 20px;
          border-radius: 0 12px 12px 0;
          height: 100%;
        }
        .faq-item {
          border-bottom: 1px solid #e2e8f0;
          padding: 16px 0;
        }
        .faq-question {
          font-weight: 700;
          font-size: 1.05rem;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          transition: color 0.2s ease;
        }
        .faq-question:hover {
          color: #2563eb;
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0, 1, 0, 1);
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .faq-answer.show {
          max-height: 1000px;
          padding-top: 10px;
          padding-bottom: 10px;
          transition: all 0.3s cubic-bezier(1, 0, 1, 0);
        }

        /* Mobile View Optimizations: Clean, spacious design (Desktop untouched) */
        @media (max-width: 768px) {
          .gplay-hero {
            padding: 45px 0 25px;
          }
          .gplay-card {
            padding: 16px 14px !important;
            border-radius: 14px !important;
            margin-bottom: 14px !important;
          }
          .gplay-card.popular {
            margin-top: 24px !important;
          }
          .popular-badge {
            top: -12px !important;
            font-size: 0.68rem !important;
            padding: 4px 12px !important;
          }
          .gplay-card .gplay-title {
            font-size: 1.15rem !important;
            margin-bottom: 2px !important;
          }
          .gplay-card .card-desc {
            font-size: 0.78rem !important;
            margin-bottom: 8px !important;
            line-height: 1.35 !important;
          }
          .gplay-card .card-price-box {
            margin-bottom: 10px !important;
            padding-bottom: 6px !important;
          }
          .gplay-card .card-price-inr {
            font-size: 1.65rem !important;
          }
          .gplay-card .card-price-usd {
            font-size: 0.95rem !important;
          }
          .gplay-card .card-features-list {
            margin-bottom: 12px !important;
          }
          .gplay-card .card-feature-item {
            margin-bottom: 4px !important;
            font-size: 0.78rem !important;
            line-height: 1.3 !important;
          }
          .gplay-card .btn-gplay-whatsapp {
            padding: 8px 14px !important;
            font-size: 0.86rem !important;
            border-radius: 8px !important;
          }
          .gplay-card .card-policy-btn {
            margin-top: 4px !important;
            padding-top: 4px !important;
          }

          /* TARGETED: Only reduce the excessive gaps between the 4 specific sections on mobile */
          /* 1. Between Showcase and Harder-Than-Ever */
          .gplay-intro-section {
            padding-top: 1.75rem !important;
          }
          .gplay-intro-section > .container {
            padding-top: 0 !important;
          }

          /* 2. Between Active Maintenance card and Choose Your Publishing Path */
          .gplay-intro-section {
            padding-bottom: 1.5rem !important;
          }
          .gplay-intro-section > .container {
            padding-bottom: 0 !important;
          }
          #packages {
            padding-top: 1.5rem !important;
          }
          #packages > .container {
            padding-top: 0 !important;
          }

          /* 3. Between Free 15-Minute Audit (Blue Box) and How the Process Works */
          #packages {
            padding-bottom: 1.5rem !important;
          }
          #packages > .container {
            padding-bottom: 0 !important;
          }
          .gplay-process-section {
            padding-top: 1.5rem !important;
          }
          .gplay-process-section > .container {
            padding-top: 0 !important;
          }

          /* 4. Between What We Do NOT Publish and Comparison */
          .gplay-guidelines-section {
            padding-bottom: 1.5rem !important;
          }
          .gplay-guidelines-section > .container {
            padding-bottom: 0 !important;
          }
          .gplay-comparison-section {
            padding-top: 1.5rem !important;
          }
          .gplay-comparison-section > .container {
            padding-top: 0 !important;
          }
        }
      `}</style>

      <div className="gplay-section">
        {/* Hero Section */}
        <section className="gplay-hero">
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <span className="badge bg-primary text-uppercase px-3 py-2 mb-3" style={{ fontSize: '0.75rem', letterSpacing: '1px', fontWeight: '800' }}>
                  <i className="fa-brands fa-google-play"></i> App Store Services
                </span>
                <h1 className="gplay-title mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.15 }}>
                  Google Play Store App <span style={{ color: '#60a5fa' }}>Publishing & Testing</span> Services
                </h1>
                <p className="lead mb-4" style={{ color: '#cbd5e1', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '650px' }}>
                  Struggling with the 12-tester rule, organization verification, or account suspensions? Let ChittorTech publish and manage your Android applications securely.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <a href="https://api.whatsapp.com/send?phone=917597451057&text=Hi%20ChittorTech,%20I%20am%20interested%20in%20your%20Google%20Play%20Publishing%20services.%20I%20need%20help%20in%20publishing%20my%20app." target="_blank" rel="noopener noreferrer" className="btn-gplay-whatsapp">
                    <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                  </a>
                  <a href="#packages" className="btn-gplay-primary">
                    View Pricing Plans <i className="fa-solid fa-arrow-down"></i>
                  </a>
                </div>
              </div>

              {/* Smartphone Mockup Frame */}
              <div className="col-lg-5 col-12 d-flex justify-content-center mt-4 mt-lg-0">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "270px",
                    borderRadius: "36px",
                    padding: "10px 8px 12px",
                    background: "linear-gradient(135deg, #1e293b, #0f172a, #020617)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 2px rgba(59, 130, 246, 0.5), 0 0 35px rgba(37, 99, 235, 0.25)",
                    border: "4px solid #334155",
                  }}
                >
                  {/* Phone Speaker & Notch */}
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                    <div style={{ width: "36px", height: "4px", backgroundColor: "#64748b", borderRadius: "4px" }} />
                    <div style={{ width: "5px", height: "5px", backgroundColor: "#0f172a", borderRadius: "50%", border: "1px solid #64748b" }} />
                  </div>

                  {/* Video Container (9:16) */}
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "24px",
                      overflow: "hidden",
                      aspectRatio: "9 / 16",
                      backgroundColor: "#020617",
                    }}
                  >
                    <video
                      ref={videoRef}
                      src="https://github.com/user-attachments/assets/bcd3514f-b2fd-40aa-8b74-fb5e994dde3f"
                      poster="/images/google-play-video-poster.jpg"
                      controls
                      controlsList="nofullscreen nodownload"
                      disablePictureInPicture
                      playsInline
                      preload="metadata"
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />

                    {!isPlaying && (
                      <div
                        onClick={togglePlay}
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "rgba(0, 0, 0, 0.2)",
                          cursor: "pointer",
                          zIndex: 3,
                        }}
                      >
                        <div
                          style={{
                            width: "64px",
                            height: "64px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 10px 30px rgba(37, 99, 235, 0.65), 0 0 0 4px rgba(255, 255, 255, 0.35)",
                          }}
                        >
                          <i className="fa-solid fa-play" style={{ color: "#fff", fontSize: "1.5rem", marginLeft: "4px" }}></i>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Quick Playback Speed Switcher */}
                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "5px 8px",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "10px",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <span style={{ fontSize: "0.75rem", color: "#94a3b8", fontWeight: 600 }}>Speed:</span>
                    <div style={{ display: "flex", gap: "4px" }}>
                      {[1, 1.25, 1.5, 2].map((speed) => (
                        <button
                          key={speed}
                          onClick={() => changeSpeed(speed)}
                          style={{
                            padding: "2px 6px",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            borderRadius: "6px",
                            border: "none",
                            cursor: "pointer",
                            background: playbackSpeed === speed ? "#3b82f6" : "transparent",
                            color: playbackSpeed === speed ? "#ffffff" : "#94a3b8",
                            transition: "all 0.2s",
                          }}
                        >
                          {speed}x
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Proof / Verified Production Approvals Showcase */}
        <section className="py-5" style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
          <div className="container">
            <div className="text-center mb-4">
              <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 text-uppercase fw-bold" style={{ fontSize: '0.78rem', letterSpacing: '1px' }}>
                <i className="fa-brands fa-google-play me-1"></i> Rapid Execution Record
              </span>
              <h2 className="gplay-title mt-2 mb-2" style={{ fontSize: '2.1rem', fontWeight: 800 }}>
                50+ Apps Published & Managed Globally Within 6 Months
              </h2>
              <p className="text-secondary mx-auto small" style={{ maxWidth: '750px', lineHeight: 1.7 }}>
                Achieved over 50+ successful Android app deployments and active closed testing cycles within just 6 months of launching our specialized Play Store publishing infrastructure—supporting founders across India, USA, Turkey, UAE, and Europe.
              </p>

              {/* Stats Highlights Bar */}
              <div className="d-flex flex-wrap justify-content-center gap-2 mt-3 showcase-stats-bar">
                <span className="badge bg-light text-dark border px-3 py-2" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                  <i className="fa-solid fa-rocket text-primary me-1"></i> 50+ Apps in 6 Months
                </span>
                <span className="badge bg-light text-dark border px-3 py-2" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                  <i className="fa-solid fa-circle-check text-success me-1"></i> 100% Closed Testing Pass Rate
                </span>
                <span className="badge bg-light text-dark border px-3 py-2" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                  <i className="fa-solid fa-clock-rotate-left text-warning me-1"></i> Dozens in Active Testing & Review
                </span>
                <span className="badge bg-light text-dark border px-3 py-2" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                  <i className="fa-solid fa-earth-americas text-info me-1"></i> Global Coverage (US, TR, AE, IN)
                </span>
              </div>
            </div>

            {/* Mobile NDA Notice: Slim 1-line bar */}
            <div className="d-block d-md-none py-1 px-2 mb-2 rounded-2 border bg-light" style={{ borderLeft: '3px solid #2563eb' }}>
              <div className="d-flex align-items-center gap-1">
                <i className="fa-solid fa-user-shield text-primary flex-shrink-0" style={{ fontSize: '0.75rem' }}></i>
                <div className="text-secondary" style={{ fontSize: '0.68rem', lineHeight: 1.25 }}>
                  <strong className="text-dark">Strict NDA:</strong> Client apps are confidential. Select authorized reference apps from 50+ deployments shown below.
                </div>
              </div>
            </div>

            {/* Desktop NDA Notice: Detailed */}
            <div className="d-none d-md-block p-3 mb-4 rounded-3 border" style={{ background: '#f8fafc', borderLeft: '4px solid #2563eb' }}>
              <div className="d-flex align-items-start gap-2">
                <i className="fa-solid fa-user-shield text-primary mt-1" style={{ fontSize: '1.1rem' }}></i>
                <div className="small text-secondary" style={{ lineHeight: 1.6 }}>
                  <strong className="text-dark">Strict Client Confidentiality & NDA Policy:</strong> We uphold enterprise-level privacy. Under formal Non-Disclosure Agreements (NDAs), we do not publicly display client apps without written authorization. Beyond the 50+ deployed apps, numerous proprietary applications are actively undergoing Google Play 12-tester closed testing and review. Below are select authorized projects representing our active console management.
                </div>
              </div>
            </div>

            {/* Desktop View: Keep 4-column card grid */}
            <div className="d-none d-md-block">
              <div className="row g-4">
                {/* App 1: künh */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="bg-white p-3 p-md-4 rounded-4 border border-1 h-100 shadow-sm position-relative d-flex flex-column" style={{ borderTop: '4px solid #2563eb' }}>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '1.1rem' }}>
                        k̈.
                      </div>
                      <span className="badge bg-success text-white px-2 py-1" style={{ fontSize: '0.68rem', fontWeight: 700 }}>
                        <i className="fa-solid fa-circle-check me-1"></i> Production Access Granted
                      </span>
                    </div>
                    <h4 className="gplay-title mb-1" style={{ fontSize: '1.1rem', fontWeight: 800 }}>künh</h4>
                    <div className="mb-2">
                      <code style={{ fontSize: '0.72rem', color: '#64748b', background: '#f1f5f9', padding: '2px 5px', borderRadius: '4px' }}>tech.kunh.app</code>
                    </div>
                    <div className="mb-2">
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, background: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe', borderRadius: '6px', padding: '3px 8px', display: 'inline-block' }}>
                        Client App • Turkey / Global
                      </span>
                    </div>
                    <p className="text-secondary small mb-3" style={{ fontSize: '0.8rem', lineHeight: 1.5, flexGrow: 1 }}>
                      Completed 12-tester closed testing with continuous 14-day engagement. Granted 100% Google Play Production Access with zero policy rejections. Founders ecstatic!
                    </p>
                    <div className="pt-2 border-top text-muted small" style={{ fontSize: '0.72rem' }}>
                      <i className="fa-solid fa-bolt text-warning me-1"></i> 14-Day Streak Passed • 0 Rejections
                    </div>
                  </div>
                </div>

                {/* App 2: Reward Club */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="bg-white p-3 p-md-4 rounded-4 border border-1 h-100 shadow-sm position-relative d-flex flex-column" style={{ borderTop: '4px solid #6366f1' }}>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'linear-gradient(135deg, #10b981, #047857)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.1rem' }}>
                        <i className="fa-solid fa-gift"></i>
                      </div>
                      <span className="badge bg-primary text-white px-2 py-1" style={{ fontSize: '0.68rem', fontWeight: 700 }}>
                        <i className="fa-solid fa-spinner fa-spin me-1"></i> Active Closed Testing
                      </span>
                    </div>
                    <h4 className="gplay-title mb-1" style={{ fontSize: '1.1rem', fontWeight: 800 }}>Reward Club</h4>
                    <div className="mb-2">
                      <code style={{ fontSize: '0.72rem', color: '#64748b', background: '#f1f5f9', padding: '2px 5px', borderRadius: '4px' }}>com.rewardclub.app</code>
                    </div>
                    <div className="mb-2">
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, background: '#e0e7ff', color: '#3730a3', border: '1px solid #c7d2fe', borderRadius: '6px', padding: '3px 8px', display: 'inline-block' }}>
                        In-House App • Built & Managed by ChittorTech
                      </span>
                    </div>
                    <p className="text-secondary small mb-3" style={{ fontSize: '0.8rem', lineHeight: 1.5, flexGrow: 1 }}>
                      Full-scale rewards and loyalty application built and managed in active closed testing by ChittorTech. 15+ acquired active testers maintaining continuous engagement on real devices.
                    </p>
                    <div className="pt-2 border-top text-muted small" style={{ fontSize: '0.72rem' }}>
                      <i className="fa-solid fa-users text-primary me-1"></i> 15 Testers Engaged • In Testing Track
                    </div>
                  </div>
                </div>

                {/* App 3: Visit Chittorgarh */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="bg-white p-3 p-md-4 rounded-4 border border-1 h-100 shadow-sm position-relative d-flex flex-column" style={{ borderTop: '4px solid #10b981' }}>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'linear-gradient(135deg, #f59e0b, #d97706)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.1rem' }}>
                        <i className="fa-solid fa-monument"></i>
                      </div>
                      <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1" style={{ fontSize: '0.68rem', fontWeight: 700 }}>
                        <i className="fa-solid fa-circle-check me-1"></i> Live on Play Store
                      </span>
                    </div>
                    <h4 className="gplay-title mb-1" style={{ fontSize: '1.1rem', fontWeight: 800 }}>Visit Chittorgarh</h4>
                    <div className="mb-2">
                      <code style={{ fontSize: '0.72rem', color: '#64748b', background: '#f1f5f9', padding: '2px 5px', borderRadius: '4px' }}>com.kushsharma.visitchittorgarh</code>
                    </div>
                    <div className="mb-2">
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, background: '#ecfdf5', color: '#065f46', border: '1px solid #a7f3d0', borderRadius: '6px', padding: '3px 8px', display: 'inline-block' }}>
                        Client App • Tourism & Travel Guide
                      </span>
                    </div>
                    <p className="text-secondary small mb-3" style={{ fontSize: '0.8rem', lineHeight: 1.5, flexGrow: 1 }}>
                      Dedicated tourism portal app published, maintained, and optimized on Google Play Store via ChittorTech's verified publishing infrastructure.
                    </p>
                    <div className="pt-2 border-top text-muted small" style={{ fontSize: '0.72rem' }}>
                      <i className="fa-solid fa-shield-halved text-success me-1"></i> Live Production Track • Active
                    </div>
                  </div>
                </div>

                {/* App 4: Mewari Achaar */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="bg-white p-3 p-md-4 rounded-4 border border-1 h-100 shadow-sm position-relative d-flex flex-column" style={{ borderTop: '4px solid #f97316' }}>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'linear-gradient(135deg, #ef4444, #b91c1c)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.1rem' }}>
                        <i className="fa-solid fa-jar"></i>
                      </div>
                      <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1" style={{ fontSize: '0.68rem', fontWeight: 700 }}>
                        <i className="fa-solid fa-circle-check me-1"></i> Live on Play Store
                      </span>
                    </div>
                    <h4 className="gplay-title mb-1" style={{ fontSize: '1.1rem', fontWeight: 800 }}>Mewari Achaar</h4>
                    <div className="mb-2">
                      <code style={{ fontSize: '0.72rem', color: '#64748b', background: '#f1f5f9', padding: '2px 5px', borderRadius: '4px' }}>com.mewari.achaar</code>
                    </div>
                    <div className="mb-2">
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, background: '#fff7ed', color: '#c2410c', border: '1px solid #fed7aa', borderRadius: '6px', padding: '3px 8px', display: 'inline-block' }}>
                        In-House Brand • Built & Published by ChittorTech
                      </span>
                    </div>
                    <p className="text-secondary small mb-3" style={{ fontSize: '0.8rem', lineHeight: 1.5, flexGrow: 1 }}>
                      Full-featured e-commerce and retail Android application designed, engineered, and published directly by ChittorTech with real-time tracking.
                    </p>
                    <div className="pt-2 border-top text-muted small" style={{ fontSize: '0.72rem' }}>
                      <i className="fa-solid fa-code text-primary me-1"></i> Full-Stack Built & Published by ChittorTech
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile View: Clean, compact, responsive list cards */}
            <div className="d-block d-md-none">
              <div className="d-flex flex-column gap-3">
                {/* App 1: künh */}
                <div className="bg-white p-3 rounded-4 border border-1 shadow-sm" style={{ borderLeft: '4px solid #2563eb', overflow: 'hidden' }}>
                  <div className="d-flex align-items-center justify-content-between gap-2 mb-2 pb-2 border-bottom">
                    <div className="d-flex align-items-center gap-2" style={{ minWidth: 0 }}>
                      <div style={{ width: '32px', height: '32px', minWidth: '32px', borderRadius: '8px', background: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.9rem' }}>
                        k̈.
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <h6 className="mb-0 fw-bold text-dark text-truncate" style={{ fontSize: '0.95rem', lineHeight: 1.2 }}>künh</h6>
                        <div className="text-muted text-truncate" style={{ fontSize: '0.68rem' }}>Turkey • Client App</div>
                      </div>
                    </div>
                    <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1 flex-shrink-0" style={{ fontSize: '0.65rem', fontWeight: 700 }}>
                      <i className="fa-solid fa-circle-check me-1"></i> Approved
                    </span>
                  </div>

                  <div className="mb-2" style={{ wordBreak: 'break-all' }}>
                    <code style={{ fontSize: '0.68rem', color: '#64748b', background: '#f1f5f9', padding: '2px 6px', borderRadius: '4px', display: 'inline-block' }}>
                      tech.kunh.app
                    </code>
                  </div>

                  <div className="d-flex flex-wrap gap-1 mb-2">
                    <span className="badge bg-light text-dark border fw-normal" style={{ fontSize: '0.65rem' }}>
                      <i className="fa-solid fa-bolt text-warning me-1"></i> 14-Day Streak Passed
                    </span>
                    <span className="badge bg-light text-dark border fw-normal" style={{ fontSize: '0.65rem' }}>
                      0 Rejections
                    </span>
                  </div>

                  <p className="text-secondary small mb-0" style={{ fontSize: '0.78rem', lineHeight: 1.45 }}>
                    Completed 12-tester closed testing with continuous 14-day engagement. Granted 100% Google Play Production Access.
                  </p>
                </div>

                {/* App 2: Reward Club */}
                <div className="bg-white p-3 rounded-4 border border-1 shadow-sm" style={{ borderLeft: '4px solid #6366f1', overflow: 'hidden' }}>
                  <div className="d-flex align-items-center justify-content-between gap-2 mb-2 pb-2 border-bottom">
                    <div className="d-flex align-items-center gap-2" style={{ minWidth: 0 }}>
                      <div style={{ width: '32px', height: '32px', minWidth: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #10b981, #047857)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.85rem' }}>
                        <i className="fa-solid fa-gift"></i>
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <h6 className="mb-0 fw-bold text-dark text-truncate" style={{ fontSize: '0.95rem', lineHeight: 1.2 }}>Reward Club</h6>
                        <div className="text-muted text-truncate" style={{ fontSize: '0.68rem' }}>In-House App</div>
                      </div>
                    </div>
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-2 py-1 flex-shrink-0" style={{ fontSize: '0.65rem', fontWeight: 700 }}>
                      <i className="fa-solid fa-spinner fa-spin me-1"></i> Testing Active
                    </span>
                  </div>

                  <div className="mb-2" style={{ wordBreak: 'break-all' }}>
                    <code style={{ fontSize: '0.68rem', color: '#64748b', background: '#f1f5f9', padding: '2px 6px', borderRadius: '4px', display: 'inline-block' }}>
                      com.rewardclub.app
                    </code>
                  </div>

                  <div className="d-flex flex-wrap gap-1 mb-2">
                    <span className="badge bg-light text-dark border fw-normal" style={{ fontSize: '0.65rem' }}>
                      <i className="fa-solid fa-users text-primary me-1"></i> 15 Active Testers
                    </span>
                    <span className="badge bg-light text-dark border fw-normal" style={{ fontSize: '0.65rem' }}>
                      Real Devices
                    </span>
                  </div>

                  <p className="text-secondary small mb-0" style={{ fontSize: '0.78rem', lineHeight: 1.45 }}>
                    Full-scale loyalty & rewards app active in Google Play closed testing track with continuous daily telemetry.
                  </p>
                </div>

                {/* App 3: Visit Chittorgarh */}
                <div className="bg-white p-3 rounded-4 border border-1 shadow-sm" style={{ borderLeft: '4px solid #10b981', overflow: 'hidden' }}>
                  <div className="d-flex align-items-center justify-content-between gap-2 mb-2 pb-2 border-bottom">
                    <div className="d-flex align-items-center gap-2" style={{ minWidth: 0 }}>
                      <div style={{ width: '32px', height: '32px', minWidth: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #f59e0b, #d97706)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.85rem' }}>
                        <i className="fa-solid fa-monument"></i>
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <h6 className="mb-0 fw-bold text-dark text-truncate" style={{ fontSize: '0.95rem', lineHeight: 1.2 }}>Visit Chittorgarh</h6>
                        <div className="text-muted text-truncate" style={{ fontSize: '0.68rem' }}>Tourism • Client App</div>
                      </div>
                    </div>
                    <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1 flex-shrink-0" style={{ fontSize: '0.65rem', fontWeight: 700 }}>
                      <i className="fa-solid fa-circle-check me-1"></i> Live
                    </span>
                  </div>

                  <div className="mb-2" style={{ wordBreak: 'break-all' }}>
                    <code style={{ fontSize: '0.68rem', color: '#64748b', background: '#f1f5f9', padding: '2px 6px', borderRadius: '4px', display: 'inline-block' }}>
                      com.kushsharma.visitchittorgarh
                    </code>
                  </div>

                  <div className="d-flex flex-wrap gap-1 mb-2">
                    <span className="badge bg-light text-dark border fw-normal" style={{ fontSize: '0.65rem' }}>
                      <i className="fa-brands fa-google-play text-success me-1"></i> Production Live
                    </span>
                    <span className="badge bg-light text-dark border fw-normal" style={{ fontSize: '0.65rem' }}>
                      1,000+ Downloads
                    </span>
                  </div>

                  <p className="text-secondary small mb-0" style={{ fontSize: '0.78rem', lineHeight: 1.45 }}>
                    Official heritage tourism portal app published, optimized (ASO), and maintained live on Google Play.
                  </p>
                </div>

                {/* App 4: Mewari Achaar */}
                <div className="bg-white p-3 rounded-4 border border-1 shadow-sm" style={{ borderLeft: '4px solid #f97316', overflow: 'hidden' }}>
                  <div className="d-flex align-items-center justify-content-between gap-2 mb-2 pb-2 border-bottom">
                    <div className="d-flex align-items-center gap-2" style={{ minWidth: 0 }}>
                      <div style={{ width: '32px', height: '32px', minWidth: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #ef4444, #b91c1c)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.85rem' }}>
                        <i className="fa-solid fa-jar"></i>
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <h6 className="mb-0 fw-bold text-dark text-truncate" style={{ fontSize: '0.95rem', lineHeight: 1.2 }}>Mewari Achaar</h6>
                        <div className="text-muted text-truncate" style={{ fontSize: '0.68rem' }}>E-Commerce Brand</div>
                      </div>
                    </div>
                    <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1 flex-shrink-0" style={{ fontSize: '0.65rem', fontWeight: 700 }}>
                      <i className="fa-solid fa-circle-check me-1"></i> Live
                    </span>
                  </div>

                  <div className="mb-2" style={{ wordBreak: 'break-all' }}>
                    <code style={{ fontSize: '0.68rem', color: '#64748b', background: '#f1f5f9', padding: '2px 6px', borderRadius: '4px', display: 'inline-block' }}>
                      com.mewari.achaar
                    </code>
                  </div>

                  <div className="d-flex flex-wrap gap-1 mb-2">
                    <span className="badge bg-light text-dark border fw-normal" style={{ fontSize: '0.65rem' }}>
                      <i className="fa-solid fa-shield text-success me-1"></i> Play Verified
                    </span>
                    <span className="badge bg-light text-dark border fw-normal" style={{ fontSize: '0.65rem' }}>
                      In-House Brand
                    </span>
                  </div>

                  <p className="text-secondary small mb-0" style={{ fontSize: '0.78rem', lineHeight: 1.45 }}>
                    Full-featured e-commerce and retail Android application designed, built, and launched directly by ChittorTech.
                  </p>
                </div>
              </div>
            </div>

            {/* Ownership Disclaimer & WhatsApp CTA */}
            <div className="mt-4 p-3 rounded-3 bg-light border d-flex flex-wrap align-items-center justify-content-between gap-3">
              <div className="d-flex align-items-center gap-2">
                <i className="fa-solid fa-circle-info text-primary"></i>
                <span className="small text-secondary">
                  <strong>Ownership Notice:</strong> Reward Club & Mewari Achaar are engineered and managed in-house by ChittorTech, while künh and Visit Chittorgarh are client applications published and managed through our specialized Play Store infrastructure.
                </span>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=917597451057&text=Hi%20ChittorTech,%20I%20saw%20your%20Google%20Play%20published%20apps%20(k%C3%BCnh,%20Reward%20Club,%20Visit%20Chittorgarh,%20Mewari%20Achaar).%20I%20want%20to%20publish%20my%20app%20too."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gplay-primary"
                style={{ fontSize: '0.85rem', padding: '8px 18px' }}
              >
                <i className="fa-brands fa-whatsapp"></i> Publish Your App Today <i className="fa-solid fa-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
        </section>

        {/* Introduction / Problem Statement */}
        <section className="py-5 gplay-intro-section" style={{ background: '#f8fafc' }}>
          <div className="container py-4">
            <div className="row g-4 align-items-center">
              <div className="col-md-6">
                <div className="gplay-title" style={{ fontSize: '2rem', fontWeight: 800 }}>
                  Publishing on Google Play is <span className="text-danger">harder than ever</span>
                </div>
                <p className="mt-3 text-secondary" style={{ lineHeight: 1.8 }}>
                  Google Play Store has implemented strict verification policies to combat spam and malware. Newly registered individual developer accounts are now locked behind a mandatory 12-tester testing program for 14 continuous days (updated by Google from the older 20-tester requirement). Business verification has also grown complex, requiring D-U-N-S numbers, official business documents, and verified local representatives.
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  At ChittorTech, we eliminate these friction points. Whether you want to publish on your own developer console or leverage our pre-verified corporate publishing accounts, we handle everything from policy check, asset compilation, to submission and review management.
                </p>
              </div>
              <div className="col-md-6">
                <div className="row g-3">
                  {[
                    { title: "12-Tester Rule", desc: "No need to find 12 testers. We fulfill Google's mandatory 14-day closed testing opt-in requirement with real active devices.", icon: "fa-users" },
                    { title: "Compliance Check", desc: "Complete analysis of your APK/AAB package, target SDK version, and privacy policy compliance.", icon: "fa-shield-halved" },
                    { title: "Zero Setup Hassle", desc: "Save registration costs, legal verification, and identity audits using our verified accounts.", icon: "fa-bolt" },
                    { title: "Active Maintenance", desc: "Constant store listing optimization, crash analysis, and update submissions.", icon: "fa-server" }
                  ].map((item, idx) => (
                    <div className="col-sm-6" key={idx}>
                      <div className="bg-white p-4 rounded-3 border border-1 h-100">
                        <i className={`fa-solid ${item.icon} text-primary mb-3`} style={{ fontSize: '1.5rem' }}></i>
                        <h5 className="gplay-title" style={{ fontWeight: '700' }}>{item.title}</h5>
                        <p className="text-muted small mb-0 mt-2">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section id="packages" className="py-5">
          <div className="container py-4">
            <div className="text-center mb-5">
              <span className="text-primary text-uppercase fw-bold" style={{ fontSize: '0.8rem', letterSpacing: '1.5px' }}>Simple Plans</span>
              <h2 className="gplay-title mt-2 mb-3" style={{ fontSize: '2.5rem', fontWeight: 800 }}>Choose Your Publishing Path</h2>
              <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>No hidden charges. Select the publishing route that fits your business model.</p>
            </div>
            <div className="row g-4 mt-2">
              {PACKAGES.map((pkg, idx) => (
                <div className="col-lg-4" key={idx}>
                  <div className={`gplay-card ${pkg.popular ? 'popular' : ''}`}>
                    {pkg.popular && <span className="popular-badge">Most Popular</span>}
                    <h3 className="gplay-title mb-2" style={{ fontSize: '1.5rem', fontWeight: '800' }}>{pkg.title}</h3>
                    <p className="text-muted small mb-3 card-desc">{pkg.desc}</p>
                    <div className="mb-4 pb-2 border-bottom border-light-subtle card-price-box">
                      <div className="d-flex align-items-baseline gap-2">
                        <span className="gplay-title text-primary card-price-inr" style={{ fontSize: '2.3rem', fontWeight: '900' }}>{pkg.priceINR}</span>
                        <span className="badge bg-primary-subtle text-primary border border-primary-subtle" style={{ fontSize: '0.72rem', fontWeight: 700, padding: '4px 8px', borderRadius: '6px' }}>
                          🇮🇳 India
                        </span>
                      </div>
                      <div className="mt-1 d-flex align-items-center gap-1" style={{ fontSize: '0.92rem' }}>
                        <span className="fw-bold text-dark card-price-usd" style={{ fontSize: '1.15rem' }}>{pkg.priceUSD}</span>
                        <span className="text-muted" style={{ fontSize: '0.82rem' }}>• Outside India / International</span>
                      </div>
                    </div>
                    <ul className="list-unstyled mb-3 card-features-list" style={{ flexGrow: 1 }}>
                      {pkg.features.map((f, fIdx) => (
                        <li className="d-flex align-items-start gap-2 mb-2 text-secondary card-feature-item" key={fIdx} style={{ fontSize: '0.88rem' }}>
                          <i className="fa-solid fa-circle-check text-success mt-1" style={{ fontSize: '0.82rem' }}></i>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={`https://api.whatsapp.com/send?phone=917597451057&text=${encodeURIComponent(pkg.whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="w-100 btn-gplay-whatsapp justify-content-center">
                      <i className="fa-brands fa-whatsapp"></i> Get Started
                    </a>
                    <div className="mt-2 pt-2 border-top text-center card-policy-btn" style={{ width: '100%' }}>
                      <button onClick={() => setActivePolicy(pkg.policyType)} className="btn btn-link text-decoration-none p-0 text-danger fw-bold" style={{ fontSize: '0.8rem', border: 'none', background: 'none', cursor: 'pointer' }}>
                        <i className="fa-solid fa-circle-exclamation me-1"></i> View Publishing Policy
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Free 15-Minute APK/AAB Audit Banner (Lead Magnet) */}
            <div className="mt-5 p-4 p-md-5 rounded-4 lead-magnet-audit-box" style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #172554 100%)',
              color: '#ffffff',
              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div className="row align-items-center g-4" style={{ position: 'relative', zIndex: 2 }}>
                <div className="col-lg-8">
                  <span className="badge bg-warning text-dark px-3 py-1 mb-2 fw-bold text-uppercase" style={{ fontSize: '0.72rem', letterSpacing: '1px' }}>
                    ⚡ Free 15-Minute Audit
                  </span>
                  <h3 className="gplay-title mb-2 text-white" style={{ fontSize: '1.75rem', fontWeight: 800 }}>
                    Not Ready to Buy? Get a Free APK/AAB Policy & SDK Pre-Check
                  </h3>
                  <p className="mb-0" style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '650px' }}>
                    Worried about hidden policy violations, Target SDK 34/35 compliance, or dangerous permission rejections? Send your app bundle to our senior Android deployment engineers for an instant WhatsApp audit.
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <a
                    href="https://api.whatsapp.com/send?phone=917597451057&text=Hi%20ChittorTech,%20I%20want%20a%20FREE%2015-Minute%20APK/AAB%20Policy%20%26%20SDK%20Audit%20for%20my%20app."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gplay-whatsapp"
                    style={{ fontSize: '1rem', padding: '14px 28px' }}
                  >
                    <i className="fa-brands fa-whatsapp"></i> Send APK for Free Audit
                  </a>
                  <div className="text-secondary small mt-2" style={{ color: '#94a3b8 !important', fontSize: '0.78rem' }}>
                    100% Confidential • Zero Commitment Required
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publishing Process */}
        <section className="py-5 gplay-process-section" style={{ background: '#f8fafc' }}>
          <div className="container py-4">
            <div className="text-center mb-5">
              <h2 className="gplay-title" style={{ fontSize: '2.2rem', fontWeight: 800 }}>How the Process Works</h2>
              <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>Get your app online in 4 simple steps.</p>
            </div>
            <div className="row g-4">
              {[
                { step: "1", title: "App Submission", desc: "Upload your app bundle (.aab or .apk) along with screenshots, app icon, descriptions, and privacy policy details." },
                { step: "2", title: "Policy & Security Review", desc: "Our testing team audits the application for compliance violations and crashes to guarantee a 100% review pass rate." },
                { step: "3", title: "Testing & Validation", desc: "If running on your console, we spin up our 12-tester network to complete the mandatory 14-day continuous opt-in testing with real devices." },
                { step: "4", title: "App Launch & Live Status", desc: "We submit the app to Google Play Store and monitor it until it is officially approved and live for public download." }
              ].map((step, idx) => (
                <div className="col-md-3" key={idx}>
                  <div className="bg-white p-4 rounded-4 border border-1 h-100">
                    <div className="step-num">{step.step}</div>
                    <h5 className="gplay-title" style={{ fontWeight: '700' }}>{step.title}</h5>
                    <p className="text-muted small mb-0 mt-3" style={{ lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Policy Clause */}
        <section className="py-5 gplay-guidelines-section">
          <div className="container py-4">
            <div className="text-center mb-5">
              <span className="text-danger text-uppercase fw-bold" style={{ fontSize: '0.8rem', letterSpacing: '1.5px' }}>Strict Compliance</span>
              <h2 className="gplay-title mt-2" style={{ fontSize: '2.2rem', fontWeight: 800 }}>App Acceptance Guidelines</h2>
              <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>To protect our verified developer console, we maintain strict quality control.</p>
            </div>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="policy-allowed">
                  <h4 className="gplay-title text-success mb-3"><i className="fa-solid fa-circle-check"></i> What We Publish</h4>
                  <ul className="list-unstyled text-secondary" style={{ lineHeight: 2, fontSize: '0.95rem' }}>
                    <li><i className="fa-solid fa-check-double text-success me-2"></i> E-Commerce Stores & Business Portals</li>
                    <li><i className="fa-solid fa-check-double text-success me-2"></i> Custom ERP & POS Client Portals</li>
                    <li><i className="fa-solid fa-check-double text-success me-2"></i> Utility & Productivity Applications</li>
                    <li><i className="fa-solid fa-check-double text-success me-2"></i> Educational & EdTech Learning Apps</li>
                    <li><i className="fa-solid fa-check-double text-success me-2"></i> Local Service Booking & Hotel Directories</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="policy-blocked">
                  <h4 className="gplay-title text-danger mb-3"><i className="fa-solid fa-circle-xmark"></i> What We Do NOT Publish</h4>
                  <ul className="list-unstyled text-secondary" style={{ lineHeight: 2, fontSize: '0.95rem' }}>
                    <li><i className="fa-solid fa-ban text-danger me-2"></i> Real Money Gambling, Betting & Casinos</li>
                    <li><i className="fa-solid fa-ban text-danger me-2"></i> Unlicensed Short-term Loan / FinTech Apps</li>
                    <li><i className="fa-solid fa-ban text-danger me-2"></i> Plagiarized / 100% Cloned Unofficial Codes</li>
                    <li><i className="fa-solid fa-ban text-danger me-2"></i> Dating, Spam or Malware Applications</li>
                    <li><i className="fa-solid fa-ban text-danger me-2"></i> Copyright Infringing Media Downloaders</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIY vs ChittorTech Managed Comparison */}
        <section className="py-5 gplay-comparison-section" style={{ background: '#ffffff' }}>
          <div className="container py-4">
            <div className="text-center mb-5">
              <span className="text-primary text-uppercase fw-bold" style={{ fontSize: '0.8rem', letterSpacing: '1.5px' }}>Comparison</span>
              <h2 className="gplay-title mt-2 mb-3" style={{ fontSize: '2.2rem', fontWeight: 800 }}>Publishing Yourself vs ChittorTech Managed</h2>
              <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>Why hundreds of independent developers and businesses rely on ChittorTech instead of DIY testing.</p>
            </div>

            {/* Desktop View: Full Comparison Table (Preserved Exactly) */}
            <div className="d-none d-md-block">
              <div className="table-responsive rounded-4 border border-1 shadow-sm">
                <table className="table table-hover align-middle mb-0" style={{ minWidth: '650px' }}>
                  <thead style={{ background: '#f8fafc' }}>
                    <tr>
                      <th className="py-3 px-4 text-secondary text-uppercase" style={{ fontSize: '0.78rem', width: '35%' }}>Feature / Requirement</th>
                      <th className="py-3 px-4 text-center text-muted" style={{ width: '32%', fontSize: '0.9rem' }}>Doing It Yourself (DIY)</th>
                      <th className="py-3 px-4 text-center text-primary fw-bold" style={{ width: '33%', fontSize: '0.95rem', background: 'rgba(37, 99, 235, 0.05)' }}>
                        <i className="fa-brands fa-google-play me-1"></i> ChittorTech Managed
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_ITEMS.map((row, rIdx) => (
                      <tr key={rIdx}>
                        <td className="py-3 px-4 fw-bold text-dark" style={{ fontSize: '0.92rem' }}>{row.feature}</td>
                        <td className="py-3 px-4 text-center text-secondary small">
                          <i className="fa-solid fa-circle-xmark text-danger me-2"></i>
                          {row.diy}
                        </td>
                        <td className="py-3 px-4 text-center fw-semibold text-dark small" style={{ background: 'rgba(37, 99, 235, 0.02)' }}>
                          <i className="fa-solid fa-circle-check text-success me-2"></i>
                          {row.ct}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile View: High-Impact Comparison Cards (Zero Table, Zero Overflow) */}
            <div className="d-block d-md-none">
              <div className="d-flex flex-column gap-3">
                {COMPARISON_ITEMS.map((item, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-4 border border-1 shadow-sm">
                    {/* Feature Title */}
                    <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                      <span className="badge bg-primary text-white rounded-pill px-2 py-1" style={{ fontSize: '0.65rem', fontWeight: 800 }}>
                        #{idx + 1}
                      </span>
                      <h6 className="mb-0 fw-bold text-dark" style={{ fontSize: '0.95rem' }}>
                        {item.feature}
                      </h6>
                    </div>

                    <div className="d-flex flex-column gap-2">
                      {/* DIY Row */}
                      <div className="p-2 px-3 rounded-3" style={{ background: '#fff1f2', border: '1px solid #fecdd3' }}>
                        <div className="d-flex align-items-center gap-1 mb-1 text-danger fw-bold" style={{ fontSize: '0.72rem', letterSpacing: '0.5px' }}>
                          <i className="fa-solid fa-circle-xmark"></i> DOING IT YOURSELF (DIY)
                        </div>
                        <div className="text-secondary small" style={{ fontSize: '0.82rem', lineHeight: 1.4 }}>
                          {item.diy}
                        </div>
                      </div>

                      {/* ChittorTech Managed Row */}
                      <div className="p-2 px-3 rounded-3" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                        <div className="d-flex align-items-center gap-1 mb-1 text-success fw-bold" style={{ fontSize: '0.72rem', letterSpacing: '0.5px' }}>
                          <i className="fa-solid fa-circle-check"></i> CHITTORTECH MANAGED
                        </div>
                        <div className="text-dark fw-semibold small" style={{ fontSize: '0.82rem', lineHeight: 1.4 }}>
                          {item.ct}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-5" style={{ background: '#f8fafc' }}>
          <div className="container py-4">
            <div className="text-center mb-5">
              <h2 className="gplay-title" style={{ fontSize: '2.2rem', fontWeight: 800 }}>Frequently Asked Questions</h2>
              <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>Frequently asked questions about app publishing and accounts.</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="bg-white p-4 rounded-4 border border-1">
                  {FAQS.map((faq, idx) => (
                    <div className="faq-item" key={idx}>
                      <div className="faq-question" onClick={() => toggleFaq(idx)}>
                        <span>{faq.q}</span>
                        <i className={`fa-solid ${activeFaq === idx ? 'fa-chevron-up' : 'fa-chevron-down'} text-primary`}></i>
                      </div>
                      <div className={`faq-answer ${activeFaq === idx ? 'show' : ''}`}>
                        {faq.a}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-5" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #291fbc 60%, #0e7490 100%)', color: '#fff' }}>
          <div className="container py-4 text-center">
            <h2 className="gplay-title gplay-cta-title mb-3" style={{ fontSize: '2.3rem', fontWeight: 800 }}>Get Your Android App on Google Play</h2>
            <p className="mb-4 mx-auto" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '600px' }}>
              Connect with our Google Play Publishing experts today. Let's discuss your application and ensure a seamless launch.
            </p>
            <a href="https://api.whatsapp.com/send?phone=917597451057&text=Hi%20ChittorTech,%20I%20am%20interested%20in%20your%20Google%20Play%20Publishing%20services.%20I%20need%20help%20in%20publishing%20my%20app." target="_blank" rel="noopener noreferrer" className="btn-gplay-whatsapp">
              <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp (+91 7597451057)
            </a>
          </div>
        </section>
      </div>

      {/* Policy Modal Overlay */}
      {activePolicy && POLICY_DETAILS[activePolicy] && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(8px)',
          zIndex: 100000,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '20px',
          overflowY: 'auto'
        }} onClick={() => setActivePolicy(null)}>
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            width: '100%',
            maxWidth: '550px',
            padding: '24px 24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            color: '#1e293b',
            position: 'relative',
            marginTop: '20px',
            marginBottom: '20px'
          }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setActivePolicy(null)} style={{
              position: 'absolute',
              top: '20px', right: '20px',
              border: 'none', background: 'none',
              fontSize: '1.25rem', cursor: 'pointer',
              color: '#64748b'
            }}><i className="fa-solid fa-xmark"></i></button>
            
            <h4 className="gplay-title mb-3" style={{ fontWeight: 800, paddingRight: '45px' }}>
              <i className={`fa-solid ${POLICY_DETAILS[activePolicy].icon} me-1`}></i> {POLICY_DETAILS[activePolicy].title}
            </h4>
            
            <p style={{ fontSize: '0.88rem', lineHeight: '1.5', color: '#475569', marginBottom: '16px' }}>
              {POLICY_DETAILS[activePolicy].intro}
            </p>
            
            <div style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>
              {POLICY_DETAILS[activePolicy].points.map((pt, index) => (
                <div key={index} style={{
                  paddingBottom: '8px',
                  paddingTop: index > 0 ? '8px' : '0px',
                  borderBottom: index < POLICY_DETAILS[activePolicy].points.length - 1 ? '1px solid #f1f5f9' : 'none'
                }}>
                  {pt}
                </div>
              ))}
            </div>
            
            {POLICY_DETAILS[activePolicy].notice && (
              <div style={{
                background: '#fef2f2',
                borderLeft: '4px solid #ef4444',
                padding: '12px',
                borderRadius: '0 8px 8px 0',
                fontSize: '0.82rem',
                lineHeight: '1.5',
                color: '#991b1b',
                marginBottom: '16px',
                fontWeight: 500
              }}>
                <strong>Important Notice:</strong> {POLICY_DETAILS[activePolicy].notice}
              </div>
            )}
            
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '12px 14px',
              marginBottom: '16px',
              fontSize: '0.82rem',
              color: '#475569',
              lineHeight: '1.5'
            }}>
              <div className="d-flex align-items-center gap-2 mb-1 fw-bold text-dark">
                <i className="fa-solid fa-circle-info text-primary"></i>
                <span>Notice Regarding Policies & Updates</span>
              </div>
              <div>
                For the latest updated terms, customized compliance checks, or full publishing documentation, please contact ChittorTech directly.
              </div>
            </div>

            <button 
              type="button" 
              className="btn btn-outline-secondary w-100 fw-bold" 
              onClick={() => setActivePolicy(null)} 
              style={{ borderRadius: '10px', padding: '10px 20px', fontSize: '0.88rem' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
