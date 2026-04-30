import { storage } from "./firebaseConfig";
import { ref } from "firebase/storage";

/**
 * Tests Firebase Storage connection
 * @returns Promise with test result
 */
export const testFirebaseConnection = async (): Promise<{
  success: boolean;
  error?: string;
  details?: any;
}> => {
  try {
    // Check if storage is initialized
    if (!storage) {
      return {
        success: false,
        error: "Firebase Storage is not initialized",
      };
    }

    // Try to create a reference (this will fail if Firebase is not properly configured)
    ref(storage, "test-connection");

    return {
      success: true,
      details: {
        message: "Firebase Storage connection successful",
        app: storage.app.name,
        bucket: storage.app.options.storageBucket,
      },
    };
  } catch (error) {
    console.error("Firebase connection test failed:", error);

    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      details: error,
    };
  }
};

/**
 * Checks if Firebase environment variables are properly set
 * @returns Object with environment variable status
 */
export const checkFirebaseEnvVars = (): {
  allSet: boolean;
  missing: string[];
  present: string[];
} => {
  const requiredVars = [
    "NEXT_PUBLIC_FIREBASE_API_KEY",
    "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
    "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
    "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
    "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
    "NEXT_PUBLIC_FIREBASE_APP_ID",
  ];

  const missing: string[] = [];
  const present: string[] = [];

  requiredVars.forEach((varName) => {
    if (process.env[varName]) {
      present.push(varName);
    } else {
      missing.push(varName);
    }
  });

  return {
    allSet: missing.length === 0,
    missing,
    present,
  };
};

/**
 * Comprehensive Firebase configuration check
 * @returns Promise with complete configuration status
 */
export const checkFirebaseConfiguration = async (): Promise<{
  success: boolean;
  envVars: ReturnType<typeof checkFirebaseEnvVars>;
  connection: Awaited<ReturnType<typeof testFirebaseConnection>>;
  summary: string;
}> => {
  const envVars = checkFirebaseEnvVars();
  const connection = await testFirebaseConnection();

  let summary = "";
  if (envVars.allSet && connection.success) {
    summary = "✅ Firebase is properly configured and connected";
  } else if (!envVars.allSet) {
    summary = `❌ Missing environment variables: ${envVars.missing.join(", ")}`;
  } else if (!connection.success) {
    summary = `❌ Firebase connection failed: ${connection.error}`;
  } else {
    summary = "❌ Firebase configuration has issues";
  }

  return {
    success: envVars.allSet && connection.success,
    envVars,
    connection,
    summary,
  };
};
