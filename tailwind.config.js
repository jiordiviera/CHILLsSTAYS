/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custum-blue" : "#072F5B",
        "custum-green": "#28A745",
        "custum-blue-transparent" : "rgba(7, 47, 91, 0.2)"
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

