'use client';

import { useState, useEffect } from 'react';
import { useApp } from '@/contexts/AppContext';

interface UseApiState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

interface UseApiReturn<T> extends UseApiState<T> {
  refetch: () => Promise<void>;
  mutate: (newData: T) => void;
}

export function useApi<T = unknown>(
  apiFunction: () => Promise<{ data?: T; error?: string }>,
  immediate = true
): UseApiReturn<T> {
  const { actions } = useApp();
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    isLoading: immediate,
    error: null,
  });

  const fetchData = async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const response = await apiFunction();
      
      if (response.error) {
        setState(prev => ({ 
          ...prev, 
          isLoading: false, 
          error: response.error || 'An error occurred' 
        }));
        actions.setError(response.error);
      } else {
        setState(prev => ({ 
          ...prev, 
          isLoading: false, 
          data: response.data || null 
        }));
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setState(prev => ({ 
        ...prev, 
        isLoading: false, 
        error: errorMessage 
      }));
      actions.setError(errorMessage);
    }
  };

  const mutate = (newData: T) => {
    setState(prev => ({ ...prev, data: newData }));
  };

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [fetchData, immediate]);

  return {
    ...state,
    refetch: fetchData,
    mutate,
  };
}

export function useMutation<TData = unknown, TVariables = unknown>(
  mutationFunction: (variables: TVariables) => Promise<{ data?: TData; error?: string }>
) {
  const { actions } = useApp();
  const [state, setState] = useState<UseApiState<TData>>({
    data: null,
    isLoading: false,
    error: null,
  });

  const mutate = async (variables: TVariables): Promise<{ data?: TData; error?: string }> => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const response = await mutationFunction(variables);
      
      if (response.error) {
        setState(prev => ({ 
          ...prev, 
          isLoading: false, 
          error: response.error || 'An error occurred' 
        }));
        actions.setError(response.error);
        return { error: response.error };
      } else {
        setState(prev => ({ 
          ...prev, 
          isLoading: false, 
          data: response.data || null 
        }));
        return { data: response.data };
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setState(prev => ({ 
        ...prev, 
        isLoading: false, 
        error: errorMessage 
      }));
      actions.setError(errorMessage);
      return { error: errorMessage };
    }
  };

  return {
    ...state,
    mutate,
    reset: () => setState({ data: null, isLoading: false, error: null }),
  };
}