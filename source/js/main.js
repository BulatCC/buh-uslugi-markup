import { burgerMenu } from './modules/burger';
import { initSliders } from './modules/sliders';
import { formValidation } from './modules/validation';

window.addEventListener('DOMContentLoaded', () => {
    burgerMenu();
    initSliders();
    formValidation();
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

