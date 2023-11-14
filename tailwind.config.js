/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#f3f3fa",
        "text-color": "#ededed",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
      logoName: ["Libre Caslon Display"],
    },
  },
  plugins: [],
};
