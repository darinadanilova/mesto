//СОЗДАТЬ КАРТОЧКУ

export default class Card {
    constructor(name, link, templateSelector, handleCardClick) {
        this.name = name,
        this.link = link,
        this.templateSelector = templateSelector,
        this.handleCardClick = handleCardClick
    }
    
    _getEmptyCard () {
        const emptyCard = document
        .querySelector(this.templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
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

    //Лайк:

    _handleLikeCard() {
        this.like.classList.toggle('element__vector_active');
    }

    //Удаление карточки:

    _handleDeleteCard() {
        this.elementCard.remove();
        this.elementCard = null;
    }


    //Слушатель события:

    _addEventListener () {

        //Лайк:

        this.like.addEventListener('click', () => {
            this._handleLikeCard();
        });

    
        //Удаление карточки:

        this.delete.addEventListener('click', () => {
            this._handleDeleteCard();
          });

        //Открытие картинки:

        this.image.addEventListener('click', () => {
            this.handleCardClick(this.name, this.link, this.name);
        });
    }
}