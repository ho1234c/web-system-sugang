// Get dependencies
const express = require('express');
// require('dotenv').config();
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

// const { DB_HOST, DB_PORT, DB_NAME } = process.env;
// const connect = mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, { useMongoClient: true });
const connect = mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
autoIncrement.initialize(connect);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'dist')));

// const connectMongo = require('connect-mongo');
// const MongoStore = connectMongo(session);
//
// const sessionMiddleWare = session({
//     secret: 'jongho',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       maxAge: 2000 * 60 * 60
//     },
//     store: new MongoStore({
//         mongooseConnection: mongoose.connection,
//         ttl: 14 * 24 * 60 * 60
//     })
// });
//
// app.use(sessionMiddleWare);

// passport
// const passportConfig = require('./server/lib/passport');
//
// passportConfig(app);

// Set api routes
const user = require('./server/router/user');
const subject = require('./server/router/subject');
const notice = require('./server/router/notice');

app.use('/api/user', user);
app.use('/api/subject', subject);
<<<<<<< HEAD
app.use('/api/notice', notice);
=======
app.use('/api/notice', notice)
>>>>>>> origin/ksy

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));

// const listen = require('socket.io');
// const io = listen(server);
//
// io.use((socket, next) => {
//   sessionMiddleWare(socket.request, socket.request.res, next);
// });
//
// require('./server/lib/socket')(io);
