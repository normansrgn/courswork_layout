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

