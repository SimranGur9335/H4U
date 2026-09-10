export const DESIGN_TOKENS = {
  colors: {
    brand: {
      primary: '#243b53',
      navy: '#102a43',
      soft: '#627d98',
    },
    teal: {
      accent: '#0d9488',
      light: '#ccfbf1',
      dark: '#115e59',
    },
    surface: {
      base: '#f8fafc',
      card: '#ffffff',
      muted: '#f1f5f9',
      border: '#e2e8f0',
    },
    status: {
      low: { bg: '#f0fdf4', border: '#bbf7d0', text: '#166534' },
      medium: { bg: '#fffbeb', border: '#fef3c7', text: '#92400e' },
      high: { bg: '#fef2f2', border: '#fecaca', text: '#991b1b' },
      info: { bg: '#eff6ff', border: '#bfdbfe', text: '#1e40af' },
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  shadows: {
    subtle: '0 1px 2px 0 rgba(16, 42, 67, 0.04)',
    card: '0 1px 3px 0 rgba(16, 42, 67, 0.06), 0 1px 2px 0 rgba(16, 42, 67, 0.04)',
  },
} as const;
