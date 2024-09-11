/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        amiri: ['Amiri', 'serif'],
      },
      colors: {
        primary: '#B7EBF7',
      },
      direction: {
        rtl: 'rtl',
      },
    },
  },
  plugins: [],
};
