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
            name: 'Player1',
            score: '125'
          },
          {
            name: 'Player2',
            score: '124'
          },
          {
            name: 'Player3',
            score: '123'
          },
          {
            name: 'Player4',
            score: '122'
          },
        ],
        title: 'RAINBOW SQUARE',
      }
    });
    this._el = this._menu._el;
    container.innerHTML = "";
    container.appendChild(this._menu._el);



  }

  resume(options = {}) {
    this.show();
  }
}

