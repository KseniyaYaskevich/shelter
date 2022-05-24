const pageBody = document.querySelector('.page__body');
const cardsContainer = document.querySelector('.our-friends__cards')
const modalWrapper = pageBody.querySelector('.modal-wrapper');
const modal = pageBody.querySelector('.modal');
const buttonModal = pageBody.querySelector('.modal__button');

const openModal = () => {
  pageBody.classList.add('page__body--lock');
  modalWrapper.classList.add('modal-wrapper--show');
  modal.classList.add('modal--show');
};

const closeModal = () => {
  pageBody.classList.remove('page__body--lock');
  modalWrapper.classList.remove('modal-wrapper--show');
  modal.classList.remove('modal--show');
};

const onCardsContainerClick = (evt) => {
  if (evt.target.closest('.our-friends__card')) {
    openModal();
  }
};

document.onclick = function (evt) {
  if (modal.classList.contains('modal--show')) {
    if (evt.target.classList.contains('modal-wrapper--show')) {
      closeModal();
    }
  }

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27 || evt.key === "Escape" || evt.key === "Esc") {
      closeModal();
    }
  });
};

cardsContainer.addEventListener('click', onCardsContainerClick);
buttonModal.addEventListener('click', closeModal);
