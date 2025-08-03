/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fafafa',
          100: '#f4f4f5',
          500: '#71717a',
          900: '#18181b',
        },
        accent: {
          50: '#fdf8f6',
          100: '#f6e8d8',
          200: '#ebd8c0',
          300: '#e0c8a8',
          400: '#d5b790',
          500: '#cba778',
          600: '#b89262',
          700: '#a17e53',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #cba778 0%, #b89262 100%)',
        'gradient-text': 'linear-gradient(135deg, #cba778 0%, #a17e53 100%)',
      },
    },
  },
  plugins: [],
};
