import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { storage } from "./firebaseConfig";

export interface UploadResult {
  success: boolean;
  url?: string;
  error?: string;
}

/**
 * Uploads a file to Firebase Storage
 * @param file - The file to upload
 * @param path - The storage path (optional, defaults to 'profile-images')
 * @returns Promise with upload result
 */
export const uploadFileToStorage = async (
  file: File,
  path: string = "profile-images"
): Promise<UploadResult> => {
  try {
    // Check if Firebase is properly configured
    if (!storage) {
      return {
        success: false,
        error:
          "Firebase Storage is not properly configured. Please check your environment variables.",
      };
    }

    // Validate file
    if (!file) {
      return { success: false, error: "No file provided" };
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return {
        success: false,
        error: "Invalid file type. Please upload a JPEG, PNG, or WebP image.",
      };
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      return {
        success: false,
        error: "File size too large. Please upload an image smaller than 5MB.",
      };
    }

    // Generate unique filename
    const timestamp = Date.now();
    const fileExtension = file.name.split(".").pop();
    const fileName = `profile_${timestamp}.${fileExtension}`;
    const storageRef = ref(storage, `${path}/${fileName}`);

    // Upload file
    const snapshot = await uploadBytes(storageRef, file);

    // Get download URL
    const downloadURL = await getDownloadURL(snapshot.ref);

    return {
      success: true,
      url: downloadURL,
    };
  } catch (error) {
    console.error("Firebase upload error:", error);

    // Provide more specific error messages
    if (error instanceof Error) {
      if (
        error.message.includes("ENOTFOUND") ||
        error.message.includes("getaddrinfo")
      ) {
        return {
          success: false,
          error:
            "Network connection issue. Please check your internet connection and try again.",
        };
      }
      if (
        error.message.includes("permission") ||
        error.message.includes("unauthorized")
      ) {
        return {
          success: false,
          error: "Permission denied. Please check your Firebase Storage rules.",
        };
      }
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: false,
      error: "Upload failed. Please try again.",
    };
  }
};

/**
 * Deletes a file from Firebase Storage
 * @param url - The Firebase Storage URL to delete
 * @returns Promise with deletion result
 */
export const deleteFileFromStorage = async (
  url: string
): Promise<UploadResult> => {
  try {
    if (!url) {
      return { success: false, error: "No URL provided" };
    }

    // Extract the file path from the URL
    const urlParts = url.split("/");
    const fileName = urlParts[urlParts.length - 1].split("?")[0];
    const storageRef = ref(storage, `profile-images/${fileName}`);

    await deleteObject(storageRef);

    return { success: true };
  } catch (error) {
    console.error("Firebase delete error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Delete failed",
    };
  }
};

/**
 * Validates if a URL is a Firebase Storage URL
 * @param url - The URL to validate
 * @returns boolean
 */
export const isFirebaseStorageUrl = (url: string): boolean => {
  return url.includes("firebasestorage.googleapis.com");
};

/**
 * Gets the file extension from a Firebase Storage URL
 * @param url - The Firebase Storage URL
 * @returns string - The file extension
 */
export const getFileExtensionFromUrl = (url: string): string => {
  try {
    const urlParts = url.split("/");
    const fileName = urlParts[urlParts.length - 1].split("?")[0];
    return fileName.split(".").pop() || "";
  } catch {
    return "";
  }
};

/**
 * Generates a unique filename for uploads
 * @param originalName - The original file name
 * @param prefix - Optional prefix for the filename
 * @returns string - Unique filename
 */
export const generateUniqueFileName = (
  originalName: string,
  prefix: string = "file"
): string => {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 8);
  const fileExtension = originalName.split(".").pop();
  return `${prefix}_${timestamp}_${randomString}.${fileExtension}`;
};

/**
 * Validates file before upload
 * @param file - The file to validate
 * @param options - Validation options
 * @returns UploadResult
 */
export const validateFile = (
  file: File,
  options: {
    allowedTypes?: string[];
    maxSize?: number;
    required?: boolean;
  } = {}
): UploadResult => {
  const {
    allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"],
    maxSize = 5 * 1024 * 1024, // 5MB
    required = true,
  } = options;

  if (!file && required) {
    return { success: false, error: "No file provided" };
  }

  if (file && !allowedTypes.includes(file.type)) {
    return {
      success: false,
      error: `Invalid file type. Allowed types: ${allowedTypes.join(", ")}`,
    };
  }

  if (file && file.size > maxSize) {
    const maxSizeMB = Math.round(maxSize / (1024 * 1024));
    return {
      success: false,
      error: `File size too large. Maximum size: ${maxSizeMB}MB`,
    };
  }

  return { success: true };
};
