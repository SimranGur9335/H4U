import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../context/OnboardingContext';
import { Button } from '../../components/ui/Button';
import { Questionnaire, Section, Question } from '../../types/onboarding';

// Placeholder questionnaire – in real implementation this would be loaded from a PDF or API.
const placeholderQuestionnaire: Questionnaire = {
  id: 'placeholder',
  title: 'Initial Assessment',
  sections: [
    {
      id: 'sec1',
      title: 'General Wellbeing',
      description: 'Answer the following questions about your current wellbeing.',
      questions: [
        {
          id: 'q1',
          type: 'single-choice',
          prompt: 'How would you rate your overall mood this week?',
          options: [
            { id: 'opt1', label: 'Very Good' },
            { id: 'opt2', label: 'Good' },
            { id: 'opt3', label: 'Neutral' },
            { id: 'opt4', label: 'Bad' },
            { id: 'opt5', label: 'Very Bad' },
          ],
          required: true,
        },
        {
          id: 'q2',
          type: 'rating',
          prompt: 'On a scale of 1‑5, how difficult have you found it to sleep lately?',
          scale: 5,
          required: true,
        },
        {
          id: 'q3',
          type: 'text',
          prompt: 'Is there anything you would like to share with your counsellor?',
          placeholder: 'Your thoughts...',
        },
      ],
    },
  ],
};

export const AssessmentPage: React.FC = () => {
  const navigate = useNavigate();
  const { setAssessment } = useOnboarding();
  const [answers, setAnswers] = useState<Record<string, any>>({}); // key/value store

  const handleChange = (questionId: string, value: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleBack = () => {
    navigate('/onboarding/accessibility');
  };

  const handleNext = () => {
    // In a full implementation we would convert answers to AssessmentResponse.
    setAssessment({ questionnaireId: placeholderQuestionnaire.id, answers: [] });
    navigate('/dashboard');
  };

  const renderQuestion = (question: Question) => {
    switch (question.type) {
      case 'single-choice':
        return (
          <select
            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
            value={answers[question.id] || ''}
            onChange={e => handleChange(question.id, e.target.value)}
          >
            <option value="">Select an answer</option>
            {(question as any).options.map((opt: any) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
        );
      case 'rating':
        return (
          <select
            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
            value={answers[question.id] || ''}
            onChange={e => handleChange(question.id, Number(e.target.value))}
          >
            <option value="">Select rating</option>
            {Array.from({ length: (question as any).scale }, (_, i) => i + 1).map(val => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        );
      case 'text':
        return (
          <textarea
            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
            placeholder={(question as any).placeholder}
            value={answers[question.id] || ''}
            onChange={e => handleChange(question.id, e.target.value)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold text-brand-900 mb-6">Initial Assessment</h1>
      {placeholderQuestionnaire.sections.map((section: Section) => (
        <div key={section.id} className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-2">{section.title}</h2>
          {section.description && <p className="mb-4 text-slate-600">{section.description}</p>}
          {section.questions.map((q: Question) => (
            <div key={q.id} className="mb-4">
              <label className="block font-medium text-slate-700 mb-1">{q.prompt}</label>
              {renderQuestion(q)}
            </div>
          ))}
        </div>
      ))}
      <div className="flex gap-4 mt-6">
        <Button variant="outline" onClick={handleBack}>Back</Button>
        <Button variant="primary" onClick={handleNext}>Finish &amp; Go to Dashboard</Button>
      </div>
    </div>
  );
};
