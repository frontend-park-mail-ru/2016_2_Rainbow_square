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
            name: 'user',
            type: 'text',
            placeholder: "your name",
            required: true,
          },
        ],
        controls: [
          {
            text: 'sign in',
            attrs: {
              type: 'submit',
            },
          },
          {
            text: 'sign up',
            attrs: {
              type: 'reset',  //спорно
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
    });

    loginPage.appendChild(form.el);
    chatPage.appendChild(chat.el);

    loginPage.hidden = false;
  }
}());
