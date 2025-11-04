import React from 'react';

function Checkbox({ children, className, ...props }) {
  return (
    <label className="flex items-start cursor-pointer w-full hover:bg-gray-50 rounded p-1 -m-1">
      <input
        type="checkbox"
        className="h-4 w-4 sm:h-5 sm:w-5 border-gray-300 rounded cursor-pointer flex-shrink-0 mt-0.5 bg-white checked:bg-rd-station checked:border-rd-station"
        style={{
          pointerEvents: 'auto',
          accentColor: '#0073E6',
        }}
        {...props}
      />
      <span className={`ml-2 break-words flex-1 select-none ${className || ''}`}>
        {children}
      </span>
    </label>
  );
}

export default Checkbox;
