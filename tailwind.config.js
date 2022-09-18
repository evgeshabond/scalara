/** @type {import('tailwindcss').Config} */

const defaultColors = require('tailwindcss/colors')

module.exports = {
  content: [],
  theme: {
    colors: {
      ...defaultColors,
      grey: {
        dark: '#212121'
      },
      lila: {
        base: '#5E44FE',
        text: '#5E44FE',
      },
      yellow: {
        light: '#F5F5F5'
      },
      red: {
        3: '#fce8eb'
      }
    },
       
  },
  plugins: [],
}
