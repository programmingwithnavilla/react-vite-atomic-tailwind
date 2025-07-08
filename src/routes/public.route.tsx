import React, { type JSX } from "react";

export const PublicRoute: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  return children;
};
