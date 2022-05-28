import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const paginationContainer = document.querySelector('.our-friends__pagination')
const buttonFirstSlide = paginationContainer.querySelector(".pagination__button--first");
const buttonLastSlide = paginationContainer.querySelector(".pagination__button--last");
const buttonPrevSlide = paginationContainer.querySelector(".pagination__button--prev");
const buttonNextSlide = paginationContainer.querySelector(".pagination__button--next");
const counter = paginationContainer.querySelector('.pagination__button--counter');

const SLIDES_NUMBER = 48;
let lastPage = '';

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
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 3,
      },
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 3,
      },
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      grid: {
        rows: 2,
        columns: 4,
      },
      spaceBetween: 40,
    },
  }
});
