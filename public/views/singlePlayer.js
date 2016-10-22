(function () {
	'use strict';

	const View = window.View;

	class SinglePlayerView extends View {
		constructor(options = {}) {
			super(options);
			this._el = document.querySelector('.container');
			this.hide();
		}

		resume(options = {}) {
			if (!options.username && !options.email) {
				return this.router.go('/login');
			}

			this.show();
		}
	}


	// export
	window.SinglePlayerView = SinglePlayerView;
	window.MainMenuView = SinglePlayerView;
	window.LoginView = SinglePlayerView;
	window.MainView = SinglePlayerView;

})();
