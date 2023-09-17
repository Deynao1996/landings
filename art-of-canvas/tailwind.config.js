/** @type {import('tailwindcss').Config} */
export default {
  content: ['*'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        regular: ['var(--font-regular)', 'sans-serif'],
        light: ['var(--font-light)', 'sans-serif'],
        bold: ['var(--font-bold)', 'sans-serif'],
        eb: ['var(--font-extra-bold)', 'sans-serif']
      },
      backgroundImage: {
        gift: "url('../img/bg/gift-bg.jpg')",
        sizes: "url('../img/bg/sizes-bg.jpg')",
        'linear-radial': 'linear-gradient(66deg, #a12ab1 0%, #c818bc 100%)'
      },
      listStyleImage: {
        checkmark: 'url("../img/checked.svg")'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        garden: {
          ...require('daisyui/src/theming/themes')['[data-theme=garden]'],
          primary: '#c51abb',
          secondary: '#f7e7e6'
        }
      }
    ]
  }
}
