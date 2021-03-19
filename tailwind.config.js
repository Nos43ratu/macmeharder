module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      animation: {
        "right-slide": "rightSlide .5s linear forwards",
        "left-slide": "leftSlide .5s linear forwards",
      },
      keyframes: {
        rightSlide: {
          "0%": { left: "100%" },
          "100%": { left: "0" },
        },
        leftSlide: {
          "0%": { left: "0" },
          "100%": { left: "100%" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
