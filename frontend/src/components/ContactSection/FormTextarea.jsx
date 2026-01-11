import React from "react";

const FormTextarea = ({ name, value, onChange, placeholder, rows = 5 }) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3d5a80] transition-all duration-300 resize-none"
      required
    />
  );
};

export default FormTextarea;
