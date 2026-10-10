import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { lead_name, phone, message } = await req.json();

    if (!lead_name || !phone) {
      return NextResponse.json({ status: "error", msg: "Missing required fields." }, { status: 400 });
    }

    // Log the lead details locally (No call to external ChittorTech WhatsApp broadcast server)
    console.log("ChittorTech WhatsApp Lead Received (Stored Locally):", {
      timestamp: new Date().toISOString(),
      lead_name,
      phone,
      message
    });

    return NextResponse.json({
      status: "success",
      msg: "WhatsApp lead recorded successfully."
    });
  } catch (error) {
    console.error("WhatsApp lead API error:", error);
    return NextResponse.json({ status: "error", msg: "Internal server error." }, { status: 500 });
  }
}
