import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'fslightbox'
import 'swiper/css'
import 'swiper/css/pagination'
import Tab from './modules/tab'
import Countdown from './modules/countdown'
import FormInteraction from './modules/formInteraction'
import Sequence from './modules/dialogSequence'
import AppearAnimation from './modules/appearAnimation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

window.addEventListener('DOMContentLoaded', () => {
  'use strict'

  new AppearAnimation({
    triggerSelector: '#wooden',
    animateSelector: '#wooden > li',
    animationCfg: { opacity: 0, y: 100 }
  }).init()
  new AppearAnimation({
    triggerSelector: '#works-grid',
    animateSelector: '#works-grid > a',
    animationCfg: {
      opacity: 0,
      y: 100,
      ease: 'power1.inOut',
      stagger: {
        grid: 'auto',
        from: 'random',
        amount: 1.5
      }
    },
    triggerCfg: {
      scrub: 1,
      pin: true,
      start: 'center center'
    }
  }).init()
  new AppearAnimation({
    triggerSelector: '#services-items',
    animateSelector: '#services-items > li',
    animationCfg: {
      opacity: 0,
      x: 100,
      ease: 'power1.inOut',
      stagger: 0.3
    },
    triggerCfg: {
      start: 'center bottom'
    }
  }).init()

  new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50
      }
    }
  })

  new Tab({
    activeClassArr: ['border-accent-focus', 'shadow-xl'],
    dataAttribute: 'data-tab-balconies'
  }).init()
  new Tab({
    activeClassArr: ['tab-active'],
    dataAttribute: 'data-tab-discount'
  }).init()
  new Tab({
    activeClassArr: ['scale-105'],
    dataAttribute: 'data-tab-calculator'
  }).init()

  new Countdown({
    timerSelector: '#timer',
    deadlineSelector: '#deadline'
  }).init()

  new FormInteraction({
    selector: '.form-freezer'
  }).init()
  new FormInteraction({
    selector: '.form-callback',
    relativeModalSelector: '#callback_modal'
  }).init()
  new FormInteraction({
    selector: '.form-sum',
    relativeModalSelector: '#sum_modal'
  }).init()

  new Sequence({
    currentModalSelector: '#calculator_modal',
    formSelector: '#form-calculator',
    nextModalSelector: '#type_modal'
  }).init()
  new Sequence({
    currentModalSelector: '#type_modal',
    formSelector: '#form-type',
    nextModalSelector: '#sum_modal'
  }).init()
})
