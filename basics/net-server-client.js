// For the server
const net = require('net');

const connected = [];
const server = net.createServer();
server.listen({
  host: 'localhost',
  port: 8080
});

server.on('connection', (client) => {
  console.log('Client connected');
  client.write('Welcome to the server');
  connected.push(client);
});

setInterval(() => {
  const now = new Date().toISOString();
  connected.forEach(client => {
    client.write(now);
  });
}, 2000);

// for the clients
// const net = require('net');

// const client = new net.createConnection({
//   port: 8080
// });

// client.on('data', (data) => {
//   console.log(`Mesasge received from ${data}`);
// });
