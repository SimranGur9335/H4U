import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, HeartHandshake, Settings } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand Name */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-brand-900 font-semibold text-lg tracking-tight hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-teal-600 rounded px-1"
          >
            <div className="w-9 h-9 rounded bg-brand-900 text-teal-400 flex items-center justify-center shadow-subtle">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <span>H4U</span>
            <span className="text-xs font-normal text-slate-500 hidden sm:inline-block border-l border-slate-200 pl-2 ml-0.5">
              Help for You
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 hover:text-brand-900 transition-colors py-1"
            >
              How it works
            </a>
            <a
              href="#security"
              className="text-sm font-medium text-slate-600 hover:text-brand-900 transition-colors py-1 inline-flex items-center gap-1.5"
            >
              <Shield className="w-4 h-4 text-slate-400" />
              <span>Privacy & Trust</span>
            </a>
            <a
              href="#accessibility"
              className="text-sm font-medium text-slate-600 hover:text-brand-900 transition-colors py-1 inline-flex items-center gap-1.5"
            >
              <Settings className="w-4 h-4 text-slate-400" />
              <span>Accessibility</span>
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => alert('Login will be implemented in the Auth phase.')}>
              Login
            </Button>
            <Button variant="secondary" size="sm" onClick={() => alert('Sign Up will be implemented in the Auth phase.')}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
