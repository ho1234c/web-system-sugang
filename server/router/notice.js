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
    Notice.find((err, documents) => {
      if(err)
        return console.log(err);
      return res.send(documents);
    });
});
module.exports = router;
