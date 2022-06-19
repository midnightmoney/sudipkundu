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
        "550px": "550px",
        "350px": "350px",
        "666px": "666px",
      },
      minHeight: { main: "calc(100vh - 8.2rem)" },
    },
  },
  plugins: [],
};
