/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37", // Gold color
          dark: "#B8860B", // Darker shade of gold
        },
      },
    },
  },
  plugins: [],
};
