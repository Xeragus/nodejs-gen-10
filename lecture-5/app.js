const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./router');

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/medicaldb', {
  useNewUrlParser: true, useUnifiedTopology: true
});

app.use('/', router);

module.exports = app;