// =========================== Button-burger =================================
window.addEventListener('load', windowLoad)

document.addEventListener('click', documentActions)

let isMobile

function windowLoad() {
   isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
   isMobile.any() ? document.body.setAttribute('data-touch', '') : null

   slidersInit();
}

function documentActions(e) {
   const targetElement = e.target
   // if (targetElement.closest('.menu__arrow')) {
   // 	targetElement.closest('.menu__item').classList.toggle('active')
   // }
   if (targetElement.closest('.icon-menu')) {
      document.body.classList.toggle('menu-open')
      document.body.classList.toggle('scroll-lock')
      document.documentElement.classList.toggle('menu-open')
   }
}

function slidersInit() {
   if (document.querySelector('.slider-reviews')) {
      const swiper = new Swiper('.slider-reviews', {
         loop: true,

         pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // type: 'bullets',
         },
         breakpoints: {
            320: {
               slidesPerView: 1.1,
               spaceBetween: 10,
            },
            640: {
               slidesPerView: 1.5,
               spaceBetween: 15,
            },
            930: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            1240: {
               slidesPerView: 3,
               spaceBetween: 23,
            },
         },
      });
   }
}








