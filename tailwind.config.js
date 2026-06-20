/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        neutral: {
          900: '#111111',
          800: '#191919',
          750: '#1e1e1e',
          700: '#242424',
          600: '#2a2a2a',
          500: '#3d3d3d',
          400: '#555555',
          300: '#888888',
          200: '#cccccc',
          100: '#e2e2e2',
        },
      },
    },
  },
  plugins: [],
};
