import Block from "../block/block.js";
import GameFieldCell from "../gameFieldCell/gameFieldCell.js";

export default class GameField extends Block {
  constructor(options = {}) {
    super('div', options);
    this._el.classList.add('gameField');
    this.cells = new Map();
    if ('size' in options) {
      this.setSize(options.size);
    }
    this._size_css = document.createElement('style');
    this._size_css.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(this._size_css);
  }

  setSize(newSize) {
    this.clear();
    for (let i = 0; i < newSize.h; i++) {
      for (let j = 0; j < newSize.w; j++) {
        let newCell = new GameFieldCell();
        this.cells.set(newCell, {'x': j, 'y': i});
        this.append(newCell);
      }
    }

    this._size_css.innerHTML = `
      .gameFieldCell {
        width: ${100 / newSize.w}%;
        height: ${100 / newSize.h}%;
      }`;
  }

  clear() {
    this.cells.forEach( (val, key) => {
      key._el.remove();
    });
    this.cells.clear();
  }

  setHandler(handler) {
    this.cells.forEach( (val, key) => {
      key.on('click', function () {
        handler(val);
      });
    });
  }

}
