import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
    process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId:
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ||
    process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Export the app instance
export default app;

// Firebase storage paths constants
export const STORAGE_PATHS = {
  PROFILE_IMAGES: "profile-images",
  LOAN_DOCUMENTS: "loan-documents",
  ID_DOCUMENTS: "id-documents",
  BANK_STATEMENTS: "bank-statements",
  PAYSLIPS: "payslips",
} as const;

// File type constants
export const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
] as const;

export const ALLOWED_DOCUMENT_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
] as const;

// File size limits (in bytes)
export const FILE_SIZE_LIMITS = {
  PROFILE_IMAGE: 2 * 1024 * 1024, // 2MB
  DOCUMENT: 5 * 1024 * 1024, // 5MB
  LARGE_DOCUMENT: 10 * 1024 * 1024, // 10MB
} as const;
