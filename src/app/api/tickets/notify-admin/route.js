import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

const ADMIN_ALERT_EMAILS = [
  "kushsharma.cor@gmail.com",
  "lavsharma.cor@gmail.com",
];

function getTransporter() {
  const host = process.env.SMTP_HOST || "smtpout.secureserver.net";
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const user = process.env.SMTP_USER || "business@chittortech.in";
  const pass = process.env.SMTP_PASS;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      ticketId,
      clientId,
      clientName,
      companyName,
      title,
      description,
      category,
      priority,
      phone,
    } = body;

    if (!ticketId || !title) {
      return NextResponse.json(
        { success: false, error: "Missing required ticket details" },
        { status: 400 }
      );
    }

    const formattedTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const cleanPhone = (phone || "").replace(/[^\d+]/g, "");

    // Priority color mapping
    const prioUpper = (priority || "MEDIUM").toUpperCase();
    let prioBg = "#e0f2fe";
    let prioColor = "#0284c7";
    if (prioUpper === "URGENT") {
      prioBg = "#fee2e2";
      prioColor = "#dc2626";
    } else if (prioUpper === "HIGH") {
      prioBg = "#ffedd5";
      prioColor = "#ea580c";
    } else if (prioUpper === "LOW") {
      prioBg = "#f1f5f9";
      prioColor = "#64748b";
    }

    // Logo image detection for inline CID attachment
    let logoPath = path.join(process.cwd(), "public/images/chittortech_logo.png");
    if (!fs.existsSync(logoPath)) {
      logoPath = path.join(process.cwd(), "public/chittortech_logo.png");
    }
    const hasLogoFile = fs.existsSync(logoPath);
    const logoSrc = hasLogoFile ? "cid:chittortech_logo" : "https://chittortech.in/images/chittortech_logo.png";

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Support Ticket #${ticketId}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <div style="max-width: 600px; margin: 16px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 1px solid #e2e8f0;">
    
    <!-- Header Banner with ChittorTech Logo & Priority Badge -->
    <div style="background: linear-gradient(135deg, #0B2545 0%, #134074 100%); padding: 24px 20px; color: #ffffff;">
      <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
        <tr>
          <td style="vertical-align: middle;">
            <table role="presentation" style="border-collapse: collapse;">
              <tr>
                <td style="vertical-align: middle; padding-right: 12px;">
                  <img src="${logoSrc}" alt="ChittorTech Logo" style="height: 42px; width: auto; max-width: 140px; object-fit: contain; display: block;" />
                </td>
                <td style="vertical-align: middle;">
                  <div style="font-size: 19px; font-weight: 800; color: #ffffff; letter-spacing: -0.3px; line-height: 1.1;">ChittorTech</div>
                  <div style="font-size: 11px; color: #94a3b8; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Official Helpdesk</div>
                </td>
              </tr>
            </table>
          </td>
          <td style="text-align: right; vertical-align: middle;">
            <span style="display: inline-block; background: ${prioBg}; color: ${prioColor}; padding: 5px 12px; border-radius: 20px; font-size: 11.5px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase;">
              ● ${priority || "MEDIUM"}
            </span>
          </td>
        </tr>
      </table>

      <div style="margin-bottom: 8px;">
        <span style="display: inline-block; background: rgba(255,255,255,0.18); padding: 4px 12px; border-radius: 14px; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; color: #e2e8f0;">
          ${category || "Support Inquiry"}
        </span>
      </div>

      <h1 style="margin: 0 0 8px 0; font-size: 20px; font-weight: 800; line-height: 1.35; color: #ffffff;">
        ${title}
      </h1>
      <p style="margin: 0; font-size: 12.5px; color: #cbd5e1;">
        Ticket ID: <strong style="font-family: monospace; background: rgba(0,0,0,0.35); padding: 2px 7px; border-radius: 4px; color: #38bdf8;">#${ticketId}</strong>
      </p>
    </div>

    <!-- Main Content -->
    <div style="padding: 20px; color: #1e293b; line-height: 1.6;">
      <p style="margin: 0 0 12px 0; font-size: 14.5px; color: #334155;">
        Hello <strong>Kush & Lav</strong>,
      </p>
      <p style="margin: 0 0 16px 0; font-size: 14px; color: #475569;">
        A new ticket has been raised by <strong>${clientName}</strong> from the <strong>ChittorTech Mobile App</strong>:
      </p>

      <!-- Issue Description Box -->
      <div style="background: #f8fafc; border-left: 4px solid #0284c7; border-radius: 8px; padding: 14px 16px; margin-bottom: 20px;">
        <div style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
          Ticket Description / Issue Details:
        </div>
        <div style="font-size: 14.5px; font-weight: 600; color: #0f172a; white-space: pre-line; line-height: 1.5;">
          ${description}
        </div>
      </div>

      <!-- Ticket & Client Details (Stacked: Label on top, Value underneath) -->
      <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 12px;">
        
        <!-- Field 1: Client Name -->
        <div style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; background: #ffffff;">
          <div style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px;">
            Client Name
          </div>
          <div style="font-size: 15px; font-weight: 800; color: #0f172a;">
            ${clientName || "—"}
          </div>
        </div>

        <!-- Field 2: Company / Brand -->
        <div style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; background: #f8fafc;">
          <div style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px;">
            Company / Brand
          </div>
          <div style="font-size: 14.5px; font-weight: 700; color: #0f172a;">
            ${companyName || "ChittorTech Client"}
          </div>
        </div>

        <!-- Field 3: Client Email -->
        <div style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; background: #ffffff;">
          <div style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px;">
            Client Email
          </div>
          <div style="font-size: 14.5px; font-weight: 700; color: #0284c7;">
            <a href="mailto:${clientId}" style="color: #0284c7; text-decoration: none;">${clientId}</a>
          </div>
        </div>

        <!-- Field 4: Client Phone Number (if available) -->
        ${cleanPhone ? `
        <div style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; background: #f8fafc;">
          <div style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px;">
            Client Phone Number
          </div>
          <div style="font-size: 14.5px; font-weight: 700; color: #0f172a;">
            <a href="tel:${cleanPhone}" style="color: #0f172a; text-decoration: none;">${cleanPhone}</a>
          </div>
        </div>` : ''}

        <!-- Field 5: Ticket Category -->
        <div style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; background: #ffffff;">
          <div style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px;">
            Ticket Category
          </div>
          <div style="font-size: 14.5px; font-weight: 700; color: #0f172a;">
            ${category || "General Support"}
          </div>
        </div>

        <!-- Field 6: Priority Level -->
        <div style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; background: #f8fafc;">
          <div style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px;">
            Priority Level
          </div>
          <div style="font-size: 14.5px; font-weight: 800; color: ${prioColor};">
            ● ${priority || "MEDIUM"}
          </div>
        </div>

        <!-- Field 7: Raised At -->
        <div style="padding: 12px 16px; background: #ffffff;">
          <div style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px;">
            Raised At (Date & Time)
          </div>
          <div style="font-size: 14.5px; font-weight: 700; color: #0f172a;">
            ${formattedTime} IST
          </div>
        </div>

      </div>

    </div>

    <!-- Footer -->
    <div style="background: #f8fafc; padding: 14px 20px; text-align: center; font-size: 11.5px; color: #64748b; border-top: 1px solid #f1f5f9;">
      ChittorTech Helpdesk System &middot; Dispatched via Titan / GoDaddy Enterprise Mail
    </div>
  </div>
</body>
</html>`;

    const transporter = getTransporter();
    const mailOptions = {
      from: `"ChittorTech Helpdesk" <${process.env.SMTP_FROM || "business@chittortech.in"}>`,
      to: "kushsharma.cor@gmail.com",
      cc: "lavsharma.cor@gmail.com",
      subject: `🎫 [Ticket #${ticketId}] ${title} — ${clientName} (${companyName || "Client"})`,
      html: htmlContent,
      attachments: hasLogoFile
        ? [
            {
              filename: "chittortech_logo.png",
              path: logoPath,
              cid: "chittortech_logo",
            },
          ]
        : [],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Admin email alert dispatched for #${ticketId}: ${info.messageId}`);

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
      dispatchedTo: ADMIN_ALERT_EMAILS,
    });
  } catch (error) {
    console.error("notify-admin ticket email error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to dispatch email alert" },
      { status: 500 }
    );
  }
}
