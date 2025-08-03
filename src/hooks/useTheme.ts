'use client';

import { useEffect } from 'react';
import { useApp } from '@/contexts/AppContext';

export function useTheme() {
  const { state, actions } = useApp();

  useEffect(() => {
    // Always use dark theme
    if (state.theme !== 'dark') {
      actions.setTheme('dark');
    }
  }, [actions, state.theme]);

  useEffect(() => {
    // Apply dark theme to document
    const root = document.documentElement;
    root.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const toggleTheme = () => {
    // No toggle needed, always dark
  };

  const setTheme = () => {
    // No setter needed, always dark
  };

  return {
    theme: state.theme,
    toggleTheme,
    setTheme,
  };
}