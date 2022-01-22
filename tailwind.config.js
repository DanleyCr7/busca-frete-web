module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right top, rgba(43, 108, 176, 0.9), rgba(43, 108, 176, 0.1)), url('~/img/background.jpg')",
        "parceria": 
          "linear-gradient(to right top, rgba(78, 50, 168, 0.9), rgba(22, 3, 82, 0.1)), url('~/img/parceria.jpg')",
          
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
