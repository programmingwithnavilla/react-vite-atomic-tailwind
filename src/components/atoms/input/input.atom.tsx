import React from "react";
import type { InputProps } from "./input.type";

export const Input: React.FC<InputProps> = ({
  id,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  className = "",
  disabled,
  readOnly,
  required,
  autoFocus,
  autoComplete,
  maxLength,
  minLength,
  min,
  max,
  pattern,
  inputMode,
  ...rest
}) => (
  <input
    id={id}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    onFocus={onFocus}
    placeholder={placeholder}
    className={`border border-gray-300 rounded px-3 py-2 w-full ${className}`}
    disabled={disabled}
    readOnly={readOnly}
    required={required}
    autoFocus={autoFocus}
    autoComplete={autoComplete}
    maxLength={maxLength}
    minLength={minLength}
    min={min}
    max={max}
    pattern={pattern}
    inputMode={inputMode}
    {...rest}
  />
);
