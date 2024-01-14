// Start writing JavaScript here!
alert('Hello World!')
// FIXME: Error
// TODO: Work to do for yourself
const carousel = document.querySelector('.carousel')
const previousButton = carousel.querySelector('.previous-button')
const nextButton = carousel.querySelector('.next-button')
const contents = document.querySelector('.carousel__contents')

nextButton.addEventListener('click', e => {
  const currentSlide = contents.querySelector('.is-selected')
  console.log(currentSlide)
  const nextSlide = currentSlide.nextElementSibling
  console.log(nextSlide)
  const destination = getComputedStyle(nextSlide).left
  console.log(destination)
  contents.style.left = '-' + destination
  currentSlide.classList.remove('is-selected')
  nextSlide.classList.add('is-selected')
  previousButton.removeAttribute('hidden')
  // Hides next button
  if (!nextSlide.nextElementSibling) {
    nextButton.setAttribute('hidden', true)
  }
})

previousButton.addEventListener('click', e => {
  const currentSlide = contents.querySelector('.is-selected')
  const previousSlide = currentSlide.previousElementSibling
  console.log(previousSlide)
  const destination = getComputedStyle(previousSlide).left
  console.log(destination)
  contents.style.left = '-' + destination
  currentSlide.classList.remove('is-selected')
  previousSlide.classList.add('is-selected')
  nextButton.removeAttribute('hidden')
  // Hides previous button
  if (!previousSlide.previousElementSibling) {
    previousButton.setAttribute('hidden', true)
  }
})
