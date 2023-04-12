export default class Section {
  constructor({items, renderer}, containerElement) { 
      this._items = items,
      this._renderer = renderer,
      this._containerElement = this._containerElement = document.querySelector(containerElement)
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(item) {
    this._containerElement.prepend(item);
  }
}