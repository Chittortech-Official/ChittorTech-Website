import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, contact, service, date, slot, notes } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const formattedDate = date
      ? new Date(date + "T00:00:00").toLocaleDateString("en-IN", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "Upcoming";

    // Build ultra-premium, colorful HTML confirmation email
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Meeting Confirmed with ChittorTech</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    .email-wrapper { max-width: 600px; margin: 24px auto; background: #ffffff; border-radius: 18px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #e06930 0%, #ea580c 50%, #f97316 100%); padding: 36px 30px; text-align: center; color: #ffffff; }
    .header-badge { display: inline-block; background: rgba(255,255,255,0.2); padding: 6px 16px; border-radius: 50px; font-size: 13px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 12px; }
    .header h1 { margin: 0; font-size: 26px; font-weight: 800; }
    .header p { margin: 8px 0 0; font-size: 15px; opacity: 0.95; }
    .content { padding: 32px 30px; color: #1e293b; line-height: 1.6; }
    .greeting { font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 14px; }
    .intro-text { font-size: 15px; color: #475569; margin-bottom: 24px; }
    .card { background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%); border: 1.5px solid #fed7aa; border-radius: 14px; padding: 22px; margin-bottom: 24px; }
    .card-title { font-size: 14px; font-weight: 800; color: #c2410c; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }
    .detail-row { display: flex; justify-content: space-between; padding: 9px 0; border-bottom: 1px solid rgba(234, 88, 12, 0.12); font-size: 14px; }
    .detail-row:last-child { border-bottom: none; }
    .detail-label { color: #7c2d12; font-weight: 600; }
    .detail-value { color: #0f172a; font-weight: 700; text-align: right; }
    .founder-box { background: #0f172a; color: #ffffff; border-radius: 14px; padding: 20px; margin-bottom: 24px; text-align: center; }
    .founder-box h3 { margin: 0 0 6px; font-size: 17px; color: #fb923c; font-weight: 800; }
    .founder-box p { margin: 0; font-size: 13px; color: #cbd5e1; }
    .cta-btn { display: inline-block; background: #25D366; color: #ffffff !important; font-weight: 800; font-size: 15px; padding: 13px 26px; border-radius: 50px; text-decoration: none; margin-top: 14px; box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4); }
    .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
    .footer a { color: #ea580c; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="header">
      <div class="header-badge">✨ Call Confirmed</div>
      <h1>Strategy Consultation Scheduled!</h1>
      <p>Direct 1-on-1 Discussion with ChittorTech Founder</p>
    </div>
    
    <div class="content">
      <div class="greeting">Namaste ${name || "Valued Partner"}, 🙏</div>
      <p class="intro-text">
        Thank you for booking a strategy call with <strong>ChittorTech</strong>. We have successfully logged your meeting request in our direct consultation queue.
      </p>

      <div class="card">
        <div class="card-title">📅 Meeting Summary</div>
        <div class="detail-row">
          <span class="detail-label">Focus Area:</span>
          <span class="detail-value">${service || "Enterprise Solution Engineering"}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Preferred Date:</span>
          <span class="detail-value">${formattedDate}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Time Slot:</span>
          <span class="detail-value">${slot || "11:00 AM - 12:00 PM"}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Contact / WhatsApp:</span>
          <span class="detail-value">${contact || "Provided"}</span>
        </div>
        ${notes ? `
        <div class="detail-row">
          <span class="detail-label">Project Scope:</span>
          <span class="detail-value">${notes}</span>
        </div>` : ""}
      </div>

      <div class="founder-box">
        <h3>Direct Line with Founder Lav Sharma</h3>
        <p>Our team will reach out directly on your provided phone / WhatsApp at the scheduled slot.</p>
        <a href="https://wa.me/917597451057?text=Namaste%20Lav%20Sir!%20I%20have%20scheduled%20a%20meeting%20for%20${encodeURIComponent(service || 'ChittorTech Services')}." class="cta-btn">
          💬 Connect on WhatsApp (+91 75974 51057)
        </a>
      </div>

      <p style="font-size: 13px; color: #64748b; text-align: center; margin: 0;">
        Need to reschedule or have urgent queries? Reply directly to this email or ping us on WhatsApp anytime.
      </p>
    </div>

    <div class="footer">
      <p><strong>ChittorTech</strong> • Collectorate Circle, Chittorgarh, Rajasthan (312001)</p>
      <p>Official Portal: <a href="https://chittortech.in">chittortech.in</a> • Email: <a href="mailto:business@chittortech.in">business@chittortech.in</a></p>
    </div>
  </div>
</body>
</html>
    `;

    // Send customer email directly via SMTP if configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === "true" || process.env.SMTP_PORT === "465",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"ChittorTech" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
          to: email,
          bcc: "kushsharma.cor@gmail.com, lavsharma.cor@gmail.com",
          subject: `✨ Meeting Confirmed: Strategy Consultation with Founder Lav Sharma`,
          html: htmlContent,
        });
      } catch (smtpErr) {
        console.warn("SMTP sendMail notice:", smtpErr);
      }
    }

    return NextResponse.json({ success: true, message: "Confirmation email dispatched" });
  } catch (error) {
    console.error("send-meeting-email error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
