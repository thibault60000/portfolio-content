module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Poppins", "sans-serif"],
      },
      screens: {
        tablet: "640px",
        desktop: "835px",
      },
    },
  },
};
