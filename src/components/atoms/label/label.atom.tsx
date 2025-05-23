import React from "react";
import type { LabelProps } from "./label.type";

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  children,
  className = "",
}) => (
  <label htmlFor={htmlFor} className={`block mb-1 font-medium ${className}`}>
    {children}
  </label>
);
