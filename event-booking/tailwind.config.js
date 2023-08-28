/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url('/src/assets/Images/main_bg.jpg')",
        "dark-gradient":
          "linear-gradient( rgba(49, 49, 49, 0.6) 0%, rgba(49, 49, 49, 1) 100%);",
        "white-gradient":
          "linear-gradient( rgba(246, 246, 248, 0.6) 0%, rgba(246, 246, 248, 1) 100%);",
      },
      backgroundColor: {
        "gradient-blue": " rgba(85, 34, 204, 1)",
      },
      fontFamily: {
        mont: "'Montserrat', sans-serif",
      },
      colors: {
        glass: "rgba(255, 255, 255, 0.24);",
        whiteMain: "#F6F6F8",
        darkContent: "#262626",
        darkMain: "#313131",
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
