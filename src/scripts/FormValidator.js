export default class FormValidator {
    constructor(config, form) {
        this.config = config,
        this.form = form
    }
    
    enableValidation() {
        this._enableFormValidation();
    }
    
    //Валидация форм
    
    _enableFormValidation() {
        this.inputList = Array.from(this.form.querySelectorAll(this.config.inputSelector));
        this.buttonSubmit = this.form.querySelector(this.config.buttonSelector);
        this._addInputListeners();
        this._toggleButton();
        this.form.addEventListener('reset', () => {
        // setTimeout нужен для того, чтобы дождаться очищения формы (вызов уйдет в конце стэка) и только потом вызвать toggleButtonState
        setTimeout(() => {
        this._toggleButton();
          }, 0); // достаточно указать 0 миллисекунд, чтобы после reset уже сработало действие
        });
    }
    
    //Функционал скрытия ошибок валидации
    _hideInputErrors(input) {
        const errorElement = document.querySelector(`#${input.id}-error`);
        input.classList.remove(this.config.errorClass); 
        errorElement.textContent = '';
    
      }
    
    //Функционал показа ошибок валидации 
      _showInputErrors(input) {
        const errorElement = document.querySelector(`#${input.id}-error`);
        input.classList.add(this.config.errorClass);
        errorElement.textContent = input.validationMessage;
      }
    
      
    //Сообщение с ошибкой
    
    _handleFormInput(input) {
        if (input.validity.valid) {
            this._hideInputErrors(input);
        } else {
            this._showInputErrors(input);
        }
    }
    
    //Делаем кнопку неактивной
    
    _toggleButton() {
        const isFormValid = this.form.checkValidity();
        this.buttonSubmit.disabled = !isFormValid;
        this.buttonSubmit.classList.toggle(this.config.buttonDisabledClass, !isFormValid);
    }
    
    _addInputListeners() {
        this.inputList.forEach((item) => {
            item.addEventListener('input', () => {
                this._handleFormInput(item);
                this._toggleButton();
            });
        });
    }
}