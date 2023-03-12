export default class FormValidator {
    constructor(config, form) {
        this.config = config,
        this.form = form
    }

    _disableSubmit(event) {
        event.preventDefault();
    }
    
    enableValidation() {
        this._enableFormValidation();
    }
    
    //Валидация форм
    
    _enableFormValidation() {
        this.inputList = Array.from(this.form.querySelectorAll(this.config.inputSelector));
        this.buttonSubmit = this.form.querySelector(this.config.buttonSelector);
        this.form.addEventListener('input', () => {
        });
        this._addInputListeners(this.form, this.config);
        this._toggleButton(this.form, this.config);
    
        this.form.addEventListener('reset', () => {
        // setTimeout нужен для того, чтобы дождаться очищения формы (вызов уйдет в конце стэка) и только потом вызвать toggleButtonState
        setTimeout(() => {
        this._toggleButton(this.form, this.config);
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
        const errorElement = this.form.querySelector(`#${inputId}-error`);
        if (input.validity.valid) {
            this._hideInputErrors(event, config);
        } else {
            this._showInputErrors(event, config);
        }
    }
    
    //Делаем кнопку неактивной
    
    _toggleButton(form, config) {
        const isFormValid = form.checkValidity();
        this.buttonSubmit.disabled = !isFormValid;
        this.buttonSubmit.classList.toggle(this.config.buttonDisabledClass, !isFormValid);
    }
    
    _addInputListeners(form, config) {
        this.inputList.forEach((item) => {
            item.addEventListener('input', (item) => {
                this._handleFormInput(item, config);
                this._toggleButton(this.form, this.config);
            });
        });
    }
}