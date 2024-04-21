

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

    // Обработчик события для кнопки "Добавить в корзину"
    addToCartBtn.addEventListener('click', function(event) {
        // Изменяем текст кнопки на "Товар добавлен в корзину"
        addToCartBtn.textContent = 'Товар добавлен в корзину';

        addToCartBtn.classList.add('clicked');
    });
});




// Находим все кнопки "Купить"
var buyButtons = document.querySelectorAll('.item_basket_btm');

// Обходим каждую кнопку
buyButtons.forEach(function(button) {
    // Назначаем обработчик события на нажатие кнопки
    button.addEventListener('click', function(event) {
        // Предотвращаем стандартное поведение кнопки
        event.preventDefault();
        
        // Находим родительский элемент карточки товара
        var card = button.closest('.tovar_visit');
        
        // Получаем информацию о товаре
        var itemName = card.querySelector('.add-basket_tovar_block h1').textContent;
        var itemPrice = card.querySelector('.add-basket_tovar_block span').textContent;
        var itemImgSrc = card.querySelector('.image_gapar img').getAttribute('src');// Получаем ссылку на изображение
        
        // Создаем объект для представления товара
        var item = {
            name: itemName,
            price: itemPrice,
            imgSrc: itemImgSrc // Добавляем ссылку на изображение в объект товара
        };
        
        // Получаем текущий список товаров из localStorage
        var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        
        // Добавляем новый товар в список
        cartItems.push(item);
        
        // Сохраняем обновленный список товаров в localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        
       
    });
});



