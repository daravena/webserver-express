const http = require('http');

http.createServer((rer, res) => {
  res.writeHead(200, { 'Content-type': 'application/json' });

  let salida = {
    nombre: 'daniel'
  }
  res.write(JSON.stringify(salida));
  res.end()
})
  .listen(8080);

console.log('escuchando por puerto 8080')