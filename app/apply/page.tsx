// @/app/unauthorised_loan/page.tsx
"use client";

import { useState } from "react";
import TenureForm from "@/components/reuseables/Tenure";
import LoanOffer from "@/components/reuseables/LoanOffers";
import ApprovalComponent from "@/components/reuseables/Approval";

// Define steps
const steps = [
  { id: 1, name: "Select Tenure" },
  { id: 2, name: "Choose Offer" },
  { id: 3, name: "Approval" },
];

export default function LoanApplication() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loanNumration, setLoanNumration] = useState<any>({});
  const [loanOffers, setLoanOffers] = useState<any>({}); // for the Loan Numerations

  // Callback to handle previous step
  const handlePrevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  // Callback to handle next step
  const handleNextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  return (
    <section className="flex items-center justify-center h-[100vh]">
      <div className="bg-background justify-center rounded-lg shadow-lg p-12 space-y-8 md:max-w-[40vw] relative z-10">
        {/* Progress steps */}
        <nav aria-label="Progress">
          <ol
            role="list"
            className="flex space-x-2 sm:space-x-8 pb-8 space-y-0"
          >
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

        {/* Step Forms */}
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
      </div>
    </section>
  );
}
