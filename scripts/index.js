const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = document.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__button-rectangle');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('profession');
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__button-rectangle');

//Открытие попапа через кнопку редактирования:

const openPopup = function() {
    popupElement.classList.add('popup__is_opened');
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
 }

 //Закрытие попапа через крестик:

 const closePopup = function() {
    popupElement.classList.remove('popup__is_opened');
 }


popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
   evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                               // Так мы можем определить свою логику отправки.
                                               // О том, как это делать, расскажем позже.

   // Получите значение полей jobInput и nameInput из свойства value

   // Выберите элементы, куда должны быть вставлены значения полей

   // Вставьте новые значения с помощью textContent
   nameInput.value = nameProfile.textContent;
   jobInput.value = jobProfile.textContent;
   closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 