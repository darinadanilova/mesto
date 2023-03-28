import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) { 
        super(popupSelector),

        this.title = this.popup.querySelector('.popup__caption'),
        this.image = this.popup.querySelector('.popup__image'),
        this.alt = this.popup.querySelector('.popup__image')
    }

    open = (name, link, alt) => {    
        super.open(),

        this.title.textContent = name;
        this.image.src = link;
        this.alt.alt = alt;
      }
}