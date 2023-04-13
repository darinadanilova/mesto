export default class Api {
  constructor(config) {
      this._url = config.url;
      this._headers = config.headers
  }

  getAllCards() {
    return fetch(this._url, {
      method: 'GET',
      headers: this._headers,
    }).then((res)=>{
      if (res.ok) {
      return res.json(); 
      }
      return Promise.reject("Произошла ошибка");
    });
  }

addCards(data) {
  return fetch(this._url, {
    method: 'POST',
    headers: this._headers,
    body: JSON.stringify(data), 
  }).then((res)=>{
    if (res.ok) {
    return res.json(); 
    }
    return Promise.reject("Произошла ошибка");
  });
}
}