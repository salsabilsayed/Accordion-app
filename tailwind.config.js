module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        magenta: '#4b145b'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
