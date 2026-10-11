import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";
import nodemailer from "nodemailer";

function getTransporter() {
  const smtpHost = process.env.SMTP_HOST || "smtpout.secureserver.net";
  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const smtpUser = process.env.SMTP_USER || "business@chittortech.in";
  const smtpPass = process.env.SMTP_PASS || "Kush2516@";

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: { rejectUnauthorized: false },
  });
}

const ADMIN_EMAILS = [
  "kushsharma.cor@gmail.com",
  "lavsharma.cor@gmail.com",
  "business@chittortech.in",
  "contact@chittortech.in",
];

function generateWelcomeEmailHtml({ name, email, password, companyName }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to ChittorTech Client Portal</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 0; color: #1e293b; }
    .wrapper { max-width: 580px; margin: 30px auto; background: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 30px rgba(0,0,0,0.06); }
    .header { background: linear-gradient(135deg, #0A2540 0%, #0369A1 60%, #0284C7 100%); padding: 36px 30px; text-align: center; color: #ffffff; }
    .badge { display: inline-block; background: rgba(255,255,255,0.18); border: 1px solid rgba(255,255,255,0.35); color: #ffffff; font-size: 11px; font-weight: 800; letter-spacing: 1px; padding: 5px 14px; border-radius: 20px; text-transform: uppercase; margin-bottom: 14px; }
    .header h1 { margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.3px; }
    .header p { margin: 8px 0 0; font-size: 13.5px; color: rgba(255,255,255,0.9); }
    .content { padding: 32px 30px; }
    .greeting { font-size: 18px; font-weight: 800; color: #0f172a; margin-bottom: 10px; }
    .intro { font-size: 14px; color: #475569; line-height: 1.6; margin-bottom: 24px; }
    .creds-card { background: #f0f9ff; border: 1.5px solid #bae6fd; border-radius: 14px; padding: 20px; margin-bottom: 26px; }
    .creds-title { font-size: 12px; font-weight: 800; color: #0369a1; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 14px; display: flex; align-items: center; gap: 6px; }
    .cred-row { display: flex; justify-content: space-between; align-items: center; padding: 9px 0; border-bottom: 1px solid #e0f2fe; font-size: 13.5px; }
    .cred-row:last-child { border-bottom: none; padding-bottom: 0; }
    .cred-label { color: #64748b; font-weight: 600; }
    .cred-val { color: #0f172a; font-weight: 800; font-family: 'Courier New', monospace; font-size: 14.5px; background: #ffffff; padding: 4px 10px; border-radius: 6px; border: 1px solid #cbd5e1; }
    .steps-box { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 22px; margin-bottom: 24px; }
    .steps-title { font-size: 13px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 14px; }
    .step-item { display: flex; gap: 12px; margin-bottom: 14px; font-size: 13.5px; line-height: 1.5; color: #334155; }
    .step-item:last-child { margin-bottom: 0; }
    .step-num { width: 24px; height: 24px; border-radius: 50%; background: #0284c7; color: #ffffff; font-weight: 800; font-size: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .security-alert { background: #fffbeb; border-left: 4px solid #f59e0b; padding: 14px 16px; border-radius: 8px; font-size: 12.5px; color: #92400e; line-height: 1.5; margin-bottom: 24px; }
    .cta-btn { display: inline-block; background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); color: #ffffff !important; text-decoration: none; padding: 13px 26px; border-radius: 10px; font-weight: 700; font-size: 14px; box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35); text-align: center; }
    .footer { background: #f8fafc; padding: 24px 30px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <div class="badge">🚀 CORPORATE CLIENT ONBOARDING</div>
      <h1>ChittorTech Client Portal</h1>
      <p>Secure IT Infrastructure · Project Control Room · Real-Time Deliverables</p>
    </div>
    <div class="content">
      <div class="greeting">Welcome aboard, ${name}! 👋</div>
      <div class="intro">
        Your dedicated enterprise account has been successfully configured in the <strong>ChittorTech Ecosystem</strong>${companyName ? ` for <strong>${companyName}</strong>` : ""}. You can now monitor live development milestones, view deliverables, check billing invoices, and connect with your engineering team directly from our official Android mobile app.
      </div>

      <div class="creds-card">
        <div class="creds-title">🔑 Your Secure Login Credentials</div>
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr style="border-bottom: 1px solid #e0f2fe;">
            <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Corporate Email:</td>
            <td style="padding: 8px 0; text-align: right; color: #0284c7; font-weight: 800; font-size: 14px;">${email}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e0f2fe;">
            <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Initial Password:</td>
            <td style="padding: 8px 0; text-align: right; color: #0f172a; font-weight: 800; font-family: 'Courier New', monospace; font-size: 15px;">${password}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Authorized Role:</td>
            <td style="padding: 8px 0; text-align: right; color: #059669; font-weight: 800; font-size: 13px;">Corporate Client (2FA Protected)</td>
          </tr>
        </table>
      </div>

      <div class="steps-box">
        <div class="steps-title">📱 How to Access via ChittorTech Mobile App</div>
        <div class="step-item">
          <div class="step-num">1</div>
          <div>Open the <strong>ChittorTech Official Android Mobile App</strong> on your smartphone.</div>
        </div>
        <div class="step-item">
          <div class="step-num">2</div>
          <div>On the sign-in screen, select the <strong>Client Portal</strong> tab.</div>
        </div>
        <div class="step-item">
          <div class="step-num">3</div>
          <div>Enter your registered email (<code>${email}</code>) and your password above.</div>
        </div>
        <div class="step-item">
          <div class="step-num">4</div>
          <div>Enter the <strong>6-digit OTP</strong> sent to your email inbox to verify two-factor security.</div>
        </div>
        <div class="step-item">
          <div class="step-num">5</div>
          <div>Instantly access your live <strong>Project Sprints, Invoices, SOW Contracts, and 24/7 Helpdesk</strong>.</div>
        </div>
      </div>

      <div class="security-alert">
        <strong>🛡️ Security Advice:</strong> Never share your login credentials with anyone outside your authorized organization. You may update your password at any time from your mobile app Profile settings.
      </div>

      <div style="text-align: center; margin: 24px 0 10px;">
        <a href="https://chittortech.in" class="cta-btn">Visit ChittorTech Website →</a>
      </div>
    </div>

    <div class="footer">
      <strong>ChittorTech IT Systems</strong> · Empowering Global Businesses with Custom Software &amp; AI<br>
      Official Support: <a href="mailto:business@chittortech.in" style="color: #0284c7; text-decoration: none;">business@chittortech.in</a> · Chittorgarh &amp; Udaipur, Rajasthan<br>
      Website: <a href="https://chittortech.in" style="color: #0284c7; text-decoration: none;">https://chittortech.in</a>
    </div>
  </div>
</body>
</html>`;
}

// ─── GET: Fetch all clients from Firestore ───
export async function GET() {
  try {
    if (!adminDb) {
      return NextResponse.json({ status: "error", msg: "Database connection not ready" }, { status: 503 });
    }

    const snapshot = await adminDb.collection("users").get();
    const clients = [];

    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const email = data.Email || data.email || docSnap.id;
      const role = data.role || data.Role || "client";

      // Filter out admin emails & role == admin
      if (
        role.toLowerCase() === "admin" ||
        ADMIN_EMAILS.includes(email.toLowerCase())
      ) {
        return;
      }

      clients.push({
        id: docSnap.id,
        email: email,
        name: data.Name || data.name || data.displayName || data.fullName || email.split("@")[0],
        companyName: data.companyName || data.company || data.businessName || "",
        phone: data.phone || data.phoneNumber || data.mobile || "",
        password: data.Password || data.password || "",
        role: "client",
        status: data.status || "active",
        createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : data.createdAt || null,
        updatedAt: data.updatedAt?.toDate ? data.updatedAt.toDate().toISOString() : data.updatedAt || null,
      });
    });

    return NextResponse.json({ status: "success", clients });
  } catch (err) {
    console.error("GET /api/admin/clients error:", err);
    return NextResponse.json({ status: "error", msg: err.message }, { status: 500 });
  }
}

// ─── POST: Create, Update, Resend Welcome Email, or Delete Client ───
export async function POST(req) {
  try {
    const body = await req.json();
    const { action } = body;

    // ── 1. CREATE OR UPDATE CLIENT ──
    if (action === "create_client" || action === "update_client") {
      const { email, name, password, companyName, phone, sendWelcomeEmail } = body;

      if (!email || !email.includes("@")) {
        return NextResponse.json({ status: "error", msg: "Valid email address is required" }, { status: 400 });
      }
      if (!name || !name.trim()) {
        return NextResponse.json({ status: "error", msg: "Client name is required" }, { status: 400 });
      }
      if (!password || !password.trim()) {
        return NextResponse.json({ status: "error", msg: "Client password is required" }, { status: 400 });
      }

      const cleanEmail = email.trim().toLowerCase();
      const clientName = name.trim();
      const clientPass = password.trim();
      const clientCompany = (companyName || "").trim();
      const clientPhone = (phone || "").trim();

      const docData = {
        Email: cleanEmail,
        email: cleanEmail,
        Name: clientName,
        name: clientName,
        displayName: clientName,
        Password: clientPass,
        password: clientPass,
        companyName: clientCompany,
        company: clientCompany,
        phone: clientPhone,
        phoneNumber: clientPhone,
        role: "client",
        Role: "client",
        status: "active",
        updatedAt: new Date().toISOString(),
      };

      if (action === "create_client") {
        docData.createdAt = new Date().toISOString();
      }

      // Write directly to Firestore users collection
      if (adminDb) {
        await adminDb.collection("users").doc(cleanEmail).set(docData, { merge: true });
      }

      // Dispatch Welcome Email if requested (default true on creation)
      let emailDispatched = false;
      let emailError = null;

      if (sendWelcomeEmail !== false) {
        try {
          const transporter = getTransporter();
          const htmlContent = generateWelcomeEmailHtml({
            name: clientName,
            email: cleanEmail,
            password: clientPass,
            companyName: clientCompany,
          });

          await transporter.sendMail({
            from: `"ChittorTech Client Portal" <business@chittortech.in>`,
            to: cleanEmail,
            subject: `🚀 Welcome to ChittorTech | Your Corporate Client Portal Credentials`,
            text: `Welcome to ChittorTech, ${clientName}!\n\nYour Corporate Client Portal login has been activated.\nEmail: ${cleanEmail}\nPassword: ${clientPass}\n\nPlease open the ChittorTech Android App, select Client Portal, and log in with your credentials.\n\nSupport: business@chittortech.in`,
            html: htmlContent,
          });

          emailDispatched = true;
        } catch (mailErr) {
          console.warn("Welcome email dispatch failed:", mailErr.message);
          emailError = mailErr.message;
        }
      }

      return NextResponse.json({
        status: "success",
        msg: action === "create_client"
          ? `Client account for "${clientName}" created successfully!`
          : `Client details for "${clientName}" updated successfully!`,
        emailDispatched,
        emailError,
        client: {
          id: cleanEmail,
          email: cleanEmail,
          name: clientName,
          companyName: clientCompany,
          phone: clientPhone,
          role: "client",
        },
      });
    }

    // ── 2. RESEND WELCOME EMAIL ──
    if (action === "resend_welcome_email") {
      const { email } = body;
      if (!email) {
        return NextResponse.json({ status: "error", msg: "Client email is required" }, { status: 400 });
      }

      const cleanEmail = email.trim().toLowerCase();
      let clientDoc = null;

      if (adminDb) {
        const snap = await adminDb.collection("users").doc(cleanEmail).get();
        if (snap.exists) {
          clientDoc = snap.data();
        }
      }

      if (!clientDoc) {
        return NextResponse.json({ status: "error", msg: "Client record not found in database" }, { status: 404 });
      }

      const clientName = clientDoc.Name || clientDoc.name || clientDoc.displayName || cleanEmail.split("@")[0];
      const clientPass = clientDoc.Password || clientDoc.password || "Contact Administrator";
      const clientCompany = clientDoc.companyName || clientDoc.company || "";

      const transporter = getTransporter();
      const htmlContent = generateWelcomeEmailHtml({
        name: clientName,
        email: cleanEmail,
        password: clientPass,
        companyName: clientCompany,
      });

      await transporter.sendMail({
        from: `"ChittorTech Client Portal" <business@chittortech.in>`,
        to: cleanEmail,
        subject: `🔑 ChittorTech Portal Credentials Reminder: ${cleanEmail}`,
        html: htmlContent,
      });

      return NextResponse.json({
        status: "success",
        msg: `Welcome email with login credentials resent to ${cleanEmail}.`,
      });
    }

    // ── 3. DELETE CLIENT ──
    if (action === "delete_client") {
      const { email } = body;
      if (!email) {
        return NextResponse.json({ status: "error", msg: "Client email is required" }, { status: 400 });
      }

      const cleanEmail = email.trim().toLowerCase();
      if (adminDb) {
        await adminDb.collection("users").doc(cleanEmail).delete();
      }

      return NextResponse.json({
        status: "success",
        msg: `Client account "${cleanEmail}" deleted from database.`,
      });
    }

    return NextResponse.json({ status: "error", msg: "Invalid action." }, { status: 400 });
  } catch (err) {
    console.error("POST /api/admin/clients error:", err);
    return NextResponse.json({ status: "error", msg: err.message }, { status: 500 });
  }
}
