/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
        },
      },

      fontFamily: {
        sans: ['Raleway'],
      },
    },
  },

  plugins: [],
};
