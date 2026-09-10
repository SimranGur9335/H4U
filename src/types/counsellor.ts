export type RiskLevel = 'low' | 'medium' | 'high';

export interface RiskScore {
  level: RiskLevel;
  numericScore: number;
  calculatedAt: string;
}

export interface AIExplanation {
  summary: string;
  contributingFactors: string[];
  confidence: number;
}

export interface InterventionNote {
  id: string;
  caseId: string;
  counsellorId: string;
  noteText: string;
  createdAt: string;
}

export interface FollowUpRecord {
  id: string;
  caseId: string;
  scheduledFor: string;
  completed: boolean;
  notes?: string;
}

export interface CaseRecord {
  id: string;
  beneficiaryId: string;
  beneficiaryName: string;
  riskScore: RiskScore;
  aiExplanation?: AIExplanation;
  status: 'pending_review' | 'in_intervention' | 'resolved' | 'follow_up_scheduled';
  lastUpdated: string;
}
