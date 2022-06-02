import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const initSwiper = () => {
  const swiper = new Swiper('.swiper-main', {
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    allowTouchMove: false,

    navigation: {
      prevEl: '.our-friends__prev',
      nextEl: '.our-friends__next',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 40,
      },
      1280: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 90,
      },
    },
  });
};

export default initSwiper;
