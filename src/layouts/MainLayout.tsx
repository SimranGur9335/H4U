import React from 'react';
import { Outlet } from 'react-router-dom';
import { SkipLink } from '../accessibility/SkipLink';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface-base text-slate-900">
      <SkipLink targetId="main-content" />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
