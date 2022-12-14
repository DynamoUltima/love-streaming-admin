/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

const fontFamily = {
  sans: ["Roboto", "sans-serif"],
  serif: ["Roboto Slab", "serif"],
  body: ["Montserrat", ],
};

module.exports = withMT({
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './comps/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        mattblack:'#202020',
        grayblack:'#242424',
        blacklist:'#1d1d1d'
      },
      boxShadow: {
        myShadow1: "4.1px -5px 0 0 mattblack",
        myShadow2: "-4.1px -5px 0 0 mattblack",
      }
    },
    fontFamily: {
      body: ["Montserrat"],
    },
  },
  plugins: [],
});
