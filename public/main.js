(function () {
	'use strict';

	const Router = window.Router;
	const MainMenuView = window.MainMenuView;
	const LoginView = window.LoginView;
	const SinglePlayerView = window.SinglePlayerView;
	const MainView = window.MainView;

  window.onload = function () {
    (new Router)
    .addRoute('/mainMenu', MainMenuView)
    .addRoute('/login', LoginView)
    .addRoute('/register', RegisterView)
    .addRoute('/singlePlayer', SinglePlayerView)
    .addRoute('/', MainView)
    .start();
  }

})();
