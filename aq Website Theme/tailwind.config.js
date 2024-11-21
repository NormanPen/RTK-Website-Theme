/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.{html,js}",
    "./modules/**/*.{html,js}",
    "./layouts/**/*.{html,js}",
    "./system/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        verdana: ['Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
