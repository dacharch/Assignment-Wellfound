import React from "react";

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { label: string; value: string }[];
}

const Select: React.FC<SelectProps> = ({
  label,
  error,
  options,
  className = "",
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <select
        className={`
          px-3 py-2 border rounded-md text-sm outline-none 
          focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
          ${error ? "border-red-500" : "border-gray-300"}
          ${className}
        `}
        {...rest}
      >
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default Select;
