import React from "react";
import type { ButtonProps } from "./button.type";

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  loading = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`px-4 py-2 rounded transition-colors ${
        disabled || loading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600 text-white"
      } ${className}`}
    >
      {loading ? "Loading..." : label}
    </button>
  );
};
