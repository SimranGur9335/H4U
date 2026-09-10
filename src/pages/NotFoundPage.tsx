import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-extrabold text-brand-900 tracking-tight">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-slate-800">Page Not Found</h2>
      <p className="mt-2 text-sm text-slate-600 max-w-md">
        The page you are looking for does not exist or may have been moved.
      </p>
      <div className="mt-6">
        <Link to="/">
          <Button variant="primary">Return to Safety (Home)</Button>
        </Link>
      </div>
    </div>
  );
};
