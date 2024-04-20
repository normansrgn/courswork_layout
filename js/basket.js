// Получаем список товаров из localStorage
var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Находим контейнер для товаров в корзине
var cartItemsContainer = document.getElementById('cart-items-container');

// Очищаем содержимое контейнера перед добавлением новых товаров
cartItemsContainer.innerHTML = '';




// Обходим каждый товар в корзине и добавляем его в контейнер
cartItems.forEach(function (item) {
    var itemElement = document.createElement('div');
    itemElement.innerHTML = `
        <div class="basket_tovar">
            
                <img class="basket_item_image" src="${item.imgSrc}" alt="">
            
            <div class="basket_item_inf">

               <div class="basket_item_name"> ${item.name} </div>
                
                    <div class="cart_price">${item.price}</div>
               
            </div>
        </div>

    `;

    cartItemsContainer.appendChild(itemElement); // Исправлено на cartItemsContainer
});

// Находим кнопку "Очистить корзину"
var clearCartBtn = document.getElementById('clear-cart-btn');

// Назначаем обработчик события на нажатие кнопки "Очистить корзину"
clearCartBtn.addEventListener('click', function (event) {
    // Очищаем localStorage от товаров
    localStorage.removeItem('cartItems');

    // Очищаем содержимое контейнера с товарами в корзине
    cartItemsContainer.innerHTML = '';
});


