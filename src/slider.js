// SWIPER shop //
const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,
    slidesPerView: 1,

    // Autoplay
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
          spaceBetween: 20
        },

        793: {
            slidesPerView: 1,
            spaceBetween:0
        },

        920 : {
            slidesPerView: 2,
            spaceBetween: 0
        },

        // when window width is >= 480px
        1187: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1700: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
});


//SHOP TAB SCRIPT // 

const shopBtms = document.querySelectorAll(".buttons_block button");
// console.log(shopBtms);
const shopItems = document.querySelectorAll(".shop_toogle_section");
// console.log(shopItems);


function hideShop () {
    shopItems.forEach(item => item.classList.add("hide_shop"));
    shopBtms.forEach(item => item.classList.remove("active"));
}

function showShop(index) {
    shopItems[index].classList.remove("hide_shop");
    shopBtms[index].classList.add("active");

}

hideShop(); 
showShop(0);

shopBtms.forEach((btn, index) => btn.addEventListener("click", () => {
    hideShop(); 
    showShop(index);
}));


document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })
})