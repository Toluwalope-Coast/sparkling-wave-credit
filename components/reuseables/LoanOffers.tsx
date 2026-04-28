// @/components/reusable//LoanOffers.tsx

"use client";
import { useForm } from "react-hook-form";
import { postApiRequest } from "@/lib/apiRequest";
import { ToastContainer, toast } from "react-toastify";
import { getTokenFromCookies } from "@/lib/cookies";
import { useState } from "react";

interface LoanOfferFormProps {
  onNext: () => void; // Callback for the next action to the parent component
  onPrev: () => void; // Callback for the back action to the parent component
  loanOffers: {
    full_offer: number;
    seventy_five_percent_offer: number;
  };
  setLoanNumration: (loanNumration: any) => void; // Callback to update loan numeration in the parent
}

interface LoanFormInputs {
  amount: string;
}

export default function LoanOffer({
  onNext,
  onPrev,
  loanOffers,
  setLoanNumration,
}: LoanOfferFormProps) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoanFormInputs>({
    defaultValues: { amount: "" },
  });

  // Function to handle form submission and API call
  const onSubmit = async (data: LoanFormInputs) => {
    const token = getTokenFromCookies();
    setLoading(true);
    try {
      const response = await postApiRequest(
        "/api/loans/handle-approval/",
        {
          loan_selected: data.amount,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );

      if (!response.loan_numeration) {
        const errorText = await response;
        throw new Error(`Loan approval failed: ${errorText}`);
      }

      const { loan_numeration, message } = await response;
      toast.success(message);
      setLoanNumration(loan_numeration); // Send loan numeration back to the parent component
      setLoading(false);
      onNext(); // Navigate to the next step
    } catch (error: unknown) {
      console.error("Error approving loan:", error);

      const errorMessage =
        error instanceof Error
          ? error.message
          : "An error occurred while approving the loan.";
      toast.error(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
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
      <fieldset>
        <legend className="font-semibold mb-4">Choose Loan Amount</legend>

        {/* Radio button for full offer */}
        <div className="mb-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="full_offer"
              {...register("amount", { required: "Amount is required" })}
            />
            {loanOffers.full_offer.toLocaleString()} (Full Offer)
          </label>
        </div>

        {/* Radio button for 75% offer */}
        <div className="mb-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="seventy_five_percent_offer"
              {...register("amount", { required: "Amount is required" })}
            />
            {loanOffers.seventy_five_percent_offer.toLocaleString()} (75% Offer)
          </label>
        </div>

        {errors.amount && (
          <span role="alert" className="text-red-500">
            {errors.amount.message as React.ReactNode}
          </span>
        )}
      </fieldset>

      <div className="flex justify-between mt-4">
        <button
          type="button"
          className="bg-gray-300 text-black py-2 px-4 rounded"
          onClick={onPrev}
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-red-600 text-white py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center">
              Processing
              <span className="spin mx-2 w-4 h-4 border-2 border-t-2 border-white rounded-full"></span>
            </span>
          ) : (
            "Next"
          )}
        </button>
      </div>
    </form>
  );
}
