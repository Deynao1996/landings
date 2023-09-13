import gsap from 'gsap'

export default class Tab {
  constructor({ activeClassArr = [], dataAttribute } = {}) {
    this.dataAttribute = dataAttribute
    this.menuElements = document.querySelectorAll(`[${this.dataAttribute}]`)
    this.activeClassArr = activeClassArr
    this.tl = gsap.timeline()
  }

  handleClassSwitch(id, removeClass, addClass) {
    document.getElementById(id).classList.remove(removeClass)
    document.getElementById(id).classList.add(addClass)
  }

  handleAnimate(id) {
    this.tl.from(`#${id}`, {
      opacity: 0,
      y: 100
    })
  }

  handleClear() {
    for (let i = 0; i < this.menuElements.length; i++) {
      this.menuElements[i].classList.remove(...this.activeClassArr)
      const id = this.menuElements[i].getAttribute(this.dataAttribute)
      this.handleClassSwitch(id, 'flex', 'hidden')
    }
  }

  handleChange(e) {
    this.handleClear()
    e.currentTarget.classList.add(...this.activeClassArr)
    let id = e.currentTarget.getAttribute(this.dataAttribute)
    this.handleClassSwitch(id, 'hidden', 'flex')
    this.handleAnimate(id)
  }

  init() {
    this.menuElements.forEach((element) => {
      element.addEventListener('click', (e) => this.handleChange(e), false)
    })
  }
}
