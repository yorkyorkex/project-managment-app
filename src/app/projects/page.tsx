'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import ProtectedRoute from '@/components/ProtectedRoute';

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'on-hold';
  progress: number;
  team: string[];
  dueDate: string;
}

export default function Projects() {
  const [projects] = useState<Project[]>([
    {
      id: '1',
      name: 'Website Redesign',
      description: 'Complete overhaul of the company website with modern design',
      status: 'active',
      progress: 75,
      team: ['John Doe', 'Jane Smith'],
      dueDate: '2024-02-15'
    },
    {
      id: '2',
      name: 'Mobile App Development',
      description: 'Native mobile application for iOS and Android platforms',
      status: 'active',
      progress: 45,
      team: ['Mike Johnson', 'Sarah Wilson'],
      dueDate: '2024-03-20'
    },
    {
      id: '3',
      name: 'Data Migration',
      description: 'Migrate legacy data to new cloud infrastructure',
      status: 'completed',
      progress: 100,
      team: ['John Doe'],
      dueDate: '2024-01-10'
    },
    {
      id: '4',
      name: 'API Integration',
      description: 'Integrate third-party APIs for enhanced functionality',
      status: 'on-hold',
      progress: 20,
      team: ['Jane Smith', 'Mike Johnson'],
      dueDate: '2024-04-05'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return '#059669';
      case 'completed': return '#1976d2';
      case 'on-hold': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  return (
    <ProtectedRoute>
      <Layout>
      <div className="projects-page">
        <div className="projects-header">
          <div>
            <h1>Projects</h1>
            <p>Track and manage your ongoing projects.</p>
          </div>
          <Button>
            New Project
          </Button>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Card key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.name}</h3>
                <span 
                  className="project-status"
                  style={{ 
                    backgroundColor: getStatusColor(project.status),
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}
                >
                  {project.status.replace('-', ' ')}
                </span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-progress">
                <div className="progress-header">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${project.progress}%`,
                      backgroundColor: getStatusColor(project.status)
                    }}
                  ></div>
                </div>
              </div>

              <div className="project-details">
                <div className="project-team">
                  <span className="detail-label">Team:</span>
                  <span className="detail-value">{project.team.join(', ')}</span>
                </div>
                <div className="project-due-date">
                  <span className="detail-label">Due:</span>
                  <span className="detail-value">{new Date(project.dueDate).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="project-actions">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
    </ProtectedRoute>
  );
}