// Get dependencies
const express = require('express');
require('dotenv').config();
const path = require('path');
const http = require('http');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const passport = require('passport');
const session = require('express-session');

// connect MongoDB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const autoIncrement = require('mongoose-auto-increment');

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log('mongodb connect server');
});

const { DB_HOST, DB_PORT, DB_NAME } = process.env;
mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, { useMongoClient: true });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'dist')));

// Set api routes
const user = require('./server/router/user');
const subject = require('./server/router/subject');
const notice = require('./server/router/notice');

app.use('/api/user', user);
app.use('/api/subject', subject);
app.use('/api/notice', notice);


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));

const listen = require('socket.io');
const io = listen(server);

io.use((socket, next) => {
  sessionMiddleWare(socket.request, socket.request.res, next);
});

require('./server/lib/socket')(io);

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Server error!');
});
