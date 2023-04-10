import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit ) {
        super(popupSelector);

        this._handleFormSubmit = handleFormSubmit,
        this._popupForm = this.popup.querySelector('.popup__inform'),
        this._popupFormInput = this.popup.querySelectorAll('.popup__form')
    }

    _getInputValues() {
        const data = {};
        this._popupFormInput.forEach(input => {
            data[input.getAttribute('name')] = input.value
        });
        return data;
    };

    loadButton(buttunSelector, text) {
        this._popupForm.querySelector(buttunSelector).textContent = text;
    }

    setEventListeners() {
        super.setEventListeners();

        this._popupForm.addEventListener('submit', (evt) => { 
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues())
        });
    }

    close() {
        super.close();

        this._popupForm.reset();
    }
}