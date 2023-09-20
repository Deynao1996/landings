const slider = (carouselSelector, leftBtnSelector, rightBtnSelector) => {
  const carousel = document.querySelector(carouselSelector),
    slides = carousel.children,
    leftBtn = document.querySelector(leftBtnSelector),
    rightBtn = document.querySelector(rightBtnSelector)

  carousel.style.width = 100 * slides.length + '%'

  let width = +window.getComputedStyle(slides[0]).width.replace(/\D/g, ''),
    activeSlide = 1,
    offset = 0

  function checkBtn(slidePos) {
    if (slidePos === slides.length) {
      rightBtn.setAttribute('disabled', '')
    } else {
      rightBtn.removeAttribute('disabled')
    }
    if (slidePos === 1) {
      leftBtn.setAttribute('disabled', '')
    } else {
      leftBtn.removeAttribute('disabled')
    }
  }

  function changeSlide(width, n) {
    offset += width
    activeSlide += n
    carousel.style.transform = `translateX(-${offset}px)`
  }

  rightBtn.addEventListener('click', () => {
    changeSlide(width, 1)
    checkBtn(activeSlide)
  })

  leftBtn.addEventListener('click', () => {
    changeSlide(-width, -1)
    checkBtn(activeSlide)
  })

  checkBtn(activeSlide)
}

export default slider
