/* eslint-env node */
// const defaultTheme = require('tailwindcss/defaultTheme')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#073742',
        secondary: '#BDEDFC',
        sky: '#EBFAFE',
        pink: '#FFA2EA',
      },
      backgroundColor: {
        'light': '#F4ECDC',
        'boxes': '#F6F6F6',
        'stroke': '#FFF',
      },
      opacity: {
        '1': '0.1',
        '2': '0.2',
        '3': '0.3',
        '4': '0.4',
        '5': '0.5',
        '6': '0.6',
        '7': '0.7',
        '8': '0.8',
        '9': '0.9',
        '10': '1',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    iconsPlugin({
      // Collections: https://icones.js.org/
      collections: getIconCollections(['mdi']),
    }),
  ],
}
