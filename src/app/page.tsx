'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePage() {
  const { status } = useSession();
  const router = useRouter();

  // If user is already logged in, redirect to dashboard
  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="loading-container" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column'
      }}>
        <div style={{ marginBottom: '1rem' }}>Loading...</div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white',
      padding: '2rem'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '600px',
        width: '100%'
      }}>
        <h1 style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Project Management App
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '3rem',
          color: '#94a3b8'
        }}>
          A modern project management solution built with Next.js and NextAuth
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link 
            href="/login"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.5rem',
              fontWeight: '600',
              transition: 'all 0.2s',
              border: 'none'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
          >
            🚀 Get Started
          </Link>
          
          <Link 
            href="/dashboard"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              backgroundColor: 'transparent',
              color: '#3b82f6',
              textDecoration: 'none',
              borderRadius: '0.5rem',
              fontWeight: '600',
              border: '2px solid #3b82f6',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#3b82f6';
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#3b82f6';
            }}
          >
            📊 View Demo
          </Link>
        </div>

        <div style={{
          marginTop: '4rem',
          padding: '2rem',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderRadius: '1rem',
          border: '1px solid rgba(59, 130, 246, 0.2)'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#3b82f6' }}>✨ Features</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            textAlign: 'left'
          }}>
            <div>
              <strong>🔐 Authentication</strong>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: '0.5rem 0 0 0' }}>
                Secure login with NextAuth
              </p>
            </div>
            <div>
              <strong>📱 Responsive Design</strong>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: '0.5rem 0 0 0' }}>
                Works on all devices
              </p>
            </div>
            <div>
              <strong>🌙 Dark Theme</strong>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: '0.5rem 0 0 0' }}>
                Modern dark interface
              </p>
            </div>
            <div>
              <strong>⚡ Fast Performance</strong>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: '0.5rem 0 0 0' }}>
                Built with Next.js 15
              </p>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: '2rem',
          fontSize: '0.9rem',
          color: '#64748b'
        }}>
          Demo credentials: <strong>admin@example.com</strong> / <strong>password</strong>
        </div>
      </div>
    </div>
  );
}