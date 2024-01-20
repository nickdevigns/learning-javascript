// Start writing JavaScript here!
const modalButton = document.querySelector('.jsModalButton')
const modalCloseButton = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.modal-overlay')

modalButton.addEventListener('click', event => {
  document.body.classList.add('modal-is-open')
})

modalCloseButton.addEventListener('click', event => {
  document.body.classList.remove('modal-is-open')
})

modalOverlay.addEventListener('click', e => {
  // document.body.classList.remove('modal-is-open')
  console.log(e.target)

  if (!e.target.closest('.modal')) {
    // Close modal
    document.body.classList.remove('modal-is-open')
  }
})
