import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl animate-in slide-in-from-right duration-300 ${
      type === 'success' ? 'bg-[#088395] text-white' : 'bg-red-600 text-white'
    }`}>
      {type === 'success' ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
      <p className="font-bold">{message}</p>
      <button onClick={onClose} className="ml-4 hover:opacity-70 transition-opacity">
        <X size={20} />
      </button>
    </div>
  );
};

export default Toast;
