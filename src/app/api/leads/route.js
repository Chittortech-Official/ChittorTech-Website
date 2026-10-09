import { NextResponse } from "next/server";
import { adminDb, adminMessaging } from "@/lib/firebase-admin";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name = "N/A",
      email = "N/A",
      contact = "N/A",
      company = "N/A",
      industry = "N/A",
      firm = "N/A",
      location = "N/A",
      message = "No details provided.",
      service = "",
      source = "Website Form",
      firestoreId = null,
    } = body;

    let docId = firestoreId;

    // 1. Commit to Firestore server-side if not already written client-side
    if (!docId && adminDb) {
      try {
        const leadRef = await adminDb.collection("leads").add({
          name: name.trim(),
          email: email.trim(),
          contact: contact.trim(),
          company: company.trim(),
          industry: industry.trim(),
          firm: firm.trim(),
          location: location.trim(),
          service: service.trim(),
          message: message.trim(),
          source,
          status: "new",
          notes: "",
          createdAt: new Date(),
          createdDateStr: new Date().toISOString(),
          serverIngested: true,
        });
        docId = leadRef.id;
      } catch (dbErr) {
        console.warn("Server-side Firestore write notice:", dbErr.message);
      }
    }

    // 2. Dispatch FCM Push Notification to Admin Devices (if configured)
    if (adminMessaging) {
      try {
        await adminMessaging.send({
          topic: "admin_leads",
          notification: {
            title: `🚀 New Web Lead: ${name}`,
            body: `${company !== "N/A" ? company + " • " : ""}${contact} (${source})`,
          },
          data: {
            leadId: docId || "",
            name: String(name),
            contact: String(contact),
            source: String(source),
          },
        });
      } catch (fcmErr) {
        // Topic might not have subscribers yet
      }
    }

    // 3. Dispatch Official Branded Website Lead Email via GoDaddy SMTP
    try {
      const smtpHost = process.env.SMTP_HOST || "smtpout.secureserver.net";
      const smtpPort = Number(process.env.SMTP_PORT) || 465;
      const smtpUser = process.env.SMTP_USER || "business@chittortech.in";
      const smtpPass = process.env.SMTP_PASS || "Kush2516@";
      const cleanPhone = (contact || "").replace(/[^0-9]/g, "");
      const hasValidPhone = Boolean(cleanPhone && cleanPhone.length >= 10 && contact !== "N/A");
      const hasValidEmail = Boolean(email && email !== "N/A" && email.includes("@"));

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        tls: { rejectUnauthorized: false }
      });

      const htmlBody = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Lead - ChittorTech</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; }
    .email-container { max-width: 600px; margin: 24px auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
    .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #334155 100%); padding: 32px 28px; text-align: center; color: #ffffff; }
    .header-badge { display: inline-block; background: #ea580c; color: #ffffff; font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; padding: 5px 14px; border-radius: 50px; margin-bottom: 12px; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.3px; }
    .header p { margin: 6px 0 0; font-size: 13px; color: #94a3b8; }
    .body { padding: 32px 28px; }
    .section-title { font-size: 12px; font-weight: 800; color: #ea580c; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 14px; }
    .info-table { width: 100%; border-collapse: separate; border-spacing: 0; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 22px; }
    .info-table td { padding: 11px 16px; font-size: 13.5px; border-bottom: 1px solid #f1f5f9; }
    .info-table tr:last-child td { border-bottom: none; }
    .label { width: 35%; color: #64748b; font-weight: 600; background-color: #f8fafc; }
    .val { width: 65%; color: #0f172a; font-weight: 700; word-break: break-all; }
    .message-card { background-color: #fff7ed; border: 1.5px solid #ffedd5; border-left: 4px solid #ea580c; border-radius: 8px; padding: 16px; margin-bottom: 24px; }
    .message-card-title { font-size: 12px; font-weight: 800; color: #c2410c; text-transform: uppercase; margin-bottom: 6px; }
    .message-card-content { font-size: 14px; color: #431407; line-height: 1.6; white-space: pre-wrap; }
    .btn-container { text-align: center; margin: 26px 0 10px; }
    .whatsapp-btn { display: inline-block; background-color: #25D366; color: #ffffff !important; text-decoration: none; padding: 13px 28px; border-radius: 50px; font-weight: 800; font-size: 14px; box-shadow: 0 4px 14px rgba(37,211,102,0.35); }
    .footer { background: #f8fafc; padding: 20px 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; line-height: 1.6; }
    .footer a { color: #ea580c; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <div class="header-badge">🌐 Official Web Portal</div>
      <h1>🔥 New Website Lead Alert</h1>
      <p>Captured via ChittorTech Website Ingestion Pipeline</p>
    </div>
    <div class="body">
      <div class="section-title">Lead Profile & Contact Details</div>
      <table class="info-table">
        <tr>
          <td class="label">Client Name:</td>
          <td class="val">${name}</td>
        </tr>
        <tr>
          <td class="label">Phone / WhatsApp:</td>
          <td class="val">${hasValidPhone ? `<a href="tel:${cleanPhone}" style="color:#0f172a; text-decoration:none;">${contact}</a>` : `<span style="color:#94a3b8; font-style:italic;">Not Provided</span>`}</td>
        </tr>
        <tr>
          <td class="label">Email Address:</td>
          <td class="val">${hasValidEmail ? `<a href="mailto:${email}" style="color:#2563eb; text-decoration:none;">${email}</a>` : `<span style="color:#94a3b8; font-style:italic;">Not Provided</span>`}</td>
        </tr>
        <tr>
          <td class="label">Company / Firm:</td>
          <td class="val">${company !== "N/A" ? company : (firm !== "N/A" ? firm : "Direct Client")}</td>
        </tr>
        ${service ? `<tr><td class="label">Requested Service:</td><td class="val" style="color:#ea580c;">${service}</td></tr>` : ""}
        <tr>
          <td class="label">Location / City:</td>
          <td class="val">${location}</td>
        </tr>
        <tr>
          <td class="label">Source Page:</td>
          <td class="val" style="color:#64748b; font-size:12px;">${source}</td>
        </tr>
      </table>

      <div class="message-card">
        <div class="message-card-title">Project Requirements / Message</div>
        <div class="message-card-content">${message}</div>
      </div>

      ${hasValidPhone ? `
      <div class="btn-container">
        <a href="https://wa.me/${cleanPhone}?text=Namaste%20${encodeURIComponent(name)}!%20Thank%20you%20for%20contacting%20ChittorTech." class="whatsapp-btn" target="_blank">
          💬 Connect on WhatsApp (${contact})
        </a>
      </div>` : (hasValidEmail ? `
      <div class="btn-container">
        <a href="mailto:${email}?subject=Regarding%20your%20inquiry%20with%20ChittorTech" class="whatsapp-btn" style="background-color: #2563eb; box-shadow: 0 4px 14px rgba(37,99,235,0.35);" target="_blank">
          ✉️ Reply to Client via Email (${email})
        </a>
      </div>` : "")}
    </div>
    <div class="footer">
      <strong>ChittorTech</strong> · Collectorate Circle, Chittorgarh, Rajasthan (312001)<br>
      Official Web Engine: <a href="https://chittortech.in">chittortech.in</a> · Direct Sender: <a href="mailto:business@chittortech.in">business@chittortech.in</a>
    </div>
  </div>
</body>
</html>`;

      await transporter.sendMail({
        from: `"ChittorTech" <${smtpUser}>`,
        to: "kushsharma.cor@gmail.com, lavsharma.cor@gmail.com",
        subject: `🔥 New ChittorTech Web Lead: ${name} (${company !== "N/A" ? company : "Website Form"})`,
        html: htmlBody,
      });
    } catch (mailErr) {
      console.warn("Direct SMTP lead dispatch notice:", mailErr.message);
    }

    return NextResponse.json({
      success: true,
      id: docId,
      message: "Lead processed successfully via Vercel Serverless.",
    });
  } catch (error) {
    console.error("Vercel /api/leads error:", error);
    return NextResponse.json(
      { success: false, error: "Lead processing error." },
      { status: 500 }
    );
  }
}
