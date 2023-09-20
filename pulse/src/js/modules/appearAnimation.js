import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function appearAnimation({
  triggerSelector,
  animateSelector,
  animationConfig = {},
  triggerConfig = {},
  minWidth = '800px'
}) {
  const trigger = document.querySelector(triggerSelector)
  const animateItems = document.querySelectorAll(animateSelector),
    mm = gsap.matchMedia()

  let tl = null

  mm.add(`(min-width: ${minWidth})`, () => {
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        ...triggerConfig
      }
    })
    tl.from(animateItems, {
      duration: 1,
      stagger: 0.05,
      ...animationConfig
    })
  })
}
