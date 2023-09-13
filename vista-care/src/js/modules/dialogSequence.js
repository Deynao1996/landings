export default class Sequence {
  constructor({ currentModalSelector, nextModalSelector, formSelector } = {}) {
    this.currentModal = document.querySelector(currentModalSelector)
    this.currentForm = this.currentModal.querySelector(formSelector)
    this.nextModal = document.querySelector(nextModalSelector)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    e.target.reset()
    this.currentModal.close()
    this.nextModal.showModal()
  }

  init() {
    this.currentForm.addEventListener('submit', this.handleSubmit)
  }
}
