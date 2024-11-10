/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "420px",

      md: "650px",

      lg: "1000px",

      xl: "1300px",

      "2xl": "1636px",
    },
    extend: {
      colors:{
        redfausti:"#80101A",
        bluefausti:"#3f4864",
        brown: "#340307",
        lightbrown: "#947153",
        wheat: "#ffd19d",
        red2:"#c40817",
        darkred: "#8e1d22",
        whiteCustom:"#F2F0E4",
      },
      fontFamily: {
        title: ["Ubuntu", "sans-serif"],
        title2: ["Inter", "serif"],
        title3: ["Zen Dots", "sans-serif"],
        title4: ["Syncopate", "sans-serif"],
        text: ["Oxygen", "sans-serif"],
        text2: ["Kanit", "sans-serif"],
        cursive: ["Great Vibes", "sans-serif"],
      },
    },
  },
  plugins: [],
};
