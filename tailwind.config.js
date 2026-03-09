/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Beige/off-white background + forest green accents
      colors: {
        beige: {
          50: '#fdfcfb',
          100: '#f8f5f0',
          200: '#f0ebe3',
          300: '#e5ddd0',
        },
        forest: {
          600: '#2d5a27',
          700: '#23491f',
          800: '#1a3817',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
