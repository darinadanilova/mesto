//Переменные для открытия картинки во весь экран:

export const popupImgElement = document.querySelector('.popup_open');
export const openImg = document.querySelector('.popup__image');
export const openCaption = document.querySelector('.popup__caption');

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
    const numberEsc = 27;
      if( evt.keyCode === numberEsc ) {
      const popup = document.querySelector('.popup_opened');
          closePopup(popup);
      }
  }


  export {openPopup, closePopup};