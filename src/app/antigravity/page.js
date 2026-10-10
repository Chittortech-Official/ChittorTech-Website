"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";

const DRIVE_FOLDER_URL = "https://drive.google.com/drive/folders/1hM0LK9K9Zmq2fBkDvkLJu-EXMwRBIwyO?usp=sharing";

const BATCH_SCRIPT_CODE = `@echo off
:: =======================================================
::  ChittorTech Antigravity Auto-Update Permanent Blocker
::  Official Repository: https://chittortech.in/antigravity
::  Compatibility: Windows 10 & 11 (x64)
:: =======================================================

echo [1/3] Closing running Antigravity IDE instances...
taskkill /f /im "Antigravity IDE.exe" >nul 2>&1

echo [2/3] Neutralizing inno_updater.exe binary...
set "UPDATER=%LOCALAPPDATA%\\Programs\\Antigravity IDE\\tools\\inno_updater.exe"
if exist "%UPDATER%" (
    ren "%UPDATER%" "inno_updater.exe.disabled"
    echo   [SUCCESS] Renamed inno_updater.exe -> inno_updater.exe.disabled
) else (
    echo   [INFO] inno_updater.exe is already disabled or path not found.
)

echo [3/3] Setting update.mode = none in settings.json...
set "SETTINGS_DIR=%APPDATA%\\Antigravity IDE\\User"
if not exist "%SETTINGS_DIR%" mkdir "%SETTINGS_DIR%"
set "SETTINGS_FILE=%SETTINGS_DIR%\\settings.json"

powershell -Command "$p = '%SETTINGS_FILE%'; if (Test-Path $p) { try { $c = Get-Content $p -Raw | ConvertFrom-Json } catch { $c = [PSCustomObject]@{} } } else { $c = [PSCustomObject]@{} }; $c | Add-Member -Force -NotePropertyName 'update.mode' -NotePropertyValue 'none'; $c | Add-Member -Force -NotePropertyName 'update.enableWindowsBackgroundUpdates' -NotePropertyValue $false; $c | Add-Member -Force -NotePropertyName 'update.showReleaseNotes' -NotePropertyValue $false; $c | Add-Member -Force -NotePropertyName 'extensions.autoUpdate' -NotePropertyValue $false; $c | ConvertTo-Json -Depth 10 | Set-Content $p"

echo Clearing update staging cache...
set "STAGING=%LOCALAPPDATA%\\antigravity\\staging"
if exist "%STAGING%" rmdir /s /q "%STAGING%"

echo.
echo =======================================================
echo  SUCCESS: Antigravity IDE is 100% Permanently Shielded!
echo  You can now safely reconnect to Wi-Fi.
echo =======================================================
pause`;

const POWERSHELL_CODE = `# =======================================================
#  ChittorTech Antigravity Blocker (PowerShell Native)
#  Official Repository: https://chittortech.in/antigravity
# =======================================================

Write-Host "Closing running Antigravity IDE instances..." -ForegroundColor Cyan
Get-Process -Name "Antigravity IDE" -ErrorAction SilentlyContinue | Stop-Process -Force

Write-Host "Disabling inno_updater.exe binary..." -ForegroundColor Cyan
$updater = "$env:LOCALAPPDATA\\Programs\\Antigravity IDE\\tools\\inno_updater.exe"
if (Test-Path $updater) {
    Rename-Item -Path $updater -NewName "inno_updater.exe.disabled" -Force
    Write-Host "  [OK] inno_updater.exe disabled successfully." -ForegroundColor Green
}

Write-Host "Writing update.mode = none into settings.json..." -ForegroundColor Cyan
$settingsDir = "$env:APPDATA\\Antigravity IDE\\User"
if (!(Test-Path $settingsDir)) { New-Item -ItemType Directory -Path $settingsDir -Force }
$settingsPath = "$settingsDir\\settings.json"
$config = if (Test-Path $settingsPath) { Get-Content $settingsPath -Raw | ConvertFrom-Json } else { [PSCustomObject]@{} }
$config | Add-Member -Force -NotePropertyName "update.mode" -NotePropertyValue "none"
$config | Add-Member -Force -NotePropertyName "update.enableWindowsBackgroundUpdates" -NotePropertyValue $false
$config | Add-Member -Force -NotePropertyName "extensions.autoUpdate" -NotePropertyValue $false
$config | ConvertTo-Json -Depth 10 | Set-Content $settingsPath

Write-Host "Purging staging cache..." -ForegroundColor Cyan
$staging = "$env:LOCALAPPDATA\\antigravity\\staging"
if (Test-Path $staging) { Remove-Item -Recurse -Force $staging }

Write-Host "SUCCESS: Antigravity IDE is permanently locked!" -ForegroundColor Green`;

