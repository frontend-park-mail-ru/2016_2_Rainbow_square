'use strict';

import Router from "./modules/router.js"
import MainMenuView from "./views/mainMenu.js"
import LoginView from "./views/login.js"
import SinglePlayerView from "./views/singlePlayer.js"
import MainView from "./views/singlePlayer.js"
import RegisterView from  "./views/register"

  window.onload = function () {
    (new Router)
    .addRoute('/login', LoginView)
    .addRoute('/register', RegisterView)
    .addRoute('/singlePlayer', SinglePlayerView)
    .addRoute('/', MainMenuView)
    .start();
  }

