const Form = window.Form;
//ДЛЯ WEBPACK
export  let form = new Form({
  el: document.createElement('div'),
  data: {
    title: 'Welcome!',
    fields: [
      {
        name: 'username',
        type: 'text',
        placeholder: "your name",
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
