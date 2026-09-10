export type QuestionType =
  | 'single-choice'
  | 'multiple-choice'
  | 'rating'
  | 'text';

export interface QuestionOption {
  id: string;
  label: string;
}

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  prompt: string;
  required?: boolean;
}

export interface SingleChoiceQuestion extends BaseQuestion {
  type: 'single-choice';
  options: QuestionOption[];
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  options: QuestionOption[];
}

export interface RatingQuestion extends BaseQuestion {
  type: 'rating';
  scale: number; // e.g., 5 for 1‑5 stars
}

export interface TextQuestion extends BaseQuestion {
  type: 'text';
  placeholder?: string;
}

export type Question =
  | SingleChoiceQuestion
  | MultipleChoiceQuestion
  | RatingQuestion
  | TextQuestion;

export interface Section {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
}

export interface Questionnaire {
  id: string;
  title: string;
  sections: Section[];
}

// Responses
export interface AnswerBase {
  questionId: string;
}

export interface SingleChoiceAnswer extends AnswerBase {
  answer: string; // option id
}

export interface MultipleChoiceAnswer extends AnswerBase {
  answer: string[]; // option ids
}

export interface RatingAnswer extends AnswerBase {
  answer: number; // rating value
}

export interface TextAnswer extends AnswerBase {
  answer: string;
}

export type Answer =
  | SingleChoiceAnswer
  | MultipleChoiceAnswer
  | RatingAnswer
  | TextAnswer;

export interface AssessmentResponse {
  questionnaireId: string;
  answers: Answer[];
  // timestamps can be added later
}
