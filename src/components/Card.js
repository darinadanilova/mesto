//СОЗДАТЬ КАРТОЧКУ

export default class Card {
    constructor(data, templateSelector, userID, handleCardClick, handleDeleteCard, handleLikeCard) {
        this.likes = data.likes,
        this.count_likes = data.likes.length,
        this.name = data.name,
        this.link = data.link,
        this.templateSelector = templateSelector,
        this.userID = userID,
        this.cardID = data._id,
        this.ownerCardID = data.owner._id,
        this.handleCardClick = handleCardClick,
        this.handleDeleteCard = handleDeleteCard,
        this.handleLikeCard = handleLikeCard
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
        this.countLikes = this.elementCard.querySelector('.element__digital');
        this.countLikes.textContent = this.count_likes;
        this.title.textContent = this.name;
        this.image.src = this.link;
        this.image.alt = this.name;
        this.elementCard.id = this.cardID;


    //Удаление карточек:

    if (this.userID !== this.ownerCardID) {
        this.delete.style.display = 'none';
    }


    //Лайк:

    this.likes.forEach((item) => {
        if (item._id === this.userID) {
            this.like.classList.add('element__vector_active');
        }
    })
        this._addEventListener();
        return this.elementCard;
    }


    //Лайк:

    _handleLikeCard() {
        this.like.classList.toggle('element__vector_active');

    }


    _changeCountLikes(element, res) {
        element.textContent = res.likes.length;
    }


    //Удаление карточек:

    handleDeleteCard() {
        this.elementCard.remove();
        this.elementCard = null;
    }


    _checkLike() {
        if (this.like.classList.contains('element__vector_active')) {
            return true;
        } else {
            return false;
        }
    }


    //Слушатель события:

    _addEventListener () {

    //Лайк:

    this.like.addEventListener('click', () => {
        this.handleLikeCard(this.cardID, this._checkLike(), this.countLikes, this._changeCountLikes);
        this._handleLikeCard();
    });

    //Удаление карточек:

    this.delete.addEventListener('click', () => {
        this.handleDeleteCard(this.elementCard);
    });

    //Открытие картинки:

    this.image.addEventListener('click', () => {
        this.handleCardClick(this.name, this.link, this.name);
    });
        }
}