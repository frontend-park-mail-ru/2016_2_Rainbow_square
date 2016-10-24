import Block from "../block/block"

export  default  class Form extends Block {
  constructor(options = {data: {}}) {
    super('form');
    this.data = options.data;
    this.template = window.fest[options.data.template];
    this.render();
  }

  /**
   * Обновляем HTML
   */
  render() {
    this._updateHtml();
  }

  /**
   * Обновить html компонента
   */
  _updateHtml() {
    this._el.innerHTML = this.template(this.data);
  }
}