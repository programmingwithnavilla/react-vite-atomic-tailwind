import React from "react";
import type { LabelProps } from "./label.type";

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  children,
  className = "",
  ...rest
}) => (
  <label
    htmlFor={htmlFor}
    className={`block mb-1 text-sm font-medium text-gray-700 ${className}`}
    {...rest}
  >
    {children}
  </label>
);
