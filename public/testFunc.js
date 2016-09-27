
function plural(number, language) {
  const parsedNumber = parseInt(number, 10);
  if (parsedNumber) {
    for (const key in language) {
      if ({}.hasOwnProperty.call(language), key) {
        if ((language[key][0](parsedNumber))) {
          return `${number} ${language[key][language[key].length - 1]}`;
        }
      }
    }
  }
  return `${number} ${language.last[2]}`;
}

function hello(text) {
  return `Привет, ${text}`;
}

function filter(str = '') {
  let strC = str;
  let rules = window.rules;
  // очищаем слова от пробелов и прочего
  strC += '';
  rules = rules.map((rule) => {
    return {
      regex: RegExp(`\\b${rule}\\b`, 'g'),
      length: rule.length,
    };
  });

  rules.forEach((rule) => {
    strC = strC.replace(rule.regex, new Array(rule.length + 1).join('*'));
  });

  return strC;
}

if (typeof exports === 'object') {
  exports.hello = hello;
  exports.plural = plural;
  exports.filter = filter;
}
