import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector, handleFormDelete) {
        super(popupSelector);

        this._handleFormDelete = handleFormDelete,
        this._buttonDelete = this.popup.querySelector('.popup__button-rectangle')
    }

    open() {
        super.open();
      }

    setEventListeners() {
        super.setEventListeners();

        this._buttonDelete.addEventListener('submit', (evt) => { 
            evt.preventDefault();
            this._handleFormDelete();  
        });
    }

    close() {
        super.close();
    }
}