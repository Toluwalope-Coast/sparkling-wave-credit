"use client";

import { useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { deleteTokenFromCookies } from "@/lib/cookies"; // Adjust the import path as needed

export const useHandleLogout = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  const isProcessingRef = useRef(false);

  // Confirm and perform logout
  const confirmLogout = useCallback(async () => {
    // Prevent multiple simultaneous logout attempts
    if (isProcessingRef.current) return;

    isProcessingRef.current = true;
    setIsLoggingOut(true);

    try {
      // Close modal first to prevent DOM issues
      setIsModalVisible(false);

      // Small delay to ensure modal is closed before navigation
      await new Promise((resolve) => setTimeout(resolve, 100));

      deleteTokenFromCookies();
      localStorage.removeItem("isLoggedIn");

      // Navigate to login page
      router.replace("/login");
    } catch (error) {
      console.error("Failed to logout:", error);
    } finally {
      setIsLoggingOut(false);
      isProcessingRef.current = false;
    }
  }, [router]);

  // Trigger logout process and show confirmation modal
  const handleLogout = useCallback(() => {
    if (!isProcessingRef.current) {
      setIsModalVisible(true);
    }
  }, []);

  const cancelLogout = useCallback(() => {
    if (!isProcessingRef.current) {
      setIsModalVisible(false);
    }
  }, []);

  return {
    isModalVisible,
    isLoggingOut,
    confirmLogout,
    handleLogout,
    cancelLogout,
  };
};
