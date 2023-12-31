// Start writing JavaScript here!
const modalOpenButton = document.querySelector(".jsModalButton");
modalOpenButton.addEventListener("click", (evt) => {
  document.body.classList.add("modal-is-open");
});

const modalCloseButton = document.querySelector(".jsModalClose");
modalCloseButton.addEventListener("click", (evt) => {
  document.body.classList.remove("modal-is-open");
});
