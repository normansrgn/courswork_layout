
// SWIPER //

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.first',
        prevEl: '.back',
    },

    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
});