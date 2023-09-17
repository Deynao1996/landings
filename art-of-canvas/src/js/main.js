import Swiper from 'swiper'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import showModals from './modules/showModals'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'fslightbox'
import fakeSubmit from './modules/fakeSubmit'
import calculator from './modules/calculator'
import giftModalInteraction from './modules/giftModalInteraction'
import appearAnimation from './modules/appearAnimation'
import flipGallery from './modules/flipGallery'

export const PROMO_DISCOUNT = 30
export const PROMO_SECRET = 'dbvision'

const swiperCfg = {
  hero: {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false }
  },
  callback: {
    modules: [EffectFade, Pagination, Autoplay],
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }
}

const promoArr = ['#promo-1', '#promo-2', '#promo-3']

function animatePromo(selector, i) {
  const isEven = i % 2 == 0
  const x = isEven ? -100 : 100
  appearAnimation({
    triggerSelector: selector,
    animateSelector: selector,
    animationConfig: { opacity: 0, x, duration: 1 }
  })
}

window.addEventListener('DOMContentLoaded', () => {
  'use strict'
  // Animations
  appearAnimation({
    triggerSelector: '#promo',
    animateSelector: '#promo > *',
    animationConfig: { opacity: 0, x: -100, stagger: 0.3 }
  })
  appearAnimation({
    triggerSelector: '#styles',
    animateSelector: '#styles > li',
    animationConfig: { opacity: 0, y: -100, stagger: 0.1 }
  })
  promoArr.forEach(animatePromo)
  flipGallery({ filtersSelector: 'data-tab', tabItemSelector: '.tab-item' })

  // Sliders
  new Swiper('#hero-swiper', swiperCfg.hero)
  new Swiper('#feedback-swiper', swiperCfg.callback)

  //Logic
  giftModalInteraction({
    modalSelector: '#gift-modal',
    tooltipSelector: '#code-tooltip',
    percentageSelector: '#code-percentage',
    triggerSelector: '#gift'
  })
  showModals({ dataAttribute: 'data-modal' })
  fakeSubmit({
    dataAttribute: 'data-submit',
    fakeMessage: 'Success! Our manager will contact you shortly!'
  })
  calculator({ formSelector: '[data-submit="order"]' })
})
