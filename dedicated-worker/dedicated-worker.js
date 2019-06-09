importScripts('helper.js');
console.log('Libraries loaded!');

let messageReceived = null;

this.addEventListener('message', e => {
  messageReceived = e.data;
  console.log('Message received:', messageReceived);
  this.close();
}).bind(this);

setTimeout(() => {
  console.log('Message now:', messageReceived);
}, 1000);
