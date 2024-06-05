document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.burger_button');
    const navbarMenu = document.querySelector('.navbar_menu');

    burgerButton.addEventListener('click', () => {
        navbarMenu.classList.toggle('open');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search');
    const itemList = document.querySelector('main .section-food');
    const items = itemList.getElementsByClassName('cardfood');

    function filterItems() {
        const searchQuery = searchBar.value.toLowerCase();

        for (let item of items) {
            const itemText = item.textContent.toLowerCase();
            const matchesSearch = itemText.includes(searchQuery);

            if (matchesSearch) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        }
    }

    searchBar.addEventListener('input', filterItems);
});
