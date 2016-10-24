import View from "../modules/view"
import  Form from  "../components/form/form.js"
import jsonRequest from "../modules/jsonRequest"

export  default  class RegisterView extends View {
  constructor(options = {}) {
    super(options);
    this._init();
    this.hide();
  }

  _init() {
    let container = document.querySelector('.container');
    this._form = new Form({
      data: {
        title: 'Rainbow square',
        fields: [
          {
            name: 'email',
            type: 'email',
            placeholder: 'Email'
          },
          {
            name: 'login',
            type: 'text',
            placeholder: 'Username'
          },
          {
            name: 'password',
            type: 'password',
            placeholder: 'Password'
          }
        ],
        template: 'form/form.tmpl',
        controls: [
          {
            text: 'Sign up',
            type: 'submit',
            class: 'register__submit btn-success btn-md'

          }
        ]
      }
    });
    this._el = this._form._el;
    container.appendChild(this._el);
    this._form.on('submit', event => {
      event.preventDefault();
      const formData = this._form.getFormData();
      const result = jsonRequest('https://rainbow-square-backend.herokuapp.com/api/user/', formData);
      if (result.status === 400) {
        window.alert("Такой пользователь уже существует(");
      } else {
        window.alert("Вы зарегистрированы!");
        const Request = JSON.parse(result.responseText);
        this._router.go('/menu');
      }
    });
  }

  resume(options = {}) {
    this.show();
  }
}
