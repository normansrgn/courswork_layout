// ПОИСК ТОВАРОВ //

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchinput");
    const cards = document.querySelectorAll(".cataog_card");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        cards.forEach(function (card) {
            const cardname = card.querySelector('.cardname').textContent.trim().toLowerCase();
            if (cardname.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// BURGER MENU //

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


// SHOP TAB SCRIPT // 

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






