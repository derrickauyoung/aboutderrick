// Modal.js - A reusable popup component that matches your portfolio styling
import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Modal = ({ isOpen, onClose, title, children, maxWidth = 'max-w-4xl' }) => {
  const { isDarkMode } = useTheme();

  // Close modal on escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Don't render anything if modal is closed
  if (!isOpen) return null;

  return (
    // Modal backdrop - covers entire screen
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        // Close modal when clicking backdrop (but not the modal content)
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Backdrop overlay with blur effect */}
      <div 
        className={`absolute inset-0 transition-all duration-300 ${
          isDarkMode 
            ? 'bg-black/70 backdrop-blur-sm' 
            : 'bg-black/50 backdrop-blur-sm'
        }`}
      />
      
      {/* Modal content container */}
      <div 
        className={`relative w-full ${maxWidth} max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 scale-100 ${
          isDarkMode 
            ? 'bg-gray-900 border border-gray-700' 
            : 'bg-white border border-gray-200'
        }`}
      >
        {/* Modal header with title and close button */}
        <div className={`flex items-center justify-between p-6 border-b ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <h2 className={`text-2xl font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h2>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors duration-200 hover:bg-opacity-80 ${
              isDarkMode 
                ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Modal body - scrollable content area */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;