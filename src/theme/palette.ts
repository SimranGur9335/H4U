export interface Palette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  focus: string;
}

export const THEMES: Record<string, Palette> = {
  'Ocean Blue': {
    primary: '#0d6efd',
    secondary: '#6c757d',
    accent: '#20c997',
    background: '#f8f9fa',
    surface: '#ffffff',
    text: '#212529',
    focus: '#0d6efd',
  },
  'Calm Lavender': {
    primary: '#6f42c1',
    secondary: '#d63384',
    accent: '#e9ecef',
    background: '#f8f9fa',
    surface: '#ffffff',
    text: '#212529',
    focus: '#6f42c1',
  },
  'Mindful Sage': {
    primary: '#20c997',
    secondary: '#198754',
    accent: '#fff3cd',
    background: '#f8f9fa',
    surface: '#ffffff',
    text: '#212529',
    focus: '#20c997',
  },
  'Serenity Teal': {
    primary: '#0d9488',
    secondary: '#14b8a6',
    accent: '#e2e8f0',
    background: '#f8f9fa',
    surface: '#ffffff',
    text: '#212529',
    focus: '#0d9488',
  },
  'Warm Peach': {
    primary: '#fd7e14',
    secondary: '#ffc107',
    accent: '#fff3cd',
    background: '#fff5e6',
    surface: '#ffffff',
    text: '#212529',
    focus: '#fd7e14',
  },
  'Rose / Blush': {
    primary: '#e83e8c',
    secondary: '#f8f9fa',
    accent: '#fff5f7',
    background: '#fff5f7',
    surface: '#ffffff',
    text: '#212529',
    focus: '#e83e8c',
  },
  'Sunshine / Warm': {
    primary: '#ffc107',
    secondary: '#fd7e14',
    accent: '#fff3cd',
    background: '#fff8e1',
    surface: '#ffffff',
    text: '#212529',
    focus: '#ffc107',
  },
  'Indigo': {
    primary: '#6610f2',
    secondary: '#6f42c1',
    accent: '#e9ecef',
    background: '#f8f9fa',
    surface: '#ffffff',
    text: '#212529',
    focus: '#6610f2',
  },
  'Minimal Monochrome': {
    primary: '#212529',
    secondary: '#6c757d',
    accent: '#adb5bd',
    background: '#f8f9fa',
    surface: '#ffffff',
    text: '#212529',
    focus: '#212529',
  },
  'High Contrast': {
    primary: '#000000',
    secondary: '#ffffff',
    accent: '#ff0000',
    background: '#ffffff',
    surface: '#ffffff',
    text: '#000000',
    focus: '#ff0000',
  },
  'System Default': {
    primary: '',
    secondary: '',
    accent: '',
    background: '',
    surface: '',
    text: '',
    focus: '',
  },
  'Custom Theme': {
    primary: '#0d6efd',
    secondary: '#6c757d',
    accent: '#20c997',
    background: '#f8f9fa',
    surface: '#ffffff',
    text: '#212529',
    focus: '#0d6efd',
  },
};
