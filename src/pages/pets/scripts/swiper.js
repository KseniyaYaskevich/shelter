import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

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
