/* global Button */
/* global technolibs */
/* global document */
(function () {
  if (typeof window === 'object') {
    // import
    const Button = window.Button;
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
            name: 'email',
            type: 'email',
            placeholder: "e-mail",
            required: true,
          },
          {
            name: 'password',
            type: 'password',
            placeholder: "password",
            required: true,
          },
        ],
        controls: [
          {
            text: 'sign in',
            attrs: {
              type: 'submit',
              class: "button2"
            },
          },
          {
            text: 'Not registered yet?',
            attrs: {
              type: 'reset',  //спорно
              class: 'button1'
            },
          },
        ],
      },
    });


    const chat = new Chat({
      el: document.createElement('div'),
    });

    form.on('submit', event => {
      event.preventDefault();

      let formData = form.getFormData();
      technolibs.request('/api/login', formData);

      chat.set({
        username: formData.user,
        email: formData.email
      }).render();

      chat.subscribe();

      loginPage.hidden = true;
      chatPage.hidden = false;
    });

    form.on('reset', (event) => {
      event.preventDefault();
      const formData = form.getFormData();
     // technolibs.request('/api/login', formData);

      loginPage.hidden = true;
      regPage.hidden = false;
    });

    loginPage.appendChild(form.el);
    chatPage.appendChild(chat.el);

    loginPage.hidden = false;
    // Можно использовать старую, но тогда придется делать новую иерархию классов,
    // что приведет к проблемам в дальнеших мерджах
    const formReg = new Form({
      el: document.createElement('div'),
      data: {
        title: 'Registration',
        fields: [
          {
            name: 'email',
            type: 'email',
            placeholder: "e-mail",
            required: true,
          },
          {
            name: 'username',
            type: 'text',
            placeholder: "your login",
            required: true,
          },
          {
            name: 'password',
            type: 'password',
            placeholder: "password",
            required: true,
          },
        ],
        controls: [
          {
            text: 'sign up',
            attrs: {
              type: 'submit',
              class: "button2"
            },
          },
        ],
      },
    });
    regPage.appendChild(formReg.el);


  }
}());
