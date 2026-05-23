/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'Times', 'serif'],
      },
      colors: {
        sage: {
          50: '#f6f9f6',
          100: '#eef3ee',
          200: '#dce6dc',
        },
        ink: {
          DEFAULT: '#2a332a',
          muted: '#5c6b5c',
        },
        forest: {
          link: '#2f5c2f',
          hover: '#234823',
        },
      },
    },
  },
  plugins: [],
}
