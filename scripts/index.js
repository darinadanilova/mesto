const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = document.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.edit');
const popupSaveButtonElement = document.querySelector('.popup__button');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__profession');
const profileElement = document.querySelector('.profile');
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');

//Открытие попапа через кнопку редактирования:

const openPopup = function(event) {
    popupElement.classList.add('popup_is_opened');
    console.log('Open popup clicked');
 }

 //Закрытие попапа через крестик:

 const closePopup = function() {
    popupElement.classList.remove('popup_is_opened');
 }

 //Закрытие попапа через кнопку "Сохранить" с сохранением измененных данных:

 const savePopup = function() {
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popupElement.classList.remove('popup_is_opened');
 }

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupSaveButtonElement.addEventListener('click', savePopup);



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
//formElement.addEventListener('submit', handleFormSubmit);

