import View from "../modules/view"
import Block from "../components/block/block.js";
import GameField from "../components/gameField/gameField.js";

export  default  class SinglePlayerView extends View {
  constructor(options = {}) {
    super(options);
    this._init();
    this.hide();
  }

  _init() {
    let container = document.querySelector('.content_container');
    let gameContainer = new Block('div');
    let gameField = new GameField();
    gameField.setSize({ w: 5, h: 5 });
    gameField.setHandler(function (pos) {
      console.log(`pos: x=${pos.x} y=${pos.y}`);
    });
    gameField.renderTo(gameContainer._get());
    gameContainer.renderTo(container);
    this._el = gameContainer._get();
  }

  resume(options = {}) {
    /*
    if (!options.username && !options.email) {
      return this.router.go('/login');
    }
    */

    console.log('at /sp');
    this.show();
  }
}
