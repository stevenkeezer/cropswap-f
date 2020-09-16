const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          900: "#1e3656",
        },
      },
    },
  },
};
