import type { LabelHTMLAttributes } from "react";

export type LabelProps = {
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<
  LabelHTMLAttributes<HTMLLabelElement>,
  "htmlFor" | "className" | "children"
>;
