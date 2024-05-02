
// SWIPER PROFILE


const swiper_profile = new Swiper('.swiper_profile', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 8,

    // Navigation arrows
    navigation: {
        nextEl: '.fa-arrow-left',
        prevEl: '.fa-arrow-right',
    },

    breakpoints:  {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
        //   spaceBetween: 
        },

        350: {
            slidesPerView: 1,
            spaceBetween: 0
        },

        780: {
            slidesPerView: 2,
            spaceBetween:20
        },

        920 : {
            slidesPerView: 2,
            spaceBetween: 0
        },

        // when window width is >= 480px
        1187: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1700: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
});