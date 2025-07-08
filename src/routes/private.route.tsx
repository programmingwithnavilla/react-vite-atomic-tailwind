import React, { type JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface PrivateRouteProps {
  children: JSX.Element;
  roles: string[];
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  roles,
}) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (!roles.includes(user.role)) return <Navigate to="/landing" replace />;

  return children;
};
