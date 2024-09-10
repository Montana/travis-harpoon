let http = require('http');
let axios = require('axios');

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

    axios.get('http://localhost:3000')
      .then(response => {
        console.log('Axios GET request response:', response.data);
      })
      .catch(error => {
        console.error('Error making Axios GET request:', error);
      });

  })
  .catch((error) => {
    console.error('Error starting server:', error);
  });
