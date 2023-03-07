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
        console.log(this.elementCard);
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

    _addEventListener () {
          this.like.addEventListener('click', function (evt) {
            evt.target.classList.toggle('element__vector_active');
        });

        this.delete.addEventListener('click', function (evt) {
            evt.target.closest('.element').remove();
          });

        this.image.addEventListener('click', function () {
          this.openPopup(popupImgElement);
          this.openImg.src = this.link;
          this.openImg.alt = this.name;
          this.openCaption.textContent = this.name;
        });
    }

}