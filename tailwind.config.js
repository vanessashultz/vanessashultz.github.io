/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        offWhite: '#f9f9f9',
        gray: {
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
        darkMode: {
          primary: '#f563a0',
          secondary: '#f5a2c0',
          tertiary: '#f5d0e0',
          gray: {
            primary: '#1f1f1f',
            secondary: '#2e2e30',
            tertiary: '#4a4a4a',
          },
        },
      },
      fontFamily: {
        gerhause: 'gerhause',
      },
      animation: {
        shine: 'shine 1s',
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
