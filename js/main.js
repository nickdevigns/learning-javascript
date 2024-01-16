// Start writing JavaScript here!
// FIXME: Error
// TODO: Work to do for yourself
const carousel = document.querySelector('.carousel')
const previousButton = carousel.querySelector('.previous-button')
const nextButton = carousel.querySelector('.next-button')
const contents = document.querySelector('.carousel__contents')
const dots = Array.from(carousel.querySelectorAll('.carousel__dot'))
const slides = Array.from(carousel.querySelectorAll('.carousel__slide'))
const dotsContainer = carousel.querySelector('.carousel__dots')

const slideWidth = slides[0].getBoundingClientRect().width
// console.log(slideWidth) //867 (This may be a different number in your case. It depends on the width of your browser).

nextButton.addEventListener('click', e => {
  const currentSlide = contents.querySelector('.is-selected')
  // console.log(currentSlide) // <li class="carousel__slide">
  const nextSlide = currentSlide.nextElementSibling
  // console.log(nextSlide) // <li class="carousel__slide is-selected">
  const destination = getComputedStyle(nextSlide).left
  // console.log(destination) // 0, 800, 1600px
  contents.style.left = '-' + destination
  currentSlide.classList.remove('is-selected')
  nextSlide.classList.add('is-selected')
  previousButton.removeAttribute('hidden')
  // Hides next button
  if (!nextSlide.nextElementSibling) {
    nextButton.setAttribute('hidden', true)
  }
  // Highlight dot
  const currentDot = dotsContainer.querySelector('.is-selected')
  const nextDot = currentDot.nextElementSibling
  currentDot.classList.remove('is-selected')
  nextDot.classList.add('is-selected')
})

previousButton.addEventListener('click', e => {
  const currentSlide = contents.querySelector('.is-selected')
  const previousSlide = currentSlide.previousElementSibling
  // console.log(previousSlide) // <li class="carousel__slide is-selected">
  const destination = getComputedStyle(previousSlide).left
  // console.log(destination) // 0, 800, 1600px
  contents.style.left = '-' + destination
  currentSlide.classList.remove('is-selected')
  previousSlide.classList.add('is-selected')
  nextButton.removeAttribute('hidden')
  // Hides previous button
  if (!previousSlide.previousElementSibling) {
    previousButton.setAttribute('hidden', true)
  }
  // Highlight dot
  const currentDot = dotsContainer.querySelector('.is-selected')
  const previousDot = currentDot.previousElementSibling
  currentDot.classList.remove('is-selected')
  previousDot.classList.add('is-selected')
})

dots.forEach(dot => {
  dot.addEventListener('click', e => {
    // console.log(dot) //<button class="carousel__dot is-selected">... -OR- <button class="carousel__dot">
    let clickedDotIndex

    for (let index = 0; index < dots.length; index++) {
      if (dots[index] === dot) {
        clickedDotIndex = index
      }
    }
    // console.log(clickedDotIndex) // 0, 1, 2

    const slideToShow = slides[clickedDotIndex]
    // console.log(slideToShow) //<li class="carousel__slide is-selected">... -OR- <li class="carousel__slide">

    const destination = getComputedStyle(slideToShow).left
    // console.log(destination) //0, 800px, 1600px
    contents.style.left = '-' + destination

    // Update the location of the is-selected class on the slides. (Without this, our previous and next buttons will not work).
    slides.forEach(slide => {
      slide.classList.remove('is-selected')
    })
    slideToShow.classList.add('is-selected')

    // Updating dot state
    dots.forEach(d => {
      d.classList.remove('is-selected')
    })
    dot.classList.add('is-selected')

    // Show / hide buttons
    if (clickedDotIndex === 0) {
      previousButton.setAttribute('hidden', true)
      nextButton.removeAttribute('hidden')
    } else if (clickedDotIndex === dots.length - 1) {
      previousButton.removeAttribute('hidden')
      nextButton.setAttribute('hidden', true)
    } else {
      previousButton.removeAttribute('hidden')
      nextButton.removeAttribute('hidden')
    }
  })
})

slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px'
})
