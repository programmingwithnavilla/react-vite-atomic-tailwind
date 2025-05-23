import React from "react";
import type { ButtonProps } from "./button.type";

const Button: React.FC<ButtonProps> = ({ label, onClick, className = "" }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
