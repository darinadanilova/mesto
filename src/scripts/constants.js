//Готовый массив карточек:

export const initialCards = [
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


export const popupEditOpenButtonElement = document.querySelector('.profile__button-rectangle');
export const nameInput = document.getElementById('name');
export const jobInput = document.getElementById('profession');
export const formEditElement = document.forms["information"];
export const formAvatarElement = document.forms["avatar"];
export const cardTable = document.querySelector('.groups');
export const popupAddOpenButtonElement = document.querySelector('.profile__button-vector');
export const formAddElement = document.forms["informations"];
export const popupDeleteOpenButtonElement = document.querySelector('.element__delete');