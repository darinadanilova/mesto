export default class Popup {
    constructor(popupSelector) {
        this.popup = document.querySelector(popupSelector),
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this.popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
      }

    close() {
        this.popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this.popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close();
            }
            if (evt.target.classList.contains('popup__close')) {
                this.close();
            }
        })
    }
}