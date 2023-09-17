export default function fakeSubmit({ dataAttribute, fakeMessage } = {}) {
  const forms = document.querySelectorAll(`[${dataAttribute}]`),
    alert = document.querySelector('#alert'),
    alertParagraph = alert.querySelector('p')

  function switchAlert(removeClass, addClass) {
    alert.classList.remove(removeClass)
    alert.classList.add(addClass)
  }

  function resetAlert(timeout) {
    setTimeout(() => {
      switchAlert('block', 'hidden')
    }, timeout)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const relativeModal = e.target.closest('dialog')
    if (relativeModal) relativeModal.close()
    e.target.reset()
    alertParagraph.textContent = fakeMessage
    switchAlert('hidden', 'block')
    resetAlert(3000)
  }

  forms.forEach((form) => {
    form.addEventListener('submit', handleSubmit)
  })
}
