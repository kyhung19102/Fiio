/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", 
            "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'body': 'Roboto, sans-serif'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}