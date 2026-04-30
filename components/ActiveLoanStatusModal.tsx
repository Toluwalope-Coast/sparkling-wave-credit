import { Button } from "@/components/ui/Button";
import Modal from "@/components/TermsOfServiceModal";
import { useRouter } from "next/navigation";

interface ActiveLoanStatusModalProps {
  outstandingRepaymentAmount: number;
  showActiveLoanModal: boolean;
  setShowActiveLoanModal: (show: boolean) => void;
}

const ActiveLoanStatusModal: React.FC<ActiveLoanStatusModalProps> = ({
  outstandingRepaymentAmount,
  showActiveLoanModal,
  setShowActiveLoanModal,
}) => {
  const router = useRouter();

  const handleOk = () => {
    setShowActiveLoanModal(false);
    router.push("/"); // Redirect to homepage after clicking OK
  };

  if (!showActiveLoanModal) {
    return null;
  }

  return (
    <Modal title="Active Loan">
      <p className="text-black">
        You currently have an active loan with an outstanding amount of{" "}
        <strong>&#x20A6;{outstandingRepaymentAmount}</strong>. Please complete
        the repayment before applying for a new loan.
      </p>
      <div className="flex justify-between mt-4">
        <Button
          className="bg-red-600 text-white dark:bg-green-500 dark:text-black"
          onClick={handleOk}
        >
          OK
        </Button>
      </div>
    </Modal>
  );
};

export default ActiveLoanStatusModal;
