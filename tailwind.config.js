/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      colors: {
        primary1: "#fd9204",
        primary2: "#4a4a4a",
        secondary1: "#25D366",
      },
      fontFamily: {
        blackOps: ['"Black Ops One"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
