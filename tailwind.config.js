/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B33A3',
          50: '#EEF1F8',
          100: '#D5DCF0',
          200: '#AAB6E0',
          300: '#7084C8',
          400: '#3556B4',
          500: '#1A40AB',
          600: '#0B33A3',
          700: '#092A86',
          800: '#07206A',
          900: '#05164D',
        },
        orange: {
          50: '#EEF1F8',
          100: '#D5DCF0',
          200: '#AAB6E0',
          300: '#7084C8',
          400: '#3556B4',
          500: '#1A40AB',
          600: '#0B33A3',
          700: '#092A86',
          800: '#07206A',
          900: '#05164D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
