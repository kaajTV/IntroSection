/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",

    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#696969",
        },
        black: {
          100: "#141414",
        },
        white: {
          100: "#fafafa",
        },
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}