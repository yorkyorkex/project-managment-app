'use client';

import Layout from '@/components/Layout';

export default function ProfilePage() {
  return (
    <Layout>
      <div className="main-content">
        <div className="dashboard">
          <div className="dashboard-header">
            <h1>Profile</h1>
            <p>Manage your personal information and preferences</p>
          </div>
          
          <div className="card">
            <div className="card-content">
              <h2 className="card-title">User Profile</h2>
              <p className="card-subtitle">View and edit your profile information</p>
              
              <div className="settings-form">
                <div className="form-group">
                  <label className="input-label">Full Name</label>
                  <input type="text" className="input" defaultValue="John Doe" />
                </div>
                
                <div className="form-group">
                  <label className="input-label">Email</label>
                  <input type="email" className="input" defaultValue="john.doe@example.com" />
                </div>
                
                <div className="form-group">
                  <label className="input-label">Bio</label>
                  <textarea className="input" rows={4} placeholder="Tell us about yourself..."></textarea>
                </div>
                
                <div className="form-actions">
                  <button className="btn btn-primary btn-md">Save Changes</button>
                  <button className="btn btn-ghost btn-md">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}