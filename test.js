let assert = require('assert');
let hello = require('./public/main').hello;
let plural = require('./public/main').plural;
let filter = require('./public/main').filter;

assert.equal(hello('Test'), 'Привет, Test');
const MAGIC_CONST = 10;
let language_en = {};
language_en.first = [function notException(number) {
    if (language_en.first.includes(number))
        return true;
    else return false;
}, 1, 'click'];
language_en.last = [function notException(number) {
    return true;
}, 'all', 'clicks'];

let language_rus = {};
language_rus.first = [function notException(number) {
    if (number % 100 == 11 || !language_rus.first.includes(number % MAGIC_CONST)) return false;
    else return true;
}, 1, 'клик'];
language_rus.second = [function notException(number) {
    if (number % 100 == 12 || number % 100 == 13 || number % 100 == 14
        || !language_rus.second.includes(number % MAGIC_CONST)) return false;
    else
        return true;

}, 2, 3, 4, 'клика'];
language_rus.last = [function notException() {
    return true;
}, 'all', 'кликов'];


let language_irish_gaelic = {};
//гугл-переводчик считает, что немного другие правила плюрации
language_irish_gaelic.first = [function notException(number) {
    if (language_irish_gaelic.first.includes(number))
        return true;
    else return false;
}, 1, 'click'];
language_irish_gaelic.second = [function notException(number) {
    if (language_irish_gaelic.second.includes(number)) return true;
    else return false;
}, 2, 'cad a tharlaíonn'];
language_irish_gaelic.third = [function notException(number) {
    if (language_irish_gaelic.third.includes(number)) return true;
    else return false;
}, 3, 4, 5, 6, 'cad a tharlaíonn nuair'];
language_irish_gaelic.fourth = [function notException(number) {
    if (language_irish_gaelic.fourth.includes(number)) return true;
    else return false;
}, 7, 8, 9, 10, 'cad a tharlaíonn2'];
language_irish_gaelic.last = [function notException(number) {
    return true;
}, 'all', 'cad a tharlaíonn nuair2'];

global.window = {
    rules: ['lol', 'lemon']
}
//тесты по по плюрации

assert.equal(plural(0, language_en), '0 clicks');
assert.equal(plural(1, language_en), '1 click');
assert.equal(plural(2, language_en), '2 clicks');
assert.equal(plural(13, language_en), '13 clicks');
assert.equal(plural(15, language_en), '15 clicks');
assert.equal(plural(100, language_en), '100 clicks');

assert.equal(plural(0, language_rus), '0 кликов');
assert.equal(plural(1, language_rus), '1 клик');
assert.equal(plural(2, language_rus), '2 клика');
assert.equal(plural(111, language_rus), '111 кликов');
assert.equal(plural(15, language_rus), '15 кликов');
assert.equal(plural(100, language_rus), '100 кликов');

assert.equal(plural(0, language_irish_gaelic), '0 cad a tharlaíonn nuair2');
assert.equal(plural(1, language_irish_gaelic), '1 click');
assert.equal(plural(2, language_irish_gaelic), '2 cad a tharlaíonn');
assert.equal(plural(111, language_irish_gaelic), '111 cad a tharlaíonn nuair2');

//тесты по функции фильтрации матfffff
assert.equal(filter('lol'), '***');
assert.equal(filter('lemon'), '*****');
assert.equal(filter('lol df'), '*** df');
assert.equal(filter('lemondf'), 'lemondf');
assert.equal(undefined, undefined);