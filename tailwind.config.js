/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        logo: ["Tilt Prism", "sans-serif"]
      },
      colors: {
        'bgwhite': '#F5F5F5',
        'link-blue': '#346BD4',
      },
    },
  },
  plugins: [],
}