const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'maxSm': { 'max': '800px' }
      },
      maxWidth: {
        'px-1120': '1120px',
        'px-980': '980px',
        'px-862': '862px',
        'px-810': '810px',
        'px-420': '420px'
      },
      boxShadow: {
        'outerbox': '0 -3px 5px -3px #b3b5ba',
        'outerbox-red': '0 -5px 5px -3px red'
      },
      colors: {
        primary: {
          500: '#00A3FA',
          400: '#F3FAFF',
          300: '#E8F1FF',
          200: '#393034',
          100: '#F9F9F9',
        },
        secondary: {
          500: '#444752',
          400: '#656A72',
          300: '#FAFAFA',
          200: '#b3b5ba',
          100: '#666a73',
          50: '#666666',
          10: '#cccccc'
        },
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
    },
  },
  plugins: [

  ],
}
