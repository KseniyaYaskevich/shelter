import renderModal from './render-modal';
import getData from './get-data';

const modal = () => {
  const pageBody = document.querySelector('.page__body');
  const cardsContainer = pageBody.querySelector('.our-friends__cards')
  const modalWrapper = pageBody.querySelector('.modal-wrapper');
  const modal = modalWrapper.querySelector('.modal');

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
    const card = evt.target.closest('.our-friends__card');

    if (card) {
      const petName = card.querySelector('.card__title').getAttribute('data-name');

      getData().then((data) => {
        data.find((item) => {
          if (item.name === petName) {
            return renderModal(item);
          };
        });
      });

      openModal();
    };
  };

  const onModalClick = (evt) => {
    if (evt.target.classList.contains('modal__button') || evt.target.classList.contains('modal__span')) {
      closeModal();
    }
  };

  cardsContainer.addEventListener('click', onCardsContainerClick);
  modal.addEventListener('click', onModalClick);

  document.addEventListener('click', (evt) => {
    if (modal.classList.contains('modal--show')) {
      if (evt.target.classList.contains('modal-wrapper--show')) {
        closeModal();
      }
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27 || evt.key === 'Escape' || evt.key === 'Esc') {
      closeModal();
    }
  });
};

export default modal;
