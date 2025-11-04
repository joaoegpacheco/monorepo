import React from 'react';

function SubmitButton({ text, disabled = false }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`w-full sm:w-auto font-bold py-2.5 sm:py-2 px-4 sm:px-6 rounded text-sm sm:text-base transition-colors focus:outline-none focus:ring-0 ${
        disabled
          ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
          : 'bg-rd-station hover:bg-rd-station-dark active:bg-rd-station-dark text-white'
      }`}
    >
      {text}
    </button>
  );
}

export default SubmitButton;
