import Swiper, { Navigation, Pagination } from 'swiper';

export const initSliders = () => {
    const sliders = document.querySelectorAll('[data-slider]');

    sliders.forEach((slider) => {
        new Swiper(slider, {
            modules: [Navigation, Pagination],
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    });
};
