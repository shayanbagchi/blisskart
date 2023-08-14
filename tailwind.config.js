/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs': '488px',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        logo: ["Itim", "sans-serif"]
      },
      colors: {
        'magic':{
          200: '#d9eaeb',
          400: '#99b5ba',
          500: '#C1DCDC',
          600: '#8BC5C6',
          800: '#639C9D',
        }, 
      },
    },
  },
  plugins: [],
}