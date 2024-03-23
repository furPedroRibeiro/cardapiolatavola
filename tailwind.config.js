/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,html}"
  ],
  theme: {
    extend: {
      colors:{
        'main': '#dc2626'
      },
      fontFamily:{
        'sans': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

