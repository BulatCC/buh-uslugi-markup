import IMask from 'imask';

export const formValidation = () => {
    const forms = document.querySelectorAll('[data-form]');

    const initTelMask = (inputTelNumber) => {
        if (inputTelNumber) {
            inputTelNumber.addEventListener('mousedown', () => {
                IMask(inputTelNumber, {
                    mask: '+{7}(000)000-00-00',

                });
            });
        }
    };

    if (forms[0]) {
        const validateTel = (teltInput) => {
            let isValid = true;
            if (teltInput) {
                if (teltInput.value.length !== 16) {
                    teltInput.closest('.form_wrap').classList.add('error');
                    isValid = false;
                } else {
                    teltInput.closest('.form_wrap').classList.remove('error');
                    isValid = true;
                }
            }

            return isValid;
        };

        const validateEmail = (emailInput) => {
            const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            let isValid = true;
            if (emailInput) {
                if (emailInput.value.match(emailReg) === null) {
                    emailInput.closest('.form_wrap').classList.add('error');
                    isValid = false;
                } else {
                    emailInput.closest('.form_wrap').classList.remove('error');
                    isValid = true;
                }
            }

            return isValid;
        };

        forms.forEach((form) => {
            const submitButton = form.querySelector('[data-submit-button]');
            const telInput = form.querySelector('[data-tel]');
            const emailInput = form.querySelector('[data-email]');
            initTelMask(telInput);

            submitButton.addEventListener('click', (evt) => {
                evt.preventDefault();

                if (!validateTel(telInput)) {
                    evt.preventDefault();
                }

                if (validateEmail(emailInput)) {
                    evt.preventDefault();
                }
            });
        });
    }
};
