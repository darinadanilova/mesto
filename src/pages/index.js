//Классы:
 
// import {openPopup, closePopup} from './utils.js';
import Card from "../components/Card.js";
import {formValidationConfig} from '../scripts/utils.js';
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import '../pages/index.css';
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import API from "../components/API.js";
import {popupEditOpenButtonElement, nameInput, jobInput, formEditElement, formAvatarElement, cardTable, popupAddOpenButtonElement, formAddElement, popupDeleteOpenButtonElement} from '../scripts/constants.js';


//Экземпляр класса API:

const api = new API ({
  url: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    'content-type': 'application/json',
    Authorization: '0aad50e9-c4b5-4f67-8001-5116e2404bbe'
  }
});


//Инициализация карточек:

let userId, section;
Promise.all([api.getInfo(), api.getCard()])
  .then(([userData, cards]) => {
    console.log(userData.avatar);
    userInfo.setUserInfo(userData.name, userData.about, userData.avatar);
    userId = userData._id;
    section = new Section({
      items: cards,
      renderer: renderCard
    }, '.groups');
    section.renderItems();
  }
  )
  .catch((err) => {
    console.log(err);
  }
  );


//Экземпляр класса UserInfo:

const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  professionSelector: '.profile__subtitle',
  avatarSelector: '.profile__avatar-image'
});


//Экземпляр класса PopupWithForm (Edit):

const popupEditProfile = new PopupWithForm('.popup_edit', handleEditFormSubmit);
popupEditProfile.setEventListeners();


//Редактирование профиля:

function handleEditFormSubmit(data) {
  popupEditProfile.loadButton('Сохранение...');
  api.patchInfo(data.name, data.profession)
  .then((res) => {
    userInfo.setUserInfo(res.name, res.about, res.avatar);
    popupEditProfile.close();
  }
  )
  .catch((err) => {
    console.log(err);
  }
  )
  .finally(() => {
    popupEditProfile.loadButton('Сохранить');
  }
  )
}


//handleAvatarFormSubmit - обработчик формы аватара:

function handleAvatarFormSubmit(data) {
  popupAvatar.loadButton('Сохранение...');
  api.patchAvatar(data.avatar)
  .then((res) => {
    userInfo.setUserInfo(res.name, res.about, res.avatar);
    popupAvatar.close();
  }
  )
  .catch((err) => {
    console.log(err);
  }
  )
  .finally(() => {
    popupAvatar.loadButton('Сохранить');
  }
  )
}


popupEditOpenButtonElement.addEventListener('click', function () {
  const infoUser = userInfo.getInfo();
  nameInput.value = infoUser.name;
  jobInput.value = infoUser.profession;
  popupEditProfile.open();
});

const popupAvatarOpenButtonElement = document.querySelector('.profile__button-avatar');
popupAvatarOpenButtonElement.addEventListener('click', function () {
  popupAvatar.open();
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


//Экземпляр класса PopupWithForm (Аватар):

const popupAvatar = new PopupWithForm('.popup_avatar', handleAvatarFormSubmit);
popupAvatar.setEventListeners();


//Экземпляр класса PopupWithSubmit:

const popupSubmit = new PopupWithSubmit('.popup_delete', handleDeleteCard);
popupSubmit.setEventListeners();


//Добавление карточек:

function handleAddFormSubmit(data) {
  popupAddCard.loadButton('Сохранение...');
  api.postCard(data.place, data.link)
  .then((res) => {
    renderCard(res, '.groups');
    popupAddCard.close();
  }
  )
  .catch((err) => {
    console.log(err);
  }
  )
  .finally(() => {
    popupAddCard.loadButton('Сохранить');
  }
  )
}


// Удаление карточек:

function handleDeleteCard(elementCard) {
  api.deleteCard(elementCard.id)
  .then(() => 
    elementCard.remove(),
    popupSubmit.close()
  )
  .catch((err) => {
    console.log(err);
  })
}


// Лайк карточки(здесь же выводим увеличение или уменьшение лайков):

function handleLikeCard(cardId, isLiked, countLike, changeCountLikes, likeButton, changeColorLike) {
  if (isLiked) {
    api.deleteLike(cardId)
    .then((res) => {
      changeCountLikes(countLike, res);
      changeColorLike(likeButton);
    })
    .catch((err) => {
      console.log(err);
    })
  } else {
    api.putLike(cardId)
    .then((res) => {
      changeCountLikes(countLike, res);
      changeColorLike(likeButton);
    })
    .catch((err) => {
      console.log(err);
    })
  }
}


const formValidatorAdd = new FormValidator(formValidationConfig, formAddElement);
formValidatorAdd.enableValidation();
const formValidatorEdit = new FormValidator(formValidationConfig, formEditElement);
formValidatorEdit.enableValidation();
const formValidatorAvatar = new FormValidator(formValidationConfig, formAvatarElement);
formValidatorAvatar.enableValidation();


//Добавляем карточки в верстку class Card:

function createCard(data) {
  const newCard = new Card(data, '#element-template', userId, popupImg.open, popupSubmit.open, handleLikeCard).createCard();
  return newCard;
}


//Функция создания карточек:

function renderCard(data, emptyCard) {
  section.addItem(createCard(data, emptyCard));
}