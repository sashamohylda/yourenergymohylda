const modalExercises = document.querySelector('.modal-exercises');
const modalIsOpen = document.querySelector('.modal-rating');
const btnIsClosed = document.querySelector('.rating-close-btn');
const sendButton = document.querySelector('.form__btn');
const ratingValueElement = document.querySelector('.rating__value');
const emailInput = document.querySelector('.rating-email');
const commentTextarea = document.querySelector('.rating-comment');

modalExercises.addEventListener('click', onExercisesCardClick);
btnIsClosed.addEventListener('click', closeModal);
modalIsOpen.addEventListener('click', closeOverlay);
document.addEventListener('keydown', onEscClick);

function onExercisesCardClick(event) {
  if (!event.target.closest('.modal-exercises__btn-rating')) {
    return;
  }

  modalIsOpen.classList.remove('is-hidden');
  modalExercises.classList.add('hidden');
}

function closeModal() {
  modalIsOpen.classList.add('is-hidden');
  modalExercises.classList.remove('hidden');
}

function closeOverlay(event) {
  if (event.target === modalIsOpen) {
    closeModal();
  }
}

function onEscClick(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

const ratings = document.querySelectorAll('.rating');

if (ratings.length > 0) {
  initRatings();
}

function setRatingActiveWidth(ratingActive, ratingValue, index) {
  const ratingActiveWidth = parseFloat(index) * 20;
  ratingActive.style.width = `${ratingActiveWidth}%`;
  ratingValue.innerHTML = parseFloat(index).toFixed(1);
}

function initRatings() {
  let ratingActive, ratingValue, currentRating;

  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
  }

  function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth(ratingActive, ratingValue, currentRating);

    if (rating.classList.contains('rating_set')) {
      setRating(rating);
    }
  }

  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating__active');
    ratingValue = rating.querySelector('.rating__value');
    currentRating = parseFloat(ratingValue.innerHTML);
  }

  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating__item');
    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];

      ratingItem.addEventListener('mouseenter', function () {
        initRatingVars(rating);
        setRatingActiveWidth(ratingActive, ratingValue, (index + 1).toFixed(1));
      });

      ratingItem.addEventListener('mouseleave', function () {
        setRatingActiveWidth(ratingActive, ratingValue, currentRating);
      });

      ratingItem.addEventListener('click', function () {
        initRatingVars(rating);
        const newRating = (index + 1).toFixed(1);
        if (newRating !== '0.0') {
          currentRating = newRating;
          if (rating.dataset.ajax) {
            setRatingValue(currentRating, rating);
          } else {
            ratingValue.innerHTML = currentRating;
            setRatingActiveWidth(ratingActive, ratingValue, currentRating);
          }
          updateSendButtonState();
        }
      });
    }
  }
}

function isFormValid() {
  const emailValue = emailInput.value.trim();
  const commentValue = commentTextarea.value.trim();
  const ratingValue = ratingValueElement.innerHTML.trim();

  return emailValue !== '' && commentValue !== '' && ratingValue !== '0.0';
}

function updateSendButtonState() {
  sendButton.disabled = !isFormValid();
}

emailInput.addEventListener('input', updateSendButtonState);
commentTextarea.addEventListener('input', updateSendButtonState);

const observer = new MutationObserver(updateSendButtonState);

observer.observe(ratingValueElement, { childList: true, subtree: true });

function clearForm() {
  emailInput.value = '';
  commentTextarea.value = '';
  ratingValueElement.innerHTML = '0.0';
  setTimeout(() => {
    const ratingActive = document.querySelector('.rating__active');
    setRatingActiveWidth(ratingActive, ratingValueElement, '0.0');
    updateSendButtonState();
  }, 0);
}

sendButton.addEventListener('click', event => {
  event.preventDefault();

  if (!isFormValid()) {
    console.warn(
      'Форма не валідна. Будь ласка, заповніть всі поля та оберіть оцінку.'
    );
    return;
  }

  const ratingValue = ratingValueElement.innerHTML;
  const emailValue = emailInput.value;
  const commentValue = commentTextarea.value;

  console.log('Поточне значення рейтингу:', ratingValue);
  console.log('Введений email:', emailValue);
  console.log('Введений коментар:', commentValue);

  closeModal();
  clearForm();
});
