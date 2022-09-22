/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  mode : "jit",
  darkMode:"class",
  content: [],
  theme: {
    
    extend: {
      fontFamily:{
        bankGothick:["bankGothick"],
        beckett:["beckett"],
        diploma:["diploma"],
        futuraLBold:["futuraLBold"],
        priceDown:["priceDown"],
      },
      colors:{
        "gtagray" : "#95A4C4",
        "gtagray-passive" : "#4D5863"
      },
    },
  },
  plugins: [],
}
