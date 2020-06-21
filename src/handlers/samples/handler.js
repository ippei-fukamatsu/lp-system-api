'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({
    statusCode: 200,
    body: JSON.stringify({
      message: 'samples index.'
    }),
  });
});

module.exports = router;
