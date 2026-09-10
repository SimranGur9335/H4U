import React from 'react';
import { useOnboarding } from '../context/OnboardingContext';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const { basicDetails, personalization, accessibility } = useOnboarding();
  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut();
    navigate('/');
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-brand-900 mb-6">Welcome to H4U Dashboard</h1>
      {basicDetails && (
        <p className="mb-4 text-slate-700">
          Hello, {basicDetails.firstName} {basicDetails.lastName} ({basicDetails.email})
        </p>
      )}
      {personalization && (
        <p className="mb-2 text-slate-600">Theme: {personalization.theme}, Language: {personalization.language}</p>
      )}
      {accessibility && (
        <p className="mb-2 text-slate-600">
          Accessibility: {accessibility.highContrast ? 'High contrast' : 'Standard'}, Text size: {accessibility.textSize}
        </p>
      )}
      <Button variant="primary" onClick={handleLogout}>Log Out</Button>
    </div>
  );
};
