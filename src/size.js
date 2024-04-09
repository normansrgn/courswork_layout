// Получаем все элементы с классом "size_item"
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