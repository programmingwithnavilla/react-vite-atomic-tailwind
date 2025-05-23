import React from "react";
import type { InputProps } from "./input.type";

const Input: React.FC<InputProps> = ({
  id,
  type = "text",
  value,
  onChange,
  className = "",
}) => (
  <input
    id={id}
    type={type}
    value={value}
    onChange={onChange}
    className={`border border-gray-300 rounded px-3 py-2 w-full ${className}`}
  />
);

export default Input;
