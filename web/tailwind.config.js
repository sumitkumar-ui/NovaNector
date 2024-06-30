/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Cyan:{
          100: "#cffafe"
        },
        Sky:{
          200: "#bae6fd"
        },
         Blue:{
          200:"#bfdbfe",
          3000: '#ceddef',
          1000:'#38B5FB',
          800: '#070D59'
         },
        
      }
    },
  },
  plugins: [],
}