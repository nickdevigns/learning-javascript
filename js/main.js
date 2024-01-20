// Start writing JavaScript here!
// FIXME: Error
// TODO: Work to do for yourself

// //First Attempt
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

// // Second Attempt
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

// // Final Attempt for C4L7
// const accordions = Array.from(document.querySelectorAll('.accordion'))
// accordions.forEach((accordion) => {
//   // Find the accordion header
//   const accordionHeader = accordion.querySelector('.accordion__header')
//   // Add event listener to the accordion header
//   accordionHeader.addEventListener('click', e => {
//     accordion.classList.toggle('is-open')
//   })
// })

// Final Attempt using Event Delegation
const accordionContainer = document.querySelector('.accordion-container'
)
// Attach the event listener to the nearest common ancestor
accordionContainer.addEventListener('click', e => {
  // console.log(e.target) // This returns the click target results <button>, <svg>, <p>...
  // If accordion__header is an ancestor of the event target, we need to add/remove (toggle) the 'is-open' class to the accordion
  const accordionHeader = e.target.closest('.accordion__header')
  // // We want to show/hide the accordion if the user clicked inside the accordion__header, but not if the user clicked inside the accordion__content
  // if (accordionHeader) {
  //   console.log('From header. Close accordion!')
  // } else {
  //   console.log('Not from the header. Ingore.')
  // }
  if (accordionHeader) {
    // We know that the accordion is the parent element of the accordion__header
    const accordion = accordionHeader.parentElement
    accordion.classList.toggle('is-open')
  }
})
