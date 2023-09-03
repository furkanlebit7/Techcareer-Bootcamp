/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url('/src/assets/Images/main_bg.jpg')",
        "fullWidth-bg":
          "url('https://ovatheme.com/em4u/wp-content/uploads/2017/09/bg3.jpg')",
        "dark-gradient":
          "linear-gradient( rgba(237, 70, 144, 0.6) 0%, rgba(49, 49, 49, 1) 100%);",
        "white-gradient":
          "linear-gradient( rgba(237, 70, 144, 0.6) 0%, rgba(246, 246, 248, 1) 100%);",
        "blight-gradient":
          "linear-gradient( rgba(0, 0, 0, 0.0) 60%, rgba(0, 0, 0, 1) 100%);",
      },
      backgroundPosition: {
        "left-4": "center left 1rem",
      },
      backgroundSize: {
        "150%": "150%",
      },
      backgroundColor: {
        "gradient-blue": " rgba(85, 34, 204, 1)",
      },
      fontFamily: {
        mont: "'Montserrat', sans-serif",
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        glass: "rgba(255, 255, 255, 0.24);",
        whiteMain: "#F6F6F8",
        darkContent: "#262626",
        darkMain: "#313131",
        pinky: "#F53F7B",
        bluecy: "0A075F",
      },
      width: {
        18: "70px",
      },
      height: {
        18: "70px",
      },
      margin: {
        26: "108px",
        50: "196px",
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        xs: "400px",
      },
      fontSize: {
        "2xs": ".65rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
