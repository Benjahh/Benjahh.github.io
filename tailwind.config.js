/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        firstColor: "#4B0082",
        secondColor: "#8B008B",
        thirdColor: "#DF00FF",
        fourthColor: "#4E2A84"
        
      }
    },
  },
  plugins: [],
}