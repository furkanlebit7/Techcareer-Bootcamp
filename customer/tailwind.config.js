/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgMain: "#F6F6F8",
        darkMain: "#262626",
        darkBg: "#313131",
      },
    },
  },
  plugins: [],
};
