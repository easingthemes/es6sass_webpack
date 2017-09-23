const http = require('http'),
  express = require('express'),
  { join } = require('path'),
  serverMiddlewares = require('./webpackServerMiddlewares');

const app = express();

serverMiddlewares(app);

app.use(express.static(join(__dirname, '..', 'public')));

const server = http.createServer(app);

server.listen(process.env.PORT || 3000, 'localhost', () => {
  console.log("Listening on %j", server.address());
});
