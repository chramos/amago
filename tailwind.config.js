const { colors } = require("./src/theme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "contact-img": "url('/src/assets/images/blog.png')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        museo: ["Museo", "sans-serif"],
      },
      colors: {
        primary: {
          50: colors.primary50,
          100: colors.primary100,
          200: colors.primary200,
          300: colors.primary300,
          400: colors.primary400,
          500: colors.primary500,
          600: colors.primary600,
          700: colors.primary700,
          800: colors.primary800,
          900: colors.primary900,
        },
        secondary: {
          50: "#efebec",
          100: "#d7cece",
          200: "#bdadae",
          300: "#a28c8e",
          400: "#8e7375",
          500: "#7a5a5d",
          600: "#725255",
          700: "#67484b",
          800: "#5d3f41",
          900: "#4a2e30",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
