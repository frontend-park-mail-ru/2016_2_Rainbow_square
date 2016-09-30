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
    const Form = window.Form;
    const regPage = document.querySelector('.js-reg');

    const formReg = new Form({
      el: document.createElement('div'),
      data: {
        title: 'Registration',
        fields: [
          {
            name: 'email',
            type: 'email',
            placeholder: 'e-mail',
            required: true
          },
          {
            name: 'login',
            type: 'text',
            placeholder: 'your login',
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
            text: 'sign up',
            attrs: {
              type: 'submit',
              class: 'button2'
            }
          }
        ]
      }
    });
    formReg.on('submit', event => {
      event.preventDefault();

      const formData = formReg.getFormData();
      const result = jsonRequest('https://rainbow-square-backend.herokuapp.com/api/user/', formData);
      /*eslint-disable */
      if (result.status === 400) {
        window.alert("Такой пользователь уже существует(");
      } else {
        window.alert("Вы зарегистрированы!");
        const Request = JSON.parse(result.responseText);
        regPage.hidden = true;
        /*eslint-enable */
      }
    });
    regPage.appendChild(formReg.el);
  }
})();
