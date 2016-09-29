(function() {
  // import
  const Button = window.Button;
  class Form {
    /*
     * Конструктор класса Form
     */
    constructor(options = {data: {}}) {
      this.data = options.data;
      this.el = options.el;

      this.render();
    }

    render() {
      this.updateHtml();
      this.installControls();
    }

    /*
     * Вернуть поля формы
     * @return {string}
     */
    getFields() {
      const {fields = []} = this.data;

      return fields.map(field => {
        return `<input ${field.required ? 'required' : ''} placeholder="${field.placeholder}" type="${field.type}" name="${field.name}">`;
      }).join(' ');
    }

    /**
     * Обновить html компонента
     */
    updateHtml() {
      this.el.innerHTML = `
                <form>
					<h1>${this.data.title}</h1>
					<div>
						${this.getFields()}
					</div>
					<div class="js-controls">
					</div>
				<form>
			`;
    }

    /*
     * Вставить управляющие элементы в форму
     */
    installControls() {
      const {controls = []} = this.data;

      controls.forEach(data => {
        const control = new Button({text: data.text, attrs: data.attrs}).render();
        this.el.querySelector('.js-controls').appendChild(control.el);
      });
    }

    /*
     * Подписка на событие
     * @param {string} type - имя события
     * @param {function} callback - коллбек
     */
    on(type, callback) {
      this.el.addEventListener(type, callback);
    }

    /*
     * Взять данные формы
     * @return {object}
     */
    getFormData() {
      const form = this.el.querySelector('form');
      const elements = form.elements;
      const fields = {};

      Object.keys(elements).forEach(element => {
        const node = elements[element];

        if (!node.name || node.tagName.toLowerCase() !== 'input') {
          return;
        }

        fields[name] = node.value;
      });

      return fields;
    }

  }

  // export
  window.Form = Form;
})();
