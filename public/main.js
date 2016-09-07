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

if (typeof exports === "object") {
    exports.hello = hello;
    exports.plural = plural;
}

function plural(number, language) {
    const MAGIC_CONST = 10;
    let a = (parseInt(number));
    if (a) {
        let b = (a % MAGIC_CONST).toString();
        for (let key in language) {
            if ((language[key].indexOf(b) != -1) && (language[key][0](a)))
                return number + ' ' + language[key][language[key].length - 1];
        }
    }
    return number + ' ' + language.last[2];
}
