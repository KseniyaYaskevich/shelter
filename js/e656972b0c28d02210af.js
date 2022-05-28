(()=>{"use strict";var e,t={739:(e,t,n)=>{const r=function(){return fetch("https://pets-81d26-default-rtdb.firebaseio.com/pets.json").then((function(e){return e.json()}))};var a,o,s,i,c;a=document.querySelector(".page__body"),o=a.querySelector(".main-nav"),s=o.querySelector(".main-nav__toggle"),i=o.querySelector(".main-nav__list"),c=function(){a.classList.remove("page__body--lock"),o.classList.remove("main-nav--opened")},s.addEventListener("click",(function(){a.classList.toggle("page__body--lock"),o.classList.toggle("main-nav--opened")})),i.addEventListener("click",(function(e){var t=e.target.getAttribute("href"),n=document.querySelector(t);null!=t&&t.startsWith("#")&&(e.preventDefault(),n.scrollIntoView({behavior:"smooth",block:"start"}),c())})),document.addEventListener("click",(function(e){o.classList.contains("main-nav--opened")&&e.target.classList.contains("main-nav--opened")&&c()})),document.addEventListener("keydown",(function(e){27!==e.keyCode&&"Escape"!==e.key&&"Esc"!==e.key||c()})),function(){var e=document.querySelector(".page__body"),t=e.querySelector(".our-friends__cards"),n=e.querySelector(".modal-wrapper"),a=n.querySelector(".modal"),o=function(){e.classList.remove("page__body--lock"),n.classList.remove("modal-wrapper--show"),a.classList.remove("modal--show")};t.addEventListener("click",(function(t){var o=t.target.closest(".our-friends__card");if(o){var s=o.querySelector(".card__title").getAttribute("data-name");r().then((function(e){e.find((function(e){if(e.name===s)return function(e){var t=document.querySelector(".modal");t.innerHTML="",t.insertAdjacentHTML("beforeend",'\n        <button class="modal__button button--transparent" type="button" aria-label="Close modal">\n            <span class="modal__span"></span>\n        </button>\n        <img class="modal__img" src="'.concat(e.img,'" alt="').concat("Picture of "+e.type+" "+e.breed,'" width="350" height="350">\n        <div class="modal__inner">\n            <h3 class="modal__title">').concat(e.name,'</h3>\n            <h4 class="modal__subtitle">').concat(e.type+" - "+e.breed,'</h4>\n            <p class="modal__text">').concat(e.description,'\n            </p>\n            <ul class="modal__list">\n                <li class="modal__item">').concat("Age: "+e.age,'</li>\n                <li class="modal__item">').concat("Inoculations: "+e.inoculations,'</li>\n                <li class="modal__item">').concat("Diseases: "+e.diseases,'</li>\n                <li class="modal__item">').concat("Parasites: "+e.parasites,"</li>\n            </ul>\n        </div>\n    "))}(e)}))})),e.classList.add("page__body--lock"),n.classList.add("modal-wrapper--show"),a.classList.add("modal--show")}})),a.addEventListener("click",(function(e){(e.target.classList.contains("modal__button")||e.target.classList.contains("modal__span"))&&o()})),document.addEventListener("click",(function(e){a.classList.contains("modal--show")&&e.target.classList.contains("modal-wrapper--show")&&o()})),document.addEventListener("keydown",(function(e){27!==e.keyCode&&"Escape"!==e.key&&"Esc"!==e.key||o()}))}();var l=n(250);setTimeout((function(){new l.Z(".swiper-main",{observer:!0,observeParents:!0,observeSlideChildren:!0,allowTouchMove:!1,loop:!0,navigation:{prevEl:".our-friends__prev",nextEl:".our-friends__next"},breakpoints:{320:{slidesPerView:1,slidesPerGroup:1},768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:40},1280:{slidesPerView:3,slidesPerGroup:3,spaceBetween:90}}})}),200);function d(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}r().then((function(e){var t,n;t=function(e,t){for(var n=[],r=0;r<t;r++){for(var a=e,o=e.length;o>0;o--){var s=Math.floor(Math.random()*o),i=a.splice(s,1)[0];a.push(i)}n=[].concat(d(n),d(a))}return n}(e,1),n=document.querySelector(".our-friends__cards"),t.map((function(e){var t=e.name,r=e.img,a=e.type,o=e.breed,s=document.createElement("div");s.classList.add("our-friends__card","card","swiper-slide"),s.innerHTML='\n        <img class="card__img" src="'.concat(r,'" alt="').concat("Picture of "+a+" "+o,'" \n                width="270" height="270">\n        <h4 class="card__title" data-name="').concat(t,'">').concat(t,'</h4>\n        <a class="button button--transparent card__button">Learn more</a>\n    '),n.append(s)}))}))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var s=1/0;for(d=0;d<e.length;d++){for(var[n,a,o]=e[d],i=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(i=!1,o<s&&(s=o));if(i){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,a,o]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0,977:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[s,i,c]=n,l=0;if(s.some((t=>0!==e[t]))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(c)var d=c(r)}for(t&&t(n);l<s.length;l++)o=s[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},n=self.webpackChunkwebpack_project=self.webpackChunkwebpack_project||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[250,977],(()=>r(739)));a=r.O(a)})();
//# sourceMappingURL=e656972b0c28d02210af.js.map