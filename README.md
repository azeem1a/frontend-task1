#  Homepage - React + Vite + Tailwind CSS

A pixel-perfect implementation of a landing page based on Figma design, built with React, Vite, and Tailwind CSS.

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

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:

npm install or npm i


2. Start the development server:

npm run dev


3. Open your browser and navigate to `http://localhost:5173`


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
- <img width="1358" height="631" alt="image" src="https://github.com/user-attachments/assets/3fb36e0b-5b0f-4015-8b1c-1f1be5656d05" />

- `/login` - Login page
- <img width="1366" height="631" alt="image" src="https://github.com/user-attachments/assets/20a4ddf0-1c86-4df0-b002-3fd5c23df76b" />

- `/signup` - Signup page
- <img width="1363" height="630" alt="image" src="https://github.com/user-attachments/assets/b3dfd5a9-391e-427c-9952-723099e7c91b" />

- `/dashboard` - Dashboard (protected)
- <img width="1350" height="631" alt="image" src="https://github.com/user-attachments/assets/c2016890-9d6e-4834-a6a6-c9679f868531" />

- `/users` - Users list (protected)
- <img width="1347" height="632" alt="image" src="https://github.com/user-attachments/assets/8077c61c-5bd3-4394-bed8-4c844c92efe1" />

- `/settings` - Settings (protected)
<img width="1350" height="632" alt="image" src="https://github.com/user-attachments/assets/8f70d0b5-c6c4-4fe2-a31a-f3a13e06c5b6" />

## Notes

- Authentication is fake and uses localStorage
- All measurements match Figma design pixel-perfectly
- Theme toggle persists to localStorage
- User profile settings persist to localStorage

## Deployed

This project is Deployed on Netlify.
