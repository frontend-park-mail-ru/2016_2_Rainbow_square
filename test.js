const assert = require('assert');
const hello = require('./public/testFunc').hello;
const plural = require('./public/testFunc').plural;
const filter = require('./public/testFunc').filter;

assert.equal(hello('Test'), 'Привет, Test');
const MAGIC_CONST = 10;
const languageEn = {};
languageEn.first = [function notException(number) {
  return languageEn.first.includes(number);
}, 1, 'click'];
languageEn.last = [function notException() {
  return true;
}, 'all', 'clicks'];

const languageRus = {};
languageRus.first = [function notException(number) {
  if (number % 100 === 11 || !languageRus.first.includes(number % MAGIC_CONST)) return false;
  return true;
}, 1, 'клик'];
languageRus.second = [function notException(number) {
  if (number % 100 === 12 || number % 100 === 13 || number % 100 === 14 ||
         !languageRus.second.includes(number % MAGIC_CONST)) return false;
  return true;
}, 2, 3, 4, 'клика'];
languageRus.last = [function notException() {
  return true;
}, 'all', 'кликов'];

const languageIrishGaelic = {};
// гугл-переводчик считает, что немного другие правила плюрации
languageIrishGaelic.first = [function notException(number) {
  return languageIrishGaelic.first.includes(number);
}, 1, 'click'];
languageIrishGaelic.second = [function notException(number) {
  if (languageIrishGaelic.second.includes(number)) return true;
  return false;
}, 2, 'cad a tharlaíonn'];
languageIrishGaelic.third = [function notException(number) {
  if (languageIrishGaelic.third.includes(number)) return true;
  return false;
}, 3, 4, 5, 6, 'cad a tharlaíonn nuair'];
languageIrishGaelic.fourth = [function notException(number) {
  if (languageIrishGaelic.fourth.includes(number)) return true;
  return false;
}, 7, 8, 9, 10, 'cad a tharlaíonn2'];
languageIrishGaelic.last = [function notException() {
  return true;
}, 'all', 'cad a tharlaíonn nuair2'];

global.window = {
  rules: ['lol', 'lemon']
};
// тесты по по плюрации

assert.equal(plural(0, languageEn), '0 clicks');
assert.equal(plural(1, languageEn), '1 click');
assert.equal(plural(2, languageEn), '2 clicks');
assert.equal(plural(13, languageEn), '13 clicks');
assert.equal(plural(15, languageEn), '15 clicks');
assert.equal(plural(100, languageEn), '100 clicks');

assert.equal(plural(0, languageRus), '0 кликов');
assert.equal(plural(1, languageRus), '1 клик');
assert.equal(plural(2, languageRus), '2 клика');
assert.equal(plural(111, languageRus), '111 кликов');
assert.equal(plural(15, languageRus), '15 кликов');
assert.equal(plural(100, languageRus), '100 кликов');

assert.equal(plural(0, languageIrishGaelic), '0 cad a tharlaíonn nuair2');
assert.equal(plural(1, languageIrishGaelic), '1 click');
assert.equal(plural(2, languageIrishGaelic), '2 cad a tharlaíonn');
assert.equal(plural(111, languageIrishGaelic), '111 cad a tharlaíonn nuair2');

// тесты по функции фильтрации мата
assert.equal(filter('lol'), '***');
assert.equal(filter('lemon'), '*****');
assert.equal(filter('lol df'), '*** df');
assert.equal(filter('lemondf'), 'lemondf');
assert.equal(undefined, undefined);

