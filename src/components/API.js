export default class API {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers
    }


    //Ответ с сервера:

    _answerServer(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }


    //Получение инфы с сервера:

    getInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
        .then((res) => this._answerServer(res))
    }


    //Отправка инфы на сервер:

    patchInfo(name, about) {
        return fetch(`${this._url}/users/me`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({name, about})
        })
        .then((res) => this._answerServer(res))
    }


    //Получение карточек:

    getCard() {
        return fetch(`${this._url}/cards `, {
            method: 'GET',
            headers: this._headers
        })
        .then((res) => this._answerServer(res))
    }


    //Добавление карточек:

    postCard(name, link) {
        console.log(name, link)
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({name, link})
        })
        .then((res) => this._answerServer(res))
    }


    //Удаление карточек:

    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers
        })
        .then((res) => this._answerServer(res))
    }


    //Поставить лайк:
    
    putLike(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
          method: "PUT",
          headers: this._headers
        })
        .then((res) => this._answerServer(res))
    }


    //Удаление лайка:

    deleteLike(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
          method: "DELETE",
          headers: this._headers
        })
        .then((res) => this._answerServer(res))
    }


    //Редактирование авы:
    
    patchAvatar(avatar) {
        return fetch(`${this._url}/users/me/avatar`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({avatar})
        })
        .then(res => this._answerServer(res))
        }
}