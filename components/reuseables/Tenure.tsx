// @/components/reusable/tenure.tsx
"use client";

import { useForm } from "react-hook-form";
import { postApiRequest } from "@/lib/apiRequest";
import { toast } from "react-toastify";
import { deleteTokenFromCookies, getTokenFromCookies } from "@/lib/cookies";
import { useState } from "react";
import GoBack from "./GoBack";
import {
  usePathname,
  useRouter,
} from "next/navigation";

interface TenureFormProps {
  setLoanOffers: (loanOffers: any) => void; // Callback to send loan offers to the parent
  onNext: () => void; // Callback to navigate to the next step
}

export default function TenureForm({ onNext, setLoanOffers }: TenureFormProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { tenure: "" },
  });

  const token = getTokenFromCookies();

  // Handle form submission and API call
  const onSubmit = async (data: { tenure: string }) => {
    setLoading(true);
    try {
      const response = await postApiRequest(
        "/api/loans/handle-tenure/",
        {
          tenure: data.tenure,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );

      if (!response.loan_offers) {
        const errorText = await response.text;
        throw new Error(`Failed to fetch loan offers: ${errorText}`);
      }

      const { loan_offers, message } = response;
      toast.success(message);
      setLoanOffers(loan_offers); // Properly set the loan offers in the parent
      setLoading(false);
      onNext(); // Navigate to the next step

      // Reset form if needed
      reset({ tenure: "" });
    } catch (error: unknown) {
      console.error("Error fetching loan offers:", error);

      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred while fetching loan offers.");
      }
    }
  };

  // Handle go back action with route-based logic
  const handleGoBack = () => {
    deleteTokenFromCookies();
    // toast.info("Token deleted.");
    router.back();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-3 pt-12"
    >
      <label htmlFor="tenure" className="flex flex-col font-semibold">
        Select Tenure
      </label>
      <select
        id="tenure"
        {...register("tenure", { required: "Tenure is required" })}
        aria-invalid={errors.tenure ? "true" : "false"}
        className="border rounded-md p-2"
      >
        <option value="">Select tenure</option>
        <option value="1">1 month</option>
        <option value="2">2 months</option>
        <option value="3">3 months</option>
      </select>
      {errors.tenure && (
        <span role="alert" className="text-red-500">
          {errors.tenure.message as React.ReactNode}
        </span>
      )}

      <div className="flex justify-between items-center">
        {pathname === "/apply" && <GoBack onGoBack={handleGoBack} />}
        <button
          type="submit"
          className="bg-red-600 text-white py-2 px-4 rounded mt-2 flex items-center justify-center"
          disabled={loading} // Disable button while loading
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
