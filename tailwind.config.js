/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [],
  theme: {
    extend: {}
  },
  plugins: [require('tailwindcss-inner-border')]
}
