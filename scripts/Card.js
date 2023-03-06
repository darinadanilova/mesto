export default class Card {
    constructor(name, link, elementSelector) {
        this.name = name,
        this.link = link,
        this.elementSelector = elementSelector
    }
    
    _getEmptyCard () {
        const emptyCard = document
        .querySelector(this.elementSelector)
        .content
        querySelector('.element')
        .cloneNode(true);
        console.log(emptyCard);
        return emptyCard;
    }

    createCard () {
        this.elementCard = this._getEmptyCard();
        console.log(elementCard);
        this.image = this.elementCard.querySelector('.element__image');
        this.title = this.elementCard.querySelector('.element__title');
        this.delete = this.elementCard.querySelector('.element__delete');
        this.like = this.elementCard.querySelector('.element__vector');
        return elementCard;
    }

}