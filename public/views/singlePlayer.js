(function () {
	'use strict';

	const View = window.View;

	class SinglePlayerView extends View {
		constructor(options = {}) {
			super(options);
			this._el = new Block('div');
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
	window.LoginView = SinglePlayerView;
	window.MainView = SinglePlayerView;

})();
