import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../context/OnboardingContext';
import { Button } from '../../components/ui/Button';

export const AccessibilityPage: React.FC = () => {
  const navigate = useNavigate();
  const { setAccessibility, accessibility } = useOnboarding();

  const [highContrast, setHighContrast] = useState(accessibility?.highContrast ?? false);
  const [textSize, setTextSize] = useState(accessibility?.textSize ?? 'medium');

  const handleNext = () => {
    // simple validation: any selection is fine
    setAccessibility({ highContrast, textSize });
    navigate('/onboarding/assessment');
  };

  const handleBack = () => {
    navigate('/onboarding/personalization');
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-semibold text-brand-900 mb-6">Accessibility Preferences</h1>

      <div className="space-y-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={highContrast}
            onChange={e => setHighContrast(e.target.checked)}
          />
          Enable high‑contrast mode
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Text Size</span>
          <select
            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
            value={textSize}
            onChange={e => setTextSize(e.target.value as any)}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
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
