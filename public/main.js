(function () {
	'use strict';

	const Router = window.Router;
	const ChatView = window.ChatView;
	const MainView = window.MainView;

	(new Router)
		.addRoute('/mainMenu', MainMenuView)
		.addRoute('/login', LoginView)
		.addRoute('/singlePlayer', SinglePlayerView)
		.addRoute('/', MainView)
		.start();

})();
