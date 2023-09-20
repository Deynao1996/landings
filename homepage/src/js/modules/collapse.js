const collapse = () => {
  const items = document.querySelectorAll('.questions__item')

  items.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.add('questions__item_active')
    })
  })
}

export default collapse
