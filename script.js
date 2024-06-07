// Menu Burger

document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.burger_button');
    const navbarMenu = document.querySelector('.navbar_menu');

    burgerButton.addEventListener('click', () => {
        navbarMenu.classList.toggle('open');
    });
});

// Filtre barre de recherche

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

// Filtre vignette

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        document.querySelectorAll('.cardfood').forEach(foodCard => {
            if (foodCard.getAttribute('data-category') === category) {
                foodCard.style.display = 'block';
            } else {
                foodCard.style.display = 'none';
            }
        });
    });
});

document.getElementById('resetButton').addEventListener('click', () => {
    document.querySelectorAll('.cardfood').forEach(foodCard => {
        foodCard.style.display = 'block';
    });
});