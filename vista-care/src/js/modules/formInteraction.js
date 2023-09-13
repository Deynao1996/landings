export default class FormInteraction {
  constructor({
    selector,
    relativeModalSelector,
    duplicateMsg = "Success! We'll be in touch soon.",
    confirmMsg = "Success! We'll be in touch soon."
  } = {}) {
    this.forms = document.querySelectorAll(selector)
    this.toast = document.querySelector('#toast')
    this.alert = this.toast.querySelector('.alert')
    this.toastContent = this.toast.querySelector('.toast-content')
    this.relativeModal = document.querySelector(relativeModalSelector)

    this.isFirstSubmit = true
    this.confirmMsg = confirmMsg
    this.duplicateMsg = duplicateMsg
  }

  handleReset(time = 3500) {
    setTimeout(() => {
      this.toast.classList.add('hidden')
      this.isFirstSubmit = false
    }, time)
  }

  handleSubmit(e) {
    e.preventDefault()
    const message = this.isFirstSubmit ? this.confirmMsg : this.duplicateMsg

    this.toastContent.textContent = message
    this.toast.classList.remove('hidden')

    e.target.reset()
    if (this.relativeModal) this.relativeModal.close()

    this.handleReset()
  }

  init() {
    this.forms.forEach((form) => {
      form.addEventListener('submit', (e) => this.handleSubmit(e))
    })
  }
}
