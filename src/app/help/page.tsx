'use client';

import Layout from '@/components/Layout';

export default function HelpPage() {
  return (
    <Layout>
      <div className="main-content">
        <div className="dashboard">
          <div className="dashboard-header">
            <h1>Help & Support</h1>
            <p>Find answers and get help with your account</p>
          </div>
          
          <div className="card">
            <div className="card-content">
              <h2 className="card-title">Frequently Asked Questions</h2>
              
              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)' }}>How do I reset my password?</h3>
                <p style={{ marginBottom: '2rem', color: 'var(--muted)' }}>
                  You can reset your password by going to the login page and clicking "Forgot Password".
                </p>
                
                <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)' }}>How do I change my profile information?</h3>
                <p style={{ marginBottom: '2rem', color: 'var(--muted)' }}>
                  Go to Profile in the dropdown menu to update your personal information.
                </p>
                
                <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)' }}>How do I contact support?</h3>
                <p style={{ marginBottom: '2rem', color: 'var(--muted)' }}>
                  You can reach our support team at support@example.com or use the contact form below.
                </p>
              </div>
              
              <div style={{ marginTop: '3rem' }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)' }}>Contact Support</h3>
                <div className="settings-form">
                  <div className="form-group">
                    <label className="input-label">Subject</label>
                    <input type="text" className="input" placeholder="What can we help you with?" />
                  </div>
                  
                  <div className="form-group">
                    <label className="input-label">Message</label>
                    <textarea className="input" rows={4} placeholder="Describe your issue or question..."></textarea>
                  </div>
                  
                  <div className="form-actions">
                    <button className="btn btn-primary btn-md">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}