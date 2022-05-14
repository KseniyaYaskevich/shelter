 // import Swiper bundle with all modules installed
 import Swiper from 'swiper/bundle';

 // import styles bundle
 import 'swiper/css/bundle';

 // init Swiper:
 export const swiperPets = new Swiper('.swiper-pets', {
   observer: true,
   observeParents: true,
   observeSlideChildren: true,
    direction: 'horizontal',
   allowTouchMove: false,
   autoHeight: false,
   slidesPerView: 8,
   slidesPerGroup: 8,
  //  slidesPerColumn: 2,
   slidesPerColumnFill: 'row',
   //  grid: {
   //   rows: 2,
   //   columns: 4,
   //  },
  //  spaceBetween: 40,
   pagination: {
     el: '.our-friends__pagination',
     clickable: true,
   },

   //  navigation: {
   //    prevEl: '.our-friends__prev',
   //    nextEl: '.our-friends__next',
   //  },
   //  breakpoints: {
   //    320: {
   //      slidesPerView: 1,
   //      slidesPerGroup: 1,
   //    },
   //    768: {
   //      slidesPerView: 2,
   //      slidesPerGroup: 2,
   //      spaceBetween: 40,
   //    },
   //    1280: {
   //      slidesPerView: 6,
   //      slidesPerGroup: 6,
   //      spaceBetween: 90,
   //    },
   // }
 });

 swiperPets.update();


 const updateSwiper = (swiper) => {
   setTimeout(function () {
     swiper.update();
   }, 100);
 }

 updateSwiper(swiperPets);
