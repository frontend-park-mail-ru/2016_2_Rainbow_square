import Block from "../block/block.js";

export default class GameFieldCell extends Block {
  constructor(options = {}) {
    super('div', options);
    this._el.classList.add('gameFieldCell');
  }
}
