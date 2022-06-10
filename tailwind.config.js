module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico"],
        montserrat: ["Montserrat"],
      },
      screens: {
        "500px": "500px",
        "350px": "350px",
      },
      minHeight: { main: "calc(100vh - 10rem)" },
    },
  },
  plugins: [],
};
