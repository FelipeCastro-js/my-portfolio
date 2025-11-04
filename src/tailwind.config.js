/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "50%": { opacity: "0" },
        },
        "loading-bar": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        "loading-bar": "loading-bar 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
