/** @type {import('tailwindcss').Config} */
export default {
  content: ['*'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)', 'sans-serif'],
        secondary: ['var(--font-secondary)', 'sans-serif']
      },
      backgroundImage: {
        hero: "url('img/main/bg.png')",
        promotion: "url('img/sale/bg.jpg')"
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['bumblebee']
  }
}
