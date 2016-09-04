let assert = require('assert');
let hello = require('./public/main').hello;
let plural = require('./public/main').plural;

assert.equal(hello('Test'), 'Привет, Test');

let language_en = {}
language_en.first = ['1', 'click'];
language_en.last = ['all', 'clicks'];

let language_rus = {}
language_rus.first = ['1','21', '31', '41', 'клик'];
language_rus.second = ['2', '3', '4', '22', '23', '24', '32', '33', '34', '42', '43', '44', 'клика']
language_rus.last = ['all', 'кликов'];

assert.equal(hello('Test'), 'Привет, Test');

assert.equal(plural(0, language_en), '0 clicks');
assert.equal(plural(1, language_en), '1 click');
assert.equal(plural(2, language_en), '2 clicks');
assert.equal(plural(13, language_en), '13 clicks');
assert.equal(plural(15, language_en), '15 clicks');
assert.equal(plural(100, language_en), '100 clicks');

assert.equal(plural(0, language_rus), '0 кликов');
assert.equal(plural(1, language_rus), '1 клик');
assert.equal(plural(2, language_rus), '2 клика');
assert.equal(plural(13, language_rus), '13 кликов');
assert.equal(plural(15, language_rus), '15 кликов');
assert.equal(plural(100, language_rus), '100 кликов');