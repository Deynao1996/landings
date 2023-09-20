import gsap from 'gsap'
import { initInnerCarousel } from './carousel'

export default function tab({ activeClassArr = [], dataAttribute }) {
  const menuElements = document.querySelectorAll(`[${dataAttribute}]`)
  const tl = gsap.timeline()

  function handleClassSwitch(id, removeClass, addClass) {
    document.getElementById(id).classList.remove(removeClass)
    document.getElementById(id).classList.add(addClass)
  }

  function handleAnimate(id) {
    tl.from(`#${id}`, {
      opacity: 0,
      y: 100
    })
  }

  function handleClear() {
    for (let i = 0; i < menuElements.length; i++) {
      menuElements[i].classList.remove(...activeClassArr)
      const id = menuElements[i].getAttribute(dataAttribute)
      handleClassSwitch(id, 'grid', 'hidden')
    }
  }

  function handleChange(e) {
    handleClear()
    e.currentTarget.classList.add(...activeClassArr)
    let id = e.currentTarget.getAttribute(dataAttribute)
    handleClassSwitch(id, 'hidden', 'grid')
    handleAnimate(id)
    initInnerCarousel(id)
  }

  initInnerCarousel()
  menuElements.forEach((element) => {
    element.addEventListener('click', (e) => handleChange(e), false)
  })
}
