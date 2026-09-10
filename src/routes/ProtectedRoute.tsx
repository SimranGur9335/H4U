import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserRole } from '../types/auth';

export interface ProtectedRouteProps {
  allowedRoles?: UserRole[];
  isAuthenticated?: boolean;
  userRole?: UserRole | null;
  redirectTo?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  allowedRoles,
  isAuthenticated = false,
  userRole = null,
  redirectTo = '/unauthorized',
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  if (allowedRoles && userRole && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};
