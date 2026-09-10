import React from 'react';
import { ShieldCheck, HeartHandshake, FileText, UserCheck, Activity, Brain, ClipboardList, Lock, Settings } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 py-12 md:py-20 bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <Badge variant="info" className="mb-2 mx-auto">
          Confidential Mental Wellbeing Platform
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-900 tracking-tight leading-tight max-w-4xl mx-auto">
          Structured support for your mental health journey
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          H4U provides a secure, accessible framework to track your wellbeing and connect you with authorized professionals when you need it most.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" className="w-full sm:w-auto" onClick={() => alert('Account creation will be implemented in future phase.')}>
            Create Account
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => alert('Login will be implemented in future phase.')}>
            Login to H4U
          </Button>
        </div>
      </section>

      {/* How H4U Works Section */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-900 tracking-tight">How H4U Works</h2>
          <p className="text-base text-slate-600 mt-3 max-w-2xl mx-auto">
            A clear, guided process from your first check-in to receiving professional support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 transform -translate-y-1/2"></div>
          
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative z-10">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center mb-4 border border-slate-200">
              <ClipboardList className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-brand-900 mb-2">1. Check-in</h3>
            <p className="text-sm text-slate-600">Log your feelings and daily wellbeing in a secure environment.</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative z-10">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center mb-4 border border-slate-200">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-brand-900 mb-2">2. Assessment</h3>
            <p className="text-sm text-slate-600">Complete structured questionnaires based on clinical standards.</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative z-10">
            <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-700 flex items-center justify-center mb-4 border border-brand-100">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-brand-900 mb-2">3. AI Assistance</h3>
            <p className="text-sm text-slate-600">Our system helps organize your data to identify important wellbeing trends.</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative z-10">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center mb-4 border border-slate-200">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-brand-900 mb-2">4. Monitoring</h3>
            <p className="text-sm text-slate-600">Track your progress over time with clear, private visual insights.</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative z-10">
            <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center mb-4 border border-teal-100">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-brand-900 mb-2">5. Support</h3>
            <p className="text-sm text-slate-600">Authorized professionals review important signals to provide timely care.</p>
          </div>
        </div>
      </section>

      {/* Human-in-the-loop Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-brand-900 rounded-2xl p-8 md:p-12 text-center text-white shadow-lg border border-brand-800">
          <HeartHandshake className="w-12 h-12 mx-auto text-teal-400 mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Human Care, Supported by Technology</h2>
          <p className="text-brand-100 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            H4U uses AI strictly to assist in screening and monitoring. We do not use technology for autonomous diagnosis or treatment. All critical data and important signals are reviewed by authorized professionals who make clinical decisions with you.
          </p>
          <Badge variant="default" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
            Human-in-the-loop Architecture
          </Badge>
        </div>
      </section>

      {/* Privacy & Accessibility Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Privacy Section */}
          <div id="security" className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded bg-slate-100 text-slate-700 flex items-center justify-center mb-6">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-brand-900 mb-3">Privacy & Trust</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Your mental health data is deeply personal. H4U is designed with strict authorization boundaries, ensuring that beneficiaries, counsellors, and administrators only access permitted information. Your data is encrypted and handled with the utmost confidentiality.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-700 text-sm">
                <ShieldCheck className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                <span>Role-based access control</span>
              </li>
              <li className="flex items-center text-slate-700 text-sm">
                <ShieldCheck className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                <span>Encrypted communication</span>
              </li>
              <li className="flex items-center text-slate-700 text-sm">
                <ShieldCheck className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                <span>Transparent data practices</span>
              </li>
            </ul>
          </div>

          {/* Accessibility Section */}
          <div id="accessibility" className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded bg-slate-100 text-slate-700 flex items-center justify-center mb-6">
              <Settings className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-brand-900 mb-3">Accessible by Design</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We believe mental health support should be accessible to everyone. H4U provides options to personalize your visual experience, ensuring the platform works for your specific needs.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-700 text-sm">
                <ShieldCheck className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                <span>Keyboard navigable interfaces</span>
              </li>
              <li className="flex items-center text-slate-700 text-sm">
                <ShieldCheck className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                <span>Screen reader compatibility</span>
              </li>
              <li className="flex items-center text-slate-700 text-sm">
                <ShieldCheck className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                <span>Visual personalization options</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
