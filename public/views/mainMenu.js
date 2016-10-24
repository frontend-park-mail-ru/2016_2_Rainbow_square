'use strict';

import View from "../modules/view"
import Menu from "../components/menu/menu"
import Block from "../components/block/block.js";
import Block_query from "../components/block/block_query.js";

export default class MainMenuView extends View {
  constructor(options = {}) {
    super(options);
    this._init();
   // this.hide();
  }

  _init() {
    let container = document.querySelector('.container');
    let menu = new Menu('div');
   // let singlePlayer = new Block_query('Single_player');
    // let multiPlayer = new Block_query('Multiplayer');
    // let scoreboard = new Block_query('Scoreboard');
    //singlePlayer.on('click', event => { this.router.go('/singlePlayer'); });
    // multiPlayer.on('click', event => { this.router.go('/multiPlayer'); });
    // scoreboard.on('click', event => { this.router.go('/scores'); });
    // singlePlayer.classAdd('mainMenu_buttom');
    // multiPlayer.classAdd('mainMenu_buttom');
    // scoreboard.classAdd('mainMenu_buttom');
    // menu.append(singlePlayer);
    // menu.append(multiPlayer);
    // menu.append(scoreboard);
    this._el = this.menu._el;
     container.appendChild(menu._el);
    // this._el = menu._el;
  }

  resume(options = {}) {
    this.show();
  }
}
