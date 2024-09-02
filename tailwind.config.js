/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': '#001111',
      },
      width: {
        '85': '85%', // Define a custom width of 85%
      },
    },
  },
  plugins: [],
}

