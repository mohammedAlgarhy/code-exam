import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-gray-800/90 backdrop-blur-md rounded-xl p-6 max-w-md w-full mx-4 border border-white/20 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose} className="mt-4 text-gray-300 hover:text-white transition">
          Close
        </button>
      </div>
    </div>
  );
}
