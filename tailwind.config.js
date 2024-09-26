/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Ensure this is 'class'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#4f46e5",
      },
    },
  },
  plugins: [require("daisyui")],
};
