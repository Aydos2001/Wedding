const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
  "./index.html", 
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
  "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {},
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
  plugins: [],
});

