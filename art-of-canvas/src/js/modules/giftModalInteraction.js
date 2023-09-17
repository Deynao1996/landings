import { PROMO_DISCOUNT, PROMO_SECRET } from '../main'

export default function giftModalInteraction({
  modalSelector,
  tooltipSelector,
  triggerSelector,
  percentageSelector
} = {}) {
  const modal = document.querySelector(modalSelector),
    trigger = document.querySelector(triggerSelector),
    tooltip = modal.querySelector(tooltipSelector),
    percentage = modal.querySelector(percentageSelector),
    promoBtn = tooltip.querySelector('button'),
    closeBtn = modal.querySelector('form[method="dialog"] > button')

  let isFirstRender = true

  async function copyContent() {
    try {
      await navigator.clipboard.writeText(promoBtn.textContent)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }
  function isScrolledToBottom() {
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight
    const body = document.body
    const html = document.documentElement
    const maxScroll = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )
    return window.scrollY + windowHeight + 1 >= maxScroll
  }

  function initValues() {
    tooltip.setAttribute('data-tip', 'Copy!')
    percentage.textContent = PROMO_DISCOUNT + '%'
    promoBtn.textContent = PROMO_SECRET.toUpperCase()
  }

  function handleClose() {
    tooltip.setAttribute('data-tip', 'Copy!')
  }

  function handleOpen() {
    modal.showModal()
    trigger.classList.add('!hidden')
    isFirstRender = false
  }

  function handleCopy() {
    copyContent()
    tooltip.setAttribute('data-tip', 'Copied!')
  }

  function handleScrollBottom() {
    if (!isFirstRender) return
    if (isScrolledToBottom()) handleOpen()
  }

  initValues()
  closeBtn.addEventListener('click', handleClose)
  trigger.addEventListener('click', handleOpen)
  promoBtn.addEventListener('click', handleCopy)
  window.addEventListener('scroll', handleScrollBottom)
}
