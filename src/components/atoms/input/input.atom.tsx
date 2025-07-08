import React from "react";
import type { InputProps } from "./input.type";

export const Input: React.FC<InputProps> = ({ className = "", ...rest }) => {
  return (
    <input
      className={`border border-gray-300 rounded px-3 py-2 w-full ${className}`}
      {...rest}
    />
  );
};
