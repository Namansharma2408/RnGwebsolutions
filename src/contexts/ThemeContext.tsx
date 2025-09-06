'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children, initialTheme }: { children: ReactNode; initialTheme?: Theme }) {
  const [theme, setThemeState] = useState<Theme>(initialTheme || 'light');

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    // Update cookie
    document.cookie = `theme=${newTheme};path=/;`;
    // Update HTML attribute
    document?.querySelector('html')?.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    // Initialize theme from cookie or system preference
    if (!initialTheme) {
      const cookies = document.cookie.split(';');
      const themeCookie = cookies.find(cookie => cookie.trim().startsWith('theme='));
      
      if (themeCookie) {
        const themeValue = themeCookie.split('=')[1] as Theme;
        setThemeState(themeValue);
      } else {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setThemeState(systemTheme);
      }
    }
  }, [initialTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}