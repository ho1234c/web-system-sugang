const express = require('express');
const router = express.Router();
const Notice = require('../models/Notice');

router.post('/create', (req, res, next) => {
  const notice = new Notice({
    title: req.body.title,
    body: req.body.body
  });

  notice.save(err => {
    if(err) {
      return next(err);
    }
    res.send('success');
  })
});

router.get('/fetch', (req, res, next) => {
    Notice.find({}, (err, documents) => {
      if(err) {
        return next(err);
      }
      res.json(documents);
    });
});

module.exports = router;
