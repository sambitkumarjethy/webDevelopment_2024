// src/components/InputText.js
import React from "react";

const InputText = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id={label}
        name={label}
        type="text"
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring focus:border focus:z-10 sm:text-sm"
      />
    </div>
  );
};

export default InputText;
