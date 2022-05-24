const renderModal = (item) => {
    const modal = document.querySelector('.modal');
    modal.innerHTML = '';

    modal.insertAdjacentHTML('beforeend', `
        <button class="modal__button button--transparent" type="button" aria-label="Close modal">
            <span class="modal__span"></span>
        </button>
        <img class="modal__img" src="${item.img}" alt="${'Picture of ' + item.type + ' ' + item.breed}" width="350" height="350">
        <div class="modal__inner">
            <h3 class="modal__title">${item.name}</h3>
            <h4 class="modal__subtitle">${item.type + ' - ' + item.breed}</h4>
            <p class="modal__text">${item.description}
            </p>
            <ul class="modal__list">
                <li class="modal__item">${'Age: ' + item.age}</li>
                <li class="modal__item">${'Inoculations: ' + item.inoculations}</li>
                <li class="modal__item">${'Diseases: ' + item.diseases}</li>
                <li class="modal__item">${'Parasites: ' + item.parasites}</li>
            </ul>
        </div>
    `);
};    

export default renderModal;
