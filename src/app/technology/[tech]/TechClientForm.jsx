"use client";

import React, { useState } from "react";
import { submitLead } from "@/lib/leadService";

export default function TechClientForm({ techName }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    contact: "",
    location: "",
    message: "",
  });
  const [statusMsg, setStatusMsg] = useState("");
  const [statusType, setStatusType] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMsg("");

    if (!formData.name || !formData.email || !formData.contact || !formData.location) {
      setStatusType("danger");
      setStatusMsg("Please fill in all required fields.");
      setSubmitting(false);
      return;
    }

    const payload = {
      ...formData,
      message: `[TECH INQUIRY: ${techName}] ` + (formData.message || "Requesting technical consultation for " + techName)
    };

    setStatusType("success");
    setStatusMsg(`Thank you! Our engineering team will contact you shortly regarding ${techName} solutions.`);

    setFormData({
      name: "",
      email: "",
      company: "",
      contact: "",
      location: "",
      message: "",
    });

    submitLead(payload).catch((err) => {
      console.error("Tech form submission error:", err);
    });

    setSubmitting(false);
  };

  return (
    <div className="ct-tech-form-card">
      <div className="ct-tech-form-head">
        <h4>Schedule a Technical Consultation</h4>
        <p>Speak directly with our senior engineers about building or scaling with {techName}.</p>
      </div>

      {statusMsg && (
        <div className={`alert alert-${statusType === "success" ? "success" : "danger"} py-2 px-3 mb-3 small`}>
          {statusMsg}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label small fw-semibold">Your Name *</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label small fw-semibold">Work Email *</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="rahul@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label small fw-semibold">Phone / WhatsApp Number *</label>
            <input
              type="tel"
              name="contact"
              className="form-control"
              placeholder="+91 98765 43210"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label small fw-semibold">Company / Business Name</label>
            <input
              type="text"
              name="company"
              className="form-control"
              placeholder="e.g. Sharma Enterprises"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <label className="form-label small fw-semibold">City / Location *</label>
            <input
              type="text"
              name="location"
              className="form-control"
              placeholder="e.g. Chittorgarh, Jaipur, Mumbai"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <label className="form-label small fw-semibold">Project Scope & Requirements</label>
            <textarea
              name="message"
              rows={3}
              className="form-control"
              placeholder={`Tell us what you want to build or automate with ${techName}...`}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="col-12">
            <button
              type="submit"
              disabled={submitting}
              className="btn btn-primary w-100 py-2 fw-bold"
              style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)", border: "none" }}
            >
              {submitting ? "Submitting..." : `Request ${techName} Consultation`}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
