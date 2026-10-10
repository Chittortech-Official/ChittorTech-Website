import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";

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

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password, companyName, phone, assignedProject } = body;

    if (!email || !password) {
      return NextResponse.json(
        { status: "error", msg: "Email and password are required." },
        { status: 400 }
      );
    }

    const clientName = name || "Valued Client";
    const clientCompany = companyName ? ` (${companyName})` : "";
    const projectTitle = assignedProject || "Custom Software & Cloud Architecture";

    const htmlContent = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ChittorTech Client Portal Login Credentials</title>
  <style type="text/css">
    body, table, td, p, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    body {
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
      background-color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #202124;
      line-height: 1.5;
    }
    @media screen and (max-width: 600px) {
      .outer-wrap { padding: 8px !important; }
      .email-card { width: 100% !important; max-width: 100% !important; }
      .header-pad { padding: 18px 20px !important; }
      .body-pad { padding: 22px 18px !important; }
      .pass-card-pad { padding: 16px 14px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc;">

  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="outer-wrap" style="background-color: #f8fafc; padding: 25px 12px;">
    <tr>
      <td align="center">

        <!-- Main Card Container -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="email-card" style="max-width: 580px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.04); text-align: left;">
          
          <!-- TOP BAR: Logo + Lock Icon (Enterprise Header) -->
          <tr>
            <td class="header-pad" style="padding: 24px 32px 18px 32px; background-color: #ffffff;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td valign="middle">
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td valign="middle" style="padding-right: 12px;">
                          <img src="cid:chittortechlogo" alt="ChittorTech Logo" width="38" height="38" style="display: block; border-radius: 8px;" />
                        </td>
                        <td valign="middle">
                          <div style="font-size: 22px; font-weight: 700; color: #0f172a; line-height: 1.1; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                            ChittorTech<span style="color: #2563eb; font-size: 15px; vertical-align: top;">™</span>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="right" valign="middle">
                    <div style="width: 36px; height: 36px; background-color: #2563eb; border-radius: 50%; text-align: center; line-height: 36px;">
                      <span style="font-size: 18px; color: #ffffff; line-height: 36px; display: inline-block;">🔒</span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- SOLID BLUE BANNER -->
          <tr>
            <td style="background-color: #2563eb; padding: 22px 32px;">
              <h1 style="margin: 0; font-size: 21px; font-weight: 600; color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; letter-spacing: 0.1px;">
                Client Portal Login Credentials
              </h1>
            </td>
          </tr>

          <!-- MAIN BODY -->
          <tr>
            <td class="body-pad" style="padding: 30px 32px 28px 32px; background-color: #ffffff;">

              <!-- Greeting -->
              <p style="margin: 0 0 16px 0; font-size: 15px; color: #202124; font-weight: 400; line-height: 1.5;">
                Hi <strong>${clientName}</strong>${clientCompany},
              </p>

              <!-- Enterprise Welcome Statement -->
              <p style="margin: 0 0 24px 0; font-size: 14.5px; color: #202124; line-height: 1.6;">
                Welcome to <strong>ChittorTech</strong>. We have provisioned your dedicated <strong>Enterprise Client Portal</strong> workspace. This gateway allows you to monitor live project milestones, review source sprint deliverables, track billing &amp; invoices, and access direct engineering support.
              </p>

              <!-- STACKED CORPORATE ACCESS PASS -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td class="pass-card-pad" style="padding: 22px 24px;">
                    
                    <div style="font-size: 11px; font-weight: 800; color: #2563eb; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 18px;">
                      🔐 Corporate Access Pass
                    </div>

                    <!-- 1. Corporate Email Block -->
                    <div style="margin-bottom: 18px;">
                      <div style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 5px;">
                        Corporate Email (Login ID)
                      </div>
                      <div style="font-size: 15px; font-weight: 700; color: #0f172a; font-family: monospace; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px 14px;">
                        ${email}
                      </div>
                      <div style="font-size: 12px; color: #64748b; margin-top: 4px; line-height: 1.4;">
                        ✓ This account has been registered using the official business email associated with your ChittorTech engagement.
                      </div>
                    </div>

                    <!-- 2. Portal Password Block -->
                    <div style="margin-bottom: 18px;">
                      <div style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 5px;">
                        Initial Portal Password
                      </div>
                      <div style="font-size: 16px; font-weight: 800; color: #1d4ed8; font-family: monospace; letter-spacing: 1.5px; background: #ffffff; border: 1.5px solid #bfdbfe; border-radius: 8px; padding: 10px 14px;">
                        ${password}
                      </div>
                      <div style="font-size: 12px; color: #64748b; margin-top: 4px; line-height: 1.4;">
                        🔒 Assigned by our technical team for your initial session. You can update and manage this password anytime inside your portal account settings.
                      </div>
                    </div>

                    <!-- 3. Assigned Project Block -->
                    <div style="margin-bottom: 18px;">
                      <div style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 5px;">
                        Assigned Project / Solution Suite
                      </div>
                      <div style="font-size: 14.5px; font-weight: 700; color: #0f172a; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px 14px;">
                        ${projectTitle}
                      </div>
                      <div style="font-size: 12px; color: #64748b; margin-top: 4px; line-height: 1.4;">
                        ⚡ All live architecture sprints, cloud staging environments, and deliverables are linked to this solution suite.
                      </div>
                    </div>

                    <!-- 4. Lifecycle & Service Validity Block -->
                    <div>
                      <div style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 5px;">
                        Account Status &amp; Service Lifecycle
                      </div>
                      <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px 14px;">
                        <span style="font-size: 13px; font-weight: 800; color: #166534; background: #dcfce7; border: 1px solid #bbf7d0; border-radius: 6px; padding: 3px 9px; display: inline-block;">
                          ● ACTIVE &amp; VERIFIED
                        </span>
                        <div style="font-size: 12px; color: #64748b; margin-top: 6px; line-height: 1.45;">
                          ⏳ This account remains fully operational throughout the active duration of your project and SLA with ChittorTech. Upon project conclusion and contract handover, workspace credentials will be archived in accordance with data governance policies.
                        </div>
                      </div>
                    </div>

                  </td>
                </tr>
              </table>

              <!-- Access Instructions -->
              <div style="background-color: #eff6ff; border-left: 4px solid #2563eb; padding: 16px 18px; border-radius: 0 8px 8px 0; margin-bottom: 24px;">
                <div style="font-size: 13.5px; font-weight: 700; color: #1d4ed8; margin-bottom: 6px;">
                  📱 Accessing Your Portal via ChittorTech Mobile App:
                </div>
                <div style="font-size: 13px; color: #334155; line-height: 1.55;">
                  <strong>1.</strong> Open the <strong>ChittorTech Mobile App</strong> on your device.<br>
                  <strong>2.</strong> Select <strong>Client Portal</strong> from the navigation menu.<br>
                  <strong>3.</strong> Enter your Corporate Email ID and Initial Password to view your active dashboard.
                </div>
              </div>

              <!-- Security Notice -->
              <p style="margin: 0 0 20px 0; font-size: 13px; color: #5f6368; line-height: 1.55;">
                <strong>Confidentiality Notice:</strong> This email contains sensitive credentials and project access parameters. Please do not share or forward this communication.
              </p>

              <!-- Sign-off -->
              <p style="margin: 0 0 4px 0; font-size: 14px; color: #202124;">
                Sincerely yours,
              </p>
              <p style="margin: 0 0 4px 0; font-size: 14px; color: #202124; font-weight: 600;">
                The ChittorTech Accounts &amp; Systems Team
              </p>
              <p style="margin: 0 0 24px 0; font-size: 13.5px; color: #2563eb; font-weight: 700;">
                ChittorTech
              </p>

              <!-- Bottom divider -->
              <div style="border-top: 1px solid #e8eaed; padding-top: 18px;">
                <p style="margin: 0; font-size: 12px; color: #80868b; line-height: 1.4;">
                  © 2026 ChittorTech · Chittorgarh, Rajasthan · <a href="https://chittortech.in" style="color: #2563eb; text-decoration: none;">chittortech.in</a>
                </p>
              </div>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>`;

    const transporter = getTransporter();
    const logoPath = path.join(process.cwd(), "public", "favicon.png");

    const info = await transporter.sendMail({
      from: `"ChittorTech" <business@chittortech.in>`,
      to: email,
      subject: `🎉 Welcome to ChittorTech™ | Client Portal Access Credentials`,
      html: htmlContent,
      text: `Hi ${clientName},\n\nWelcome to ChittorTech.\n\nYour Enterprise Client Portal Access Pass:\n\n1. CORPORATE EMAIL ID:\n${email}\n(Registered business email for your ChittorTech engagement)\n\n2. INITIAL PORTAL PASSWORD:\n${password}\n(Assigned for initial login. Update anytime in portal settings)\n\n3. ASSIGNED PROJECT:\n${projectTitle}\n\n4. ACCOUNT STATUS & LIFECYCLE:\nACTIVE & VERIFIED (Valid for the duration of your project engagement)\n\nHow to Access:\nOpen ChittorTech Mobile App > Client Portal > Enter Corporate Email & Password.\n\nSincerely,\nThe ChittorTech Accounts & Systems Team\nChittorTech\nchittortech.in`,
      attachments: [
        {
          filename: "chittortech-logo.png",
          path: logoPath,
          cid: "chittortechlogo",
        },
      ],
    });

    return NextResponse.json({
      status: "success",
      msg: `Welcome email successfully dispatched to ${email}`,
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error sending client welcome email:", error);
    return NextResponse.json(
      { status: "error", msg: error.message || "Failed to dispatch email" },
      { status: 500 }
    );
  }
}
