'use client';

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme(): Theme {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Try to get theme from document attribute first (client-side)
    const htmlTheme = document?.querySelector('html')?.getAttribute('data-theme') as Theme;
    if (htmlTheme) {
      setTheme(htmlTheme);
      return;
    }

    // Fallback: read from cookies
    const cookies = document.cookie.split(';');
    const themeCookie = cookies.find(cookie => cookie.trim().startsWith('theme='));
    if (themeCookie) {
      const themeValue = themeCookie.split('=')[1] as Theme;
      setTheme(themeValue);
    } else {
      // Default to system preference
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
  }, []);

  return theme;
}