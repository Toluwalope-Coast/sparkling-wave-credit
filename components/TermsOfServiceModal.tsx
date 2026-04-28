// @/components/TermsOfService.tsx

import React from "react";
import ModalPortal from "@/components/ModalPortal";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, children, onClose }) => {
  return (
    <ModalPortal isOpen={true}>
      <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-[2000]">
        <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-lg p-6 relative">
          <h2 className="text-xl text-black font-bold mb-4">{title}</h2>
          {children}
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-[30px]"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
