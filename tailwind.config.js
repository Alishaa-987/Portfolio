/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Semantic custom properties
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-card': 'var(--bg-card)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'border-color': 'var(--border-color)',
        accent: 'var(--accent)',

        // Custom config legacy mapping
        charcoal: 'var(--charcoal)',
        'dark-gray': 'var(--dark-gray)',
        'medium-gray': 'var(--medium-gray)',
        sage: 'var(--sage)',
        'light-gray': 'var(--light-gray)',
      },
    },
  },
  plugins: [],
};
