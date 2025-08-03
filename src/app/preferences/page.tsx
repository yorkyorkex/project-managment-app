'use client';

import Layout from '@/components/Layout';

export default function PreferencesPage() {
  return (
    <Layout>
      <div className="main-content">
        <div className="dashboard">
          <div className="dashboard-header">
            <h1>Preferences</h1>
            <p>Customize your app experience and settings</p>
          </div>
          
          <div className="card">
            <div className="card-content">
              <h2 className="card-title">Application Preferences</h2>
              <p className="card-subtitle">Configure your application settings</p>
              
              <div className="settings-form">
                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    <span className="checkbox-text">Enable notifications</span>
                  </label>
                </div>
                
                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="checkbox-text">Auto-save changes</span>
                  </label>
                </div>
                
                <div className="form-group">
                  <label className="input-label">Language</label>
                  <select className="input">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="input-label">Timezone</label>
                  <select className="input">
                    <option>UTC-5 (Eastern)</option>
                    <option>UTC-8 (Pacific)</option>
                    <option>UTC+0 (GMT)</option>
                  </select>
                </div>
                
                <div className="form-actions">
                  <button className="btn btn-primary btn-md">Save Preferences</button>
                  <button className="btn btn-ghost btn-md">Reset to Default</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}