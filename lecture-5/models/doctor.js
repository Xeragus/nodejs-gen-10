const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
  full_name: {
    type: String,
    required: ['Full Name is a required field']
  },
  dob: {
    type: String,
    required: ['Date of birth is a required field']
  },
  specialization: {
    type: String,
    required: ['Specialization is a required field']
  }
});

module.exports = mongoose.model('Doctor', doctorSchema);