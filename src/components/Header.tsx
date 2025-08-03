'use client';

import { useState } from 'react';
import { signOut } from 'next-auth/react';
import { useApp } from '@/contexts/AppContext';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  onMenuToggle?: () => void;
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  const { state, actions } = useApp();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <button className="mobile-menu-btn" onClick={onMenuToggle}>
            ☰
          </button>
          <h1 className="header-title">Dashboard</h1>
        </div>
        <div className="header-actions">
          <ThemeToggle />
          <button className="notification-btn">🔔</button>
          <div className="user-profile">
            <button 
              className="profile-btn"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div className="avatar">
                {state.user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
              </div>
              <span className="user-name">{state.user?.name || 'User'}</span>
              <span className="dropdown-arrow">▼</span>
            </button>
            {showDropdown && (
              <div className="profile-dropdown">
                <a href="#" className="dropdown-item">Profile</a>
                <a href="#" className="dropdown-item">Account</a>
                <div className="dropdown-divider"></div>
                <button 
                  className="dropdown-item" 
                  onClick={() => {
                    signOut({ callbackUrl: '/login' });
                    actions.logout();
                    setShowDropdown(false);
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;