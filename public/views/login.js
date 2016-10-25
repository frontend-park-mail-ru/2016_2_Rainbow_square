import View from "../modules/view"
import  Form from  "../components/form/form"
import  jsonRequest from "../modules/jsonRequest"

export  default  class LoginView extends View {
  constructor(options = {}) {
    super(options);
    this._init();
    this.hide();
  }

  _init() {
    let container = document.querySelector('.content_container');
    this._form = new Form({
      data: {
        fields: [
          {
            name: 'login',
            placeholder: 'Username',
            class: 'input_text'
          },
          {
            name: 'password',
            placeholder: 'Password',
            type: 'password',
            class: 'input_text'
          }
        ],
        template: 'form/form.tmpl',
        title: 'RAINBOW SQUARE',
        controls: [
          {
            text: 'Sing in',
            type: 'submit',
            class: 'btn btn-success'
          },
          {
            text: 'Sign up',
            type: 'reset',
            class: 'btn btn-info '

          }
        ],
        social: [{
          text: '',
          class: 'btn btn-social-icon btn-vk',
          span: "fa fa-vk"

        }, {
          text: '',
          class: 'btn btn-social-icon btn-facebook',
          span: "fa fa-facebook"

        },
          {
            text: '',
            class: 'btn btn-social-icon btn-twitter',
            span: "fa fa-twitter"

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
        this.router.go('/');
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
