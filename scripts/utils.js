//Переменные для валидации:

export const formValidationConfig = {
  formSelector: '.popup__inform',
  inputSelector: '.popup__form',
  errorClass: 'popup__form_type_error',
  buttonSelector: '.popup__button-rectangle',
  buttonDisabledClass: 'popup__button-rectangle_disabled'
};


//Переменные для открытия картинки во весь экран:

export const popupImgElement = document.querySelector('.popup_open');
export const imageOpen = document.querySelector('.popup__image');
export const captionOpen = document.querySelector('.popup__caption');

//Открытие любого попапа:

function openPopup(popup) {
    popup.classList.add('popup_opened');
    popup.addEventListener('click', closePopupOverlay);
    document.addEventListener('keydown', closePopupEsc);
  }
  
  //Закрытие любого попапа:
  
  function closePopup(popup) {
    popup.classList.remove('popup_opened');
    popup.removeEventListener('click', closePopupOverlay);
    document.removeEventListener('keydown', closePopupEsc);
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
      if(evt.key === 'Escape') {
      const popup = document.querySelector('.popup_opened');
          closePopup(popup);
      }
  }


  export {openPopup, closePopup};