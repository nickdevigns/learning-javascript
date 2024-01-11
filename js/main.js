// Start writing JavaScript here!
// alert("Hello World!");
// FIXME: Error
// TODO: Work to do for yourself
const tabby = document.querySelector('.tabby')
const tabs = Array.from(tabby.querySelectorAll('.tab'))
const tabContents = Array.from(tabby.querySelectorAll('.tab-content'))

// Add event listeners to each tab

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    // console.log(tab)
    const target = tab.dataset.theme
    // console.log(target)
    const tabContent = tabby.querySelector('#' + target)
    // console.log(tabContent)
    tabs.forEach(t => t.classList.remove('is-selected'))
    tab.classList.add('is-selected')
    tabContents.forEach(c => c.classList.remove('is-selected'))
    tabContent.classList.add('is-selected')
  })
})
