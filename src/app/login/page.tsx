'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import ErrorMessage from '@/components/ui/ErrorMessage';
import { useApp } from '@/contexts/AppContext';

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();
  const { state, actions } = useApp();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session && !state.user) {
      // Update app context with session data only if user is not already set
      actions.setUser({
        // @ts-expect-error: NextAuth session user doesn't include id by default
        id: session.user?.id || '',
        name: session.user?.name || '',
        email: session.user?.email || '',
        // @ts-expect-error: NextAuth session user doesn't include role by default
        role: session.user?.role || 'User'
      });
      router.push('/dashboard');
    }
  }, [state.user, actions, router, session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!credentials.email || !credentials.password) {
      actions.setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    actions.setError(null);

    try {
      const result = await signIn('credentials', {
        email: credentials.email,
        password: credentials.password,
        redirect: false,
      });

      if (result?.error) {
        actions.setError('Invalid email or password');
      } else {
        // Session will be handled by useEffect
      }
    } catch {
      actions.setError('An error occurred during sign in');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    actions.setError(null);
    
    try {
      await signIn('google', { callbackUrl: '/dashboard' });
    } catch {
      actions.setError('Failed to sign in with Google');
      setIsLoading(false);
    }
  };

  const handleDirectLogin = async () => {
    setIsLoading(true);
    actions.setError(null);
    
    // For Vercel demo: directly set demo user and redirect
    setTimeout(() => {
      actions.setUser({
        id: 'demo-user-1',
        name: 'Demo User',
        email: 'admin@example.com',
        role: 'Administrator'
      });
      router.push('/dashboard');
      setIsLoading(false);
    }, 500); // Small delay to show loading state
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your account to continue</p>
        </div>

        {state.error && (
          <ErrorMessage 
            message={state.error} 
            onDismiss={() => actions.setError(null)} 
          />
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <Input
            label="Email Address"
            type="email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            placeholder="Enter your email"
            required
          />

          <Input
            label="Password"
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            placeholder="Enter your password"
            required
          />

          <div className="login-options">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="checkbox-text">Remember me</span>
            </label>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>

          <Button 
            type="submit" 
            disabled={isLoading}
            className="login-button"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <Button 
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          variant="outline"
          className="google-button"
        >
          <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </Button>

        <Button 
          onClick={handleDirectLogin}
          disabled={isLoading}
          variant="outline"
          className="direct-login-button"
          style={{ 
            marginTop: '1rem',
            backgroundColor: 'rgba(34, 197, 94, 0.15)',
            borderColor: 'rgba(34, 197, 94, 0.5)',
            color: 'rgb(34, 197, 94)',
            fontSize: '16px',
            fontWeight: '600',
            padding: '1rem 2rem'
          }}
        >
          🚀 DEMO MODE - Skip Login & Enter Dashboard
        </Button>

        <div className="signup-link">
          <p>Don&apos;t have an account? <button className="link-button" onClick={handleGoogleSignIn}>Sign up with Google</button></p>
        </div>

        <div className="login-footer">
          <p>Demo credentials: admin@example.com / password</p>
        </div>
      </div>
    </div>
  );
}