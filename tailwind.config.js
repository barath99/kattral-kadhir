/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        unicef: '#1CABE2',
        primary: {
          50: '#eef8ff',
          100: '#d8efff',
          500: '#157dcc',
          600: '#0f68ad',
          700: '#0d528a',
          900: '#123653',
        },
        ink: '#142133',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(15, 104, 173, 0.12)',
      },
    },
  },
  plugins: [],
};
