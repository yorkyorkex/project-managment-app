'use client';

import { useTheme } from '@/hooks/useTheme';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  const getThemeIcon = () => {
    return '🌙';
  };

  const getThemeLabel = () => {
    return 'Dark';
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      title={`Switch theme (current: ${getThemeLabel()})`}
    >
      <span className="theme-icon">{getThemeIcon()}</span>
      <span className="theme-label">{getThemeLabel()}</span>
    </button>
  );
};

export default ThemeToggle;