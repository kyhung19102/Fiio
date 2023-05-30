/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", 
            "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'body': 'Roboto, sans-serif'
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '98': '25rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}