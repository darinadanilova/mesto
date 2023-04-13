//Классы:
 
// import {openPopup, closePopup} from './utils.js';
import Card from "../components/Card.js";
import {formValidationConfig} from '../scripts/utils.js';
import FormValidator from "../components/FormValidator.js";
import {initialCards} from "../scripts/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import '../pages/index.css';
import Api from "../components/Api.js";

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
const popupEditProfile = new PopupWithForm('.popup_edit', handleEditFormSubmit);
popupEditProfile.setEventListeners();

//Редактирование профиля:
function handleEditFormSubmit(data) {
  userInfo.setUserInfo(data.name, data.profession);
  popupEditProfile.close();
}

popupEditOpenButtonElement.addEventListener('click', function () {
  const infoUser = userInfo.getUserInfo();
  nameInput.value = infoUser.name;
  jobInput.value = infoUser.profession;
  popupEditProfile.open();
});

//Экземпляр класса PopupWithImage:
 const popupImg = new PopupWithImage('.popup_open_img');
 popupImg.setEventListeners();
 
//Экземпляр класса PopupWithForm (Add):
const popupAddCard = new PopupWithForm('.popup_add', handleAddFormSubmit);
popupAddCard.setEventListeners();

popupAddOpenButtonElement.addEventListener('click', function () {
  popupAddCard.open();
});

//Добавление карточки:
function handleAddFormSubmit(data) {
  renderCard(data.place, data.link, '#element-template');
  popupAddCard.close();
}

//Добавляем карточки в верстку class Card:
function createCard(name, link, emptyCard) {
  const newCard = new Card(name, link, emptyCard, popupImg.open).createCard();
  return newCard;
}

//Экземпляр класса Section:
//const section = new Section({
//  items: initialCards,
//  renderer: renderCard
//}, '#element-template');

function renderCard(name, link, emptyCard) {
  cardTable.prepend(createCard(name, link, emptyCard));
}

section.renderItems();


const formValidatorAdd = new FormValidator(formValidationConfig, formAddElement);
formValidatorAdd.enableValidation();
const formValidatorEdit = new FormValidator(formValidationConfig, formEditElement);
formValidatorEdit.enableValidation();

//Экземпляр класса Api:
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    'content-type': 'application/json',
    Authorization: '0aad50e9-c4b5-4f67-8001-5116e2404bbe'
  },
});

let user, section;
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then((res) => {
    userInfo.setUserInfo(res[0].name, res[0].about, res[0].avatar);
    user = res[0];
    section = new Section({items: res[1], renderer: renderElement}, '.elements__list');
    section.renderItems();
  })
  .catch((err) => console.log(`Ошибка: ${err}`))



//api.getAllCards();
//
//const getApi = getAllCards();
//getApi.then((data)=>{
//  debugger;
//  const section = new Section({
//    items: data,
//    renderer: renderCard
//  }, '#element-template');
//  section.render(page);
//})
//.catch((err)=>alert(err));