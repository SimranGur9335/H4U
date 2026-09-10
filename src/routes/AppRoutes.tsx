import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { UnauthorizedPage } from '../pages/UnauthorizedPage';
import { ROUTES } from './routes.config';
import { useAuth } from '../context/AuthContext';
import { ProtectedRoute } from './ProtectedRoute';
import { BasicDetailsPage } from '../pages/onboarding/BasicDetailsPage';
import { ConsentPage } from '../pages/onboarding/ConsentPage';
import { PersonalizationPage } from '../pages/onboarding/PersonalizationPage';
import { AccessibilityPage } from '../pages/onboarding/AccessibilityPage';
import { AssessmentPage } from '../pages/onboarding/AssessmentPage';
import { DashboardPage } from '../pages/DashboardPage';

export const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.UNAUTHORIZED} element={<UnauthorizedPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        {/* Protected onboarding & dashboard routes */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path={ROUTES.BASIC_DETAILS} element={<BasicDetailsPage />} />
          <Route path={ROUTES.CONSENT} element={<ConsentPage />} />
          <Route path={ROUTES.PERSONALIZATION} element={<PersonalizationPage />} />
          <Route path={ROUTES.ACCESSIBILITY} element={<AccessibilityPage />} />
          <Route path={ROUTES.ASSESSMENT} element={<AssessmentPage />} />
          <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
