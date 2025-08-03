'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useApp } from '@/contexts/AppContext';
import LoadingSpinner from './ui/LoadingSpinner';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { data: session, status } = useSession();
  const { state, actions } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Still loading

    // If user is already set in app context (demo mode), allow access
    if (state.user) return;

    if (status === 'unauthenticated') {
      router.push('/login');
      return;
    }

    if (session && !state.user) {
      // Update app context with session data
      actions.setUser({
        // @ts-expect-error: NextAuth session user doesn't include id by default
        id: session.user?.id || '',
        name: session.user?.name || '',
        email: session.user?.email || '',
        // @ts-expect-error: NextAuth session user doesn't include role by default
        role: session.user?.role || 'User'
      });
    }
  }, [status, state.user, actions, router, session]);

  if (status === 'loading') {
    return (
      <div className="loading-container" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (status === 'unauthenticated' && !state.user) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;