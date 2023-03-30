//Классы:
 
// import {openPopup, closePopup} from './utils.js';
import Card from "./Card.js";
import {formValidationConfig} from './utils.js';
import FormValidator from "./FormValidator.js";
import {initialCards} from "./constants.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import '../pages/index.css';

//ОТКРЫТИЕ ПОПАПА ЧЕРЕЗ КНОПКУ РЕДАКТИРВАНИЯ

const popupEditOpenButtonElement = document.querySelector('.profile__button-rectangle');
const nameInput = document.getElementById('name');
const jobInput = document.getElementById('profession');
const formEditElement = document.forms["information"];
const cardTable = document.querySelector('.groups');
const popupAddOpenButtonElement = document.querySelector('.profile__button-vector');
const formAddElement = document.forms["informations"];

//Экземпляр класса UserInfo:
const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  professionSelector: '.profile__subtitle',
});

//Экземпляр класса PopupWithForm (Edit):
const popupEdit = new PopupWithForm('.popup_edit', handleEditFormSubmit);
popupEdit.setEventListeners();

//Редактирование профиля:
function handleEditFormSubmit(data) {
  userInfo.setUserInfo(data.name, data.profession);
  popupEdit.close();
}

popupEditOpenButtonElement.addEventListener('click', function () {
  const infoUser = userInfo.getUserInfo();
  nameInput.value = infoUser.name;
  jobInput.value = infoUser.profession;
  popupEdit.open();
});

//Экземпляр класса PopupWithImage:
 const popupImg = new PopupWithImage('.popup_open_img');
 popupImg.setEventListeners();
 
//Экземпляр класса PopupWithForm (Add):
const popupAdd = new PopupWithForm('.popup_add', handleAddFormSubmit);
popupAdd.setEventListeners();

popupAddOpenButtonElement.addEventListener('click', function () {
  popupAdd.open();
});

//Добавление карточки:
function handleAddFormSubmit(data) {
  renderCard(data.place, data.link, '#element-template');
  popupAdd.close();
}

//Добавляем карточки в верстку class Card:
function createCard(name, link, emptyCard) {
  const newCard = new Card(name, link, emptyCard, popupImg.open).createCard();
  return newCard;
}

//Экземпляр класса Section:
const section = new Section({
  items: initialCards,
  renderer: renderCard
}, '#element-template');

function renderCard(name, link, emptyCard) {
  cardTable.prepend(createCard(name, link, emptyCard));
}

section.renderItems();

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