import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../context/OnboardingContext';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

export const BasicDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { setBasicDetails, basicDetails } = useOnboarding();
  const { user } = useAuth();

  const [firstName, setFirstName] = useState(basicDetails?.firstName ?? '');
  const [lastName, setLastName] = useState(basicDetails?.lastName ?? '');
  const [email, setEmail] = useState(basicDetails?.email ?? user?.email ?? '');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email) {
      setError('All fields are required');
      return;
    }
    setBasicDetails({ firstName, lastName, email });
    navigate('/onboarding/consent');
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-semibold text-brand-900 mb-6">Basic Details</h1>
      {error && <div className="text-sm text-red-600 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          required
        />
        <Input
          label="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          required
        />
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Button type="submit" variant="primary" className="mt-4">
          Continue
        </Button>
      </form>
    </div>
  );
};
