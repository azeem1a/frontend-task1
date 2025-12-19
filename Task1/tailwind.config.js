/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'main-gradient-start': 'rgba(255, 152, 152, 1)',
        'main-gradient-end': 'rgba(128, 84, 255, 1)',
        'dark-bg': '#000000',
        'dark-card': '#18181C',
        'dark-card-alt': '#222228',
        'dark-card-deep': '#131415',
        'text-gray': '#9E9E9E',
        'text-white': '#FFFFFF',
        'border-gray': '#313139',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'hero': ['64px', { lineHeight: '1.25em', fontWeight: '600' }],
        'section-title': ['48px', { lineHeight: '1.6666666666666667em', fontWeight: '600' }],
        'feature-title': ['20px', { lineHeight: '1.6em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.5555555555555556em' }],
        'body': ['14px', { lineHeight: '2em' }],
        'body-sm': ['14px', { lineHeight: '1.4285714285714286em' }],
      },
      spacing: {
        '1440': '1440px',
        '4942': '4942px',
      },
    },
  },
  plugins: [],
}

