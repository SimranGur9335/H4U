/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand palette - Deep Slate & Calm Navy
        brand: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          DEFAULT: '#243b53',
        },
        // Accent palette - Gentle Sage & Slate Teal
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Warm neutral surfaces & text
        surface: {
          base: '#f8fafc',
          card: '#ffffff',
          muted: '#f1f5f9',
          border: '#e2e8f0',
        },
        // Status & Risk Rating Colors (WCAG compliant)
        status: {
          low: {
            bg: '#f0fdf4',
            border: '#bbf7d0',
            text: '#166534',
          },
          medium: {
            bg: '#fffbeb',
            border: '#fef3c7',
            text: '#92400e',
          },
          high: {
            bg: '#fef2f2',
            border: '#fecaca',
            text: '#991b1b',
          },
          info: {
            bg: '#eff6ff',
            border: '#bfdbfe',
            text: '#1e40af',
          },
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgba(16, 42, 67, 0.04)',
        card: '0 1px 3px 0 rgba(16, 42, 67, 0.06), 0 1px 2px 0 rgba(16, 42, 67, 0.04)',
        focus: '0 0 0 3px rgba(13, 148, 136, 0.3)',
      },
      borderRadius: {
        DEFAULT: '0.375rem',
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
      },
    },
  },
  plugins: [],
};
