// Start writing JavaScript here!
// alert("Hello World!");
// FIXME: Error
// TODO: Work to do for yourself
const tabby = document.querySelector('.tabby')
const tabs = Array.from(tabby.querySelectorAll('.tab'))
const tabContents = Array.from(tabby.querySelectorAll('.tab-content'))

// 1. Add event listeners to each tab
tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    // 2. Find the tab they clicked
    // console.log(tab)

    // 3. Find the corresponding tab content
    const target = tab.dataset.theme
    // console.log(target)
    const tabContent = tabby.querySelector('#' + target)
    // console.log(tabContent)

    // 4. Remove is-selected from other tabs to de-emphasize them
    tabs.forEach(t => t.classList.remove('is-selected'))
    // 5. Add is-selected to the tab they clicked to emphasize it
    tab.classList.add('is-selected')
    // 6. Remove is-selected from other tab content to hide them
    tabContents.forEach(c => c.classList.remove('is-selected'))
    // 7. Add is-selected to the tab content to show it
    tabContent.classList.add('is-selected')
  })
})
