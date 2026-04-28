import {
  uploadFileToStorage,
  deleteFileFromStorage,
  isFirebaseStorageUrl,
} from "./firebase";
import {
  STORAGE_PATHS,
  ALLOWED_IMAGE_TYPES,
  FILE_SIZE_LIMITS,
} from "./firebaseConfig";

export interface ProfileImageResult {
  success: boolean;
  url?: string;
  error?: string;
}

/**
 * Uploads a profile image with specific validation rules
 * @param file - The image file to upload
 * @param userId - Optional user ID for organizing files
 * @returns Promise with upload result
 */
export const uploadProfileImage = async (
  file: File,
  userId?: string
): Promise<ProfileImageResult> => {
  try {
    // Validate file type for profile images
    if (!ALLOWED_IMAGE_TYPES.includes(file.type as any)) {
      return {
        success: false,
        error: "Please upload a valid image file (JPEG, PNG, or WebP)",
      };
    }

    // Validate file size
    if (file.size > FILE_SIZE_LIMITS.PROFILE_IMAGE) {
      return {
        success: false,
        error: "Image size too large. Please upload an image smaller than 2MB.",
      };
    }

    // Generate storage path
    const path = userId
      ? `${STORAGE_PATHS.PROFILE_IMAGES}/${userId}`
      : STORAGE_PATHS.PROFILE_IMAGES;

    // Upload to Firebase Storage
    const result = await uploadFileToStorage(file, path);

    if (!result.success) {
      return {
        success: false,
        error: result.error || "Failed to upload profile image",
      };
    }

    return {
      success: true,
      url: result.url,
    };
  } catch (error) {
    console.error("Profile image upload error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Upload failed",
    };
  }
};

/**
 * Deletes a profile image from storage
 * @param imageUrl - The URL of the image to delete
 * @returns Promise with deletion result
 */
export const deleteProfileImage = async (
  imageUrl: string
): Promise<ProfileImageResult> => {
  try {
    if (!imageUrl || !isFirebaseStorageUrl(imageUrl)) {
      return {
        success: false,
        error: "Invalid image URL",
      };
    }

    const result = await deleteFileFromStorage(imageUrl);

    if (!result.success) {
      return {
        success: false,
        error: result.error || "Failed to delete profile image",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Profile image deletion error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Delete failed",
    };
  }
};

/**
 * Replaces an existing profile image with a new one
 * @param newFile - The new image file
 * @param oldImageUrl - The URL of the old image to delete
 * @param userId - Optional user ID
 * @returns Promise with replacement result
 */
export const replaceProfileImage = async (
  newFile: File,
  oldImageUrl?: string,
  userId?: string
): Promise<ProfileImageResult> => {
  try {
    // Upload new image first
    const uploadResult = await uploadProfileImage(newFile, userId);

    if (!uploadResult.success) {
      return uploadResult;
    }

    // Delete old image if it exists and is a Firebase Storage URL
    if (oldImageUrl && isFirebaseStorageUrl(oldImageUrl)) {
      await deleteProfileImage(oldImageUrl);
    }

    return {
      success: true,
      url: uploadResult.url,
    };
  } catch (error) {
    console.error("Profile image replacement error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Replacement failed",
    };
  }
};

/**
 * Validates profile image file
 * @param file - The file to validate
 * @returns Validation result
 */
export const validateProfileImage = (file: File): ProfileImageResult => {
  if (!ALLOWED_IMAGE_TYPES.includes(file.type as any)) {
    return {
      success: false,
      error: "Please upload a valid image file (JPEG, PNG, or WebP)",
    };
  }

  if (file.size > FILE_SIZE_LIMITS.PROFILE_IMAGE) {
    return {
      success: false,
      error: "Image size too large. Please upload an image smaller than 2MB.",
    };
  }

  return { success: true };
};

/**
 * Gets image dimensions from a file
 * @param file - The image file
 * @returns Promise with image dimensions
 */
export const getImageDimensions = (
  file: File
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve({ width: img.width, height: img.height });
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load image"));
    };

    img.src = url;
  });
};

/**
 * Compresses an image file to reduce size
 * @param file - The image file to compress
 * @param quality - Compression quality (0-1)
 * @param maxWidth - Maximum width
 * @param maxHeight - Maximum height
 * @returns Promise with compressed file
 */
export const compressImage = async (
  file: File,
  quality: number = 0.8,
  maxWidth: number = 800,
  maxHeight: number = 800
): Promise<File> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      // Calculate new dimensions
      let { width, height } = img;

      if (width > height) {
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = (width * maxHeight) / height;
          height = maxHeight;
        }
      }

      // Set canvas dimensions
      canvas.width = width;
      canvas.height = height;

      // Draw and compress
      ctx?.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            const compressedFile = new File([blob], file.name, {
              type: file.type,
              lastModified: Date.now(),
            });
            resolve(compressedFile);
          } else {
            reject(new Error("Failed to compress image"));
          }
        },
        file.type,
        quality
      );
    };

    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = URL.createObjectURL(file);
  });
};
