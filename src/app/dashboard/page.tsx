'use client';

import Layout from '@/components/Layout';
import Card from '@/components/ui/Card';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorMessage from '@/components/ui/ErrorMessage';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useApp } from '@/contexts/AppContext';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const { state, actions } = useApp();
  const router = useRouter();
  const stats = [
    { title: 'Total Users', value: '2,543', change: '+12%', trend: 'up' },
    { title: 'Revenue', value: '$45,231', change: '+8%', trend: 'up' },
    { title: 'Orders', value: '1,234', change: '-3%', trend: 'down' },
    { title: 'Conversion Rate', value: '3.24%', change: '+0.5%', trend: 'up' }
  ];

  const recentActivity = [
    { user: 'John Doe', action: 'Created new project', time: '2 minutes ago' },
    { user: 'Jane Smith', action: 'Updated profile', time: '15 minutes ago' },
    { user: 'Mike Johnson', action: 'Completed task', time: '1 hour ago' },
    { user: 'Sarah Wilson', action: 'Left a comment', time: '2 hours ago' }
  ];

  if (state.isLoading) {
    return (
      <Layout>
        <div className="dashboard">
          <div className="loading-container" style={{ textAlign: 'center', padding: '2rem' }}>
            <LoadingSpinner size="lg" />
            <p style={{ marginTop: '1rem' }}>Loading dashboard...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <ProtectedRoute>
      <Layout>
      <div className="dashboard">
        {state.error && (
          <ErrorMessage 
            message={state.error} 
            onDismiss={() => actions.setError(null)} 
          />
        )}
        
        <div className="dashboard-header">
          <h1>Dashboard Overview</h1>
          <p>Welcome back! Here&apos;s what&apos;s happening with your business today.</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <Card key={index} className="stat-card">
              <div className="stat-content">
                <div className="stat-info">
                  <h3 className="stat-title">{stat.title}</h3>
                  <p className="stat-value">{stat.value}</p>
                </div>
                <div className={`stat-change ${stat.trend}`}>
                  <span className="stat-change-value">{stat.change}</span>
                  <span className="stat-trend-icon">
                    {stat.trend === 'up' ? '↗️' : '↘️'}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="dashboard-content">
          <Card title="Recent Activity" className="activity-card">
            <div className="activity-list">
              {recentActivity.map((activity, index) => (
                <div key={index} className="activity-item">
                  <div className="activity-info">
                    <span className="activity-user">{activity.user}</span>
                    <span className="activity-action">{activity.action}</span>
                  </div>
                  <span className="activity-time">{activity.time}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Quick Actions" className="actions-card">
            <div className="quick-actions">
              <button 
                className="action-btn add-user"
                onClick={() => router.push('/users')}
              >
                <span className="action-icon">👥</span>
                <span>Add User</span>
              </button>
              <button 
                className="action-btn view-reports"
                onClick={() => router.push('/projects')}
              >
                <span className="action-icon">📊</span>
                <span>View Reports</span>
              </button>
              <button 
                className="action-btn settings"
                onClick={() => router.push('/settings')}
              >
                <span className="action-icon">⚙️</span>
                <span>Settings</span>
              </button>
              <button 
                className="action-btn create-project"
                onClick={() => router.push('/projects')}
              >
                <span className="action-icon">📝</span>
                <span>Create Project</span>
              </button>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
    </ProtectedRoute>
  );
}