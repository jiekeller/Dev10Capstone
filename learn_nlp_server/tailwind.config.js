/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

export default {
  daisyui: {
    themes: false, // You can add or remove themes here
  },
  theme: {
    extend: {
      colors: {
        'primary-blue': '#39acff',
        'primary-blue-light': '#a0d8ff',
        'primary-blue-dark': '#0071c2',
        'aqua': '#39ffe6',
        'grey-blue': '#39ffe6'
      },
    },
  },
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