export default function AntigravityWorldClassResponsive() {
  const [copied, setCopied] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState("bat");
  const [openFaq, setOpenFaq] = useState(0);
  const [faqSearch, setFaqSearch] = useState("");

  // Interactive Checklist State
  const [checkedSteps, setCheckedSteps] = useState([true, false, false, false, false]);

  const toggleCheckStep = (index) => {
    setCheckedSteps((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const completedCount = checkedSteps.filter(Boolean).length;
  const progressPercent = Math.round((completedCount / 5) * 100);

  // Terminal Simulator State
  const [terminalRunning, setTerminalRunning] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([
    "C:\\Users\\Developer> Disable-Antigravity-Updates.bat",
    "=======================================================",
    "  ChittorTech Antigravity Auto-Update Permanent Blocker",
    "  Official Repository: https://chittortech.in/antigravity",
    "=======================================================",
    "[1/3] Closing running Antigravity IDE instances... [DONE]",
    "[2/3] Renaming inno_updater.exe -> inno_updater.exe.disabled... [SUCCESS]",
    "      Binary updater disabled at Windows OS file level.",
    "[3/3] Setting update.mode = none in settings.json... [SUCCESS]",
    "      Clearing %LOCALAPPDATA%\\antigravity\\staging cache... [PURGED]",
    "",
    "=======================================================",
    "SUCCESS: Antigravity IDE is 100% Permanently Shielded!",
    "Press any key to continue . . ."
  ]);

  const runTerminalSimulation = () => {
    setTerminalRunning(true);
    setTerminalLogs(["C:\\Users\\Developer> Disable-Antigravity-Updates.bat"]);

    const scriptOutput = [
      "=======================================================",
      "  ChittorTech Antigravity Auto-Update Permanent Blocker",
      "  Official Repository: https://chittortech.in/antigravity",
      "=======================================================",
      "[1/3] Closing running Antigravity IDE instances... [DONE]",
      "[2/3] Renaming inno_updater.exe -> inno_updater.exe.disabled... [SUCCESS]",
      "      Binary updater disabled at Windows OS file level.",
      "[3/3] Setting update.mode = none in settings.json... [SUCCESS]",
      "      Clearing %LOCALAPPDATA%\\antigravity\\staging cache... [PURGED]",
      "",
      "=======================================================",
      "SUCCESS: Antigravity IDE is 100% Permanently Shielded!",
      "Press any key to continue . . ."
    ];

    scriptOutput.forEach((line, i) => {
      setTimeout(() => {
        setTerminalLogs((prev) => [...prev, line]);
        if (i === scriptOutput.length - 1) {
          setTerminalRunning(false);
        }
      }, (i + 1) * 160);
    });
  };

  const handleCopyCode = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const trackDownload = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "antigravity_installer_download", {
        event_category: "Downloads",
        event_label: "Antigravity Google Drive Package",
      });
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const allFaqs = [
    {
      q: "Why does Antigravity IDE update automatically even with update.mode: none?",
      a: "Antigravity IDE runs a separate background binary called inno_updater.exe located in its tools folder. When settings.json is set to none, it only disables in-editor update notification popups. Background update daemons still download setup fragments into %LOCALAPPDATA%\\antigravity\\staging and execute inno_updater.exe upon app relaunch. Renaming inno_updater.exe to inno_updater.exe.disabled creates an unbreakable binary-level lock that stops Windows from executing any updates.",
      tags: ["update", "settings", "inno_updater", "background"]
    },
    {
      q: "What is the key difference between Antigravity IDE and Antigravity 2.0?",
      a: "Antigravity IDE is the full VS Code-based code editor with a dark theme, integrated terminal, autocomplete, and in-editor AI pair programming. Antigravity 2.0 is a companion desktop app with a white canvas UI. Many developers prefer the familiar, dark IDE for everyday coding.",
      tags: ["2.0", "white", "difference", "theme"]
    },
    {
      q: "What if Windows keeps saving the script as a .txt file?",
      a: "Windows has 'Hide extensions for known file types' turned on by default. Open the file in Notepad, click File -> Save As, set 'Save as type' to 'All Files (*.*)', and type the file name as Disable.bat. Click Save and you will have a genuine runnable batch file.",
      tags: ["txt", "bat", "windows", "notepad"]
    },
    {
      q: "Why didn't Antigravity launch on the first double-click after installation?",
      a: "Because the installer was run while offline, background installer clean-up tasks can take a few seconds to release temporary file locks. A quick restart of your laptop immediately terminates any lingering processes and registers the shortcut properly.",
      tags: ["open", "launch", "restart", "offline"]
    },
    {
      q: "Will this guide work on Windows 11 and Windows 10?",
      a: "Yes, 100%. The package contains the official 64-bit Windows release (antigravity-stable-user-x64), and our batch script uses standard environment variables (%LOCALAPPDATA% and %APPDATA%) that work on any Windows PC.",
      tags: ["windows 11", "windows 10", "compatibility"]
    },
    {
      q: "Can I update Antigravity in the future if I ever want to?",
      a: "Yes! Simply navigate to %LOCALAPPDATA%\\Programs\\Antigravity IDE\\tools, rename inno_updater.exe.disabled back to inno_updater.exe, and restore 'update.mode' in settings.json.",
      tags: ["future", "revert", "restore", "update"]
    }
  ];

  const filteredFaqs = useMemo(() => {
    if (!faqSearch.trim()) return allFaqs;
    const s = faqSearch.toLowerCase();
    return allFaqs.filter(
      (f) =>
        f.q.toLowerCase().includes(s) ||
        f.a.toLowerCase().includes(s) ||
        f.tags.some((t) => t.includes(s))
    );
  }, [faqSearch]);

  return (
    <div className="ag-master-wrapper">
      <style>{`
        /* ── Zero-Overflow Responsive Resets ── */
        * {
          box-sizing: border-box;
          max-width: 100%;
        }

        .ag-master-wrapper {
          background-color: #0b0f19;
          background-image: 
            radial-gradient(circle at 50% 0%, rgba(41, 31, 188, 0.25) 0%, transparent 60%),
            linear-gradient(180deg, #0b0f19 0%, #111827 50%, #0b0f19 100%);
          color: #f8fafc;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden !important;
          padding-bottom: 120px; /* Space for floating buttons */
        }

        .main-container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 16px;
          position: relative;
          z-index: 1;
        }

        /* Breadcrumb Bar */
        .nav-crumbs {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
          padding: 16px 0 10px;
          font-size: 0.8rem;
          color: #94a3b8;
          line-height: 1.4;
        }
        .nav-crumbs a {
          color: #cbd5e1;
          text-decoration: none;
        }
        .nav-crumbs a:hover {
          color: #38bdf8;
        }

        /* Hero */
        .hero-banner {
          padding: 30px 0 25px;
          text-align: center;
        }
        .announcement-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid rgba(99, 102, 241, 0.35);
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #c7d2fe;
          margin-bottom: 18px;
          max-width: 100%;
          word-break: break-word;
        }
        .pulse-emerald {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 10px #10b981;
          flex-shrink: 0;
        }

        .hero-headline {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.6rem, 5.5vw, 3.6rem);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          word-break: break-word;
          background: linear-gradient(135deg, #ffffff 30%, #c7d2fe 70%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-paragraph {
          font-size: clamp(0.95rem, 2vw, 1.2rem);
          color: #94a3b8;
          max-width: 780px;
          margin: 0 auto 28px;
          line-height: 1.6;
          word-break: break-word;
        }

        /* Trust Badges Strip */
        .trust-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 35px;
        }
        .trust-badge-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(148, 163, 184, 0.15);
          padding: 6px 12px;
          border-radius: 10px;
          font-size: 0.78rem;
          color: #cbd5e1;
          font-weight: 600;
        }

        /* Download Center Card */
        .download-center-card {
          background: linear-gradient(180deg, rgba(30, 41, 59, 0.75) 0%, rgba(15, 23, 42, 0.9) 100%);
          border: 1px solid rgba(99, 102, 241, 0.35);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(99, 102, 241, 0.15);
          backdrop-filter: blur(16px);
          margin-bottom: 45px;
        }
        .download-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 24px;
          align-items: center;
        }
        @media (max-width: 800px) {
          .download-grid { grid-template-columns: 1fr; }
          .download-center-card { padding: 18px 14px; }
        }

        .dc-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.3rem, 4vw, 1.8rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 8px;
          word-break: break-word;
        }
        .file-tile-row {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: 18px 0 24px;
        }
        .file-tile {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(148, 163, 184, 0.18);
          border-radius: 12px;
          padding: 12px 14px;
          flex-wrap: wrap;
          gap: 10px;
        }
        .file-info-group {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
          flex: 1;
        }
        .file-name-text {
          font-family: 'Consolas', monospace;
          font-weight: 700;
          color: #f8fafc;
          font-size: 0.85rem;
          word-break: break-all;
        }
        .file-badge-pill {
          background: rgba(99, 102, 241, 0.2);
          color: #a5b4fc;
          padding: 4px 8px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 0.78rem;
          flex-shrink: 0;
        }

        .btn-prime-download {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 16px 20px;
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          color: #ffffff;
          border-radius: 12px;
          font-weight: 800;
          font-size: clamp(0.95rem, 3vw, 1.1rem);
          text-decoration: none;
          text-align: center;
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.25s ease;
          word-break: break-word;
        }
        .btn-prime-download:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 45px rgba(99, 102, 241, 0.7);
          color: #ffffff;
        }

        /* Metrics grid */
        .metrics-grid-2x2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .metric-card-inner {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(148, 163, 184, 0.12);
          border-radius: 14px;
          padding: 14px;
          text-align: center;
        }

        /* 5-Step Interactive Roadmap */
        .roadmap-card {
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(99, 102, 241, 0.25);
          border-radius: 20px;
          padding: 24px 18px;
          margin-bottom: 45px;
        }
        .progress-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 10px;
        }
        .progress-track {
          width: 100%;
          height: 8px;
          background: rgba(148, 163, 184, 0.15);
          border-radius: 9999px;
          overflow: hidden;
          margin-bottom: 24px;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #6366f1, #10b981);
          border-radius: 9999px;
          transition: width 0.4s ease;
        }

        .steps-stack {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .step-interactive-box {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(148, 163, 184, 0.15);
          border-radius: 14px;
          padding: 16px;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .step-interactive-box:hover {
          border-color: rgba(99, 102, 241, 0.4);
        }
        .step-interactive-box.done {
          border-color: rgba(16, 185, 129, 0.45);
          background: rgba(16, 185, 129, 0.06);
        }
        .step-circle-badge {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 2px solid #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          flex-shrink: 0;
        }
        .step-interactive-box.done .step-circle-badge {
          border-color: #10b981;
          background: #10b981;
          color: #ffffff;
        }

        /* Terminal Simulator */
        .term-card {
          background: #070a12;
          border: 1px solid rgba(99, 102, 241, 0.35);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
          margin-bottom: 45px;
        }
        .term-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: #111827;
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
          flex-wrap: wrap;
          gap: 10px;
        }
        .term-screen {
          padding: 16px;
          background: #030712;
          font-family: 'Consolas', monospace;
          font-size: 0.82rem;
          line-height: 1.55;
          min-height: 220px;
          max-height: 340px;
          overflow-y: auto;
          overflow-x: auto;
          color: #38bdf8;
          word-break: break-all;
        }

        /* Comparison Matrix / Mobile Cards */
        .matrix-wrap {
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(148, 163, 184, 0.15);
          border-radius: 20px;
          padding: 20px 16px;
          margin-bottom: 45px;
        }
        .matrix-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 650px) {
          .matrix-cards-grid { grid-template-columns: 1fr; }
        }
        .spec-box {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(148, 163, 184, 0.12);
          border-radius: 14px;
          padding: 16px;
        }
        .spec-box.highlight {
          border-color: rgba(99, 102, 241, 0.4);
          background: rgba(99, 102, 241, 0.05);
        }

        /* Script Hub */
        .script-hub-card {
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 45px;
        }
        .script-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: rgba(30, 41, 59, 0.6);
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
          flex-wrap: wrap;
          gap: 8px;
        }

        /* FAQ Accordion */
        .faq-item-card {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(148, 163, 184, 0.12);
          border-radius: 14px;
          margin-bottom: 12px;
          overflow: hidden;
        }
        .faq-btn {
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
          padding: 16px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #ffffff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(0.95rem, 3vw, 1.05rem);
          font-weight: 700;
          cursor: pointer;
          gap: 10px;
        }
        .faq-body {
          padding: 0 18px 16px;
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.6;
          word-break: break-word;
        }

        /* Bottom Grand Banner */
        .bottom-grand-banner {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(168, 85, 247, 0.2) 100%);
          border: 1px solid rgba(99, 102, 241, 0.4);
          border-radius: 22px;
          padding: 36px 18px;
          text-align: center;
          margin-bottom: 40px;
        }
      `}</style>

      <div className="main-container">
        {/* BREADCRUMB BAR */}
        <div className="nav-crumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span style={{ color: "#94a3b8" }}>Tools</span>
          <span>/</span>
          <span style={{ color: "#818cf8" }}>Antigravity IDE</span>
        </div>

        {/* HERO BANNER */}
        <div className="hero-banner">
          <div className="announcement-chip">
            <span className="pulse-emerald" />
            <span>Developer Verified &bull; Official Fix (Sept 2026)</span>
          </div>

          <h1 className="hero-headline">
            Google Antigravity IDE: <br />
            Download Stable Build & Permanently Block Auto-Updates
          </h1>

          <p className="hero-paragraph">
            The definitive developer guide to running Google Antigravity IDE on Windows. 
            Shield your code editor from unwanted background updaters and preserve your dark, distraction-free VS Code workspace forever.
          </p>

          <div className="trust-strip">
            <div className="trust-badge-item">
              <i className="fa-solid fa-shield-halved" style={{ color: "#34d399" }} />
              <span>VirusTotal Clean (0/72)</span>
            </div>
            <div className="trust-badge-item">
              <i className="fa-brands fa-windows" style={{ color: "#38bdf8" }} />
              <span>Win 10 & 11 (64-Bit)</span>
            </div>
            <div className="trust-badge-item">
              <i className="fa-solid fa-lock" style={{ color: "#a855f7" }} />
              <span>100% Binary Level Lock</span>
            </div>
          </div>
        </div>

        {/* DOWNLOAD CENTER CARD */}
        <div className="download-center-card">
          <div className="download-grid">
            <div>
              <div className="dc-title">
                <i className="fa-brands fa-google text-primary me-2" />
                Verified Antigravity IDE Package
              </div>
              <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Download the official, clean 64-bit installer along with the ChittorTech 1-click update shield script.
              </p>

              <div className="file-tile-row">
                <div className="file-tile">
                  <div className="file-info-group">
                    <div style={{ width: "34px", height: "34px", borderRadius: "8px", background: "rgba(59, 130, 246, 0.15)", color: "#60a5fa", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <i className="fa-solid fa-box-archive" />
                    </div>
                    <div>
                      <div className="file-name-text">AntigravitySetup-stable.exe</div>
                      <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Official InnoSetup User Installer (x64)</div>
                    </div>
                  </div>
                  <span className="file-badge-pill">217.2 MB</span>
                </div>

                <div className="file-tile">
                  <div className="file-info-group">
                    <div style={{ width: "34px", height: "34px", borderRadius: "8px", background: "rgba(16, 185, 129, 0.15)", color: "#34d399", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <i className="fa-solid fa-terminal" />
                    </div>
                    <div>
                      <div className="file-name-text">Disable-Antigravity-Updates.bat</div>
                      <div style={{ fontSize: "0.75rem", color: "#64748b" }}>1-Click Automated Binary Lock Script</div>
                    </div>
                  </div>
                  <span className="file-badge-pill" style={{ background: "rgba(16, 185, 129, 0.2)", color: "#34d399" }}>2.0 KB</span>
                </div>
              </div>

              <a
                href={DRIVE_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackDownload}
                className="btn-prime-download"
              >
                <i className="fa-solid fa-cloud-arrow-down" />
                Download Package (Google Drive)
              </a>
            </div>

            {/* Metrics */}
            <div>
              <div className="metrics-grid-2x2">
                <div className="metric-card-inner">
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#38bdf8" }}>100%</div>
                  <div style={{ fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase", marginTop: "2px" }}>Lock Success</div>
                </div>
                <div className="metric-card-inner">
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#34d399" }}>x64</div>
                  <div style={{ fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase", marginTop: "2px" }}>Win 10 & 11</div>
                </div>
                <div className="metric-card-inner">
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#a855f7" }}>Dark</div>
                  <div style={{ fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase", marginTop: "2px" }}>Native Theme</div>
                </div>
                <div className="metric-card-inner">
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#f59e0b" }}>~2 Min</div>
                  <div style={{ fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase", marginTop: "2px" }}>Setup Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-STEP INTERACTIVE ROADMAP */}
        <div className="roadmap-card">
          <div className="progress-header">
            <div>
              <div style={{ color: "#818cf8", fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>Interactive Checklist</div>
              <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 1.6rem)", fontWeight: 800, color: "#ffffff", margin: "4px 0 0" }}>
                The 5-Step Offline Installation Formula
              </h2>
            </div>
            <div style={{ background: "rgba(99, 102, 241, 0.15)", border: "1px solid rgba(99, 102, 241, 0.3)", borderRadius: "10px", padding: "6px 12px", color: "#c7d2fe", fontWeight: 700, fontSize: "0.85rem" }}>
              Progress: {completedCount}/5 ({progressPercent}%)
            </div>
          </div>

          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>

          <div className="steps-stack">
            {[
              {
                num: 1,
                title: "1. Download Package",
                desc: "Download AntigravitySetup-stable.exe and Disable-Antigravity-Updates.bat onto your laptop via our Google Drive repository.",
              },
              {
                num: 2,
                title: "2. Turn OFF Wi-Fi (Airplane Mode)",
                desc: "Disconnect all internet connections before running the installer so it cannot check online servers during setup.",
                warn: "Critical: Do not install while connected to Wi-Fi!"
              },
              {
                num: 3,
                title: "3. Install While Offline",
                desc: "Run AntigravitySetup-stable.exe. If Antigravity opens immediately after installation, simply close it.",
              },
              {
                num: 4,
                title: "4. Run Blocker Script",
                desc: "Double-click Disable-Antigravity-Updates.bat (or right-click -> Run as administrator) to neutralize the updater engine.",
              },
              {
                num: 5,
                title: "5. Turn Wi-Fi Back ON",
                desc: "Reconnect to Wi-Fi. Antigravity IDE is now permanently locked to your preferred dark version!",
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className={`step-interactive-box ${checkedSteps[idx] ? "done" : ""}`}
                onClick={() => toggleCheckStep(idx)}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div className="step-circle-badge">
                      {checkedSteps[idx] ? <i className="fa-solid fa-check" /> : step.num}
                    </div>
                    <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1rem", fontWeight: 700, color: "#ffffff" }}>
                      {step.title}
                    </span>
                  </div>
                  <span style={{ fontSize: "0.72rem", color: checkedSteps[idx] ? "#34d399" : "#64748b", fontWeight: 700 }}>
                    {checkedSteps[idx] ? "COMPLETED" : "TAP TO CHECK"}
                  </span>
                </div>
                <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: 1.55, margin: "6px 0 0 36px" }}>
                  {step.desc}
                </p>
                {step.warn && (
                  <div style={{ background: "rgba(239, 68, 68, 0.15)", border: "1px solid rgba(239, 68, 68, 0.3)", borderRadius: "8px", padding: "6px 10px", margin: "8px 0 0 36px", fontSize: "0.78rem", color: "#fca5a5" }}>
                    <i className="fa-solid fa-triangle-exclamation me-1" /> {step.warn}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* LIVE TERMINAL SIMULATOR */}
        <div className="term-card">
          <div className="term-top">
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#eab308" }} />
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
              <span style={{ fontFamily: "Consolas, monospace", fontSize: "0.78rem", color: "#94a3b8", marginLeft: "6px" }}>
                Command Prompt &mdash; Blocker Simulator
              </span>
            </div>
            <button
              onClick={runTerminalSimulation}
              disabled={terminalRunning}
              style={{
                background: "rgba(99, 102, 241, 0.2)",
                border: "1px solid rgba(99, 102, 241, 0.4)",
                color: "#c7d2fe",
                borderRadius: "8px",
                padding: "4px 10px",
                fontSize: "0.75rem",
                fontWeight: 700,
                cursor: "pointer"
              }}
            >
              <i className="fa-solid fa-play me-1" /> {terminalRunning ? "Executing..." : "Replay"}
            </button>
          </div>
          <div className="term-screen">
            {terminalLogs.map((log, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "4px",
                  color: log.includes("SUCCESS") ? "#4ade80" : log.includes("[OK]") ? "#38bdf8" : "#94a3b8",
                  fontWeight: log.includes("SUCCESS") ? 700 : 400
                }}
              >
                {log}
              </div>
            ))}
          </div>
        </div>

        {/* COMPARISON SPEC BOXES */}
        <div className="matrix-wrap">
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <div style={{ color: "#818cf8", fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>Comparison Analysis</div>
            <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 1.7rem)", fontWeight: 800, color: "#ffffff" }}>
              Antigravity IDE vs. Antigravity 2.0
            </h2>
          </div>

          <div className="matrix-cards-grid">
            <div className="spec-box highlight">
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <i className="fa-solid fa-code text-cyan-400" />
                <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.1rem", fontWeight: 800, color: "#38bdf8", margin: 0 }}>
                  Antigravity IDE (VS Code-Based)
                </h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.85rem", color: "#cbd5e1" }}>
                <li style={{ padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <strong>Theme:</strong> Dark Modern / Clean Syntax
                </li>
                <li style={{ padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <strong>Workflow:</strong> Full editor, inline lenses (Ctrl+I), full terminal
                </li>
                <li style={{ padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <strong>Autocomplete:</strong> Native Tab prediction & supercomplete
                </li>
                <li style={{ padding: "6px 0" }}>
                  <strong>Shield Lock:</strong> <span style={{ color: "#34d399", fontWeight: 700 }}>100% Permanently Locked</span>
                </li>
              </ul>
            </div>

            <div className="spec-box">
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <i className="fa-solid fa-desktop text-purple-400" />
                <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.1rem", fontWeight: 800, color: "#c084fc", margin: 0 }}>
                  Antigravity 2.0 (Desktop App)
                </h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.85rem", color: "#94a3b8" }}>
                <li style={{ padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <strong>Theme:</strong> Light / White Web Canvas
                </li>
                <li style={{ padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <strong>Workflow:</strong> Standalone agent orchestration canvas
                </li>
                <li style={{ padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <strong>Autocomplete:</strong> External prompts and canvas actions
                </li>
                <li style={{ padding: "6px 0" }}>
                  <strong>Shield Lock:</strong> Requires separate firewall rules
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SCRIPT CODE HUB */}
        <div className="script-hub-card">
          <div className="script-bar">
            <div style={{ display: "flex", gap: "6px" }}>
              <button
                onClick={() => setActiveCodeTab("bat")}
                style={{
                  background: activeCodeTab === "bat" ? "#6366f1" : "transparent",
                  color: activeCodeTab === "bat" ? "#ffffff" : "#94a3b8",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  cursor: "pointer"
                }}
              >
                Batch (.bat)
              </button>
              <button
                onClick={() => setActiveCodeTab("ps")}
                style={{
                  background: activeCodeTab === "ps" ? "#6366f1" : "transparent",
                  color: activeCodeTab === "ps" ? "#ffffff" : "#94a3b8",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  cursor: "pointer"
                }}
              >
                PowerShell (.ps1)
              </button>
            </div>

            <button
              onClick={() => handleCopyCode(activeCodeTab === "bat" ? BATCH_SCRIPT_CODE : POWERSHELL_CODE)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(99, 102, 241, 0.15)",
                color: "#a5b4fc",
                border: "1px solid rgba(99, 102, 241, 0.35)",
                borderRadius: "8px",
                padding: "6px 12px",
                fontWeight: 700,
                fontSize: "0.78rem",
                cursor: "pointer"
              }}
            >
              {copied ? (
                <>
                  <i className="fa-solid fa-check text-emerald-400" /> Copied!
                </>
              ) : (
                <>
                  <i className="fa-regular fa-copy" /> Copy Script
                </>
              )}
            </button>
          </div>

          <pre style={{ padding: "16px", margin: 0, background: "#030712", overflowX: "auto", fontFamily: "Consolas, monospace", fontSize: "0.82rem", lineHeight: 1.55, color: "#f1f5f9" }}>
            <code>{activeCodeTab === "bat" ? BATCH_SCRIPT_CODE : POWERSHELL_CODE}</code>
          </pre>
        </div>

        {/* INSTANT FAQ SEARCH */}
        <div style={{ maxWidth: "800px", margin: "0 auto 45px" }}>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <div style={{ color: "#818cf8", fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>Instant Knowledge Base</div>
            <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 1.7rem)", fontWeight: 800, color: "#ffffff", margin: "4px 0 14px" }}>
              Frequently Asked Questions
            </h2>
            <div style={{ position: "relative", maxWidth: "100%" }}>
              <i className="fa-solid fa-magnifying-glass" style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#64748b", fontSize: "0.85rem" }} />
              <input
                type="text"
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                placeholder="Filter: wifi, white screen, bat file, windows 11..."
                style={{
                  width: "100%",
                  padding: "12px 16px 12px 38px",
                  background: "rgba(15, 23, 42, 0.8)",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  borderRadius: "10px",
                  color: "#f1f5f9",
                  fontSize: "0.9rem",
                  outline: "none"
                }}
              />
            </div>
          </div>

          <div>
            {filteredFaqs.length === 0 ? (
              <div style={{ textAlign: "center", color: "#64748b", padding: "20px" }}>
                No questions found matching "{faqSearch}". Try searching for "update" or "wifi".
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => (
                <div key={idx} className="faq-item-card">
                  <button className="faq-btn" onClick={() => toggleFaq(idx)}>
                    <span>{faq.q}</span>
                    <i
                      className="fa-solid fa-chevron-down"
                      style={{
                        transform: openFaq === idx ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                        color: openFaq === idx ? "#818cf8" : "#64748b",
                        fontSize: "0.85rem",
                        flexShrink: 0
                      }}
                    />
                  </button>
                  {openFaq === idx && <div className="faq-body">{faq.a}</div>}
                </div>
              ))
            )}
          </div>
        </div>

        {/* BOTTOM GRAND BANNER */}
        <div className="bottom-grand-banner">
          <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", fontWeight: 800, color: "#ffffff", marginBottom: "12px" }}>
            Ready to Lock Your Antigravity IDE?
          </h2>
          <p style={{ color: "#cbd5e1", fontSize: "0.95rem", maxWidth: "600px", margin: "0 auto 24px", lineHeight: 1.6 }}>
            Download our verified installer package directly from Google Drive and set up your permanent AI coding environment in under 2 minutes.
          </p>
          <a
            href={DRIVE_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackDownload}
            className="btn-prime-download"
            style={{ maxWidth: "380px", margin: "0 auto" }}
          >
            <i className="fa-solid fa-download" /> Download Package (Google Drive)
          </a>
        </div>
      </div>
    </div>
  );
}
