import gsap from 'gsap'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(Flip)

export default function flipGallery({ filtersSelector, tabItemSelector }) {
  const filters = gsap.utils.toArray('[' + filtersSelector + ']'),
    items = gsap.utils.toArray(tabItemSelector)

  function setActiveTab(e) {
    filters.forEach((filter) => {
      filter.classList.remove('tab-active')
    })
    e.target.classList.add('tab-active')
  }

  function showItem(item) {
    item.classList.remove('hidden')
    item.classList.add('block')
  }

  function hideItem(item) {
    item.classList.remove('block')
    item.classList.add('hidden')
  }

  function getFlipped(state) {
    Flip.from(state, {
      duration: 0.7,
      scale: true,
      ease: 'power1.inOut',
      stagger: 0.08,
      absolute: true,
      onEnter: (elements) =>
        gsap.fromTo(
          elements,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 1 }
        ),
      onLeave: (elements) =>
        gsap.to(elements, { opacity: 0, scale: 0, duration: 1 })
    })
  }

  function updateFilters(e) {
    const currentId = e.target.getAttribute(filtersSelector)
    setActiveTab(e)

    const state = Flip.getState(items)
    if (currentId === 'all') {
      items.forEach(showItem)
    } else {
      items.forEach((item) => {
        if (item.classList.contains(currentId)) {
          showItem(item)
        } else {
          hideItem(item)
        }
      })
    }

    getFlipped(state)
  }

  filters.forEach((btn) => btn.addEventListener('click', updateFilters))
}
