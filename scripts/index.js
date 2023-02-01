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
   evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                               // Так мы можем определить свою логику отправки.
                                               // О том, как это делать, расскажем позже.

   // Получите значение полей jobInput и nameInput из свойства value

   // Выберите элементы, куда должны быть вставлены значения полей

   // Вставьте новые значения с помощью textContent
   nameProfile.textContent = nameInput.value;
   jobProfile.textContent = jobInput.value;
   closePopupedit();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formeditElement.addEventListener('submit', handleFormeditSubmit); 


//ОТКРЫТИЕ ПОПАПА ЧЕРЕЗ КАРТИНКУ:

const popupimgElement = document.querySelector('.popup_open');
const popupimgCloseButtonElement = popupimgElement.querySelector('.popup__close');
const popupimgOpenButtonElement = document.querySelector('.element__image');

//Открытие попапа через картинку:

const openPopupimg = function() {
    popupimgElement.classList.add('popup_opened');
 }

 //Закрытие попапа через крестик:

 const closePopupimg = function() {
    popupimgElement.classList.remove('popup_opened');
 }


popupimgOpenButtonElement.addEventListener('click', openPopupimg);
popupimgCloseButtonElement.addEventListener('click', closePopupimg);




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
    placeInput.value = nameElement.textContent;
    linkInput.value = imageElement.textContent;
 }

 //Закрытие попапа через крестик:

 const closePopupadd = function() {
    popupaddElement.classList.remove('popup_opened');
 }


popupaddOpenButtonElement.addEventListener('click', openPopupadd);
popupaddCloseButtonElement.addEventListener('click', closePopupadd);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormaddSubmit (evt) {
   evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                               // Так мы можем определить свою логику отправки.
                                               // О том, как это делать, расскажем позже.

   // Получите значение полей jobInput и nameInput из свойства value

   // Выберите элементы, куда должны быть вставлены значения полей

   // Вставьте новые значения с помощью textContent
   nameElement.textContent = placeInput.value;
   imageElement.textContent = linkInput.value;
   closePopupadd();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formaddElement.addEventListener('submit', handleFormaddSubmit); 







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


 const cardsList = document.querySelector('.elements');
 const form = document.querySelector('.popup__inform');
const input = document.querySelector('.popup__form_input_place');
const inputs = document.querySelector('.popup__form_input_link');
const template = document.querySelector('#element-template');
console.log(template);
 
 const formaddSubmitHandler = (evt) => {
   evt.preventDefault();
   const taskName = input.value;
   renderTask(taskName);
   input.value = '';
 };
 
 const createTask = (taskName) => {
   const task = template
     .content
     .querySelector('.todo-item')
     .cloneNode(true);
 
   const textElement =  task.querySelector('.todo-item__text');
   textElement.textContent = taskName;
 
   const deleteBtn = task.querySelector('.todo-item__del');
   deleteBtn.addEventListener('click', () => {
     task.remove();
   });
 
   const duplicateBtn = task.querySelector('.todo-item__copy');
   duplicateBtn.addEventListener('click', () => {
     renderTask(taskName);
   });
 
   const editTodo = () => {
     textElement.contentEditable = false;
     textElement.removeEventListener('blur',editTodo);
   }
 
   const editBtn = task.querySelector('.todo-item__edit');
   editBtn.addEventListener('click', () => {
     textElement.contentEditable = true;
     textElement.focus();
     textElement.addEventListener('blur', editTodo);
   });
 
   return task;
 };
 
 const renderTask = (taskName) => {
   todoList.append(createTask(taskName));
 };
 
 todos.forEach((item) => {
   renderTask(item);
 });
 
 form.addEventListener('submit', formSubmitHandler);