import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AssessmentResponse } from '../types/onboarding';

export interface BasicDetails {
  firstName: string;
  lastName: string;
  email: string; // should match auth email but keep for completeness
}

export interface Personalization {
  theme?: string;
  language?: string;
}

export interface AccessibilityPrefs {
  highContrast?: boolean;
  textSize?: 'small' | 'medium' | 'large';
}

export interface OnboardingState {
  basicDetails?: BasicDetails;
  consentAccepted?: boolean;
  personalization?: Personalization;
  accessibility?: AccessibilityPrefs;
  assessment?: AssessmentResponse;
}

export interface OnboardingContextProps extends OnboardingState {
  setBasicDetails: (data: BasicDetails) => void;
  setConsent: (accepted: boolean) => void;
  setPersonalization: (data: Personalization) => void;
  setAccessibility: (data: AccessibilityPrefs) => void;
  setAssessment: (data: AssessmentResponse) => void;
  resetOnboarding: () => void;
}

const OnboardingContext = createContext<OnboardingContextProps | undefined>(undefined);

export const OnboardingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<OnboardingState>({});

  const setBasicDetails = (data: BasicDetails) => setState(prev => ({ ...prev, basicDetails: data }));
  const setConsent = (accepted: boolean) => setState(prev => ({ ...prev, consentAccepted: accepted }));
  const setPersonalization = (data: Personalization) => setState(prev => ({ ...prev, personalization: data }));
  const setAccessibility = (data: AccessibilityPrefs) => setState(prev => ({ ...prev, accessibility: data }));
  const setAssessment = (data: AssessmentResponse) => setState(prev => ({ ...prev, assessment: data }));
  const resetOnboarding = () => setState({});

  return (
    <OnboardingContext.Provider
      value={{
        ...state,
        setBasicDetails,
        setConsent,
        setPersonalization,
        setAccessibility,
        setAssessment,
        resetOnboarding,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = (): OnboardingContextProps => {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error('useOnboarding must be used within OnboardingProvider');
  return ctx;
};
