import tab from './modules/tab'
import slider from './modules/slider'
import collapse from './modules/collapse'

window.addEventListener('DOMContentLoaded', () => {
  'use strict'

  tab('.charges__tabs button', '.charges__items')
  slider(
    '.client__inner',
    '.client__slider-arrows_left',
    '.client__slider-arrows_right'
  )
  collapse()
})
