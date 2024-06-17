/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
   
    screens: {
      sm: "420px",

      md: "650px",

      lg: "1000px",

      xl: "1200px",

      "2xl": "1536px",
    },
    extend: {
      colors:{
        wheat:"rgb(245 222 179)"
      },
      fontFamily: {
        title: ["Ubuntu", "sans-serif"],
        title2: ["Cinzel Decorative", "serif"],
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
