"use client";
import React, { useState } from "react";
import { submitLead } from "@/lib/leadService";
import "../../../public/assets/css/premium-products.css";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    industry: "ERP & POS Software",
    location: "",
    remark: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMsg("");

    if (!formData.name || !formData.email || !formData.mobile || !formData.location) {
      setStatusType("danger");
      setStatusMsg("Please fill in all required fields.");
      setSubmitting(false);
      return;
    }

    const submissionPayload = {
      name: formData.name,
      email: formData.email,
      contact: formData.mobile,
      location: formData.location,
      industry: formData.industry,
      message: `[DEMO REQUEST] ` + (formData.remark || ""),
      company: "N/A",
      firm: "N/A",
    };

    setStatusType("success");
    setStatusMsg("Thank you! Your demo request has been received. Our team will contact you within 24 hours.");

    setFormData({
      name: "",
      mobile: "",
      email: "",
      industry: "ERP & POS Software",
      location: "",
      remark: "",
    });

    submitLead(submissionPayload).catch((err) => {
      console.error("Demo lead submission error:", err);
    });

    setSubmitting(false);
  };

  return (
    <div className="demo-page-wrap" style={{ minHeight: "80vh", background: "#f8fafc", padding: "80px 0" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5 bg-white">
              <div className="text-center mb-4">
                <span className="badge bg-primary-subtle text-primary fw-bold px-3 py-2 rounded-pill mb-3">Live Interactive Demo</span>
                <h1 className="fw-bold text-dark h2">Request a Free Live Software Demonstration</h1>
                <p className="text-muted">Experience how ChittorTech ERP, POS billing software, and custom AI agents automate your business workflows.</p>
              </div>

              {statusMsg && (
                <div className={`alert alert-${statusType} rounded-3 text-center fw-semibold mb-4`} role="alert">
                  {statusMsg}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-secondary small">Full Name *</label>
                    <input type="text" className="form-control form-control-lg fs-6" name="name" value={formData.name} onChange={handleChange} placeholder="Your Full Name" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-secondary small">Phone / WhatsApp Number *</label>
                    <input type="tel" className="form-control form-control-lg fs-6" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="+91 98765 43210" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-secondary small">Email Address *</label>
                    <input type="email" className="form-control form-control-lg fs-6" name="email" value={formData.email} onChange={handleChange} placeholder="name@company.com" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-secondary small">City / Location *</label>
                    <input type="text" className="form-control form-control-lg fs-6" name="location" value={formData.location} onChange={handleChange} placeholder="City name" required />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold text-secondary small">Service Required</label>
                    <select className="form-select form-select-lg fs-6" name="industry" value={formData.industry} onChange={handleChange}>
                      <option value="ERP & POS Software">ERP &amp; POS Billing Software</option>
                      <option value="Custom Web Development">Custom Web Development</option>
                      <option value="Mobile App Development">Android &amp; iOS App Development</option>
                      <option value="AI Solutions & Chatbots">AI Solutions &amp; Chatbot Automation</option>
                      <option value="Hotel & Resort ERP">Hotel &amp; Resort Management System</option>
                      <option value="Marble & Stone Industry ERP">Marble &amp; Granite Industry ERP</option>
                      <option value="Garment & Textile POS">Garment &amp; Textile POS Software</option>
                      <option value="School Management ERP">School &amp; College Management System</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold text-secondary small">Requirements / Message</label>
                    <textarea className="form-control fs-6" rows={3} name="remark" value={formData.remark} onChange={handleChange} placeholder="Tell us about your requirements..."></textarea>
                  </div>
                  <div className="col-12 mt-4 text-center">
                    <button type="submit" disabled={submitting} className="btn btn-primary btn-lg px-5 py-3 rounded-3 fw-bold w-100 shadow">
                      {submitting ? "Booking Demo..." : "Book My Free Demo Now"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
