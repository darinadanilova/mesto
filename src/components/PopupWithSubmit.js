import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._buttonDelete = this.popup.querySelector('.popup__button-delete');
        this._elementCard = null;
    }

    open = (elementCard) => {
        super.open();
        this._elementCard = elementCard;
    }

    setEventListeners = () => {
        super.setEventListeners();
        this._buttonDelete.addEventListener('click', () => {
            this._handleSubmit(this._elementCard)
        })
    }
}