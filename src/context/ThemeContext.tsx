import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { THEMES } from '../theme/palette';

export interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const stored = localStorage.getItem('h4u-theme');
  const initial = stored ?? 'System Default';
  const [theme, setTheme] = useState<string>(initial);

  useEffect(() => {
    const palette = THEMES[theme] ?? THEMES['System Default'];
    const root = document.documentElement;
    Object.entries(palette).forEach(([key, value]) => {
      const cssVar = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssVar, value as string);
    });
    localStorage.setItem('h4u-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
};
