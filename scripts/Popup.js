export default class Popup {
    constructor(popupSelector) { 
        this._popupSelector = popupSelector
    }

    open(_popupSelector) {
        this._popupSelector.classList.add('popup_opened');
        this._popupSelector.addEventListener('click', this.setEventListeners);
        document.addEventListener('keydown', this._handleEscClose);
      }

    close(_popupSelector) {
        this._popupSelector.classList.remove('popup_opened');
        this._popupSelector.removeEventListener('click', this.setEventListeners);
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if(evt.key === 'Escape') {
            const _popupSelector = document.querySelector('.popup_opened');
            this.close(_popupSelector);
            }
    }

    setEventListeners(evt) {
        if(evt.target.classList.contains('popup')) {
            this.close(evt.target);
            }
    }
}