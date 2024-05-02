// SWIPER shop //
const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,
    slidesPerView: 1,

    // Autoplay
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
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