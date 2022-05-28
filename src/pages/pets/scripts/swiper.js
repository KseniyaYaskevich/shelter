import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const paginationContainer = document.querySelector('.our-friends__pagination')
const buttonFirstSlide = paginationContainer.querySelector(".pagination__button--first");
const buttonLastSlide = paginationContainer.querySelector(".pagination__button--last");
const buttonPrevSlide = paginationContainer.querySelector(".pagination__button--prev");
const buttonNextSlide = paginationContainer.querySelector(".pagination__button--next");
const counter = paginationContainer.querySelector('.pagination__button--counter');

const swiperPets = new Swiper('.swiper-pets', {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  allowTouchMove: false,

  pagination: {
    el: '.our-friends__pagination',
    clickable: true,
    type: 'custom',
  },

  breakpoints: {
    320: {
      grid: {
        rows: 3,
        columns: 1,
      },
      spaceBetween: 30,
    },
    768: {
      grid: {
        rows: 3,
        columns: 2,
      },
      spaceBetween: 30,
    },
    1280: {
      grid: {
        rows: 2,
        columns: 4,
      },
      spaceBetween: 40,
    },
  }
});
