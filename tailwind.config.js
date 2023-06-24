/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        logo: ["Itim", "sans-serif"]
      },
      colors: {
        'magic': '#C1DCDC',
        'link-blue': '#346BD4',
      },
    },
  },
  plugins: [],
}