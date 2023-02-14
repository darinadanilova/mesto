//Валидация форм

const formValidationConfig = {
    formSelector: '.popup__inform',
    inputSelector: '.popup__form',
    errorClass: 'popup__form_type_error',
    buttonSelector: '.popup__button-rectangle',
    buttonDisabledClass: 'popup__button-rectangle_disabled'
};

function disableSubmit(event) {
    event.preventDefault();
}

function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));

    formList.forEach((form) => {
        enableFormValidation(form, config);
    });
}

//Валидация форм

    function enableFormValidation(form, config) {
    form.addEventListener('submit', disableSubmit);
    form.addEventListener('input', () => {
        toggleButton(form, config);
    });

    addInputListeners(form, config);
    toggleButton(form, config);
}

//Сообщение с ошибкой

function handleFormInput(event, config) {
    const input = event.target;
    const inputId = input.id;
    const errorElement = document.querySelector(`#${inputId}-error`);

    if (input.validity.valid) {
        input.classList.remove(config.errorClass);
        errorElement.textContent = '';
    } else {
        input.classList.add(config.errorClass);
        errorElement.textContent = input.validationMessage;
    }
}

//Делаем кнопку неактивной

function toggleButton(form, config) {
    const buttonSubmit = form.querySelector(config.buttonSelector);
    const isFormValid = form.checkValidity();
    buttonSubmit.disabled = !isFormValid;
    buttonSubmit.classList.toggle(config.buttonDisabledClass, !isFormValid);
}

function addInputListeners(form, config) {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));

    inputList.forEach(function (item) {
        item.addEventListener('input', (event) => {
            handleFormInput(event, config)
        });
    });
}

enableValidation(formValidationConfig);