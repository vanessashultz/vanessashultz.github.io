/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: {
          primary: '#2e2e30',
          secondary: '#4a4a4a',
        },
        primary: '#EC0A68',
        secondary: '#C200FB',
        tertiary: '#fc2f00',
        blue: {
          dark: '#16bac5',
          light: '#5dd9c1',
          green: '#59cd90',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
