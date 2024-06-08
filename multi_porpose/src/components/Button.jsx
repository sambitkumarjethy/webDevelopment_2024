// src/components/Button.js
import React from "react";

const Button = ({ label, onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white`}
    >
      {label}
    </button>
  );
};

export default Button;
