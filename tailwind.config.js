/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {

    extend: {
       fontFamily: {
      fancy: ["'DM Sans'", "sans-serif"],
      colors: {
    blush: {
      light: "#FFF5F7",
      accent: "#FF90B3",
      card: "#FFE4EC",
    },
    lavender: {
      dark: "#121212",
      accent: "#A68EFF",
      card: "#1E1E1E",
    },
  },
      
    },
    },
  },
  plugins: [],
};
