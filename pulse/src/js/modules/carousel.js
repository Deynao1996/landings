import Swiper from 'swiper'
import { Navigation, Autoplay, EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-creative'

const catalogCfg = {
  modules: [EffectCreative],
  grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -800],
      rotate: [180, 0, 0]
    },
    next: {
      shadow: false,
      translate: [0, 0, -800],
      rotate: [-180, 0, 0]
    }
  }
}

export function initInnerCarousel(id = 'running') {
  const items = document.querySelectorAll(`#${id} > li`)
  items.forEach((item) => new Swiper(item, catalogCfg))
}

export default function carousel() {
  new Swiper('#carousel', {
    modules: [Navigation, Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
}
