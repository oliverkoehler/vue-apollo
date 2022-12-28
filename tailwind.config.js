/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#CDBD9B',
        'secondary': "#EDDDBC",
        "brown": {
          DEFAULT: "#6A1C18",
          light: "#A60701",
          medium: "#7C4027",
          veryLight: "#DDCCA5",
        },
        tok: {
          100: "#EDDDBC",
          200: "#DDCCA5",
          300: "#CDBD9B",
          500: "#A60701",
          700: "#6A1C18",
          900: "#7C4027"
        }
      },
      fontFamily: {
        wishbone: ["Wishbone"]
      }
    },
  },
  plugins: [],
}
