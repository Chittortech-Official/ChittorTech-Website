import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ADVISORS_DATA } from "@/data/advisorsData";

export async function generateStaticParams() {
  return Object.keys(ADVISORS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const advisor = ADVISORS_DATA[slug];

  if (!advisor) {
    return {
      title: "Advisor Not Found | ChittorTech",
    };
  }

  return {
    title: `${advisor.name} — ${advisor.designation} | ChittorTech`,
    description: `${advisor.name} serves as ${advisor.designation} at ChittorTech in personal capacity. ${advisor.headline}`,
    alternates: {
      canonical: `https://chittortech.in/leadership/${advisor.slug}`,
    },
    openGraph: {
      title: `${advisor.name} — Technical Advisory Board | ChittorTech`,
      description: advisor.headline,
      url: `https://chittortech.in/leadership/${advisor.slug}`,
      siteName: "ChittorTech",
      locale: "en_IN",
      type: "profile",
    },
  };
}

export default async function AdvisorProfilePage({ params }) {
  const { slug } = await params;
  const a = ADVISORS_DATA[slug];

  if (!a) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: a.name,
    jobTitle: a.designation,
    sameAs: a.linkedin ? [a.linkedin] : [],
    worksFor: {
      "@type": "Organization",
      name: "ChittorTech",
      url: "https://chittortech.in",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: a.education.institution,
    },
    description: a.summary,
  };

  return (
    <div style={{ background: "#f8fafc", color: "#0f172a", minHeight: "100vh", overflowX: "hidden" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Top Tricolor Border ── */}
      <div style={{ height: "4px", background: "linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)" }} />

      {/* ── Breadcrumb Bar ── */}
      <div style={{ background: "#ffffff", borderBottom: "1px solid #e2e8f0", padding: "clamp(8px, 1.5vw, 12px) 0" }}>
        <div className="container" style={{ maxWidth: "1140px", padding: "0 clamp(16px, 3vw, 20px)" }}>
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div style={{ fontSize: "0.82rem", color: "#64748b" }}>
              <Link href="/" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>Home</Link>
              <span className="mx-2" style={{ color: "#cbd5e1" }}>/</span>
              <Link href="/leadership" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>Leadership & Advisory</Link>
              <span className="mx-2" style={{ color: "#cbd5e1" }}>/</span>
              <span style={{ fontWeight: 700, color: "#0f172a" }}>{a.name}</span>
            </div>

            <Link
              href="/leadership"
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#2563eb",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
                padding: "4px 12px",
                borderRadius: "20px",
              }}
            >
              <i className="fa-solid fa-arrow-left" style={{ fontSize: "0.72rem" }} />
              All Leadership & Advisors
            </Link>
          </div>
        </div>
      </div>

      {/* ── Profile Hero Header ── */}
      <section
        style={{
          background: "linear-gradient(160deg, #ffffff 0%, #f0f6ff 60%, #e8f4fd 100%)",
          borderBottom: "1px solid #e2e8f0",
          padding: "clamp(24px, 4vw, 48px) 0",
        }}
      >
        <div className="container" style={{ maxWidth: "1140px", padding: "0 clamp(16px, 3vw, 20px)" }}>
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-4">
            {/* Avatar */}
            <div
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "22px",
                background: a.avatarGrad,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                fontWeight: 900,
                color: "#ffffff",
                boxShadow: a.avatarShadow,
                flexShrink: 0,
              }}
            >
              {a.initials}
            </div>

            {/* Profile Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="d-flex align-items-center gap-2 flex-wrap mb-2">
                <span
                  style={{
                    background: a.tagBg,
                    color: a.tagColor,
                    border: `1px solid ${a.tagBorder}`,
                    borderRadius: "20px",
                    padding: "3px 12px",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Technical Advisory Board
                </span>
                <span style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "3px 10px", borderRadius: "20px", fontSize: "0.72rem", color: "#64748b", fontWeight: 600 }}>
                  Personal Capacity Advisor
                </span>
                {a.linkedin && (
                  <a
                    href={a.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`View ${a.name}'s verified LinkedIn profile`}
                    style={{
                      background: "#0a66c2",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "20px",
                      padding: "3px 12px",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      boxShadow: "0 2px 6px rgba(10,102,194,0.25)",
                    }}
                  >
                    <i className="fa-brands fa-linkedin" style={{ fontSize: "0.85rem" }} />
                    <span>Verified LinkedIn Profile</span>
                  </a>
                )}
              </div>

              <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 900, color: "#0f172a", margin: "0 0 6px", lineHeight: 1.2 }}>
                {a.name}
              </h1>

              <div style={{ fontSize: "1rem", color: "#334155", fontWeight: 700, marginBottom: "12px" }}>
                <span>{a.role}</span>
                <span className="mx-2" style={{ color: "#cbd5e1" }}>·</span>
                <strong style={{ color: a.accentColor }}>{a.org}</strong>
              </div>

              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6, maxWidth: "780px", margin: 0 }}>
                {a.headline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content Body ── */}
      <section style={{ padding: "clamp(36px, 5vw, 64px) 0 clamp(90px, 12vw, 130px)", background: "#f8fafc" }}>
        <div className="container" style={{ maxWidth: "1140px", padding: "0 20px" }}>

          {/* Legal Disclaimer */}
          <div
            className="mb-4"
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderLeft: `4px solid ${a.accentColor}`,
              borderRadius: "10px",
              padding: "12px 18px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
            }}
          >
            <div className="d-flex align-items-start gap-2" style={{ fontSize: "0.82rem", color: "#64748b", lineHeight: 1.6 }}>
              <i className="fa-solid fa-shield-halved" style={{ color: a.accentColor, marginTop: "3px", flexShrink: 0 }} />
              <div>
                <strong style={{ color: "#0f172a" }}>Advisory Board Legal Notice:</strong> {a.name} contributes to ChittorTech strictly in their personal, individual capacity. Their guidance, architectural advisory, and technical mentorship do not represent or imply any formal endorsement, sponsorship, partnership, or affiliation with their respective corporate employers.
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Left Column: Bio & Advisory Pillars */}
            <div className="col-lg-8">
              {/* Executive Summary */}
              <div style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", padding: "clamp(20px, 3vw, 28px)", marginBottom: "24px", boxShadow: "0 2px 10px rgba(0,0,0,0.03)" }}>
                <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a", marginBottom: "14px" }}>
                  Professional Overview & Technical Advisory Scope
                </h2>
                <p style={{ fontSize: "0.92rem", color: "#334155", lineHeight: 1.75, margin: 0 }}>
                  {a.summary}
                </p>
              </div>

              {/* Advisory Pillars */}
              <div style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", padding: "clamp(20px, 3vw, 28px)", marginBottom: "24px", boxShadow: "0 2px 10px rgba(0,0,0,0.03)" }}>
                <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a", marginBottom: "18px" }}>
                  Core Advisory Pillars & Architectural Domains
                </h2>
                <div className="row g-3">
                  {a.advisoryDomains.map((d) => (
                    <div key={d.title} className="col-md-6">
                      <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                          <span style={{ fontSize: "1.2rem" }}>{d.icon}</span>
                          <strong style={{ fontSize: "0.92rem", color: "#0f172a" }}>{d.title}</strong>
                        </div>
                        <p style={{ fontSize: "0.82rem", color: "#475569", margin: 0, lineHeight: 1.55 }}>
                          {d.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Technical Projects */}
              <div style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", padding: "clamp(20px, 3vw, 28px)", boxShadow: "0 2px 10px rgba(0,0,0,0.03)" }}>
                <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a", marginBottom: "18px" }}>
                  Selected Project Impact & Engineering Milestones
                </h2>
                <div className="d-flex flex-column gap-3">
                  {a.keyProjects.map((p) => (
                    <div key={p.title} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px" }}>
                      <div style={{ fontWeight: 800, fontSize: "0.95rem", color: "#0f172a", marginBottom: "4px" }}>
                        {p.title}
                      </div>
                      <p style={{ fontSize: "0.84rem", color: "#475569", margin: 0, lineHeight: 1.6 }}>
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Pedigree, Experience, Stack */}
            <div className="col-lg-4">
              {/* Academic Credentials Card */}
              <div style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", padding: "20px", marginBottom: "20px", boxShadow: "0 2px 10px rgba(0,0,0,0.03)" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
                  🎓 Academic Pedigree
                </div>
                <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "#0f172a", lineHeight: 1.3 }}>
                  {a.education.institution}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#475569", marginTop: "4px" }}>
                  {a.education.degree}
                </div>
                <div style={{ fontSize: "0.8rem", color: a.accentColor, fontWeight: 700, marginTop: "6px" }}>
                  {a.education.score}
                </div>
                {a.education.honors && (
                  <div style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "4px" }}>
                    {a.education.honors}
                  </div>
                )}
              </div>

              {/* Career Track Record Card */}
              <div style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", padding: "20px", marginBottom: "20px", boxShadow: "0 2px 10px rgba(0,0,0,0.03)" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
                  🏢 Career Track Record ({a.experienceYears})
                </div>
                <div className="d-flex flex-column gap-3">
                  {a.companiesTrack.map((co) => (
                    <div key={co.name + co.role} style={{ borderLeft: `3px solid ${a.accentColor}`, paddingLeft: "12px" }}>
                      <div style={{ fontWeight: 800, fontSize: "0.92rem", color: "#0f172a" }}>{co.name}</div>
                      <div style={{ fontSize: "0.8rem", color: "#475569" }}>{co.role}</div>
                      <div style={{ fontSize: "0.72rem", color: "#94a3b8", fontWeight: 600 }}>{co.period}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications Card */}
              {a.certifications && a.certifications.length > 0 && (
                <div style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", padding: "20px", marginBottom: "20px", boxShadow: "0 2px 10px rgba(0,0,0,0.03)" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>
                    📜 Certifications & Honors
                  </div>
                  <div className="d-flex flex-column gap-2">
                    {a.certifications.map((cert) => (
                      <div key={cert} style={{ background: a.tagBg, border: `1px solid ${a.tagBorder}`, borderRadius: "8px", padding: "8px 12px", fontSize: "0.78rem", fontWeight: 700, color: a.tagColor }}>
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Card */}
              <div style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", padding: "20px", boxShadow: "0 2px 10px rgba(0,0,0,0.03)" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>
                  ⚡ Technical Competencies
                </div>
                <div className="d-flex flex-wrap gap-1">
                  {a.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        background: "#f1f5f9",
                        border: "1px solid #e2e8f0",
                        borderRadius: "5px",
                        padding: "3px 8px",
                        fontSize: "0.73rem",
                        fontWeight: 600,
                        color: "#1e293b",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Back CTA Button */}
              <div style={{ marginTop: "20px" }}>
                <Link
                  href="/leadership"
                  className="btn w-100"
                  style={{
                    background: "#0f172a",
                    color: "#ffffff",
                    fontWeight: 700,
                    padding: "12px 20px",
                    borderRadius: "10px",
                    fontSize: "0.88rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    textDecoration: "none",
                  }}
                >
                  <i className="fa-solid fa-arrow-left" style={{ fontSize: "0.8rem" }} />
                  Back to All Leadership
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

