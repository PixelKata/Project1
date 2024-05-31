document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.burger_button');
    const navbarMenu = document.querySelector('.navbar_menu');

    burgerButton.addEventListener('click', () => {
        navbarMenu.classList.toggle('open');
    });
});