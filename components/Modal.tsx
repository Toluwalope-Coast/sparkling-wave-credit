import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-lg p-4 max-w-lg w-full"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 p-1 rounded-full"
        >
          X
        </button>
        <div>{children}</div>
      </motion.div>
    </div>
  );
};

export default Modal;
