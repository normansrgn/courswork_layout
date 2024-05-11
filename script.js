

const sizeItems = document.querySelectorAll('.size_item');

function addActiveClass() {
    sizeItems.forEach(item => {

        if (!this.classList.contains('activesize')) {
            item.classList.remove('activesize');
        }
    });

    this.classList.toggle('activesize');
}

sizeItems.forEach(item => {
    item.addEventListener('click', addActiveClass);
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

document.addEventListener("DOMContentLoaded", function() {

    // Получаем кнопку "Добавить в корзину" по селектору
    const addToCartBtn = document.querySelector('.item_basket_btm');
    const basketTotalInf = document.querySelector('.basket_total_inf');

    // Обработчик события для кнопки "Добавить в корзину"
    addToCartBtn.addEventListener('click', function(event) {
        
        // Изменяем текст кнопки на "Товар добавлен в корзину"
        addToCartBtn.textContent = 'Товар добавлен в корзину';

         // Устанавливаем значение в localStorage
    localStorage.setItem('showBasket', 'true');
        
        addToCartBtn.classList.add('clicked');
    });
});


// Находим все кнопки "Купить"
const buyButtons = document.querySelectorAll('.item_basket_btm');

class Product {
    constructor (name, price, imgSrc, size) {
        this.name = name;
        this.price = price;
        this.imgSrc = imgSrc;
        this.size = size;
    }
}

// Обходим каждую кнопку
buyButtons.forEach(function(button) {
    // Назначаем обработчик события на нажатие кнопки
    button.addEventListener('click', function(event) {
        // Предотвращаем стандартное поведение кнопки
        event.preventDefault();
        
        // Находим родительский элемент карточки товара
        const card = button.closest('.tovar_visit');
        
        // Получаем информацию о товаре
        const itemName = card.querySelector('.add-basket_tovar_block h1').textContent;
        const itemPrice = card.querySelector('.add-basket_tovar_block span').textContent;
        const itemImgSrc = card.querySelector('.image_gapar img').getAttribute('src');// Получаем ссылку на изображение
        const size = card.querySelector('.size_item.activesize').textContent;
        
        // Получаем текущий список товаров из localStorage
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        
        // Добавляем новый товар в список
        cartItems.push(new Product(itemName, itemPrice, itemImgSrc, size));

        
        // Сохраняем обновленный список товаров в localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        console.log(cartItems.reduce((sum, {price}) => sum + +price.replace(/\D/g,''), 0))
    });
});



