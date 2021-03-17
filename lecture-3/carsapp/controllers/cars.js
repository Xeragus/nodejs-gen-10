const mongoose = require('mongoose')
const Car = require('../models/car')

module.exports = {
  // same as below method - just written with then catch syntax
  getCarsThenCatch: (req, res) => {
    Car.find()
       .then(cars => {
        res.send({
          message: 'A list of all cars in the database',
          cars: cars
        })
       })
       .catch(err => {
        res.send({
          message: `Error: ${err.message}`
        })
       })
  },
  fetch: async (req, res) => {
    try {
      const cars = await Car.find()
      
      res.send({
        message: 'A list of all cars in the database',
        cars: cars
      })
    } catch (err) {
      res.send({
        message: `Error: ${err.message}`
      })
    }
  },
  create: async (req, res) => {
    try {
      const car = new Car({ ...req.body, _id: new mongoose.Types.ObjectId() });
      await car.save();

      res.send({
        message: 'New car successfully created',
        car: req.body
      });
    } catch (err) {
      res.send({
        message: `Error: ${err.message}`
      });
    }
  }
}