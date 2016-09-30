/* eslint no-unused-vars:
 [2, { "args": "all", "varsIgnorePattern": "_*", "argsIgnorePattern": "_*" }] */
/* global technolibs */

(function() {
  class Chat {

    /**
     * Конструктор класса Chat
     */
    constructor({data = {}, el}) {
      this.data = data;
      this.el = el;

      this.render();
    }

    render() {
      this.updateHtml1();
    }
    /*
     * Обновить данные компонента
     * @param {object} data - данные компонента
     */
    set(data) {
      this.data = data;

      return this;
    }

    // eslint считает, что должна быть такая табуляция, лол
    updateHtml1() {
      this.el.innerHTML = `
      <h3 id="jsTitle">Ты в чате, ${this.data.login}!</h3>
	  <div id="jsMessages" class="chat">
		<div class="cssload-wrap">
		   <div class="cssload-cssload-spinner"></div>
		</div>
	  </div>
	  <form class="js-chat-form">
	     <textarea required class="chat__input" name="message" cols="30" rows="10"></textarea>
		 <button name="name">
		     Отправить
		 </button>
		 </form>
	  `;
    }

    static filter(_str, _rules = ['КЕК']) {
      return '//TODO: реализовать filter';
    }

    createMessage(opts, isMy = false) {
      const message = document.createElement('div');
      const email = document.createElement('div');

      message.classList.add('chat__message');
      email.classList.add('chat__email');

      if (isMy) {
        message.classList.add('chat__message_my');
      } else {
        message.style.backgroundColor = `#${technolibs.colorHash(opts.email || '')}`;
      }
      message.innerHTML = opts.message;
      email.innerHTML = opts.email;
      message.appendChild(email);

      return message;
    }

    onChat(form) {
      const data = {
        time: Date.now(),
        message: form.elements.message.value,
        email: this.data.email
      };

      const result = technolibs.request('https://technofront-f958d.firebaseio.com/messages.json', data);
      form.reset();
    }

    renderMessages(items) {
      const messages = this.el.querySelector('#jsMessages');
      messages.innerHTML = '';

      items.forEach(item => {
        const message = this.createMessage(item, item.email === this.data.email);
        messages.appendChild(message);
      });
      messages.scrollTop = messages.scrollHeight;
    }

    subscribe() {
      technolibs.onMessage(data => {
        this.renderMessages(Object.keys(data).map(key => data[key]));
      });

      this.el.querySelector('.js-chat-form')
          .addEventListener('submit', event => {
            event.preventDefault();
            this.onChat(event.target);
          });
    }

    on(type, callback) {
      this.el.addEventListener(type, callback);
    }

    // TODO вернуть данные формы
    static getFormData() {
      return {
        key: 'value'
      };
    }

    install(el) {
      el.appendChild(this.el);
    }
  }

  // export
  window.Chat = Chat;
})();
