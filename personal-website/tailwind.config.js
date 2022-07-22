const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
        head: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "3xl": "2160px",
      },
      colors: {
        zinc: {
          950: "#0e0e11",
        },
        stone: {
          950: "#120f0d"
        }
      },
    },
  },
  plugins: [],
};
