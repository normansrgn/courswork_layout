// Получаем список товаров из localStorage
var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Находим контейнер для товаров в корзине
var cartItemsContainer = document.getElementById('cart-items-container');

// Очищаем содержимое контейнера перед добавлением новых товаров
cartItemsContainer.innerHTML = '';

document.querySelector('.cart__total').innerHTML = cartItems.reduce((sum, {price}) => sum + +price.replace(/\D/g,''), 0);


// Обходим каждый товар в корзине и добавляем его в контейнер
cartItems.forEach(function (item) {
    var itemElement = document.createElement('div');
    itemElement.innerHTML = `
        <div class="basket_tovar">
            
                <img class="basket_item_image" src="${item.imgSrc}" alt="">
            
            <div class="basket_item_inf">

               <div class="basket_item_name"> ${item.name} </div>

                
                    <div class="cart_price"><span>${item.size}</span> <span> ${item.price}</span></div>
                
            </div>
        </div>

    `;

    cartItems.reduce((sum, {price}) => sum + +price.replace(/\D/g,''), 0)

    cartItemsContainer.appendChild(itemElement); // Исправлено на cartItemsContainer
});

// Находим кнопку "Очистить корзину"
var clearCartBtn = document.getElementById('clear-cart-btn');

// Находим блок "Итого"
var basketTotalInf = document.querySelector('.basket_total_inf');

// Назначаем обработчик события на нажатие кнопки "Очистить корзину"
clearCartBtn.addEventListener('click', function (event) {
    // Очищаем localStorage от товаров
    localStorage.removeItem('cartItems');

    // Очищаем содержимое контейнера с товарами в корзине
    cartItemsContainer.innerHTML = '';

    // Удаляем блок "Итого" из DOM-дерева
    basketTotalInf.remove();
});

// Проверяем, есть ли значение в localStorage
if (localStorage.getItem('showBasket') === 'true') {
    // Находим блок корзины, которому нужно добавить стиль display: block
    var basketBlock = document.querySelector('.basket_total_inf');

    // Добавляем стиль display: block
    basketBlock.style.display = 'flex';

    // После добавления стиля удаляем значение из localStorage
    localStorage.removeItem('showBasket');
}




