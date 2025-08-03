'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import ErrorMessage from '@/components/ui/ErrorMessage';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useApp } from '@/contexts/AppContext';

export default function Settings() {
  const { state, actions } = useApp();
  
  const [profile, setProfile] = useState({
    name: state.user?.name || '',
    email: state.user?.email || '',
    company: 'Acme Inc.',
    role: state.user?.role || ''
  });

  const [preferences, setPreferences] = useState({
    notifications: state.notifications,
    language: 'English',
    timezone: 'UTC-5'
  });

  useEffect(() => {
    if (state.user) {
      setProfile({
        name: state.user.name,
        email: state.user.email,
        company: 'Acme Inc.',
        role: state.user.role
      });
    }
  }, [state.user]);

  const [security, setSecurity] = useState({
    twoFactor: false,
    sessionTimeout: '30'
  });

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    actions.setLoading(true);
    
    setTimeout(() => {
      if (state.user) {
        actions.setUser({
          ...state.user,
          name: profile.name,
          email: profile.email,
          role: profile.role
        });
      }
      actions.setLoading(false);
      actions.setError(null);
    }, 1000);
  };

  const handlePreferencesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    actions.setNotifications(preferences.notifications);
    console.log('Preferences updated:', preferences);
  };

  const handleSecuritySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Security updated:', security);
  };

  return (
    <ProtectedRoute>
      <Layout>
      <div className="settings">
        {state.error && (
          <ErrorMessage 
            message={state.error} 
            onDismiss={() => actions.setError(null)} 
          />
        )}
        
        <div className="settings-header">
          <h1>Settings</h1>
          <p>Manage your account settings and preferences.</p>
        </div>

        <div className="settings-content">
          <Card title="Profile Information" className="settings-card">
            <form onSubmit={handleProfileSubmit} className="settings-form">
              <div className="form-row">
                <Input
                  label="Full Name"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                />
                <Input
                  label="Email Address"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              </div>
              <div className="form-row">
                <Input
                  label="Company"
                  value={profile.company}
                  onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                />
                <Input
                  label="Role"
                  value={profile.role}
                  onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                />
              </div>
              <div className="form-actions">
                <Button type="submit" disabled={state.isLoading}>
                  {state.isLoading ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </form>
          </Card>

          <Card title="Preferences" className="settings-card">
            <form onSubmit={handlePreferencesSubmit} className="settings-form">
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={preferences.notifications}
                    onChange={(e) => setPreferences({ ...preferences, notifications: e.target.checked })}
                  />
                  <span className="checkbox-text">Email notifications</span>
                </label>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="input-label">Language</label>
                  <select
                    value={preferences.language}
                    onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
                    className="input"
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="input-label">Timezone</label>
                  <select
                    value={preferences.timezone}
                    onChange={(e) => setPreferences({ ...preferences, timezone: e.target.value })}
                    className="input"
                  >
                    <option value="UTC-5">Eastern Time (UTC-5)</option>
                    <option value="UTC-6">Central Time (UTC-6)</option>
                    <option value="UTC-7">Mountain Time (UTC-7)</option>
                    <option value="UTC-8">Pacific Time (UTC-8)</option>
                  </select>
                </div>
              </div>
              <div className="form-actions">
                <Button type="submit">Save Preferences</Button>
              </div>
            </form>
          </Card>

          <Card title="Security" className="settings-card">
            <form onSubmit={handleSecuritySubmit} className="settings-form">
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={security.twoFactor}
                    onChange={(e) => setSecurity({ ...security, twoFactor: e.target.checked })}
                  />
                  <span className="checkbox-text">Enable two-factor authentication</span>
                </label>
              </div>
              <Input
                label="Session Timeout (minutes)"
                type="number"
                value={security.sessionTimeout}
                onChange={(e) => setSecurity({ ...security, sessionTimeout: e.target.value })}
                helperText="Session will automatically expire after this many minutes of inactivity"
              />
              <div className="form-actions">
                <Button type="submit">Update Security</Button>
                <Button variant="outline" type="button">Change Password</Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </Layout>
    </ProtectedRoute>
  );
}