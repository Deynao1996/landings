import gsap from 'gsap'

export default class AppearAnimation {
  constructor({
    triggerSelector,
    animateSelector,
    animationCfg = {},
    triggerCfg = {},
    minWidth = '800px'
  } = {}) {
    this.trigger = document.querySelector(triggerSelector)
    this.animateItems = document.querySelectorAll(animateSelector)
    this.animationConfig = animationCfg
    this.triggerConfig = triggerCfg
    this.tl = null
    this.mm = gsap.matchMedia()
    this.minWidth = minWidth
  }

  init() {
    this.mm.add(`(min-width: ${this.minWidth})`, () => {
      this.tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.trigger,
          ...this.triggerConfig
        }
      })
      this.tl.from(this.animateItems, {
        duration: 1,
        stagger: 0.05,
        ...this.animationConfig
      })
    })
  }
}
