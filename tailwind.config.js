/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "5xl": ["3rem", "1.5"],
      },
    },
    fontFamily: {
      inter: ["Inter"],
      pj: ["Plus Jakarta Sans"], // Roboto Mono
    },
  },
  plugins: [],
};
