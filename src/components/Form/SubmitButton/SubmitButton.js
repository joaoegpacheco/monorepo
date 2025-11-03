import React from 'react';

function SubmitButton({ text, disabled = false }) {
  return (
    <button 
      type="submit" 
      disabled={disabled}
      className={`font-bold py-2 px-4 rounded ${
        disabled 
          ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
          : 'bg-blue-500 hover:bg-blue-700 text-white'
      }`}
    >
      {text}
    </button>
  );
}

export default SubmitButton;
