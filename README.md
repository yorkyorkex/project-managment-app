# Project Management App

A modern, responsive project management dashboard built with Next.js 15, featuring multiple authentication methods, beautiful dark UI, and comprehensive user and project management.

## 🚀 Live Demo

**Try it now**: [Live Demo on Vercel](https://your-vercel-url.vercel.app)

**Quick Start**: Click the "🚀 DEMO MODE" button on the login page to skip authentication and explore all features instantly!

## ✨ Features

### 🔐 Multiple Authentication Methods
- **🚀 Demo Mode**: Instant access without any login (perfect for demos!)
- **Google OAuth**: Sign in/up with Google accounts
- **Credentials Login**: Traditional email/password login
- **NextAuth.js**: Secure session management with JWT
- **Protected Routes**: Automatic redirection for unauthenticated users
- **Persistent Sessions**: Demo mode sessions persist across page refreshes

### 🎨 Modern Dark UI/UX
- **Dark Theme**: Professional dark interface throughout
- **Responsive Design**: Mobile-first approach with collapsible sidebar
- **Gradient Effects**: Beautiful color gradients and modern visual effects
- **Smooth Animations**: Transform effects and hover states
- **Professional Typography**: Inter font for optimal readability
- **Glassmorphism**: Modern backdrop blur effects

### 📊 Dashboard Features
- **Statistics Cards**: Key metrics with trend indicators and visual icons
- **Activity Feed**: Real-time recent user activities
- **Quick Actions**: One-click navigation to main features
- **Welcome Page**: Professional landing page for new visitors
- **Data Visualization**: Charts and progress indicators

### 👥 User Management
- **User Directory**: Searchable and filterable user list
- **User Creation**: Modal-based user addition with form validation
- **Role Management**: Admin, Editor, User role assignments
- **Status Management**: Active/inactive user states
- **Profile Management**: Comprehensive user profile editing

### 📁 Project Management
- **Project Overview**: Visual project cards with status indicators
- **Progress Tracking**: Real-time progress bars and completion status
- **Team Assignment**: Team member assignments and collaboration
- **Due Date Management**: Project timeline and deadline tracking
- **Project Creation**: Easy project setup with templates

### ⚙️ Settings & Preferences
- **Profile Settings**: Update personal information and avatar
- **Notification Preferences**: Customize notification settings
- **Theme Settings**: Dark theme customization options
- **Security Settings**: Password and authentication preferences
- **Real-time Sync**: Changes reflect immediately across the app

## 🎯 Demo Instructions

### Option 1: Instant Demo Mode (Recommended)
1. Visit the live demo or run locally
2. Click **"Get Started"** or **"View Demo"** on the homepage
3. On the login page, click the **"🚀 DEMO MODE - Skip Login & Enter Dashboard"** button
4. Explore all features instantly - no setup required!

### Option 2: Traditional Login
- Email: `admin@example.com`
- Password: `password`

### Option 3: Google OAuth
- Click "Continue with Google" (requires Google OAuth setup)

## 🛠️ Local Development Setup

### 1. Clone and Install
```bash
git clone https://github.com/yourusername/project-management-app.git
cd project-management-app
npm install
```

### 2. Environment Configuration (Optional)
Create a `.env.local` file for full authentication features:

```env
# NextAuth.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-change-in-production

# Google OAuth Configuration (Optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

**Note**: The app works perfectly without environment variables thanks to the demo mode!

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and use demo mode to explore all features.

### 4. Build for Production
```bash
npm run build
npm start
```

## 🔧 Google OAuth Setup (Optional)

Only needed if you want Google authentication:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)
6. Copy Client ID and Client Secret to `.env.local`

## 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router) with React 18
- **TypeScript**: Full type safety throughout
- **Authentication**: NextAuth.js with multiple providers
- **Styling**: CSS Modules with CSS Variables
- **State Management**: React Context API with localStorage persistence
- **Icons**: Emoji-based iconography for universal compatibility
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── api/auth/          # NextAuth.js API routes
│   ├── dashboard/         # Main dashboard page
│   ├── login/             # Login page with demo mode
│   ├── users/             # User management
│   ├── projects/          # Project management
│   ├── settings/          # Settings and preferences
│   ├── page.tsx           # Landing page
│   └── layout.tsx         # Root layout with providers
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Layout.tsx        # Main app layout
│   ├── Header.tsx        # Header with user menu
│   ├── Sidebar.tsx       # Navigation sidebar
│   ├── ProtectedRoute.tsx # Authentication wrapper
│   └── ThemeProvider.tsx  # Theme management
├── contexts/             # React contexts
│   └── AppContext.tsx    # Global app state with persistence
├── hooks/               # Custom React hooks
│   ├── useApi.ts        # API interaction hook
│   └── useTheme.ts      # Theme management hook
└── lib/                 # Utility functions
    ├── auth.ts          # NextAuth configuration
    └── api.ts           # API helpers
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub repository
2. Connect to Vercel
3. Deploy immediately - no environment variables required for demo mode!
4. Optionally add Google OAuth environment variables for full authentication

### Other Platforms
- Works on any Node.js hosting platform
- No database required - perfect for static deployments
- Demo mode works without any external dependencies

## 🎨 Key Features Showcase

### Landing Page
- Professional welcome page with feature highlights
- Clear call-to-action buttons
- Responsive design with gradient backgrounds

### Demo Mode
- Instant access without authentication setup
- Persistent sessions across page refreshes
- Full feature access for demonstrations

### Dashboard
- Modern dark theme interface
- Statistics cards with trend indicators
- Recent activity feed
- Quick action buttons for main features

### Navigation
- Collapsible sidebar with clean icons
- Active page highlighting
- Mobile-responsive hamburger menu

### User Experience
- Smooth page transitions
- Loading states and error handling
- Form validation and feedback
- Responsive design for all screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- NextAuth.js for authentication solutions
- Vercel for hosting and deployment
- Inter font family for beautiful typography

---

**Ready to explore?** 🎉 Visit the live demo and click the "🚀 DEMO MODE" button to start instantly!