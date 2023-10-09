export function toggleDrawer({
  drawerSelector,
  drawerLinkSelector,
  parentSelector
}) {
  const drawerCheckbox = document.querySelector(drawerSelector)
  const parentElement = document.querySelector(parentSelector)

  parentElement.addEventListener('click', (event) => {
    const link = event.target.closest(drawerLinkSelector)
    if (link) {
      drawerCheckbox.checked = false
    }
  })
}
