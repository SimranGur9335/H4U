export interface Option {
  label: string; // exact answer text as appears in source
  value: string; // numeric or ordinal value used internally (e.g., "0", "1", "2", "3" for Ways of Coping, "1"-"5" for CERQ, etc.)
}

export interface Item {
  id: string; // e.g., "WOC-01" or "PWBS-01" or "CERQ-01"
  text: string; // exact question wording
  options: Option[]; // ordered list of answer choices
}

export interface Section {
  id: string; // e.g., "WOC", "PWBS", "CERQ"
  title: string; // instrument name as in the source
  items: Item[];
}

export interface Questionnaire {
  version: string; // "v1.0"
  sections: Section[];
}

export interface Answer {
  questionId: string;
  selectedOption: Option;
}

export interface AssessmentPayload {
  uid: string; // Firebase user uid
  questionnaireId: string; // fixed identifier, e.g., "psychological-assessment"
  version: string;
  answers: Answer[];
  timestamp: string; // ISO string
}
