/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Ensure this line is present
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
