/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        tedxRed: '#E62B1E',
        tedxBlack: '#000000',
      },
    },
  },
  plugins: [],
}
