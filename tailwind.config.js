/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'rd-station': {
          DEFAULT: '#0073E6',
          light: '#0088FF',
          dark: '#0059B3',
        },
      },
    },
  },
  plugins: [],
}
