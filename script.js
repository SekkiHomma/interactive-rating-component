const subButton = document.querySelector('.radio-rate__sub-btn');
const stateRate = document.querySelector('.state-rate');
const stateSuccess = document.querySelector('.state-success');
const ratingInputs = document.querySelectorAll('input[name="rating"]');
let lastChecked = null;

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
  if (lastChecked !== null) {
    stateRate.replaceWith(stateSuccess);
  } else {
    alert('Выберите оценку!');
  }
});
