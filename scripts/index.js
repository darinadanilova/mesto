//ОТКРЫТИЕ ПОПАПА ЧЕРЕЗ КНОПКУ РЕДАКТИРВАНИЯ

const popupeditElement = document.querySelector('.popup_edit');
const popupeditCloseButtonElement = popupeditElement.querySelector('.popup__close');
const popupeditOpenButtonElement = document.querySelector('.profile__button-rectangle');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('profession');
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');
const formeditElement = popupeditElement.querySelector('.popup__inform');

//Открытие попапа через кнопку редактирования:

const openPopupedit = function() {
  popupeditElement.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  }

 //Закрытие попапа через крестик:

 const closePopupedit = function() {
  popupeditElement.classList.remove('popup_opened');
  }


popupeditOpenButtonElement.addEventListener('click', openPopupedit);
popupeditCloseButtonElement.addEventListener('click', closePopupedit);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormeditSubmit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopupedit();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formeditElement.addEventListener('submit', handleFormeditSubmit); 


//ОТКРЫТИЕ ПОПАПА ЧЕРЕЗ КНОПКУ ДОБАВЛЕНИЯ

const popupaddElement = document.querySelector('.popup_add');
const popupaddCloseButtonElement = popupaddElement.querySelector('.popup__close');
const popupaddOpenButtonElement = document.querySelector('.profile__button-vector');
let placeInput = document.getElementById('place');
let linkInput = document.getElementById('link');
let nameElement = document.querySelector('.element__title');
let imageElement = document.querySelector('.element__image');
const formaddElement = popupaddElement.querySelector('.popup__inform');

//Открытие попапа через кнопку добавления:

const openPopupadd = function() {
  popupaddElement.classList.add('popup_opened');
}

 //Закрытие попапа через крестик:

const closePopupadd = function() {
  popupaddElement.classList.remove('popup_opened');
}

popupaddOpenButtonElement.addEventListener('click', openPopupadd);
popupaddCloseButtonElement.addEventListener('click', closePopupadd);


//Готовый массив карточек:

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


//СОЗДАТЬ КАРТОЧКУ

const CardsList = document.querySelector('.groups');
const emptyCard = document.querySelector('#element-template');

function createCard(name, link) {
  const cardElement = emptyCard.content.cloneNode(true);
  const cardTitle = cardElement.querySelector('.element__title');
  const cardImage = cardElement.querySelector('.element__image');
  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;


  //Лайк:

  cardElement.querySelector('.element__vector').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__vector_active');
});


//Удаление карточки:

cardElement.querySelector('.element__delete').addEventListener('click', function (evt) {
  evt.target.closest('.element').remove();
});


//Открытие картинки:

const popupimgElement = document.querySelector('.popup_open');
let openImg = document.querySelector('.popup__image');
let openCaption = document.querySelector('.popup__caption');

cardElement.querySelector('.element__image').addEventListener('click', function () {
  popupimgElement.classList.add('popup_opened');
  openImg.src = link;
  openImg.alt = name;
  openCaption.textContent = name;
});

return cardElement;
};

//Нажимаем на кнопку "Создать":

function handleFormaddSubmit (evt) {
  evt.preventDefault(); 
  let newCard = createCard(placeInput.value, linkInput.value);
  CardsList.prepend(newCard);
  closePopupadd();
}

formaddElement.addEventListener('submit', handleFormaddSubmit); 

//Добавляем карточки в верстку:

initialCards.forEach(card => { 
  let newCard = createCard(card.name, card.link);
  CardsList.prepend(newCard);
});


//Закрытие попапа через крестик:

const popupimgElement = document.querySelector('.popup_open');
const popupimgCloseButtonElement = popupimgElement.querySelector('.popup__close');

 const closePopupimg = function() {
  popupimgElement.classList.remove('popup_opened');
 }

popupimgCloseButtonElement.addEventListener('click', closePopupimg);