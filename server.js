let http = require('http');

let server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

let port = 3000;

function startServer() {
  return new Promise((resolve, reject) => {
    server.listen(port, (err) => {
      if (err) {
        reject(err); 
      } else {
        resolve(`Server running at http://localhost:${port}/`); 
      }
    });
  });
}

startServer()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error('Error starting server:', error);
  });
