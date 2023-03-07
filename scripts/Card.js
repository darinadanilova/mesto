import {popupImgElement, openImg, openCaption, openPopup, closePopup} from './utils.js';


//СОЗДАТЬ КАРТОЧКУ

export default class Card {
    constructor(name, link, elementSelector) {
        this.name = name,
        this.link = link,
        this.elementSelector = elementSelector
    }
    
    _getEmptyCard () {
        const emptyCard = this.elementSelector.content.cloneNode(true);
        return emptyCard;
    }

    createCard () {
        this.elementCard = this._getEmptyCard();
        this.image = this.elementCard.querySelector('.element__image');
        this.title = this.elementCard.querySelector('.element__title');
        this.delete = this.elementCard.querySelector('.element__delete');
        this.like = this.elementCard.querySelector('.element__vector');
        this.title.textContent = this.name;
        this.image.src = this.link;
        this.image.alt = this.name;
        this._addEventListener(this.name, this.link, popupImgElement);
        return this.elementCard;
    }

        //Слушатель события:

    _addEventListener (name, link, imgElement) {

        //Лайк:

        this.like.addEventListener('click', function (evt) {
            evt.target.classList.toggle('element__vector_active');
        });

    
        //Удаление карточки:

        this.delete.addEventListener('click', function (evt) {
            evt.target.closest('.element').remove();
          });

        //Открытие картинки:

        this.image.addEventListener('click', function () {
          openPopup(imgElement);
          openImg.src = link;
          openImg.alt = name;
          openCaption.textContent = name;
        });
    }
}