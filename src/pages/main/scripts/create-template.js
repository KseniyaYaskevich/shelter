const cardsWrapper = document.querySelector('.our-friends__cards');

export const createElement = (data) => {
  data.map(({name, img, type, breed}) => {
    const divElement = document.createElement('div');
    divElement.classList.add('our-friends__card', 'card', 'swiper-slide');
    divElement.innerHTML = `
        <img class="card__img" src="${img}" alt="${'Picture of ' + type + ' ' + breed}" 
                width="270" height="270">
                <h4 class="card__title">${name}</h4>
                <button class="button button--transparent card__button" type="button">Learn more</button>
        `;
    cardsWrapper.append(divElement);
  })
};
