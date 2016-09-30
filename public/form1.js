/* global document */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "Request" }]*/
function jsonRequest(url, data) {
  const temp = new XMLHttpRequest();
  temp.open('POST', url, false);
  temp.setRequestHeader('Content-Type', 'application/json');
  temp.send(JSON.stringify(data));
  return temp;
}

(function() {
  if (typeof window === 'object') {
    // import
    const Chat = window.Chat;
    const Form = window.Form;

    const loginPage = document.querySelector('.js-login');
    const chatPage = document.querySelector('.js-chat');
    const regPage = document.querySelector('.js-reg');

    const form = new Form({
      el: document.createElement('div'),
      data: {
        title: 'Welcome!',
        fields: [
          {
            name: 'login',
            type: 'text',
            placeholder: 'your name',
            required: true
          },
          {
            name: 'password',
            type: 'password',
            placeholder: 'password',
            required: true
          }
        ],
        controls: [
          {
            text: 'sign in',
            attrs: {
              type: 'submit',
              class: 'button2'
            }
          },
          {
            text: 'Not registered yet?',
            attrs: {
              type: 'reset',  // спорно
              class: 'button1'
            }
          }
        ]
      }
    });

    const chat = new Chat({
      el: document.createElement('div')
    });

    form.on('submit', event => {
      event.preventDefault();

      const formData = form.getFormData();
      // technolibs.request('/api/login', formData);
      const result = jsonRequest('https://rainbow-square-backend.herokuapp.com/api/session/', formData);
      /*eslint-disable */
      if (result.status === 400) {
        window.alert("Логин или пароль не верны :(");
      } else {
        const obj = JSON.parse(result.responseText);
        /*eslint-enable*/
        chat.set({
          login: formData.login
          // email: formData.username
        }).render();

        chat.subscribe();

        loginPage.hidden = true;
        chatPage.hidden = false;
      }
    });

    form.on('reset', event => {
      event.preventDefault();
      // technolibs.request('/api/login', formData);

      loginPage.hidden = true;
      regPage.hidden = false;
    });

    loginPage.appendChild(form.el);
    chatPage.appendChild(chat.el);

    loginPage.hidden = false;
  }
})();
