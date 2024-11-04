/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    
    
    
    extend: {

      screens: {
          
        extraSmall: { max: "400px" },

        mobile: { max: "625px" },

        tablet: { max: "860px" },

        largeTablet: { max : "1050px" },

        laptop: { max: "1249px" },

        desktop: { min: "1250px"}

      },

      colors: {
        'swiggyText': '#484b4f',
        'swiggyTextLight' : '#626262',
        'swiggyFooter': '#f0f0f5'
      },

    },
  },
  plugins: [],
}

