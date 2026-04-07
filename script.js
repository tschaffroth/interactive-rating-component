"use strict";

const ratingComponent = document.querySelector(".rating-component");
const confirmationComponent = document.querySelector(".confirmation-component");

const ratingScaleInputs = document.querySelectorAll(".rating-scale__input");
const submitButton = document.querySelector(".rating-component__submit");

let ratingScore;
let selectedElement;

for (let i = 0; i < ratingScaleInputs.length; i++) {
  ratingScaleInputs[i].addEventListener("change", function (e) {
    const targetEl = e.target.closest(".rating-scale__label");
    const targetScore = e.target.value;

    //Same rating number pressed again (ignore)
    if (selectedElement === targetEl) {
      return;
    }

    if (selectedElement === undefined) {
      // No rating number selected yet
      submitButton.classList.remove("rating-component__submit--inactive");
    } else {
      // Selected rating number changed
      selectedElement.classList.remove("rating-scale__label--selected");
    }

    selectedElement = targetEl;
    ratingScore = targetScore;
    selectedElement.classList.add("rating-scale__label--selected");
  });
}

// Submit rating
submitButton.addEventListener("click", function (e) {
  document.querySelector(".confirmation-component__result").textContent =
    `You selected ${ratingScore} out of ${ratingScaleInputs.length}`;

  ratingComponent.classList.add("component--invisible");
  confirmationComponent.classList.remove("component--invisible");
});
