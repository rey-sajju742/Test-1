/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          600: '#2A3B4C',
          700: '#1F2937',
          800: '#1A2332',
          900: '#111827',
          950: '#0B1119',
        },
        gold: {
          400: '#FFD700',
          500: '#FFC107',
          600: '#FFB300',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};