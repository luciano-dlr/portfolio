/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          100:'rgb(99 102 241)'
        },
        secondary:{
          100: '#dadada'
        }
      }
    },
  },
  plugins: [],
}

