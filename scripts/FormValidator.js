export default class FormValidator {
    constructor(config, form) {
        this.config = config,
        this.form = form
    }

    _disableSubmit(event) {
        event.preventDefault();
    }
    
    enableValidation() {
        const formList = Array.from(document.querySelectorAll(this.config.formSelector));
    
        formList.forEach((form) => {
            this._enableFormValidation(form, this.config);
        });
    }
    
    //Валидация форм
    
    _enableFormValidation(form, config) {
        form.addEventListener('submit', this._disableSubmit);
        form.addEventListener('input', () => {
            this._toggleButton(form, config);
        });
        this._addInputListeners(form, this.config);
        this._toggleButton(form, this.config);
    
        form.addEventListener('reset', () => {
        // setTimeout нужен для того, чтобы дождаться очищения формы (вызов уйдет в конце стэка) и только потом вызвать toggleButtonState
        this._setTimeout(() => {
        this._toggleButton(form, config);
          }, 0); // достаточно указать 0 миллисекунд, чтобы после reset уже сработало действие
        });
    }
    
    //Функционал скрытия ошибок валидации
    _hideInputErrors(event, config) {
        const input = event.target;
        const inputId = input.id;
        const errorElement = document.querySelector(`#${inputId}-error`);
        input.classList.remove(this.config.errorClass); 
        errorElement.textContent = '';
    
      }
    
    //Функционал показа ошибок валидации 
      _showInputErrors(event, config) {
        const input = event.target;
        const inputId = input.id;
        const errorElement = document.querySelector(`#${inputId}-error`);
        input.classList.add(this.config.errorClass);
        errorElement.textContent = input.validationMessage;
      }
    
      
    //Сообщение с ошибкой
    
    _handleFormInput(event, config) {
        const input = event.target;
        const inputId = input.id;
        const errorElement = document.querySelector(`#${inputId}-error`);
        if (input.validity.valid) {
            this._hideInputErrors(event, config);
        } else {
            this._showInputErrors(event, config);
        }
    }
    
    //Делаем кнопку неактивной
    
    _toggleButton(form, config) {
        const buttonSubmit = form.querySelector(this.config.buttonSelector);
        const isFormValid = form.checkValidity();
        buttonSubmit.disabled = !isFormValid;
        buttonSubmit.classList.toggle(this.config.buttonDisabledClass, !isFormValid);
    }
    
    _addInputListeners(form, config) {
        const inputList = Array.from(form.querySelectorAll(this.config.inputSelector));
        inputList.forEach((item) => {
            item.addEventListener('input', (event) => {
                this._handleFormInput(event, config);
            });
        });
    }
}