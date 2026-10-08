import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, setLogLevel } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyCjfLMuwyo4SY_uTjbMSPsEYagnydMPntE",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "chittor-tech.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "chittor-tech",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "chittor-tech.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "7685535660",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:7685535660:web:bc2dae8715c9bb848bac09",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-K60TEX6DJ3",
};

// Set Firestore log level to silent to prevent noisy backend disconnect logs
try {
  setLogLevel("silent");
} catch {
  // Ignore in environments where setLogLevel is restricted
}

// Client-side suppression of benign offline network timeouts from Next.js error overlay
if (typeof window !== "undefined" && !window.__ct_firestore_error_handler_installed) {
  window.__ct_firestore_error_handler_installed = true;
  const originalError = console.error;
  console.error = function (...args) {
    const combined = args
      .map((a) => {
        if (!a) return "";
        if (typeof a === "string") return a;
        if (a instanceof Error) return a.message + " " + (a.stack || "");
        try {
          return JSON.stringify(a);
        } catch {
          return String(a);
        }
      })
      .join(" ");

    // Suppress Firestore 10-second backend unreachable error & offline operating notice
    if (
      combined.includes("Could not reach Cloud Firestore backend") ||
      combined.includes("Backend didn't respond within 10 seconds") ||
      combined.includes("client will operate in offline mode") ||
      combined.includes("client is offline") ||
      combined.includes("Failed to get document because the client is offline")
    ) {
      console.warn("[Firestore Disconnected / Offline Mode]:", ...args);
      return;
    }

    originalError.apply(console, args);
  };
}

// Initialize Firebase once
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
