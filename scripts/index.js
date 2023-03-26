//Классы:
 
import {openPopup, closePopup} from './utils.js';
import Card from "./Card.js";
import {formValidationConfig} from './utils.js';
import FormValidator from "./FormValidator.js";
import {initialCards} from "./constants.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";

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
const imageOpen = document.querySelector('.popup__image');
const captionOpen = document.querySelector('.popup__caption');
const popupImgCloseButtonElement = popupImgElement.querySelector('.popup__close');
const cardTable = document.querySelector('.groups');
const emptyCard = document.querySelector('#element-template');
const popupAddElement = document.querySelector('.popup_add');
const popupAddCloseButtonElement = popupAddElement.querySelector('.popup__close');
const popupAddOpenButtonElement = document.querySelector('.profile__button-vector');
const placeInput = document.getElementById('place');
const linkInput = document.getElementById('link');
const nameElement = document.querySelector('.element__title');
const imageElement = document.querySelector('.element_image');
const formAddElement = document.forms["informations"];


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

//Нажимаем на кнопку "Создать":

function handleFormAddSubmit (evt) {
  evt.preventDefault(); 
  const newCard = createCard(placeInput.value, linkInput.value, '#element-template'); //класс Card
  cardTable.prepend(newCard);
  evt.target.reset();
  closePopupAdd();
}

formAddElement.addEventListener('submit', handleFormAddSubmit); 

//Добавляем карточки в верстку class Card:
function createCard(name, link, emptyCard) {
  const newCard = new Card(name, link, emptyCard).createCard();
  return newCard;
}

//Экземпляр класса Section:
function renderCard(name, link, emptyCard) {
  cardTable.prepend(createCard(name, link, emptyCard));
}

const section = new Section({
  items: initialCards,
  renderer: renderCard
}, '#element-template');

section.renderItems();



//Закрытие попапа через крестик:

 const closePopupImg = function() {
  closePopup(popupImgElement);
 }


//Валидация форм class FormValidator:

const formList = Array.from(document.querySelectorAll(formValidationConfig.formSelector));
    
formList.forEach((form) => {
  const formValidatorAdd = new FormValidator(formValidationConfig, form);
  formValidatorAdd.enableValidation();
  const formValidatorEdit = new FormValidator(formValidationConfig, form);
  formValidatorEdit.enableValidation();
});


const formValidatorAdd = new FormValidator(formValidationConfig, formAddElement);
formValidatorAdd.enableValidation();
const formValidatorEdit = new FormValidator(formValidationConfig, formEditElement);
formValidatorEdit.enableValidation();


//Экземпляр класса PopupWithImage:

const img = new PopupWithImage(imageElement);
img.setEventListeners();

//Экземпляр класса PopupWithForm:

const form = new PopupWithForm({

}

)


//Экземпляр класса UserInfo:

const info = new UserInfo({

}

)