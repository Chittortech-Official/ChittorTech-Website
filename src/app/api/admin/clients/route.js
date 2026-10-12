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
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to ChittorTech Client Portal</title>
  <style type="text/css">
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    body { margin: 0; padding: 0; width: 100% !important; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    @media only screen and (max-width: 620px) {
      .email-container { width: 100% !important; max-width: 100% !important; }
      .content-padding { padding: 24px 18px !important; }
      .header-padding { padding: 30px 18px !important; }
      .cred-label-cell { display: block !important; width: 100% !important; padding-bottom: 4px !important; text-align: left !important; }
      .cred-val-cell { display: block !important; width: 100% !important; padding-top: 0 !important; text-align: left !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <!-- Outer Wrapper Table -->
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#f1f5f9" style="background-color: #f1f5f9; width: 100%; margin: 0; padding: 30px 0;">
    <tr>
      <td align="center" valign="top">
        <!-- Main Card Container -->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="email-container" style="max-width: 600px; width: 100%; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06);">
          
          <!-- Header Banner -->
          <tr>
            <td align="center" class="header-padding" style="background: #0a2540 linear-gradient(135deg, #071927 0%, #0a2540 55%, #0284c7 100%); padding: 36px 30px; text-align: center;">
              <!-- Pill Badge -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style="margin-bottom: 14px;">
                <tr>
                  <td style="background-color: rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 20px; padding: 5px 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 11px; font-weight: 800; letter-spacing: 1px; color: #e0f2fe; text-transform: uppercase;">
                    🚀 CORPORATE CLIENT ONBOARDING
                  </td>
                </tr>
              </table>
              <h1 style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.3px; line-height: 30px;">
                ChittorTech Client Portal
              </h1>
              <p style="margin: 8px 0 0 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; color: #cbd5e1; line-height: 18px;">
                Secure IT Infrastructure &middot; Project Control Room &middot; Real-Time Deliverables
              </p>
            </td>
          </tr>

          <!-- Main Content Body -->
          <tr>
            <td class="content-padding" style="padding: 32px 30px; background-color: #ffffff;">
              <!-- Personal Greeting -->
              <h2 style="margin: 0 0 12px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 19px; font-weight: 800; color: #0f172a; line-height: 26px;">
                Welcome aboard, ${name}! 👋
              </h2>
              <p style="margin: 0 0 24px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 14px; color: #475569; line-height: 23px;">
                Your dedicated enterprise account has been successfully configured in the <strong style="color: #0f172a;">ChittorTech Ecosystem</strong>${companyName ? ` for <strong style="color: #0284c7;">${companyName}</strong>` : ""}. You can now monitor live development milestones, view project deliverables, verify invoices, and collaborate with your engineering team directly from our official Android mobile app.
              </p>

              <!-- Credentials Card -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; margin-bottom: 26px; overflow: hidden;">
                <tr>
                  <td colspan="2" style="padding: 13px 18px; background-color: #f1f5f9; border-bottom: 1.5px solid #e2e8f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 800; color: #0369a1; letter-spacing: 0.8px; text-transform: uppercase;">
                    🔑 YOUR SECURE LOGIN CREDENTIALS
                  </td>
                </tr>
                <!-- Email Row -->
                <tr>
                  <td class="cred-label-cell" valign="middle" style="padding: 13px 18px; border-bottom: 1px solid #e2e8f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; font-weight: 600; color: #64748b;">
                    Corporate Email:
                  </td>
                  <td class="cred-val-cell" align="right" valign="middle" style="padding: 13px 18px; border-bottom: 1px solid #e2e8f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 800; color: #0284c7;">
                    ${email}
                  </td>
                </tr>
                <!-- Password Row -->
                <tr>
                  <td class="cred-label-cell" valign="middle" style="padding: 13px 18px; border-bottom: 1px solid #e2e8f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; font-weight: 600; color: #64748b;">
                    Initial Password:
                  </td>
                  <td class="cred-val-cell" align="right" valign="middle" style="padding: 13px 18px; border-bottom: 1px solid #e2e8f0;">
                    <span style="display: inline-block; background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 5px 12px; font-family: 'SF Mono', Consolas, 'Courier New', monospace; font-size: 15px; font-weight: 800; color: #0f172a; letter-spacing: 1px;">
                      ${password}
                    </span>
                  </td>
                </tr>
                <!-- Role Row -->
                <tr>
                  <td class="cred-label-cell" valign="middle" style="padding: 13px 18px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; font-weight: 600; color: #64748b;">
                    Authorized Role:
                  </td>
                  <td class="cred-val-cell" align="right" valign="middle" style="padding: 13px 18px;">
                    <span style="display: inline-block; background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 6px; padding: 4px 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 700; color: #059669;">
                      ● Corporate Client (2FA Protected)
                    </span>
                  </td>
                </tr>
              </table>

              <!-- Steps Box (Table-based bulletproof layout) -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <tr>
                  <td style="padding-bottom: 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px;">
                    📱 HOW TO ACCESS VIA CHITTORTECH MOBILE APP
                  </td>
                </tr>
                <!-- Step 1 -->
                <tr>
                  <td style="padding-bottom: 12px;">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="26" valign="top" style="vertical-align: top;">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td width="24" height="24" align="center" valign="middle" style="width: 24px; height: 24px; background-color: #0284c7; color: #ffffff; border-radius: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 800; text-align: center; line-height: 24px;">1</td>
                            </tr>
                          </table>
                        </td>
                        <td width="10" style="width: 10px;"></td>
                        <td valign="middle" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13.5px; line-height: 20px; color: #334155;">
                          Open the <strong style="color: #0f172a;">ChittorTech Official Android Mobile App</strong> on your smartphone.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Step 2 -->
                <tr>
                  <td style="padding-bottom: 12px;">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="26" valign="top" style="vertical-align: top;">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td width="24" height="24" align="center" valign="middle" style="width: 24px; height: 24px; background-color: #0284c7; color: #ffffff; border-radius: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 800; text-align: center; line-height: 24px;">2</td>
                            </tr>
                          </table>
                        </td>
                        <td width="10" style="width: 10px;"></td>
                        <td valign="middle" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13.5px; line-height: 20px; color: #334155;">
                          On the sign-in screen, select the <strong style="color: #0f172a;">Client Portal</strong> tab.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Step 3 -->
                <tr>
                  <td style="padding-bottom: 12px;">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="26" valign="top" style="vertical-align: top;">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td width="24" height="24" align="center" valign="middle" style="width: 24px; height: 24px; background-color: #0284c7; color: #ffffff; border-radius: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 800; text-align: center; line-height: 24px;">3</td>
                            </tr>
                          </table>
                        </td>
                        <td width="10" style="width: 10px;"></td>
                        <td valign="middle" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13.5px; line-height: 20px; color: #334155;">
                          Enter your registered email (<code style="background-color: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: 12.5px; color: #0284c7;">${email}</code>) and your password above.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Step 4 -->
                <tr>
                  <td style="padding-bottom: 12px;">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="26" valign="top" style="vertical-align: top;">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td width="24" height="24" align="center" valign="middle" style="width: 24px; height: 24px; background-color: #0284c7; color: #ffffff; border-radius: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 800; text-align: center; line-height: 24px;">4</td>
                            </tr>
                          </table>
                        </td>
                        <td width="10" style="width: 10px;"></td>
                        <td valign="middle" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13.5px; line-height: 20px; color: #334155;">
                          Enter the <strong style="color: #0f172a;">6-digit OTP</strong> sent to your email inbox to complete two-factor authentication.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Step 5 -->
                <tr>
                  <td>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="26" valign="top" style="vertical-align: top;">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td width="24" height="24" align="center" valign="middle" style="width: 24px; height: 24px; background-color: #0284c7; color: #ffffff; border-radius: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 800; text-align: center; line-height: 24px;">5</td>
                            </tr>
                          </table>
                        </td>
                        <td width="10" style="width: 10px;"></td>
                        <td valign="middle" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13.5px; line-height: 20px; color: #334155;">
                          Instantly access live <strong style="color: #0f172a;">Project Sprints, Invoices, SOW Contracts, and 24/7 Helpdesk</strong>.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Security Advisory Box -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #fffbeb; border: 1px solid #fde68a; border-left: 4px solid #f59e0b; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 13px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 12.5px; line-height: 19px; color: #92400e;">
                    <strong style="color: #78350f;">🛡️ Security Advice:</strong> Never share your login credentials with anyone outside your authorized organization. You may update your password at any time from your mobile app Profile settings.
                  </td>
                </tr>
              </table>

              <!-- Action Button (Bulletproof table button) -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style="margin: 26px auto 10px auto;">
                <tr>
                  <td align="center" bgcolor="#0284c7" style="border-radius: 8px; background-color: #0284c7;">
                    <a href="https://chittortech.in" target="_blank" style="display: inline-block; padding: 13px 28px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 700; color: #ffffff; text-decoration: none; border-radius: 8px;">
                      Visit ChittorTech Website &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 24px 30px; text-align: center;">
              <p style="margin: 0 0 6px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 700; color: #334155;">
                ChittorTech IT Systems
              </p>
              <p style="margin: 0 0 8px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 11.5px; color: #64748b; line-height: 17px;">
                Empowering Global Businesses with Custom Software, Enterprise Cloud &amp; AI<br />
                Official Support: <a href="mailto:business@chittortech.in" style="color: #0284c7; text-decoration: none; font-weight: 600;">business@chittortech.in</a> &middot; Chittorgarh &amp; Udaipur, Rajasthan
              </p>
              <p style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 11px; color: #94a3b8;">
                &copy; ${new Date().getFullYear()} ChittorTech. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
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
        await Promise.allSettled([
          adminDb.collection("users").doc(cleanEmail).delete(),
          adminDb.collection("projects").doc(cleanEmail).delete(),
          adminDb.collection("invoices").doc(cleanEmail).delete(),
          adminDb.collection("tickets").doc(cleanEmail).delete(),
        ]);
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
