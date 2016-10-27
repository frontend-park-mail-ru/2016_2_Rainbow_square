export default class Model {

  constructor(attributes) {
    this.attributes = attributes;
  }

  get defaults() {
    return {};
  }

  get url() {
    return '/';
  }

  send(method, data = {}) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(method, url, true);

      xhr.onReadyStateChange = function () {
        if (xhr.readyState === 4) {
          resolve(xhr.responseText);
        }
      }

      xhr.onerror= function () {
        reject();
      }

      xhr.send(JSON.stringify(data));
    });
  }


}