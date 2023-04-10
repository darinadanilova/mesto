export default class UserInfo {
    constructor({nameSelector, professionSelector, avatarSelector}) {
        this._name = document.querySelector(nameSelector),
        this._profession = document.querySelector(professionSelector)
        this._avatar = document.querySelector(avatarSelector)
    }

    getInfo() {
        return {
            name: this._name.textContent,
            profession: this._profession.textContent,
            avatar: this._avatar.src
        }
    }

    setUserInfo(name, profession, avatar) {
        this._name.textContent = name,
        this._profession.textContent = profession,
        this._avatar.src = avatar
    }
}