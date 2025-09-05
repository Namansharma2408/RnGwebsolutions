'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function ThemeToggle({ initialValue }: { initialValue: Theme }) {
  const [theme, setTheme] = useState(initialValue);

  useEffect(() => {
    if (theme) {
      document.cookie = `theme=${theme};path=/;`;
      document?.querySelector('html')?.setAttribute('data-theme', theme);
    } else {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    console.log(theme);
  }, [theme]);

  return (
    <button type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  );
}

export { ThemeToggle };