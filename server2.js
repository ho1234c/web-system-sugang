// 필요한 모듈들을 가져온다.
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
// POST 데이터 파싱 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// ng build 명령 실행시 생성되는 static 리소스 폴더 경로 및 이름 설정
app.use(express.static(path.join(__dirname, 'dist')));
//  라우터로 설정
const subject = require('./server/router/subject');
app.use('/api/subject',subject);
const notice = require('./server/router/notice');
app.use('/api/notice', notice);
// const user = require('./server/router/user');
// app.use('/api/user', user);
// 모든 경로에 대한 라우터 설정 및 반환 파일 경로 설정
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
// Port 설정
const port = process.env.PORT || '3000';
app.set('port', port);
// HTTP 서버 생성
const server = http.createServer(app);
// 설정된 포트로 서버가 요청 대기
server.listen(port, function () {
  console.log('Express running on localhost'+ port);
});


// mongoose
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  console.log('mongodb open_server');
});
const connect = mongoose.connect('mongodb://localhost/test',{ useMongoClient: true });
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(connect);
