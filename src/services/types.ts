import { UserProfile, UserRole } from '../types/auth';
import { CheckInItem, QuestionnaireResponse } from '../types/checkin';
import { CaseRecord, InterventionNote, FollowUpRecord } from '../types/counsellor';

export interface IAuthService {
  getCurrentUser(): Promise<UserProfile | null>;
  logout(): Promise<void>;
}

export interface ICheckInService {
  submitCheckIn(data: Omit<CheckInItem, 'id' | 'timestamp'>): Promise<CheckInItem>;
  submitQuestionnaire(data: Omit<QuestionnaireResponse, 'id' | 'submittedAt'>): Promise<QuestionnaireResponse>;
}

export interface ICounsellorService {
  getCases(role: UserRole): Promise<CaseRecord[]>;
  getCaseDetails(caseId: string): Promise<CaseRecord | null>;
  addInterventionNote(note: Omit<InterventionNote, 'id' | 'createdAt'>): Promise<InterventionNote>;
  scheduleFollowUp(followUp: Omit<FollowUpRecord, 'id'>): Promise<FollowUpRecord>;
}
