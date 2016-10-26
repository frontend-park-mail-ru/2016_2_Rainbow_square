'use strict';

import Model from "../modules/model.js";

export default class User extends Model {

	constructor(attributes) {
		super(attributes);
	}

	get url() {
		return '${this.baseUrl}/user/';
	}

	get defaults() {
		return {
			name: 'Default name',
			email: 'anon@mail.ru',
      password: 'password'
    }
	}
}
