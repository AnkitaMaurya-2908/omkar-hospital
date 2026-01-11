import React from "react";

const FormSelect = ({ name, value, onChange, options, placeholder }) => {
  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#3d5a80] transition-all duration-300 cursor-pointer"
        required
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default FormSelect;
