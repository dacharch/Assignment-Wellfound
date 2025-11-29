import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children, className = "" }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`
          relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md
          animate-fadeIn scale-100 z-10 ${className}
        `}
      >
        {/* Title */}
        {title && (
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">
            {title}
          </h2>
        )}

        {/* Body */}
        {children}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Modal;
