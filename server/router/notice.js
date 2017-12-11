const express = require('express');
const router = express.Router();
// const User = require('../models/User');
// const passwordHash = require('../lib/passwordHash');
const Notice = require('../models/Notice');


// var temp1 = {
//   major: "소프트웨어",
//   title: "공지사항 111",
//   body: "공지내용 111"
// }
// var temp2 = {
//   major: "소프트웨어",
//   title: "공지사항 2",
//   body: "공지내용 2"
// }
// var temp3 = {
//   major: "소프트웨어",
//   title: "공지사항 3",
//   body: "공지내용 3"
// }
// Notice.create(temp1, function(err, result){
//   if(err) console.log(err);
// })
// Notice.create(temp2, function(err, result){
//   if(err) console.log(err);
// })
// Notice.create(temp3, function(err, result){
//   if(err) console.log(err);
// })

router.get('/getAllNotice', function(req,res) {
  console.log("Notice"+ req.query.request);
  Notice.find(function(err,notices){
    if(err) res.send(err);
    res.send(notices);
  })
})
module.exports = router;
