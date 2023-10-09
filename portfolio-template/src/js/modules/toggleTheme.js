export function toggleTheme({ toggleSelector, lightTheme, darkTheme }) {
  const toggleCheckbox = document.querySelector(toggleSelector)
  const html = document.querySelector('html')

  toggleCheckbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      html.setAttribute('data-theme', darkTheme)
    } else {
      html.setAttribute('data-theme', lightTheme)
    }
  })
}
