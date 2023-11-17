/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./views/layouts/main.handlebars", //this is the main.handlbars.js
    "./views/authForm.handlebars",
    "./views/dashboard.handlebars",
    "./views/homepage.handlebars"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

/* 
    npx tailwindcss -i ./src/input.css -o ./public/css/output.css --watch 
*/
