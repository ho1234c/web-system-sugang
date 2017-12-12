const express = require('express');
const router = express.Router();
const Notice = require('../models/Notice');

router.post('/createNotice', (req, res, next) => {
  const Notice = new Notice({
    title: req.body.title,
    body: req.body.content
  });
  notice.save(err => {
    if(err) console.log(err);
    res.send('success');
  })
});

router.get('/getAllNotice', (req, res, next) => {
  console.log('tt');
    Notice.find((err, documents) => {
      if(err)
        return console.log(err);
      return res.send(documents);
    });
});

// const User = require('../models/User');
// const passwordHash = require('../lib/passwordHash');


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
