this.addEventListener('connect', e => {
  console.log(e);

  let port = e.ports[0];
  port.start();

  port.addEventListener('message', e => {
    console.log('Received: ', e.data);
  });
});
