// Start writing JavaScript here!
// FIXME: Error
// TODO: Work to do for yourself

// First Attempt
/* // const accordion = document.querySelector(".accordion")
// const accordionHeader = document.querySelector(".accordion__header")

// accordionHeader.addEventListener("click", (e) => {
//   /* if (accordion.classList.contains("is-open")) {
//     accordion.classList.remove("is-open")
//   } else {
//     accordion.classList.add("is-open")
//   } */
//   accordion.classList.toggle("is-open")
// }); */

// Second Attempt
/* const accordions = document.querySelectorAll(".accordion")

// Finds first and second accordion
const firstAccordion = accordions[0]
const secondAccordion = accordions[1]

// Find header for first accordion and second accordion
const firstAccordionHeader = firstAccordion.querySelector(".accordion__header")
const secondAccordionHeader =
  secondAccordion.querySelector(".accordion__header")

// Adds event listeners to first and second accordion header
firstAccordionHeader.addEventListener("click", (e) => {
  firstAccordion.classList.toggle("is-open")
})
secondAccordionHeader.addEventListener("click", (e) => {
  secondAccordion.classList.toggle("is-open")
}); */

// Final Attempt
const accordions = Array.from(document.querySelectorAll('.accordion'))
accordions.forEach((accordion) => {
  // Find the accordion header
  const accordionHeader = accordion.querySelector('.accordion__header')
  // Add event listener to the accordion header
  accordionHeader.addEventListener('click', e => {
    accordion.classList.toggle('is-open')
  })
})
