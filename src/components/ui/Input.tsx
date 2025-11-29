import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className = "", ...rest }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        className={`px-3 py-2 border rounded-md outline-none text-sm
          focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
          ${error ? "border-red-500" : "border-gray-300"}
          ${className}
        `}
        {...rest}
      />

      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
