/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Verdana', 'Geneva', 'sans-serif'],
      },
      colors: {
        background: '##F7FAFC',
        primaryLight: '##FFFFFF',
        primaryDark: '##F56565',
      },
    },
  },
  plugins: [],
};
