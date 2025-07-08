import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  label?: string;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
