import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._buttonDelete = this.popup.querySelector('.popup__button-delete');
        this._cardId = null;
    }

    open = (cardId, deleteCard) => {
        super.open();
        this._cardId = cardId;
        this._deleteCard = deleteCard;
    }

    setEventListeners = () => {
        super.setEventListeners();
        this._buttonDelete.addEventListener('click', () => {
            this._handleSubmit(this._cardId, this._deleteCard)
        })
    }
}