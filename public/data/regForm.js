//ДЛЯ WEBPACK
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
export {formReg};
