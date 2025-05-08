//** @type {import('tailwindcss').Config} */
/*export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};*/
const defaultTheme = require ('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        testcolor: "#ff0000",
        bgcolor: "#a3755d",
        textcolor: "#ffffff",
      }
    },
  },
  //...
  plugins: [
    require('daisyui'),
  ],
  
};
