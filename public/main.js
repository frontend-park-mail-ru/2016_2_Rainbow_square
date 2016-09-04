'use strict';
/**
* @see http://artsiom.mezin.eu/technofront/
*/
function onSubmit (form) {
	let data = {
		user: form.elements['user'].value,
		email: form.elements['email'].value
	};

	let result = request('/users', data);

	if (result === '100') {
		form.hidden = true;
		window.helloWorld.innerHTML = hello(data.user); 
	}

	console.log(data, result);
}

function hello (text) {
	return 'Привет, ' + text;
}

if(typeof exports === "object") {} {
	exports.hello = hello;
	exports.plural = plural;
}

function plural(text1, language) {
	let a = (parseInt(text1) % 50).toString();
	if(a != undefined) {
		for(let key in language) {
			if(language[key].indexOf(a) != -1) return text1 + ' ' + language[key][language[key].length - 1];
		}
	}
	return text1 + ' ' + language.last[1];
}
