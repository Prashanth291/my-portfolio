/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4f8cff',
          dark: '#1e293b',
        },
        accent: {
          light: '#06b6d4',
          dark: '#0ea5e9',
        },
        background: {
          light: '#f9fafb',
          dark: '#0f172a',
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
