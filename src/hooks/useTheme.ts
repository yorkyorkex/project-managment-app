'use client';

import { useEffect } from 'react';
import { useApp } from '@/contexts/AppContext';

export function useTheme() {
  const { state, actions } = useApp();

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null;
    if (savedTheme && savedTheme !== state.theme) {
      actions.setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    
    // Save theme to localStorage
    localStorage.setItem('theme', state.theme);
    
    // Apply theme attribute
    root.setAttribute('data-theme', state.theme);
    
    // Apply system theme detection for 'system' theme
    if (state.theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const systemTheme = mediaQuery.matches ? 'dark' : 'light';
      root.setAttribute('data-theme', 'system');
    }
  }, [state.theme]);

  const toggleTheme = () => {
    const themes: ('light' | 'dark' | 'system')[] = ['dark', 'light', 'system'];
    const currentIndex = themes.indexOf(state.theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    actions.setTheme(themes[nextIndex]);
  };

  const setTheme = (theme: 'light' | 'dark' | 'system') => {
    actions.setTheme(theme);
  };

  return {
    theme: state.theme,
    toggleTheme,
    setTheme,
  };
}