import appearAnimation from './modules/appearAnimation'
import carousel from './modules/carousel'
import fakeSubmit from './modules/fakeSubmit'
import tab from './modules/tab'

window.addEventListener('DOMContentLoaded', () => {
  'use strict'

  appearAnimation({
    triggerSelector: '#advantages',
    animateSelector: '#advantages > li',
    animationConfig: { opacity: 0, y: -200, duration: 1, stagger: 0.1 }
  })
  appearAnimation({
    triggerSelector: '#comments',
    animateSelector: '#comments > li',
    animationConfig: { opacity: 0, x: -200, duration: 1, stagger: 0.25 }
  })
  fakeSubmit({ dataAttribute: 'data-submit' })
  tab({ activeClassArr: ['tab-active'], dataAttribute: 'data-tab' })
  carousel()
})
