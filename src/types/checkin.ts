export interface CheckInItem {
  id: string;
  userId: string;
  moodRating: number; // 1 to 5 scale
  notes?: string;
  timestamp: string;
}

export interface QuestionnaireResponse {
  id: string;
  userId: string;
  questionnaireId: string;
  answers: Record<string, string | number>;
  submittedAt: string;
}
