import * as http from 'http';

module.exports = http.createServer(function (req, res) {
  res.end('hello world');
}).listen(process.env.PORT, () => console.log("NodeJS worker listening on port 8080"));
