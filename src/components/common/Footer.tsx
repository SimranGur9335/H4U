import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-slate-300 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold text-base mb-2">H4U — Help for You</h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              A secure, professional, and accessible mental health platform connecting beneficiaries with structured wellbeing care and dedicated counsellors.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-3">Platform Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition-colors">Privacy & Trust</a>
              </li>
              <li>
                <a href="#accessibility" className="hover:text-white transition-colors">Accessibility Options</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); alert('Support will be implemented in future phase.'); }}>Support & Help</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-3">Security & Compliance</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Designed according to strict data protection standards. User data is encrypted in transit and at rest. AI features are used strictly for assistance, not autonomous decisions.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} H4U System Platform. All rights reserved.</p>
          <p className="text-slate-500">Confidential Mental Health Support System</p>
        </div>
      </div>
    </footer>
  );
};
