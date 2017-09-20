import * as http from 'http';

module.exports = http.createServer(function (req, res) {
  res.end('This was started from docker-compose!');
}).listen(process.env.PORT, () => console.log(`NodeJS worker listening on port ${process.env.PORT}`));
