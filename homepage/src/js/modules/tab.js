const tab = (tabsSelector, contentsSelector) => {
  const tabs = document.querySelectorAll(tabsSelector),
    contents = document.querySelectorAll(contentsSelector)

  const switchActiveTab = (activeIndex = 0) => {
    tabs.forEach((tab) => {
      tab.classList.add('btn_disabled')
    })
    tabs[activeIndex].classList.remove('btn_disabled')
    tabs[activeIndex].classList.add('btn_small')
  }

  const switchActiveContent = (activeIndex = 0) => {
    contents.forEach((content, i) => {
      if (activeIndex !== i) {
        content.classList.add('charges__items_hide')
      } else {
        content.classList.remove('charges__items_hide')
      }
    })
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', (e) => {
      if (e.target === tab) {
        switchActiveTab(i)
        switchActiveContent(i)
      }
    })
  })

  switchActiveTab()
  switchActiveContent()
}

export default tab
