import {popupImgElement, openImg, openCaption, openPopup} from './utils.js';


//СОЗДАТЬ КАРТОЧКУ

export default class Card {
    constructor(name, link, elementSelector) {
        this.name = name,
        this.link = link,
        this.elementSelector = elementSelector
    }
    
    _getEmptyCard () {
        const emptyCard = this.elementSelector.content.querySelector('.element').cloneNode(true);
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
        this._addEventListener();
        return this.elementCard;
    }

        //Слушатель события:

    _addEventListener () {

        //Лайк:

        this.like.addEventListener('click', () => {
            this.like.classList.toggle('element__vector_active');
        });

    
        //Удаление карточки:

        this.delete.addEventListener('click', () => {
            this.elementCard.remove();
            this.elementCard = null;
          });

        //Открытие картинки:

        this.image.addEventListener('click', () => {
          openPopup(popupImgElement);
          openImg.src = this.link;
          openImg.alt = this.name;
          openCaption.textContent = this.name;
        });
    }
}


