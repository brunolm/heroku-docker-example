import * as http from 'http';

module.exports = http.createServer(function (req, res) {
  res.end('This was started from docker-compose!');
}).listen(8080, () => console.log("NodeJS worker listening on port 8080"));
