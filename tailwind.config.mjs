/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#090a0f',
          surface: '#13151b',
          'surface-hover': '#1a1d26',
          border: '#232734',
          'border-subtle': '#1b1f2b',
          text: '#f1f3f7',
          muted: '#94a3b8',
          accent: '#38bdf8',
          'accent-glow': 'rgba(56, 189, 248, 0.15)',
        },
        light: {
          bg: '#f8fafc',
          surface: '#ffffff',
          'surface-hover': '#f1f5f9',
          border: '#e2e8f0',
          'border-subtle': '#f1f5f9',
          text: '#0f172a',
          muted: '#475569',
          accent: '#0284c7',
          'accent-glow': 'rgba(2, 132, 199, 0.12)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
