import {formValidationConfig} from './utils.js';

export default class FormValidator {
    constructor(config, form) {
        this.config = config,
        this.form = form
    }

    _disableSubmit(event) {
        event.preventDefault();
    }
    
    enableValidation(config) {
        const formList = Array.from(document.querySelectorAll(config.formSelector));
    
        formList.forEach((form) => {
            _enableFormValidation(form, config);
        });
    }
    
    //Валидация форм
    
    _enableFormValidation(form, config) {
        form.addEventListener('submit', disableSubmit);
        form.addEventListener('input', () => {
            toggleButton(form, config);
        });
    
        addInputListeners(form, config);
        toggleButton(form, config);
    
        form.addEventListener('reset', () => {
        // setTimeout нужен для того, чтобы дождаться очищения формы (вызов уйдет в конце стэка) и только потом вызвать toggleButtonState
        setTimeout(() => {
         toggleButton(form, config);
          }, 0); // достаточно указать 0 миллисекунд, чтобы после reset уже сработало действие
        });
    }
    
    //Функционал скрытия ошибок валидации
    _hideInputErrors(event, config) {
        const input = event.target;
        const inputId = input.id;
        const errorElement = document.querySelector(`#${inputId}-error`);
        input.classList.remove(config.errorClass); 
        errorElement.textContent = '';
    
      }
    
    //Функционал показа ошибок валидации 
      _showInputErrors(event, config) {
        const input = event.target;
        const inputId = input.id;
        const errorElement = document.querySelector(`#${inputId}-error`);
        input.classList.add(config.errorClass);
        errorElement.textContent = input.validationMessage;
      }
    
      
    //Сообщение с ошибкой
    
    _handleFormInput(event, config) {
        const input = event.target;
        const inputId = input.id;
        const errorElement = document.querySelector(`#${inputId}-error`);
        if (input.validity.valid) {
            _hideInputErrors(event, config);
        } else {
            _showInputErrors(event, config);
        }
    }
    
    //Делаем кнопку неактивной
    
    _toggleButton(form, config) {
        const buttonSubmit = form.querySelector(config.buttonSelector);
        const isFormValid = form.checkValidity();
        buttonSubmit.disabled = !isFormValid;
        buttonSubmit.classList.toggle(config.buttonDisabledClass, !isFormValid);
    }
    
    _addInputListeners(form, config) {
        const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    
        inputList.forEach(function (item) {
            item.addEventListener('input', (event) => {
                _handleFormInput(event, config)
            });
        });
    }
}