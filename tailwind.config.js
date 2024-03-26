/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#000000",
        light: "#f5f5f5",
        primary: "#334155",
        primaryDark: "#0f172a",
      },
    },
  },
  plugins: [],
};
