/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        ubuntu: "ubuntu",
      }
    },
    screens: {
      "sm": "450px",
      "smd": "900px",
      "md": "1050px"
    }
  },
  plugins: [],
}