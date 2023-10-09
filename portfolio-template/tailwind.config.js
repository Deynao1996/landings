/** @type {import('tailwindcss').Config} */
export default {
  content: ['*'],
  darkMode: 'class',
  theme: {
    fontWeight: {
      light: '300',
      normal: '400',
      semibold: '500',
      bold: '700'
    },
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)', 'sans-serif']
      },
      backgroundImage: {
        hero: "url('img/main_bg.jpg')"
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['bumblebee', 'luxury']
  }
}
