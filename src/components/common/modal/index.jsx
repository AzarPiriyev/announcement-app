import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Modal kapalıysa render etme

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <button 
          onClick={onClose} 
          className="text-red-500 font-bold text-lg absolute top-3 right-3">
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
