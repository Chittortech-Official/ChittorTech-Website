import { NextResponse } from "next/server";
import { adminMessaging } from "@/lib/firebase-admin";

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, message, type, target, targetClientId } = body;

    if (!title || !message || !target) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!adminMessaging) {
      return NextResponse.json(
        { error: "Firebase Admin SDK not initialized. Missing environment variables." },
        { status: 500 }
      );
    }

    // Determine FCM topic based on target
    let topic = "";
    if (target === "ALL") {
      topic = "all_users";
    } else if (target === "CLIENTS") {
      topic = "clients";
    } else if (target === "GUESTS") {
      topic = "guests";
    } else if (target === "SPECIFIC_CLIENT") {
      if (!targetClientId) {
        return NextResponse.json({ error: "Missing targetClientId for SPECIFIC_CLIENT target" }, { status: 400 });
      }
      // Sanitize client ID to be a valid FCM topic [a-zA-Z0-9-_.~%]+
      const sanitizedId = targetClientId.replace(/[^a-zA-Z0-9-_.~%]/g, "_");
      topic = `client_${sanitizedId}`;
    } else {
      return NextResponse.json({ error: "Invalid target" }, { status: 400 });
    }

    const payload = {
      notification: {
        title: title,
        body: message,
      },
      data: {
        type: type || "INFO",
        target: target,
        click_action: "FLUTTER_NOTIFICATION_CLICK", // common default for Flutter apps
      },
      android: {
        priority: "high",
        notification: {
          sound: "default",
        },
      },
      apns: {
        payload: {
          aps: {
            sound: "default",
            contentAvailable: true,
          },
        },
        headers: {
          "apns-priority": "10",
        },
      },
      topic: topic,
    };

    const response = await adminMessaging.send(payload);

    return NextResponse.json({
      success: true,
      message: `Successfully sent message to topic: ${topic}`,
      response,
    });
  } catch (error) {
    console.error("Error sending FCM message:", error);
    return NextResponse.json(
      { error: "Failed to send notification", details: error.message },
      { status: 500 }
    );
  }
}
