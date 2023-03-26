export default class Popup {
    constructor(popupSelector) { 
        this._popupSelector = document.querySelector(popupSelector)
    }

    open(_popupSelector) {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
      }

    close(_popupSelector) {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if(evt.key === 'Escape') {
            const _popupSelector = document.querySelector('.popup_opened');
            this.close(_popupSelector);
            }
    }

    setEventListeners() {
        this._popupSelector.addEventListener('keydown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close();
            }
            if (evt.target.classList.contains('popup__close')) {
                this.close();
            }
        })
    }
}