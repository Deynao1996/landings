/** @type {import('tailwindcss').Config} */
export default {
  content: ['*'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        regular: ['var(--font-regular)', 'sans-serif'],
        light: ['var(--font-light)', 'sans-serif'],
        bold: ['var(--font-bold)', 'sans-serif']
      },
      backgroundImage: {
        footer: "url('../img/bg/footer_bg.png')",
        form: "url('../img/bg/form_bg.png')",
        promo: "url('../img/bg/header_bg.png')"
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['autumn']
  }
}
