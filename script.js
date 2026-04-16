const subButton = document.querySelector('.radio-rate__sub-btn');
const stateRate = document.querySelector('.state-rate');
const stateSuccess = document.querySelector('.state-success');
const ratingInputs = document.querySelectorAll('input[name="rating"]');
let lastChecked = null;
const selectedRatingText = document.querySelector('.selected-rating');

ratingInputs.forEach((input) => {
  input.addEventListener('click', () => {
    if (lastChecked === input) {
      input.checked = false;
      lastChecked = null;
      return;
    }
    lastChecked = input;
  });
});

subButton.addEventListener('click', () => {
  const selectedRating = document.querySelector('input[name="rating"]:checked');

  if (selectedRating) {
    selectedRatingText.textContent = selectedRating.value;
    stateRate.classList.add('is-hidden');
    stateSuccess.classList.remove('is-hidden');
  } else {
    alert('Выберите оценку!');
  }
});
