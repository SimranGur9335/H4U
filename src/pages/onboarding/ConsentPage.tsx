import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../context/OnboardingContext';
import { Button } from '../../components/ui/Button';

export const ConsentPage: React.FC = () => {
  const navigate = useNavigate();
  const { setConsent } = useOnboarding();
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setConsent(true);
    navigate('/onboarding/personalization');
  };

  const handleDecline = () => {
    setConsent(false);
    // stay on page or navigate elsewhere
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold text-brand-900 mb-6">Consent &amp; Privacy</h1>
      <p className="mb-4 text-slate-700">
        H4U collects your wellbeing information to provide a secure, personalized support experience.
      </p>
      <p className="mb-4 text-slate-700">
        The data may be used for AI‑assisted screening and monitoring, helping authorised professionals review relevant information and offer early‑warning support.
      </p>
      <p className="mb-4 text-slate-700">
        <strong>AI‑assisted screening and early‑warning support — not a clinical diagnosis.</strong>
      </p>
      <p className="mb-6 text-slate-700">
        You have full control over your data and can withdraw consent at any time via your account settings.
      </p>
      <div className="flex gap-4">
        <Button variant="primary" onClick={handleAccept} disabled={!accepted} >
          I Agree
        </Button>
        <Button variant="outline" onClick={handleDecline}>
          I Do Not Agree
        </Button>
        <label className="flex items-center ml-4">
          <input
            type="checkbox"
            className="mr-2"
            checked={accepted}
            onChange={e => setAccepted(e.target.checked)}
          />
          I have read and understand the above.
        </label>
      </div>
    </div>
  );
};
