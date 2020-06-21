'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const samples = require('./samples/handler')

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/samples', samples);

exports.handler = require('express-on-serverless')(app);

// ローカル開発用
if (process.env.NODE_ENV === 'dev') {
  app.listen(3000,  () => {
    console.log("Node.js is listening to PORT: 3000");
  });
}
