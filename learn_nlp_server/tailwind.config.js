/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

export default {
  daisyui: {
    themes: ["light"], // You can add or remove themes here
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
