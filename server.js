// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Set about sesstion
const passport = require('passport');
const session = require('express-session');

// connect MongoDB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const autoIncrement = require('mongoose-auto-increment');

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log('mongodb connect');
});

const connect = mongoose.connect('mongodb://127.0.0.1:27017/websystem', { useMongoClient: true });
autoIncrement.initialize(connect);

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
const user = require('./server/router/user');
const subject = require('./server/router/subject');

app.use('/api/user', user);
app.use('/api/user', subject);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

app.io = require('socket.io');

app.io.on('connection', function (socket) {
  app.io.emit('broadcast', "Client is connected");
  console.log("Client is connected");

  socket.on('message', function (msg) {
    app.io.emit('broadcast', msg);
    console.log(msg);
  });

  socket.on('disconnect', function () {
    app.io.emit('broadcast', "Client is disconnected");
    console.log("Client is disconnected");
  })

});
