// API utility functions and configuration

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  message?: string;
}

class ApiError extends Error {
  status: number;
  
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}

async function apiRequest<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, { ...defaultOptions, ...options });
    
    if (!response.ok) {
      throw new ApiError(
        `HTTP error! status: ${response.status}`,
        response.status
      );
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    if (error instanceof ApiError) {
      return { error: error.message };
    }
    return { error: 'Network error occurred' };
  }
}

// User API functions
export const userApi = {
  getProfile: () => apiRequest('/users/profile'),
  updateProfile: (userData: any) => apiRequest('/users/profile', {
    method: 'PUT',
    body: JSON.stringify(userData),
  }),
  getUsers: () => apiRequest('/users'),
  createUser: (userData: any) => apiRequest('/users', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),
  updateUser: (id: string, userData: any) => apiRequest(`/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(userData),
  }),
  deleteUser: (id: string) => apiRequest(`/users/${id}`, {
    method: 'DELETE',
  }),
};

// Project API functions
export const projectApi = {
  getProjects: () => apiRequest('/projects'),
  getProject: (id: string) => apiRequest(`/projects/${id}`),
  createProject: (projectData: any) => apiRequest('/projects', {
    method: 'POST',
    body: JSON.stringify(projectData),
  }),
  updateProject: (id: string, projectData: any) => apiRequest(`/projects/${id}`, {
    method: 'PUT',
    body: JSON.stringify(projectData),
  }),
  deleteProject: (id: string) => apiRequest(`/projects/${id}`, {
    method: 'DELETE',
  }),
};

// Dashboard API functions
export const dashboardApi = {
  getStats: () => apiRequest('/dashboard/stats'),
  getActivity: () => apiRequest('/dashboard/activity'),
};

// Authentication API functions
export const authApi = {
  login: (credentials: { email: string; password: string }) => 
    apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),
  logout: () => apiRequest('/auth/logout', { method: 'POST' }),
  refreshToken: () => apiRequest('/auth/refresh', { method: 'POST' }),
};

export { ApiError };
export type { ApiResponse };