//ОТКРЫТИЕ ПОПАПА ЧЕРЕЗ КНОПКУ РЕДАКТИРВАНИЯ

const popupEditElement = document.querySelector('.popup_edit');
const popupEditCloseButtonElement = popupEditElement.querySelector('.popup__close');
const popupEditOpenButtonElement = document.querySelector('.profile__button-rectangle');
const nameInput = document.getElementById('name');
const jobInput = document.getElementById('profession');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const formEditElement = document.forms["information"];
const popupImgElement = document.querySelector('.popup_open');
const openImg = document.querySelector('.popup__image');
const openCaption = document.querySelector('.popup__caption');
const popupImgCloseButtonElement = popupImgElement.querySelector('.popup__close');
const cardsList = document.querySelector('.groups');
const emptyCard = document.querySelector('#element-template');
const popupAddElement = document.querySelector('.popup_add');
const popupAddCloseButtonElement = popupAddElement.querySelector('.popup__close');
const popupAddOpenButtonElement = document.querySelector('.profile__button-vector');
const placeInput = document.getElementById('place');
const linkInput = document.getElementById('link');
const nameElement = document.querySelector('.element__title');
const imageElement = document.querySelector('.element__image');
const formAddElement = document.forms["informations"];

//Открытие любого попапа:

function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closePopupOverlay);
  document.addEventListener('keydown', closePopupEsc);
}

//Закрытие любого попапа:

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}


//Закрытие любого попапа через OVERLAY:
function closePopupOverlay(evt) {
  const popup = document.querySelector('.popup_opened');
	if(evt.target === popup) {
    closePopup(popup);
	}
}


//Закрытие любого попапа через ESC:

function closePopupEsc(evt) {
  const numberEsc = 27;
	if( evt.keyCode === numberEsc ) {
    const popup = document.querySelector('.popup_opened');
		closePopup(popup);
	}
}


// Универсально навесим обработчики крестиков:

// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close');

closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});

//Открытие попапа через кнопку редактирования:

const openPopupEdit = function() {
  openPopup(popupEditElement);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  }

 //Закрытие попапа через крестик:

 const closePopupEdit = function() {
  closePopup(popupEditElement);
  }


popupEditOpenButtonElement.addEventListener('click', openPopupEdit);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormEditSubmit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopupEdit();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditElement.addEventListener('submit', handleFormEditSubmit); 


//ОТКРЫТИЕ ПОПАПА ЧЕРЕЗ КНОПКУ ДОБАВЛЕНИЯ

//Открытие попапа через кнопку добавления:

const openPopupAdd = function() {
  openPopup(popupAddElement);
}

 //Закрытие попапа через крестик:

const closePopupAdd = function() {
  closePopup(popupAddElement);
}

popupAddOpenButtonElement.addEventListener('click', openPopupAdd);


//СОЗДАТЬ КАРТОЧКУ

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

cardImage.addEventListener('click', function () {
  openPopup(popupImgElement);
  openImg.src = link;
  openImg.alt = name;
  openCaption.textContent = name;
});

return cardElement;
};

//Нажимаем на кнопку "Создать":

function handleFormAddSubmit (evt) {
  evt.preventDefault(); 
  const newCard = createCard(placeInput.value, linkInput.value);
  cardsList.prepend(newCard);
  evt.target.reset();
  closePopupAdd();
}

formAddElement.addEventListener('submit', handleFormAddSubmit); 

//Добавляем карточки в верстку:
initialCards.forEach(card => { 
  const newCard = createCard(card.name, card.link);
  cardsList.prepend(newCard);
});


//Закрытие попапа через крестик:

 const closePopupImg = function() {
  closePopup(popupImgElement);
 }