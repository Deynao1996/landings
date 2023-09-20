window.addEventListener('DOMContentLoaded', () => {
  'use strict'

  const slider = (
    dotsSelector,
    dotsListSelector,
    itemsSelector,
    bntLeftSelector,
    bntRightSelector,
    tabActiveClass,
    animationFirst,
    animationSecond
  ) => {
    const dots = document.querySelectorAll(dotsSelector),
      dotsList = document.querySelector(dotsListSelector),
      items = document.querySelectorAll(itemsSelector),
      btnLeft = document.querySelector(bntLeftSelector),
      btnRight = document.querySelector(bntRightSelector)

    let currentSlide = 1

    function activeDots(currentSlide) {
      let index = currentSlide - 1
      dots.forEach((item) => {
        item.classList.remove(tabActiveClass)
      })
      dots[index].classList.add(tabActiveClass)
    }

    function showCurrentSlide(currentSlide, animationRight, animationleft) {
      let index = currentSlide - 1
      items.forEach((item) => {
        item.classList.remove(animationRight)
        item.classList.add(animationleft)
        item.style.display = 'none'
      })

      items[index].style.display = 'block'
    }

    btnRight.addEventListener('click', () => {
      if (currentSlide === items.length) {
        currentSlide = 1
      } else {
        currentSlide++
      }
      activeDots(currentSlide)
      showCurrentSlide(currentSlide, animationFirst, animationSecond)
    })

    btnLeft.addEventListener('click', () => {
      if (currentSlide === 1) {
        currentSlide = items.length
      } else {
        currentSlide--
      }
      activeDots(currentSlide)
      showCurrentSlide(currentSlide, animationSecond, animationFirst)
    })

    dotsList.addEventListener('click', (e) => {
      if (e.target.nodeName === 'LI') {
        dots.forEach((item) => {
          item.classList.remove(tabActiveClass)
        })
        e.target.classList.add(tabActiveClass)
        dots.forEach((item, i) => {
          if (item.classList.contains(tabActiveClass)) {
            currentSlide = i + 1
          }
        })
      }
      showCurrentSlide(currentSlide, animationFirst, animationSecond)
    })

    activeDots(currentSlide)
    showCurrentSlide(currentSlide, animationFirst, animationSecond)
  }

  slider(
    '.promo__circles-circle',
    '.promo__circles-list',
    '.promo__phone',
    '.promo__circles-arrow-left',
    '.promo__circles-arrow-right',
    'promo__circles-circle-active',
    'animate__fadeInRight',
    'animate__fadeInLeft'
  )

  slider(
    '.decision__tab',
    '.decision__tabs',
    '.decision__img',
    '.decision__arr-left',
    '.decision__arr-right',
    'decision__tab-active',
    'animate__fadeInRight',
    'animate__fadeInLeft'
  )
})
