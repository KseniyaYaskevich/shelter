 // import Swiper bundle with all modules installed
 import Swiper from 'swiper/bundle';

 // import styles bundle
 import 'swiper/css/bundle';

 // init Swiper:
 export const swiper = new Swiper('.swiper-main', {
   observer: true,
   observeParents: true,
   observeSlideChildren: true,

   loop: true,
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
   }
 });

//  swiper.update();

 const updateSwiper = (swiper) => {
   setTimeout(function () {
     swiper.update();
   }, 500);
 }

 updateSwiper(swiper);
