
// SWIPER shop //
const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,

    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

   
});

// SWIPER PROFILE

const swiper_profile = new Swiper('.swiper_profile', {
    // Optional parameters

    loop: true,

    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.fa-arrow-left',
        prevEl: '.fa-arrow-right',
    },

   
});




const burgerMenu = () => {
    const burgerBtn = document.querySelector('#burger__btn');
    const burgerContainer = document.querySelector('.burger__container')
    const burgerSpan = document.querySelector('#burgerSpan');

    burgerBtn.addEventListener('click', (e) => {
        burgerContainer.classList.toggle('open');
        burgerSpan.classList.toggle('btn-open-animation');
    });

    burgerContainer.addEventListener('click', e => {
        if (!e.target.classList.contains('burger__content')) {
            burgerContainer.classList.remove('open');
            burgerSpan.classList.remove('btn-open-animation');
        }
    })
}

burgerMenu();

