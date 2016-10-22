(function () {
	'use strict';

	const View = window.View;

	class LoginView extends View {
		constructor(options = {}) {
			super(options);
      let container = document.querySelector('.container');
      let formComponent = new Form({
        data: {
          fields: [
            {
              name: 'email',
              placeholder: 'Email'
            },
            {
              name: 'username',
              placeholder: 'Username'
            },
            {
              name: 'password',
              placeholder: 'Password',
              type: 'password'
            }
          ],
          title: 'Вход',
          controls: [
            { text: 'Войти' }
          ]
        }
      });
      this._el = formComponent._el;
      container.appendChild(this._el);
			this.hide();
		}

    _init() {

    }

		resume(options = {}) {
      console.log('resume at /login');
			this.show();
		}
	}


	// export
	window.LoginView = LoginView;

})();
