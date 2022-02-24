module.exports = {
  content: ["./src/**/*.svelte", "./src/**/*.css"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#00c389",
        secondary: "#e3e3e3",
        warning: "#9064cd",
        info: "#00d0d4",
        danger: "#ff5000",
        lightGrey: "#d4d4d4",
        midGrey: "#737373",
        darkGrey: "#262626",
        coal: "#404040",
      },
      fontFamily: {
        raleway: ["'Raleway'", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
};
