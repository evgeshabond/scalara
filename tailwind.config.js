/** @type {import('tailwindcss').Config} */

const defaultColors = require('tailwindcss/colors')
console.log(defaultColors)

module.exports = {
  content: [],
  theme: {
    colors: {
      ...defaultColors,
      grey: {
        dark: '#212121'
      },
      lila: {
        base: '#5E44FE'
      }
    },
    // colors: {
    //   ...defaultTheme.colors,
    //   'black': '#000000'
    //   // 'blue': '#1fb6ff',
    //   // 'purple': '#7e5bef',
    //   // 'pink': '#ff49db',
    //   // 'orange': '#ff7849',
    //   // 'green': '#13ce66',
    //   // 'yellow': '#ffc82c',
    //   // 'gray-dark': '#273444',
    //   // 'gray': '#8492a6',
    //   // 'gray-light': '#d3dce6',
    // },
    fontFamily: {
      // sans: ['Graphik', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    extend: {
      // spacing: {
      //   '8xl': '96rem',
      //   '9xl': '128rem',
      // },
      // borderRadius: {
      //   '4xl': '2rem',
      // }
    },
    
  },
  plugins: [],
}
