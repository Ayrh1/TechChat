/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./login.html"

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

/* 
    npx tailwindcss -i ./src/input.css -o ./public/css/output.css --watch 
*/
