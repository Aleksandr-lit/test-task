"use strict";

var iconMenu = document.querySelector('.menu__icon');
var menuBody = document.querySelector('.menu__body');

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active'); // document.body.classList.toggle('_lock');
  });
}

new Swiper('.banners__slider', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: false
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  }
});
new Swiper('.products__slider', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: false
  },
  slidesPerView: 3,
  loop: true // autoplay: {
  //     delay: 3500,
  //     disableOnInteraction: false,
  // }

});
$('.menu__link').click(function (event) {
  event.preventDefault();
  $(this).siblings('.menu__sub-list').toggle(200);
  $(this).parent().toggleClass('active');
});
fetch('https://www.wona.co.il/test_8192735.php', {
  mode: 'no-cors'
}).then(function (resp) {
  return resp.json();
}).then(function (data) {
  console.log(data);
})["catch"](function () {});