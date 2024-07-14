/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "rgb(223, 223, 223)",
      }
    },
  },
  plugins: [],
}

