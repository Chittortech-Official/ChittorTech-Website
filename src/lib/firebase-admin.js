import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";
import { getFirestore } from "firebase-admin/firestore";

let messaging = null;
let firestore = null;

if (!getApps().length) {
  try {
    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY
      ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
      : undefined;

    if (projectId && clientEmail && privateKey) {
      const app = initializeApp({
        credential: cert({
          projectId,
          clientEmail,
          privateKey,
        }),
      });
      messaging = getMessaging(app);
      firestore = getFirestore(app);
      console.log("Firebase Admin SDK initialized successfully");
    }
  } catch (error) {
    console.warn("Firebase Admin initialization notice:", error.message);
  }
} else {
  try {
    messaging = getMessaging();
    firestore = getFirestore();
  } catch (err) {
    console.warn("Firebase Admin service notice:", err.message);
  }
}

export const adminMessaging = messaging;
export const adminDb = firestore;

