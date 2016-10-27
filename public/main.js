'use strict';

import Router from "./modules/router.js"
import MainMenuView from "./views/mainMenu.js"
import LoginView from "./views/login.js"
import SinglePlayerView from "./views/singlePlayer.js"
import RegisterView from  "./views/register"
import PlayChooseView from "./views/playchoose"
import ScoreBoardView from "./views/scoreboard"

window.onload = function () {
  (new Router)
      .addRoute('/scores', ScoreBoardView)
      .addRoute('/playchoose', PlayChooseView)
      .addRoute('/play', MainMenuView)
      .addRoute('/register', RegisterView)
      .addRoute('/singlePlayer', SinglePlayerView)
      .addRoute('/', LoginView)
      .start();
}

