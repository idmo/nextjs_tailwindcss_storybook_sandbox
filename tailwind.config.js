const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        success: colors.green,
        danger: colors.red,
        warning: colors.amber,
        primary: colors.sky,
        secondary: colors.zinc,
        info: colors.neutral,
      },
    },
  },
  plugins: [],
};
