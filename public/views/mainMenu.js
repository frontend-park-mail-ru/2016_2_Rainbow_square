'use strict';

import View from "../modules/view"
import Block from "../components/block/block.js";
import Button from "../components/button/button.js";

export default class MainMenuView extends View {
  constructor(options = {}) {
    super(options);
    this._init();
    this.hide();
  }

  _init() {
    let container = document.querySelector('.container');
    let menu = new Block('div');
    let singlePlayer = new Button({ text: 'Single player' });
    let multiPlayer = new Button({ text: 'Multiplayer' });
    let scoreboard = new Button({ text: 'Scoreboard' });
    singlePlayer.on('click', event => { this.router.go('/singlePlayer'); });
    multiPlayer.on('click', event => { this.router.go('/multiPlayer'); });
    scoreboard.on('click', event => { this.router.go('/scores'); });
    singlePlayer.classAdd('mainMenu_buttom');
    multiPlayer.classAdd('mainMenu_buttom');
    scoreboard.classAdd('mainMenu_buttom');
    menu.append(singlePlayer);
    menu.append(multiPlayer);
    menu.append(scoreboard);
    this._menu = menu;
    container.appendChild(menu._el);
    this._el = menu._el;
  }

  resume(options = {}) {
    this.show();
  }
}
