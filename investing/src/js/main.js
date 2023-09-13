import Intro from './modules/intro'

window.addEventListener('DOMContentLoaded', () => {
  'use strict'
  new Intro({ intro: 'Hello from main.js' }).init()
})
