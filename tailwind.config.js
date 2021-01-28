module.exports = {
  purge: ["./pages/**/*.{tsx}", "./components/**/*.{tsx}", "./ui/**/*.{tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      shipGray: "#3e3e42",
      tuna: "#343338",
      balticSea: "#27262B",
      steelGray: "#1e1d26",
      black: "#000000",
      white: "#FFFFFF",
      transparent: "#FFFFFF00",
      dodgerBlue: "#3478f6",
      santosGray: "#A3A3A6",
      iron: "#e0e0e1",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
