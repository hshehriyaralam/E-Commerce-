/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 1px 3px -2px rgba(0, 0, 0, 1)',
      },
      colors: {
        'custom-dark': 'rgba(23, 23, 23, 1)',
      },
      lis_Colors :{
        'custom-dark2': 'rgba(98, 98, 98, 1)'
      },
      Fonts : {
        'poppins' : 'font-family: "Poppins", sans-serif;'
      },
      custom_radient : {
        'background':' linear-gradient(180deg, #fde1ff, #e1ffea22 60%)'
      },
       h2 : {
        'color' : 'rgba(9, 9, 9, 1)'
      }
    },
  },
  plugins: [],
}

