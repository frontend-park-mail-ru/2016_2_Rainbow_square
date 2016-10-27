import View from "../modules/view"
import Scoreboard from "../components/scoreboard/scoreboard"


export  default  class ScoreBoardView extends View {
  constructor(options = {}) {
    super(options);
    this._init();
    // this.hide();
  }

  _init() {
    let container = document.querySelector('.content_container');
    this._menu = new Scoreboard({
      data: {
        fields: [
          {
            class: 'Singleplayer'
          },
          {
            class: 'Multiplayer'
          },
        ],
        title: 'RAINBOW SQUARE',
      }
    });
    this._el = this._menu._el;
    container.appendChild(this._menu._el);



  }

  resume(options = {}) {
    this.show();
  }
}

