import React from "react";

interface TextBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TextBox: React.FC<TextBoxProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default TextBox;
