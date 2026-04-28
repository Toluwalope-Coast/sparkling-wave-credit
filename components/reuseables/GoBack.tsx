// @/components/GoBack.tsx
"use client";

import { useRouter } from "next/navigation";

interface GoBackProps {
  onGoBack?: () => void; // Optional callback for additional behavior
}

const GoBack: React.FC<GoBackProps> = ({ onGoBack }) => {
  const router = useRouter();

  // Function to navigate to the previous page
  const closeAndReturn = () => {
    if (onGoBack) {
      onGoBack(); // Execute the additional callback if provided
    }
    router.back(); // Always navigate back to the previous page
  };

  return (
    <button onClick={closeAndReturn} className="bg-gray-200 py-2 px-4 rounded">
      Close
    </button>
  );
};

export default GoBack;
