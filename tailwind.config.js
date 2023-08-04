/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        yellow_01: '#F2CB05',
        yellow_02: '#F2B705',
        orange_01: '#F29F05',
        orange_02: '#F27405',
        orange_03: '#D95204',
        black_01: '#140B33',
      }
    },
  },
  plugins: [],
}