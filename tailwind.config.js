/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      backgroundImage: {
        noise: "url('./assets/noise.gif')",
      },

      fontFamily: {
        bebasNeue: ['Bebas Neue', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        heroSize: '10rem',
      },
      colors: {
        firstAccent: '#0F0F0F',
        secondAccent: '#27272A',
        thirdAccent: '#A1A1AA',
        fourthAccent: '#27272A',
      },
    },
  },
};
