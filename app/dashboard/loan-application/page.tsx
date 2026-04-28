"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TenureForm from "@/components/reuseables/Tenure";
import LoanOffer from "@/components/reuseables/LoanOffers";
import ApprovalComponent from "@/components/reuseables/Approval";
import Modal from "@/components/TermsOfServiceModal";
import { getSingleApiRequest } from "@/lib/apiRequest"; // Assuming you're using this for API calls

const steps = [
  { id: 1, name: "Select Tenure" },
  { id: 2, name: "Choose Offer" },
  { id: 3, name: "Approval" },
];

export default function LoanApplication() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loanNumration, setLoanNumration] = useState<any>({});
  const [loanOffers, setLoanOffers] = useState<any>({});
  const [showTermsOfServiceModal, setShowTermsOfServiceModal] = useState(false);
  const [outstandingAmountModal, setOutstandingAmountModal] = useState(false);
  const [outstandingRepaymentAmount, setOutstandingRepaymentAmount] =
    useState(0);
  const [outstandingMessage, setOutstandingMessage] = useState("");
  const router = useRouter(); // For navigation

  const handlePrevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  // Function to handle the cancel action (when the user declines the terms)
  const handleTermsDecline = () => {
    setShowTermsOfServiceModal(false);
    router.push("/dashboard"); // Redirect to dashboard if declined
  };

  // Function to handle the accept action (when the user accepts the terms)
  const handleAccept = () => {
    setShowTermsOfServiceModal(false); // Close the modal
  };

  // Fetch the borrower's loan status
  useEffect(() => {
    const checkActiveLoan = async () => {
      try {
        const response = await getSingleApiRequest(
          "/api/loans/check-recent-active-loan/"
        );

        // Destructure the response if it's a valid 200 status
        const { outstanding_repayment_amount, message } = response;

        if (outstanding_repayment_amount > 0.0) {
          setOutstandingRepaymentAmount(outstanding_repayment_amount);
          setOutstandingMessage(message);
          setOutstandingAmountModal(true); // Show the outstanding amount modal
          console.log(
            "Outstanding greater than 0",
            outstanding_repayment_amount
          );
        } else if (
          message === "No recent active loan found, try again after 24 hours."
        ) {
          console.log("Outstanding less than 0", outstanding_repayment_amount);
          setShowTermsOfServiceModal(true); // Show the terms of service modal
        }
      } catch (error) {
        // Check if error is due to a 404 status
        if (isApiError(error)) {
          if (
            error.status === 404 &&
            error.message ===
              "No recent active loan found, try again after 24 hours."
          ) {
            setShowTermsOfServiceModal(true); // Show the terms of service modal
            console.log("404 Response: Showing terms of service modal");
          } else {
            console.error("Error message:", error.message);
          }
        } else {
          console.error("Unexpected error checking active loan:", error);
        }
      }
    };

    checkActiveLoan();
  }, []);

  // Type guard to check if the error is of the expected shape
  function isApiError(
    error: unknown
  ): error is { status: number; message: string } {
    return (
      typeof error === "object" &&
      error !== null &&
      "status" in error &&
      "message" in error
    );
  }

  return (
    <section className="flex items-center justify-center h-[100vh]">
      <div className="bg-background justify-center rounded-lg shadow-lg p-12 md:max-w-[40vw] relative z-10">
        <nav aria-label="Progress">
          <ol role="list" className="flex space-x-2 sm:space-x-8 space-y-0">
            {steps.map((step, index) => (
              <li key={step.name} className="md:flex-1">
                <div
                  className={`group flex w-full flex-col ${
                    currentStep > index
                      ? "border-red-600"
                      : currentStep === index
                      ? "border-red-600"
                      : "border-gray-200"
                  } py-2 pl-4 border-t-4 transition-colors md:pb-0 md:pl-0 md:pt-4`}
                >
                  <span
                    className={`text-sm font-medium ${
                      currentStep >= index ? "text-red-600" : "text-gray-500"
                    }`}
                  >
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              </li>
            ))}
          </ol>
        </nav>

        {currentStep === 0 && (
          <TenureForm setLoanOffers={setLoanOffers} onNext={handleNextStep} />
        )}
        {currentStep === 1 && (
          <LoanOffer
            loanOffers={loanOffers}
            setLoanNumration={setLoanNumration}
            onNext={handleNextStep}
            onPrev={handlePrevStep}
          />
        )}
        {currentStep === 2 && (
          <ApprovalComponent loanNumration={loanNumration} />
        )}

        {/* Terms of Service Modal */}
        {showTermsOfServiceModal && (
          <Modal title="Terms of Service" onClose={handleTermsDecline}>
            <p className="text-black">
              Lender can obtain my data from 3rd parties, deduct my salary at
              source, and access accounts linked to me in case of default.
            </p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-gray-300 text-black py-2 px-4 rounded"
                onClick={handleTermsDecline}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white py-2 px-4 rounded"
                onClick={handleAccept}
              >
                Accept
              </button>
            </div>
          </Modal>
        )}

        {/* Outstanding Repayment Modal */}
        {outstandingAmountModal && (
          <Modal
            title="Outstanding Repayment"
            onClose={() => {
              setOutstandingAmountModal(false);
              router.push("/dashboard/my-unpaid-loans"); // Redirect after closing modal
            }}
          >
            <p className="text-black">{outstandingMessage}</p>
            <p className="text-black">
              Outstanding Repayment Amount: {outstandingRepaymentAmount}
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-600 text-white py-2 px-4 rounded"
                onClick={() => {
                  setOutstandingAmountModal(false);
                  router.push("/dashboard/my-unpaid-loans"); // Redirect after clicking close
                }}
              >
                Close
              </button>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
}
