import React, { type JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth/use-auth.hook';

export const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
};
