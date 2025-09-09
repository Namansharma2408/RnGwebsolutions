'use client';

import { useTheme } from '@/contexts/ThemeContext';

function ThemeToggle({ initialValue }: { initialValue?: 'light' | 'dark' }) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTheme();
    }
  };

  return (
    <div
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      className={`
        relative w-20 h-10
        bg-background/10 backdrop-blur-md
        border-2 border-foreground/30
        rounded-full cursor-pointer
        transition-all duration-500 ease-out
        hover:-translate-y-1 hover:shadow-xl hover:shadow-black-blue/20
        focus:outline-none focus:ring-2 focus:ring-sky/50
        ${theme === 'dark' ? 'bg-black-blue/20' : 'bg-primary/10'}
      `}
      tabIndex={0}
      role="button"
      aria-label="Toggle theme"
    >
      {/* Slider */}
      <div
        className={`
          absolute top-1 left-1 w-8 h-8
          rounded-full transition-all duration-500 ease-out
          flex items-center justify-center
          shadow-lg
          ${
            theme === 'dark'
              ? 'translate-x-10 bg-gradient-to-br from-indigo to-blue'
              : 'translate-x-0 bg-gradient-to-br from-yellow to-orange'
          }
        `}
      >
        {/* Sun Icon */}
        <div
          className={`
            absolute transition-all duration-300
            ${theme === 'dark' ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}
          `}
        >
          <div className="relative">
            <div className="w-2 h-2 bg-primary rounded-full shadow-sm"></div>
            {/* Sun rays */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-1 bg-primary rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-6px)`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Moon Icon */}
        <div
          className={`
            absolute transition-all duration-300
            ${theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}
          `}
        >
          <div className="relative w-3.5 h-3.5">
            <div className="w-full h-full bg-primary rounded-full"></div>
            <div className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-indigo rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ThemeToggle };