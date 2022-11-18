/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        background: '#F7FAFC',
        primaryLight: '#FFFFFF',
        primaryDark: '#F56565',
        newsIdColor: '#6E7786',
        newsFontColor: '#434851',
      },
    },
  },
};
