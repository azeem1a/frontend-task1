# SaaS Homepage - React + Vite + Tailwind CSS

A pixel-perfect implementation of a SaaS landing page based on Figma design, built with React, Vite, and Tailwind CSS.

## Features

### Homepage (Figma-Strict)
- ✅ Pixel-perfect match to Figma design
- ✅ Exact layout, spacing, and typography
- ✅ All visual elements positioned accurately
- ✅ Responsive interactions and hover states

### Authentication
- ✅ Login page (`/login`)
- ✅ Signup page (`/signup`)
- ✅ Fake authentication with localStorage
- ✅ Protected routes

### Dashboard
- ✅ Dashboard summary page (`/dashboard`)
- ✅ Users page (`/users`) with:
  - Search functionality (by name or email)
  - Sorting (A-Z, Z-A)
  - Pagination
  - User detail modal
- ✅ Settings page (`/settings`) with:
  - Profile form
  - Theme toggle (Light/Dark mode)
  - localStorage persistence

### API Integration
- ✅ Integrated with `https://jsonplaceholder.typicode.com/users`
- ✅ Proper loading states
- ✅ Error handling
- ✅ Empty states

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **TypeScript** - Type safety (optional)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── homepage/          # Homepage components
│   │   ├── BackgroundElements.jsx
│   │   ├── HeroSection.jsx
│   │   ├── FeatureBoxesSection.jsx
│   │   ├── CompaniesSection.jsx
│   │   ├── GallerySection.jsx
│   │   ├── CTASection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── SupportSection.jsx
│   │   └── Footer.jsx
│   ├── layout/
│   │   └── DashboardLayout.jsx
│   └── ProtectedRoute.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Dashboard.jsx
│   ├── Users.jsx
│   └── Settings.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Design Specifications

- **Main Container**: 1440px × 4942px
- **Background**: #000000 (black)
- **Primary Gradient**: linear-gradient(132deg, rgba(255, 152, 152, 1) 0%, rgba(128, 84, 255, 1) 100%)
- **Typography**: Poppins (400, 600)
- **Colors**:
  - White: #FFFFFF
  - Gray: #9E9E9E
  - Dark Card: #18181C
  - Dark Card Alt: #222228

## Features Implemented

### Accessibility
- ✅ Semantic HTML elements
- ✅ Keyboard navigation support
- ✅ Visible focus states
- ✅ Proper ARIA labels

### UI/UX Quality
- ✅ Loading indicators
- ✅ Error states
- ✅ Empty states
- ✅ Smooth transitions
- ✅ Hover effects

### Code Quality
- ✅ Clean component structure
- ✅ Reusable UI components
- ✅ Separation of concerns
- ✅ Proper error handling

## Routes

- `/` - Homepage
- `/login` - Login page
- `/signup` - Signup page
- `/dashboard` - Dashboard (protected)
- `/users` - Users list (protected)
- `/settings` - Settings (protected)

## Notes

- Authentication is fake and uses localStorage
- All measurements match Figma design pixel-perfectly
- Theme toggle persists to localStorage
- User profile settings persist to localStorage

## License

This project is created for demonstration purposes.

