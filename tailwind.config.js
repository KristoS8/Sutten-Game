/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        'biru' : '#3282B8',
        'biru-muda' : '#BBE1FA',
        'biru-tua' : '#0F4C75',
        'hitam' : '#1B262C'
      },
      fontFamily : {
        'Concert-one' : ['Concert One']
      },
      height : {
        '100' : '500px'
      }
    },
  },
  plugins: [],
}

