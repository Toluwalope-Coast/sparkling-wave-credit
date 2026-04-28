// @/dashboard/components/LogoutModal.tsx

import React, { useEffect } from "react";
import ModalPortal from "@/components/ModalPortal";

interface LogoutModalProps {
  isVisible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

// Modal component for logout confirmation
const LogoutModal: React.FC<LogoutModalProps> = ({
  isVisible,
  onConfirm,
  onCancel,
}) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVisible) {
        onCancel();
      }
    };

    if (isVisible) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isVisible, onCancel]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <ModalPortal isOpen={isVisible}>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]"
        onClick={handleBackdropClick}
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md text-center max-w-sm mx-4">
          <p className="text-lg font-bold mb-4 text-black dark:text-white">
            Are you sure you want to log out?
          </p>
          <div className="flex justify-center gap-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              onClick={onConfirm}
            >
              Yes, Logout
            </button>
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default LogoutModal;
