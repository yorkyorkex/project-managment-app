# Dashboard App with Google Authentication

A modern, responsive dashboard application built with Next.js 14, featuring Google OAuth authentication, beautiful UI, and comprehensive user management.

## Features

### 🔐 Authentication
- **Google OAuth**: Sign in/up with Google accounts
- **Credentials Login**: Demo login (admin@example.com / password)
- **NextAuth.js**: Secure session management
- **Protected Routes**: Automatic redirection for unauthenticated users

### 🎨 Modern UI/UX
- **Colorful Design System**: Modern color palette with gradients
- **Responsive Design**: Mobile-first approach with sidebar navigation
- **Glassmorphism Effects**: Backdrop blur and modern visual effects
- **Smooth Animations**: Transform effects and hover states
- **Inter Font**: Professional typography

### 📊 Dashboard Features
- **Statistics Cards**: Key metrics with trend indicators
- **Activity Feed**: Recent user activities
- **Quick Actions**: Navigation shortcuts with colorful hover effects
- **Real-time Updates**: Live data synchronization

### 👥 User Management
- **User List**: Searchable table with filtering
- **User Creation**: Modal-based user addition
- **Role Management**: Admin, Editor, User roles
- **Status Toggle**: Active/inactive user states

### 📁 Project Management
- **Project Cards**: Visual project overview
- **Progress Tracking**: Progress bars with status indicators
- **Team Assignment**: Team member assignments
- **Due Date Management**: Project timeline tracking

### ⚙️ Settings
- **Profile Management**: Update user information
- **Preferences**: Notifications and theme settings
- **Security**: Two-factor authentication options
- **Real-time Sync**: Changes reflect across the app

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Create a `.env.local` file in the root directory:

```env
# NextAuth.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-change-in-production

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 3. Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)
6. Copy Client ID and Client Secret to `.env.local`

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Authentication Methods

### Google OAuth
- Click "Continue with Google" on login page
- Automatically creates user profile from Google account
- Seamless signup/signin experience

### Demo Credentials
- Email: `admin@example.com`
- Password: `password`
- For testing purposes without Google setup

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Authentication**: NextAuth.js with Google OAuth
- **Styling**: CSS Modules with CSS Variables
- **State Management**: React Context API
- **TypeScript**: Full type safety
- **Font**: Inter (Google Fonts)

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── api/auth/          # NextAuth.js API routes
│   ├── login/             # Login page
│   ├── users/             # User management
│   ├── projects/          # Project management
│   ├── settings/          # Settings page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Layout.tsx        # Main layout
│   ├── Header.tsx        # Header component
│   ├── Sidebar.tsx       # Navigation sidebar
│   └── ProtectedRoute.tsx # Auth wrapper
├── contexts/             # React contexts
│   └── AppContext.tsx    # Global app state
├── hooks/               # Custom React hooks
│   └── useApi.ts        # API interaction hook
└── lib/                 # Utility functions
    ├── auth.ts          # NextAuth configuration
    └── api.ts           # API helpers
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub repository
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Update Google OAuth redirect URIs with production URL

### Other Platforms
- Update `NEXTAUTH_URL` to production URL
- Configure Google OAuth redirect URIs
- Set environment variables on hosting platform

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

This project is licensed under the MIT License.
