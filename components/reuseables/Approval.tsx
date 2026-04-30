// @/components/reusable/Approval.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { getSingleApiRequest } from "@/lib/apiRequest";
import { getTokenFromCookies } from "@/lib/cookies";
import Link from "next/link";
import ModalPortal from "@/components/ModalPortal";

interface ApprovalComponentProps {
  loanNumration: {
    principal_amount: number;
    loan_tenure: string;
    monthly_repayment: number;
  };
}

export default function ApprovalComponent({
  loanNumration,
}: ApprovalComponentProps) {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleLoanApproval = async () => {
    setLoading(true);
    try {
      const token = getTokenFromCookies();
      const response = await getSingleApiRequest(
        "/api/loans/handle-processing/",
        token || undefined
      );

      if (response) {
        setLoading(false);
        setShowModal(true); // Show success modal
      } else {
        const errorText = await response;
        toast.error(`Loan approval failed: ${errorText}`);
      }
    } catch (error) {
      console.error("Error approving loan:", error);
      toast.error("An error occurred while approving the loan.");
    }
  };

  const handleCancel = () => {
    router.push("/dashboard");
  };

  return (
    <div className="space-y-3">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <p>
        <strong>Loan Amount:</strong>{" "}
        {loanNumration.principal_amount.toLocaleString()}
      </p>
      <p>
        <strong>Tenure:</strong> {loanNumration.loan_tenure}
      </p>
      <p>
        <strong>Monthly Repayment:</strong>{" "}
        {loanNumration.monthly_repayment.toLocaleString()}
      </p>
      <p>
        <strong>Repayment Due:</strong> On the next payday
      </p>
      <p className="text-sm">
        Terms and Conditions apply. Read at{" "}
        <Link
          href="/terms-and-conditions"
          className="text-red-500 dark:text-green-500 font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.sharpcreditng.com
        </Link>
      </p>

      <div className="flex space-x-4 mt-4 justify-between">
        <button
          className="bg-gray-200 py-2 px-4 rounded"
          onClick={handleCancel}
        >
          Decline
        </button>

        <button
          className="bg-red-600 text-white py-2 px-4 rounded"
          onClick={handleLoanApproval}
        >
          {loading ? (
            <span className="flex items-center">
              Processing
              <span className="spin mx-2 w-4 h-4 border-2 border-t-2 border-white rounded-full"></span>
            </span>
          ) : (
            "I Confirm and Agree"
          )}
        </button>
      </div>

      <ModalPortal isOpen={showModal}>
        <div
          className="fixed inset-0 flex items-center justify-center text-center bg-black bg-opacity-80 z-[9999]"
          onClick={handleCancel}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-[35vw] mx-4"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing on inside click
          >
            <p className="text-[1.2rem]">
              Your loan has been sent for processing. You will receive an SMS
              notification from your bank shortly.
            </p>
            <button
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
              onClick={handleCancel}
            >
              Close
            </button>
          </div>
        </div>
      </ModalPortal>
    </div>
  );
}
