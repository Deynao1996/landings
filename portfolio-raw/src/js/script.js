window.addEventListener('DOMContentLoaded', () => {
  'use strict'

  // MENU
  const btnShow = document.querySelector('.promo__ham'),
    btnHide = document.querySelector('.promo__menu-cross'),
    overlay = document.querySelector('.overlay'),
    menu = document.querySelector('.promo__menu'),
    menuBtns = document.querySelectorAll('.promo__menu-link'),
    scrollValue = calcScroll()

  function checkMenu(menuClass, overlayClass) {
    if (
      menu.classList.contains(menuClass) &&
      overlay.classList.contains(overlayClass)
    ) {
      document.body.style.overflow = ''
      document.body.style.marginRight = `0px`
    } else {
      document.body.style.overflow = 'hidden'
      document.body.style.marginRight = `${scrollValue}px`
    }

    menu.classList.toggle(menuClass)
    overlay.classList.toggle(overlayClass)
  }

  function calcScroll() {
    let div = document.createElement('div')

    div.style.width = '50px'
    div.style.height = '50px'
    div.style.overflowY = 'scroll'
    div.style.visibility = 'hidden'

    document.body.appendChild(div)
    let scrollWidth = div.offsetWidth - div.clientWidth
    div.remove()

    return scrollWidth
  }

  btnShow.addEventListener('click', () => {
    checkMenu('promo__menu-active', 'overlay-active')
  })

  btnHide.addEventListener('click', () => {
    checkMenu('promo__menu-active', 'overlay-active')
  })

  menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      checkMenu('promo__menu-active', 'overlay-active')
    })
  })

  // SCALE
  const percents = document.querySelectorAll('.roller__title span'),
    scale = document.querySelectorAll('.roller__scale div')

  percents.forEach((percent, i) => {
    scale.forEach((item, j) => {
      if (i === j) {
        item.style.width = percent.textContent
      }
    })
  })
})
