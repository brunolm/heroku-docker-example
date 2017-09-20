import * as http from 'http';

console.log('is this docker?', process.env.IS_DOCKER);

module.exports = http.createServer(function (req, res) {
  res.end('hello world ' + process.env.IS_DOCKER);
}).listen(process.env.PORT || 3000, () => console.log(`NodeJS worker listening on port ${process.env.PORT}`));
