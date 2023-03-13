export const burgerMenu = () => {
    const burger = document.querySelector('[data-burger]');
    const menu = document.querySelector('[data-burger-menu]');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });
};

