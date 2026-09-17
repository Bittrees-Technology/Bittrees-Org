/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,json}",
  ],
  theme: {
    fontFamily: {
      newtimesroman: ["Tinos", "serif"],
    },
    extend: {},
  }, 
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake"],
  },
}
