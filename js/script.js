window.addEventListener('load', windowLoad)

// document.addEventListener('click', documentActions)

window.addEventListener('scroll', scrollHeader)

document.addEventListener('click', burgerMenu)

let isMobile

function windowLoad() {
   isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
   isMobile.any() ? document.body.setAttribute('data-touch', '') : null

   slidersInit();
}

function burgerMenu(e) {
   const iconMenu = e.target
   if (iconMenu.closest('.icon-menu')) {
      document.body.classList.toggle('menu-open')
      document.body.classList.toggle('scroll-lock')
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


function scrollHeader() {
   const header = document.querySelector('.header')
   if (window.scrollY > 50) {
      header.classList.add('scrolled')
   } else {
      header.classList.remove('scrolled')
   }
}



