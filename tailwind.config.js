/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundImage : {
        'sect_back': 'url("/img/Background.png")',
        'sect_2_back': 'url("/img/background wall.png")',
        'dog_back': 'url("/img/Ellipse.png")',

      },
    },
  },
  plugins: [],
}

