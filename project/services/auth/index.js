const express = require('express');
const api = express();
const router = require('./router');
require('../../config/db');

api.use(express.json());

api.use('/api/v1/auth', router);

api.listen(3000, err => {
  if (err) {
    return console.log('Error happened while starting the auth service: ', err);
  }

  // TODO: Put port number to an env variable
  console.log('Auth service successfully started on port 3000...');
});
