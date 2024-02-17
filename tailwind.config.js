/* eslint no-undef: 0 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      red: "#FFADAD",
      orange: "#FFBF70",
      yellow: "#FDEF5E",
      green: "#B1F84F",
      blue: "#A0C4FF",
      purple: "#BDB2FF",
      lred: "#FFADAD50",
      lorange: "#FFBF7050",
      lyellow: "#FDEF5E50",
      lgreen: "#B1F84F50",
      lblue: "#A0C4FF50",
      lpurple: "#BDB2FF50",
      grey: "#999999",
      lgrey: "#e9e8e8",
      tred: "#FFADAD45",
      torange: "#FFBF7045",
      tyellow: "#FDEF5E45",
      tgreen: "#B1F84F45",
      tblue: "#A0C4FF45",
      tpurple: "#BDB2FF45",
      tgrey: "#e9e8e880",
      rainbow:
        "linear-gradient(to right, #FFADAD, #FFBF70, #FDEF5E, #B1F84F, #A0C4FF, #BDB2FF)",
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
