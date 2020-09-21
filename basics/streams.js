const fs = require('fs');
const http = require('http');

const server = http.createServer(
  (req, res) => {
    const file = fs.createReadStream('./index.html');
    file.pipe(res);

});

server.listen(8080, 'localhost');