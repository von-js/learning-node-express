const http = require('http');

const server = http.createServer(
  (req, res) => {
    const result = res.writeHead(200, { 'Content-Type': 'text/html' });
    const name = req.url;
    console.log(result);
    res.end(`<h1> Hello ${process.env.USER} this is your address: ${name}!</h1>`);
  }
);

server.listen(8080, 'localhost');