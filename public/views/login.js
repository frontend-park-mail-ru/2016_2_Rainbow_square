import View from "../modules/view"
import  Form from  "../components/form/form"

export  default  class LoginView extends View {
  constructor(options = {}) {
    super(options);
    this._init();
    this.hide();
  }

  _init() {
    let container = document.querySelector('.container');
    this._form = new Form({
      data: {
        fields: [
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
          {
            text: 'Войти',
            attrs: {
              type: 'submit',
              class: 'login__submit'
            }
          },
          {
            text: 'Регистрация',
            attrs: {
              type: 'reset',
              class: 'login__register'
            }
          }
        ]
      }
    });
    this._el = this._form._el;
    container.appendChild(this._el);
    this._form.on('submit', event => {
      event.preventDefault();
      const formData = this._form.getFormData();
      const result = jsonRequest('https://rainbow-square-backend.herokuapp.com/api/session/', formData);
      if (result.status === 400) {
        window.alert("Логин или пароль не верны");
      } else {
        const obj = JSON.parse(result.responseText);
        window.userinfo = obj;
        this.router.go('/menu');
      }
    });

    this._form.on('reset', event => {
      event.preventDefault();
      this.router.go('/register');
    });
  }

  resume(options = {}) {
    console.log('resume at /login');
    this.show();
  }
}
