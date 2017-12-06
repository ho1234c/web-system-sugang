const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passwordHash = require('../lib/passwordHash');

// get subject by major
router.get('/fetch/:major', (req, res, next) => {

});

// create subject
router.post('/create', (req, res, next) => {

});

module.exports = router;
