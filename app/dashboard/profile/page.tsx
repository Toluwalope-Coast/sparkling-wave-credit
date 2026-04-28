"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect, useRef } from "react";
import { getSingleApiRequest, updateApiRequest } from "@/lib/apiRequest";
import LoadingSpinner from "../components/LoadingSpinner";
import Image from "next/image";
import {
  uploadProfileImage,
  validateProfileImage,
  compressImage,
} from "@/lib/profileImage";
import { getTokenFromCookies } from "@/lib/cookies";
import { Edit } from "lucide-react";
import {
  getGenderUpdateFlagFromCookies,
  saveGenderUpdateFlagToCookies,
} from "@/lib/genderUpdate";
import { toast } from "react-toastify";
import { useAuth } from "../components/context/AuthContext";
// Zod schema for form validation
const schema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z
    .string()
    .length(11, { message: "Phone Number must be 11 digits" }),
  gender: z.string().nonempty({ message: "Gender is required" }),
});

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  profileImageUrl: string;
  accountName: string;
  accountNumber: string;
  bankName: string;
  remitaID: string;
}

export default function ProfilePage() {
  const { userData, updateUserData } = useAuth();
  const [loading, setLoading] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const [initialGender, setInitialGender] = useState<string>("");
  const [isGenderUpdated, setIsGenderUpdated] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Initialize form data from userData context
  useEffect(() => {
    if (userData) {
      const formData: FormData = {
        firstName: userData.first_name || "",
        lastName: userData.last_name || "",
        email: userData.email || "",
        phoneNumber: userData.phone_number || "",
        gender: userData.gender || "",
        profileImageUrl: userData.profile_image_url || "",
        accountName: "", // These might not be in userData, keep empty for now
        accountNumber: "",
        bankName: "",
        remitaID: userData.remita_customer_id || "",
      };

      setProfileImageUrl(formData.profileImageUrl);
      setInitialGender(formData.gender);
      setIsGenderUpdated(getGenderUpdateFlagFromCookies());
      reset(formData);
    }
  }, [userData, reset]);

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    setLoading(true); // Start loading
    try {
      const token = getTokenFromCookies(); // Get auth token
      const endpoint = "/api/borrowers/update-profile/"; // API endpoint for updating profile

      // Prepare data to submit
      const dataToSubmit = {
        profile_image_url: profileImageUrl || formData.profileImageUrl, // Correct the key for profile image
        gender: formData.gender, // Always include gender
      };

      // Make API request to update profile
      await updateApiRequest(endpoint, token, dataToSubmit);

      // Update the context with the new data
      updateUserData({
        profile_image_url: profileImageUrl || formData.profileImageUrl,
        gender: formData.gender,
      });

      toast.success("Profile updated successfully!"); // Success message
    } catch (error) {
      console.error("Failed to update profile:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to update profile. Please try again.";
      toast.error(errorMessage); // Error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  /**
   * Handles the file change event and uploads the selected file to Firebase Storage.
   * Then updates the user's profile with the uploaded image URL.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The file input change event.
   */
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return; // Return early if no file is selected

    setLoading(true); // Start loading spinner

    try {
      // Upload the file to Firebase Storage
      const downloadURL = await handleImageUpload(file);
      setProfileImageUrl(downloadURL); // Set uploaded image URL in state

      // Update the context immediately for instant UI update
      updateUserData({
        profile_image_url: downloadURL,
      });

      toast.success("Image uploaded successfully!");

      // Update the profile with the uploaded image URL and gender
      await updateUserProfile(downloadURL);
      toast.success("Profile updated successfully with new image!");
    } catch (error) {
      console.error("Image upload or profile update failed:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong.";
      toast.error(errorMessage); // Show error message in toast
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  /**
   * Handles profile image upload with validation and compression.
   * @param {File} file - The image file to be uploaded.
   * @returns {Promise<string>} The download URL of the uploaded file.
   */
  const handleImageUpload = async (file: File): Promise<string> => {
    // Validate file first
    const validation = validateProfileImage(file);
    if (!validation.success) {
      throw new Error(validation.error || "File validation failed");
    }

    // Compress image if it's large
    let fileToUpload = file;
    if (file.size > 1024 * 1024) {
      // If larger than 1MB, compress it
      fileToUpload = await compressImage(file, 0.8, 800, 800);
    }

    // Upload to Firebase Storage
    const result = await uploadProfileImage(fileToUpload);

    if (!result.success) {
      throw new Error(result.error || "Upload failed");
    }

    return result.url!;
  };

  /**
   * Updates the user profile with the new image URL and existing gender.
   * @param {string} imageUrl - The new profile image URL.
   * @returns {Promise<void>} Resolves when the profile update is successful.
   */
  const updateUserProfile = async (imageUrl: string): Promise<void> => {
    const token = getTokenFromCookies(); // Retrieve the token from cookies
    const endpoint = "/api/borrowers/update-profile/"; // API endpoint for updating profile

    const dataToSubmit = {
      profile_image_url: imageUrl, // Use the new profile image URL
      gender: initialGender || "not-specified", // Keep the current gender or default to 'not-specified'
    };

    // Make the API request to update the profile with the new data
    await updateApiRequest(endpoint, token, dataToSubmit);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  if (!userData || (loading && !profileImageUrl)) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Profile Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Manage your personal information and profile settings
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Profile Picture Section */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 dark:from-green-500 dark:to-emerald-500 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative group">
              <div className="relative">
                <Image
                  src={profileImageUrl || "/assets/noavatar.png"}
                  alt="Profile Picture"
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-white shadow-lg object-cover w-24 h-24 sm:w-32 sm:h-32"
                />

                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={triggerFileInput}
                className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 group-hover:bg-red-500 group-hover:text-white"
                disabled={loading}
              >
                <Edit size={16} />
              </button>
            </div>

            <div className="text-center sm:text-left text-white">
              <h2 className="text-xl sm:text-2xl font-semibold mb-1">
                Profile Picture
              </h2>
              <p className="text-red-100 dark:text-green-100 text-sm">
                Click the edit button to update your photo
              </p>
              <p className="text-red-100 dark:text-green-100 text-xs mt-1">
                Supports JPG, PNG, GIF up to 10MB
              </p>
            </div>
          </div>

          <input
            ref={fileInputRef}
            id="profile-picture-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 sm:p-8 space-y-6"
        >
          {/* Personal Information Section */}
          <div className="space-y-6">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProfileInput
                  id="remitaID"
                  label="Remita ID"
                  register={register("remitaID")}
                  readOnly
                  errors={errors.remitaID}
                  icon="🏦"
                />
                <ProfileInput
                  id="firstName"
                  label="First Name"
                  register={register("firstName")}
                  readOnly
                  errors={errors.firstName}
                  icon="👤"
                />
                <ProfileInput
                  id="lastName"
                  label="Last Name"
                  register={register("lastName")}
                  readOnly
                  errors={errors.lastName}
                  icon="👤"
                />
                <ProfileInput
                  id="email"
                  label="Email Address"
                  type="email"
                  register={register("email")}
                  readOnly
                  errors={errors.email}
                  icon="📧"
                />
                <ProfileInput
                  id="phoneNumber"
                  label="Phone Number"
                  type="tel"
                  register={register("phoneNumber")}
                  readOnly
                  errors={errors.phoneNumber}
                  icon="📱"
                />
              </div>
            </div>

            {/* Gender Selection */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Gender Information
              </h3>

              <div className="relative">
                <Label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Gender
                </Label>
                <div className="relative">
                  <select
                    id="gender"
                    disabled={isGenderUpdated}
                    {...register("gender")}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 dark:focus:ring-green-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="male">👨 Male</option>
                    <option value="female">👩 Female</option>
                  </select>
                  {isGenderUpdated && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <span className="text-green-500 text-sm">✓</span>
                    </div>
                  )}
                </div>
                {isGenderUpdated && (
                  <p className="text-green-600 dark:text-green-400 text-sm mt-1">
                    Gender has been updated and cannot be changed again
                  </p>
                )}
                {errors.gender && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.gender.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Button
              type="submit"
              disabled={loading}
              className="flex-1 bg-red-500 hover:bg-red-600 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Updating Profile...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  💾 Update Profile
                </span>
              )}
            </Button>

            <Button
              type="button"
              onClick={triggerFileInput}
              disabled={loading}
              variant="outline"
              className="flex-1 sm:flex-none border-2 border-red-500 dark:border-green-500 text-red-500 dark:text-green-500 hover:bg-red-50 dark:hover:bg-green-50 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
            >
              📷 Change Photo
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

interface ProfileInputProps {
  id: string;
  label: string;
  type?: string;
  register: any;
  readOnly?: boolean;
  errors?: any;
  icon?: string;
}

const ProfileInput: React.FC<ProfileInputProps> = ({
  id,
  label,
  type = "text",
  register,
  readOnly = false,
  errors,
  icon,
}) => (
  <div className="space-y-2">
    <Label
      htmlFor={id}
      className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      {icon && <span className="text-lg">{icon}</span>}
      {label}
    </Label>
    <div className="relative">
      <Input
        id={id}
        type={type}
        readOnly={readOnly}
        {...register}
        className={`
          w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg
          bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white
          focus:ring-2 focus:ring-red-500 dark:focus:ring-green-500 focus:border-transparent
          transition-all duration-200
          ${
            readOnly
              ? "cursor-not-allowed opacity-75"
              : "hover:border-gray-400 dark:hover:border-gray-500"
          }
          ${errors ? "border-red-500 dark:border-red-400" : ""}
        `}
      />
      {readOnly && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-gray-400 dark:text-gray-500 text-sm">
            Read-only
          </span>
        </div>
      )}
    </div>
    {errors && (
      <span className="text-red-500 dark:text-red-400 text-sm flex items-center gap-1">
        <span>⚠️</span>
        {errors.message}
      </span>
    )}
  </div>
);
