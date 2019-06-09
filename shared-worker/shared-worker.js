let ports = [],
  i = 0;

this.addEventListener('connect', e => {
  console.log(e);

  let port = e.ports[0];
  ports.push(port);

  port.onmessage = (e) => {
    console.log('Received message: ' + e);
    ports.forEach( p => p.postMessage('Sending message'));
  };

});
