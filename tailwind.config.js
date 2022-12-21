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

          neutral: "#22c55e",

          "base-100": "#374151",

          info: "#2463EB",

          success: "#c026d3",

          warning: "#f59e0b",

          error: "#DC2828",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
