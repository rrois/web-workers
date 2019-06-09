let messageReceived = null;

this.addEventListener('message', e => {
  messageReceived = e.data;
  console.log('Message received:', messageReceived);
});

setTimeout(() => {
  console.log('Message now:', messageReceived);
}, 1000);
