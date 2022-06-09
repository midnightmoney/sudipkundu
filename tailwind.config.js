module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico"],
      },
      screens: {
        "footer-wrap": "460px",
      },
      minHeight: { main: "80vh" },
    },
  },
  plugins: [],
};
