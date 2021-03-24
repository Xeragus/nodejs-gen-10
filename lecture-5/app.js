const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./router');

app.use('/', router);

module.exports = app;