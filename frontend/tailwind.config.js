/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0F8FF",
          100: "#DFF0FF",
          200: "#B8E1FF",
          300: "#7ACBFF",
          400: "#33B1FD",
          500: "#0997EE",
          600: "#0077CC",
          700: "#005FA5",
          800: "#045188",
          900: "#0A4470",
          950: "#062A4B",
        },
        secondary: {
          50: "#FE6B6B",
          100: "#C01515",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
