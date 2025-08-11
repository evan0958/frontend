module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#C084FC",
          DEFAULT: "#A855F7",
          dark: "#7E22CE"
        },
        accent: "#F43F5E",
        success: "#10B981"
      }
    }
  },
  plugins: [],
};
