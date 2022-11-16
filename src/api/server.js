require('dotenv').config();
const app = require('./app');
const debug = require('debug')('buzz-off:server');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');
const server = http.createServer(app);

app.set('port', port);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(portValue) {
  const port = parseInt(portValue);
  let result = false;

  if (isNaN(port)) {
    result = portValue;
  } else if (port >= 0) {
    result = port;
  }
  return result;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
