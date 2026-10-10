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
    tls: { rejectUnauthorized: false }
  });
}

// In-memory fallback for ultra-fast OTP verification
let localOtpCache = {
  otp: "",
  expiresAt: 0,
};

export async function POST(req) {
  try {
    const body = await req.json();
    const { action } = body;

    // ─── 1. REQUEST 2FA OTP FOR WEB ADMIN PORTAL ───
    if (action === "admin_request_otp") {
      const otp = String(Math.floor(100000 + Math.random() * 900000));
      const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes

      localOtpCache = { otp, expiresAt };

      if (adminDb) {
        try {
          await adminDb.collection("admin_security").doc("otp_session").set({
            otp,
            expiresAt,
            createdAt: new Date(),
          });
        } catch (dbErr) {
          console.warn("Firestore OTP write notice:", dbErr.message);
        }
      }

      // Dispatch Clean Branded Web Admin OTP Email
      try {
        const transporter = getTransporter();
        const htmlBody = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ChittorTech Admin 2FA Code</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; margin: 0; padding: 0; color: #1e293b; }
    .container { max-width: 500px; margin: 24px auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
    .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 28px 24px; text-align: center; color: #ffffff; }
    .badge { display: inline-block; background: #2563eb; color: #fff; font-size: 11px; font-weight: 800; letter-spacing: 0.8px; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; margin-bottom: 10px; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.5px; }
    .content { padding: 30px 24px; text-align: center; }
    .desc { font-size: 13.5px; color: #475569; line-height: 1.6; margin: 0 0 16px; }
    .otp-box { background: #eff6ff; border: 2px dashed #2563eb; border-radius: 12px; padding: 18px 20px; font-size: 36px; font-weight: 800; letter-spacing: 8px; color: #1d4ed8; display: inline-block; margin: 12px 0 16px; font-family: 'Courier New', monospace; }
    .expiry { font-size: 12px; color: #dc2626; font-weight: 700; margin-bottom: 20px; }
    .security-note { font-size: 12px; color: #64748b; line-height: 1.5; border-top: 1px solid #f1f5f9; padding-top: 16px; text-align: left; }
    .footer { background: #f8fafc; padding: 16px 20px; text-align: center; font-size: 11.5px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">🌐 Web Admin Terminal</div>
      <h1>ChittorTech™ CRM Security</h1>
    </div>
    <div class="content">
      <p class="desc">A sign-in request was initiated on the <strong>ChittorTech Web Admin Dashboard</strong>. Use the 6-digit one-time code below to complete your authentication:</p>
      <div class="otp-box">${otp}</div>
      <div class="expiry">⏳ Valid for 5 minutes only</div>
      <div class="security-note">
        <strong>Security Notice:</strong> Never share this code. If you did not initiate this login request on chittortech.in, ignore this notice. Your account remains encrypted.
      </div>
    </div>
    <div class="footer">
      Official Security Dispatch · ChittorTech (chittortech.in)<br>
      Sender: business@chittortech.in
    </div>
  </div>
</body>
</html>`;

        await transporter.sendMail({
          from: `"ChittorTech Security" <business@chittortech.in>`,
          to: "kushsharma.cor@gmail.com, lavsharma.cor@gmail.com",
          subject: `🔐 ChittorTech Admin 2FA Code: ${otp}`,
          html: htmlBody,
        });
      } catch (mailErr) {
        console.warn("SMTP 2FA dispatch error:", mailErr.message);
      }

      return NextResponse.json({
        status: "success",
        msg: "Verification code sent to registered administrator email via business@chittortech.in.",
      });
    }

    // ─── 2. VERIFY 2FA OTP ───
    if (action === "admin_verify_otp") {
      const entered = String(body.enteredOtp || "").trim();
      let storedOtp = localOtpCache.otp;
      let expiresAt = localOtpCache.expiresAt;

      if (adminDb) {
        try {
          const doc = await adminDb.collection("admin_security").doc("otp_session").get();
          if (doc.exists) {
            const data = doc.data();
            storedOtp = data.otp || storedOtp;
            expiresAt = data.expiresAt || expiresAt;
          }
        } catch (dbErr) {}
      }

      if (!storedOtp || Date.now() > expiresAt) {
        return NextResponse.json({
          status: "error",
          verified: false,
          msg: "Verification code expired or not found. Please request a new code.",
        });
      }

      if (storedOtp === entered) {
        localOtpCache = { otp: "", expiresAt: 0 };
        if (adminDb) {
          try {
            await adminDb.collection("admin_security").doc("otp_session").delete();
          } catch (e) {}
        }

        const sessionToken = "ct_auth_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 8);
        return NextResponse.json({
          status: "success",
          verified: true,
          token: sessionToken,
        });
      } else {
        return NextResponse.json({
          status: "error",
          verified: false,
          msg: "Incorrect verification code. Please check your email and try again.",
        });
      }
    }

    // ─── 3. RECOVER MASTER ACCESS KEY ───
    if (action === "admin_recover_key") {
      const rawEmail = (body.email || "").trim().toLowerCase();
      const authorizedAdmins = ["kushsharma.cor@gmail.com", "lavsharma.cor@gmail.com", "business@chittortech.in"];

      if (!authorizedAdmins.includes(rawEmail)) {
        return NextResponse.json({
          status: "error",
          msg: "Unauthorized email. Key recovery is restricted to registered admins.",
        });
      }

      const masterKey = process.env.NEXT_PUBLIC_ADMIN_ACCESS_KEY || "255856";

      try {
        const transporter = getTransporter();
        await transporter.sendMail({
          from: `"ChittorTech Security" <business@chittortech.in>`,
          to: "kushsharma.cor@gmail.com, lavsharma.cor@gmail.com",
          subject: `🔑 ChittorTech Master Admin Key Recovery`,
          html: `<div style="font-family: -apple-system, sans-serif; padding: 24px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; max-width: 500px; margin: 20px auto;">
            <h2 style="color: #0f172a; margin-top: 0;">ChittorTech Admin Key Recovery</h2>
            <p style="color: #475569; font-size: 14px;">Your Master Admin Access Key for ChittorTech Web Portal is:</p>
            <div style="font-size: 30px; font-weight: bold; color: #1d4ed8; letter-spacing: 5px; padding: 12px 20px; background: #eff6ff; display: inline-block; border-radius: 8px; border: 1px dashed #2563eb; margin: 10px 0 16px;">${masterKey}</div>
            <p style="font-size: 12px; color: #64748b; margin-bottom: 0;">Dispatched securely via business@chittortech.in on Vercel Serverless.</p>
          </div>`,
        });
      } catch (smtpErr) {
        console.warn("SMTP key recovery notice:", smtpErr.message);
      }

      return NextResponse.json({
        status: "success",
        msg: "Master Access Key has been dispatched to your email inbox.",
      });
    }

    return NextResponse.json({ status: "error", msg: "Invalid action." }, { status: 400 });
  } catch (error) {
    console.error("Vercel /api/admin/auth error:", error);
    return NextResponse.json({ status: "error", msg: error.message }, { status: 500 });
  }
}
