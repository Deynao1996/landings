export default function showModals({ dataAttribute } = {}) {
  const btnTriggers = document.querySelectorAll(`[${dataAttribute}]`)

  function handleShowModal() {
    const modalId = this.getAttribute(dataAttribute)
    const currentModal = document.getElementById(modalId)
    currentModal.showModal()
  }

  btnTriggers.forEach((btn) => {
    btn.addEventListener('click', handleShowModal)
  })
}
