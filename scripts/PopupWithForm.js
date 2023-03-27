import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit ) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popup.querySelector('.popup__inform');
        this._popupInputs = this._popup.querySelectorAll('.popup__form');
    }

    _getInputValues() {
        const data = {};
        this._popupInputs.forEach(element => {
            data[element.getAttribute('name')] = element.value
        });
        return data;
    };

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