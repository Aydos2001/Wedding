/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
    },
    fontFamily : {
      mont : "Montserrat, sans-serif",
      lobster : "Lobster, sans-serif",
      pattaya : "Pattaya, sans-serif",
      merry : "Merriweather, sans-serif"
    },
    screens : {
      sm : "600px",
      md : "768px",
      lg : "1024px",
      xl : "1400px"
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

