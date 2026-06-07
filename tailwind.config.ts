import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95'
        },
        'primary-foreground': '#ffffff',
        secondary: {
          DEFAULT: '#14b8a6',
          foreground: '#ecfeff'
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff'
        },
        muted: {
          DEFAULT: '#64748b',
          foreground: '#e2e8f0'
        },
        background: '#0f172a',
        surface: '#0f172a',
        input: '#111827',
        border: '#1e293b'
      }
    }
  },
  plugins: []
};

export default config;
