const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    max: 255
  },
  email: {
    type: String, 
    required: true,
    max: 255
  },
  password: {
    type: String,
    required: true,
    max: 1024
  },
  phone: {
    type: String,
    required: true,
    max: 255
  },
  address: {
    type: String,
    required: true,
    max: 255
  },
  country: {
    type: String,
    required: true,
    max: 150
  },
  btcaddress: {
    type: String,
    required: true,
    max: 255
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);