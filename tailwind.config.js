module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'sm': {'max': '576px'},
      'md': {'max': '768px'},
      'lg': {'max': '992px'},
      'xl' : {'max': '1200px'},
      '2xl': {'max': '1536px'},
    },
    fontFamily:{
      irish: ['Irish Grover', 'cursive'],
    },
    container:{
      center:true,
      padding: "1rem"
    },
    extend: {
      
    },
  },
  plugins: [],
}