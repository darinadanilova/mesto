//СОЗДАТЬ КАРТОЧКУ

export default class Card {
    constructor(data, templateSelector, userID, handleCardClick, handleDeleteCard, handleLikeCard, handleDeleteLike) {
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
        this.handleLikeCard = handleLikeCard,
        this.handleDeleteLike = handleDeleteLike
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

    _changeCountLikes = (num) => this.countLikes.textContent = num;

    _changeColorLikeCard = () => this.like.classList.toggle('element__vector_active');


    //Удаление карточек:

    handleDeleteCard() {
        this.elementCard.remove();
        this.elementCard = null;
    }


    //Слушатель события:

    _addEventListener () {

    //Лайк:

    this.like.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('element__vector_active')) {
            this.handleDeleteLike(this.cardID, this._changeColorLikeCard, this._changeCountLikes);
        }
        else {
            this.handleLikeCard(this.cardID, this._changeColorLikeCard, this._changeCountLikes);
        }
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