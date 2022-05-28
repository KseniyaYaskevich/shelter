const renderItems = (items) => {
  const cardsWrapper = document.querySelector('.our-friends__cards');

  items.map(({name, img, type, breed}) => {
    const divElement = document.createElement('div');
    divElement.classList.add('our-friends__card', 'card', 'swiper-slide');
    divElement.innerHTML = `
        <img class="card__img" src="${img}" alt="${'Picture of ' + type + ' ' + breed}" 
                width="270" height="270">
        <h4 class="card__title" data-name="${name}">${name}</h4>
        <a class="button button--transparent card__button">Learn more</a>
    `;
    cardsWrapper.append(divElement);
  });
};

export default renderItems;
