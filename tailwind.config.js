/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./layouts/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        roboto: ["'Roboto', sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "tts-darkblue": "#1f2733",
        "tts-blue": "#1890FF",
        "tts-black": "#171D26",
        "tts-red": "#ac3e3f",
        "tts-orange": "#FABC16",
        "tts-background": "#f0f2f5",
      },
      maxHeight: {
        "screen" : "calc(100vh - 194px)"
      }
    },
  },
  plugins: [],
};
