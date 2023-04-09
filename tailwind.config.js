/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1d4ed8",

          secondary: "#db2777",

          accent: "#EBDC99",

          neutral: "#57534e",

          "base-100": "#f1f2f4",

          info: "#2463EB",

          success: "#c026d3",

          warning: "#f59e0b",

          error: "#DC2828",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require('tailwindcss-textshadow')],
};
