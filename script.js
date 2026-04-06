"use strict";

const ratingComponent = document.querySelector(".rating-component");
const confirmationComponent = document.querySelector(".confirmation-component");

const ratingScaleButtons = document.querySelectorAll(".rating-scale__button");
const submitButton = document.querySelector(".rating-component__submit");

let selectedElement;

for (let i = 0; i < ratingScaleButtons.length; i++) {
  ratingScaleButtons[i].addEventListener("click", function (e) {
    const targetEl = e.target;

    //Same rating number pressed again (ignore)
    if (selectedElement === targetEl) {
      return;
    }

    if (selectedElement === undefined) {
      // No rating number selected yet

      selectedElement = targetEl;
      submitButton.classList.remove("rating-component__submit--inactive");
    } else {
      // Selected rating number changed

      selectedElement.classList.remove("rating-scale__button--selected");
      selectedElement = targetEl;
    }

    selectedElement.classList.add("rating-scale__button--selected");
  });
}

// Submit rating
submitButton.addEventListener("click", function (e) {
  document.querySelector(".confirmation-component__result").textContent =
    `You selected ${selectedElement.textContent} out of ${ratingScaleButtons.length}`;

  ratingComponent.classList.add("component--invisible");
  confirmationComponent.classList.remove("component--invisible");
});
