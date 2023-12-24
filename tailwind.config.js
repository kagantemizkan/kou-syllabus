/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        pear: {
          50: '#fdfee7',
          100: '#f9fbcc',
          200: '#f2f79f',
          300: '#e4f066',
          400: '#d1e231',
          500: '#b5c919',
          600: '#8ea010',
          700: '#6b7a11',
          800: '#556113',
          900: '#475215',
          950: '#252d06',
        },
        antiqueSteel: {
          50: '#f7f7f7',
          100: '#ececed',
          200: '#dddfe0',
          300: '#c6caca',
          400: '#b1b6b7',
          500: '#959b9c',
          600: '#84898c',
          700: '#777c7e',
          800: '#63686a',
          900: '#525556',
          950: '#343637',
        }
      }
    },
  },
  plugins: [],
};
