'use client';

import { createContext, useContext, useReducer, ReactNode, useMemo } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

interface AppState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  theme: 'dark';
  notifications: boolean;
}

type AppAction =
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_THEME'; payload: 'dark' }
  | { type: 'SET_NOTIFICATIONS'; payload: boolean }
  | { type: 'LOGOUT' };

const initialState: AppState = {
  user: null,
  isLoading: false,
  error: null,
  theme: 'dark',
  notifications: true
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_NOTIFICATIONS':
      return { ...state, notifications: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  actions: {
    setUser: (user: User) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    setTheme: (theme: 'dark') => void;
    setNotifications: (enabled: boolean) => void;
    logout: () => void;
  };
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const actions = useMemo(() => ({
    setUser: (user: User) => dispatch({ type: 'SET_USER', payload: user }),
    setLoading: (loading: boolean) => dispatch({ type: 'SET_LOADING', payload: loading }),
    setError: (error: string | null) => dispatch({ type: 'SET_ERROR', payload: error }),
    setTheme: (theme: 'dark') => dispatch({ type: 'SET_THEME', payload: theme }),
    setNotifications: (enabled: boolean) => dispatch({ type: 'SET_NOTIFICATIONS', payload: enabled }),
    logout: () => dispatch({ type: 'LOGOUT' })
  }), []);

  const value = useMemo(() => ({
    state,
    dispatch,
    actions
  }), [state, actions]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

export type { User, AppState, AppAction };