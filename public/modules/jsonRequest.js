export   function jsonRequest(url, data) {
  const temp = new XMLHttpRequest();
  temp.open('POST', url, false);
  temp.setRequestHeader('Content-Type', 'application/json');
  temp.send(JSON.stringify(data));
  return temp;
}

export function getRequest(url) {
  const temp = new XMLHttpRequest();
  temp.open('GET', url, false);
  temp.send();
  return temp;
}

