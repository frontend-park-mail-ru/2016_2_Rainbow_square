'use strict';

import Model from "../modules/model.js";

export default class Session extends Model {

	constructor(attributes) {
		super(attributes);
	}

	get url() {
		return '${this.baseUrl}/session';
	}

  save(login, password) {
    return this.send('POST', { 'username': login, 'password': password })
      .then(attrs => {
        this.attributes = { 'id': this.attributes.id };
      });
  }

  fetch() {
    this.attributes.id = this.attributes.email;
    super.fetch();
  }

}
