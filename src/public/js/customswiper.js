var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 35,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,   
        spaceBetween: 20
      },
      770: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      940: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    on: {
      beforeResize() {
        if (window.innerWidth >= 320 || window.innerWidth >= 770) {
          swiper.slides.css('width', '');
        }
      }
    },
  });