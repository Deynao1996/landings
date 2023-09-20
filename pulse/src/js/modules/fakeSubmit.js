export default function fakeSubmit({
  dataAttribute,
  fakeMessage = 'We will contact you soon!'
} = {}) {
  const forms = document.querySelectorAll(`[${dataAttribute}]`)

  function switchMsg(item, removeClass, addClass) {
    item.classList.remove(removeClass)
    item.classList.add(addClass)
  }

  function resetAlert(item, timeout) {
    setTimeout(() => {
      switchMsg(item, 'visible', 'invisible')
    }, timeout)
  }

  function handleSubmit(e) {
    e.preventDefault()
    e.target.reset()
    const infoParagraph = e.target.querySelector('.paragraph-info')
    infoParagraph.textContent = fakeMessage
    switchMsg(infoParagraph, 'invisible', 'visible')
    resetAlert(infoParagraph, 3000)
  }

  forms.forEach((form) => {
    form.addEventListener('submit', handleSubmit)
  })
}
