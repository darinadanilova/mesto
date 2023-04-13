export default class Api {
  constructor(config) {
      this._url = config.url;
      this._headers = config.headers
  }

  _answerServer(res) {
    if (res.ok) {
      return res.json(); 
      }
      return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
    })
    .then((res) => this._answerServer(res))
}

editUserInfo(name, about) {
  return fetch(`${this._url}/users/me`, {
    method: "PATCH",
    headers: this._headers,
    body: JSON.stringify({name, about})
  })
  .then((res) => this._answerServer(res))
}

getInitialCards() {
  return fetch(`${this._url}/cards `, {
      method: 'GET',
      headers: this._headers
  })
  .then((res) => this._answerServer(res))
}
  //getAllCards() {
  //  return fetch(this._url, {
  //    method: 'GET',
  //    headers: this._headers,
  //  }).then((res)=>{
  //    if (res.ok) {
  //    return res.json(); 
  //    }
  //    return Promise.reject("Произошла ошибка");
  //  });
  //}
//
  //addCards(data) {
  //  return fetch(this._url, {
  //    method: 'POST',
  //    headers: this._headers,
  //    body: JSON.stringify(data), 
  //  }).then((res)=>{
  //    if (res.ok) {
  //    return res.json(); 
  //    }
  //    return Promise.reject("Произошла ошибка");
  //  });
  //}
} 