var express = require('express');
var router = express.Router();
const carsController = require('../controllers/cars')

router
      .get('/', carsController.fetch)
      .post('/cars', carsController.create)

module.exports = router;
