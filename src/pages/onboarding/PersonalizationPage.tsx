import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../context/OnboardingContext';
import { Button } from '../../components/ui/Button';

export const PersonalizationPage: React.FC = () => {
  const navigate = useNavigate();
  const { setPersonalization, personalization } = useOnboarding();

  const [theme, setTheme] = useState(personalization?.theme ?? '');
  const [language, setLanguage] = useState(personalization?.language ?? '');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!theme || !language) {
      setError('Please select both theme and language');
      return;
    }
    setPersonalization({ theme, language });
    navigate('/onboarding/accessibility');
  };

  const handleBack = () => {
    navigate('/onboarding/consent');
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-semibold text-brand-900 mb-6">Personalization</h1>
      {error && <div className="text-sm text-red-600 mb-4">{error}</div>}
      <div className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Theme Preference</span>
          <select
            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
            value={theme}
            onChange={e => setTheme(e.target.value)}
          >
            <option value="">Select a theme</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Language</span>
          <select
            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
            value={language}
            onChange={e => setLanguage(e.target.value)}
          >
            <option value="">Select language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            {/* Add more languages as needed */}
          </select>
        </label>
      </div>
      <div className="flex gap-4 mt-6">
        <Button variant="outline" onClick={handleBack}>Back</Button>
        <Button variant="primary" onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
};
