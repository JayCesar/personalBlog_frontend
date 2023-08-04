/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yelloy_01: '#F2CB05',
        yelloy_02: '#F2B705',
        oranga_01: '#F29F05',
        orange_02: '#F27405',
        orange_03: '#D95204',
      }
    },
  },
  plugins: [],
}