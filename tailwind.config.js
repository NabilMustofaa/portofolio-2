/** @type {import('tailwindcss/types').Config} */
const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)"],
      },
    },
  },
  plugins: [],
};

module.exports = config;
